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
        "_glimmer_component": {
          "cachedreference": "123",
          "component": "94",
          "componentdefinition": "300",
          "componentmanager": "246",
          "componentpathreference": "114",
          "componentstatebucket": "235",
          "conditionalreference": "216",
          "meta": "1",
          "nestedpropertyreference": "181",
          "propertyreference": "148",
          "rootpropertyreference": "162",
          "rootreference": "136",
          "untrackedpropertyerror": "18",
          "updatablereference": "201",
          "componentfactory": "110",
          "constructoroptions": "233",
          "interceptors": "15",
          "untrackedpropertyerrorthrower": "30",
          "builderror": "229",
          "combinatorforcomputedproperties": "55",
          "defaulterrorthrower": "80",
          "descriptorfortrackedcomputedproperty": "44",
          "hasownproperty": "65",
          "hastag": "76",
          "installdevmodeerrorinterceptor": "89",
          "installtrackedproperty": "51",
          "metafor": "61",
          "propertydidchange": "69",
          "setpropertydidchange": "71",
          "tagforproperty": "84",
          "tracked": "34"
        },
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
        "hierarchy": "Global @glimmer/component\n  Class CachedReference<T>\n    TypeParameter T\n    Property _lastRevision:number | null\n    Property _lastValue:any\n    Accessor tag\n      GetSignature __get:Tag\n    Method compute\n      CallSignature compute:T\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n  Class Component\n    Constructor constructor\n      ConstructorSignature new Component:Component\n        Parameter options:object\n    Property args:object\n    Property debugName:string\n    Property element:Element\n    Method didInsertElement\n      CallSignature didInsertElement:void\n    Method didUpdate\n      CallSignature didUpdate:void\n    Method toString\n      CallSignature toString:string\n    Method create\n      CallSignature create:Component\n        Parameter injections:any\n  Class ComponentDefinition\n    Constructor constructor\n      ConstructorSignature new ComponentDefinition:ComponentDefinition\n        Parameter name:string\n        Parameter manager:ComponentManager\n        Parameter template:Template<TemplateMeta>\n        Parameter componentFactory:ComponentFactory\n    Property ComponentClass:ComponentClass\n    Property args:CapturedArguments\n    Property componentFactory:ComponentFactory\n    Property manager:ComponentManager<ComponentStateBucket>\n    Property name:string\n    Property template:Template<TemplateMeta>\n    Method toJSON\n      CallSignature toJSON:object\n        TypeLiteral __type\n          Variable GlimmerDebug:string\n  Class ComponentManager\n    Constructor constructor\n      ConstructorSignature new ComponentManager:ComponentManager\n        Parameter options:ConstructorOptions\n    Property env:Environment\n    Method create\n      CallSignature create:ComponentStateBucket | null\n        Parameter environment:Environment\n        Parameter definition:ComponentDefinition\n        Parameter volatileArgs:Arguments\n    Method createComponentDefinition\n      CallSignature createComponentDefinition:ComponentDefinition\n        Parameter name:string\n        Parameter template:Template<any>\n        Parameter componentFactory:Factory<Component>\n    Method didCreate\n      CallSignature didCreate:void\n        Parameter bucket:ComponentStateBucket\n    Method didCreateElement\n      CallSignature didCreateElement:void\n        Parameter bucket:ComponentStateBucket\n        Parameter element:Element\n    Method didRenderLayout\n      CallSignature didRenderLayout:void\n        Parameter bucket:ComponentStateBucket\n        Parameter bounds:Bounds\n    Method didUpdate\n      CallSignature didUpdate:void\n        Parameter bucket:ComponentStateBucket\n    Method didUpdateLayout\n      CallSignature didUpdateLayout:void\n    Method getDestructor\n      CallSignature getDestructor:null\n    Method getSelf\n      CallSignature getSelf:RootReference\n        Parameter bucket:ComponentStateBucket\n    Method getTag\n      CallSignature getTag:null\n    Method layoutFor\n      CallSignature layoutFor:CompiledDynamicProgram\n        Parameter definition:ComponentDefinition\n        Parameter bucket:ComponentStateBucket\n        Parameter env:Environment\n    Method prepareArgs\n      CallSignature prepareArgs:null\n        Parameter definition:ComponentDefinition\n        Parameter args:Arguments\n    Method update\n      CallSignature update:void\n        Parameter bucket:ComponentStateBucket\n        Parameter scope:DynamicScope\n    Method create\n      CallSignature create:ComponentManager\n        Parameter options:ConstructorOptions\n  Class ComponentPathReference<T>\n    TypeParameter T\n    Accessor tag\n      GetSignature __get:Tag\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:T\n  Class ComponentStateBucket\n    Constructor constructor\n      ConstructorSignature new ComponentStateBucket:ComponentStateBucket\n        Parameter definition:ComponentDefinition\n        Parameter args:CapturedArguments\n        Parameter owner:Owner\n    Property args:CapturedArguments\n    Property component:Component\n    Property name:string\n    Method namedArgsSnapshot\n      CallSignature namedArgsSnapshot:Readonly<Dict<any | void>>\n  Class ConditionalReference\n    Constructor constructor\n      ConstructorSignature new ConditionalReference:ConditionalReference\n        Parameter inner:Reference<Opaque>\n    Property tag:Tag\n    Method toBool\n      CallSignature toBool:boolean\n        Parameter value:Opaque\n    Method value\n      CallSignature value:boolean\n    Method create\n      CallSignature create:PrimitiveReference<any> | ConditionalReference\n        Parameter reference:PathReference<any>\n  Class Meta\n    Constructor constructor\n      ConstructorSignature new Meta:Meta\n        Parameter parent:Meta\n    Property computedPropertyTags:Dict<TagWrapper<DirtyableTag>>\n    Property tags:Dict<Tag>\n    Property trackedProperties:Dict<boolean>\n    Property trackedPropertyDependencies:Dict<string[]>\n    Method dirtyableTagFor\n      CallSignature dirtyableTagFor:TagWrapper<DirtyableTag>\n        Parameter key:Key\n    Method tagFor\n      CallSignature tagFor:Tag\n        Parameter key:Key\n  Class NestedPropertyReference\n    Constructor constructor\n      ConstructorSignature new NestedPropertyReference:NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n    Property _parentObjectTag:TagWrapper<UpdatableTag>\n    Property _parentReference:PathReference<any>\n    Property _propertyKey:string\n    Property tag:Tag\n    Method compute\n      CallSignature compute:any\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n    Method create\n      CallSignature create:RootPropertyReference | NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n  Class PropertyReference\n    Accessor tag\n      GetSignature __get:Tag\n    Method compute\n      CallSignature compute:any\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n    Method create\n      CallSignature create:RootPropertyReference | NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n  Class RootPropertyReference\n    Constructor constructor\n      ConstructorSignature new RootPropertyReference:RootPropertyReference\n        Parameter parentValue:object\n        Parameter propertyKey:string\n    Property _parentValue:object\n    Property _propertyKey:string\n    Property tag:Tag\n    Method compute\n      CallSignature compute:any\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method value\n      CallSignature value:any\n    Method create\n      CallSignature create:RootPropertyReference | NestedPropertyReference\n        Parameter parentReference:PathReference<any>\n        Parameter propertyKey:string\n  Class RootReference\n    Constructor constructor\n      ConstructorSignature new RootReference:RootReference\n        Parameter inner:any\n    Property children:Dict<RootPropertyReference>\n    Property inner:any\n    Property tag:Tag\n    Method get\n      CallSignature get:RootPropertyReference\n        Parameter propertyKey:string\n    Method value\n      CallSignature value:any\n  Class UntrackedPropertyError\n    Constructor constructor\n      ConstructorSignature new UntrackedPropertyError:UntrackedPropertyError\n        Parameter target:any\n        Parameter key:string\n        Parameter message:string\n    Property key:string\n    Property target:any\n    Property Error:ErrorConstructor\n    Property message:string\n    Property name:string\n    Property stack:string\n  Class UpdatableReference<T>\n    TypeParameter T\n    Constructor constructor\n      ConstructorSignature new UpdatableReference:UpdatableReference\n        Parameter value:T\n    Property _value:T\n    Property tag:TagWrapper<DirtyableTag>\n    Method get\n      CallSignature get:PathReference<any>\n        Parameter key:string\n    Method update\n      CallSignature update:void\n        Parameter value:T\n    Method value\n      CallSignature value:T\n  Interface ComponentFactory\n    Method create\n      CallSignature create:Component\n        Parameter injections:object\n  Interface ConstructorOptions\n    Property env:Environment\n  Interface Interceptors\n    IndexSignature __index:boolean\n      Parameter key:string\n  Interface UntrackedPropertyErrorThrower\n    CallSignature __call:void\n      Parameter obj:any\n      Parameter key:string\n  TypeAlias Key:string\n  Variable META:symbol\n  Variable hOP:hasOwnProperty\n  Function buildError\n    CallSignature buildError:void\n      Parameter obj:any\n      Parameter key:string\n  Function combinatorForComputedProperties\n    CallSignature combinatorForComputedProperties:Tag\n      Parameter meta:Meta\n      Parameter key:Key\n      Parameter dependencies:Key[] | void\n  Function defaultErrorThrower\n    CallSignature defaultErrorThrower:UntrackedPropertyError\n      Parameter obj:any\n      Parameter key:string\n  Function descriptorForTrackedComputedProperty\n    CallSignature descriptorForTrackedComputedProperty:PropertyDescriptor\n      Parameter target:any\n      Parameter key:any\n      Parameter descriptor:PropertyDescriptor\n      Parameter dependencies:string[]\n  Function hasOwnProperty\n    CallSignature hasOwnProperty:any\n      Parameter obj:any\n      Parameter key:symbol\n  Function hasTag\n    CallSignature hasTag:boolean\n      Parameter obj:any\n      Parameter key:string\n  Function installDevModeErrorInterceptor\n    CallSignature installDevModeErrorInterceptor:void\n      Parameter obj:object\n      Parameter key:string\n      Parameter throwError:UntrackedPropertyErrorThrower\n  Function installTrackedProperty\n    CallSignature installTrackedProperty:void\n      Parameter target:any\n      Parameter key:Key\n  Function metaFor\n    CallSignature metaFor:Meta\n      Parameter obj:any\n  Function propertyDidChange\n    CallSignature propertyDidChange:void\n  Function setPropertyDidChange\n    CallSignature setPropertyDidChange:void\n      Parameter cb:function\n        TypeLiteral __type\n          CallSignature __call:void\n  Function tagForProperty\n    CallSignature tagForProperty:Tag\n      Parameter obj:any\n      Parameter key:string\n      Parameter throwError:UntrackedPropertyErrorThrower\n  Function tracked\n    CallSignature tracked:MethodDecorator\n      Parameter dependencies:string[]\n    CallSignature tracked:any\n      Parameter target:any\n      Parameter key:any\n    CallSignature tracked:PropertyDescriptor\n      Parameter target:any\n      Parameter key:any\n      Parameter descriptor:PropertyDescriptor",
        "packageInfo": {
          "name": "@glimmer/component",
          "version": "0.3.8",
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
        "readme": "<h1 id=\"-glimmer-component\">@glimmer/component</h1>\n<p><a href=\"https://badge.fury.io/js/%40glimmer%2Fcomponent\"><img src=\"https://badge.fury.io/js/%40glimmer%2Fcomponent.svg\" alt=\"npm version\"></a>\n<a href=\"http://travis-ci.org/glimmerjs/glimmer-component\"><img src=\"https://secure.travis-ci.org/glimmerjs/glimmer-component.svg?branch=master\" alt=\"Build Status\"></a></p>\n<h2 id=\"instalation\">Instalation</h2>\n<p>Add this package to your project with Yarn:</p>\n<pre><code class=\"lang-bash\">yarn add @glimmer/component\n</code></pre>\n<p>Or alternatively with npm:</p>\n<pre><code class=\"lang-bash\">npm install --save-dev @glimmer/component\n</code></pre>\n<h2 id=\"usage\">Usage</h2>\n<p>To use this in a Glimmer application, import the package and export an extended class:</p>\n<pre><code><span class=\"hljs-keyword\">import</span> <span class=\"hljs-type\">Component</span> from '<span class=\"hljs-meta\">@glimmer</span>/component';\n\nexport <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">MyComponent</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">Component</span> </span>{\n}\n</code></pre><h2 id=\"development\">Development</h2>\n<p>For the development of this project, Yarn is preferred over npm. However, any Yarn command can be replaced by the npm equivalent.\nSee <a href=\"https://yarnpkg.com/lang/en/docs/migrating-from-npm/\">Migration from npm</a> in the Yarn documentation for a list of the equivalent commands.</p>\n<ul>\n<li>Clone repository locally: <code>git clone https://github.com/glimmerjs/glimmer-application-pipeline.git</code></li>\n<li>Install dependencies: <code>yarn</code>, or <code>yarn install</code></li>\n<li>Open project in your editor of choice and make your changes</li>\n<li>Run tests: <code>yarn run test</code></li>\n</ul>\n<h2 id=\"contributing\">Contributing</h2>\n<p>Bug reports and pull requests are welcome on GitHub at <a href=\"https://github.com/glimmerjs/glimmer-component\">https://github.com/glimmerjs/glimmer-component</a>.</p>\n<h2 id=\"acknowledgements\">Acknowledgements</h2>\n<p>Thanks to <a href=\"http://monegraph.com\">Monegraph</a> for funding the initial development\nof this library.</p>\n<h2 id=\"license\">License</h2>\n<p>MIT License.</p>\n",
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
                "line": 52,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L52"
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
                "line": 180,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L180"
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
                "line": 191,
                "character": 7,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L191"
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
              "id": "123"
            },
            {
              "type": "class",
              "id": "94"
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
              "id": "1"
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
              "id": "18"
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
              "id": "110"
            },
            {
              "type": "interface",
              "id": "233"
            },
            {
              "type": "interface",
              "id": "15"
            },
            {
              "type": "interface",
              "id": "30"
            }
          ]
        },
        "functions": {
          "data": [
            {
              "type": "function",
              "id": "229"
            },
            {
              "type": "function",
              "id": "55"
            },
            {
              "type": "function",
              "id": "80"
            },
            {
              "type": "function",
              "id": "44"
            },
            {
              "type": "function",
              "id": "65"
            },
            {
              "type": "function",
              "id": "76"
            },
            {
              "type": "function",
              "id": "89"
            },
            {
              "type": "function",
              "id": "51"
            },
            {
              "type": "function",
              "id": "61"
            },
            {
              "type": "function",
              "id": "69"
            },
            {
              "type": "function",
              "id": "71"
            },
            {
              "type": "function",
              "id": "84"
            },
            {
              "type": "function",
              "id": "34"
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
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L24"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L33"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L34"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L35"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L26"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L26"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L37"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L37"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L28"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L28"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L39"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L39"
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
      "id": "94",
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
            "line": 127,
            "character": 15,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L127"
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
                "line": 169,
                "character": 3,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L169"
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
                    "line": 169,
                    "character": 3,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L169"
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
                    "id": "94",
                    "type": "class",
                    "slug": "component",
                    "sources": [
                      {
                        "fileName": "component.ts",
                        "line": 127,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L127"
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
                "line": 165,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L165"
              }
            ],
            "comment": {
              "shortText": "<p>Named arguments passed to the component from its parent component.\nThey can be accessed in JavaScript via <code>this.args.argumentName</code> and in the template via <code>@argumentName</code>.</p>\n",
              "text": "<p>Say you have the following component, which will have two <code>args</code>, <code>firstName</code> and <code>lastName</code>:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">my-component</span> @<span class=\"hljs-attr\">firstName</span>=<span class=\"hljs-string\">\"Arthur\"</span> @<span class=\"hljs-attr\">lastName</span>=<span class=\"hljs-string\">\"Dent\"</span> /&gt;</span></span>\n</code></pre>\n<p>If you needed to calculate <code>fullName</code> by combining both of them, you would do:</p>\n<pre><code class=\"lang-ts\">didInsertElement() {\n  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">`Hi, my full name is <span class=\"hljs-subst\">${this.args.firstName}</span> <span class=\"hljs-subst\">${this.args.lastName}</span>`</span>);\n}\n</code></pre>\n<p>While in the template you could do:</p>\n<pre><code class=\"lang-hbs\"><span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">p</span>&gt;</span>Welcome, </span><span class=\"hljs-template-variable\">{{@firstName}}</span><span class=\"xml\"> </span><span class=\"hljs-template-variable\">{{@lastName}}</span><span class=\"xml\">!<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">p</span>&gt;</span></span>\n</code></pre>\n"
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
                "line": 138,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L138"
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
                "line": 133,
                "character": 9,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L133"
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
                "line": 186,
                "character": 18,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L186"
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
                    "line": 186,
                    "character": 18,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L186"
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
                "line": 192,
                "character": 11,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L192"
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
                    "line": 192,
                    "character": 11,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L192"
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
                "line": 194,
                "character": 10,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L194"
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
                    "line": 194,
                    "character": 10,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L194"
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
                "line": 167,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L167"
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
                    "line": 167,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L167"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Component",
                  "link": {
                    "id": "94",
                    "type": "class",
                    "slug": "component",
                    "sources": [
                      {
                        "fileName": "component.ts",
                        "line": 127,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L127"
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
            "character": 40,
            "url": null
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L52"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L57"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L57"
                  }
                ],
                "typeInfo": {
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
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L52"
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
                        "id": "233",
                        "type": "interface",
                        "slug": "constructoroptions",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 23,
                            "character": 35,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L23"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L53"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L67"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L67"
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
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L27"
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
                        "id": "300",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L75"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L75"
                  }
                ],
                "typeInfo": {
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L99"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L99"
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
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L91"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L91"
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
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L96"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L96"
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
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L120"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L120"
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
                        "id": "235",
                        "type": "class",
                        "slug": "componentstatebucket",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 27,
                            "character": 33,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L118"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L118"
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
            "hierarchy": "Method getDestructor\n  CallSignature getDestructor:null",
            "kindString": "Method",
            "sources": [
              {
                "fileName": "component-manager.ts",
                "line": 122,
                "character": 15,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L122"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L122"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L86"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L86"
                  }
                ],
                "typeInfo": {
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
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L51"
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
                    "typeInfo": {
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
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L103"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L103"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L79"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L79"
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
                        "id": "300",
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
                    "slug": "bucket-5",
                    "flags": {
                      "isOptional": false,
                      "isRest": false
                    },
                    "alias": "bucket-5",
                    "fullName": "ComponentManager.layoutFor.layoutFor.bucket",
                    "hierarchy": "Parameter bucket:ComponentStateBucket",
                    "kindString": "Parameter",
                    "typeInfo": {
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
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L63"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L63"
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
                        "id": "300",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L107"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L107"
                  }
                ],
                "typeInfo": {
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
                    "typeInfo": {
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
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L55"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L55"
                  }
                ],
                "typeInfo": {
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
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L52"
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
                        "id": "233",
                        "type": "interface",
                        "slug": "constructoroptions",
                        "sources": [
                          {
                            "fileName": "component-manager.ts",
                            "line": 23,
                            "character": 35,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L23"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L24"
          }
        ],
        "comment": {
          "shortText": "<p>The base PathReference.</p>\n",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L26"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L26"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L28"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L28"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L25"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L25"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L27"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L30"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L30"
                  }
                ],
                "typeInfo": {
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
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L27"
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
                        "id": "300",
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L30"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L29"
              }
            ],
            "typeInfo": {
              "isArray": false,
              "name": "Component",
              "link": {
                "id": "94",
                "type": "class",
                "slug": "component",
                "sources": [
                  {
                    "fileName": "component.ts",
                    "line": 127,
                    "character": 15,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L127"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L28"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L47"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L47"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L165"
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
            "line": 103,
            "character": 25,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L103"
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
                "line": 107,
                "character": 46,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L107"
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
                    "line": 107,
                    "character": 46,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L107"
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
                        "line": 103,
                        "character": 25,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L103"
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
                            "line": 103,
                            "character": 25,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L103"
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
                "line": 105,
                "character": 22,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L105"
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
                "line": 104,
                "character": 6,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L104"
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
                "line": 106,
                "character": 19,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L106"
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
                "line": 107,
                "character": 29,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L107"
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
                "line": 143,
                "character": 17,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L143"
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
                    "line": 143,
                    "character": 17,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L143"
                  }
                ],
                "comment": {
                  "shortText": "<p>The tag used internally to invalidate when a tracked property is set. For\nstatic properties, this is the same DirtyableTag returned from <code>tagFor</code>.\nFor computed properties, it is the DirtyableTag used as one of the tags in\nthe tag combinator of the CP and its dependencies.</p>\n",
                  "text": ""
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
                        "id": "50",
                        "type": "type-alias",
                        "slug": "key",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 52,
                            "character": 15,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L52"
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
                "line": 125,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L125"
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
                    "line": 125,
                    "character": 8,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L125"
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
                        "id": "50",
                        "type": "type-alias",
                        "slug": "key",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 52,
                            "character": 15,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L52"
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
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L65"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L102"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L106"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L106"
                  }
                ],
                "typeInfo": {
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
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L102"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L105"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L104"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L106"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L103"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L121"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L121"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L74"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L74"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L39"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L39"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L66"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L66"
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
                        "id": "162",
                        "type": "class",
                        "slug": "rootpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 84,
                            "character": 34,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L84"
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
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L102"
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
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L33"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L65"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L26"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L26"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L37"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L37"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L74"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L74"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L39"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L39"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L66"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L66"
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
                        "id": "162",
                        "type": "class",
                        "slug": "rootpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 84,
                            "character": 34,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L84"
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
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L102"
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
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L65"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L84"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L87"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L87"
                  }
                ],
                "typeInfo": {
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
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L84"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L86"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L87"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L85"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L97"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L97"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L74"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L74"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L39"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L39"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L66"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L66"
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
                        "id": "162",
                        "type": "class",
                        "slug": "rootpropertyreference",
                        "sources": [
                          {
                            "fileName": "references.ts",
                            "line": 84,
                            "character": 34,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L84"
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
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L102"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L51"
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
            "line": 211,
            "character": 35,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L211"
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
                  "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L24"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L140"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L142"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L142"
                  }
                ],
                "typeInfo": {
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
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L140"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L142"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L141"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L28"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L28"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L155"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L155"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L151"
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
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L151"
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
      "id": "110",
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
            "line": 201,
            "character": 33,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L201"
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
                "line": 202,
                "character": 8,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L202"
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
                    "line": 202,
                    "character": 8,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L202"
                  }
                ],
                "typeInfo": {
                  "isArray": false,
                  "name": "Component",
                  "link": {
                    "id": "94",
                    "type": "class",
                    "slug": "component",
                    "sources": [
                      {
                        "fileName": "component.ts",
                        "line": 127,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component.ts#L127"
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L23"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/component-manager.ts#L24"
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
            "line": 176,
            "character": 29,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L176"
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
                "line": 176,
                "character": 31,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L176"
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
      "id": "30",
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
            "line": 221,
            "character": 46,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L221"
          }
        ],
        "comment": {
          "shortText": "<p>Function that can be used in development mode to generate more meaningful\nerror messages.</p>\n",
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
                "line": 221,
                "character": 48,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L221"
              }
            ],
            "comment": {
              "shortText": "<p>Function that can be used in development mode to generate more meaningful\nerror messages.</p>\n",
              "text": ""
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
      "id": "229",
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L79"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/references.ts#L79"
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
      "id": "55",
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
            "line": 161,
            "character": 40,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L161"
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
                "line": 161,
                "character": 40,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L161"
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
                        "line": 103,
                        "character": 25,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L103"
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
                    "id": "50",
                    "type": "type-alias",
                    "slug": "key",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 52,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L52"
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
                        "id": "50",
                        "type": "type-alias",
                        "slug": "key",
                        "sources": [
                          {
                            "fileName": "tracked.ts",
                            "line": 52,
                            "character": 15,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L52"
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
      "id": "80",
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
            "line": 225,
            "character": 28,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L225"
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
                "line": 225,
                "character": 28,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L225"
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
                    "line": 211,
                    "character": 35,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L211"
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
      "id": "44",
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
            "line": 35,
            "character": 45,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L35"
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
                "line": 35,
                "character": 45,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L35"
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
      "id": "65",
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
            "line": 192,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L192"
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
                "line": 192,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L192"
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
      "id": "76",
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
            "line": 202,
            "character": 22,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L202"
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
                "line": 202,
                "character": 22,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L202"
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
      "id": "89",
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
            "line": 247,
            "character": 39,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L247"
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
                "line": 247,
                "character": 39,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L247"
              }
            ],
            "comment": {
              "shortText": "<p>In development mode only, we install an ad hoc setter on properties where a\ntag is requested (i.e., it was used in a template) without being tracked. In\ncases where the property is set, we raise an error.</p>\n",
              "text": ""
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
                    "id": "30",
                    "type": "interface",
                    "slug": "untrackedpropertyerrorthrower",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 221,
                        "character": 46,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L221"
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
      "id": "51",
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
            "line": 63,
            "character": 31,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L63"
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
                "line": 63,
                "character": 31,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L63"
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
                    "id": "50",
                    "type": "type-alias",
                    "slug": "key",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 52,
                        "character": 15,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L52"
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
      "id": "61",
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
            "line": 182,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L182"
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
                "line": 182,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L182"
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
                    "line": 103,
                    "character": 25,
                    "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L103"
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
      "id": "69",
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
            "line": 196,
            "character": 21,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L196"
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
                "line": 196,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L196"
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
      "id": "71",
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
            "line": 198,
            "character": 36,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L198"
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
                "line": 198,
                "character": 36,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L198"
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
                    "id": "74",
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
                          "line": 198,
                          "character": 40,
                          "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L198"
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
                              "line": 198,
                              "character": 40,
                              "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L198"
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
                        "line": 198,
                        "character": 40,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L198"
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
                            "line": 198,
                            "character": 40,
                            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L198"
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
      "id": "84",
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
            "line": 229,
            "character": 30,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L229"
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
                "line": 229,
                "character": 30,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L229"
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
                    "id": "30",
                    "type": "interface",
                    "slug": "untrackedpropertyerrorthrower",
                    "sources": [
                      {
                        "fileName": "tracked.ts",
                        "line": 221,
                        "character": 46,
                        "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L221"
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
      "id": "34",
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
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L16"
          },
          {
            "fileName": "tracked.ts",
            "line": 17,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L17"
          },
          {
            "fileName": "tracked.ts",
            "line": 18,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L18"
          },
          {
            "fileName": "tracked.ts",
            "line": 19,
            "character": 23,
            "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L19"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L16"
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
                "line": 17,
                "character": 23,
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L17"
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
                "url": "https://github.com/glimmerjs/glimmer-component/blob/1bfa980/src/tracked.ts#L18"
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
