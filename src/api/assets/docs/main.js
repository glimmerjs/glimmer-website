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
        }
      }
    },
    "relationships": {
      "docmodules": {
        "data": [
          {
            "id": "_glimmer_component",
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
        "hierarchy": "Global @glimmer/component\n  Class Component\n    Constructor constructor\n      ConstructorSignature new Component:Component\n        Parameter injections:object\n    Property args:object\n    Property debugName:string\n    Property element:Element\n    Method didInsertElement\n      CallSignature didInsertElement:void\n    Method didUpdate\n      CallSignature didUpdate:void\n    Method toString\n      CallSignature toString:string\n    Method create\n      CallSignature create:Component\n        Parameter injections:any\n  Function tracked\n    CallSignature tracked:MethodDecorator\n      Parameter dependencies:string[]\n    CallSignature tracked:any\n      Parameter target:any\n      Parameter key:any\n    CallSignature tracked:PropertyDescriptor\n      Parameter target:any\n      Parameter key:any\n      Parameter descriptor:PropertyDescriptor",
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
        "hierarchy": "Class Component\n  Constructor constructor\n    ConstructorSignature new Component:Component\n      Parameter injections:object\n  Property args:object\n  Property debugName:string\n  Property element:Element\n  Method didInsertElement\n    CallSignature didInsertElement:void\n  Method didUpdate\n    CallSignature didUpdate:void\n  Method toString\n    CallSignature toString:string\n  Method create\n    CallSignature create:Component\n      Parameter injections:any",
        "kindString": "Class",
        "sources": [
          {
            "fileName": "component.ts",
            "line": 44,
            "character": 15,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L44"
          }
        ],
        "comment": {
          "shortText": "A `Component` is an isolated element that is composed by two parts, the class and the template.\nWhile the template file is required, the class file is optional if your template is simple enough to skip it.",
          "text": "## Properties and arguments\n\n`Component`s have two different kinds of state, properties and arguments.\nProperties are internal to the component and declared in the class.\nArguments are any data passed to the component in the template.\n\nThis distinction avoids name collisions between internal and external data to the component.\nLet's see an example:\n\nIf you have the following component class:\n\n```ts\nimport Component from '@glimmer/component';\n\nexport default class extends Component {\n  spelling = \"potato\"\n}\n```\n\nAnd template:\n\n```hbs\n<div>You say {{@spelling}}, I say {{spelling}}.</div>\n```\n\nWhen you render the component like so:\n\n```hbs\n<my-component @spelling=\"poteto\" />\n```\n\nYou will see it render:\n\n```html\n<div>You say poteto, I say potato.</div>\n```\n"
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
            "hierarchy": "Constructor constructor\n  ConstructorSignature new Component:Component\n    Parameter injections:object",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 84,
                "character": 3,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L84"
              }
            ],
            "constructorSignatures": [
              {
                "name": "new Component",
                "slug": "new_component",
                "flags": {},
                "alias": "new_component",
                "fullName": "Component.constructor.new Component",
                "hierarchy": "ConstructorSignature new Component:Component\n  Parameter injections:object",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 84,
                    "character": 3,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L84"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "Component",
                  "link": {
                    "id": "1",
                    "type": "class",
                    "slug": "component",
                    "sources": [
                      {
                        "fileName": "component.ts",
                        "line": 44,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L44"
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
                    "fullName": "Component.constructor.new Component.injections",
                    "hierarchy": "Parameter injections:object",
                    "kindString": "Parameter",
                    "type": {
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
                "line": 80,
                "character": 6,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L80"
              }
            ],
            "comment": {
              "shortText": "Named arguments passed to the component from its parent component.\nThey can be accessed in JavaScript via `this.args.argumentName` and in the template via `@argumentName`.",
              "text": "Say you have the following component, which will have two `args`, `firstName` and `lastName`:\n\n```hbs\n<my-component @firstName=\"Arthur\" @lastName=\"Dent\" />\n```\n\nIf you needed to calculate `fullName` by combining both of them, you would do:\n\n```ts\ndidInsertElement() {\n  console.log(\"Hi,My full name is ${this.args.firstName} ${this.args.lastName\");\n}\n```\n\nWhile in the template you could do:\n\n```hbs\n<p>Welcome, {{@firstName}} {{@lastName}}!</p>\n```\n\n"
            },
            "type": {
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
                "line": 53,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L53"
              }
            ],
            "comment": {
              "shortText": "Development-mode only name of the component, useful for debugging.",
              "text": ""
            },
            "type": {
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
                "line": 48,
                "character": 9,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L48"
              }
            ],
            "comment": {
              "shortText": "The element corresponding to the top-level element of the component's template.",
              "text": ""
            },
            "type": {
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
                "line": 94,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L94"
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
                    "line": 94,
                    "character": 18,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L94"
                  }
                ],
                "comment": {
                  "shortText": "Called when the component has been inserted into the DOM.\nOverride this function to do any set up that requires an element in the document body.",
                  "text": ""
                },
                "type": {
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
                "line": 100,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L100"
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
                    "line": 100,
                    "character": 11,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L100"
                  }
                ],
                "comment": {
                  "shortText": "Called when the component has updated and rerendered itself.\nCalled only during a rerender, not during an initial render.",
                  "text": ""
                },
                "type": {
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
                "line": 102,
                "character": 10,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L102"
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
                    "line": 102,
                    "character": 10,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L102"
                  }
                ],
                "type": {
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
                "line": 82,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L82"
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
                    "line": 82,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L82"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "Component",
                  "link": {
                    "id": "1",
                    "type": "class",
                    "slug": "component",
                    "sources": [
                      {
                        "fileName": "component.ts",
                        "line": 44,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/component.ts#L44"
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
                    "slug": "injections-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "injections-1",
                    "fullName": "Component.create.create.injections",
                    "hierarchy": "Parameter injections:any",
                    "kindString": "Parameter",
                    "type": {
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
            "line": 14,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/tracked.ts#L14"
          },
          {
            "fileName": "tracked.ts",
            "line": 15,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/tracked.ts#L15"
          },
          {
            "fileName": "tracked.ts",
            "line": 16,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/tracked.ts#L16"
          },
          {
            "fileName": "tracked.ts",
            "line": 17,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/tracked.ts#L17"
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
                "line": 14,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/tracked.ts#L14"
              }
            ],
            "comment": {
              "shortText": "Marks a property has tracked.",
              "text": "By default, a component's properties are expected to be static,\nmeaning you are not able to update them and have the template update accordingly.\nMarking a property as tracked means that when that property changes,\na rerender of the component is scheduled so the template is kept up to date.\n",
              "tags": []
            },
            "type": {
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
                  "text": "Optional dependents to be tracked.\n"
                },
                "type": {
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
                "line": 15,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/tracked.ts#L15"
              }
            ],
            "type": {
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
                "type": {
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
                "type": {
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
                "line": 16,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/8abd55c/src/tracked.ts#L16"
              }
            ],
            "type": {
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
                "type": {
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
                "type": {
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
                "type": {
                  "isArray": false,
                  "name": "PropertyDescriptor"
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
