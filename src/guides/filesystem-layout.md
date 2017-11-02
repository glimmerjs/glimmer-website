# File System Layout

Now that we're up and running, let's take a look at how things are setup. Here's what our brand-new `my-app` currently looks like:

```sh
my-app
├── config
│   ├── environment.js
│   ├── module-map.ts
│   └── resolver-configuration.ts
├── dist/
├── src
│   ├── ui
│   │   ├── components
│   │   │   └── MyApp
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

- `my-app/config/environment.js`: the base Glimmer config file
- `my-app/config/*.ts`: configuration files to keep Typescript happy. *Note: Glimmer only runs in Typescript at the moment. We aim to quickly add ES2015 Javascript support as well.*
- `my-app/dist`: your built files end up here
- `my-app/src/index.ts`: used to do initial app config before our Glimmer app boots (the div ID Glimmer renders into is set here (see the `containerElement` variable)
- `my-app/ember-cli-build.js`: used to configure Ember-CLI in various ways (importing vendor files, Broccoli options, etc.)

However, where we'll spend most of our time is in the `my-app/src/ui` folder.

## The UI folder

As you can see, Glimmer puts all our components in the `my-app/src/ui/components` folder with the `MyApp` component being where our app logic really begins. All other logic and components should be referenced in the `MyApp/template.hbs` file (and we can nest them as deeply as we desire).

So let's add a new component in Glimmer. To do so, we'll run the following command to generate an initial blueprint for a component:

```sh
$ ember g glimmer-component HelloGlimmer
installing component
  create src/ui/components/HelloGlimmer/component.ts
  create src/ui/components/HelloGlimmer/component-test.ts
  create src/ui/components/HelloGlimmer/template.hbs
```

As you can see, we generate two files (`component.ts` and `template.hbs`) in the newly created `src/ui/components/HelloGlimmer` folder. A Glimmer component uses a template to generate all our HTML (using a [Handlebars](http://handlebarsjs.com) template with Glimmer/Ember additions) and a Typescript/Javascript file that provides additional properties and event handlers (known as actions) to our template. We'll cover more details about how Handlebars works on subsequent pages.

All other components will also live in `src/ui/components` unless we deliberately nest them. So for example, if we add a second component called `ConferenceSpeakers`:

```sh
$ ember g glimmer-component ConferenceSpeakers
installing component
  create src/ui/components/ConferenceSpeakers/component.ts
  create src/ui/components/ConferenceSpeakers/component-test.ts
  create src/ui/components/ConferenceSpeakers/template.hbs
```

we will see our new `conference-speakers` component added to our UI folder:

```sh
my-app
│
... snipped ...

└── src
    └── ui
        ├── components
        │   ├── ConferenceSpeakers
        │   │   ├── component.ts
        │   │   ├── component-test.ts
        │   │   └── template.hbs
        │   └── HelloGlimmer
        │       ├── component.ts
        │       ├── component-test.ts
        │       └── template.hbs
        ├── styles
        │   └── app.css
        └── index.html

... snipped ...
```

This then allows us to use that component as a top-level component in our `MyApp/template.hbs` file:

```hbs
<div>
  <ConferenceSpeakers />
</div>
```

But we can also add sub-components to our app to nest those components more deeply in our folder tree. Let's generate one more component:

```sh
$ ember g glimmer-component ConferenceSpeakers/ConferenceSpeaker
installing component
  create src/ui/components/ConferenceSpeakers/ConferenceSpeaker/component.ts
  create src/ui/components/ConferenceSpeakers/ConferenceSpeaker/component-test.ts
  create src/ui/components/ConferenceSpeakers/ConferenceSpeaker/template.hbs
```

This generates our component inside our `ConferenceSpeakers` folder:

```sh
my-app
│
... snipped ...

└── src
    └── ui
        └── components
            └── ConferenceSpeakers
                ├── ConferenceSpeaker
                │   ├── component.ts
                │   ├── component-test.ts
                │   └── template.hbs
                ├── component.ts
                └── template.hbs

... snipped ...
```
Our new component then is only useable from inside our `ConferenceSpeakers/template.hbs` file:

```hbs
<div>
  <ConferenceSpeaker />
</div>
```

Glimmer uses a "local resolution" with nested components where the following syntax will not work in our main component (`MyApp/template.hbs`):

```hbs
{{!-- invalid --}}
<ConferenceSpeakers/ConferenceSpeaker />
```

More details on the "local resolution" strategy will be posted shortly.

## Styles

Depending on where you are using your Glimmer app, your containing apps styles will already be affecting the look of your app. However, you can also add new styles that only apply to your Glimmer components by editing `src/ui/styles/app.css`
