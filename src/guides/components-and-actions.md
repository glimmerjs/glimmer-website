# Components and Actions

Let's start making our `ConferenceSpeakers` component more interactive.

```js
// my-app/src/ui/components/ConferenceSpeakers/component.ts
import Component, { tracked } from "@glimmer/component";

export default class ConferenceSpeakers extends Component {
  @tracked current = 0;
  speakers = ['Tom', 'Yehuda', 'Ed'];

  @tracked
  get currentlySpeaking() {
    return this.speakers[this.current];
  }

  @tracked
  get moreSpeakers() {
    return (this.speakers.length - 1) > this.current;
  }

  next() {
    this.current = this.current + 1;
  }
}
```

```hbs
{{!-- my-app/src/ui/components/ConferenceSpeakers/template.hbs --}}
<div>
  <p>Speaking: {{this.currentlySpeaking}}</p>
  <ul>
    {{#each this.speakers key="@index" as |speaker|}}
      <li>{{speaker}}</li>
    {{/each}}
  </ul>

  {{#if this.moreSpeakers}}
    <button onclick={{action next}}>Next</button>
  {{else}}
    <p>All finished!</p>  
  {{/if}}
</div>
```

In the template above, we add the use of both the `{{if}}`/`{{else}}` and `{{action}}` helpers and reference several new internal component properties that we've added.

We're using the `{{action}}` helper to call our `next()` method/event handler to advance our current location in the speaker array (also known as our component's "state")

But there are two "interesting" syntax wrinkles in the component that may be unfamiliar.  We use the ES2015 `get` in front of our `currentlySpeaking()` method to define another property for our template (`{{this.currentlySpeaking}}`).

And we use `@tracked` notations in two different ways. First, we are adding it to our `current` property to signify that this property may change and then we use it above `currentlySpeaking` and `moreSpeakers` to signify that these getters will be recomputed if any of the dependent keys like `current` changes.

These "annotations", known as decorators, are a relatively new feature of Javascript.  In Glimmer they are used to track which of our properties change (so that Glimmer will watch for changes to those properties).

Using `@tracked` annotations signify that the property can change. Glimmer will auto track any dependent keys for the tracked getters. The auto tracking feature was added in version 0.11.1. If you are using an older version of Glimmer, you should use `@tracked('current')` for `currentlySpeaking` and `moreSpeakers` to specific the dependent keys.

Because Glimmer watches for changes to `current` and then knows which values we want updated if it changes (due to our `@tracked` annotation and auto-tracking of dependent keys for getters), it can quickly and efficiently re-compute the values for `currentlySpeaking` and `moreSpeakers` and update those locations in our template.

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
