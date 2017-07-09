# Change Tracking with Tracked Properties

In this guide, we'll take an in-depth look at how Glimmer keeps track of changes you make to
your components, and ensures they always stay up-to-date in the DOM.

The fundamental way Glimmer detects changes is through _tracked properties_.
Tracked properties are just like normal properties on your component, but with a
special annotation that lets Glimmer know when you've changed it.

Let's take a look at a simple component that welcomes our user. First, we'll
write it _without_ tracked properties.

```ts
import Component from '@glimmer/component';

export default class extends Component {
  person = {
    firstName: "Tom",
    lastName: "Dale"
  };
}
```

```hbs
<div>
  Hello, {{person.firstName}} {{person.lastName}}!
</div>
```

This will render the following output:

```html
<div>
  Hello, Tom Dale!
</div>
```

As you can see, Glimmer has rendered the person's first and last name. Because the data we want to render is static and doesn't change, we did not have to use a tracked property. That leads us to the first rule of tracked properties.

**Rule #1**: Static, immutable data doesn't require you to do anything special. If the data you're rendering is available when the component is created and doesn't change, it does not need to be tracked.

Let's say that we want to update our component to fetch data about the person over the network, instead of hardcoding it. We'll use `fetch` to grab some JSON and render it:

```ts
import Component from '@glimmer/component';

export default class extends Component {
  person: any;

  constructor(options) {
    super(options);
    this.loadPerson();
  }

  async loadPerson() {
    let request = await fetch('https://api.example.com/person.json');
    let json = await request.json();
    this.person = json.person;
  }
}
```

```hbs
<div>
  Hello, {{person.firstName}} {{person.lastName}}!
</div>
```

Unlike our first version, this component will throw an exception when we set the `person` property:

```markdown
Uncaught Error: The 'person' property on the person-viewer component was changed after it had been rendered. Properties that change after being rendered must be tracked. Use the @tracked decorator to mark this as a tracked property.
```

Why did this happen?

To optimize initial rendering performance, component properties are **immutable
by default**. Glimmer skips setting up expensive change tracking on properties
that might never change.

If a property can change after a component is rendered, you must tell Glimmer
that it should do additional bookkeeping to detect property changes and
automatically update the DOM.

We call these properties _tracked properties_. Instead of clunky methods like
`set()` or `setState()`, just use the `@tracked`
[decorator](https://github.com/tc39/proposal-decorators) to hint to the Glimmer
VM that a property can change.

**Rule #2**: If you change a component's property after it has rendered (such as
when data is fetched asynchronously), that property must be marked with the
`@tracked` decorator.

We can get our earlier example working again by indicating that the `person`
property is tracked:

```ts
import Component, { tracked } from '@glimmer/component';

export default class extends Component {
  @tracked
  person: any;

  constructor(options) {
    super(options);
    this.loadPerson();
  }

  loadPerson() {
    fetch('https://api.example.com/person.json')
      .then(request => request.json())
      .then(({ person }) => this.person = person);
  }
}
```

Notice that we are now also importing `tracked` from the `@glimmer/component` package.

Now our component updates as soon as the JSON request comes back, without any
errors. As you can see, because we made `person` a tracked property, Glimmer
knows to update the component when you set it using normal JavaScript syntax.

## The Immutable Pattern

To write maintainable, understandable components, we recommend that you embrace the
Immutable Pattern:

1. Save component state as an "atom" in a tracked property on the component.
2. To change state, replace the root "atom" with a new copy of the state.

This approach helps you make a component's state changes predictable: you know
that a component can only be updated when that root tracked property changes.
JavaScript destructuring syntax can make this quite elegant:

```ts
import Component, { tracked } from "@glimmer/component";

export default class extends Component {
  @tracked state = {
    firstName: "Lady",
    lastName: "Zahra"
  }

  setUserFirstName(firstName) {
    this.state = {
      ...this.state,
      firstName
    }
  }
}
```

By adopting the Immutable Pattern, your component state will be clear and deterministic,
reducing bugs and helping you ship features faster.

## Why Tracked Properties?

To understand the performance benefits of Glimmer's tracked property
architecture, it's important to understand the current state of the art of most
other JavaScript component libraries.

Broadly speaking, most component libraries have taken one of two approaches:

1. Fine-grained property observation, like Ember 1.x.
2. Virtual DOM diffing, like React.

Systems that rely on property observation trade reduced initial render
performance for improved updating speed. That's because they must install
observers on every property that gets rendered into the DOM, which takes time.
But if a property changes, updates to the DOM are very targeted and fast.

However, web users expect pages to render near instantly. Setting up observers
adds a lot of overhead, which slows down initial render. Virtual DOM-based libraries
like React have become very popular, because they prioritize raw render speed by
keeping change-tracking bookkeeping to a minimum.

The tradeoff is that updates require re-evaluating the component tree to figure
out how the DOM needs to be mutated. Essentially, that means doing a full render
pass on a component and all of its children every time a property changes.

While constructing virtual DOM is fast and applying diff updates can be
optimized, it's far from instanteous, particularly as the size of your
application grows. [As your virtual DOM-based app grows, you will have to do
more work to make sure it stays
performant.](https://marmelab.com/blog/2017/02/06/react-is-slow-react-is-fast.html).

The best weapon for optimizing a virtual DOM-based library is something like
React's `shouldComponentUpdate` hook, which lets you quickly tell React that a
component hasn't changed and thus you can bypass constructing the virtual DOM
tree entirely.

Glimmer's key insight is that the rendering engine's primitive should be the
_value_, not the component. Because of this architecture, Glimmer in essence
constructs a component's optimized `shouldComponentUpdate` hook automatically,
without any effort on your part.

How does this work? Internally, Glimmer maintains a monotonically increasing
global revision counter. As it renders each property in a template, if that
property is marked as tracked, it notes the current revision count.

When you set a tracked property, Glimmer does two things under the hood:

1. It increments the global revision counter and sets the property's revision to
   the new value.
2. It tells Glimmer to revalidate the render tree.

Revalidating the render tree means that Glimmer walks through every tracked property it had
seen on the previous render and checks to see if it had been updated.

This might seem like a very bad, slow idea! However, remember that Glimmer uses
integers to track changes. Modern JavaScript VMs like V8 contain optimized fast
paths for integer comparisons, of which a modern CPU can do millions without
breaking a sweat. The number of comparisons needed is bounded by how many
tracked properties you have in DOM, so this scan of the render tree is
surprisingly fast.

So how does Glimmer accomplish the automatic `shouldComponentUpdate()`? Because
every input into a component is either immutable or a tracked property, it just
looks at the revision counter of each input value. If none of them are greater
than the last render, the entire component can be bypassed.

## Tracking Component Arguments

A component can also track arguments passed in from a parent.

```ts
import Component, { tracked } from '@glimmer/component';

export default class MultiplyByTwo extends Component {
  @tracked('args')
  get multiplied() {
    return this.args.number * 2;
  }
}
```

```hbs
<!-- my-parent/template.hbs -->
<multiply-by-two @number={{myNumber}} />
```

```hbs
<!-- my-parent/template.hbs -->
{{multiplied}}
```

Whenever the parent's `myNumber` property changes, `multiply-by-two`'s `multiplied` computed property will also change.
