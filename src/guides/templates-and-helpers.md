# Templates and Helpers

Now that we've setup a few components, let's discuss how our templates work in more detail.

## Data for Templates

Components have two different kinds of data, or state, that can be displayed in templates:

- Arguments
- Properties

Arguments are data that we pass in to a component from its parent component. For example, if we have a `ConferenceSpeaker` component, we can pass it a `name` and `status` to use:

```hbs
<ConferenceSpeaker @name="Tom" @status="Speaking" />
```

Inside our `ConferenceSpeaker` template, we can access the `@name` and `@status` arguments that we've been given:

```hbs
{{@name}} is {{@status}}
```

Those arguments are also available inside our components:

```js
console.log(this.args.name); // prints "Tom"
```

Properties, on the other hand, are internal to the component and declared in the class. We can use properties to store data that we want to show in the template, or pass to another component as an argument.

```js
import Component from '@glimmer/component';

export default class ConferenceSpeaker extends Component {
  user = {
    name: 'Robbie'
  };
}
```

In the above example, we've defined a component with a `user` property that contains an object with its own `name` property.

We can render that property in our template:

```hbs
Hello, {{user.name}}!
```

We can also take that property and pass it as an argument to the conference-speaker component we defined before:

```hbs
<ConferenceSpeaker @name={{user.name}} />
```

## Arguments vs. Properties

Remember, arguments are data that was given to your component by its parent component, and properties are data your component has defined for itself.

You can tell the difference between arguments and properties in templates because arguments always start with an @ sign (think "A is for arguments"):

```hbs
{{@firstName}}
```

We know that `@firstName` came from the parent component, not the current component, because it starts with @ and is therefore an argument.

On the other hand, if we see:

```hbs
{{name}}
```

We know that name is a property on the component. If we want to know where the data is coming from, we can go look at our component class to find out.

Inside the component itself, arguments always show up inside the component's `args` property. For example, if `{{@firstName}}` is Tom in the template, inside the component `this.args.firstName` would also be Tom.

## A Simple Loop

As mentioned earlier, Glimmer uses [Handlebars](http://handlebarsjs.com) as its template language. In addition to simple property references as shown above, it also allows us to setup loops, conditionals and event handlers.

Let's start with a simple loop over an array:

```js
import Component, { tracked } from "@glimmer/component";

export default class ConferenceSpeakers extends Component {
  speakers = ['Tom', 'Yehuda', 'Ed'];
}
```

```hbs
<ul>
  {{#each speakers key="@index" as |speaker|}}
    <li>{{speaker}}</li>
  {{/each}}
</ul>
```

Using the `{{each}}` helper, we loop over our speakers array and then make the current value available as `speaker`. In the Glimmer VM, an array needs to be keyed on a unique value of some kind (in this case the array `@index`) so that the VM properly tracks value updates.

### Looping with an index

Sometimes you might want to know the index of the current item being looped.

Thankfully, the `{{each}}` helper already comes prepared and it provides you with the index as the second block argument.
Note that the index will start at zero.

For an example, let's make each speaker announce their index:

```hbs
<ul>
  {{#each speakers key="@index" as |speaker index|}}
    <li>Hi, I'm speaker {{speaker}}, and my index is {{index}}.</li>
  {{/each}}
</ul>
```

Which turns into:

```hbs
<ul>
  <li>Hi, I'm speaker Tom, and my index is 0.</li>
  <li>Hi, I'm speaker Yehuda, and my index is 1.</li>
  <li>Hi, I'm speaker Ed, and my index is 2.</li>
</ul>
```

These types of simple templates are quite handy, but they become
far more powerful once we add event handling and conditionals. Let's keep going.

## Custom Helpers
Customer Helpers can be added to transform raw values you would like to display in your template to something more suitable for your users.
To demonstrate, the following command will create a new date format helper:
```sh
$ ember g glimmer-helper format-date
installing glimmer-helper
  create src/ui/components/format-date/helper.ts
installing glimmer-helper-test
  create src/ui/components/format-date/helper-test.ts
```

This will create the following structure:
```sh
my-app
│
... snipped ...

└── src
    └── ui
        ├── components
        |   ... snipped ...
        │   ├── format-date
        │   │   ├── helper.ts
        │   │   └── helper-test.ts
        ├── styles
        │   └── app.css
        └── index.html
```

The generated content of the `helper.ts` is simply:
```js
export default function formatDate(params) {
}
```
Note: `params` is an array based on the parameters passed into the helper.  For example, in our example if we want our helper to format a Javascript Date
object for display and optionally show the time, we might do something like this:
```js
export default function dateFormat([date, showTime]: [Date, boolean]) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];

  const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]}
    ${date.getFullYear()}`;
  if (!showTime) {
    return formattedDate;
  }

  return `${formattedDate} - ${date.getHours()}:${date.getMinutes()}`;
}
```

We can then use this helper in our template as per the example below:
```hbs
The time now is {{format-date now true}}
// outputs: The time now is 3 December 2017 - 14:30
```

Note that the helper is always dasherised like the folder name, and not pascal case like the helper's function name.
