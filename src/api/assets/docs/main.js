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
          "cachedreference": "123",
          "component": "1",
          "componentdefinition": "300",
          "componentmanager": "246",
          "componentpathreference": "114",
          "componentstatebucket": "235",
          "conditionalreference": "216",
          "meta": "21",
          "nestedpropertyreference": "181",
          "propertyreference": "148",
          "rootpropertyreference": "162",
          "rootreference": "136",
          "untrackedpropertyerror": "38",
          "updatablereference": "201",
          "componentfactory": "17",
          "constructoroptions": "233",
          "interceptors": "35",
          "untrackedpropertyerrorthrower": "50"
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
        "hierarchy": "Global @glimmer/component\n  Class CachedReference<T>\n    TypeParameter T\n    Property _lastRevision:number | null\n    Property _lastValue:any\n    Accessor tag\n      GetSignature __get:Tag\n    Method compute\n      CallSignature compute:T\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n  Class Component\n    Constructor constructor\n      ConstructorSignature new Component:Component\n        Parameter injections:object\n    Property args:object\n    Property debugName:string\n    Property element:Element\n    Method didInsertElement\n      CallSignature didInsertElement:void\n    Method didUpdate\n      CallSignature didUpdate:void\n    Method toString\n      CallSignature toString:string\n    Method create\n      CallSignature create:Component\n        Parameter injections:any\n  Class ComponentDefinition\n    Constructor constructor\n      ConstructorSignature new ComponentDefinition:ComponentDefinition\n        Parameter name:string\n        Parameter manager:ComponentManager\n        Parameter template:Template<TemplateMeta>\n        Parameter componentFactory:ComponentFactory\n    Property ComponentClass:ComponentClass\n    Property args:CapturedArguments\n    Property componentFactory:ComponentFactory\n    Property manager:ComponentManager<ComponentStateBucket>\n    Property name:string\n    Property template:Template<TemplateMeta>\n    Method toJSON\n      CallSignature toJSON:object\n        TypeLiteral __type\n          Variable GlimmerDebug:string\n  Class ComponentManager\n    Constructor constructor\n      ConstructorSignature new ComponentManager:ComponentManager\n        Parameter options:ConstructorOptions\n    Property env:Environment\n    Method create\n      CallSignature create:ComponentStateBucket | null\n        Parameter environment:Environment\n        Parameter definition:ComponentDefinition\n        Parameter volatileArgs:Arguments\n    Method createComponentDefinition\n      CallSignature createComponentDefinition:ComponentDefinition\n        Parameter name:string\n        Parameter template:Template<any>\n        Parameter componentFactory:Factory<Component>\n    Method didCreate\n      CallSignature didCreate:void\n        Parameter bucket:ComponentStateBucket\n    Method didCreateElement\n      CallSignature didCreateElement:void\n        Parameter bucket:ComponentStateBucket\n        Parameter element:Element\n    Method didRenderLayout\n      CallSignature didRenderLayout:void\n        Parameter bucket:ComponentStateBucket\n        Parameter bounds:Bounds\n    Method didUpdate\n      CallSignature didUpdate:void\n        Parameter bucket:ComponentStateBucket\n    Method didUpdateLayout\n      CallSignature didUpdateLayout:void\n    Method getDestructor\n      CallSignature getDestructor:null\n    Method getSelf\n      CallSignature getSelf:RootReference\n        Parameter bucket:ComponentStateBucket\n    Method getTag\n      CallSignature getTag:null\n    Method layoutFor\n      CallSignature layoutFor:CompiledDynamicProgram\n        Parameter definition:ComponentDefinition\n        Parameter bucket:ComponentStateBucket\n        Parameter env:Environment\n    Method prepareArgs\n      CallSignature prepareArgs:null\n        Parameter definition:ComponentDefinition\n        Parameter args:Arguments\n    Method update\n      CallSignature update:void\n        Parameter bucket:ComponentStateBucket\n        Parameter scope:DynamicScope\n    Method create\n      CallSignature create:ComponentManager\n        Parameter options:ConstructorOptions\n  Class ComponentPathReference<T>\n    TypeParameter T\n    Accessor tag\n      GetSignature __get:Tag\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:T\n  Class ComponentStateBucket\n    Constructor constructor\n      ConstructorSignature new ComponentStateBucket:ComponentStateBucket\n        Parameter definition:ComponentDefinition\n        Parameter args:CapturedArguments\n        Parameter owner:Owner\n    Property args:CapturedArguments\n    Property component:Component\n    Property name:string\n    Method namedArgsSnapshot\n      CallSignature namedArgsSnapshot:Readonly<Dict<any | void>>\n  Class ConditionalReference\n    Constructor constructor\n      ConstructorSignature new ConditionalReference:ConditionalReference\n        Parameter inner:Reference<Opaque>\n    Property tag:Tag\n    Method toBool\n      CallSignature toBool:boolean\n        Parameter value:Opaque\n    Method value\n      CallSignature value:boolean\n    Method create\n      CallSignature create:PrimitiveReference<any> | ConditionalReference\n        Parameter reference:PathReference<any>\n  Class Meta\n    Constructor constructor\n      ConstructorSignature new Meta:Meta\n        Parameter parent:Meta\n    Property computedPropertyTags:Dict<TagWrapper<DirtyableTag>>\n    Property tags:Dict<Tag>\n    Property trackedProperties:Dict<boolean>\n    Property trackedPropertyDependencies:Dict<string[]>\n    Method dirtyableTagFor\n      CallSignature dirtyableTagFor:TagWrapper<DirtyableTag>\n        Parameter key:Key\n    Method tagFor\n      CallSignature tagFor:Tag\n        Parameter key:Key\n  Class NestedPropertyReference\n    Constructor constructor\n      ConstructorSignature new NestedPropertyReference:NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n    Property _parentObjectTag:TagWrapper<UpdatableTag>\n    Property _parentReference:PathReference<any>\n    Property _propertyKey:string\n    Property tag:Tag\n    Method compute\n      CallSignature compute:any\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n    Method create\n      CallSignature create:RootPropertyReference | NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n  Class PropertyReference\n    Accessor tag\n      GetSignature __get:Tag\n    Method compute\n      CallSignature compute:any\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n    Method create\n      CallSignature create:RootPropertyReference | NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n  Class RootPropertyReference\n    Constructor constructor\n      ConstructorSignature new RootPropertyReference:RootPropertyReference\n        Parameter parentValue:object\n        Parameter propertyKey:string\n    Property _parentValue:object\n    Property _propertyKey:string\n    Property tag:Tag\n    Method compute\n      CallSignature compute:any\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n    Method create\n      CallSignature create:RootPropertyReference | NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n  Class RootReference\n    Constructor constructor\n      ConstructorSignature new RootReference:RootReference\n        Parameter inner:any\n    Property children:Dict<RootPropertyReference>\n    Property inner:any\n    Property tag:Tag\n    Method get\n      CallSignature get:RootPropertyReference\n        Parameter propertyKey:string\n    Method value\n      CallSignature value:any\n  Class UntrackedPropertyError\n    Constructor constructor\n      ConstructorSignature new UntrackedPropertyError:UntrackedPropertyError\n        Parameter target:any\n        Parameter key:string\n        Parameter message:string\n    Property key:string\n    Property target:any\n    Property Error:ErrorConstructor\n    Property message:string\n    Property name:string\n    Property stack:string\n  Class UpdatableReference<T>\n    TypeParameter T\n    Constructor constructor\n      ConstructorSignature new UpdatableReference:UpdatableReference\n        Parameter value:T\n    Property _value:T\n    Property tag:TagWrapper<DirtyableTag>\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method update\n      CallSignature update:void\n        Parameter value:T\n    Method value\n      CallSignature value:T\n  Interface ComponentFactory\n    Method create\n      CallSignature create:Component\n        Parameter injections:object\n  Interface ConstructorOptions\n    Property env:Environment\n  Interface Interceptors\n    IndexSignature __index:boolean\n      Parameter key:string\n  Interface UntrackedPropertyErrorThrower\n    CallSignature __call:void\n      Parameter obj:any\n      Parameter key:string\n  TypeAlias Key:string\n  Variable META:symbol\n  Variable hOP:hasOwnProperty\n  Function buildError\n    CallSignature buildError:void\n      Parameter obj:any\n      Parameter key:string\n  Function combinatorForComputedProperties\n    CallSignature combinatorForComputedProperties:Tag\n      Parameter meta:Meta\n      Parameter key:Key\n      Parameter dependencies:Key[] | void\n  Function defaultErrorThrower\n    CallSignature defaultErrorThrower:UntrackedPropertyError\n      Parameter obj:any\n      Parameter key:string\n  Function descriptorForTrackedComputedProperty\n    CallSignature descriptorForTrackedComputedProperty:PropertyDescriptor\n      Parameter target:any\n      Parameter key:any\n      Parameter descriptor:PropertyDescriptor\n      Parameter dependencies:string[]\n  Function hasOwnProperty\n    CallSignature hasOwnProperty:any\n      Parameter obj:any\n      Parameter key:symbol\n  Function hasTag\n    CallSignature hasTag:boolean\n      Parameter obj:any\n      Parameter key:string\n  Function installDevModeErrorInterceptor\n    CallSignature installDevModeErrorInterceptor:void\n      Parameter obj:object\n      Parameter key:string\n      Parameter throwError:UntrackedPropertyErrorThrower\n  Function installTrackedProperty\n    CallSignature installTrackedProperty:void\n      Parameter target:any\n      Parameter key:Key\n  Function metaFor\n    CallSignature metaFor:Meta\n      Parameter obj:any\n  Function propertyDidChange\n    CallSignature propertyDidChange:void\n  Function setPropertyDidChange\n    CallSignature setPropertyDidChange:void\n      Parameter cb:function\n        TypeLiteral __type\n          CallSignature __call:void\n  Function tagForProperty\n    CallSignature tagForProperty:Tag\n      Parameter obj:any\n      Parameter key:string\n      Parameter throwError:UntrackedPropertyErrorThrower\n  Function tracked\n    CallSignature tracked:MethodDecorator\n      Parameter dependencies:string[]\n    CallSignature tracked:any\n      Parameter target:any\n      Parameter key:any\n    CallSignature tracked:PropertyDescriptor\n      Parameter target:any\n      Parameter key:any\n      Parameter descriptor:PropertyDescriptor",
        "packageInfo": {
          "name": "@glimmer/component",
          "version": "0.3.6",
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
            "@glimmer/util": "^0.23.0-alpha.6"
          },
          "peerDependencies": {
            "@glimmer/application": "^0.3.6",
            "@glimmer/di": "^0.1.9",
            "@glimmer/reference": "^0.23.0-alpha.6",
            "@glimmer/runtime": "^0.23.0-alpha.6"
          },
          "devDependencies": {
            "@glimmer/application": "^0.3.0",
            "@glimmer/build": "^0.6.1",
            "@glimmer/compiler": "^0.23.0-alpha.6",
            "@glimmer/interfaces": "^0.23.0-alpha.6",
            "@glimmer/resolver": "^0.3.0",
            "@glimmer/wire-format": "^0.23.0-alpha.6",
            "broccoli": "^1.1.0",
            "broccoli-cli": "^1.0.0",
            "ember-cli": "^2.12.0",
            "testem": "^1.13.0"
          }
        },
        "readme": "<h1 id=\"glimmer-component-build-status-https-secure-travis-ci-org-glimmerjs-glimmer-component-svg-branch-master-http-travis-ci-org-glimmerjs-glimmer-component-\">glimmer-component <a href=\"http://travis-ci.org/glimmerjs/glimmer-component\"><img src=\"https://secure.travis-ci.org/glimmerjs/glimmer-component.svg?branch=master\" alt=\"Build Status\"></a></h1>\n<h2 id=\"acknowledgements\">Acknowledgements</h2>\n<p>Thanks to <a href=\"http://monegraph.com\">Monegraph</a> for funding the initial development\nof this library.</p>\n<h2 id=\"license\">License</h2>\n<p>MIT License.</p>\n",
        "typeAliases": [
          {
            "name": "Key",
            "slug": "key",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "key",
            "fullName": "Key",
            "hierarchy": "TypeAlias Key:string",
            "kindString": "Type alias",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 50,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L50"
              }
            ],
            "type": {
              "isArray": false,
              "name": "string"
            }
          }
        ],
        "variables": [
          {
            "name": "META",
            "slug": "meta",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "meta",
            "fullName": "META",
            "hierarchy": "Variable META:symbol",
            "kindString": "Variable",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 178,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L178"
              }
            ],
            "type": {
              "isArray": false,
              "name": "symbol"
            }
          },
          {
            "name": "hOP",
            "slug": "hop",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "hop",
            "fullName": "hOP",
            "hierarchy": "Variable hOP:hasOwnProperty",
            "kindString": "Variable",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 189,
                "character": 7,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L189"
              }
            ],
            "type": {
              "isArray": false,
              "name": "hasOwnProperty"
            }
          }
        ],
        "functions": [
          {
            "name": "buildError",
            "slug": "builderror",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "builderror",
            "fullName": "buildError",
            "hierarchy": "Function buildError\n  CallSignature buildError:void\n    Parameter obj:any\n    Parameter key:string",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 79,
                "character": 19,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L79"
              }
            ],
            "callSignatures": [
              {
                "name": "buildError",
                "slug": "builderror-1",
                "flags": {},
                "alias": "builderror-1",
                "fullName": "buildError.buildError",
                "hierarchy": "CallSignature buildError:void\n  Parameter obj:any\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 79,
                    "character": 19,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L79"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "obj",
                    "slug": "obj",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "obj",
                    "fullName": "buildError.buildError.obj",
                    "hierarchy": "Parameter obj:any",
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
                    "fullName": "buildError.buildError.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "combinatorForComputedProperties",
            "slug": "combinatorforcomputedproperties",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "combinatorforcomputedproperties",
            "fullName": "combinatorForComputedProperties",
            "hierarchy": "Function combinatorForComputedProperties\n  CallSignature combinatorForComputedProperties:Tag\n    Parameter meta:Meta\n    Parameter key:Key\n    Parameter dependencies:Key[] | void",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 159,
                "character": 40,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L159"
              }
            ],
            "callSignatures": [
              {
                "name": "combinatorForComputedProperties",
                "slug": "combinatorforcomputedproperties-1",
                "flags": {},
                "alias": "combinatorforcomputedproperties-1",
                "fullName": "combinatorForComputedProperties.combinatorForComputedProperties",
                "hierarchy": "CallSignature combinatorForComputedProperties:Tag\n  Parameter meta:Meta\n  Parameter key:Key\n  Parameter dependencies:Key[] | void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 159,
                    "character": 40,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L159"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "Tag"
                },
                "parameters": [
                  {
                    "name": "meta",
                    "slug": "meta",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "meta",
                    "fullName": "combinatorForComputedProperties.combinatorForComputedProperties.meta",
                    "hierarchy": "Parameter meta:Meta",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Meta",
                      "link": {
                        "id": "21",
                        "type": "class",
                        "slug": "meta",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 101,
                            "character": 25,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L101"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
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
                    "fullName": "combinatorForComputedProperties.combinatorForComputedProperties.key",
                    "hierarchy": "Parameter key:Key",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Key",
                      "link": {
                        "id": "70",
                        "type": "type-alias",
                        "slug": "key",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 50,
                            "character": 15,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L50"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  },
                  {
                    "name": "dependencies",
                    "slug": "dependencies",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "dependencies",
                    "fullName": "combinatorForComputedProperties.combinatorForComputedProperties.dependencies",
                    "hierarchy": "Parameter dependencies:Key[] | void",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Key[] | void",
                      "types": [
                        {
                          "isArray": true,
                          "name": "Key",
                          "link": {
                            "id": "70",
                            "type": "type-alias",
                            "slug": "key",
                            "sources": [
                              {
                                "fileName": "tracked.ts",
                                "line": 50,
                                "character": 15,
                                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L50"
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
                        {
                          "isArray": false,
                          "name": "void"
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "defaultErrorThrower",
            "slug": "defaulterrorthrower",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "defaulterrorthrower",
            "fullName": "defaultErrorThrower",
            "hierarchy": "Function defaultErrorThrower\n  CallSignature defaultErrorThrower:UntrackedPropertyError\n    Parameter obj:any\n    Parameter key:string",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 223,
                "character": 28,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L223"
              }
            ],
            "callSignatures": [
              {
                "name": "defaultErrorThrower",
                "slug": "defaulterrorthrower-1",
                "flags": {},
                "alias": "defaulterrorthrower-1",
                "fullName": "defaultErrorThrower.defaultErrorThrower",
                "hierarchy": "CallSignature defaultErrorThrower:UntrackedPropertyError\n  Parameter obj:any\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 223,
                    "character": 28,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L223"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "UntrackedPropertyError",
                  "link": {
                    "id": "38",
                    "type": "class",
                    "slug": "untrackedpropertyerror",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 209,
                        "character": 35,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L209"
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
                    "name": "obj",
                    "slug": "obj",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "obj",
                    "fullName": "defaultErrorThrower.defaultErrorThrower.obj",
                    "hierarchy": "Parameter obj:any",
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
                    "fullName": "defaultErrorThrower.defaultErrorThrower.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "descriptorForTrackedComputedProperty",
            "slug": "descriptorfortrackedcomputedproperty",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "descriptorfortrackedcomputedproperty",
            "fullName": "descriptorForTrackedComputedProperty",
            "hierarchy": "Function descriptorForTrackedComputedProperty\n  CallSignature descriptorForTrackedComputedProperty:PropertyDescriptor\n    Parameter target:any\n    Parameter key:any\n    Parameter descriptor:PropertyDescriptor\n    Parameter dependencies:string[]",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 33,
                "character": 45,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L33"
              }
            ],
            "callSignatures": [
              {
                "name": "descriptorForTrackedComputedProperty",
                "slug": "descriptorfortrackedcomputedproperty-1",
                "flags": {},
                "alias": "descriptorfortrackedcomputedproperty-1",
                "fullName": "descriptorForTrackedComputedProperty.descriptorForTrackedComputedProperty",
                "hierarchy": "CallSignature descriptorForTrackedComputedProperty:PropertyDescriptor\n  Parameter target:any\n  Parameter key:any\n  Parameter descriptor:PropertyDescriptor\n  Parameter dependencies:string[]",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 33,
                    "character": 45,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L33"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "PropertyDescriptor"
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
                    "fullName": "descriptorForTrackedComputedProperty.descriptorForTrackedComputedProperty.target",
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
                    "fullName": "descriptorForTrackedComputedProperty.descriptorForTrackedComputedProperty.key",
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
                    "fullName": "descriptorForTrackedComputedProperty.descriptorForTrackedComputedProperty.descriptor",
                    "hierarchy": "Parameter descriptor:PropertyDescriptor",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "PropertyDescriptor"
                    }
                  },
                  {
                    "name": "dependencies",
                    "slug": "dependencies",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "dependencies",
                    "fullName": "descriptorForTrackedComputedProperty.descriptorForTrackedComputedProperty.dependencies",
                    "hierarchy": "Parameter dependencies:string[]",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": true,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "hasOwnProperty",
            "slug": "hasownproperty",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "hasownproperty",
            "fullName": "hasOwnProperty",
            "hierarchy": "Function hasOwnProperty\n  CallSignature hasOwnProperty:any\n    Parameter obj:any\n    Parameter key:symbol",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 190,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L190"
              }
            ],
            "callSignatures": [
              {
                "name": "hasOwnProperty",
                "slug": "hasownproperty-1",
                "flags": {},
                "alias": "hasownproperty-1",
                "fullName": "hasOwnProperty.hasOwnProperty",
                "hierarchy": "CallSignature hasOwnProperty:any\n  Parameter obj:any\n  Parameter key:symbol",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 190,
                    "character": 23,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L190"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "any"
                },
                "parameters": [
                  {
                    "name": "obj",
                    "slug": "obj",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "obj",
                    "fullName": "hasOwnProperty.hasOwnProperty.obj",
                    "hierarchy": "Parameter obj:any",
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
                    "fullName": "hasOwnProperty.hasOwnProperty.key",
                    "hierarchy": "Parameter key:symbol",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "symbol"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "hasTag",
            "slug": "hastag",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "hastag",
            "fullName": "hasTag",
            "hierarchy": "Function hasTag\n  CallSignature hasTag:boolean\n    Parameter obj:any\n    Parameter key:string",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 200,
                "character": 22,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L200"
              }
            ],
            "callSignatures": [
              {
                "name": "hasTag",
                "slug": "hastag-1",
                "flags": {},
                "alias": "hastag-1",
                "fullName": "hasTag.hasTag",
                "hierarchy": "CallSignature hasTag:boolean\n  Parameter obj:any\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 200,
                    "character": 22,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L200"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "boolean"
                },
                "parameters": [
                  {
                    "name": "obj",
                    "slug": "obj",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "obj",
                    "fullName": "hasTag.hasTag.obj",
                    "hierarchy": "Parameter obj:any",
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
                    "fullName": "hasTag.hasTag.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "installDevModeErrorInterceptor",
            "slug": "installdevmodeerrorinterceptor",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "installdevmodeerrorinterceptor",
            "fullName": "installDevModeErrorInterceptor",
            "hierarchy": "Function installDevModeErrorInterceptor\n  CallSignature installDevModeErrorInterceptor:void\n    Parameter obj:object\n    Parameter key:string\n    Parameter throwError:UntrackedPropertyErrorThrower",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 245,
                "character": 39,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L245"
              }
            ],
            "callSignatures": [
              {
                "name": "installDevModeErrorInterceptor",
                "slug": "installdevmodeerrorinterceptor-1",
                "flags": {},
                "alias": "installdevmodeerrorinterceptor-1",
                "fullName": "installDevModeErrorInterceptor.installDevModeErrorInterceptor",
                "hierarchy": "CallSignature installDevModeErrorInterceptor:void\n  Parameter obj:object\n  Parameter key:string\n  Parameter throwError:UntrackedPropertyErrorThrower",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 245,
                    "character": 39,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L245"
                  }
                ],
                "comment": {
                  "shortText": "In development mode only, we install an ad hoc setter on properties where a\ntag is requested (i.e., it was used in a template) without being tracked. In\ncases where the property is set, we raise an error.",
                  "text": ""
                },
                "type": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "obj",
                    "slug": "obj",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "obj",
                    "fullName": "installDevModeErrorInterceptor.installDevModeErrorInterceptor.obj",
                    "hierarchy": "Parameter obj:object",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "object"
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
                    "fullName": "installDevModeErrorInterceptor.installDevModeErrorInterceptor.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "throwError",
                    "slug": "throwerror",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "throwerror",
                    "fullName": "installDevModeErrorInterceptor.installDevModeErrorInterceptor.throwError",
                    "hierarchy": "Parameter throwError:UntrackedPropertyErrorThrower",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "UntrackedPropertyErrorThrower",
                      "link": {
                        "id": "50",
                        "type": "interface",
                        "slug": "untrackedpropertyerrorthrower",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 219,
                            "character": 46,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L219"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
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
            "name": "installTrackedProperty",
            "slug": "installtrackedproperty",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "installtrackedproperty",
            "fullName": "installTrackedProperty",
            "hierarchy": "Function installTrackedProperty\n  CallSignature installTrackedProperty:void\n    Parameter target:any\n    Parameter key:Key",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 61,
                "character": 31,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L61"
              }
            ],
            "callSignatures": [
              {
                "name": "installTrackedProperty",
                "slug": "installtrackedproperty-1",
                "flags": {},
                "alias": "installtrackedproperty-1",
                "fullName": "installTrackedProperty.installTrackedProperty",
                "hierarchy": "CallSignature installTrackedProperty:void\n  Parameter target:any\n  Parameter key:Key",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 61,
                    "character": 31,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L61"
                  }
                ],
                "comment": {
                  "shortText": "Installs a getter/setter for change tracking. The accessor\nacts just like a normal property, but it triggers the `propertyDidChange`\nhook when written to.",
                  "text": "Values are saved on the object using a \"shadow key,\" or a symbol based on the\ntracked property name. Sets write the value to the shadow key, and gets read\nfrom it.\n"
                },
                "type": {
                  "isArray": false,
                  "name": "void"
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
                    "fullName": "installTrackedProperty.installTrackedProperty.target",
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
                    "fullName": "installTrackedProperty.installTrackedProperty.key",
                    "hierarchy": "Parameter key:Key",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Key",
                      "link": {
                        "id": "70",
                        "type": "type-alias",
                        "slug": "key",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 50,
                            "character": 15,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L50"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
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
            "name": "metaFor",
            "slug": "metafor",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "metafor",
            "fullName": "metaFor",
            "hierarchy": "Function metaFor\n  CallSignature metaFor:Meta\n    Parameter obj:any",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 180,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L180"
              }
            ],
            "callSignatures": [
              {
                "name": "metaFor",
                "slug": "metafor-1",
                "flags": {},
                "alias": "metafor-1",
                "fullName": "metaFor.metaFor",
                "hierarchy": "CallSignature metaFor:Meta\n  Parameter obj:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 180,
                    "character": 23,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L180"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "Meta",
                  "link": {
                    "id": "21",
                    "type": "class",
                    "slug": "meta",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 101,
                        "character": 25,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L101"
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
                    "name": "obj",
                    "slug": "obj",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "obj",
                    "fullName": "metaFor.metaFor.obj",
                    "hierarchy": "Parameter obj:any",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "any"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "propertyDidChange",
            "slug": "propertydidchange",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "propertydidchange",
            "fullName": "propertyDidChange",
            "hierarchy": "Function propertyDidChange\n  CallSignature propertyDidChange:void",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 194,
                "character": 21,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L194"
              }
            ],
            "callSignatures": [
              {
                "name": "propertyDidChange",
                "slug": "propertydidchange-1",
                "flags": {},
                "alias": "propertydidchange-1",
                "fullName": "propertyDidChange.propertyDidChange",
                "hierarchy": "CallSignature propertyDidChange:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 194,
                    "character": 23,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L194"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          },
          {
            "name": "setPropertyDidChange",
            "slug": "setpropertydidchange",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "setpropertydidchange",
            "fullName": "setPropertyDidChange",
            "hierarchy": "Function setPropertyDidChange\n  CallSignature setPropertyDidChange:void\n    Parameter cb:function\n      TypeLiteral __type\n        CallSignature __call:void",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 196,
                "character": 36,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L196"
              }
            ],
            "callSignatures": [
              {
                "name": "setPropertyDidChange",
                "slug": "setpropertydidchange-1",
                "flags": {},
                "alias": "setpropertydidchange-1",
                "fullName": "setPropertyDidChange.setPropertyDidChange",
                "hierarchy": "CallSignature setPropertyDidChange:void\n  Parameter cb:function\n    TypeLiteral __type\n      CallSignature __call:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 196,
                    "character": 36,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L196"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "cb",
                    "slug": "cb",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "cb",
                    "fullName": "setPropertyDidChange.setPropertyDidChange.cb",
                    "hierarchy": "Parameter cb:function\n  TypeLiteral __type\n    CallSignature __call:void",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "function",
                      "declaration": {
                        "id": "94",
                        "type": "type-literal",
                        "attributes": {
                          "name": "__type",
                          "slug": "__type",
                          "flags": {},
                          "alias": "__type",
                          "fullName": "setPropertyDidChange.setPropertyDidChange.cb.__type",
                          "hierarchy": "TypeLiteral __type\n  CallSignature __call:void",
                          "kindString": "Type literal",
                          "sources": [
                            {
                              "fileName": "tracked.ts",
                              "line": 196,
                              "character": 40,
                              "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L196"
                            }
                          ],
                          "callSignatures": [
                            {
                              "name": "__call",
                              "slug": "__call",
                              "flags": {},
                              "alias": "__call",
                              "fullName": "setPropertyDidChange.setPropertyDidChange.cb.__type.__call",
                              "hierarchy": "CallSignature __call:void",
                              "kindString": "Call signature",
                              "sources": [
                                {
                                  "fileName": "tracked.ts",
                                  "line": 196,
                                  "character": 40,
                                  "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L196"
                                }
                              ],
                              "type": {
                                "isArray": false,
                                "name": "void"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "typeLiterals": [
                      {
                        "name": "__type",
                        "slug": "__type",
                        "flags": {},
                        "alias": "__type",
                        "fullName": "setPropertyDidChange.setPropertyDidChange.cb.__type",
                        "hierarchy": "TypeLiteral __type\n  CallSignature __call:void",
                        "kindString": "Type literal",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 196,
                            "character": 40,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L196"
                          }
                        ],
                        "callSignatures": [
                          {
                            "name": "__call",
                            "slug": "__call",
                            "flags": {},
                            "alias": "__call",
                            "fullName": "setPropertyDidChange.setPropertyDidChange.cb.__type.__call",
                            "hierarchy": "CallSignature __call:void",
                            "kindString": "Call signature",
                            "sources": [
                              {
                                "fileName": "tracked.ts",
                                "line": 196,
                                "character": 40,
                                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L196"
                              }
                            ],
                            "type": {
                              "isArray": false,
                              "name": "void"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "tagForProperty",
            "slug": "tagforproperty",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "tagforproperty",
            "fullName": "tagForProperty",
            "hierarchy": "Function tagForProperty\n  CallSignature tagForProperty:Tag\n    Parameter obj:any\n    Parameter key:string\n    Parameter throwError:UntrackedPropertyErrorThrower",
            "kindString": "Function",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 227,
                "character": 30,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L227"
              }
            ],
            "callSignatures": [
              {
                "name": "tagForProperty",
                "slug": "tagforproperty-1",
                "flags": {},
                "alias": "tagforproperty-1",
                "fullName": "tagForProperty.tagForProperty",
                "hierarchy": "CallSignature tagForProperty:Tag\n  Parameter obj:any\n  Parameter key:string\n  Parameter throwError:UntrackedPropertyErrorThrower",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 227,
                    "character": 30,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L227"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "Tag"
                },
                "parameters": [
                  {
                    "name": "obj",
                    "slug": "obj",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "obj",
                    "fullName": "tagForProperty.tagForProperty.obj",
                    "hierarchy": "Parameter obj:any",
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
                    "fullName": "tagForProperty.tagForProperty.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "throwError",
                    "slug": "throwerror",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "throwerror",
                    "fullName": "tagForProperty.tagForProperty.throwError",
                    "hierarchy": "Parameter throwError:UntrackedPropertyErrorThrower",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "UntrackedPropertyErrorThrower",
                      "link": {
                        "id": "50",
                        "type": "interface",
                        "slug": "untrackedpropertyerrorthrower",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 219,
                            "character": 46,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L219"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
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
            "name": "tracked",
            "slug": "tracked",
            "flags": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L14"
              },
              {
                "fileName": "tracked.ts",
                "line": 15,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L15"
              },
              {
                "fileName": "tracked.ts",
                "line": 16,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L16"
              },
              {
                "fileName": "tracked.ts",
                "line": 17,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L17"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L14"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L15"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L16"
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
        ]
      },
      "relationships": {
        "classes": {
          "data": [
            {
              "type": "class",
              "id": "123"
            },
            {
              "type": "class",
              "id": "1"
            },
            {
              "type": "class",
              "id": "300"
            },
            {
              "type": "class",
              "id": "246"
            },
            {
              "type": "class",
              "id": "114"
            },
            {
              "type": "class",
              "id": "235"
            },
            {
              "type": "class",
              "id": "216"
            },
            {
              "type": "class",
              "id": "21"
            },
            {
              "type": "class",
              "id": "181"
            },
            {
              "type": "class",
              "id": "148"
            },
            {
              "type": "class",
              "id": "162"
            },
            {
              "type": "class",
              "id": "136"
            },
            {
              "type": "class",
              "id": "38"
            },
            {
              "type": "class",
              "id": "201"
            }
          ]
        },
        "interfaces": {
          "data": [
            {
              "type": "interface",
              "id": "17"
            },
            {
              "type": "interface",
              "id": "233"
            },
            {
              "type": "interface",
              "id": "35"
            },
            {
              "type": "interface",
              "id": "50"
            }
          ]
        }
      }
    },
    {
      "id": "123",
      "type": "class",
      "attributes": {
        "name": "CachedReference",
        "slug": "cachedreference",
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
        "alias": "cachedreference",
        "fullName": "CachedReference",
        "hierarchy": "Class CachedReference<T>\n  TypeParameter T\n  Property _lastRevision:number | null\n  Property _lastValue:any\n  Accessor tag\n    GetSignature __get:Tag\n  Method compute\n    CallSignature compute:T\n  Method get\n    CallSignature get:PathReference<any>\n      Parameter key:string\n  Method value\n    CallSignature value:any",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedPathReference"
          }
        ],
        "extendedTypes": [
          {
            "isArray": false,
            "name": "ComponentPathReference",
            "link": {
              "id": "114",
              "type": "class",
              "slug": "componentpathreference",
              "sources": [
                {
                  "fileName": "references.ts",
                  "line": 24,
                  "character": 44,
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L24"
                }
              ],
              "parent": {
                "id": "0",
                "type": "0",
                "slug": "_glimmer_component",
                "sources": null
              }
            }
          }
        ],
        "sources": [
          {
            "fileName": "references.ts",
            "line": 33,
            "character": 37,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L33"
          }
        ],
        "typeParameters": [
          {
            "name": "T",
            "slug": "t",
            "flags": {},
            "alias": "t",
            "fullName": "CachedReference.T",
            "hierarchy": "TypeParameter T",
            "kindString": "Type parameter"
          }
        ],
        "properties": [
          {
            "name": "_lastRevision",
            "slug": "_lastrevision",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_lastrevision",
            "fullName": "CachedReference._lastRevision",
            "hierarchy": "Property _lastRevision:number | null",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 34,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L34"
              }
            ],
            "type": {
              "isArray": false,
              "name": "number | null",
              "types": [
                {
                  "isArray": false,
                  "name": "number"
                },
                {
                  "isArray": false,
                  "name": "null"
                }
              ]
            }
          },
          {
            "name": "_lastValue",
            "slug": "_lastvalue",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_lastvalue",
            "fullName": "CachedReference._lastValue",
            "hierarchy": "Property _lastValue:any",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 35,
                "character": 20,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L35"
              }
            ],
            "type": {
              "isArray": false,
              "name": "any"
            }
          }
        ],
        "methods": [
          {
            "name": "compute",
            "slug": "compute",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "compute",
            "fullName": "CachedReference.compute",
            "hierarchy": "Method compute\n  CallSignature compute:T",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 37,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L37"
              }
            ],
            "callSignatures": [
              {
                "name": "compute",
                "slug": "compute-1",
                "flags": {},
                "alias": "compute-1",
                "fullName": "CachedReference.compute.compute",
                "hierarchy": "CallSignature compute:T",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 37,
                    "character": 18,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L37"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "T"
                }
              }
            ]
          },
          {
            "name": "get",
            "slug": "get",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "get",
            "fullName": "CachedReference.get",
            "hierarchy": "Method get\n  CallSignature get:PathReference<any>\n    Parameter key:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 28,
                "character": 5,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L28"
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "CachedReference.get.get",
                "hierarchy": "CallSignature get:PathReference<any>\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 28,
                    "character": 5,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L28"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "PathReference"
                },
                "parameters": [
                  {
                    "name": "key",
                    "slug": "key",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "key",
                    "fullName": "CachedReference.get.get.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "value",
            "slug": "value",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "value",
            "fullName": "CachedReference.value",
            "hierarchy": "Method value\n  CallSignature value:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 39,
                "character": 7,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L39"
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-1",
                "flags": {},
                "alias": "value-1",
                "fullName": "CachedReference.value.value",
                "hierarchy": "CallSignature value:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 39,
                    "character": 7,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L39"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "any"
                }
              }
            ]
          }
        ]
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L44"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L84"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L84"
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
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L44"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L80"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L53"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L48"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L94"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L94"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L100"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L100"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L102"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L102"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L82"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L82"
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
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L44"
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
      "id": "300",
      "type": "class",
      "attributes": {
        "name": "ComponentDefinition",
        "slug": "componentdefinition",
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
        "alias": "componentdefinition",
        "fullName": "ComponentDefinition",
        "hierarchy": "Class ComponentDefinition\n  Constructor constructor\n    ConstructorSignature new ComponentDefinition:ComponentDefinition\n      Parameter name:string\n      Parameter manager:ComponentManager\n      Parameter template:Template<TemplateMeta>\n      Parameter componentFactory:ComponentFactory\n  Property ComponentClass:ComponentClass\n  Property args:CapturedArguments\n  Property componentFactory:ComponentFactory\n  Property manager:ComponentManager<ComponentStateBucket>\n  Property name:string\n  Property template:Template<TemplateMeta>\n  Method toJSON\n    CallSignature toJSON:object\n      TypeLiteral __type\n        Variable GlimmerDebug:string",
        "kindString": "Class",
        "extendedTypes": [
          {
            "isArray": false,
            "name": "ComponentDefinition"
          }
        ],
        "sources": [
          {
            "fileName": "component-definition.ts",
            "line": 10,
            "character": 40
          }
        ]
      }
    },
    {
      "id": "246",
      "type": "class",
      "attributes": {
        "name": "ComponentManager",
        "slug": "componentmanager",
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
        "alias": "componentmanager",
        "fullName": "ComponentManager",
        "hierarchy": "Class ComponentManager\n  Constructor constructor\n    ConstructorSignature new ComponentManager:ComponentManager\n      Parameter options:ConstructorOptions\n  Property env:Environment\n  Method create\n    CallSignature create:ComponentStateBucket | null\n      Parameter environment:Environment\n      Parameter definition:ComponentDefinition\n      Parameter volatileArgs:Arguments\n  Method createComponentDefinition\n    CallSignature createComponentDefinition:ComponentDefinition\n      Parameter name:string\n      Parameter template:Template<any>\n      Parameter componentFactory:Factory<Component>\n  Method didCreate\n    CallSignature didCreate:void\n      Parameter bucket:ComponentStateBucket\n  Method didCreateElement\n    CallSignature didCreateElement:void\n      Parameter bucket:ComponentStateBucket\n      Parameter element:Element\n  Method didRenderLayout\n    CallSignature didRenderLayout:void\n      Parameter bucket:ComponentStateBucket\n      Parameter bounds:Bounds\n  Method didUpdate\n    CallSignature didUpdate:void\n      Parameter bucket:ComponentStateBucket\n  Method didUpdateLayout\n    CallSignature didUpdateLayout:void\n  Method getDestructor\n    CallSignature getDestructor:null\n  Method getSelf\n    CallSignature getSelf:RootReference\n      Parameter bucket:ComponentStateBucket\n  Method getTag\n    CallSignature getTag:null\n  Method layoutFor\n    CallSignature layoutFor:CompiledDynamicProgram\n      Parameter definition:ComponentDefinition\n      Parameter bucket:ComponentStateBucket\n      Parameter env:Environment\n  Method prepareArgs\n    CallSignature prepareArgs:null\n      Parameter definition:ComponentDefinition\n      Parameter args:Arguments\n  Method update\n    CallSignature update:void\n      Parameter bucket:ComponentStateBucket\n      Parameter scope:DynamicScope\n  Method create\n    CallSignature create:ComponentManager\n      Parameter options:ConstructorOptions",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "ComponentManager"
          }
        ],
        "sources": [
          {
            "fileName": "component-manager.ts",
            "line": 52,
            "character": 37,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L52"
          }
        ],
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
            "fullName": "ComponentManager.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new ComponentManager:ComponentManager\n    Parameter options:ConstructorOptions",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 57,
                "character": 3,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L57"
              }
            ],
            "constructorSignatures": [
              {
                "name": "new ComponentManager",
                "slug": "new_componentmanager",
                "flags": {},
                "alias": "new_componentmanager",
                "fullName": "ComponentManager.constructor.new ComponentManager",
                "hierarchy": "ConstructorSignature new ComponentManager:ComponentManager\n  Parameter options:ConstructorOptions",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 57,
                    "character": 3,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L57"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "ComponentManager",
                  "link": {
                    "id": "246",
                    "type": "class",
                    "slug": "componentmanager",
                    "sources": [
                      {
                        "fileName": "component-manager.ts",
                        "line": 52,
                        "character": 37,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L52"
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
                    "fullName": "ComponentManager.constructor.new ComponentManager.options",
                    "hierarchy": "Parameter options:ConstructorOptions",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ConstructorOptions",
                      "link": {
                        "id": "233",
                        "type": "interface",
                        "slug": "constructoroptions",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 23,
                            "character": 35,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L23"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
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
            "name": "env",
            "slug": "env",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "env",
            "fullName": "ComponentManager.env",
            "hierarchy": "Property env:Environment",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 53,
                "character": 13,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L53"
              }
            ],
            "type": {
              "isArray": false,
              "name": "Environment"
            }
          }
        ],
        "methods": [
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
              "isStatic": false
            },
            "alias": "create",
            "fullName": "ComponentManager.create",
            "hierarchy": "Method create\n  CallSignature create:ComponentStateBucket | null\n    Parameter environment:Environment\n    Parameter definition:ComponentDefinition\n    Parameter volatileArgs:Arguments",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 67,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L67"
              }
            ],
            "callSignatures": [
              {
                "name": "create",
                "slug": "create-1",
                "flags": {},
                "alias": "create-1",
                "fullName": "ComponentManager.create.create",
                "hierarchy": "CallSignature create:ComponentStateBucket | null\n  Parameter environment:Environment\n  Parameter definition:ComponentDefinition\n  Parameter volatileArgs:Arguments",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 67,
                    "character": 8,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L67"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "ComponentStateBucket | null",
                  "types": [
                    {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L27"
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
                    {
                      "isArray": false,
                      "name": "null"
                    }
                  ]
                },
                "parameters": [
                  {
                    "name": "environment",
                    "slug": "environment",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "environment",
                    "fullName": "ComponentManager.create.create.environment",
                    "hierarchy": "Parameter environment:Environment",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Environment"
                    }
                  },
                  {
                    "name": "definition",
                    "slug": "definition",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "definition",
                    "fullName": "ComponentManager.create.create.definition",
                    "hierarchy": "Parameter definition:ComponentDefinition",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentDefinition",
                      "link": {
                        "id": "300",
                        "type": "class",
                        "slug": "componentdefinition",
                        "sources": [
                          {
                            "fileName": "component-definition.ts",
                            "line": 10,
                            "character": 40
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  },
                  {
                    "name": "volatileArgs",
                    "slug": "volatileargs",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "volatileargs",
                    "fullName": "ComponentManager.create.create.volatileArgs",
                    "hierarchy": "Parameter volatileArgs:Arguments",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Arguments"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "createComponentDefinition",
            "slug": "createcomponentdefinition",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "createcomponentdefinition",
            "fullName": "ComponentManager.createComponentDefinition",
            "hierarchy": "Method createComponentDefinition\n  CallSignature createComponentDefinition:ComponentDefinition\n    Parameter name:string\n    Parameter template:Template<any>\n    Parameter componentFactory:Factory<Component>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 75,
                "character": 27,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L75"
              }
            ],
            "callSignatures": [
              {
                "name": "createComponentDefinition",
                "slug": "createcomponentdefinition-1",
                "flags": {},
                "alias": "createcomponentdefinition-1",
                "fullName": "ComponentManager.createComponentDefinition.createComponentDefinition",
                "hierarchy": "CallSignature createComponentDefinition:ComponentDefinition\n  Parameter name:string\n  Parameter template:Template<any>\n  Parameter componentFactory:Factory<Component>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 75,
                    "character": 27,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L75"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "ComponentDefinition",
                  "link": {
                    "id": "300",
                    "type": "class",
                    "slug": "componentdefinition",
                    "sources": [
                      {
                        "fileName": "component-definition.ts",
                        "line": 10,
                        "character": 40
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
                    "name": "name",
                    "slug": "name",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "name",
                    "fullName": "ComponentManager.createComponentDefinition.createComponentDefinition.name",
                    "hierarchy": "Parameter name:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "template",
                    "slug": "template",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "template",
                    "fullName": "ComponentManager.createComponentDefinition.createComponentDefinition.template",
                    "hierarchy": "Parameter template:Template<any>",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Template"
                    }
                  },
                  {
                    "name": "componentFactory",
                    "slug": "componentfactory",
                    "flags": {
                      "isOptional": true,
                      "isRest": false
                    },
                    "alias": "componentfactory",
                    "fullName": "ComponentManager.createComponentDefinition.createComponentDefinition.componentFactory",
                    "hierarchy": "Parameter componentFactory:Factory<Component>",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Factory"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "didCreate",
            "slug": "didcreate",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "didcreate",
            "fullName": "ComponentManager.didCreate",
            "hierarchy": "Method didCreate\n  CallSignature didCreate:void\n    Parameter bucket:ComponentStateBucket",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 99,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L99"
              }
            ],
            "callSignatures": [
              {
                "name": "didCreate",
                "slug": "didcreate-1",
                "flags": {},
                "alias": "didcreate-1",
                "fullName": "ComponentManager.didCreate.didCreate",
                "hierarchy": "CallSignature didCreate:void\n  Parameter bucket:ComponentStateBucket",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 99,
                    "character": 11,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L99"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "bucket",
                    "slug": "bucket",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket",
                    "fullName": "ComponentManager.didCreate.didCreate.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L27"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
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
            "name": "didCreateElement",
            "slug": "didcreateelement",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "didcreateelement",
            "fullName": "ComponentManager.didCreateElement",
            "hierarchy": "Method didCreateElement\n  CallSignature didCreateElement:void\n    Parameter bucket:ComponentStateBucket\n    Parameter element:Element",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 91,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L91"
              }
            ],
            "callSignatures": [
              {
                "name": "didCreateElement",
                "slug": "didcreateelement-1",
                "flags": {},
                "alias": "didcreateelement-1",
                "fullName": "ComponentManager.didCreateElement.didCreateElement",
                "hierarchy": "CallSignature didCreateElement:void\n  Parameter bucket:ComponentStateBucket\n  Parameter element:Element",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 91,
                    "character": 18,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L91"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "bucket",
                    "slug": "bucket-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket-1",
                    "fullName": "ComponentManager.didCreateElement.didCreateElement.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L27"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  },
                  {
                    "name": "element",
                    "slug": "element",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "element",
                    "fullName": "ComponentManager.didCreateElement.didCreateElement.element",
                    "hierarchy": "Parameter element:Element",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Element"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "didRenderLayout",
            "slug": "didrenderlayout",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "didrenderlayout",
            "fullName": "ComponentManager.didRenderLayout",
            "hierarchy": "Method didRenderLayout\n  CallSignature didRenderLayout:void\n    Parameter bucket:ComponentStateBucket\n    Parameter bounds:Bounds",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 96,
                "character": 17,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L96"
              }
            ],
            "callSignatures": [
              {
                "name": "didRenderLayout",
                "slug": "didrenderlayout-1",
                "flags": {},
                "alias": "didrenderlayout-1",
                "fullName": "ComponentManager.didRenderLayout.didRenderLayout",
                "hierarchy": "CallSignature didRenderLayout:void\n  Parameter bucket:ComponentStateBucket\n  Parameter bounds:Bounds",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 96,
                    "character": 17,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L96"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "bucket",
                    "slug": "bucket-2",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket-2",
                    "fullName": "ComponentManager.didRenderLayout.didRenderLayout.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L27"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  },
                  {
                    "name": "bounds",
                    "slug": "bounds",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bounds",
                    "fullName": "ComponentManager.didRenderLayout.didRenderLayout.bounds",
                    "hierarchy": "Parameter bounds:Bounds",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Bounds"
                    }
                  }
                ]
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
            "fullName": "ComponentManager.didUpdate",
            "hierarchy": "Method didUpdate\n  CallSignature didUpdate:void\n    Parameter bucket:ComponentStateBucket",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 120,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L120"
              }
            ],
            "callSignatures": [
              {
                "name": "didUpdate",
                "slug": "didupdate-1",
                "flags": {},
                "alias": "didupdate-1",
                "fullName": "ComponentManager.didUpdate.didUpdate",
                "hierarchy": "CallSignature didUpdate:void\n  Parameter bucket:ComponentStateBucket",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 120,
                    "character": 11,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L120"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "bucket",
                    "slug": "bucket-3",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket-3",
                    "fullName": "ComponentManager.didUpdate.didUpdate.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L27"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
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
            "name": "didUpdateLayout",
            "slug": "didupdatelayout",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "didupdatelayout",
            "fullName": "ComponentManager.didUpdateLayout",
            "hierarchy": "Method didUpdateLayout\n  CallSignature didUpdateLayout:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 118,
                "character": 17,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L118"
              }
            ],
            "callSignatures": [
              {
                "name": "didUpdateLayout",
                "slug": "didupdatelayout-1",
                "flags": {},
                "alias": "didupdatelayout-1",
                "fullName": "ComponentManager.didUpdateLayout.didUpdateLayout",
                "hierarchy": "CallSignature didUpdateLayout:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 118,
                    "character": 17,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L118"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "void"
                }
              }
            ]
          },
          {
            "name": "getDestructor",
            "slug": "getdestructor",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "getdestructor",
            "fullName": "ComponentManager.getDestructor",
            "hierarchy": "Method getDestructor\n  CallSignature getDestructor:null",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 122,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L122"
              }
            ],
            "callSignatures": [
              {
                "name": "getDestructor",
                "slug": "getdestructor-1",
                "flags": {},
                "alias": "getdestructor-1",
                "fullName": "ComponentManager.getDestructor.getDestructor",
                "hierarchy": "CallSignature getDestructor:null",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 122,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L122"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "null"
                }
              }
            ]
          },
          {
            "name": "getSelf",
            "slug": "getself",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "getself",
            "fullName": "ComponentManager.getSelf",
            "hierarchy": "Method getSelf\n  CallSignature getSelf:RootReference\n    Parameter bucket:ComponentStateBucket",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 86,
                "character": 9,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L86"
              }
            ],
            "callSignatures": [
              {
                "name": "getSelf",
                "slug": "getself-1",
                "flags": {},
                "alias": "getself-1",
                "fullName": "ComponentManager.getSelf.getSelf",
                "hierarchy": "CallSignature getSelf:RootReference\n  Parameter bucket:ComponentStateBucket",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 86,
                    "character": 9,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L86"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "RootReference",
                  "link": {
                    "id": "136",
                    "type": "class",
                    "slug": "rootreference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 51,
                        "character": 26,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L51"
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
                    "name": "bucket",
                    "slug": "bucket-4",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket-4",
                    "fullName": "ComponentManager.getSelf.getSelf.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L27"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
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
            "name": "getTag",
            "slug": "gettag",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "gettag",
            "fullName": "ComponentManager.getTag",
            "hierarchy": "Method getTag\n  CallSignature getTag:null",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 103,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L103"
              }
            ],
            "callSignatures": [
              {
                "name": "getTag",
                "slug": "gettag-1",
                "flags": {},
                "alias": "gettag-1",
                "fullName": "ComponentManager.getTag.getTag",
                "hierarchy": "CallSignature getTag:null",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 103,
                    "character": 8,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L103"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "null"
                }
              }
            ]
          },
          {
            "name": "layoutFor",
            "slug": "layoutfor",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "layoutfor",
            "fullName": "ComponentManager.layoutFor",
            "hierarchy": "Method layoutFor\n  CallSignature layoutFor:CompiledDynamicProgram\n    Parameter definition:ComponentDefinition\n    Parameter bucket:ComponentStateBucket\n    Parameter env:Environment",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 79,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L79"
              }
            ],
            "callSignatures": [
              {
                "name": "layoutFor",
                "slug": "layoutfor-1",
                "flags": {},
                "alias": "layoutfor-1",
                "fullName": "ComponentManager.layoutFor.layoutFor",
                "hierarchy": "CallSignature layoutFor:CompiledDynamicProgram\n  Parameter definition:ComponentDefinition\n  Parameter bucket:ComponentStateBucket\n  Parameter env:Environment",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 79,
                    "character": 11,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L79"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "CompiledDynamicProgram"
                },
                "parameters": [
                  {
                    "name": "definition",
                    "slug": "definition-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "definition-1",
                    "fullName": "ComponentManager.layoutFor.layoutFor.definition",
                    "hierarchy": "Parameter definition:ComponentDefinition",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentDefinition",
                      "link": {
                        "id": "300",
                        "type": "class",
                        "slug": "componentdefinition",
                        "sources": [
                          {
                            "fileName": "component-definition.ts",
                            "line": 10,
                            "character": 40
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  },
                  {
                    "name": "bucket",
                    "slug": "bucket-5",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket-5",
                    "fullName": "ComponentManager.layoutFor.layoutFor.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L27"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  },
                  {
                    "name": "env",
                    "slug": "env-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "env-1",
                    "fullName": "ComponentManager.layoutFor.layoutFor.env",
                    "hierarchy": "Parameter env:Environment",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Environment"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "prepareArgs",
            "slug": "prepareargs",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "prepareargs",
            "fullName": "ComponentManager.prepareArgs",
            "hierarchy": "Method prepareArgs\n  CallSignature prepareArgs:null\n    Parameter definition:ComponentDefinition\n    Parameter args:Arguments",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 63,
                "character": 13,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L63"
              }
            ],
            "callSignatures": [
              {
                "name": "prepareArgs",
                "slug": "prepareargs-1",
                "flags": {},
                "alias": "prepareargs-1",
                "fullName": "ComponentManager.prepareArgs.prepareArgs",
                "hierarchy": "CallSignature prepareArgs:null\n  Parameter definition:ComponentDefinition\n  Parameter args:Arguments",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 63,
                    "character": 13,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L63"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "null"
                },
                "parameters": [
                  {
                    "name": "definition",
                    "slug": "definition-2",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "definition-2",
                    "fullName": "ComponentManager.prepareArgs.prepareArgs.definition",
                    "hierarchy": "Parameter definition:ComponentDefinition",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentDefinition",
                      "link": {
                        "id": "300",
                        "type": "class",
                        "slug": "componentdefinition",
                        "sources": [
                          {
                            "fileName": "component-definition.ts",
                            "line": 10,
                            "character": 40
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  },
                  {
                    "name": "args",
                    "slug": "args",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "args",
                    "fullName": "ComponentManager.prepareArgs.prepareArgs.args",
                    "hierarchy": "Parameter args:Arguments",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Arguments"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "update",
            "slug": "update",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "update",
            "fullName": "ComponentManager.update",
            "hierarchy": "Method update\n  CallSignature update:void\n    Parameter bucket:ComponentStateBucket\n    Parameter scope:DynamicScope",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 107,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L107"
              }
            ],
            "callSignatures": [
              {
                "name": "update",
                "slug": "update-1",
                "flags": {},
                "alias": "update-1",
                "fullName": "ComponentManager.update.update",
                "hierarchy": "CallSignature update:void\n  Parameter bucket:ComponentStateBucket\n  Parameter scope:DynamicScope",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 107,
                    "character": 8,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L107"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "bucket",
                    "slug": "bucket-6",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket-6",
                    "fullName": "ComponentManager.update.update.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L27"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  },
                  {
                    "name": "scope",
                    "slug": "scope",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "scope",
                    "fullName": "ComponentManager.update.update.scope",
                    "hierarchy": "Parameter scope:DynamicScope",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "DynamicScope"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "create",
            "slug": "create-2",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": true
            },
            "alias": "create-2",
            "fullName": "ComponentManager.create",
            "hierarchy": "Method create\n  CallSignature create:ComponentManager\n    Parameter options:ConstructorOptions",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 55,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L55"
              }
            ],
            "callSignatures": [
              {
                "name": "create",
                "slug": "create-3",
                "flags": {},
                "alias": "create-3",
                "fullName": "ComponentManager.create.create",
                "hierarchy": "CallSignature create:ComponentManager\n  Parameter options:ConstructorOptions",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 55,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L55"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "ComponentManager",
                  "link": {
                    "id": "246",
                    "type": "class",
                    "slug": "componentmanager",
                    "sources": [
                      {
                        "fileName": "component-manager.ts",
                        "line": 52,
                        "character": 37,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L52"
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
                    "slug": "options-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "options-1",
                    "fullName": "ComponentManager.create.create.options",
                    "hierarchy": "Parameter options:ConstructorOptions",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ConstructorOptions",
                      "link": {
                        "id": "233",
                        "type": "interface",
                        "slug": "constructoroptions",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 23,
                            "character": 35,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L23"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
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
      "id": "114",
      "type": "class",
      "attributes": {
        "name": "ComponentPathReference",
        "slug": "componentpathreference",
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
        "alias": "componentpathreference",
        "fullName": "ComponentPathReference",
        "hierarchy": "Class ComponentPathReference<T>\n  TypeParameter T\n  Accessor tag\n    GetSignature __get:Tag\n  Method get\n    CallSignature get:PathReference<any>\n      Parameter key:string\n  Method value\n    CallSignature value:T",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedPathReference"
          }
        ],
        "sources": [
          {
            "fileName": "references.ts",
            "line": 24,
            "character": 44,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L24"
          }
        ],
        "comment": {
          "shortText": "The base PathReference.",
          "text": ""
        },
        "typeParameters": [
          {
            "name": "T",
            "slug": "t",
            "flags": {},
            "alias": "t",
            "fullName": "ComponentPathReference.T",
            "hierarchy": "TypeParameter T",
            "kindString": "Type parameter"
          }
        ],
        "methods": [
          {
            "name": "get",
            "slug": "get",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "get",
            "fullName": "ComponentPathReference.get",
            "hierarchy": "Method get\n  CallSignature get:PathReference<any>\n    Parameter key:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 28,
                "character": 5,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L28"
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "ComponentPathReference.get.get",
                "hierarchy": "CallSignature get:PathReference<any>\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 28,
                    "character": 5,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L28"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "PathReference"
                },
                "parameters": [
                  {
                    "name": "key",
                    "slug": "key",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "key",
                    "fullName": "ComponentPathReference.get.get.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "value",
            "slug": "value",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "value",
            "fullName": "ComponentPathReference.value",
            "hierarchy": "Method value\n  CallSignature value:T",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 25,
                "character": 16,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L25"
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-1",
                "flags": {},
                "alias": "value-1",
                "fullName": "ComponentPathReference.value.value",
                "hierarchy": "CallSignature value:T",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 25,
                    "character": 16,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L25"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "T"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "235",
      "type": "class",
      "attributes": {
        "name": "ComponentStateBucket",
        "slug": "componentstatebucket",
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
        "alias": "componentstatebucket",
        "fullName": "ComponentStateBucket",
        "hierarchy": "Class ComponentStateBucket\n  Constructor constructor\n    ConstructorSignature new ComponentStateBucket:ComponentStateBucket\n      Parameter definition:ComponentDefinition\n      Parameter args:CapturedArguments\n      Parameter owner:Owner\n  Property args:CapturedArguments\n  Property component:Component\n  Property name:string\n  Method namedArgsSnapshot\n    CallSignature namedArgsSnapshot:Readonly<Dict<any | void>>",
        "kindString": "Class",
        "sources": [
          {
            "fileName": "component-manager.ts",
            "line": 27,
            "character": 33,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L27"
          }
        ],
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
            "fullName": "ComponentStateBucket.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new ComponentStateBucket:ComponentStateBucket\n    Parameter definition:ComponentDefinition\n    Parameter args:CapturedArguments\n    Parameter owner:Owner",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 30,
                "character": 34,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L30"
              }
            ],
            "constructorSignatures": [
              {
                "name": "new ComponentStateBucket",
                "slug": "new_componentstatebucket",
                "flags": {},
                "alias": "new_componentstatebucket",
                "fullName": "ComponentStateBucket.constructor.new ComponentStateBucket",
                "hierarchy": "ConstructorSignature new ComponentStateBucket:ComponentStateBucket\n  Parameter definition:ComponentDefinition\n  Parameter args:CapturedArguments\n  Parameter owner:Owner",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 30,
                    "character": 34,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L30"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "ComponentStateBucket",
                  "link": {
                    "id": "235",
                    "type": "class",
                    "slug": "componentstatebucket",
                    "sources": [
                      {
                        "fileName": "component-manager.ts",
                        "line": 27,
                        "character": 33,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L27"
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
                    "name": "definition",
                    "slug": "definition",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "definition",
                    "fullName": "ComponentStateBucket.constructor.new ComponentStateBucket.definition",
                    "hierarchy": "Parameter definition:ComponentDefinition",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "ComponentDefinition",
                      "link": {
                        "id": "300",
                        "type": "class",
                        "slug": "componentdefinition",
                        "sources": [
                          {
                            "fileName": "component-definition.ts",
                            "line": 10,
                            "character": 40
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  },
                  {
                    "name": "args",
                    "slug": "args",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "args",
                    "fullName": "ComponentStateBucket.constructor.new ComponentStateBucket.args",
                    "hierarchy": "Parameter args:CapturedArguments",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "CapturedArguments"
                    }
                  },
                  {
                    "name": "owner",
                    "slug": "owner",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "owner",
                    "fullName": "ComponentStateBucket.constructor.new ComponentStateBucket.owner",
                    "hierarchy": "Parameter owner:Owner",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Owner"
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
            "slug": "args-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "args-1",
            "fullName": "ComponentStateBucket.args",
            "hierarchy": "Property args:CapturedArguments",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 30,
                "character": 14,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L30"
              }
            ],
            "type": {
              "isArray": false,
              "name": "CapturedArguments"
            }
          },
          {
            "name": "component",
            "slug": "component",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": true,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "component",
            "fullName": "ComponentStateBucket.component",
            "hierarchy": "Property component:Component",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 29,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L29"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L44"
                  }
                ],
                "parent": {
                  "id": "0",
                  "type": "0",
                  "slug": "_glimmer_component",
                  "sources": null
                }
              }
            }
          },
          {
            "name": "name",
            "slug": "name",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": true,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "name",
            "fullName": "ComponentStateBucket.name",
            "hierarchy": "Property name:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 28,
                "character": 13,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L28"
              }
            ],
            "type": {
              "isArray": false,
              "name": "string"
            }
          }
        ],
        "methods": [
          {
            "name": "namedArgsSnapshot",
            "slug": "namedargssnapshot",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "namedargssnapshot",
            "fullName": "ComponentStateBucket.namedArgsSnapshot",
            "hierarchy": "Method namedArgsSnapshot\n  CallSignature namedArgsSnapshot:Readonly<Dict<any | void>>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 47,
                "character": 19,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L47"
              }
            ],
            "callSignatures": [
              {
                "name": "namedArgsSnapshot",
                "slug": "namedargssnapshot-1",
                "flags": {},
                "alias": "namedargssnapshot-1",
                "fullName": "ComponentStateBucket.namedArgsSnapshot.namedArgsSnapshot",
                "hierarchy": "CallSignature namedArgsSnapshot:Readonly<Dict<any | void>>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 47,
                    "character": 19,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L47"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "Readonly"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "216",
      "type": "class",
      "attributes": {
        "name": "ConditionalReference",
        "slug": "conditionalreference",
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
        "alias": "conditionalreference",
        "fullName": "ConditionalReference",
        "hierarchy": "Class ConditionalReference\n  Constructor constructor\n    ConstructorSignature new ConditionalReference:ConditionalReference\n      Parameter inner:Reference<Opaque>\n  Property tag:Tag\n  Method toBool\n    CallSignature toBool:boolean\n      Parameter value:Opaque\n  Method value\n    CallSignature value:boolean\n  Method create\n    CallSignature create:PrimitiveReference<any> | ConditionalReference\n      Parameter reference:PathReference<any>",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedReference"
          }
        ],
        "extendedTypes": [
          {
            "isArray": false,
            "name": "ConditionalReference"
          }
        ],
        "sources": [
          {
            "fileName": "references.ts",
            "line": 165,
            "character": 33,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L165"
          }
        ]
      }
    },
    {
      "id": "21",
      "type": "class",
      "attributes": {
        "name": "Meta",
        "slug": "meta",
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
        "alias": "meta",
        "fullName": "Meta",
        "hierarchy": "Class Meta\n  Constructor constructor\n    ConstructorSignature new Meta:Meta\n      Parameter parent:Meta\n  Property computedPropertyTags:Dict<TagWrapper<DirtyableTag>>\n  Property tags:Dict<Tag>\n  Property trackedProperties:Dict<boolean>\n  Property trackedPropertyDependencies:Dict<string[]>\n  Method dirtyableTagFor\n    CallSignature dirtyableTagFor:TagWrapper<DirtyableTag>\n      Parameter key:Key\n  Method tagFor\n    CallSignature tagFor:Tag\n      Parameter key:Key",
        "kindString": "Class",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 101,
            "character": 25,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L101"
          }
        ],
        "comment": {
          "shortText": "Stores bookkeeping information about tracked properties on the target object\nand includes helper methods for manipulating and retrieving that data.",
          "text": "Computed properties (i.e., tracked getters/setters) deserve some explanation.\nA computed property is invalidated when either it is set, or one of its\ndependencies is invalidated. Therefore, we store two tags for each computed\nproperty:\n\n1. The dirtyable tag that we invalidate when the setter is invoked.\n2. A union tag (tag combinator) of the dirtyable tag and all of the computed\n   property's dependencies' tags, used by Glimmer to determine \"does this\n   computed property need to be recomputed?\"\n"
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
            "fullName": "Meta.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new Meta:Meta\n    Parameter parent:Meta",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 105,
                "character": 46,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L105"
              }
            ],
            "constructorSignatures": [
              {
                "name": "new Meta",
                "slug": "new_meta",
                "flags": {},
                "alias": "new_meta",
                "fullName": "Meta.constructor.new Meta",
                "hierarchy": "ConstructorSignature new Meta:Meta\n  Parameter parent:Meta",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 105,
                    "character": 46,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L105"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "Meta",
                  "link": {
                    "id": "21",
                    "type": "class",
                    "slug": "meta",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 101,
                        "character": 25,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L101"
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
                    "name": "parent",
                    "slug": "parent",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "parent",
                    "fullName": "Meta.constructor.new Meta.parent",
                    "hierarchy": "Parameter parent:Meta",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Meta",
                      "link": {
                        "id": "21",
                        "type": "class",
                        "slug": "meta",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 101,
                            "character": 25,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L101"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
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
            "name": "computedPropertyTags",
            "slug": "computedpropertytags",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "computedpropertytags",
            "fullName": "Meta.computedPropertyTags",
            "hierarchy": "Property computedPropertyTags:Dict<TagWrapper<DirtyableTag>>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 103,
                "character": 22,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L103"
              }
            ],
            "type": {
              "isArray": false,
              "name": "Dict"
            }
          },
          {
            "name": "tags",
            "slug": "tags",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "tags",
            "fullName": "Meta.tags",
            "hierarchy": "Property tags:Dict<Tag>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 102,
                "character": 6,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L102"
              }
            ],
            "type": {
              "isArray": false,
              "name": "Dict"
            }
          },
          {
            "name": "trackedProperties",
            "slug": "trackedproperties",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "trackedproperties",
            "fullName": "Meta.trackedProperties",
            "hierarchy": "Property trackedProperties:Dict<boolean>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 104,
                "character": 19,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L104"
              }
            ],
            "type": {
              "isArray": false,
              "name": "Dict"
            }
          },
          {
            "name": "trackedPropertyDependencies",
            "slug": "trackedpropertydependencies",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "trackedpropertydependencies",
            "fullName": "Meta.trackedPropertyDependencies",
            "hierarchy": "Property trackedPropertyDependencies:Dict<string[]>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 105,
                "character": 29,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L105"
              }
            ],
            "type": {
              "isArray": false,
              "name": "Dict"
            }
          }
        ],
        "methods": [
          {
            "name": "dirtyableTagFor",
            "slug": "dirtyabletagfor",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "dirtyabletagfor",
            "fullName": "Meta.dirtyableTagFor",
            "hierarchy": "Method dirtyableTagFor\n  CallSignature dirtyableTagFor:TagWrapper<DirtyableTag>\n    Parameter key:Key",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 141,
                "character": 17,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L141"
              }
            ],
            "callSignatures": [
              {
                "name": "dirtyableTagFor",
                "slug": "dirtyabletagfor-1",
                "flags": {},
                "alias": "dirtyabletagfor-1",
                "fullName": "Meta.dirtyableTagFor.dirtyableTagFor",
                "hierarchy": "CallSignature dirtyableTagFor:TagWrapper<DirtyableTag>\n  Parameter key:Key",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 141,
                    "character": 17,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L141"
                  }
                ],
                "comment": {
                  "shortText": "The tag used internally to invalidate when a tracked property is set. For\nstatic properties, this is the same DirtyableTag returned from `tagFor`.\nFor computed properties, it is the DirtyableTag used as one of the tags in\nthe tag combinator of the CP and its dependencies.",
                  "text": ""
                },
                "type": {
                  "isArray": false,
                  "name": "TagWrapper"
                },
                "parameters": [
                  {
                    "name": "key",
                    "slug": "key",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "key",
                    "fullName": "Meta.dirtyableTagFor.dirtyableTagFor.key",
                    "hierarchy": "Parameter key:Key",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Key",
                      "link": {
                        "id": "70",
                        "type": "type-alias",
                        "slug": "key",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 50,
                            "character": 15,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L50"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
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
            "name": "tagFor",
            "slug": "tagfor",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "tagfor",
            "fullName": "Meta.tagFor",
            "hierarchy": "Method tagFor\n  CallSignature tagFor:Tag\n    Parameter key:Key",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 123,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L123"
              }
            ],
            "callSignatures": [
              {
                "name": "tagFor",
                "slug": "tagfor-1",
                "flags": {},
                "alias": "tagfor-1",
                "fullName": "Meta.tagFor.tagFor",
                "hierarchy": "CallSignature tagFor:Tag\n  Parameter key:Key",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 123,
                    "character": 8,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L123"
                  }
                ],
                "comment": {
                  "shortText": "The tag representing whether the given property should be recomputed. Used\nby e.g. Glimmer VM to detect when a property should be re-rendered. Think\nof this as the \"public-facing\" tag.",
                  "text": "For static tracked properties, this is a single DirtyableTag. For computed\nproperties, it is a combinator of the property's DirtyableTag as well as\nall of its dependencies' tags.\n"
                },
                "type": {
                  "isArray": false,
                  "name": "Tag"
                },
                "parameters": [
                  {
                    "name": "key",
                    "slug": "key-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "key-1",
                    "fullName": "Meta.tagFor.tagFor.key",
                    "hierarchy": "Parameter key:Key",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "Key",
                      "link": {
                        "id": "70",
                        "type": "type-alias",
                        "slug": "key",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 50,
                            "character": 15,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L50"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
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
      "id": "181",
      "type": "class",
      "attributes": {
        "name": "NestedPropertyReference",
        "slug": "nestedpropertyreference",
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
        "alias": "nestedpropertyreference",
        "fullName": "NestedPropertyReference",
        "hierarchy": "Class NestedPropertyReference\n  Constructor constructor\n    ConstructorSignature new NestedPropertyReference:NestedPropertyReference\n      Parameter parentReference:PathReference<any>\n      Parameter propertyKey:string\n  Property _parentObjectTag:TagWrapper<UpdatableTag>\n  Property _parentReference:PathReference<any>\n  Property _propertyKey:string\n  Property tag:Tag\n  Method compute\n    CallSignature compute:any\n  Method get\n    CallSignature get:PathReference<any>\n      Parameter key:string\n  Method value\n    CallSignature value:any\n  Method create\n    CallSignature create:RootPropertyReference | NestedPropertyReference\n      Parameter parentReference:PathReference<any>\n      Parameter propertyKey:string",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedPathReference"
          }
        ],
        "extendedTypes": [
          {
            "isArray": false,
            "name": "PropertyReference",
            "link": {
              "id": "148",
              "type": "class",
              "slug": "propertyreference",
              "sources": [
                {
                  "fileName": "references.ts",
                  "line": 65,
                  "character": 39,
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L65"
                }
              ],
              "parent": {
                "id": "0",
                "type": "0",
                "slug": "_glimmer_component",
                "sources": null
              }
            }
          }
        ],
        "sources": [
          {
            "fileName": "references.ts",
            "line": 102,
            "character": 36,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L102"
          }
        ],
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
            "fullName": "NestedPropertyReference.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new NestedPropertyReference:NestedPropertyReference\n    Parameter parentReference:PathReference<any>\n    Parameter propertyKey:string",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 106,
                "character": 31,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L106"
              }
            ],
            "constructorSignatures": [
              {
                "name": "new NestedPropertyReference",
                "slug": "new_nestedpropertyreference",
                "flags": {},
                "alias": "new_nestedpropertyreference",
                "fullName": "NestedPropertyReference.constructor.new NestedPropertyReference",
                "hierarchy": "ConstructorSignature new NestedPropertyReference:NestedPropertyReference\n  Parameter parentReference:PathReference<any>\n  Parameter propertyKey:string",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 106,
                    "character": 31,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L106"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "NestedPropertyReference",
                  "link": {
                    "id": "181",
                    "type": "class",
                    "slug": "nestedpropertyreference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 102,
                        "character": 36,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L102"
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
                    "name": "parentReference",
                    "slug": "parentreference",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "parentreference",
                    "fullName": "NestedPropertyReference.constructor.new NestedPropertyReference.parentReference",
                    "hierarchy": "Parameter parentReference:PathReference<any>",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "PathReference"
                    }
                  },
                  {
                    "name": "propertyKey",
                    "slug": "propertykey",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "propertykey",
                    "fullName": "NestedPropertyReference.constructor.new NestedPropertyReference.propertyKey",
                    "hierarchy": "Parameter propertyKey:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "properties": [
          {
            "name": "_parentObjectTag",
            "slug": "_parentobjecttag",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_parentobjecttag",
            "fullName": "NestedPropertyReference._parentObjectTag",
            "hierarchy": "Property _parentObjectTag:TagWrapper<UpdatableTag>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 105,
                "character": 26,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L105"
              }
            ],
            "type": {
              "isArray": false,
              "name": "TagWrapper"
            }
          },
          {
            "name": "_parentReference",
            "slug": "_parentreference",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_parentreference",
            "fullName": "NestedPropertyReference._parentReference",
            "hierarchy": "Property _parentReference:PathReference<any>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 104,
                "character": 26,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L104"
              }
            ],
            "type": {
              "isArray": false,
              "name": "PathReference"
            }
          },
          {
            "name": "_propertyKey",
            "slug": "_propertykey",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_propertykey",
            "fullName": "NestedPropertyReference._propertyKey",
            "hierarchy": "Property _propertyKey:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 106,
                "character": 22,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L106"
              }
            ],
            "type": {
              "isArray": false,
              "name": "string"
            }
          },
          {
            "name": "tag",
            "slug": "tag",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": true,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "tag",
            "fullName": "NestedPropertyReference.tag",
            "hierarchy": "Property tag:Tag",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 103,
                "character": 12,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L103"
              }
            ],
            "type": {
              "isArray": false,
              "name": "Tag"
            }
          }
        ],
        "methods": [
          {
            "name": "compute",
            "slug": "compute",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "compute",
            "fullName": "NestedPropertyReference.compute",
            "hierarchy": "Method compute\n  CallSignature compute:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 121,
                "character": 9,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L121"
              }
            ],
            "callSignatures": [
              {
                "name": "compute",
                "slug": "compute-1",
                "flags": {},
                "alias": "compute-1",
                "fullName": "NestedPropertyReference.compute.compute",
                "hierarchy": "CallSignature compute:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 121,
                    "character": 9,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L121"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "any"
                }
              }
            ]
          },
          {
            "name": "get",
            "slug": "get",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "get",
            "fullName": "NestedPropertyReference.get",
            "hierarchy": "Method get\n  CallSignature get:PathReference<any>\n    Parameter key:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 74,
                "character": 5,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L74"
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "NestedPropertyReference.get.get",
                "hierarchy": "CallSignature get:PathReference<any>\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 74,
                    "character": 5,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L74"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "PathReference"
                },
                "parameters": [
                  {
                    "name": "key",
                    "slug": "key",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "key",
                    "fullName": "NestedPropertyReference.get.get.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "value",
            "slug": "value",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "value",
            "fullName": "NestedPropertyReference.value",
            "hierarchy": "Method value\n  CallSignature value:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 39,
                "character": 7,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L39"
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-1",
                "flags": {},
                "alias": "value-1",
                "fullName": "NestedPropertyReference.value.value",
                "hierarchy": "CallSignature value:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 39,
                    "character": 7,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L39"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "any"
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
            "fullName": "NestedPropertyReference.create",
            "hierarchy": "Method create\n  CallSignature create:RootPropertyReference | NestedPropertyReference\n    Parameter parentReference:PathReference<any>\n    Parameter propertyKey:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 66,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L66"
              }
            ],
            "callSignatures": [
              {
                "name": "create",
                "slug": "create-1",
                "flags": {},
                "alias": "create-1",
                "fullName": "NestedPropertyReference.create.create",
                "hierarchy": "CallSignature create:RootPropertyReference | NestedPropertyReference\n  Parameter parentReference:PathReference<any>\n  Parameter propertyKey:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 66,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L66"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "RootPropertyReference | NestedPropertyReference",
                  "types": [
                    {
                      "isArray": false,
                      "name": "RootPropertyReference",
                      "link": {
                        "id": "162",
                        "type": "class",
                        "slug": "rootpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 84,
                            "character": 34,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L84"
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
                    {
                      "isArray": false,
                      "name": "NestedPropertyReference",
                      "link": {
                        "id": "181",
                        "type": "class",
                        "slug": "nestedpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 102,
                            "character": 36,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L102"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  ]
                },
                "parameters": [
                  {
                    "name": "parentReference",
                    "slug": "parentreference-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "parentreference-1",
                    "fullName": "NestedPropertyReference.create.create.parentReference",
                    "hierarchy": "Parameter parentReference:PathReference<any>",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "PathReference"
                    }
                  },
                  {
                    "name": "propertyKey",
                    "slug": "propertykey-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "propertykey-1",
                    "fullName": "NestedPropertyReference.create.create.propertyKey",
                    "hierarchy": "Parameter propertyKey:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
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
      "id": "148",
      "type": "class",
      "attributes": {
        "name": "PropertyReference",
        "slug": "propertyreference",
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
        "alias": "propertyreference",
        "fullName": "PropertyReference",
        "hierarchy": "Class PropertyReference\n  Accessor tag\n    GetSignature __get:Tag\n  Method compute\n    CallSignature compute:any\n  Method get\n    CallSignature get:PathReference<any>\n      Parameter key:string\n  Method value\n    CallSignature value:any\n  Method create\n    CallSignature create:RootPropertyReference | NestedPropertyReference\n      Parameter parentReference:PathReference<any>\n      Parameter propertyKey:string",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedPathReference"
          }
        ],
        "extendedTypes": [
          {
            "isArray": false,
            "name": "CachedReference",
            "link": {
              "id": "123",
              "type": "class",
              "slug": "cachedreference",
              "sources": [
                {
                  "fileName": "references.ts",
                  "line": 33,
                  "character": 37,
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L33"
                }
              ],
              "parent": {
                "id": "0",
                "type": "0",
                "slug": "_glimmer_component",
                "sources": null
              }
            }
          }
        ],
        "sources": [
          {
            "fileName": "references.ts",
            "line": 65,
            "character": 39,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L65"
          }
        ],
        "methods": [
          {
            "name": "compute",
            "slug": "compute",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "compute",
            "fullName": "PropertyReference.compute",
            "hierarchy": "Method compute\n  CallSignature compute:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 37,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L37"
              }
            ],
            "callSignatures": [
              {
                "name": "compute",
                "slug": "compute-1",
                "flags": {},
                "alias": "compute-1",
                "fullName": "PropertyReference.compute.compute",
                "hierarchy": "CallSignature compute:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 37,
                    "character": 18,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L37"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "any"
                }
              }
            ]
          },
          {
            "name": "get",
            "slug": "get",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "get",
            "fullName": "PropertyReference.get",
            "hierarchy": "Method get\n  CallSignature get:PathReference<any>\n    Parameter key:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 74,
                "character": 5,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L74"
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "PropertyReference.get.get",
                "hierarchy": "CallSignature get:PathReference<any>\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 74,
                    "character": 5,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L74"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "PathReference"
                },
                "parameters": [
                  {
                    "name": "key",
                    "slug": "key",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "key",
                    "fullName": "PropertyReference.get.get.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "value",
            "slug": "value",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "value",
            "fullName": "PropertyReference.value",
            "hierarchy": "Method value\n  CallSignature value:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 39,
                "character": 7,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L39"
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-1",
                "flags": {},
                "alias": "value-1",
                "fullName": "PropertyReference.value.value",
                "hierarchy": "CallSignature value:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 39,
                    "character": 7,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L39"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "any"
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
            "fullName": "PropertyReference.create",
            "hierarchy": "Method create\n  CallSignature create:RootPropertyReference | NestedPropertyReference\n    Parameter parentReference:PathReference<any>\n    Parameter propertyKey:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 66,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L66"
              }
            ],
            "callSignatures": [
              {
                "name": "create",
                "slug": "create-1",
                "flags": {},
                "alias": "create-1",
                "fullName": "PropertyReference.create.create",
                "hierarchy": "CallSignature create:RootPropertyReference | NestedPropertyReference\n  Parameter parentReference:PathReference<any>\n  Parameter propertyKey:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 66,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L66"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "RootPropertyReference | NestedPropertyReference",
                  "types": [
                    {
                      "isArray": false,
                      "name": "RootPropertyReference",
                      "link": {
                        "id": "162",
                        "type": "class",
                        "slug": "rootpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 84,
                            "character": 34,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L84"
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
                    {
                      "isArray": false,
                      "name": "NestedPropertyReference",
                      "link": {
                        "id": "181",
                        "type": "class",
                        "slug": "nestedpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 102,
                            "character": 36,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L102"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  ]
                },
                "parameters": [
                  {
                    "name": "parentReference",
                    "slug": "parentreference",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "parentreference",
                    "fullName": "PropertyReference.create.create.parentReference",
                    "hierarchy": "Parameter parentReference:PathReference<any>",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "PathReference"
                    }
                  },
                  {
                    "name": "propertyKey",
                    "slug": "propertykey",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "propertykey",
                    "fullName": "PropertyReference.create.create.propertyKey",
                    "hierarchy": "Parameter propertyKey:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
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
      "id": "162",
      "type": "class",
      "attributes": {
        "name": "RootPropertyReference",
        "slug": "rootpropertyreference",
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
        "alias": "rootpropertyreference",
        "fullName": "RootPropertyReference",
        "hierarchy": "Class RootPropertyReference\n  Constructor constructor\n    ConstructorSignature new RootPropertyReference:RootPropertyReference\n      Parameter parentValue:object\n      Parameter propertyKey:string\n  Property _parentValue:object\n  Property _propertyKey:string\n  Property tag:Tag\n  Method compute\n    CallSignature compute:any\n  Method get\n    CallSignature get:PathReference<any>\n      Parameter key:string\n  Method value\n    CallSignature value:any\n  Method create\n    CallSignature create:RootPropertyReference | NestedPropertyReference\n      Parameter parentReference:PathReference<any>\n      Parameter propertyKey:string",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedPathReference"
          }
        ],
        "extendedTypes": [
          {
            "isArray": false,
            "name": "PropertyReference",
            "link": {
              "id": "148",
              "type": "class",
              "slug": "propertyreference",
              "sources": [
                {
                  "fileName": "references.ts",
                  "line": 65,
                  "character": 39,
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L65"
                }
              ],
              "parent": {
                "id": "0",
                "type": "0",
                "slug": "_glimmer_component",
                "sources": null
              }
            }
          }
        ],
        "sources": [
          {
            "fileName": "references.ts",
            "line": 84,
            "character": 34,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L84"
          }
        ],
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
            "fullName": "RootPropertyReference.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new RootPropertyReference:RootPropertyReference\n    Parameter parentValue:object\n    Parameter propertyKey:string",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 87,
                "character": 31,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L87"
              }
            ],
            "constructorSignatures": [
              {
                "name": "new RootPropertyReference",
                "slug": "new_rootpropertyreference",
                "flags": {},
                "alias": "new_rootpropertyreference",
                "fullName": "RootPropertyReference.constructor.new RootPropertyReference",
                "hierarchy": "ConstructorSignature new RootPropertyReference:RootPropertyReference\n  Parameter parentValue:object\n  Parameter propertyKey:string",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 87,
                    "character": 31,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L87"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "RootPropertyReference",
                  "link": {
                    "id": "162",
                    "type": "class",
                    "slug": "rootpropertyreference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 84,
                        "character": 34,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L84"
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
                    "name": "parentValue",
                    "slug": "parentvalue",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "parentvalue",
                    "fullName": "RootPropertyReference.constructor.new RootPropertyReference.parentValue",
                    "hierarchy": "Parameter parentValue:object",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "object"
                    }
                  },
                  {
                    "name": "propertyKey",
                    "slug": "propertykey",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "propertykey",
                    "fullName": "RootPropertyReference.constructor.new RootPropertyReference.propertyKey",
                    "hierarchy": "Parameter propertyKey:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "properties": [
          {
            "name": "_parentValue",
            "slug": "_parentvalue",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_parentvalue",
            "fullName": "RootPropertyReference._parentValue",
            "hierarchy": "Property _parentValue:object",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 86,
                "character": 22,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L86"
              }
            ],
            "type": {
              "isArray": false,
              "name": "object"
            }
          },
          {
            "name": "_propertyKey",
            "slug": "_propertykey",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_propertykey",
            "fullName": "RootPropertyReference._propertyKey",
            "hierarchy": "Property _propertyKey:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 87,
                "character": 22,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L87"
              }
            ],
            "type": {
              "isArray": false,
              "name": "string"
            }
          },
          {
            "name": "tag",
            "slug": "tag",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "tag",
            "fullName": "RootPropertyReference.tag",
            "hierarchy": "Property tag:Tag",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 85,
                "character": 5,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L85"
              }
            ],
            "type": {
              "isArray": false,
              "name": "Tag"
            }
          }
        ],
        "methods": [
          {
            "name": "compute",
            "slug": "compute",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "compute",
            "fullName": "RootPropertyReference.compute",
            "hierarchy": "Method compute\n  CallSignature compute:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 97,
                "character": 9,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L97"
              }
            ],
            "callSignatures": [
              {
                "name": "compute",
                "slug": "compute-1",
                "flags": {},
                "alias": "compute-1",
                "fullName": "RootPropertyReference.compute.compute",
                "hierarchy": "CallSignature compute:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 97,
                    "character": 9,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L97"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "any"
                }
              }
            ]
          },
          {
            "name": "get",
            "slug": "get",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "get",
            "fullName": "RootPropertyReference.get",
            "hierarchy": "Method get\n  CallSignature get:PathReference<any>\n    Parameter key:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 74,
                "character": 5,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L74"
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "RootPropertyReference.get.get",
                "hierarchy": "CallSignature get:PathReference<any>\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 74,
                    "character": 5,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L74"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "PathReference"
                },
                "parameters": [
                  {
                    "name": "key",
                    "slug": "key",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "key",
                    "fullName": "RootPropertyReference.get.get.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "value",
            "slug": "value",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "value",
            "fullName": "RootPropertyReference.value",
            "hierarchy": "Method value\n  CallSignature value:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 39,
                "character": 7,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L39"
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-1",
                "flags": {},
                "alias": "value-1",
                "fullName": "RootPropertyReference.value.value",
                "hierarchy": "CallSignature value:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 39,
                    "character": 7,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L39"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "any"
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
            "fullName": "RootPropertyReference.create",
            "hierarchy": "Method create\n  CallSignature create:RootPropertyReference | NestedPropertyReference\n    Parameter parentReference:PathReference<any>\n    Parameter propertyKey:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 66,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L66"
              }
            ],
            "callSignatures": [
              {
                "name": "create",
                "slug": "create-1",
                "flags": {},
                "alias": "create-1",
                "fullName": "RootPropertyReference.create.create",
                "hierarchy": "CallSignature create:RootPropertyReference | NestedPropertyReference\n  Parameter parentReference:PathReference<any>\n  Parameter propertyKey:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 66,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L66"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "RootPropertyReference | NestedPropertyReference",
                  "types": [
                    {
                      "isArray": false,
                      "name": "RootPropertyReference",
                      "link": {
                        "id": "162",
                        "type": "class",
                        "slug": "rootpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 84,
                            "character": 34,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L84"
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
                    {
                      "isArray": false,
                      "name": "NestedPropertyReference",
                      "link": {
                        "id": "181",
                        "type": "class",
                        "slug": "nestedpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 102,
                            "character": 36,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L102"
                          }
                        ],
                        "parent": {
                          "id": "0",
                          "type": "0",
                          "slug": "_glimmer_component",
                          "sources": null
                        }
                      }
                    }
                  ]
                },
                "parameters": [
                  {
                    "name": "parentReference",
                    "slug": "parentreference",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "parentreference",
                    "fullName": "RootPropertyReference.create.create.parentReference",
                    "hierarchy": "Parameter parentReference:PathReference<any>",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "PathReference"
                    }
                  },
                  {
                    "name": "propertyKey",
                    "slug": "propertykey-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "propertykey-1",
                    "fullName": "RootPropertyReference.create.create.propertyKey",
                    "hierarchy": "Parameter propertyKey:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
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
      "id": "136",
      "type": "class",
      "attributes": {
        "name": "RootReference",
        "slug": "rootreference",
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
        "alias": "rootreference",
        "fullName": "RootReference",
        "hierarchy": "Class RootReference\n  Constructor constructor\n    ConstructorSignature new RootReference:RootReference\n      Parameter inner:any\n  Property children:Dict<RootPropertyReference>\n  Property inner:any\n  Property tag:Tag\n  Method get\n    CallSignature get:RootPropertyReference\n      Parameter propertyKey:string\n  Method value\n    CallSignature value:any",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedReference"
          }
        ],
        "extendedTypes": [
          {
            "isArray": false,
            "name": "ConstReference"
          }
        ],
        "sources": [
          {
            "fileName": "references.ts",
            "line": 51,
            "character": 26,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L51"
          }
        ]
      }
    },
    {
      "id": "38",
      "type": "class",
      "attributes": {
        "name": "UntrackedPropertyError",
        "slug": "untrackedpropertyerror",
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
        "alias": "untrackedpropertyerror",
        "fullName": "UntrackedPropertyError",
        "hierarchy": "Class UntrackedPropertyError\n  Constructor constructor\n    ConstructorSignature new UntrackedPropertyError:UntrackedPropertyError\n      Parameter target:any\n      Parameter key:string\n      Parameter message:string\n  Property key:string\n  Property target:any\n  Property Error:ErrorConstructor\n  Property message:string\n  Property name:string\n  Property stack:string",
        "kindString": "Class",
        "extendedTypes": [
          {
            "isArray": false,
            "name": "Error"
          }
        ],
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 209,
            "character": 35,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L209"
          }
        ]
      }
    },
    {
      "id": "201",
      "type": "class",
      "attributes": {
        "name": "UpdatableReference",
        "slug": "updatablereference",
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
        "alias": "updatablereference",
        "fullName": "UpdatableReference",
        "hierarchy": "Class UpdatableReference<T>\n  TypeParameter T\n  Constructor constructor\n    ConstructorSignature new UpdatableReference:UpdatableReference\n      Parameter value:T\n  Property _value:T\n  Property tag:TagWrapper<DirtyableTag>\n  Method get\n    CallSignature get:PathReference<any>\n      Parameter key:string\n  Method update\n    CallSignature update:void\n      Parameter value:T\n  Method value\n    CallSignature value:T",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedPathReference"
          }
        ],
        "extendedTypes": [
          {
            "isArray": false,
            "name": "ComponentPathReference",
            "link": {
              "id": "114",
              "type": "class",
              "slug": "componentpathreference",
              "sources": [
                {
                  "fileName": "references.ts",
                  "line": 24,
                  "character": 44,
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L24"
                }
              ],
              "parent": {
                "id": "0",
                "type": "0",
                "slug": "_glimmer_component",
                "sources": null
              }
            }
          }
        ],
        "sources": [
          {
            "fileName": "references.ts",
            "line": 140,
            "character": 31,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L140"
          }
        ],
        "typeParameters": [
          {
            "name": "T",
            "slug": "t",
            "flags": {},
            "alias": "t",
            "fullName": "UpdatableReference.T",
            "hierarchy": "TypeParameter T",
            "kindString": "Type parameter"
          }
        ],
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
            "fullName": "UpdatableReference.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new UpdatableReference:UpdatableReference\n    Parameter value:T",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 142,
                "character": 20,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L142"
              }
            ],
            "constructorSignatures": [
              {
                "name": "new UpdatableReference",
                "slug": "new_updatablereference",
                "flags": {},
                "alias": "new_updatablereference",
                "fullName": "UpdatableReference.constructor.new UpdatableReference",
                "hierarchy": "ConstructorSignature new UpdatableReference:UpdatableReference\n  Parameter value:T",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 142,
                    "character": 20,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L142"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "UpdatableReference",
                  "link": {
                    "id": "201",
                    "type": "class",
                    "slug": "updatablereference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 140,
                        "character": 31,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L140"
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
                    "name": "value",
                    "slug": "value",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "value",
                    "fullName": "UpdatableReference.constructor.new UpdatableReference.value",
                    "hierarchy": "Parameter value:T",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "T"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "properties": [
          {
            "name": "_value",
            "slug": "_value",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_value",
            "fullName": "UpdatableReference._value",
            "hierarchy": "Property _value:T",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 142,
                "character": 16,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L142"
              }
            ],
            "type": {
              "isArray": false,
              "name": "T"
            }
          },
          {
            "name": "tag",
            "slug": "tag",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": true,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "tag",
            "fullName": "UpdatableReference.tag",
            "hierarchy": "Property tag:TagWrapper<DirtyableTag>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 141,
                "character": 12,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L141"
              }
            ],
            "type": {
              "isArray": false,
              "name": "TagWrapper"
            }
          }
        ],
        "methods": [
          {
            "name": "get",
            "slug": "get",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "get",
            "fullName": "UpdatableReference.get",
            "hierarchy": "Method get\n  CallSignature get:PathReference<any>\n    Parameter key:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 28,
                "character": 5,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L28"
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "UpdatableReference.get.get",
                "hierarchy": "CallSignature get:PathReference<any>\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 28,
                    "character": 5,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L28"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "PathReference"
                },
                "parameters": [
                  {
                    "name": "key",
                    "slug": "key",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "key",
                    "fullName": "UpdatableReference.get.get.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "string"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "update",
            "slug": "update",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "update",
            "fullName": "UpdatableReference.update",
            "hierarchy": "Method update\n  CallSignature update:void\n    Parameter value:T",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 155,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L155"
              }
            ],
            "callSignatures": [
              {
                "name": "update",
                "slug": "update-1",
                "flags": {},
                "alias": "update-1",
                "fullName": "UpdatableReference.update.update",
                "hierarchy": "CallSignature update:void\n  Parameter value:T",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 155,
                    "character": 8,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L155"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "value",
                    "slug": "value-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "value-1",
                    "fullName": "UpdatableReference.update.update.value",
                    "hierarchy": "Parameter value:T",
                    "kindString": "Parameter",
                    "type": {
                      "isArray": false,
                      "name": "T"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "value",
            "slug": "value-2",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "value-2",
            "fullName": "UpdatableReference.value",
            "hierarchy": "Method value\n  CallSignature value:T",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 151,
                "character": 7,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L151"
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-3",
                "flags": {},
                "alias": "value-3",
                "fullName": "UpdatableReference.value.value",
                "hierarchy": "CallSignature value:T",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 151,
                    "character": 7,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/references.ts#L151"
                  }
                ],
                "type": {
                  "isArray": false,
                  "name": "T"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "17",
      "type": "interface",
      "attributes": {
        "name": "ComponentFactory",
        "slug": "componentfactory",
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
        "alias": "componentfactory",
        "fullName": "ComponentFactory",
        "hierarchy": "Interface ComponentFactory\n  Method create\n    CallSignature create:Component\n      Parameter injections:object",
        "kindString": "Interface",
        "sources": [
          {
            "fileName": "component.ts",
            "line": 109,
            "character": 33,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L109"
          }
        ],
        "methods": [
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
              "isStatic": false
            },
            "alias": "create",
            "fullName": "ComponentFactory.create",
            "hierarchy": "Method create\n  CallSignature create:Component\n    Parameter injections:object",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 110,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L110"
              }
            ],
            "callSignatures": [
              {
                "name": "create",
                "slug": "create-1",
                "flags": {},
                "alias": "create-1",
                "fullName": "ComponentFactory.create.create",
                "hierarchy": "CallSignature create:Component\n  Parameter injections:object",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 110,
                    "character": 8,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L110"
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
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component.ts#L44"
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
                    "fullName": "ComponentFactory.create.create.injections",
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
        ]
      }
    },
    {
      "id": "233",
      "type": "interface",
      "attributes": {
        "name": "ConstructorOptions",
        "slug": "constructoroptions",
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
        "alias": "constructoroptions",
        "fullName": "ConstructorOptions",
        "hierarchy": "Interface ConstructorOptions\n  Property env:Environment",
        "kindString": "Interface",
        "sources": [
          {
            "fileName": "component-manager.ts",
            "line": 23,
            "character": 35,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L23"
          }
        ],
        "properties": [
          {
            "name": "env",
            "slug": "env",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "env",
            "fullName": "ConstructorOptions.env",
            "hierarchy": "Property env:Environment",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 24,
                "character": 5,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/component-manager.ts#L24"
              }
            ],
            "type": {
              "isArray": false,
              "name": "Environment"
            }
          }
        ]
      }
    },
    {
      "id": "35",
      "type": "interface",
      "attributes": {
        "name": "Interceptors",
        "slug": "interceptors",
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
        "alias": "interceptors",
        "fullName": "Interceptors",
        "hierarchy": "Interface Interceptors\n  IndexSignature __index:boolean\n    Parameter key:string",
        "kindString": "Interface",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 174,
            "character": 29,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L174"
          }
        ],
        "indexSignatures": [
          {
            "name": "__index",
            "slug": "__index",
            "flags": {},
            "alias": "__index",
            "fullName": "Interceptors.__index",
            "hierarchy": "IndexSignature __index:boolean\n  Parameter key:string",
            "kindString": "Index signature",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 174,
                "character": 31,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L174"
              }
            ],
            "type": {
              "isArray": false,
              "name": "boolean"
            },
            "parameters": [
              {
                "name": "key",
                "slug": "key",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "key",
                "fullName": "Interceptors.__index.key",
                "hierarchy": "Parameter key:string",
                "kindString": "Parameter",
                "type": {
                  "isArray": false,
                  "name": "string"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "50",
      "type": "interface",
      "attributes": {
        "name": "UntrackedPropertyErrorThrower",
        "slug": "untrackedpropertyerrorthrower",
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
        "alias": "untrackedpropertyerrorthrower",
        "fullName": "UntrackedPropertyErrorThrower",
        "hierarchy": "Interface UntrackedPropertyErrorThrower\n  CallSignature __call:void\n    Parameter obj:any\n    Parameter key:string",
        "kindString": "Interface",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 219,
            "character": 46,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L219"
          }
        ],
        "comment": {
          "shortText": "Function that can be used in development mode to generate more meaningful\nerror messages.",
          "text": ""
        },
        "callSignatures": [
          {
            "name": "__call",
            "slug": "__call",
            "flags": {},
            "alias": "__call",
            "fullName": "UntrackedPropertyErrorThrower.__call",
            "hierarchy": "CallSignature __call:void\n  Parameter obj:any\n  Parameter key:string",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 219,
                "character": 48,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/99beb57/src/tracked.ts#L219"
              }
            ],
            "comment": {
              "shortText": "Function that can be used in development mode to generate more meaningful\nerror messages.",
              "text": ""
            },
            "type": {
              "isArray": false,
              "name": "void"
            },
            "parameters": [
              {
                "name": "obj",
                "slug": "obj",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "obj",
                "fullName": "UntrackedPropertyErrorThrower.__call.obj",
                "hierarchy": "Parameter obj:any",
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
                "fullName": "UntrackedPropertyErrorThrower.__call.key",
                "hierarchy": "Parameter key:string",
                "kindString": "Parameter",
                "type": {
                  "isArray": false,
                  "name": "string"
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
