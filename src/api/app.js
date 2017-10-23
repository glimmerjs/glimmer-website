(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()})(0,function(){"use strict"
function e(e){return e[$e]}function t(e,t){e[$e]=t}function s(e,t){if(null===e||void 0===e)throw new Error(t)
return e}function n(e="unreachable"){return new Error(e)}function i(e,t){if(!e)throw new Error(t||"assertion failure")}function r(e){for(let t=1;t<arguments.length;t++){let s=arguments[t]
if(null===s||"object"!=typeof s)continue
let n=Ge(s)
for(let t=0;t<n.length;t++){let i=n[t]
e[i]=s[i]}}return e}function a(e){let t=new Array(e)
for(let s=0;s<e;s++)t[s]=null
return t}function l(e){return e._guid=++Ye}function o(e){return e._guid||l(e)}function h(){return Object.create(null)}function u(e){let t=rt.length
rt.push(e=>e.value()),at.push((e,t)=>e.validate(t)),e.id=t}function c({tag:e}){return e===ot}function p(e){return e===ot}function d(e){let t=[]
for(let s=0,n=e.length;s<n;s++){let n=e[s].tag
if(n===ht)return ht
n!==ot&&t.push(n)}return g(t)}function m(e){let t=[],s=e.head()
for(;null!==s;){let n=s.tag
if(n===ht)return ht
n!==ot&&t.push(n),s=e.nextNode(s)}return g(t)}function f(e){let t=[]
for(let s=0,n=e.length;s<n;s++){let n=e[s]
if(n===ht)return ht
n!==ot&&t.push(n)}return g(t)}function g(e){switch(e.length){case 0:return ot
case 1:return e[0]
case 2:return dt.create(e[0],e[1])
default:return mt.create(e)}}function y(e){return e!==bt}function b(e){return"function"!=typeof e.toString?"":String(e)}function v(e){return function(t){return Array.isArray(t)&&t[0]===e}}function k(e,t,s){let n=e[1],i=e[2],r=e[3]
w(i,s),r?s.dynamicAttr(n,r,t):s.dynamicAttr(n,null,t)}function w(e,t){Array.isArray(e)?zt.compile(e,t):t.pushPrimitiveReference(e)}function S(e=new Gt,t=new Yt){return e.add("if",(e,t,s,n,i)=>{if(!e||1!==e.length)throw new Error(`SYNTAX ERROR: #if requires a single argument`)
i.startLabels(),i.pushFrame(),i.returnTo("END"),w(e[0],i),i.toBoolean(),i.enter(1),i.jumpUnless("ELSE"),i.invokeStaticBlock(s),n?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(n),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("unless",(e,t,s,n,i)=>{if(!e||1!==e.length)throw new Error(`SYNTAX ERROR: #unless requires a single argument`)
i.startLabels(),i.pushFrame(),i.returnTo("END"),w(e[0],i),i.toBoolean(),i.enter(1),i.jumpIf("ELSE"),i.invokeStaticBlock(s),n?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(n),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("with",(e,t,s,n,i)=>{if(!e||1!==e.length)throw new Error(`SYNTAX ERROR: #with requires a single argument`)
i.startLabels(),i.pushFrame(),i.returnTo("END"),w(e[0],i),i.dup(),i.toBoolean(),i.enter(2),i.jumpUnless("ELSE"),i.invokeStaticBlock(s,1),n?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(n),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("each",(e,t,s,n,i)=>{i.startLabels(),i.pushFrame(),i.returnTo("END"),t&&"key"===t[0][0]?w(t[1][0],i):i.pushPrimitiveReference(null),w(e[0],i),i.enter(2),i.putIterator(),i.jumpUnless("ELSE"),i.pushFrame(),i.returnTo("ITER"),i.dup(nt.fp,1),i.enterList("BODY"),i.label("ITER"),i.iterate("BREAK"),i.label("BODY"),i.invokeStaticBlock(s,2),i.pop(2),i.exit(),i.return(),i.label("BREAK"),i.exitList(),i.popFrame(),n?(i.jump("EXIT"),i.label("ELSE"),i.invokeStaticBlock(n),i.label("EXIT"),i.exit(),i.return()):(i.label("ELSE"),i.exit(),i.return()),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("in-element",(e,t,s,n,i)=>{if(!e||1!==e.length)throw new Error(`SYNTAX ERROR: #in-element requires a single argument`)
i.startLabels(),i.pushFrame(),i.returnTo("END")
let r=t[0],a=t[1]
for(let l=0;l<r.length;l++){let e=r[l]
if("nextSibling"!==e&&"guid"!==e)throw new Error(`SYNTAX ERROR: #in-element does not take a \`${r[0]}\` option`)
w(a[l],i)}w(e[0],i),i.dup(),i.enter(4),i.jumpUnless("ELSE"),i.pushRemoteElement(),i.invokeStaticBlock(s),i.popRemoteElement(),i.label("ELSE"),i.exit(),i.return(),i.label("END"),i.popFrame(),i.stopLabels()}),e.add("-with-dynamic-vars",(e,t,s,n,i)=>{if(t){let e=t[0],n=t[1]
i.compileParams(n),i.pushDynamicScope(),i.bindDynamicScope(e),i.invokeStaticBlock(s),i.popDynamicScope()}else i.invokeStaticBlock(s)}),e.add("component",(e,t,s,n,i)=>{let r=e[0],a=e.slice(1)
i.dynamicComponent(r,a,t,!0,s,n)}),t.add("component",(e,t,s,n)=>{let i=t[0],r=t.slice(1)
return n.dynamicComponent(i,r,s,!0,null,null),!0}),{blocks:e,inlines:t}}function E(e,t){Vt.compile(e,t)}function _(e){return!(!e||!e[hs])}function C(e,t,s){let n=e.lookupComponent(t,s)
return n}function x(e,t){return!1===t.getCapabilities(e).dynamicLayout}function A(e,t){return!0===t.getCapabilities(e).dynamicLayout}function N(e){return T(e)?"":String(e)}function L(e){return T(e)?"":M(e)?e:O(e)?e.toHTML():B(e)?e:String(e)}function T(e){return null===e||void 0===e||"function"!=typeof e.toString}function O(e){return"object"==typeof e&&null!==e&&"function"==typeof e.toHTML}function B(e){return"object"==typeof e&&null!==e&&"number"==typeof e.nodeType}function D(e){return B(e)&&11===e.nodeType}function M(e){return"string"==typeof e}function j(e,t,s){return new Ls(e,t,s)}function I(e,t){return new Ts(e,t)}function R(e,t){let s=e.parentElement(),n=e.firstNode(),i=e.lastNode(),r=n
for(;r;){let e=r.nextSibling
if(s.insertBefore(r,t),r===i)return e
r=e}return null}function F(e){let t=e.parentElement(),s=e.firstNode(),n=e.lastNode(),i=s
for(;i;){let e=i.nextSibling
if(t.removeChild(i),i===n)return e
i=e}return null}function P(e,t,s){if(!e)return t
if(!H(e,s))return t
let n=e.createElement("div")
return class extends t{insertHTMLBefore(e,t,i){return null===i||""===i?super.insertHTMLBefore(e,t,i):e.namespaceURI!==s?super.insertHTMLBefore(e,t,i):V(e,n,i,t)}}}function V(e,t,s,n){let i="<svg>"+s+"</svg>"
t.innerHTML=i
var r=$(t.firstChild,e,n)
let a=r[0],l=r[1]
return new Ls(e,a,l)}function H(e,t){let s=e.createElementNS(t,"svg")
try{s.insertAdjacentHTML("beforeend","<circle></circle>")}catch(e){}finally{return 1!==s.childNodes.length||s.firstChild.namespaceURI!==Os}}function z(e,t){return e&&U(e)?class extends t{constructor(e){super(e),this.uselessComment=e.createComment("")}insertHTMLBefore(e,t,s){if(null===s)return super.insertHTMLBefore(e,t,s)
let n=!1,i=t?t.previousSibling:e.lastChild
i&&i instanceof Text&&(n=!0,e.insertBefore(this.uselessComment,t))
let r=super.insertHTMLBefore(e,t,s)
return n&&e.removeChild(this.uselessComment),r}}:t}function U(e){let t=e.createElement("div")
return t.innerHTML="first",t.insertAdjacentHTML("beforeend","second"),2!==t.childNodes.length}function $(e,t,s){let n=e.firstChild,i=null,r=n
for(;r;)i=r,r=r.nextSibling,t.insertBefore(i,s)
return[n,i]}function G(e,t,s,n){let i,r=t,a=e,l=s,o=l?l.previousSibling:r.lastChild
if(null===n||""===n)return new Ls(r,null,null)
null===l?(r.insertAdjacentHTML("beforeend",n),i=r.lastChild):l instanceof HTMLElement?(l.insertAdjacentHTML("beforebegin",n),i=l.previousSibling):(r.insertBefore(a,l),a.insertAdjacentHTML("beforebegin",n),i=a.previousSibling,r.removeChild(a))
let h=o?o.nextSibling:r.firstChild
return new Ls(r,h,i)}function Y(e,t){return-1!==e.indexOf(t)}function W(e,t){return(null===e||Y(Us,e))&&Y(Gs,t)}function X(e,t){return null!==e&&(Y($s,e)&&Y(Ys,t))}function K(e,t){return W(e,t)||X(e,t)}function q(e,t,s,n){let i=null
if(null===n||void 0===n)return n
if(O(n))return n.toHTML()
i=t?t.tagName.toUpperCase():null
let r=N(n)
if(W(i,s)){let t=e.protocolForURL(r)
if(Y(zs,t))return`unsafe:${r}`}return X(i,s)?`unsafe:${r}`:r}function J(e,t){let s,n
if(t in e)n=t,s="prop"
else{let i=t.toLowerCase()
i in e?(s="prop",n=i):(s="attr",n=t)}return"prop"!==s||"style"!==n.toLowerCase()&&!Z(e.tagName,n)||(s="attr"),{normalized:n,type:s}}function Z(e,t){let s=Ws[e.toUpperCase()]
return s&&s[t.toLowerCase()]||!1}function Q(e,t){let s=e.tagName
if(e.namespaceURI===Bs)return ee(s,t)
var n=J(e,t)
let i=n.type,r=n.normalized
return"attr"===i?ee(s,r):te(s,r)}function ee(e,t){return K(e,t)?Zs:Ks}function te(e,t){return K(e,t)?Js:ne(e,t)?Qs:se(e,t)?en:qs}function se(e,t){return"OPTION"===e&&"selected"===t}function ne(e,t){return("INPUT"===e||"TEXTAREA"===e)&&"value"===t}function ie(e){return!1===e||void 0===e||null===e||void 0===e.toString?null:!0===e?"":"function"==typeof e?null:String(e)}function re(e,t){return dn.forInitialRender(e,t)}function ae({id:e,meta:t,block:s}){let n,i=e||`client-${Nn++}`
return{id:i,meta:t,create:(e,a)=>{let l=a?r({},a,t):t
return n||(n=JSON.parse(s)),new Ln(e,{id:i,block:n,referrer:l})}}}function le(e,t,s){let n=e.block,i=e.referrer,a=n.hasEval,l=n.symbols,o=r({},t,{asPartial:s,referrer:i})
return new Wt(n.statements,e,o,{referrer:i,hasEval:a,symbols:l})}function oe(){}function he(e){return-1===e.indexOf(":")}function ue(e,t,s,n){let i=de(e)
return i.trackedProperties[t]=!0,i.trackedPropertyDependencies[t]=n||[],{enumerable:!0,configurable:!1,get:s.get,set:function(){de(this).dirtyableTagFor(t).inner.dirty(),s.set.apply(this,arguments),Gn()}}}function ce(e,t){let s,n=Symbol(t)
de(e).trackedProperties[t]=!0,void 0!==e[t]&&(s=e[t]),Object.defineProperty(e,t,{configurable:!0,get(){return this[n]},set(e){de(this).dirtyableTagFor(t).inner.dirty(),this[n]=e,Gn()}})}function pe(e,t,s){let n=[e.dirtyableTagFor(t)]
if(s&&s.length)for(let i=0;i<s.length;i++)n.push(e.tagFor(s[i]))
return f(n)}function de(e){let t=e[Un]
return t&&me(e,Un)?t:e[Un]=new zn(t)}function me(e,t){return $n.call(e,t)}function fe(e,t){throw Yn.for(e,t)}function ge(e,t,s=fe){return"object"==typeof e&&e?de(e).tagFor(t):ot}function ye(e,t,s){if(e instanceof Uint16Array){if(void 0!==e.slice)return e.slice(t,s).buffer
let n=new Uint16Array(s)
for(;t<s;t++)n[t]=e[t]
return n.buffer}return null}function be(e,t){let s=e.getSelf(),n=t.capture(),i=n.positional.at(0).value()
return"function"!=typeof i&&ve(i,n.positional.at(0)),new On(function(...e){let t=n.positional.value()
t.shift(),t.push(...e),i.apply(s&&s.value(),t)})}function ve(e,t){let s=ke(t)
throw new Error(`You tried to create an action with the {{action}} helper, but the first argument ${s}was ${typeof e} instead of a function.`)}function ke(e){let t,s,n=""
return null===e||void 0===e?n:("parent"in e&&"property"in e?(t=e.parent.value(),s=e.property):"_parentValue"in e&&"_propertyKey"in e&&(t=e._parentValue,s=e._propertyKey),void 0!==s&&(n+=`('${s}' on ${we(t)}) `),n)}function we(e){let t=typeof e
if(null===e||void 0===e)return t
if("number"===t||"boolean"===t)return e.toString()
if(e.debugName)return e.debugName
try{return JSON.stringify(e)}catch(e){}return e.toString()}function Se(e){var t=e.split(":")
let s=t[0],n=t[1]
return!!(s&&n&&0===n.indexOf("/")&&n.split("/").length>3)}function Ee(e){return void 0!==e.rootName&&void 0!==e.collection&&void 0!==e.name&&void 0!==e.type}function _e(e){let t=e.type,s=Ce(e)
return s?t+":"+s:t}function Ce(e){let t=[]
if(e.rootName&&t.push(e.rootName),e.collection&&t.push(e.collection),e.namespace&&t.push(e.namespace),e.name&&t.push(e.name),t.length>0){let s=t.join("/")
return Ee(e)&&(s="/"+s),s}}function xe(e){let t={}
if(e.indexOf(":")>-1){var s=e.split(":")
let n=s[0],i=s[1]
t.type=n
let r
0===i.indexOf("/")?(r=i.substr(1).split("/"),t.rootName=r.shift(),t.collection=r.shift()):r=i.split("/"),r.length>0&&(t.name=r.pop(),r.length>0&&(t.namespace=r.join("/")))}else t.type=e
return t}function Ae(e,t){if(!t)throw new Error("Assertion Failed: "+e)}function Ne(e){let t=e.namespace,s=e.collection,n=t.lastIndexOf("/-")
if(n>-1){n+=2
let e=t.indexOf("/",n)
s=t.slice(n,e>-1?e:void 0)}return s}function Le(e){return 2===Object.keys(e).length&&e.id&&e.type?Ti.included.find(t=>t.id===e.id&&t.type===e.type):e}function Te({relationships:e},t,s=!1){return e[t].data.map(Le)}function Oe(e){return Ie(e,!0)}function Be(e){let t=e.flags
return t&&(t.isPrivate||t.isProtected||(t.isPublic=!0)),e}function De(e){return e.hasBody=e.comment||e.parameters,e}function Me(e){for(let t of e.signatures){let e=t.comment,s=e&&e.tags
if(s)for(let t of s)if("category"===t.tagName)return t.text.trim()}return null}function je(e){if(e.properties&&Be(e.properties),e.callSignatures&&(e.signatures=e.callSignatures.map(De)),e.methods){let t=!1
e.methods=e.methods.map(e=>{if(Be(e),e.callSignatures&&(e.signatures=e.callSignatures.map(De)),e.signatures){let s=Me(e)
s&&(t=!0,e.category=s)}return e}),e.hasMethodCategories=t}return e.functions&&(e.functions=e.functions.map(e=>(Be(e),e.callSignatures&&(e.signatures=e.callSignatures.map(De)),e))),e.constructors&&(e.constructors=e.constructors.map(e=>(e.constructorSignatures&&(e.signatures=e.constructorSignatures.map(De)),e))),e}function Ie({type:e,id:t,attributes:s,relationships:n},i=!1){let r={type:e,id:t,kindString:e,slug:t,alias:t,name:t,isFunction:"function"===e,flags:{isPrivate:!0,isProtected:!0,isPublic:!0,isStatic:!0,isExported:!0,isExternal:!0,isOptional:!0,isRest:!0,isNormalized:!0}}
s||(s=Le({id:t,type:e}).attributes),s=je(s)
for(let a in s)r[a]=s[a]
for(let a in n){let e=n[a]
r[a]=i?e.data.map(Oe):e.data}return r}function Re(e){let t=[]
for(let s in e)if(Array.isArray(e[s])){const n=e[s].filter(e=>e.flags&&e.flags.isNormalized).map(Oe)
t=t.concat(n)}return e.children=t.sort((e,t)=>e.name>t.name?1:-1).map(e=>("function"===e.type&&(e.isFunction=!0),e)),e.menu.include&&(e.children=e.children.filter(t=>e.menu.include.indexOf(t.name)>-1)),e.menu.exclude&&(e.children=e.children.filter(t=>e.menu.exclude.indexOf(t.name)<0)),e}function Fe(e){return Te(e.data,"docmodules").map(Oe).map(Re)}function Pe(e){"/"===e[0]&&(e=e.substring(1)),"/"===e[e.length-1]&&(e=e.substring(0,e.length-1))
let t=e.split("/")
if(t[0]!==Di||2!==t.length&&4!==t.length||4===t.length&&t[2]!==Bi)return{moduleId:null,projectId:null}
const s=t[1]
let n=null
return 4===t.length&&(n=t[3]),{moduleId:n,projectId:s}}function Ve(e,t){return"/"===e[0]&&(e=e.substring(1)),"/"===t[0]&&(t=t.substring(1)),e===t.substring(0,e.length)&&(t=t.substring(e.length)),"/"!==t[0]&&(t="/"+t),t}function He(e){return e.toLowerCase().replace(/\s/g,"-")}class ze{constructor(e,t=null){this._registry=e,this._resolver=t,this._lookups={},this._factoryDefinitionLookups={}}factoryFor(e){let t=this._factoryDefinitionLookups[e]
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
return t.create(n)}}}}class Ue{constructor(e){this._registrations={},this._registeredOptions={},this._registeredInjections={},e&&e.fallback&&(this._fallback=e.fallback)}register(e,t,s){this._registrations[e]=t,s&&(this._registeredOptions[e]=s)}registration(e){let t=this._registrations[e]
return void 0===t&&this._fallback&&(t=this._fallback.registration(e)),t}unregister(e){delete this._registrations[e],delete this._registeredOptions[e],delete this._registeredInjections[e]}registerOption(e,t,s){let n=this._registeredOptions[e]
n||(n={},this._registeredOptions[e]=n),n[t]=s}registeredOption(e,t){let s,n=this.registeredOptions(e)
return n&&(s=n[t]),void 0===s&&void 0!==this._fallback&&(s=this._fallback.registeredOption(e,t)),s}registeredOptions(e){let t=this._registeredOptions[e]
if(void 0===t){let s=e.split(":")[0]
t=this._registeredOptions[s]}return t}unregisterOption(e,t){let s=this._registeredOptions[e]
s&&delete s[t]}registerInjection(e,t,s){let n=this._registeredInjections[e]
void 0===n&&(this._registeredInjections[e]=n=[]),n.push({property:t,source:s})}registeredInjections(e){let t=e.split(":")[0],s=this._fallback?this._fallback.registeredInjections(e):[]
return Array.prototype.push.apply(s,this._registeredInjections[t]),Array.prototype.push.apply(s,this._registeredInjections[e]),s}}const $e="__owner__",Ge=Object.keys
let Ye=0
class We{constructor(){this.dict=h()}add(e){return"string"==typeof e?this.dict[e]=e:this.dict[o(e)]=e,this}delete(e){"string"==typeof e?delete this.dict[e]:e._guid&&delete this.dict[e._guid]}}class Xe{constructor(){this.stack=[],this.current=null}get size(){return this.stack.length}push(e){this.current=e,this.stack.push(e)}pop(){let e=this.stack.pop(),t=this.stack.length
return this.current=0===t?null:this.stack[t-1],void 0===e?null:e}isEmpty(){return 0===this.stack.length}}class Ke{constructor(e){this.next=null,this.prev=null,this.value=e}}class qe{constructor(){this.clear()}head(){return this._head}tail(){return this._tail}clear(){this._head=this._tail=null}toArray(){let e=[]
return this.forEachNode(t=>e.push(t)),e}nextNode(e){return e.next}forEachNode(e){let t=this._head
for(;null!==t;)e(t),t=t.next}insertBefore(e,t=null){return null===t?this.append(e):(t.prev?t.prev.next=e:this._head=e,e.prev=t.prev,e.next=t,t.prev=e,e)}append(e){let t=this._tail
return t?(t.next=e,e.prev=t,e.next=null):this._head=e,this._tail=e}remove(e){return e.prev?e.prev.next=e.next:this._head=e.next,e.next?e.next.prev=e.prev:this._tail=e.prev,e}}class Je{constructor(e,t){this._head=e,this._tail=t}forEachNode(e){let t=this._head
for(;null!==t;)e(t),t=this.nextNode(t)}head(){return this._head}tail(){return this._tail}toArray(){let e=[]
return this.forEachNode(t=>e.push(t)),e}nextNode(e){return e===this._tail?null:e.next}}new Je(null,null)
const Ze=Object.freeze([])
class Qe{constructor(){this.evaluateOpcode=a(78).slice()}add(e,t){this.evaluateOpcode[e]=t}evaluate(e,t,s){(0,this.evaluateOpcode[s])(e,t)}}const et=new Qe
class tt{constructor(){l(this)}}class st extends tt{constructor(){super(...arguments),this.next=null,this.prev=null}}var nt;(function(e){e[e.pc=0]="pc",e[e.ra=1]="ra",e[e.fp=2]="fp",e[e.sp=3]="sp",e[e.s0=4]="s0",e[e.s1=5]="s1",e[e.t0=6]="t0",e[e.t1=7]="t1",e[e.v0=8]="v0"})(nt||(nt={}))
class it{validate(e){return this.value()===e}}it.id=0
const rt=[],at=[]
class lt{constructor(e,t){this.type=e,this.inner=t}value(){return(0,rt[this.type])(this.inner)}validate(e){return(0,at[this.type])(this.inner,e)}}rt.push(()=>0),at.push((e,t)=>0===t)
const ot=new lt(0,null)
rt.push(()=>NaN),at.push((e,t)=>NaN===t)
const ht=new lt(1,null)
rt.push(()=>ut),at.push((e,t)=>t===ut)
new lt(2,null)
let ut=1
class ct extends it{static create(e=ut){return new lt(this.id,new ct(e))}constructor(e=ut){super(),this.revision=e}value(){return this.revision}dirty(){this.revision=++ut}}u(ct)
class pt extends it{constructor(){super(...arguments),this.lastChecked=null,this.lastValue=null}value(){let e=this.lastChecked,t=this.lastValue
return e!==ut&&(this.lastChecked=ut,this.lastValue=t=this.compute()),this.lastValue}invalidate(){this.lastChecked=null}}class dt extends pt{static create(e,t){return new lt(this.id,new dt(e,t))}constructor(e,t){super(),this.first=e,this.second=t}compute(){return Math.max(this.first.value(),this.second.value())}}u(dt)
class mt extends pt{static create(e){return new lt(this.id,new mt(e))}constructor(e){super(),this.tags=e}compute(){let e=this.tags,t=-1
for(let s=0;s<e.length;s++){let n=e[s].value()
t=Math.max(n,t)}return t}}u(mt)
class ft extends pt{static create(e){return new lt(this.id,new ft(e))}constructor(e){super(),this.tag=e,this.lastUpdated=1}compute(){return Math.max(this.lastUpdated,this.tag.value())}update(e){e!==this.tag&&(this.tag=e,this.lastUpdated=ut,this.invalidate())}}u(ft)
class gt{constructor(){this.lastRevision=null,this.lastValue=null}value(){let e=this.tag,t=this.lastRevision,s=this.lastValue
return null!==t&&e.validate(t)||(s=this.lastValue=this.compute(),this.lastRevision=e.value()),s}invalidate(){this.lastRevision=null}}class yt{constructor(e){this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=e.tag,this.reference=e}peek(){return this.initialized?this.lastValue:this.initialize()}revalidate(){if(!this.initialized)return this.initialize()
let e=this.reference,t=this.lastRevision,s=e.tag
if(s.validate(t))return bt
this.lastRevision=s.value()
let n=this.lastValue,i=e.value()
return i===n?bt:(this.lastValue=i,i)}initialize(){let e=this.reference,t=this.lastValue=e.value()
return this.lastRevision=e.tag.value(),this.initialized=!0,t}}const bt="adb3b78e-3d22-4e4b-877a-6317c2c5c145"
class vt{constructor(e){this.inner=e,this.tag=ot}value(){return this.inner}}class kt extends Ke{constructor(e,t){super(e.valueReferenceFor(t)),this.retained=!1,this.seen=!1,this.key=t.key,this.iterable=e,this.memo=e.memoReferenceFor(t)}update(e){this.retained=!0,this.iterable.updateValueReference(this.value,e),this.iterable.updateMemoReference(this.memo,e)}shouldRemove(){return!this.retained}reset(){this.retained=!1,this.seen=!1}}class wt{constructor(e){this.iterator=null,this.map=h(),this.list=new qe,this.tag=e.tag,this.iterable=e}isEmpty(){return(this.iterator=this.iterable.iterate()).isEmpty()}iterate(){let e
return e=null===this.iterator?this.iterable.iterate():this.iterator,this.iterator=null,e}has(e){return!!this.map[e]}get(e){return this.map[e]}wasSeen(e){let t=this.map[e]
return void 0!==t&&t.seen}append(e){let t=this.map,s=this.list,n=this.iterable,i=t[e.key]=new kt(n,e)
return s.append(i),i}insertBefore(e,t){let s=this.map,n=this.list,i=this.iterable,r=s[e.key]=new kt(i,e)
return r.retained=!0,n.insertBefore(r,t),r}move(e,t){let s=this.list
e.retained=!0,s.remove(e),s.insertBefore(e,t)}remove(e){this.list.remove(e),delete this.map[e.key]}nextNode(e){return this.list.nextNode(e)}head(){return this.list.head()}}class St{constructor(e){this.iterator=null
let t=new wt(e)
this.artifacts=t}next(){let e=this.artifacts,t=(this.iterator=this.iterator||e.iterate()).next()
return null===t?null:e.append(t)}}var Et;(function(e){e[e.Append=0]="Append",e[e.Prune=1]="Prune",e[e.Done=2]="Done"})(Et||(Et={}))
class _t{constructor({target:e,artifacts:t}){this.target=e,this.artifacts=t,this.iterator=t.iterate(),this.current=t.head()}sync(){let e=Et.Append
for(;;)switch(e){case Et.Append:e=this.nextAppend()
break
case Et.Prune:e=this.nextPrune()
break
case Et.Done:return void this.nextDone()}}advanceToKey(e){let t=this.current,s=this.artifacts,n=t
for(;null!==n&&n.key!==e;)n.seen=!0,n=s.nextNode(n)
null!==n&&(this.current=s.nextNode(n))}nextAppend(){let e=this.iterator,t=this.current,s=this.artifacts,n=e.next()
if(null===n)return this.startPrune()
let i=n.key
return null!==t&&t.key===i?this.nextRetain(n):s.has(i)?this.nextMove(n):this.nextInsert(n),Et.Append}nextRetain(e){let t=this.artifacts,s=this.current;(s=s).update(e),this.current=t.nextNode(s),this.target.retain(e.key,s.value,s.memo)}nextMove(e){let t=this.current,s=this.artifacts,n=this.target,i=e.key,r=s.get(e.key)
r.update(e),s.wasSeen(e.key)?(s.move(r,t),n.move(r.key,r.value,r.memo,t?t.key:null)):this.advanceToKey(i)}nextInsert(e){let t=this.artifacts,s=this.target,n=this.current,i=t.insertBefore(e,n)
s.insert(i.key,i.value,i.memo,n?n.key:null)}startPrune(){return this.current=this.artifacts.head(),Et.Prune}nextPrune(){let e=this.artifacts,t=this.target,s=this.current
if(null===s)return Et.Done
let n=s
return this.current=e.nextNode(n),n.shouldRemove()?(e.remove(n),t.delete(n.key)):n.reset(),Et.Prune}nextDone(){this.target.done()}}class Ct extends vt{constructor(e){super(e)}static create(e){return void 0===e?Nt:null===e?Lt:!0===e?Tt:!1===e?Ot:"number"==typeof e?new At(e):new xt(e)}get(e){return Nt}}class xt extends Ct{constructor(){super(...arguments),this.lengthReference=null}get(e){if("length"===e){let e=this.lengthReference
return null===e&&(e=this.lengthReference=new At(this.inner.length)),e}return super.get(e)}}class At extends Ct{constructor(e){super(e)}}const Nt=new At(void 0),Lt=new At(null),Tt=new At(!0),Ot=new At(!1)
class Bt{constructor(e){this.inner=e,this.tag=e.tag}value(){return this.toBool(this.inner.value())}toBool(e){return!!e}}class Dt extends gt{constructor(e){super(),this.parts=e,this.tag=d(e)}compute(){let e=new Array
for(let t=0;t<this.parts.length;t++){let s=this.parts[t].value()
null!==s&&void 0!==s&&(e[t]=b(s))}return e.length>0?e.join(""):null}}et.add(1,(e,{op1:t})=>{let s=e.stack,n=e.constants.resolveHandle(t)(e,s.pop())
e.loadValue(nt.v0,n)}),et.add(4,(e,{op1:t})=>{let s=e.referenceForSymbol(t)
e.stack.push(s)}),et.add(2,(e,{op1:t})=>{let s=e.stack.pop()
e.scope().bindSymbol(t,s)}),et.add(3,(e,{op1:t})=>{let s=e.stack.pop(),n=e.stack.pop(),i=e.stack.pop(),r=i?[s,n,i]:null
e.scope().bindBlock(t,r)}),et.add(76,(e,{op1:t})=>{let s=e.constants.getString(t),n=e.scope().getPartialMap()[s]
void 0===n&&(n=e.getSelf().get(s)),e.stack.push(n)}),et.add(17,(e,{op1:t,op2:s})=>{e.pushRootScope(t,!!s)}),et.add(5,(e,{op1:t})=>{let s=e.constants.getString(t),n=e.stack.pop()
e.stack.push(n.get(s))}),et.add(6,(e,{op1:t})=>{let s=e.stack,n=e.scope().getBlock(t)
n?(s.push(n[2]),s.push(n[1]),s.push(n[0])):(s.push(null),s.push(null),s.push(null))}),et.add(7,(e,{op1:t})=>{let s=!!e.scope().getBlock(t)
e.stack.push(s?Tt:Ot)}),et.add(8,e=>{let t=e.stack.pop(),s=t&&t.parameters.length
e.stack.push(s?Tt:Ot)}),et.add(9,(e,{op1:t})=>{let s=new Array(t)
for(let n=t;n>0;n--)s[n-1]=e.stack.pop()
e.stack.push(new Dt(s))})
var Mt;(function(e){e[e.Text=0]="Text",e[e.Append=1]="Append",e[e.Comment=2]="Comment",e[e.Modifier=3]="Modifier",e[e.Block=4]="Block",e[e.Component=5]="Component",e[e.OpenElement=6]="OpenElement",e[e.OpenSplattedElement=7]="OpenSplattedElement",e[e.FlushElement=8]="FlushElement",e[e.CloseElement=9]="CloseElement",e[e.StaticAttr=10]="StaticAttr",e[e.DynamicAttr=11]="DynamicAttr",e[e.AttrSplat=12]="AttrSplat",e[e.Yield=13]="Yield",e[e.Partial=14]="Partial",e[e.DynamicArg=15]="DynamicArg",e[e.StaticArg=16]="StaticArg",e[e.TrustingAttr=17]="TrustingAttr",e[e.Debugger=18]="Debugger",e[e.ClientSideStatement=19]="ClientSideStatement",e[e.Unknown=20]="Unknown",e[e.Get=21]="Get",e[e.MaybeLocal=22]="MaybeLocal",e[e.HasBlock=23]="HasBlock",e[e.HasBlockParams=24]="HasBlockParams",e[e.Undefined=25]="Undefined",e[e.Helper=26]="Helper",e[e.Concat=27]="Concat",e[e.ClientSideExpression=28]="ClientSideExpression"})(Mt||(Mt={}))
var jt;(function(e){e.isUnknown=v(Mt.Unknown),e.isGet=v(Mt.Get),e.isConcat=v(Mt.Concat),e.isHelper=v(Mt.Helper),e.isHasBlock=v(Mt.HasBlock),e.isHasBlockParams=v(Mt.HasBlockParams),e.isUndefined=v(Mt.Undefined),e.isClientSide=v(Mt.ClientSideExpression),e.isMaybeLocal=v(Mt.MaybeLocal),e.isPrimitiveValue=function(e){return null===e||"object"!=typeof e}})(jt||(jt={}))
var It;(function(e){function t(e){return e[0]===Mt.StaticAttr||e[0]===Mt.DynamicAttr||e[0]===Mt.TrustingAttr}function s(e){return e[0]===Mt.StaticArg||e[0]===Mt.DynamicArg}e.isText=v(Mt.Text),e.isAppend=v(Mt.Append),e.isComment=v(Mt.Comment),e.isModifier=v(Mt.Modifier),e.isBlock=v(Mt.Block),e.isComponent=v(Mt.Component),e.isOpenElement=v(Mt.OpenElement),e.isSplatElement=v(Mt.OpenSplattedElement),e.isFlushElement=v(Mt.FlushElement),e.isCloseElement=v(Mt.CloseElement),e.isStaticAttr=v(Mt.StaticAttr),e.isDynamicAttr=v(Mt.DynamicAttr),e.isAttrSplat=v(Mt.AttrSplat),e.isYield=v(Mt.Yield),e.isPartial=v(Mt.Partial),e.isDynamicArg=v(Mt.DynamicArg),e.isStaticArg=v(Mt.StaticArg),e.isTrustingAttr=v(Mt.TrustingAttr),e.isDebugger=v(Mt.Debugger),e.isClientSide=v(Mt.ClientSideStatement),e.isAttribute=t,e.isArgument=s,e.isParameter=function(e){return t(e)||s(e)}})(It||(It={}))
var Rt;(function(e){e[e.OpenComponentElement=0]="OpenComponentElement",e[e.DidCreateElement=1]="DidCreateElement",e[e.SetComponentAttrs=2]="SetComponentAttrs",e[e.DidRenderLayout=3]="DidRenderLayout",e[e.Debugger=4]="Debugger"})(Rt||(Rt={}))
var Ft=Mt
class Pt{constructor(e=0){this.offset=e,this.names=h(),this.funcs=[]}add(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1}compile(e,t){let s=e[this.offset],n=this.names[s],i=this.funcs[n]
i(e,t)}}const Vt=new Pt,Ht=new Pt(1)
Vt.add(Ft.Text,(e,t)=>{t.text(e[1])}),Vt.add(Ft.Comment,(e,t)=>{t.comment(e[1])}),Vt.add(Ft.CloseElement,(e,t)=>{t.closeElement()}),Vt.add(Ft.FlushElement,(e,t)=>{t.flushElement()}),Vt.add(Ft.Modifier,(e,t)=>{let s=t.lookup,n=t.referrer,i=e[1],r=e[2],a=e[3],l=s.lookupModifier(i,n)
if(!l)throw new Error(`Compile Error ${i} is not a modifier: Helpers may not be used in the element form.`)
t.modifier(l,r,a)}),Vt.add(Ft.StaticAttr,(e,t)=>{let s=e[1],n=e[2],i=e[3]
t.staticAttr(s,i,n)}),Vt.add(Ft.DynamicAttr,(e,t)=>{k(e,!1,t)}),Vt.add(Ft.TrustingAttr,(e,t)=>{k(e,!0,t)}),Vt.add(Ft.OpenElement,(e,t)=>{t.openPrimitiveElement(e[1])}),Vt.add(Ft.OpenSplattedElement,(e,t)=>{t.setComponentAttrs(!0),t.putComponentOperations(),t.openElementWithOperations(e[1])}),Ht.add(Rt.OpenComponentElement,(e,t)=>{t.putComponentOperations(),t.openElementWithOperations(e[2])}),Ht.add(Rt.DidCreateElement,(e,t)=>{t.didCreateElement(nt.s0)}),Ht.add(Rt.SetComponentAttrs,(e,t)=>{t.setComponentAttrs(e[2])}),Ht.add(Rt.Debugger,()=>{}),Ht.add(Rt.DidRenderLayout,(e,t)=>{t.didRenderLayout(nt.s0)}),Vt.add(Ft.Append,(e,t)=>{let s=e[1],n=e[2]
if(!0===(t.macros.inlines.compile(e,t)||s))return
let i=Ut.isGet(s),r=Ut.isMaybeLocal(s)
n?t.guardedAppend(s,!0):i||r?t.guardedAppend(s,!1):(w(s,t),t.dynamicContent(!1))}),Vt.add(Ft.Block,(e,t)=>{let s=e[1],n=e[2],i=e[3],r=e[4],a=e[5],l=t.template(r),o=t.template(a),h=l&&l,u=o&&o
t.macros.blocks.compile(s,n,i,h,u,t)}),Vt.add(Ft.Component,(e,t)=>{let s=e[1],n=e[2],i=e[3],r=e[4],a=t.lookup,l=t.referrer,o=a.lookupComponentSpec(s,l)
if(null===o)throw new Error(`Compile Error: Cannot find component ${s}`)
{let e=a.getCapabilities(o),s=[[Ft.ClientSideStatement,Rt.SetComponentAttrs,!0],...n,[Ft.ClientSideStatement,Rt.SetComponentAttrs,!1]],l=t.inlineBlock({statements:s,parameters:Ze}),h=t.template(r)
if(!1===e.dynamicLayout){let s=a.getLayout(o)
t.pushComponentDefinition(o),t.invokeStaticComponent(e,s,l,null,i,!1,h&&h)}else t.pushComponentDefinition(o),t.invokeComponent(l,null,i,!1,h&&h)}}),Vt.add(Ft.Partial,(e,t)=>{let s=e[1],n=e[2],i=t.referrer
t.startLabels(),t.pushFrame(),t.returnTo("END"),w(s,t),t.dup(),t.enter(2),t.jumpUnless("ELSE"),t.invokePartial(i,t.evalSymbols(),n),t.popScope(),t.popFrame(),t.label("ELSE"),t.exit(),t.return(),t.label("END"),t.popFrame(),t.stopLabels()}),Vt.add(Ft.Yield,(e,t)=>{let s=e[1],n=e[2]
t.yield(s,n)}),Vt.add(Ft.AttrSplat,(e,t)=>{let s=e[1]
t.yield(s,[]),t.didCreateElement(nt.s0),t.setComponentAttrs(!1)}),Vt.add(Ft.Debugger,(e,t)=>{let s=e[1]
t.debugger(t.evalSymbols(),s)}),Vt.add(Ft.ClientSideStatement,(e,t)=>{Ht.compile(e,t)})
const zt=new Pt
var Ut=jt
zt.add(Ft.Unknown,(e,t)=>{let s=t.lookup,n=t.asPartial,i=t.referrer,r=e[1],a=s.lookupHelper(r,i)
null!==a?t.helper(a,null,null):n?t.resolveMaybeLocal(r):(t.getVariable(0),t.getProperty(r))}),zt.add(Ft.Concat,(e,t)=>{let s=e[1]
for(let n=0;n<s.length;n++)w(s[n],t)
t.concat(s.length)}),zt.add(Ft.Helper,(e,t)=>{let s=t.lookup,n=t.referrer,i=e[1],r=e[2],a=e[3]
if("component"===i){let e=r[0],s=r.slice(1)
return void t.curryComponent(e,s,a,!0)}let l=s.lookupHelper(i,n)
if(null===l)throw new Error(`Compile Error: ${i} is not a helper`)
t.helper(l,r,a)}),zt.add(Ft.Get,(e,t)=>{let s=e[1],n=e[2]
t.getVariable(s)
for(let i=0;i<n.length;i++)t.getProperty(n[i])}),zt.add(Ft.MaybeLocal,(e,t)=>{let s=e[1]
if(t.asPartial){let e=s[0]
s=s.slice(1),t.resolveMaybeLocal(e)}else t.getVariable(0)
for(let n=0;n<s.length;n++)t.getProperty(s[n])}),zt.add(Ft.Undefined,(e,t)=>t.pushPrimitiveReference(void 0)),zt.add(Ft.HasBlock,(e,t)=>{t.hasBlock(e[1])}),zt.add(Ft.HasBlockParams,(e,t)=>{t.hasBlockParams(e[1])})
class $t{constructor(){var e=S()
let t=e.blocks,s=e.inlines
this.blocks=t,this.inlines=s}}class Gt{constructor(){this.names=h(),this.funcs=[]}add(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1}addMissing(e){this.missing=e}compile(e,t,s,n,i,r){let a=this.names[e]
if(void 0===a){(0,this.missing)(e,t,s,n,i,r)}else(0,this.funcs[a])(t,s,n,i,r)}}class Yt{constructor(){this.names=h(),this.funcs=[]}add(e,t){this.funcs.push(t),this.names[e]=this.funcs.length-1}addMissing(e){this.missing=e}compile(e,t){let s=e[1]
if(!Array.isArray(s))return["expr",s]
let n,i,r
if(s[0]===Ft.Helper)n=s[1],i=s[2],r=s[3]
else{if(s[0]!==Ft.Unknown)return["expr",s]
n=s[1],i=r=null}let a=this.names[n]
if(void 0===a&&this.missing){let e=(0,this.missing)(n,i,r,t)
return!1===e?["expr",s]:e}if(void 0!==a){let e=(0,this.funcs[a])(n,i,r,t)
return!1===e?["expr",s]:e}return["expr",s]}}S(new Gt,new Yt)
class Wt{constructor(e,t,s,n){this.statements=e,this.containingLayout=t,this.options=s,this.symbolTable=n,this.compiled=null}static topLevel(e,t){return new Wt(e.statements,{block:e,referrer:t.referrer},t,{referrer:t.referrer,hasEval:e.hasEval,symbols:e.symbols})}compile(){let e=this.compiled
if(null!==e)return e
let t=this.options,s=this.statements,n=this.containingLayout,i=n.referrer,r=t.program,a=t.lookup,l=t.macros,o=t.asPartial,h=new(0,t.Builder)(r,a,i,l,n,o)
for(let c=0;c<s.length;c++)E(s[c],h)
let u=h.commit(r.heap)
return this.compiled=u}}class Xt{constructor(e){this.builder=e}static(e,t){let s=t[0],n=t[1],i=t[2],r=t[3],a=this.builder,l=a.lookup
if(null!==e){let t=l.getCapabilities(e)
if(!1===t.dynamicLayout){let o=l.getLayout(e)
a.pushComponentDefinition(e),a.invokeStaticComponent(t,o,null,s,n,!1,i,r)}else a.pushComponentDefinition(e),a.invokeComponent(null,s,n,!1,i,r)}}}class Kt{constructor(e){this.buffer=e,this.typePos=0,this.size=0}encode(e,...t){if(e>255)throw new Error(`Opcode type over 8-bits. Got ${e}.`)
this.buffer.push(e|t.length<<8),this.typePos=this.buffer.length-1,t.forEach(e=>{if(e>65535)throw new Error(`Operand over 16-bits. Got ${e}.`)
this.buffer.push(e)}),this.size=this.buffer.length}compact(e){return String.fromCharCode(...e)}patch(e,t){if(-1!==this.buffer[e+1])throw new Error("Trying to patch operand in populated slot instead of a reserved slot.")
this.buffer[e+1]=t}}class qt{constructor(){this.labels=h(),this.targets=[]}label(e,t){this.labels[e]=t}target(e,t,s){this.targets.push({at:e,Target:t,target:s})}patch(e){let t=this.targets,s=this.labels
for(let i=0;i<t.length;i++){var n=t[i]
let r=n.at,a=s[n.target]-r
e.patch(r,a)}}}class Jt{constructor(e,t,s,n,i,r){this.program=e,this.lookup=t,this.referrer=s,this.macros=n,this.containingLayout=i,this.asPartial=r,this.encoder=new Kt([]),this.labelsStack=new Xe,this.isComponentAttrs=!1,this.component=new Xt(this),this.constants=e.constants}get pos(){return this.encoder.typePos}get nextPos(){return this.encoder.size}upvars(e){return a(e)}reserve(e,t=1){let s=[]
for(let n=0;n<t;n++)s[n]=-1
this.push(e,...s)}push(e,...t){this.encoder.encode(e,...t)}commit(e){this.push(20)
let t=this.encoder.buffer,s=e.malloc()
for(let n=0;n<t.length;n++)e.push(t[n])
return e.finishMalloc(s,this.containingLayout.block.symbols.length),s}setComponentAttrs(e){this.isComponentAttrs=e}pushArgs(e,t){let s=this.constants.stringArray(e)
this.push(61,s,t)}get labels(){return this.labelsStack.current}startLabels(){this.labelsStack.push(new qt)}stopLabels(){this.labelsStack.pop().patch(this.encoder)}pushComponentDefinition(e){this.push(59,this.constants.handle(e))}pushDynamicComponentManager(e){this.push(60,this.constants.serializable(e))}prepareArgs(e){this.push(63,e)}createComponent(e,t,s){let n=(!0===t?1:0)|(!0===s?1:0)<<1
this.push(64,n,e)}registerComponentDestructor(e){this.push(65,e)}beginComponentTransaction(){this.push(71)}commitComponentTransaction(){this.push(72)}putComponentOperations(){this.push(66)}getComponentSelf(e){this.push(67,e)}getComponentTagName(e){this.push(68,e)}getComponentLayout(e){this.push(69,e)}invokeComponentLayout(){this.push(70)}didCreateElement(e){this.push(73,e)}didRenderLayout(e){this.push(74,e)}invokePartial(e,t,s){let n=this.constants.serializable(e),i=this.constants.stringArray(t),r=this.constants.array(s)
this.push(75,n,i,r)}resolveMaybeLocal(e){this.push(76,this.string(e))}debugger(e,t){this.push(77,this.constants.stringArray(e),this.constants.array(t))}dynamicContent(e){this.push(24,e?1:0)}text(e){this.push(22,this.constants.string(e))}openPrimitiveElement(e){this.push(25,this.constants.string(e))}openElementWithOperations(e){this.push(26,this.constants.string(e))}openDynamicElement(){this.push(27)}flushElement(){this.push(31)}closeElement(){this.push(32)}staticAttr(e,t,s){let n=this.constants.string(e),i=t?this.constants.string(t):0
if(this.isComponentAttrs)this.pushPrimitiveReference(s),this.push(30,n,1,i)
else{let e=this.constants.string(s)
this.push(28,n,e,i)}}dynamicAttr(e,t,s){let n=this.constants.string(e),i=t?this.constants.string(t):0
this.isComponentAttrs?this.push(30,n,!0===s?1:0,i):this.push(29,n,!0===s?1:0,i)}comment(e){let t=this.constants.string(e)
this.push(23,t)}modifier(e,t,s){this.pushFrame(),this.compileArgs(t,s,null,!0),this.push(33,this.constants.handle(e)),this.popFrame()}putIterator(){this.push(55)}enterList(e){this.reserve(53),this.labels.target(this.pos,53,e)}exitList(){this.push(54)}iterate(e){this.reserve(56),this.labels.target(this.pos,56,e)}setVariable(e){this.push(2,e)}setBlock(e){this.push(3,e)}getVariable(e){this.push(4,e)}getProperty(e){this.push(5,this.string(e))}getBlock(e){this.push(6,e)}hasBlock(e){this.push(7,e)}hasBlockParams(e){this.getBlock(e),this.resolveBlock(),this.push(8)}concat(e){this.push(9,e)}load(e){this.push(15,e)}fetch(e){this.push(16,e)}dup(e=nt.sp,t=0){return this.push(13,e,t)}pop(e=1){return this.push(14,e)}pushRemoteElement(){this.push(34)}popRemoteElement(){this.push(35)}label(e){this.labels.label(e,this.nextPos)}pushRootScope(e,t){this.push(17,e,t?1:0)}pushChildScope(){this.push(18)}popScope(){this.push(19)}returnTo(e){this.reserve(21),this.labels.target(this.pos,21,e)}pushDynamicScope(){this.push(37)}popDynamicScope(){this.push(38)}primitive(e){let t,s=0
switch(typeof e){case"number":e%1==0?e>-1?t=e:(t=this.negative(e),s=4):(t=this.float(e),s=1)
break
case"string":t=this.string(e),s=2
break
case"boolean":t=0|e,s=3
break
case"object":t=2,s=3
break
case"undefined":t=3,s=3
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(11,t<<3|s)}float(e){return this.constants.float(e)}negative(e){return this.constants.negative(e)}pushPrimitiveReference(e){this.primitive(e),this.primitiveReference()}primitiveReference(){this.push(12)}helper(e,t,s){this.pushFrame(),this.compileArgs(t,s,null,!0),this.push(1,this.constants.handle(e)),this.popFrame(),this.fetch(nt.v0)}bindDynamicScope(e){this.push(36,this.names(e))}enter(e){this.push(50,e)}exit(){this.push(51)}return(){this.push(20)}pushFrame(){this.push(48)}popFrame(){this.push(49)}invokeVirtual(){this.push(42)}invokeYield(){this.push(44)}toBoolean(){this.push(52)}jump(e){this.reserve(45),this.labels.target(this.pos,45,e)}jumpIf(e){this.reserve(46),this.labels.target(this.pos,46,e)}jumpUnless(e){this.reserve(47),this.labels.target(this.pos,47,e)}string(e){return this.constants.string(e)}names(e){let t=[]
for(let s=0;s<e.length;s++){let n=e[s]
t[s]=this.constants.string(n)}return this.constants.array(t)}symbols(e){return this.constants.array(e)}inlineBlock(e){let t=e.parameters,s=e.statements,n={parameters:t,referrer:this.containingLayout.referrer},i={program:this.program,macros:this.macros,Builder:this.constructor,lookup:this.lookup,asPartial:this.asPartial,referrer:this.referrer}
return new Wt(s,this.containingLayout,i,n)}evalSymbols(){let e=this.containingLayout.block
return e.hasEval?e.symbols:null}compileParams(e){if(!e)return 0
for(let t=0;t<e.length;t++)w(e[t],this)
return e.length}compileArgs(e,t,s,n){s&&(this.pushYieldableBlock(s.main),this.pushYieldableBlock(s.else),this.pushYieldableBlock(s.attrs))
let i=this.compileParams(e)<<4
n&&(i|=8),s&&(i|=7)
let r=Ze
if(t){r=t[0]
let e=t[1]
for(let t=0;t<e.length;t++)w(e[t],this)}this.pushArgs(r,i)}invokeStaticBlock(e,t=0){let s=e.symbolTable.parameters,n=s.length,i=Math.min(t,n)
if(this.pushFrame(),i){this.pushChildScope()
for(let e=0;e<i;e++)this.dup(nt.fp,t-e),this.setVariable(s[e])}this.pushBlock(e),this.resolveBlock(),this.invokeVirtual(),i&&this.popScope(),this.popFrame()}guardedAppend(e,t){this.startLabels(),this.pushFrame(),this.returnTo("END"),w(e,this),this.dup(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(this.referrer),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.dynamicContent(t),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()}yield(e,t){this.compileArgs(t,null,null,!1),this.getBlock(e),this.resolveBlock(),this.invokeYield(),this.popScope(),this.popFrame()}invokeComponent(e,t,s,n,i,r=null,a){this.fetch(nt.s0),this.dup(nt.sp,1),this.load(nt.s0),this.pushFrame()
let l={main:i,else:r,attrs:e}
this.compileArgs(t,s,l,n),this.prepareArgs(nt.s0),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(nt.s0,null!==i,null!==r),this.registerComponentDestructor(nt.s0),this.getComponentSelf(nt.s0),a?(this.pushSymbolTable(a.symbolTable),this.pushLayout(a),this.resolveLayout()):this.getComponentLayout(nt.s0),this.invokeComponentLayout(),this.didRenderLayout(nt.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(nt.s0)}invokeStaticComponent(e,t,s,i,r,a,l,o=null){let h=t.symbolTable
if(h.hasEval||e.prepareArgs)return void this.invokeComponent(s,i,r,a,l,o,t)
this.fetch(nt.s0),this.dup(nt.sp,1),this.load(nt.s0)
let u=h.symbols
e.createArgs&&(this.pushFrame(),this.compileArgs(null,r,null,a)),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(nt.s0,null!==l,null!==o),e.createArgs&&this.popFrame(),this.registerComponentDestructor(nt.s0)
let c=[]
this.getComponentSelf(nt.s0),c.push({symbol:0,isBlock:!1})
for(let d=0;d<u.length;d++){let e=u[d]
switch(e.charAt(0)){case"&":let t=null
if("&default"===e)t=l
else if("&inverse"===e)t=o
else{if("&attrs"!==e)throw n()
t=s}t?(this.pushYieldableBlock(t),c.push({symbol:d+1,isBlock:!0})):(this.pushYieldableBlock(null),c.push({symbol:d+1,isBlock:!0}))
break
case"@":if(!r)break
let i=r[0],h=r[1],u=e
a&&(u=e.slice(1))
let p=i.indexOf(u);-1!==p&&(w(h[p],this),c.push({symbol:d+1,isBlock:!1}))}}this.pushRootScope(u.length+1,!!(l||o||s))
for(let n=c.length-1;n>=0;n--){var p=c[n]
let e=p.symbol
p.isBlock?this.setBlock(e):this.setVariable(e)}this.pushFrame(),this.invokeStatic(t),this.didRenderLayout(nt.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(nt.s0)}dynamicComponent(e,t,s,n,i,r=null){this.startLabels(),this.pushFrame(),this.returnTo("END"),w(e,this),this.dup(),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(this.referrer),this.invokeComponent(null,t,s,n,i,r),this.label("ELSE"),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()}isComponent(){this.push(57)}curryComponent(e,t,s,n){let i=this.referrer
this.pushFrame(),this.compileArgs(t,s,null,n),w(e,this),this.push(58,this.constants.serializable(i)),this.popFrame(),this.fetch(nt.v0)}pushSymbolTable(e){if(e){let t=this.constants.table(e)
this.push(41,t)}else this.primitive(null)}pushBlockScope(){this.push(40)}pushYieldableBlock(e){this.pushSymbolTable(e&&e.symbolTable),this.pushBlockScope(),this.pushBlock(e)}template(e){return e?this.inlineBlock(e):null}}class Zt extends Jt{pushBlock(e){e?this.pushOther(e):this.primitive(null)}resolveBlock(){this.push(39)}pushLayout(e){e?this.pushOther(e):this.primitive(null)}resolveLayout(){this.push(39)}invokeStatic(e){this.pushOther(e),this.push(39),this.push(42)}pushOther(e){this.push(10,this.other(e))}other(e){return this.constants.other(e)}}class Qt{constructor(){this.stack=null,this.positional=new es,this.named=new ss,this.blocks=new is}setup(e,t,s,n,i){this.stack=e
let r=this.named,a=t.length,l=e.sp-a+1
r.setup(e,l,a,t,i)
let o=l-n
this.positional.setup(e,o,n)
let h=this.blocks,u=s.length,c=o-3*u
h.setup(e,c,u,s)}get tag(){return d([this.positional,this.named])}get base(){return this.blocks.base}get length(){return this.positional.length+this.named.length+3*this.blocks.length}at(e){return this.positional.at(e)}realloc(e){if(e>0){let t=this.positional,s=this.named,n=this.stack,i=t.base+e
for(let e=t.length+s.length-1;e>=0;e--)n.set(n.get(e,t.base),e,i)
t.base+=e,s.base+=e,n.sp+=e}}capture(){let e=0===this.positional.length?ls:this.positional.capture(),t=0===this.named.length?as:this.named.capture()
return{tag:this.tag,length:this.length,positional:e,named:t}}clear(){let e=this.stack,t=this.length
e.pop(t)}}class es{constructor(){this.base=0,this.length=0,this.stack=null,this._tag=null,this._references=null}setup(e,t,s){this.stack=e,this.base=t,this.length=s,0===s?(this._tag=ot,this._references=Ze):(this._tag=null,this._references=null)}get tag(){let e=this._tag
return e||(e=this._tag=d(this.references)),e}at(e){let t=this.base,s=this.length,n=this.stack
return e<0||e>=s?Nt:n.get(e,t)}capture(){return new ts(this.tag,this.references)}prepend(e){let t=e.length
if(t>0){let s=this.base,n=this.length,i=this.stack
this.base=s-=t,this.length=n+t
for(let r=0;r<t;r++)i.set(e.at(r),r,s)
this._tag=null,this._references=null}}get references(){let e=this._references
if(!e){let t=this.stack,s=this.base,n=this.length
e=this._references=t.slice(s,s+n)}return e}}class ts{constructor(e,t,s=t.length){this.tag=e,this.references=t,this.length=s}static empty(){return new ts(ot,Ze,0)}at(e){return this.references[e]}value(){return this.references.map(this.valueOf)}get(e){let t=this.references,s=this.length
if("length"===e)return Ct.create(s)
{let n=parseInt(e,10)
return n<0||n>=s?Nt:t[n]}}valueOf(e){return e.value()}}class ss{constructor(){this.base=0,this.length=0,this._tag=null,this._references=null,this._names=Ze,this._atNames=Ze}setup(e,t,s,n,i){this.stack=e,this.base=t,this.length=s,0===s?(this._tag=ot,this._references=Ze,this._names=Ze,this._atNames=Ze):(this._tag=null,this._references=null,i?(this._names=n,this._atNames=null):(this._names=null,this._atNames=n))}get tag(){return d(this.references)}get names(){let e=this._names
return e||(e=this._names=this._atNames.map(this.toSyntheticName)),e}get atNames(){let e=this._atNames
return e||(e=this._atNames=this._names.map(this.toAtName)),e}has(e){return-1!==this.names.indexOf(e)}get(e,t=!0){let s=this.base,n=this.stack,i=(t?this.names:this.atNames).indexOf(e)
return-1===i?Nt:n.get(i,s)}capture(){return new ns(this.tag,this.names,this.references)}merge(e){let t=e.length
if(t>0){let s=this.names,n=this.length,i=this.stack,r=e.names
for(let a=0;a<t;a++){let t=r[a];-1===s.indexOf(t)&&(n=s.push(t),i.push(e.references[a]))}this.length=n,this._tag=null,this._references=null,this._names=s,this._atNames=null}}get references(){let e=this._references
if(!e){let t=this.base,s=this.length,n=this.stack
e=this._references=n.slice(t,t+s)}return e}toSyntheticName(e){return e.slice(1)}toAtName(e){return`@${e}`}}class ns{constructor(e,t,s){this.tag=e,this.names=t,this.references=s,this.length=t.length,this._map=null}get map(){let e=this._map
if(!e){let t=this.names,s=this.references
e=this._map=h()
for(let n=0;n<t.length;n++)e[t[n]]=s[n]}return e}has(e){return-1!==this.names.indexOf(e)}get(e){let t=this.names,s=this.references,n=t.indexOf(e)
return-1===n?Nt:s[n]}value(){let e=this.names,t=this.references,s=h()
for(let n=0;n<e.length;n++)s[e[n]]=t[n].value()
return s}}class is{constructor(){this.internalValues=null,this.internalTag=null,this.names=Ze,this.length=0,this.base=0}setup(e,t,s,n){this.stack=e,this.names=n,this.base=t,this.length=s,0===s?(this.internalTag=ot,this.internalValues=Ze):(this.internalTag=null,this.internalValues=null)}get values(){let e=this.internalValues
if(!e){let t=this.base,s=this.length,n=this.stack
e=this.internalValues=n.slice(t,t+3*s)}return e}has(e){return-1!==this.names.indexOf(e)}get(e){let t=this.base,s=this.stack,n=this.names,i=n.indexOf(e)
if(-1===n.indexOf(e))return null
let r=s.get(3*i,t),a=s.get(3*i+1,t),l=s.get(3*i+2,t)
return null===l?null:[l,a,r]}capture(){return new rs(this.names,this.values)}}class rs{constructor(e,t){this.names=e,this.values=t,this.length=e.length}has(e){return-1!==this.names.indexOf(e)}get(e){let t=this.names.indexOf(e)
return-1===t?null:[this.values[3*t+2],this.values[3*t+1],this.values[3*t]]}}const as=new ns(ot,Ze,Ze),ls=new ts(ot,Ze),os={tag:ot,length:0,positional:ls,named:as},hs="CURRIED COMPONENT DEFINITION [id=6f00feb9-a0ef-4547-99ea-ac328f80acea]"
class us{constructor(e,t){this.inner=e,this.args=t,this[hs]=!0}unwrap(e){e.realloc(this.offset)
let t=this
for(;;){var s=t
let n=s.args,i=s.inner
if(n&&(e.positional.prepend(n.positional),e.named.merge(n.named)),!_(i))return i
t=i}}get offset(){let e=this.inner,t=this.args,s=t?t.positional.length:0
return _(e)?s+e.offset:s}}class cs extends Bt{static create(e){return new cs(e)}toBool(e){return _(e)}}et.add(24,(e,{op1:t})=>{let s,n=e.stack.pop(),i=n.value()
s=t?e.elements().appendTrustingDynamicContent(i):e.elements().appendCautiousDynamicContent(i),c(n)||e.updateWith(new ps(n,s))})
class ps extends st{constructor(e,t){super(),this.reference=e,this.content=t,this.tag=e.tag}evaluate(e){let t=this.content,s=this.reference
t.update(e.env,s.value())}}et.add(18,e=>e.pushChildScope()),et.add(19,e=>e.popScope()),et.add(37,e=>e.pushDynamicScope()),et.add(38,e=>e.popDynamicScope()),et.add(10,(e,{op1:t})=>{e.stack.push(e.constants.getOther(t))}),et.add(11,(e,{op1:t})=>{let s=e.stack,n=t>>3
switch(7&t){case 0:s.push(n)
break
case 1:s.push(e.constants.getFloat(n))
break
case 2:s.push(e.constants.getString(n))
break
case 3:switch(n){case 0:s.push(!1)
break
case 1:s.push(!0)
break
case 2:s.push(null)
break
case 3:s.push(void 0)}break
case 4:s.push(e.constants.getNegative(n))}}),et.add(12,e=>{let t=e.stack
t.push(Ct.create(t.pop()))}),et.add(13,(e,{op1:t,op2:s})=>{let n=e.fetchValue(t)-s
e.stack.dup(n)}),et.add(14,(e,{op1:t})=>{e.stack.pop(t)}),et.add(15,(e,{op1:t})=>{e.load(t)}),et.add(16,(e,{op1:t})=>{e.fetch(t)}),et.add(36,(e,{op1:t})=>{let s=e.constants.getArray(t)
e.bindDynamicScope(s)}),et.add(48,e=>{e.pushFrame()}),et.add(49,e=>{e.popFrame()}),et.add(50,(e,{op1:t})=>{e.enter(t)}),et.add(51,e=>{e.exit()}),et.add(41,(e,{op1:t})=>{e.stack.push(e.constants.getSymbolTable(t))}),et.add(40,e=>{e.stack.push(e.scope())}),et.add(39,e=>{let t=e.stack,s=t.pop()
t.push(s?s.compile():null)}),et.add(42,e=>{e.call(e.stack.pop())}),et.add(43,(e,{op1:t})=>{e.call(t)}),et.add(44,e=>{let t=e.stack,s=t.pop(),n=t.pop(),i=t.pop(),r=t.pop()
if(null===i)return e.pushFrame(),void e.pushScope(n)
let a=n
{let e=i.parameters,t=e.length
if(t>0){a=a.child()
for(let s=0;s<t;s++)a.bindSymbol(e[s],r.at(s))}}e.pushFrame(),e.pushScope(a),e.call(s)}),et.add(45,(e,{op1:t})=>{e.goto(t)}),et.add(46,(e,{op1:t})=>{let s=e.stack.pop()
if(c(s))s.value()&&e.goto(t)
else{let n=new yt(s)
n.peek()&&e.goto(t),e.updateWith(new ds(n))}}),et.add(47,(e,{op1:t})=>{let s=e.stack.pop()
if(c(s))s.value()||e.goto(t)
else{let n=new yt(s)
n.peek()||e.goto(t),e.updateWith(new ds(n))}}),et.add(20,e=>{e.return()}),et.add(21,(e,{op1:t})=>{e.returnTo(t)}),et.add(52,e=>{let t=e.env,s=e.stack
s.push(t.toConditionalReference(s.pop()))})
class ds extends st{constructor(e){super(),this.type="assert",this.tag=e.tag,this.cache=e}evaluate(e){y(this.cache.revalidate())&&e.throw()}}class ms extends st{constructor(e,t){super(),this.target=t,this.type="jump-if-not-modified",this.tag=e,this.lastRevision=e.value()}evaluate(e){let t=this.tag,s=this.target,n=this.lastRevision
!e.alwaysRevalidate&&t.validate(n)&&e.goto(s)}didModify(){this.lastRevision=this.tag.value()}}class fs extends st{constructor(e){super(),this.target=e,this.type="did-modify",this.tag=ot}evaluate(){this.target.didModify()}}class gs{constructor(e){this.tag=ot,this.type="label",this.label=null,this.prev=null,this.next=null,l(this),this.label=e}evaluate(){}inspect(){return`${this.label} [${this._guid}]`}}et.add(22,(e,{op1:t})=>{e.elements().appendText(e.constants.getString(t))}),et.add(26,(e,{op1:t})=>{let s=e.constants.getString(t)
e.elements().openElement(s)}),et.add(23,(e,{op1:t})=>{e.elements().appendComment(e.constants.getString(t))}),et.add(25,(e,{op1:t})=>{e.elements().openElement(e.constants.getString(t))}),et.add(27,e=>{let t=e.stack.pop().value()
e.elements().openElement(t)}),et.add(34,e=>{let t,s,n=e.stack.pop(),i=e.stack.pop(),r=e.stack.pop().value()
if(c(n))t=n.value()
else{let s=new yt(n)
t=s.peek(),e.updateWith(new ds(s))}if(c(i))s=i.value()
else{let t=new yt(i)
s=t.peek(),e.updateWith(new ds(t))}e.elements().pushRemoteElement(t,r,s)}),et.add(35,e=>{e.elements().popRemoteElement()}),et.add(31,e=>{let t=e.fetchValue(nt.t0)
t&&(t.flush(e),e.loadValue(nt.t0,null)),e.elements().flushElement()}),et.add(32,e=>{e.elements().closeElement()}),et.add(33,(e,{op1:t})=>{let s=e.constants.resolveHandle(t),n=e.stack.pop()
var i=e.elements()
let r=i.constructing,a=i.updateOperations,l=e.dynamicScope(),o=s.create(r,n,l,a)
e.env.scheduleInstallModifier(o,s)
let h=s.getDestructor(o)
h&&e.newDestroyable(h)
let u=s.getTag(o)
p(u)||e.updateWith(new ys(u,s,o))})
class ys extends st{constructor(e,t,s){super(),this.tag=e,this.manager=t,this.modifier=s,this.type="update-modifier",this.lastUpdated=e.value()}evaluate(e){let t=this.manager,s=this.modifier,n=this.tag,i=this.lastUpdated
n.validate(i)||(e.env.scheduleUpdateModifier(s,t),this.lastUpdated=n.value())}}et.add(28,(e,{op1:t,op2:s,op3:n})=>{let i=e.constants.getString(t),r=e.constants.getString(s),a=n?e.constants.getString(n):null
e.elements().setStaticAttribute(i,r,a)}),et.add(29,(e,{op1:t,op2:s,op3:n})=>{let i=e.constants.getString(t),r=e.stack.pop(),a=r.value(),l=n?e.constants.getString(n):null,o=e.elements().setDynamicAttribute(i,a,!!s,l)
c(r)||e.updateWith(new bs(r,o))})
class bs extends st{constructor(e,t){super(),this.reference=e,this.attribute=t,this.type="patch-element",this.tag=e.tag,this.lastRevision=this.tag.value()}evaluate(e){let t=this.attribute,s=this.reference,n=this.tag
n.validate(this.lastRevision)||(this.lastRevision=n.value(),t.update(s.value(),e.env))}}class vs{constructor(e,t,s,n){this.inner=e,this.resolver=t,this.meta=s,this.args=n,this.tag=e.tag,this.lastValue=null,this.lastDefinition=null}value(){let e=this.inner,t=this.lastValue,s=e.value()
if(s===t)return this.lastDefinition
let n=null
return _(s)?n=s:"string"==typeof s&&s&&(n=C(this.resolver,s,this.meta)),n=this.curry(n),this.lastValue=s,this.lastDefinition=n,n}get(){return Nt}curry(e){let t=this.args
return!t&&_(e)?e:e?new us(e,t):null}}class ks{constructor(e){this.list=e,this.tag=d(e),this.list=e}value(){let e=[],t=this.list
for(let s=0;s<t.length;s++){let n=N(t[s].value())
n&&e.push(n)}return 0===e.length?null:e.join(" ")}}const ws=new Qt
et.add(57,e=>{let t=e.stack,s=t.pop()
t.push(cs.create(s))}),et.add(58,(e,{op1:t})=>{let s=e.stack,n=s.pop(),i=s.pop(),r=null
i.length&&(r=i.capture())
let a=e.constants.getSerializable(t),l=e.constants.resolver
e.loadValue(nt.v0,new vs(n,l,a,r))}),et.add(59,(e,{op1:t})=>{let s=e.constants.resolveHandle(t),n=s.manager
e.stack.push({definition:s,manager:n,state:null})}),et.add(60,(e,{op1:t})=>{let s,i=e.stack,r=i.pop().value()
if("string"==typeof r){let n=e.constants
s=C(e.constants.resolver,r,n.getSerializable(t))}else{if(!_(r))throw n()
s=r}i.push({definition:s,manager:null,state:null})}),et.add(61,(e,{op1:t,op2:s})=>{let n=e.stack,i=e.constants.getStringArray(t),r=s>>4,a=8&s,l=[]
4&s&&l.push("main"),2&s&&l.push("else"),1&s&&l.push("attrs"),ws.setup(n,i,l,r,!!a),n.push(ws)}),et.add(63,(e,{op1:t})=>{let s,n=e.stack,i=e.fetchValue(t),r=i.definition
_(r)?(s=n.pop(),r=i.definition=r.unwrap(s)):s=n.pop()
var a=r
let l=a.manager,o=a.state
if(i.manager=r.manager,!0!==l.getCapabilities(o).prepareArgs)return void n.push(s)
let h=s.blocks.values,u=s.blocks.names,c=l.prepareArgs(o,s)
if(c){s.clear()
for(let e=0;e<h.length;e++)n.push(h[e])
let e=c.positional,t=c.named,i=e.length
for(let s=0;s<i;s++)n.push(e[s])
let r=Object.keys(t)
for(let s=0;s<r.length;s++)n.push(t[r[s]])
s.setup(n,r,u,i,!0)}n.push(s)}),et.add(64,(e,{op1:t,op2:s})=>{let n=e.dynamicScope(),i=e.fetchValue(s),r=i.definition,a=i.manager,l=1&t,o=null
a.getCapabilities(r.state).createArgs&&(o=e.stack.peek())
let h=a.create(e.env,r.state,o,n,e.getSelf(),!!l)
i.state=h
let u=a.getTag(h)
p(u)||e.updateWith(new Es(u,h,a,n))}),et.add(65,(e,{op1:t})=>{var s=e.fetchValue(t)
let n=s.manager,i=s.state,r=n.getDestructor(i)
r&&e.newDestroyable(r)}),et.add(71,e=>{e.beginCacheGroup(),e.elements().pushSimpleBlock()}),et.add(66,e=>{e.loadValue(nt.t0,new Ss)}),et.add(30,(e,{op1:t,op2:s,op3:n})=>{let i=e.constants.getString(t),r=e.stack.pop(),a=n?e.constants.getString(n):null
e.fetchValue(nt.t0).setAttribute(i,r,!!s,a)})
class Ss{constructor(){this.attributes=h(),this.classes=[]}setAttribute(e,t,s,n){let i={value:t,namespace:n,trusting:s}
"class"===e&&this.classes.push(t),this.attributes[e]=i}flush(e){for(let t in this.attributes){let s=this.attributes[t],n=s.value,i=s.namespace,r=s.trusting
"class"===t&&(n=new ks(this.classes))
let a=e.elements().setDynamicAttribute(t,n.value(),r,i)
c(n)||e.updateWith(new bs(n,a))}}}et.add(73,(e,{op1:t})=>{var s=e.fetchValue(t)
let n=s.definition,i=s.state,r=n.manager,a=e.fetchValue(nt.t0)
r.didCreateElement(i,e.elements().expectConstructing("DidCreateElementOpcode#evaluate"),a)}),et.add(67,(e,{op1:t})=>{var s=e.fetchValue(t)
let n=s.definition,i=s.state,r=n.manager
e.stack.push(r.getSelf(i))}),et.add(68,(e,{op1:t})=>{var s=e.fetchValue(t)
let n=s.definition,i=s.state,r=n.manager
e.stack.push(r.getTagName(i))}),et.add(69,(e,{op1:t})=>{let s,i=e.fetchValue(t),r=i.manager,a=i.definition,l=e.constants.resolver,o=e.stack,h=i.state,u=a.state
if(x(u,r))s=r.getLayout(u,l)
else{if(!A(u,r))throw n()
s=r.getDynamicLayout(h,l)}o.push(s.symbolTable),o.push(s.handle)}),et.add(70,e=>{let t=e.stack,s=t.pop()
var n=t.pop()
let i=n.symbols,r=n.hasEval
{let n=e.pushRootScope(i.length+1,!0)
n.bindSelf(t.pop())
let a=e.stack.pop(),l=null,o=-1
r&&(o=i.indexOf("$eval")+1,l=h())
let u=a.named.atNames
for(let e=u.length-1;e>=0;e--){let t=u[e],s=i.indexOf(u[e]),o=a.named.get(t,!1);-1!==s&&n.bindSymbol(s+1,o),r&&(l[t]=o)}let c=(e,t)=>{let s=i.indexOf(e),r=p.get(t);-1!==s&&n.bindBlock(s+1,r),l&&(l[e]=r)},p=a.blocks
c("&attrs","attrs"),c("&inverse","else"),c("&default","main"),l&&n.bindEvalScope(l),e.call(s)}}),et.add(74,(e,{op1:t})=>{var s=e.fetchValue(t)
let n=s.manager,i=s.state,r=e.elements().popBlock()
n.didRenderLayout(i,r),e.env.didCreate(i,n),e.updateWith(new _s(n,i,r))}),et.add(72,e=>{e.commitCacheGroup()})
class Es extends st{constructor(e,t,s,n){super(),this.tag=e,this.component=t,this.manager=s,this.dynamicScope=n,this.type="update-component"}evaluate(e){let t=this.component,s=this.manager,n=this.dynamicScope
s.update(t,n)}}class _s extends st{constructor(e,t,s){super(),this.manager=e,this.component=t,this.bounds=s,this.type="did-update-layout",this.tag=ot}evaluate(e){let t=this.manager,s=this.component,n=this.bounds
t.didUpdateLayout(s,n),e.env.didUpdate(s,t)}}let Cs=function(e,t){console.info("Use `context`, and `get(<path>)` to debug this template."),t("this")}
class xs{constructor(e,t,s){this.scope=e,this.locals=h()
for(let n=0;n<s.length;n++){let i=s[n],r=t[i-1],a=e.getSymbol(i)
this.locals[r]=a}}get(e){let t=this.scope,s=this.locals,n=e.split(".")
var i=e.split(".")
let r,a=i[0],l=i.slice(1),o=t.getEvalScope()
return"this"===a?r=t.getSelf():s[a]?r=s[a]:0===a.indexOf("@")&&o[a]?r=o[a]:(r=this.scope.getSelf(),l=n),l.reduce((e,t)=>e.get(t),r)}}et.add(77,(e,{op1:t,op2:s})=>{let n=e.constants.getStringArray(t),i=e.constants.getArray(s),r=new xs(e.scope(),n,i)
Cs(e.getSelf().value(),e=>r.get(e).value())}),et.add(75,(e,{op1:t,op2:s,op3:n})=>{let i=e.constants,r=e.constants.resolver,a=e.stack.pop().value(),l=i.getSerializable(t),o=i.getStringArray(s),u=i.getArray(n),c=r.lookupPartial(a,l)
var p=r.resolve(c).getPartial()
let d=p.symbolTable,m=p.handle
{let t=d.symbols,s=e.scope(),n=e.pushRootScope(t.length,!1)
n.bindCallerScope(s.getCallerScope()),n.bindEvalScope(s.getEvalScope()),n.bindSelf(s.getSelf())
let i=h()
for(let e=0;e<u.length;e++){let t=u[e],n=o[t-1],r=s.getSymbol(t)
i[n]=r}let r=s.getEvalScope()
for(let e=0;e<t.length;e++){let s=e+1,i=r[t[e]]
void 0!==i&&n.bind(s,i)}n.bindPartialMap(i),e.pushFrame(),e.call(m)}})
class As{constructor(e){this.tag=e.tag,this.artifacts=e}value(){return!this.artifacts.isEmpty()}}et.add(55,e=>{let t=e.stack,s=t.pop(),n=t.pop(),i=e.env.iterableFor(s,n.value()),r=new St(i)
t.push(r),t.push(new As(r.artifacts))}),et.add(53,(e,{op1:t})=>{e.enterList(t)}),et.add(54,e=>{e.exitList()}),et.add(56,(e,{op1:t})=>{let s=e.stack.peek().next()
if(s){let t=e.iterate(s.memo,s.value)
e.enterItem(s.key,t)}else e.goto(t)})
class Ns{constructor(e,t){this.element=e,this.nextSibling=t}}class Ls{constructor(e,t,s){this.parentNode=e,this.first=t,this.last=s}parentElement(){return this.parentNode}firstNode(){return this.first}lastNode(){return this.last}}class Ts{constructor(e,t){this.parentNode=e,this.node=t}parentElement(){return this.parentNode}firstNode(){return this.node}lastNode(){return this.node}}const Os="http://www.w3.org/2000/svg",Bs="http://www.w3.org/2000/svg",Ds={foreignObject:1,desc:1,title:1},Ms=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(e=>Ms[e]=1)
let js="undefined"==typeof document?null:document
class Is{constructor(e){this.document=e,this.setupUselessElement()}setupUselessElement(){this.uselessElement=this.document.createElement("div")}createElement(e,t){let s,n
if(t?(s=t.namespaceURI===Bs||"svg"===e,n=Ds[t.tagName]):(s="svg"===e,n=!1),s&&!n){if(Ms[e])throw new Error(`Cannot create a ${e} inside an SVG context`)
return this.document.createElementNS(Bs,e)}return this.document.createElement(e)}insertBefore(e,t,s){e.insertBefore(t,s)}insertHTMLBefore(e,t,s){return G(this.uselessElement,e,t,s)}createTextNode(e){return this.document.createTextNode(e)}createComment(e){return this.document.createComment(e)}}var Rs;(function(e){class t extends Is{createElementNS(e,t){return this.document.createElementNS(e,t)}setAttribute(e,t,s,n=null){n?e.setAttributeNS(n,t,s):e.setAttribute(t,s)}}e.TreeConstruction=t
let s=t
s=z(js,s),s=P(js,s,Bs),e.DOMTreeConstruction=s})(Rs||(Rs={}))
class Fs extends Is{constructor(e){super(e),this.document=e,this.namespace=null}setAttribute(e,t,s){e.setAttribute(t,s)}removeAttribute(e,t){e.removeAttribute(t)}insertAfter(e,t,s){this.insertBefore(e,t,s.nextSibling)}}let Ps=Fs
Ps=z(js,Ps)
var Vs=Ps=P(js,Ps,Bs)
const Hs=Rs.DOMTreeConstruction,zs=["javascript:","vbscript:"],Us=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],$s=["EMBED"],Gs=["href","src","background","action"],Ys=["src"],Ws={INPUT:{form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}}
class Xs{constructor(e){this.attribute=e}}class Ks extends Xs{set(e,t,s){let n=ie(t)
if(null!==n){var i=this.attribute
let t=i.name,s=i.namespace
e.__setAttribute(t,n,s)}}update(e,t){let s=ie(e)
var n=this.attribute
let i=n.element,r=n.name
null===s?i.removeAttribute(r):i.setAttribute(r,s)}}class qs extends Xs{set(e,t,s){if(null!==t&&void 0!==t){let s=this.attribute.name
this.value=t,e.__setProperty(s,t)}}update(e,t){var s=this.attribute
let n=s.element,i=s.name
this.value!==e&&(n[i]=this.value=e,null!==e&&void 0!==e||this.removeAttribute())}removeAttribute(){var e=this.attribute
let t=e.element,s=e.name,n=e.namespace
n?t.removeAttributeNS(n,s):t.removeAttribute(s)}}class Js extends qs{set(e,t,s){var n=this.attribute
let i=q(s,n.element,n.name,t)
super.set(e,i,s)}update(e,t){var s=this.attribute
let n=q(t,s.element,s.name,e)
super.update(n,t)}}class Zs extends Ks{set(e,t,s){var n=this.attribute
let i=q(s,n.element,n.name,t)
super.set(e,i,s)}update(e,t){var s=this.attribute
let n=q(t,s.element,s.name,e)
super.update(n,t)}}class Qs extends qs{set(e,t){e.__setProperty("value",N(t))}update(e){let t=this.attribute.element,s=t.value,n=N(e)
s!==n&&(t.value=n)}}class en extends qs{set(e,t){null!==t&&void 0!==t&&!1!==t&&e.__setProperty("selected",!0)}update(e){let t=this.attribute.element
t.selected=!!e}}class tn{constructor(e,t,s,n){this.slots=e,this.callerScope=t,this.evalScope=s,this.partialMap=n}static root(e,t=0){let s=new Array(t+1)
for(let n=0;n<=t;n++)s[n]=Nt
return new tn(s,null,null,null).init({self:e})}static sized(e=0){let t=new Array(e+1)
for(let s=0;s<=e;s++)t[s]=Nt
return new tn(t,null,null,null)}init({self:e}){return this.slots[0]=e,this}getSelf(){return this.get(0)}getSymbol(e){return this.get(e)}getBlock(e){return this.get(e)}getEvalScope(){return this.evalScope}getPartialMap(){return this.partialMap}bind(e,t){this.set(e,t)}bindSelf(e){this.set(0,e)}bindSymbol(e,t){this.set(e,t)}bindBlock(e,t){this.set(e,t)}bindEvalScope(e){this.evalScope=e}bindPartialMap(e){this.partialMap=e}bindCallerScope(e){this.callerScope=e}getCallerScope(){return this.callerScope}child(){return new tn(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)}get(e){if(e>=this.slots.length)throw new RangeError(`BUG: cannot get $${e} from scope; length=${this.slots.length}`)
return this.slots[e]}set(e,t){if(e>=this.slots.length)throw new RangeError(`BUG: cannot get $${e} from scope; length=${this.slots.length}`)
this.slots[e]=t}}class sn{constructor(){this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}didCreate(e,t){this.createdComponents.push(e),this.createdManagers.push(t)}didUpdate(e,t){this.updatedComponents.push(e),this.updatedManagers.push(t)}scheduleInstallModifier(e,t){this.scheduledInstallManagers.push(t),this.scheduledInstallModifiers.push(e)}scheduleUpdateModifier(e,t){this.scheduledUpdateModifierManagers.push(t),this.scheduledUpdateModifiers.push(e)}didDestroy(e){this.destructors.push(e)}commit(){let e=this.createdComponents,t=this.createdManagers
for(let h=0;h<e.length;h++){let s=e[h]
t[h].didCreate(s)}let s=this.updatedComponents,n=this.updatedManagers
for(let h=0;h<s.length;h++){let e=s[h]
n[h].didUpdate(e)}let i=this.destructors
for(let h=0;h<i.length;h++)i[h].destroy()
let r=this.scheduledInstallManagers,a=this.scheduledInstallModifiers
for(let h=0;h<r.length;h++){let e=r[h],t=a[h]
e.install(t)}let l=this.scheduledUpdateModifierManagers,o=this.scheduledUpdateModifiers
for(let h=0;h<l.length;h++){let e=l[h],t=o[h]
e.update(t)}}}class nn{constructor({appendOperations:e,updateOperations:t}){this._transaction=null,this.appendOperations=e,this.updateOperations=t}toConditionalReference(e){return new Bt(e)}getAppendOperations(){return this.appendOperations}getDOM(){return this.updateOperations}getIdentity(e){return o(e)+""}begin(){this._transaction=new sn}get transaction(){return this._transaction}didCreate(e,t){this.transaction.didCreate(e,t)}didUpdate(e,t){this.transaction.didUpdate(e,t)}scheduleInstallModifier(e,t){this.transaction.scheduleInstallModifier(e,t)}scheduleUpdateModifier(e,t){this.transaction.scheduleUpdateModifier(e,t)}didDestroy(e){this.transaction.didDestroy(e)}commit(){let e=this.transaction
this._transaction=null,e.commit()}attributeFor(e,t,s,n=null){return Q(e,t)}}class rn{constructor(e){this.trusting=e}retry(e,t){let s=this.bounds,n=s.parentElement(),i=F(s),r=dn.forInitialRender(e,{element:n,nextSibling:i})
return this.trusting?r.__appendTrustingDynamicContent(t):r.__appendCautiousDynamicContent(t)}}class an{constructor(e){this.inner=e,this.bounds=e.bounds}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}update(e,t){let s=this.inner=this.inner.update(e,t)
return this.bounds=s.bounds,this}}class ln extends rn{constructor(e,t,s){super(s),this.bounds=e,this.lastValue=t}update(e,t){let s=this.lastValue
if(t===s)return this
if(B(t)||O(t))return this.retry(e,t)
let n
return(n=T(t)?"":M(t)?t:String(t))!==s&&(this.bounds.firstNode().nodeValue=this.lastValue=n),this}}class on extends rn{constructor(e,t,s){super(s),this.bounds=e,this.lastValue=t}update(e,t){return t===this.lastValue?this:this.retry(e,t)}}class hn extends rn{constructor(e,t,s){super(s),this.bounds=e,this.lastValue=t}update(e,t){let s=this.lastValue
return t===s?this:O(t)&&t.toHTML()===s.toHTML()?(this.lastValue=t,this):this.retry(e,t)}}class un extends rn{constructor(e,t,s){super(s),this.bounds=e,this.lastValue=t}update(e,t){let s=this.lastValue
return t===s?this:L(t)===s?this:this.retry(e,t)}}class cn{constructor(e){this.node=e}firstNode(){return this.node}}class pn{constructor(e){this.node=e}lastNode(){return this.node}}class dn{constructor(e,t,s){this.constructing=null,this.operations=null,this.cursorStack=new Xe,this.blockStack=new Xe,this.pushElement(t,s),this.env=e,this.dom=e.getAppendOperations(),this.updateOperations=e.getDOM()}static forInitialRender(e,t){let s=new this(e,t.element,t.nextSibling)
return s.pushSimpleBlock(),s}static resume(e,t,s){let n=new this(e,t.parentElement(),s)
return n.pushSimpleBlock(),n.pushBlockTracker(t),n}get element(){return this.cursorStack.current.element}get nextSibling(){return this.cursorStack.current.nextSibling}expectConstructing(e){return this.constructing}block(){return this.blockStack.current}popElement(){this.cursorStack.pop(),this.cursorStack.current}pushSimpleBlock(){return this.pushBlockTracker(new mn(this.element))}pushUpdatableBlock(){return this.pushBlockTracker(new gn(this.element))}pushBlockList(e){return this.pushBlockTracker(new yn(this.element,e))}pushBlockTracker(e,t=!1){let s=this.blockStack.current
return null!==s&&(s.newDestroyable(e),t||s.didAppendBounds(e)),this.__openBlock(),this.blockStack.push(e),e}popBlock(){return this.block().finalize(this),this.__closeBlock(),this.blockStack.pop()}__openBlock(){}__closeBlock(){}openElement(e){let t=this.__openElement(e)
return this.constructing=t,t}__openElement(e){return this.dom.createElement(e,this.element)}flushElement(){let e=this.element,t=this.constructing
this.__flushElement(e,t),this.constructing=null,this.operations=null,this.pushElement(t,null),this.didOpenElement(t)}__flushElement(e,t){this.dom.insertBefore(e,t,this.nextSibling)}closeElement(){this.willCloseElement(),this.popElement()}pushRemoteElement(e,t,s=null){this.__pushRemoteElement(e,t,s)}__pushRemoteElement(e,t,s){this.pushElement(e,s)
let n=new fn(e)
this.pushBlockTracker(n,!0)}popRemoteElement(){this.popBlock(),this.popElement()}pushElement(e,t){this.cursorStack.push(new Ns(e,t))}didAddDestroyable(e){this.block().newDestroyable(e)}didAppendBounds(e){return this.block().didAppendBounds(e),e}didAppendNode(e){return this.block().didAppendNode(e),e}didOpenElement(e){return this.block().openElement(e),e}willCloseElement(){this.block().closeElement()}appendText(e){return this.didAppendNode(this.__appendText(e))}__appendText(e){let t=this.dom,s=this.element,n=this.nextSibling,i=t.createTextNode(e)
return t.insertBefore(s,i,n),i}__appendNode(e){return this.dom.insertBefore(this.element,e,this.nextSibling),e}__appendFragment(e){let t=e.firstChild
if(t){let s=j(this.element,t,e.lastChild)
return this.dom.insertBefore(this.element,e,this.nextSibling),s}return I(this.element,this.__appendComment(""))}__appendHTML(e){return this.dom.insertHTMLBefore(this.element,this.nextSibling,e)}appendTrustingDynamicContent(e){let t=new an(this.__appendTrustingDynamicContent(e))
return this.didAppendBounds(t),t}__appendTrustingDynamicContent(e){if(M(e))return this.trustedContent(e)
if(T(e))return this.trustedContent("")
if(O(e))return this.trustedContent(e.toHTML())
if(D(e)){let t=this.__appendFragment(e)
return new on(t,e,!0)}if(B(e)){let t=this.__appendNode(e)
return new on(I(this.element,t),t,!0)}return this.trustedContent(String(e))}appendCautiousDynamicContent(e){let t=new an(this.__appendCautiousDynamicContent(e))
return this.didAppendBounds(t.bounds),t}__appendCautiousDynamicContent(e){if(M(e))return this.untrustedContent(e)
if(T(e))return this.untrustedContent("")
if(D(e)){let t=this.__appendFragment(e)
return new on(t,e,!1)}if(B(e)){let t=this.__appendNode(e)
return new on(I(this.element,t),t,!1)}if(O(e)){let t=e.toHTML(),s=this.__appendHTML(t)
return new hn(s,e,!1)}return this.untrustedContent(String(e))}trustedContent(e){let t=this.__appendHTML(e)
return new un(t,e,!0)}untrustedContent(e){let t=this.__appendText(e),s=I(this.element,t)
return new ln(s,e,!1)}appendComment(e){return this.didAppendNode(this.__appendComment(e))}__appendComment(e){let t=this.dom,s=this.element,n=this.nextSibling,i=t.createComment(e)
return t.insertBefore(s,i,n),i}__setAttribute(e,t,s){this.dom.setAttribute(this.constructing,e,t,s)}__setProperty(e,t){this.constructing[e]=t}setStaticAttribute(e,t,s){this.__setAttribute(e,t,s)}setDynamicAttribute(e,t,s,n){let i=this.constructing,r=new(this.env.attributeFor(i,e,s,n))({element:i,name:e,namespace:n||null})
return r.set(this,t,this.env),r}}class mn{constructor(e){this.parent=e,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}destroy(){let e=this.destroyables
if(e&&e.length)for(let t=0;t<e.length;t++)e[t].destroy()}parentElement(){return this.parent}firstNode(){return this.first&&this.first.firstNode()}lastNode(){return this.last&&this.last.lastNode()}openElement(e){this.didAppendNode(e),this.nesting++}closeElement(){this.nesting--}didAppendNode(e){0===this.nesting&&(this.first||(this.first=new cn(e)),this.last=new pn(e))}didAppendBounds(e){0===this.nesting&&(this.first||(this.first=e),this.last=e)}newDestroyable(e){this.destroyables=this.destroyables||[],this.destroyables.push(e)}finalize(e){this.first||e.appendComment("")}}class fn extends mn{destroy(){super.destroy(),F(this)}}class gn extends mn{reset(e){let t=this.destroyables
if(t&&t.length)for(let n=0;n<t.length;n++)e.didDestroy(t[n])
let s=F(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,s}}class yn{constructor(e,t){this.parent=e,this.boundList=t,this.parent=e,this.boundList=t}destroy(){this.boundList.forEachNode(e=>e.destroy())}parentElement(){return this.parent}firstNode(){let e=this.boundList.head()
return e&&e.firstNode()}lastNode(){let e=this.boundList.tail()
return e&&e.lastNode()}openElement(e){}closeElement(){}didAppendNode(e){}didAppendBounds(e){}newDestroyable(e){}finalize(e){}}class bn{constructor(e,t,{alwaysRevalidate:s=!1}){this.frameStack=new Xe,this.env=e,this.constants=t.constants,this.dom=e.getDOM(),this.alwaysRevalidate=s}execute(e,t){let s=this.frameStack
for(this.try(e,t);;){if(s.isEmpty())break
let e=this.frame.nextStatement()
null!==e?e.evaluate(this):this.frameStack.pop()}}get frame(){return this.frameStack.current}goto(e){this.frame.goto(e)}try(e,t){this.frameStack.push(new En(this,e,t))}throw(){this.frame.handleException(),this.frameStack.pop()}}class vn extends st{constructor(e,t,s,n){super(),this.start=e,this.state=t,this.type="block",this.next=null,this.prev=null,this.children=n,this.bounds=s}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}evaluate(e){e.try(this.children,null)}destroy(){this.bounds.destroy()}didDestroy(){this.state.env.didDestroy(this.bounds)}}class kn extends vn{constructor(e,t,s,n){super(e,t,s,n),this.type="try",this.tag=this._tag=ft.create(ot)}didInitializeChildren(){this._tag.inner.update(m(this.children))}evaluate(e){e.try(this.children,this)}handleException(){let e=this.state,t=this.bounds,s=this.children,n=this.start,i=this.prev,r=this.next
s.clear()
let a=dn.resume(e.env,t,t.reset(e.env)),l=xn.resume(e,a),o=new qe
l.execute(n,t=>{t.stack=Cn.restore(e.stack),t.updatingOpcodeStack.push(o),t.updateWith(this),t.updatingOpcodeStack.push(s)}),this.prev=i,this.next=r}}class wn{constructor(e,t){this.opcode=e,this.marker=t,this.didInsert=!1,this.didDelete=!1,this.map=e.map,this.updating=e.children}insert(e,t,s,n){let i=this.map,r=this.opcode,a=this.updating,l=null,o=null
l=n?(o=i[n]).bounds.firstNode():this.marker
let h=r.vmForInsertion(l),u=null,c=r.start
h.execute(c,n=>{i[e]=u=n.iterate(s,t),n.updatingOpcodeStack.push(new qe),n.updateWith(u),n.updatingOpcodeStack.push(u.children)}),a.insertBefore(u,o),this.didInsert=!0}retain(e,t,s){}move(e,t,s,n){let i=this.map,r=this.updating,a=i[e],l=i[n]||null
n?R(a,l.firstNode()):R(a,this.marker),r.remove(a),r.insertBefore(a,l)}delete(e){let t=this.map,s=t[e]
s.didDestroy(),F(s),this.updating.remove(s),delete t[e],this.didDelete=!0}done(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)}}class Sn extends vn{constructor(e,t,s,n,i){super(e,t,s,n),this.type="list-block",this.map=h(),this.lastIterated=1,this.artifacts=i
let r=this._tag=ft.create(ot)
this.tag=f([i.tag,r])}didInitializeChildren(e=!0){this.lastIterated=this.artifacts.tag.value(),e&&this._tag.inner.update(m(this.children))}evaluate(e){let t=this.artifacts,s=this.lastIterated
if(!t.tag.validate(s)){let s=this.bounds,n=e.dom,i=n.createComment("")
n.insertAfter(s.parentElement(),i,s.lastNode())
let r=new wn(this,i)
new _t({target:r,artifacts:t}).sync(),this.parentElement().removeChild(i)}super.evaluate(e)}vmForInsertion(e){let t=this.bounds,s=this.state,n=dn.forInitialRender(s.env,{element:t.parentElement(),nextSibling:e})
return xn.resume(s,n)}}class En{constructor(e,t,s){this.vm=e,this.ops=t,this.exceptionHandler=s,this.vm=e,this.ops=t,this.current=t.head()}goto(e){this.current=e}nextStatement(){let e=this.current,t=this.ops
return e&&(this.current=t.nextNode(e)),e}handleException(){this.exceptionHandler&&this.exceptionHandler.handleException()}}class _n{constructor(e,t,s,n){this.env=e,this.program=t,this.updating=s,this.bounds=n}rerender({alwaysRevalidate:e=!1}={alwaysRevalidate:!1}){let t=this.env,s=this.program,n=this.updating
new bn(t,s,{alwaysRevalidate:e}).execute(n,this)}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}handleException(){throw"this should never happen"}destroy(){this.bounds.destroy(),F(this.bounds)}}class Cn{constructor(e,t,s){this.stack=e,this.fp=t,this.sp=s}static empty(){return new this([],0,-1)}static restore(e){return new this(e.slice(),0,e.length-1)}push(e){this.stack[++this.sp]=e}dup(e=this.sp){this.push(this.stack[e])}pop(e=1){let t=this.stack[this.sp]
return this.sp-=e,t}peek(e=0){return this.stack[this.sp-e]}get(e,t=this.fp){return this.stack[t+e]}set(e,t,s=this.fp){this.stack[s+t]=e}slice(e,t){return this.stack.slice(e,t)}capture(e){let t=this.sp+1,s=t-e
return this.stack.slice(s,t)}reset(){this.stack.length=0}toArray(){return this.stack.slice(this.fp,this.sp+1)}}class xn{constructor(e,t,s,n,i){this.program=e,this.env=t,this.elementStack=i,this.dynamicScopeStack=new Xe,this.scopeStack=new Xe,this.updatingOpcodeStack=new Xe,this.cacheGroups=new Xe,this.listBlockStack=new Xe,this.stack=Cn.empty(),this._pc=-1,this.ra=-1,this.currentOpSize=0,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.v0=null,this.env=t,this.heap=e.heap,this.constants=e.constants,this.elementStack=i,this.scopeStack.push(s),this.dynamicScopeStack.push(n)}get pc(){return this._pc}set pc(e){this._pc=e}get fp(){return this.stack.fp}set fp(e){this.stack.fp=e}get sp(){return this.stack.sp}set sp(e){this.stack.sp=e}fetch(e){this.stack.push(this[nt[e]])}load(e){this[nt[e]]=this.stack.pop()}fetchValue(e){return this[nt[e]]}loadValue(e,t){this[nt[e]]=t}pushFrame(){this.stack.push(this.ra),this.stack.push(this.fp),this.fp=this.sp-1}popFrame(){this.sp=this.fp-1,this.ra=this.stack.get(0),this.fp=this.stack.get(1)}goto(e){let t=this.pc+e-this.currentOpSize
this.pc=t}call(e){this.ra=this.pc,this.pc=this.heap.getaddr(e)}returnTo(e){let t=this.pc+e-this.currentOpSize
this.ra=t}return(){this.pc=this.ra}static initial(e,t,s,n,i,r,a){let l=e.heap.scopesizeof(a),o=tn.root(s,l),h=new xn(e,t,o,i,r)
return h.pc=h.heap.getaddr(a),h.updatingOpcodeStack.push(new qe),h}static resume({program:e,env:t,scope:s,dynamicScope:n},i){return new xn(e,t,s,n,i)}capture(e){return{env:this.env,program:this.program,dynamicScope:this.dynamicScope(),scope:this.scope(),stack:this.stack.capture(e)}}beginCacheGroup(){this.cacheGroups.push(this.updating().tail())}commitCacheGroup(){let e=new gs("END"),t=this.updating(),s=this.cacheGroups.pop(),n=s?t.nextNode(s):t.head(),i=t.tail(),r=m(new Je(n,i)),a=new ms(r,e)
t.insertBefore(a,n),t.append(new fs(a)),t.append(e)}enter(e){let t=new qe,s=this.capture(e),n=this.elements().pushUpdatableBlock(),i=new kn(this.heap.gethandle(this.pc),s,n,t)
this.didEnter(i)}iterate(e,t){let s=this.stack
s.push(t),s.push(e)
let n=this.capture(2),i=this.elements().pushUpdatableBlock()
return new kn(this.heap.gethandle(this.pc),n,i,new qe)}enterItem(e,t){this.listBlock().map[e]=t,this.didEnter(t)}enterList(e){let t=new qe,s=this.capture(0),n=this.elements().pushBlockList(t),i=this.stack.peek().artifacts,r=this.pc+e-this.currentOpSize,a=this.heap.gethandle(r),l=new Sn(a,s,n,t,i)
this.listBlockStack.push(l),this.didEnter(l)}didEnter(e){this.updateWith(e),this.updatingOpcodeStack.push(e.children)}exit(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()}exitList(){this.exit(),this.listBlockStack.pop()}updateWith(e){this.updating().append(e)}listBlock(){return this.listBlockStack.current}updating(){return this.updatingOpcodeStack.current}elements(){return this.elementStack}scope(){return this.scopeStack.current}dynamicScope(){return this.dynamicScopeStack.current}pushChildScope(){this.scopeStack.push(this.scope().child())}pushDynamicScope(){let e=this.dynamicScope().child()
return this.dynamicScopeStack.push(e),e}pushRootScope(e,t){let s=tn.sized(e)
return t&&s.bindCallerScope(this.scope()),this.scopeStack.push(s),s}pushScope(e){this.scopeStack.push(e)}popScope(){this.scopeStack.pop()}popDynamicScope(){this.dynamicScopeStack.pop()}newDestroyable(e){this.elements().didAddDestroyable(e)}getSelf(){return this.scope().getSelf()}referenceForSymbol(e){return this.scope().getSymbol(e)}execute(e,t){this.pc=this.heap.getaddr(e),t&&t(this)
let s
for(;;)if((s=this.next()).done)break
return s.value}next(){let e,t=this.env,s=this.program,n=this.updatingOpcodeStack,i=this.elementStack,r=this.nextStatement()
return null!==r?(et.evaluate(this,r,r.type),e={done:!1,value:null}):(this.stack.reset(),e={done:!0,value:new _n(t,s,n.pop(),i.popBlock())}),e}nextStatement(){let e=this.pc,t=this.program
if(-1===e)return null
let s=this.program.opcode(e).size,n=this.currentOpSize=s
return this.pc+=n,t.opcode(e)}bindDynamicScope(e){let t=this.dynamicScope()
for(let s=e.length-1;s>=0;s--){let n=this.constants.getString(e[s])
t.set(n,this.stack.pop())}}}class An{constructor(e){this.vm=e}next(){return this.vm.next()}}let Nn=0
class Ln{constructor(e,t){this.options=e,this.parsedLayout=t,this.layout=null,this.partial=null
let s=t.block
this.symbols=s.symbols,this.hasEval=s.hasEval,this.statements=s.statements,this.referrer=t.referrer,this.id=t.id||`client-${Nn++}`}renderLayout(e){let t=e.env,s=e.self,n=e.dynamicScope
var i=e.args
let r=void 0===i?os:i,a=e.builder,l=this.asLayout().compile(),o=xn.initial(this.options.program,t,s,r,n,a,l)
return new An(o)}asLayout(){return this.layout?this.layout:this.layout=le(this.parsedLayout,this.options,!1)}asPartial(){return this.partial?this.partial:this.partial=le(this.parsedLayout,this.options,!0)}}class Tn{constructor(e,t){this.cache=oe,this.inner=null,this.chains=null,this.lastParentValue=oe,this._guid=0,this.tag=ht,this.parent=e,this.property=t}value(){let e=this.lastParentValue,t=this.property,s=this.inner,n=this._parentValue()
if(null===n||void 0===n)return this.cache=void 0
if(e===n)s=this.inner
else{let e="object"==typeof n?Fn.for(n).referenceTypeFor(t):Pn
s=this.inner=new e(n,t,this)}return this.cache=s.value()}get(e){let t=this._getChains()
return e in t?t[e]:t[e]=new Tn(this,e)}label(){return"[reference Direct]"}_getChains(){return this.chains?this.chains:this.chains=h()}_parentValue(){let e=this.parent.value()
return this.lastParentValue=e,e}}class On{constructor(e){this.chains=h(),this.tag=ht,this.object=e}value(){return this.object}update(e){this.object=e}get(e){let t=this.chains
return e in t?t[e]:t[e]=new Tn(this,e)}chainFor(e){let t=this.chains
return e in t?t[e]:null}path(e){return this.referenceFromParts(e.split("."))}referenceFromParts(e){return e.reduce((e,t)=>e.get(t),this)}label(){return"[reference Root]"}}const Bn={destroy(){}}
class Dn{constructor(e,t){this.tag=ht,this.parent=e}chain(){return Bn}notify(){}value(){return this.parent[this.property]}get(e){return new Dn(this.parent[this.property],e)}}class Mn{constructor(e){this.tag=ht,this.inner=e}update(e){this.inner=e}chain(){return Bn}notify(){}value(){return this.inner}referenceFromParts(e){throw new Error("Not implemented")}chainFor(e){throw new Error("Not implemented")}get(e){return new Dn(this.inner,e)}}class jn{constructor(e){this.object=e}root(){return new Mn(this.object)}}const In="df8be4c8-4e89-44e2-a8f9-550c8dacdca7",Rn=Object.hasOwnProperty
class Fn{constructor(e,{RootReferenceFactory:t,DefaultPathReferenceFactory:s}){this.references=null,this.slots=null,this.referenceTypes=null,this.propertyMetadata=null,this.object=e,this.RootReferenceFactory=t||On,this.DefaultPathReferenceFactory=s||Pn}static for(e){if(null===e||void 0===e)return new Fn(e,{})
if(Rn.call(e,"_meta")&&e._meta)return e._meta
if(!Object.isExtensible(e))return new jn(e)
let t=Fn
return e.constructor&&e.constructor[In]?t=e.constructor[In].InstanceMetaConstructor:e[In]&&(t=e[In].InstanceMetaConstructor),e._meta=new t(e,{})}static exists(e){return"object"==typeof e&&e._meta}static metadataForProperty(e){return null}addReference(e,t){let s=this.references=this.references||h();(s[e]=s[e]||new We).add(t)}addReferenceTypeFor(e,t){this.referenceTypes=this.referenceTypes||h(),this.referenceTypes[e]=t}referenceTypeFor(e){return this.referenceTypes?this.referenceTypes[e]||Pn:Pn}removeReference(e,t){this.references&&this.references[e].delete(t)}getReferenceTypes(){return this.referenceTypes=this.referenceTypes||h(),this.referenceTypes}referencesFor(e){return this.references?this.references[e]:null}getSlots(){return this.slots=this.slots||h()}root(){return this.rootCache=this.rootCache||new this.RootReferenceFactory(this.object)}}class Pn{constructor(e,t,s){this.tag=ht,this.object=e,this.property=t}value(){return this.object[this.property]}label(){return"[reference Property]"}}class Vn{constructor(e,t){this._registry=e,this._resolver=t}register(e,t,s){let n=this._toAbsoluteSpecifier(e)
this._registry.register(n,t,s)}registration(e){let t=this._toAbsoluteSpecifier(e)
return this._registry.registration(t)}unregister(e){let t=this._toAbsoluteSpecifier(e)
this._registry.unregister(t)}registerOption(e,t,s){let n=this._toAbsoluteOrTypeSpecifier(e)
this._registry.registerOption(n,t,s)}registeredOption(e,t){let s=this._toAbsoluteOrTypeSpecifier(e)
return this._registry.registeredOption(s,t)}registeredOptions(e){let t=this._toAbsoluteOrTypeSpecifier(e)
return this._registry.registeredOptions(t)}unregisterOption(e,t){let s=this._toAbsoluteOrTypeSpecifier(e)
this._registry.unregisterOption(s,t)}registerInjection(e,t,s){let n=this._toAbsoluteOrTypeSpecifier(e),i=this._toAbsoluteSpecifier(s)
this._registry.registerInjection(n,t,i)}registeredInjections(e){let t=this._toAbsoluteOrTypeSpecifier(e)
return this._registry.registeredInjections(t)}_toAbsoluteSpecifier(e,t){return this._resolver.identify(e,t)}_toAbsoluteOrTypeSpecifier(e){return he(e)?e:this._toAbsoluteSpecifier(e)}}class Hn{constructor(e=null){this.bucket=e?r({},e):{}}get(e){return this.bucket[e]}set(e,t){return this.bucket[e]=t}child(){return new Hn(this.bucket)}}class zn{constructor(e){this.tags=h(),this.computedPropertyTags=h(),this.trackedProperties=e?Object.create(e.trackedProperties):h(),this.trackedPropertyDependencies=e?Object.create(e.trackedPropertyDependencies):h()}tagFor(e){let t=this.tags[e]
if(t)return t
let s
return(s=this.trackedPropertyDependencies[e])?this.tags[e]=pe(this,e,s):this.tags[e]=ct.create()}dirtyableTagFor(e){let t
return this.trackedPropertyDependencies[e]?(t=this.computedPropertyTags[e])||(this.computedPropertyTags[e]=ct.create()):(t=this.tags[e])||(this.tags[e]=ct.create())}}let Un=Symbol("ember-object"),$n=Object.prototype.hasOwnProperty,Gn=function(){}
class Yn extends Error{constructor(e,t,s){super(s),this.target=e,this.key=t}static for(e,t){return new Yn(e,t,`The property '${t}' on ${e} was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.`)}}class Wn{constructor(e){this.debugName=null,this.__args__=null,Object.assign(this,e)}get element(){let e=this.bounds
return i(e&&e.firstNode===e.lastNode,`The 'element' property can only be accessed on components that contain a single root element in their template. Try using 'bounds' instead to access the first and last nodes.`),e.firstNode}get args(){return this.__args__}set args(e){this.__args__=e,de(this).dirtyableTagFor("args").inner.dirty()}static create(e){return new this(e)}didInsertElement(){}didUpdate(){}willDestroy(){}destroy(){this.willDestroy()}toString(){return`${this.debugName} component`}}const Xn={dynamicLayout:!1,dynamicTag:!0,prepareArgs:!1,createArgs:!0,attributeHook:!0,elementHook:!0}
class Kn{constructor(e,t,s,n){this.name=e,this.manager=t,this.ComponentClass=s,this.layout=n,this.state={name:e,capabilities:Xn,ComponentClass:s,layout:n}}toJSON(){return{GlimmerDebug:`<component-definition name="${this.name}">`}}}class qn{constructor(e){this._bounds=e}get firstNode(){return this._bounds.firstNode()}get lastNode(){return this._bounds.lastNode()}}class Jn{get(e){return ei.create(this,e)}}class Zn extends Jn{constructor(){super(...arguments),this._lastRevision=null,this._lastValue=null}value(){let e=this.tag,t=this._lastRevision,s=this._lastValue
return t&&e.validate(t)||(s=this._lastValue=this.compute(),this._lastRevision=e.value()),s}}class Qn extends vt{constructor(){super(...arguments),this.children=h()}get(e){let t=this.children[e]
return t||(t=this.children[e]=new ti(this.inner,e)),t}}class ei extends Zn{static create(e,t){return c(e)?new ti(e.value(),t):new si(e,t)}get(e){return new si(this,e)}}class ti extends ei{constructor(e,t){super(),this._parentValue=e,this._propertyKey=t,this.tag=ge(e,t)}compute(){return this._parentValue[this._propertyKey]}}class si extends ei{constructor(e,t){super()
let s=e.tag,n=ft.create(ot)
this._parentReference=e,this._parentObjectTag=n,this._propertyKey=t,this.tag=f([s,n])}compute(){let e=this._parentReference,t=this._parentObjectTag,s=this._propertyKey,n=e.value()
return t.inner.update(ge(n,s)),"string"==typeof n&&"length"===s?n.length:"object"==typeof n&&n?n[s]:void 0}}class ni extends Jn{constructor(e){super(),this.tag=ct.create(),this._value=e}value(){return this._value}update(e){e!==this._value&&(this.tag.inner.dirty(),this._value=e)}}class ii{constructor(e,s,n){let i=e.ComponentClass,r=e.name
this.args=s
let a={debugName:r,args:this.namedArgsSnapshot()}
t(a,n),this.component=i.create(a)}get tag(){return this.args.tag}namedArgsSnapshot(){return Object.freeze(this.args.named.value())}}class ri{static create(e){return new ri(e)}constructor(e){this.env=e.env}prepareArgs(e,t){return null}getCapabilities(e){return e.capabilities}getLayout({name:e,layout:t},s){return s.compileTemplate(e,t)}create(t,s,n,i,r,a){let l=e(this.env)
return new ii(s,n.capture(),l)}getSelf(e){return new Qn(e.component)}didCreateElement(e,t){}didRenderLayout(e,t){e.component.bounds=new qn(t)}didCreate(e){e&&e.component.didInsertElement()}getTag({tag:e}){return e}update(e,t){e.component.args=e.namedArgsSnapshot()}didUpdateLayout(){}didUpdate({component:e}){e.didUpdate()}getDestructor(e){return e.component}}class ai{constructor(e,t){this.position=0,this.array=e,this.keyFor=t}isEmpty(){return 0===this.array.length}next(){let e=this.position,t=this.array,s=this.keyFor
if(e>=t.length)return null
let n=t[e],i=s(n,e),r=e
return this.position++,{key:i,value:n,memo:r}}}class li{constructor(e,t,s){this.position=0,this.keys=e,this.values=t,this.keyFor=s}isEmpty(){return 0===this.keys.length}next(){let e=this.position,t=this.keys,s=this.values,n=this.keyFor
if(e>=t.length)return null
let i=s[e],r=t[e],a=n(i,r)
return this.position++,{key:a,value:i,memo:r}}}class oi{isEmpty(){return!0}next(){throw new Error(`Cannot call next() on an empty iterator`)}}const hi=new oi
class ui{constructor(e,t){this.tag=e.tag,this.ref=e,this.keyFor=t}iterate(){let e=this.ref,t=this.keyFor,s=e.value()
if(Array.isArray(s))return s.length>0?new ai(s,t):hi
if(void 0===s||null===s)return hi
if(void 0!==s.forEach){let e=[]
return s.forEach(function(t){e.push(t)}),e.length>0?new ai(e,t):hi}if("object"==typeof s){let e=Object.keys(s)
return e.length>0?new li(e,e.map(e=>s[e]),t):hi}throw new Error(`Don't know how to {{#each ${s}}}`)}valueReferenceFor(e){return new ni(e.value)}updateValueReference(e,t){e.update(t.value)}memoReferenceFor(e){return new ni(e.memo)}updateMemoReference(e,t){e.update(t.memo)}}const ci={}
class pi{constructor(){this.strings=[],this.arrays=[],this.tables=[],this.handles=[],this.serializables=[],this.resolved=[],this.floats=[],this.negatives=[]}float(e){let t=this.floats.indexOf(e)
return t>-1?t:this.floats.push(e)-1}negative(e){return this.negatives.push(e)-1}string(e){let t=this.strings.indexOf(e)
return t>-1?t:this.strings.push(e)-1}stringArray(e){let t=new Array(e.length)
for(let s=0;s<e.length;s++)t[s]=this.string(e[s])
return this.array(t)}array(e){let t=this.arrays.indexOf(e)
return t>-1?t:this.arrays.push(e)-1}table(e){let t=this.tables.indexOf(e)
return t>-1?t:this.tables.push(e)-1}handle(e){return this.resolved.push(ci),this.handles.push(e)}serializable(e){let t=this.serializables.indexOf(e)
return t>-1?t:this.serializables.push(e)-1}toPool(){return{strings:this.strings,arrays:this.arrays,tables:this.tables,handles:this.handles,serializables:this.serializables,floats:this.floats,negatives:this.negatives}}}class di extends pi{constructor(e,t){super(),this.resolver=e,t&&(this.strings=t.strings,this.arrays=t.arrays,this.tables=t.tables,this.handles=t.handles,this.serializables=t.serializables,this.floats=t.floats,this.negatives=t.negatives,this.resolved=this.handles.map(()=>ci))}getFloat(e){return this.floats[e]}getNegative(e){return this.negatives[e]}getString(e){return this.strings[e]}getStringArray(e){let t=this.getArray(e),s=new Array(t.length)
for(let n=0;n<t.length;n++){let e=t[n]
s[n]=this.getString(e)}return s}getArray(e){return this.arrays[e]}getSymbolTable(e){return this.tables[e]}resolveHandle(e){let t=e-1,s=this.resolved[t]
if(s===ci){let e=this.handles[t]
s=this.resolved[t]=this.resolver.resolve(e)}return s}getSerializable(e){return this.serializables[e]}}class mi extends di{constructor(){super(...arguments),this.others=[]}getOther(e){return this.others[e-1]}other(e){return this.others.push(e)}}class fi{constructor(e){this.heap=e,this.offset=0}get size(){return 1+((768&this.heap.getbyaddr(this.offset))>>8)}get type(){return 255&this.heap.getbyaddr(this.offset)}get op1(){return this.heap.getbyaddr(this.offset+1)}get op2(){return this.heap.getbyaddr(this.offset+2)}get op3(){return this.heap.getbyaddr(this.offset+3)}}var gi;(function(e){e[e.Allocated=0]="Allocated",e[e.Freed=1]="Freed",e[e.Purged=2]="Purged",e[e.Pointer=3]="Pointer"})(gi||(gi={}))
class yi{constructor(e){if(this.offset=0,this.handle=0,e){let t=e.buffer,s=e.table,n=e.handle
this.heap=new Uint16Array(t),this.table=s,this.offset=this.heap.length,this.handle=n}else this.heap=new Uint16Array(1048576),this.table=[]}push(e){this.heap[this.offset++]=e}getbyaddr(e){return this.heap[e]}setbyaddr(e,t){this.heap[e]=t}malloc(){this.table.push(this.offset,0,0,0)
let e=this.handle
return this.handle+=4,e}finishMalloc(e,t){let s=this.table[e],n=this.offset
this.table[e+1]=n-s,this.table[e+2]=t}size(){return this.offset}getaddr(e){return this.table[e]}gethandle(e){this.table.push(e,0,0,gi.Pointer)
let t=this.handle
return this.handle+=4,t}sizeof(e){return-1}scopesizeof(e){return this.table[e+2]}free(e){this.table[e+3]=1}compact(){let e=0,t=this.table,s=this.table.length,n=this.heap
for(let i=0;i<s;i+=4){let s=t[i],r=t[i+1],a=t[i+3]
if(a!==gi.Purged)if(a===gi.Freed)t[i+3]=gi.Purged,e+=r
else if(a===gi.Allocated){for(let t=s;t<=i+r;t++)n[t-e]=n[t]
t[i]=s-e}else a===gi.Pointer&&(t[i]=s-e)}this.offset=this.offset-e}capture(){let e=ye(this.heap,0,this.offset)
return{handle:this.handle,table:this.table,buffer:e}}}class bi{constructor(e=new pi,t=new yi){this.constants=e,this.heap=t,this._opcode=new fi(this.heap)}opcode(e){return this._opcode.offset=e,this._opcode}}class vi extends bi{}class ki{constructor(){this.byName=h(),this.byHandle=h()}hasName(e){return e in this.byName}getHandle(e){return this.byName[e]}hasHandle(e){return e in this.byHandle}getByHandle(e){return this.byHandle[e]}register(e,t,s){this.byHandle[e]=s,this.byName[t]=e}}class wi{constructor(e,t){this.tag=ht,this.parent=e,this.property=t}value(){return this.parent.value()[this.property]}get(e){return new wi(this,e)}}class Si{constructor(e,t){this.tag=ht,this.helper=e,this.args=t.capture()}value(){let e=this.helper,t=this.args
return e(t.positional.value(),t.named.value())}get(e){return new wi(this,e)}}class Ei{constructor(e){this.owner=e,this.handleLookup=[],this.cache={component:new ki,template:new ki,compiledTemplate:new ki,helper:new ki,manager:new ki,modifier:new ki}}setCompileOptions(e){this.templateOptions=e}lookup(e,t,s){return this.cache[e].hasName(t)?this.cache[e].getHandle(t):null}register(e,t,s){let n=this.cache[e],i=this.handleLookup.length
return this.handleLookup.push(n),this.cache[e].register(i,t,s),i}lookupModifier(e,t){let s=this.lookup("modifier",e)
if(null===s)throw new Error(`Modifier for ${e} not found.`)
return s}compileTemplate(e,t){if(!this.cache.compiledTemplate.hasName(e)){let s=this.resolve(t),n=s.block,i=s.meta,r=s.id,a=JSON.parse(n),l=new Ln(this.templateOptions,{id:r,block:a,referrer:i}).asLayout(),o={handle:l.compile(),symbolTable:l.symbolTable}
return this.register("compiledTemplate",e,o),o}let s=this.lookup("compiledTemplate",e)
return this.resolve(s)}registerHelper(e,t){return this.register("helper",e,(e,s)=>new Si(t,s))}registerInternalHelper(e,t){this.register("helper",e,t)}registerComponent(e,t,s,n){let i=this.registerTemplate(t,n),r=this.managerFor(i.meta.managerId),a=new Kn(e,r,s,i.handle)
return this.register("component",e,a)}lookupComponentHandle(e,t){return this.cache.component.hasName(e)||this.lookupComponent(e,t),this.lookup("component",e,t)}managerFor(e="main"){let t
if(this.cache.manager.hasName(e)){let t=this.cache.manager.getHandle(e)
return this.cache.manager.getByHandle(t)}{let s=this.owner.rootName
if(!(t=this.owner.lookup(`component-manager:/${s}/component-managers/${e}`)))throw new Error(`No component manager found for ID ${e}.`)
return this.register("manager",e,t),t}}registerTemplate(e,t){return{name:e,handle:this.register("template",e,t),meta:t.meta}}lookupComponent(e,t){let n
if(this.cache.component.hasName(e))n=this.lookup("component",e,t)
else{let i=s(this.identifyComponent(e,t),`Could not find the component '${e}'`),r=this.owner.lookup("template",i),a=this.owner.identify("component",i),l=null
l=void 0!==a?this.owner.factoryFor(a):{create:e=>Wn.create(e)},n=this.registerComponent(e,i,l,r)}return this.resolve(n)}lookupHelper(e,t){if(!this.cache.helper.hasName(e)){let s=this.owner,n=`helper:${e}`,i=t.specifier,r=s.identify(n,i)
if(void 0===r)return null
let a=this.owner.lookup(r,t.specifier)
return this.registerHelper(e,a)}return this.lookup("helper",e,t)}lookupPartial(e,t){throw new Error("Partials are not available in Glimmer applications.")}resolve(e){return this.handleLookup[e].getByHandle(e)}identifyComponent(e,t){let s=this.owner,n=`template:${e}`,i=t.specifier,r=s.identify(n,i)
if(void 0===r&&s.identify(`component:${e}`,i))throw new Error(`The component '${e}' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory.`)
return r}}var _i={id:"j7SGa6Pm",block:'{"symbols":["root"],"statements":[[4,"each",[[22,["roots"]]],[["key"],["id"]],{"statements":[[4,"in-element",[[21,1,["parent"]]],[["guid","nextSibling"],["%cursor:0%",[21,1,["nextSibling"]]]],{"statements":[[1,[26,"component",[[21,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/application/src/templates/main"}}
class Ci{constructor(e){this.resolver=e}getComponentDefinition(e){let t=this.resolver.resolve(e)
return i(!!t,`Couldn't find a template for ${e}`),t}getCapabilities(e){let t=this.getComponentDefinition(e),s=t.manager,n=t.state
return s.getCapabilities(n)}getLayout(e){let t=this.getComponentDefinition(e),s=t.manager.getLayout(t,this.resolver)
return{compile:()=>s.handle,symbolTable:s.symbolTable}}lookupHelper(e,t){return this.resolver.lookupHelper(e,t)}lookupModifier(e,t){return this.resolver.lookupModifier(e,t)}lookupComponentSpec(e,t){return this.resolver.lookupComponentHandle(e,t)}lookupPartial(e,t){return this.resolver.lookupPartial(e,t)}}class xi extends nn{static create(e={}){return e.document=e.document||self.document,e.appendOperations=e.appendOperations||new Hs(e.document),new xi(e)}constructor(s){super({appendOperations:s.appendOperations,updateOperations:new Vs(s.document||document)}),t(this,e(s))
let n=this.resolver=new Ei(e(this)),i=this.program=new vi(new mi(n)),r=new $t,a=new Ci(n)
this.compileOptions={program:i,macros:r,lookup:a,Builder:Zt},this.resolver.setCompileOptions(this.compileOptions),n.registerTemplate("main",_i),n.registerInternalHelper("action",be),n.registerHelper("if",e=>e[0]?e[1]:e[2]),this.uselessAnchor=s.document.createElement("a")}protocolForURL(e){return this.uselessAnchor.href=e,this.uselessAnchor.protocol}iterableFor(e,t){let s
if(!t)throw new Error("Must specify a key for #each")
switch(t){case"@index":s=((e,t)=>String(t))
break
case"@primitive":s=(e=>String(e))
break
default:s=(e=>e[t])}return new ui(e,s)}}class Ai{constructor(e){this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._notifiers=[],this.rootName=e.rootName,this.resolver=e.resolver,this.document=e.document||"undefined"!=typeof window&&window.document}renderComponent(e,t,s=null){this._roots.push({id:this._rootsIndex++,component:e,parent:t,nextSibling:s}),this.scheduleRerender()}boot(){this.initialize(),this.env=this.lookup(`environment:/${this.rootName}/main/main`),this._render()}scheduleRerender(){!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,requestAnimationFrame(()=>{this._scheduled=!1,this._rerender(),this._rendering=!1}))}initialize(){this.initRegistry(),this.initContainer()}registerInitializer(e){this._initializers.push(e)}initRegistry(){let e=this._registry=new Ue,t=new Vn(this._registry,this.resolver)
e.register(`environment:/${this.rootName}/main/main`,xi),e.registerOption("helper","instantiate",!1),e.registerOption("template","instantiate",!1),e.register(`document:/${this.rootName}/main/main`,this.document),e.registerOption("document","instantiate",!1),e.registerInjection("environment","document",`document:/${this.rootName}/main/main`),e.registerInjection("component-manager","env",`environment:/${this.rootName}/main/main`)
let s=this._initializers
for(let n=0;n<s.length;n++)s[n].initialize(t)
this._initialized=!0}initContainer(){this._container=new ze(this._registry,this.resolver),this._container.defaultInjections=(e=>{let s={}
return t(s,this),s})}get mainLayout(){return ae(_i).create(this.env.compileOptions)}get templateIterator(){let e=this.env,t=this.mainLayout,s=new On({roots:this._roots}),n=new Hn,i={element:this.document.body,nextSibling:null}
return t.renderLayout({env:e,self:s,dynamicScope:n,builder:re(e,i)})}_rerender(){let e=this.env,t=this._result
if(!t)throw new Error("Cannot re-render before initial render has completed")
try{e.begin(),t.rerender(),e.commit(),this._didRender()}catch(e){this._didError(e)}}_render(){let e=this.env,t=this.templateIterator
try{e.begin()
let s
do{s=t.next()}while(!s.done)
e.commit(),this._result=s.value,this._didRender()}catch(e){throw this._didError(e),e}}_didRender(){this._rendered=!0
let e=this._notifiers
this._notifiers=[],e.forEach(e=>e[0]())}_didError(e){let t=this._notifiers
this._notifiers=[],t.forEach(t=>t[1](e))}identify(e,t){return this.resolver.identify(e,t)}factoryFor(e,t){return this._container.factoryFor(this.identify(e,t))}lookup(e,t){return this._container.lookup(this.identify(e,t))}}class Ni{constructor(e,t){this.config=e,this.registry=t}identify(e,t){if(Se(e))return e
let s,n=xe(e)
if(t){let e=xe(t)
if(Ee(e)){Ae("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===n.rootName&&void 0===n.collection&&void 0===n.namespace),n.rootName=e.rootName,n.collection=e.collection
let t=this._definitiveCollection(n.type)
if(!n.name)return n.namespace=e.namespace,n.name=e.name,this._serializeAndVerify(n)
if(n.namespace=e.namespace?e.namespace+"/"+e.name:e.name,Ne(n)===t&&(s=this._serializeAndVerify(n)))return s
if(t&&(n.namespace+="/-"+t,s=this._serializeAndVerify(n)))return s
n.rootName=n.collection=n.namespace=void 0}else Ae('Referrer must either be "absolute" or include a `type` to determine the associated type',e.type),n.collection=this._definitiveCollection(e.type),Ae(`'${e.type}' does not have a definitive collection`,n.collection)}if(n.collection||(n.collection=this._definitiveCollection(n.type),Ae(`'${n.type}' does not have a definitive collection`,n.collection)),!n.rootName){if(n.rootName=this.config.app.rootName||"app",s=this._serializeAndVerify(n))return s
let e
n.namespace?(e=this.config.addons&&this.config.addons[n.namespace],n.rootName=n.namespace,n.namespace=void 0):(e=this.config.addons&&this.config.addons[n.name],n.rootName=n.name,n.name="main")}return(s=this._serializeAndVerify(n))?s:void 0}retrieve(e){return this.registry.get(e)}resolve(e,t){let s=this.identify(e,t)
if(s)return this.retrieve(s)}_definitiveCollection(e){let t=this.config.types[e]
return Ae(`'${e}' is not a recognized type`,t),t.definitiveCollection}_serializeAndVerify(e){let t=_e(e)
if(this.registry.has(t))return t}}class Li{constructor(e={}){this._entries=e}has(e){return e in this._entries}get(e){return this._entries[e]}}const Ti=window.docs
class Oi{constructor(){this.main=Ti}fetchRoot(){return{main:this.main.data.attributes,menu:Fe(this.main)}}fetchModule(e,t){let s=this.main.included.find(({id:t})=>t===e)
if(!s){const n=this.main.data.attributes.idMap[t][e]
s=this.main.included.find(({id:e})=>e===n)}return s?Oe(s):null}fetchProject(e){return Oe(this.main.included.find(({type:t,id:s})=>"projectdoc"===t&&s===e))}}const Bi="modules",Di="projects"
var Mi=function(e,t,s,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,n)
else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,s,a):i(t,s))||a)
return r>3&&a&&Object.defineProperty(t,s,a),a}
const ji="/api/".split("/").filter(e=>!!e).join("/"),Ii=ji?"/"+ji+"/":"/"
class Ri extends Wn{constructor(){super(...arguments),this.theCurrentView={title:"",componentName:null,project:null,module:null,notFound:!1},this.docsService=new Oi}loadFromUrl(e){const t=Ve(ji,e)
var s=Pe(t)
const n=s.moduleId,i=s.projectId
let r
r="/"!==t&&t?i?n?this.showModule(i,n):this.showProject(i):this.show404():this.showIndex(),this.hideNav(),document.title=r.title,window.history.pushState(r,r.title,`/${ji}${t}`)}bindInternalLinks(){document.addEventListener("click",e=>{const t=e.target
"A"===t.tagName&&t.classList.contains("internal-link")&&(e.preventDefault(),this.loadFromUrl(t.getAttribute("href")))})}showNav(){const e=document.getElementById("menu-container"),t=document.getElementById("menu-toggle")
e.classList.add("is-active"),t.classList.add("is-active")}hideNav(){const e=document.getElementById("menu-container"),t=document.getElementById("menu-toggle")
e.classList.remove("is-active"),t.classList.remove("is-active")}toggleNav(){document.getElementById("menu-toggle").classList.contains("is-active")?this.hideNav():this.showNav()}setupRouting(){window.onpopstate=(e=>{if(e.state){const t=this.deserializeState(e.state)
this.theCurrentView=t}}),this.bindInternalLinks(),this.loadFromUrl(window.location.pathname)}didInsertElement(){this.setupRouting()}get model(){return this.docsService.fetchRoot()}show404(){return this.theCurrentView={title:`${this.model.main.title} - 404`,module:null,project:null,componentName:null,notFound:!0},this.theCurrentView}showIndex(e){return e&&e.preventDefault(),this.theCurrentView={title:this.model.main.title,componentName:null,project:null,module:null,notFound:!1},this.theCurrentView}serializeView(e){const t=e.title,s=e.componentName,n=e.project,i=e.module
return{title:t,componentName:s,notFound:e.notFound,project:n.slug,module:i&&i.slug}}deserializeState(e){const t=e.title,s=e.componentName,n=e.project,i=e.module
return{title:t,componentName:s,notFound:e.notFound,project:this.docsService.fetchProject(n),module:this.docsService.fetchModule(i,n)}}showProject(e){let t=this.docsService.fetchProject(e)
if(!t)return this.show404()
this.theCurrentView={title:`${this.model.main.title} - ${t.name}`,componentName:"ProjectLanding",project:t,module:null}
this.theCurrentView.project.name,`${Ii}${Di}/${e}`
return this.serializeView(this.theCurrentView)}showModule(e,t){let s=this.docsService.fetchProject(e),n=this.docsService.fetchModule(t,e)
if(!s||!n)return this.show404()
this.theCurrentView={title:`${this.model.main.title} - ${n.name}`,componentName:"ModuleLanding",project:s,module:n}
this.theCurrentView.project.name,`${Ii}${Di}/${e}/${Bi}/${t}`
return this.serializeView(this.theCurrentView)}}Mi([function(...e){let t=e[0],s=e[1],n=e[2]
return"string"==typeof t?function(t,s,n){return ue(t,s,n,e)}:n?ue(t,s,n,[]):void ce(t,s)}],Ri.prototype,"theCurrentView",void 0)
class Fi extends Wn{get categories(){let e={},t=this.args.methods
for(let s of t){let t=s.category||"Other Methods",n=e[t]
n||(n=e[t]={name:t,slug:He(t),methods:[]}),console.log(s),n.methods.push(s)}return Object.keys(e).map(t=>e[t])}}var Pi={"template:/glimmer-api-docs/components/EntityLink":{id:"yA7T/htg",block:'{"symbols":["@projectId","@name","@moduleId"],"statements":[[6,"span"],[8],[0,"\\n"],[4,"if",[[21,3,[]]],null,{"statements":[[0,"  "],[6,"a"],[11,"href",[27,["/projects/",[21,1,[]],"/modules/",[21,3,[]]]]],[10,"class","internal-link"],[8],[0,"\\n    "],[1,[21,2,[]],false],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[6,"a"],[11,"href",[27,["/projects/",[21,1,[]]]]],[10,"class","internal-link"],[8],[0,"\\n    "],[1,[21,2,[]],false],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[]}],[9]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/EntityLink"}},"component:/glimmer-api-docs/components/GlimmerApiDocs":Ri,"template:/glimmer-api-docs/components/GlimmerApiDocs":{id:"2jGEgrMf",block:'{"symbols":[],"statements":[[6,"div"],[10,"id","top-menu"],[8],[0,"\\n  "],[6,"button"],[11,"onclick",[26,"action",[[22,["toggleNav"]]],null],null],[10,"id","menu-toggle"],[10,"class","hamburger hamburger--elastic"],[10,"type","button"],[8],[0,"\\n    "],[6,"span"],[10,"class","hamburger-box"],[8],[0,"\\n      "],[6,"span"],[10,"class","hamburger-inner"],[8],[9],[0,"\\n    "],[9],[0,"\\n  "],[9],[0,"\\n  "],[6,"h1"],[8],[6,"a"],[10,"href","/api/"],[11,"onclick",[26,"action",[[22,["showIndex"]]],null],null],[8],[1,[22,["model","main","header"]],false],[9],[9],[0,"\\n"],[9],[0,"\\n\\n"],[6,"div"],[10,"class","row"],[10,"id","column-container"],[8],[0,"\\n  "],[6,"div"],[10,"class","four columns"],[10,"id","menu-container"],[8],[0,"\\n    "],[5,"LeftMenu",[],[["@data"],[[22,["model","menu"]]]],{"statements":[],"parameters":[]}],[0,"\\n  "],[9],[0,"\\n  "],[6,"div"],[10,"class","eight columns"],[10,"id","content-container"],[8],[0,"\\n    "],[2," module won\'t be used for project-landing "],[0,"\\n"],[4,"if",[[22,["theCurrentView","componentName"]]],null,{"statements":[[0,"      "],[1,[26,"component",[[22,["theCurrentView","componentName"]]],[["project","module","showProject"],[[22,["theCurrentView","project"]],[22,["theCurrentView","module"]],[26,"action",[[22,["showProject"]]],null]]]],false],[0,"\\n"]],"parameters":[]},{"statements":[[4,"if",[[22,["theCurrentView","notFound"]]],null,{"statements":[[0,"      "],[5,"NotFound",[],[["@showIndex"],[[26,"action",[[22,["showIndex"]]],null]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"      "],[6,"section"],[10,"class","content-container"],[8],[0,"\\n        "],[6,"h1"],[8],[1,[22,["model","main","title"]],false],[9],[0,"\\n        "],[6,"p"],[8],[0,"\\n          "],[1,[22,["model","main","intro"]],true],[0,"\\n        "],[9],[0,"\\n      "],[9],[0,"\\n    "]],"parameters":[]}]],"parameters":[]}],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n\\n"],[6,"section"],[10,"id","footer"],[8],[0,"\\n  "],[6,"ol"],[10,"class","links"],[8],[0,"\\n    "],[6,"li"],[8],[6,"a"],[10,"href","/"],[8],[0,"Glimmer Home"],[9],[9],[0,"\\n    "],[6,"li"],[8],[6,"a"],[10,"href","/api/"],[8],[0,"Glimmer API"],[9],[9],[0,"\\n  "],[9],[0,"\\n  "],[6,"div"],[10,"class","copyright"],[8],[0,"\\n    ©2017 Ember.js\\n  "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/GlimmerApiDocs"}},"template:/glimmer-api-docs/components/LeftMenu":{id:"U8ZvCKOj",block:'{"symbols":["project","child","@data"],"statements":[[6,"ul"],[10,"class","vertical menu"],[8],[0,"\\n"],[4,"each",[[21,3,[]]],[["key"],["@index"]],{"statements":[[0,"  "],[6,"li"],[8],[0,"\\n    "],[5,"EntityLink",[],[["@name","@projectId"],[[21,1,["name"]],[21,1,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[6,"ul"],[10,"class","menu vertical nested"],[8],[0,"\\n"],[4,"each",[[21,1,["children"]]],[["key"],["@index"]],{"statements":[[0,"        "],[6,"li"],[11,"class",[27,[[21,2,["type"]]]]],[8],[0,"\\n          "],[5,"EntityLink",[],[["@name","@projectId","@moduleId"],[[21,2,["name"]],[21,1,["slug"]],[21,2,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n        "],[9],[0,"\\n"]],"parameters":[2]},null],[0,"    "],[9],[0,"\\n  "],[9],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/LeftMenu"}},"template:/glimmer-api-docs/components/MethodItem":{id:"0u+S+OqE",block:'{"symbols":["signature","tag","param","param","@method"],"statements":[[6,"li"],[11,"id",[27,["method-",[21,5,["slug"]]]]],[8],[0,"\\n  "],[6,"ol"],[10,"class","signatures-list"],[8],[0,"\\n"],[4,"each",[[21,5,["signatures"]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"li"],[8],[0,"\\n        "],[6,"div"],[10,"class","method-signature"],[8],[0,"\\n          "],[6,"h5"],[8],[0,"\\n            "],[6,"div"],[10,"class","access"],[8],[0,"\\n"],[4,"if",[[21,5,["flags","isProtected"]]],null,{"statements":[[0,"                protected\\n"]],"parameters":[]},{"statements":[[4,"if",[[21,5,["flags","isPrivate"]]],null,{"statements":[[0,"                private\\n"]],"parameters":[]},{"statements":[[0,"                public\\n              "]],"parameters":[]}]],"parameters":[]}],[0,"            "],[9],[0,"\\n"],[4,"if",[[21,5,["flags","isStatic"]]],null,{"statements":[[0,"              "],[6,"div"],[10,"class","signature-modifiers"],[8],[0,"\\n                static\\n              "],[9],[0,"\\n"]],"parameters":[]},null],[0,"            "],[6,"a"],[11,"href",[27,["#method-",[21,5,["slug"]]]]],[8],[0,"\\n              "],[1,[21,1,["name"]],false],[0,"\\n            "],[9],[0,"\\n          "],[9],[0,"\\n          "],[6,"ol"],[10,"class","parameters"],[8],[0,"\\n"],[4,"if",[[21,1,["parameters"]]],null,{"statements":[[4,"each",[[21,1,["parameters"]]],[["key"],["@index"]],{"statements":[[0,"                "],[6,"li"],[8],[0,"\\n                  "],[6,"div"],[10,"class","param-name"],[8],[1,[21,4,["name"]],false],[9],[0,"\\n                "],[9],[0,"\\n"]],"parameters":[4]},null]],"parameters":[]},null],[0,"          "],[9],[0,"\\n\\n          "],[6,"div"],[10,"class","return-type"],[8],[0,"\\n            "],[5,"TypeAnnotation",[],[["@type"],[[21,1,["typeInfo"]]]],{"statements":[],"parameters":[]}],[0,"\\n          "],[9],[0,"\\n        "],[9],[0,"\\n"],[4,"if",[[21,1,["hasBody"]]],null,{"statements":[[0,"          "],[6,"div"],[10,"class","method-body"],[8],[0,"\\n"],[4,"if",[[21,1,["sources"]]],null,{"statements":[[0,"              "],[5,"SourceLink",[],[["@sources"],[[21,1,["sources"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[4,"if",[[21,1,["parameters"]]],null,{"statements":[[0,"              "],[6,"strong"],[10,"class","sub"],[8],[0,"Arguments"],[9],[0,"\\n              "],[6,"ol"],[10,"class","parameters-list"],[8],[0,"\\n"],[4,"each",[[21,1,["parameters"]]],[["key"],["@index"]],{"statements":[[0,"                "],[6,"li"],[8],[0,"\\n                  "],[1,[21,3,["name"]],false],[0,": "],[5,"TypeAnnotation",[],[["@type"],[[21,3,["typeInfo"]]]],{"statements":[],"parameters":[]}],[0,"\\n"],[4,"if",[[21,3,["comment","text"]]],null,{"statements":[[0,"                    "],[1,[21,3,["comment","text"]],true],[0,"\\n"]],"parameters":[]},null],[0,"                "],[9],[0,"\\n"]],"parameters":[3]},null],[0,"              "],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[21,1,["comment"]]],null,{"statements":[[0,"              "],[6,"div"],[10,"class","function-comment readme"],[8],[0,"\\n                "],[1,[21,1,["comment","text"]],true],[0,"\\n"],[4,"each",[[21,1,["comment","tags"]]],[["key"],["@index"]],{"statements":[[0,"                  "],[6,"strong"],[8],[1,[21,2,["tagName"]],false],[9],[0,"\\n                  "],[6,"p"],[10,"class","tag"],[8],[0,"\\n                    "],[1,[21,2,["text"]],true],[0,"\\n                  "],[9],[0,"\\n"]],"parameters":[2]},null],[0,"              "],[9],[0,"\\n"]],"parameters":[]},null],[0,"          "],[9],[0,"\\n"]],"parameters":[]},null],[0,"      "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/MethodItem"}},"component:/glimmer-api-docs/components/MethodList":Fi,"template:/glimmer-api-docs/components/MethodList":{id:"X4MHlVuf",block:'{"symbols":["method","category","method","@methods","@hasMethodCategories"],"statements":[[6,"div"],[10,"class","methods-list"],[8],[0,"\\n"],[4,"if",[[21,5,[]]],null,{"statements":[[4,"each",[[22,["categories"]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"div"],[10,"class","method-category"],[8],[0,"\\n        "],[6,"h4"],[11,"id",[27,["method-category-",[21,2,["slug"]]]]],[8],[1,[21,2,["name"]],false],[9],[0,"\\n        "],[6,"ul"],[8],[0,"\\n"],[4,"each",[[21,2,["methods"]]],[["key"],["@index"]],{"statements":[[0,"            "],[5,"MethodItem",[],[["@method"],[[21,3,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[3]},null],[0,"        "],[9],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[2]},null]],"parameters":[]},{"statements":[[4,"each",[[21,4,[]]],[["key"],["@index"]],{"statements":[[0,"      "],[5,"MethodItem",[],[["@method"],[[21,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null]],"parameters":[]}],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/MethodList"}},"template:/glimmer-api-docs/components/ModuleLanding":{id:"Vh9F99bJ",block:'{"symbols":["implements","extends","@module","@project"],"statements":[[6,"section"],[10,"class","content-container"],[8],[0,"\\n  "],[6,"h5"],[10,"class","project-breadcrumb"],[8],[0,"\\n    "],[5,"EntityLink",[],[["@name","@projectId"],[[21,4,["name"]],[21,4,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n  "],[9],[0,"\\n  "],[6,"div"],[10,"class","module-header"],[8],[0,"\\n    "],[1,[21,3,["kindString"]],false],[0," "],[6,"h3"],[8],[1,[21,3,["name"]],false],[9],[0,"\\n  "],[9],[0,"\\n"],[4,"if",[[21,3,["sources"]]],null,{"statements":[[4,"unless",[[21,3,["isFunction"]]],null,{"statements":[[0,"      "],[5,"SourceLink",[],[["@sources"],[[21,3,["sources"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[4,"if",[[21,3,["extendedTypes"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","hierarchy-meta"],[8],[0,"\\n    "],[6,"strong"],[8],[0,"Extends"],[9],[0,"\\n\\n"],[4,"each",[[21,3,["extendedTypes"]]],[["key"],["@index"]],{"statements":[[0,"      "],[5,"TypeAnnotation",[],[["@type"],[[21,2,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[2]},null],[0,"    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["implementedTypes"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","hierarchy-meta"],[8],[0,"\\n    "],[6,"strong"],[8],[0,"Implements"],[9],[0,"\\n\\n"],[4,"each",[[21,3,["implementedTypes"]]],[["key"],["@index"]],{"statements":[[0,"      "],[5,"TypeAnnotation",[],[["@type"],[[21,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["comment"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","readme"],[8],[0,"\\n      "],[1,[21,3,["comment","text"]],true],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["constructors"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","constructors"],[8],[0,"\\n      "],[6,"h4"],[8],[0,"Constructor"],[9],[0,"\\n\\n      "],[5,"MethodList",[],[["@methods"],[[21,3,["constructors"]]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["methods"]]],null,{"statements":[[0,"    "],[6,"h4"],[8],[0,"Methods"],[9],[0,"\\n\\n    "],[5,"MethodList",[],[["@hasMethodCategories","@methods"],[[21,3,["hasMethodCategories"]],[21,3,["methods"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["signatures"]]],null,{"statements":[[0,"    "],[6,"div"],[10,"class","methods-list"],[8],[0,"\\n      "],[5,"MethodItem",[],[["@method"],[[21,3,[]]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,3,["properties"]]],null,{"statements":[[0,"    "],[5,"VariableList",[],[["@label","@variables"],["Properties",[21,3,["properties"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/ModuleLanding"}},"template:/glimmer-api-docs/components/ModuleList":{id:"vqf6O/Fi",block:'{"symbols":["module","@projectId","@title","@modules"],"statements":[[6,"div"],[8],[0,"\\n  "],[6,"strong"],[8],[1,[21,3,[]],false],[9],[0,"\\n\\n  "],[6,"ul"],[10,"class","project-list"],[8],[0,"\\n"],[4,"each",[[21,4,[]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"li"],[8],[0,"\\n        "],[5,"EntityLink",[],[["@name","@projectId","@moduleId"],[[21,1,["name"]],[21,2,[]],[21,1,["slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n      "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/ModuleList"}},"template:/glimmer-api-docs/components/NotFound":{id:"Ns3dI3Bx",block:'{"symbols":["@showIndex"],"statements":[[6,"div"],[8],[0,"\\n  "],[6,"section"],[10,"class","content-container"],[8],[0,"\\n    "],[6,"h2"],[8],[0,"404 Not Found"],[9],[0,"\\n    "],[6,"p"],[8],[0,"\\n      Hmmmm, we can\'t seem to find what you\'re looking for. Perhaps checkout the "],[6,"a"],[10,"href","/"],[11,"onclick",[26,"action",[[21,1,[]]],null],null],[8],[0,"homepage"],[9],[0,"?\\n    "],[9],[0,"\\n  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/NotFound"}},"template:/glimmer-api-docs/components/ProjectLanding":{id:"BXBtlkPh",block:'{"symbols":["@project"],"statements":[[6,"div"],[8],[0,"\\n  "],[6,"section"],[10,"class","content-container readme"],[8],[0,"\\n    "],[1,[21,1,["readme"]],true],[0,"\\n  "],[9],[0,"\\n\\n  "],[6,"section"],[10,"class","content-container project-container"],[8],[0,"\\n"],[4,"if",[[21,1,["interfaces"]]],null,{"statements":[[0,"      "],[5,"ModuleList",[],[["@projectId","@title","@modules"],[[21,1,["id"]],"Interfaces",[21,1,["interfaces"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["classes"]]],null,{"statements":[[0,"      "],[5,"ModuleList",[],[["@projectId","@title","@modules"],[[21,1,["id"]],"Classes",[21,1,["classes"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["functions"]]],null,{"statements":[[0,"      "],[6,"strong"],[8],[0,"Functions"],[9],[0,"\\n      "],[5,"MethodList",[],[["@methods"],[[21,1,["functions"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["objectLiterals"]]],null,{"statements":[[0,"      "],[5,"VariableList",[],[["@label","@variables"],["Object Literals",[21,1,["objectLiterals"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["typeAliases"]]],null,{"statements":[[0,"      "],[5,"VariableList",[],[["@label","@variables"],["Type Aliases",[21,1,["typeAliases"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"\\n"],[4,"if",[[21,1,["variables"]]],null,{"statements":[[0,"      "],[5,"VariableList",[],[["@label","@variables"],["Variables",[21,1,["variables"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/ProjectLanding"}},"template:/glimmer-api-docs/components/SourceLink":{id:"76hTMxv4",block:'{"symbols":["source","@sources"],"statements":[[6,"div"],[10,"class","sources"],[8],[0,"\\n"],[4,"each",[[21,2,[]]],[["key"],["@index"]],{"statements":[[0,"    "],[6,"a"],[11,"href",[27,[[21,1,["url"]]]]],[8],[1,[21,1,["fileName"]],false],[0,":"],[1,[21,1,["line"]],false],[9],[0,"\\n"]],"parameters":[1]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/SourceLink"}},"template:/glimmer-api-docs/components/TypeAnnotation":{id:"wg54t8Fi",block:'{"symbols":["@type"],"statements":[[6,"div"],[10,"class","type-annotation"],[8],[0,"\\n"],[4,"if",[[21,1,["link"]]],null,{"statements":[[0,"    "],[5,"EntityLink",[],[["@name","@projectId","@moduleId"],[[21,1,["name"]],[21,1,["link","parent","slug"]],[21,1,["link","slug"]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[6,"span"],[10,"class","type"],[8],[1,[21,1,["name"]],false],[9],[0,"\\n"]],"parameters":[]}],[4,"if",[[21,1,["isArray"]]],null,{"statements":[[0,"    "],[6,"span"],[10,"class","isArray"],[8],[0,"[]"],[9],[0,"\\n"]],"parameters":[]},null],[4,"if",[[21,1,["isOptional"]]],null,{"statements":[[0,"    "],[6,"span"],[10,"class","isArray"],[8],[0,"?"],[9],[0,"\\n"]],"parameters":[]},null],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/TypeAnnotation"}},"template:/glimmer-api-docs/components/VariableList":{id:"dZ+yLv6E",block:'{"symbols":["property","@label","@variables"],"statements":[[6,"div"],[8],[0,"\\n  "],[6,"strong"],[8],[1,[21,2,[]],false],[9],[0,"\\n\\n  "],[6,"ul"],[10,"class","properties-list"],[8],[0,"\\n"],[4,"each",[[21,3,[]]],[["key"],["@index"]],{"statements":[[0,"      "],[6,"li"],[10,"class","property-definition"],[11,"id",[27,["variable-",[21,1,["slug"]]]]],[8],[0,"\\n        "],[6,"div"],[10,"class","property-title-container"],[8],[0,"\\n          "],[6,"h5"],[8],[6,"a"],[11,"href",[27,["#variable-",[21,1,["slug"]]]]],[8],[1,[21,1,["name"]],false],[9],[9],[0,"\\n          "],[6,"div"],[10,"class","property-type"],[8],[5,"TypeAnnotation",[],[["@type"],[[21,1,["typeInfo"]]]],{"statements":[],"parameters":[]}],[9],[0,"\\n        "],[9],[0,"\\n"],[4,"if",[[21,1,["comment"]]],null,{"statements":[[0,"          "],[6,"p"],[8],[1,[21,1,["comment","text"]],true],[9],[0,"\\n"]],"parameters":[]},null],[0,"      "],[9],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{specifier:"template:/glimmer-api-docs/components/VariableList"}}},Vi={app:{name:"glimmer-api-docs",rootName:"glimmer-api-docs"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},"component-test":{unresolvable:!0},helper:{definitiveCollection:"components"},"helper-test":{unresolvable:!0},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","component-test","template","helper","helper-test"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}}
class Hi extends Ai{constructor(){let e=new Li(Pi),t=new Ni(Vi,e)
super({rootName:Vi.app.rootName,resolver:t})}}"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/api/service.js").then(e=>{console.log("ServiceWorker registration successful with scope: ",e.scope)}).catch(function(e){console.log("ServiceWorker registration failed: ",e)})})
const zi=new Hi,Ui=document.getElementById("app")
for(function(e){Gn=e}(()=>{zi.scheduleRerender()}),zi.registerInitializer({initialize(e){e.register(`component-manager:/${zi.rootName}/component-managers/main`,ri)}}),zi.boot();Ui.firstChild;)Ui.removeChild(Ui.firstChild)
zi.renderComponent("GlimmerApiDocs",Ui,null)})
