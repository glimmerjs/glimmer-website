# Getting Started

Glimmer uses [Ember CLI](https://ember-cli.com/), the battle-tested command-line interface tool (CLI) from the Ember project, to help you create and manage your applications.
It provides the following features, among other:

* Creating a new application with a conventional project layout
* A build pipeline with testing, development, and production environments
* [TypeScript](http://www.typescriptlang.org/) support out-of-the-box
* Generators for components and helpers

## Pre-requisites

### Git

Ember CLI requires Git to manage many of its dependencies. Git comes with Mac OS X and most Linux distributions. Windows users can download and run <a href="http://git-scm.com/download/win">this Git installer</a>.

### Node.js and npm

Ember CLI is built with JavaScript, and expects the [Node.js](https://nodejs.org/)
runtime. It also requires dependencies fetched via [npm](https://www.npmjs.com/). npm is packaged with Node.js, so if your computer has Node.js
installed you are ready to go.

Ember requires Node.js 4 or higher and npm 2.14.2 or higher.
If you're not sure whether you have Node.js or the right version, run this on your
command line:

```bash
node --version
npm --version
```

If you get a *"command not found"* error or an outdated version for Node:

* Windows or Mac users can download and run [this Node.js installer](http://nodejs.org/download/).
* Mac users often prefer to install Node using [Homebrew](http://brew.sh/). After
installing Homebrew, run `brew install node` to install Node.js.
* Linux users can use [this guide for Node.js installation on Linux](https://nodejs.org/en/download/package-manager/).

If you get an outdated version of npm, run `npm install -g npm`.

### Yarn

We are going to use [Yarn](https://yarnpkg.com/en/) to manage dependencies in a Glimmer project, as it offers some advantages over npm, such as deterministic builds and the ability to work offline.

You can follow their <a href="https://yarnpkg.com/en/docs/install">installation instructions</a> to get set up.

## Installing

To generate new projects, we will need an experimental feature that is only available in the Canary release channel.

To install Ember CLI Canary, run the following command to install it from the `master` branch on GitHub:

```bash
yarn global add ember-cli/ember-cli
```

Alternatively, you can do:

```bash
npm install -g ember-cli/ember-cli
```

To verify that it's correctly installed, run the following command:

```bash
ember -v
```

You should see a version number with `beta`. Don't worry, this should be correct! Ember CLI doesn't have the concept of Canary versions, so it will show the latest beta release.
