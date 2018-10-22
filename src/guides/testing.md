Components can be tested with a rendering test. Render tests are
automatically generated when you generate a component with `ember g glimmer-component MyComponent`

The `module` from QUnit will scope your tests into groups of tests which can
be configured and run independently. Make sure to call the
`setupRenderingTest` function together with the `hooks` parameter first in
your new module. This will do the necessary setup for testing your component
for you, including setting up a way to access the rendered DOM of your
component later on in the test, and cleaning up once your tests in this
module are finished.

```javascript
import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest, render } from '@glimmer/test-helpers';

let { module, test } = QUnit;

module('Component: MyComponent', function(hooks) {
  setupRenderingTest(hooks);
  test('it renders', async function(assert) {
    await this.render(hbs`<MyComponent />`);
    assert.ok(this.containerElement.querySelector('div'));
  });
});
```

Also note how the callback function passed to the test helper is marked with
the keyword `async`. The [ECMAScript 2017 feature async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
allows us to write asynchronous code in an easy-to-read, seemingly
synchronous manner.

Each test can use the `render()` function imported from the
`@glimmer/test-helpers` package to create a new instance of the component by
declaring the component in template syntax, as we would in our application.
Also notice, the keyword `await` in front of the call to `render`. It allows
the tests marked as `async` to wait for any asynchronous behaviour to
complete before executing the rest of the code below.

Once `render` has been called with our inline precompiled template the test
context's `this` will have access to `containerElement` which is the section
of DOM created by our component: `MyComponent`.

### Passing Data To Component's @ (at) arguments

Glimmer's rendering tests allow complex data to be passed to the inline
precompiled template by using the test context's `this`

For example, given this test:

```javascript
import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest, render } from '@glimmer/test-helpers';

let { module, test } = QUnit;

module('Component: MyComponent', function(hooks) {
  setupRenderingTest(hooks);
  test('can pass data through', async function(assert) {
    this.foo = 'bar';
    await render(hbs`<MyComponent><p>{{this.foo}}</p></MyComponent>`);

    assert.dom('p').text('bar');
  });
```

Anything set on the test context's `this` will be made available to the
surrounding context of our component at point of invocation. This makes it
possible for us to send `@` arguments through to our component's invocation.

In this case the data we are sending is a string, but this mechanism allows
for any data to be passed in this fashion. This feature was added in
`@glimmer/test-helpers` version `0.31.0`, if you have trouble passing data to
Components under test please bump this dependency