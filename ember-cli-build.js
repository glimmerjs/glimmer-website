'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const path = require('path');
const Rollup = require('broccoli-rollup');
const Flatiron = require('broccoli-flatiron');
const Funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.


  const docsPath = path.join(__dirname, 'docs');

  const mdFunnel = new Funnel(docsPath, {
    include: [new RegExp(/\.md/)]
  });

  const docsAsJson = Flatiron(mdFunnel, {
    outputFile: '/docs/main.js',
    trimExtensions: true
  });

  const docs = new Rollup(docsAsJson, {
    rollup: {
      entry: 'docs/main.js',
      format: 'umd',
      dest: 'main.js',
      moduleName: 'docs'
    }
  });

  const extraAssets = new Funnel(docs, {
    srcDir: '/',
    destDir: '/assets/docs'
  });

  return merge([app.toTree(), docsAsJson, extraAssets ]);
};
