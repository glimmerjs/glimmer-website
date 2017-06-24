(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.docs = factory());
}(this, (function () { 'use strict';

var main = {
  "data": {
    "id": "glimmer-api docs",
    "type": "docset",
    "attributes": {
      "header": "glimmer",
      "title": "Glimmer API Docs",
      "intro": "<div><p>Welcome to the Glimmer API documentation.</p><p>Choose a project or module from the table of contents to get started.</p></div>",
      "idMap": {
        "_glimmer_component": {
          "cachedreference": "135",
          "component": "98",
          "componentdefinition": "318",
          "componentmanager": "258",
          "componentpathreference": "126",
          "componentstatebucket": "247",
          "conditionalreference": "228",
          "meta": "1",
          "nestedpropertyreference": "193",
          "propertyreference": "160",
          "rootpropertyreference": "174",
          "rootreference": "148",
          "untrackedpropertyerror": "18",
          "updatablereference": "213",
          "componentfactory": "122",
          "constructoroptions": "245",
          "extendedtemplatemeta": "313",
          "interceptors": "15",
          "untrackedpropertyerrorthrower": "34",
          "builderror": "241",
          "combinatorforcomputedproperties": "59",
          "defaulterrorthrower": "84",
          "descriptorfortrackedcomputedproperty": "48",
          "hasownproperty": "69",
          "hastag": "80",
          "installdevmodeerrorinterceptor": "93",
          "installtrackedproperty": "55",
          "metafor": "65",
          "propertydidchange": "73",
          "setpropertydidchange": "75",
          "tagforproperty": "88",
          "tracked": "38"
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
        "hierarchy": "Global @glimmer/component\n  Class CachedReference<T>\n    TypeParameter T\n    Property _lastRevision:number | null\n    Property _lastValue:any\n    Accessor tag\n      GetSignature __get:Tag\n    Method compute\n      CallSignature compute:T\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n  Class Component\n    Constructor constructor\n      ConstructorSignature new Component:Component\n        Parameter options:object\n    Property ___args__:any\n    Property debugName:string\n    Property element:Element\n    Accessor args\n      GetSignature __get:any\n      SetSignature __set:void\n        Parameter args:any\n    Method destroy\n      CallSignature destroy:void\n    Method didInsertElement\n      CallSignature didInsertElement:void\n    Method didUpdate\n      CallSignature didUpdate:void\n    Method toString\n      CallSignature toString:string\n    Method willDestroy\n      CallSignature willDestroy:void\n    Method create\n      CallSignature create:Component\n        Parameter injections:any\n  Class ComponentDefinition\n    Constructor constructor\n      ConstructorSignature new ComponentDefinition:ComponentDefinition\n        Parameter name:string\n        Parameter manager:ComponentManager\n        Parameter template:Template<TemplateMeta>\n        Parameter componentFactory:ComponentFactory\n    Property ComponentClass:ComponentClass\n    Property args:CapturedArguments\n    Property componentFactory:ComponentFactory\n    Property manager:ComponentManager<ComponentStateBucket>\n    Property name:string\n    Property template:Template<TemplateMeta>\n    Method toJSON\n      CallSignature toJSON:object\n        TypeLiteral __type\n          Variable GlimmerDebug:string\n  Class ComponentManager\n    Constructor constructor\n      ConstructorSignature new ComponentManager:ComponentManager\n        Parameter options:ConstructorOptions\n    Property env:Environment\n    Method create\n      CallSignature create:ComponentStateBucket | null\n        Parameter environment:Environment\n        Parameter definition:ComponentDefinition\n        Parameter volatileArgs:Arguments\n    Method createComponentDefinition\n      CallSignature createComponentDefinition:ComponentDefinition\n        Parameter name:string\n        Parameter template:Template<any>\n        Parameter componentFactory:Factory<Component>\n    Method didCreate\n      CallSignature didCreate:void\n        Parameter bucket:ComponentStateBucket\n    Method didCreateElement\n      CallSignature didCreateElement:void\n        Parameter bucket:ComponentStateBucket\n        Parameter element:Element\n    Method didRenderLayout\n      CallSignature didRenderLayout:void\n        Parameter bucket:ComponentStateBucket\n        Parameter bounds:Bounds\n    Method didUpdate\n      CallSignature didUpdate:void\n        Parameter bucket:ComponentStateBucket\n    Method didUpdateLayout\n      CallSignature didUpdateLayout:void\n    Method getDestructor\n      CallSignature getDestructor:Destroyable\n        Parameter bucket:ComponentStateBucket\n    Method getSelf\n      CallSignature getSelf:RootReference\n        Parameter bucket:ComponentStateBucket\n    Method getTag\n      CallSignature getTag:null\n    Method layoutFor\n      CallSignature layoutFor:CompiledDynamicProgram\n        Parameter definition:ComponentDefinition\n        Parameter bucket:ComponentStateBucket\n        Parameter env:Environment\n    Method prepareArgs\n      CallSignature prepareArgs:null\n        Parameter definition:ComponentDefinition\n        Parameter args:Arguments\n    Method update\n      CallSignature update:void\n        Parameter bucket:ComponentStateBucket\n        Parameter scope:DynamicScope\n    Method create\n      CallSignature create:ComponentManager\n        Parameter options:ConstructorOptions\n  Class ComponentPathReference<T>\n    TypeParameter T\n    Accessor tag\n      GetSignature __get:Tag\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:T\n  Class ComponentStateBucket\n    Constructor constructor\n      ConstructorSignature new ComponentStateBucket:ComponentStateBucket\n        Parameter definition:ComponentDefinition\n        Parameter args:CapturedArguments\n        Parameter owner:Owner\n    Property args:CapturedArguments\n    Property component:Component\n    Property name:string\n    Method namedArgsSnapshot\n      CallSignature namedArgsSnapshot:Readonly<Dict<any | void>>\n  Class ConditionalReference\n    Constructor constructor\n      ConstructorSignature new ConditionalReference:ConditionalReference\n        Parameter inner:Reference<Opaque>\n    Property tag:Tag\n    Method toBool\n      CallSignature toBool:boolean\n        Parameter value:Opaque\n    Method value\n      CallSignature value:boolean\n    Method create\n      CallSignature create:PrimitiveReference<any> | ConditionalReference\n        Parameter reference:PathReference<any>\n  Class Meta\n    Constructor constructor\n      ConstructorSignature new Meta:Meta\n        Parameter parent:Meta\n    Property computedPropertyTags:Dict<TagWrapper<DirtyableTag>>\n    Property tags:Dict<Tag>\n    Property trackedProperties:Dict<boolean>\n    Property trackedPropertyDependencies:Dict<string[]>\n    Method dirtyableTagFor\n      CallSignature dirtyableTagFor:TagWrapper<DirtyableTag>\n        Parameter key:Key\n    Method tagFor\n      CallSignature tagFor:Tag\n        Parameter key:Key\n  Class NestedPropertyReference\n    Constructor constructor\n      ConstructorSignature new NestedPropertyReference:NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n    Property _parentObjectTag:TagWrapper<UpdatableTag>\n    Property _parentReference:PathReference<any>\n    Property _propertyKey:string\n    Property tag:Tag\n    Method compute\n      CallSignature compute:any\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n    Method create\n      CallSignature create:RootPropertyReference | NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n  Class PropertyReference\n    Accessor tag\n      GetSignature __get:Tag\n    Method compute\n      CallSignature compute:any\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n    Method create\n      CallSignature create:RootPropertyReference | NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n  Class RootPropertyReference\n    Constructor constructor\n      ConstructorSignature new RootPropertyReference:RootPropertyReference\n        Parameter parentValue:object\n        Parameter propertyKey:string\n    Property _parentValue:object\n    Property _propertyKey:string\n    Property tag:Tag\n    Method compute\n      CallSignature compute:any\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n    Method create\n      CallSignature create:RootPropertyReference | NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n  Class RootReference\n    Constructor constructor\n      ConstructorSignature new RootReference:RootReference\n        Parameter inner:any\n    Property children:Dict<RootPropertyReference>\n    Property inner:any\n    Property tag:Tag\n    Method get\n      CallSignature get:RootPropertyReference\n        Parameter propertyKey:string\n    Method value\n      CallSignature value:any\n  Class UntrackedPropertyError\n    Constructor constructor\n      ConstructorSignature new UntrackedPropertyError:UntrackedPropertyError\n        Parameter target:any\n        Parameter key:string\n        Parameter message:string\n    Property key:string\n    Property target:any\n    Property Error:ErrorConstructor\n    Property message:string\n    Property name:string\n    Property stack:string\n    Method for\n      CallSignature for:UntrackedPropertyError\n        Parameter obj:any\n        Parameter key:string\n  Class UpdatableReference<T>\n    TypeParameter T\n    Constructor constructor\n      ConstructorSignature new UpdatableReference:UpdatableReference\n        Parameter value:T\n    Property _value:T\n    Property tag:TagWrapper<DirtyableTag>\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method update\n      CallSignature update:void\n        Parameter value:T\n    Method value\n      CallSignature value:T\n  Interface ComponentFactory\n    Method create\n      CallSignature create:Component\n        Parameter injections:object\n  Interface ConstructorOptions\n    Property env:Environment\n  Interface ExtendedTemplateMeta\n    Property <template-meta>:true\n    Property managerId:string\n    Property moduleName:string\n    Property specifier:string\n  Interface Interceptors\n    IndexSignature __index:boolean\n      Parameter key:string\n  Interface UntrackedPropertyErrorThrower\n    CallSignature __call:void\n      Parameter obj:any\n      Parameter key:string\n  TypeAlias Key:string\n  Variable META:symbol\n  Variable hOP:hasOwnProperty\n  Function buildError\n    CallSignature buildError:void\n      Parameter obj:any\n      Parameter key:string\n  Function combinatorForComputedProperties\n    CallSignature combinatorForComputedProperties:Tag\n      Parameter meta:Meta\n      Parameter key:Key\n      Parameter dependencies:Key[] | void\n  Function defaultErrorThrower\n    CallSignature defaultErrorThrower:UntrackedPropertyError\n      Parameter obj:any\n      Parameter key:string\n  Function descriptorForTrackedComputedProperty\n    CallSignature descriptorForTrackedComputedProperty:PropertyDescriptor\n      Parameter target:any\n      Parameter key:any\n      Parameter descriptor:PropertyDescriptor\n      Parameter dependencies:string[]\n  Function hasOwnProperty\n    CallSignature hasOwnProperty:any\n      Parameter obj:any\n      Parameter key:symbol\n  Function hasTag\n    CallSignature hasTag:boolean\n      Parameter obj:any\n      Parameter key:string\n  Function installDevModeErrorInterceptor\n    CallSignature installDevModeErrorInterceptor:void\n      Parameter obj:object\n      Parameter key:string\n      Parameter throwError:UntrackedPropertyErrorThrower\n  Function installTrackedProperty\n    CallSignature installTrackedProperty:void\n      Parameter target:any\n      Parameter key:Key\n  Function metaFor\n    CallSignature metaFor:Meta\n      Parameter obj:any\n  Function propertyDidChange\n    CallSignature propertyDidChange:void\n  Function setPropertyDidChange\n    CallSignature setPropertyDidChange:void\n      Parameter cb:function\n        TypeLiteral __type\n          CallSignature __call:void\n  Function tagForProperty\n    CallSignature tagForProperty:Tag\n      Parameter obj:any\n      Parameter key:string\n      Parameter throwError:UntrackedPropertyErrorThrower\n  Function tracked\n    CallSignature tracked:MethodDecorator\n      Parameter dependencies:string[]\n    CallSignature tracked:any\n      Parameter target:any\n      Parameter key:any\n    CallSignature tracked:PropertyDescriptor\n      Parameter target:any\n      Parameter key:any\n      Parameter descriptor:PropertyDescriptor",
        "packageInfo": {
          "name": "@glimmer/component",
          "version": "0.3.10",
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
            "test": "npm run test:prod",
            "test:prod": "TEST_MODE=prod ember test",
            "test:debug": "TEST_MODE=debug ember test"
          },
          "dependencies": {
            "@glimmer/di": "^0.1.9",
            "@glimmer/env": "^0.1.5",
            "@glimmer/reference": "^0.23.0-alpha.11",
            "@glimmer/runtime": "^0.23.0-alpha.11",
            "@glimmer/util": "^0.23.0-alpha.11"
          },
          "devDependencies": {
            "@glimmer/application": "^0.4.0",
            "@glimmer/application-test-helpers": "^0.1.3",
            "@glimmer/build": "^0.6.1",
            "@glimmer/compiler": "^0.23.0-alpha.11",
            "@glimmer/interfaces": "^0.23.0-alpha.11",
            "@glimmer/resolver": "^0.3.0",
            "@glimmer/wire-format": "^0.23.0-alpha.11",
            "broccoli": "^1.1.0",
            "broccoli-cli": "^1.0.0",
            "broccoli-file-creator": "^1.1.1",
            "ember-cli": "^2.12.0",
            "testem": "^1.13.0"
          }
        },
        "readme": "<h1 id=\"-glimmer-component\">@glimmer/component</h1>\n<p><a href=\"https://badge.fury.io/js/%40glimmer%2Fcomponent\"><img src=\"https://badge.fury.io/js/%40glimmer%2Fcomponent.svg\" alt=\"npm version\"></a>\n<a href=\"http://travis-ci.org/glimmerjs/glimmer-component\"><img src=\"https://secure.travis-ci.org/glimmerjs/glimmer-component.svg?branch=master\" alt=\"Build Status\"></a></p>\n<h2 id=\"installation\">Installation</h2>\n<p>Add this package to your project with Yarn:</p>\n<pre><code class=\"lang-bash\">yarn add @glimmer/component\n</code></pre>\n<p>Or alternatively with npm:</p>\n<pre><code class=\"lang-bash\">npm install --save-dev @glimmer/component\n</code></pre>\n<h2 id=\"usage\">Usage</h2>\n<p>To use this in a Glimmer application, import the package and export an extended class:</p>\n<pre><code class=\"lang-ts\"><span class=\"hljs-keyword\">import</span> Component <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'@glimmer/component'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-keyword\">class</span> MyComponent <span class=\"hljs-keyword\">extends</span> Component {\n}\n</code></pre>\n<h2 id=\"development\">Development</h2>\n<p>For the development of this project, Yarn is preferred over npm. However, any Yarn command can be replaced by the npm equivalent.\nSee <a href=\"https://yarnpkg.com/lang/en/docs/migrating-from-npm/\">Migration from npm</a> in the Yarn documentation for a list of the equivalent commands.</p>\n<ul>\n<li>Clone repository locally: <code>git clone https://github.com/glimmerjs/glimmer-component.git</code></li>\n<li>Install dependencies: <code>yarn</code>, or <code>yarn install</code></li>\n<li>Open project in your editor of choice and make your changes</li>\n<li>Run tests: <code>yarn run test</code></li>\n</ul>\n<h2 id=\"contributing\">Contributing</h2>\n<p>Bug reports and pull requests are welcome on GitHub at <a href=\"https://github.com/glimmerjs/glimmer-component\">https://github.com/glimmerjs/glimmer-component</a>.</p>\n<h2 id=\"acknowledgements\">Acknowledgements</h2>\n<p>Thanks to <a href=\"http://monegraph.com\">Monegraph</a> for funding the initial development\nof this library.</p>\n<h2 id=\"license\">License</h2>\n<p>MIT License.</p>\n",
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
                "line": 53,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L53"
              }
            ],
            "typeInfo": {
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
                "line": 181,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L181"
              }
            ],
            "typeInfo": {
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
                "line": 192,
                "character": 7,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L192"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "hasOwnProperty"
            }
          }
        ],
        "menu": {
          "include": [
            "Component",
            "tracked"
          ]
        }
      },
      "relationships": {
        "classes": {
          "data": [
            {
              "type": "class",
              "id": "135"
            },
            {
              "type": "class",
              "id": "98"
            },
            {
              "type": "class",
              "id": "318"
            },
            {
              "type": "class",
              "id": "258"
            },
            {
              "type": "class",
              "id": "126"
            },
            {
              "type": "class",
              "id": "247"
            },
            {
              "type": "class",
              "id": "228"
            },
            {
              "type": "class",
              "id": "1"
            },
            {
              "type": "class",
              "id": "193"
            },
            {
              "type": "class",
              "id": "160"
            },
            {
              "type": "class",
              "id": "174"
            },
            {
              "type": "class",
              "id": "148"
            },
            {
              "type": "class",
              "id": "18"
            },
            {
              "type": "class",
              "id": "213"
            }
          ]
        },
        "interfaces": {
          "data": [
            {
              "type": "interface",
              "id": "122"
            },
            {
              "type": "interface",
              "id": "245"
            },
            {
              "type": "interface",
              "id": "313"
            },
            {
              "type": "interface",
              "id": "15"
            },
            {
              "type": "interface",
              "id": "34"
            }
          ]
        },
        "functions": {
          "data": [
            {
              "type": "function",
              "id": "241"
            },
            {
              "type": "function",
              "id": "59"
            },
            {
              "type": "function",
              "id": "84"
            },
            {
              "type": "function",
              "id": "48"
            },
            {
              "type": "function",
              "id": "69"
            },
            {
              "type": "function",
              "id": "80"
            },
            {
              "type": "function",
              "id": "93"
            },
            {
              "type": "function",
              "id": "55"
            },
            {
              "type": "function",
              "id": "65"
            },
            {
              "type": "function",
              "id": "73"
            },
            {
              "type": "function",
              "id": "75"
            },
            {
              "type": "function",
              "id": "88"
            },
            {
              "type": "function",
              "id": "38"
            }
          ]
        }
      }
    },
    {
      "id": "135",
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
              "id": "126",
              "type": "class",
              "slug": "componentpathreference",
              "sources": [
                {
                  "fileName": "references.ts",
                  "line": 24,
                  "character": 44,
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L24"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L33"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L34"
              }
            ],
            "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L35"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "any"
            }
          }
        ],
        "accessors": [
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
            "fullName": "CachedReference.tag",
            "hierarchy": "Accessor tag\n  GetSignature __get:Tag",
            "kindString": "Accessor",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 26,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L26"
              }
            ],
            "getSignatures": [
              {
                "name": "__get",
                "slug": "__get",
                "flags": {},
                "alias": "__get",
                "fullName": "CachedReference.tag.__get",
                "hierarchy": "GetSignature __get:Tag",
                "kindString": "Get signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 26,
                    "character": 18,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L26"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Tag"
                }
              }
            ]
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L37"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L37"
                  }
                ],
                "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L28"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L28"
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
                    "fullName": "CachedReference.get.get.key",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L39"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L39"
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
      "id": "98",
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
        "hierarchy": "Class Component\n  Constructor constructor\n    ConstructorSignature new Component:Component\n      Parameter options:object\n  Property ___args__:any\n  Property debugName:string\n  Property element:Element\n  Accessor args\n    GetSignature __get:any\n    SetSignature __set:void\n      Parameter args:any\n  Method destroy\n    CallSignature destroy:void\n  Method didInsertElement\n    CallSignature didInsertElement:void\n  Method didUpdate\n    CallSignature didUpdate:void\n  Method toString\n    CallSignature toString:string\n  Method willDestroy\n    CallSignature willDestroy:void\n  Method create\n    CallSignature create:Component\n      Parameter injections:any",
        "kindString": "Class",
        "sources": [
          {
            "fileName": "component.ts",
            "line": 127,
            "character": 15,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L127"
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
                "line": 181,
                "character": 3,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L181"
              }
            ],
            "comment": {
              "shortText": "<p>Constructs a new component and assigns itself the passed properties. You\nshould not construct new components yourself. Instead, Glimmer will\ninstantiate new components automatically as it renders.</p>\n",
              "text": "<p>Constructs a new component and assigns itself the passed properties. You\nshould not construct new components yourself. Instead, Glimmer will\ninstantiate new components automatically as it renders.</p>\n",
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
                    "line": 181,
                    "character": 3,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L181"
                  }
                ],
                "comment": {
                  "shortText": "<p>Constructs a new component and assigns itself the passed properties. You\nshould not construct new components yourself. Instead, Glimmer will\ninstantiate new components automatically as it renders.</p>\n",
                  "text": "<p>Constructs a new component and assigns itself the passed properties. You\nshould not construct new components yourself. Instead, Glimmer will\ninstantiate new components automatically as it renders.</p>\n",
                  "tags": []
                },
                "typeInfo": {
                  "isArray": false,
                  "name": "Component",
                  "link": {
                    "id": "98",
                    "type": "class",
                    "slug": "component",
                    "sources": [
                      {
                        "fileName": "component.ts",
                        "line": 127,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L127"
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
            "name": "___args__",
            "slug": "___args__",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "___args__",
            "fullName": "Component.___args__",
            "hierarchy": "Property ___args__:any",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 177,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L177"
              }
            ],
            "comment": {
              "shortText": "",
              "text": "",
              "tags": []
            },
            "typeInfo": {
              "isArray": false,
              "name": "any"
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
                "line": 138,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L138"
              }
            ],
            "comment": {
              "shortText": "<p>Development-mode only name of the component, useful for debugging.</p>\n",
              "text": "<p>Development-mode only name of the component, useful for debugging.</p>\n"
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
                "line": 133,
                "character": 9,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L133"
              }
            ],
            "comment": {
              "shortText": "<p>The element corresponding to the top-level element of the component&#39;s template.\nYou should not try to access this property until after the component&#39;s <code>didInsertElement()</code>\nlifecycle hook is called.</p>\n",
              "text": "<p>The element corresponding to the top-level element of the component&#39;s template.\nYou should not try to access this property until after the component&#39;s <code>didInsertElement()</code>\nlifecycle hook is called.</p>\n"
            },
            "typeInfo": {
              "isArray": false,
              "name": "Element"
            }
          }
        ],
        "accessors": [
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
            "hierarchy": "Accessor args\n  GetSignature __get:any\n  SetSignature __set:void\n    Parameter args:any",
            "kindString": "Accessor",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 165,
                "character": 10,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L165"
              },
              {
                "fileName": "component.ts",
                "line": 169,
                "character": 10,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L169"
              }
            ],
            "comment": {
              "shortText": "<p>Named arguments passed to the component from its parent component.\nThey can be accessed in JavaScript via <code>this.args.argumentName</code> and in the template via <code>@argumentName</code>.</p>\n",
              "text": "<p>Say you have the following component, which will have two <code>args</code>, <code>firstName</code> and <code>lastName</code>:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">my-component</span> @<span class=\"hljs-attr\">firstName</span>=<span class=\"hljs-string\">\"Arthur\"</span> @<span class=\"hljs-attr\">lastName</span>=<span class=\"hljs-string\">\"Dent\"</span> /&gt;</span></span>\n</code></pre>\n<p>If you needed to calculate <code>fullName</code> by combining both of them, you would do:</p>\n<pre><code class=\"lang-ts\">didInsertElement() {\n  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">`Hi, my full name is <span class=\"hljs-subst\">${this.args.firstName}</span> <span class=\"hljs-subst\">${this.args.lastName}</span>`</span>);\n}\n</code></pre>\n<p>While in the template you could do:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Welcome, </span><span class=\"hljs-template-variable\">{{@firstName}}</span><span class=\"xml\"> </span><span class=\"hljs-template-variable\">{{@lastName}}</span><span class=\"xml\">!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span></span>\n</code></pre>\n"
            },
            "getSignatures": [
              {
                "name": "__get",
                "slug": "__get",
                "flags": {},
                "alias": "__get",
                "fullName": "Component.args.__get",
                "hierarchy": "GetSignature __get:any",
                "kindString": "Get signature",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 165,
                    "character": 10,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L165"
                  }
                ],
                "comment": {
                  "shortText": "<p>Named arguments passed to the component from its parent component.\nThey can be accessed in JavaScript via <code>this.args.argumentName</code> and in the template via <code>@argumentName</code>.</p>\n",
                  "text": "<p>Say you have the following component, which will have two <code>args</code>, <code>firstName</code> and <code>lastName</code>:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">my-component</span> @<span class=\"hljs-attr\">firstName</span>=<span class=\"hljs-string\">\"Arthur\"</span> @<span class=\"hljs-attr\">lastName</span>=<span class=\"hljs-string\">\"Dent\"</span> /&gt;</span></span>\n</code></pre>\n<p>If you needed to calculate <code>fullName</code> by combining both of them, you would do:</p>\n<pre><code class=\"lang-ts\">didInsertElement() {\n  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">`Hi, my full name is <span class=\"hljs-subst\">${this.args.firstName}</span> <span class=\"hljs-subst\">${this.args.lastName}</span>`</span>);\n}\n</code></pre>\n<p>While in the template you could do:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Welcome, </span><span class=\"hljs-template-variable\">{{@firstName}}</span><span class=\"xml\"> </span><span class=\"hljs-template-variable\">{{@lastName}}</span><span class=\"xml\">!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span></span>\n</code></pre>\n"
                },
                "typeInfo": {
                  "isArray": false,
                  "name": "any"
                }
              }
            ]
          }
        ],
        "methods": [
          {
            "name": "destroy",
            "slug": "destroy",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "destroy",
            "fullName": "Component.destroy",
            "hierarchy": "Method destroy\n  CallSignature destroy:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 211,
                "character": 9,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L211"
              }
            ],
            "callSignatures": [
              {
                "name": "destroy",
                "slug": "destroy-1",
                "flags": {},
                "alias": "destroy-1",
                "fullName": "Component.destroy.destroy",
                "hierarchy": "CallSignature destroy:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 211,
                    "character": 9,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L211"
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
                "line": 198,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L198"
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
                    "line": 198,
                    "character": 18,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L198"
                  }
                ],
                "comment": {
                  "shortText": "<p>Called when the component has been inserted into the DOM.\nOverride this function to do any set up that requires an element in the document body.</p>\n",
                  "text": "<p>Called when the component has been inserted into the DOM.\nOverride this function to do any set up that requires an element in the document body.</p>\n"
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
                "line": 204,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L204"
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
                    "line": 204,
                    "character": 11,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L204"
                  }
                ],
                "comment": {
                  "shortText": "<p>Called when the component has updated and rerendered itself.\nCalled only during a rerender, not during an initial render.</p>\n",
                  "text": "<p>Called when the component has updated and rerendered itself.\nCalled only during a rerender, not during an initial render.</p>\n"
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
                "line": 215,
                "character": 10,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L215"
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
                    "line": 215,
                    "character": 10,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L215"
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
            "name": "willDestroy",
            "slug": "willdestroy",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "willdestroy",
            "fullName": "Component.willDestroy",
            "hierarchy": "Method willDestroy\n  CallSignature willDestroy:void",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component.ts",
                "line": 209,
                "character": 13,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L209"
              }
            ],
            "callSignatures": [
              {
                "name": "willDestroy",
                "slug": "willdestroy-1",
                "flags": {},
                "alias": "willdestroy-1",
                "fullName": "Component.willDestroy.willDestroy",
                "hierarchy": "CallSignature willDestroy:void",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 209,
                    "character": 13,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L209"
                  }
                ],
                "comment": {
                  "shortText": "<p>Called before the component has been removed from the DOM.</p>\n",
                  "text": "<p>Called before the component has been removed from the DOM.</p>\n"
                },
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
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
                "line": 179,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L179"
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
                    "line": 179,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L179"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Component",
                  "link": {
                    "id": "98",
                    "type": "class",
                    "slug": "component",
                    "sources": [
                      {
                        "fileName": "component.ts",
                        "line": 127,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L127"
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
      "id": "318",
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
            "fullName": "ComponentDefinition.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new ComponentDefinition:ComponentDefinition\n    Parameter name:string\n    Parameter manager:ComponentManager\n    Parameter template:Template<TemplateMeta>\n    Parameter componentFactory:ComponentFactory",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "component-definition.ts",
                "line": 13,
                "character": 26,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new ComponentDefinition",
                "slug": "new_componentdefinition",
                "flags": {},
                "alias": "new_componentdefinition",
                "fullName": "ComponentDefinition.constructor.new ComponentDefinition",
                "hierarchy": "ConstructorSignature new ComponentDefinition:ComponentDefinition\n  Parameter name:string\n  Parameter manager:ComponentManager\n  Parameter template:Template<TemplateMeta>\n  Parameter componentFactory:ComponentFactory",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "component-definition.ts",
                    "line": 13,
                    "character": 26,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ComponentDefinition",
                  "link": {
                    "id": "318",
                    "type": "class",
                    "slug": "componentdefinition",
                    "sources": [
                      {
                        "fileName": "component-definition.ts",
                        "line": 10,
                        "character": 40,
                        "url": null
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
                    "fullName": "ComponentDefinition.constructor.new ComponentDefinition.name",
                    "hierarchy": "Parameter name:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "manager",
                    "slug": "manager",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "manager",
                    "fullName": "ComponentDefinition.constructor.new ComponentDefinition.manager",
                    "hierarchy": "Parameter manager:ComponentManager",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentManager",
                      "link": {
                        "id": "258",
                        "type": "class",
                        "slug": "componentmanager",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 52,
                            "character": 37,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L52"
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
                    "name": "template",
                    "slug": "template",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "template",
                    "fullName": "ComponentDefinition.constructor.new ComponentDefinition.template",
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
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "componentfactory",
                    "fullName": "ComponentDefinition.constructor.new ComponentDefinition.componentFactory",
                    "hierarchy": "Parameter componentFactory:ComponentFactory",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentFactory",
                      "link": {
                        "id": "122",
                        "type": "interface",
                        "slug": "componentfactory",
                        "sources": [
                          {
                            "fileName": "component.ts",
                            "line": 222,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L222"
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
            "name": "ComponentClass",
            "slug": "componentclass",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "componentclass",
            "fullName": "ComponentDefinition.ComponentClass",
            "hierarchy": "Property ComponentClass:ComponentClass",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "@glimmer/runtime/dist/types/lib/component/interfaces.d.ts",
                "line": 49,
                "character": 18,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "ComponentClass",
              "link": {
                "id": "334",
                "type": "property",
                "slug": "componentclass",
                "sources": [
                  {
                    "fileName": "@glimmer/runtime/dist/types/lib/component/interfaces.d.ts",
                    "line": 49,
                    "character": 18,
                    "url": null
                  }
                ],
                "parent": {
                  "id": "318",
                  "type": "class",
                  "slug": "componentdefinition",
                  "sources": [
                    {
                      "fileName": "component-definition.ts",
                      "line": 10,
                      "character": 40,
                      "url": null
                    }
                  ]
                }
              }
            }
          },
          {
            "name": "args",
            "slug": "args",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "args",
            "fullName": "ComponentDefinition.args",
            "hierarchy": "Property args:CapturedArguments",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component-definition.ts",
                "line": 13,
                "character": 6,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "CapturedArguments"
            }
          },
          {
            "name": "componentFactory",
            "slug": "componentfactory-1",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "componentfactory-1",
            "fullName": "ComponentDefinition.componentFactory",
            "hierarchy": "Property componentFactory:ComponentFactory",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component-definition.ts",
                "line": 11,
                "character": 18,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "ComponentFactory",
              "link": {
                "id": "122",
                "type": "interface",
                "slug": "componentfactory",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 222,
                    "character": 33,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L222"
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
            "name": "manager",
            "slug": "manager-1",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "manager-1",
            "fullName": "ComponentDefinition.manager",
            "hierarchy": "Property manager:ComponentManager<ComponentStateBucket>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "@glimmer/runtime/dist/types/lib/component/interfaces.d.ts",
                "line": 48,
                "character": 11,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "ComponentManager"
            }
          },
          {
            "name": "name",
            "slug": "name-1",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "name-1",
            "fullName": "ComponentDefinition.name",
            "hierarchy": "Property name:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "@glimmer/runtime/dist/types/lib/component/interfaces.d.ts",
                "line": 47,
                "character": 8,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "string"
            }
          },
          {
            "name": "template",
            "slug": "template-1",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "template-1",
            "fullName": "ComponentDefinition.template",
            "hierarchy": "Property template:Template<TemplateMeta>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "component-definition.ts",
                "line": 12,
                "character": 10,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Template"
            }
          }
        ],
        "methods": [
          {
            "name": "toJSON",
            "slug": "tojson",
            "flags": {
              "isExported": true,
              "isExternal": false,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "tojson",
            "fullName": "ComponentDefinition.toJSON",
            "hierarchy": "Method toJSON\n  CallSignature toJSON:object\n    TypeLiteral __type\n      Variable GlimmerDebug:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-definition.ts",
                "line": 22,
                "character": 8,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "toJSON",
                "slug": "tojson-1",
                "flags": {},
                "alias": "tojson-1",
                "fullName": "ComponentDefinition.toJSON.toJSON",
                "hierarchy": "CallSignature toJSON:object\n  TypeLiteral __type\n    Variable GlimmerDebug:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-definition.ts",
                    "line": 22,
                    "character": 8,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "object",
                  "declaration": {
                    "id": "330",
                    "type": "type-literal",
                    "attributes": {
                      "name": "__type",
                      "slug": "__type",
                      "flags": {},
                      "alias": "__type",
                      "fullName": "ComponentDefinition.toJSON.toJSON.__type",
                      "hierarchy": "TypeLiteral __type\n  Variable GlimmerDebug:string",
                      "kindString": "Type literal",
                      "variables": [
                        {
                          "name": "GlimmerDebug",
                          "slug": "glimmerdebug",
                          "flags": {
                            "isExported": false,
                            "isExternal": false,
                            "isOptional": false,
                            "isPrivate": false,
                            "isPublic": false,
                            "isProtected": false,
                            "isStatic": false
                          },
                          "alias": "glimmerdebug",
                          "fullName": "ComponentDefinition.toJSON.toJSON.__type.GlimmerDebug",
                          "hierarchy": "Variable GlimmerDebug:string",
                          "kindString": "Variable",
                          "sources": [
                            {
                              "fileName": "component-definition.ts",
                              "line": 23,
                              "character": 25,
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
                  }
                },
                "typeLiterals": [
                  {
                    "name": "__type",
                    "slug": "__type",
                    "flags": {},
                    "alias": "__type",
                    "fullName": "ComponentDefinition.toJSON.toJSON.__type",
                    "hierarchy": "TypeLiteral __type\n  Variable GlimmerDebug:string",
                    "kindString": "Type literal",
                    "variables": [
                      {
                        "name": "GlimmerDebug",
                        "slug": "glimmerdebug",
                        "flags": {
                          "isExported": false,
                          "isExternal": false,
                          "isOptional": false,
                          "isPrivate": false,
                          "isPublic": false,
                          "isProtected": false,
                          "isStatic": false
                        },
                        "alias": "glimmerdebug",
                        "fullName": "ComponentDefinition.toJSON.toJSON.__type.GlimmerDebug",
                        "hierarchy": "Variable GlimmerDebug:string",
                        "kindString": "Variable",
                        "sources": [
                          {
                            "fileName": "component-definition.ts",
                            "line": 23,
                            "character": 25,
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
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "id": "258",
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
        "hierarchy": "Class ComponentManager\n  Constructor constructor\n    ConstructorSignature new ComponentManager:ComponentManager\n      Parameter options:ConstructorOptions\n  Property env:Environment\n  Method create\n    CallSignature create:ComponentStateBucket | null\n      Parameter environment:Environment\n      Parameter definition:ComponentDefinition\n      Parameter volatileArgs:Arguments\n  Method createComponentDefinition\n    CallSignature createComponentDefinition:ComponentDefinition\n      Parameter name:string\n      Parameter template:Template<any>\n      Parameter componentFactory:Factory<Component>\n  Method didCreate\n    CallSignature didCreate:void\n      Parameter bucket:ComponentStateBucket\n  Method didCreateElement\n    CallSignature didCreateElement:void\n      Parameter bucket:ComponentStateBucket\n      Parameter element:Element\n  Method didRenderLayout\n    CallSignature didRenderLayout:void\n      Parameter bucket:ComponentStateBucket\n      Parameter bounds:Bounds\n  Method didUpdate\n    CallSignature didUpdate:void\n      Parameter bucket:ComponentStateBucket\n  Method didUpdateLayout\n    CallSignature didUpdateLayout:void\n  Method getDestructor\n    CallSignature getDestructor:Destroyable\n      Parameter bucket:ComponentStateBucket\n  Method getSelf\n    CallSignature getSelf:RootReference\n      Parameter bucket:ComponentStateBucket\n  Method getTag\n    CallSignature getTag:null\n  Method layoutFor\n    CallSignature layoutFor:CompiledDynamicProgram\n      Parameter definition:ComponentDefinition\n      Parameter bucket:ComponentStateBucket\n      Parameter env:Environment\n  Method prepareArgs\n    CallSignature prepareArgs:null\n      Parameter definition:ComponentDefinition\n      Parameter args:Arguments\n  Method update\n    CallSignature update:void\n      Parameter bucket:ComponentStateBucket\n      Parameter scope:DynamicScope\n  Method create\n    CallSignature create:ComponentManager\n      Parameter options:ConstructorOptions",
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L52"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L57"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L57"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ComponentManager",
                  "link": {
                    "id": "258",
                    "type": "class",
                    "slug": "componentmanager",
                    "sources": [
                      {
                        "fileName": "component-manager.ts",
                        "line": 52,
                        "character": 37,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L52"
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "ConstructorOptions",
                      "link": {
                        "id": "245",
                        "type": "interface",
                        "slug": "constructoroptions",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 23,
                            "character": 35,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L23"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L53"
              }
            ],
            "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L67"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L67"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ComponentStateBucket | null",
                  "types": [
                    {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "247",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                    "typeInfo": {
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentDefinition",
                      "link": {
                        "id": "318",
                        "type": "class",
                        "slug": "componentdefinition",
                        "sources": [
                          {
                            "fileName": "component-definition.ts",
                            "line": 10,
                            "character": 40,
                            "url": null
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L75"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L75"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ComponentDefinition",
                  "link": {
                    "id": "318",
                    "type": "class",
                    "slug": "componentdefinition",
                    "sources": [
                      {
                        "fileName": "component-definition.ts",
                        "line": 10,
                        "character": 40,
                        "url": null
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
                    "fullName": "ComponentManager.createComponentDefinition.createComponentDefinition.template",
                    "hierarchy": "Parameter template:Template<any>",
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
                    "fullName": "ComponentManager.createComponentDefinition.createComponentDefinition.componentFactory",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L99"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L99"
                  }
                ],
                "typeInfo": {
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "247",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L91"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L91"
                  }
                ],
                "typeInfo": {
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "247",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L96"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L96"
                  }
                ],
                "typeInfo": {
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "247",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L120"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L120"
                  }
                ],
                "typeInfo": {
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "247",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L118"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L118"
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
            "hierarchy": "Method getDestructor\n  CallSignature getDestructor:Destroyable\n    Parameter bucket:ComponentStateBucket",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 122,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L122"
              }
            ],
            "callSignatures": [
              {
                "name": "getDestructor",
                "slug": "getdestructor-1",
                "flags": {},
                "alias": "getdestructor-1",
                "fullName": "ComponentManager.getDestructor.getDestructor",
                "hierarchy": "CallSignature getDestructor:Destroyable\n  Parameter bucket:ComponentStateBucket",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "component-manager.ts",
                    "line": 122,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L122"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Destroyable"
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
                    "fullName": "ComponentManager.getDestructor.getDestructor.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "247",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L86"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L86"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "RootReference",
                  "link": {
                    "id": "148",
                    "type": "class",
                    "slug": "rootreference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 51,
                        "character": 26,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L51"
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
                    "slug": "bucket-5",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket-5",
                    "fullName": "ComponentManager.getSelf.getSelf.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "247",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L103"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L103"
                  }
                ],
                "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L79"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L79"
                  }
                ],
                "typeInfo": {
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentDefinition",
                      "link": {
                        "id": "318",
                        "type": "class",
                        "slug": "componentdefinition",
                        "sources": [
                          {
                            "fileName": "component-definition.ts",
                            "line": 10,
                            "character": 40,
                            "url": null
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
                    "slug": "bucket-6",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket-6",
                    "fullName": "ComponentManager.layoutFor.layoutFor.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "247",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L63"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L63"
                  }
                ],
                "typeInfo": {
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentDefinition",
                      "link": {
                        "id": "318",
                        "type": "class",
                        "slug": "componentdefinition",
                        "sources": [
                          {
                            "fileName": "component-definition.ts",
                            "line": 10,
                            "character": 40,
                            "url": null
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L107"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L107"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "void"
                },
                "parameters": [
                  {
                    "name": "bucket",
                    "slug": "bucket-7",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket-7",
                    "fullName": "ComponentManager.update.update.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentStateBucket",
                      "link": {
                        "id": "247",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L55"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L55"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ComponentManager",
                  "link": {
                    "id": "258",
                    "type": "class",
                    "slug": "componentmanager",
                    "sources": [
                      {
                        "fileName": "component-manager.ts",
                        "line": 52,
                        "character": 37,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L52"
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "ConstructorOptions",
                      "link": {
                        "id": "245",
                        "type": "interface",
                        "slug": "constructoroptions",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 23,
                            "character": 35,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L23"
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
      "id": "126",
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L24"
          }
        ],
        "comment": {
          "shortText": "<p>The base PathReference.</p>\n",
          "text": "<p>The base PathReference.</p>\n"
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
        "accessors": [
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
            "fullName": "ComponentPathReference.tag",
            "hierarchy": "Accessor tag\n  GetSignature __get:Tag",
            "kindString": "Accessor",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 26,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L26"
              }
            ],
            "getSignatures": [
              {
                "name": "__get",
                "slug": "__get",
                "flags": {},
                "alias": "__get",
                "fullName": "ComponentPathReference.tag.__get",
                "hierarchy": "GetSignature __get:Tag",
                "kindString": "Get signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 26,
                    "character": 18,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L26"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Tag"
                }
              }
            ]
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L28"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L28"
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
                    "fullName": "ComponentPathReference.get.get.key",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L25"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L25"
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
      "id": "247",
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L30"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L30"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ComponentStateBucket",
                  "link": {
                    "id": "247",
                    "type": "class",
                    "slug": "componentstatebucket",
                    "sources": [
                      {
                        "fileName": "component-manager.ts",
                        "line": 27,
                        "character": 33,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L27"
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "ComponentDefinition",
                      "link": {
                        "id": "318",
                        "type": "class",
                        "slug": "componentdefinition",
                        "sources": [
                          {
                            "fileName": "component-definition.ts",
                            "line": 10,
                            "character": 40,
                            "url": null
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
                    "typeInfo": {
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L30"
              }
            ],
            "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L29"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Component",
              "link": {
                "id": "98",
                "type": "class",
                "slug": "component",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 127,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L127"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L28"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L47"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L47"
                  }
                ],
                "typeInfo": {
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
      "id": "228",
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L165"
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
            "fullName": "ConditionalReference.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new ConditionalReference:ConditionalReference\n    Parameter inner:Reference<Opaque>",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "@glimmer/runtime/dist/types/lib/references.d.ts",
                "line": 15,
                "character": 13,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new ConditionalReference",
                "slug": "new_conditionalreference",
                "flags": {},
                "alias": "new_conditionalreference",
                "fullName": "ConditionalReference.constructor.new ConditionalReference",
                "hierarchy": "ConstructorSignature new ConditionalReference:ConditionalReference\n  Parameter inner:Reference<Opaque>",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "@glimmer/runtime/dist/types/lib/references.d.ts",
                    "line": 15,
                    "character": 13,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "ConditionalReference",
                  "link": {
                    "id": "228",
                    "type": "class",
                    "slug": "conditionalreference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 165,
                        "character": 33,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L165"
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
                    "name": "inner",
                    "slug": "inner",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "inner",
                    "fullName": "ConditionalReference.constructor.new ConditionalReference.inner",
                    "hierarchy": "Parameter inner:Reference<Opaque>",
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
        ],
        "properties": [
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
            "fullName": "ConditionalReference.tag",
            "hierarchy": "Property tag:Tag",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "@glimmer/runtime/dist/types/lib/references.d.ts",
                "line": 15,
                "character": 7,
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
            "name": "toBool",
            "slug": "tobool",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": true,
              "isStatic": false
            },
            "alias": "tobool",
            "fullName": "ConditionalReference.toBool",
            "hierarchy": "Method toBool\n  CallSignature toBool:boolean\n    Parameter value:Opaque",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "@glimmer/runtime/dist/types/lib/references.d.ts",
                "line": 18,
                "character": 20,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "toBool",
                "slug": "tobool-1",
                "flags": {},
                "alias": "tobool-1",
                "fullName": "ConditionalReference.toBool.toBool",
                "hierarchy": "CallSignature toBool:boolean\n  Parameter value:Opaque",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "@glimmer/runtime/dist/types/lib/references.d.ts",
                    "line": 18,
                    "character": 20,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "boolean"
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
                    "fullName": "ConditionalReference.toBool.toBool.value",
                    "hierarchy": "Parameter value:Opaque",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "Opaque"
                    }
                  }
                ]
              }
            ]
          },
          {
            "name": "value",
            "slug": "value-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "value-1",
            "fullName": "ConditionalReference.value",
            "hierarchy": "Method value\n  CallSignature value:boolean",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "@glimmer/runtime/dist/types/lib/references.d.ts",
                "line": 17,
                "character": 9,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-2",
                "flags": {},
                "alias": "value-2",
                "fullName": "ConditionalReference.value.value",
                "hierarchy": "CallSignature value:boolean",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "@glimmer/runtime/dist/types/lib/references.d.ts",
                    "line": 17,
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
            "fullName": "ConditionalReference.create",
            "hierarchy": "Method create\n  CallSignature create:PrimitiveReference<any> | ConditionalReference\n    Parameter reference:PathReference<any>",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 166,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L166"
              }
            ],
            "callSignatures": [
              {
                "name": "create",
                "slug": "create-1",
                "flags": {},
                "alias": "create-1",
                "fullName": "ConditionalReference.create.create",
                "hierarchy": "CallSignature create:PrimitiveReference<any> | ConditionalReference\n  Parameter reference:PathReference<any>",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 166,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L166"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "PrimitiveReference<any> | ConditionalReference",
                  "types": [
                    {
                      "isArray": false,
                      "name": "PrimitiveReference"
                    },
                    {
                      "isArray": false,
                      "name": "ConditionalReference",
                      "link": {
                        "id": "228",
                        "type": "class",
                        "slug": "conditionalreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 165,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L165"
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
                    "name": "reference",
                    "slug": "reference",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "reference",
                    "fullName": "ConditionalReference.create.create.reference",
                    "hierarchy": "Parameter reference:PathReference<any>",
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
      "id": "1",
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
            "line": 104,
            "character": 25,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L104"
          }
        ],
        "comment": {
          "shortText": "<p>Stores bookkeeping information about tracked properties on the target object\nand includes helper methods for manipulating and retrieving that data.</p>\n",
          "text": "<p>Computed properties (i.e., tracked getters/setters) deserve some explanation.\nA computed property is invalidated when either it is set, or one of its\ndependencies is invalidated. Therefore, we store two tags for each computed\nproperty:</p>\n<ol>\n<li>The dirtyable tag that we invalidate when the setter is invoked.</li>\n<li>A union tag (tag combinator) of the dirtyable tag and all of the computed\nproperty&#39;s dependencies&#39; tags, used by Glimmer to determine &quot;does this\ncomputed property need to be recomputed?&quot;</li>\n</ol>\n"
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
                "line": 108,
                "character": 46,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L108"
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
                    "line": 108,
                    "character": 46,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L108"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Meta",
                  "link": {
                    "id": "1",
                    "type": "class",
                    "slug": "meta",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 104,
                        "character": 25,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L104"
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "Meta",
                      "link": {
                        "id": "1",
                        "type": "class",
                        "slug": "meta",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 104,
                            "character": 25,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L104"
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
                "line": 106,
                "character": 22,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L106"
              }
            ],
            "typeInfo": {
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
                "line": 105,
                "character": 6,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L105"
              }
            ],
            "typeInfo": {
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
                "line": 107,
                "character": 19,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L107"
              }
            ],
            "typeInfo": {
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
                "line": 108,
                "character": 29,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L108"
              }
            ],
            "typeInfo": {
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
                "line": 144,
                "character": 17,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L144"
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
                    "line": 144,
                    "character": 17,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L144"
                  }
                ],
                "comment": {
                  "shortText": "<p>The tag used internally to invalidate when a tracked property is set. For\nstatic properties, this is the same DirtyableTag returned from <code>tagFor</code>.\nFor computed properties, it is the DirtyableTag used as one of the tags in\nthe tag combinator of the CP and its dependencies.</p>\n",
                  "text": "<p>The tag used internally to invalidate when a tracked property is set. For\nstatic properties, this is the same DirtyableTag returned from <code>tagFor</code>.\nFor computed properties, it is the DirtyableTag used as one of the tags in\nthe tag combinator of the CP and its dependencies.</p>\n"
                },
                "typeInfo": {
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "Key",
                      "link": {
                        "id": "54",
                        "type": "type-alias",
                        "slug": "key",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 53,
                            "character": 15,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L53"
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
                "line": 126,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L126"
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
                    "line": 126,
                    "character": 8,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L126"
                  }
                ],
                "comment": {
                  "shortText": "<p>The tag representing whether the given property should be recomputed. Used\nby e.g. Glimmer VM to detect when a property should be re-rendered. Think\nof this as the &quot;public-facing&quot; tag.</p>\n",
                  "text": "<p>For static tracked properties, this is a single DirtyableTag. For computed\nproperties, it is a combinator of the property&#39;s DirtyableTag as well as\nall of its dependencies&#39; tags.</p>\n"
                },
                "typeInfo": {
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
                    "typeInfo": {
                      "isArray": false,
                      "name": "Key",
                      "link": {
                        "id": "54",
                        "type": "type-alias",
                        "slug": "key",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 53,
                            "character": 15,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L53"
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
      "id": "193",
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
              "id": "160",
              "type": "class",
              "slug": "propertyreference",
              "sources": [
                {
                  "fileName": "references.ts",
                  "line": 65,
                  "character": 39,
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L65"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L102"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L106"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L106"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "NestedPropertyReference",
                  "link": {
                    "id": "193",
                    "type": "class",
                    "slug": "nestedpropertyreference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 102,
                        "character": 36,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L102"
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L105"
              }
            ],
            "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L104"
              }
            ],
            "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L106"
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
            "fullName": "NestedPropertyReference.tag",
            "hierarchy": "Property tag:Tag",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 103,
                "character": 12,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L103"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L121"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L121"
                  }
                ],
                "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L74"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L74"
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
                    "fullName": "NestedPropertyReference.get.get.key",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L39"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L39"
                  }
                ],
                "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L66"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L66"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "RootPropertyReference | NestedPropertyReference",
                  "types": [
                    {
                      "isArray": false,
                      "name": "RootPropertyReference",
                      "link": {
                        "id": "174",
                        "type": "class",
                        "slug": "rootpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 84,
                            "character": 34,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L84"
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
                        "id": "193",
                        "type": "class",
                        "slug": "nestedpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 102,
                            "character": 36,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L102"
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
                    "typeInfo": {
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
      "id": "160",
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
              "id": "135",
              "type": "class",
              "slug": "cachedreference",
              "sources": [
                {
                  "fileName": "references.ts",
                  "line": 33,
                  "character": 37,
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L33"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L65"
          }
        ],
        "accessors": [
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
            "fullName": "PropertyReference.tag",
            "hierarchy": "Accessor tag\n  GetSignature __get:Tag",
            "kindString": "Accessor",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 26,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L26"
              }
            ],
            "getSignatures": [
              {
                "name": "__get",
                "slug": "__get",
                "flags": {},
                "alias": "__get",
                "fullName": "PropertyReference.tag.__get",
                "hierarchy": "GetSignature __get:Tag",
                "kindString": "Get signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 26,
                    "character": 18,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L26"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Tag"
                }
              }
            ]
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L37"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L37"
                  }
                ],
                "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L74"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L74"
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
                    "fullName": "PropertyReference.get.get.key",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L39"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L39"
                  }
                ],
                "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L66"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L66"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "RootPropertyReference | NestedPropertyReference",
                  "types": [
                    {
                      "isArray": false,
                      "name": "RootPropertyReference",
                      "link": {
                        "id": "174",
                        "type": "class",
                        "slug": "rootpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 84,
                            "character": 34,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L84"
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
                        "id": "193",
                        "type": "class",
                        "slug": "nestedpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 102,
                            "character": 36,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L102"
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
                    "typeInfo": {
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
      "id": "174",
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
              "id": "160",
              "type": "class",
              "slug": "propertyreference",
              "sources": [
                {
                  "fileName": "references.ts",
                  "line": 65,
                  "character": 39,
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L65"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L84"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L87"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L87"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "RootPropertyReference",
                  "link": {
                    "id": "174",
                    "type": "class",
                    "slug": "rootpropertyreference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 84,
                        "character": 34,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L84"
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L86"
              }
            ],
            "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L87"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L85"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L97"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L97"
                  }
                ],
                "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L74"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L74"
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
                    "fullName": "RootPropertyReference.get.get.key",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L39"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L39"
                  }
                ],
                "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L66"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L66"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "RootPropertyReference | NestedPropertyReference",
                  "types": [
                    {
                      "isArray": false,
                      "name": "RootPropertyReference",
                      "link": {
                        "id": "174",
                        "type": "class",
                        "slug": "rootpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 84,
                            "character": 34,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L84"
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
                        "id": "193",
                        "type": "class",
                        "slug": "nestedpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 102,
                            "character": 36,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L102"
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
                    "typeInfo": {
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
      "id": "148",
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L51"
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
            "fullName": "RootReference.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new RootReference:RootReference\n    Parameter inner:any",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "@glimmer/reference/dist/types/lib/const.d.ts",
                "line": 4,
                "character": 13,
                "url": null
              }
            ],
            "constructorSignatures": [
              {
                "name": "new RootReference",
                "slug": "new_rootreference",
                "flags": {},
                "alias": "new_rootreference",
                "fullName": "RootReference.constructor.new RootReference",
                "hierarchy": "ConstructorSignature new RootReference:RootReference\n  Parameter inner:any",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "@glimmer/reference/dist/types/lib/const.d.ts",
                    "line": 4,
                    "character": 13,
                    "url": null
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "RootReference",
                  "link": {
                    "id": "148",
                    "type": "class",
                    "slug": "rootreference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 51,
                        "character": 26,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L51"
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
                    "name": "inner",
                    "slug": "inner",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "inner",
                    "fullName": "RootReference.constructor.new RootReference.inner",
                    "hierarchy": "Parameter inner:any",
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
            "name": "children",
            "slug": "children",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": true,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "children",
            "fullName": "RootReference.children",
            "hierarchy": "Property children:Dict<RootPropertyReference>",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 52,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L52"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Dict"
            }
          },
          {
            "name": "inner",
            "slug": "inner-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": true,
              "isStatic": false
            },
            "alias": "inner-1",
            "fullName": "RootReference.inner",
            "hierarchy": "Property inner:any",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "@glimmer/reference/dist/types/lib/const.d.ts",
                "line": 3,
                "character": 19,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "any"
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
            "fullName": "RootReference.tag",
            "hierarchy": "Property tag:Tag",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "@glimmer/reference/dist/types/lib/const.d.ts",
                "line": 4,
                "character": 7,
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
            "fullName": "RootReference.get",
            "hierarchy": "Method get\n  CallSignature get:RootPropertyReference\n    Parameter propertyKey:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 54,
                "character": 5,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L54"
              }
            ],
            "callSignatures": [
              {
                "name": "get",
                "slug": "get-1",
                "flags": {},
                "alias": "get-1",
                "fullName": "RootReference.get.get",
                "hierarchy": "CallSignature get:RootPropertyReference\n  Parameter propertyKey:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "references.ts",
                    "line": 54,
                    "character": 5,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L54"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "RootPropertyReference",
                  "link": {
                    "id": "174",
                    "type": "class",
                    "slug": "rootpropertyreference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 84,
                        "character": 34,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L84"
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
                    "name": "propertyKey",
                    "slug": "propertykey",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "propertykey",
                    "fullName": "RootReference.get.get.propertyKey",
                    "hierarchy": "Parameter propertyKey:string",
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
            "fullName": "RootReference.value",
            "hierarchy": "Method value\n  CallSignature value:any",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "@glimmer/reference/dist/types/lib/const.d.ts",
                "line": 6,
                "character": 9,
                "url": null
              }
            ],
            "callSignatures": [
              {
                "name": "value",
                "slug": "value-1",
                "flags": {},
                "alias": "value-1",
                "fullName": "RootReference.value.value",
                "hierarchy": "CallSignature value:any",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "@glimmer/reference/dist/types/lib/const.d.ts",
                    "line": 6,
                    "character": 9,
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
      "id": "18",
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
        "hierarchy": "Class UntrackedPropertyError\n  Constructor constructor\n    ConstructorSignature new UntrackedPropertyError:UntrackedPropertyError\n      Parameter target:any\n      Parameter key:string\n      Parameter message:string\n  Property key:string\n  Property target:any\n  Property Error:ErrorConstructor\n  Property message:string\n  Property name:string\n  Property stack:string\n  Method for\n    CallSignature for:UntrackedPropertyError\n      Parameter obj:any\n      Parameter key:string",
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
            "line": 212,
            "character": 35,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L212"
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
            "fullName": "UntrackedPropertyError.constructor",
            "hierarchy": "Constructor constructor\n  ConstructorSignature new UntrackedPropertyError:UntrackedPropertyError\n    Parameter target:any\n    Parameter key:string\n    Parameter message:string",
            "kindString": "Constructor",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 215,
                "character": 3,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L215"
              }
            ],
            "constructorSignatures": [
              {
                "name": "new UntrackedPropertyError",
                "slug": "new_untrackedpropertyerror",
                "flags": {},
                "alias": "new_untrackedpropertyerror",
                "fullName": "UntrackedPropertyError.constructor.new UntrackedPropertyError",
                "hierarchy": "ConstructorSignature new UntrackedPropertyError:UntrackedPropertyError\n  Parameter target:any\n  Parameter key:string\n  Parameter message:string",
                "kindString": "Constructor signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 215,
                    "character": 3,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L215"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "UntrackedPropertyError",
                  "link": {
                    "id": "18",
                    "type": "class",
                    "slug": "untrackedpropertyerror",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 212,
                        "character": 35,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L212"
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
                    "name": "target",
                    "slug": "target",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "target",
                    "fullName": "UntrackedPropertyError.constructor.new UntrackedPropertyError.target",
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
                    "fullName": "UntrackedPropertyError.constructor.new UntrackedPropertyError.key",
                    "hierarchy": "Parameter key:string",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "string"
                    }
                  },
                  {
                    "name": "message",
                    "slug": "message",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "message",
                    "fullName": "UntrackedPropertyError.constructor.new UntrackedPropertyError.message",
                    "hierarchy": "Parameter message:string",
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
            "name": "key",
            "slug": "key-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": true,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "key-1",
            "fullName": "UntrackedPropertyError.key",
            "hierarchy": "Property key:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 217,
                "character": 44,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L217"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "string"
            }
          },
          {
            "name": "target",
            "slug": "target-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": true,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "target-1",
            "fullName": "UntrackedPropertyError.target",
            "hierarchy": "Property target:any",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 217,
                "character": 27,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L217"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "any"
            }
          },
          {
            "name": "Error",
            "slug": "error",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": true
            },
            "alias": "error",
            "fullName": "UntrackedPropertyError.Error",
            "hierarchy": "Property Error:ErrorConstructor",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "typescript/lib/lib.es6.d.ts",
                "line": 917,
                "character": 19,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "ErrorConstructor"
            }
          },
          {
            "name": "message",
            "slug": "message-1",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": true
            },
            "alias": "message-1",
            "fullName": "UntrackedPropertyError.message",
            "hierarchy": "Property message:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "typescript/lib/lib.es6.d.ts",
                "line": 907,
                "character": 11,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "string"
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
              "isPublic": false,
              "isProtected": false,
              "isStatic": true
            },
            "alias": "name",
            "fullName": "UntrackedPropertyError.name",
            "hierarchy": "Property name:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "typescript/lib/lib.es6.d.ts",
                "line": 906,
                "character": 8,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "string"
            }
          },
          {
            "name": "stack",
            "slug": "stack",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": true,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": true
            },
            "alias": "stack",
            "fullName": "UntrackedPropertyError.stack",
            "hierarchy": "Property stack:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "typescript/lib/lib.es6.d.ts",
                "line": 908,
                "character": 9,
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
            "name": "for",
            "slug": "for",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": true
            },
            "alias": "for",
            "fullName": "UntrackedPropertyError.for",
            "hierarchy": "Method for\n  CallSignature for:UntrackedPropertyError\n    Parameter obj:any\n    Parameter key:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "tracked.ts",
                "line": 213,
                "character": 12,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L213"
              }
            ],
            "callSignatures": [
              {
                "name": "for",
                "slug": "for-1",
                "flags": {},
                "alias": "for-1",
                "fullName": "UntrackedPropertyError.for.for",
                "hierarchy": "CallSignature for:UntrackedPropertyError\n  Parameter obj:any\n  Parameter key:string",
                "kindString": "Call signature",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 213,
                    "character": 12,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L213"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "UntrackedPropertyError",
                  "link": {
                    "id": "18",
                    "type": "class",
                    "slug": "untrackedpropertyerror",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 212,
                        "character": 35,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L212"
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
                    "fullName": "UntrackedPropertyError.for.for.obj",
                    "hierarchy": "Parameter obj:any",
                    "kindString": "Parameter",
                    "typeInfo": {
                      "isArray": false,
                      "name": "any"
                    }
                  },
                  {
                    "name": "key",
                    "slug": "key-2",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "key-2",
                    "fullName": "UntrackedPropertyError.for.for.key",
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
          }
        ]
      }
    },
    {
      "id": "213",
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
              "id": "126",
              "type": "class",
              "slug": "componentpathreference",
              "sources": [
                {
                  "fileName": "references.ts",
                  "line": 24,
                  "character": 44,
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L24"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L140"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L142"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L142"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "UpdatableReference",
                  "link": {
                    "id": "213",
                    "type": "class",
                    "slug": "updatablereference",
                    "sources": [
                      {
                        "fileName": "references.ts",
                        "line": 140,
                        "character": 31,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L140"
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L142"
              }
            ],
            "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L141"
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
            "fullName": "UpdatableReference.get",
            "hierarchy": "Method get\n  CallSignature get:PathReference<any>\n    Parameter key:string",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "references.ts",
                "line": 28,
                "character": 5,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L28"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L28"
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
                    "fullName": "UpdatableReference.get.get.key",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L155"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L155"
                  }
                ],
                "typeInfo": {
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
                    "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L151"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L151"
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
      "id": "122",
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
            "line": 222,
            "character": 33,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L222"
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
                "line": 223,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L223"
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
                    "line": 223,
                    "character": 8,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L223"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Component",
                  "link": {
                    "id": "98",
                    "type": "class",
                    "slug": "component",
                    "sources": [
                      {
                        "fileName": "component.ts",
                        "line": 127,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component.ts#L127"
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
                    "typeInfo": {
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
      "id": "245",
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L23"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/component-manager.ts#L24"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Environment"
            }
          }
        ]
      }
    },
    {
      "id": "313",
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/template-meta.ts#L3"
          }
        ],
        "properties": [
          {
            "name": "<template-meta>",
            "slug": "_template_meta_",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "_template_meta_",
            "fullName": "ExtendedTemplateMeta.<template-meta>",
            "hierarchy": "Property <template-meta>:true",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "@glimmer/wire-format/dist/types/index.d.ts",
                "line": 111,
                "character": 21,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "true"
            }
          },
          {
            "name": "managerId",
            "slug": "managerid",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": true,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "managerid",
            "fullName": "ExtendedTemplateMeta.managerId",
            "hierarchy": "Property managerId:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "template-meta.ts",
                "line": 5,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/template-meta.ts#L5"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "string"
            }
          },
          {
            "name": "moduleName",
            "slug": "modulename",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": true,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "modulename",
            "fullName": "ExtendedTemplateMeta.moduleName",
            "hierarchy": "Property moduleName:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "@glimmer/wire-format/dist/types/index.d.ts",
                "line": 112,
                "character": 14,
                "url": null
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "string"
            }
          },
          {
            "name": "specifier",
            "slug": "specifier",
            "flags": {
              "isExported": true,
              "isExternal": true,
              "isOptional": false,
              "isPrivate": false,
              "isPublic": false,
              "isProtected": false,
              "isStatic": false
            },
            "alias": "specifier",
            "fullName": "ExtendedTemplateMeta.specifier",
            "hierarchy": "Property specifier:string",
            "kindString": "Property",
            "sources": [
              {
                "fileName": "template-meta.ts",
                "line": 4,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/template-meta.ts#L4"
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
      "id": "15",
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
            "line": 177,
            "character": 29,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L177"
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
                "line": 177,
                "character": 31,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L177"
              }
            ],
            "typeInfo": {
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
      "id": "34",
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
            "line": 226,
            "character": 46,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L226"
          }
        ],
        "comment": {
          "shortText": "<p>Function that can be used in development mode to generate more meaningful\nerror messages.</p>\n",
          "text": "<p>Function that can be used in development mode to generate more meaningful\nerror messages.</p>\n"
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
                "line": 226,
                "character": 48,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L226"
              }
            ],
            "comment": {
              "shortText": "<p>Function that can be used in development mode to generate more meaningful\nerror messages.</p>\n",
              "text": "<p>Function that can be used in development mode to generate more meaningful\nerror messages.</p>\n"
            },
            "typeInfo": {
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
                "fullName": "UntrackedPropertyErrorThrower.__call.key",
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
      }
    },
    {
      "id": "241",
      "type": "function",
      "attributes": {
        "name": "buildError",
        "slug": "builderror",
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
        "alias": "builderror",
        "fullName": "buildError",
        "hierarchy": "Function buildError\n  CallSignature buildError:void\n    Parameter obj:any\n    Parameter key:string",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "references.ts",
            "line": 79,
            "character": 19,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L79"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/references.ts#L79"
              }
            ],
            "typeInfo": {
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
                "fullName": "buildError.buildError.key",
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
      }
    },
    {
      "id": "59",
      "type": "function",
      "attributes": {
        "name": "combinatorForComputedProperties",
        "slug": "combinatorforcomputedproperties",
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
        "alias": "combinatorforcomputedproperties",
        "fullName": "combinatorForComputedProperties",
        "hierarchy": "Function combinatorForComputedProperties\n  CallSignature combinatorForComputedProperties:Tag\n    Parameter meta:Meta\n    Parameter key:Key\n    Parameter dependencies:Key[] | void",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 162,
            "character": 40,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L162"
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
                "line": 162,
                "character": 40,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L162"
              }
            ],
            "typeInfo": {
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
                "typeInfo": {
                  "isArray": false,
                  "name": "Meta",
                  "link": {
                    "id": "1",
                    "type": "class",
                    "slug": "meta",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 104,
                        "character": 25,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L104"
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
                "typeInfo": {
                  "isArray": false,
                  "name": "Key",
                  "link": {
                    "id": "54",
                    "type": "type-alias",
                    "slug": "key",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 53,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L53"
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
                "typeInfo": {
                  "isArray": false,
                  "name": "Key[] | void",
                  "types": [
                    {
                      "isArray": true,
                      "name": "Key",
                      "link": {
                        "id": "54",
                        "type": "type-alias",
                        "slug": "key",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 53,
                            "character": 15,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L53"
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
      }
    },
    {
      "id": "84",
      "type": "function",
      "attributes": {
        "name": "defaultErrorThrower",
        "slug": "defaulterrorthrower",
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
        "alias": "defaulterrorthrower",
        "fullName": "defaultErrorThrower",
        "hierarchy": "Function defaultErrorThrower\n  CallSignature defaultErrorThrower:UntrackedPropertyError\n    Parameter obj:any\n    Parameter key:string",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 230,
            "character": 28,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L230"
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
                "line": 230,
                "character": 28,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L230"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "UntrackedPropertyError",
              "link": {
                "id": "18",
                "type": "class",
                "slug": "untrackedpropertyerror",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 212,
                    "character": 35,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L212"
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
                "fullName": "defaultErrorThrower.defaultErrorThrower.key",
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
      }
    },
    {
      "id": "48",
      "type": "function",
      "attributes": {
        "name": "descriptorForTrackedComputedProperty",
        "slug": "descriptorfortrackedcomputedproperty",
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
        "alias": "descriptorfortrackedcomputedproperty",
        "fullName": "descriptorForTrackedComputedProperty",
        "hierarchy": "Function descriptorForTrackedComputedProperty\n  CallSignature descriptorForTrackedComputedProperty:PropertyDescriptor\n    Parameter target:any\n    Parameter key:any\n    Parameter descriptor:PropertyDescriptor\n    Parameter dependencies:string[]",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 36,
            "character": 45,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L36"
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
                "line": 36,
                "character": 45,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L36"
              }
            ],
            "typeInfo": {
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
                "fullName": "descriptorForTrackedComputedProperty.descriptorForTrackedComputedProperty.key",
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
                "fullName": "descriptorForTrackedComputedProperty.descriptorForTrackedComputedProperty.descriptor",
                "hierarchy": "Parameter descriptor:PropertyDescriptor",
                "kindString": "Parameter",
                "typeInfo": {
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
                "typeInfo": {
                  "isArray": true,
                  "name": "string"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "69",
      "type": "function",
      "attributes": {
        "name": "hasOwnProperty",
        "slug": "hasownproperty",
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
        "alias": "hasownproperty",
        "fullName": "hasOwnProperty",
        "hierarchy": "Function hasOwnProperty\n  CallSignature hasOwnProperty:any\n    Parameter obj:any\n    Parameter key:symbol",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 193,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L193"
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
                "line": 193,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L193"
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
                "fullName": "hasOwnProperty.hasOwnProperty.obj",
                "hierarchy": "Parameter obj:any",
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
                "fullName": "hasOwnProperty.hasOwnProperty.key",
                "hierarchy": "Parameter key:symbol",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "symbol"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "id": "80",
      "type": "function",
      "attributes": {
        "name": "hasTag",
        "slug": "hastag",
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
        "alias": "hastag",
        "fullName": "hasTag",
        "hierarchy": "Function hasTag\n  CallSignature hasTag:boolean\n    Parameter obj:any\n    Parameter key:string",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 203,
            "character": 22,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L203"
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
                "line": 203,
                "character": 22,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L203"
              }
            ],
            "typeInfo": {
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
                "fullName": "hasTag.hasTag.key",
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
      }
    },
    {
      "id": "93",
      "type": "function",
      "attributes": {
        "name": "installDevModeErrorInterceptor",
        "slug": "installdevmodeerrorinterceptor",
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
        "alias": "installdevmodeerrorinterceptor",
        "fullName": "installDevModeErrorInterceptor",
        "hierarchy": "Function installDevModeErrorInterceptor\n  CallSignature installDevModeErrorInterceptor:void\n    Parameter obj:object\n    Parameter key:string\n    Parameter throwError:UntrackedPropertyErrorThrower",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 252,
            "character": 39,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L252"
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
                "line": 252,
                "character": 39,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L252"
              }
            ],
            "comment": {
              "shortText": "<p>In development mode only, we install an ad hoc setter on properties where a\ntag is requested (i.e., it was used in a template) without being tracked. In\ncases where the property is set, we raise an error.</p>\n",
              "text": "<p>In development mode only, we install an ad hoc setter on properties where a\ntag is requested (i.e., it was used in a template) without being tracked. In\ncases where the property is set, we raise an error.</p>\n"
            },
            "typeInfo": {
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
                "typeInfo": {
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
                "typeInfo": {
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
                "typeInfo": {
                  "isArray": false,
                  "name": "UntrackedPropertyErrorThrower",
                  "link": {
                    "id": "34",
                    "type": "interface",
                    "slug": "untrackedpropertyerrorthrower",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 226,
                        "character": 46,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L226"
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
    },
    {
      "id": "55",
      "type": "function",
      "attributes": {
        "name": "installTrackedProperty",
        "slug": "installtrackedproperty",
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
        "alias": "installtrackedproperty",
        "fullName": "installTrackedProperty",
        "hierarchy": "Function installTrackedProperty\n  CallSignature installTrackedProperty:void\n    Parameter target:any\n    Parameter key:Key",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 64,
            "character": 31,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L64"
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
                "line": 64,
                "character": 31,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L64"
              }
            ],
            "comment": {
              "shortText": "<p>Installs a getter/setter for change tracking. The accessor\nacts just like a normal property, but it triggers the <code>propertyDidChange</code>\nhook when written to.</p>\n",
              "text": "<p>Values are saved on the object using a &quot;shadow key,&quot; or a symbol based on the\ntracked property name. Sets write the value to the shadow key, and gets read\nfrom it.</p>\n"
            },
            "typeInfo": {
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
                "fullName": "installTrackedProperty.installTrackedProperty.key",
                "hierarchy": "Parameter key:Key",
                "kindString": "Parameter",
                "typeInfo": {
                  "isArray": false,
                  "name": "Key",
                  "link": {
                    "id": "54",
                    "type": "type-alias",
                    "slug": "key",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 53,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L53"
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
    },
    {
      "id": "65",
      "type": "function",
      "attributes": {
        "name": "metaFor",
        "slug": "metafor",
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
        "alias": "metafor",
        "fullName": "metaFor",
        "hierarchy": "Function metaFor\n  CallSignature metaFor:Meta\n    Parameter obj:any",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 183,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L183"
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
                "line": 183,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L183"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Meta",
              "link": {
                "id": "1",
                "type": "class",
                "slug": "meta",
                "sources": [
                  {
                    "fileName": "tracked.ts",
                    "line": 104,
                    "character": 25,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L104"
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
      "id": "73",
      "type": "function",
      "attributes": {
        "name": "propertyDidChange",
        "slug": "propertydidchange",
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
        "alias": "propertydidchange",
        "fullName": "propertyDidChange",
        "hierarchy": "Function propertyDidChange\n  CallSignature propertyDidChange:void",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 197,
            "character": 21,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L197"
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
                "line": 197,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L197"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "void"
            }
          }
        ]
      }
    },
    {
      "id": "75",
      "type": "function",
      "attributes": {
        "name": "setPropertyDidChange",
        "slug": "setpropertydidchange",
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
        "alias": "setpropertydidchange",
        "fullName": "setPropertyDidChange",
        "hierarchy": "Function setPropertyDidChange\n  CallSignature setPropertyDidChange:void\n    Parameter cb:function\n      TypeLiteral __type\n        CallSignature __call:void",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 199,
            "character": 36,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L199"
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
                "line": 199,
                "character": 36,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L199"
              }
            ],
            "typeInfo": {
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
                "typeInfo": {
                  "isArray": false,
                  "name": "function",
                  "declaration": {
                    "id": "78",
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
                          "line": 199,
                          "character": 40,
                          "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L199"
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
                              "line": 199,
                              "character": 40,
                              "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L199"
                            }
                          ],
                          "typeInfo": {
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
                        "line": 199,
                        "character": 40,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L199"
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
                            "line": 199,
                            "character": 40,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L199"
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
            ]
          }
        ]
      }
    },
    {
      "id": "88",
      "type": "function",
      "attributes": {
        "name": "tagForProperty",
        "slug": "tagforproperty",
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
        "alias": "tagforproperty",
        "fullName": "tagForProperty",
        "hierarchy": "Function tagForProperty\n  CallSignature tagForProperty:Tag\n    Parameter obj:any\n    Parameter key:string\n    Parameter throwError:UntrackedPropertyErrorThrower",
        "kindString": "Function",
        "sources": [
          {
            "fileName": "tracked.ts",
            "line": 234,
            "character": 30,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L234"
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
                "line": 234,
                "character": 30,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L234"
              }
            ],
            "typeInfo": {
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
                "fullName": "tagForProperty.tagForProperty.key",
                "hierarchy": "Parameter key:string",
                "kindString": "Parameter",
                "typeInfo": {
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
                "typeInfo": {
                  "isArray": false,
                  "name": "UntrackedPropertyErrorThrower",
                  "link": {
                    "id": "34",
                    "type": "interface",
                    "slug": "untrackedpropertyerrorthrower",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 226,
                        "character": 46,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L226"
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
    },
    {
      "id": "38",
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
            "line": 17,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L17"
          },
          {
            "fileName": "tracked.ts",
            "line": 18,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L18"
          },
          {
            "fileName": "tracked.ts",
            "line": 19,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L19"
          },
          {
            "fileName": "tracked.ts",
            "line": 20,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L20"
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
                "line": 17,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L17"
              }
            ],
            "comment": {
              "shortText": "",
              "text": "",
              "tags": [
                {
                  "tagName": "decorator",
                  "paramName": "",
                  "text": "\n\nMarks a property as tracked.\n\nBy default, a component's properties are expected to be static,\nmeaning you are not able to update them and have the template update accordingly.\nMarking a property as tracked means that when that property changes,\na rerender of the component is scheduled so the template is kept up to date.\n"
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
                "line": 18,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L18"
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
                "line": 19,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/463acae/src/tracked.ts#L19"
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
    }
  ]
}
;

return main;

})));
