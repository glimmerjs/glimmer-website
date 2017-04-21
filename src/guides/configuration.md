# Configuration

Glimmer apps work right out of the box, but you can configure them to fit your needs.

## Root Container

Glimmer apps contain an `index.html` file that has the following `div#app`, which is where your app will be anchored at runtime.

```html
<!-- ui/index.html -->
<div id="app">
  <!--Your app will be anchored within #app at runtime-->
</div>
```

If you'd like to change the container, open `ui/index.ts` and change

```js
const containerElement = document.getElementById('app');

```

to

```js
const containerElement = document.getElementById('conference-speaker-app');

```

Your host page can now hold multiple glimmer apps if you'd like. It can even point to other hosted scripts (that you trust) that other teams might host so you can get the latest updates without integration. This is assuming you have the same container element (`div#some-other-teams-hotel-finder-app`) that is registered in their `index.ts`.

```html
<!-- ui/index.html -->
<div id="conference-speaker-app">
  <!--Your app will render here at runtime-->
</div>
<section id="some-other-teams-hotel-finder-app">
  <!--Your app will render here at runtime-->
</section>

<script src="my-new-container-name.js"></script>
<script src="https://www.otherteam.com/assets/some-other-teams-hotel-finder-app.js"></script>
```

### Web Components

If you're using Glimmer as Web Components, make sure to wrap your components in containing element.
```html
<!-- ui/index.html -->
<conference-speaker></conference-speaker>
<some-other-teams-hotel-finder-app></some-other-teams-hotel-finder-app />

<script src="my-new-container-name.js"></script>
<script src="https://www.otherteam.com/assets/some-other-teams-hotel-finder-app.js"></script>
```
