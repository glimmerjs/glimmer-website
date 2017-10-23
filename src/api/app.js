(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()})(0,function(){"use strict"
function e(e){return e[yt]}function t(e,t){e[yt]=t}function s(e){if(null===e||void 0===e)throw new Error(`Expected value to be present`)
return e}function n(e,t){if(null===e||void 0===e)throw new Error(t)
return e}function i(){return new Error("unreachable")}function r(e){return e-4}function a(e,t){if(!e)throw new Error(t||"assertion failure")}function o(e){for(let t=1;t<arguments.length;t++){let s=arguments[t]
if(null===s||"object"!=typeof s)continue
let n=_t(s)
for(let t=0;t<n.length;t++){let i=n[t]
e[i]=s[i]}}return e}function l(e){let t=new Array(e)
for(let s=0;s<e;s++)t[s]=null
return t}function h(e){return e._guid=++Et}function c(e){return e._guid||h(e)}function u(){}function p(){return new u}function d(e){let t=Ut.length
Ut.push(e=>e.value()),$t.push((e,t)=>e.validate(t)),e.id=t}function m({tag:e}){return e===zt}function f(e){return e===zt}function g(e){let t=[]
for(let s=0,n=e.length;s<n;s++){let n=e[s].tag
if(n===Wt)return Wt
n!==zt&&t.push(n)}return v(t)}function y(e){let t=[],s=e.head()
for(;null!==s;){let n=s.tag
if(n===Wt)return Wt
n!==zt&&t.push(n),s=e.nextNode(s)}return v(t)}function b(e){let t=[]
for(let s=0,n=e.length;s<n;s++){let n=e[s]
if(n===Wt)return Wt
n!==zt&&t.push(n)}return v(t)}function v(e){switch(e.length){case 0:return zt
case 1:return e[0]
case 2:return Xt.create(e[0],e[1])
default:return Kt.create(e)}}function k(e,t){return new Qt(e,t)}function w(e){return e!==ts}function S(e){return"function"!=typeof e.toString?"":String(e)}function _(e){return x(e)?"":String(e)}function E(e){return x(e)?"":T(e)?e:C(e)?e.toHTML():N(e)?e:String(e)}function x(e){return null===e||void 0===e||"function"!=typeof e.toString}function C(e){return"object"==typeof e&&null!==e&&"function"==typeof e.toHTML}function N(e){return"object"==typeof e&&null!==e&&"number"==typeof e.nodeType}function A(e){return N(e)&&11===e.nodeType}function T(e){return"string"==typeof e}function O(e){return"object"==typeof e&&null!==e&&e[Is]}function D(e){let t=e.element,s=e.nextSibling
return null===s?t.lastChild:s.previousSibling}function B(e,t,s){return new zs(e,t,s)}function M(e,t){return new Ws(e,t)}function L(e,t){let s=e.parentElement(),n=e.firstNode(),i=e.lastNode(),r=n
for(;r;){let e=r.nextSibling
if(s.insertBefore(r,t),r===i)return e
r=e}return null}function j(e){let t=e.parentElement(),s=e.firstNode(),n=e.lastNode(),i=s
for(;i;){let e=i.nextSibling
if(t.removeChild(i),i===n)return e
i=e}return null}function I(e){return 3===e.nodeType}function F(e){return 8===e.nodeType}function R(e){let t=e.nodeValue.match(/^%\+bounds:(\d+)%$/)
return t&&t[1]?Number(t[1]):null}function P(e){let t=e.nodeValue.match(/^%\-bounds:(\d+)%$/)
return t&&t[1]?Number(t[1]):null}function V(e){return 1===e.nodeType}function U(e){return 8===e.nodeType&&"%glimmer%"===e.nodeValue}function $(e){return 8===e.nodeType&&"%sep%"===e.nodeValue}function H(e){return 8===e.nodeType&&"%empty%"===e.nodeValue}function z(e){let t=n(e.parentNode,`cannot remove a detached node`),s=e.nextSibling
return t.removeChild(e),s}function W(e,t){for(let s=0;s<e.length;s++){let n=e[s]
if(n.name===t)return n}}function G(){return new Error("Not implemented")}function J(e){return function(t){return Array.isArray(t)&&t[0]===e}}function Y(e,t){let s=new mn(t)
return e.compile(s),s.compile()}function X(e,t){return new _n(e,t)}function K(e){return"object"==typeof e&&null!==e&&"function"==typeof e.compile}function q(e,t,s){let n=e[1],i=e[2],r=e[3]
Z(i,s),r?s.dynamicAttr(n,r,t):s.dynamicAttr(n,null,t)}function Z(e,t){Array.isArray(e)?Bn.compile(e,t):t.primitive(e)}function Q(e,t){if(!e)return 0
for(let s=0;s<e.length;s++)Z(e[s],t)
return e.length}function ee(e=new jn,t=new In){return e.add("if",(e,t,n,i,r)=>{if(!e||1!==e.length)throw new Error(`SYNTAX ERROR: #if requires a single argument`)
r.startLabels(),r.pushFrame(),r.returnTo("END"),Z(e[0],r),r.test("environment"),r.enter(1),r.jumpUnless("ELSE"),r.invokeStatic(s(n)),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStatic(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),e.add("unless",(e,t,n,i,r)=>{if(!e||1!==e.length)throw new Error(`SYNTAX ERROR: #unless requires a single argument`)
r.startLabels(),r.pushFrame(),r.returnTo("END"),Z(e[0],r),r.test("environment"),r.enter(1),r.jumpIf("ELSE"),r.invokeStatic(s(n)),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStatic(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),e.add("with",(e,t,n,i,r)=>{if(!e||1!==e.length)throw new Error(`SYNTAX ERROR: #with requires a single argument`)
r.startLabels(),r.pushFrame(),r.returnTo("END"),Z(e[0],r),r.dup(),r.test("environment"),r.enter(2),r.jumpUnless("ELSE"),r.invokeStatic(s(n),1),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStatic(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),e.add("each",(e,t,n,i,r)=>{r.startLabels(),r.pushFrame(),r.returnTo("END"),t&&"key"===t[0][0]?Z(t[1][0],r):r.primitive(null),Z(e[0],r),r.enter(2),r.putIterator(),r.jumpUnless("ELSE"),r.pushFrame(),r.returnTo("ITER"),r.dup(Lt.fp,1),r.enterList("BODY"),r.label("ITER"),r.iterate("BREAK"),r.label("BODY"),r.invokeStatic(s(n),2),r.pop(2),r.exit(),r.return(),r.label("BREAK"),r.exitList(),r.popFrame(),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStatic(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),e.add("-in-element",(e,t,n,i,r)=>{if(!e||1!==e.length)throw new Error(`SYNTAX ERROR: #-in-element requires a single argument`)
if(r.startLabels(),r.pushFrame(),r.returnTo("END"),t&&t[0].length){let e=t[0],s=t[1]
if(1!==e.length||"nextSibling"!==e[0])throw new Error(`SYNTAX ERROR: #-in-element does not take a \`${e[0]}\` option`)
Z(s[0],r)}else Z(null,r)
Z(e[0],r),r.dup(),r.test("simple"),r.enter(3),r.jumpUnless("ELSE"),r.pushRemoteElement(),r.invokeStatic(s(n)),r.popRemoteElement(),r.label("ELSE"),r.exit(),r.return(),r.label("END"),r.popFrame(),r.stopLabels()}),e.add("-with-dynamic-vars",(e,t,n,i,r)=>{if(t){let e=t[0]
Q(t[1],r),r.pushDynamicScope(),r.bindDynamicScope(e),r.invokeStatic(s(n)),r.popDynamicScope()}else r.invokeStatic(s(n))}),{blocks:e,inlines:t}}function te(e,t){Nn.compile(e,t)}function se(e,t,s){let n=new _n(s,t)
for(let i=0;i<e.length;i++)te(e[i],n)
return n}function ne(e,t){return-1!==e.indexOf(t)}function ie(e,t){return(null===e||ne(Hn,e))&&ne(Wn,t)}function re(e,t){return null!==e&&(ne(zn,e)&&ne(Gn,t))}function ae(e,t){return ie(e,t)||re(e,t)}function oe(e,t,s,n){let i=null
if(null===n||void 0===n)return n
if(C(n))return n.toHTML()
i=t?t.tagName.toUpperCase():null
let r=_(n)
if(ie(i,s)){let t=e.protocolForURL(r)
if(ne($n,t))return`unsafe:${r}`}return re(i,s)?`unsafe:${r}`:r}function le(e,t){let s,n
if(t in e)n=t,s="prop"
else{let i=t.toLowerCase()
i in e?(s="prop",n=i):(s="attr",n=t)}return"prop"!==s||"style"!==n.toLowerCase()&&!he(e.tagName,n)||(s="attr"),{normalized:n,type:s}}function he(e,t){let s=Jn[e.toUpperCase()]
return s&&s[t.toLowerCase()]||!1}function ce(e,t){if(!e)return t
if(!pe(e))return t
let s=e.createElement("div")
return class extends t{insertHTMLBefore(e,t,n){if(null===n||""===n)return super.insertHTMLBefore(e,t,n)
let i=e.tagName.toLowerCase(),r=Yn[i]
return void 0===r?super.insertHTMLBefore(e,t,n):ue(e,r,s,n,t)}}}function ue(e,t,s,n,i){let r=t.before+n+t.after
s.innerHTML=r
let a=s
for(let c=0;c<t.depth;c++)a=a.childNodes[0]
var o=be(a,e,i)
let l=o[0],h=o[1]
return new zs(e,l,h)}function pe(e){let t=e.createElement("table")
try{t.innerHTML="<tbody></tbody>"}catch(e){}finally{if(0!==t.childNodes.length)return!1}return!0}function de(e,t,s){if(!e)return t
if(!fe(e,s))return t
let n=e.createElement("div")
return class extends t{insertHTMLBefore(e,t,i){return null===i||""===i?super.insertHTMLBefore(e,t,i):e.namespaceURI!==s?super.insertHTMLBefore(e,t,i):me(e,n,i,t)}}}function me(e,t,s,n){let i="<svg>"+s+"</svg>"
t.innerHTML=i
var r=be(t.firstChild,e,n)
let a=r[0],o=r[1]
return new zs(e,a,o)}function fe(e,t){let n=e.createElementNS(t,"svg")
try{n.insertAdjacentHTML("beforeend","<circle></circle>")}catch(e){}finally{return 1!==n.childNodes.length||s(n.firstChild).namespaceURI!==Xn}}function ge(e,t){return e&&ye(e)?class extends t{constructor(e){super(e),this.uselessComment=this.createComment("")}insertHTMLBefore(e,t,s){if(null===s)return super.insertHTMLBefore(e,t,s)
let n=!1,i=t?t.previousSibling:e.lastChild
i&&i instanceof Text&&(n=!0,e.insertBefore(this.uselessComment,t))
let r=super.insertHTMLBefore(e,t,s)
return n&&e.removeChild(this.uselessComment),r}}:t}function ye(e){let t=e.createElement("div")
return t.innerHTML="first",t.insertAdjacentHTML("beforeend","second"),2!==t.childNodes.length}function be(e,t,s){let n=e.firstChild,i=null,r=n
for(;r;)i=r,r=r.nextSibling,t.insertBefore(i,s)
return[n,i]}function ve(e,t,s,n){let i,r=t,a=e,o=s,l=o?o.previousSibling:r.lastChild
if(null===n||""===n)return new zs(r,null,null)
null===o?(r.insertAdjacentHTML("beforeend",n),i=r.lastChild):o instanceof HTMLElement?(o.insertAdjacentHTML("beforebegin",n),i=o.previousSibling):(r.insertBefore(a,o),a.insertAdjacentHTML("beforebegin",n),i=a.previousSibling,r.removeChild(a))
let h=l?l.nextSibling:r.firstChild
return new zs(r,h,i)}function ke(e){return e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function we(e,t){let s=e.tagName
if(e.namespaceURI===Kn)return Se(s,t)
var n=le(e,t)
let i=n.type,r=n.normalized
return"attr"===i?Se(s,r):_e(s,r)}function Se(e,t){return ae(e,t)?ci:oi}function _e(e,t){return ae(e,t)?hi:xe(e,t)?ui:Ee(e,t)?pi:li}function Ee(e,t){return"OPTION"===e&&"selected"===t}function xe(e,t){return("INPUT"===e||"TEXTAREA"===e)&&"value"===t}function Ce(e){return!1===e||void 0===e||null===e||void 0===e.toString?null:!0===e?"":"function"==typeof e?null:String(e)}function Ne({id:e,meta:t,block:s}){let n,i=e||`client-${Oi++}`
return{id:i,meta:t,create:(e,r)=>{let a=r?o({},r,t):t
return n||(n=JSON.parse(s)),new Di(i,a,e,n)}}}function Ae(){}function Te(e){return-1===e.indexOf(":")}function Oe(e,t,s,n,i){let r=[e.slice(0,1),null,null,null],a=[e.slice(1),Me(t),s,n]
return i.component.dynamic(r,Be,a),!0}function De(e,t,s,n){let i=[t.slice(0,1),null,null,null],r=[t.slice(1),Me(s),null,null]
return n.component.dynamic(i,Be,r),!0}function Be(e,t,s){let n=t.positional.at(0),i=e.env
return new Xi(n,i,s)}function Me(e){return null===e?null:[e[0].map(e=>`@${e}`),e[1]]}function Le(e,t){let s=je(t)
throw new Error(`You tried to create an action with the {{action}} helper, but the first argument ${s}was ${typeof e} instead of a function.`)}function je(e){let t,s,n=""
return null===e||void 0===e?n:("parent"in e&&"property"in e?(t=e.parent.value(),s=e.property):"_parentValue"in e&&"_propertyKey"in e&&(t=e._parentValue,s=e._propertyKey),void 0!==s&&(n+=`('${s}' on ${Ie(t)}) `),n)}function Ie(e){let t=typeof e
if(null===e||void 0===e)return t
if("number"===t||"boolean"===t)return e.toString()
if(e.debugName)return e.debugName
try{return JSON.stringify(e)}catch(e){}return e.toString()}function Fe(e){return(t,s)=>new qi(e,s)}function Re(e,t){e.add("component",Oe),t.add("component",De)}function Pe(e){return void 0!==e.createComponentDefinition}function Ve(){}function Ue(e){var t=e.split(":")
let s=t[0],n=t[1]
return!!(s&&n&&0===n.indexOf("/")&&n.split("/").length>3)}function $e(e){return void 0!==e.rootName&&void 0!==e.collection&&void 0!==e.name&&void 0!==e.type}function He(e){let t=e.type,s=ze(e)
return s?t+":"+s:t}function ze(e){let t=[]
if(e.rootName&&t.push(e.rootName),e.collection&&t.push(e.collection),e.namespace&&t.push(e.namespace),e.name&&t.push(e.name),t.length>0){let s=t.join("/")
return $e(e)&&(s="/"+s),s}}function We(e){let t={}
if(e.indexOf(":")>-1){var s=e.split(":")
let n=s[0],i=s[1]
t.type=n
let r
0===i.indexOf("/")?(r=i.substr(1).split("/"),t.rootName=r.shift(),t.collection=r.shift()):r=i.split("/"),r.length>0&&(t.name=r.pop(),r.length>0&&(t.namespace=r.join("/")))}else t.type=e
return t}function Ge(e,t){if(!t)throw new Error("Assertion Failed: "+e)}function Je(e){let t=e.namespace,s=e.collection,n=t.lastIndexOf("/-")
if(n>-1){n+=2
let e=t.indexOf("/",n)
s=t.slice(n,e>-1?e:void 0)}return s}function Ye(e,t,s,n){let i=qe(e)
return i.trackedProperties[t]=!0,i.trackedPropertyDependencies[t]=n||[],{enumerable:!0,configurable:!1,get:s.get,set:function(){qe(this).dirtyableTagFor(t).inner.dirty(),s.set.apply(this,arguments),hr()}}}function Xe(e,t){let s,n=Symbol(t)
qe(e).trackedProperties[t]=!0,void 0!==e[t]&&(s=e[t]),Object.defineProperty(e,t,{configurable:!0,get(){return this[n]},set(e){qe(this).dirtyableTagFor(t).inner.dirty(),this[n]=e,hr()}})}function Ke(e,t,s){let n=[e.dirtyableTagFor(t)]
if(s&&s.length)for(let i=0;i<s.length;i++)n.push(e.tagFor(s[i]))
return b(n)}function qe(e){let t=e[or]
return t&&Ze(e,or)?t:e[or]=new ar(t)}function Ze(e,t){return lr.call(e,t)}function Qe(e,t){throw cr.for(e,t)}function et(e,t,s=Qe){return"object"==typeof e&&e?qe(e).tagFor(t):zt}function tt(e,t){let s=`The '${t}' property on the ${e} was changed after it had been rendered. Properties that change after being rendered must be tracked. Use the @tracked decorator to mark this as a tracked property.`
throw new cr(e,t,s)}function st(e){return 2===Object.keys(e).length&&e.id&&e.type?Er.included.find(t=>t.id===e.id&&t.type===e.type):e}function nt({relationships:e},t,s=!1){return e[t].data.map(st)}function it(e){return ht(e,!0)}function rt(e){let t=e.flags
return t&&(t.isPrivate||t.isProtected||(t.isPublic=!0)),e}function at(e){return e.hasBody=e.comment||e.parameters,e}function ot(e){for(var t=e.signatures,s=Array.isArray(t),n=0,t=s?t:t[Symbol.iterator]();;){var i
if(s){if(n>=t.length)break
i=t[n++]}else{if((n=t.next()).done)break
i=n.value}let e=i.comment,h=e&&e.tags
if(h)for(var r=h,a=Array.isArray(r),o=0,r=a?r:r[Symbol.iterator]();;){var l
if(a){if(o>=r.length)break
l=r[o++]}else{if((o=r.next()).done)break
l=o.value}let e=l
if("category"===e.tagName)return e.text.trim()}}return null}function lt(e){if(e.properties&&rt(e.properties),e.callSignatures&&(e.signatures=e.callSignatures.map(at)),e.methods){let t=!1
e.methods=e.methods.map(e=>{if(rt(e),e.callSignatures&&(e.signatures=e.callSignatures.map(at)),e.signatures){let s=ot(e)
s&&(t=!0,e.category=s)}return e}),e.hasMethodCategories=t}return e.functions&&(e.functions=e.functions.map(e=>(rt(e),e.callSignatures&&(e.signatures=e.callSignatures.map(at)),e))),e.constructors&&(e.constructors=e.constructors.map(e=>(e.constructorSignatures&&(e.signatures=e.constructorSignatures.map(at)),e))),e}function ht({type:e,id:t,attributes:s,relationships:n},i=!1){let r={type:e,id:t,kindString:e,slug:t,alias:t,name:t,isFunction:"function"===e,flags:{isPrivate:!0,isProtected:!0,isPublic:!0,isStatic:!0,isExported:!0,isExternal:!0,isOptional:!0,isRest:!0,isNormalized:!0}}
s||(s=st({id:t,type:e}).attributes),s=lt(s)
for(let a in s)r[a]=s[a]
for(let a in n){let e=n[a]
r[a]=i?e.data.map(it):e.data}return r}function ct(e){let t=[]
for(let s in e)if(Array.isArray(e[s])){const n=e[s].filter(e=>e.flags&&e.flags.isNormalized).map(it)
t=t.concat(n)}return e.children=t.sort((e,t)=>e.name>t.name?1:-1).map(e=>("function"===e.type&&(e.isFunction=!0),e)),e.menu.include&&(e.children=e.children.filter(t=>e.menu.include.indexOf(t.name)>-1)),e.menu.exclude&&(e.children=e.children.filter(t=>e.menu.exclude.indexOf(t.name)<0)),e}function ut(e){return nt(e.data,"docmodules").map(it).map(ct)}function pt(e){"/"===e[0]&&(e=e.substring(1)),"/"===e[e.length-1]&&(e=e.substring(0,e.length-1))
let t=e.split("/")
if(t[0]!==Nr||2!==t.length&&4!==t.length||4===t.length&&t[2]!==Cr)return{moduleId:null,projectId:null}
const s=t[1]
let n=null
return 4===t.length&&(n=t[3]),{moduleId:n,projectId:s}}function dt(e,t){return"/"===e[0]&&(e=e.substring(1)),"/"===t[0]&&(t=t.substring(1)),e===t.substring(0,e.length)&&(t=t.substring(e.length)),"/"!==t[0]&&(t="/"+t),t}function mt(e){return e.toLowerCase().replace(/\s/g,"-")}class ft{constructor(e,t=null){this._registry=e,this._resolver=t,this._lookups={},this._factoryDefinitionLookups={}}factoryFor(e){let t=this._factoryDefinitionLookups[e]
if(t||(this._resolver&&(t=this._resolver.retrieve(e)),t||(t=this._registry.registration(e)),t&&(this._factoryDefinitionLookups[e]=t)),t)return this.buildFactory(e,t)}lookup(e){let t=!1!==this._registry.registeredOption(e,"singleton")
if(t&&this._lookups[e])return this._lookups[e]
let s=this.factoryFor(e)
if(!s)return
if(!1===this._registry.registeredOption(e,"instantiate"))return s.class
let n=s.create()
return t&&n&&(this._lookups[e]=n),n}defaultInjections(e){return{}}buildInjections(e){let t,s=this.defaultInjections(e),n=this._registry.registeredInjections(e)
for(let i=0;i<n.length;i++)s[(t=n[i]).property]=this.lookup(t.source)
return s}buildFactory(e,t){let s=this.buildInjections(e)
return{class:t,create(e){let n=Object.assign({},s,e)
return t.create(n)}}}}class gt{constructor(e){this._registrations={},this._registeredOptions={},this._registeredInjections={},e&&e.fallback&&(this._fallback=e.fallback)}register(e,t,s){this._registrations[e]=t,s&&(this._registeredOptions[e]=s)}registration(e){let t=this._registrations[e]
return void 0===t&&this._fallback&&(t=this._fallback.registration(e)),t}unregister(e){delete this._registrations[e],delete this._registeredOptions[e],delete this._registeredInjections[e]}registerOption(e,t,s){let n=this._registeredOptions[e]
n||(n={},this._registeredOptions[e]=n),n[t]=s}registeredOption(e,t){let s,n=this.registeredOptions(e)
return n&&(s=n[t]),void 0===s&&void 0!==this._fallback&&(s=this._fallback.registeredOption(e,t)),s}registeredOptions(e){let t=this._registeredOptions[e]
if(void 0===t){let s=e.split(":")[0]
t=this._registeredOptions[s]}return t}unregisterOption(e,t){let s=this._registeredOptions[e]
s&&delete s[t]}registerInjection(e,t,s){let n=this._registeredInjections[e]
void 0===n&&(this._registeredInjections[e]=n=[]),n.push({property:t,source:s})}registeredInjections(e){let t=e.split(":")[0],s=this._fallback?this._fallback.registeredInjections(e):[]
return Array.prototype.push.apply(s,this._registeredInjections[t]),Array.prototype.push.apply(s,this._registeredInjections[e]),s}}const yt="__owner__"
var bt;(function(e){e[e.Trace=0]="Trace",e[e.Debug=1]="Debug",e[e.Warn=2]="Warn",e[e.Error=3]="Error"})(bt||(bt={}))
class vt{log(e){}warn(e){}error(e){}trace(){}}let kt
class wt{constructor({console:e,level:t}){this.f=kt,this.force=kt,this.console=e,this.level=t}skipped(e){return e<this.level}trace(e,{stackTrace:t=!1}={}){this.skipped(bt.Trace)||(this.console.log(e),t&&this.console.trace())}debug(e,{stackTrace:t=!1}={}){this.skipped(bt.Debug)||(this.console.log(e),t&&this.console.trace())}warn(e,{stackTrace:t=!1}={}){this.skipped(bt.Warn)||(this.console.warn(e),t&&this.console.trace())}error(e){this.skipped(bt.Error)||this.console.error(e)}}let St="undefined"==typeof console?new vt:console
kt=new wt({console:St,level:bt.Trace}),new wt({console:St,level:bt.Debug})
const _t=Object.keys
let Et=0,xt=Object.create(null,{constructor:{value:void 0,enumerable:!1,writable:!0}})
u.prototype=xt
class Ct{constructor(){this.dict=p()}add(e){return"string"==typeof e?this.dict[e]=e:this.dict[c(e)]=e,this}delete(e){"string"==typeof e?delete this.dict[e]:e._guid&&delete this.dict[e._guid]}forEach(e){let t=this.dict,s=Object.keys(t)
for(let n=0;s.length;n++)e(t[s[n]])}toArray(){return Object.keys(this.dict)}}class Nt{constructor(){this.stack=[],this.current=null}toArray(){return this.stack}push(e){this.current=e,this.stack.push(e)}pop(){let e=this.stack.pop(),t=this.stack.length
return this.current=0===t?null:this.stack[t-1],void 0===e?null:e}isEmpty(){return 0===this.stack.length}}class At{constructor(e){this.next=null,this.prev=null,this.value=e}}class Tt{constructor(){this.clear()}static fromSlice(e){let t=new Tt
return e.forEachNode(e=>t.append(e.clone())),t}head(){return this._head}tail(){return this._tail}clear(){this._head=this._tail=null}isEmpty(){return null===this._head}toArray(){let e=[]
return this.forEachNode(t=>e.push(t)),e}splice(e,t,s){let n
null===s?(n=this._tail,this._tail=t):(n=s.prev,t.next=s,s.prev=t),n&&(n.next=e,e.prev=n)}nextNode(e){return e.next}prevNode(e){return e.prev}forEachNode(e){let t=this._head
for(;null!==t;)e(t),t=t.next}contains(e){let t=this._head
for(;null!==t;){if(t===e)return!0
t=t.next}return!1}insertBefore(e,t=null){return null===t?this.append(e):(t.prev?t.prev.next=e:this._head=e,e.prev=t.prev,e.next=t,t.prev=e,e)}append(e){let t=this._tail
return t?(t.next=e,e.prev=t,e.next=null):this._head=e,this._tail=e}pop(){return this._tail?this.remove(this._tail):null}prepend(e){return this._head?this.insertBefore(e,this._head):this._head=this._tail=e}remove(e){return e.prev?e.prev.next=e.next:this._head=e.next,e.next?e.next.prev=e.prev:this._tail=e.prev,e}}class Ot{constructor(e,t){this._head=e,this._tail=t}static toList(e){let t=new Tt
return e.forEachNode(e=>t.append(e.clone())),t}forEachNode(e){let t=this._head
for(;null!==t;)e(t),t=this.nextNode(t)}contains(e){let t=this._head
for(;null!==t;){if(t===e)return!0
t=t.next}return!1}head(){return this._head}tail(){return this._tail}toArray(){let e=[]
return this.forEachNode(t=>e.push(t)),e}nextNode(e){return e===this._tail?null:e.next}prevNode(e){return e===this._head?null:e.prev}isEmpty(){return!1}}new Ot(null,null)
const Dt=function(){if(!("function"==typeof WeakMap))return!1
let e=new WeakMap
return"[object WeakMap]"===Object.prototype.toString.call(e)}()
let Bt
Bt="undefined"!=typeof Uint32Array?Uint32Array:Array
const Mt=Dt?Object.freeze([]):[]
var Lt;(function(e){e[e.pc=0]="pc",e[e.ra=1]="ra",e[e.fp=2]="fp",e[e.sp=3]="sp",e[e.s0=4]="s0",e[e.s1=5]="s1",e[e.t0=6]="t0",e[e.t1=7]="t1"})(Lt||(Lt={}))
class jt{constructor(){this.evaluateOpcode=l(72).slice()}add(e,t){this.evaluateOpcode[e]=t}evaluate(e,t,s){(0,this.evaluateOpcode[s])(e,t)}}const It=new jt
class Ft{constructor(){h(this)}toJSON(){return{guid:this._guid,type:this.type}}}class Rt extends Ft{constructor(){super(...arguments),this.next=null,this.prev=null}}const Pt=1
class Vt{validate(e){return this.value()===e}}Vt.id=0
const Ut=[],$t=[]
class Ht{constructor(e,t){this.type=e,this.inner=t}value(){return(0,Ut[this.type])(this.inner)}validate(e){return(0,$t[this.type])(this.inner,e)}}Ut.push(()=>0),$t.push((e,t)=>0===t)
const zt=new Ht(0,null)
Ut.push(()=>NaN),$t.push((e,t)=>NaN===t)
const Wt=new Ht(1,null)
Ut.push(()=>Gt),$t.push((e,t)=>t===Gt)
new Ht(2,null)
let Gt=Pt
class Jt extends Vt{static create(e=Gt){return new Ht(this.id,new Jt(e))}constructor(e=Gt){super(),this.revision=e}value(){return this.revision}dirty(){this.revision=++Gt}}d(Jt)
class Yt extends Vt{constructor(){super(...arguments),this.lastChecked=null,this.lastValue=null}value(){let e=this.lastChecked,t=this.lastValue
return e!==Gt&&(this.lastChecked=Gt,this.lastValue=t=this.compute()),this.lastValue}invalidate(){this.lastChecked=null}}class Xt extends Yt{static create(e,t){return new Ht(this.id,new Xt(e,t))}constructor(e,t){super(),this.first=e,this.second=t}compute(){return Math.max(this.first.value(),this.second.value())}}d(Xt)
class Kt extends Yt{static create(e){return new Ht(this.id,new Kt(e))}constructor(e){super(),this.tags=e}compute(){let e=this.tags,t=-1
for(let s=0;s<e.length;s++){let n=e[s].value()
t=Math.max(n,t)}return t}}d(Kt)
class qt extends Yt{static create(e){return new Ht(this.id,new qt(e))}constructor(e){super(),this.tag=e,this.lastUpdated=Pt}compute(){return Math.max(this.lastUpdated,this.tag.value())}update(e){e!==this.tag&&(this.tag=e,this.lastUpdated=Gt,this.invalidate())}}d(qt)
class Zt{constructor(){this.lastRevision=null,this.lastValue=null}value(){let e=this.tag,t=this.lastRevision,s=this.lastValue
return t&&e.validate(t)||(s=this.lastValue=this.compute(),this.lastRevision=e.value()),s}invalidate(){this.lastRevision=null}}class Qt extends Zt{constructor(e,t){super(),this.tag=e.tag,this.reference=e,this.mapper=t}compute(){let e=this.reference
return(0,this.mapper)(e.value())}}class es{constructor(e){this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=e.tag,this.reference=e}peek(){return this.initialized?this.lastValue:this.initialize()}revalidate(){if(!this.initialized)return this.initialize()
let e=this.reference,t=this.lastRevision,s=e.tag
if(s.validate(t))return ts
this.lastRevision=s.value()
let n=this.lastValue,i=e.value()
return i===n?ts:(this.lastValue=i,i)}initialize(){let e=this.reference,t=this.lastValue=e.value()
return this.lastRevision=e.tag.value(),this.initialized=!0,t}}const ts="adb3b78e-3d22-4e4b-877a-6317c2c5c145"
class ss{constructor(e){this.inner=e,this.tag=zt}value(){return this.inner}}class ns extends At{constructor(e,t){super(e.valueReferenceFor(t)),this.retained=!1,this.seen=!1,this.key=t.key,this.iterable=e,this.memo=e.memoReferenceFor(t)}update(e){this.retained=!0,this.iterable.updateValueReference(this.value,e),this.iterable.updateMemoReference(this.memo,e)}shouldRemove(){return!this.retained}reset(){this.retained=!1,this.seen=!1}}class is{constructor(e){this.map=p(),this.list=new Tt,this.tag=e.tag,this.iterable=e}isEmpty(){return(this.iterator=this.iterable.iterate()).isEmpty()}iterate(){let e=this.iterator||this.iterable.iterate()
return this.iterator=null,e}has(e){return!!this.map[e]}get(e){return this.map[e]}wasSeen(e){let t=this.map[e]
return t&&t.seen}append(e){let t=this.map,s=this.list,n=this.iterable,i=t[e.key]=new ns(n,e)
return s.append(i),i}insertBefore(e,t){let s=this.map,n=this.list,i=this.iterable,r=s[e.key]=new ns(i,e)
return r.retained=!0,n.insertBefore(r,t),r}move(e,t){let s=this.list
e.retained=!0,s.remove(e),s.insertBefore(e,t)}remove(e){this.list.remove(e),delete this.map[e.key]}nextNode(e){return this.list.nextNode(e)}head(){return this.list.head()}}class rs{constructor(e){this.iterator=null
let t=new is(e)
this.artifacts=t}next(){let e=this.artifacts,t=(this.iterator=this.iterator||e.iterate()).next()
return t?e.append(t):null}}var as;(function(e){e[e.Append=0]="Append",e[e.Prune=1]="Prune",e[e.Done=2]="Done"})(as||(as={}))
class os{constructor({target:e,artifacts:t}){this.target=e,this.artifacts=t,this.iterator=t.iterate(),this.current=t.head()}sync(){let e=as.Append
for(;;)switch(e){case as.Append:e=this.nextAppend()
break
case as.Prune:e=this.nextPrune()
break
case as.Done:return void this.nextDone()}}advanceToKey(e){let t=this.current,s=this.artifacts,n=t
for(;n&&n.key!==e;)n.seen=!0,n=s.nextNode(n)
this.current=n&&s.nextNode(n)}nextAppend(){let e=this.iterator,t=this.current,s=this.artifacts,n=e.next()
if(null===n)return this.startPrune()
let i=n.key
return t&&t.key===i?this.nextRetain(n):s.has(i)?this.nextMove(n):this.nextInsert(n),as.Append}nextRetain(e){let t=this.artifacts,s=this.current;(s=n(s,"BUG: current is empty")).update(e),this.current=t.nextNode(s),this.target.retain(e.key,s.value,s.memo)}nextMove(e){let t=this.current,s=this.artifacts,n=this.target,i=e.key,r=s.get(e.key)
r.update(e),s.wasSeen(e.key)?(s.move(r,t),n.move(r.key,r.value,r.memo,t?t.key:null)):this.advanceToKey(i)}nextInsert(e){let t=this.artifacts,s=this.target,n=this.current,i=t.insertBefore(e,n)
s.insert(i.key,i.value,i.memo,n?n.key:null)}startPrune(){return this.current=this.artifacts.head(),as.Prune}nextPrune(){let e=this.artifacts,t=this.target,s=this.current
if(null===s)return as.Done
let n=s
return this.current=e.nextNode(n),n.shouldRemove()?(e.remove(n),t.delete(n.key)):n.reset(),as.Prune}nextDone(){this.target.done()}}class ls extends ss{constructor(e){super(e)}static create(e){return void 0===e?us:null===e?ps:!0===e?ds:!1===e?ms:"number"==typeof e?new cs(e):new hs(e)}get(e){return us}}class hs extends ls{constructor(){super(...arguments),this.lengthReference=null}get(e){if("length"===e){let e=this.lengthReference
return null===e&&(e=this.lengthReference=new cs(this.inner.length)),e}return super.get(e)}}class cs extends ls{constructor(e){super(e)}}const us=new cs(void 0),ps=new cs(null),ds=new cs(!0),ms=new cs(!1)
class fs{constructor(e){this.inner=e,this.tag=e.tag}value(){return this.toBool(this.inner.value())}toBool(e){return!!e}}class gs extends Zt{constructor(e){super(),this.parts=e,this.tag=g(e)}compute(){let e=new Array
for(let t=0;t<this.parts.length;t++){let s=this.parts[t].value()
null!==s&&void 0!==s&&(e[t]=S(s))}return e.length>0?e.join(""):null}}It.add(1,(e,{op1:t})=>{let s=e.stack,n=e.constants.getFunction(t),i=s.pop(),r=n(e,i)
i.clear(),e.stack.push(r)}),It.add(2,(e,{op1:t})=>{let s=e.constants.getFunction(t)
e.stack.push(s(e))}),It.add(5,(e,{op1:t})=>{let s=e.referenceForSymbol(t)
e.stack.push(s)}),It.add(4,(e,{op1:t})=>{let s=e.stack.pop()
e.scope().bindSymbol(t,s)}),It.add(70,(e,{op1:t})=>{let s=e.constants.getString(t),n=e.scope().getPartialMap()[s]
void 0===n&&(n=e.getSelf().get(s)),e.stack.push(n)}),It.add(19,(e,{op1:t,op2:s})=>{e.pushRootScope(t,!!s)}),It.add(6,(e,{op1:t})=>{let s=e.constants.getString(t),n=e.stack.pop()
e.stack.push(n.get(s))}),It.add(7,(e,{op1:t})=>{let s=t?e.constants.getBlock(t):null
e.stack.push(s)}),It.add(8,(e,{op1:t})=>{e.stack.push(e.scope().getBlock(t))}),It.add(9,(e,{op1:t})=>{let s=!!e.scope().getBlock(t)
e.stack.push(s?ds:ms)}),It.add(10,(e,{op1:t})=>{let s=e.scope().getBlock(t),n=s&&s.symbolTable.parameters.length
e.stack.push(n?ds:ms)}),It.add(11,(e,{op1:t})=>{let s=[]
for(let n=t;n>0;n--)s.push(e.stack.pop())
e.stack.push(new gs(s.reverse()))}),It.add(20,e=>e.pushChildScope()),It.add(21,e=>e.popScope()),It.add(39,e=>e.pushDynamicScope()),It.add(40,e=>e.popDynamicScope()),It.add(12,(e,{op1:t})=>{e.stack.push(t)}),It.add(13,(e,{op1:t})=>{e.stack.push(e.constants.getOther(t))}),It.add(14,(e,{op1:t})=>{let s=e.stack,n=t&~(3<<30)
switch((t&3<<30)>>>30){case 0:s.push(ls.create(n))
break
case 1:s.push(ls.create(e.constants.getString(n)))
break
case 2:switch(n){case 0:s.push(ms)
break
case 1:s.push(ds)
break
case 2:s.push(ps)
break
case 3:s.push(us)}}}),It.add(15,(e,{op1:t,op2:s})=>{let n=e.fetchValue(t)-s
e.stack.dup(n)}),It.add(16,(e,{op1:t})=>e.stack.pop(t)),It.add(17,(e,{op1:t})=>e.load(t)),It.add(18,(e,{op1:t})=>e.fetch(t)),It.add(38,(e,{op1:t})=>{let s=e.constants.getArray(t)
e.bindDynamicScope(s)}),It.add(47,e=>e.pushFrame()),It.add(48,e=>e.popFrame()),It.add(49,(e,{op1:t})=>e.enter(t)),It.add(50,e=>e.exit()),It.add(41,e=>{let t=e.stack,s=t.pop()
t.push(s?s.compileDynamic(e.env):null)}),It.add(42,(e,{op1:t})=>{let s=e.constants.getBlock(t).compileStatic(e.env)
e.call(s.handle)})
It.add(43,(e,{op1:t})=>{let s=e.constants.getOther(t),n=e.stack.pop()
s.invoke(e,n)}),It.add(44,(e,{op1:t})=>e.goto(t)),It.add(45,(e,{op1:t})=>{let s=e.stack.pop()
if(m(s))s.value()&&e.goto(t)
else{let n=new es(s)
n.peek()&&e.goto(t),e.updateWith(new ks(n))}}),It.add(46,(e,{op1:t})=>{let s=e.stack.pop()
if(m(s))s.value()||e.goto(t)
else{let n=new es(s)
n.peek()||e.goto(t),e.updateWith(new ks(n))}}),It.add(22,e=>e.return()),It.add(23,(e,{op1:t})=>{e.returnTo(t)})
const ys=function(e,t){return new ss(!!e.value())},bs=function(e,t){return e},vs=function(e,t){return t.toConditionalReference(e)}
It.add(51,(e,{op1:t})=>{let s=e.stack,n=s.pop(),i=e.constants.getFunction(t)
s.push(i(n,e.env))})
class ks extends Rt{constructor(e){super(),this.type="assert",this.tag=e.tag,this.cache=e}evaluate(e){w(this.cache.revalidate())&&e.throw()}toJSON(){let e,t=this.type,s=this._guid,n=this.cache
try{e=JSON.stringify(n.peek())}catch(t){e=String(n.peek())}return{args:[],details:{expected:e},guid:s,type:t}}}class ws extends Rt{constructor(e,t){super(),this.target=t,this.type="jump-if-not-modified",this.tag=e,this.lastRevision=e.value()}evaluate(e){let t=this.tag,s=this.target,n=this.lastRevision
!e.alwaysRevalidate&&t.validate(n)&&e.goto(s)}didModify(){this.lastRevision=this.tag.value()}toJSON(){return{args:[JSON.stringify(this.target.inspect())],guid:this._guid,type:this.type}}}class Ss extends Rt{constructor(e){super(),this.target=e,this.type="did-modify",this.tag=zt}evaluate(){this.target.didModify()}}class _s{constructor(e){this.tag=zt,this.type="label",this.label=null,this.prev=null,this.next=null,h(this),this.label=e}evaluate(){}inspect(){return`${this.label} [${this._guid}]`}toJSON(){return{args:[JSON.stringify(this.inspect())],guid:this._guid,type:this.type}}}It.add(24,(e,{op1:t})=>{e.elements().appendText(e.constants.getString(t))}),It.add(25,(e,{op1:t})=>{e.elements().appendComment(e.constants.getString(t))}),It.add(27,(e,{op1:t})=>{e.elements().openElement(e.constants.getString(t))}),It.add(28,(e,{op1:t})=>{let s=e.constants.getString(t)
e.elements().openElement(s)}),It.add(29,e=>{let t=e.stack.pop().value()
e.elements().openElement(t)}),It.add(36,e=>{let t,s,n=e.stack.pop(),i=e.stack.pop()
if(m(n))t=n.value()
else{let s=new es(n)
t=s.peek(),e.updateWith(new ks(s))}if(m(i))s=i.value()
else{let t=new es(i)
s=t.peek(),e.updateWith(new ks(t))}e.elements().pushRemoteElement(t,s)}),It.add(37,e=>e.elements().popRemoteElement()),It.add(33,e=>{let t=e.fetchValue(Lt.t0)
t&&(t.flush(e),e.loadValue(Lt.t0,null)),e.elements().flushElement()}),It.add(34,e=>e.elements().closeElement()),It.add(35,(e,{op1:t})=>{let s=e.constants.getOther(t),n=e.stack.pop()
var i=e.elements()
let r=i.constructing,a=i.updateOperations,o=e.dynamicScope(),l=s.create(r,n,o,a)
n.clear(),e.env.scheduleInstallModifier(l,s)
let h=s.getDestructor(l)
h&&e.newDestroyable(h)
let c=s.getTag(l)
f(c)||e.updateWith(new Es(c,s,l))})
class Es extends Rt{constructor(e,t,s){super(),this.tag=e,this.manager=t,this.modifier=s,this.type="update-modifier",this.lastUpdated=e.value()}evaluate(e){let t=this.manager,s=this.modifier,n=this.tag,i=this.lastUpdated
n.validate(i)||(e.env.scheduleUpdateModifier(s,t),this.lastUpdated=n.value())}toJSON(){return{guid:this._guid,type:this.type}}}It.add(30,(e,{op1:t,op2:s,op3:n})=>{let i=e.constants.getString(t),r=e.constants.getString(s),a=n?e.constants.getString(n):null
e.elements().setStaticAttribute(i,r,a)}),It.add(31,(e,{op1:t,op2:s,op3:n})=>{let i=e.constants.getString(t),r=e.stack.pop(),a=r.value(),o=n?e.constants.getString(n):null,l=e.elements().setDynamicAttribute(i,a,!!s,o)
m(r)||e.updateWith(new xs(r,l))})
class xs extends Rt{constructor(e,t){super(),this.reference=e,this.attribute=t,this.type="patch-element",this.tag=e.tag}evaluate(e){let t=this.attribute,s=this.reference
t.update(s.value(),e.env)}}class Cs{constructor(){this.stack=null,this.positional=new Ns,this.named=new Ts}empty(){return this.setup(null,!0),this}setup(e,t){this.stack=e
let s=e.fromTop(0),n=s.length,i=e.fromTop(n+1),r=i+n+2
this.positional.setup(e,r,i),this.named.setup(e,n,s,t)}get tag(){return g([this.positional,this.named])}get length(){return this.positional.length+this.named.length}at(e){return this.positional.at(e)}get(e){return this.named.get(e)}capture(){return{tag:this.tag,length:this.length,positional:this.positional.capture(),named:this.named.capture()}}clear(){let e=this.stack,t=this.length
e.pop(t+2)}}class Ns{constructor(){this.length=0,this.stack=null,this.start=0,this._tag=null,this._references=null}setup(e,t,s){this.stack=e,this.start=t,this.length=s,this._tag=null,this._references=null}get tag(){let e=this._tag
return e||(e=this._tag=g(this.references)),e}at(e){let t=this.start,s=this.length
if(e<0||e>=s)return us
let n=t-e-1
return this.stack.fromTop(n)}capture(){return new As(this.tag,this.references)}get references(){let e=this._references
if(!e){let t=this.length
e=this._references=new Array(t)
for(let s=0;s<t;s++)e[s]=this.at(s)}return e}}class As{constructor(e,t,s=t.length){this.tag=e,this.references=t,this.length=s}at(e){return this.references[e]}value(){return this.references.map(this.valueOf)}get(e){let t=this.references,s=this.length
if("length"===e)return ls.create(s)
{let n=parseInt(e,10)
return n<0||n>=s?us:t[n]}}valueOf(e){return e.value()}}class Ts{constructor(){this.length=0,this._tag=null,this._references=null,this._names=null,this._realNames=Mt}setup(e,t,s,n){this.stack=e,this.length=t,this._tag=null,this._references=null,n?(this._names=s,this._realNames=Mt):(this._names=null,this._realNames=s)}get tag(){return g(this.references)}get names(){let e=this._names
return e||(e=this._names=this._realNames.map(this.sliceName)),e}has(e){return-1!==this.names.indexOf(e)}get(e){let t=this.names,s=this.length,n=t.indexOf(e)
if(-1===n)return us
let i=s-n
return this.stack.fromTop(i)}capture(){return new Os(this.tag,this.names,this.references)}get references(){let e=this._references
if(!e){let t=this.names,s=this.length
e=this._references=[]
for(let n=0;n<s;n++)e[n]=this.get(t[n])}return e}sliceName(e){return e.slice(1)}}class Os{constructor(e,t,s){this.tag=e,this.names=t,this.references=s,this.length=t.length,this._map=null}get map(){let e=this._map
if(!e){let t=this.names,s=this.references
e=this._map=p()
for(let n=0;n<t.length;n++)e[t[n]]=s[n]}return e}has(e){return-1!==this.names.indexOf(e)}get(e){let t=this.names,s=this.references,n=t.indexOf(e)
return-1===n?us:s[n]}value(){let e=this.names,t=this.references,s=p()
for(let n=0;n<e.length;n++)s[e[n]]=t[n].value()
return s}}var Ds=new Cs
It.add(56,(e,{op1:t})=>{let s=e.constants.getOther(t)
e.stack.push({definition:s,manager:s.manager,component:null})}),It.add(57,e=>{let t=e.stack,s=t.pop(),n=m(s)?void 0:new es(s),i=n?n.peek():s.value()
t.push({definition:i,manager:i.manager,component:null}),n&&e.updateWith(new ks(n))}),It.add(58,(e,{op1:t})=>{let s=e.stack
Ds.setup(s,!!t),s.push(Ds)}),It.add(59,(e,{op1:t})=>{let s=e.stack
var n=e.fetchValue(t)
let i=n.definition,r=n.manager,a=s.pop(),o=r.prepareArgs(i,a)
if(o){a.clear()
let e=o.positional,t=o.named,n=e.length
for(let i=0;i<n;i++)s.push(e[i])
s.push(n)
let i=Object.keys(t),r=i.length,l=[]
for(let a=0;a<r;a++){let e=t[i[a]],n=`@${i[a]}`
s.push(e),l.push(n)}s.push(l),a.setup(s,!1)}s.push(a)}),It.add(60,(e,{op1:t,op2:s})=>{var n
let i,r,a=e.stack.pop(),o=e.dynamicScope(),l=(n=e.fetchValue(s),i=n.definition,r=n.manager,n),h=1&t,c=r.create(e.env,i,a,o,e.getSelf(),!!h)
l.component=c
let u=r.getTag(c)
f(u)||e.updateWith(new Ls(u,i.name,c,r,o))}),It.add(61,(e,{op1:t})=>{var s=e.fetchValue(t)
let n=s.manager,i=s.component,r=n.getDestructor(i)
r&&e.newDestroyable(r)}),It.add(65,e=>{e.beginCacheGroup(),e.elements().pushSimpleBlock()}),It.add(62,e=>{e.loadValue(Lt.t0,new Bs)}),It.add(32,(e,{op1:t,op2:s,op3:n})=>{let i=e.constants.getString(t),r=e.stack.pop(),a=n?e.constants.getString(n):null
e.fetchValue(Lt.t0).setAttribute(i,r,!!s,a)})
class Bs{constructor(){this.attributes=p(),this.classes=[]}setAttribute(e,t,s,n){let i={value:t,namespace:n,trusting:s}
"class"===e&&this.classes.push(t),this.attributes[e]=i}flush(e){for(let t in this.attributes){let s=this.attributes[t],n=s.value,i=s.namespace,r=s.trusting
"class"===t&&(n=new Ms(this.classes))
let a=e.elements().setDynamicAttribute(t,n.value(),r,i)
m(n)||e.updateWith(new xs(n,a))}}}class Ms{constructor(e){this.list=e,this.tag=g(e),this.list=e}value(){let e=[],t=this.list
for(let s=0;s<t.length;s++){let n=_(t[s].value())
n&&e.push(n)}return 0===e.length?null:e.join(" ")}}It.add(67,(e,{op1:t})=>{var s=e.fetchValue(t)
let n=s.manager,i=s.component,r=e.fetchValue(Lt.t0)
n.didCreateElement(i,e.elements().expectConstructing("DidCreateElementOpcode#evaluate"),r)}),It.add(63,(e,{op1:t})=>{let s=e.fetchValue(t)
e.stack.push(s.manager.getSelf(s.component))}),It.add(64,(e,{op1:t})=>{var s=e.fetchValue(t)
let n=s.manager,i=s.definition,r=s.component
e.stack.push(n.layoutFor(i,r,e.env))}),It.add(68,(e,{op1:t})=>{var s=e.fetchValue(t)
let n=s.manager,i=s.component,r=e.elements().popBlock()
n.didRenderLayout(i,r),e.env.didCreate(i,n),e.updateWith(new js(n,i,r))}),It.add(66,e=>e.commitCacheGroup())
class Ls extends Rt{constructor(e,t,s,n,i){super(),this.tag=e,this.name=t,this.component=s,this.manager=n,this.dynamicScope=i,this.type="update-component"}evaluate(e){let t=this.component,s=this.manager,n=this.dynamicScope
s.update(t,n)}toJSON(){return{args:[JSON.stringify(this.name)],guid:this._guid,type:this.type}}}class js extends Rt{constructor(e,t,s){super(),this.manager=e,this.component=t,this.bounds=s,this.type="did-update-layout",this.tag=zt}evaluate(e){let t=this.manager,s=this.component,n=this.bounds
t.didUpdateLayout(s,n),e.env.didUpdate(s,t)}}const Is="COMPONENT DEFINITION [id=e59c754e-61eb-4392-8c4a-2c0ac72bfcd4]"
class Fs{constructor(e,t,s){this[Is]=!0,this.name=e,this.manager=t,this.ComponentClass=s}}class Rs extends fs{static create(e){return new Rs(e)}toBool(e){return O(e)}}It.add(26,(e,{op1:t})=>{let s,n=e.stack.pop(),i=n.value()
s=t?e.elements().appendTrustingDynamicContent(i):e.elements().appendCautiousDynamicContent(i),m(n)||e.updateWith(new Ps(n,s))})
class Ps extends Rt{constructor(e,t){super(),this.reference=e,this.content=t,this.tag=e.tag}evaluate(e){let t=this.content,s=this.reference
t.update(e.env,s.value())}}let Vs=function(e,t){console.info("Use `context`, and `get(<path>)` to debug this template."),t("this")}
class Us{constructor(e,t,s){this.scope=e,this.locals=p()
for(let n=0;n<s.length;n++){let i=s[n],r=t[i-1],a=e.getSymbol(i)
this.locals[r]=a}}get(e){let t=this.scope,s=this.locals,n=e.split(".")
var i=e.split(".")
let r,a=i[0],o=i.slice(1),l=t.getEvalScope()
return"this"===a?r=t.getSelf():s[a]?r=s[a]:0===a.indexOf("@")&&l[a]?r=l[a]:(r=this.scope.getSelf(),o=n),o.reduce((e,t)=>e.get(t),r)}}It.add(71,(e,{op1:t,op2:s})=>{let n=e.constants.getOther(t),i=e.constants.getArray(s),r=new Us(e.scope(),n,i)
Vs(e.getSelf().value(),e=>r.get(e).value())}),It.add(69,e=>{let t=e.stack,s=t.pop()
t.push(s.value().template.asPartial())})
class $s{constructor(e){this.tag=e.tag,this.artifacts=e}value(){return!this.artifacts.isEmpty()}}It.add(54,e=>{let t=e.stack,s=t.pop(),n=t.pop(),i=e.env.iterableFor(s,n.value()),r=new rs(i)
t.push(r),t.push(new $s(r.artifacts))}),It.add(52,(e,{op1:t})=>{e.enterList(t)}),It.add(53,e=>e.exitList()),It.add(55,(e,{op1:t})=>{let s=e.stack.peek().next()
if(s){let t=e.iterate(s.memo,s.value)
e.enterItem(s.key,t)}else e.goto(t)})
class Hs{constructor(e,t){this.element=e,this.nextSibling=t}}class zs{constructor(e,t,s){this.parentNode=e,this.first=t,this.last=s}parentElement(){return this.parentNode}firstNode(){return this.first}lastNode(){return this.last}}class Ws{constructor(e,t){this.parentNode=e,this.node=t}parentElement(){return this.parentNode}firstNode(){return this.node}lastNode(){return this.node}}class Gs{constructor(e){this.trusting=e}retry(e,t){let s=this.bounds,n=s.parentElement(),i=j(s),r=en.forInitialRender(e,n,i)
return this.trusting?r.__appendTrustingDynamicContent(t):r.__appendCautiousDynamicContent(t)}}class Js{constructor(e){this.inner=e,this.bounds=e.bounds}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}update(e,t){let s=this.inner=this.inner.update(e,t)
return this.bounds=s.bounds,this}}class Ys extends Gs{constructor(e,t,s){super(s),this.bounds=e,this.lastValue=t}update(e,t){let s=this.lastValue
if(t===s)return this
if(N(t)||C(t))return this.retry(e,t)
let n
return(n=x(t)?"":T(t)?t:String(t))!==s&&(this.bounds.firstNode().nodeValue=this.lastValue=n),this}}class Xs extends Gs{constructor(e,t,s){super(s),this.bounds=e,this.lastValue=t}update(e,t){return t===this.lastValue?this:this.retry(e,t)}}class Ks extends Gs{constructor(e,t,s){super(s),this.bounds=e,this.lastValue=t}update(e,t){let s=this.lastValue
return t===s?this:C(t)&&t.toHTML()===s.toHTML()?(this.lastValue=t,this):this.retry(e,t)}}class qs extends Gs{constructor(e,t,s){super(s),this.bounds=e,this.lastValue=t}update(e,t){let s=this.lastValue
return t===s?this:E(t)===s?this:this.retry(e,t)}}class Zs{constructor(e){this.node=e}firstNode(){return this.node}}class Qs{constructor(e){this.node=e}lastNode(){return this.node}}class en{constructor(e,t,s){this.constructing=null,this.operations=null,this.cursorStack=new Nt,this.blockStack=new Nt,this.cursorStack.push(new Hs(t,s)),this.env=e,this.dom=e.getAppendOperations(),this.updateOperations=e.getDOM()}static forInitialRender(e,t,s){let n=new this(e,t,s)
return n.pushSimpleBlock(),n}static resume(e,t,s){let n=new this(e,t.parentElement(),s)
return n.pushSimpleBlock(),n.pushBlockTracker(t),n}get element(){return this.cursorStack.current.element}get nextSibling(){return this.cursorStack.current.nextSibling}expectConstructing(e){return n(this.constructing,`${e} should only be called while constructing an element`)}expectOperations(e){return n(this.operations,`${e} should only be called while constructing an element`)}block(){return n(this.blockStack.current,"Expected a current block tracker")}popElement(){this.cursorStack.pop(),n(this.cursorStack.current,"can't pop past the last element")}pushSimpleBlock(){return this.pushBlockTracker(new tn(this.element))}pushUpdatableBlock(){return this.pushBlockTracker(new nn(this.element))}pushBlockList(e){return this.pushBlockTracker(new rn(this.element,e))}pushBlockTracker(e,t=!1){let s=this.blockStack.current
return null!==s&&(s.newDestroyable(e),t||s.didAppendBounds(e)),this.__openBlock(),this.blockStack.push(e),e}popBlock(){return this.block().finalize(this),this.__closeBlock(),n(this.blockStack.pop(),"Expected popBlock to return a block")}__openBlock(){}__closeBlock(){}openElement(e){let t=this.__openElement(e)
return this.constructing=t,t}__openElement(e){return this.dom.createElement(e,this.element)}flushElement(){let e=this.element,t=n(this.constructing,`flushElement should only be called when constructing an element`)
this.__flushElement(e,t),this.constructing=null,this.operations=null,this.pushElement(t,null),this.didOpenElement(t)}__flushElement(e,t){this.dom.insertBefore(e,t,this.nextSibling)}closeElement(){this.willCloseElement(),this.popElement()}pushRemoteElement(e,t=null){this.pushElement(e,t)
let s=new sn(e)
this.pushBlockTracker(s,!0)}popRemoteElement(){this.popBlock(),this.popElement()}pushElement(e,t){this.cursorStack.push(new Hs(e,t))}didAddDestroyable(e){this.block().newDestroyable(e)}didAppendBounds(e){return this.block().didAppendBounds(e),e}didAppendNode(e){return this.block().didAppendNode(e),e}didOpenElement(e){return this.block().openElement(e),e}willCloseElement(){this.block().closeElement()}appendText(e){return this.didAppendNode(this.__appendText(e))}__appendText(e){let t=this.dom,s=this.element,n=this.nextSibling,i=t.createTextNode(e)
return t.insertBefore(s,i,n),i}appendNode(e){return this.didAppendNode(this.__appendNode(e))}__appendNode(e){return this.dom.insertBefore(this.element,e,this.nextSibling),e}appendFragment(e){return this.didAppendBounds(this.__appendFragment(e))}__appendFragment(e){let t=e.firstChild
if(t){let s=B(this.element,t,e.lastChild)
return this.dom.insertBefore(this.element,e,this.nextSibling),s}return M(this.element,this.__appendComment(""))}appendHTML(e){return this.didAppendBounds(this.__appendHTML(e))}__appendHTML(e){return this.dom.insertHTMLBefore(this.element,this.nextSibling,e)}appendTrustingDynamicContent(e){let t=new Js(this.__appendTrustingDynamicContent(e))
return this.didAppendBounds(t),t}__appendTrustingDynamicContent(e){if(A(e)){let t=this.__appendFragment(e)
return new Xs(t,e,!0)}if(N(e)){let t=this.__appendNode(e)
return new Xs(M(this.element,t),t,!0)}{let t
t=x(e)?"":C(e)?e.toHTML():T(e)?e:String(e)
let s=this.__appendHTML(t)
return new qs(s,t,!0)}}appendCautiousDynamicContent(e){let t=new Js(this.__appendCautiousDynamicContent(e))
return this.didAppendBounds(t.bounds),t}__appendCautiousDynamicContent(e){if(A(e)){let t=this.__appendFragment(e)
return new Xs(t,e,!1)}if(N(e)){let t=this.__appendNode(e)
return new Xs(M(this.element,t),t,!1)}if(C(e)){let t=e.toHTML(),s=this.__appendHTML(t)
return new Ks(s,e,!1)}{let t
t=x(e)?"":T(e)?e:String(e)
let s=this.__appendText(t),n=M(this.element,s)
return new Ys(n,t,!1)}}appendComment(e){return this.didAppendNode(this.__appendComment(e))}__appendComment(e){let t=this.dom,s=this.element,n=this.nextSibling,i=t.createComment(e)
return t.insertBefore(s,i,n),i}__setAttribute(e,t,s){this.dom.setAttribute(this.constructing,e,t,s)}__setProperty(e,t){this.constructing[e]=t}setStaticAttribute(e,t,s){this.__setAttribute(e,t,s)}setDynamicAttribute(e,t,s,n){let i=this.constructing,r=new(this.env.attributeFor(i,e,s,n))({element:i,name:e,namespace:n||null})
return r.set(this,t,this.env),r}}class tn{constructor(e){this.parent=e,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}destroy(){let e=this.destroyables
if(e&&e.length)for(let t=0;t<e.length;t++)e[t].destroy()}parentElement(){return this.parent}firstNode(){return this.first&&this.first.firstNode()}lastNode(){return this.last&&this.last.lastNode()}openElement(e){this.didAppendNode(e),this.nesting++}closeElement(){this.nesting--}didAppendNode(e){0===this.nesting&&(this.first||(this.first=new Zs(e)),this.last=new Qs(e))}didAppendBounds(e){0===this.nesting&&(this.first||(this.first=e),this.last=e)}newDestroyable(e){this.destroyables=this.destroyables||[],this.destroyables.push(e)}finalize(e){this.first||e.appendComment("")}}class sn extends tn{destroy(){super.destroy(),j(this)}}class nn extends tn{reset(e){let t=this.destroyables
if(t&&t.length)for(let n=0;n<t.length;n++)e.didDestroy(t[n])
let s=j(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,s}}class rn{constructor(e,t){this.parent=e,this.boundList=t,this.parent=e,this.boundList=t}destroy(){this.boundList.forEachNode(e=>e.destroy())}parentElement(){return this.parent}firstNode(){let e=this.boundList.head()
return e&&e.firstNode()}lastNode(){let e=this.boundList.tail()
return e&&e.lastNode()}openElement(e){a(!1,"Cannot openElement directly inside a block list")}closeElement(){a(!1,"Cannot closeElement directly inside a block list")}didAppendNode(e){a(!1,"Cannot create a new node directly inside a block list")}didAppendBounds(e){}newDestroyable(e){}finalize(e){}}class an extends en{constructor(e,t,s){if(super(e,t,s),this.lastMatchedNode=null,this.unmatchedAttributes=null,this.blockDepth=0,s)throw new Error("Rehydration with nextSibling not supported")
this._candidate=t.firstChild}get candidate(){let e=this._candidate
return e?F(e)&&P(e)===this.blockDepth?null:e:null}clearMismatch(e){if(F(e)){let t=R(e)
if(null!==t)return void this.clearBlock(t)}let t=e,s=this.nextSibling
for(;t&&t!==s;)t=z(t)
this._candidate=null}clearBlock(e){let t=this._candidate
for(;t&&(!F(t)||P(t)!==e);)t=z(t)
a(t&&F(t)&&P(t)===e,"An opening block should be paired with a closing block comment"),this._candidate=z(t)}__openBlock(){let e=this.candidate
if(e){if(F(e)){let t=R(e)
return null!==t&&(this.blockDepth=t),void(this._candidate=z(e))}this.clearMismatch(e)}}__closeBlock(){let e=this._candidate
if(e){if(F(e)){let t=P(e)
return null!==t&&(this.blockDepth=t-1),void(this._candidate=z(e))}this.clearMismatch(e)}}__appendNode(e){let t=this.candidate
return t||super.__appendNode(e)}__appendHTML(e){let t=this.markerBounds()
if(t){let e=t.firstNode(),s=t.lastNode(),n=B(this.element,e.nextSibling,s.previousSibling)
return z(e),z(s),n}return super.__appendHTML(e)}markerBounds(){let e=this._candidate
if(e&&U(e)){let t=e,s=n(t.nextSibling,`BUG: serialization markers must be paired`)
for(;s&&!U(s);)s=n(s.nextSibling,`BUG: serialization markers must be paired`)
return B(this.element,t,s)}return null}__appendText(e){let t=this.candidate
if(t){if(H(t)){let s=this._candidate=z(t),n=this.dom.createTextNode(e)
return this.dom.insertBefore(this.element,n,s),n}return I(t)?(t.nodeValue=e,this.lastMatchedNode=t,this._candidate=t.nextSibling,t):t&&($(t)||H(t))?(this._candidate=t.nextSibling,z(t),this.__appendText(e)):(this.clearMismatch(t),super.__appendText(e))}return super.__appendText(e)}__appendComment(e){let t=this._candidate
return t&&F(t)?(t.nodeValue=e,this.lastMatchedNode=t,this._candidate=t.nextSibling,t):(t&&this.clearMismatch(t),super.__appendComment(e))}__openElement(e,t){let s=this._candidate
return s&&V(s)&&s.tagName===e.toUpperCase()?(this.unmatchedAttributes=[].slice.call(s.attributes),this._candidate=s.firstChild,s):(s&&this.clearMismatch(s),super.__openElement(e))}__setAttribute(e,t,s){let n=this.unmatchedAttributes
if(n){let s=W(n,e)
if(s)return s.value=t,void n.splice(n.indexOf(s),1)}return super.__setAttribute(e,t,s)}__setProperty(e,t){let s=this.unmatchedAttributes
if(s){let n=W(s,e)
if(n)return n.value=t,void s.splice(s.indexOf(n),1)}return super.__setProperty(e,t)}__flushElement(e,t){let s=this.unmatchedAttributes
if(s){for(let e=0;e<s.length;e++)this.constructing.removeAttribute(s[e].name)
this.unmatchedAttributes=null}else super.__flushElement(e,t)}appendCautiousDynamicContent(e){let t=super.appendCautiousDynamicContent(e)
return t.update(this.env,e),t}willCloseElement(){let e=this.candidate
e&&this.clearMismatch(e),this._candidate=this.element.nextSibling,this.lastMatchedNode=this.element,super.willCloseElement()}pushRemoteElement(e,t=null){throw G()}popRemoteElement(){throw G()}didAppendBounds(e){super.didAppendBounds(e)
let t=e.lastNode()
return this._candidate=t&&t.nextSibling,e}didOpenElement(e){return super.didOpenElement(e),this._candidate=e.firstChild,e}}class on extends en{constructor(){super(...arguments),this.serializeBlockDepth=0}__openBlock(){let e=this.serializeBlockDepth++
this.__appendComment(`%+block:${e}%`),super.__openBlock()}__closeBlock(){super.__closeBlock(),this.__appendComment(`%-block:${--this.serializeBlockDepth}%`)}__appendHTML(e){let t=this.__appendComment("%glimmer%")
super.__appendHTML(e)
let s=this.__appendComment("%glimmer%")
return B(this.element,t,s)}__appendText(e){let t=D(this)
return""===e?this.__appendComment("%empty%"):(t&&t.nodeType===Node.TEXT_NODE&&this.__appendComment("%sep%"),super.__appendText(e))}}var ln;(function(e){e[e.Text=0]="Text",e[e.Append=1]="Append",e[e.Comment=2]="Comment",e[e.Modifier=3]="Modifier",e[e.Block=4]="Block",e[e.Component=5]="Component",e[e.OpenElement=6]="OpenElement",e[e.FlushElement=7]="FlushElement",e[e.CloseElement=8]="CloseElement",e[e.StaticAttr=9]="StaticAttr",e[e.DynamicAttr=10]="DynamicAttr",e[e.Yield=11]="Yield",e[e.Partial=12]="Partial",e[e.DynamicArg=13]="DynamicArg",e[e.StaticArg=14]="StaticArg",e[e.TrustingAttr=15]="TrustingAttr",e[e.Debugger=16]="Debugger",e[e.ClientSideStatement=17]="ClientSideStatement",e[e.Unknown=18]="Unknown",e[e.Get=19]="Get",e[e.MaybeLocal=20]="MaybeLocal",e[e.FixThisBeforeWeMerge=21]="FixThisBeforeWeMerge",e[e.HasBlock=22]="HasBlock",e[e.HasBlockParams=23]="HasBlockParams",e[e.Undefined=24]="Undefined",e[e.Helper=25]="Helper",e[e.Concat=26]="Concat",e[e.ClientSideExpression=27]="ClientSideExpression"})(ln||(ln={}))
var hn;(function(e){e.isUnknown=J(ln.Unknown),e.isGet=J(ln.Get),e.isConcat=J(ln.Concat),e.isHelper=J(ln.Helper),e.isHasBlock=J(ln.HasBlock),e.isHasBlockParams=J(ln.HasBlockParams),e.isUndefined=J(ln.Undefined),e.isClientSide=J(ln.ClientSideExpression),e.isMaybeLocal=J(ln.MaybeLocal),e.isPrimitiveValue=function(e){return null===e||"object"!=typeof e}})(hn||(hn={}))
var cn;(function(e){function t(e){return e[0]===ln.StaticAttr||e[0]===ln.DynamicAttr||e[0]===ln.TrustingAttr}function s(e){return e[0]===ln.StaticArg||e[0]===ln.DynamicArg}e.isText=J(ln.Text),e.isAppend=J(ln.Append),e.isComment=J(ln.Comment),e.isModifier=J(ln.Modifier),e.isBlock=J(ln.Block),e.isComponent=J(ln.Component),e.isOpenElement=J(ln.OpenElement),e.isFlushElement=J(ln.FlushElement),e.isCloseElement=J(ln.CloseElement),e.isStaticAttr=J(ln.StaticAttr),e.isDynamicAttr=J(ln.DynamicAttr),e.isYield=J(ln.Yield),e.isPartial=J(ln.Partial),e.isDynamicArg=J(ln.DynamicArg),e.isStaticArg=J(ln.StaticArg),e.isTrustingAttr=J(ln.TrustingAttr),e.isDebugger=J(ln.Debugger),e.isClientSide=J(ln.ClientSideStatement),e.isAttribute=t,e.isArgument=s,e.isParameter=function(e){return t(e)||s(e)},e.getParameterName=function(e){return e[1]}})(cn||(cn={}))
var un;(function(e){e[e.OpenComponentElement=0]="OpenComponentElement",e[e.DidCreateElement=1]="DidCreateElement",e[e.SetComponentAttrs=2]="SetComponentAttrs",e[e.DidRenderLayout=3]="DidRenderLayout",e[e.FunctionExpression=4]="FunctionExpression",e[e.Debugger=5]="Debugger"})(un||(un={}))
class pn{constructor(e){this.handle=e}}class dn{constructor(e,t){this.handle=e,this.symbolTable=t}}class mn{constructor(e){this.env=e}wrapLayout(e){this.inner=new fn(this.env,e)}fromLayout(e,t){this.inner=new gn(this.env,e,t)}compile(){return this.inner.compile()}get tag(){return this.inner.tag}get attrs(){return this.inner.attrs}}class fn{constructor(e,t){this.env=e,this.layout=t,this.tag=new yn,this.attrs=new bn}compile(){let e=this.env,t=this.layout,s={templateMeta:t.meta,symbols:t.symbols,asPartial:!1},n=this.tag.getDynamic(),i=this.tag.getStatic(),r=X(e,s)
if(r.startLabels(),n?(r.fetch(Lt.s1),Z(n,r),r.dup(),r.load(Lt.s1),r.test("simple"),r.jumpUnless("BODY"),r.fetch(Lt.s1),r.putComponentOperations(),r.openDynamicElement()):i&&(r.putComponentOperations(),r.openElementWithOperations(i)),n||i){r.didCreateElement(Lt.s0)
let e=this.attrs.buffer
r.setComponentAttrs(!0)
for(let t=0;t<e.length;t++)te(e[t],r)
r.setComponentAttrs(!1),r.flushElement()}r.label("BODY"),r.invokeStatic(t.asBlock()),n?(r.fetch(Lt.s1),r.test("simple"),r.jumpUnless("END"),r.closeElement()):i&&r.closeElement(),r.label("END"),r.didRenderLayout(Lt.s0),n&&r.load(Lt.s1),r.stopLabels()
let a=r.start
r.finalize()
return new dn(a,{meta:s,hasEval:t.hasEval,symbols:t.symbols.concat([xn])})}}class gn{constructor(e,t,s){this.env=e,this.componentName=t,this.layout=s,this.attrs=new bn}get tag(){throw new Error("BUG: Cannot call `tag` on an UnwrappedBuilder")}compile(){let e=this.env
return this.layout.asLayout(this.componentName,this.attrs.buffer).compileDynamic(e)}}class yn{constructor(){this.isDynamic=null,this.isStatic=null,this.staticTagName=null,this.dynamicTagName=null}getDynamic(){if(this.isDynamic)return this.dynamicTagName}getStatic(){if(this.isStatic)return this.staticTagName}static(e){this.isStatic=!0,this.staticTagName=e}dynamic(e){this.isDynamic=!0,this.dynamicTagName=[ln.ClientSideExpression,un.FunctionExpression,e]}}class bn{constructor(){this.buffer=[]}static(e,t){this.buffer.push([ln.StaticAttr,e,t,null])}dynamic(e,t){this.buffer.push([ln.DynamicAttr,e,[ln.ClientSideExpression,un.FunctionExpression,t],null])}}class vn{constructor(e){this.builder=e,this.env=e.env}static(e,t){let s=t[0],n=t[1],i=t[2],r=t[3],a=this.builder
a.pushComponentManager(e),a.invokeComponent(null,s,n,i,r)}dynamic(e,t,s){let n=s[0],i=s[1],r=s[2],a=s[3],o=this.builder
if(!e||0===e.length)throw new Error("Dynamic syntax without an argument")
let l=this.builder.meta.templateMeta
o.startLabels(),o.pushFrame(),o.returnTo("END"),o.compileArgs(e[0],e[1],!0),o.helper(function(e,s){return t(e,s,l)}),o.dup(),o.test("simple"),o.enter(2),o.jumpUnless("ELSE"),o.pushDynamicComponentManager(),o.invokeComponent(null,n,i,r,a),o.label("ELSE"),o.exit(),o.return(),o.label("END"),o.popFrame(),o.stopLabels()}}class kn{constructor(e,t,s){this.meta=e,this.statements=t,this.parameters=s}scan(){return new Fn(this.statements,{parameters:this.parameters,meta:this.meta})}}class wn{constructor(){this.labels=p(),this.targets=[]}label(e,t){this.labels[e]=t}target(e,t,s){this.targets.push({at:e,Target:t,target:s})}patch(e){let t=this.targets,s=this.labels
for(let i=0;i<t.length;i++){var n=t[i]
let r=n.at,a=s[n.target]-r
e.heap.setbyaddr(r+1,a)}}}class Sn{constructor(e,t,s){this.env=e,this.meta=t,this.program=s,this.labelsStack=new Nt,this.isComponentAttrs=!1,this.constants=s.constants,this.heap=s.heap,this.start=this.heap.malloc()}get pos(){return r(this.heap.size())}get nextPos(){return this.heap.size()}upvars(e){return l(e)}reserve(e){this.push(e,0,0,0)}push(e,t=0,s=0,n=0){this.heap.push(e),this.heap.push(t),this.heap.push(s),this.heap.push(n)}finalize(){return this.push(22),this.heap.finishMalloc(this.start),this.start}setComponentAttrs(e){this.isComponentAttrs=e}pushArgs(e){this.push(58,!0===e?1:0)}get labels(){return n(this.labelsStack.current,"bug: not in a label stack")}startLabels(){this.labelsStack.push(new wn)}stopLabels(){n(this.labelsStack.pop(),"unbalanced push and pop labels").patch(this.program)}pushComponentManager(e){this.push(56,this.other(e))}pushDynamicComponentManager(){this.push(57)}prepareArgs(e){this.push(59,e)}createComponent(e,t,s){let n=(!0===t?1:0)|(!0===s?1:0)<<1
this.push(60,n,e)}registerComponentDestructor(e){this.push(61,e)}beginComponentTransaction(){this.push(65)}commitComponentTransaction(){this.push(66)}putComponentOperations(){this.push(62)}getComponentSelf(e){this.push(63,e)}getComponentLayout(e){this.push(64,e)}didCreateElement(e){this.push(67,e)}didRenderLayout(e){this.push(68,e)}getPartialTemplate(){this.push(69)}resolveMaybeLocal(e){this.push(70,this.string(e))}debugger(e,t){this.push(71,this.constants.other(e),this.constants.array(t))}dynamicContent(e){this.push(26,e?1:0)}text(e){this.push(24,this.constants.string(e))}openPrimitiveElement(e){this.push(27,this.constants.string(e))}openElementWithOperations(e){this.push(28,this.constants.string(e))}openDynamicElement(){this.push(29)}flushElement(){this.push(33)}closeElement(){this.push(34)}staticAttr(e,t,s){let n=this.constants.string(e),i=t?this.constants.string(t):0
if(this.isComponentAttrs)this.primitive(s),this.push(32,n,1,i)
else{let e=this.constants.string(s)
this.push(30,n,e,i)}}dynamicAttr(e,t,s){let n=this.constants.string(e),i=t?this.constants.string(t):0
this.isComponentAttrs?this.push(32,n,!0===s?1:0,i):this.push(31,n,!0===s?1:0,i)}comment(e){let t=this.constants.string(e)
this.push(25,t)}modifier(e){this.push(35,this.other(e))}putIterator(){this.push(54)}enterList(e){this.reserve(52),this.labels.target(this.pos,52,e)}exitList(){this.push(53)}iterate(e){this.reserve(55),this.labels.target(this.pos,55,e)}setVariable(e){this.push(4,e)}getVariable(e){this.push(5,e)}getProperty(e){this.push(6,this.string(e))}getBlock(e){this.push(8,e)}hasBlock(e){this.push(9,e)}hasBlockParams(e){this.push(10,e)}concat(e){this.push(11,e)}function(e){this.push(2,this.func(e))}load(e){this.push(17,e)}fetch(e){this.push(18,e)}dup(e=Lt.sp,t=0){return this.push(15,e,t)}pop(e=1){return this.push(16,e)}pushRemoteElement(){this.push(36)}popRemoteElement(){this.push(37)}label(e){this.labels.label(e,this.nextPos)}pushRootScope(e,t){this.push(19,e,t?1:0)}pushChildScope(){this.push(20)}popScope(){this.push(21)}returnTo(e){this.reserve(23),this.labels.target(this.pos,23,e)}pushDynamicScope(){this.push(39)}popDynamicScope(){this.push(40)}pushImmediate(e){this.push(13,this.other(e))}primitive(e){let t,s=0
switch(typeof e){case"number":t=e
break
case"string":t=this.string(e),s=1
break
case"boolean":t=0|e,s=2
break
case"object":t=2,s=2
break
case"undefined":t=3,s=2
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(14,s<<30|t)}helper(e){this.push(1,this.func(e))}pushBlock(e){this.push(7,this.block(e))}bindDynamicScope(e){this.push(38,this.names(e))}enter(e){this.push(49,e)}exit(){this.push(50)}return(){this.push(22)}pushFrame(){this.push(47)}popFrame(){this.push(48)}compileDynamicBlock(){this.push(41)}invokeDynamic(e){this.push(43,this.other(e))}invokeStatic(e,t=0){let s=e.symbolTable.parameters,n=s.length,i=Math.min(t,n)
if(this.pushFrame(),i){this.pushChildScope()
for(let e=0;e<i;e++)this.dup(Lt.fp,t-e),this.setVariable(s[e])}let r=this.constants.block(e)
this.push(42,r),i&&this.popScope(),this.popFrame()}test(e){let t
if("const"===e)t=ys
else if("simple"===e)t=bs
else if("environment"===e)t=vs
else{if("function"!=typeof e)throw new Error("unreachable")
t=e}let s=this.constants.function(t)
this.push(51,s)}jump(e){this.reserve(44),this.labels.target(this.pos,44,e)}jumpIf(e){this.reserve(45),this.labels.target(this.pos,45,e)}jumpUnless(e){this.reserve(46),this.labels.target(this.pos,46,e)}string(e){return this.constants.string(e)}names(e){let t=[]
for(let s=0;s<e.length;s++){let n=e[s]
t[s]=this.constants.string(n)}return this.constants.array(t)}symbols(e){return this.constants.array(e)}other(e){return this.constants.other(e)}block(e){return e?this.constants.block(e):0}func(e){return this.constants.function(e)}}class _n extends Sn{constructor(e,t,s=e.program){super(e,t,s),this.component=new vn(this)}compileArgs(e,t,s){let n=0
if(e){for(let t=0;t<e.length;t++)Z(e[t],this)
n=e.length}this.pushImmediate(n)
let i=Mt
if(t){i=t[0]
let e=t[1]
for(let t=0;t<e.length;t++)Z(e[t],this)}this.pushImmediate(i),this.pushArgs(s)}compile(e){return K(e)?e.compile(this):e}guardedAppend(e,t){this.startLabels(),this.pushFrame(),this.returnTo("END"),Z(e,this),this.dup(),this.test(e=>Rs.create(e)),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(),this.invokeComponent(null,null,null,null,null),this.exit(),this.return(),this.label("ELSE"),this.dynamicContent(t),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()}invokeComponent(e,t,s,n,i=null){this.fetch(Lt.s0),this.dup(Lt.sp,1),this.load(Lt.s0),this.pushBlock(n),this.pushBlock(i),this.compileArgs(t,s,!1),this.prepareArgs(Lt.s0),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(Lt.s0,null!==n,null!==i),this.registerComponentDestructor(Lt.s0),this.getComponentSelf(Lt.s0),this.getComponentLayout(Lt.s0),this.invokeDynamic(new Tn(e&&e.scan())),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(Lt.s0)}template(e){return e?new kn(this.meta,e.statements,e.parameters):null}}var En=ln
const xn="&attrs"
class Cn{constructor(e=0){this.offset=e,this.names=p(),this.funcs=[]}add(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1}compile(e,t){let s=e[this.offset],n=this.names[s],i=this.funcs[n]
a(!!i,`expected an implementation for ${0===this.offset?En[e[0]]:un[e[1]]}`),i(e,t)}}const Nn=new Cn,An=new Cn(1)
Nn.add(En.Text,(e,t)=>{t.text(e[1])}),Nn.add(En.Comment,(e,t)=>{t.comment(e[1])}),Nn.add(En.CloseElement,(e,t)=>{t.closeElement()}),Nn.add(En.FlushElement,(e,t)=>{t.flushElement()}),Nn.add(En.Modifier,(e,t)=>{let s=t.env,n=t.meta,i=e[1],r=e[2],a=e[3]
if(!s.hasModifier(i,n.templateMeta))throw new Error(`Compile Error ${i} is not a modifier: Helpers may not be used in the element form.`)
t.compileArgs(r,a,!0),t.modifier(s.lookupModifier(i,n.templateMeta))}),Nn.add(En.StaticAttr,(e,t)=>{let s=e[1],n=e[2],i=e[3]
t.staticAttr(s,i,n)}),Nn.add(En.DynamicAttr,(e,t)=>{q(e,!1,t)}),Nn.add(En.TrustingAttr,(e,t)=>{q(e,!0,t)}),Nn.add(En.OpenElement,(e,t)=>{t.openPrimitiveElement(e[1])}),An.add(un.OpenComponentElement,(e,t)=>{t.putComponentOperations(),t.openElementWithOperations(e[2])}),An.add(un.DidCreateElement,(e,t)=>{t.didCreateElement(Lt.s0)}),An.add(un.SetComponentAttrs,(e,t)=>{t.setComponentAttrs(e[2])}),An.add(un.Debugger,()=>{}),An.add(un.DidRenderLayout,(e,t)=>{t.didRenderLayout(Lt.s0)}),Nn.add(En.Append,(e,t)=>{let s=e[1],n=e[2]
if(!0===(t.env.macros().inlines.compile(e,t)||s))return
let i=Ln.isGet(s),r=Ln.isMaybeLocal(s)
n?t.guardedAppend(s,!0):i||r?t.guardedAppend(s,!1):(Z(s,t),t.dynamicContent(!1))}),Nn.add(En.Block,(e,t)=>{let s=e[1],n=e[2],i=e[3],r=e[4],a=e[5],o=t.template(r),l=t.template(a),h=o&&o.scan(),c=l&&l.scan()
t.env.macros().blocks.compile(s,n,i,h,c,t)})
class Tn{constructor(e){this.attrs=e}invoke(e,t){var s=t.symbolTable
let n=s.symbols,i=s.hasEval,r=e.stack,o=e.pushRootScope(n.length+1,!0)
o.bindSelf(r.pop()),o.bindBlock(n.indexOf(xn)+1,this.attrs)
let l=null,h=-1
i&&(h=n.indexOf("$eval")+1,l=p())
let c=r.pop()
for(let a=c.length-1;a>=0;a--){let e=n.indexOf(c[a]),t=r.pop();-1!==e&&o.bindSymbol(e+1,t),i&&(l[c[a]]=t)}let u=r.pop()
a("number"==typeof u,"[BUG] Incorrect value of positional argument count found during invoke-dynamic-layout."),r.pop(u)
let d=n.indexOf("&inverse"),m=r.pop();-1!==d&&o.bindBlock(d+1,m),l&&(l["&inverse"]=m)
let f=n.indexOf("&default"),g=r.pop();-1!==f&&o.bindBlock(f+1,g),l&&(l["&default"]=g),l&&o.bindEvalScope(l),e.pushFrame(),e.call(t.handle)}toJSON(){return{GlimmerDebug:"<invoke-dynamic-layout>"}}}Nn.add(En.Component,(e,t)=>{let s=e[1],n=e[2],i=e[3],r=e[4]
if(t.env.hasComponentDefinition(s,t.meta.templateMeta)){let e=t.template(r),a=[[En.ClientSideStatement,un.SetComponentAttrs,!0],...n,[En.ClientSideStatement,un.SetComponentAttrs,!1]],o=new kn(t.meta,a,Mt),l=t.env.getComponentDefinition(s,t.meta.templateMeta)
t.pushComponentManager(l),t.invokeComponent(o,null,i,e&&e.scan())}else{if(r&&r.parameters.length)throw new Error(`Compile Error: Cannot find component ${s}`)
t.openPrimitiveElement(s)
for(let e=0;e<n.length;e++)Nn.compile(n[e],t)
if(t.flushElement(),r){let e=r.statements
for(let s=0;s<e.length;s++)Nn.compile(e[s],t)}t.closeElement()}})
class On{constructor(e,t){this.outerSymbols=e,this.evalInfo=t}invoke(e,t){let n=s(t),i=n.symbolTable.symbols,r=e.scope(),a=e.pushRootScope(i.length,!1)
a.bindCallerScope(r.getCallerScope()),a.bindEvalScope(r.getEvalScope()),a.bindSelf(r.getSelf())
let o=this.evalInfo,l=this.outerSymbols,h=p()
for(let s=0;s<o.length;s++){let e=o[s],t=l[e-1],n=r.getSymbol(e)
h[t]=n}let c=r.getEvalScope()
for(let s=0;s<i.length;s++){let e=s+1,t=c[i[s]]
void 0!==t&&a.bind(e,t)}a.bindPartialMap(h),e.pushFrame(),e.call(n.handle)}}Nn.add(En.Partial,(e,t)=>{let s=e[1],n=e[2]
var i=t.meta
let r=i.templateMeta,a=i.symbols
t.startLabels(),t.pushFrame(),t.returnTo("END"),Z(s,t),t.pushImmediate(1),t.pushImmediate(Mt),t.pushArgs(!0),t.helper(function(e,t){let s=e.env
return k(t.positional.at(0),e=>{if("string"==typeof e&&e){if(!s.hasPartial(e,r))throw new Error(`Could not find a partial named "${e}"`)
return s.lookupPartial(e,r)}if(e)throw new Error(`Could not find a partial named "${String(e)}"`)
return null})}),t.dup(),t.test("simple"),t.enter(2),t.jumpUnless("ELSE"),t.getPartialTemplate(),t.compileDynamicBlock(),t.invokeDynamic(new On(a,n)),t.popScope(),t.popFrame(),t.label("ELSE"),t.exit(),t.return(),t.label("END"),t.popFrame(),t.stopLabels()})
class Dn{constructor(e){this.callerCount=e}invoke(e,t){let s=this.callerCount,n=e.stack
if(!t)return e.pushFrame(),void e.pushCallerScope()
let i=t.symbolTable.parameters,r=i?i.length:0,a=Math.min(s,r)
e.pushFrame(),e.pushCallerScope(r>0)
let o=e.scope()
for(let l=0;l<a;l++)o.bindSymbol(i[l],n.fromBase(s-l))
e.call(t.handle)}toJSON(){return{GlimmerDebug:`<invoke-dynamic-yield caller-count=${this.callerCount}>`}}}Nn.add(En.Yield,(e,t)=>{let s=e[1],n=Q(e[2],t)
t.getBlock(s),t.compileDynamicBlock(),t.invokeDynamic(new Dn(n)),t.popScope(),t.popFrame(),n&&t.pop(n)}),Nn.add(En.Debugger,(e,t)=>{let s=e[1]
t.debugger(t.meta.symbols,s)}),Nn.add(En.ClientSideStatement,(e,t)=>{An.compile(e,t)})
const Bn=new Cn,Mn=new Cn(1)
var Ln=hn
Bn.add(En.Unknown,(e,t)=>{let s=e[1]
t.env.hasHelper(s,t.meta.templateMeta)?Bn.compile([En.Helper,s,Mt,null],t):t.meta.asPartial?t.resolveMaybeLocal(s):(t.getVariable(0),t.getProperty(s))}),Bn.add(En.Concat,(e,t)=>{let s=e[1]
for(let n=0;n<s.length;n++)Z(s[n],t)
t.concat(s.length)}),Mn.add(un.FunctionExpression,(e,t)=>{t.function(e[2])}),Bn.add(En.Helper,(e,t)=>{let s=t.env,n=t.meta,i=e[1],r=e[2],a=e[3]
if(!s.hasHelper(i,n.templateMeta))throw new Error(`Compile Error: ${i} is not a helper`)
t.compileArgs(r,a,!0),t.helper(s.lookupHelper(i,n.templateMeta))}),Bn.add(En.Get,(e,t)=>{let s=e[1],n=e[2]
t.getVariable(s)
for(let i=0;i<n.length;i++)t.getProperty(n[i])}),Bn.add(En.MaybeLocal,(e,t)=>{let s=e[1]
if(t.meta.asPartial){let e=s[0]
s=s.slice(1),t.resolveMaybeLocal(e)}else t.getVariable(0)
for(let n=0;n<s.length;n++)t.getProperty(s[n])}),Bn.add(En.Undefined,(e,t)=>t.primitive(void 0)),Bn.add(En.HasBlock,(e,t)=>{t.hasBlock(e[1])}),Bn.add(En.HasBlockParams,(e,t)=>{t.hasBlockParams(e[1])}),Bn.add(En.ClientSideExpression,(e,t)=>{Mn.compile(e,t)})
class jn{constructor(){this.names=p(),this.funcs=[]}add(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1}addMissing(e){this.missing=e}compile(e,t,s,n,i,r){let o=this.names[e]
void 0===o?(a(!!this.missing,`${e} not found, and no catch-all block handler was registered`),a(!!(0,this.missing)(e,t,s,n,i,r),`${e} not found, and the catch-all block handler didn't handle it`)):(0,this.funcs[o])(t,s,n,i,r)}}class In{constructor(){this.names=p(),this.funcs=[]}add(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1}addMissing(e){this.missing=e}compile(e,t){let s=e[1]
if(!Array.isArray(s))return["expr",s]
let n,i,r
if(s[0]===En.Helper)n=s[1],i=s[2],r=s[3]
else{if(s[0]!==En.Unknown)return["expr",s]
n=s[1],i=r=null}let a=this.names[n]
if(void 0===a&&this.missing){let e=(0,this.missing)(n,i,r,t)
return!1===e?["expr",s]:e}if(void 0!==a){let e=(0,this.funcs[a])(n,i,r,t)
return!1===e?["expr",s]:e}return["expr",s]}}ee(new jn,new In)
class Fn{constructor(e,t){this.statements=e,this.symbolTable=t,this.compiledStatic=null,this.compiledDynamic=null}compileStatic(e){let t=this.compiledStatic
if(!t){let s=se(this.statements,this.symbolTable.meta,e)
s.finalize()
let n=s.start
t=this.compiledStatic=new pn(n)}return t}compileDynamic(e){let t=this.compiledDynamic
if(!t){let s=this.compileStatic(e)
t=new dn(s.handle,this.symbolTable)}return t}}var Rn=ln
class Pn{constructor(e,t){this.block=e,this.env=t}scanEntryPoint(e){let t=this.block,s=t.statements,n=t.symbols,i=t.hasEval
return new Fn(s,{meta:e,symbols:n,hasEval:i})}scanBlock(e){let t=this.block.statements
return new Fn(t,{meta:e,parameters:Mt})}scanLayout(e,t,s){let n=this.block,i=n.symbols,r=n.hasEval,a=new Vn(n,this.env,e,t,s)
return new Fn(a.scan(),{meta:e,hasEval:r,symbols:i})}}class Vn{constructor(e,t,s,n,i){this.env=t,this.attrs=n,this.componentName=i,this.state=0
let r=e.statements,a=e.symbols
this.statements=r,this.symbols=a,this.meta=s.templateMeta}scan(){let e=this.statements
this.state=0
let t=[]
for(let s=0;s<e.length;s++)this.processStatement(this.statements[s],t)
return t.push([Rn.ClientSideStatement,un.DidRenderLayout]),t}processStatement(e,t){switch(this.state){case 0:this.processBeforeTopLevel(e,t)
break
case 1:this.processInTopLevel(e,t)
break
case 2:t.push(e)
break
default:throw i()}}processBeforeTopLevel(e,t){cn.isComponent(e)?this.processTopLevelComponent(e,t):cn.isOpenElement(e)?this.processIsOpenElement(e,t):t.push(e)}processTopLevelComponent(e,t){let s=e[1],n=e[2],i=e[4]
if(this.env.hasComponentDefinition(s,this.meta)&&s!==this.componentName)return t.push(e),void(this.state=2)
a(!this.env.hasComponentDefinition(s,this.meta)||s===this.componentName,`Cannot use a component (<${s}>) as the top-level element in the layout of <${this.componentName}>`),this.state=1,t.push([Rn.ClientSideStatement,un.SetComponentAttrs,!0]),t.push([Rn.ClientSideStatement,un.OpenComponentElement,s]),t.push([Rn.ClientSideStatement,un.DidCreateElement])
for(let r=0;r<n.length;r++)this.processStatement(n[r],t)
if(this.processStatement([Rn.FlushElement],t),i){let e=i.statements
for(let s=0;s<e.length;s++)this.processStatement(e[s],t)}this.processStatement([Rn.CloseElement],t)}processIsOpenElement(e,t){let s=e[1]
this.state=1,t.push([Rn.ClientSideStatement,un.SetComponentAttrs,!0]),t.push([Rn.ClientSideStatement,un.OpenComponentElement,s]),t.push([Rn.ClientSideStatement,un.DidCreateElement])}processInTopLevel(e,t){if(a(!cn.isModifier(e),`Cannot use element modifiers ({{${e[1]} ...}}) in the top-level element in the layout of <${this.componentName}>`),cn.isFlushElement(e)){let e=this.symbols,s=this.attrs
this.state=2
let n=e.push(xn)
t.push(...s),t.push([Rn.Yield,n,Mt]),t.push([Rn.ClientSideStatement,un.SetComponentAttrs,!1])}t.push(e)}}class Un{constructor(){this.references=[],this.strings=[],this.expressions=[],this.arrays=[],this.blocks=[],this.functions=[],this.others=[]}getReference(e){return this.references[e-1]}reference(e){let t=this.references.length
return this.references.push(e),t+1}getString(e){return this.strings[e-1]}string(e){let t=this.strings.length
return this.strings.push(e),t+1}getExpression(e){return this.expressions[e-1]}getArray(e){return this.arrays[e-1]}getNames(e){let t=[],s=this.getArray(e)
for(let n=0;n<s.length;n++){let e=s[n]
t[n]=this.getString(e)}return t}array(e){let t=this.arrays.length
return this.arrays.push(e),t+1}getBlock(e){return this.blocks[e-1]}block(e){let t=this.blocks.length
return this.blocks.push(e),t+1}getFunction(e){return this.functions[e-1]}function(e){let t=this.functions.length
return this.functions.push(e),t+1}getOther(e){return this.others[e-1]}other(e){let t=this.others.length
return this.others.push(e),t+1}}const $n=["javascript:","vbscript:"],Hn=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],zn=["EMBED"],Wn=["href","src","background","action"],Gn=["src"],Jn={BUTTON:{type:!0,form:!0},INPUT:{type:!0,form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}}
let Yn={colgroup:{depth:2,before:"<table><colgroup>",after:"</colgroup></table>"},table:{depth:1,before:"<table>",after:"</table>"},tbody:{depth:2,before:"<table><tbody>",after:"</tbody></table>"},tfoot:{depth:2,before:"<table><tfoot>",after:"</tfoot></table>"},thead:{depth:2,before:"<table><thead>",after:"</thead></table>"},tr:{depth:3,before:"<table><tbody><tr>",after:"</tr></tbody></table>"}}
const Xn="http://www.w3.org/2000/svg",Kn="http://www.w3.org/2000/svg",qn={foreignObject:1,desc:1,title:1},Zn=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(e=>Zn[e]=1)
let Qn="undefined"==typeof document?null:document
class ei{constructor(e){this.document=e,this.setupUselessElement()}setupUselessElement(){this.uselessElement=this.document.createElement("div")}createElement(e,t){let s,n
if(t?(s=t.namespaceURI===Kn||"svg"===e,n=qn[t.tagName]):(s="svg"===e,n=!1),s&&!n){if(Zn[e])throw new Error(`Cannot create a ${e} inside an SVG context`)
return this.document.createElementNS(Kn,e)}return this.document.createElement(e)}insertBefore(e,t,s){e.insertBefore(t,s)}insertHTMLBefore(e,t,s){return ve(this.uselessElement,e,t,s)}createTextNode(e){return this.document.createTextNode(e)}createComment(e){return this.document.createComment(e)}}var ti;(function(e){class t extends ei{createElementNS(e,t){return this.document.createElementNS(e,t)}setAttribute(e,t,s,n=null){n?e.setAttributeNS(n,t,s):e.setAttribute(t,s)}}e.TreeConstruction=t
let s=t
s=ge(Qn,s),s=ce(Qn,s),s=de(Qn,s,Kn),e.DOMTreeConstruction=s})(ti||(ti={}))
class si extends ei{constructor(e){super(e),this.document=e,this.namespace=null}setAttribute(e,t,s){e.setAttribute(t,s)}setAttributeNS(e,t,s,n){e.setAttributeNS(t,s,n)}removeAttribute(e,t){e.removeAttribute(t)}removeAttributeNS(e,t,s){e.removeAttributeNS(t,s)}insertNodeBefore(e,t,s){if(ke(t)){let n=t.firstChild,i=t.lastChild
return this.insertBefore(e,t,s),new zs(e,n,i)}return this.insertBefore(e,t,s),new Ws(e,t)}insertTextBefore(e,t,s){let n=this.createTextNode(s)
return this.insertBefore(e,n,t),n}insertBefore(e,t,s){e.insertBefore(t,s)}insertAfter(e,t,s){this.insertBefore(e,t,s.nextSibling)}}let ni=si
ni=function(e,t){return e&&ye(e)?class extends t{constructor(e){super(e),this.uselessComment=e.createComment("")}insertHTMLBefore(e,t,s){if(null===s)return super.insertHTMLBefore(e,t,s)
let n=!1,i=t?t.previousSibling:e.lastChild
i&&i instanceof Text&&(n=!0,e.insertBefore(this.uselessComment,t))
let r=super.insertHTMLBefore(e,t,s)
return n&&e.removeChild(this.uselessComment),r}}:t}(Qn,ni),ni=function(e,t){if(!e)return t
if(!pe(e))return t
let s=e.createElement("div")
return class extends t{insertHTMLBefore(e,t,n){if(null===n||""===n)return super.insertHTMLBefore(e,t,n)
let i=e.tagName.toLowerCase(),r=Yn[i]
return void 0===r?super.insertHTMLBefore(e,t,n):ue(e,r,s,n,t)}}}(Qn,ni)
var ii=ni=function(e,t,s){if(!e)return t
if(!fe(e,s))return t
let n=e.createElement("div")
return class extends t{insertHTMLBefore(e,t,i){return null===i||""===i?super.insertHTMLBefore(e,t,i):e.namespaceURI!==s?super.insertHTMLBefore(e,t,i):me(e,n,i,t)}}}(Qn,ni,Kn)
const ri=ti.DOMTreeConstruction
class ai{constructor(e){this.attribute=e}}class oi extends ai{set(e,t,s){let n=Ce(t)
if(null!==n){var i=this.attribute
let t=i.name,s=i.namespace
e.__setAttribute(t,n,s)}}update(e,t){let s=Ce(e)
var n=this.attribute
let i=n.element,r=n.name
null===s?i.removeAttribute(r):i.setAttribute(r,s)}}class li extends ai{set(e,t,s){if(null!==t&&void 0!==t){let s=this.attribute.name
e.__setProperty(s,t)}}update(e,t){var s=this.attribute
s.element[s.name]=e,null!==e&&void 0!==e||this.removeAttribute()}removeAttribute(){var e=this.attribute
let t=e.element,s=e.name,n=e.namespace
n?t.removeAttributeNS(n,s):t.removeAttribute(s)}}class hi extends li{set(e,t,s){var n=this.attribute
let i=oe(s,n.element,n.name,t)
super.set(e,i,s)}update(e,t){var s=this.attribute
let n=oe(t,s.element,s.name,e)
super.update(n,t)}}class ci extends oi{set(e,t,s){var n=this.attribute
let i=oe(s,n.element,n.name,t)
super.set(e,i,s)}update(e,t){var s=this.attribute
let n=oe(t,s.element,s.name,e)
super.update(n,t)}}class ui extends li{set(e,t){e.__setProperty("value",_(t))}update(e){let t=this.attribute.element,s=t.value,n=_(e)
s!==n&&(t.value=n)}}class pi extends li{set(e,t){null!==t&&void 0!==t&&!1!==t&&e.__setProperty("selected",!0)}update(e){let t=this.attribute.element
t.selected=!!e}}class di{constructor(e,t,s,n){this.slots=e,this.callerScope=t,this.evalScope=s,this.partialMap=n}static root(e,t=0){let s=new Array(t+1)
for(let n=0;n<=t;n++)s[n]=us
return new di(s,null,null,null).init({self:e})}static sized(e=0){let t=new Array(e+1)
for(let s=0;s<=e;s++)t[s]=us
return new di(t,null,null,null)}init({self:e}){return this.slots[0]=e,this}getSelf(){return this.get(0)}getSymbol(e){return this.get(e)}getBlock(e){return this.get(e)}getEvalScope(){return this.evalScope}getPartialMap(){return this.partialMap}bind(e,t){this.set(e,t)}bindSelf(e){this.set(0,e)}bindSymbol(e,t){this.set(e,t)}bindBlock(e,t){this.set(e,t)}bindEvalScope(e){this.evalScope=e}bindPartialMap(e){this.partialMap=e}bindCallerScope(e){this.callerScope=e}getCallerScope(){return this.callerScope}child(){return new di(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)}get(e){if(e>=this.slots.length)throw new RangeError(`BUG: cannot get $${e} from scope; length=${this.slots.length}`)
return this.slots[e]}set(e,t){if(e>=this.slots.length)throw new RangeError(`BUG: cannot get $${e} from scope; length=${this.slots.length}`)
this.slots[e]=t}}class mi{constructor(){this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}didCreate(e,t){this.createdComponents.push(e),this.createdManagers.push(t)}didUpdate(e,t){this.updatedComponents.push(e),this.updatedManagers.push(t)}scheduleInstallModifier(e,t){this.scheduledInstallManagers.push(t),this.scheduledInstallModifiers.push(e)}scheduleUpdateModifier(e,t){this.scheduledUpdateModifierManagers.push(t),this.scheduledUpdateModifiers.push(e)}didDestroy(e){this.destructors.push(e)}commit(){let e=this.createdComponents,t=this.createdManagers
for(let h=0;h<e.length;h++){let s=e[h]
t[h].didCreate(s)}let s=this.updatedComponents,n=this.updatedManagers
for(let h=0;h<s.length;h++){let e=s[h]
n[h].didUpdate(e)}let i=this.destructors
for(let h=0;h<i.length;h++)i[h].destroy()
let r=this.scheduledInstallManagers,a=this.scheduledInstallModifiers
for(let h=0;h<r.length;h++){let e=r[h],t=a[h]
e.install(t)}let o=this.scheduledUpdateModifierManagers,l=this.scheduledUpdateModifiers
for(let h=0;h<o.length;h++){let e=o[h],t=l[h]
e.update(t)}}}class fi{constructor(e){this.heap=e,this.offset=0}get type(){return this.heap.getbyaddr(this.offset)}get op1(){return this.heap.getbyaddr(this.offset+1)}get op2(){return this.heap.getbyaddr(this.offset+2)}get op3(){return this.heap.getbyaddr(this.offset+3)}}var gi;(function(e){e[e.Allocated=0]="Allocated",e[e.Freed=1]="Freed",e[e.Purged=2]="Purged",e[e.Pointer=3]="Pointer"})(gi||(gi={}))
class yi{constructor(){this.heap=[],this.offset=0,this.handle=0,this.table=[]}push(e){this.heap[this.offset++]=e}getbyaddr(e){return this.heap[e]}setbyaddr(e,t){this.heap[e]=t}malloc(){this.table.push(this.offset,0,0)
let e=this.handle
return this.handle+=3,e}finishMalloc(e){let t=this.table[e],s=this.offset
this.table[e+1]=s-t}size(){return this.offset}getaddr(e){return this.table[e]}gethandle(e){this.table.push(e,0,gi.Pointer)
let t=this.handle
return this.handle+=3,t}sizeof(e){return-1}free(e){this.table[e+2]=1}compact(){let e=0,t=this.table,s=this.table.length,n=this.heap
for(let i=0;i<s;i+=3){let s=t[i],r=t[i+1],a=t[i+2]
if(a!==gi.Purged)if(a===gi.Freed)t[i+2]=2,e+=r
else if(a===gi.Allocated){for(let t=s;t<=i+r;t++)n[t-e]=n[t]
t[i]=s-e}else a===gi.Pointer&&(t[i]=s-e)}this.offset=this.offset-e}}class bi{constructor(){this.heap=new yi,this._opcode=new fi(this.heap),this.constants=new Un}opcode(e){return this._opcode.offset=e,this._opcode}}class vi{constructor({appendOperations:e,updateOperations:t}){this._macros=null,this._transaction=null,this.program=new bi,this.appendOperations=e,this.updateOperations=t}toConditionalReference(e){return new fs(e)}getAppendOperations(){return this.appendOperations}getDOM(){return this.updateOperations}getIdentity(e){return c(e)+""}begin(){a(!this._transaction,"a glimmer transaction was begun, but one already exists. You may have a nested transaction"),this._transaction=new mi}get transaction(){return n(this._transaction,"must be in a transaction")}didCreate(e,t){this.transaction.didCreate(e,t)}didUpdate(e,t){this.transaction.didUpdate(e,t)}scheduleInstallModifier(e,t){this.transaction.scheduleInstallModifier(e,t)}scheduleUpdateModifier(e,t){this.transaction.scheduleUpdateModifier(e,t)}didDestroy(e){this.transaction.didDestroy(e)}commit(){let e=this.transaction
this._transaction=null,e.commit()}attributeFor(e,t,s,n=null){return we(e,t)}macros(){let e=this._macros
return e||(this._macros=e=this.populateBuiltins()),e}populateBuiltins(){return ee()}}class ki{constructor(e,{alwaysRevalidate:t=!1}){this.frameStack=new Nt,this.env=e,this.constants=e.program.constants,this.dom=e.getDOM(),this.alwaysRevalidate=t}execute(e,t){let s=this.frameStack
for(this.try(e,t);;){if(s.isEmpty())break
let e=this.frame.nextStatement()
null!==e?e.evaluate(this):this.frameStack.pop()}}get frame(){return n(this.frameStack.current,"bug: expected a frame")}goto(e){this.frame.goto(e)}try(e,t){this.frameStack.push(new xi(this,e,t))}throw(){this.frame.handleException(),this.frameStack.pop()}evaluateOpcode(e){e.evaluate(this)}}class wi extends Rt{constructor(e,t,s,n){super(),this.start=e,this.type="block",this.next=null,this.prev=null
let i=t.env,r=t.scope,a=t.dynamicScope,o=t.stack
this.children=n,this.env=i,this.scope=r,this.dynamicScope=a,this.stack=o,this.bounds=s}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}evaluate(e){e.try(this.children,null)}destroy(){this.bounds.destroy()}didDestroy(){this.env.didDestroy(this.bounds)}toJSON(){let e=p()
return e.guid=`${this._guid}`,{guid:this._guid,type:this.type,details:e,children:this.children.toArray().map(e=>e.toJSON())}}}class Si extends wi{constructor(e,t,s,n){super(e,t,s,n),this.type="try",this.tag=this._tag=qt.create(zt)}didInitializeChildren(){this._tag.inner.update(y(this.children))}evaluate(e){e.try(this.children,this)}handleException(){let e=this.env,t=this.bounds,s=this.children,n=this.scope,i=this.dynamicScope,r=this.start,a=this.stack,o=this.prev,l=this.next
s.clear()
let h=en.resume(e,t,t.reset(e)),c=new Ai(e,n,i,h),u=new Tt
c.execute(r,e=>{e.stack=Ni.restore(a),e.updatingOpcodeStack.push(u),e.updateWith(this),e.updatingOpcodeStack.push(s)}),this.prev=o,this.next=l}toJSON(){let e=super.toJSON(),t=e.details
return t||(t=e.details={}),super.toJSON()}}class _i{constructor(e,t){this.opcode=e,this.marker=t,this.didInsert=!1,this.didDelete=!1,this.map=e.map,this.updating=e.children}insert(e,t,s,n){let i=this.map,r=this.opcode,a=this.updating,o=null,l=null
o=n?(l=i[n]).bounds.firstNode():this.marker
let h=r.vmForInsertion(o),c=null,u=r.start
h.execute(u,n=>{i[e]=c=n.iterate(s,t),n.updatingOpcodeStack.push(new Tt),n.updateWith(c),n.updatingOpcodeStack.push(c.children)}),a.insertBefore(c,l),this.didInsert=!0}retain(e,t,s){}move(e,t,s,n){let i=this.map,r=this.updating,a=i[e],o=i[n]||null
n?L(a,o.firstNode()):L(a,this.marker),r.remove(a),r.insertBefore(a,o)}delete(e){let t=this.map,s=t[e]
s.didDestroy(),j(s),this.updating.remove(s),delete t[e],this.didDelete=!0}done(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)}}class Ei extends wi{constructor(e,t,s,n,i){super(e,t,s,n),this.type="list-block",this.map=p(),this.lastIterated=Pt,this.artifacts=i
let r=this._tag=qt.create(zt)
this.tag=b([i.tag,r])}didInitializeChildren(e=!0){this.lastIterated=this.artifacts.tag.value(),e&&this._tag.inner.update(y(this.children))}evaluate(e){let t=this.artifacts,s=this.lastIterated
if(!t.tag.validate(s)){let s=this.bounds,i=e.dom,r=i.createComment("")
i.insertAfter(s.parentElement(),r,n(s.lastNode(),"can't insert after an empty bounds"))
let a=new _i(this,r)
new os({target:a,artifacts:t}).sync(),this.parentElement().removeChild(r)}super.evaluate(e)}vmForInsertion(e){let t=this.env,s=this.scope,n=this.dynamicScope,i=en.forInitialRender(this.env,this.bounds.parentElement(),e)
return new Ai(t,s,n,i)}toJSON(){let e=super.toJSON(),t=this.map,s=Object.keys(t).map(e=>`${JSON.stringify(e)}: ${t[e]._guid}`).join(", "),n=e.details
return n||(n=e.details={}),n.map=`{${s}}`,e}}class xi{constructor(e,t,s){this.vm=e,this.ops=t,this.exceptionHandler=s,this.vm=e,this.ops=t,this.current=t.head()}goto(e){this.current=e}nextStatement(){let e=this.current,t=this.ops
return e&&(this.current=t.nextNode(e)),e}handleException(){this.exceptionHandler&&this.exceptionHandler.handleException()}}class Ci{constructor(e,t,s){this.env=e,this.updating=t,this.bounds=s}rerender({alwaysRevalidate:e=!1}={alwaysRevalidate:!1}){let t=this.env,s=this.updating
new ki(t,{alwaysRevalidate:e}).execute(s,this)}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}opcodes(){return this.updating}handleException(){throw"this should never happen"}destroy(){this.bounds.destroy(),j(this.bounds)}}class Ni{constructor(e,t,s){this.stack=e,this.fp=t,this.sp=s}static empty(){return new this([],0,-1)}static restore(e){return new this(e.slice(),0,e.length-1)}isEmpty(){return-1===this.sp}push(e){this.stack[++this.sp]=e}dup(e=this.sp){this.push(this.stack[e])}pop(e=1){let t=this.stack[this.sp]
return this.sp-=e,t}peek(){return this.stack[this.sp]}fromBase(e){return this.stack[this.fp-e]}fromTop(e){return this.stack[this.sp-e]}capture(e){let t=this.sp+1,s=t-e
return this.stack.slice(s,t)}reset(){this.stack.length=0}toArray(){return this.stack.slice(this.fp,this.sp+1)}}class Ai{constructor(e,t,s,n){this.env=e,this.elementStack=n,this.dynamicScopeStack=new Nt,this.scopeStack=new Nt,this.updatingOpcodeStack=new Nt,this.cacheGroups=new Nt,this.listBlockStack=new Nt,this.stack=Ni.empty(),this.pc=-1,this.ra=-1,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.env=e,this.heap=e.program.heap,this.constants=e.program.constants,this.elementStack=n,this.scopeStack.push(t),this.dynamicScopeStack.push(s)}get fp(){return this.stack.fp}set fp(e){this.stack.fp=e}get sp(){return this.stack.sp}set sp(e){this.stack.sp=e}fetch(e){this.stack.push(this[Lt[e]])}load(e){this[Lt[e]]=this.stack.pop()}fetchValue(e){return this[Lt[e]]}loadValue(e,t){this[Lt[e]]=t}pushFrame(){this.stack.push(this.ra),this.stack.push(this.fp),this.fp=this.sp-1}popFrame(){this.sp=this.fp-1,this.ra=this.stack.fromBase(0),this.fp=this.stack.fromBase(-1)}goto(e){this.pc=r(this.pc+e)}call(e){let t=this.heap.getaddr(e)
this.ra=this.pc,this.pc=t}returnTo(e){this.ra=r(this.pc+e)}return(){this.pc=this.ra}static initial(e,t,s,n,i){let r=di.root(t,i.symbolTable.symbols.length),a=new Ai(e,r,s,n)
return a.pc=a.heap.getaddr(i.handle),a.updatingOpcodeStack.push(new Tt),a}capture(e){return{dynamicScope:this.dynamicScope(),env:this.env,scope:this.scope(),stack:this.stack.capture(e)}}beginCacheGroup(){this.cacheGroups.push(this.updating().tail())}commitCacheGroup(){let e=new _s("END"),t=this.updating(),s=this.cacheGroups.pop(),n=s?t.nextNode(s):t.head(),i=t.tail(),r=y(new Ot(n,i)),a=new ws(r,e)
t.insertBefore(a,n),t.append(new Ss(a)),t.append(e)}enter(e){let t=new Tt,s=this.capture(e),n=this.elements().pushUpdatableBlock(),i=new Si(this.heap.gethandle(this.pc),s,n,t)
this.didEnter(i)}iterate(e,t){let s=this.stack
s.push(t),s.push(e)
let n=this.capture(2),i=this.elements().pushUpdatableBlock()
return new Si(this.heap.gethandle(this.pc),n,i,new Tt)}enterItem(e,t){this.listBlock().map[e]=t,this.didEnter(t)}enterList(e){let t=new Tt,s=this.capture(0),n=this.elements().pushBlockList(t),i=this.stack.peek().artifacts,a=this.heap.gethandle(r(this.pc+e)),o=new Ei(a,s,n,t,i)
this.listBlockStack.push(o),this.didEnter(o)}didEnter(e){this.updateWith(e),this.updatingOpcodeStack.push(e.children)}exit(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()}exitList(){this.exit(),this.listBlockStack.pop()}updateWith(e){this.updating().append(e)}listBlock(){return n(this.listBlockStack.current,"expected a list block")}updating(){return n(this.updatingOpcodeStack.current,"expected updating opcode on the updating opcode stack")}elements(){return this.elementStack}scope(){return n(this.scopeStack.current,"expected scope on the scope stack")}dynamicScope(){return n(this.dynamicScopeStack.current,"expected dynamic scope on the dynamic scope stack")}pushChildScope(){this.scopeStack.push(this.scope().child())}pushCallerScope(e=!1){let t=n(this.scope().getCallerScope(),"pushCallerScope is called when a caller scope is present")
this.scopeStack.push(e?t.child():t)}pushDynamicScope(){let e=this.dynamicScope().child()
return this.dynamicScopeStack.push(e),e}pushRootScope(e,t){let s=di.sized(e)
return t&&s.bindCallerScope(this.scope()),this.scopeStack.push(s),s}popScope(){this.scopeStack.pop()}popDynamicScope(){this.dynamicScopeStack.pop()}newDestroyable(e){this.elements().didAddDestroyable(e)}getSelf(){return this.scope().getSelf()}referenceForSymbol(e){return this.scope().getSymbol(e)}execute(e,t){this.pc=this.heap.getaddr(e),t&&t(this)
let s
for(;;)if((s=this.next()).done)break
return s.value}next(){let e,t=this.env,s=this.updatingOpcodeStack,i=this.elementStack,r=this.nextStatement(t)
return null!==r?(It.evaluate(this,r,r.type),e={done:!1,value:null}):(this.stack.reset(),e={done:!0,value:new Ci(t,n(s.pop(),"there should be a final updating opcode stack"),i.popBlock())}),e}nextStatement(e){let t=this.pc
if(-1===t)return null
let s=e.program
return this.pc+=4,s.opcode(t)}evaluateOpcode(e){It.evaluate(this,e,e.type)}bindDynamicScope(e){let t=this.dynamicScope()
for(let s=e.length-1;s>=0;s--){let n=this.constants.getString(e[s])
t.set(n,this.stack.pop())}}}class Ti{constructor(e){this.vm=e}next(){return this.vm.next()}}let Oi=0
class Di{constructor(e,t,s,n){this.id=e,this.meta=t,this.env=s,this.entryPoint=null,this.layout=null,this.partial=null,this.block=null,this.scanner=new Pn(n,s),this.symbols=n.symbols,this.hasEval=n.hasEval}render({self:e,parentNode:t,dynamicScope:s,mode:n}){let i,r=this.env
switch(n){case void 0:i=en.forInitialRender(r,t,null)
break
case"rehydrate":i=an.forInitialRender(r,t,null)
break
case"serialize":i=on.forInitialRender(r,t,null)
break
default:throw new Error("unreachable")}let a=this.asEntryPoint().compileDynamic(r),o=Ai.initial(r,e,s,i,a)
return new Ti(o)}asEntryPoint(){return this.entryPoint||(this.entryPoint=this.scanner.scanEntryPoint(this.compilationMeta())),this.entryPoint}asLayout(e,t){return this.layout||(this.layout=this.scanner.scanLayout(this.compilationMeta(),t||Mt,e)),this.layout}asPartial(){return this.partial||(this.partial=this.scanner.scanEntryPoint(this.compilationMeta(!0))),this.partial}asBlock(){return this.block||(this.block=this.scanner.scanBlock(this.compilationMeta())),this.block}compilationMeta(e=!1){return{templateMeta:this.meta,symbols:this.symbols,asPartial:e}}}class Bi{constructor(e,t){this.cache=Ae,this.inner=null,this.chains=null,this.lastParentValue=Ae,this._guid=0,this.tag=Wt,this.parent=e,this.property=t}value(){let e=this.lastParentValue,t=this.property,s=this.inner,n=this._parentValue()
if(null===n||void 0===n)return this.cache=void 0
if(e===n)s=this.inner
else{let e="object"==typeof n?Vi.for(n).referenceTypeFor(t):Ui
s=this.inner=new e(n,t,this)}return this.cache=s.value()}get(e){let t=this._getChains()
return e in t?t[e]:t[e]=new Bi(this,e)}label(){return"[reference Direct]"}_getChains(){return this.chains?this.chains:this.chains=p()}_parentValue(){let e=this.parent.value()
return this.lastParentValue=e,e}}class Mi{constructor(e){this.chains=p(),this.tag=Wt,this.object=e}value(){return this.object}update(e){this.object=e}get(e){let t=this.chains
return e in t?t[e]:t[e]=new Bi(this,e)}chainFor(e){let t=this.chains
return e in t?t[e]:null}path(e){return e.split(".").reduce((e,t)=>e.get(t),this)}referenceFromParts(e){return e.reduce((e,t)=>e.get(t),this)}label(){return"[reference Root]"}}const Li={destroy(){}}
class ji{constructor(e,t){this.tag=Wt,this.parent=e}chain(){return Li}notify(){}value(){return this.parent[this.property]}get(e){return new ji(this.parent[this.property],e)}}class Ii{constructor(e){this.tag=Wt,this.inner=e}update(e){this.inner=e}chain(){return Li}notify(){}value(){return this.inner}referenceFromParts(e){throw new Error("Not implemented")}chainFor(e){throw new Error("Not implemented")}get(e){return new ji(this.inner,e)}}class Fi{constructor(e){this.object=e}root(){return new Ii(this.object)}}const Ri="df8be4c8-4e89-44e2-a8f9-550c8dacdca7",Pi=Object.hasOwnProperty
class Vi{constructor(e,{RootReferenceFactory:t,DefaultPathReferenceFactory:s}){this.references=null,this.slots=null,this.referenceTypes=null,this.propertyMetadata=null,this.object=e,this.RootReferenceFactory=t||Mi,this.DefaultPathReferenceFactory=s||Ui}static for(e){if(null===e||void 0===e)return new Vi(e,{})
if(Pi.call(e,"_meta")&&e._meta)return e._meta
if(!Object.isExtensible(e))return new Fi(e)
let t=Vi
return e.constructor&&e.constructor[Ri]?t=e.constructor[Ri].InstanceMetaConstructor:e[Ri]&&(t=e[Ri].InstanceMetaConstructor),e._meta=new t(e,{})}static exists(e){return"object"==typeof e&&e._meta}static metadataForProperty(e){return null}addReference(e,t){let s=this.references=this.references||p();(s[e]=s[e]||new Ct).add(t)}addReferenceTypeFor(e,t){this.referenceTypes=this.referenceTypes||p(),this.referenceTypes[e]=t}referenceTypeFor(e){return this.referenceTypes?this.referenceTypes[e]||Ui:Ui}removeReference(e,t){this.references&&this.references[e].delete(t)}getReferenceTypes(){return this.referenceTypes=this.referenceTypes||p(),this.referenceTypes}referencesFor(e){return this.references?this.references[e]:null}getSlots(){return this.slots=this.slots||p()}root(){return this.rootCache=this.rootCache||new this.RootReferenceFactory(this.object)}}class Ui{constructor(e,t,s){this.tag=Wt,this.object=e,this.property=t}value(){return this.object[this.property]}label(){return"[reference Property]"}}class $i{constructor(e,t){this._registry=e,this._resolver=t}register(e,t,s){let n=this._toAbsoluteSpecifier(e)
this._registry.register(n,t,s)}registration(e){let t=this._toAbsoluteSpecifier(e)
return this._registry.registration(t)}unregister(e){let t=this._toAbsoluteSpecifier(e)
this._registry.unregister(t)}registerOption(e,t,s){let n=this._toAbsoluteOrTypeSpecifier(e)
this._registry.registerOption(n,t,s)}registeredOption(e,t){let s=this._toAbsoluteOrTypeSpecifier(e)
return this._registry.registeredOption(s,t)}registeredOptions(e){let t=this._toAbsoluteOrTypeSpecifier(e)
return this._registry.registeredOptions(t)}unregisterOption(e,t){let s=this._toAbsoluteOrTypeSpecifier(e)
this._registry.unregisterOption(s,t)}registerInjection(e,t,s){let n=this._toAbsoluteOrTypeSpecifier(e),i=this._toAbsoluteSpecifier(s)
this._registry.registerInjection(n,t,i)}registeredInjections(e){let t=this._toAbsoluteOrTypeSpecifier(e)
return this._registry.registeredInjections(t)}_toAbsoluteSpecifier(e,t){return this._resolver.identify(e,t)}_toAbsoluteOrTypeSpecifier(e){return Te(e)?e:this._toAbsoluteSpecifier(e)}}class Hi{constructor(e=null){this.bucket=e?o({},e):{}}get(e){return this.bucket[e]}set(e,t){return this.bucket[e]=t}child(){return new Hi(this.bucket)}}class zi{constructor(e,t){this.position=0,this.array=e,this.keyFor=t}isEmpty(){return 0===this.array.length}next(){let e=this.position,t=this.array,s=this.keyFor
if(e>=t.length)return null
let n=t[e],i=s(n,e),r=e
return this.position++,{key:i,value:n,memo:r}}}class Wi{constructor(e,t,s){this.position=0,this.keys=e,this.values=t,this.keyFor=s}isEmpty(){return 0===this.keys.length}next(){let e=this.position,t=this.keys,s=this.values,n=this.keyFor
if(e>=t.length)return null
let i=s[e],r=t[e],a=n(i,r)
return this.position++,{key:a,value:i,memo:r}}}class Gi{isEmpty(){return!0}next(){throw new Error(`Cannot call next() on an empty iterator`)}}const Ji=new Gi
class Yi{constructor(e,t){this.tag=e.tag,this.ref=e,this.keyFor=t}iterate(){let e=this.ref,t=this.keyFor,s=e.value()
if(Array.isArray(s))return s.length>0?new zi(s,t):Ji
if(void 0===s||null===s)return Ji
if(void 0!==s.forEach){let e=[]
return s.forEach(function(t){e.push(t)}),e.length>0?new zi(e,t):Ji}if("object"==typeof s){let e=Object.keys(s)
return e.length>0?new Wi(e,e.map(e=>s[e]),t):Ji}throw new Error(`Don't know how to {{#each ${s}}}`)}valueReferenceFor(e){return new Mi(e.value)}updateValueReference(e,t){e.update(t.value)}memoReferenceFor(e){return new Mi(e.memo)}updateMemoReference(e,t){e.update(t.memo)}}class Xi{constructor(e,t,s){this.nameRef=e,this.env=t,this.meta=s,this.tag=e.tag}value(){let e=this.env,t=this.nameRef.value()
return"string"==typeof t?e.getComponentDefinition(t,this.meta):null}get(){return us}}class Ki{constructor(e,t){this.tag=Wt,this.parent=e,this.property=t}value(){return this.parent.value()[this.property]}get(e){return new Ki(this,e)}}class qi{constructor(e,t){this.tag=Wt,this.helper=e,this.args=t.capture()}value(){let e=this.helper,t=this.args
return e(t.positional.value(),t.named.value())}get(e){return new Ki(this,e)}}class Zi extends Fs{toJSON(){return`<default-component-definition name=${this.name}>`}}const Qi="main",er={action:function(e,t){let s=e.getSelf(),n=t.capture(),i=n.positional.at(0).value()
return"function"!=typeof i&&Le(i,n.positional.at(0)),new ss(function(...e){let t=n.positional.value()
t.shift(),t.push(...e),i.apply(s&&s.value(),t)})}}
class tr extends vi{constructor(s){super({appendOperations:s.appendOperations,updateOperations:new ii(s.document||document)}),this.helpers=p(),this.modifiers=p(),this.components=p(),this.managers=p(),t(this,e(s)),this.uselessAnchor=s.document.createElement("a")}static create(e={}){return e.document=e.document||self.document,e.appendOperations=e.appendOperations||new ri(e.document),new tr(e)}protocolForURL(e){return this.uselessAnchor.href=e,this.uselessAnchor.protocol}hasPartial(){return!1}lookupPartial(){}managerFor(t=Qi){let s
if(!(s=this.managers[t])){let n=e(this)
if(!(s=this.managers[t]=e(this).lookup(`component-manager:/${n.rootName}/component-managers/${t}`)))throw new Error(`No component manager found for ID ${t}.`)}return s}hasComponentDefinition(e,t){return!!this.identifyComponent(e,t)}getComponentDefinition(t,n){let i=e(this),r=s(this.identifyComponent(t,n))
return this.components[r]?this.components[r]:this.registerComponent(t,r,n,i)}registerComponent(e,t,s,n){let i=n.lookup("template",t),r=n.identify("component",t),a=null
r&&(a=n.factoryFor(r))
let o,l=Ne(i).create(this),h=this.managerFor(i.meta.managerId)
return o=Pe(h)?h.createComponentDefinition(e,l,a):new Zi(e,h,a),this.components[t]=o,o}hasHelper(e,t){return!!this.lookupHelper(e,t)}lookupHelper(t,s){if(er[t])return er[t]
let n=e(this),i=`helper:${t}`,r=s.specifier,a=n.identify(i,r)
return void 0!==a?this.helpers[a]?this.helpers[a]:this.registerHelper(a,n):void 0}registerHelper(e,t){let s=Fe(t.lookup(e))
return this.helpers[e]=s,s}hasModifier(e,t){return 1===e.length&&e in this.modifiers}lookupModifier(e,t){let s=this.modifiers[e]
if(!s)throw new Error(`Modifier for ${e} not found.`)
return s}iterableFor(e,t){let s
if(!t)throw new Error("Must specify a key for #each")
switch(t){case"@index":s=((e,t)=>String(t))
break
case"@primitive":s=(e=>String(e))
break
default:s=(e=>e[t])}return new Yi(e,s)}macros(){let e=super.macros()
return Re(e.blocks,e.inlines),e}identifyComponent(t,s){let n=e(this),i=`template:${t}`,r=s.specifier,a=n.identify(i,r)
if(void 0===a&&n.identify(`component:${t}`,r))throw new Error(`The component '${t}' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory.`)
return a}}var sr={id:"UN61+JFU",block:'{"symbols":["root"],"statements":[[4,"each",[[19,0,["roots"]]],[["key"],["id"]],{"statements":[[4,"-in-element",[[19,1,["parent"]]],[["nextSibling"],[[19,1,["nextSibling"]]]],{"statements":[[1,[25,"component",[[19,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/templates/main"}}
class nr{constructor(e){this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._rerender=Ve,this.rootName=e.rootName,this.resolver=e.resolver,this.document=e.document||window.document}registerInitializer(e){this._initializers.push(e)}initRegistry(){let e=this._registry=new gt,t=new $i(this._registry,this.resolver)
e.register(`environment:/${this.rootName}/main/main`,tr),e.registerOption("helper","instantiate",!1),e.registerOption("template","instantiate",!1),e.register(`document:/${this.rootName}/main/main`,this.document),e.registerOption("document","instantiate",!1),e.registerInjection("environment","document",`document:/${this.rootName}/main/main`),e.registerInjection("component-manager","env",`environment:/${this.rootName}/main/main`)
let s=this._initializers
for(let n=0;n<s.length;n++)s[n].initialize(t)
this._initialized=!0}initContainer(){this._container=new ft(this._registry,this.resolver),this._container.defaultInjections=(e=>{let s={}
return t(s,this),s})}initialize(){this.initRegistry(),this.initContainer()}boot(){this.initialize(),this.env=this.lookup(`environment:/${this.rootName}/main/main`),this.render()}render(){this.env.begin()
let e,t=Ne(sr).create(this.env),s=new Mi({roots:this._roots}),n=this.document.body,i=new Hi,r=t.render({self:s,parentNode:n,dynamicScope:i})
do{e=r.next()}while(!e.done)
this.env.commit()
let a=e.value
this._rerender=(()=>{this.env.begin(),a.rerender(),this.env.commit(),this._didRender()}),this._didRender()}_didRender(){this._rendered=!0}renderComponent(e,t,s=null){this._roots.push({id:this._rootsIndex++,component:e,parent:t,nextSibling:s}),this.scheduleRerender()}scheduleRerender(){!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,requestAnimationFrame(()=>{this._scheduled=!1,this._rerender(),this._rendering=!1}))}identify(e,t){return this.resolver.identify(e,t)}factoryFor(e,t){return this._container.factoryFor(this.identify(e,t))}lookup(e,t){return this._container.lookup(this.identify(e,t))}}class ir{constructor(e,t){this.config=e,this.registry=t}identify(e,t){if(Ue(e))return e
let s,n=We(e)
if(t){let e=We(t)
if($e(e)){Ge("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===n.rootName&&void 0===n.collection&&void 0===n.namespace),n.rootName=e.rootName,n.collection=e.collection
let t=this._definitiveCollection(n.type)
if(!n.name)return n.namespace=e.namespace,n.name=e.name,this._serializeAndVerify(n)
if(n.namespace=e.namespace?e.namespace+"/"+e.name:e.name,Je(n)===t&&(s=this._serializeAndVerify(n)))return s
if(t&&(n.namespace+="/-"+t,s=this._serializeAndVerify(n)))return s
n.rootName=n.collection=n.namespace=void 0}else Ge('Referrer must either be "absolute" or include a `type` to determine the associated type',e.type),n.collection=this._definitiveCollection(e.type),Ge(`'${e.type}' does not have a definitive collection`,n.collection)}if(n.collection||(n.collection=this._definitiveCollection(n.type),Ge(`'${n.type}' does not have a definitive collection`,n.collection)),!n.rootName){if(n.rootName=this.config.app.rootName||"app",s=this._serializeAndVerify(n))return s
let e
n.namespace?(e=this.config.addons&&this.config.addons[n.namespace],n.rootName=n.namespace,n.namespace=void 0):(e=this.config.addons&&this.config.addons[n.name],n.rootName=n.name,n.name="main")}return(s=this._serializeAndVerify(n))?s:void 0}retrieve(e){return this.registry.get(e)}resolve(e,t){let s=this.identify(e,t)
if(s)return this.retrieve(s)}_definitiveCollection(e){let t=this.config.types[e]
return Ge(`'${e}' is not a recognized type`,t),t.definitiveCollection}_serializeAndVerify(e){let t=He(e)
if(this.registry.has(t))return t}}class rr{constructor(e={}){this._entries=e}has(e){return e in this._entries}get(e){return this._entries[e]}}class ar{constructor(e){this.tags=p(),this.computedPropertyTags=p(),this.trackedProperties=e?Object.create(e.trackedProperties):p(),this.trackedPropertyDependencies=e?Object.create(e.trackedPropertyDependencies):p()}tagFor(e){let t=this.tags[e]
if(t)return t
let s
return(s=this.trackedPropertyDependencies[e])?this.tags[e]=Ke(this,e,s):this.tags[e]=Jt.create()}dirtyableTagFor(e){let t
return this.trackedPropertyDependencies[e]?(t=this.computedPropertyTags[e])||(this.computedPropertyTags[e]=Jt.create()):(t=this.tags[e])||(this.tags[e]=Jt.create())}}let or=Symbol("ember-object"),lr=Object.prototype.hasOwnProperty,hr=function(){}
class cr extends Error{constructor(e,t,s){super(s),this.target=e,this.key=t}static for(e,t){return new cr(e,t,`The property '${t}' on ${e} was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.`)}}class ur{constructor(e){this.element=null,this.debugName=null,this.__args__=null,Object.assign(this,e)}get args(){return this.__args__}set args(e){this.__args__=e,qe(this).dirtyableTagFor("args").inner.dirty()}static create(e){return new this(e)}didInsertElement(){}didUpdate(){}willDestroy(){}destroy(){this.willDestroy()}toString(){return`${this.debugName} component`}}class pr extends Fs{constructor(e,t,s,n){super(e,t,n),this.template=s,this.componentFactory=n}toJSON(){return{GlimmerDebug:`<component-definition name="${this.name}">`}}}class dr{get(e){return gr.create(this,e)}}class mr extends dr{constructor(){super(...arguments),this._lastRevision=null,this._lastValue=null}value(){let e=this.tag,t=this._lastRevision,s=this._lastValue
return t&&e.validate(t)||(s=this._lastValue=this.compute(),this._lastRevision=e.value()),s}}class fr extends ss{constructor(){super(...arguments),this.children=p()}get(e){let t=this.children[e]
return t||(t=this.children[e]=new yr(this.inner,e)),t}}class gr extends mr{static create(e,t){return m(e)?new yr(e.value(),t):new br(e,t)}get(e){return new br(this,e)}}class yr extends gr{constructor(e,t){super(),this._parentValue=e,this._propertyKey=t,this.tag=et(e,t,tt)}compute(){return this._parentValue[this._propertyKey]}}class br extends gr{constructor(e,t){super()
let s=e.tag,n=qt.create(zt)
this._parentReference=e,this._parentObjectTag=n,this._propertyKey=t,this.tag=b([s,n])}compute(){let e=this._parentReference,t=this._parentObjectTag,s=this._propertyKey,n=e.value()
return t.inner.update(et(n,s)),"string"==typeof n&&"length"===s?n.length:"object"==typeof n&&n?n[s]:void 0}}class vr{constructor(e,s,n){let i=e.componentFactory,r=e.name
this.args=s
let a={debugName:r,args:this.namedArgsSnapshot()}
t(a,n),this.component=i.create(a)}get tag(){return this.args.tag}namedArgsSnapshot(){return Object.freeze(this.args.named.value())}}class kr{constructor(e,t){this.template=t,this.name=e}compile(e){e.fromLayout(this.name,this.template)}}class wr{static create(e){return new wr(e)}constructor(e){this.env=e.env}prepareArgs(e,t){return null}create(t,s,n){let i=e(this.env)
return new vr(s,n.capture(),i)}createComponentDefinition(e,t,s){return s||(s={class:ur,create(e){return this.class.create(e)}}),new pr(e,this,t,s)}layoutFor(e,t,s){let n=e.template
return Y(new kr(e.name,n),this.env)}getSelf(e){return new fr(e.component)}didCreateElement(e,t){e&&(e.component.element=t)}didRenderLayout(e,t){}didCreate(e){e&&e.component.didInsertElement()}getTag({tag:e}){return e}update(e,t){}didUpdateLayout(){}didUpdate(e){if(!e)return
let t=e.component
t.args=e.namedArgsSnapshot(),t.didUpdate()}getDestructor(e){return e.component}}class Sr extends ur{}var _r={id:"vyfH92lz",block:'{"symbols":["@projectId","@name","@moduleId"],"statements":[[6,"span"],[7],[0,"\\n"],[4,"if",[[19,3,[]]],null,{"statements":[[0,"  "],[6,"a"],[10,"href",[26,["/projects/",[19,1,[]],"/modules/",[19,3,[]]]]],[9,"class","internal-link"],[7],[0,"\\n    "],[1,[19,2,[]],false],[0,"\\n  "],[8],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[6,"a"],[10,"href",[26,["/projects/",[19,1,[]]]]],[9,"class","internal-link"],[7],[0,"\\n    "],[1,[19,2,[]],false],[0,"\\n  "],[8],[0,"\\n"]],"parameters":[]}],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/entity-link"}}
const Er=window.docs
class xr{constructor(){this.main=Er}fetchRoot(){return{main:this.main.data.attributes,menu:ut(this.main)}}fetchModule(e,t){let s=this.main.included.find(({id:t})=>t===e)
if(!s){const n=this.main.data.attributes.idMap[t][e]
s=this.main.included.find(({id:e})=>e===n)}return s?it(s):null}fetchProject(e){return it(this.main.included.find(({type:t,id:s})=>"projectdoc"===t&&s===e))}}const Cr="modules",Nr="projects"
var Ar=function(e,t,s,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,n)
else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(a=(r<3?i(a):r>3?i(t,s,a):i(t,s))||a)
return r>3&&a&&Object.defineProperty(t,s,a),a}
const Tr="/api/".split("/").filter(e=>!!e).join("/"),Or=Tr?"/"+Tr+"/":"/"
class Dr extends ur{constructor(){super(...arguments),this.theCurrentView={title:"",componentName:null,project:null,module:null,notFound:!1},this.docsService=new xr}loadFromUrl(e){const t=dt(Tr,e)
var s=pt(t)
const n=s.moduleId,i=s.projectId
let r
r="/"!==t&&t?i?n?this.showModule(i,n):this.showProject(i):this.show404():this.showIndex(),this.hideNav(),document.title=r.title,window.history.pushState(r,r.title,`/${Tr}${t}`)}bindInternalLinks(){document.addEventListener("click",e=>{const t=e.target
"A"===t.tagName&&t.classList.contains("internal-link")&&(e.preventDefault(),this.loadFromUrl(t.getAttribute("href")))})}showNav(){const e=document.getElementById("menu-container"),t=document.getElementById("menu-toggle")
e.classList.add("is-active"),t.classList.add("is-active")}hideNav(){const e=document.getElementById("menu-container"),t=document.getElementById("menu-toggle")
e.classList.remove("is-active"),t.classList.remove("is-active")}toggleNav(){document.getElementById("menu-toggle").classList.contains("is-active")?this.hideNav():this.showNav()}setupRouting(){window.onpopstate=(e=>{if(e.state){const t=this.deserializeState(e.state)
this.theCurrentView=t}}),this.bindInternalLinks(),this.loadFromUrl(window.location.pathname)}didInsertElement(){this.setupRouting()}get model(){return this.docsService.fetchRoot()}show404(){return this.theCurrentView={title:`${this.model.main.title} - 404`,module:null,project:null,componentName:null,notFound:!0},this.theCurrentView}showIndex(e){return e&&e.preventDefault(),this.theCurrentView={title:this.model.main.title,componentName:null,project:null,module:null,notFound:!1},this.theCurrentView}serializeView(e){const t=e.title,s=e.componentName,n=e.project,i=e.module
return{title:t,componentName:s,notFound:e.notFound,project:n.slug,module:i&&i.slug}}deserializeState(e){const t=e.title,s=e.componentName,n=e.project,i=e.module
return{title:t,componentName:s,notFound:e.notFound,project:this.docsService.fetchProject(n),module:this.docsService.fetchModule(i,n)}}showProject(e){let t=this.docsService.fetchProject(e)
if(!t)return this.show404()
this.theCurrentView={title:`${this.model.main.title} - ${t.name}`,componentName:"project-landing",project:t,module:null}
this.theCurrentView.project.name,`${Or}${Nr}/${e}`
return this.serializeView(this.theCurrentView)}showModule(e,t){let s=this.docsService.fetchProject(e),n=this.docsService.fetchModule(t,e)
if(!s||!n)return this.show404()
this.theCurrentView={title:`${this.model.main.title} - ${n.name}`,componentName:"module-landing",project:s,module:n}
this.theCurrentView.project.name,`${Or}${Nr}/${e}/${Cr}/${t}`
return this.serializeView(this.theCurrentView)}}Ar([function(...e){let t=e[0],s=e[1],n=e[2]
return"string"==typeof t?function(t,s,n){return Ye(t,s,n,e)}:n?Ye(t,s,n,[]):void Xe(t,s)}],Dr.prototype,"theCurrentView",void 0)
var Br={id:"Z3TpdTj0",block:'{"symbols":[],"statements":[[6,"div"],[9,"id","top-menu"],[7],[0,"\\n  "],[6,"button"],[10,"onclick",[25,"action",[[19,0,["toggleNav"]]],null],null],[9,"id","menu-toggle"],[9,"class","hamburger hamburger--elastic"],[9,"type","button"],[7],[0,"\\n    "],[6,"span"],[9,"class","hamburger-box"],[7],[0,"\\n      "],[6,"span"],[9,"class","hamburger-inner"],[7],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"h1"],[7],[6,"a"],[9,"href","/api/"],[10,"onclick",[25,"action",[[19,0,["showIndex"]]],null],null],[7],[1,[20,["model","main","header"]],false],[8],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"div"],[9,"class","row"],[9,"id","column-container"],[7],[0,"\\n  "],[6,"div"],[9,"class","four columns"],[9,"id","menu-container"],[7],[0,"\\n    "],[5,"left-menu",[],[["@data"],[[20,["model","menu"]]]],{"statements":[],"parameters":[]}],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","eight columns"],[9,"id","content-container"],[7],[0,"\\n    "],[2," module won\'t be used for project-landing "],[0,"\\n"],[4,"if",[[19,0,["theCurrentView","componentName"]]],null,{"statements":[[0,"      "],[1,[25,"component",[[19,0,["theCurrentView","componentName"]]],[["project","module","showProject"],[[19,0,["theCurrentView","project"]],[19,0,["theCurrentView","module"]],[25,"action",[[19,0,["showProject"]]],null]]]],false],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[19,0,["theCurrentView","notFound"]]],null,{"statements":[[0,"      "],[5,"not-found",[],[["@showIndex"],[[25,"action",[[19,0,["showIndex"]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[6,"section"],[9,"class","content-container"],[7],[0,"\\n        "],[6,"h1"],[7],[1,[20,["model","main","title"]],false],[8],[0,"\\n        "],[6,"p"],[7],[0,"\\n          "],[1,[20,["model","main","intro"]],true],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "]],"parameters":[]}]],"parameters":[]}],[0,"  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"section"],[9,"id","footer"],[7],[0,"\\n  "],[6,"ol"],[9,"class","links"],[7],[0,"\\n    "],[6,"li"],[7],[6,"a"],[9,"href","/"],[7],[0,"Glimmer Home"],[8],[8],[0,"\\n    "],[6,"li"],[7],[6,"a"],[9,"href","/api/"],[7],[0,"Glimmer API"],[8],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","copyright"],[7],[0,"\\n    ©2017 Ember.js\\n  "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/glimmer-api-docs"}}
class Mr extends ur{}var Lr={id:"ZzLSI2rb",block:'{"symbols":["project","child","@data"],"statements":[[6,"ul"],[9,"class","vertical menu"],[7],[0,"\\n"],[4,"each",[[19,3,[]]],[["key"],["@index"]],{"statements":[[0,"  "],[6,"li"],[7],[0,"\\n    "],[5,"entity-link",[],[["@name","@projectId"],[[19,1,["name"]],[19,1,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[6,"ul"],[9,"class","menu vertical nested"],[7],[0,"\\n"],[4,"each",[[19,1,["children"]]],[["key"],["@index"]],{"statements":[[0,"        "],[6,"li"],[10,"class",[26,[[19,2,["type"]]]]],[7],[0,"\\n          "],[5,"entity-link",[],[["@name","@projectId","@moduleId"],[[19,2,["name"]],[19,1,["slug"]],[19,2,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n        "],[8],[0,"\\n"]],"parameters":[2]},null],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n"]],"parameters":[1]},null],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/left-menu"}},jr={id:"/OLZX4UW",block:'{"symbols":[],"statements":[[6,"div"],[7],[0,"\\n  "],[6,"p"],[7],[0,"Welcome to the Glimmer API documentation."],[8],[0,"\\n  "],[6,"p"],[7],[0,"Choose a project or module from the table of contents to get started."],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/main"}}
const Ir=window.hljs,Fr=window.markdownit({highlight(e,t){if(t&&Ir.getLanguage(t))try{return Ir.highlight(t,e).value}catch(e){}return""}})
class Rr extends ur{constructor(){super(...arguments),this.text=null}get renderedText(){return Fr.render(this.args.text)}}class Pr extends ur{get categories(){let e={}
for(var t=this.args.methods,s=Array.isArray(t),n=0,t=s?t:t[Symbol.iterator]();;){var i
if(s){if(n>=t.length)break
i=t[n++]}else{if((n=t.next()).done)break
i=n.value}let r=i,a=r.category||"Other Methods",o=e[a]
o||(o=e[a]={name:a,slug:mt(a),methods:[]}),console.log(r),o.methods.push(r)}return Object.keys(e).map(t=>e[t])}}class Vr extends ur{}class Ur extends ur{}class $r extends ur{}class Hr extends ur{}class zr extends ur{}class Wr extends ur{}var Gr={"component:/glimmer-api-docs/components/entity-link":Sr,"template:/glimmer-api-docs/components/entity-link":_r,"component:/glimmer-api-docs/components/glimmer-api-docs":Dr,"template:/glimmer-api-docs/components/glimmer-api-docs":Br,"component:/glimmer-api-docs/components/left-menu":Mr,"template:/glimmer-api-docs/components/left-menu":Lr,"template:/glimmer-api-docs/components/main":jr,"component:/glimmer-api-docs/components/markdown-viewer":Rr,"template:/glimmer-api-docs/components/markdown-viewer":{id:"HborKit4",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","content-container readme"],[7],[0,"\\n  "],[1,[18,"renderedText"],true],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/markdown-viewer"}},"template:/glimmer-api-docs/components/method-item":{id:"JXTO6qxW",block:'{"symbols":["signature","tag","param","param","@method"],"statements":[[6,"li"],[10,"id",[26,["method-",[19,5,["slug"]]]]],[7],[0,"\\n  "],[6,"ol"],[9,"class","signatures-list"],[7],[0,"\\n"],[4,"each",[[19,5,["signatures"]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"li"],[7],[0,"\\n        "],[6,"div"],[9,"class","method-signature"],[7],[0,"\\n          "],[6,"h5"],[7],[0,"\\n            "],[6,"div"],[9,"class","access"],[7],[0,"\\n"],[4,"if",[[19,5,["flags","isProtected"]]],null,{"statements":[[0,"                protected\\n"]],"parameters":[]},{"statements":[[4,"if",[[19,5,["flags","isPrivate"]]],null,{"statements":[[0,"                private\\n"]],"parameters":[]},{"statements":[[0,"                public\\n              "]],"parameters":[]}]],"parameters":[]}],[0,"            "],[8],[0,"\\n"],[4,"if",[[19,5,["flags","isStatic"]]],null,{"statements":[[0,"              "],[6,"div"],[9,"class","signature-modifiers"],[7],[0,"\\n                static\\n              "],[8],[0,"\\n"]],"parameters":[]},null],[0,"            "],[6,"a"],[10,"href",[26,["#method-",[19,5,["slug"]]]]],[7],[0,"\\n              "],[1,[19,1,["name"]],false],[0,"\\n            "],[8],[0,"\\n          "],[8],[0,"\\n          "],[6,"ol"],[9,"class","parameters"],[7],[0,"\\n"],[4,"if",[[19,1,["parameters"]]],null,{"statements":[[4,"each",[[19,1,["parameters"]]],[["key"],["@index"]],{"statements":[[0,"                "],[6,"li"],[7],[0,"\\n                  "],[6,"div"],[9,"class","param-name"],[7],[1,[19,4,["name"]],false],[8],[0,"\\n                "],[8],[0,"\\n"]],"parameters":[4]},null]],"parameters":[]},null],[0,"          "],[8],[0,"\\n\\n          "],[6,"div"],[9,"class","return-type"],[7],[0,"\\n            "],[5,"type-annotation",[],[["@type"],[[19,1,["typeInfo"]]]],{"statements":[],"parameters":[]}],[0,"\\n          "],[8],[0,"\\n        "],[8],[0,"\\n"],[4,"if",[[19,1,["hasBody"]]],null,{"statements":[[0,"          "],[6,"div"],[9,"class","method-body"],[7],[0,"\\n"],[4,"if",[[19,1,["sources"]]],null,{"statements":[[0,"              "],[5,"source-link",[],[["@sources"],[[19,1,["sources"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[4,"if",[[19,1,["parameters"]]],null,{"statements":[[0,"              "],[6,"strong"],[9,"class","sub"],[7],[0,"Arguments"],[8],[0,"\\n              "],[6,"ol"],[9,"class","parameters-list"],[7],[0,"\\n"],[4,"each",[[19,1,["parameters"]]],[["key"],["@index"]],{"statements":[[0,"                "],[6,"li"],[7],[0,"\\n                  "],[1,[19,3,["name"]],false],[0,": "],[5,"type-annotation",[],[["@type"],[[19,3,["typeInfo"]]]],{"statements":[],"parameters":[]}],[0,"\\n"],[4,"if",[[19,3,["comment","text"]]],null,{"statements":[[0,"                    "],[1,[19,3,["comment","text"]],true],[0,"\\n"]],"parameters":[]},null],[0,"                "],[8],[0,"\\n"]],"parameters":[3]},null],[0,"              "],[8],[0,"\\n"]],"parameters":[]},null],[4,"if",[[19,1,["comment"]]],null,{"statements":[[0,"              "],[6,"div"],[9,"class","function-comment readme"],[7],[0,"\\n                "],[1,[19,1,["comment","text"]],true],[0,"\\n"],[4,"each",[[19,1,["comment","tags"]]],[["key"],["@index"]],{"statements":[[0,"                  "],[6,"strong"],[7],[1,[19,2,["tagName"]],false],[8],[0,"\\n                  "],[6,"p"],[9,"class","tag"],[7],[0,"\\n                    "],[1,[19,2,["text"]],true],[0,"\\n                  "],[8],[0,"\\n"]],"parameters":[2]},null],[0,"              "],[8],[0,"\\n"]],"parameters":[]},null],[0,"          "],[8],[0,"\\n"]],"parameters":[]},null],[0,"      "],[8],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/method-item"}},"component:/glimmer-api-docs/components/method-list":Pr,"template:/glimmer-api-docs/components/method-list":{id:"q1YZv328",block:'{"symbols":["method","category","method","@methods","@hasMethodCategories"],"statements":[[6,"div"],[9,"class","methods-list"],[7],[0,"\\n"],[4,"if",[[19,5,[]]],null,{"statements":[[4,"each",[[19,0,["categories"]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"div"],[9,"class","method-category"],[7],[0,"\\n        "],[6,"h4"],[10,"id",[26,["method-category-",[19,2,["slug"]]]]],[7],[1,[19,2,["name"]],false],[8],[0,"\\n        "],[6,"ul"],[7],[0,"\\n"],[4,"each",[[19,2,["methods"]]],[["key"],["@index"]],{"statements":[[0,"            "],[5,"method-item",[],[["@method"],[[19,3,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[3]},null],[0,"        "],[8],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[2]},null]],"parameters":[]},{"statements":[[4,"each",[[19,4,[]]],[["key"],["@index"]],{"statements":[[0,"      "],[5,"method-item",[],[["@method"],[[19,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null]],"parameters":[]}],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/method-list"}},"component:/glimmer-api-docs/components/module-landing":class extends ur{},"template:/glimmer-api-docs/components/module-landing":{id:"gzljojk/",block:'{"symbols":["implements","extends","@module","@project"],"statements":[[6,"section"],[9,"class","content-container"],[7],[0,"\\n  "],[6,"h5"],[9,"class","project-breadcrumb"],[7],[0,"\\n    "],[5,"entity-link",[],[["@name","@projectId"],[[19,4,["name"]],[19,4,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","module-header"],[7],[0,"\\n    "],[1,[19,3,["kindString"]],false],[0," "],[6,"h3"],[7],[1,[19,3,["name"]],false],[8],[0,"\\n  "],[8],[0,"\\n"],[4,"if",[[19,3,["sources"]]],null,{"statements":[[4,"unless",[[19,3,["isFunction"]]],null,{"statements":[[0,"      "],[5,"source-link",[],[["@sources"],[[19,3,["sources"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[4,"if",[[19,3,["extendedTypes"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","hierarchy-meta"],[7],[0,"\\n    "],[6,"strong"],[7],[0,"Extends"],[8],[0,"\\n\\n"],[4,"each",[[19,3,["extendedTypes"]]],[["key"],["@index"]],{"statements":[[0,"      "],[5,"type-annotation",[],[["@type"],[[19,2,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[2]},null],[0,"    "],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,3,["implementedTypes"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","hierarchy-meta"],[7],[0,"\\n    "],[6,"strong"],[7],[0,"Implements"],[8],[0,"\\n\\n"],[4,"each",[[19,3,["implementedTypes"]]],[["key"],["@index"]],{"statements":[[0,"      "],[5,"type-annotation",[],[["@type"],[[19,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,3,["comment"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","readme"],[7],[0,"\\n      "],[1,[19,3,["comment","text"]],true],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,3,["constructors"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","constructors"],[7],[0,"\\n      "],[6,"h4"],[7],[0,"Constructor"],[8],[0,"\\n\\n      "],[5,"method-list",[],[["@methods"],[[19,3,["constructors"]]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,3,["methods"]]],null,{"statements":[[0,"    "],[6,"h4"],[7],[0,"Methods"],[8],[0,"\\n\\n    "],[5,"method-list",[],[["@hasMethodCategories","@methods"],[[19,3,["hasMethodCategories"]],[19,3,["methods"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,3,["signatures"]]],null,{"statements":[[0,"    "],[6,"div"],[9,"class","methods-list"],[7],[0,"\\n      "],[5,"method-item",[],[["@method"],[[19,3,[]]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,3,["properties"]]],null,{"statements":[[0,"    "],[5,"variable-list",[],[["@label","@variables"],["Properties",[19,3,["properties"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/module-landing"}},"component:/glimmer-api-docs/components/module-list":Vr,"template:/glimmer-api-docs/components/module-list":{id:"fwcS4/pA",block:'{"symbols":["module","@projectId","@title","@modules"],"statements":[[6,"div"],[7],[0,"\\n  "],[6,"strong"],[7],[1,[19,3,[]],false],[8],[0,"\\n\\n  "],[6,"ul"],[9,"class","project-list"],[7],[0,"\\n"],[4,"each",[[19,4,[]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"li"],[7],[0,"\\n        "],[5,"entity-link",[],[["@name","@projectId","@moduleId"],[[19,1,["name"]],[19,2,[]],[19,1,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n      "],[8],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/module-list"}},"component:/glimmer-api-docs/components/not-found":Ur,"template:/glimmer-api-docs/components/not-found":{id:"QSiXzYeZ",block:'{"symbols":["@showIndex"],"statements":[[6,"div"],[7],[0,"\\n  "],[6,"section"],[9,"class","content-container"],[7],[0,"\\n    "],[6,"h2"],[7],[0,"404 Not Found"],[8],[0,"\\n    "],[6,"p"],[7],[0,"\\n      Hmmmm, we can\'t seem to find what you\'re looking for. Perhaps checkout the "],[6,"a"],[9,"href","/"],[10,"onclick",[25,"action",[[19,1,[]]],null],null],[7],[0,"homepage"],[8],[0,"?\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/not-found"}},"component:/glimmer-api-docs/components/project-landing":$r,"template:/glimmer-api-docs/components/project-landing":{id:"tBzosT1p",block:'{"symbols":["@project"],"statements":[[6,"div"],[7],[0,"\\n  "],[6,"section"],[9,"class","content-container readme"],[7],[0,"\\n    "],[1,[19,1,["readme"]],true],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"section"],[9,"class","content-container project-container"],[7],[0,"\\n"],[4,"if",[[19,1,["interfaces"]]],null,{"statements":[[0,"      "],[5,"module-list",[],[["@projectId","@title","@modules"],[[19,1,["id"]],"Interfaces",[19,1,["interfaces"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,1,["classes"]]],null,{"statements":[[0,"      "],[5,"module-list",[],[["@projectId","@title","@modules"],[[19,1,["id"]],"Classes",[19,1,["classes"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,1,["functions"]]],null,{"statements":[[0,"      "],[6,"strong"],[7],[0,"Functions"],[8],[0,"\\n      "],[5,"method-list",[],[["@methods"],[[19,1,["functions"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,1,["objectLiterals"]]],null,{"statements":[[0,"      "],[5,"variable-list",[],[["@label","@variables"],["Object Literals",[19,1,["objectLiterals"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,1,["typeAliases"]]],null,{"statements":[[0,"      "],[5,"variable-list",[],[["@label","@variables"],["Type Aliases",[19,1,["typeAliases"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[19,1,["variables"]]],null,{"statements":[[0,"      "],[5,"variable-list",[],[["@label","@variables"],["Variables",[19,1,["variables"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/project-landing"}},"component:/glimmer-api-docs/components/source-link":Hr,"template:/glimmer-api-docs/components/source-link":{id:"vDhhreBI",block:'{"symbols":["source","@sources"],"statements":[[6,"div"],[9,"class","sources"],[7],[0,"\\n"],[4,"each",[[19,2,[]]],[["key"],["@index"]],{"statements":[[0,"    "],[6,"a"],[10,"href",[26,[[19,1,["url"]]]]],[7],[1,[19,1,["fileName"]],false],[0,":"],[1,[19,1,["line"]],false],[8],[0,"\\n"]],"parameters":[1]},null],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/source-link"}},"component:/glimmer-api-docs/components/type-annotation":zr,"template:/glimmer-api-docs/components/type-annotation":{id:"LSSHTMA6",block:'{"symbols":["@type"],"statements":[[6,"div"],[9,"class","type-annotation"],[7],[0,"\\n"],[4,"if",[[19,1,["link"]]],null,{"statements":[[0,"    "],[5,"entity-link",[],[["@name","@projectId","@moduleId"],[[19,1,["name"]],[19,1,["link","parent","slug"]],[19,1,["link","slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[6,"span"],[9,"class","type"],[7],[1,[19,1,["name"]],false],[8],[0,"\\n"]],"parameters":[]}],[4,"if",[[19,1,["isArray"]]],null,{"statements":[[0,"    "],[6,"span"],[9,"class","isArray"],[7],[0,"[]"],[8],[0,"\\n"]],"parameters":[]},null],[4,"if",[[19,1,["isOptional"]]],null,{"statements":[[0,"    "],[6,"span"],[9,"class","isArray"],[7],[0,"?"],[8],[0,"\\n"]],"parameters":[]},null],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/type-annotation"}},"component:/glimmer-api-docs/components/variable-list":Wr,"template:/glimmer-api-docs/components/variable-list":{id:"onacGU7P",block:'{"symbols":["property","@label","@variables"],"statements":[[6,"div"],[7],[0,"\\n  "],[6,"strong"],[7],[1,[19,2,[]],false],[8],[0,"\\n\\n  "],[6,"ul"],[9,"class","properties-list"],[7],[0,"\\n"],[4,"each",[[19,3,[]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"li"],[9,"class","property-definition"],[10,"id",[26,["variable-",[19,1,["slug"]]]]],[7],[0,"\\n        "],[6,"div"],[9,"class","property-title-container"],[7],[0,"\\n          "],[6,"h5"],[7],[6,"a"],[10,"href",[26,["#variable-",[19,1,["slug"]]]]],[7],[1,[19,1,["name"]],false],[8],[8],[0,"\\n          "],[6,"div"],[9,"class","property-type"],[7],[5,"type-annotation",[],[["@type"],[[19,1,["typeInfo"]]]],{"statements":[],"parameters":[]}],[8],[0,"\\n        "],[8],[0,"\\n"],[4,"if",[[19,1,["comment"]]],null,{"statements":[[0,"          "],[6,"p"],[7],[1,[19,1,["comment","text"]],true],[8],[0,"\\n"]],"parameters":[]},null],[0,"      "],[8],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/variable-list"}}},Jr={app:{name:"glimmer-api-docs",rootName:"glimmer-api-docs"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},"component-test":{unresolvable:!0},helper:{definitiveCollection:"components"},"helper-test":{unresolvable:!0},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","component-test","template","helper","helper-test"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}}
class Yr extends nr{constructor(){let e=new rr(Gr),t=new ir(Jr,e)
super({rootName:Jr.app.rootName,resolver:t})}}"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/api/service.js").then(e=>{console.log("ServiceWorker registration successful with scope: ",e.scope)}).catch(function(e){console.log("ServiceWorker registration failed: ",e)})})
const Xr=new Yr,Kr=document.getElementById("app")
for(function(e){hr=e}(()=>{Xr.scheduleRerender()}),Xr.registerInitializer({initialize(e){e.register(`component-manager:/${Xr.rootName}/component-managers/main`,wr)}}),Xr.boot();Kr.firstChild;)Kr.removeChild(Kr.firstChild)
Xr.renderComponent("glimmer-api-docs",Kr,null)})
