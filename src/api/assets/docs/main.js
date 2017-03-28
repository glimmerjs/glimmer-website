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
      "intro": "<div><p>Welcome to the Glimmer API documentation.</p><p>Choose a project or module from the table of contents to get started.</p></div>",
      "idMap": {
        "_glimmer_application": {
          "application": "698",
          "applicationregistry": "318",
          "arrayiterator": "384",
          "defaultcomponentdefinition": "543",
          "dynamiccomponentreference": "456",
          "dynamicscope": "370",
          "emptyiterator": "410",
          "environment": "554",
          "helperreference": "519",
          "iterable": "415",
          "objectkeysiterator": "396",
          "simplepathreference": "505",
          "approot": "693",
          "applicationoptions": "685",
          "componentdefinitioncreator": "450",
          "environmentoptions": "540",
          "extendedtemplatemeta": "445",
          "initializer": "688",
          "blockcomponentmacro": "470",
          "buildaction": "491",
          "builduserhelper": "537",
          "cancreatecomponentdefinition": "682",
          "debuginfoforreference": "499",
          "debugname": "502",
          "dynamiccomponentfor": "483",
          "hashtoargs": "488",
          "inlinecomponentmacro": "477",
          "istypespecifier": "367",
          "populatemacros": "678",
          "thrownoactionerror": "495"
        }
      }
    },
    "relationships": {
      "docmodules": {
        "data": [
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
        "hierarchy": "Global @glimmer/application\n  Class Application\n    Constructor constructor\n      ConstructorSignature new Application:Application\n        Parameter options:ApplicationOptions\n    Property _container:Container\n    Property _initialized:boolean\n    Property _initializers:Initializer[]\n    Property _registry:Registry\n    Property _renderResult:RenderResult\n    Property _rendered:boolean\n    Property _roots:AppRoot[]\n    Property _rootsIndex:number\n    Property _scheduled:boolean\n    Property env:Environment\n    Property resolver:Resolver\n    Property rootName:string\n    Method renderComponent\n      CallSignature renderComponent:void\n        Parameter component:string | ComponentDefinition<Component>\n        Parameter parent:Node\n        Parameter nextSibling:Option<Node>\n  Class ApplicationRegistry\n    Constructor constructor\n      ConstructorSignature new ApplicationRegistry:ApplicationRegistry\n        Parameter registry:Registry\n        Parameter resolver:Resolver\n    Property _registry:Registry\n    Property _resolver:Resolver\n    Method _toAbsoluteOrTypeSpecifier\n      CallSignature _toAbsoluteOrTypeSpecifier:string\n        Parameter specifier:string\n    Method _toAbsoluteSpecifier\n      CallSignature _toAbsoluteSpecifier:string\n        Parameter specifier:string\n        Parameter referrer:string\n    Method register\n      CallSignature register:void\n        Parameter specifier:string\n        Parameter factory:any\n        Parameter options:RegistrationOptions\n    Method registerInjection\n      CallSignature registerInjection:void\n        Parameter specifier:string\n        Parameter property:string\n        Parameter injection:string\n    Method registerOption\n      CallSignature registerOption:void\n        Parameter specifier:string\n        Parameter option:string\n        Parameter value:any\n    Method registeredInjections\n      CallSignature registeredInjections:Injection[]\n        Parameter specifier:string\n    Method registeredOption\n      CallSignature registeredOption:any\n        Parameter specifier:string\n        Parameter option:string\n    Method registeredOptions\n      CallSignature registeredOptions:any\n        Parameter specifier:string\n    Method registration\n      CallSignature registration:any\n        Parameter specifier:string\n    Method unregister\n      CallSignature unregister:void\n        Parameter specifier:string\n    Method unregisterOption\n      CallSignature unregisterOption:void\n        Parameter specifier:string\n        Parameter option:string\n  Class ArrayIterator\n    Constructor constructor\n      ConstructorSignature new ArrayIterator:ArrayIterator\n        Parameter array:Opaque[]\n        Parameter keyFor:KeyFor<number>\n    Property array:Opaque[]\n    Property keyFor:KeyFor<number>\n    Property position:number\n    Method isEmpty\n      CallSignature isEmpty:boolean\n    Method next\n      CallSignature next:IterationItem<Opaque, number>\n  Class DefaultComponentDefinition\n    Constructor constructor\n      ConstructorSignature new DefaultComponentDefinition:DefaultComponentDefinition\n        Parameter name:string\n        Parameter manager:ComponentManager<any>\n        Parameter ComponentClass:ComponentClass\n    Property ComponentClass:ComponentClass\n    Property manager:ComponentManager<any>\n    Property name:string\n    Method toJSON\n      CallSignature toJSON:string\n  Class DynamicComponentReference\n    Constructor constructor\n      ConstructorSignature new DynamicComponentReference:DynamicComponentReference\n        Parameter nameRef:PathReference<Opaque>\n        Parameter env:GlimmerEnvironment\n        Parameter meta:TemplateMeta\n    Property env:GlimmerEnvironment\n    Property meta:TemplateMeta\n    Property nameRef:PathReference<Opaque>\n    Property tag:TagWrapper<RevisionTag>\n    Method get\n      CallSignature get:PrimitiveReference<undefined>\n    Method value\n      CallSignature value:ComponentDefinition<Opaque>\n  Class DynamicScope\n    Constructor constructor\n      ConstructorSignature new DynamicScope:DynamicScope\n        Parameter bucket:any\n    Property bucket:any\n    Method child\n      CallSignature child:DynamicScope\n    Method get\n      CallSignature get:PathReference<Opaque>\n        Parameter key:string\n    Method set\n      CallSignature set:VersionedPathReference<void | __type>\n        Parameter key:string\n        Parameter reference:PathReference<Opaque>\n  Class EmptyIterator\n    Method isEmpty\n      CallSignature isEmpty:boolean\n    Method next\n      CallSignature next:IterationItem<Opaque, Opaque>\n  Class Environment\n    Constructor constructor\n      ConstructorSignature new Environment:Environment\n        Parameter options:EnvironmentOptions\n    Property appendOperations:DOMTreeConstruction\n    Property components:Dict<ComponentDefinition<void | __type>>\n    Property constants:Constants\n    Property helpers:Dict<Helper>\n    Property managers:Dict<ComponentManager<void | __type>>\n    Property modifiers:Dict<ModifierManager<void | __type>>\n    Property program:Program\n    Property updateOperations:DOMChanges\n    Property uselessAnchor:HTMLAnchorElement\n    Method attributeFor\n      CallSignature attributeFor:AttributeManager\n        Parameter element:Element\n        Parameter attr:string\n        Parameter isTrusting:boolean\n        Parameter namespace:string\n    Method begin\n      CallSignature begin:void\n    Method commit\n      CallSignature commit:void\n    Method didCreate\n      CallSignature didCreate<T>:void\n        TypeParameter T\n        Parameter component:T\n        Parameter manager:ComponentManager<T>\n    Method didDestroy\n      CallSignature didDestroy:void\n        Parameter d:Destroyable\n    Method didUpdate\n      CallSignature didUpdate<T>:void\n        TypeParameter T\n        Parameter component:T\n        Parameter manager:ComponentManager<T>\n    Method getAppendOperations\n      CallSignature getAppendOperations:DOMTreeConstruction\n    Method getComponentDefinition\n      CallSignature getComponentDefinition:ComponentDefinition<Component>\n        Parameter name:string\n        Parameter meta:TemplateMeta\n    Method getDOM\n      CallSignature getDOM:DOMChanges\n    Method getIdentity\n      CallSignature getIdentity:string\n        Parameter object:HasGuid\n    Method hasComponentDefinition\n      CallSignature hasComponentDefinition:boolean\n        Parameter name:string\n        Parameter meta:TemplateMeta\n    Method hasHelper\n      CallSignature hasHelper:boolean\n        Parameter name:string\n        Parameter meta:TemplateMeta\n    Method hasModifier\n      CallSignature hasModifier:boolean\n        Parameter modifierName:string\n        Parameter blockMeta:TemplateMeta\n    Method hasPartial\n      CallSignature hasPartial:boolean\n    Method iterableFor\n      CallSignature iterableFor:OpaqueIterable\n        Parameter ref:Reference<Opaque>\n        Parameter keyPath:string\n    Method lookupHelper\n      CallSignature lookupHelper:GlimmerHelper\n        Parameter name:string\n        Parameter meta:TemplateMeta\n    Method lookupModifier\n      CallSignature lookupModifier:ModifierManager<Opaque>\n        Parameter modifierName:string\n        Parameter blockMeta:TemplateMeta\n    Method lookupPartial\n      CallSignature lookupPartial:any\n    Method macros\n      CallSignature macros:object\n        TypeLiteral __type\n          Variable blocks:BlockMacros\n          Variable inlines:InlineMacros\n    Method managerFor\n      CallSignature managerFor:ComponentManager<Component>\n        Parameter managerId:string\n    Method populateBuiltins\n      CallSignature populateBuiltins:object\n        TypeLiteral __type\n          Variable blocks:Blocks\n          Variable inlines:Inlines\n    Method protocolForURL\n      CallSignature protocolForURL:string\n        Parameter url:string\n    Method registerComponent\n      CallSignature registerComponent:ComponentDefinition<Component>\n        Parameter name:string\n        Parameter templateSpecifier:string\n        Parameter meta:TemplateMeta\n        Parameter owner:Owner\n    Method registerHelper\n      CallSignature registerHelper:GlimmerHelper\n        Parameter specifier:string\n        Parameter owner:Owner\n    Method scheduleInstallModifier\n      CallSignature scheduleInstallModifier<T>:void\n        TypeParameter T\n        Parameter modifier:T\n        Parameter manager:ModifierManager<T>\n    Method scheduleUpdateModifier\n      CallSignature scheduleUpdateModifier<T>:void\n        TypeParameter T\n        Parameter modifier:T\n        Parameter manager:ModifierManager<T>\n    Method toConditionalReference\n      CallSignature toConditionalReference:Reference<boolean>\n        Parameter reference:Reference<Opaque>\n    Method create\n      CallSignature create:Environment\n        Parameter options:EnvironmentOptions\n  Class HelperReference\n    Constructor constructor\n      ConstructorSignature new HelperReference:HelperReference\n        Parameter helper:UserHelper\n        Parameter args:Arguments\n    Property args:CapturedArguments\n    Property helper:UserHelper\n    Property tag:TagWrapper<any>\n    Method get\n      CallSignature get:SimplePathReference<Opaque>\n        Parameter prop:string\n    Method value\n      CallSignature value:any\n  Class Iterable\n    Constructor constructor\n      ConstructorSignature new Iterable:Iterable\n        Parameter ref:Reference<Opaque>\n        Parameter keyFor:KeyFor<Opaque>\n    Property keyFor:KeyFor<Opaque>\n    Property ref:Reference<Opaque>\n    Property tag:Tag\n    Method iterate\n      CallSignature iterate:OpaqueIterator\n    Method memoReferenceFor\n      CallSignature memoReferenceFor:UpdatableReference<Opaque>\n        Parameter item:IterationItem<Opaque, Opaque>\n    Method updateMemoReference\n      CallSignature updateMemoReference:void\n        Parameter reference:UpdatableReference<Opaque>\n        Parameter item:IterationItem<Opaque, Opaque>\n    Method updateValueReference\n      CallSignature updateValueReference:void\n        Parameter reference:UpdatableReference<Opaque>\n        Parameter item:IterationItem<Opaque, Opaque>\n    Method valueReferenceFor\n      CallSignature valueReferenceFor:UpdatableReference<Opaque>\n        Parameter item:IterationItem<Opaque, Opaque>\n  Class ObjectKeysIterator\n    Constructor constructor\n      ConstructorSignature new ObjectKeysIterator:ObjectKeysIterator\n        Parameter keys:string[]\n        Parameter values:Opaque[]\n        Parameter keyFor:KeyFor<string>\n    Property keyFor:KeyFor<string>\n    Property keys:string[]\n    Property position:number\n    Property values:Opaque[]\n    Method isEmpty\n      CallSignature isEmpty:boolean\n    Method next\n      CallSignature next:IterationItem<Opaque, string>\n  Class SimplePathReference<T>\n    TypeParameter T\n    Constructor constructor\n      ConstructorSignature new SimplePathReference:SimplePathReference\n        Parameter parent:Reference<T>\n        Parameter property:string\n    Property parent:Reference<T>\n    Property property:string\n    Property tag:TagWrapper<any>\n    Method get\n      CallSignature get:PathReference<Opaque>\n        Parameter prop:string\n    Method value\n      CallSignature value:T\n  Interface AppRoot\n    Property component:string | ComponentDefinition<Component>\n    Property id:number\n    Property nextSibling:Option<Node>\n    Property parent:Node\n  Interface ApplicationOptions\n    Property resolver:Resolver\n    Property rootName:string\n  Interface ComponentDefinitionCreator\n    Method createComponentDefinition\n      CallSignature createComponentDefinition:ComponentDefinition<Component>\n        Parameter name:string\n        Parameter template:Template<TemplateMeta>\n        Parameter componentFactory:Factory<Component>\n  Interface EnvironmentOptions\n    Property appendOperations:DOMTreeConstruction\n    Property document:HTMLDocument\n  Interface ExtendedTemplateMeta\n    Property <template-meta>:true\n    Property managerId:string\n    Property moduleName:string\n    Property specifier:string\n  Interface Initializer\n    Property name:string\n    Method initialize\n      CallSignature initialize:void\n        Parameter registry:RegistryWriter\n  TypeAlias KeyFor:function\n    TypeLiteral __type\n      CallSignature __call:string\n        Parameter item:Opaque\n        Parameter index:T\n  TypeAlias UserHelper:function\n    TypeLiteral __type\n      CallSignature __call:any\n        Parameter args:ReadonlyArray<Opaque>\n        Parameter named:Dict<Opaque>\n  Variable DEFAULT_MANAGER:\"main\"\n  Variable EMPTY_ITERATOR:EmptyIterator\n  Function blockComponentMacro\n    CallSignature blockComponentMacro:boolean\n      Parameter params:any\n      Parameter hash:any\n      Parameter template:any\n      Parameter inverse:any\n      Parameter builder:any\n  Function buildAction\n    CallSignature buildAction:ConstReference<action>\n      Parameter vm:VM\n      Parameter _args:Arguments\n  Function buildUserHelper\n    CallSignature buildUserHelper:GlimmerHelper\n      Parameter helperFunc:any\n  Function canCreateComponentDefinition\n    CallSignature canCreateComponentDefinition:boolean\n      Parameter manager:ComponentDefinitionCreator | ComponentManager<Component>\n  Function debugInfoForReference\n    CallSignature debugInfoForReference:string\n      Parameter reference:any\n  Function debugName\n    CallSignature debugName:any\n      Parameter obj:any\n  Function dynamicComponentFor\n    CallSignature dynamicComponentFor:DynamicComponentReference\n      Parameter vm:VM\n      Parameter args:Arguments\n      Parameter meta:TemplateMeta\n  Function hashToArgs\n    CallSignature hashToArgs:Option<WireFormat.Core.Hash>\n      Parameter hash:Option<WireFormat.Core.Hash>\n  Function inlineComponentMacro\n    CallSignature inlineComponentMacro:boolean\n      Parameter _name:any\n      Parameter params:any\n      Parameter hash:any\n      Parameter builder:any\n  Function isTypeSpecifier\n    CallSignature isTypeSpecifier:boolean\n      Parameter specifier:string\n  Function populateMacros\n    CallSignature populateMacros:void\n      Parameter blocks:BlockMacros\n      Parameter inlines:InlineMacros\n  Function throwNoActionError\n    CallSignature throwNoActionError:void\n      Parameter actionFunc:any\n      Parameter actionFuncReference:Reference<any>\n  ObjectLiteral DEFAULT_HELPERS:object\n    Variable action:buildAction",
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
        "readme": "<h1 id=\"glimmer-application-build-status-https-secure-travis-ci-org-glimmerjs-glimmer-application-svg-branch-master-http-travis-ci-org-glimmerjs-glimmer-application-\">glimmer-application <a href=\"http://travis-ci.org/glimmerjs/glimmer-application\"><img src=\"https://secure.travis-ci.org/glimmerjs/glimmer-application.svg?branch=master\" alt=\"Build Status\"></a></h1>\n<h2 id=\"acknowledgements\">Acknowledgements</h2>\n<p>Thanks to <a href=\"http://monegraph.com\">Monegraph</a> for funding the initial development\nof this library.</p>\n<h2 id=\"license\">License</h2>\n<p>MIT License.</p>\n",
        "typeAliases": [
          {
            "name": "KeyFor",
            "slug": "keyfor",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "keyfor",
            "fullName": "KeyFor",
            "hierarchy": "TypeAlias KeyFor:function\n  TypeLiteral __type\n    CallSignature __call:string\n      Parameter item:Opaque\n      Parameter index:T",
            "kindString": "Type alias",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 17,
                "character": 18,
                "url": null
              },
              {
                "fileName": "environment.ts",
                "line": 39,
                "character": 11,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "function",
              "declaration": {
                "id": "671",
                "type": "type-literal",
                "attributes": {
                  "name": "__type",
                  "slug": "__type",
                  "flags": {},
                  "alias": "__type",
                  "fullName": "KeyFor.__type",
                  "hierarchy": "TypeLiteral __type\n  CallSignature __call:string\n    Parameter item:Opaque\n    Parameter index:T",
                  "kindString": "Type literal",
                  "sources": [
                    {
                      "fileName": "environment.ts",
                      "line": 39,
                      "character": 16,
                      "url": null
                    }
                  ],
                  "callSignatures": [
                    {
                      "name": "__call",
                      "slug": "__call",
                      "flags": {},
                      "alias": "__call",
                      "fullName": "KeyFor.__type.__call",
                      "hierarchy": "CallSignature __call:string\n  Parameter item:Opaque\n  Parameter index:T",
                      "kindString": "Call signature",
                      "sources": [
                        {
                          "fileName": "environment.ts",
                          "line": 39,
                          "character": 16,
                          "url": null
                        }
                      ],
                      "typeInfo": {
                        "isArray": false,
                        "name": "string"
                      },
                      "parameters": [
                        {
                          "name": "item",
                          "slug": "item",
                          "flags": {
                            "isOptional": false,
                            "isRest": false
                          },
                          "alias": "item",
                          "fullName": "KeyFor.__type.__call.item",
                          "hierarchy": "Parameter item:Opaque",
                          "kindString": "Parameter",
                          "typeInfo": {
                            "isArray": false,
                            "name": "Opaque"
                          }
                        },
                        {
                          "name": "index",
                          "slug": "index",
                          "flags": {
                            "isOptional": false,
                            "isRest": false
                          },
                          "alias": "index",
                          "fullName": "KeyFor.__type.__call.index",
                          "hierarchy": "Parameter index:T",
                          "kindString": "Parameter",
                          "typeInfo": {
                            "isArray": false,
                            "name": "T"
                          }
                        }
                      ]
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
                "fullName": "KeyFor.__type",
                "hierarchy": "TypeLiteral __type\n  CallSignature __call:string\n    Parameter item:Opaque\n    Parameter index:T",
                "kindString": "Type literal",
                "sources": [
                  {
                    "fileName": "environment.ts",
                    "line": 39,
                    "character": 16,
                    "url": null
                  }
                ],
                "callSignatures": [
                  {
                    "name": "__call",
                    "slug": "__call",
                    "flags": {},
                    "alias": "__call",
                    "fullName": "KeyFor.__type.__call",
                    "hierarchy": "CallSignature __call:string\n  Parameter item:Opaque\n  Parameter index:T",
                    "kindString": "Call signature",
                    "sources": [
                      {
                        "fileName": "environment.ts",
                        "line": 39,
                        "character": 16,
                        "url": null
                      }
                    ],
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    },
                    "parameters": [
                      {
                        "name": "item",
                        "slug": "item",
                        "flags": {
                          "isOptional": false,
                          "isRest": false
                        },
                        "alias": "item",
                        "fullName": "KeyFor.__type.__call.item",
                        "hierarchy": "Parameter item:Opaque",
                        "kindString": "Parameter",
                        "typeInfo": {
                          "isArray": false,
                          "name": "Opaque"
                        }
                      },
                      {
                        "name": "index",
                        "slug": "index",
                        "flags": {
                          "isOptional": false,
                          "isRest": false
                        },
                        "alias": "index",
                        "fullName": "KeyFor.__type.__call.index",
                        "hierarchy": "Parameter index:T",
                        "kindString": "Parameter",
                        "typeInfo": {
                          "isArray": false,
                          "name": "T"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "UserHelper",
            "slug": "userhelper",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "userhelper",
            "fullName": "UserHelper",
            "hierarchy": "TypeAlias UserHelper:function\n  TypeLiteral __type\n    CallSignature __call:any\n      Parameter args:ReadonlyArray<Opaque>\n      Parameter named:Dict<Opaque>",
            "kindString": "Type alias",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 19,
                "character": 22,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "function",
              "declaration": {
                "id": "533",
                "type": "type-literal",
                "attributes": {
                  "name": "__type",
                  "slug": "__type",
                  "flags": {},
                  "alias": "__type",
                  "fullName": "UserHelper.__type",
                  "hierarchy": "TypeLiteral __type\n  CallSignature __call:any\n    Parameter args:ReadonlyArray<Opaque>\n    Parameter named:Dict<Opaque>",
                  "kindString": "Type literal",
                  "sources": [
                    {
                      "fileName": "helpers/user-helper.ts",
                      "line": 19,
                      "character": 24,
                      "url": null
                    }
                  ],
                  "callSignatures": [
                    {
                      "name": "__call",
                      "slug": "__call",
                      "flags": {},
                      "alias": "__call",
                      "fullName": "UserHelper.__type.__call",
                      "hierarchy": "CallSignature __call:any\n  Parameter args:ReadonlyArray<Opaque>\n  Parameter named:Dict<Opaque>",
                      "kindString": "Call signature",
                      "sources": [
                        {
                          "fileName": "helpers/user-helper.ts",
                          "line": 19,
                          "character": 24,
                          "url": null
                        }
                      ],
                      "typeInfo": {
                        "isArray": false,
                        "name": "any"
                      },
                      "parameters": [
                        {
                          "name": "args",
                          "slug": "args",
                          "flags": {
                            "isOptional": false,
                            "isRest": false
                          },
                          "alias": "args",
                          "fullName": "UserHelper.__type.__call.args",
                          "hierarchy": "Parameter args:ReadonlyArray<Opaque>",
                          "kindString": "Parameter",
                          "typeInfo": {
                            "isArray": false,
                            "name": "ReadonlyArray"
                          }
                        },
                        {
                          "name": "named",
                          "slug": "named",
                          "flags": {
                            "isOptional": false,
                            "isRest": false
                          },
                          "alias": "named",
                          "fullName": "UserHelper.__type.__call.named",
                          "hierarchy": "Parameter named:Dict<Opaque>",
                          "kindString": "Parameter",
                          "typeInfo": {
                            "isArray": false,
                            "name": "Dict"
                          }
                        }
                      ]
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
                "fullName": "UserHelper.__type",
                "hierarchy": "TypeLiteral __type\n  CallSignature __call:any\n    Parameter args:ReadonlyArray<Opaque>\n    Parameter named:Dict<Opaque>",
                "kindString": "Type literal",
                "sources": [
                  {
                    "fileName": "helpers/user-helper.ts",
                    "line": 19,
                    "character": 24,
                    "url": null
                  }
                ],
                "callSignatures": [
                  {
                    "name": "__call",
                    "slug": "__call",
                    "flags": {},
                    "alias": "__call",
                    "fullName": "UserHelper.__type.__call",
                    "hierarchy": "CallSignature __call:any\n  Parameter args:ReadonlyArray<Opaque>\n  Parameter named:Dict<Opaque>",
                    "kindString": "Call signature",
                    "sources": [
                      {
                        "fileName": "helpers/user-helper.ts",
                        "line": 19,
                        "character": 24,
                        "url": null
                      }
                    ],
                    "typeInfo": {
                      "isArray": false,
                      "name": "any"
                    },
                    "parameters": [
                      {
                        "name": "args",
                        "slug": "args",
                        "flags": {
                          "isOptional": false,
                          "isRest": false
                        },
                        "alias": "args",
                        "fullName": "UserHelper.__type.__call.args",
                        "hierarchy": "Parameter args:ReadonlyArray<Opaque>",
                        "kindString": "Parameter",
                        "typeInfo": {
                          "isArray": false,
                          "name": "ReadonlyArray"
                        }
                      },
                      {
                        "name": "named",
                        "slug": "named",
                        "flags": {
                          "isOptional": false,
                          "isRest": false
                        },
                        "alias": "named",
                        "fullName": "UserHelper.__type.__call.named",
                        "hierarchy": "Parameter named:Dict<Opaque>",
                        "kindString": "Parameter",
                        "typeInfo": {
                          "isArray": false,
                          "name": "Dict"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "variables": [
          {
            "name": "DEFAULT_MANAGER",
            "slug": "default_manager",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "default_manager",
            "fullName": "DEFAULT_MANAGER",
            "hierarchy": "Variable DEFAULT_MANAGER:\"main\"",
            "kindString": "Variable",
            "sources": [
              {
                "fileName": "environment.ts",
                "line": 52,
                "character": 21,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "main"
            }
          },
          {
            "name": "EMPTY_ITERATOR",
            "slug": "empty_iterator",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "empty_iterator",
            "fullName": "EMPTY_ITERATOR",
            "hierarchy": "Variable EMPTY_ITERATOR:EmptyIterator",
            "kindString": "Variable",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 89,
                "character": 20,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "EmptyIterator",
              "link": {
                "id": "410",
                "type": "class",
                "slug": "emptyiterator",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 79,
                    "character": 19,
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
        ],
        "objectLiterals": [
          {
            "name": "DEFAULT_HELPERS",
            "slug": "default_helpers",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "default_helpers",
            "fullName": "DEFAULT_HELPERS",
            "hierarchy": "ObjectLiteral DEFAULT_HELPERS:object\n  Variable action:buildAction",
            "kindString": "Object literal",
            "sources": [
              {
                "fileName": "environment.ts",
                "line": 53,
                "character": 21,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "object"
            },
            "variables": [
              {
                "name": "action",
                "slug": "action",
                "flags": {
                  "isExported": false,
                  "isExternal": true,
                  "isOptional": false,
                  "isPrivate": false,
                  "isPublic": false,
                  "isProtected": false,
                  "isStatic": false
                },
                "alias": "action",
                "fullName": "DEFAULT_HELPERS.action",
                "hierarchy": "Variable action:buildAction",
                "kindString": "Variable",
                "sources": [
                  {
                    "fileName": "environment.ts",
                    "line": 54,
                    "character": 8,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "buildAction",
                  "link": {
                    "id": "491",
                    "type": "function",
                    "slug": "buildaction",
                    "sources": [
                      {
                        "fileName": "helpers/action.ts",
                        "line": 4,
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
        ],
        "menu": {
          "include": [
            "Application"
          ]
        }
      },
      "relationships": {
        "classes": {
          "data": [
            {
              "type": "class",
              "id": "698"
            },
            {
              "type": "class",
              "id": "318"
            },
            {
              "type": "class",
              "id": "384"
            },
            {
              "type": "class",
              "id": "543"
            },
            {
              "type": "class",
              "id": "456"
            },
            {
              "type": "class",
              "id": "370"
            },
            {
              "type": "class",
              "id": "410"
            },
            {
              "type": "class",
              "id": "554"
            },
            {
              "type": "class",
              "id": "519"
            },
            {
              "type": "class",
              "id": "415"
            },
            {
              "type": "class",
              "id": "396"
            },
            {
              "type": "class",
              "id": "505"
            }
          ]
        },
        "interfaces": {
          "data": [
            {
              "type": "interface",
              "id": "693"
            },
            {
              "type": "interface",
              "id": "685"
            },
            {
              "type": "interface",
              "id": "450"
            },
            {
              "type": "interface",
              "id": "540"
            },
            {
              "type": "interface",
              "id": "445"
            },
            {
              "type": "interface",
              "id": "688"
            }
          ]
        },
        "functions": {
          "data": [
            {
              "type": "function",
              "id": "470"
            },
            {
              "type": "function",
              "id": "491"
            },
            {
              "type": "function",
              "id": "537"
            },
            {
              "type": "function",
              "id": "682"
            },
            {
              "type": "function",
              "id": "499"
            },
            {
              "type": "function",
              "id": "502"
            },
            {
              "type": "function",
              "id": "483"
            },
            {
              "type": "function",
              "id": "488"
            },
            {
              "type": "function",
              "id": "477"
            },
            {
              "type": "function",
              "id": "367"
            },
            {
              "type": "function",
              "id": "678"
            },
            {
              "type": "function",
              "id": "495"
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
        "hierarchy": "Class Application\n  Constructor constructor\n    ConstructorSignature new Application:Application\n      Parameter options:ApplicationOptions\n  Property _container:Container\n  Property _initialized:boolean\n  Property _initializers:Initializer[]\n  Property _registry:Registry\n  Property _renderResult:RenderResult\n  Property _rendered:boolean\n  Property _roots:AppRoot[]\n  Property _rootsIndex:number\n  Property _scheduled:boolean\n  Property env:Environment\n  Property resolver:Resolver\n  Property rootName:string\n  Method renderComponent\n    CallSignature renderComponent:void\n      Parameter component:string | ComponentDefinition<Component>\n      Parameter parent:Node\n      Parameter nextSibling:Option<Node>",
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
                "line": 143,
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
                    "line": 143,
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
          }
        ]
      }
    },
    {
      "id": "318",
      "type": "class",
      "attributes": {
        "name": "ApplicationRegistry",
        "slug": "applicationregistry",
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
        "alias": "applicationregistry",
        "fullName": "ApplicationRegistry",
        "hierarchy": "Class ApplicationRegistry\n  Constructor constructor\n    ConstructorSignature new ApplicationRegistry:ApplicationRegistry\n      Parameter registry:Registry\n      Parameter resolver:Resolver\n  Property _registry:Registry\n  Property _resolver:Resolver\n  Method _toAbsoluteOrTypeSpecifier\n    CallSignature _toAbsoluteOrTypeSpecifier:string\n      Parameter specifier:string\n  Method _toAbsoluteSpecifier\n    CallSignature _toAbsoluteSpecifier:string\n      Parameter specifier:string\n      Parameter referrer:string\n  Method register\n    CallSignature register:void\n      Parameter specifier:string\n      Parameter factory:any\n      Parameter options:RegistrationOptions\n  Method registerInjection\n    CallSignature registerInjection:void\n      Parameter specifier:string\n      Parameter property:string\n      Parameter injection:string\n  Method registerOption\n    CallSignature registerOption:void\n      Parameter specifier:string\n      Parameter option:string\n      Parameter value:any\n  Method registeredInjections\n    CallSignature registeredInjections:Injection[]\n      Parameter specifier:string\n  Method registeredOption\n    CallSignature registeredOption:any\n      Parameter specifier:string\n      Parameter option:string\n  Method registeredOptions\n    CallSignature registeredOptions:any\n      Parameter specifier:string\n  Method registration\n    CallSignature registration:any\n      Parameter specifier:string\n  Method unregister\n    CallSignature unregister:void\n      Parameter specifier:string\n  Method unregisterOption\n    CallSignature unregisterOption:void\n      Parameter specifier:string\n      Parameter option:string",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "RegistryAccessor"
          }
        ],
        "sources": [
          {
            "fileName": "application-registry.ts",
            "line": 13,
            "character": 40,
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
            "fullName": "ApplicationRegistry.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new ApplicationRegistry:ApplicationRegistry\n    Parameter registry:Registry\n    Parameter resolver:Resolver",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 15,
                "character": 30,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new ApplicationRegistry",
                "slug": "new_applicationregistry",
                "flags": {},
                "alias": "new_applicationregistry",
                "fullName": "ApplicationRegistry.constructor.new ApplicationRegistry",
                "hierarchy": "ConstructorSignature new ApplicationRegistry:ApplicationRegistry\n  Parameter registry:Registry\n  Parameter resolver:Resolver",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 15,
                    "character": 30,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ApplicationRegistry",
                  "link": {
                    "id": "318",
                    "type": "class",
                    "slug": "applicationregistry",
                    "sources": [
                      {
                        "fileName": "application-registry.ts",
                        "line": 13,
                        "character": 40,
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
                    "name": "registry",
                    "slug": "registry",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "registry",
                    "fullName": "ApplicationRegistry.constructor.new ApplicationRegistry.registry",
                    "hierarchy": "Parameter registry:Registry",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "Registry"
                    }
                  },
                  {
                    "name": "resolver",
                    "slug": "resolver",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "resolver",
                    "fullName": "ApplicationRegistry.constructor.new ApplicationRegistry.resolver",
                    "hierarchy": "Parameter resolver:Resolver",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "Resolver"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "properties": [
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
            "fullName": "ApplicationRegistry._registry",
            "hierarchy": "Property _registry:Registry",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 14,
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
            "name": "_resolver",
            "slug": "_resolver",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_resolver",
            "fullName": "ApplicationRegistry._resolver",
            "hierarchy": "Property _resolver:Resolver",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 15,
                "character": 19,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Resolver"
            }
          }
        ],
        "methods": [
          {
            "name": "_toAbsoluteOrTypeSpecifier",
            "slug": "_toabsoluteortypespecifier",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_toabsoluteortypespecifier",
            "fullName": "ApplicationRegistry._toAbsoluteOrTypeSpecifier",
            "hierarchy": "Method _toAbsoluteOrTypeSpecifier\n  CallSignature _toAbsoluteOrTypeSpecifier:string\n    Parameter specifier:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 72,
                "character": 36,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "_toAbsoluteOrTypeSpecifier",
                "slug": "_toabsoluteortypespecifier-1",
                "flags": {},
                "alias": "_toabsoluteortypespecifier-1",
                "fullName": "ApplicationRegistry._toAbsoluteOrTypeSpecifier._toAbsoluteOrTypeSpecifier",
                "hierarchy": "CallSignature _toAbsoluteOrTypeSpecifier:string\n  Parameter specifier:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 72,
                    "character": 36,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "string"
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
                    "fullName": "ApplicationRegistry._toAbsoluteOrTypeSpecifier._toAbsoluteOrTypeSpecifier.specifier",
                    "hierarchy": "Parameter specifier:string",
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
            "name": "_toAbsoluteSpecifier",
            "slug": "_toabsolutespecifier",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_toabsolutespecifier",
            "fullName": "ApplicationRegistry._toAbsoluteSpecifier",
            "hierarchy": "Method _toAbsoluteSpecifier\n  CallSignature _toAbsoluteSpecifier:string\n    Parameter specifier:string\n    Parameter referrer:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 68,
                "character": 30,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "_toAbsoluteSpecifier",
                "slug": "_toabsolutespecifier-1",
                "flags": {},
                "alias": "_toabsolutespecifier-1",
                "fullName": "ApplicationRegistry._toAbsoluteSpecifier._toAbsoluteSpecifier",
                "hierarchy": "CallSignature _toAbsoluteSpecifier:string\n  Parameter specifier:string\n  Parameter referrer:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 68,
                    "character": 30,
                    "url": null
                  }
                ],
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
                    "fullName": "ApplicationRegistry._toAbsoluteSpecifier._toAbsoluteSpecifier.specifier",
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
                    "fullName": "ApplicationRegistry._toAbsoluteSpecifier._toAbsoluteSpecifier.referrer",
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
            "name": "register",
            "slug": "register",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "register",
            "fullName": "ApplicationRegistry.register",
            "hierarchy": "Method register\n  CallSignature register:void\n    Parameter specifier:string\n    Parameter factory:any\n    Parameter options:RegistrationOptions",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 22,
                "character": 10,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "register",
                "slug": "register-1",
                "flags": {},
                "alias": "register-1",
                "fullName": "ApplicationRegistry.register.register",
                "hierarchy": "CallSignature register:void\n  Parameter specifier:string\n  Parameter factory:any\n  Parameter options:RegistrationOptions",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 22,
                    "character": 10,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
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
                    "fullName": "ApplicationRegistry.register.register.specifier",
                    "hierarchy": "Parameter specifier:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "factory",
                    "slug": "factory",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "factory",
                    "fullName": "ApplicationRegistry.register.register.factory",
                    "hierarchy": "Parameter factory:any",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "any"
                    }
                  },
                  {
                    "name": "options",
                    "slug": "options",
                    "flags": {
                      "isOptional": true,
                      "isRest": false
                    },
                    "alias": "options",
                    "fullName": "ApplicationRegistry.register.register.options",
                    "hierarchy": "Parameter options:RegistrationOptions",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "RegistrationOptions"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "registerInjection",
            "slug": "registerinjection",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "registerinjection",
            "fullName": "ApplicationRegistry.registerInjection",
            "hierarchy": "Method registerInjection\n  CallSignature registerInjection:void\n    Parameter specifier:string\n    Parameter property:string\n    Parameter injection:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 57,
                "character": 19,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "registerInjection",
                "slug": "registerinjection-1",
                "flags": {},
                "alias": "registerinjection-1",
                "fullName": "ApplicationRegistry.registerInjection.registerInjection",
                "hierarchy": "CallSignature registerInjection:void\n  Parameter specifier:string\n  Parameter property:string\n  Parameter injection:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 57,
                    "character": 19,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "specifier",
                    "slug": "specifier-3",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier-3",
                    "fullName": "ApplicationRegistry.registerInjection.registerInjection.specifier",
                    "hierarchy": "Parameter specifier:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "property",
                    "slug": "property",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "property",
                    "fullName": "ApplicationRegistry.registerInjection.registerInjection.property",
                    "hierarchy": "Parameter property:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "injection",
                    "slug": "injection",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "injection",
                    "fullName": "ApplicationRegistry.registerInjection.registerInjection.injection",
                    "hierarchy": "Parameter injection:string",
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
            "name": "registerOption",
            "slug": "registeroption",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "registeroption",
            "fullName": "ApplicationRegistry.registerOption",
            "hierarchy": "Method registerOption\n  CallSignature registerOption:void\n    Parameter specifier:string\n    Parameter option:string\n    Parameter value:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 37,
                "character": 16,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "registerOption",
                "slug": "registeroption-1",
                "flags": {},
                "alias": "registeroption-1",
                "fullName": "ApplicationRegistry.registerOption.registerOption",
                "hierarchy": "CallSignature registerOption:void\n  Parameter specifier:string\n  Parameter option:string\n  Parameter value:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 37,
                    "character": 16,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "specifier",
                    "slug": "specifier-4",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier-4",
                    "fullName": "ApplicationRegistry.registerOption.registerOption.specifier",
                    "hierarchy": "Parameter specifier:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "option",
                    "slug": "option",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "option",
                    "fullName": "ApplicationRegistry.registerOption.registerOption.option",
                    "hierarchy": "Parameter option:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "value",
                    "slug": "value",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "value",
                    "fullName": "ApplicationRegistry.registerOption.registerOption.value",
                    "hierarchy": "Parameter value:any",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "any"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "registeredInjections",
            "slug": "registeredinjections",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "registeredinjections",
            "fullName": "ApplicationRegistry.registeredInjections",
            "hierarchy": "Method registeredInjections\n  CallSignature registeredInjections:Injection[]\n    Parameter specifier:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 63,
                "character": 22,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "registeredInjections",
                "slug": "registeredinjections-1",
                "flags": {},
                "alias": "registeredinjections-1",
                "fullName": "ApplicationRegistry.registeredInjections.registeredInjections",
                "hierarchy": "CallSignature registeredInjections:Injection[]\n  Parameter specifier:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 63,
                    "character": 22,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": true,
                  "name": "Injection"
                },
                "parameters": [
                  {
                    "name": "specifier",
                    "slug": "specifier-5",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier-5",
                    "fullName": "ApplicationRegistry.registeredInjections.registeredInjections.specifier",
                    "hierarchy": "Parameter specifier:string",
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
            "name": "registeredOption",
            "slug": "registeredoption",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "registeredoption",
            "fullName": "ApplicationRegistry.registeredOption",
            "hierarchy": "Method registeredOption\n  CallSignature registeredOption:any\n    Parameter specifier:string\n    Parameter option:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 42,
                "character": 18,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "registeredOption",
                "slug": "registeredoption-1",
                "flags": {},
                "alias": "registeredoption-1",
                "fullName": "ApplicationRegistry.registeredOption.registeredOption",
                "hierarchy": "CallSignature registeredOption:any\n  Parameter specifier:string\n  Parameter option:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 42,
                    "character": 18,
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
                    "slug": "specifier-6",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier-6",
                    "fullName": "ApplicationRegistry.registeredOption.registeredOption.specifier",
                    "hierarchy": "Parameter specifier:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "option",
                    "slug": "option-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "option-1",
                    "fullName": "ApplicationRegistry.registeredOption.registeredOption.option",
                    "hierarchy": "Parameter option:string",
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
            "name": "registeredOptions",
            "slug": "registeredoptions",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "registeredoptions",
            "fullName": "ApplicationRegistry.registeredOptions",
            "hierarchy": "Method registeredOptions\n  CallSignature registeredOptions:any\n    Parameter specifier:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 47,
                "character": 19,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "registeredOptions",
                "slug": "registeredoptions-1",
                "flags": {},
                "alias": "registeredoptions-1",
                "fullName": "ApplicationRegistry.registeredOptions.registeredOptions",
                "hierarchy": "CallSignature registeredOptions:any\n  Parameter specifier:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 47,
                    "character": 19,
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
                    "slug": "specifier-7",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier-7",
                    "fullName": "ApplicationRegistry.registeredOptions.registeredOptions.specifier",
                    "hierarchy": "Parameter specifier:string",
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
            "name": "registration",
            "slug": "registration",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "registration",
            "fullName": "ApplicationRegistry.registration",
            "hierarchy": "Method registration\n  CallSignature registration:any\n    Parameter specifier:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 27,
                "character": 14,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "registration",
                "slug": "registration-1",
                "flags": {},
                "alias": "registration-1",
                "fullName": "ApplicationRegistry.registration.registration",
                "hierarchy": "CallSignature registration:any\n  Parameter specifier:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 27,
                    "character": 14,
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
                    "slug": "specifier-8",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier-8",
                    "fullName": "ApplicationRegistry.registration.registration.specifier",
                    "hierarchy": "Parameter specifier:string",
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
            "name": "unregister",
            "slug": "unregister",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "unregister",
            "fullName": "ApplicationRegistry.unregister",
            "hierarchy": "Method unregister\n  CallSignature unregister:void\n    Parameter specifier:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 32,
                "character": 12,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "unregister",
                "slug": "unregister-1",
                "flags": {},
                "alias": "unregister-1",
                "fullName": "ApplicationRegistry.unregister.unregister",
                "hierarchy": "CallSignature unregister:void\n  Parameter specifier:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 32,
                    "character": 12,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "specifier",
                    "slug": "specifier-9",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier-9",
                    "fullName": "ApplicationRegistry.unregister.unregister.specifier",
                    "hierarchy": "Parameter specifier:string",
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
            "name": "unregisterOption",
            "slug": "unregisteroption",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "unregisteroption",
            "fullName": "ApplicationRegistry.unregisterOption",
            "hierarchy": "Method unregisterOption\n  CallSignature unregisterOption:void\n    Parameter specifier:string\n    Parameter option:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 52,
                "character": 18,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "unregisterOption",
                "slug": "unregisteroption-1",
                "flags": {},
                "alias": "unregisteroption-1",
                "fullName": "ApplicationRegistry.unregisterOption.unregisterOption",
                "hierarchy": "CallSignature unregisterOption:void\n  Parameter specifier:string\n  Parameter option:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application-registry.ts",
                    "line": 52,
                    "character": 18,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "specifier",
                    "slug": "specifier-10",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "specifier-10",
                    "fullName": "ApplicationRegistry.unregisterOption.unregisterOption.specifier",
                    "hierarchy": "Parameter specifier:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "option",
                    "slug": "option-2",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "option-2",
                    "fullName": "ApplicationRegistry.unregisterOption.unregisterOption.option",
                    "hierarchy": "Parameter option:string",
                    "kindString": "Parameter",
                    "typeInfo": {
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
      "id": "384",
      "type": "class",
      "attributes": {
        "name": "ArrayIterator",
        "slug": "arrayiterator",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "arrayiterator",
        "fullName": "ArrayIterator",
        "hierarchy": "Class ArrayIterator\n  Constructor constructor\n    ConstructorSignature new ArrayIterator:ArrayIterator\n      Parameter array:Opaque[]\n      Parameter keyFor:KeyFor<number>\n  Property array:Opaque[]\n  Property keyFor:KeyFor<number>\n  Property position:number\n  Method isEmpty\n    CallSignature isEmpty:boolean\n  Method next\n    CallSignature next:IterationItem<Opaque, number>",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "AbstractIterator"
          }
        ],
        "sources": [
          {
            "fileName": "iterable.ts",
            "line": 19,
            "character": 19,
            "url": null
          }
        ],
        "constructors": [
          {
            "name": "constructor",
            "slug": "constructor",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "constructor",
            "fullName": "ArrayIterator.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new ArrayIterator:ArrayIterator\n    Parameter array:Opaque[]\n    Parameter keyFor:KeyFor<number>",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 22,
                "character": 23,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new ArrayIterator",
                "slug": "new_arrayiterator",
                "flags": {},
                "alias": "new_arrayiterator",
                "fullName": "ArrayIterator.constructor.new ArrayIterator",
                "hierarchy": "ConstructorSignature new ArrayIterator:ArrayIterator\n  Parameter array:Opaque[]\n  Parameter keyFor:KeyFor<number>",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 22,
                    "character": 23,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ArrayIterator",
                  "link": {
                    "id": "384",
                    "type": "class",
                    "slug": "arrayiterator",
                    "sources": [
                      {
                        "fileName": "iterable.ts",
                        "line": 19,
                        "character": 19,
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
                    "name": "array",
                    "slug": "array",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "array",
                    "fullName": "ArrayIterator.constructor.new ArrayIterator.array",
                    "hierarchy": "Parameter array:Opaque[]",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": true,
                      "name": "Opaque"
                    }
                  },
                  {
                    "name": "keyFor",
                    "slug": "keyfor",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "keyfor",
                    "fullName": "ArrayIterator.constructor.new ArrayIterator.keyFor",
                    "hierarchy": "Parameter keyFor:KeyFor<number>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "KeyFor",
                      "link": {
                        "id": "439",
                        "type": "type-alias",
                        "slug": "keyfor",
                        "sources": [
                          {
                            "fileName": "iterable.ts",
                            "line": 17,
                            "character": 18,
                            "url": null
                          },
                          {
                            "fileName": "environment.ts",
                            "line": 39,
                            "character": 11,
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
            "name": "array",
            "slug": "array-1",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "array-1",
            "fullName": "ArrayIterator.array",
            "hierarchy": "Property array:Opaque[]",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 20,
                "character": 15,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": true,
              "name": "Opaque"
            }
          },
          {
            "name": "keyFor",
            "slug": "keyfor-1",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "keyfor-1",
            "fullName": "ArrayIterator.keyFor",
            "hierarchy": "Property keyFor:KeyFor<number>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 21,
                "character": 16,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "KeyFor",
              "link": {
                "id": "439",
                "type": "type-alias",
                "slug": "keyfor",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 17,
                    "character": 18,
                    "url": null
                  },
                  {
                    "fileName": "environment.ts",
                    "line": 39,
                    "character": 11,
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
            "name": "position",
            "slug": "position",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "position",
            "fullName": "ArrayIterator.position",
            "hierarchy": "Property position:number",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 22,
                "character": 18,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "number"
            }
          }
        ],
        "methods": [
          {
            "name": "isEmpty",
            "slug": "isempty",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "isempty",
            "fullName": "ArrayIterator.isEmpty",
            "hierarchy": "Method isEmpty\n  CallSignature isEmpty:boolean",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 29,
                "character": 9,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "isEmpty",
                "slug": "isempty-1",
                "flags": {},
                "alias": "isempty-1",
                "fullName": "ArrayIterator.isEmpty.isEmpty",
                "hierarchy": "CallSignature isEmpty:boolean",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 29,
                    "character": 9,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "boolean"
                }
              }
            ]
          },
          {
            "name": "next",
            "slug": "next",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "next",
            "fullName": "ArrayIterator.next",
            "hierarchy": "Method next\n  CallSignature next:IterationItem<Opaque, number>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 33,
                "character": 6,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "next",
                "slug": "next-1",
                "flags": {},
                "alias": "next-1",
                "fullName": "ArrayIterator.next.next",
                "hierarchy": "CallSignature next:IterationItem<Opaque, number>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 33,
                    "character": 6,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "IterationItem"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "543",
      "type": "class",
      "attributes": {
        "name": "DefaultComponentDefinition",
        "slug": "defaultcomponentdefinition",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "defaultcomponentdefinition",
        "fullName": "DefaultComponentDefinition",
        "hierarchy": "Class DefaultComponentDefinition\n  Constructor constructor\n    ConstructorSignature new DefaultComponentDefinition:DefaultComponentDefinition\n      Parameter name:string\n      Parameter manager:ComponentManager<any>\n      Parameter ComponentClass:ComponentClass\n  Property ComponentClass:ComponentClass\n  Property manager:ComponentManager<any>\n  Property name:string\n  Method toJSON\n    CallSignature toJSON:string",
        "kindString": "Class",
        "extendedTypes": [
          {
            "isArray": false,
            "name": "ComponentDefinition"
          }
        ],
        "sources": [
          {
            "fileName": "environment.ts",
            "line": 46,
            "character": 32,
            "url": null
          }
        ]
      }
    },
    {
      "id": "456",
      "type": "class",
      "attributes": {
        "name": "DynamicComponentReference",
        "slug": "dynamiccomponentreference",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "dynamiccomponentreference",
        "fullName": "DynamicComponentReference",
        "hierarchy": "Class DynamicComponentReference\n  Constructor constructor\n    ConstructorSignature new DynamicComponentReference:DynamicComponentReference\n      Parameter nameRef:PathReference<Opaque>\n      Parameter env:GlimmerEnvironment\n      Parameter meta:TemplateMeta\n  Property env:GlimmerEnvironment\n  Property meta:TemplateMeta\n  Property nameRef:PathReference<Opaque>\n  Property tag:TagWrapper<RevisionTag>\n  Method get\n    CallSignature get:PrimitiveReference<undefined>\n  Method value\n    CallSignature value:ComponentDefinition<Opaque>",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedPathReference"
          }
        ],
        "sources": [
          {
            "fileName": "dynamic-component.ts",
            "line": 46,
            "character": 31,
            "url": null
          }
        ],
        "constructors": [
          {
            "name": "constructor",
            "slug": "constructor",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "constructor",
            "fullName": "DynamicComponentReference.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new DynamicComponentReference:DynamicComponentReference\n    Parameter nameRef:PathReference<Opaque>\n    Parameter env:GlimmerEnvironment\n    Parameter meta:TemplateMeta",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 47,
                "character": 38,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new DynamicComponentReference",
                "slug": "new_dynamiccomponentreference",
                "flags": {},
                "alias": "new_dynamiccomponentreference",
                "fullName": "DynamicComponentReference.constructor.new DynamicComponentReference",
                "hierarchy": "ConstructorSignature new DynamicComponentReference:DynamicComponentReference\n  Parameter nameRef:PathReference<Opaque>\n  Parameter env:GlimmerEnvironment\n  Parameter meta:TemplateMeta",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "dynamic-component.ts",
                    "line": 47,
                    "character": 38,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "DynamicComponentReference",
                  "link": {
                    "id": "456",
                    "type": "class",
                    "slug": "dynamiccomponentreference",
                    "sources": [
                      {
                        "fileName": "dynamic-component.ts",
                        "line": 46,
                        "character": 31,
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
                    "name": "nameRef",
                    "slug": "nameref",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "nameref",
                    "fullName": "DynamicComponentReference.constructor.new DynamicComponentReference.nameRef",
                    "hierarchy": "Parameter nameRef:PathReference<Opaque>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "PathReference"
                    }
                  },
                  {
                    "name": "env",
                    "slug": "env",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "env",
                    "fullName": "DynamicComponentReference.constructor.new DynamicComponentReference.env",
                    "hierarchy": "Parameter env:GlimmerEnvironment",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "GlimmerEnvironment"
                    }
                  },
                  {
                    "name": "meta",
                    "slug": "meta",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "meta",
                    "fullName": "DynamicComponentReference.constructor.new DynamicComponentReference.meta",
                    "hierarchy": "Parameter meta:TemplateMeta",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "TemplateMeta"
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
            "slug": "env-1",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "env-1",
            "fullName": "DynamicComponentReference.env",
            "hierarchy": "Property env:GlimmerEnvironment",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 49,
                "character": 65,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "GlimmerEnvironment"
            }
          },
          {
            "name": "meta",
            "slug": "meta-1",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "meta-1",
            "fullName": "DynamicComponentReference.meta",
            "hierarchy": "Property meta:TemplateMeta",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 49,
                "character": 99,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "TemplateMeta"
            }
          },
          {
            "name": "nameRef",
            "slug": "nameref-1",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "nameref-1",
            "fullName": "DynamicComponentReference.nameRef",
            "hierarchy": "Property nameRef:PathReference<Opaque>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 49,
                "character": 29,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "PathReference"
            }
          },
          {
            "name": "tag",
            "slug": "tag",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": true,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "tag",
            "fullName": "DynamicComponentReference.tag",
            "hierarchy": "Property tag:TagWrapper<RevisionTag>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 47,
                "character": 12,
                "url": null
              }
            ],
            "typeInfo": {
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
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "get",
            "fullName": "DynamicComponentReference.get",
            "hierarchy": "Method get\n  CallSignature get:PrimitiveReference<undefined>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 65,
                "character": 5,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "DynamicComponentReference.get.get",
                "hierarchy": "CallSignature get:PrimitiveReference<undefined>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "dynamic-component.ts",
                    "line": 65,
                    "character": 5,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "PrimitiveReference"
                }
              }
            ]
          },
          {
            "name": "value",
            "slug": "value",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "value",
            "fullName": "DynamicComponentReference.value",
            "hierarchy": "Method value\n  CallSignature value:ComponentDefinition<Opaque>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 53,
                "character": 7,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-1",
                "flags": {},
                "alias": "value-1",
                "fullName": "DynamicComponentReference.value.value",
                "hierarchy": "CallSignature value:ComponentDefinition<Opaque>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "dynamic-component.ts",
                    "line": 53,
                    "character": 7,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ComponentDefinition"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "370",
      "type": "class",
      "attributes": {
        "name": "DynamicScope",
        "slug": "dynamicscope",
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
        "alias": "dynamicscope",
        "fullName": "DynamicScope",
        "hierarchy": "Class DynamicScope\n  Constructor constructor\n    ConstructorSignature new DynamicScope:DynamicScope\n      Parameter bucket:any\n  Property bucket:any\n  Method child\n    CallSignature child:DynamicScope\n  Method get\n    CallSignature get:PathReference<Opaque>\n      Parameter key:string\n  Method set\n    CallSignature set:VersionedPathReference<void | __type>\n      Parameter key:string\n      Parameter reference:PathReference<Opaque>",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "DynamicScope"
          }
        ],
        "sources": [
          {
            "fileName": "dynamic-scope.ts",
            "line": 12,
            "character": 33,
            "url": null
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
            "fullName": "DynamicScope.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new DynamicScope:DynamicScope\n    Parameter bucket:any",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "dynamic-scope.ts",
                "line": 13,
                "character": 17,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new DynamicScope",
                "slug": "new_dynamicscope",
                "flags": {},
                "alias": "new_dynamicscope",
                "fullName": "DynamicScope.constructor.new DynamicScope",
                "hierarchy": "ConstructorSignature new DynamicScope:DynamicScope\n  Parameter bucket:any",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "dynamic-scope.ts",
                    "line": 13,
                    "character": 17,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "DynamicScope",
                  "link": {
                    "id": "370",
                    "type": "class",
                    "slug": "dynamicscope",
                    "sources": [
                      {
                        "fileName": "dynamic-scope.ts",
                        "line": 12,
                        "character": 33,
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
                    "name": "bucket",
                    "slug": "bucket",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket",
                    "fullName": "DynamicScope.constructor.new DynamicScope.bucket",
                    "hierarchy": "Parameter bucket:any",
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
        ],
        "properties": [
          {
            "name": "bucket",
            "slug": "bucket-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "bucket-1",
            "fullName": "DynamicScope.bucket",
            "hierarchy": "Property bucket:any",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "dynamic-scope.ts",
                "line": 13,
                "character": 16,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "any"
            }
          }
        ],
        "methods": [
          {
            "name": "child",
            "slug": "child",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "child",
            "fullName": "DynamicScope.child",
            "hierarchy": "Method child\n  CallSignature child:DynamicScope",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "dynamic-scope.ts",
                "line": 31,
                "character": 7,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "child",
                "slug": "child-1",
                "flags": {},
                "alias": "child-1",
                "fullName": "DynamicScope.child.child",
                "hierarchy": "CallSignature child:DynamicScope",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "dynamic-scope.ts",
                    "line": 31,
                    "character": 7,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "DynamicScope",
                  "link": {
                    "id": "370",
                    "type": "class",
                    "slug": "dynamicscope",
                    "sources": [
                      {
                        "fileName": "dynamic-scope.ts",
                        "line": 12,
                        "character": 33,
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
            "fullName": "DynamicScope.get",
            "hierarchy": "Method get\n  CallSignature get:PathReference<Opaque>\n    Parameter key:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "dynamic-scope.ts",
                "line": 23,
                "character": 5,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "DynamicScope.get.get",
                "hierarchy": "CallSignature get:PathReference<Opaque>\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "dynamic-scope.ts",
                    "line": 23,
                    "character": 5,
                    "url": null
                  }
                ],
                "typeInfo": {
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
                    "fullName": "DynamicScope.get.get.key",
                    "hierarchy": "Parameter key:string",
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
            "name": "set",
            "slug": "set",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "set",
            "fullName": "DynamicScope.set",
            "hierarchy": "Method set\n  CallSignature set:VersionedPathReference<void | __type>\n    Parameter key:string\n    Parameter reference:PathReference<Opaque>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "dynamic-scope.ts",
                "line": 27,
                "character": 5,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "set",
                "slug": "set-1",
                "flags": {},
                "alias": "set-1",
                "fullName": "DynamicScope.set.set",
                "hierarchy": "CallSignature set:VersionedPathReference<void | __type>\n  Parameter key:string\n  Parameter reference:PathReference<Opaque>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "dynamic-scope.ts",
                    "line": 27,
                    "character": 5,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "VersionedPathReference"
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
                    "fullName": "DynamicScope.set.set.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "reference",
                    "slug": "reference",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "reference",
                    "fullName": "DynamicScope.set.set.reference",
                    "hierarchy": "Parameter reference:PathReference<Opaque>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "PathReference"
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
      "id": "410",
      "type": "class",
      "attributes": {
        "name": "EmptyIterator",
        "slug": "emptyiterator",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "emptyiterator",
        "fullName": "EmptyIterator",
        "hierarchy": "Class EmptyIterator\n  Method isEmpty\n    CallSignature isEmpty:boolean\n  Method next\n    CallSignature next:IterationItem<Opaque, Opaque>",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "AbstractIterator"
          }
        ],
        "sources": [
          {
            "fileName": "iterable.ts",
            "line": 79,
            "character": 19,
            "url": null
          }
        ],
        "methods": [
          {
            "name": "isEmpty",
            "slug": "isempty",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "isempty",
            "fullName": "EmptyIterator.isEmpty",
            "hierarchy": "Method isEmpty\n  CallSignature isEmpty:boolean",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 80,
                "character": 9,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "isEmpty",
                "slug": "isempty-1",
                "flags": {},
                "alias": "isempty-1",
                "fullName": "EmptyIterator.isEmpty.isEmpty",
                "hierarchy": "CallSignature isEmpty:boolean",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 80,
                    "character": 9,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "boolean"
                }
              }
            ]
          },
          {
            "name": "next",
            "slug": "next",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "next",
            "fullName": "EmptyIterator.next",
            "hierarchy": "Method next\n  CallSignature next:IterationItem<Opaque, Opaque>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 84,
                "character": 6,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "next",
                "slug": "next-1",
                "flags": {},
                "alias": "next-1",
                "fullName": "EmptyIterator.next.next",
                "hierarchy": "CallSignature next:IterationItem<Opaque, Opaque>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 84,
                    "character": 6,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "IterationItem"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "554",
      "type": "class",
      "attributes": {
        "name": "Environment",
        "slug": "environment",
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
        "alias": "environment",
        "fullName": "Environment",
        "hierarchy": "Class Environment\n  Constructor constructor\n    ConstructorSignature new Environment:Environment\n      Parameter options:EnvironmentOptions\n  Property appendOperations:DOMTreeConstruction\n  Property components:Dict<ComponentDefinition<void | __type>>\n  Property constants:Constants\n  Property helpers:Dict<Helper>\n  Property managers:Dict<ComponentManager<void | __type>>\n  Property modifiers:Dict<ModifierManager<void | __type>>\n  Property program:Program\n  Property updateOperations:DOMChanges\n  Property uselessAnchor:HTMLAnchorElement\n  Method attributeFor\n    CallSignature attributeFor:AttributeManager\n      Parameter element:Element\n      Parameter attr:string\n      Parameter isTrusting:boolean\n      Parameter namespace:string\n  Method begin\n    CallSignature begin:void\n  Method commit\n    CallSignature commit:void\n  Method didCreate\n    CallSignature didCreate<T>:void\n      TypeParameter T\n      Parameter component:T\n      Parameter manager:ComponentManager<T>\n  Method didDestroy\n    CallSignature didDestroy:void\n      Parameter d:Destroyable\n  Method didUpdate\n    CallSignature didUpdate<T>:void\n      TypeParameter T\n      Parameter component:T\n      Parameter manager:ComponentManager<T>\n  Method getAppendOperations\n    CallSignature getAppendOperations:DOMTreeConstruction\n  Method getComponentDefinition\n    CallSignature getComponentDefinition:ComponentDefinition<Component>\n      Parameter name:string\n      Parameter meta:TemplateMeta\n  Method getDOM\n    CallSignature getDOM:DOMChanges\n  Method getIdentity\n    CallSignature getIdentity:string\n      Parameter object:HasGuid\n  Method hasComponentDefinition\n    CallSignature hasComponentDefinition:boolean\n      Parameter name:string\n      Parameter meta:TemplateMeta\n  Method hasHelper\n    CallSignature hasHelper:boolean\n      Parameter name:string\n      Parameter meta:TemplateMeta\n  Method hasModifier\n    CallSignature hasModifier:boolean\n      Parameter modifierName:string\n      Parameter blockMeta:TemplateMeta\n  Method hasPartial\n    CallSignature hasPartial:boolean\n  Method iterableFor\n    CallSignature iterableFor:OpaqueIterable\n      Parameter ref:Reference<Opaque>\n      Parameter keyPath:string\n  Method lookupHelper\n    CallSignature lookupHelper:GlimmerHelper\n      Parameter name:string\n      Parameter meta:TemplateMeta\n  Method lookupModifier\n    CallSignature lookupModifier:ModifierManager<Opaque>\n      Parameter modifierName:string\n      Parameter blockMeta:TemplateMeta\n  Method lookupPartial\n    CallSignature lookupPartial:any\n  Method macros\n    CallSignature macros:object\n      TypeLiteral __type\n        Variable blocks:BlockMacros\n        Variable inlines:InlineMacros\n  Method managerFor\n    CallSignature managerFor:ComponentManager<Component>\n      Parameter managerId:string\n  Method populateBuiltins\n    CallSignature populateBuiltins:object\n      TypeLiteral __type\n        Variable blocks:Blocks\n        Variable inlines:Inlines\n  Method protocolForURL\n    CallSignature protocolForURL:string\n      Parameter url:string\n  Method registerComponent\n    CallSignature registerComponent:ComponentDefinition<Component>\n      Parameter name:string\n      Parameter templateSpecifier:string\n      Parameter meta:TemplateMeta\n      Parameter owner:Owner\n  Method registerHelper\n    CallSignature registerHelper:GlimmerHelper\n      Parameter specifier:string\n      Parameter owner:Owner\n  Method scheduleInstallModifier\n    CallSignature scheduleInstallModifier<T>:void\n      TypeParameter T\n      Parameter modifier:T\n      Parameter manager:ModifierManager<T>\n  Method scheduleUpdateModifier\n    CallSignature scheduleUpdateModifier<T>:void\n      TypeParameter T\n      Parameter modifier:T\n      Parameter manager:ModifierManager<T>\n  Method toConditionalReference\n    CallSignature toConditionalReference:Reference<boolean>\n      Parameter reference:Reference<Opaque>\n  Method create\n    CallSignature create:Environment\n      Parameter options:EnvironmentOptions",
        "kindString": "Class",
        "extendedTypes": [
          {
            "isArray": false,
            "name": "Environment"
          }
        ],
        "sources": [
          {
            "fileName": "environment.ts",
            "line": 57,
            "character": 32,
            "url": null
          }
        ]
      }
    },
    {
      "id": "519",
      "type": "class",
      "attributes": {
        "name": "HelperReference",
        "slug": "helperreference",
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
        "alias": "helperreference",
        "fullName": "HelperReference",
        "hierarchy": "Class HelperReference\n  Constructor constructor\n    ConstructorSignature new HelperReference:HelperReference\n      Parameter helper:UserHelper\n      Parameter args:Arguments\n  Property args:CapturedArguments\n  Property helper:UserHelper\n  Property tag:TagWrapper<any>\n  Method get\n    CallSignature get:SimplePathReference<Opaque>\n      Parameter prop:string\n  Method value\n    CallSignature value:any",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedPathReference"
          }
        ],
        "sources": [
          {
            "fileName": "helpers/user-helper.ts",
            "line": 44,
            "character": 28,
            "url": null
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
            "fullName": "HelperReference.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new HelperReference:HelperReference\n    Parameter helper:UserHelper\n    Parameter args:Arguments",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 47,
                "character": 28,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new HelperReference",
                "slug": "new_helperreference",
                "flags": {},
                "alias": "new_helperreference",
                "fullName": "HelperReference.constructor.new HelperReference",
                "hierarchy": "ConstructorSignature new HelperReference:HelperReference\n  Parameter helper:UserHelper\n  Parameter args:Arguments",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "helpers/user-helper.ts",
                    "line": 47,
                    "character": 28,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "HelperReference",
                  "link": {
                    "id": "519",
                    "type": "class",
                    "slug": "helperreference",
                    "sources": [
                      {
                        "fileName": "helpers/user-helper.ts",
                        "line": 44,
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
                },
                "parameters": [
                  {
                    "name": "helper",
                    "slug": "helper",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "helper",
                    "fullName": "HelperReference.constructor.new HelperReference.helper",
                    "hierarchy": "Parameter helper:UserHelper",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "UserHelper",
                      "link": {
                        "id": "532",
                        "type": "type-alias",
                        "slug": "userhelper",
                        "sources": [
                          {
                            "fileName": "helpers/user-helper.ts",
                            "line": 19,
                            "character": 22,
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
                    "name": "args",
                    "slug": "args",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "args",
                    "fullName": "HelperReference.constructor.new HelperReference.args",
                    "hierarchy": "Parameter args:Arguments",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "Arguments"
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
            "fullName": "HelperReference.args",
            "hierarchy": "Property args:CapturedArguments",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 46,
                "character": 14,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "CapturedArguments"
            }
          },
          {
            "name": "helper",
            "slug": "helper-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "helper-1",
            "fullName": "HelperReference.helper",
            "hierarchy": "Property helper:UserHelper",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 45,
                "character": 16,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "UserHelper",
              "link": {
                "id": "532",
                "type": "type-alias",
                "slug": "userhelper",
                "sources": [
                  {
                    "fileName": "helpers/user-helper.ts",
                    "line": 19,
                    "character": 22,
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
            "fullName": "HelperReference.tag",
            "hierarchy": "Property tag:TagWrapper<any>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 47,
                "character": 12,
                "url": null
              }
            ],
            "typeInfo": {
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
            "fullName": "HelperReference.get",
            "hierarchy": "Method get\n  CallSignature get:SimplePathReference<Opaque>\n    Parameter prop:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 60,
                "character": 5,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "HelperReference.get.get",
                "hierarchy": "CallSignature get:SimplePathReference<Opaque>\n  Parameter prop:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "helpers/user-helper.ts",
                    "line": 60,
                    "character": 5,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "SimplePathReference",
                  "link": {
                    "id": "505",
                    "type": "class",
                    "slug": "simplepathreference",
                    "sources": [
                      {
                        "fileName": "helpers/user-helper.ts",
                        "line": 25,
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
                    "name": "prop",
                    "slug": "prop",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "prop",
                    "fullName": "HelperReference.get.get.prop",
                    "hierarchy": "Parameter prop:string",
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
            "fullName": "HelperReference.value",
            "hierarchy": "Method value\n  CallSignature value:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 54,
                "character": 7,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-1",
                "flags": {},
                "alias": "value-1",
                "fullName": "HelperReference.value.value",
                "hierarchy": "CallSignature value:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "helpers/user-helper.ts",
                    "line": 54,
                    "character": 7,
                    "url": null
                  }
                ],
                "typeInfo": {
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
      "id": "415",
      "type": "class",
      "attributes": {
        "name": "Iterable",
        "slug": "iterable",
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
        "alias": "iterable",
        "fullName": "Iterable",
        "hierarchy": "Class Iterable\n  Constructor constructor\n    ConstructorSignature new Iterable:Iterable\n      Parameter ref:Reference<Opaque>\n      Parameter keyFor:KeyFor<Opaque>\n  Property keyFor:KeyFor<Opaque>\n  Property ref:Reference<Opaque>\n  Property tag:Tag\n  Method iterate\n    CallSignature iterate:OpaqueIterator\n  Method memoReferenceFor\n    CallSignature memoReferenceFor:UpdatableReference<Opaque>\n      Parameter item:IterationItem<Opaque, Opaque>\n  Method updateMemoReference\n    CallSignature updateMemoReference:void\n      Parameter reference:UpdatableReference<Opaque>\n      Parameter item:IterationItem<Opaque, Opaque>\n  Method updateValueReference\n    CallSignature updateValueReference:void\n      Parameter reference:UpdatableReference<Opaque>\n      Parameter item:IterationItem<Opaque, Opaque>\n  Method valueReferenceFor\n    CallSignature valueReferenceFor:UpdatableReference<Opaque>\n      Parameter item:IterationItem<Opaque, Opaque>",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "AbstractIterable"
          }
        ],
        "sources": [
          {
            "fileName": "iterable.ts",
            "line": 91,
            "character": 29,
            "url": null
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
            "fullName": "Iterable.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new Iterable:Iterable\n    Parameter ref:Reference<Opaque>\n    Parameter keyFor:KeyFor<Opaque>",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 94,
                "character": 33,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new Iterable",
                "slug": "new_iterable",
                "flags": {},
                "alias": "new_iterable",
                "fullName": "Iterable.constructor.new Iterable",
                "hierarchy": "ConstructorSignature new Iterable:Iterable\n  Parameter ref:Reference<Opaque>\n  Parameter keyFor:KeyFor<Opaque>",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 94,
                    "character": 33,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Iterable",
                  "link": {
                    "id": "415",
                    "type": "class",
                    "slug": "iterable",
                    "sources": [
                      {
                        "fileName": "iterable.ts",
                        "line": 91,
                        "character": 29,
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
                    "name": "ref",
                    "slug": "ref",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "ref",
                    "fullName": "Iterable.constructor.new Iterable.ref",
                    "hierarchy": "Parameter ref:Reference<Opaque>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "Reference"
                    }
                  },
                  {
                    "name": "keyFor",
                    "slug": "keyfor",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "keyfor",
                    "fullName": "Iterable.constructor.new Iterable.keyFor",
                    "hierarchy": "Parameter keyFor:KeyFor<Opaque>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "KeyFor",
                      "link": {
                        "id": "439",
                        "type": "type-alias",
                        "slug": "keyfor",
                        "sources": [
                          {
                            "fileName": "iterable.ts",
                            "line": 17,
                            "character": 18,
                            "url": null
                          },
                          {
                            "fileName": "environment.ts",
                            "line": 39,
                            "character": 11,
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
            "name": "keyFor",
            "slug": "keyfor-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "keyfor-1",
            "fullName": "Iterable.keyFor",
            "hierarchy": "Property keyFor:KeyFor<Opaque>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 94,
                "character": 16,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "KeyFor",
              "link": {
                "id": "439",
                "type": "type-alias",
                "slug": "keyfor",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 17,
                    "character": 18,
                    "url": null
                  },
                  {
                    "fileName": "environment.ts",
                    "line": 39,
                    "character": 11,
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
            "name": "ref",
            "slug": "ref-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "ref-1",
            "fullName": "Iterable.ref",
            "hierarchy": "Property ref:Reference<Opaque>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 93,
                "character": 13,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Reference"
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
            "fullName": "Iterable.tag",
            "hierarchy": "Property tag:Tag",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 92,
                "character": 12,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Tag"
            }
          }
        ],
        "methods": [
          {
            "name": "iterate",
            "slug": "iterate",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "iterate",
            "fullName": "Iterable.iterate",
            "hierarchy": "Method iterate\n  CallSignature iterate:OpaqueIterator",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 102,
                "character": 9,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "iterate",
                "slug": "iterate-1",
                "flags": {},
                "alias": "iterate-1",
                "fullName": "Iterable.iterate.iterate",
                "hierarchy": "CallSignature iterate:OpaqueIterator",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 102,
                    "character": 9,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "OpaqueIterator"
                }
              }
            ]
          },
          {
            "name": "memoReferenceFor",
            "slug": "memoreferencefor",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "memoreferencefor",
            "fullName": "Iterable.memoReferenceFor",
            "hierarchy": "Method memoReferenceFor\n  CallSignature memoReferenceFor:UpdatableReference<Opaque>\n    Parameter item:IterationItem<Opaque, Opaque>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 133,
                "character": 18,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "memoReferenceFor",
                "slug": "memoreferencefor-1",
                "flags": {},
                "alias": "memoreferencefor-1",
                "fullName": "Iterable.memoReferenceFor.memoReferenceFor",
                "hierarchy": "CallSignature memoReferenceFor:UpdatableReference<Opaque>\n  Parameter item:IterationItem<Opaque, Opaque>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 133,
                    "character": 18,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "UpdatableReference"
                },
                "parameters": [
                  {
                    "name": "item",
                    "slug": "item",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "item",
                    "fullName": "Iterable.memoReferenceFor.memoReferenceFor.item",
                    "hierarchy": "Parameter item:IterationItem<Opaque, Opaque>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "IterationItem"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "updateMemoReference",
            "slug": "updatememoreference",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "updatememoreference",
            "fullName": "Iterable.updateMemoReference",
            "hierarchy": "Method updateMemoReference\n  CallSignature updateMemoReference:void\n    Parameter reference:UpdatableReference<Opaque>\n    Parameter item:IterationItem<Opaque, Opaque>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 137,
                "character": 21,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "updateMemoReference",
                "slug": "updatememoreference-1",
                "flags": {},
                "alias": "updatememoreference-1",
                "fullName": "Iterable.updateMemoReference.updateMemoReference",
                "hierarchy": "CallSignature updateMemoReference:void\n  Parameter reference:UpdatableReference<Opaque>\n  Parameter item:IterationItem<Opaque, Opaque>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 137,
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
                    "name": "reference",
                    "slug": "reference",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "reference",
                    "fullName": "Iterable.updateMemoReference.updateMemoReference.reference",
                    "hierarchy": "Parameter reference:UpdatableReference<Opaque>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "UpdatableReference"
                    }
                  },
                  {
                    "name": "item",
                    "slug": "item-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "item-1",
                    "fullName": "Iterable.updateMemoReference.updateMemoReference.item",
                    "hierarchy": "Parameter item:IterationItem<Opaque, Opaque>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "IterationItem"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "updateValueReference",
            "slug": "updatevaluereference",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "updatevaluereference",
            "fullName": "Iterable.updateValueReference",
            "hierarchy": "Method updateValueReference\n  CallSignature updateValueReference:void\n    Parameter reference:UpdatableReference<Opaque>\n    Parameter item:IterationItem<Opaque, Opaque>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 129,
                "character": 22,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "updateValueReference",
                "slug": "updatevaluereference-1",
                "flags": {},
                "alias": "updatevaluereference-1",
                "fullName": "Iterable.updateValueReference.updateValueReference",
                "hierarchy": "CallSignature updateValueReference:void\n  Parameter reference:UpdatableReference<Opaque>\n  Parameter item:IterationItem<Opaque, Opaque>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 129,
                    "character": 22,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "reference",
                    "slug": "reference-1",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "reference-1",
                    "fullName": "Iterable.updateValueReference.updateValueReference.reference",
                    "hierarchy": "Parameter reference:UpdatableReference<Opaque>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "UpdatableReference"
                    }
                  },
                  {
                    "name": "item",
                    "slug": "item-2",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "item-2",
                    "fullName": "Iterable.updateValueReference.updateValueReference.item",
                    "hierarchy": "Parameter item:IterationItem<Opaque, Opaque>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "IterationItem"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "valueReferenceFor",
            "slug": "valuereferencefor",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "valuereferencefor",
            "fullName": "Iterable.valueReferenceFor",
            "hierarchy": "Method valueReferenceFor\n  CallSignature valueReferenceFor:UpdatableReference<Opaque>\n    Parameter item:IterationItem<Opaque, Opaque>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 125,
                "character": 19,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "valueReferenceFor",
                "slug": "valuereferencefor-1",
                "flags": {},
                "alias": "valuereferencefor-1",
                "fullName": "Iterable.valueReferenceFor.valueReferenceFor",
                "hierarchy": "CallSignature valueReferenceFor:UpdatableReference<Opaque>\n  Parameter item:IterationItem<Opaque, Opaque>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 125,
                    "character": 19,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "UpdatableReference"
                },
                "parameters": [
                  {
                    "name": "item",
                    "slug": "item-3",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "item-3",
                    "fullName": "Iterable.valueReferenceFor.valueReferenceFor.item",
                    "hierarchy": "Parameter item:IterationItem<Opaque, Opaque>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "IterationItem"
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
      "id": "396",
      "type": "class",
      "attributes": {
        "name": "ObjectKeysIterator",
        "slug": "objectkeysiterator",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "objectkeysiterator",
        "fullName": "ObjectKeysIterator",
        "hierarchy": "Class ObjectKeysIterator\n  Constructor constructor\n    ConstructorSignature new ObjectKeysIterator:ObjectKeysIterator\n      Parameter keys:string[]\n      Parameter values:Opaque[]\n      Parameter keyFor:KeyFor<string>\n  Property keyFor:KeyFor<string>\n  Property keys:string[]\n  Property position:number\n  Property values:Opaque[]\n  Method isEmpty\n    CallSignature isEmpty:boolean\n  Method next\n    CallSignature next:IterationItem<Opaque, string>",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "AbstractIterator"
          }
        ],
        "sources": [
          {
            "fileName": "iterable.ts",
            "line": 48,
            "character": 24,
            "url": null
          }
        ],
        "constructors": [
          {
            "name": "constructor",
            "slug": "constructor",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "constructor",
            "fullName": "ObjectKeysIterator.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new ObjectKeysIterator:ObjectKeysIterator\n    Parameter keys:string[]\n    Parameter values:Opaque[]\n    Parameter keyFor:KeyFor<string>",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 52,
                "character": 23,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new ObjectKeysIterator",
                "slug": "new_objectkeysiterator",
                "flags": {},
                "alias": "new_objectkeysiterator",
                "fullName": "ObjectKeysIterator.constructor.new ObjectKeysIterator",
                "hierarchy": "ConstructorSignature new ObjectKeysIterator:ObjectKeysIterator\n  Parameter keys:string[]\n  Parameter values:Opaque[]\n  Parameter keyFor:KeyFor<string>",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 52,
                    "character": 23,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ObjectKeysIterator",
                  "link": {
                    "id": "396",
                    "type": "class",
                    "slug": "objectkeysiterator",
                    "sources": [
                      {
                        "fileName": "iterable.ts",
                        "line": 48,
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
                },
                "parameters": [
                  {
                    "name": "keys",
                    "slug": "keys",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "keys",
                    "fullName": "ObjectKeysIterator.constructor.new ObjectKeysIterator.keys",
                    "hierarchy": "Parameter keys:string[]",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": true,
                      "name": "string"
                    }
                  },
                  {
                    "name": "values",
                    "slug": "values",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "values",
                    "fullName": "ObjectKeysIterator.constructor.new ObjectKeysIterator.values",
                    "hierarchy": "Parameter values:Opaque[]",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": true,
                      "name": "Opaque"
                    }
                  },
                  {
                    "name": "keyFor",
                    "slug": "keyfor",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "keyfor",
                    "fullName": "ObjectKeysIterator.constructor.new ObjectKeysIterator.keyFor",
                    "hierarchy": "Parameter keyFor:KeyFor<string>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "KeyFor",
                      "link": {
                        "id": "439",
                        "type": "type-alias",
                        "slug": "keyfor",
                        "sources": [
                          {
                            "fileName": "iterable.ts",
                            "line": 17,
                            "character": 18,
                            "url": null
                          },
                          {
                            "fileName": "environment.ts",
                            "line": 39,
                            "character": 11,
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
            "name": "keyFor",
            "slug": "keyfor-1",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "keyfor-1",
            "fullName": "ObjectKeysIterator.keyFor",
            "hierarchy": "Property keyFor:KeyFor<string>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 51,
                "character": 16,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "KeyFor",
              "link": {
                "id": "439",
                "type": "type-alias",
                "slug": "keyfor",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 17,
                    "character": 18,
                    "url": null
                  },
                  {
                    "fileName": "environment.ts",
                    "line": 39,
                    "character": 11,
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
            "name": "keys",
            "slug": "keys-1",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "keys-1",
            "fullName": "ObjectKeysIterator.keys",
            "hierarchy": "Property keys:string[]",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 49,
                "character": 14,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": true,
              "name": "string"
            }
          },
          {
            "name": "position",
            "slug": "position",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "position",
            "fullName": "ObjectKeysIterator.position",
            "hierarchy": "Property position:number",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 52,
                "character": 18,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "number"
            }
          },
          {
            "name": "values",
            "slug": "values-1",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "values-1",
            "fullName": "ObjectKeysIterator.values",
            "hierarchy": "Property values:Opaque[]",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 50,
                "character": 16,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": true,
              "name": "Opaque"
            }
          }
        ],
        "methods": [
          {
            "name": "isEmpty",
            "slug": "isempty",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "isempty",
            "fullName": "ObjectKeysIterator.isEmpty",
            "hierarchy": "Method isEmpty\n  CallSignature isEmpty:boolean",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 60,
                "character": 9,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "isEmpty",
                "slug": "isempty-1",
                "flags": {},
                "alias": "isempty-1",
                "fullName": "ObjectKeysIterator.isEmpty.isEmpty",
                "hierarchy": "CallSignature isEmpty:boolean",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 60,
                    "character": 9,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "boolean"
                }
              }
            ]
          },
          {
            "name": "next",
            "slug": "next",
            "flags": {
              "isExported": false,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "next",
            "fullName": "ObjectKeysIterator.next",
            "hierarchy": "Method next\n  CallSignature next:IterationItem<Opaque, string>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "iterable.ts",
                "line": 64,
                "character": 6,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "next",
                "slug": "next-1",
                "flags": {},
                "alias": "next-1",
                "fullName": "ObjectKeysIterator.next.next",
                "hierarchy": "CallSignature next:IterationItem<Opaque, string>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "iterable.ts",
                    "line": 64,
                    "character": 6,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "IterationItem"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "505",
      "type": "class",
      "attributes": {
        "name": "SimplePathReference",
        "slug": "simplepathreference",
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
        "alias": "simplepathreference",
        "fullName": "SimplePathReference",
        "hierarchy": "Class SimplePathReference<T>\n  TypeParameter T\n  Constructor constructor\n    ConstructorSignature new SimplePathReference:SimplePathReference\n      Parameter parent:Reference<T>\n      Parameter property:string\n  Property parent:Reference<T>\n  Property property:string\n  Property tag:TagWrapper<any>\n  Method get\n    CallSignature get:PathReference<Opaque>\n      Parameter prop:string\n  Method value\n    CallSignature value:T",
        "kindString": "Class",
        "implementedTypes": [
          {
            "isArray": false,
            "name": "VersionedPathReference"
          }
        ],
        "sources": [
          {
            "fileName": "helpers/user-helper.ts",
            "line": 25,
            "character": 32,
            "url": null
          }
        ],
        "typeParameters": [
          {
            "name": "T",
            "slug": "t",
            "flags": {},
            "alias": "t",
            "fullName": "SimplePathReference.T",
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
            "fullName": "SimplePathReference.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new SimplePathReference:SimplePathReference\n    Parameter parent:Reference<T>\n    Parameter property:string",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 28,
                "character": 28,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new SimplePathReference",
                "slug": "new_simplepathreference",
                "flags": {},
                "alias": "new_simplepathreference",
                "fullName": "SimplePathReference.constructor.new SimplePathReference",
                "hierarchy": "ConstructorSignature new SimplePathReference:SimplePathReference\n  Parameter parent:Reference<T>\n  Parameter property:string",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "helpers/user-helper.ts",
                    "line": 28,
                    "character": 28,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "SimplePathReference",
                  "link": {
                    "id": "505",
                    "type": "class",
                    "slug": "simplepathreference",
                    "sources": [
                      {
                        "fileName": "helpers/user-helper.ts",
                        "line": 25,
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
                    "name": "parent",
                    "slug": "parent",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "parent",
                    "fullName": "SimplePathReference.constructor.new SimplePathReference.parent",
                    "hierarchy": "Parameter parent:Reference<T>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "Reference"
                    }
                  },
                  {
                    "name": "property",
                    "slug": "property",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "property",
                    "fullName": "SimplePathReference.constructor.new SimplePathReference.property",
                    "hierarchy": "Parameter property:string",
                    "kindString": "Parameter",
                    "typeInfo": {
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
            "name": "parent",
            "slug": "parent-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "parent-1",
            "fullName": "SimplePathReference.parent",
            "hierarchy": "Property parent:Reference<T>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 26,
                "character": 16,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Reference"
            }
          },
          {
            "name": "property",
            "slug": "property-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "property-1",
            "fullName": "SimplePathReference.property",
            "hierarchy": "Property property:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 27,
                "character": 18,
                "url": null
              }
            ],
            "typeInfo": {
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
            "fullName": "SimplePathReference.tag",
            "hierarchy": "Property tag:TagWrapper<any>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 28,
                "character": 12,
                "url": null
              }
            ],
            "typeInfo": {
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
            "fullName": "SimplePathReference.get",
            "hierarchy": "Method get\n  CallSignature get:PathReference<Opaque>\n    Parameter prop:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 39,
                "character": 5,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "SimplePathReference.get.get",
                "hierarchy": "CallSignature get:PathReference<Opaque>\n  Parameter prop:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "helpers/user-helper.ts",
                    "line": 39,
                    "character": 5,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "PathReference"
                },
                "parameters": [
                  {
                    "name": "prop",
                    "slug": "prop",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "prop",
                    "fullName": "SimplePathReference.get.get.prop",
                    "hierarchy": "Parameter prop:string",
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
            "fullName": "SimplePathReference.value",
            "hierarchy": "Method value\n  CallSignature value:T",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 35,
                "character": 7,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-1",
                "flags": {},
                "alias": "value-1",
                "fullName": "SimplePathReference.value.value",
                "hierarchy": "CallSignature value:T",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "helpers/user-helper.ts",
                    "line": 35,
                    "character": 7,
                    "url": null
                  }
                ],
                "typeInfo": {
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
      "id": "693",
      "type": "interface",
      "attributes": {
        "name": "AppRoot",
        "slug": "approot",
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
        "alias": "approot",
        "fullName": "AppRoot",
        "hierarchy": "Interface AppRoot\n  Property component:string | ComponentDefinition<Component>\n  Property id:number\n  Property nextSibling:Option<Node>\n  Property parent:Node",
        "kindString": "Interface",
        "sources": [
          {
            "fileName": "application.ts",
            "line": 38,
            "character": 24,
            "url": null
          }
        ],
        "properties": [
          {
            "name": "component",
            "slug": "component",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "component",
            "fullName": "AppRoot.component",
            "hierarchy": "Property component:string | ComponentDefinition<Component>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 40,
                "character": 11,
                "url": null
              }
            ],
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
            "name": "id",
            "slug": "id",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "id",
            "fullName": "AppRoot.id",
            "hierarchy": "Property id:number",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 39,
                "character": 4,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "number"
            }
          },
          {
            "name": "nextSibling",
            "slug": "nextsibling",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "nextsibling",
            "fullName": "AppRoot.nextSibling",
            "hierarchy": "Property nextSibling:Option<Node>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 42,
                "character": 13,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Option"
            }
          },
          {
            "name": "parent",
            "slug": "parent",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "parent",
            "fullName": "AppRoot.parent",
            "hierarchy": "Property parent:Node",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 41,
                "character": 8,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Node"
            }
          }
        ]
      }
    },
    {
      "id": "685",
      "type": "interface",
      "attributes": {
        "name": "ApplicationOptions",
        "slug": "applicationoptions",
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
        "alias": "applicationoptions",
        "fullName": "ApplicationOptions",
        "hierarchy": "Interface ApplicationOptions\n  Property resolver:Resolver\n  Property rootName:string",
        "kindString": "Interface",
        "sources": [
          {
            "fileName": "application.ts",
            "line": 28,
            "character": 35,
            "url": null
          }
        ],
        "properties": [
          {
            "name": "resolver",
            "slug": "resolver",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "resolver",
            "fullName": "ApplicationOptions.resolver",
            "hierarchy": "Property resolver:Resolver",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 30,
                "character": 10,
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
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "rootname",
            "fullName": "ApplicationOptions.rootName",
            "hierarchy": "Property rootName:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 29,
                "character": 10,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "string"
            }
          }
        ]
      }
    },
    {
      "id": "450",
      "type": "interface",
      "attributes": {
        "name": "ComponentDefinitionCreator",
        "slug": "componentdefinitioncreator",
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
        "alias": "componentdefinitioncreator",
        "fullName": "ComponentDefinitionCreator",
        "hierarchy": "Interface ComponentDefinitionCreator\n  Method createComponentDefinition\n    CallSignature createComponentDefinition:ComponentDefinition<Component>\n      Parameter name:string\n      Parameter template:Template<TemplateMeta>\n      Parameter componentFactory:Factory<Component>",
        "kindString": "Interface",
        "sources": [
          {
            "fileName": "component-definition-creator.ts",
            "line": 5,
            "character": 36,
            "url": null
          }
        ],
        "methods": [
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
            "fullName": "ComponentDefinitionCreator.createComponentDefinition",
            "hierarchy": "Method createComponentDefinition\n  CallSignature createComponentDefinition:ComponentDefinition<Component>\n    Parameter name:string\n    Parameter template:Template<TemplateMeta>\n    Parameter componentFactory:Factory<Component>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-definition-creator.ts",
                "line": 6,
                "character": 27,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "createComponentDefinition",
                "slug": "createcomponentdefinition-1",
                "flags": {},
                "alias": "createcomponentdefinition-1",
                "fullName": "ComponentDefinitionCreator.createComponentDefinition.createComponentDefinition",
                "hierarchy": "CallSignature createComponentDefinition:ComponentDefinition<Component>\n  Parameter name:string\n  Parameter template:Template<TemplateMeta>\n  Parameter componentFactory:Factory<Component>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-definition-creator.ts",
                    "line": 6,
                    "character": 27,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ComponentDefinition"
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
                    "fullName": "ComponentDefinitionCreator.createComponentDefinition.createComponentDefinition.name",
                    "hierarchy": "Parameter name:string",
                    "kindString": "Parameter",
                    "typeInfo": {
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
                    "fullName": "ComponentDefinitionCreator.createComponentDefinition.createComponentDefinition.template",
                    "hierarchy": "Parameter template:Template<TemplateMeta>",
                    "kindString": "Parameter",
                    "typeInfo": {
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
                    "fullName": "ComponentDefinitionCreator.createComponentDefinition.createComponentDefinition.componentFactory",
                    "hierarchy": "Parameter componentFactory:Factory<Component>",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "Factory"
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
      "id": "540",
      "type": "interface",
      "attributes": {
        "name": "EnvironmentOptions",
        "slug": "environmentoptions",
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
        "alias": "environmentoptions",
        "fullName": "EnvironmentOptions",
        "hierarchy": "Interface EnvironmentOptions\n  Property appendOperations:DOMTreeConstruction\n  Property document:HTMLDocument",
        "kindString": "Interface",
        "sources": [
          {
            "fileName": "environment.ts",
            "line": 41,
            "character": 35,
            "url": null
          }
        ],
        "properties": [
          {
            "name": "appendOperations",
            "slug": "appendoperations",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": true,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "appendoperations",
            "fullName": "EnvironmentOptions.appendOperations",
            "hierarchy": "Property appendOperations:DOMTreeConstruction",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "environment.ts",
                "line": 43,
                "character": 18,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "DOMTreeConstruction"
            }
          },
          {
            "name": "document",
            "slug": "document",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": true,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "document",
            "fullName": "EnvironmentOptions.document",
            "hierarchy": "Property document:HTMLDocument",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "environment.ts",
                "line": 42,
                "character": 10,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "HTMLDocument"
            }
          }
        ]
      }
    },
    {
      "id": "445",
      "type": "interface",
      "attributes": {
        "name": "ExtendedTemplateMeta",
        "slug": "extendedtemplatemeta",
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
        "alias": "extendedtemplatemeta",
        "fullName": "ExtendedTemplateMeta",
        "hierarchy": "Interface ExtendedTemplateMeta\n  Property <template-meta>:true\n  Property managerId:string\n  Property moduleName:string\n  Property specifier:string",
        "kindString": "Interface",
        "extendedTypes": [
          {
            "isArray": false,
            "name": "TemplateMeta"
          }
        ],
        "sources": [
          {
            "fileName": "template-meta.ts",
            "line": 3,
            "character": 30,
            "url": null
          }
        ]
      }
    },
    {
      "id": "688",
      "type": "interface",
      "attributes": {
        "name": "Initializer",
        "slug": "initializer",
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
        "alias": "initializer",
        "fullName": "Initializer",
        "hierarchy": "Interface Initializer\n  Property name:string\n  Method initialize\n    CallSignature initialize:void\n      Parameter registry:RegistryWriter",
        "kindString": "Interface",
        "sources": [
          {
            "fileName": "application.ts",
            "line": 33,
            "character": 28,
            "url": null
          }
        ],
        "properties": [
          {
            "name": "name",
            "slug": "name",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": true,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "name",
            "fullName": "Initializer.name",
            "hierarchy": "Property name:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 34,
                "character": 6,
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
            "fullName": "Initializer.initialize",
            "hierarchy": "Method initialize\n  CallSignature initialize:void\n    Parameter registry:RegistryWriter",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "application.ts",
                "line": 35,
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
                "fullName": "Initializer.initialize.initialize",
                "hierarchy": "CallSignature initialize:void\n  Parameter registry:RegistryWriter",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "application.ts",
                    "line": 35,
                    "character": 12,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "registry",
                    "slug": "registry",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "registry",
                    "fullName": "Initializer.initialize.initialize.registry",
                    "hierarchy": "Parameter registry:RegistryWriter",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "RegistryWriter"
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
      "id": "470",
      "type": "function",
      "attributes": {
        "name": "blockComponentMacro",
        "slug": "blockcomponentmacro",
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
        "alias": "blockcomponentmacro",
        "fullName": "blockComponentMacro",
        "hierarchy": "Function blockComponentMacro\n  CallSignature blockComponentMacro:boolean\n    Parameter params:any\n    Parameter hash:any\n    Parameter template:any\n    Parameter inverse:any\n    Parameter builder:any",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "dynamic-component.ts",
            "line": 21,
            "character": 35,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "blockComponentMacro",
            "slug": "blockcomponentmacro-1",
            "flags": {},
            "alias": "blockcomponentmacro-1",
            "fullName": "blockComponentMacro.blockComponentMacro",
            "hierarchy": "CallSignature blockComponentMacro:boolean\n  Parameter params:any\n  Parameter hash:any\n  Parameter template:any\n  Parameter inverse:any\n  Parameter builder:any",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 21,
                "character": 35,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "boolean"
            },
            "parameters": [
              {
                "name": "params",
                "slug": "params",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "params",
                "fullName": "blockComponentMacro.blockComponentMacro.params",
                "hierarchy": "Parameter params:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              },
              {
                "name": "hash",
                "slug": "hash",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "hash",
                "fullName": "blockComponentMacro.blockComponentMacro.hash",
                "hierarchy": "Parameter hash:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
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
                "fullName": "blockComponentMacro.blockComponentMacro.template",
                "hierarchy": "Parameter template:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              },
              {
                "name": "inverse",
                "slug": "inverse",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "inverse",
                "fullName": "blockComponentMacro.blockComponentMacro.inverse",
                "hierarchy": "Parameter inverse:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              },
              {
                "name": "builder",
                "slug": "builder",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "builder",
                "fullName": "blockComponentMacro.blockComponentMacro.builder",
                "hierarchy": "Parameter builder:any",
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
    },
    {
      "id": "491",
      "type": "function",
      "attributes": {
        "name": "buildAction",
        "slug": "buildaction",
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
        "alias": "buildaction",
        "fullName": "buildAction",
        "hierarchy": "Function buildAction\n  CallSignature buildAction:ConstReference<action>\n    Parameter vm:VM\n    Parameter _args:Arguments",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "helpers/action.ts",
            "line": 4,
            "character": 35,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "buildAction",
            "slug": "buildaction-1",
            "flags": {},
            "alias": "buildaction-1",
            "fullName": "buildAction.buildAction",
            "hierarchy": "CallSignature buildAction:ConstReference<action>\n  Parameter vm:VM\n  Parameter _args:Arguments",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "helpers/action.ts",
                "line": 4,
                "character": 35,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "ConstReference"
            },
            "parameters": [
              {
                "name": "vm",
                "slug": "vm",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "vm",
                "fullName": "buildAction.buildAction.vm",
                "hierarchy": "Parameter vm:VM",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "VM"
                }
              },
              {
                "name": "_args",
                "slug": "_args",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "_args",
                "fullName": "buildAction.buildAction._args",
                "hierarchy": "Parameter _args:Arguments",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "Arguments"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "537",
      "type": "function",
      "attributes": {
        "name": "buildUserHelper",
        "slug": "builduserhelper",
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
        "alias": "builduserhelper",
        "fullName": "buildUserHelper",
        "hierarchy": "Function buildUserHelper\n  CallSignature buildUserHelper:GlimmerHelper\n    Parameter helperFunc:any",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "helpers/user-helper.ts",
            "line": 21,
            "character": 39,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "buildUserHelper",
            "slug": "builduserhelper-1",
            "flags": {},
            "alias": "builduserhelper-1",
            "fullName": "buildUserHelper.buildUserHelper",
            "hierarchy": "CallSignature buildUserHelper:GlimmerHelper\n  Parameter helperFunc:any",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "helpers/user-helper.ts",
                "line": 21,
                "character": 39,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "GlimmerHelper"
            },
            "parameters": [
              {
                "name": "helperFunc",
                "slug": "helperfunc",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "helperfunc",
                "fullName": "buildUserHelper.buildUserHelper.helperFunc",
                "hierarchy": "Parameter helperFunc:any",
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
    },
    {
      "id": "682",
      "type": "function",
      "attributes": {
        "name": "canCreateComponentDefinition",
        "slug": "cancreatecomponentdefinition",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "cancreatecomponentdefinition",
        "fullName": "canCreateComponentDefinition",
        "hierarchy": "Function canCreateComponentDefinition\n  CallSignature canCreateComponentDefinition:boolean\n    Parameter manager:ComponentDefinitionCreator | ComponentManager<Component>",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "environment.ts",
            "line": 239,
            "character": 37,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "canCreateComponentDefinition",
            "slug": "cancreatecomponentdefinition-1",
            "flags": {},
            "alias": "cancreatecomponentdefinition-1",
            "fullName": "canCreateComponentDefinition.canCreateComponentDefinition",
            "hierarchy": "CallSignature canCreateComponentDefinition:boolean\n  Parameter manager:ComponentDefinitionCreator | ComponentManager<Component>",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "environment.ts",
                "line": 239,
                "character": 37,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "boolean"
            },
            "parameters": [
              {
                "name": "manager",
                "slug": "manager",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "manager",
                "fullName": "canCreateComponentDefinition.canCreateComponentDefinition.manager",
                "hierarchy": "Parameter manager:ComponentDefinitionCreator | ComponentManager<Component>",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "ComponentDefinitionCreator | ComponentManager<Component>",
                  "types": [
                    {
                      "isArray": false,
                      "name": "ComponentDefinitionCreator",
                      "link": {
                        "id": "450",
                        "type": "interface",
                        "slug": "componentdefinitioncreator",
                        "sources": [
                          {
                            "fileName": "component-definition-creator.ts",
                            "line": 5,
                            "character": 36,
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
                    {
                      "isArray": false,
                      "name": "ComponentManager"
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "499",
      "type": "function",
      "attributes": {
        "name": "debugInfoForReference",
        "slug": "debuginfoforreference",
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
        "alias": "debuginfoforreference",
        "fullName": "debugInfoForReference",
        "hierarchy": "Function debugInfoForReference\n  CallSignature debugInfoForReference:string\n    Parameter reference:any",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "helpers/action.ts",
            "line": 32,
            "character": 37,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "debugInfoForReference",
            "slug": "debuginfoforreference-1",
            "flags": {},
            "alias": "debuginfoforreference-1",
            "fullName": "debugInfoForReference.debugInfoForReference",
            "hierarchy": "CallSignature debugInfoForReference:string\n  Parameter reference:any",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "helpers/action.ts",
                "line": 32,
                "character": 37,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "string"
            },
            "parameters": [
              {
                "name": "reference",
                "slug": "reference",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "reference",
                "fullName": "debugInfoForReference.debugInfoForReference.reference",
                "hierarchy": "Parameter reference:any",
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
    },
    {
      "id": "502",
      "type": "function",
      "attributes": {
        "name": "debugName",
        "slug": "debugname",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "debugname",
        "fullName": "debugName",
        "hierarchy": "Function debugName\n  CallSignature debugName:any\n    Parameter obj:any",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "helpers/action.ts",
            "line": 54,
            "character": 18,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "debugName",
            "slug": "debugname-1",
            "flags": {},
            "alias": "debugname-1",
            "fullName": "debugName.debugName",
            "hierarchy": "CallSignature debugName:any\n  Parameter obj:any",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "helpers/action.ts",
                "line": 54,
                "character": 18,
                "url": null
              }
            ],
            "typeInfo": {
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
                "fullName": "debugName.debugName.obj",
                "hierarchy": "Parameter obj:any",
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
    },
    {
      "id": "483",
      "type": "function",
      "attributes": {
        "name": "dynamicComponentFor",
        "slug": "dynamiccomponentfor",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "dynamiccomponentfor",
        "fullName": "dynamicComponentFor",
        "hierarchy": "Function dynamicComponentFor\n  CallSignature dynamicComponentFor:DynamicComponentReference\n    Parameter vm:VM\n    Parameter args:Arguments\n    Parameter meta:TemplateMeta",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "dynamic-component.ts",
            "line": 39,
            "character": 28,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "dynamicComponentFor",
            "slug": "dynamiccomponentfor-1",
            "flags": {},
            "alias": "dynamiccomponentfor-1",
            "fullName": "dynamicComponentFor.dynamicComponentFor",
            "hierarchy": "CallSignature dynamicComponentFor:DynamicComponentReference\n  Parameter vm:VM\n  Parameter args:Arguments\n  Parameter meta:TemplateMeta",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 39,
                "character": 28,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "DynamicComponentReference",
              "link": {
                "id": "456",
                "type": "class",
                "slug": "dynamiccomponentreference",
                "sources": [
                  {
                    "fileName": "dynamic-component.ts",
                    "line": 46,
                    "character": 31,
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
                "name": "vm",
                "slug": "vm",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "vm",
                "fullName": "dynamicComponentFor.dynamicComponentFor.vm",
                "hierarchy": "Parameter vm:VM",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "VM"
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
                "fullName": "dynamicComponentFor.dynamicComponentFor.args",
                "hierarchy": "Parameter args:Arguments",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "Arguments"
                }
              },
              {
                "name": "meta",
                "slug": "meta",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "meta",
                "fullName": "dynamicComponentFor.dynamicComponentFor.meta",
                "hierarchy": "Parameter meta:TemplateMeta",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "TemplateMeta"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "488",
      "type": "function",
      "attributes": {
        "name": "hashToArgs",
        "slug": "hashtoargs",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "hashtoargs",
        "fullName": "hashToArgs",
        "hierarchy": "Function hashToArgs\n  CallSignature hashToArgs:Option<WireFormat.Core.Hash>\n    Parameter hash:Option<WireFormat.Core.Hash>",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "dynamic-component.ts",
            "line": 70,
            "character": 19,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "hashToArgs",
            "slug": "hashtoargs-1",
            "flags": {},
            "alias": "hashtoargs-1",
            "fullName": "hashToArgs.hashToArgs",
            "hierarchy": "CallSignature hashToArgs:Option<WireFormat.Core.Hash>\n  Parameter hash:Option<WireFormat.Core.Hash>",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 70,
                "character": 19,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Option"
            },
            "parameters": [
              {
                "name": "hash",
                "slug": "hash",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "hash",
                "fullName": "hashToArgs.hashToArgs.hash",
                "hierarchy": "Parameter hash:Option<WireFormat.Core.Hash>",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "Option"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "477",
      "type": "function",
      "attributes": {
        "name": "inlineComponentMacro",
        "slug": "inlinecomponentmacro",
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
        "alias": "inlinecomponentmacro",
        "fullName": "inlineComponentMacro",
        "hierarchy": "Function inlineComponentMacro\n  CallSignature inlineComponentMacro:boolean\n    Parameter _name:any\n    Parameter params:any\n    Parameter hash:any\n    Parameter builder:any",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "dynamic-component.ts",
            "line": 30,
            "character": 36,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "inlineComponentMacro",
            "slug": "inlinecomponentmacro-1",
            "flags": {},
            "alias": "inlinecomponentmacro-1",
            "fullName": "inlineComponentMacro.inlineComponentMacro",
            "hierarchy": "CallSignature inlineComponentMacro:boolean\n  Parameter _name:any\n  Parameter params:any\n  Parameter hash:any\n  Parameter builder:any",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "dynamic-component.ts",
                "line": 30,
                "character": 36,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "boolean"
            },
            "parameters": [
              {
                "name": "_name",
                "slug": "_name",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "_name",
                "fullName": "inlineComponentMacro.inlineComponentMacro._name",
                "hierarchy": "Parameter _name:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              },
              {
                "name": "params",
                "slug": "params",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "params",
                "fullName": "inlineComponentMacro.inlineComponentMacro.params",
                "hierarchy": "Parameter params:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              },
              {
                "name": "hash",
                "slug": "hash",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "hash",
                "fullName": "inlineComponentMacro.inlineComponentMacro.hash",
                "hierarchy": "Parameter hash:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              },
              {
                "name": "builder",
                "slug": "builder",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "builder",
                "fullName": "inlineComponentMacro.inlineComponentMacro.builder",
                "hierarchy": "Parameter builder:any",
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
    },
    {
      "id": "367",
      "type": "function",
      "attributes": {
        "name": "isTypeSpecifier",
        "slug": "istypespecifier",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": false,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "istypespecifier",
        "fullName": "isTypeSpecifier",
        "hierarchy": "Function isTypeSpecifier\n  CallSignature isTypeSpecifier:boolean\n    Parameter specifier:string",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "application-registry.ts",
            "line": 9,
            "character": 24,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "isTypeSpecifier",
            "slug": "istypespecifier-1",
            "flags": {},
            "alias": "istypespecifier-1",
            "fullName": "isTypeSpecifier.isTypeSpecifier",
            "hierarchy": "CallSignature isTypeSpecifier:boolean\n  Parameter specifier:string",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "application-registry.ts",
                "line": 9,
                "character": 24,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "boolean"
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
                "fullName": "isTypeSpecifier.isTypeSpecifier.specifier",
                "hierarchy": "Parameter specifier:string",
                "kindString": "Parameter",
                "typeInfo": {
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
      "id": "678",
      "type": "function",
      "attributes": {
        "name": "populateMacros",
        "slug": "populatemacros",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "populatemacros",
        "fullName": "populateMacros",
        "hierarchy": "Function populateMacros\n  CallSignature populateMacros:void\n    Parameter blocks:BlockMacros\n    Parameter inlines:InlineMacros",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "environment.ts",
            "line": 234,
            "character": 23,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "populateMacros",
            "slug": "populatemacros-1",
            "flags": {},
            "alias": "populatemacros-1",
            "fullName": "populateMacros.populateMacros",
            "hierarchy": "CallSignature populateMacros:void\n  Parameter blocks:BlockMacros\n  Parameter inlines:InlineMacros",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "environment.ts",
                "line": 234,
                "character": 23,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "void"
            },
            "parameters": [
              {
                "name": "blocks",
                "slug": "blocks",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "blocks",
                "fullName": "populateMacros.populateMacros.blocks",
                "hierarchy": "Parameter blocks:BlockMacros",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "BlockMacros"
                }
              },
              {
                "name": "inlines",
                "slug": "inlines",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "inlines",
                "fullName": "populateMacros.populateMacros.inlines",
                "hierarchy": "Parameter inlines:InlineMacros",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "InlineMacros"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "495",
      "type": "function",
      "attributes": {
        "name": "throwNoActionError",
        "slug": "thrownoactionerror",
        "flags": {
          "isNormalized": true,
          "isExported": false,
          "isExternal": true,
          "isOptional": false,
          "isPrivate": false,
          "isPublic": false,
          "isProtected": false,
          "isStatic": false
        },
        "alias": "thrownoactionerror",
        "fullName": "throwNoActionError",
        "hierarchy": "Function throwNoActionError\n  CallSignature throwNoActionError:void\n    Parameter actionFunc:any\n    Parameter actionFuncReference:Reference<any>",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "helpers/action.ts",
            "line": 27,
            "character": 27,
            "url": null
          }
        ],
        "callSignatures": [
          {
            "name": "throwNoActionError",
            "slug": "thrownoactionerror-1",
            "flags": {},
            "alias": "thrownoactionerror-1",
            "fullName": "throwNoActionError.throwNoActionError",
            "hierarchy": "CallSignature throwNoActionError:void\n  Parameter actionFunc:any\n  Parameter actionFuncReference:Reference<any>",
            "kindString": "Call signature",
            "sources": [
              {
                "fileName": "helpers/action.ts",
                "line": 27,
                "character": 27,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "void"
            },
            "parameters": [
              {
                "name": "actionFunc",
                "slug": "actionfunc",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "actionfunc",
                "fullName": "throwNoActionError.throwNoActionError.actionFunc",
                "hierarchy": "Parameter actionFunc:any",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              },
              {
                "name": "actionFuncReference",
                "slug": "actionfuncreference",
                "flags": {
                  "isOptional": false,
                  "isRest": false
                },
                "alias": "actionfuncreference",
                "fullName": "throwNoActionError.throwNoActionError.actionFuncReference",
                "hierarchy": "Parameter actionFuncReference:Reference<any>",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "Reference"
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
