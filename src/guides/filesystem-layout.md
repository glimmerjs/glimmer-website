# File System Layout

Now that we're up and running, let's take a look at how things are setup. Here's what our brand-new `hello-glimmer` app currently looks like:

``` 
app
├── config 
│   └── environment.js
├── dist/
├── src
│   ├── config
│   │   ├── module-map.ts
│   │   └── resolver-configuration.ts
│   ├── ui
│   │   ├── components
│   │   │   └── hello-glimmer
│   │   │       ├── component.ts
│   │   │       └── template.hbs
│   │   ├── styles
│   │   │   └── app.css
│   │   └── index.html
│   ├── index.ts
│   └── main.ts
├── ember-cli-build.js
│
... other files ...
```

Briefly, those files and folders are:

- `app/config/environment.js`: the base Glimmer config file
- `app/dist`: your built files end up here
- `app/src/config/*`: configuration files to keep Typescript happy. *Note: Glimmer only runs in Typescript at the moment. We aim to quickly add ES2015 Javascript support as well.*
- `app/src/index.ts`: used to do initial app config before our Glimmer app boots (the div ID Glimmer renders into is set here (see the `containerElement` variable)
- `app/ember-cli-build.js`: used to configure Ember-CLI in various ways (importing vendor files, Broccoli options, etc.)

However, where we'll spend most of our time is in the `app/src/ui` folder.

## The UI folder

As you can see, Glimmer puts all our components in the `app/src/ui/components` folder with the `hello-glimmer` component being where our app logic really begins. All other logic and components should be referenced in the `hello-glimmer/template.hbs` file (and we can nest them as deeply as we desire).

So let's add a new component in Glimmer. To do so, we'll run the following command to generate an initial blueprint for a component:

```sh
$ ember g glimmer-component hello-portland
installing component
  create app/src/ui/components/hello-portland/component.ts
  create app/src/ui/components/hello-portland/template.hbs
```

As you can see, we generate two files (`component.js` and `template.hbs`) in our `src/ui/components` folder. A Glimmer component uses a template to generate all our HTML (using a [Handlebars](http://handlebarsjs.com) template with Glimmer/Ember additions) and a Typescript/Javascript file that provides additional properties and event handlers (known as actions) to our template. We'll cover more details about how Handlebars works on subsequent pages.

All other components will also live in `src/ui/components` unless we deliberately nest them. So for example, if we add a second component called `hello-again`:

```sh
$ ember g glimmer-component hello-again
installing component
  create app/src/ui/components/hello-again/component.ts
  create app/src/ui/components/hello-again/template.hbs
```

we will see our new `hello-again` component added to our UI folder:

``` 
app
│
... snipped ...

└── src
    └── ui
        ├── components
        │   ├── hello-again
        │   │   ├── component.ts
        │   │   └── template.hbs
        │   ├── hello-glimmer
        │   │   ├── component.ts
        │   │   └── template.hbs
        │   └── hello-portland
        │       ├── component.ts
        │       └── template.hbs
        ├── styles
        │   └── app.css
        └── index.html

... snipped ...
```
This then allows us to use that component as a top-level component in our `main/template.hbs` file:

```hbs
<hello-again />
```
But we can also add sub-components to our app to nest those components more deeply in our folder tree. Let's generate one more component:

```sh
$ ember g glimmer-component hello-portland/from-glimmer
installing component
  create app/src/ui/components/hello-portland/from-glimmer/component.ts
  create app/src/ui/components/hello-portland/from-glimmer/template.hbs
```

This generates our component inside our `hello-world` folder:

``` 
app
│
... snipped ...

└── src
    └── ui
        └── components
            └── hello-world
                ├── from-glimmer
                │   ├── component.ts
                │   └── template.hbs
                ├── component.ts
                └── template.hbs

... snipped ...
```
Our new component then is only useable from inside our `hello-world/template.hbs` file:

```hbs
<from-glimmer />
```

Glimmer uses a "local resolution" with nested components where the following syntax will not work in our main component (`hello-glimmer/template.hbs`):

```hbs
{{!-- invalid --}}
<hello-world/from-glimmer />
```

More details on the "local resolution" strategy will be posted shortly.

## Styles

Depending on where you are using your Glimmer app, your containing apps styles will already be affecting the look of your app. However, you can also add new styles that only apply to your Glimmer components by editing `src/ui/styles/app.css`

``` 
app
│
... snipped ...

└── src
    └── ui
│   ├── module-map.ts
│   └── resolver-configuration.ts
├── ui
│   ├── components
│   │   └── hello-world
│   │   │   ├── component.ts
│   │   │   └── template.hbs
│   │   └── main
│   │       ├── component.ts
│   │       └── template.hbs
│   ├── styles
│   │   └── app.css
│   └── index.html
├── utils
│   └── md5.ts
├── index.ts
└── main.ts
```