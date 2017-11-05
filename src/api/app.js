(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()})(0,function(){"use strict"
function t(t){return t[$t]}function e(t,e){t[$t]=e}function s(t,e){if(null===t||void 0===t)throw new Error(e)
return t}function n(t="unreachable"){return new Error(t)}function i(t,e){if(!t)throw new Error(e||"assertion failure")}function r(t){for(let e=1;e<arguments.length;e++){let s=arguments[e]
if(null===s||"object"!=typeof s)continue
let n=Gt(s)
for(let e=0;e<n.length;e++){let i=n[e]
t[i]=s[i]}}return t}function a(t){let e=new Array(t)
for(let s=0;s<t;s++)e[s]=null
return e}function l(t){return t._guid=++Yt}function o(t){return t._guid||l(t)}function h(){return Object.create(null)}function u(t){let e=re.length
re.push(t=>t.value()),ae.push((t,e)=>t.validate(e)),t.id=e}function c({tag:t}){return t===oe}function p(t){return t===oe}function d(t){let e=[]
for(let s=0,n=t.length;s<n;s++){let n=t[s].tag
if(n===he)return he
n!==oe&&e.push(n)}return g(e)}function m(t){let e=[],s=t.head()
for(;null!==s;){let n=s.tag
if(n===he)return he
n!==oe&&e.push(n),s=t.nextNode(s)}return g(e)}function f(t){let e=[]
for(let s=0,n=t.length;s<n;s++){let n=t[s]
if(n===he)return he
n!==oe&&e.push(n)}return g(e)}function g(t){switch(t.length){case 0:return oe
case 1:return t[0]
case 2:return de.create(t[0],t[1])
default:return me.create(t)}}function y(t){return t!==be}function b(t){return"function"!=typeof t.toString?"":String(t)}function v(t){return function(e){return Array.isArray(e)&&e[0]===t}}function k(t,e,s){let n=t[1],i=t[2],r=t[3]
w(i,s),r?s.dynamicAttr(n,r,e):s.dynamicAttr(n,null,e)}function w(t,e){Array.isArray(t)?ze.compile(t,e):e.pushPrimitiveReference(t)}function S(t=new Ge,e=new Ye){return t.add("if",(t,e,s,n,i)=>{if(!t||1!==t.length)throw new Error(`SYNTAX ERROR: #if requires a single argument`)
i.startLabels(),i.pushFrame(),i.returnTo("END"),w(t[0],i),i.toBoolean(),i.enter(1),i.jumpUnless("ELSE"),i.invokeStaticBlock(s),n?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(n),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),t.add("unless",(t,e,s,n,i)=>{if(!t||1!==t.length)throw new Error(`SYNTAX ERROR: #unless requires a single argument`)
i.startLabels(),i.pushFrame(),i.returnTo("END"),w(t[0],i),i.toBoolean(),i.enter(1),i.jumpIf("ELSE"),i.invokeStaticBlock(s),n?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(n),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),t.add("with",(t,e,s,n,i)=>{if(!t||1!==t.length)throw new Error(`SYNTAX ERROR: #with requires a single argument`)
i.startLabels(),i.pushFrame(),i.returnTo("END"),w(t[0],i),i.dup(),i.toBoolean(),i.enter(2),i.jumpUnless("ELSE"),i.invokeStaticBlock(s,1),n?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(n),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),t.add("each",(t,e,s,n,i)=>{i.startLabels(),i.pushFrame(),i.returnTo("END"),e&&"key"===e[0][0]?w(e[1][0],i):i.pushPrimitiveReference(null),w(t[0],i),i.enter(2),i.putIterator(),i.jumpUnless("ELSE"),i.pushFrame(),i.returnTo("ITER"),i.dup(ne.fp,1),i.enterList("BODY"),i.label("ITER"),i.iterate("BREAK"),i.label("BODY"),i.invokeStaticBlock(s,2),i.pop(2),i.exit(),i.return(),i.label("BREAK"),i.exitList(),i.popFrame(),n?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(n),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),t.add("in-element",(t,e,s,n,i)=>{if(!t||1!==t.length)throw new Error(`SYNTAX ERROR: #in-element requires a single argument`)
i.startLabels(),i.pushFrame(),i.returnTo("END")
let r=e[0],a=e[1]
for(let l=0;l<r.length;l++){let t=r[l]
if("nextSibling"!==t&&"guid"!==t)throw new Error(`SYNTAX ERROR: #in-element does not take a \`${r[0]}\` option`)
w(a[l],i)}w(t[0],i),i.dup(),i.enter(4),i.jumpUnless("ELSE"),i.pushRemoteElement(),i.invokeStaticBlock(s),i.popRemoteElement(),i.label("ELSE"),i.exit(),i.return(),i.label("END"),i.popFrame(),i.stopLabels()}),t.add("-with-dynamic-vars",(t,e,s,n,i)=>{if(e){let t=e[0],n=e[1]
i.compileParams(n),i.pushDynamicScope(),i.bindDynamicScope(t),i.invokeStaticBlock(s),i.popDynamicScope()}else i.invokeStaticBlock(s)}),t.add("component",(t,e,s,n,i)=>{let r=t[0],a=t.slice(1)
i.dynamicComponent(r,a,e,!0,s,n)}),e.add("component",(t,e,s,n)=>{let i=e[0],r=e.slice(1)
return n.dynamicComponent(i,r,s,!0,null,null),!0}),{blocks:t,inlines:e}}function E(t,e){Ve.compile(t,e)}function _(t){return!(!t||!t[hs])}function C(t,e,s){let n=t.lookupComponent(e,s)
return n}function x(t,e){return!1===e.getCapabilities(t).dynamicLayout}function A(t,e){return!0===e.getCapabilities(t).dynamicLayout}function N(t){return T(t)?"":String(t)}function L(t){return T(t)?"":M(t)?t:O(t)?t.toHTML():B(t)?t:String(t)}function T(t){return null===t||void 0===t||"function"!=typeof t.toString}function O(t){return"object"==typeof t&&null!==t&&"function"==typeof t.toHTML}function B(t){return"object"==typeof t&&null!==t&&"number"==typeof t.nodeType}function D(t){return B(t)&&11===t.nodeType}function M(t){return"string"==typeof t}function j(t,e,s){return new Ls(t,e,s)}function I(t,e){return new Ts(t,e)}function R(t,e){let s=t.parentElement(),n=t.firstNode(),i=t.lastNode(),r=n
for(;r;){let t=r.nextSibling
if(s.insertBefore(r,e),r===i)return t
r=t}return null}function F(t){let e=t.parentElement(),s=t.firstNode(),n=t.lastNode(),i=s
for(;i;){let t=i.nextSibling
if(e.removeChild(i),i===n)return t
i=t}return null}function P(t,e,s){if(!t)return e
if(!H(t,s))return e
let n=t.createElement("div")
return class extends e{insertHTMLBefore(t,e,i){return null===i||""===i?super.insertHTMLBefore(t,e,i):t.namespaceURI!==s?super.insertHTMLBefore(t,e,i):V(t,n,i,e)}}}function V(t,e,s,n){let i="<svg>"+s+"</svg>"
e.innerHTML=i
var r=$(e.firstChild,t,n)
let a=r[0],l=r[1]
return new Ls(t,a,l)}function H(t,e){let s=t.createElementNS(e,"svg")
try{s.insertAdjacentHTML("beforeend","<circle></circle>")}catch(t){}finally{return 1!==s.childNodes.length||s.firstChild.namespaceURI!==Os}}function z(t,e){return t&&U(t)?class extends e{constructor(t){super(t),this.uselessComment=t.createComment("")}insertHTMLBefore(t,e,s){if(null===s)return super.insertHTMLBefore(t,e,s)
let n=!1,i=e?e.previousSibling:t.lastChild
i&&i instanceof Text&&(n=!0,t.insertBefore(this.uselessComment,e))
let r=super.insertHTMLBefore(t,e,s)
return n&&t.removeChild(this.uselessComment),r}}:e}function U(t){let e=t.createElement("div")
return e.innerHTML="first",e.insertAdjacentHTML("beforeend","second"),2!==e.childNodes.length}function $(t,e,s){let n=t.firstChild,i=null,r=n
for(;r;)i=r,r=r.nextSibling,e.insertBefore(i,s)
return[n,i]}function G(t,e,s,n){let i,r=e,a=t,l=s,o=l?l.previousSibling:r.lastChild
if(null===n||""===n)return new Ls(r,null,null)
null===l?(r.insertAdjacentHTML("beforeend",n),i=r.lastChild):l instanceof HTMLElement?(l.insertAdjacentHTML("beforebegin",n),i=l.previousSibling):(r.insertBefore(a,l),a.insertAdjacentHTML("beforebegin",n),i=a.previousSibling,r.removeChild(a))
let h=o?o.nextSibling:r.firstChild
return new Ls(r,h,i)}function Y(t,e){return-1!==t.indexOf(e)}function W(t,e){return(null===t||Y(Us,t))&&Y(Gs,e)}function X(t,e){return null!==t&&(Y($s,t)&&Y(Ys,e))}function K(t,e){return W(t,e)||X(t,e)}function q(t,e,s,n){let i=null
if(null===n||void 0===n)return n
if(O(n))return n.toHTML()
i=e?e.tagName.toUpperCase():null
let r=N(n)
if(W(i,s)){let e=t.protocolForURL(r)
if(Y(zs,e))return`unsafe:${r}`}return X(i,s)?`unsafe:${r}`:r}function J(t,e){let s,n
if(e in t)n=e,s="prop"
else{let i=e.toLowerCase()
i in t?(s="prop",n=i):(s="attr",n=e)}return"prop"!==s||"style"!==n.toLowerCase()&&!Z(t.tagName,n)||(s="attr"),{normalized:n,type:s}}function Z(t,e){let s=Ws[t.toUpperCase()]
return s&&s[e.toLowerCase()]||!1}function Q(t,e){let s=t.tagName
if(t.namespaceURI===Bs)return tt(s,e)
var n=J(t,e)
let i=n.type,r=n.normalized
return"attr"===i?tt(s,r):et(s,r)}function tt(t,e){return K(t,e)?Zs:Ks}function et(t,e){return K(t,e)?Js:nt(t,e)?Qs:st(t,e)?tn:qs}function st(t,e){return"OPTION"===t&&"selected"===e}function nt(t,e){return("INPUT"===t||"TEXTAREA"===t)&&"value"===e}function it(t){return!1===t||void 0===t||null===t||void 0===t.toString?null:!0===t?"":"function"==typeof t?null:String(t)}function rt(t,e){return dn.forInitialRender(t,e)}function at({id:t,meta:e,block:s}){let n,i=t||`client-${Nn++}`
return{id:i,meta:e,create:(t,a)=>{let l=a?r({},a,e):e
return n||(n=JSON.parse(s)),new Ln(t,{id:i,block:n,referrer:l})}}}function lt(t,e,s){let n=t.block,i=t.referrer,a=n.hasEval,l=n.symbols,o=r({},e,{asPartial:s,referrer:i})
return new We(n.statements,t,o,{referrer:i,hasEval:a,symbols:l})}function ot(){}function ht(t){return-1===t.indexOf(":")}function ut(t,e,s,n){let i=dt(t)
return i.trackedProperties[e]=!0,i.trackedPropertyDependencies[e]=n||[],{enumerable:!0,configurable:!1,get:s.get,set:function(){dt(this).dirtyableTagFor(e).inner.dirty(),s.set.apply(this,arguments),Gn()}}}function ct(t,e){let s,n=Symbol(e)
dt(t).trackedProperties[e]=!0,void 0!==t[e]&&(s=t[e]),Object.defineProperty(t,e,{configurable:!0,get(){return this[n]},set(t){dt(this).dirtyableTagFor(e).inner.dirty(),this[n]=t,Gn()}})}function pt(t,e,s){let n=[t.dirtyableTagFor(e)]
if(s&&s.length)for(let i=0;i<s.length;i++)n.push(t.tagFor(s[i]))
return f(n)}function dt(t){let e=t[Un]
return e&&mt(t,Un)?e:t[Un]=new zn(e)}function mt(t,e){return $n.call(t,e)}function ft(t,e){throw Yn.for(t,e)}function gt(t,e,s=ft){return"object"==typeof t&&t?dt(t).tagFor(e):oe}function yt(t,e,s){if(t instanceof Uint16Array){if(void 0!==t.slice)return t.slice(e,s).buffer
let n=new Uint16Array(s)
for(;e<s;e++)n[e]=t[e]
return n.buffer}return null}function bt(t,e){let s=t.getSelf(),n=e.capture(),i=n.positional.at(0).value()
return"function"!=typeof i&&vt(i,n.positional.at(0)),new On(function(...t){let e=n.positional.value()
e.shift(),e.push(...t),i.apply(s&&s.value(),e)})}function vt(t,e){let s=kt(e)
throw new Error(`You tried to create an action with the {{action}} helper, but the first argument ${s}was ${typeof t} instead of a function.`)}function kt(t){let e,s,n=""
return null===t||void 0===t?n:("parent"in t&&"property"in t?(e=t.parent.value(),s=t.property):"_parentValue"in t&&"_propertyKey"in t&&(e=t._parentValue,s=t._propertyKey),void 0!==s&&(n+=`('${s}' on ${wt(e)}) `),n)}function wt(t){let e=typeof t
if(null===t||void 0===t)return e
if("number"===e||"boolean"===e)return t.toString()
if(t.debugName)return t.debugName
try{return JSON.stringify(t)}catch(t){}return t.toString()}function St(t){var e=t.split(":")
let s=e[0],n=e[1]
return!!(s&&n&&0===n.indexOf("/")&&n.split("/").length>3)}function Et(t){return void 0!==t.rootName&&void 0!==t.collection&&void 0!==t.name&&void 0!==t.type}function _t(t){let e=t.type,s=Ct(t)
return s?e+":"+s:e}function Ct(t){let e=[]
if(t.rootName&&e.push(t.rootName),t.collection&&e.push(t.collection),t.namespace&&e.push(t.namespace),t.name&&e.push(t.name),e.length>0){let s=e.join("/")
return Et(t)&&(s="/"+s),s}}function xt(t){let e={}
if(t.indexOf(":")>-1){var s=t.split(":")
let n=s[0],i=s[1]
e.type=n
let r
0===i.indexOf("/")?(r=i.substr(1).split("/"),e.rootName=r.shift(),e.collection=r.shift()):r=i.split("/"),r.length>0&&(e.name=r.pop(),r.length>0&&(e.namespace=r.join("/")))}else e.type=t
return e}function At(t,e){if(!e)throw new Error("Assertion Failed: "+t)}function Nt(t){let e=t.namespace,s=t.collection,n=e.lastIndexOf("/-")
if(n>-1){n+=2
let t=e.indexOf("/",n)
s=e.slice(n,t>-1?t:void 0)}return s}function Lt(t){return 2===Object.keys(t).length&&t.id&&t.type?Ti.included.find(e=>e.id===t.id&&e.type===t.type):t}function Tt({relationships:t},e,s=!1){return t[e].data.map(Lt)}function Ot(t){return It(t,!0)}function Bt(t){let e=t.flags
return e&&(e.isPrivate||e.isProtected||(e.isPublic=!0)),t}function Dt(t){return t.hasBody=t.comment||t.parameters,t}function Mt(t){for(let e of t.signatures){let t=e.comment,s=t&&t.tags
if(s)for(let e of s)if("category"===e.tagName)return e.text.trim()}return null}function jt(t){if(t.properties&&Bt(t.properties),t.callSignatures&&(t.signatures=t.callSignatures.map(Dt)),t.methods){let e=!1
t.methods=t.methods.map(t=>{if(Bt(t),t.callSignatures&&(t.signatures=t.callSignatures.map(Dt)),t.signatures){let s=Mt(t)
s&&(e=!0,t.category=s)}return t}),t.hasMethodCategories=e}return t.functions&&(t.functions=t.functions.map(t=>(Bt(t),t.callSignatures&&(t.signatures=t.callSignatures.map(Dt)),t))),t.constructors&&(t.constructors=t.constructors.map(t=>(t.constructorSignatures&&(t.signatures=t.constructorSignatures.map(Dt)),t))),t}function It({type:t,id:e,attributes:s,relationships:n},i=!1){let r={type:t,id:e,kindString:t,slug:e,alias:e,name:e,isFunction:"function"===t,flags:{isPrivate:!0,isProtected:!0,isPublic:!0,isStatic:!0,isExported:!0,isExternal:!0,isOptional:!0,isRest:!0,isNormalized:!0}}
s||(s=Lt({id:e,type:t}).attributes),s=jt(s)
for(let a in s)r[a]=s[a]
for(let a in n){let t=n[a]
r[a]=i?t.data.map(Ot):t.data}return r}function Rt(t){let e=[]
for(let s in t)if(Array.isArray(t[s])){const n=t[s].filter(t=>t.flags&&t.flags.isNormalized).map(Ot)
e=e.concat(n)}return t.children=e.sort((t,e)=>t.name>e.name?1:-1).map(t=>("function"===t.type&&(t.isFunction=!0),t)),t.menu.include&&(t.children=t.children.filter(e=>t.menu.include.indexOf(e.name)>-1)),t.menu.exclude&&(t.children=t.children.filter(e=>t.menu.exclude.indexOf(e.name)<0)),t}function Ft(t){return Tt(t.data,"docmodules").map(Ot).map(Rt)}function Pt(t){"/"===t[0]&&(t=t.substring(1)),"/"===t[t.length-1]&&(t=t.substring(0,t.length-1))
let e=t.split("/")
if(e[0]!==Di||2!==e.length&&4!==e.length||4===e.length&&e[2]!==Bi)return{moduleId:null,projectId:null}
const s=e[1]
let n=null
return 4===e.length&&(n=e[3]),{moduleId:n,projectId:s}}function Vt(t,e){return"/"===t[0]&&(t=t.substring(1)),"/"===e[0]&&(e=e.substring(1)),t===e.substring(0,t.length)&&(e=e.substring(t.length)),"/"!==e[0]&&(e="/"+e),e}function Ht(t){return t.toLowerCase().replace(/\s/g,"-")}class zt{constructor(t,e=null){this._registry=t,this._resolver=e,this._lookups={},this._factoryDefinitionLookups={}}factoryFor(t){let e=this._factoryDefinitionLookups[t]
if(e||(this._resolver&&(e=this._resolver.retrieve(t)),e||(e=this._registry.registration(t)),e&&(this._factoryDefinitionLookups[t]=e)),e)return this.buildFactory(t,e)}lookup(t){let e=!1!==this._registry.registeredOption(t,"singleton")
if(e&&this._lookups[t])return this._lookups[t]
let s=this.factoryFor(t)
if(!s)return
if(!1===this._registry.registeredOption(t,"instantiate"))return s.class
let n=s.create()
return e&&n&&(this._lookups[t]=n),n}defaultInjections(t){return{}}buildInjections(t){let e,s=this.defaultInjections(t),n=this._registry.registeredInjections(t)
for(let i=0;i<n.length;i++)s[(e=n[i]).property]=this.lookup(e.source)
return s}buildFactory(t,e){let s=this.buildInjections(t)
return{class:e,create(t){let n=Object.assign({},s,t)
return e.create(n)}}}}class Ut{constructor(t){this._registrations={},this._registeredOptions={},this._registeredInjections={},t&&t.fallback&&(this._fallback=t.fallback)}register(t,e,s){this._registrations[t]=e,s&&(this._registeredOptions[t]=s)}registration(t){let e=this._registrations[t]
return void 0===e&&this._fallback&&(e=this._fallback.registration(t)),e}unregister(t){delete this._registrations[t],delete this._registeredOptions[t],delete this._registeredInjections[t]}registerOption(t,e,s){let n=this._registeredOptions[t]
n||(n={},this._registeredOptions[t]=n),n[e]=s}registeredOption(t,e){let s,n=this.registeredOptions(t)
return n&&(s=n[e]),void 0===s&&void 0!==this._fallback&&(s=this._fallback.registeredOption(t,e)),s}registeredOptions(t){let e=this._registeredOptions[t]
if(void 0===e){let s=t.split(":")[0]
e=this._registeredOptions[s]}return e}unregisterOption(t,e){let s=this._registeredOptions[t]
s&&delete s[e]}registerInjection(t,e,s){let n=this._registeredInjections[t]
void 0===n&&(this._registeredInjections[t]=n=[]),n.push({property:e,source:s})}registeredInjections(t){let e=t.split(":")[0],s=this._fallback?this._fallback.registeredInjections(t):[]
return Array.prototype.push.apply(s,this._registeredInjections[e]),Array.prototype.push.apply(s,this._registeredInjections[t]),s}}const $t="__owner__",Gt=Object.keys
let Yt=0
class Wt{constructor(){this.dict=h()}add(t){return"string"==typeof t?this.dict[t]=t:this.dict[o(t)]=t,this}delete(t){"string"==typeof t?delete this.dict[t]:t._guid&&delete this.dict[t._guid]}}class Xt{constructor(){this.stack=[],this.current=null}get size(){return this.stack.length}push(t){this.current=t,this.stack.push(t)}pop(){let t=this.stack.pop(),e=this.stack.length
return this.current=0===e?null:this.stack[e-1],void 0===t?null:t}isEmpty(){return 0===this.stack.length}}class Kt{constructor(t){this.next=null,this.prev=null,this.value=t}}class qt{constructor(){this.clear()}head(){return this._head}tail(){return this._tail}clear(){this._head=this._tail=null}toArray(){let t=[]
return this.forEachNode(e=>t.push(e)),t}nextNode(t){return t.next}forEachNode(t){let e=this._head
for(;null!==e;)t(e),e=e.next}insertBefore(t,e=null){return null===e?this.append(t):(e.prev?e.prev.next=t:this._head=t,t.prev=e.prev,t.next=e,e.prev=t,t)}append(t){let e=this._tail
return e?(e.next=t,t.prev=e,t.next=null):this._head=t,this._tail=t}remove(t){return t.prev?t.prev.next=t.next:this._head=t.next,t.next?t.next.prev=t.prev:this._tail=t.prev,t}}class Jt{constructor(t,e){this._head=t,this._tail=e}forEachNode(t){let e=this._head
for(;null!==e;)t(e),e=this.nextNode(e)}head(){return this._head}tail(){return this._tail}toArray(){let t=[]
return this.forEachNode(e=>t.push(e)),t}nextNode(t){return t===this._tail?null:t.next}}new Jt(null,null)
const Zt=Object.freeze([])
class Qt{constructor(){this.evaluateOpcode=a(78).slice()}add(t,e){this.evaluateOpcode[t]=e}evaluate(t,e,s){(0,this.evaluateOpcode[s])(t,e)}}const te=new Qt
class ee{constructor(){l(this)}}class se extends ee{constructor(){super(...arguments),this.next=null,this.prev=null}}var ne;(function(t){t[t.pc=0]="pc",t[t.ra=1]="ra",t[t.fp=2]="fp",t[t.sp=3]="sp",t[t.s0=4]="s0",t[t.s1=5]="s1",t[t.t0=6]="t0",t[t.t1=7]="t1",t[t.v0=8]="v0"})(ne||(ne={}))
class ie{validate(t){return this.value()===t}}ie.id=0
const re=[],ae=[]
class le{constructor(t,e){this.type=t,this.inner=e}value(){return(0,re[this.type])(this.inner)}validate(t){return(0,ae[this.type])(this.inner,t)}}re.push(()=>0),ae.push((t,e)=>0===e)
const oe=new le(0,null)
re.push(()=>NaN),ae.push((t,e)=>NaN===e)
const he=new le(1,null)
re.push(()=>ue),ae.push((t,e)=>e===ue)
new le(2,null)
let ue=1
class ce extends ie{static create(t=ue){return new le(this.id,new ce(t))}constructor(t=ue){super(),this.revision=t}value(){return this.revision}dirty(){this.revision=++ue}}u(ce)
class pe extends ie{constructor(){super(...arguments),this.lastChecked=null,this.lastValue=null}value(){let t=this.lastChecked,e=this.lastValue
return t!==ue&&(this.lastChecked=ue,this.lastValue=e=this.compute()),this.lastValue}invalidate(){this.lastChecked=null}}class de extends pe{static create(t,e){return new le(this.id,new de(t,e))}constructor(t,e){super(),this.first=t,this.second=e}compute(){return Math.max(this.first.value(),this.second.value())}}u(de)
class me extends pe{static create(t){return new le(this.id,new me(t))}constructor(t){super(),this.tags=t}compute(){let t=this.tags,e=-1
for(let s=0;s<t.length;s++){let n=t[s].value()
e=Math.max(n,e)}return e}}u(me)
class fe extends pe{static create(t){return new le(this.id,new fe(t))}constructor(t){super(),this.tag=t,this.lastUpdated=1}compute(){return Math.max(this.lastUpdated,this.tag.value())}update(t){t!==this.tag&&(this.tag=t,this.lastUpdated=ue,this.invalidate())}}u(fe)
class ge{constructor(){this.lastRevision=null,this.lastValue=null}value(){let t=this.tag,e=this.lastRevision,s=this.lastValue
return null!==e&&t.validate(e)||(s=this.lastValue=this.compute(),this.lastRevision=t.value()),s}invalidate(){this.lastRevision=null}}class ye{constructor(t){this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=t.tag,this.reference=t}peek(){return this.initialized?this.lastValue:this.initialize()}revalidate(){if(!this.initialized)return this.initialize()
let t=this.reference,e=this.lastRevision,s=t.tag
if(s.validate(e))return be
this.lastRevision=s.value()
let n=this.lastValue,i=t.value()
return i===n?be:(this.lastValue=i,i)}initialize(){let t=this.reference,e=this.lastValue=t.value()
return this.lastRevision=t.tag.value(),this.initialized=!0,e}}const be="adb3b78e-3d22-4e4b-877a-6317c2c5c145"
class ve{constructor(t){this.inner=t,this.tag=oe}value(){return this.inner}}class ke extends Kt{constructor(t,e){super(t.valueReferenceFor(e)),this.retained=!1,this.seen=!1,this.key=e.key,this.iterable=t,this.memo=t.memoReferenceFor(e)}update(t){this.retained=!0,this.iterable.updateValueReference(this.value,t),this.iterable.updateMemoReference(this.memo,t)}shouldRemove(){return!this.retained}reset(){this.retained=!1,this.seen=!1}}class we{constructor(t){this.iterator=null,this.map=h(),this.list=new qt,this.tag=t.tag,this.iterable=t}isEmpty(){return(this.iterator=this.iterable.iterate()).isEmpty()}iterate(){let t
return t=null===this.iterator?this.iterable.iterate():this.iterator,this.iterator=null,t}has(t){return!!this.map[t]}get(t){return this.map[t]}wasSeen(t){let e=this.map[t]
return void 0!==e&&e.seen}append(t){let e=this.map,s=this.list,n=this.iterable,i=e[t.key]=new ke(n,t)
return s.append(i),i}insertBefore(t,e){let s=this.map,n=this.list,i=this.iterable,r=s[t.key]=new ke(i,t)
return r.retained=!0,n.insertBefore(r,e),r}move(t,e){let s=this.list
t.retained=!0,s.remove(t),s.insertBefore(t,e)}remove(t){this.list.remove(t),delete this.map[t.key]}nextNode(t){return this.list.nextNode(t)}head(){return this.list.head()}}class Se{constructor(t){this.iterator=null
let e=new we(t)
this.artifacts=e}next(){let t=this.artifacts,e=(this.iterator=this.iterator||t.iterate()).next()
return null===e?null:t.append(e)}}var Ee;(function(t){t[t.Append=0]="Append",t[t.Prune=1]="Prune",t[t.Done=2]="Done"})(Ee||(Ee={}))
class _e{constructor({target:t,artifacts:e}){this.target=t,this.artifacts=e,this.iterator=e.iterate(),this.current=e.head()}sync(){let t=Ee.Append
for(;;)switch(t){case Ee.Append:t=this.nextAppend()
break
case Ee.Prune:t=this.nextPrune()
break
case Ee.Done:return void this.nextDone()}}advanceToKey(t){let e=this.current,s=this.artifacts,n=e
for(;null!==n&&n.key!==t;)n.seen=!0,n=s.nextNode(n)
null!==n&&(this.current=s.nextNode(n))}nextAppend(){let t=this.iterator,e=this.current,s=this.artifacts,n=t.next()
if(null===n)return this.startPrune()
let i=n.key
return null!==e&&e.key===i?this.nextRetain(n):s.has(i)?this.nextMove(n):this.nextInsert(n),Ee.Append}nextRetain(t){let e=this.artifacts,s=this.current;(s=s).update(t),this.current=e.nextNode(s),this.target.retain(t.key,s.value,s.memo)}nextMove(t){let e=this.current,s=this.artifacts,n=this.target,i=t.key,r=s.get(t.key)
r.update(t),s.wasSeen(t.key)?(s.move(r,e),n.move(r.key,r.value,r.memo,e?e.key:null)):this.advanceToKey(i)}nextInsert(t){let e=this.artifacts,s=this.target,n=this.current,i=e.insertBefore(t,n)
s.insert(i.key,i.value,i.memo,n?n.key:null)}startPrune(){return this.current=this.artifacts.head(),Ee.Prune}nextPrune(){let t=this.artifacts,e=this.target,s=this.current
if(null===s)return Ee.Done
let n=s
return this.current=t.nextNode(n),n.shouldRemove()?(t.remove(n),e.delete(n.key)):n.reset(),Ee.Prune}nextDone(){this.target.done()}}class Ce extends ve{constructor(t){super(t)}static create(t){return void 0===t?Ne:null===t?Le:!0===t?Te:!1===t?Oe:"number"==typeof t?new Ae(t):new xe(t)}get(t){return Ne}}class xe extends Ce{constructor(){super(...arguments),this.lengthReference=null}get(t){if("length"===t){let t=this.lengthReference
return null===t&&(t=this.lengthReference=new Ae(this.inner.length)),t}return super.get(t)}}class Ae extends Ce{constructor(t){super(t)}}const Ne=new Ae(void 0),Le=new Ae(null),Te=new Ae(!0),Oe=new Ae(!1)
class Be{constructor(t){this.inner=t,this.tag=t.tag}value(){return this.toBool(this.inner.value())}toBool(t){return!!t}}class De extends ge{constructor(t){super(),this.parts=t,this.tag=d(t)}compute(){let t=new Array
for(let e=0;e<this.parts.length;e++){let s=this.parts[e].value()
null!==s&&void 0!==s&&(t[e]=b(s))}return t.length>0?t.join(""):null}}te.add(1,(t,{op1:e})=>{let s=t.stack,n=t.constants.resolveHandle(e)(t,s.pop())
t.loadValue(ne.v0,n)}),te.add(4,(t,{op1:e})=>{let s=t.referenceForSymbol(e)
t.stack.push(s)}),te.add(2,(t,{op1:e})=>{let s=t.stack.pop()
t.scope().bindSymbol(e,s)}),te.add(3,(t,{op1:e})=>{let s=t.stack.pop(),n=t.stack.pop(),i=t.stack.pop(),r=i?[s,n,i]:null
t.scope().bindBlock(e,r)}),te.add(76,(t,{op1:e})=>{let s=t.constants.getString(e),n=t.scope().getPartialMap()[s]
void 0===n&&(n=t.getSelf().get(s)),t.stack.push(n)}),te.add(17,(t,{op1:e,op2:s})=>{t.pushRootScope(e,!!s)}),te.add(5,(t,{op1:e})=>{let s=t.constants.getString(e),n=t.stack.pop()
t.stack.push(n.get(s))}),te.add(6,(t,{op1:e})=>{let s=t.stack,n=t.scope().getBlock(e)
n?(s.push(n[2]),s.push(n[1]),s.push(n[0])):(s.push(null),s.push(null),s.push(null))}),te.add(7,(t,{op1:e})=>{let s=!!t.scope().getBlock(e)
t.stack.push(s?Te:Oe)}),te.add(8,t=>{let e=t.stack.pop(),s=e&&e.parameters.length
t.stack.push(s?Te:Oe)}),te.add(9,(t,{op1:e})=>{let s=new Array(e)
for(let n=e;n>0;n--)s[n-1]=t.stack.pop()
t.stack.push(new De(s))})
var Me;(function(t){t[t.Text=0]="Text",t[t.Append=1]="Append",t[t.Comment=2]="Comment",t[t.Modifier=3]="Modifier",t[t.Block=4]="Block",t[t.Component=5]="Component",t[t.OpenElement=6]="OpenElement",t[t.OpenSplattedElement=7]="OpenSplattedElement",t[t.FlushElement=8]="FlushElement",t[t.CloseElement=9]="CloseElement",t[t.StaticAttr=10]="StaticAttr",t[t.DynamicAttr=11]="DynamicAttr",t[t.AttrSplat=12]="AttrSplat",t[t.Yield=13]="Yield",t[t.Partial=14]="Partial",t[t.DynamicArg=15]="DynamicArg",t[t.StaticArg=16]="StaticArg",t[t.TrustingAttr=17]="TrustingAttr",t[t.Debugger=18]="Debugger",t[t.ClientSideStatement=19]="ClientSideStatement",t[t.Unknown=20]="Unknown",t[t.Get=21]="Get",t[t.MaybeLocal=22]="MaybeLocal",t[t.HasBlock=23]="HasBlock",t[t.HasBlockParams=24]="HasBlockParams",t[t.Undefined=25]="Undefined",t[t.Helper=26]="Helper",t[t.Concat=27]="Concat",t[t.ClientSideExpression=28]="ClientSideExpression"})(Me||(Me={}))
var je;(function(t){t.isUnknown=v(Me.Unknown),t.isGet=v(Me.Get),t.isConcat=v(Me.Concat),t.isHelper=v(Me.Helper),t.isHasBlock=v(Me.HasBlock),t.isHasBlockParams=v(Me.HasBlockParams),t.isUndefined=v(Me.Undefined),t.isClientSide=v(Me.ClientSideExpression),t.isMaybeLocal=v(Me.MaybeLocal),t.isPrimitiveValue=function(t){return null===t||"object"!=typeof t}})(je||(je={}))
var Ie;(function(t){function e(t){return t[0]===Me.StaticAttr||t[0]===Me.DynamicAttr||t[0]===Me.TrustingAttr}function s(t){return t[0]===Me.StaticArg||t[0]===Me.DynamicArg}t.isText=v(Me.Text),t.isAppend=v(Me.Append),t.isComment=v(Me.Comment),t.isModifier=v(Me.Modifier),t.isBlock=v(Me.Block),t.isComponent=v(Me.Component),t.isOpenElement=v(Me.OpenElement),t.isSplatElement=v(Me.OpenSplattedElement),t.isFlushElement=v(Me.FlushElement),t.isCloseElement=v(Me.CloseElement),t.isStaticAttr=v(Me.StaticAttr),t.isDynamicAttr=v(Me.DynamicAttr),t.isAttrSplat=v(Me.AttrSplat),t.isYield=v(Me.Yield),t.isPartial=v(Me.Partial),t.isDynamicArg=v(Me.DynamicArg),t.isStaticArg=v(Me.StaticArg),t.isTrustingAttr=v(Me.TrustingAttr),t.isDebugger=v(Me.Debugger),t.isClientSide=v(Me.ClientSideStatement),t.isAttribute=e,t.isArgument=s,t.isParameter=function(t){return e(t)||s(t)}})(Ie||(Ie={}))
var Re;(function(t){t[t.OpenComponentElement=0]="OpenComponentElement",t[t.DidCreateElement=1]="DidCreateElement",t[t.SetComponentAttrs=2]="SetComponentAttrs",t[t.DidRenderLayout=3]="DidRenderLayout",t[t.Debugger=4]="Debugger"})(Re||(Re={}))
var Fe=Me
class Pe{constructor(t=0){this.offset=t,this.names=h(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}compile(t,e){let s=t[this.offset],n=this.names[s],i=this.funcs[n]
i(t,e)}}const Ve=new Pe,He=new Pe(1)
Ve.add(Fe.Text,(t,e)=>{e.text(t[1])}),Ve.add(Fe.Comment,(t,e)=>{e.comment(t[1])}),Ve.add(Fe.CloseElement,(t,e)=>{e.closeElement()}),Ve.add(Fe.FlushElement,(t,e)=>{e.flushElement()}),Ve.add(Fe.Modifier,(t,e)=>{let s=e.lookup,n=e.referrer,i=t[1],r=t[2],a=t[3],l=s.lookupModifier(i,n)
if(!l)throw new Error(`Compile Error ${i} is not a modifier: Helpers may not be used in the element form.`)
e.modifier(l,r,a)}),Ve.add(Fe.StaticAttr,(t,e)=>{let s=t[1],n=t[2],i=t[3]
e.staticAttr(s,i,n)}),Ve.add(Fe.DynamicAttr,(t,e)=>{k(t,!1,e)}),Ve.add(Fe.TrustingAttr,(t,e)=>{k(t,!0,e)}),Ve.add(Fe.OpenElement,(t,e)=>{e.openPrimitiveElement(t[1])}),Ve.add(Fe.OpenSplattedElement,(t,e)=>{e.setComponentAttrs(!0),e.putComponentOperations(),e.openElementWithOperations(t[1])}),He.add(Re.OpenComponentElement,(t,e)=>{e.putComponentOperations(),e.openElementWithOperations(t[2])}),He.add(Re.DidCreateElement,(t,e)=>{e.didCreateElement(ne.s0)}),He.add(Re.SetComponentAttrs,(t,e)=>{e.setComponentAttrs(t[2])}),He.add(Re.Debugger,()=>{}),He.add(Re.DidRenderLayout,(t,e)=>{e.didRenderLayout(ne.s0)}),Ve.add(Fe.Append,(t,e)=>{let s=t[1],n=t[2]
if(!0===(e.macros.inlines.compile(t,e)||s))return
let i=Ue.isGet(s),r=Ue.isMaybeLocal(s)
n?e.guardedAppend(s,!0):i||r?e.guardedAppend(s,!1):(w(s,e),e.dynamicContent(!1))}),Ve.add(Fe.Block,(t,e)=>{let s=t[1],n=t[2],i=t[3],r=t[4],a=t[5],l=e.template(r),o=e.template(a),h=l&&l,u=o&&o
e.macros.blocks.compile(s,n,i,h,u,e)}),Ve.add(Fe.Component,(t,e)=>{let s=t[1],n=t[2],i=t[3],r=t[4],a=e.lookup,l=e.referrer,o=a.lookupComponentSpec(s,l)
if(null===o)throw new Error(`Compile Error: Cannot find component ${s}`)
{let t=a.getCapabilities(o),s=[[Fe.ClientSideStatement,Re.SetComponentAttrs,!0],...n,[Fe.ClientSideStatement,Re.SetComponentAttrs,!1]],l=e.inlineBlock({statements:s,parameters:Zt}),h=e.template(r)
if(!1===t.dynamicLayout){let s=a.getLayout(o)
e.pushComponentDefinition(o),e.invokeStaticComponent(t,s,l,null,i,!1,h&&h)}else e.pushComponentDefinition(o),e.invokeComponent(l,null,i,!1,h&&h)}}),Ve.add(Fe.Partial,(t,e)=>{let s=t[1],n=t[2],i=e.referrer
e.startLabels(),e.pushFrame(),e.returnTo("END"),w(s,e),e.dup(),e.enter(2),e.jumpUnless("ELSE"),e.invokePartial(i,e.evalSymbols(),n),e.popScope(),e.popFrame(),e.label("ELSE"),e.exit(),e.return(),e.label("END"),e.popFrame(),e.stopLabels()}),Ve.add(Fe.Yield,(t,e)=>{let s=t[1],n=t[2]
e.yield(s,n)}),Ve.add(Fe.AttrSplat,(t,e)=>{let s=t[1]
e.yield(s,[]),e.didCreateElement(ne.s0),e.setComponentAttrs(!1)}),Ve.add(Fe.Debugger,(t,e)=>{let s=t[1]
e.debugger(e.evalSymbols(),s)}),Ve.add(Fe.ClientSideStatement,(t,e)=>{He.compile(t,e)})
const ze=new Pe
var Ue=je
ze.add(Fe.Unknown,(t,e)=>{let s=e.lookup,n=e.asPartial,i=e.referrer,r=t[1],a=s.lookupHelper(r,i)
null!==a?e.helper(a,null,null):n?e.resolveMaybeLocal(r):(e.getVariable(0),e.getProperty(r))}),ze.add(Fe.Concat,(t,e)=>{let s=t[1]
for(let n=0;n<s.length;n++)w(s[n],e)
e.concat(s.length)}),ze.add(Fe.Helper,(t,e)=>{let s=e.lookup,n=e.referrer,i=t[1],r=t[2],a=t[3]
if("component"===i){let t=r[0],s=r.slice(1)
return void e.curryComponent(t,s,a,!0)}let l=s.lookupHelper(i,n)
if(null===l)throw new Error(`Compile Error: ${i} is not a helper`)
e.helper(l,r,a)}),ze.add(Fe.Get,(t,e)=>{let s=t[1],n=t[2]
e.getVariable(s)
for(let i=0;i<n.length;i++)e.getProperty(n[i])}),ze.add(Fe.MaybeLocal,(t,e)=>{let s=t[1]
if(e.asPartial){let t=s[0]
s=s.slice(1),e.resolveMaybeLocal(t)}else e.getVariable(0)
for(let n=0;n<s.length;n++)e.getProperty(s[n])}),ze.add(Fe.Undefined,(t,e)=>e.pushPrimitiveReference(void 0)),ze.add(Fe.HasBlock,(t,e)=>{e.hasBlock(t[1])}),ze.add(Fe.HasBlockParams,(t,e)=>{e.hasBlockParams(t[1])})
class $e{constructor(){var t=S()
let e=t.blocks,s=t.inlines
this.blocks=e,this.inlines=s}}class Ge{constructor(){this.names=h(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}addMissing(t){this.missing=t}compile(t,e,s,n,i,r){let a=this.names[t]
if(void 0===a){(0,this.missing)(t,e,s,n,i,r)}else(0,this.funcs[a])(e,s,n,i,r)}}class Ye{constructor(){this.names=h(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}addMissing(t){this.missing=t}compile(t,e){let s=t[1]
if(!Array.isArray(s))return["expr",s]
let n,i,r
if(s[0]===Fe.Helper)n=s[1],i=s[2],r=s[3]
else{if(s[0]!==Fe.Unknown)return["expr",s]
n=s[1],i=r=null}let a=this.names[n]
if(void 0===a&&this.missing){let t=(0,this.missing)(n,i,r,e)
return!1===t?["expr",s]:t}if(void 0!==a){let t=(0,this.funcs[a])(n,i,r,e)
return!1===t?["expr",s]:t}return["expr",s]}}S(new Ge,new Ye)
class We{constructor(t,e,s,n){this.statements=t,this.containingLayout=e,this.options=s,this.symbolTable=n,this.compiled=null}static topLevel(t,e){return new We(t.statements,{block:t,referrer:e.referrer},e,{referrer:e.referrer,hasEval:t.hasEval,symbols:t.symbols})}compile(){let t=this.compiled
if(null!==t)return t
let e=this.options,s=this.statements,n=this.containingLayout,i=n.referrer,r=e.program,a=e.lookup,l=e.macros,o=e.asPartial,h=new(0,e.Builder)(r,a,i,l,n,o)
for(let c=0;c<s.length;c++)E(s[c],h)
let u=h.commit(r.heap)
return this.compiled=u}}class Xe{constructor(t){this.builder=t}static(t,e){let s=e[0],n=e[1],i=e[2],r=e[3],a=this.builder,l=a.lookup
if(null!==t){let e=l.getCapabilities(t)
if(!1===e.dynamicLayout){let o=l.getLayout(t)
a.pushComponentDefinition(t),a.invokeStaticComponent(e,o,null,s,n,!1,i,r)}else a.pushComponentDefinition(t),a.invokeComponent(null,s,n,!1,i,r)}}}class Ke{constructor(t){this.buffer=t,this.typePos=0,this.size=0}encode(t,...e){if(t>255)throw new Error(`Opcode type over 8-bits. Got ${t}.`)
this.buffer.push(t|e.length<<8),this.typePos=this.buffer.length-1,e.forEach(t=>{if(t>65535)throw new Error(`Operand over 16-bits. Got ${t}.`)
this.buffer.push(t)}),this.size=this.buffer.length}compact(t){return String.fromCharCode(...t)}patch(t,e){if(-1!==this.buffer[t+1])throw new Error("Trying to patch operand in populated slot instead of a reserved slot.")
this.buffer[t+1]=e}}class qe{constructor(){this.labels=h(),this.targets=[]}label(t,e){this.labels[t]=e}target(t,e,s){this.targets.push({at:t,Target:e,target:s})}patch(t){let e=this.targets,s=this.labels
for(let i=0;i<e.length;i++){var n=e[i]
let r=n.at,a=s[n.target]-r
t.patch(r,a)}}}class Je{constructor(t,e,s,n,i,r){this.program=t,this.lookup=e,this.referrer=s,this.macros=n,this.containingLayout=i,this.asPartial=r,this.encoder=new Ke([]),this.labelsStack=new Xt,this.isComponentAttrs=!1,this.component=new Xe(this),this.constants=t.constants}get pos(){return this.encoder.typePos}get nextPos(){return this.encoder.size}upvars(t){return a(t)}reserve(t,e=1){let s=[]
for(let n=0;n<e;n++)s[n]=-1
this.push(t,...s)}push(t,...e){this.encoder.encode(t,...e)}commit(t){this.push(20)
let e=this.encoder.buffer,s=t.malloc()
for(let n=0;n<e.length;n++)t.push(e[n])
return t.finishMalloc(s,this.containingLayout.block.symbols.length),s}setComponentAttrs(t){this.isComponentAttrs=t}pushArgs(t,e){let s=this.constants.stringArray(t)
this.push(61,s,e)}get labels(){return this.labelsStack.current}startLabels(){this.labelsStack.push(new qe)}stopLabels(){this.labelsStack.pop().patch(this.encoder)}pushComponentDefinition(t){this.push(59,this.constants.handle(t))}pushDynamicComponentManager(t){this.push(60,this.constants.serializable(t))}prepareArgs(t){this.push(63,t)}createComponent(t,e,s){let n=(!0===e?1:0)|(!0===s?1:0)<<1
this.push(64,n,t)}registerComponentDestructor(t){this.push(65,t)}beginComponentTransaction(){this.push(71)}commitComponentTransaction(){this.push(72)}putComponentOperations(){this.push(66)}getComponentSelf(t){this.push(67,t)}getComponentTagName(t){this.push(68,t)}getComponentLayout(t){this.push(69,t)}invokeComponentLayout(){this.push(70)}didCreateElement(t){this.push(73,t)}didRenderLayout(t){this.push(74,t)}invokePartial(t,e,s){let n=this.constants.serializable(t),i=this.constants.stringArray(e),r=this.constants.array(s)
this.push(75,n,i,r)}resolveMaybeLocal(t){this.push(76,this.string(t))}debugger(t,e){this.push(77,this.constants.stringArray(t),this.constants.array(e))}dynamicContent(t){this.push(24,t?1:0)}text(t){this.push(22,this.constants.string(t))}openPrimitiveElement(t){this.push(25,this.constants.string(t))}openElementWithOperations(t){this.push(26,this.constants.string(t))}openDynamicElement(){this.push(27)}flushElement(){this.push(31)}closeElement(){this.push(32)}staticAttr(t,e,s){let n=this.constants.string(t),i=e?this.constants.string(e):0
if(this.isComponentAttrs)this.pushPrimitiveReference(s),this.push(30,n,1,i)
else{let t=this.constants.string(s)
this.push(28,n,t,i)}}dynamicAttr(t,e,s){let n=this.constants.string(t),i=e?this.constants.string(e):0
this.isComponentAttrs?this.push(30,n,!0===s?1:0,i):this.push(29,n,!0===s?1:0,i)}comment(t){let e=this.constants.string(t)
this.push(23,e)}modifier(t,e,s){this.pushFrame(),this.compileArgs(e,s,null,!0),this.push(33,this.constants.handle(t)),this.popFrame()}putIterator(){this.push(55)}enterList(t){this.reserve(53),this.labels.target(this.pos,53,t)}exitList(){this.push(54)}iterate(t){this.reserve(56),this.labels.target(this.pos,56,t)}setVariable(t){this.push(2,t)}setBlock(t){this.push(3,t)}getVariable(t){this.push(4,t)}getProperty(t){this.push(5,this.string(t))}getBlock(t){this.push(6,t)}hasBlock(t){this.push(7,t)}hasBlockParams(t){this.getBlock(t),this.resolveBlock(),this.push(8)}concat(t){this.push(9,t)}load(t){this.push(15,t)}fetch(t){this.push(16,t)}dup(t=ne.sp,e=0){return this.push(13,t,e)}pop(t=1){return this.push(14,t)}pushRemoteElement(){this.push(34)}popRemoteElement(){this.push(35)}label(t){this.labels.label(t,this.nextPos)}pushRootScope(t,e){this.push(17,t,e?1:0)}pushChildScope(){this.push(18)}popScope(){this.push(19)}returnTo(t){this.reserve(21),this.labels.target(this.pos,21,t)}pushDynamicScope(){this.push(37)}popDynamicScope(){this.push(38)}primitive(t){let e,s=0
switch(typeof t){case"number":t%1==0?t>-1?e=t:(e=this.negative(t),s=4):(e=this.float(t),s=1)
break
case"string":e=this.string(t),s=2
break
case"boolean":e=0|t,s=3
break
case"object":e=2,s=3
break
case"undefined":e=3,s=3
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(11,e<<3|s)}float(t){return this.constants.float(t)}negative(t){return this.constants.negative(t)}pushPrimitiveReference(t){this.primitive(t),this.primitiveReference()}primitiveReference(){this.push(12)}helper(t,e,s){this.pushFrame(),this.compileArgs(e,s,null,!0),this.push(1,this.constants.handle(t)),this.popFrame(),this.fetch(ne.v0)}bindDynamicScope(t){this.push(36,this.names(t))}enter(t){this.push(50,t)}exit(){this.push(51)}return(){this.push(20)}pushFrame(){this.push(48)}popFrame(){this.push(49)}invokeVirtual(){this.push(42)}invokeYield(){this.push(44)}toBoolean(){this.push(52)}jump(t){this.reserve(45),this.labels.target(this.pos,45,t)}jumpIf(t){this.reserve(46),this.labels.target(this.pos,46,t)}jumpUnless(t){this.reserve(47),this.labels.target(this.pos,47,t)}string(t){return this.constants.string(t)}names(t){let e=[]
for(let s=0;s<t.length;s++){let n=t[s]
e[s]=this.constants.string(n)}return this.constants.array(e)}symbols(t){return this.constants.array(t)}inlineBlock(t){let e=t.parameters,s=t.statements,n={parameters:e,referrer:this.containingLayout.referrer},i={program:this.program,macros:this.macros,Builder:this.constructor,lookup:this.lookup,asPartial:this.asPartial,referrer:this.referrer}
return new We(s,this.containingLayout,i,n)}evalSymbols(){let t=this.containingLayout.block
return t.hasEval?t.symbols:null}compileParams(t){if(!t)return 0
for(let e=0;e<t.length;e++)w(t[e],this)
return t.length}compileArgs(t,e,s,n){s&&(this.pushYieldableBlock(s.main),this.pushYieldableBlock(s.else),this.pushYieldableBlock(s.attrs))
let i=this.compileParams(t)<<4
n&&(i|=8),s&&(i|=7)
let r=Zt
if(e){r=e[0]
let t=e[1]
for(let e=0;e<t.length;e++)w(t[e],this)}this.pushArgs(r,i)}invokeStaticBlock(t,e=0){let s=t.symbolTable.parameters,n=s.length,i=Math.min(e,n)
if(this.pushFrame(),i){this.pushChildScope()
for(let t=0;t<i;t++)this.dup(ne.fp,e-t),this.setVariable(s[t])}this.pushBlock(t),this.resolveBlock(),this.invokeVirtual(),i&&this.popScope(),this.popFrame()}guardedAppend(t,e){this.startLabels(),this.pushFrame(),this.returnTo("END"),w(t,this),this.dup(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(this.referrer),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.dynamicContent(e),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()}yield(t,e){this.compileArgs(e,null,null,!1),this.getBlock(t),this.resolveBlock(),this.invokeYield(),this.popScope(),this.popFrame()}invokeComponent(t,e,s,n,i,r=null,a){this.fetch(ne.s0),this.dup(ne.sp,1),this.load(ne.s0),this.pushFrame()
let l={main:i,else:r,attrs:t}
this.compileArgs(e,s,l,n),this.prepareArgs(ne.s0),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(ne.s0,null!==i,null!==r),this.registerComponentDestructor(ne.s0),this.getComponentSelf(ne.s0),a?(this.pushSymbolTable(a.symbolTable),this.pushLayout(a),this.resolveLayout()):this.getComponentLayout(ne.s0),this.invokeComponentLayout(),this.didRenderLayout(ne.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(ne.s0)}invokeStaticComponent(t,e,s,i,r,a,l,o=null){let h=e.symbolTable
if(h.hasEval||t.prepareArgs)return void this.invokeComponent(s,i,r,a,l,o,e)
this.fetch(ne.s0),this.dup(ne.sp,1),this.load(ne.s0)
let u=h.symbols
t.createArgs&&(this.pushFrame(),this.compileArgs(null,r,null,a)),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(ne.s0,null!==l,null!==o),t.createArgs&&this.popFrame(),this.registerComponentDestructor(ne.s0)
let c=[]
this.getComponentSelf(ne.s0),c.push({symbol:0,isBlock:!1})
for(let d=0;d<u.length;d++){let t=u[d]
switch(t.charAt(0)){case"&":let e=null
if("&default"===t)e=l
else if("&inverse"===t)e=o
else{if("&attrs"!==t)throw n()
e=s}e?(this.pushYieldableBlock(e),c.push({symbol:d+1,isBlock:!0})):(this.pushYieldableBlock(null),c.push({symbol:d+1,isBlock:!0}))
break
case"@":if(!r)break
let i=r[0],h=r[1],u=t
a&&(u=t.slice(1))
let p=i.indexOf(u);-1!==p&&(w(h[p],this),c.push({symbol:d+1,isBlock:!1}))}}this.pushRootScope(u.length+1,!!(l||o||s))
for(let n=c.length-1;n>=0;n--){var p=c[n]
let t=p.symbol
p.isBlock?this.setBlock(t):this.setVariable(t)}this.pushFrame(),this.invokeStatic(e),this.didRenderLayout(ne.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(ne.s0)}dynamicComponent(t,e,s,n,i,r=null){this.startLabels(),this.pushFrame(),this.returnTo("END"),w(t,this),this.dup(),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(this.referrer),this.invokeComponent(null,e,s,n,i,r),this.label("ELSE"),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()}isComponent(){this.push(57)}curryComponent(t,e,s,n){let i=this.referrer
this.pushFrame(),this.compileArgs(e,s,null,n),w(t,this),this.push(58,this.constants.serializable(i)),this.popFrame(),this.fetch(ne.v0)}pushSymbolTable(t){if(t){let e=this.constants.table(t)
this.push(41,e)}else this.primitive(null)}pushBlockScope(){this.push(40)}pushYieldableBlock(t){this.pushSymbolTable(t&&t.symbolTable),this.pushBlockScope(),this.pushBlock(t)}template(t){return t?this.inlineBlock(t):null}}class Ze extends Je{pushBlock(t){t?this.pushOther(t):this.primitive(null)}resolveBlock(){this.push(39)}pushLayout(t){t?this.pushOther(t):this.primitive(null)}resolveLayout(){this.push(39)}invokeStatic(t){this.pushOther(t),this.push(39),this.push(42)}pushOther(t){this.push(10,this.other(t))}other(t){return this.constants.other(t)}}class Qe{constructor(){this.stack=null,this.positional=new ts,this.named=new ss,this.blocks=new is}setup(t,e,s,n,i){this.stack=t
let r=this.named,a=e.length,l=t.sp-a+1
r.setup(t,l,a,e,i)
let o=l-n
this.positional.setup(t,o,n)
let h=this.blocks,u=s.length,c=o-3*u
h.setup(t,c,u,s)}get tag(){return d([this.positional,this.named])}get base(){return this.blocks.base}get length(){return this.positional.length+this.named.length+3*this.blocks.length}at(t){return this.positional.at(t)}realloc(t){if(t>0){let e=this.positional,s=this.named,n=this.stack,i=e.base+t
for(let t=e.length+s.length-1;t>=0;t--)n.set(n.get(t,e.base),t,i)
e.base+=t,s.base+=t,n.sp+=t}}capture(){let t=0===this.positional.length?ls:this.positional.capture(),e=0===this.named.length?as:this.named.capture()
return{tag:this.tag,length:this.length,positional:t,named:e}}clear(){let t=this.stack,e=this.length
t.pop(e)}}class ts{constructor(){this.base=0,this.length=0,this.stack=null,this._tag=null,this._references=null}setup(t,e,s){this.stack=t,this.base=e,this.length=s,0===s?(this._tag=oe,this._references=Zt):(this._tag=null,this._references=null)}get tag(){let t=this._tag
return t||(t=this._tag=d(this.references)),t}at(t){let e=this.base,s=this.length,n=this.stack
return t<0||t>=s?Ne:n.get(t,e)}capture(){return new es(this.tag,this.references)}prepend(t){let e=t.length
if(e>0){let s=this.base,n=this.length,i=this.stack
this.base=s-=e,this.length=n+e
for(let r=0;r<e;r++)i.set(t.at(r),r,s)
this._tag=null,this._references=null}}get references(){let t=this._references
if(!t){let e=this.stack,s=this.base,n=this.length
t=this._references=e.slice(s,s+n)}return t}}class es{constructor(t,e,s=e.length){this.tag=t,this.references=e,this.length=s}static empty(){return new es(oe,Zt,0)}at(t){return this.references[t]}value(){return this.references.map(this.valueOf)}get(t){let e=this.references,s=this.length
if("length"===t)return Ce.create(s)
{let n=parseInt(t,10)
return n<0||n>=s?Ne:e[n]}}valueOf(t){return t.value()}}class ss{constructor(){this.base=0,this.length=0,this._tag=null,this._references=null,this._names=Zt,this._atNames=Zt}setup(t,e,s,n,i){this.stack=t,this.base=e,this.length=s,0===s?(this._tag=oe,this._references=Zt,this._names=Zt,this._atNames=Zt):(this._tag=null,this._references=null,i?(this._names=n,this._atNames=null):(this._names=null,this._atNames=n))}get tag(){return d(this.references)}get names(){let t=this._names
return t||(t=this._names=this._atNames.map(this.toSyntheticName)),t}get atNames(){let t=this._atNames
return t||(t=this._atNames=this._names.map(this.toAtName)),t}has(t){return-1!==this.names.indexOf(t)}get(t,e=!0){let s=this.base,n=this.stack,i=(e?this.names:this.atNames).indexOf(t)
return-1===i?Ne:n.get(i,s)}capture(){return new ns(this.tag,this.names,this.references)}merge(t){let e=t.length
if(e>0){let s=this.names,n=this.length,i=this.stack,r=t.names
for(let a=0;a<e;a++){let e=r[a];-1===s.indexOf(e)&&(n=s.push(e),i.push(t.references[a]))}this.length=n,this._tag=null,this._references=null,this._names=s,this._atNames=null}}get references(){let t=this._references
if(!t){let e=this.base,s=this.length,n=this.stack
t=this._references=n.slice(e,e+s)}return t}toSyntheticName(t){return t.slice(1)}toAtName(t){return`@${t}`}}class ns{constructor(t,e,s){this.tag=t,this.names=e,this.references=s,this.length=e.length,this._map=null}get map(){let t=this._map
if(!t){let e=this.names,s=this.references
t=this._map=h()
for(let n=0;n<e.length;n++)t[e[n]]=s[n]}return t}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.names,s=this.references,n=e.indexOf(t)
return-1===n?Ne:s[n]}value(){let t=this.names,e=this.references,s=h()
for(let n=0;n<t.length;n++)s[t[n]]=e[n].value()
return s}}class is{constructor(){this.internalValues=null,this.internalTag=null,this.names=Zt,this.length=0,this.base=0}setup(t,e,s,n){this.stack=t,this.names=n,this.base=e,this.length=s,0===s?(this.internalTag=oe,this.internalValues=Zt):(this.internalTag=null,this.internalValues=null)}get values(){let t=this.internalValues
if(!t){let e=this.base,s=this.length,n=this.stack
t=this.internalValues=n.slice(e,e+3*s)}return t}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.base,s=this.stack,n=this.names,i=n.indexOf(t)
if(-1===n.indexOf(t))return null
let r=s.get(3*i,e),a=s.get(3*i+1,e),l=s.get(3*i+2,e)
return null===l?null:[l,a,r]}capture(){return new rs(this.names,this.values)}}class rs{constructor(t,e){this.names=t,this.values=e,this.length=t.length}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.names.indexOf(t)
return-1===e?null:[this.values[3*e+2],this.values[3*e+1],this.values[3*e]]}}const as=new ns(oe,Zt,Zt),ls=new es(oe,Zt),os={tag:oe,length:0,positional:ls,named:as},hs="CURRIED COMPONENT DEFINITION [id=6f00feb9-a0ef-4547-99ea-ac328f80acea]"
class us{constructor(t,e){this.inner=t,this.args=e,this[hs]=!0}unwrap(t){t.realloc(this.offset)
let e=this
for(;;){var s=e
let n=s.args,i=s.inner
if(n&&(t.positional.prepend(n.positional),t.named.merge(n.named)),!_(i))return i
e=i}}get offset(){let t=this.inner,e=this.args,s=e?e.positional.length:0
return _(t)?s+t.offset:s}}class cs extends Be{static create(t){return new cs(t)}toBool(t){return _(t)}}te.add(24,(t,{op1:e})=>{let s,n=t.stack.pop(),i=n.value()
s=e?t.elements().appendTrustingDynamicContent(i):t.elements().appendCautiousDynamicContent(i),c(n)||t.updateWith(new ps(n,s))})
class ps extends se{constructor(t,e){super(),this.reference=t,this.content=e,this.tag=t.tag}evaluate(t){let e=this.content,s=this.reference
e.update(t.env,s.value())}}te.add(18,t=>t.pushChildScope()),te.add(19,t=>t.popScope()),te.add(37,t=>t.pushDynamicScope()),te.add(38,t=>t.popDynamicScope()),te.add(10,(t,{op1:e})=>{t.stack.push(t.constants.getOther(e))}),te.add(11,(t,{op1:e})=>{let s=t.stack,n=e>>3
switch(7&e){case 0:s.push(n)
break
case 1:s.push(t.constants.getFloat(n))
break
case 2:s.push(t.constants.getString(n))
break
case 3:switch(n){case 0:s.push(!1)
break
case 1:s.push(!0)
break
case 2:s.push(null)
break
case 3:s.push(void 0)}break
case 4:s.push(t.constants.getNegative(n))}}),te.add(12,t=>{let e=t.stack
e.push(Ce.create(e.pop()))}),te.add(13,(t,{op1:e,op2:s})=>{let n=t.fetchValue(e)-s
t.stack.dup(n)}),te.add(14,(t,{op1:e})=>{t.stack.pop(e)}),te.add(15,(t,{op1:e})=>{t.load(e)}),te.add(16,(t,{op1:e})=>{t.fetch(e)}),te.add(36,(t,{op1:e})=>{let s=t.constants.getArray(e)
t.bindDynamicScope(s)}),te.add(48,t=>{t.pushFrame()}),te.add(49,t=>{t.popFrame()}),te.add(50,(t,{op1:e})=>{t.enter(e)}),te.add(51,t=>{t.exit()}),te.add(41,(t,{op1:e})=>{t.stack.push(t.constants.getSymbolTable(e))}),te.add(40,t=>{t.stack.push(t.scope())}),te.add(39,t=>{let e=t.stack,s=e.pop()
e.push(s?s.compile():null)}),te.add(42,t=>{t.call(t.stack.pop())}),te.add(43,(t,{op1:e})=>{t.call(e)}),te.add(44,t=>{let e=t.stack,s=e.pop(),n=e.pop(),i=e.pop(),r=e.pop()
if(null===i)return t.pushFrame(),void t.pushScope(n)
let a=n
{let t=i.parameters,e=t.length
if(e>0){a=a.child()
for(let s=0;s<e;s++)a.bindSymbol(t[s],r.at(s))}}t.pushFrame(),t.pushScope(a),t.call(s)}),te.add(45,(t,{op1:e})=>{t.goto(e)}),te.add(46,(t,{op1:e})=>{let s=t.stack.pop()
if(c(s))s.value()&&t.goto(e)
else{let n=new ye(s)
n.peek()&&t.goto(e),t.updateWith(new ds(n))}}),te.add(47,(t,{op1:e})=>{let s=t.stack.pop()
if(c(s))s.value()||t.goto(e)
else{let n=new ye(s)
n.peek()||t.goto(e),t.updateWith(new ds(n))}}),te.add(20,t=>{t.return()}),te.add(21,(t,{op1:e})=>{t.returnTo(e)}),te.add(52,t=>{let e=t.env,s=t.stack
s.push(e.toConditionalReference(s.pop()))})
class ds extends se{constructor(t){super(),this.type="assert",this.tag=t.tag,this.cache=t}evaluate(t){y(this.cache.revalidate())&&t.throw()}}class ms extends se{constructor(t,e){super(),this.target=e,this.type="jump-if-not-modified",this.tag=t,this.lastRevision=t.value()}evaluate(t){let e=this.tag,s=this.target,n=this.lastRevision
!t.alwaysRevalidate&&e.validate(n)&&t.goto(s)}didModify(){this.lastRevision=this.tag.value()}}class fs extends se{constructor(t){super(),this.target=t,this.type="did-modify",this.tag=oe}evaluate(){this.target.didModify()}}class gs{constructor(t){this.tag=oe,this.type="label",this.label=null,this.prev=null,this.next=null,l(this),this.label=t}evaluate(){}inspect(){return`${this.label} [${this._guid}]`}}te.add(22,(t,{op1:e})=>{t.elements().appendText(t.constants.getString(e))}),te.add(26,(t,{op1:e})=>{let s=t.constants.getString(e)
t.elements().openElement(s)}),te.add(23,(t,{op1:e})=>{t.elements().appendComment(t.constants.getString(e))}),te.add(25,(t,{op1:e})=>{t.elements().openElement(t.constants.getString(e))}),te.add(27,t=>{let e=t.stack.pop().value()
t.elements().openElement(e)}),te.add(34,t=>{let e,s,n=t.stack.pop(),i=t.stack.pop(),r=t.stack.pop().value()
if(c(n))e=n.value()
else{let s=new ye(n)
e=s.peek(),t.updateWith(new ds(s))}if(c(i))s=i.value()
else{let e=new ye(i)
s=e.peek(),t.updateWith(new ds(e))}t.elements().pushRemoteElement(e,r,s)}),te.add(35,t=>{t.elements().popRemoteElement()}),te.add(31,t=>{let e=t.fetchValue(ne.t0)
e&&(e.flush(t),t.loadValue(ne.t0,null)),t.elements().flushElement()}),te.add(32,t=>{t.elements().closeElement()}),te.add(33,(t,{op1:e})=>{let s=t.constants.resolveHandle(e),n=t.stack.pop()
var i=t.elements()
let r=i.constructing,a=i.updateOperations,l=t.dynamicScope(),o=s.create(r,n,l,a)
t.env.scheduleInstallModifier(o,s)
let h=s.getDestructor(o)
h&&t.newDestroyable(h)
let u=s.getTag(o)
p(u)||t.updateWith(new ys(u,s,o))})
class ys extends se{constructor(t,e,s){super(),this.tag=t,this.manager=e,this.modifier=s,this.type="update-modifier",this.lastUpdated=t.value()}evaluate(t){let e=this.manager,s=this.modifier,n=this.tag,i=this.lastUpdated
n.validate(i)||(t.env.scheduleUpdateModifier(s,e),this.lastUpdated=n.value())}}te.add(28,(t,{op1:e,op2:s,op3:n})=>{let i=t.constants.getString(e),r=t.constants.getString(s),a=n?t.constants.getString(n):null
t.elements().setStaticAttribute(i,r,a)}),te.add(29,(t,{op1:e,op2:s,op3:n})=>{let i=t.constants.getString(e),r=t.stack.pop(),a=r.value(),l=n?t.constants.getString(n):null,o=t.elements().setDynamicAttribute(i,a,!!s,l)
c(r)||t.updateWith(new bs(r,o))})
class bs extends se{constructor(t,e){super(),this.reference=t,this.attribute=e,this.type="patch-element",this.tag=t.tag,this.lastRevision=this.tag.value()}evaluate(t){let e=this.attribute,s=this.reference,n=this.tag
n.validate(this.lastRevision)||(this.lastRevision=n.value(),e.update(s.value(),t.env))}}class vs{constructor(t,e,s,n){this.inner=t,this.resolver=e,this.meta=s,this.args=n,this.tag=t.tag,this.lastValue=null,this.lastDefinition=null}value(){let t=this.inner,e=this.lastValue,s=t.value()
if(s===e)return this.lastDefinition
let n=null
return _(s)?n=s:"string"==typeof s&&s&&(n=C(this.resolver,s,this.meta)),n=this.curry(n),this.lastValue=s,this.lastDefinition=n,n}get(){return Ne}curry(t){let e=this.args
return!e&&_(t)?t:t?new us(t,e):null}}class ks{constructor(t){this.list=t,this.tag=d(t),this.list=t}value(){let t=[],e=this.list
for(let s=0;s<e.length;s++){let n=N(e[s].value())
n&&t.push(n)}return 0===t.length?null:t.join(" ")}}const ws=new Qe
te.add(57,t=>{let e=t.stack,s=e.pop()
e.push(cs.create(s))}),te.add(58,(t,{op1:e})=>{let s=t.stack,n=s.pop(),i=s.pop(),r=null
i.length&&(r=i.capture())
let a=t.constants.getSerializable(e),l=t.constants.resolver
t.loadValue(ne.v0,new vs(n,l,a,r))}),te.add(59,(t,{op1:e})=>{let s=t.constants.resolveHandle(e),n=s.manager
t.stack.push({definition:s,manager:n,state:null})}),te.add(60,(t,{op1:e})=>{let s,i=t.stack,r=i.pop().value()
if("string"==typeof r){let n=t.constants
s=C(t.constants.resolver,r,n.getSerializable(e))}else{if(!_(r))throw n()
s=r}i.push({definition:s,manager:null,state:null})}),te.add(61,(t,{op1:e,op2:s})=>{let n=t.stack,i=t.constants.getStringArray(e),r=s>>4,a=8&s,l=[]
4&s&&l.push("main"),2&s&&l.push("else"),1&s&&l.push("attrs"),ws.setup(n,i,l,r,!!a),n.push(ws)}),te.add(63,(t,{op1:e})=>{let s,n=t.stack,i=t.fetchValue(e),r=i.definition
_(r)?(s=n.pop(),r=i.definition=r.unwrap(s)):s=n.pop()
var a=r
let l=a.manager,o=a.state
if(i.manager=r.manager,!0!==l.getCapabilities(o).prepareArgs)return void n.push(s)
let h=s.blocks.values,u=s.blocks.names,c=l.prepareArgs(o,s)
if(c){s.clear()
for(let t=0;t<h.length;t++)n.push(h[t])
let t=c.positional,e=c.named,i=t.length
for(let s=0;s<i;s++)n.push(t[s])
let r=Object.keys(e)
for(let s=0;s<r.length;s++)n.push(e[r[s]])
s.setup(n,r,u,i,!0)}n.push(s)}),te.add(64,(t,{op1:e,op2:s})=>{let n=t.dynamicScope(),i=t.fetchValue(s),r=i.definition,a=i.manager,l=1&e,o=null
a.getCapabilities(r.state).createArgs&&(o=t.stack.peek())
let h=a.create(t.env,r.state,o,n,t.getSelf(),!!l)
i.state=h
let u=a.getTag(h)
p(u)||t.updateWith(new Es(u,h,a,n))}),te.add(65,(t,{op1:e})=>{var s=t.fetchValue(e)
let n=s.manager,i=s.state,r=n.getDestructor(i)
r&&t.newDestroyable(r)}),te.add(71,t=>{t.beginCacheGroup(),t.elements().pushSimpleBlock()}),te.add(66,t=>{t.loadValue(ne.t0,new Ss)}),te.add(30,(t,{op1:e,op2:s,op3:n})=>{let i=t.constants.getString(e),r=t.stack.pop(),a=n?t.constants.getString(n):null
t.fetchValue(ne.t0).setAttribute(i,r,!!s,a)})
class Ss{constructor(){this.attributes=h(),this.classes=[]}setAttribute(t,e,s,n){let i={value:e,namespace:n,trusting:s}
"class"===t&&this.classes.push(e),this.attributes[t]=i}flush(t){for(let e in this.attributes){let s=this.attributes[e],n=s.value,i=s.namespace,r=s.trusting
"class"===e&&(n=new ks(this.classes))
let a=t.elements().setDynamicAttribute(e,n.value(),r,i)
c(n)||t.updateWith(new bs(n,a))}}}te.add(73,(t,{op1:e})=>{var s=t.fetchValue(e)
let n=s.definition,i=s.state,r=n.manager,a=t.fetchValue(ne.t0)
r.didCreateElement(i,t.elements().expectConstructing("DidCreateElementOpcode#evaluate"),a)}),te.add(67,(t,{op1:e})=>{var s=t.fetchValue(e)
let n=s.definition,i=s.state,r=n.manager
t.stack.push(r.getSelf(i))}),te.add(68,(t,{op1:e})=>{var s=t.fetchValue(e)
let n=s.definition,i=s.state,r=n.manager
t.stack.push(r.getTagName(i))}),te.add(69,(t,{op1:e})=>{let s,i=t.fetchValue(e),r=i.manager,a=i.definition,l=t.constants.resolver,o=t.stack,h=i.state,u=a.state
if(x(u,r))s=r.getLayout(u,l)
else{if(!A(u,r))throw n()
s=r.getDynamicLayout(h,l)}o.push(s.symbolTable),o.push(s.handle)}),te.add(70,t=>{let e=t.stack,s=e.pop()
var n=e.pop()
let i=n.symbols,r=n.hasEval
{let n=t.pushRootScope(i.length+1,!0)
n.bindSelf(e.pop())
let a=t.stack.pop(),l=null,o=-1
r&&(o=i.indexOf("$eval")+1,l=h())
let u=a.named.atNames
for(let t=u.length-1;t>=0;t--){let e=u[t],s=i.indexOf(u[t]),o=a.named.get(e,!1);-1!==s&&n.bindSymbol(s+1,o),r&&(l[e]=o)}let c=(t,e)=>{let s=i.indexOf(t),r=p.get(e);-1!==s&&n.bindBlock(s+1,r),l&&(l[t]=r)},p=a.blocks
c("&attrs","attrs"),c("&inverse","else"),c("&default","main"),l&&n.bindEvalScope(l),t.call(s)}}),te.add(74,(t,{op1:e})=>{var s=t.fetchValue(e)
let n=s.manager,i=s.state,r=t.elements().popBlock()
n.didRenderLayout(i,r),t.env.didCreate(i,n),t.updateWith(new _s(n,i,r))}),te.add(72,t=>{t.commitCacheGroup()})
class Es extends se{constructor(t,e,s,n){super(),this.tag=t,this.component=e,this.manager=s,this.dynamicScope=n,this.type="update-component"}evaluate(t){let e=this.component,s=this.manager,n=this.dynamicScope
s.update(e,n)}}class _s extends se{constructor(t,e,s){super(),this.manager=t,this.component=e,this.bounds=s,this.type="did-update-layout",this.tag=oe}evaluate(t){let e=this.manager,s=this.component,n=this.bounds
e.didUpdateLayout(s,n),t.env.didUpdate(s,e)}}let Cs=function(t,e){console.info("Use `context`, and `get(<path>)` to debug this template."),e("this")}
class xs{constructor(t,e,s){this.scope=t,this.locals=h()
for(let n=0;n<s.length;n++){let i=s[n],r=e[i-1],a=t.getSymbol(i)
this.locals[r]=a}}get(t){let e=this.scope,s=this.locals,n=t.split(".")
var i=t.split(".")
let r,a=i[0],l=i.slice(1),o=e.getEvalScope()
return"this"===a?r=e.getSelf():s[a]?r=s[a]:0===a.indexOf("@")&&o[a]?r=o[a]:(r=this.scope.getSelf(),l=n),l.reduce((t,e)=>t.get(e),r)}}te.add(77,(t,{op1:e,op2:s})=>{let n=t.constants.getStringArray(e),i=t.constants.getArray(s),r=new xs(t.scope(),n,i)
Cs(t.getSelf().value(),t=>r.get(t).value())}),te.add(75,(t,{op1:e,op2:s,op3:n})=>{let i=t.constants,r=t.constants.resolver,a=t.stack.pop().value(),l=i.getSerializable(e),o=i.getStringArray(s),u=i.getArray(n),c=r.lookupPartial(a,l)
var p=r.resolve(c).getPartial()
let d=p.symbolTable,m=p.handle
{let e=d.symbols,s=t.scope(),n=t.pushRootScope(e.length,!1)
n.bindCallerScope(s.getCallerScope()),n.bindEvalScope(s.getEvalScope()),n.bindSelf(s.getSelf())
let i=h()
for(let t=0;t<u.length;t++){let e=u[t],n=o[e-1],r=s.getSymbol(e)
i[n]=r}let r=s.getEvalScope()
for(let t=0;t<e.length;t++){let s=t+1,i=r[e[t]]
void 0!==i&&n.bind(s,i)}n.bindPartialMap(i),t.pushFrame(),t.call(m)}})
class As{constructor(t){this.tag=t.tag,this.artifacts=t}value(){return!this.artifacts.isEmpty()}}te.add(55,t=>{let e=t.stack,s=e.pop(),n=e.pop(),i=t.env.iterableFor(s,n.value()),r=new Se(i)
e.push(r),e.push(new As(r.artifacts))}),te.add(53,(t,{op1:e})=>{t.enterList(e)}),te.add(54,t=>{t.exitList()}),te.add(56,(t,{op1:e})=>{let s=t.stack.peek().next()
if(s){let e=t.iterate(s.memo,s.value)
t.enterItem(s.key,e)}else t.goto(e)})
class Ns{constructor(t,e){this.element=t,this.nextSibling=e}}class Ls{constructor(t,e,s){this.parentNode=t,this.first=e,this.last=s}parentElement(){return this.parentNode}firstNode(){return this.first}lastNode(){return this.last}}class Ts{constructor(t,e){this.parentNode=t,this.node=e}parentElement(){return this.parentNode}firstNode(){return this.node}lastNode(){return this.node}}const Os="http://www.w3.org/2000/svg",Bs="http://www.w3.org/2000/svg",Ds={foreignObject:1,desc:1,title:1},Ms=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(t=>Ms[t]=1)
let js="undefined"==typeof document?null:document
class Is{constructor(t){this.document=t,this.setupUselessElement()}setupUselessElement(){this.uselessElement=this.document.createElement("div")}createElement(t,e){let s,n
if(e?(s=e.namespaceURI===Bs||"svg"===t,n=Ds[e.tagName]):(s="svg"===t,n=!1),s&&!n){if(Ms[t])throw new Error(`Cannot create a ${t} inside an SVG context`)
return this.document.createElementNS(Bs,t)}return this.document.createElement(t)}insertBefore(t,e,s){t.insertBefore(e,s)}insertHTMLBefore(t,e,s){return G(this.uselessElement,t,e,s)}createTextNode(t){return this.document.createTextNode(t)}createComment(t){return this.document.createComment(t)}}var Rs;(function(t){class e extends Is{createElementNS(t,e){return this.document.createElementNS(t,e)}setAttribute(t,e,s,n=null){n?t.setAttributeNS(n,e,s):t.setAttribute(e,s)}}t.TreeConstruction=e
let s=e
s=z(js,s),s=P(js,s,Bs),t.DOMTreeConstruction=s})(Rs||(Rs={}))
class Fs extends Is{constructor(t){super(t),this.document=t,this.namespace=null}setAttribute(t,e,s){t.setAttribute(e,s)}removeAttribute(t,e){t.removeAttribute(e)}insertAfter(t,e,s){this.insertBefore(t,e,s.nextSibling)}}let Ps=Fs
Ps=z(js,Ps)
var Vs=Ps=P(js,Ps,Bs)
const Hs=Rs.DOMTreeConstruction,zs=["javascript:","vbscript:"],Us=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],$s=["EMBED"],Gs=["href","src","background","action"],Ys=["src"],Ws={INPUT:{form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}}
class Xs{constructor(t){this.attribute=t}}class Ks extends Xs{set(t,e,s){let n=it(e)
if(null!==n){var i=this.attribute
let e=i.name,s=i.namespace
t.__setAttribute(e,n,s)}}update(t,e){let s=it(t)
var n=this.attribute
let i=n.element,r=n.name
null===s?i.removeAttribute(r):i.setAttribute(r,s)}}class qs extends Xs{set(t,e,s){if(null!==e&&void 0!==e){let s=this.attribute.name
this.value=e,t.__setProperty(s,e)}}update(t,e){var s=this.attribute
let n=s.element,i=s.name
this.value!==t&&(n[i]=this.value=t,null!==t&&void 0!==t||this.removeAttribute())}removeAttribute(){var t=this.attribute
let e=t.element,s=t.name,n=t.namespace
n?e.removeAttributeNS(n,s):e.removeAttribute(s)}}class Js extends qs{set(t,e,s){var n=this.attribute
let i=q(s,n.element,n.name,e)
super.set(t,i,s)}update(t,e){var s=this.attribute
let n=q(e,s.element,s.name,t)
super.update(n,e)}}class Zs extends Ks{set(t,e,s){var n=this.attribute
let i=q(s,n.element,n.name,e)
super.set(t,i,s)}update(t,e){var s=this.attribute
let n=q(e,s.element,s.name,t)
super.update(n,e)}}class Qs extends qs{set(t,e){t.__setProperty("value",N(e))}update(t){let e=this.attribute.element,s=e.value,n=N(t)
s!==n&&(e.value=n)}}class tn extends qs{set(t,e){null!==e&&void 0!==e&&!1!==e&&t.__setProperty("selected",!0)}update(t){let e=this.attribute.element
e.selected=!!t}}class en{constructor(t,e,s,n){this.slots=t,this.callerScope=e,this.evalScope=s,this.partialMap=n}static root(t,e=0){let s=new Array(e+1)
for(let n=0;n<=e;n++)s[n]=Ne
return new en(s,null,null,null).init({self:t})}static sized(t=0){let e=new Array(t+1)
for(let s=0;s<=t;s++)e[s]=Ne
return new en(e,null,null,null)}init({self:t}){return this.slots[0]=t,this}getSelf(){return this.get(0)}getSymbol(t){return this.get(t)}getBlock(t){return this.get(t)}getEvalScope(){return this.evalScope}getPartialMap(){return this.partialMap}bind(t,e){this.set(t,e)}bindSelf(t){this.set(0,t)}bindSymbol(t,e){this.set(t,e)}bindBlock(t,e){this.set(t,e)}bindEvalScope(t){this.evalScope=t}bindPartialMap(t){this.partialMap=t}bindCallerScope(t){this.callerScope=t}getCallerScope(){return this.callerScope}child(){return new en(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)}get(t){if(t>=this.slots.length)throw new RangeError(`BUG: cannot get $${t} from scope; length=${this.slots.length}`)
return this.slots[t]}set(t,e){if(t>=this.slots.length)throw new RangeError(`BUG: cannot get $${t} from scope; length=${this.slots.length}`)
this.slots[t]=e}}class sn{constructor(){this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}didCreate(t,e){this.createdComponents.push(t),this.createdManagers.push(e)}didUpdate(t,e){this.updatedComponents.push(t),this.updatedManagers.push(e)}scheduleInstallModifier(t,e){this.scheduledInstallManagers.push(e),this.scheduledInstallModifiers.push(t)}scheduleUpdateModifier(t,e){this.scheduledUpdateModifierManagers.push(e),this.scheduledUpdateModifiers.push(t)}didDestroy(t){this.destructors.push(t)}commit(){let t=this.createdComponents,e=this.createdManagers
for(let h=0;h<t.length;h++){let s=t[h]
e[h].didCreate(s)}let s=this.updatedComponents,n=this.updatedManagers
for(let h=0;h<s.length;h++){let t=s[h]
n[h].didUpdate(t)}let i=this.destructors
for(let h=0;h<i.length;h++)i[h].destroy()
let r=this.scheduledInstallManagers,a=this.scheduledInstallModifiers
for(let h=0;h<r.length;h++){let t=r[h],e=a[h]
t.install(e)}let l=this.scheduledUpdateModifierManagers,o=this.scheduledUpdateModifiers
for(let h=0;h<l.length;h++){let t=l[h],e=o[h]
t.update(e)}}}class nn{constructor({appendOperations:t,updateOperations:e}){this._transaction=null,this.appendOperations=t,this.updateOperations=e}toConditionalReference(t){return new Be(t)}getAppendOperations(){return this.appendOperations}getDOM(){return this.updateOperations}getIdentity(t){return o(t)+""}begin(){this._transaction=new sn}get transaction(){return this._transaction}didCreate(t,e){this.transaction.didCreate(t,e)}didUpdate(t,e){this.transaction.didUpdate(t,e)}scheduleInstallModifier(t,e){this.transaction.scheduleInstallModifier(t,e)}scheduleUpdateModifier(t,e){this.transaction.scheduleUpdateModifier(t,e)}didDestroy(t){this.transaction.didDestroy(t)}commit(){let t=this.transaction
this._transaction=null,t.commit()}attributeFor(t,e,s,n=null){return Q(t,e)}}class rn{constructor(t){this.trusting=t}retry(t,e){let s=this.bounds,n=s.parentElement(),i=F(s),r=dn.forInitialRender(t,{element:n,nextSibling:i})
return this.trusting?r.__appendTrustingDynamicContent(e):r.__appendCautiousDynamicContent(e)}}class an{constructor(t){this.inner=t,this.bounds=t.bounds}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}update(t,e){let s=this.inner=this.inner.update(t,e)
return this.bounds=s.bounds,this}}class ln extends rn{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
if(e===s)return this
if(B(e)||O(e))return this.retry(t,e)
let n
return(n=T(e)?"":M(e)?e:String(e))!==s&&(this.bounds.firstNode().nodeValue=this.lastValue=n),this}}class on extends rn{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){return e===this.lastValue?this:this.retry(t,e)}}class hn extends rn{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
return e===s?this:O(e)&&e.toHTML()===s.toHTML()?(this.lastValue=e,this):this.retry(t,e)}}class un extends rn{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
return e===s?this:L(e)===s?this:this.retry(t,e)}}class cn{constructor(t){this.node=t}firstNode(){return this.node}}class pn{constructor(t){this.node=t}lastNode(){return this.node}}class dn{constructor(t,e,s){this.constructing=null,this.operations=null,this.cursorStack=new Xt,this.blockStack=new Xt,this.pushElement(e,s),this.env=t,this.dom=t.getAppendOperations(),this.updateOperations=t.getDOM()}static forInitialRender(t,e){let s=new this(t,e.element,e.nextSibling)
return s.pushSimpleBlock(),s}static resume(t,e,s){let n=new this(t,e.parentElement(),s)
return n.pushSimpleBlock(),n.pushBlockTracker(e),n}get element(){return this.cursorStack.current.element}get nextSibling(){return this.cursorStack.current.nextSibling}expectConstructing(t){return this.constructing}block(){return this.blockStack.current}popElement(){this.cursorStack.pop(),this.cursorStack.current}pushSimpleBlock(){return this.pushBlockTracker(new mn(this.element))}pushUpdatableBlock(){return this.pushBlockTracker(new gn(this.element))}pushBlockList(t){return this.pushBlockTracker(new yn(this.element,t))}pushBlockTracker(t,e=!1){let s=this.blockStack.current
return null!==s&&(s.newDestroyable(t),e||s.didAppendBounds(t)),this.__openBlock(),this.blockStack.push(t),t}popBlock(){return this.block().finalize(this),this.__closeBlock(),this.blockStack.pop()}__openBlock(){}__closeBlock(){}openElement(t){let e=this.__openElement(t)
return this.constructing=e,e}__openElement(t){return this.dom.createElement(t,this.element)}flushElement(){let t=this.element,e=this.constructing
this.__flushElement(t,e),this.constructing=null,this.operations=null,this.pushElement(e,null),this.didOpenElement(e)}__flushElement(t,e){this.dom.insertBefore(t,e,this.nextSibling)}closeElement(){this.willCloseElement(),this.popElement()}pushRemoteElement(t,e,s=null){this.__pushRemoteElement(t,e,s)}__pushRemoteElement(t,e,s){this.pushElement(t,s)
let n=new fn(t)
this.pushBlockTracker(n,!0)}popRemoteElement(){this.popBlock(),this.popElement()}pushElement(t,e){this.cursorStack.push(new Ns(t,e))}didAddDestroyable(t){this.block().newDestroyable(t)}didAppendBounds(t){return this.block().didAppendBounds(t),t}didAppendNode(t){return this.block().didAppendNode(t),t}didOpenElement(t){return this.block().openElement(t),t}willCloseElement(){this.block().closeElement()}appendText(t){return this.didAppendNode(this.__appendText(t))}__appendText(t){let e=this.dom,s=this.element,n=this.nextSibling,i=e.createTextNode(t)
return e.insertBefore(s,i,n),i}__appendNode(t){return this.dom.insertBefore(this.element,t,this.nextSibling),t}__appendFragment(t){let e=t.firstChild
if(e){let s=j(this.element,e,t.lastChild)
return this.dom.insertBefore(this.element,t,this.nextSibling),s}return I(this.element,this.__appendComment(""))}__appendHTML(t){return this.dom.insertHTMLBefore(this.element,this.nextSibling,t)}appendTrustingDynamicContent(t){let e=new an(this.__appendTrustingDynamicContent(t))
return this.didAppendBounds(e),e}__appendTrustingDynamicContent(t){if(M(t))return this.trustedContent(t)
if(T(t))return this.trustedContent("")
if(O(t))return this.trustedContent(t.toHTML())
if(D(t)){let e=this.__appendFragment(t)
return new on(e,t,!0)}if(B(t)){let e=this.__appendNode(t)
return new on(I(this.element,e),e,!0)}return this.trustedContent(String(t))}appendCautiousDynamicContent(t){let e=new an(this.__appendCautiousDynamicContent(t))
return this.didAppendBounds(e.bounds),e}__appendCautiousDynamicContent(t){if(M(t))return this.untrustedContent(t)
if(T(t))return this.untrustedContent("")
if(D(t)){let e=this.__appendFragment(t)
return new on(e,t,!1)}if(B(t)){let e=this.__appendNode(t)
return new on(I(this.element,e),e,!1)}if(O(t)){let e=t.toHTML(),s=this.__appendHTML(e)
return new hn(s,t,!1)}return this.untrustedContent(String(t))}trustedContent(t){let e=this.__appendHTML(t)
return new un(e,t,!0)}untrustedContent(t){let e=this.__appendText(t),s=I(this.element,e)
return new ln(s,t,!1)}appendComment(t){return this.didAppendNode(this.__appendComment(t))}__appendComment(t){let e=this.dom,s=this.element,n=this.nextSibling,i=e.createComment(t)
return e.insertBefore(s,i,n),i}__setAttribute(t,e,s){this.dom.setAttribute(this.constructing,t,e,s)}__setProperty(t,e){this.constructing[t]=e}setStaticAttribute(t,e,s){this.__setAttribute(t,e,s)}setDynamicAttribute(t,e,s,n){let i=this.constructing,r=new(this.env.attributeFor(i,t,s,n))({element:i,name:t,namespace:n||null})
return r.set(this,e,this.env),r}}class mn{constructor(t){this.parent=t,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}destroy(){let t=this.destroyables
if(t&&t.length)for(let e=0;e<t.length;e++)t[e].destroy()}parentElement(){return this.parent}firstNode(){return this.first&&this.first.firstNode()}lastNode(){return this.last&&this.last.lastNode()}openElement(t){this.didAppendNode(t),this.nesting++}closeElement(){this.nesting--}didAppendNode(t){0===this.nesting&&(this.first||(this.first=new cn(t)),this.last=new pn(t))}didAppendBounds(t){0===this.nesting&&(this.first||(this.first=t),this.last=t)}newDestroyable(t){this.destroyables=this.destroyables||[],this.destroyables.push(t)}finalize(t){this.first||t.appendComment("")}}class fn extends mn{destroy(){super.destroy(),F(this)}}class gn extends mn{reset(t){let e=this.destroyables
if(e&&e.length)for(let n=0;n<e.length;n++)t.didDestroy(e[n])
let s=F(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,s}}class yn{constructor(t,e){this.parent=t,this.boundList=e,this.parent=t,this.boundList=e}destroy(){this.boundList.forEachNode(t=>t.destroy())}parentElement(){return this.parent}firstNode(){let t=this.boundList.head()
return t&&t.firstNode()}lastNode(){let t=this.boundList.tail()
return t&&t.lastNode()}openElement(t){}closeElement(){}didAppendNode(t){}didAppendBounds(t){}newDestroyable(t){}finalize(t){}}class bn{constructor(t,e,{alwaysRevalidate:s=!1}){this.frameStack=new Xt,this.env=t,this.constants=e.constants,this.dom=t.getDOM(),this.alwaysRevalidate=s}execute(t,e){let s=this.frameStack
for(this.try(t,e);;){if(s.isEmpty())break
let t=this.frame.nextStatement()
null!==t?t.evaluate(this):this.frameStack.pop()}}get frame(){return this.frameStack.current}goto(t){this.frame.goto(t)}try(t,e){this.frameStack.push(new En(this,t,e))}throw(){this.frame.handleException(),this.frameStack.pop()}}class vn extends se{constructor(t,e,s,n){super(),this.start=t,this.state=e,this.type="block",this.next=null,this.prev=null,this.children=n,this.bounds=s}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}evaluate(t){t.try(this.children,null)}destroy(){this.bounds.destroy()}didDestroy(){this.state.env.didDestroy(this.bounds)}}class kn extends vn{constructor(t,e,s,n){super(t,e,s,n),this.type="try",this.tag=this._tag=fe.create(oe)}didInitializeChildren(){this._tag.inner.update(m(this.children))}evaluate(t){t.try(this.children,this)}handleException(){let t=this.state,e=this.bounds,s=this.children,n=this.start,i=this.prev,r=this.next
s.clear()
let a=dn.resume(t.env,e,e.reset(t.env)),l=xn.resume(t,a),o=new qt
l.execute(n,e=>{e.stack=Cn.restore(t.stack),e.updatingOpcodeStack.push(o),e.updateWith(this),e.updatingOpcodeStack.push(s)}),this.prev=i,this.next=r}}class wn{constructor(t,e){this.opcode=t,this.marker=e,this.didInsert=!1,this.didDelete=!1,this.map=t.map,this.updating=t.children}insert(t,e,s,n){let i=this.map,r=this.opcode,a=this.updating,l=null,o=null
l=n?(o=i[n]).bounds.firstNode():this.marker
let h=r.vmForInsertion(l),u=null,c=r.start
h.execute(c,n=>{i[t]=u=n.iterate(s,e),n.updatingOpcodeStack.push(new qt),n.updateWith(u),n.updatingOpcodeStack.push(u.children)}),a.insertBefore(u,o),this.didInsert=!0}retain(t,e,s){}move(t,e,s,n){let i=this.map,r=this.updating,a=i[t],l=i[n]||null
n?R(a,l.firstNode()):R(a,this.marker),r.remove(a),r.insertBefore(a,l)}delete(t){let e=this.map,s=e[t]
s.didDestroy(),F(s),this.updating.remove(s),delete e[t],this.didDelete=!0}done(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)}}class Sn extends vn{constructor(t,e,s,n,i){super(t,e,s,n),this.type="list-block",this.map=h(),this.lastIterated=1,this.artifacts=i
let r=this._tag=fe.create(oe)
this.tag=f([i.tag,r])}didInitializeChildren(t=!0){this.lastIterated=this.artifacts.tag.value(),t&&this._tag.inner.update(m(this.children))}evaluate(t){let e=this.artifacts,s=this.lastIterated
if(!e.tag.validate(s)){let s=this.bounds,n=t.dom,i=n.createComment("")
n.insertAfter(s.parentElement(),i,s.lastNode())
let r=new wn(this,i)
new _e({target:r,artifacts:e}).sync(),this.parentElement().removeChild(i)}super.evaluate(t)}vmForInsertion(t){let e=this.bounds,s=this.state,n=dn.forInitialRender(s.env,{element:e.parentElement(),nextSibling:t})
return xn.resume(s,n)}}class En{constructor(t,e,s){this.vm=t,this.ops=e,this.exceptionHandler=s,this.vm=t,this.ops=e,this.current=e.head()}goto(t){this.current=t}nextStatement(){let t=this.current,e=this.ops
return t&&(this.current=e.nextNode(t)),t}handleException(){this.exceptionHandler&&this.exceptionHandler.handleException()}}class _n{constructor(t,e,s,n){this.env=t,this.program=e,this.updating=s,this.bounds=n}rerender({alwaysRevalidate:t=!1}={alwaysRevalidate:!1}){let e=this.env,s=this.program,n=this.updating
new bn(e,s,{alwaysRevalidate:t}).execute(n,this)}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}handleException(){throw"this should never happen"}destroy(){this.bounds.destroy(),F(this.bounds)}}class Cn{constructor(t,e,s){this.stack=t,this.fp=e,this.sp=s}static empty(){return new this([],0,-1)}static restore(t){return new this(t.slice(),0,t.length-1)}push(t){this.stack[++this.sp]=t}dup(t=this.sp){this.push(this.stack[t])}pop(t=1){let e=this.stack[this.sp]
return this.sp-=t,e}peek(t=0){return this.stack[this.sp-t]}get(t,e=this.fp){return this.stack[e+t]}set(t,e,s=this.fp){this.stack[s+e]=t}slice(t,e){return this.stack.slice(t,e)}capture(t){let e=this.sp+1,s=e-t
return this.stack.slice(s,e)}reset(){this.stack.length=0}toArray(){return this.stack.slice(this.fp,this.sp+1)}}class xn{constructor(t,e,s,n,i){this.program=t,this.env=e,this.elementStack=i,this.dynamicScopeStack=new Xt,this.scopeStack=new Xt,this.updatingOpcodeStack=new Xt,this.cacheGroups=new Xt,this.listBlockStack=new Xt,this.stack=Cn.empty(),this._pc=-1,this.ra=-1,this.currentOpSize=0,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.v0=null,this.env=e,this.heap=t.heap,this.constants=t.constants,this.elementStack=i,this.scopeStack.push(s),this.dynamicScopeStack.push(n)}get pc(){return this._pc}set pc(t){this._pc=t}get fp(){return this.stack.fp}set fp(t){this.stack.fp=t}get sp(){return this.stack.sp}set sp(t){this.stack.sp=t}fetch(t){this.stack.push(this[ne[t]])}load(t){this[ne[t]]=this.stack.pop()}fetchValue(t){return this[ne[t]]}loadValue(t,e){this[ne[t]]=e}pushFrame(){this.stack.push(this.ra),this.stack.push(this.fp),this.fp=this.sp-1}popFrame(){this.sp=this.fp-1,this.ra=this.stack.get(0),this.fp=this.stack.get(1)}goto(t){let e=this.pc+t-this.currentOpSize
this.pc=e}call(t){this.ra=this.pc,this.pc=this.heap.getaddr(t)}returnTo(t){let e=this.pc+t-this.currentOpSize
this.ra=e}return(){this.pc=this.ra}static initial(t,e,s,n,i,r,a){let l=t.heap.scopesizeof(a),o=en.root(s,l),h=new xn(t,e,o,i,r)
return h.pc=h.heap.getaddr(a),h.updatingOpcodeStack.push(new qt),h}static resume({program:t,env:e,scope:s,dynamicScope:n},i){return new xn(t,e,s,n,i)}capture(t){return{env:this.env,program:this.program,dynamicScope:this.dynamicScope(),scope:this.scope(),stack:this.stack.capture(t)}}beginCacheGroup(){this.cacheGroups.push(this.updating().tail())}commitCacheGroup(){let t=new gs("END"),e=this.updating(),s=this.cacheGroups.pop(),n=s?e.nextNode(s):e.head(),i=e.tail(),r=m(new Jt(n,i)),a=new ms(r,t)
e.insertBefore(a,n),e.append(new fs(a)),e.append(t)}enter(t){let e=new qt,s=this.capture(t),n=this.elements().pushUpdatableBlock(),i=new kn(this.heap.gethandle(this.pc),s,n,e)
this.didEnter(i)}iterate(t,e){let s=this.stack
s.push(e),s.push(t)
let n=this.capture(2),i=this.elements().pushUpdatableBlock()
return new kn(this.heap.gethandle(this.pc),n,i,new qt)}enterItem(t,e){this.listBlock().map[t]=e,this.didEnter(e)}enterList(t){let e=new qt,s=this.capture(0),n=this.elements().pushBlockList(e),i=this.stack.peek().artifacts,r=this.pc+t-this.currentOpSize,a=this.heap.gethandle(r),l=new Sn(a,s,n,e,i)
this.listBlockStack.push(l),this.didEnter(l)}didEnter(t){this.updateWith(t),this.updatingOpcodeStack.push(t.children)}exit(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()}exitList(){this.exit(),this.listBlockStack.pop()}updateWith(t){this.updating().append(t)}listBlock(){return this.listBlockStack.current}updating(){return this.updatingOpcodeStack.current}elements(){return this.elementStack}scope(){return this.scopeStack.current}dynamicScope(){return this.dynamicScopeStack.current}pushChildScope(){this.scopeStack.push(this.scope().child())}pushDynamicScope(){let t=this.dynamicScope().child()
return this.dynamicScopeStack.push(t),t}pushRootScope(t,e){let s=en.sized(t)
return e&&s.bindCallerScope(this.scope()),this.scopeStack.push(s),s}pushScope(t){this.scopeStack.push(t)}popScope(){this.scopeStack.pop()}popDynamicScope(){this.dynamicScopeStack.pop()}newDestroyable(t){this.elements().didAddDestroyable(t)}getSelf(){return this.scope().getSelf()}referenceForSymbol(t){return this.scope().getSymbol(t)}execute(t,e){this.pc=this.heap.getaddr(t),e&&e(this)
let s
for(;;)if((s=this.next()).done)break
return s.value}next(){let t,e=this.env,s=this.program,n=this.updatingOpcodeStack,i=this.elementStack,r=this.nextStatement()
return null!==r?(te.evaluate(this,r,r.type),t={done:!1,value:null}):(this.stack.reset(),t={done:!0,value:new _n(e,s,n.pop(),i.popBlock())}),t}nextStatement(){let t=this.pc,e=this.program
if(-1===t)return null
let s=this.program.opcode(t).size,n=this.currentOpSize=s
return this.pc+=n,e.opcode(t)}bindDynamicScope(t){let e=this.dynamicScope()
for(let s=t.length-1;s>=0;s--){let n=this.constants.getString(t[s])
e.set(n,this.stack.pop())}}}class An{constructor(t){this.vm=t}next(){return this.vm.next()}}let Nn=0
class Ln{constructor(t,e){this.options=t,this.parsedLayout=e,this.layout=null,this.partial=null
let s=e.block
this.symbols=s.symbols,this.hasEval=s.hasEval,this.statements=s.statements,this.referrer=e.referrer,this.id=e.id||`client-${Nn++}`}renderLayout(t){let e=t.env,s=t.self,n=t.dynamicScope
var i=t.args
let r=void 0===i?os:i,a=t.builder,l=this.asLayout().compile(),o=xn.initial(this.options.program,e,s,r,n,a,l)
return new An(o)}asLayout(){return this.layout?this.layout:this.layout=lt(this.parsedLayout,this.options,!1)}asPartial(){return this.partial?this.partial:this.partial=lt(this.parsedLayout,this.options,!0)}}class Tn{constructor(t,e){this.cache=ot,this.inner=null,this.chains=null,this.lastParentValue=ot,this._guid=0,this.tag=he,this.parent=t,this.property=e}value(){let t=this.lastParentValue,e=this.property,s=this.inner,n=this._parentValue()
if(null===n||void 0===n)return this.cache=void 0
if(t===n)s=this.inner
else{let t="object"==typeof n?Fn.for(n).referenceTypeFor(e):Pn
s=this.inner=new t(n,e,this)}return this.cache=s.value()}get(t){let e=this._getChains()
return t in e?e[t]:e[t]=new Tn(this,t)}label(){return"[reference Direct]"}_getChains(){return this.chains?this.chains:this.chains=h()}_parentValue(){let t=this.parent.value()
return this.lastParentValue=t,t}}class On{constructor(t){this.chains=h(),this.tag=he,this.object=t}value(){return this.object}update(t){this.object=t}get(t){let e=this.chains
return t in e?e[t]:e[t]=new Tn(this,t)}chainFor(t){let e=this.chains
return t in e?e[t]:null}path(t){return this.referenceFromParts(t.split("."))}referenceFromParts(t){return t.reduce((t,e)=>t.get(e),this)}label(){return"[reference Root]"}}const Bn={destroy(){}}
class Dn{constructor(t,e){this.tag=he,this.parent=t}chain(){return Bn}notify(){}value(){return this.parent[this.property]}get(t){return new Dn(this.parent[this.property],t)}}class Mn{constructor(t){this.tag=he,this.inner=t}update(t){this.inner=t}chain(){return Bn}notify(){}value(){return this.inner}referenceFromParts(t){throw new Error("Not implemented")}chainFor(t){throw new Error("Not implemented")}get(t){return new Dn(this.inner,t)}}class jn{constructor(t){this.object=t}root(){return new Mn(this.object)}}const In="df8be4c8-4e89-44e2-a8f9-550c8dacdca7",Rn=Object.hasOwnProperty
class Fn{constructor(t,{RootReferenceFactory:e,DefaultPathReferenceFactory:s}){this.references=null,this.slots=null,this.referenceTypes=null,this.propertyMetadata=null,this.object=t,this.RootReferenceFactory=e||On,this.DefaultPathReferenceFactory=s||Pn}static for(t){if(null===t||void 0===t)return new Fn(t,{})
if(Rn.call(t,"_meta")&&t._meta)return t._meta
if(!Object.isExtensible(t))return new jn(t)
let e=Fn
return t.constructor&&t.constructor[In]?e=t.constructor[In].InstanceMetaConstructor:t[In]&&(e=t[In].InstanceMetaConstructor),t._meta=new e(t,{})}static exists(t){return"object"==typeof t&&t._meta}static metadataForProperty(t){return null}addReference(t,e){let s=this.references=this.references||h();(s[t]=s[t]||new Wt).add(e)}addReferenceTypeFor(t,e){this.referenceTypes=this.referenceTypes||h(),this.referenceTypes[t]=e}referenceTypeFor(t){return this.referenceTypes?this.referenceTypes[t]||Pn:Pn}removeReference(t,e){this.references&&this.references[t].delete(e)}getReferenceTypes(){return this.referenceTypes=this.referenceTypes||h(),this.referenceTypes}referencesFor(t){return this.references?this.references[t]:null}getSlots(){return this.slots=this.slots||h()}root(){return this.rootCache=this.rootCache||new this.RootReferenceFactory(this.object)}}class Pn{constructor(t,e,s){this.tag=he,this.object=t,this.property=e}value(){return this.object[this.property]}label(){return"[reference Property]"}}class Vn{constructor(t,e){this._registry=t,this._resolver=e}register(t,e,s){let n=this._toAbsoluteSpecifier(t)
this._registry.register(n,e,s)}registration(t){let e=this._toAbsoluteSpecifier(t)
return this._registry.registration(e)}unregister(t){let e=this._toAbsoluteSpecifier(t)
this._registry.unregister(e)}registerOption(t,e,s){let n=this._toAbsoluteOrTypeSpecifier(t)
this._registry.registerOption(n,e,s)}registeredOption(t,e){let s=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOption(s,e)}registeredOptions(t){let e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOptions(e)}unregisterOption(t,e){let s=this._toAbsoluteOrTypeSpecifier(t)
this._registry.unregisterOption(s,e)}registerInjection(t,e,s){let n=this._toAbsoluteOrTypeSpecifier(t),i=this._toAbsoluteSpecifier(s)
this._registry.registerInjection(n,e,i)}registeredInjections(t){let e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredInjections(e)}_toAbsoluteSpecifier(t,e){return this._resolver.identify(t,e)}_toAbsoluteOrTypeSpecifier(t){return ht(t)?t:this._toAbsoluteSpecifier(t)}}class Hn{constructor(t=null){this.bucket=t?r({},t):{}}get(t){return this.bucket[t]}set(t,e){return this.bucket[t]=e}child(){return new Hn(this.bucket)}}class zn{constructor(t){this.tags=h(),this.computedPropertyTags=h(),this.trackedProperties=t?Object.create(t.trackedProperties):h(),this.trackedPropertyDependencies=t?Object.create(t.trackedPropertyDependencies):h()}tagFor(t){let e=this.tags[t]
if(e)return e
let s
return(s=this.trackedPropertyDependencies[t])?this.tags[t]=pt(this,t,s):this.tags[t]=ce.create()}dirtyableTagFor(t){let e
return this.trackedPropertyDependencies[t]?(e=this.computedPropertyTags[t])||(this.computedPropertyTags[t]=ce.create()):(e=this.tags[t])||(this.tags[t]=ce.create())}}let Un=Symbol("ember-object"),$n=Object.prototype.hasOwnProperty,Gn=function(){}
class Yn extends Error{constructor(t,e,s){super(s),this.target=t,this.key=e}static for(t,e){return new Yn(t,e,`The property '${e}' on ${t} was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.`)}}class Wn{constructor(t){this.debugName=null,this.__args__=null,Object.assign(this,t)}get element(){let t=this.bounds
return i(t&&t.firstNode===t.lastNode,`The 'element' property can only be accessed on components that contain a single root element in their template. Try using 'bounds' instead to access the first and last nodes.`),t.firstNode}get args(){return this.__args__}set args(t){this.__args__=t,dt(this).dirtyableTagFor("args").inner.dirty()}static create(t){return new this(t)}didInsertElement(){}didUpdate(){}willDestroy(){}destroy(){this.willDestroy()}toString(){return`${this.debugName} component`}}const Xn={dynamicLayout:!1,dynamicTag:!0,prepareArgs:!1,createArgs:!0,attributeHook:!0,elementHook:!0}
class Kn{constructor(t,e,s,n){this.name=t,this.manager=e,this.ComponentClass=s,this.layout=n,this.state={name:t,capabilities:Xn,ComponentClass:s,layout:n}}toJSON(){return{GlimmerDebug:`<component-definition name="${this.name}">`}}}class qn{constructor(t){this._bounds=t}get firstNode(){return this._bounds.firstNode()}get lastNode(){return this._bounds.lastNode()}}class Jn{get(t){return ti.create(this,t)}}class Zn extends Jn{constructor(){super(...arguments),this._lastRevision=null,this._lastValue=null}value(){let t=this.tag,e=this._lastRevision,s=this._lastValue
return e&&t.validate(e)||(s=this._lastValue=this.compute(),this._lastRevision=t.value()),s}}class Qn extends ve{constructor(){super(...arguments),this.children=h()}get(t){let e=this.children[t]
return e||(e=this.children[t]=new ei(this.inner,t)),e}}class ti extends Zn{static create(t,e){return c(t)?new ei(t.value(),e):new si(t,e)}get(t){return new si(this,t)}}class ei extends ti{constructor(t,e){super(),this._parentValue=t,this._propertyKey=e,this.tag=gt(t,e)}compute(){return this._parentValue[this._propertyKey]}}class si extends ti{constructor(t,e){super()
let s=t.tag,n=fe.create(oe)
this._parentReference=t,this._parentObjectTag=n,this._propertyKey=e,this.tag=f([s,n])}compute(){let t=this._parentReference,e=this._parentObjectTag,s=this._propertyKey,n=t.value()
return e.inner.update(gt(n,s)),"string"==typeof n&&"length"===s?n.length:"object"==typeof n&&n?n[s]:void 0}}class ni extends Jn{constructor(t){super(),this.tag=ce.create(),this._value=t}value(){return this._value}update(t){t!==this._value&&(this.tag.inner.dirty(),this._value=t)}}class ii{constructor(t,s,n){let i=t.ComponentClass,r=t.name
this.args=s
let a={debugName:r,args:this.namedArgsSnapshot()}
e(a,n),this.component=i.create(a)}get tag(){return this.args.tag}namedArgsSnapshot(){return Object.freeze(this.args.named.value())}}class ri{static create(t){return new ri(t)}constructor(t){this.env=t.env}prepareArgs(t,e){return null}getCapabilities(t){return t.capabilities}getLayout({name:t,layout:e},s){return s.compileTemplate(t,e)}create(e,s,n,i,r,a){let l=t(this.env)
return new ii(s,n.capture(),l)}getSelf(t){return new Qn(t.component)}didCreateElement(t,e){}didRenderLayout(t,e){t.component.bounds=new qn(e)}didCreate(t){t&&t.component.didInsertElement()}getTag({tag:t}){return t}update(t,e){t.component.args=t.namedArgsSnapshot()}didUpdateLayout(){}didUpdate({component:t}){t.didUpdate()}getDestructor(t){return t.component}}class ai{constructor(t,e){this.position=0,this.array=t,this.keyFor=e}isEmpty(){return 0===this.array.length}next(){let t=this.position,e=this.array,s=this.keyFor
if(t>=e.length)return null
let n=e[t],i=s(n,t),r=t
return this.position++,{key:i,value:n,memo:r}}}class li{constructor(t,e,s){this.position=0,this.keys=t,this.values=e,this.keyFor=s}isEmpty(){return 0===this.keys.length}next(){let t=this.position,e=this.keys,s=this.values,n=this.keyFor
if(t>=e.length)return null
let i=s[t],r=e[t],a=n(i,r)
return this.position++,{key:a,value:i,memo:r}}}class oi{isEmpty(){return!0}next(){throw new Error(`Cannot call next() on an empty iterator`)}}const hi=new oi
class ui{constructor(t,e){this.tag=t.tag,this.ref=t,this.keyFor=e}iterate(){let t=this.ref,e=this.keyFor,s=t.value()
if(Array.isArray(s))return s.length>0?new ai(s,e):hi
if(void 0===s||null===s)return hi
if(void 0!==s.forEach){let t=[]
return s.forEach(function(e){t.push(e)}),t.length>0?new ai(t,e):hi}if("object"==typeof s){let t=Object.keys(s)
return t.length>0?new li(t,t.map(t=>s[t]),e):hi}throw new Error(`Don't know how to {{#each ${s}}}`)}valueReferenceFor(t){return new ni(t.value)}updateValueReference(t,e){t.update(e.value)}memoReferenceFor(t){return new ni(t.memo)}updateMemoReference(t,e){t.update(e.memo)}}const ci={}
class pi{constructor(){this.strings=[],this.arrays=[],this.tables=[],this.handles=[],this.serializables=[],this.resolved=[],this.floats=[],this.negatives=[]}float(t){let e=this.floats.indexOf(t)
return e>-1?e:this.floats.push(t)-1}negative(t){return this.negatives.push(t)-1}string(t){let e=this.strings.indexOf(t)
return e>-1?e:this.strings.push(t)-1}stringArray(t){let e=new Array(t.length)
for(let s=0;s<t.length;s++)e[s]=this.string(t[s])
return this.array(e)}array(t){let e=this.arrays.indexOf(t)
return e>-1?e:this.arrays.push(t)-1}table(t){let e=this.tables.indexOf(t)
return e>-1?e:this.tables.push(t)-1}handle(t){return this.resolved.push(ci),this.handles.push(t)}serializable(t){let e=this.serializables.indexOf(t)
return e>-1?e:this.serializables.push(t)-1}toPool(){return{strings:this.strings,arrays:this.arrays,tables:this.tables,handles:this.handles,serializables:this.serializables,floats:this.floats,negatives:this.negatives}}}class di extends pi{constructor(t,e){super(),this.resolver=t,e&&(this.strings=e.strings,this.arrays=e.arrays,this.tables=e.tables,this.handles=e.handles,this.serializables=e.serializables,this.floats=e.floats,this.negatives=e.negatives,this.resolved=this.handles.map(()=>ci))}getFloat(t){return this.floats[t]}getNegative(t){return this.negatives[t]}getString(t){return this.strings[t]}getStringArray(t){let e=this.getArray(t),s=new Array(e.length)
for(let n=0;n<e.length;n++){let t=e[n]
s[n]=this.getString(t)}return s}getArray(t){return this.arrays[t]}getSymbolTable(t){return this.tables[t]}resolveHandle(t){let e=t-1,s=this.resolved[e]
if(s===ci){let t=this.handles[e]
s=this.resolved[e]=this.resolver.resolve(t)}return s}getSerializable(t){return this.serializables[t]}}class mi extends di{constructor(){super(...arguments),this.others=[]}getOther(t){return this.others[t-1]}other(t){return this.others.push(t)}}class fi{constructor(t){this.heap=t,this.offset=0}get size(){return 1+((768&this.heap.getbyaddr(this.offset))>>8)}get type(){return 255&this.heap.getbyaddr(this.offset)}get op1(){return this.heap.getbyaddr(this.offset+1)}get op2(){return this.heap.getbyaddr(this.offset+2)}get op3(){return this.heap.getbyaddr(this.offset+3)}}var gi;(function(t){t[t.Allocated=0]="Allocated",t[t.Freed=1]="Freed",t[t.Purged=2]="Purged",t[t.Pointer=3]="Pointer"})(gi||(gi={}))
class yi{constructor(t){if(this.offset=0,this.handle=0,t){let e=t.buffer,s=t.table,n=t.handle
this.heap=new Uint16Array(e),this.table=s,this.offset=this.heap.length,this.handle=n}else this.heap=new Uint16Array(1048576),this.table=[]}push(t){this.heap[this.offset++]=t}getbyaddr(t){return this.heap[t]}setbyaddr(t,e){this.heap[t]=e}malloc(){this.table.push(this.offset,0,0,0)
let t=this.handle
return this.handle+=4,t}finishMalloc(t,e){let s=this.table[t],n=this.offset
this.table[t+1]=n-s,this.table[t+2]=e}size(){return this.offset}getaddr(t){return this.table[t]}gethandle(t){this.table.push(t,0,0,gi.Pointer)
let e=this.handle
return this.handle+=4,e}sizeof(t){return-1}scopesizeof(t){return this.table[t+2]}free(t){this.table[t+3]=1}compact(){let t=0,e=this.table,s=this.table.length,n=this.heap
for(let i=0;i<s;i+=4){let s=e[i],r=e[i+1],a=e[i+3]
if(a!==gi.Purged)if(a===gi.Freed)e[i+3]=gi.Purged,t+=r
else if(a===gi.Allocated){for(let e=s;e<=i+r;e++)n[e-t]=n[e]
e[i]=s-t}else a===gi.Pointer&&(e[i]=s-t)}this.offset=this.offset-t}capture(){let t=yt(this.heap,0,this.offset)
return{handle:this.handle,table:this.table,buffer:t}}}class bi{constructor(t=new pi,e=new yi){this.constants=t,this.heap=e,this._opcode=new fi(this.heap)}opcode(t){return this._opcode.offset=t,this._opcode}}class vi extends bi{}class ki{constructor(){this.byName=h(),this.byHandle=h()}hasName(t){return t in this.byName}getHandle(t){return this.byName[t]}hasHandle(t){return t in this.byHandle}getByHandle(t){return this.byHandle[t]}register(t,e,s){this.byHandle[t]=s,this.byName[e]=t}}class wi{constructor(t,e){this.tag=he,this.parent=t,this.property=e}value(){return this.parent.value()[this.property]}get(t){return new wi(this,t)}}class Si{constructor(t,e){this.tag=he,this.helper=t,this.args=e.capture()}value(){let t=this.helper,e=this.args
return t(e.positional.value(),e.named.value())}get(t){return new wi(this,t)}}class Ei{constructor(t){this.owner=t,this.handleLookup=[],this.cache={component:new ki,template:new ki,compiledTemplate:new ki,helper:new ki,manager:new ki,modifier:new ki}}setCompileOptions(t){this.templateOptions=t}lookup(t,e,s){return this.cache[t].hasName(e)?this.cache[t].getHandle(e):null}register(t,e,s){let n=this.cache[t],i=this.handleLookup.length
return this.handleLookup.push(n),this.cache[t].register(i,e,s),i}lookupModifier(t,e){let s=this.lookup("modifier",t)
if(null===s)throw new Error(`Modifier for ${t} not found.`)
return s}compileTemplate(t,e){if(!this.cache.compiledTemplate.hasName(t)){let s=this.resolve(e),n=s.block,i=s.meta,r=s.id,a=JSON.parse(n),l=new Ln(this.templateOptions,{id:r,block:a,referrer:i}).asLayout(),o={handle:l.compile(),symbolTable:l.symbolTable}
return this.register("compiledTemplate",t,o),o}let s=this.lookup("compiledTemplate",t)
return this.resolve(s)}registerHelper(t,e){return this.register("helper",t,(t,s)=>new Si(e,s))}registerInternalHelper(t,e){this.register("helper",t,e)}registerComponent(t,e,s,n){let i=this.registerTemplate(e,n),r=this.managerFor(i.meta.managerId),a=new Kn(t,r,s,i.handle)
return this.register("component",t,a)}lookupComponentHandle(t,e){return this.cache.component.hasName(t)||this.lookupComponent(t,e),this.lookup("component",t,e)}managerFor(t="main"){let e
if(this.cache.manager.hasName(t)){let e=this.cache.manager.getHandle(t)
return this.cache.manager.getByHandle(e)}{let s=this.owner.rootName
if(!(e=this.owner.lookup(`component-manager:/${s}/component-managers/${t}`)))throw new Error(`No component manager found for ID ${t}.`)
return this.register("manager",t,e),e}}registerTemplate(t,e){return{name:t,handle:this.register("template",t,e),meta:e.meta}}lookupComponent(t,e){let n
if(this.cache.component.hasName(t))n=this.lookup("component",t,e)
else{let i=s(this.identifyComponent(t,e),`Could not find the component '${t}'`),r=this.owner.lookup("template",i),a=this.owner.identify("component",i),l=null
l=void 0!==a?this.owner.factoryFor(a):{create:t=>Wn.create(t)},n=this.registerComponent(t,i,l,r)}return this.resolve(n)}lookupHelper(t,e){if(!this.cache.helper.hasName(t)){let s=this.owner,n=`helper:${t}`,i=e.specifier,r=s.identify(n,i)
if(void 0===r)return null
let a=this.owner.lookup(r,e.specifier)
return this.registerHelper(t,a)}return this.lookup("helper",t,e)}lookupPartial(t,e){throw new Error("Partials are not available in Glimmer applications.")}resolve(t){return this.handleLookup[t].getByHandle(t)}identifyComponent(t,e){let s=this.owner,n=`template:${t}`,i=e.specifier,r=s.identify(n,i)
if(void 0===r&&s.identify(`component:${t}`,i))throw new Error(`The component '${t}' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory.`)
return r}}var _i={id:"j7SGa6Pm",block:'{"symbols":["root"],"statements":[[4,"each",[[22,["roots"]]],[["key"],["id"]],{"statements":[[4,"in-element",[[21,1,["parent"]]],[["guid","nextSibling"],["%cursor:0%",[21,1,["nextSibling"]]]],{"statements":[[1,[26,"component",[[21,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/application/src/templates/main"}}
class Ci{constructor(t){this.resolver=t}getComponentDefinition(t){let e=this.resolver.resolve(t)
return i(!!e,`Couldn't find a template for ${t}`),e}getCapabilities(t){let e=this.getComponentDefinition(t),s=e.manager,n=e.state
return s.getCapabilities(n)}getLayout(t){let e=this.getComponentDefinition(t),s=e.manager.getLayout(e,this.resolver)
return{compile:()=>s.handle,symbolTable:s.symbolTable}}lookupHelper(t,e){return this.resolver.lookupHelper(t,e)}lookupModifier(t,e){return this.resolver.lookupModifier(t,e)}lookupComponentSpec(t,e){return this.resolver.lookupComponentHandle(t,e)}lookupPartial(t,e){return this.resolver.lookupPartial(t,e)}}class xi extends nn{static create(t={}){return t.document=t.document||self.document,t.appendOperations=t.appendOperations||new Hs(t.document),new xi(t)}constructor(s){super({appendOperations:s.appendOperations,updateOperations:new Vs(s.document||document)}),e(this,t(s))
let n=this.resolver=new Ei(t(this)),i=this.program=new vi(new mi(n)),r=new $e,a=new Ci(n)
this.compileOptions={program:i,macros:r,lookup:a,Builder:Ze},this.resolver.setCompileOptions(this.compileOptions),n.registerTemplate("main",_i),n.registerInternalHelper("action",bt),n.registerHelper("if",t=>t[0]?t[1]:t[2]),this.uselessAnchor=s.document.createElement("a")}protocolForURL(t){return this.uselessAnchor.href=t,this.uselessAnchor.protocol}iterableFor(t,e){let s
if(!e)throw new Error("Must specify a key for #each")
switch(e){case"@index":s=((t,e)=>String(e))
break
case"@primitive":s=(t=>String(t))
break
default:s=(t=>t[e])}return new ui(t,s)}}class Ai{constructor(t){this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._notifiers=[],this.rootName=t.rootName,this.resolver=t.resolver,this.document=t.document||"undefined"!=typeof window&&window.document}renderComponent(t,e,s=null){this._roots.push({id:this._rootsIndex++,component:t,parent:e,nextSibling:s}),this.scheduleRerender()}boot(){this.initialize(),this.env=this.lookup(`environment:/${this.rootName}/main/main`),this._render()}scheduleRerender(){!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,requestAnimationFrame(()=>{this._scheduled=!1,this._rerender(),this._rendering=!1}))}initialize(){this.initRegistry(),this.initContainer()}registerInitializer(t){this._initializers.push(t)}initRegistry(){let t=this._registry=new Ut,e=new Vn(this._registry,this.resolver)
t.register(`environment:/${this.rootName}/main/main`,xi),t.registerOption("helper","instantiate",!1),t.registerOption("template","instantiate",!1),t.register(`document:/${this.rootName}/main/main`,this.document),t.registerOption("document","instantiate",!1),t.registerInjection("environment","document",`document:/${this.rootName}/main/main`),t.registerInjection("component-manager","env",`environment:/${this.rootName}/main/main`)
let s=this._initializers
for(let n=0;n<s.length;n++)s[n].initialize(e)
this._initialized=!0}initContainer(){this._container=new zt(this._registry,this.resolver),this._container.defaultInjections=(t=>{let s={}
return e(s,this),s})}get mainLayout(){return at(_i).create(this.env.compileOptions)}get templateIterator(){let t=this.env,e=this.mainLayout,s=new On({roots:this._roots}),n=new Hn,i={element:this.document.body,nextSibling:null}
return e.renderLayout({env:t,self:s,dynamicScope:n,builder:rt(t,i)})}_rerender(){let t=this.env,e=this._result
if(!e)throw new Error("Cannot re-render before initial render has completed")
try{t.begin(),e.rerender(),t.commit(),this._didRender()}catch(t){this._didError(t)}}_render(){let t=this.env,e=this.templateIterator
try{t.begin()
let s
do{s=e.next()}while(!s.done)
t.commit(),this._result=s.value,this._didRender()}catch(t){throw this._didError(t),t}}_didRender(){this._rendered=!0
let t=this._notifiers
this._notifiers=[],t.forEach(t=>t[0]())}_didError(t){let e=this._notifiers
this._notifiers=[],e.forEach(e=>e[1](t))}identify(t,e){return this.resolver.identify(t,e)}factoryFor(t,e){return this._container.factoryFor(this.identify(t,e))}lookup(t,e){return this._container.lookup(this.identify(t,e))}}class Ni{constructor(t,e){this.config=t,this.registry=e}identify(t,e){if(St(t))return t
let s,n=xt(t)
if(e){let t=xt(e)
if(Et(t)){At("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===n.rootName&&void 0===n.collection&&void 0===n.namespace),n.rootName=t.rootName,n.collection=t.collection
let e=this._definitiveCollection(n.type)
if(!n.name)return n.namespace=t.namespace,n.name=t.name,this._serializeAndVerify(n)
if(n.namespace=t.namespace?t.namespace+"/"+t.name:t.name,Nt(n)===e&&(s=this._serializeAndVerify(n)))return s
if(e&&(n.namespace+="/-"+e,s=this._serializeAndVerify(n)))return s
n.rootName=n.collection=n.namespace=void 0}else At('Referrer must either be "absolute" or include a `type` to determine the associated type',t.type),n.collection=this._definitiveCollection(t.type),At(`'${t.type}' does not have a definitive collection`,n.collection)}if(n.collection||(n.collection=this._definitiveCollection(n.type),At(`'${n.type}' does not have a definitive collection`,n.collection)),!n.rootName){if(n.rootName=this.config.app.rootName||"app",s=this._serializeAndVerify(n))return s
let t
n.namespace?(t=this.config.addons&&this.config.addons[n.namespace],n.rootName=n.namespace,n.namespace=void 0):(t=this.config.addons&&this.config.addons[n.name],n.rootName=n.name,n.name="main")}return(s=this._serializeAndVerify(n))?s:void 0}retrieve(t){return this.registry.get(t)}resolve(t,e){let s=this.identify(t,e)
if(s)return this.retrieve(s)}_definitiveCollection(t){let e=this.config.types[t]
return At(`'${t}' is not a recognized type`,e),e.definitiveCollection}_serializeAndVerify(t){let e=_t(t)
if(this.registry.has(e))return e}}class Li{constructor(t={}){this._entries=t}has(t){return t in this._entries}get(t){return this._entries[t]}}const Ti=window.docs
class Oi{constructor(){this.main=Ti}fetchRoot(){return{main:this.main.data.attributes,menu:Ft(this.main)}}fetchModule(t,e){let s=this.main.included.find(({id:e})=>e===t)
if(!s){const n=this.main.data.attributes.idMap[e][t]
s=this.main.included.find(({id:t})=>t===n)}return s?Ot(s):null}fetchProject(t){return Ot(this.main.included.find(({type:e,id:s})=>"projectdoc"===e&&s===t))}}const Bi="modules",Di="projects"
var Mi=function(t,e,s,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,n)
else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(a=(r<3?i(a):r>3?i(e,s,a):i(e,s))||a)
return r>3&&a&&Object.defineProperty(e,s,a),a}
const ji="/api/".split("/").filter(t=>!!t).join("/"),Ii=ji?"/"+ji+"/":"/"
class Ri extends Wn{constructor(){super(...arguments),this.theCurrentView={title:"",componentName:null,project:null,module:null,notFound:!1},this.docsService=new Oi}loadFromUrl(t){const e=Vt(ji,t)
var s=Pt(e)
const n=s.moduleId,i=s.projectId
let r
r="/"!==e&&e?i?n?this.showModule(i,n):this.showProject(i):this.show404():this.showIndex(),this.hideNav(),document.title=r.title,window.history.pushState(r,r.title,`/${ji}${e}`)}bindInternalLinks(){document.addEventListener("click",t=>{const e=t.target
"A"===e.tagName&&e.classList.contains("internal-link")&&(t.preventDefault(),this.loadFromUrl(e.getAttribute("href")))})}showNav(){const t=document.getElementById("menu-container"),e=document.getElementById("menu-toggle")
t.classList.add("is-active"),e.classList.add("is-active")}hideNav(){const t=document.getElementById("menu-container"),e=document.getElementById("menu-toggle")
t.classList.remove("is-active"),e.classList.remove("is-active")}toggleNav(){document.getElementById("menu-toggle").classList.contains("is-active")?this.hideNav():this.showNav()}setupRouting(){window.onpopstate=(t=>{if(t.state){const e=this.deserializeState(t.state)
this.theCurrentView=e}}),this.bindInternalLinks(),this.loadFromUrl(window.location.pathname)}didInsertElement(){this.setupRouting()}get model(){return this.docsService.fetchRoot()}show404(){return this.theCurrentView={title:`${this.model.main.title} - 404`,module:null,project:null,componentName:null,notFound:!0},this.theCurrentView}showIndex(t){return t&&t.preventDefault(),this.theCurrentView={title:this.model.main.title,componentName:null,project:null,module:null,notFound:!1},this.theCurrentView}serializeView(t){const e=t.title,s=t.componentName,n=t.project,i=t.module
return{title:e,componentName:s,notFound:t.notFound,project:n.slug,module:i&&i.slug}}deserializeState(t){const e=t.title,s=t.componentName,n=t.project,i=t.module
return{title:e,componentName:s,notFound:t.notFound,project:this.docsService.fetchProject(n),module:this.docsService.fetchModule(i,n)}}showProject(t){let e=this.docsService.fetchProject(t)
if(!e)return this.show404()
this.theCurrentView={title:`${this.model.main.title} - ${e.name}`,componentName:"ProjectLanding",project:e,module:null}
this.theCurrentView.project.name,`${Ii}${Di}/${t}`
return this.serializeView(this.theCurrentView)}showModule(t,e){let s=this.docsService.fetchProject(t),n=this.docsService.fetchModule(e,t)
if(!s||!n)return this.show404()
this.theCurrentView={title:`${this.model.main.title} - ${n.name}`,componentName:"ModuleLanding",project:s,module:n}
this.theCurrentView.project.name,`${Ii}${Di}/${t}/${Bi}/${e}`
return this.serializeView(this.theCurrentView)}}Mi([function(...t){let e=t[0],s=t[1],n=t[2]
return"string"==typeof e?function(e,s,n){return ut(e,s,n,t)}:n?ut(e,s,n,[]):void ct(e,s)}],Ri.prototype,"theCurrentView",void 0)
class Fi extends Wn{get categories(){let t={},e=this.args.methods
for(let s of e){let e=s.category||"Other Methods",n=t[e]
n||(n=t[e]={name:e,slug:Ht(e),methods:[]}),console.log(s),n.methods.push(s)}return Object.keys(t).map(e=>t[e])}}var Pi={"template:/glimmer-api-docs/components/EntityLink":{id:"yA7T/htg",block:'{"symbols":["@projectId","@name","@moduleId"],"statements":[[6,"span"],[8],[0,"\\n"],[4,"if",[[21,3,[]]],null,{"statements":[[0,"  "],[6,"a"],[11,"href",[27,["/projects/",[21,1,[]],"/modules/",[21,3,[]]]]],[10,"class","internal-link"],[8],[0,"\\n    "],[1,[21,2,[]],false],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[6,"a"],[11,"href",[27,["/projects/",[21,1,[]]]]],[10,"class","internal-link"],[8],[0,"\\n    "],[1,[21,2,[]],false],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]}],[9]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/EntityLink"}},"component:/glimmer-api-docs/components/GlimmerApiDocs":Ri,"template:/glimmer-api-docs/components/GlimmerApiDocs":{id:"2jGEgrMf",block:'{"symbols":[],"statements":[[6,"div"],[10,"id","top-menu"],[8],[0,"\\n  "],[6,"button"],[11,"onclick",[26,"action",[[22,["toggleNav"]]],null],null],[10,"id","menu-toggle"],[10,"class","hamburger hamburger--elastic"],[10,"type","button"],[8],[0,"\\n    "],[6,"span"],[10,"class","hamburger-box"],[8],[0,"\\n      "],[6,"span"],[10,"class","hamburger-inner"],[8],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[6,"h1"],[8],[6,"a"],[10,"href","/api/"],[11,"onclick",[26,"action",[[22,["showIndex"]]],null],null],[8],[1,[22,["model","main","header"]],false],[9],[9],[0,"\\n"],[9],[0,"\\n\\n"],[6,"div"],[10,"class","row"],[10,"id","column-container"],[8],[0,"\\n  "],[6,"div"],[10,"class","four columns"],[10,"id","menu-container"],[8],[0,"\\n    "],[5,"LeftMenu",[],[["@data"],[[22,["model","menu"]]]],{"statements":[],"parameters":[]}],[0,"\\n  "],[9],[0,"\\n  "],[6,"div"],[10,"class","eight columns"],[10,"id","content-container"],[8],[0,"\\n    "],[2," module won\'t be used for project-landing "],[0,"\\n"],[4,"if",[[22,["theCurrentView","componentName"]]],null,{"statements":[[0,"      "],[1,[26,"component",[[22,["theCurrentView","componentName"]]],[["project","module","showProject"],[[22,["theCurrentView","project"]],[22,["theCurrentView","module"]],[26,"action",[[22,["showProject"]]],null]]]],false],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[22,["theCurrentView","notFound"]]],null,{"statements":[[0,"      "],[5,"NotFound",[],[["@showIndex"],[[26,"action",[[22,["showIndex"]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[6,"section"],[10,"class","content-container"],[8],[0,"\\n        "],[6,"h1"],[8],[1,[22,["model","main","title"]],false],[9],[0,"\\n        "],[6,"p"],[8],[0,"\\n          "],[1,[22,["model","main","intro"]],true],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n    "]],"parameters":[]}]],"parameters":[]}],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n\\n"],[6,"section"],[10,"id","footer"],[8],[0,"\\n  "],[6,"ol"],[10,"class","links"],[8],[0,"\\n    "],[6,"li"],[8],[6,"a"],[10,"href","/"],[8],[0,"Glimmer Home"],[9],[9],[0,"\\n    "],[6,"li"],[8],[6,"a"],[10,"href","/api/"],[8],[0,"Glimmer API"],[9],[9],[0,"\\n  "],[9],[0,"\\n  "],[6,"div"],[10,"class","copyright"],[8],[0,"\\n    ©2017 Ember.js\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/GlimmerApiDocs"}},"template:/glimmer-api-docs/components/LeftMenu":{id:"U8ZvCKOj",block:'{"symbols":["project","child","@data"],"statements":[[6,"ul"],[10,"class","vertical menu"],[8],[0,"\\n"],[4,"each",[[21,3,[]]],[["key"],["@index"]],{"statements":[[0,"  "],[6,"li"],[8],[0,"\\n    "],[5,"EntityLink",[],[["@name","@projectId"],[[21,1,["name"]],[21,1,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[6,"ul"],[10,"class","menu vertical nested"],[8],[0,"\\n"],[4,"each",[[21,1,["children"]]],[["key"],["@index"]],{"statements":[[0,"        "],[6,"li"],[11,"class",[27,[[21,2,["type"]]]]],[8],[0,"\\n          "],[5,"EntityLink",[],[["@name","@projectId","@moduleId"],[[21,2,["name"]],[21,1,["slug"]],[21,2,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[2]},null],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/LeftMenu"}},"template:/glimmer-api-docs/components/MethodItem":{id:"0u+S+OqE",block:'{"symbols":["signature","tag","param","param","@method"],"statements":[[6,"li"],[11,"id",[27,["method-",[21,5,["slug"]]]]],[8],[0,"\\n  "],[6,"ol"],[10,"class","signatures-list"],[8],[0,"\\n"],[4,"each",[[21,5,["signatures"]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"li"],[8],[0,"\\n        "],[6,"div"],[10,"class","method-signature"],[8],[0,"\\n          "],[6,"h5"],[8],[0,"\\n            "],[6,"div"],[10,"class","access"],[8],[0,"\\n"],[4,"if",[[21,5,["flags","isProtected"]]],null,{"statements":[[0,"                protected\\n"]],"parameters":[]},{"statements":[[4,"if",[[21,5,["flags","isPrivate"]]],null,{"statements":[[0,"                private\\n"]],"parameters":[]},{"statements":[[0,"                public\\n              "]],"parameters":[]}]],"parameters":[]}],[0,"            "],[9],[0,"\\n"],[4,"if",[[21,5,["flags","isStatic"]]],null,{"statements":[[0,"              "],[6,"div"],[10,"class","signature-modifiers"],[8],[0,"\\n                static\\n              "],[9],[0,"\\n"]],"parameters":[]},null],[0,"            "],[6,"a"],[11,"href",[27,["#method-",[21,5,["slug"]]]]],[8],[0,"\\n              "],[1,[21,1,["name"]],false],[0,"\\n            "],[9],[0,"\\n          "],[9],[0,"\\n          "],[6,"ol"],[10,"class","parameters"],[8],[0,"\\n"],[4,"if",[[21,1,["parameters"]]],null,{"statements":[[4,"each",[[21,1,["parameters"]]],[["key"],["@index"]],{"statements":[[0,"                "],[6,"li"],[8],[0,"\\n                  "],[6,"div"],[10,"class","param-name"],[8],[1,[21,4,["name"]],false],[9],[0,"\\n                "],[9],[0,"\\n"]],"parameters":[4]},null]],"parameters":[]},null],[0,"          "],[9],[0,"\\n\\n          "],[6,"div"],[10,"class","return-type"],[8],[0,"\\n            "],[5,"TypeAnnotation",[],[["@type"],[[21,1,["typeInfo"]]]],{"statements":[],"parameters":[]}],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n"],[4,"if",[[21,1,["hasBody"]]],null,{"statements":[[0,"          "],[6,"div"],[10,"class","method-body"],[8],[0,"\\n"],[4,"if",[[21,1,["sources"]]],null,{"statements":[[0,"              "],[5,"SourceLink",[],[["@sources"],[[21,1,["sources"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[4,"if",[[21,1,["parameters"]]],null,{"statements":[[0,"              "],[6,"strong"],[10,"class","sub"],[8],[0,"Arguments"],[9],[0,"\\n              "],[6,"ol"],[10,"class","parameters-list"],[8],[0,"\\n"],[4,"each",[[21,1,["parameters"]]],[["key"],["@index"]],{"statements":[[0,"                "],[6,"li"],[8],[0,"\\n                  "],[1,[21,3,["name"]],false],[0,": "],[5,"TypeAnnotation",[],[["@type"],[[21,3,["typeInfo"]]]],{"statements":[],"parameters":[]}],[0,"\\n"],[4,"if",[[21,3,["comment","text"]]],null,{"statements":[[0,"                    "],[1,[21,3,["comment","text"]],true],[0,"\\n"]],"parameters":[]},null],[0,"                "],[9],[0,"\\n"]],"parameters":[3]},null],[0,"              "],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[21,1,["comment"]]],null,{"statements":[[0,"              "],[6,"div"],[10,"class","function-comment readme"],[8],[0,"\\n                "],[1,[21,1,["comment","text"]],true],[0,"\\n"],[4,"each",[[21,1,["comment","tags"]]],[["key"],["@index"]],{"statements":[[0,"                  "],[6,"strong"],[8],[1,[21,2,["tagName"]],false],[9],[0,"\\n                  "],[6,"p"],[10,"class","tag"],[8],[0,"\\n                    "],[1,[21,2,["text"]],true],[0,"\\n                  "],[9],[0,"\\n"]],"parameters":[2]},null],[0,"              "],[9],[0,"\\n"]],"parameters":[]},null],[0,"          "],[9],[0,"\\n"]],"parameters":[]},null],[0,"      "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/MethodItem"}},"component:/glimmer-api-docs/components/MethodList":Fi,"template:/glimmer-api-docs/components/MethodList":{id:"X4MHlVuf",block:'{"symbols":["method","category","method","@methods","@hasMethodCategories"],"statements":[[6,"div"],[10,"class","methods-list"],[8],[0,"\\n"],[4,"if",[[21,5,[]]],null,{"statements":[[4,"each",[[22,["categories"]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"div"],[10,"class","method-category"],[8],[0,"\\n        "],[6,"h4"],[11,"id",[27,["method-category-",[21,2,["slug"]]]]],[8],[1,[21,2,["name"]],false],[9],[0,"\\n        "],[6,"ul"],[8],[0,"\\n"],[4,"each",[[21,2,["methods"]]],[["key"],["@index"]],{"statements":[[0,"            "],[5,"MethodItem",[],[["@method"],[[21,3,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[3]},null],[0,"        "],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[2]},null]],"parameters":[]},{"statements":[[4,"each",[[21,4,[]]],[["key"],["@index"]],{"statements":[[0,"      "],[5,"MethodItem",[],[["@method"],[[21,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null]],"parameters":[]}],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/MethodList"}},"template:/glimmer-api-docs/components/ModuleLanding":{id:"Vh9F99bJ",block:'{"symbols":["implements","extends","@module","@project"],"statements":[[6,"section"],[10,"class","content-container"],[8],[0,"\\n  "],[6,"h5"],[10,"class","project-breadcrumb"],[8],[0,"\\n    "],[5,"EntityLink",[],[["@name","@projectId"],[[21,4,["name"]],[21,4,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n  "],[9],[0,"\\n  "],[6,"div"],[10,"class","module-header"],[8],[0,"\\n    "],[1,[21,3,["kindString"]],false],[0," "],[6,"h3"],[8],[1,[21,3,["name"]],false],[9],[0,"\\n  "],[9],[0,"\\n"],[4,"if",[[21,3,["sources"]]],null,{"statements":[[4,"unless",[[21,3,["isFunction"]]],null,{"statements":[[0,"      "],[5,"SourceLink",[],[["@sources"],[[21,3,["sources"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[4,"if",[[21,3,["extendedTypes"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","hierarchy-meta"],[8],[0,"\\n    "],[6,"strong"],[8],[0,"Extends"],[9],[0,"\\n\\n"],[4,"each",[[21,3,["extendedTypes"]]],[["key"],["@index"]],{"statements":[[0,"      "],[5,"TypeAnnotation",[],[["@type"],[[21,2,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[2]},null],[0,"    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["implementedTypes"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","hierarchy-meta"],[8],[0,"\\n    "],[6,"strong"],[8],[0,"Implements"],[9],[0,"\\n\\n"],[4,"each",[[21,3,["implementedTypes"]]],[["key"],["@index"]],{"statements":[[0,"      "],[5,"TypeAnnotation",[],[["@type"],[[21,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["comment"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","readme"],[8],[0,"\\n      "],[1,[21,3,["comment","text"]],true],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["constructors"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","constructors"],[8],[0,"\\n      "],[6,"h4"],[8],[0,"Constructor"],[9],[0,"\\n\\n      "],[5,"MethodList",[],[["@methods"],[[21,3,["constructors"]]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["methods"]]],null,{"statements":[[0,"    "],[6,"h4"],[8],[0,"Methods"],[9],[0,"\\n\\n    "],[5,"MethodList",[],[["@hasMethodCategories","@methods"],[[21,3,["hasMethodCategories"]],[21,3,["methods"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["signatures"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","methods-list"],[8],[0,"\\n      "],[5,"MethodItem",[],[["@method"],[[21,3,[]]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["properties"]]],null,{"statements":[[0,"    "],[5,"VariableList",[],[["@label","@variables"],["Properties",[21,3,["properties"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/ModuleLanding"}},"template:/glimmer-api-docs/components/ModuleList":{id:"vqf6O/Fi",block:'{"symbols":["module","@projectId","@title","@modules"],"statements":[[6,"div"],[8],[0,"\\n  "],[6,"strong"],[8],[1,[21,3,[]],false],[9],[0,"\\n\\n  "],[6,"ul"],[10,"class","project-list"],[8],[0,"\\n"],[4,"each",[[21,4,[]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"li"],[8],[0,"\\n        "],[5,"EntityLink",[],[["@name","@projectId","@moduleId"],[[21,1,["name"]],[21,2,[]],[21,1,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/ModuleList"}},"template:/glimmer-api-docs/components/NotFound":{id:"Ns3dI3Bx",block:'{"symbols":["@showIndex"],"statements":[[6,"div"],[8],[0,"\\n  "],[6,"section"],[10,"class","content-container"],[8],[0,"\\n    "],[6,"h2"],[8],[0,"404 Not Found"],[9],[0,"\\n    "],[6,"p"],[8],[0,"\\n      Hmmmm, we can\'t seem to find what you\'re looking for. Perhaps checkout the "],[6,"a"],[10,"href","/"],[11,"onclick",[26,"action",[[21,1,[]]],null],null],[8],[0,"homepage"],[9],[0,"?\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/NotFound"}},"template:/glimmer-api-docs/components/ProjectLanding":{id:"BXBtlkPh",block:'{"symbols":["@project"],"statements":[[6,"div"],[8],[0,"\\n  "],[6,"section"],[10,"class","content-container readme"],[8],[0,"\\n    "],[1,[21,1,["readme"]],true],[0,"\\n  "],[9],[0,"\\n\\n  "],[6,"section"],[10,"class","content-container project-container"],[8],[0,"\\n"],[4,"if",[[21,1,["interfaces"]]],null,{"statements":[[0,"      "],[5,"ModuleList",[],[["@projectId","@title","@modules"],[[21,1,["id"]],"Interfaces",[21,1,["interfaces"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["classes"]]],null,{"statements":[[0,"      "],[5,"ModuleList",[],[["@projectId","@title","@modules"],[[21,1,["id"]],"Classes",[21,1,["classes"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["functions"]]],null,{"statements":[[0,"      "],[6,"strong"],[8],[0,"Functions"],[9],[0,"\\n      "],[5,"MethodList",[],[["@methods"],[[21,1,["functions"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["objectLiterals"]]],null,{"statements":[[0,"      "],[5,"VariableList",[],[["@label","@variables"],["Object Literals",[21,1,["objectLiterals"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["typeAliases"]]],null,{"statements":[[0,"      "],[5,"VariableList",[],[["@label","@variables"],["Type Aliases",[21,1,["typeAliases"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["variables"]]],null,{"statements":[[0,"      "],[5,"VariableList",[],[["@label","@variables"],["Variables",[21,1,["variables"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/ProjectLanding"}},"template:/glimmer-api-docs/components/SourceLink":{id:"76hTMxv4",block:'{"symbols":["source","@sources"],"statements":[[6,"div"],[10,"class","sources"],[8],[0,"\\n"],[4,"each",[[21,2,[]]],[["key"],["@index"]],{"statements":[[0,"    "],[6,"a"],[11,"href",[27,[[21,1,["url"]]]]],[8],[1,[21,1,["fileName"]],false],[0,":"],[1,[21,1,["line"]],false],[9],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/SourceLink"}},"template:/glimmer-api-docs/components/TypeAnnotation":{id:"wg54t8Fi",block:'{"symbols":["@type"],"statements":[[6,"div"],[10,"class","type-annotation"],[8],[0,"\\n"],[4,"if",[[21,1,["link"]]],null,{"statements":[[0,"    "],[5,"EntityLink",[],[["@name","@projectId","@moduleId"],[[21,1,["name"]],[21,1,["link","parent","slug"]],[21,1,["link","slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[6,"span"],[10,"class","type"],[8],[1,[21,1,["name"]],false],[9],[0,"\\n"]],"parameters":[]}],[4,"if",[[21,1,["isArray"]]],null,{"statements":[[0,"    "],[6,"span"],[10,"class","isArray"],[8],[0,"[]"],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[21,1,["isOptional"]]],null,{"statements":[[0,"    "],[6,"span"],[10,"class","isArray"],[8],[0,"?"],[9],[0,"\\n"]],"parameters":[]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/TypeAnnotation"}},"template:/glimmer-api-docs/components/VariableList":{id:"dZ+yLv6E",block:'{"symbols":["property","@label","@variables"],"statements":[[6,"div"],[8],[0,"\\n  "],[6,"strong"],[8],[1,[21,2,[]],false],[9],[0,"\\n\\n  "],[6,"ul"],[10,"class","properties-list"],[8],[0,"\\n"],[4,"each",[[21,3,[]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"li"],[10,"class","property-definition"],[11,"id",[27,["variable-",[21,1,["slug"]]]]],[8],[0,"\\n        "],[6,"div"],[10,"class","property-title-container"],[8],[0,"\\n          "],[6,"h5"],[8],[6,"a"],[11,"href",[27,["#variable-",[21,1,["slug"]]]]],[8],[1,[21,1,["name"]],false],[9],[9],[0,"\\n          "],[6,"div"],[10,"class","property-type"],[8],[5,"TypeAnnotation",[],[["@type"],[[21,1,["typeInfo"]]]],{"statements":[],"parameters":[]}],[9],[0,"\\n        "],[9],[0,"\\n"],[4,"if",[[21,1,["comment"]]],null,{"statements":[[0,"          "],[6,"p"],[8],[1,[21,1,["comment","text"]],true],[9],[0,"\\n"]],"parameters":[]},null],[0,"      "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/VariableList"}}},Vi={app:{name:"glimmer-api-docs",rootName:"glimmer-api-docs"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},"component-test":{unresolvable:!0},helper:{definitiveCollection:"components"},"helper-test":{unresolvable:!0},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","component-test","template","helper","helper-test"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}}
class Hi extends Ai{constructor(){let t=new Li(Pi),e=new Ni(Vi,t)
super({rootName:Vi.app.rootName,resolver:e})}}const zi=new Hi,Ui=document.getElementById("app")
for(function(t){Gn=t}(()=>{zi.scheduleRerender()}),zi.registerInitializer({initialize(t){t.register(`component-manager:/${zi.rootName}/component-managers/main`,ri)}}),zi.boot();Ui.firstChild;)Ui.removeChild(Ui.firstChild)
zi.renderComponent("GlimmerApiDocs",Ui,null)})
