(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.docs = factory());
}(this, (function () { 'use strict';

var main = {
  "data": {
    "id": "glimmer",
    "type": "docset",
    "attributes": {
      "title": "Glimmer",
      "intro": "Everything is awesome",
      "idMap": {
        "_glimmer_component": {
          "component": "1",
          "tracked": "54"
        },
        "_glimmer_application": {
          "application": "698"
        }
      }
    },
    "relationships": {
      "docmodules": {
        "data": [
          {
            "id": "_glimmer_component",
            "type": "projectdoc"
          },
          {
            "id": "_glimmer_application",
            "type": "projectdoc"
          }
        ]
      }
    }
  },
  "included": [
    {
      "id": "_glimmer_component",
      "type": "projectdoc",
      "attributes": {
        "name": "@glimmer/component",
        "slug": "_glimmer_component",
        "flags": {
          "isNormalized": true
        },
        "alias": "_glimmer_component",
        "fullName": "@glimmer/component",
        "hierarchy": "Global @glimmer/component\n  Class Component\n    Constructor constructor\n      ConstructorSignature new Component:Component\n        Parameter options:object\n    Property args:object\n    Property debugName:string\n    Property element:Element\n    Method didInsertElement\n      CallSignature didInsertElement:void\n    Method didUpdate\n      CallSignature didUpdate:void\n    Method toString\n      CallSignature toString:string\n    Method create\n      CallSignature create:Component\n        Parameter injections:any\n  Function tracked\n    CallSignature tracked:MethodDecorator\n      Parameter dependencies:string[]\n    CallSignature tracked:any\n      Parameter target:any\n      Parameter key:any\n    CallSignature tracked:PropertyDescriptor\n      Parameter target:any\n      Parameter key:any\n      Parameter descriptor:PropertyDescriptor",
        "packageInfo": {
          "name": "@glimmer/component",
          "version": "0.3.7",
          "description": "Glimmer component library",
          "contributors": [
            "Dan Gebhardt <dan@cerebris.com>",
            "Tom Dale <tom@tomdale.net>"
          ],
          "repository": "https://github.com/glimmerjs/glimmer-component",
          "license": "MIT",
          "files": [
            "dist"
          ],
          "main": "dist/commonjs/es5/index.js",
          "module": "dist/modules/es2017/index.js",
          "types": "dist/types/index.d.ts",
          "scripts": {
            "build": "ember build",
            "preversion": "npm run test",
            "prepublish": "npm run build",
            "postpublish": "git push origin master --tags",
            "test": "ember test"
          },
          "dependencies": {
            "@glimmer/util": "^0.23.0-alpha.11",
            "@glimmer/application": "^0.3.6",
            "@glimmer/di": "^0.1.9",
            "@glimmer/reference": "^0.23.0-alpha.11",
            "@glimmer/runtime": "^0.23.0-alpha.11"
          },
          "devDependencies": {
            "@glimmer/build": "^0.6.1",
            "@glimmer/compiler": "^0.23.0-alpha.11",
            "@glimmer/interfaces": "^0.23.0-alpha.11",
            "@glimmer/resolver": "^0.3.0",
            "@glimmer/wire-format": "^0.23.0-alpha.11",
            "broccoli": "^1.1.0",
            "broccoli-cli": "^1.0.0",
            "ember-cli": "^2.12.0",
            "testem": "^1.13.0"
          }
        },
        "readme": "<h1 id=\"glimmer-component-build-status-https-secure-travis-ci-org-glimmerjs-glimmer-component-svg-branch-master-http-travis-ci-org-glimmerjs-glimmer-component-\">glimmer-component <a href=\"http://travis-ci.org/glimmerjs/glimmer-component\"><img src=\"https://secure.travis-ci.org/glimmerjs/glimmer-component.svg?branch=master\" alt=\"Build Status\"></a></h1>\n<h2 id=\"acknowledgements\">Acknowledgements</h2>\n<p>Thanks to <a href=\"http://monegraph.com\">Monegraph</a> for funding the initial development\nof this library.</p>\n<h2 id=\"license\">License</h2>\n<p>MIT License.</p>\n"
      },
      "relationships": {
        "classes": {
          "data": [
            {
              "type": "class",
              "id": "1"
            }
          ]
        },
        "functions": {
          "data": [
            {
              "type": "function",
              "id": "54"
            }
          ]
        }
      }
    },
    {
      "id": "1",
      "type": "class",
      "attributes": {
        "name": "Component",
        "slug": "component",
        "flags": {
          "isNormalized": true,
          "isExported": true,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "component",
        "fullName": "Component",
        "hierarchy": "Class Component\n  Constructor constructor\n    ConstructorSignature new Component:Component\n      Parameter options:object\n  Property args:object\n  Property debugName:string\n  Property element:Element\n  Method didInsertElement\n    CallSignature didInsertElement:void\n  Method didUpdate\n    CallSignature didUpdate:void\n  Method toString\n    CallSignature toString:string\n  Method create\n    CallSignature create:Component\n      Parameter injections:any",
        "kindString": "Class",
        "sources": [
          {
            "fileName": "component.ts",
            "line": 126,
            "character": 15,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L126"
          }
        ],
        "comment": {
          "shortText": "<p>The <code>Component</code> class defines an encapsulated UI element that is rendered to\nthe DOM. A component is made up of a template and, optionally, this component\nobject.</p>\n",
          "text": "<h2 id=\"defining-a-component\">Defining a Component</h2>\n<p>To define a component, subclass <code>Component</code> and add your own properties,\nmethods and lifecycle hooks:</p>\n<pre><code class=\"lang-ts\"><span class=\"hljs-keyword\">import</span> Component <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@glimmer/component'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> Component {\n}\n</code></pre>\n<h2 id=\"lifecycle-hooks\">Lifecycle Hooks</h2>\n<p>Lifecycle hooks allow you to respond to changes to a component, such as when\nit gets created, rendered, updated or destroyed. To add a lifecycle hook to a\ncomponent, implement the hook as a method on your component subclass.</p>\n<p>For example, to be notified when Glimmer has rendered your component so you\ncan attach a legacy jQuery plugin, implement the <code>didInsertElement()</code> method:</p>\n<pre><code class=\"lang-ts\"><span class=\"hljs-keyword\">import</span> Component <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@glimmer/component'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> Component {\n  didInsertElement() {\n    $(<span class=\"hljs-keyword\">this</span>.element).pickadate();\n  }\n}\n</code></pre>\n<h2 id=\"data-for-templates\">Data for Templates</h2>\n<p><code>Component</code>s have two different kinds of data, or state, that can be\ndisplayed in templates:</p>\n<ol>\n<li>Arguments</li>\n<li>Properties</li>\n</ol>\n<p>Arguments are data that is passed in to a component from its parent\ncomponent. For example, if I have a <code>user-greeting</code> component, I can pass it\na name and greeting to use:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">user-greeting</span> @<span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"Ricardo\"</span> @<span class=\"hljs-attr\">greeting</span>=<span class=\"hljs-string\">\"Olá\"</span>&gt;</span></span>\n</code></pre>\n<p>Inside my <code>user-greeting</code> template, I can access the <code>@name</code> and <code>@greeting</code>\narguments that I&#39;ve been given:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"></span><span class=\"hljs-template-variable\">{{@greeting}}</span><span class=\"xml\">, </span><span class=\"hljs-template-variable\">{{@name}}</span><span class=\"xml\">!</span>\n</code></pre>\n<p>Arguments are also available inside my component:</p>\n<pre><code class=\"lang-ts\"><span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-keyword\">this</span>.args.greeting); <span class=\"hljs-comment\">// prints \"Olá\"</span>\n</code></pre>\n<p>Properties, on the other hand, are internal to the component and declared in\nthe class. You can use properties to store data that you want to show in the\ntemplate, or pass to another component as an argument.</p>\n<pre><code class=\"lang-ts\"><span class=\"hljs-keyword\">import</span> Component <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@glimmer/component'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> <span class=\"hljs-keyword\">extends</span> Component {\n  user = {\n    name: <span class=\"hljs-string\">'Robbie'</span>\n  }\n}\n</code></pre>\n<p>In the above example, we&#39;ve defined a component with a <code>user</code> property that\ncontains an object with its own <code>name</code> property.</p>\n<p>We can render that property in our template:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\">Hello, </span><span class=\"hljs-template-variable\">{{user.name}}</span><span class=\"xml\">!</span>\n</code></pre>\n<p>We can also take that property and pass it as an argument to the\n<code>user-greeting</code> component we defined above:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">user-greeting</span> @<span class=\"hljs-attr\">greeting</span>=<span class=\"hljs-string\">\"Hello\"</span> @<span class=\"hljs-attr\">name</span>=</span></span><span class=\"hljs-template-variable\">{{user.name}}</span><span class=\"xml\"><span class=\"hljs-tag\"> /&gt;</span></span>\n</code></pre>\n<h2 id=\"arguments-vs-properties\">Arguments vs. Properties</h2>\n<p>Remember, arguments are data that was given to your component by its parent\ncomponent, and properties are data your component has defined for itself.</p>\n<p>You can tell the difference between arguments and properties in templates\nbecause arguments always start with an <code>@</code> sign (think &quot;A is for arguments&quot;):</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"></span><span class=\"hljs-template-variable\">{{@firstName}}</span><span class=\"xml\"></span>\n</code></pre>\n<p>We know that <code>@firstName</code> came from the parent component, not the current\ncomponent, because it starts with <code>@</code> and is therefore an argument.</p>\n<p>On the other hand, if we see:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"></span><span class=\"hljs-template-variable\">{{name}}</span><span class=\"xml\"></span>\n</code></pre>\n<p>We know that <code>name</code> is a property on the component. If we want to know where\nthe data is coming from, we can go look at our component class to find out.</p>\n<p>Inside the component itself, arguments always show up inside the component&#39;s\n<code>args</code> property. For example, if <code>{{@firstName}}</code> is <code>Tom</code> in the template,\ninside the component <code>this.args.firstName</code> would also be <code>Tom</code>.</p>\n"
        },
        "constructors": [
          {
            "name": "constructor",
            "slug": "constructor",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "constructor",
            "fullName": "Component.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new Component:Component\n    Parameter options:object",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 168,
                "character": 3,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L168"
              }
            ],
            "comment": {
              "shortText": "<p>Constructs a new component and assigns itself the passed properties. You\nshould not construct new components yourself. Instead, Glimmer will\ninstantiate new components automatically as it renders.</p>\n",
              "text": "",
              "tags": []
            },
            "constructorSignatures": [
              {
                "name": "new Component",
                "slug": "new_component",
                "flags": {},
                "alias": "new_component",
                "fullName": "Component.constructor.new Component",
                "hierarchy": "ConstructorSignature new Component:Component\n  Parameter options:object",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 168,
                    "character": 3,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L168"
                  }
                ],
                "comment": {
                  "shortText": "<p>Constructs a new component and assigns itself the passed properties. You\nshould not construct new components yourself. Instead, Glimmer will\ninstantiate new components automatically as it renders.</p>\n",
                  "text": "",
                  "tags": []
                },
                "typeInfo": {
                  "isArray": false,
                  "name": "Component",
                  "link": {
                    "id": "1",
                    "type": "class",
                    "slug": "component",
                    "sources": [
                      {
                        "fileName": "component.ts",
                        "line": 126,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L126"
                      }
                    ],
                    "parent": {
                      "id": "0",
                      "type": "0",
                      "slug": "_glimmer_component",
                      "sources": null
                    }
                  }
                },
                "parameters": [
                  {
                    "name": "options",
                    "slug": "options",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "options",
                    "fullName": "Component.constructor.new Component.options",
                    "hierarchy": "Parameter options:object",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "object"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "properties": [
          {
            "name": "args",
            "slug": "args",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "args",
            "fullName": "Component.args",
            "hierarchy": "Property args:object",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 164,
                "character": 6,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L164"
              }
            ],
            "comment": {
              "shortText": "<p>Named arguments passed to the component from its parent component.\nThey can be accessed in JavaScript via <code>this.args.argumentName</code> and in the template via <code>@argumentName</code>.</p>\n",
              "text": "<p>Say you have the following component, which will have two <code>args</code>, <code>firstName</code> and <code>lastName</code>:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">my-component</span> @<span class=\"hljs-attr\">firstName</span>=<span class=\"hljs-string\">\"Arthur\"</span> @<span class=\"hljs-attr\">lastName</span>=<span class=\"hljs-string\">\"Dent\"</span> /&gt;</span></span>\n</code></pre>\n<p>If you needed to calculate <code>fullName</code> by combining both of them, you would do:</p>\n<pre><code class=\"lang-ts\">didInsertElement() {\n  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">\"Hi,My full name is ${this.args.firstName} ${this.args.lastName\"</span>);\n}\n</code></pre>\n<p>While in the template you could do:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Welcome, </span><span class=\"hljs-template-variable\">{{@firstName}}</span><span class=\"xml\"> </span><span class=\"hljs-template-variable\">{{@lastName}}</span><span class=\"xml\">!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span></span>\n</code></pre>\n"
            },
            "typeInfo": {
              "isArray": false,
              "name": "object"
            }
          },
          {
            "name": "debugName",
            "slug": "debugname",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "debugname",
            "fullName": "Component.debugName",
            "hierarchy": "Property debugName:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 137,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L137"
              }
            ],
            "comment": {
              "shortText": "<p>Development-mode only name of the component, useful for debugging.</p>\n",
              "text": ""
            },
            "typeInfo": {
              "isArray": false,
              "name": "string"
            }
          },
          {
            "name": "element",
            "slug": "element",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "element",
            "fullName": "Component.element",
            "hierarchy": "Property element:Element",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 132,
                "character": 9,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L132"
              }
            ],
            "comment": {
              "shortText": "<p>The element corresponding to the top-level element of the component&#39;s template.\nYou should not try to access this property until after the component&#39;s <code>didInsertElement()</code>\nlifecycle hook is called.</p>\n",
              "text": ""
            },
            "typeInfo": {
              "isArray": false,
              "name": "Element"
            }
          }
        ],
        "methods": [
          {
            "name": "didInsertElement",
            "slug": "didinsertelement",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "didinsertelement",
            "fullName": "Component.didInsertElement",
            "hierarchy": "Method didInsertElement\n  CallSignature didInsertElement:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 185,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L185"
              }
            ],
            "callSignatures": [
              {
                "name": "didInsertElement",
                "slug": "didinsertelement-1",
                "flags": {},
                "alias": "didinsertelement-1",
                "fullName": "Component.didInsertElement.didInsertElement",
                "hierarchy": "CallSignature didInsertElement:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 185,
                    "character": 18,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L185"
                  }
                ],
                "comment": {
                  "shortText": "<p>Called when the component has been inserted into the DOM.\nOverride this function to do any set up that requires an element in the document body.</p>\n",
                  "text": ""
                },
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          },
          {
            "name": "didUpdate",
            "slug": "didupdate",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "didupdate",
            "fullName": "Component.didUpdate",
            "hierarchy": "Method didUpdate\n  CallSignature didUpdate:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 191,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L191"
              }
            ],
            "callSignatures": [
              {
                "name": "didUpdate",
                "slug": "didupdate-1",
                "flags": {},
                "alias": "didupdate-1",
                "fullName": "Component.didUpdate.didUpdate",
                "hierarchy": "CallSignature didUpdate:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 191,
                    "character": 11,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L191"
                  }
                ],
                "comment": {
                  "shortText": "<p>Called when the component has updated and rerendered itself.\nCalled only during a rerender, not during an initial render.</p>\n",
                  "text": ""
                },
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          },
          {
            "name": "toString",
            "slug": "tostring",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "tostring",
            "fullName": "Component.toString",
            "hierarchy": "Method toString\n  CallSignature toString:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 193,
                "character": 10,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L193"
              }
            ],
            "callSignatures": [
              {
                "name": "toString",
                "slug": "tostring-1",
                "flags": {},
                "alias": "tostring-1",
                "fullName": "Component.toString.toString",
                "hierarchy": "CallSignature toString:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 193,
                    "character": 10,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L193"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "string"
                }
              }
            ]
          },
          {
            "name": "create",
            "slug": "create",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": true
            },
            "alias": "create",
            "fullName": "Component.create",
            "hierarchy": "Method create\n  CallSignature create:Component\n    Parameter injections:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 166,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L166"
              }
            ],
            "callSignatures": [
              {
                "name": "create",
                "slug": "create-1",
                "flags": {},
                "alias": "create-1",
                "fullName": "Component.create.create",
                "hierarchy": "CallSignature create:Component\n  Parameter injections:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 166,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L166"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Component",
                  "link": {
                    "id": "1",
                    "type": "class",
                    "slug": "component",
                    "sources": [
                      {
                        "fileName": "component.ts",
                        "line": 126,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/component.ts#L126"
                      }
                    ],
                    "parent": {
                      "id": "0",
                      "type": "0",
                      "slug": "_glimmer_component",
                      "sources": null
                    }
                  }
                },
                "parameters": [
                  {
                    "name": "injections",
                    "slug": "injections",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "injections",
                    "fullName": "Component.create.create.injections",
                    "hierarchy": "Parameter injections:any",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "any"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "id": "54",
      "type": "function",
      "attributes": {
        "name": "tracked",
        "slug": "tracked",
        "flags": {
          "isNormalized": true,
          "isExported": true,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "tracked",
        "fullName": "tracked",
        "hierarchy": "Function tracked\n  CallSignature tracked:MethodDecorator\n    Parameter dependencies:string[]\n  CallSignature tracked:any\n    Parameter target:any\n    Parameter key:any\n  CallSignature tracked:PropertyDescriptor\n    Parameter target:any\n    Parameter key:any\n    Parameter descriptor:PropertyDescriptor",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 16,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/tracked.ts#L16"
          },
          {
            "fileName": "tracked.ts",
            "line": 17,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/tracked.ts#L17"
          },
          {
            "fileName": "tracked.ts",
            "line": 18,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/tracked.ts#L18"
          },
          {
            "fileName": "tracked.ts",
            "line": 19,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/tracked.ts#L19"
          }
        ],
        "callSignatures": [
          {
            "name": "tracked",
            "slug": "tracked-1",
            "flags": {},
            "alias": "tracked-1",
            "fullName": "tracked.tracked",
            "hierarchy": "CallSignature tracked:MethodDecorator\n  Parameter dependencies:string[]",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 16,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/tracked.ts#L16"
              }
            ],
            "comment": {
              "shortText": "",
              "text": "",
              "tags": [
                {
                  "tagName": "decorator",
                  "paramName": "",
                  "text": "\n\nMarks a property has tracked.\n\nBy default, a component's properties are expected to be static,\nmeaning you are not able to update them and have the template update accordingly.\nMarking a property as tracked means that when that property changes,\na rerender of the component is scheduled so the template is kept up to date.\n"
                }
              ]
            },
            "typeInfo": {
              "isArray": false,
              "name": "MethodDecorator"
            },
            "parameters": [
              {
                "name": "dependencies",
                "slug": "dependencies",
                "flags": {
                  "isOptional": false,
                  "isRest": true
                },
                "alias": "dependencies",
                "fullName": "tracked.tracked.dependencies",
                "hierarchy": "Parameter dependencies:string[]",
                "kindString": "Parameter",
                "comment": {
                  "shortText": "",
                  "text": "<p>Optional dependents to be tracked.</p>\n"
                },
                "typeInfo": {
                  "isArray": true,
                  "name": "string"
                }
              }
            ]
          },
          {
            "name": "tracked",
            "slug": "tracked-2",
            "flags": {},
            "alias": "tracked-2",
            "fullName": "tracked.tracked",
            "hierarchy": "CallSignature tracked:any\n  Parameter target:any\n  Parameter key:any",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 17,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/tracked.ts#L17"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "any"
            },
            "parameters": [
              {
                "name": "target",
                "slug": "target",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "target",
                "fullName": "tracked.tracked.target",
                "hierarchy": "Parameter target:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              },
              {
                "name": "key",
                "slug": "key",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "key",
                "fullName": "tracked.tracked.key",
                "hierarchy": "Parameter key:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              }
            ]
          },
          {
            "name": "tracked",
            "slug": "tracked-3",
            "flags": {},
            "alias": "tracked-3",
            "fullName": "tracked.tracked",
            "hierarchy": "CallSignature tracked:PropertyDescriptor\n  Parameter target:any\n  Parameter key:any\n  Parameter descriptor:PropertyDescriptor",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 18,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/a1c0a24/src/tracked.ts#L18"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "PropertyDescriptor"
            },
            "parameters": [
              {
                "name": "target",
                "slug": "target-1",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "target-1",
                "fullName": "tracked.tracked.target",
                "hierarchy": "Parameter target:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              },
              {
                "name": "key",
                "slug": "key-1",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "key-1",
                "fullName": "tracked.tracked.key",
                "hierarchy": "Parameter key:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              },
              {
                "name": "descriptor",
                "slug": "descriptor",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "descriptor",
                "fullName": "tracked.tracked.descriptor",
                "hierarchy": "Parameter descriptor:PropertyDescriptor",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "PropertyDescriptor"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "_glimmer_application",
      "type": "projectdoc",
      "attributes": {
        "name": "@glimmer/application",
        "slug": "_glimmer_application",
        "flags": {
          "isNormalized": true
        },
        "alias": "_glimmer_application",
        "fullName": "@glimmer/application",
        "hierarchy": "Global @glimmer/application\n  Class Application\n    Constructor constructor\n      ConstructorSignature new Application:Application\n        Parameter options:ApplicationOptions\n    Property _container:Container\n    Property _initialized:boolean\n    Property _initializers:Initializer[]\n    Property _registry:Registry\n    Property _renderResult:RenderResult\n    Property _rendered:boolean\n    Property _roots:AppRoot[]\n    Property _rootsIndex:number\n    Property _scheduled:boolean\n    Property env:Environment\n    Property resolver:Resolver\n    Property rootName:string\n    Method boot\n      CallSignature boot:void\n    Method factoryFor\n      CallSignature factoryFor:Factory<any>\n        Parameter specifier:string\n        Parameter referrer:string\n    Method identify\n      CallSignature identify:string\n        Parameter specifier:string\n        Parameter referrer:string\n    Method initContainer\n      CallSignature initContainer:void\n    Method initRegistry\n      CallSignature initRegistry:void\n    Method initialize\n      CallSignature initialize:void\n    Method lookup\n      CallSignature lookup:any\n        Parameter specifier:string\n        Parameter referrer:string\n    Method registerInitializer\n      CallSignature registerInitializer:void\n        Parameter initializer:Initializer\n    Method render\n      CallSignature render:void\n    Method renderComponent\n      CallSignature renderComponent:void\n        Parameter component:string | ComponentDefinition<Component>\n        Parameter parent:Node\n        Parameter nextSibling:Option<Node>\n    Method rerender\n      CallSignature rerender:void\n    Method scheduleRerender\n      CallSignature scheduleRerender:void",
        "packageInfo": {
          "name": "@glimmer/application",
          "version": "0.4.0",
          "description": "Glimmer standalone applications",
          "contributors": [
            "Dan Gebhardt <dan@cerebris.com>",
            "Tom Dale <tom@tomdale.net>"
          ],
          "repository": "https://github.com/glimmerjs/glimmer-application",
          "license": "MIT",
          "main": "dist/commonjs/es5/index.js",
          "module": "dist/modules/es2017/index.js",
          "types": "dist/types/index.d.ts",
          "files": [
            "dist"
          ],
          "scripts": {
            "build": "ember build",
            "preversion": "npm test",
            "prepublish": "npm run build",
            "postpublish": "git push origin master --tags",
            "test": "ember test"
          },
          "dependencies": {
            "@glimmer/di": "^0.1.9",
            "@glimmer/object-reference": "^0.23.0-alpha.6",
            "@glimmer/reference": "^0.23.0-alpha.6",
            "@glimmer/resolver": "^0.3.0",
            "@glimmer/runtime": "^0.23.0-alpha.6",
            "@glimmer/util": "^0.23.0-alpha.6"
          },
          "devDependencies": {
            "@glimmer/build": "^0.6.0",
            "@glimmer/compiler": "^0.23.0-alpha.6",
            "@glimmer/wire-format": "^0.23.0-alpha.6",
            "ember-cli": "^2.12.0",
            "testem": "^1.13.0",
            "typescript": "^2.2.1"
          }
        },
        "readme": "<h1 id=\"glimmer-application-build-status-https-secure-travis-ci-org-glimmerjs-glimmer-application-svg-branch-master-http-travis-ci-org-glimmerjs-glimmer-application-\">glimmer-application <a href=\"http://travis-ci.org/glimmerjs/glimmer-application\"><img src=\"https://secure.travis-ci.org/glimmerjs/glimmer-application.svg?branch=master\" alt=\"Build Status\"></a></h1>\n<h2 id=\"acknowledgements\">Acknowledgements</h2>\n<p>Thanks to <a href=\"http://monegraph.com\">Monegraph</a> for funding the initial development\nof this library.</p>\n<h2 id=\"license\">License</h2>\n<p>MIT License.</p>\n"
      },
      "relationships": {
        "classes": {
          "data": [
            {
              "type": "class",
              "id": "698"
            }
          ]
        }
      }
    },
    {
      "id": "698",
      "type": "class",
      "attributes": {
        "name": "Application",
        "slug": "application",
        "flags": {
          "isNormalized": true,
          "isExported": true,
          "isExternal": false,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "application",
        "fullName": "Application",
        "hierarchy": "Class Application\n  Constructor constructor\n    ConstructorSignature new Application:Application\n      Parameter options:ApplicationOptions\n  Property _container:Container\n  Property _initialized:boolean\n  Property _initializers:Initializer[]\n  Property _registry:Registry\n  Property _renderResult:RenderResult\n  Property _rendered:boolean\n  Property _roots:AppRoot[]\n  Property _rootsIndex:number\n  Property _scheduled:boolean\n  Property env:Environment\n  Property resolver:Resolver\n  Property rootName:string\n  Method boot\n    CallSignature boot:void\n  Method factoryFor\n    CallSignature factoryFor:Factory<any>\n      Parameter specifier:string\n      Parameter referrer:string\n  Method identify\n    CallSignature identify:string\n      Parameter specifier:string\n      Parameter referrer:string\n  Method initContainer\n    CallSignature initContainer:void\n  Method initRegistry\n    CallSignature initRegistry:void\n  Method initialize\n    CallSignature initialize:void\n  Method lookup\n    CallSignature lookup:any\n      Parameter specifier:string\n      Parameter referrer:string\n  Method registerInitializer\n    CallSignature registerInitializer:void\n      Parameter initializer:Initializer\n  Method render\n    CallSignature render:void\n  Method renderComponent\n    CallSignature renderComponent:void\n      Parameter component:string | ComponentDefinition<Component>\n      Parameter parent:Node\n      Parameter nextSibling:Option<Node>\n  Method rerender\n    CallSignature rerender:void\n  Method scheduleRerender\n    CallSignature scheduleRerender:void",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "Owner"
          }
        ],
        "sources": [
          {
            "fileName": "application.ts",
            "line": 45,
            "character": 32,
            "url": null
          }
        ],
        "constructors": [
          {
            "name": "constructor",
            "slug": "constructor",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "constructor",
            "fullName": "Application.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new Application:Application\n    Parameter options:ApplicationOptions",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 59,
                "character": 31,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new Application",
                "slug": "new_application",
                "flags": {},
                "alias": "new_application",
                "fullName": "Application.constructor.new Application",
                "hierarchy": "ConstructorSignature new Application:Application\n  Parameter options:ApplicationOptions",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 59,
                    "character": 31,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Application",
                  "link": {
                    "id": "698",
                    "type": "class",
                    "slug": "application",
                    "sources": [
                      {
                        "fileName": "application.ts",
                        "line": 45,
                        "character": 32,
                        "url": null
                      }
                    ],
                    "parent": {
                      "id": "317",
                      "type": "0",
                      "slug": "_glimmer_application",
                      "sources": null
                    }
                  }
                },
                "parameters": [
                  {
                    "name": "options",
                    "slug": "options",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "options",
                    "fullName": "Application.constructor.new Application.options",
                    "hierarchy": "Parameter options:ApplicationOptions",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "ApplicationOptions",
                      "link": {
                        "id": "685",
                        "type": "interface",
                        "slug": "applicationoptions",
                        "sources": [
                          {
                            "fileName": "application.ts",
                            "line": 28,
                            "character": 35,
                            "url": null
                          }
                        ],
                        "parent": {
                          "id": "317",
                          "type": "0",
                          "slug": "_glimmer_application",
                          "sources": null
                        }
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        "properties": [
          {
            "name": "_container",
            "slug": "_container",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_container",
            "fullName": "Application._container",
            "hierarchy": "Property _container:Container",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 52,
                "character": 20,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Container"
            }
          },
          {
            "name": "_initialized",
            "slug": "_initialized",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_initialized",
            "fullName": "Application._initialized",
            "hierarchy": "Property _initialized:boolean",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 59,
                "character": 22,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "boolean"
            }
          },
          {
            "name": "_initializers",
            "slug": "_initializers",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_initializers",
            "fullName": "Application._initializers",
            "hierarchy": "Property _initializers:Initializer[]",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 58,
                "character": 23,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": true,
              "name": "Initializer",
              "link": {
                "id": "688",
                "type": "interface",
                "slug": "initializer",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 33,
                    "character": 28,
                    "url": null
                  }
                ],
                "parent": {
                  "id": "317",
                  "type": "0",
                  "slug": "_glimmer_application",
                  "sources": null
                }
              }
            }
          },
          {
            "name": "_registry",
            "slug": "_registry",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_registry",
            "fullName": "Application._registry",
            "hierarchy": "Property _registry:Registry",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 51,
                "character": 19,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Registry"
            }
          },
          {
            "name": "_renderResult",
            "slug": "_renderresult",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_renderresult",
            "fullName": "Application._renderResult",
            "hierarchy": "Property _renderResult:RenderResult",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 53,
                "character": 23,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "RenderResult"
            }
          },
          {
            "name": "_rendered",
            "slug": "_rendered",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_rendered",
            "fullName": "Application._rendered",
            "hierarchy": "Property _rendered:boolean",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 55,
                "character": 19,
                "url": null
              }
            ],
            "comment": {
              "shortText": "<p>Whether the initial render has completed.</p>\n",
              "text": ""
            },
            "typeInfo": {
              "isArray": false,
              "name": "boolean"
            }
          },
          {
            "name": "_roots",
            "slug": "_roots",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_roots",
            "fullName": "Application._roots",
            "hierarchy": "Property _roots:AppRoot[]",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 49,
                "character": 16,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": true,
              "name": "AppRoot",
              "link": {
                "id": "693",
                "type": "interface",
                "slug": "approot",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 38,
                    "character": 24,
                    "url": null
                  }
                ],
                "parent": {
                  "id": "317",
                  "type": "0",
                  "slug": "_glimmer_application",
                  "sources": null
                }
              }
            }
          },
          {
            "name": "_rootsIndex",
            "slug": "_rootsindex",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_rootsindex",
            "fullName": "Application._rootsIndex",
            "hierarchy": "Property _rootsIndex:number",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 50,
                "character": 21,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "number"
            }
          },
          {
            "name": "_scheduled",
            "slug": "_scheduled",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_scheduled",
            "fullName": "Application._scheduled",
            "hierarchy": "Property _scheduled:boolean",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 57,
                "character": 20,
                "url": null
              }
            ],
            "comment": {
              "shortText": "<p>Whether a re-render has been scheduled.</p>\n",
              "text": ""
            },
            "typeInfo": {
              "isArray": false,
              "name": "boolean"
            }
          },
          {
            "name": "env",
            "slug": "env",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": true,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "env",
            "fullName": "Application.env",
            "hierarchy": "Property env:Environment",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 48,
                "character": 12,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Environment",
              "link": {
                "id": "554",
                "type": "class",
                "slug": "environment",
                "sources": [
                  {
                    "fileName": "environment.ts",
                    "line": 57,
                    "character": 32,
                    "url": null
                  }
                ],
                "parent": {
                  "id": "317",
                  "type": "0",
                  "slug": "_glimmer_application",
                  "sources": null
                }
              }
            }
          },
          {
            "name": "resolver",
            "slug": "resolver",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": true,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "resolver",
            "fullName": "Application.resolver",
            "hierarchy": "Property resolver:Resolver",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 47,
                "character": 17,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Resolver"
            }
          },
          {
            "name": "rootName",
            "slug": "rootname",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": true,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "rootname",
            "fullName": "Application.rootName",
            "hierarchy": "Property rootName:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 46,
                "character": 17,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "string"
            }
          }
        ],
        "methods": [
          {
            "name": "boot",
            "slug": "boot",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "boot",
            "fullName": "Application.boot",
            "hierarchy": "Method boot\n  CallSignature boot:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 110,
                "character": 6,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "boot",
                "slug": "boot-1",
                "flags": {},
                "alias": "boot-1",
                "fullName": "Application.boot.boot",
                "hierarchy": "CallSignature boot:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 110,
                    "character": 6,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          },
          {
            "name": "factoryFor",
            "slug": "factoryfor",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "factoryfor",
            "fullName": "Application.factoryFor",
            "hierarchy": "Method factoryFor\n  CallSignature factoryFor:Factory<any>\n    Parameter specifier:string\n    Parameter referrer:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 165,
                "character": 12,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "factoryFor",
                "slug": "factoryfor-1",
                "flags": {},
                "alias": "factoryfor-1",
                "fullName": "Application.factoryFor.factoryFor",
                "hierarchy": "CallSignature factoryFor:Factory<any>\n  Parameter specifier:string\n  Parameter referrer:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 165,
                    "character": 12,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Factory"
                },
                "parameters": [
                  {
                    "name": "specifier",
                    "slug": "specifier",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier",
                    "fullName": "Application.factoryFor.factoryFor.specifier",
                    "hierarchy": "Parameter specifier:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "referrer",
                    "slug": "referrer",
                    "flags": {
                      "isOptional": true,
                      "isRest": false
                    },
                    "alias": "referrer",
                    "fullName": "Application.factoryFor.factoryFor.referrer",
                    "hierarchy": "Parameter referrer:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "identify",
            "slug": "identify",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "identify",
            "fullName": "Application.identify",
            "hierarchy": "Method identify\n  CallSignature identify:string\n    Parameter specifier:string\n    Parameter referrer:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 161,
                "character": 10,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "identify",
                "slug": "identify-1",
                "flags": {},
                "alias": "identify-1",
                "fullName": "Application.identify.identify",
                "hierarchy": "CallSignature identify:string\n  Parameter specifier:string\n  Parameter referrer:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 161,
                    "character": 10,
                    "url": null
                  }
                ],
                "comment": {
                  "shortText": "<p>Owner interface implementation</p>\n",
                  "text": ""
                },
                "typeInfo": {
                  "isArray": false,
                  "name": "string"
                },
                "parameters": [
                  {
                    "name": "specifier",
                    "slug": "specifier-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier-1",
                    "fullName": "Application.identify.identify.specifier",
                    "hierarchy": "Parameter specifier:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "referrer",
                    "slug": "referrer-1",
                    "flags": {
                      "isOptional": true,
                      "isRest": false
                    },
                    "alias": "referrer-1",
                    "fullName": "Application.identify.identify.referrer",
                    "hierarchy": "Parameter referrer:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "initContainer",
            "slug": "initcontainer",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "initcontainer",
            "fullName": "Application.initContainer",
            "hierarchy": "Method initContainer\n  CallSignature initContainer:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 93,
                "character": 15,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "initContainer",
                "slug": "initcontainer-1",
                "flags": {},
                "alias": "initcontainer-1",
                "fullName": "Application.initContainer.initContainer",
                "hierarchy": "CallSignature initContainer:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 93,
                    "character": 15,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          },
          {
            "name": "initRegistry",
            "slug": "initregistry",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "initregistry",
            "fullName": "Application.initRegistry",
            "hierarchy": "Method initRegistry\n  CallSignature initRegistry:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 70,
                "character": 14,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "initRegistry",
                "slug": "initregistry-1",
                "flags": {},
                "alias": "initregistry-1",
                "fullName": "Application.initRegistry.initRegistry",
                "hierarchy": "CallSignature initRegistry:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 70,
                    "character": 14,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          },
          {
            "name": "initialize",
            "slug": "initialize",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "initialize",
            "fullName": "Application.initialize",
            "hierarchy": "Method initialize\n  CallSignature initialize:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 105,
                "character": 12,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "initialize",
                "slug": "initialize-1",
                "flags": {},
                "alias": "initialize-1",
                "fullName": "Application.initialize.initialize",
                "hierarchy": "CallSignature initialize:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 105,
                    "character": 12,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          },
          {
            "name": "lookup",
            "slug": "lookup",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "lookup",
            "fullName": "Application.lookup",
            "hierarchy": "Method lookup\n  CallSignature lookup:any\n    Parameter specifier:string\n    Parameter referrer:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 169,
                "character": 8,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "lookup",
                "slug": "lookup-1",
                "flags": {},
                "alias": "lookup-1",
                "fullName": "Application.lookup.lookup",
                "hierarchy": "CallSignature lookup:any\n  Parameter specifier:string\n  Parameter referrer:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 169,
                    "character": 8,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                },
                "parameters": [
                  {
                    "name": "specifier",
                    "slug": "specifier-2",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier-2",
                    "fullName": "Application.lookup.lookup.specifier",
                    "hierarchy": "Parameter specifier:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "referrer",
                    "slug": "referrer-2",
                    "flags": {
                      "isOptional": true,
                      "isRest": false
                    },
                    "alias": "referrer-2",
                    "fullName": "Application.lookup.lookup.referrer",
                    "hierarchy": "Parameter referrer:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "registerInitializer",
            "slug": "registerinitializer",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "registerinitializer",
            "fullName": "Application.registerInitializer",
            "hierarchy": "Method registerInitializer\n  CallSignature registerInitializer:void\n    Parameter initializer:Initializer",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 66,
                "character": 21,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "registerInitializer",
                "slug": "registerinitializer-1",
                "flags": {},
                "alias": "registerinitializer-1",
                "fullName": "Application.registerInitializer.registerInitializer",
                "hierarchy": "CallSignature registerInitializer:void\n  Parameter initializer:Initializer",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 66,
                    "character": 21,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "initializer",
                    "slug": "initializer",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "initializer",
                    "fullName": "Application.registerInitializer.registerInitializer.initializer",
                    "hierarchy": "Parameter initializer:Initializer",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "Initializer",
                      "link": {
                        "id": "688",
                        "type": "interface",
                        "slug": "initializer",
                        "sources": [
                          {
                            "fileName": "application.ts",
                            "line": 33,
                            "character": 28,
                            "url": null
                          }
                        ],
                        "parent": {
                          "id": "317",
                          "type": "0",
                          "slug": "_glimmer_application",
                          "sources": null
                        }
                      }
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "render",
            "slug": "render",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "render",
            "fullName": "Application.render",
            "hierarchy": "Method render\n  CallSignature render:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 118,
                "character": 8,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "render",
                "slug": "render-1",
                "flags": {},
                "alias": "render-1",
                "fullName": "Application.render.render",
                "hierarchy": "CallSignature render:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 118,
                    "character": 8,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          },
          {
            "name": "renderComponent",
            "slug": "rendercomponent",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "rendercomponent",
            "fullName": "Application.renderComponent",
            "hierarchy": "Method renderComponent\n  CallSignature renderComponent:void\n    Parameter component:string | ComponentDefinition<Component>\n    Parameter parent:Node\n    Parameter nextSibling:Option<Node>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 137,
                "character": 17,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "renderComponent",
                "slug": "rendercomponent-1",
                "flags": {},
                "alias": "rendercomponent-1",
                "fullName": "Application.renderComponent.renderComponent",
                "hierarchy": "CallSignature renderComponent:void\n  Parameter component:string | ComponentDefinition<Component>\n  Parameter parent:Node\n  Parameter nextSibling:Option<Node>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 137,
                    "character": 17,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "component",
                    "slug": "component",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "component",
                    "fullName": "Application.renderComponent.renderComponent.component",
                    "hierarchy": "Parameter component:string | ComponentDefinition<Component>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string | ComponentDefinition<Component>",
                      "types": [
                        {
                          "isArray": false,
                          "name": "string"
                        },
                        {
                          "isArray": false,
                          "name": "ComponentDefinition"
                        }
                      ]
                    }
                  },
                  {
                    "name": "parent",
                    "slug": "parent",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "parent",
                    "fullName": "Application.renderComponent.renderComponent.parent",
                    "hierarchy": "Parameter parent:Node",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "Node"
                    }
                  },
                  {
                    "name": "nextSibling",
                    "slug": "nextsibling",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "nextsibling",
                    "fullName": "Application.renderComponent.renderComponent.nextSibling",
                    "hierarchy": "Parameter nextSibling:Option<Node>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "Option"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "rerender",
            "slug": "rerender",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "rerender",
            "fullName": "Application.rerender",
            "hierarchy": "Method rerender\n  CallSignature rerender:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 142,
                "character": 10,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "rerender",
                "slug": "rerender-1",
                "flags": {},
                "alias": "rerender-1",
                "fullName": "Application.rerender.rerender",
                "hierarchy": "CallSignature rerender:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 142,
                    "character": 10,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          },
          {
            "name": "scheduleRerender",
            "slug": "schedulererender",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "schedulererender",
            "fullName": "Application.scheduleRerender",
            "hierarchy": "Method scheduleRerender\n  CallSignature scheduleRerender:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 148,
                "character": 18,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "scheduleRerender",
                "slug": "schedulererender-1",
                "flags": {},
                "alias": "schedulererender-1",
                "fullName": "Application.scheduleRerender.scheduleRerender",
                "hierarchy": "CallSignature scheduleRerender:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 148,
                    "character": 18,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          }
        ]
      }
    }
  ]
}
;

return main;

})));
