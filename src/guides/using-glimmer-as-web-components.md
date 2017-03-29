# Using Glimmer as Web Components

In addition to using Glimmer for a widget on one section on a page, you can also use Glimmer components as web components. Let's do another new app setup. Instead of doing an installation like we did originally, we'll now run the following command:

```sh
ember new display-tile -b @glimmer/blueprint --web-component
```

When we add the `--web-component` flag, we reconfigure our app to expose our `display-tile` component as an Web Component to browsers. That in turn allows us to render markup like the following from a backend:

```hbs
<display-tile />
```
Once we add our `app.js` file to the page, our browser will automatically load our Glimmer component into the DOM using the options provided by the backend and will boot each Glimmer app.

For more information about web components, browser support and various polyfills to enable broader support, please see:

- [https://www.webcomponents.org/introduction](https://www.webcomponents.org/introduction)
- [https://www.webcomponents.org/polyfills](https://www.webcomponents.org/polyfills)
- [http://jonrimmer.github.io/are-we-componentized-yet/](http://jonrimmer.github.io/are-we-componentized-yet/)

*Note* You cannot currently pass arguments to top-level Glimmer components due to technical limitations. We are working on removing this restriction.
