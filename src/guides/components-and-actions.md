# Components and Actions

Let's start making our `conference-speakers` component more interactive.

```js
// app/src/ui/components/conference-speakers/component.js
import Component, { tracked } from "@glimmer/component";

export default class ConferenceSpeakers extends Component {
  @tracked current = 0;
  speakers = ['Tom', 'Yehuda', 'Ed'];

  @tracked('current')
  get currentlySpeaking() {
    return this.speakers[this.current];
  }

  @tracked('current')
  get moreSpeakers() {
    return (this.speakers.length - 1) > this.current;
  }

  next() {
    this.current = this.current + 1;
  }
}
```

```hbs
{{!-- app/src/ui/components/conference-speakers/template.hbs --}}
<div>
  <p>Speaking: {{currentlySpeaking}}</p>
  <ul>
    {{#each speakers key="@index" as |speaker|}}
      <li>{{speaker}}</li>
    {{/each}}
  </ul>

  {{#if moreSpeakers}}
    <button onclick={{action next}}>Next</button>
  {{else}}
    <p>All finished!</p>  
  {{/if}}
</div>
```

In the template above, we add the use of both the `{{if}}`/`{{else}}` and `{{action}}` helpers and reference several new internal component properties that we've added.

We're also using an `{{action}}` helper to call our `next()` method/event handler to advance our current location in the speaker array (also known as our component's "state")

But there are two "interesting" syntax wrinkles in the component that may be unfamiliar.  We use the ES2015 `get` in front of our `currentlySpeaking()` method to define another property for our template (`{{currentlySpeaking}}`).

And we use `@tracked` notations in two different ways. First, we are adding it to our `current` property and then we use it again differently above `currentlySpeaking` and `moreSpeakers` (`@tracked('current')`). What's going on there?

These "annotations", known as decorators, are a relatively new feature of Javascript.  In Glimmer they are used to track which of our properties change (so that Glimmer will watch for changes to those properties).

Because Glimmer watches for changes to `current` and then knows which values we want updated if it changes (due to our `@tracked('current')` annotation), it can quickly and efficiently re-compute the values for `currentlySpeaking` and `moreSpeakers` and update those locations in our template.

## Lifecycle Hooks

Glimmer components also provide "lifecycle" hooks that allow us to respond to changes to a component, such as when it gets created, rendered, updated or destroyed. To add a lifecycle hook to a component, implement the hook as a method on your component subclass.

For example, to be notified when Glimmer has rendered your component so you can attach a legacy jQuery plugin, implement the `didInsertElement()` method:

```js
import Component from '@glimmer/component';

export default class extends Component {
  didInsertElement() {
    $(this.element).pickadate();
  }
}
```
