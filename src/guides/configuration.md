# Configuration

Glimmer apps work right out of the box, but you can configure them to fit your needs.

## Root Container
Glimmer apps contain an `index.html` file that has the following div, which is where all your markup will reside in.
```html
<!-- ui/index.html -->
<div id="app">
  <!--Your app will render here at runtime-->
</div>
```

If you'd like to change the container, open `ui/index.ts` and change
```js
const containerElement = document.getElementById('app');

```

to

```js
const containerElement = document.getElementById('my-new-container-name');

```

Your host page can now hold multiple glimmer apps if you'd like. It can even point to other hosted scripts (that you trust) that other teams might host so you can get the latest updates without integration.
```html
<!-- ui/index.html -->
<div id="my-new-container-name">
  <!--Your app will render here at runtime-->
</div>
<section id="some-other-teams-glimmer-app">
  <!--Your app will render here at runtime-->
</section>

<script src="my-new-container-name.js"></script>
<script src="https://www.otherteam.com/assets/some-other-teams-glimmer-app.js"></script>

```
