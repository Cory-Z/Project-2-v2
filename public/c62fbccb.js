var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,i=(t,l,s)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s,r=(e,t)=>{for(var l in t||(t={}))o.call(t,l)&&i(e,l,t[l]);if(s)for(var l of s(t))c.call(t,l)&&i(e,l,t[l]);return e},a=(e,s)=>t(e,l(s));const f={};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var m,n,d,h,p,u,b,g,x;const w=globalThis,v=w.ShadowRoot&&(void 0===w.ShadyCSS||w.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,y=Symbol(),_=new WeakMap;class U{constructor(e,t,l){if(this._$cssResult$=!0,l!==y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet;const t=this._strings;if(v&&void 0===e){const l=void 0!==t&&1===t.length;l&&(e=_.get(t)),void 0===e&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),l&&_.set(t,e))}return e}toString(){return this.cssText}}const L=(e,...t)=>{const l=1===e.length?e[0]:t.reduce(((t,l,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(l)+e[s+1]),e[0]);return new U(l,e,y)},R=e=>{let t="";for(const l of e.cssRules)t+=l.cssText;return(e=>new U("string"==typeof e?e:String(e),void 0,y))(t)},$=v?e=>e:e=>e instanceof CSSStyleSheet?R(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:k,defineProperty:S,getOwnPropertyDescriptor:P,getOwnPropertyNames:C,getOwnPropertySymbols:T,getPrototypeOf:E}=Object,M=globalThis;let N;const O=M.trustedTypes,V=O?O.emptyScript:"",I=M.reactiveElementPolyfillSupportDevMode;{const e=null!=(m=M.litIssuedWarnings)?m:M.litIssuedWarnings=new Set;N=(t,l)=>{l+=` See https://lit.dev/msg/${t} for more information.`,e.has(l)||(console.warn(l),e.add(l))},N("dev-mode","Lit is in dev mode. Not recommended for production!"),null!=(n=M.ShadyDOM)&&n.inUse&&void 0===I&&N("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")}const z=e=>{M.emitLitDebugLogEvents&&M.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))},A=(e,t)=>e,q={toAttribute(e,t){switch(t){case Boolean:e=e?V:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let l=e;switch(t){case Boolean:l=null!==e;break;case Number:l=null===e?null:Number(e);break;case Object:case Array:try{l=JSON.parse(e)}catch(e){l=null}}return l}},j=(e,t)=>!k(e,t),W={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:j};null!=Symbol.metadata||(Symbol.metadata=Symbol("metadata")),null!=M.litPropertyMetadata||(M.litPropertyMetadata=new WeakMap);class D extends HTMLElement{static addInitializer(e){var t;this.__prepare(),(null!=(t=this._initializers)?t:this._initializers=[]).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=W){if(t.state&&(t.attribute=!1),this.__prepare(),this.elementProperties.set(e,t),!t.noAccessor){const l=Symbol.for(`${String(e)} (@property() cache)`),s=this.getPropertyDescriptor(e,l,t);void 0!==s&&S(this.prototype,e,s)}}static getPropertyDescriptor(e,t,l){var s,o;const{get:c,set:i}=null!=(s=P(this.prototype,e))?s:{get(){return this[t]},set(e){this[t]=e}};if(null==c){if("value"in(null!=(o=P(this.prototype,e))?o:{}))throw new Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);N("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get(){return null==c?void 0:c.call(this)},set(t){const s=null==c?void 0:c.call(this);i.call(this,t),this.requestUpdate(e,s,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){var t;return null!=(t=this.elementProperties.get(e))?t:W}static __prepare(){if(this.hasOwnProperty(A("elementProperties")))return;const e=E(this);e.finalize(),void 0!==e._initializers&&(this._initializers=[...e._initializers]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(A("properties"))){const e=this.properties,t=[...C(e),...T(e)];for(const l of t)this.createProperty(l,e[l])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,l]of t)this.elementProperties.set(e,l)}this.__attributeToPropertyMap=new Map;for(const[e,t]of this.elementProperties){const l=this.__attributeNameForProperty(e,t);void 0!==l&&this.__attributeToPropertyMap.set(l,e)}this.elementStyles=this.finalizeStyles(this.styles),this.hasOwnProperty("createProperty")&&N("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators"),this.hasOwnProperty("getPropertyDescriptor")&&N("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const l=new Set(e.flat(1/0).reverse());for(const e of l)t.unshift($(e))}else void 0!==e&&t.push($(e));return t}static __attributeNameForProperty(e,t){const l=t.attribute;return!1===l?void 0:"string"==typeof l?l:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){var e;this.__updatePromise=new Promise((e=>this.enableUpdating=e)),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),null==(e=this.constructor._initializers)||e.forEach((e=>e(this)))}addController(e){var t,l;(null!=(t=this.__controllers)?t:this.__controllers=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(l=e.hostConnected)||l.call(e))}removeController(e){var t;null==(t=this.__controllers)||t.delete(e)}__saveInstanceProperties(){const e=new Map,t=this.constructor.elementProperties;for(const l of t.keys())this.hasOwnProperty(l)&&(e.set(l,this[l]),delete this[l]);e.size>0&&(this.__instanceProperties=e)}createRenderRoot(){var e;const t=null!=(e=this.shadowRoot)?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(v)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const l of t){const t=document.createElement("style"),s=w.litNonce;void 0!==s&&t.setAttribute("nonce",s),t.textContent=l.cssText,e.appendChild(t)}})(t,this.constructor.elementStyles),t}connectedCallback(){var e;null!=this.renderRoot||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this.__controllers)||e.forEach((e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this.__controllers)||e.forEach((e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)}))}attributeChangedCallback(e,t,l){this._$attributeToProperty(e,l)}__propertyToAttribute(e,t){var l;const s=this.constructor.elementProperties.get(e),o=this.constructor.__attributeNameForProperty(e,s);if(void 0!==o&&!0===s.reflect){const c=(void 0!==(null==(l=s.converter)?void 0:l.toAttribute)?s.converter:q).toAttribute(t,s.type);this.constructor.enabledWarnings.includes("migration")&&void 0===c&&N("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,null==c?this.removeAttribute(o):this.setAttribute(o,c),this.__reflectingProperty=null}}_$attributeToProperty(e,t){var l;const s=this.constructor,o=s.__attributeToPropertyMap.get(e);if(void 0!==o&&this.__reflectingProperty!==o){const e=s.getPropertyOptions(o),c="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(l=e.converter)?void 0:l.fromAttribute)?e.converter:q;this.__reflectingProperty=o,this[o]=c.fromAttribute(t,e.type),this.__reflectingProperty=null}}requestUpdate(e,t,l){var s;if(void 0!==e){e instanceof Event&&N("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()"),null!=l||(l=this.constructor.getPropertyOptions(e));if(!(null!=(s=l.hasChanged)?s:j)(this[e],t))return;this._$changeProperty(e,t,l)}!1===this.isUpdatePending&&(this.__updatePromise=this.__enqueueUpdate())}_$changeProperty(e,t,l){var s;this._$changedProperties.has(e)||this._$changedProperties.set(e,t),!0===l.reflect&&this.__reflectingProperty!==e&&(null!=(s=this.__reflectingProperties)?s:this.__reflectingProperties=new Set).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){const e=this.performUpdate();return this.constructor.enabledWarnings.includes("async-perform-update")&&"function"==typeof(null==e?void 0:e.then)&&N("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`),e}performUpdate(){var e;if(!this.isUpdatePending)return;if(null==z||z({kind:"update"}),!this.hasUpdated){null!=this.renderRoot||(this.renderRoot=this.createRenderRoot());{const e=[...this.constructor.elementProperties.keys()].filter((e=>this.hasOwnProperty(e)&&e in E(this)));if(e.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${e.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(const[e,t]of this.__instanceProperties)this[e]=t;this.__instanceProperties=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,l]of e)!0===l.wrapped&&!this._$changedProperties.has(t)&&void 0!==this[t]&&this._$changeProperty(t,this[t],l)}let t=!1;const l=this._$changedProperties;try{t=this.shouldUpdate(l),t?(this.willUpdate(l),null==(e=this.__controllers)||e.forEach((e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)})),this.update(l)):this.__markUpdated()}catch(e){throw t=!1,this.__markUpdated(),e}t&&this._$didUpdate(l)}willUpdate(e){}_$didUpdate(e){var t;null==(t=this.__controllers)||t.forEach((e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update")&&N("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&(this.__reflectingProperties=this.__reflectingProperties.forEach((e=>this.__propertyToAttribute(e,this[e])))),this.__markUpdated()}updated(e){}firstUpdated(e){}}D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[A("elementProperties")]=new Map,D[A("finalized")]=new Map,null==I||I({ReactiveElement:D});{D.enabledWarnings=["change-in-update","async-perform-update"];const e=function(e){e.hasOwnProperty(A("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};D.enableWarning=function(t){e(this),this.enabledWarnings.includes(t)||this.enabledWarnings.push(t)},D.disableWarning=function(t){e(this);const l=this.enabledWarnings.indexOf(t);l>=0&&this.enabledWarnings.splice(l,1)}}(null!=(d=M.reactiveElementVersions)?d:M.reactiveElementVersions=[]).push("2.0.4"),M.reactiveElementVersions.length>1&&N("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B=globalThis,H=e=>{B.emitLitDebugLogEvents&&B.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))};let F,J=0;null!=B.litIssuedWarnings||(B.litIssuedWarnings=new Set),F=(e,t)=>{t+=e?` See https://lit.dev/msg/${e} for more information.`:"",B.litIssuedWarnings.has(t)||(console.warn(t),B.litIssuedWarnings.add(t))},F("dev-mode","Lit is in dev mode. Not recommended for production!");const Y=null!=(h=B.ShadyDOM)&&h.inUse&&!0===(null==(p=B.ShadyDOM)?void 0:p.noPatch)?B.ShadyDOM.wrap:e=>e,Z=B.trustedTypes,X=Z?Z.createPolicy("lit-html",{createHTML:e=>e}):void 0,G=e=>e,K=(e,t,l)=>G,Q=(e,t,l)=>Ue(e,t,l),ee="$lit$",te=`lit$${Math.random().toFixed(9).slice(2)}$`,le="?"+te,se=`<${le}>`,oe=document,ce=()=>oe.createComment(""),ie=e=>null===e||"object"!=typeof e&&"function"!=typeof e,re=Array.isArray,ae="[ \t\n\f\r]",fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,ne=/>/g,de=new RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,pe=/"/g,ue=/^(?:script|style|textarea|title)$/i,be=e=>(t,...l)=>(t.some((e=>void 0===e))&&console.warn("Some template strings are undefined.\nThis is probably caused by illegal octal escape sequences."),l.some((e=>null==e?void 0:e._$litStatic$))&&F("","Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\nPlease use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions"),{_$litType$:e,strings:t,values:l}),ge=be(1),xe=be(2),we=Symbol.for("lit-noChange"),ve=Symbol.for("lit-nothing"),ye=new WeakMap,_e=oe.createTreeWalker(oe,129);let Ue=K;function Le(e,t){if(!re(e)||!e.hasOwnProperty("raw")){let e="invalid template strings array";throw e="\n          Internal Error: expected template strings to be an array\n          with a 'raw' field. Faking a template strings array by\n          calling html or svg like an ordinary function is effectively\n          the same as calling unsafeHtml and can lead to major security\n          issues, e.g. opening your code up to XSS attacks.\n          If you're using the html or svg tagged template functions normally\n          and still seeing this error, please file a bug at\n          https://github.com/lit/lit/issues/new?template=bug_report.md\n          and include information about your build tooling, if any.\n        ".trim().replace(/\n */g,"\n"),new Error(e)}return void 0!==X?X.createHTML(t):t}class Re{constructor({strings:e,_$litType$:t},l){this.parts=[];let s,o=0,c=0;const i=e.length-1,r=this.parts,[a,f]=((e,t)=>{const l=e.length-1,s=[];let o,c=2===t?"<svg>":3===t?"<math>":"",i=fe;for(let t=0;t<l;t++){const l=e[t];let r,a,f=-1,m=0;for(;m<l.length&&(i.lastIndex=m,a=i.exec(l),null!==a);)if(m=i.lastIndex,i===fe){if("!--"===a[1])i=me;else if(void 0!==a[1])i=ne;else if(void 0!==a[2])ue.test(a[2])&&(o=new RegExp(`</${a[2]}`,"g")),i=de;else if(void 0!==a[3])throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else i===de?">"===a[0]?(i=null!=o?o:fe,f=-1):void 0===a[1]?f=-2:(f=i.lastIndex-a[2].length,r=a[1],i=void 0===a[3]?de:'"'===a[3]?pe:he):i===pe||i===he?i=de:i===me||i===ne?i=fe:(i=de,o=void 0);console.assert(-1===f||i===de||i===he||i===pe,"unexpected parse state B");const n=i===de&&e[t+1].startsWith("/>")?" ":"";c+=i===fe?l+se:f>=0?(s.push(r),l.slice(0,f)+ee+l.slice(f)+te+n):l+te+(-2===f?t:n)}return[Le(e,c+(e[l]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]})(e,t);if(this.el=Re.createElement(a,l),_e.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=_e.nextNode())&&r.length<i;){if(1===s.nodeType){{const e=s.localName;if(/^(?:textarea|template)$/i.test(e)&&s.innerHTML.includes(te)){const t=`Expressions are not supported inside \`${e}\` elements. See https://lit.dev/msg/expression-in-${e} for more information.`;if("template"===e)throw new Error(t);F("",t)}}if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(ee)){const t=f[c++],l=s.getAttribute(e).split(te),i=/([.?@])?(.*)/.exec(t);r.push({type:1,index:o,name:i[2],strings:l,ctor:"."===i[1]?Ce:"?"===i[1]?Te:"@"===i[1]?Ee:Pe}),s.removeAttribute(e)}else e.startsWith(te)&&(r.push({type:6,index:o}),s.removeAttribute(e));if(ue.test(s.tagName)){const e=s.textContent.split(te),t=e.length-1;if(t>0){s.textContent=Z?Z.emptyScript:"";for(let l=0;l<t;l++)s.append(e[l],ce()),_e.nextNode(),r.push({type:2,index:++o});s.append(e[t],ce())}}}else if(8===s.nodeType)if(s.data===le)r.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(te,e+1));)r.push({type:7,index:o}),e+=te.length-1}o++}if(f.length!==c)throw new Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");H&&H({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){const l=oe.createElement("template");return l.innerHTML=e,l}}function $e(e,t,l=e,s){var o,c,i;if(t===we)return t;let r=void 0!==s?null==(o=l.__directives)?void 0:o[s]:l.__directive;const a=ie(t)?void 0:t._$litDirective$;return(null==r?void 0:r.constructor)!==a&&(null==(c=null==r?void 0:r._$notifyDirectiveConnectionChanged)||c.call(r,!1),void 0===a?r=void 0:(r=new a(e),r._$initialize(e,l,s)),void 0!==s?(null!=(i=l.__directives)?i:l.__directives=[])[s]=r:l.__directive=r),void 0!==r&&(t=$e(e,r._$resolve(e,t.values),r,s)),t}class ke{constructor(e,t){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){var t;const{el:{content:l},parts:s}=this._$template,o=(null!=(t=null==e?void 0:e.creationScope)?t:oe).importNode(l,!0);_e.currentNode=o;let c=_e.nextNode(),i=0,r=0,a=s[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new Se(c,c.nextSibling,this,e):1===a.type?t=new a.ctor(c,a.name,a.strings,this,e):6===a.type&&(t=new Me(c,this,e)),this._$parts.push(t),a=s[++r]}i!==(null==a?void 0:a.index)&&(c=_e.nextNode(),i++)}return _e.currentNode=oe,o}_update(e){let t=0;for(const l of this._$parts)void 0!==l&&(H&&H({kind:"set part",part:l,value:e[t],valueIndex:t,values:e,templateInstance:this}),void 0!==l.strings?(l._$setValue(e,l,t),t+=l.strings.length-2):l._$setValue(e[t])),t++}}class Se{get _$isConnected(){var e,t;return null!=(t=null==(e=this._$parent)?void 0:e._$isConnected)?t:this.__isConnected}constructor(e,t,l,s){var o;this.type=2,this._$committedValue=ve,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=l,this.options=s,this.__isConnected=null==(o=null==s?void 0:s.isConnected)||o,this._textSanitizer=void 0}get parentNode(){let e=Y(this._$startNode).parentNode;const t=this._$parent;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){var l,s;if(null===this.parentNode)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=$e(this,e,t),ie(e))e===ve||null==e||""===e?(this._$committedValue!==ve&&(H&&H({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=ve):e!==this._$committedValue&&e!==we&&this._commitText(e);else if(void 0!==e._$litType$)this._commitTemplateResult(e);else if(void 0!==e.nodeType){if((null==(l=this.options)?void 0:l.host)===e)return this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),void console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");this._commitNode(e)}else re(s=e)||"function"==typeof(null==s?void 0:s[Symbol.iterator])?this._commitIterable(e):this._commitText(e)}_insert(e){return Y(Y(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){var t;if(this._$committedValue!==e){if(this._$clear(),Ue!==K){const e=null==(t=this._$startNode.parentNode)?void 0:t.nodeName;if("STYLE"===e||"SCRIPT"===e){let t="Forbidden";throw t="STYLE"===e?"Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":"Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(t)}}H&&H({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==ve&&ie(this._$committedValue)){const t=Y(this._$startNode).nextSibling;void 0===this._textSanitizer&&(this._textSanitizer=Q(t,"data","property")),e=this._textSanitizer(e),H&&H({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{const t=oe.createTextNode("");this._commitNode(t),void 0===this._textSanitizer&&(this._textSanitizer=Q(t,"data","property")),e=this._textSanitizer(e),H&&H({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){var t;const{values:l,_$litType$:s}=e,o="number"==typeof s?this._$getTemplate(e):(void 0===s.el&&(s.el=Re.createElement(Le(s.h,s.h[0]),this.options)),s);if((null==(t=this._$committedValue)?void 0:t._$template)===o)H&&H({kind:"template updating",template:o,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:l}),this._$committedValue._update(l);else{const e=new ke(o,this),t=e._clone(this.options);H&&H({kind:"template instantiated",template:o,instance:e,parts:e._$parts,options:this.options,fragment:t,values:l}),e._update(l),H&&H({kind:"template instantiated and updated",template:o,instance:e,parts:e._$parts,options:this.options,fragment:t,values:l}),this._commitNode(t),this._$committedValue=e}}_$getTemplate(e){let t=ye.get(e.strings);return void 0===t&&ye.set(e.strings,t=new Re(e)),t}_commitIterable(e){re(this._$committedValue)||(this._$committedValue=[],this._$clear());const t=this._$committedValue;let l,s=0;for(const o of e)s===t.length?t.push(l=new Se(this._insert(ce()),this._insert(ce()),this,this.options)):l=t[s],l._$setValue(o),s++;s<t.length&&(this._$clear(l&&Y(l._$endNode).nextSibling,s),t.length=s)}_$clear(e=Y(this._$startNode).nextSibling,t){var l;for(null==(l=this._$notifyConnectionChanged)||l.call(this,!1,!0,t);e&&e!==this._$endNode;){const t=Y(e).nextSibling;Y(e).remove(),e=t}}setConnected(e){var t;if(void 0!==this._$parent)throw new Error("part.setConnected() may only be called on a RootPart returned from render().");this.__isConnected=e,null==(t=this._$notifyConnectionChanged)||t.call(this,e)}}class Pe{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,t,l,s,o){this.type=1,this._$committedValue=ve,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=s,this.options=o,l.length>2||""!==l[0]||""!==l[1]?(this._$committedValue=new Array(l.length-1).fill(new String),this.strings=l):this._$committedValue=ve,this._sanitizer=void 0}_$setValue(e,t=this,l,s){const o=this.strings;let c=!1;if(void 0===o)e=$e(this,e,t,0),c=!ie(e)||e!==this._$committedValue&&e!==we,c&&(this._$committedValue=e);else{const s=e;let i,r;for(e=o[0],i=0;i<o.length-1;i++)r=$e(this,s[l+i],t,i),r===we&&(r=this._$committedValue[i]),c||(c=!ie(r)||r!==this._$committedValue[i]),r===ve?e=ve:e!==ve&&(e+=(null!=r?r:"")+o[i+1]),this._$committedValue[i]=r}c&&!s&&this._commitValue(e)}_commitValue(e){e===ve?Y(this.element).removeAttribute(this.name):(void 0===this._sanitizer&&(this._sanitizer=Ue(this.element,this.name,"attribute")),e=this._sanitizer(null!=e?e:""),H&&H({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),Y(this.element).setAttribute(this.name,null!=e?e:""))}}class Ce extends Pe{constructor(){super(...arguments),this.type=3}_commitValue(e){void 0===this._sanitizer&&(this._sanitizer=Ue(this.element,this.name,"property")),e=this._sanitizer(e),H&&H({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===ve?void 0:e}}class Te extends Pe{constructor(){super(...arguments),this.type=4}_commitValue(e){H&&H({kind:"commit boolean attribute",element:this.element,name:this.name,value:!(!e||e===ve),options:this.options}),Y(this.element).toggleAttribute(this.name,!!e&&e!==ve)}}class Ee extends Pe{constructor(e,t,l,s,o){if(super(e,t,l,s,o),this.type=5,void 0!==this.strings)throw new Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){var l;if((e=null!=(l=$e(this,e,t,0))?l:ve)===we)return;const s=this._$committedValue,o=e===ve&&s!==ve||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,c=e!==ve&&(s===ve||o);H&&H({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:o,addListener:c,oldListener:s}),o&&this.element.removeEventListener(this.name,this,s),c&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){var t,l;"function"==typeof this._$committedValue?this._$committedValue.call(null!=(l=null==(t=this.options)?void 0:t.host)?l:this.element,e):this._$committedValue.handleEvent(e)}}class Me{constructor(e,t,l){this.element=e,this.type=6,this._$disconnectableChildren=void 0,this._$parent=t,this.options=l}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){H&&H({kind:"commit to element binding",element:this.element,value:e,options:this.options}),$e(this,e)}}const Ne=B.litHtmlPolyfillSupportDevMode;null==Ne||Ne(Re,Se),(null!=(u=B.litHtmlVersions)?u:B.litHtmlVersions=[]).push("3.2.1"),B.litHtmlVersions.length>1&&F("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");const Oe=(e,t,l)=>{var s,o;if(null==t)throw new TypeError(`The container to render into may not be ${t}`);const c=J++,i=null!=(s=null==l?void 0:l.renderBefore)?s:t;let r=i._$litPart$;if(H&&H({kind:"begin render",id:c,value:e,container:t,options:l,part:r}),void 0===r){const e=null!=(o=null==l?void 0:l.renderBefore)?o:null;i._$litPart$=r=new Se(t.insertBefore(ce(),e),e,void 0,null!=l?l:{})}return r._$setValue(e),H&&H({kind:"end render",id:c,value:e,container:t,options:l,part:r}),r};Oe.setSanitizer=e=>{if(Ue!==K)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");Ue=e},Oe.createSanitizer=Q,Oe._testOnlyClearSanitizerFactoryDoNotCallOrElse=()=>{Ue=K};let Ve;{const e=null!=(b=globalThis.litIssuedWarnings)?b:globalThis.litIssuedWarnings=new Set;Ve=(t,l)=>{l+=` See https://lit.dev/msg/${t} for more information.`,e.has(l)||(console.warn(l),e.add(l))}}class Ie extends D{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return null!=(e=this.renderOptions).renderBefore||(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this.__childPart)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this.__childPart)||e.setConnected(!1)}render(){return we}}var ze;Ie._$litElement$=!0,Ie[(ze="finalized",ze)]=!0,null==(g=globalThis.litElementHydrateSupport)||g.call(globalThis,{LitElement:Ie});const Ae=globalThis.litElementPolyfillSupportDevMode;null==Ae||Ae({LitElement:Ie}),(null!=(x=globalThis.litElementVersions)?x:globalThis.litElementVersions=[]).push("4.1.1"),globalThis.litElementVersions.length>1&&Ve("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended."),
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 *
 * `simple-colors-shared-styles`
 * @element simple-colors-shared-styles
 * a shared set of styles for `simple-colors`
 *
 *

 * @demo ./demo/index.html
 */
globalThis.SimpleColorsSharedStyles={},globalThis.SimpleColorsSharedStyles.instance=null;class qe extends Ie{static get styles(){return[L`
        html {
          --simple-colors-default-theme-accent-1: #ffffff;
          --simple-colors-default-theme-accent-2: #eeeeee;
          --simple-colors-default-theme-accent-3: #dddddd;
          --simple-colors-default-theme-accent-4: #cccccc;
          --simple-colors-default-theme-accent-5: #bbbbbb;
          --simple-colors-default-theme-accent-6: #999999;
          --simple-colors-default-theme-accent-7: #666666;
          --simple-colors-default-theme-accent-8: #444444;
          --simple-colors-default-theme-accent-9: #333333;
          --simple-colors-default-theme-accent-10: #222222;
          --simple-colors-default-theme-accent-11: #111111;
          --simple-colors-default-theme-accent-12: #000000;

          --simple-colors-default-theme-grey-1: #ffffff;
          --simple-colors-default-theme-grey-2: #eeeeee;
          --simple-colors-default-theme-grey-3: #dddddd;
          --simple-colors-default-theme-grey-4: #cccccc;
          --simple-colors-default-theme-grey-5: #bbbbbb;
          --simple-colors-default-theme-grey-6: #999999;
          --simple-colors-default-theme-grey-7: #666666;
          --simple-colors-default-theme-grey-8: #444444;
          --simple-colors-default-theme-grey-9: #333333;
          --simple-colors-default-theme-grey-10: #222222;
          --simple-colors-default-theme-grey-11: #111111;
          --simple-colors-default-theme-grey-12: #000000;

          --simple-colors-default-theme-red-1: #ffdddd;
          --simple-colors-default-theme-red-2: #ffaeae;
          --simple-colors-default-theme-red-3: #ff8f8f;
          --simple-colors-default-theme-red-4: #ff7474;
          --simple-colors-default-theme-red-5: #fd5151;
          --simple-colors-default-theme-red-6: #ff2222;
          --simple-colors-default-theme-red-7: #ee0000;
          --simple-colors-default-theme-red-8: #ac0000;
          --simple-colors-default-theme-red-9: #850000;
          --simple-colors-default-theme-red-10: #670000;
          --simple-colors-default-theme-red-11: #520000;
          --simple-colors-default-theme-red-12: #3f0000;

          --simple-colors-default-theme-pink-1: #ffe6f1;
          --simple-colors-default-theme-pink-2: #ffa5cf;
          --simple-colors-default-theme-pink-3: #ff87c0;
          --simple-colors-default-theme-pink-4: #ff73b5;
          --simple-colors-default-theme-pink-5: #fd60aa;
          --simple-colors-default-theme-pink-6: #ff3996;
          --simple-colors-default-theme-pink-7: #da004e;
          --simple-colors-default-theme-pink-8: #b80042;
          --simple-colors-default-theme-pink-9: #980036;
          --simple-colors-default-theme-pink-10: #78002b;
          --simple-colors-default-theme-pink-11: #5a0020;
          --simple-colors-default-theme-pink-12: #440019;

          --simple-colors-default-theme-purple-1: #fce6ff;
          --simple-colors-default-theme-purple-2: #f4affd;
          --simple-colors-default-theme-purple-3: #f394ff;
          --simple-colors-default-theme-purple-4: #f07cff;
          --simple-colors-default-theme-purple-5: #ed61ff;
          --simple-colors-default-theme-purple-6: #e200ff;
          --simple-colors-default-theme-purple-7: #a500ba;
          --simple-colors-default-theme-purple-8: #8a009b;
          --simple-colors-default-theme-purple-9: #6c0079;
          --simple-colors-default-theme-purple-10: #490052;
          --simple-colors-default-theme-purple-11: #33003a;
          --simple-colors-default-theme-purple-12: #200025;

          --simple-colors-default-theme-deep-purple-1: #f3e4ff;
          --simple-colors-default-theme-deep-purple-2: #ddacff;
          --simple-colors-default-theme-deep-purple-3: #c97eff;
          --simple-colors-default-theme-deep-purple-4: #bb63f9;
          --simple-colors-default-theme-deep-purple-5: #b44aff;
          --simple-colors-default-theme-deep-purple-6: #a931ff;
          --simple-colors-default-theme-deep-purple-7: #7e00d8;
          --simple-colors-default-theme-deep-purple-8: #5d009f;
          --simple-colors-default-theme-deep-purple-9: #4c0081;
          --simple-colors-default-theme-deep-purple-10: #3a0063;
          --simple-colors-default-theme-deep-purple-11: #2a0049;
          --simple-colors-default-theme-deep-purple-12: #1d0033;

          --simple-colors-default-theme-indigo-1: #e5ddff;
          --simple-colors-default-theme-indigo-2: #c3b2ff;
          --simple-colors-default-theme-indigo-3: #af97ff;
          --simple-colors-default-theme-indigo-4: #9e82ff;
          --simple-colors-default-theme-indigo-5: #9373ff;
          --simple-colors-default-theme-indigo-6: #835fff;
          --simple-colors-default-theme-indigo-7: #3a00ff;
          --simple-colors-default-theme-indigo-8: #2801b0;
          --simple-colors-default-theme-indigo-9: #20008c;
          --simple-colors-default-theme-indigo-10: #160063;
          --simple-colors-default-theme-indigo-11: #100049;
          --simple-colors-default-theme-indigo-12: #0a0030;

          --simple-colors-default-theme-blue-1: #e2ecff;
          --simple-colors-default-theme-blue-2: #acc9ff;
          --simple-colors-default-theme-blue-3: #95baff;
          --simple-colors-default-theme-blue-4: #74a5ff;
          --simple-colors-default-theme-blue-5: #5892fd;
          --simple-colors-default-theme-blue-6: #4083ff;
          --simple-colors-default-theme-blue-7: #0059ff;
          --simple-colors-default-theme-blue-8: #0041bb;
          --simple-colors-default-theme-blue-9: #003494;
          --simple-colors-default-theme-blue-10: #002569;
          --simple-colors-default-theme-blue-11: #001947;
          --simple-colors-default-theme-blue-12: #001333;

          --simple-colors-default-theme-light-blue-1: #cde8ff;
          --simple-colors-default-theme-light-blue-2: #a1d1ff;
          --simple-colors-default-theme-light-blue-3: #92c9ff;
          --simple-colors-default-theme-light-blue-4: #65b3ff;
          --simple-colors-default-theme-light-blue-5: #58adff;
          --simple-colors-default-theme-light-blue-6: #41a1ff;
          --simple-colors-default-theme-light-blue-7: #007ffc;
          --simple-colors-default-theme-light-blue-8: #0066ca;
          --simple-colors-default-theme-light-blue-9: #0055a8;
          --simple-colors-default-theme-light-blue-10: #003f7d;
          --simple-colors-default-theme-light-blue-11: #002850;
          --simple-colors-default-theme-light-blue-12: #001b36;

          --simple-colors-default-theme-cyan-1: #ccf3fd;
          --simple-colors-default-theme-cyan-2: #9beaff;
          --simple-colors-default-theme-cyan-3: #77e2ff;
          --simple-colors-default-theme-cyan-4: #33d4ff;
          --simple-colors-default-theme-cyan-5: #1ccfff;
          --simple-colors-default-theme-cyan-6: #00c9ff;
          --simple-colors-default-theme-cyan-7: #009dc7;
          --simple-colors-default-theme-cyan-8: #007999;
          --simple-colors-default-theme-cyan-9: #005970;
          --simple-colors-default-theme-cyan-10: #003f50;
          --simple-colors-default-theme-cyan-11: #002c38;
          --simple-colors-default-theme-cyan-12: #001a20;

          --simple-colors-default-theme-teal-1: #d4ffee;
          --simple-colors-default-theme-teal-2: #98ffd7;
          --simple-colors-default-theme-teal-3: #79ffcb;
          --simple-colors-default-theme-teal-4: #56ffbd;
          --simple-colors-default-theme-teal-5: #29ffac;
          --simple-colors-default-theme-teal-6: #00ff9c;
          --simple-colors-default-theme-teal-7: #009d75;
          --simple-colors-default-theme-teal-8: #007658;
          --simple-colors-default-theme-teal-9: #004e3a;
          --simple-colors-default-theme-teal-10: #003829;
          --simple-colors-default-theme-teal-11: #002a20;
          --simple-colors-default-theme-teal-12: #001b14;

          --simple-colors-default-theme-green-1: #e1ffeb;
          --simple-colors-default-theme-green-2: #acffc9;
          --simple-colors-default-theme-green-3: #79ffa7;
          --simple-colors-default-theme-green-4: #49ff88;
          --simple-colors-default-theme-green-5: #24ff70;
          --simple-colors-default-theme-green-6: #00f961;
          --simple-colors-default-theme-green-7: #008c37;
          --simple-colors-default-theme-green-8: #00762e;
          --simple-colors-default-theme-green-9: #005a23;
          --simple-colors-default-theme-green-10: #003d18;
          --simple-colors-default-theme-green-11: #002a11;
          --simple-colors-default-theme-green-12: #001d0c;

          --simple-colors-default-theme-light-green-1: #ebffdb;
          --simple-colors-default-theme-light-green-2: #c7ff9b;
          --simple-colors-default-theme-light-green-3: #b1ff75;
          --simple-colors-default-theme-light-green-4: #a1fd5a;
          --simple-colors-default-theme-light-green-5: #8efd38;
          --simple-colors-default-theme-light-green-6: #6fff00;
          --simple-colors-default-theme-light-green-7: #429d00;
          --simple-colors-default-theme-light-green-8: #357f00;
          --simple-colors-default-theme-light-green-9: #296100;
          --simple-colors-default-theme-light-green-10: #1b3f00;
          --simple-colors-default-theme-light-green-11: #143000;
          --simple-colors-default-theme-light-green-12: #0d2000;

          --simple-colors-default-theme-lime-1: #f1ffd2;
          --simple-colors-default-theme-lime-2: #dfff9b;
          --simple-colors-default-theme-lime-3: #d4ff77;
          --simple-colors-default-theme-lime-4: #caff58;
          --simple-colors-default-theme-lime-5: #bdff2d;
          --simple-colors-default-theme-lime-6: #aeff00;
          --simple-colors-default-theme-lime-7: #649900;
          --simple-colors-default-theme-lime-8: #4d7600;
          --simple-colors-default-theme-lime-9: #3b5a00;
          --simple-colors-default-theme-lime-10: #293f00;
          --simple-colors-default-theme-lime-11: #223400;
          --simple-colors-default-theme-lime-12: #182400;

          --simple-colors-default-theme-yellow-1: #ffffd5;
          --simple-colors-default-theme-yellow-2: #ffffac;
          --simple-colors-default-theme-yellow-3: #ffff90;
          --simple-colors-default-theme-yellow-4: #ffff7c;
          --simple-colors-default-theme-yellow-5: #ffff3a;
          --simple-colors-default-theme-yellow-6: #f6f600;
          --simple-colors-default-theme-yellow-7: #929100;
          --simple-colors-default-theme-yellow-8: #787700;
          --simple-colors-default-theme-yellow-9: #585700;
          --simple-colors-default-theme-yellow-10: #454400;
          --simple-colors-default-theme-yellow-11: #303000;
          --simple-colors-default-theme-yellow-12: #242400;

          --simple-colors-default-theme-amber-1: #fff2d4;
          --simple-colors-default-theme-amber-2: #ffdf92;
          --simple-colors-default-theme-amber-3: #ffd677;
          --simple-colors-default-theme-amber-4: #ffcf5e;
          --simple-colors-default-theme-amber-5: #ffc235;
          --simple-colors-default-theme-amber-6: #ffc500;
          --simple-colors-default-theme-amber-7: #b28900;
          --simple-colors-default-theme-amber-8: #876800;
          --simple-colors-default-theme-amber-9: #614b00;
          --simple-colors-default-theme-amber-10: #413200;
          --simple-colors-default-theme-amber-11: #302500;
          --simple-colors-default-theme-amber-12: #221a00;

          --simple-colors-default-theme-orange-1: #ffebd7;
          --simple-colors-default-theme-orange-2: #ffca92;
          --simple-colors-default-theme-orange-3: #ffbd75;
          --simple-colors-default-theme-orange-4: #ffb05c;
          --simple-colors-default-theme-orange-5: #ff9e36;
          --simple-colors-default-theme-orange-6: #ff9625;
          --simple-colors-default-theme-orange-7: #e56a00;
          --simple-colors-default-theme-orange-8: #ae5100;
          --simple-colors-default-theme-orange-9: #833d00;
          --simple-colors-default-theme-orange-10: #612d00;
          --simple-colors-default-theme-orange-11: #3d1c00;
          --simple-colors-default-theme-orange-12: #2c1400;

          --simple-colors-default-theme-deep-orange-1: #ffe7e0;
          --simple-colors-default-theme-deep-orange-2: #ffb299;
          --simple-colors-default-theme-deep-orange-3: #ffa588;
          --simple-colors-default-theme-deep-orange-4: #ff8a64;
          --simple-colors-default-theme-deep-orange-5: #ff7649;
          --simple-colors-default-theme-deep-orange-6: #ff6c3c;
          --simple-colors-default-theme-deep-orange-7: #f53100;
          --simple-colors-default-theme-deep-orange-8: #b92500;
          --simple-colors-default-theme-deep-orange-9: #8a1c00;
          --simple-colors-default-theme-deep-orange-10: #561100;
          --simple-colors-default-theme-deep-orange-11: #3a0c00;
          --simple-colors-default-theme-deep-orange-12: #240700;

          --simple-colors-default-theme-brown-1: #f0e2de;
          --simple-colors-default-theme-brown-2: #e5b8aa;
          --simple-colors-default-theme-brown-3: #c59485;
          --simple-colors-default-theme-brown-4: #b68373;
          --simple-colors-default-theme-brown-5: #ac7868;
          --simple-colors-default-theme-brown-6: #a47060;
          --simple-colors-default-theme-brown-7: #85574a;
          --simple-colors-default-theme-brown-8: #724539;
          --simple-colors-default-theme-brown-9: #5b3328;
          --simple-colors-default-theme-brown-10: #3b1e15;
          --simple-colors-default-theme-brown-11: #2c140e;
          --simple-colors-default-theme-brown-12: #200e09;

          --simple-colors-default-theme-blue-grey-1: #e7eff1;
          --simple-colors-default-theme-blue-grey-2: #b1c5ce;
          --simple-colors-default-theme-blue-grey-3: #9badb6;
          --simple-colors-default-theme-blue-grey-4: #8d9fa7;
          --simple-colors-default-theme-blue-grey-5: #7a8f98;
          --simple-colors-default-theme-blue-grey-6: #718892;
          --simple-colors-default-theme-blue-grey-7: #56707c;
          --simple-colors-default-theme-blue-grey-8: #40535b;
          --simple-colors-default-theme-blue-grey-9: #2f3e45;
          --simple-colors-default-theme-blue-grey-10: #1e282c;
          --simple-colors-default-theme-blue-grey-11: #182023;
          --simple-colors-default-theme-blue-grey-12: #0f1518;
          --simple-colors-fixed-theme-accent-1: #ffffff;
          --simple-colors-fixed-theme-accent-2: #eeeeee;
          --simple-colors-fixed-theme-accent-3: #dddddd;
          --simple-colors-fixed-theme-accent-4: #cccccc;
          --simple-colors-fixed-theme-accent-5: #bbbbbb;
          --simple-colors-fixed-theme-accent-6: #999999;
          --simple-colors-fixed-theme-accent-7: #666666;
          --simple-colors-fixed-theme-accent-8: #444444;
          --simple-colors-fixed-theme-accent-9: #333333;
          --simple-colors-fixed-theme-accent-10: #222222;
          --simple-colors-fixed-theme-accent-11: #111111;
          --simple-colors-fixed-theme-accent-12: #000000;

          --simple-colors-fixed-theme-grey-1: #ffffff;
          --simple-colors-fixed-theme-grey-2: #eeeeee;
          --simple-colors-fixed-theme-grey-3: #dddddd;
          --simple-colors-fixed-theme-grey-4: #cccccc;
          --simple-colors-fixed-theme-grey-5: #bbbbbb;
          --simple-colors-fixed-theme-grey-6: #999999;
          --simple-colors-fixed-theme-grey-7: #666666;
          --simple-colors-fixed-theme-grey-8: #444444;
          --simple-colors-fixed-theme-grey-9: #333333;
          --simple-colors-fixed-theme-grey-10: #222222;
          --simple-colors-fixed-theme-grey-11: #111111;
          --simple-colors-fixed-theme-grey-12: #000000;

          --simple-colors-fixed-theme-red-1: #ffdddd;
          --simple-colors-fixed-theme-red-2: #ffaeae;
          --simple-colors-fixed-theme-red-3: #ff8f8f;
          --simple-colors-fixed-theme-red-4: #ff7474;
          --simple-colors-fixed-theme-red-5: #fd5151;
          --simple-colors-fixed-theme-red-6: #ff2222;
          --simple-colors-fixed-theme-red-7: #ee0000;
          --simple-colors-fixed-theme-red-8: #ac0000;
          --simple-colors-fixed-theme-red-9: #850000;
          --simple-colors-fixed-theme-red-10: #670000;
          --simple-colors-fixed-theme-red-11: #520000;
          --simple-colors-fixed-theme-red-12: #3f0000;

          --simple-colors-fixed-theme-pink-1: #ffe6f1;
          --simple-colors-fixed-theme-pink-2: #ffa5cf;
          --simple-colors-fixed-theme-pink-3: #ff87c0;
          --simple-colors-fixed-theme-pink-4: #ff73b5;
          --simple-colors-fixed-theme-pink-5: #fd60aa;
          --simple-colors-fixed-theme-pink-6: #ff3996;
          --simple-colors-fixed-theme-pink-7: #da004e;
          --simple-colors-fixed-theme-pink-8: #b80042;
          --simple-colors-fixed-theme-pink-9: #980036;
          --simple-colors-fixed-theme-pink-10: #78002b;
          --simple-colors-fixed-theme-pink-11: #5a0020;
          --simple-colors-fixed-theme-pink-12: #440019;

          --simple-colors-fixed-theme-purple-1: #fce6ff;
          --simple-colors-fixed-theme-purple-2: #f4affd;
          --simple-colors-fixed-theme-purple-3: #f394ff;
          --simple-colors-fixed-theme-purple-4: #f07cff;
          --simple-colors-fixed-theme-purple-5: #ed61ff;
          --simple-colors-fixed-theme-purple-6: #e200ff;
          --simple-colors-fixed-theme-purple-7: #a500ba;
          --simple-colors-fixed-theme-purple-8: #8a009b;
          --simple-colors-fixed-theme-purple-9: #6c0079;
          --simple-colors-fixed-theme-purple-10: #490052;
          --simple-colors-fixed-theme-purple-11: #33003a;
          --simple-colors-fixed-theme-purple-12: #200025;

          --simple-colors-fixed-theme-deep-purple-1: #f3e4ff;
          --simple-colors-fixed-theme-deep-purple-2: #ddacff;
          --simple-colors-fixed-theme-deep-purple-3: #c97eff;
          --simple-colors-fixed-theme-deep-purple-4: #bb63f9;
          --simple-colors-fixed-theme-deep-purple-5: #b44aff;
          --simple-colors-fixed-theme-deep-purple-6: #a931ff;
          --simple-colors-fixed-theme-deep-purple-7: #7e00d8;
          --simple-colors-fixed-theme-deep-purple-8: #5d009f;
          --simple-colors-fixed-theme-deep-purple-9: #4c0081;
          --simple-colors-fixed-theme-deep-purple-10: #3a0063;
          --simple-colors-fixed-theme-deep-purple-11: #2a0049;
          --simple-colors-fixed-theme-deep-purple-12: #1d0033;

          --simple-colors-fixed-theme-indigo-1: #e5ddff;
          --simple-colors-fixed-theme-indigo-2: #c3b2ff;
          --simple-colors-fixed-theme-indigo-3: #af97ff;
          --simple-colors-fixed-theme-indigo-4: #9e82ff;
          --simple-colors-fixed-theme-indigo-5: #9373ff;
          --simple-colors-fixed-theme-indigo-6: #835fff;
          --simple-colors-fixed-theme-indigo-7: #3a00ff;
          --simple-colors-fixed-theme-indigo-8: #2801b0;
          --simple-colors-fixed-theme-indigo-9: #20008c;
          --simple-colors-fixed-theme-indigo-10: #160063;
          --simple-colors-fixed-theme-indigo-11: #100049;
          --simple-colors-fixed-theme-indigo-12: #0a0030;

          --simple-colors-fixed-theme-blue-1: #e2ecff;
          --simple-colors-fixed-theme-blue-2: #acc9ff;
          --simple-colors-fixed-theme-blue-3: #95baff;
          --simple-colors-fixed-theme-blue-4: #74a5ff;
          --simple-colors-fixed-theme-blue-5: #5892fd;
          --simple-colors-fixed-theme-blue-6: #4083ff;
          --simple-colors-fixed-theme-blue-7: #0059ff;
          --simple-colors-fixed-theme-blue-8: #0041bb;
          --simple-colors-fixed-theme-blue-9: #003494;
          --simple-colors-fixed-theme-blue-10: #002569;
          --simple-colors-fixed-theme-blue-11: #001947;
          --simple-colors-fixed-theme-blue-12: #001333;

          --simple-colors-fixed-theme-light-blue-1: #cde8ff;
          --simple-colors-fixed-theme-light-blue-2: #a1d1ff;
          --simple-colors-fixed-theme-light-blue-3: #92c9ff;
          --simple-colors-fixed-theme-light-blue-4: #65b3ff;
          --simple-colors-fixed-theme-light-blue-5: #58adff;
          --simple-colors-fixed-theme-light-blue-6: #41a1ff;
          --simple-colors-fixed-theme-light-blue-7: #007ffc;
          --simple-colors-fixed-theme-light-blue-8: #0066ca;
          --simple-colors-fixed-theme-light-blue-9: #0055a8;
          --simple-colors-fixed-theme-light-blue-10: #003f7d;
          --simple-colors-fixed-theme-light-blue-11: #002850;
          --simple-colors-fixed-theme-light-blue-12: #001b36;

          --simple-colors-fixed-theme-cyan-1: #ccf3fd;
          --simple-colors-fixed-theme-cyan-2: #9beaff;
          --simple-colors-fixed-theme-cyan-3: #77e2ff;
          --simple-colors-fixed-theme-cyan-4: #33d4ff;
          --simple-colors-fixed-theme-cyan-5: #1ccfff;
          --simple-colors-fixed-theme-cyan-6: #00c9ff;
          --simple-colors-fixed-theme-cyan-7: #009dc7;
          --simple-colors-fixed-theme-cyan-8: #007999;
          --simple-colors-fixed-theme-cyan-9: #005970;
          --simple-colors-fixed-theme-cyan-10: #003f50;
          --simple-colors-fixed-theme-cyan-11: #002c38;
          --simple-colors-fixed-theme-cyan-12: #001a20;

          --simple-colors-fixed-theme-teal-1: #d4ffee;
          --simple-colors-fixed-theme-teal-2: #98ffd7;
          --simple-colors-fixed-theme-teal-3: #79ffcb;
          --simple-colors-fixed-theme-teal-4: #56ffbd;
          --simple-colors-fixed-theme-teal-5: #29ffac;
          --simple-colors-fixed-theme-teal-6: #00ff9c;
          --simple-colors-fixed-theme-teal-7: #009d75;
          --simple-colors-fixed-theme-teal-8: #007658;
          --simple-colors-fixed-theme-teal-9: #004e3a;
          --simple-colors-fixed-theme-teal-10: #003829;
          --simple-colors-fixed-theme-teal-11: #002a20;
          --simple-colors-fixed-theme-teal-12: #001b14;

          --simple-colors-fixed-theme-green-1: #e1ffeb;
          --simple-colors-fixed-theme-green-2: #acffc9;
          --simple-colors-fixed-theme-green-3: #79ffa7;
          --simple-colors-fixed-theme-green-4: #49ff88;
          --simple-colors-fixed-theme-green-5: #24ff70;
          --simple-colors-fixed-theme-green-6: #00f961;
          --simple-colors-fixed-theme-green-7: #008c37;
          --simple-colors-fixed-theme-green-8: #00762e;
          --simple-colors-fixed-theme-green-9: #005a23;
          --simple-colors-fixed-theme-green-10: #003d18;
          --simple-colors-fixed-theme-green-11: #002a11;
          --simple-colors-fixed-theme-green-12: #001d0c;

          --simple-colors-fixed-theme-light-green-1: #ebffdb;
          --simple-colors-fixed-theme-light-green-2: #c7ff9b;
          --simple-colors-fixed-theme-light-green-3: #b1ff75;
          --simple-colors-fixed-theme-light-green-4: #a1fd5a;
          --simple-colors-fixed-theme-light-green-5: #8efd38;
          --simple-colors-fixed-theme-light-green-6: #6fff00;
          --simple-colors-fixed-theme-light-green-7: #429d00;
          --simple-colors-fixed-theme-light-green-8: #357f00;
          --simple-colors-fixed-theme-light-green-9: #296100;
          --simple-colors-fixed-theme-light-green-10: #1b3f00;
          --simple-colors-fixed-theme-light-green-11: #143000;
          --simple-colors-fixed-theme-light-green-12: #0d2000;

          --simple-colors-fixed-theme-lime-1: #f1ffd2;
          --simple-colors-fixed-theme-lime-2: #dfff9b;
          --simple-colors-fixed-theme-lime-3: #d4ff77;
          --simple-colors-fixed-theme-lime-4: #caff58;
          --simple-colors-fixed-theme-lime-5: #bdff2d;
          --simple-colors-fixed-theme-lime-6: #aeff00;
          --simple-colors-fixed-theme-lime-7: #649900;
          --simple-colors-fixed-theme-lime-8: #4d7600;
          --simple-colors-fixed-theme-lime-9: #3b5a00;
          --simple-colors-fixed-theme-lime-10: #293f00;
          --simple-colors-fixed-theme-lime-11: #223400;
          --simple-colors-fixed-theme-lime-12: #182400;

          --simple-colors-fixed-theme-yellow-1: #ffffd5;
          --simple-colors-fixed-theme-yellow-2: #ffffac;
          --simple-colors-fixed-theme-yellow-3: #ffff90;
          --simple-colors-fixed-theme-yellow-4: #ffff7c;
          --simple-colors-fixed-theme-yellow-5: #ffff3a;
          --simple-colors-fixed-theme-yellow-6: #f6f600;
          --simple-colors-fixed-theme-yellow-7: #929100;
          --simple-colors-fixed-theme-yellow-8: #787700;
          --simple-colors-fixed-theme-yellow-9: #585700;
          --simple-colors-fixed-theme-yellow-10: #454400;
          --simple-colors-fixed-theme-yellow-11: #303000;
          --simple-colors-fixed-theme-yellow-12: #242400;

          --simple-colors-fixed-theme-amber-1: #fff2d4;
          --simple-colors-fixed-theme-amber-2: #ffdf92;
          --simple-colors-fixed-theme-amber-3: #ffd677;
          --simple-colors-fixed-theme-amber-4: #ffcf5e;
          --simple-colors-fixed-theme-amber-5: #ffc235;
          --simple-colors-fixed-theme-amber-6: #ffc500;
          --simple-colors-fixed-theme-amber-7: #b28900;
          --simple-colors-fixed-theme-amber-8: #876800;
          --simple-colors-fixed-theme-amber-9: #614b00;
          --simple-colors-fixed-theme-amber-10: #413200;
          --simple-colors-fixed-theme-amber-11: #302500;
          --simple-colors-fixed-theme-amber-12: #221a00;

          --simple-colors-fixed-theme-orange-1: #ffebd7;
          --simple-colors-fixed-theme-orange-2: #ffca92;
          --simple-colors-fixed-theme-orange-3: #ffbd75;
          --simple-colors-fixed-theme-orange-4: #ffb05c;
          --simple-colors-fixed-theme-orange-5: #ff9e36;
          --simple-colors-fixed-theme-orange-6: #ff9625;
          --simple-colors-fixed-theme-orange-7: #e56a00;
          --simple-colors-fixed-theme-orange-8: #ae5100;
          --simple-colors-fixed-theme-orange-9: #833d00;
          --simple-colors-fixed-theme-orange-10: #612d00;
          --simple-colors-fixed-theme-orange-11: #3d1c00;
          --simple-colors-fixed-theme-orange-12: #2c1400;

          --simple-colors-fixed-theme-deep-orange-1: #ffe7e0;
          --simple-colors-fixed-theme-deep-orange-2: #ffb299;
          --simple-colors-fixed-theme-deep-orange-3: #ffa588;
          --simple-colors-fixed-theme-deep-orange-4: #ff8a64;
          --simple-colors-fixed-theme-deep-orange-5: #ff7649;
          --simple-colors-fixed-theme-deep-orange-6: #ff6c3c;
          --simple-colors-fixed-theme-deep-orange-7: #f53100;
          --simple-colors-fixed-theme-deep-orange-8: #b92500;
          --simple-colors-fixed-theme-deep-orange-9: #8a1c00;
          --simple-colors-fixed-theme-deep-orange-10: #561100;
          --simple-colors-fixed-theme-deep-orange-11: #3a0c00;
          --simple-colors-fixed-theme-deep-orange-12: #240700;

          --simple-colors-fixed-theme-brown-1: #f0e2de;
          --simple-colors-fixed-theme-brown-2: #e5b8aa;
          --simple-colors-fixed-theme-brown-3: #c59485;
          --simple-colors-fixed-theme-brown-4: #b68373;
          --simple-colors-fixed-theme-brown-5: #ac7868;
          --simple-colors-fixed-theme-brown-6: #a47060;
          --simple-colors-fixed-theme-brown-7: #85574a;
          --simple-colors-fixed-theme-brown-8: #724539;
          --simple-colors-fixed-theme-brown-9: #5b3328;
          --simple-colors-fixed-theme-brown-10: #3b1e15;
          --simple-colors-fixed-theme-brown-11: #2c140e;
          --simple-colors-fixed-theme-brown-12: #200e09;

          --simple-colors-fixed-theme-blue-grey-1: #e7eff1;
          --simple-colors-fixed-theme-blue-grey-2: #b1c5ce;
          --simple-colors-fixed-theme-blue-grey-3: #9badb6;
          --simple-colors-fixed-theme-blue-grey-4: #8d9fa7;
          --simple-colors-fixed-theme-blue-grey-5: #7a8f98;
          --simple-colors-fixed-theme-blue-grey-6: #718892;
          --simple-colors-fixed-theme-blue-grey-7: #56707c;
          --simple-colors-fixed-theme-blue-grey-8: #40535b;
          --simple-colors-fixed-theme-blue-grey-9: #2f3e45;
          --simple-colors-fixed-theme-blue-grey-10: #1e282c;
          --simple-colors-fixed-theme-blue-grey-11: #182023;
          --simple-colors-fixed-theme-blue-grey-12: #0f1518;
        }
      `]}render(){return ge``}static get properties(){return a(r({},super.properties),{colors:{attribute:"colors",type:Object},contrasts:{attribute:"contrasts",type:Object}})}constructor(){super(),this.colors={grey:["#ffffff","#eeeeee","#dddddd","#cccccc","#bbbbbb","#999999","#666666","#444444","#333333","#222222","#111111","#000000"],red:["#ffdddd","#ffaeae","#ff8f8f","#ff7474","#fd5151","#ff2222","#ee0000","#ac0000","#850000","#670000","#520000","#3f0000"],pink:["#ffe6f1","#ffa5cf","#ff87c0","#ff73b5","#fd60aa","#ff3996","#da004e","#b80042","#980036","#78002b","#5a0020","#440019"],purple:["#fce6ff","#f4affd","#f394ff","#f07cff","#ed61ff","#e200ff","#a500ba","#8a009b","#6c0079","#490052","#33003a","#200025"],"deep-purple":["#f3e4ff","#ddacff","#c97eff","#bb63f9","#b44aff","#a931ff","#7e00d8","#5d009f","#4c0081","#3a0063","#2a0049","#1d0033"],indigo:["#e5ddff","#c3b2ff","#af97ff","#9e82ff","#9373ff","#835fff","#3a00ff","#2801b0","#20008c","#160063","#100049","#0a0030"],blue:["#e2ecff","#acc9ff","#95baff","#74a5ff","#5892fd","#4083ff","#0059ff","#0041bb","#003494","#002569","#001947","#001333"],"light-blue":["#cde8ff","#a1d1ff","#92c9ff","#65b3ff","#58adff","#41a1ff","#007ffc","#0066ca","#0055a8","#003f7d","#002850","#001b36"],cyan:["#ddf8ff","#9beaff","#77e2ff","#33d4ff","#1ccfff","#00c9ff","#009dc7","#007999","#005970","#003f50","#002c38","#001a20"],teal:["#d9fff0","#98ffd7","#79ffcb","#56ffbd","#29ffac","#00ff9c","#009d75","#007658","#004e3a","#003829","#002a20","#001b14"],green:["#e1ffeb","#acffc9","#79ffa7","#49ff88","#24ff70","#00f961","#008c37","#00762e","#005a23","#003d18","#002a11","#001d0c"],"light-green":["#ebffdb","#c7ff9b","#b1ff75","#a1fd5a","#8efd38","#6fff00","#429d00","#357f00","#296100","#1b3f00","#143000","#0d2000"],lime:["#f1ffd2","#dfff9b","#d4ff77","#caff58","#bdff2d","#aeff00","#649900","#4d7600","#3b5a00","#293f00","#223400","#182400"],yellow:["#ffffd5","#ffffac","#ffff90","#ffff7c","#ffff3a","#f6f600","#929100","#787700","#585700","#454400","#303000","#242400"],amber:["#fff2d4","#ffdf92","#ffd677","#ffcf5e","#ffc235","#ffc500","#b28900","#876800","#614b00","#413200","#302500","#221a00"],orange:["#ffebd7","#ffca92","#ffbd75","#ffb05c","#ff9e36","#ff9625","#e56a00","#ae5100","#833d00","#612d00","#3d1c00","#2c1400"],"deep-orange":["#ffe7e0","#ffb299","#ffa588","#ff8a64","#ff7649","#ff6c3c","#f53100","#b92500","#8a1c00","#561100","#3a0c00","#240700"],brown:["#f0e2de","#e5b8aa","#c59485","#b68373","#ac7868","#a47060","#85574a","#724539","#5b3328","#3b1e15","#2c140e","#200e09"],"blue-grey":["#e7eff1","#b1c5ce","#9badb6","#8d9fa7","#7a8f98","#718892","#56707c","#40535b","#2f3e45","#1e282c","#182023","#0f1518"]},this.contrasts={greyColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:10,max:12},{min:1,max:3},{min:1,max:5},{min:1,max:6},{min:1,max:6},{min:1,max:6},{min:1,max:6}],aa:[{min:7,max:12},{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:8,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:7},{min:1,max:7},{min:1,max:6},{min:1,max:6},{min:1,max:6}]},colorColor:{aaLarge:[{min:7,max:12},{min:7,max:12},{min:8,max:12},{min:9,max:12},{min:10,max:12},{min:11,max:12},{min:1,max:2},{min:1,max:3},{min:1,max:4},{min:1,max:5},{min:1,max:6},{min:1,max:6}],aa:[{min:8,max:12},{min:8,max:12},{min:9,max:12},{min:9,max:12},{min:11,max:12},{min:12,max:12},{min:1,max:1},{min:1,max:2},{min:1,max:4},{min:1,max:4},{min:1,max:5},{min:1,max:5}]}}}static get tag(){return"simple-colors-shared-styles"}getColorInfo(e){let t=e.replace(/(simple-colors-)?(-text)?(-border)?/g,"").split("-theme-"),l=t.length>0?t[0]:"default",s=t.length>0?t[1].split("-"):t[0].split("-");return{theme:l,color:s.length>1?s.slice(1,s.length-1).join("-"):"grey",shade:s.length>1?s[s.length-1]:"1"}}makeVariable(e="grey",t=1,l="default"){return["--simple-colors",l,"theme",e,t].join("-")}getContrastingShades(e,t,l,s){let o="grey"===t||"grey"===s?"greyColor":"colorColor",c=e?"aaLarge":"aa",i=parseInt(l),r=this.contrasts[o][c][i];return Array(r.max-r.min+1).fill().map(((e,t)=>r.min+t))}getContrastingColors(e,t,l){let s={};return Object.keys(this.colors).forEach((o=>{s[o]=this.getContrastingShades(l,e,t,o)})),s}isContrastCompliant(e,t,l,s,o){let c="grey"===t||"grey"===s?"greyColor":"colorColor",i=e?"aaLarge":"aa",r=parseInt(l)+1,a=this.contrasts[c][i][r];return o>=a.min&&ontrastShade>=a.max}indexToShade(e){return parseInt(e)+1}shadeToIndex(e){return parseInt(e)-1}}customElements.define(qe.tag,qe),globalThis.SimpleColorsSharedStyles.requestAvailability=()=>(null==globalThis.SimpleColorsSharedStyles.instance&&(globalThis.SimpleColorsSharedStyles.instance=globalThis.document.createElement("simple-colors-shared-styles"),globalThis.SimpleColorsSharedStyles.colors=globalThis.SimpleColorsSharedStyles.instance.colors,globalThis.SimpleColorsSharedStyles.contrasts=globalThis.SimpleColorsSharedStyles.instance.contrasts,globalThis.SimpleColorsSharedStyles.stylesheet=globalThis.document.createElement("style"),globalThis.SimpleColorsSharedStyles.stylesheet.innerHTML=`${qe.styles[0].cssText}`,globalThis.document.head.appendChild(globalThis.SimpleColorsSharedStyles.stylesheet)),globalThis.SimpleColorsSharedStyles.instance);const je="undefined"!=typeof global?new qe:globalThis.SimpleColorsSharedStyles.requestAvailability();
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class We extends(function(e){return class extends e{static get styles(){let e=L("");return super.styles&&(e=super.styles),[e,L`
          :host([dark]) {
            --simple-colors-default-theme-accent-1: #000000;
            --simple-colors-default-theme-accent-2: #111111;
            --simple-colors-default-theme-accent-3: #222222;
            --simple-colors-default-theme-accent-4: #333333;
            --simple-colors-default-theme-accent-5: #444444;
            --simple-colors-default-theme-accent-6: #666666;
            --simple-colors-default-theme-accent-7: #999999;
            --simple-colors-default-theme-accent-8: #bbbbbb;
            --simple-colors-default-theme-accent-9: #cccccc;
            --simple-colors-default-theme-accent-10: #dddddd;
            --simple-colors-default-theme-accent-11: #eeeeee;
            --simple-colors-default-theme-accent-12: #ffffff;

            --simple-colors-default-theme-grey-1: #000000;
            --simple-colors-default-theme-grey-2: #111111;
            --simple-colors-default-theme-grey-3: #222222;
            --simple-colors-default-theme-grey-4: #333333;
            --simple-colors-default-theme-grey-5: #444444;
            --simple-colors-default-theme-grey-6: #666666;
            --simple-colors-default-theme-grey-7: #999999;
            --simple-colors-default-theme-grey-8: #bbbbbb;
            --simple-colors-default-theme-grey-9: #cccccc;
            --simple-colors-default-theme-grey-10: #dddddd;
            --simple-colors-default-theme-grey-11: #eeeeee;
            --simple-colors-default-theme-grey-12: #ffffff;

            --simple-colors-default-theme-red-1: #3f0000;
            --simple-colors-default-theme-red-2: #520000;
            --simple-colors-default-theme-red-3: #670000;
            --simple-colors-default-theme-red-4: #850000;
            --simple-colors-default-theme-red-5: #ac0000;
            --simple-colors-default-theme-red-6: #ee0000;
            --simple-colors-default-theme-red-7: #ff2222;
            --simple-colors-default-theme-red-8: #fd5151;
            --simple-colors-default-theme-red-9: #ff7474;
            --simple-colors-default-theme-red-10: #ff8f8f;
            --simple-colors-default-theme-red-11: #ffaeae;
            --simple-colors-default-theme-red-12: #ffdddd;

            --simple-colors-default-theme-pink-1: #440019;
            --simple-colors-default-theme-pink-2: #5a0020;
            --simple-colors-default-theme-pink-3: #78002b;
            --simple-colors-default-theme-pink-4: #980036;
            --simple-colors-default-theme-pink-5: #b80042;
            --simple-colors-default-theme-pink-6: #da004e;
            --simple-colors-default-theme-pink-7: #ff3996;
            --simple-colors-default-theme-pink-8: #fd60aa;
            --simple-colors-default-theme-pink-9: #ff73b5;
            --simple-colors-default-theme-pink-10: #ff87c0;
            --simple-colors-default-theme-pink-11: #ffa5cf;
            --simple-colors-default-theme-pink-12: #ffe6f1;

            --simple-colors-default-theme-purple-1: #200025;
            --simple-colors-default-theme-purple-2: #33003a;
            --simple-colors-default-theme-purple-3: #490052;
            --simple-colors-default-theme-purple-4: #6c0079;
            --simple-colors-default-theme-purple-5: #8a009b;
            --simple-colors-default-theme-purple-6: #a500ba;
            --simple-colors-default-theme-purple-7: #e200ff;
            --simple-colors-default-theme-purple-8: #ed61ff;
            --simple-colors-default-theme-purple-9: #f07cff;
            --simple-colors-default-theme-purple-10: #f394ff;
            --simple-colors-default-theme-purple-11: #f4affd;
            --simple-colors-default-theme-purple-12: #fce6ff;

            --simple-colors-default-theme-deep-purple-1: #1d0033;
            --simple-colors-default-theme-deep-purple-2: #2a0049;
            --simple-colors-default-theme-deep-purple-3: #3a0063;
            --simple-colors-default-theme-deep-purple-4: #4c0081;
            --simple-colors-default-theme-deep-purple-5: #5d009f;
            --simple-colors-default-theme-deep-purple-6: #7e00d8;
            --simple-colors-default-theme-deep-purple-7: #a931ff;
            --simple-colors-default-theme-deep-purple-8: #b44aff;
            --simple-colors-default-theme-deep-purple-9: #bb63f9;
            --simple-colors-default-theme-deep-purple-10: #c97eff;
            --simple-colors-default-theme-deep-purple-11: #ddacff;
            --simple-colors-default-theme-deep-purple-12: #f3e4ff;

            --simple-colors-default-theme-indigo-1: #0a0030;
            --simple-colors-default-theme-indigo-2: #100049;
            --simple-colors-default-theme-indigo-3: #160063;
            --simple-colors-default-theme-indigo-4: #20008c;
            --simple-colors-default-theme-indigo-5: #2801b0;
            --simple-colors-default-theme-indigo-6: #3a00ff;
            --simple-colors-default-theme-indigo-7: #835fff;
            --simple-colors-default-theme-indigo-8: #9373ff;
            --simple-colors-default-theme-indigo-9: #9e82ff;
            --simple-colors-default-theme-indigo-10: #af97ff;
            --simple-colors-default-theme-indigo-11: #c3b2ff;
            --simple-colors-default-theme-indigo-12: #e5ddff;

            --simple-colors-default-theme-blue-1: #001333;
            --simple-colors-default-theme-blue-2: #001947;
            --simple-colors-default-theme-blue-3: #002569;
            --simple-colors-default-theme-blue-4: #003494;
            --simple-colors-default-theme-blue-5: #0041bb;
            --simple-colors-default-theme-blue-6: #0059ff;
            --simple-colors-default-theme-blue-7: #4083ff;
            --simple-colors-default-theme-blue-8: #5892fd;
            --simple-colors-default-theme-blue-9: #74a5ff;
            --simple-colors-default-theme-blue-10: #95baff;
            --simple-colors-default-theme-blue-11: #acc9ff;
            --simple-colors-default-theme-blue-12: #e2ecff;

            --simple-colors-default-theme-light-blue-1: #001b36;
            --simple-colors-default-theme-light-blue-2: #002850;
            --simple-colors-default-theme-light-blue-3: #003f7d;
            --simple-colors-default-theme-light-blue-4: #0055a8;
            --simple-colors-default-theme-light-blue-5: #0066ca;
            --simple-colors-default-theme-light-blue-6: #007ffc;
            --simple-colors-default-theme-light-blue-7: #41a1ff;
            --simple-colors-default-theme-light-blue-8: #58adff;
            --simple-colors-default-theme-light-blue-9: #65b3ff;
            --simple-colors-default-theme-light-blue-10: #92c9ff;
            --simple-colors-default-theme-light-blue-11: #a1d1ff;
            --simple-colors-default-theme-light-blue-12: #cde8ff;

            --simple-colors-default-theme-cyan-1: #001a20;
            --simple-colors-default-theme-cyan-2: #002c38;
            --simple-colors-default-theme-cyan-3: #003f50;
            --simple-colors-default-theme-cyan-4: #005970;
            --simple-colors-default-theme-cyan-5: #007999;
            --simple-colors-default-theme-cyan-6: #009dc7;
            --simple-colors-default-theme-cyan-7: #00c9ff;
            --simple-colors-default-theme-cyan-8: #1ccfff;
            --simple-colors-default-theme-cyan-9: #33d4ff;
            --simple-colors-default-theme-cyan-10: #77e2ff;
            --simple-colors-default-theme-cyan-11: #9beaff;
            --simple-colors-default-theme-cyan-12: #ddf8ff;

            --simple-colors-default-theme-teal-1: #001b14;
            --simple-colors-default-theme-teal-2: #002a20;
            --simple-colors-default-theme-teal-3: #003829;
            --simple-colors-default-theme-teal-4: #004e3a;
            --simple-colors-default-theme-teal-5: #007658;
            --simple-colors-default-theme-teal-6: #009d75;
            --simple-colors-default-theme-teal-7: #00ff9c;
            --simple-colors-default-theme-teal-8: #29ffac;
            --simple-colors-default-theme-teal-9: #56ffbd;
            --simple-colors-default-theme-teal-10: #79ffcb;
            --simple-colors-default-theme-teal-11: #98ffd7;
            --simple-colors-default-theme-teal-12: #d9fff0;

            --simple-colors-default-theme-green-1: #001d0c;
            --simple-colors-default-theme-green-2: #002a11;
            --simple-colors-default-theme-green-3: #003d18;
            --simple-colors-default-theme-green-4: #005a23;
            --simple-colors-default-theme-green-5: #00762e;
            --simple-colors-default-theme-green-6: #008c37;
            --simple-colors-default-theme-green-7: #00f961;
            --simple-colors-default-theme-green-8: #24ff70;
            --simple-colors-default-theme-green-9: #49ff88;
            --simple-colors-default-theme-green-10: #79ffa7;
            --simple-colors-default-theme-green-11: #acffc9;
            --simple-colors-default-theme-green-12: #e1ffeb;

            --simple-colors-default-theme-light-green-1: #0d2000;
            --simple-colors-default-theme-light-green-2: #143000;
            --simple-colors-default-theme-light-green-3: #1b3f00;
            --simple-colors-default-theme-light-green-4: #296100;
            --simple-colors-default-theme-light-green-5: #357f00;
            --simple-colors-default-theme-light-green-6: #429d00;
            --simple-colors-default-theme-light-green-7: #6fff00;
            --simple-colors-default-theme-light-green-8: #8efd38;
            --simple-colors-default-theme-light-green-9: #a1fd5a;
            --simple-colors-default-theme-light-green-10: #b1ff75;
            --simple-colors-default-theme-light-green-11: #c7ff9b;
            --simple-colors-default-theme-light-green-12: #ebffdb;

            --simple-colors-default-theme-lime-1: #182400;
            --simple-colors-default-theme-lime-2: #223400;
            --simple-colors-default-theme-lime-3: #293f00;
            --simple-colors-default-theme-lime-4: #3b5a00;
            --simple-colors-default-theme-lime-5: #4d7600;
            --simple-colors-default-theme-lime-6: #649900;
            --simple-colors-default-theme-lime-7: #aeff00;
            --simple-colors-default-theme-lime-8: #bdff2d;
            --simple-colors-default-theme-lime-9: #caff58;
            --simple-colors-default-theme-lime-10: #d4ff77;
            --simple-colors-default-theme-lime-11: #dfff9b;
            --simple-colors-default-theme-lime-12: #f1ffd2;

            --simple-colors-default-theme-yellow-1: #242400;
            --simple-colors-default-theme-yellow-2: #303000;
            --simple-colors-default-theme-yellow-3: #454400;
            --simple-colors-default-theme-yellow-4: #585700;
            --simple-colors-default-theme-yellow-5: #787700;
            --simple-colors-default-theme-yellow-6: #929100;
            --simple-colors-default-theme-yellow-7: #f6f600;
            --simple-colors-default-theme-yellow-8: #ffff3a;
            --simple-colors-default-theme-yellow-9: #ffff7c;
            --simple-colors-default-theme-yellow-10: #ffff90;
            --simple-colors-default-theme-yellow-11: #ffffac;
            --simple-colors-default-theme-yellow-12: #ffffd5;

            --simple-colors-default-theme-amber-1: #221a00;
            --simple-colors-default-theme-amber-2: #302500;
            --simple-colors-default-theme-amber-3: #413200;
            --simple-colors-default-theme-amber-4: #614b00;
            --simple-colors-default-theme-amber-5: #876800;
            --simple-colors-default-theme-amber-6: #b28900;
            --simple-colors-default-theme-amber-7: #ffc500;
            --simple-colors-default-theme-amber-8: #ffc235;
            --simple-colors-default-theme-amber-9: #ffcf5e;
            --simple-colors-default-theme-amber-10: #ffd677;
            --simple-colors-default-theme-amber-11: #ffdf92;
            --simple-colors-default-theme-amber-12: #fff2d4;

            --simple-colors-default-theme-orange-1: #2c1400;
            --simple-colors-default-theme-orange-2: #3d1c00;
            --simple-colors-default-theme-orange-3: #612d00;
            --simple-colors-default-theme-orange-4: #833d00;
            --simple-colors-default-theme-orange-5: #ae5100;
            --simple-colors-default-theme-orange-6: #e56a00;
            --simple-colors-default-theme-orange-7: #ff9625;
            --simple-colors-default-theme-orange-8: #ff9e36;
            --simple-colors-default-theme-orange-9: #ffb05c;
            --simple-colors-default-theme-orange-10: #ffbd75;
            --simple-colors-default-theme-orange-11: #ffca92;
            --simple-colors-default-theme-orange-12: #ffebd7;

            --simple-colors-default-theme-deep-orange-1: #240700;
            --simple-colors-default-theme-deep-orange-2: #3a0c00;
            --simple-colors-default-theme-deep-orange-3: #561100;
            --simple-colors-default-theme-deep-orange-4: #8a1c00;
            --simple-colors-default-theme-deep-orange-5: #b92500;
            --simple-colors-default-theme-deep-orange-6: #f53100;
            --simple-colors-default-theme-deep-orange-7: #ff6c3c;
            --simple-colors-default-theme-deep-orange-8: #ff7649;
            --simple-colors-default-theme-deep-orange-9: #ff8a64;
            --simple-colors-default-theme-deep-orange-10: #ffa588;
            --simple-colors-default-theme-deep-orange-11: #ffb299;
            --simple-colors-default-theme-deep-orange-12: #ffe7e0;

            --simple-colors-default-theme-brown-1: #200e09;
            --simple-colors-default-theme-brown-2: #2c140e;
            --simple-colors-default-theme-brown-3: #3b1e15;
            --simple-colors-default-theme-brown-4: #5b3328;
            --simple-colors-default-theme-brown-5: #724539;
            --simple-colors-default-theme-brown-6: #85574a;
            --simple-colors-default-theme-brown-7: #a47060;
            --simple-colors-default-theme-brown-8: #ac7868;
            --simple-colors-default-theme-brown-9: #b68373;
            --simple-colors-default-theme-brown-10: #c59485;
            --simple-colors-default-theme-brown-11: #e5b8aa;
            --simple-colors-default-theme-brown-12: #f0e2de;

            --simple-colors-default-theme-blue-grey-1: #0f1518;
            --simple-colors-default-theme-blue-grey-2: #182023;
            --simple-colors-default-theme-blue-grey-3: #1e282c;
            --simple-colors-default-theme-blue-grey-4: #2f3e45;
            --simple-colors-default-theme-blue-grey-5: #40535b;
            --simple-colors-default-theme-blue-grey-6: #56707c;
            --simple-colors-default-theme-blue-grey-7: #718892;
            --simple-colors-default-theme-blue-grey-8: #7a8f98;
            --simple-colors-default-theme-blue-grey-9: #8d9fa7;
            --simple-colors-default-theme-blue-grey-10: #9badb6;
            --simple-colors-default-theme-blue-grey-11: #b1c5ce;
            --simple-colors-default-theme-blue-grey-12: #e7eff1;
          }

          :host {
            accent-color: var(--simple-colors-default-theme-accent-7);
          }

          :host([accent-color="grey"]) {
            --simple-colors-default-theme-accent-1: #ffffff;
            --simple-colors-default-theme-accent-2: #eeeeee;
            --simple-colors-default-theme-accent-3: #dddddd;
            --simple-colors-default-theme-accent-4: #cccccc;
            --simple-colors-default-theme-accent-5: #bbbbbb;
            --simple-colors-default-theme-accent-6: #999999;
            --simple-colors-default-theme-accent-7: #666666;
            --simple-colors-default-theme-accent-8: #444444;
            --simple-colors-default-theme-accent-9: #333333;
            --simple-colors-default-theme-accent-10: #222222;
            --simple-colors-default-theme-accent-11: #111111;
            --simple-colors-default-theme-accent-12: #000000;
            --simple-colors-fixed-theme-accent-1: #ffffff;
            --simple-colors-fixed-theme-accent-2: #eeeeee;
            --simple-colors-fixed-theme-accent-3: #dddddd;
            --simple-colors-fixed-theme-accent-4: #cccccc;
            --simple-colors-fixed-theme-accent-5: #bbbbbb;
            --simple-colors-fixed-theme-accent-6: #999999;
            --simple-colors-fixed-theme-accent-7: #666666;
            --simple-colors-fixed-theme-accent-8: #444444;
            --simple-colors-fixed-theme-accent-9: #333333;
            --simple-colors-fixed-theme-accent-10: #222222;
            --simple-colors-fixed-theme-accent-11: #111111;
            --simple-colors-fixed-theme-accent-12: #000000;
          }

          :host([dark][accent-color="grey"]) {
            --simple-colors-default-theme-accent-1: #000000;
            --simple-colors-default-theme-accent-2: #111111;
            --simple-colors-default-theme-accent-3: #222222;
            --simple-colors-default-theme-accent-4: #333333;
            --simple-colors-default-theme-accent-5: #444444;
            --simple-colors-default-theme-accent-6: #666666;
            --simple-colors-default-theme-accent-7: #999999;
            --simple-colors-default-theme-accent-8: #bbbbbb;
            --simple-colors-default-theme-accent-9: #cccccc;
            --simple-colors-default-theme-accent-10: #dddddd;
            --simple-colors-default-theme-accent-11: #eeeeee;
            --simple-colors-default-theme-accent-12: #ffffff;
          }

          :host([accent-color="red"]) {
            --simple-colors-default-theme-accent-1: #ffdddd;
            --simple-colors-default-theme-accent-2: #ffaeae;
            --simple-colors-default-theme-accent-3: #ff8f8f;
            --simple-colors-default-theme-accent-4: #ff7474;
            --simple-colors-default-theme-accent-5: #fd5151;
            --simple-colors-default-theme-accent-6: #ff2222;
            --simple-colors-default-theme-accent-7: #ee0000;
            --simple-colors-default-theme-accent-8: #ac0000;
            --simple-colors-default-theme-accent-9: #850000;
            --simple-colors-default-theme-accent-10: #670000;
            --simple-colors-default-theme-accent-11: #520000;
            --simple-colors-default-theme-accent-12: #3f0000;
            --simple-colors-fixed-theme-accent-1: #ffdddd;
            --simple-colors-fixed-theme-accent-2: #ffaeae;
            --simple-colors-fixed-theme-accent-3: #ff8f8f;
            --simple-colors-fixed-theme-accent-4: #ff7474;
            --simple-colors-fixed-theme-accent-5: #fd5151;
            --simple-colors-fixed-theme-accent-6: #ff2222;
            --simple-colors-fixed-theme-accent-7: #ee0000;
            --simple-colors-fixed-theme-accent-8: #ac0000;
            --simple-colors-fixed-theme-accent-9: #850000;
            --simple-colors-fixed-theme-accent-10: #670000;
            --simple-colors-fixed-theme-accent-11: #520000;
            --simple-colors-fixed-theme-accent-12: #3f0000;
          }

          :host([dark][accent-color="red"]) {
            --simple-colors-default-theme-accent-1: #3f0000;
            --simple-colors-default-theme-accent-2: #520000;
            --simple-colors-default-theme-accent-3: #670000;
            --simple-colors-default-theme-accent-4: #850000;
            --simple-colors-default-theme-accent-5: #ac0000;
            --simple-colors-default-theme-accent-6: #ee0000;
            --simple-colors-default-theme-accent-7: #ff2222;
            --simple-colors-default-theme-accent-8: #fd5151;
            --simple-colors-default-theme-accent-9: #ff7474;
            --simple-colors-default-theme-accent-10: #ff8f8f;
            --simple-colors-default-theme-accent-11: #ffaeae;
            --simple-colors-default-theme-accent-12: #ffdddd;
          }

          :host([accent-color="pink"]) {
            --simple-colors-default-theme-accent-1: #ffe6f1;
            --simple-colors-default-theme-accent-2: #ffa5cf;
            --simple-colors-default-theme-accent-3: #ff87c0;
            --simple-colors-default-theme-accent-4: #ff73b5;
            --simple-colors-default-theme-accent-5: #fd60aa;
            --simple-colors-default-theme-accent-6: #ff3996;
            --simple-colors-default-theme-accent-7: #da004e;
            --simple-colors-default-theme-accent-8: #b80042;
            --simple-colors-default-theme-accent-9: #980036;
            --simple-colors-default-theme-accent-10: #78002b;
            --simple-colors-default-theme-accent-11: #5a0020;
            --simple-colors-default-theme-accent-12: #440019;
            --simple-colors-fixed-theme-accent-1: #ffe6f1;
            --simple-colors-fixed-theme-accent-2: #ffa5cf;
            --simple-colors-fixed-theme-accent-3: #ff87c0;
            --simple-colors-fixed-theme-accent-4: #ff73b5;
            --simple-colors-fixed-theme-accent-5: #fd60aa;
            --simple-colors-fixed-theme-accent-6: #ff3996;
            --simple-colors-fixed-theme-accent-7: #da004e;
            --simple-colors-fixed-theme-accent-8: #b80042;
            --simple-colors-fixed-theme-accent-9: #980036;
            --simple-colors-fixed-theme-accent-10: #78002b;
            --simple-colors-fixed-theme-accent-11: #5a0020;
            --simple-colors-fixed-theme-accent-12: #440019;
          }

          :host([dark][accent-color="pink"]) {
            --simple-colors-default-theme-accent-1: #440019;
            --simple-colors-default-theme-accent-2: #5a0020;
            --simple-colors-default-theme-accent-3: #78002b;
            --simple-colors-default-theme-accent-4: #980036;
            --simple-colors-default-theme-accent-5: #b80042;
            --simple-colors-default-theme-accent-6: #da004e;
            --simple-colors-default-theme-accent-7: #ff3996;
            --simple-colors-default-theme-accent-8: #fd60aa;
            --simple-colors-default-theme-accent-9: #ff73b5;
            --simple-colors-default-theme-accent-10: #ff87c0;
            --simple-colors-default-theme-accent-11: #ffa5cf;
            --simple-colors-default-theme-accent-12: #ffe6f1;
          }

          :host([accent-color="purple"]) {
            --simple-colors-default-theme-accent-1: #fce6ff;
            --simple-colors-default-theme-accent-2: #f4affd;
            --simple-colors-default-theme-accent-3: #f394ff;
            --simple-colors-default-theme-accent-4: #f07cff;
            --simple-colors-default-theme-accent-5: #ed61ff;
            --simple-colors-default-theme-accent-6: #e200ff;
            --simple-colors-default-theme-accent-7: #a500ba;
            --simple-colors-default-theme-accent-8: #8a009b;
            --simple-colors-default-theme-accent-9: #6c0079;
            --simple-colors-default-theme-accent-10: #490052;
            --simple-colors-default-theme-accent-11: #33003a;
            --simple-colors-default-theme-accent-12: #200025;
            --simple-colors-fixed-theme-accent-1: #fce6ff;
            --simple-colors-fixed-theme-accent-2: #f4affd;
            --simple-colors-fixed-theme-accent-3: #f394ff;
            --simple-colors-fixed-theme-accent-4: #f07cff;
            --simple-colors-fixed-theme-accent-5: #ed61ff;
            --simple-colors-fixed-theme-accent-6: #e200ff;
            --simple-colors-fixed-theme-accent-7: #a500ba;
            --simple-colors-fixed-theme-accent-8: #8a009b;
            --simple-colors-fixed-theme-accent-9: #6c0079;
            --simple-colors-fixed-theme-accent-10: #490052;
            --simple-colors-fixed-theme-accent-11: #33003a;
            --simple-colors-fixed-theme-accent-12: #200025;
          }

          :host([dark][accent-color="purple"]) {
            --simple-colors-default-theme-accent-1: #200025;
            --simple-colors-default-theme-accent-2: #33003a;
            --simple-colors-default-theme-accent-3: #490052;
            --simple-colors-default-theme-accent-4: #6c0079;
            --simple-colors-default-theme-accent-5: #8a009b;
            --simple-colors-default-theme-accent-6: #a500ba;
            --simple-colors-default-theme-accent-7: #e200ff;
            --simple-colors-default-theme-accent-8: #ed61ff;
            --simple-colors-default-theme-accent-9: #f07cff;
            --simple-colors-default-theme-accent-10: #f394ff;
            --simple-colors-default-theme-accent-11: #f4affd;
            --simple-colors-default-theme-accent-12: #fce6ff;
          }

          :host([accent-color="deep-purple"]) {
            --simple-colors-default-theme-accent-1: #f3e4ff;
            --simple-colors-default-theme-accent-2: #ddacff;
            --simple-colors-default-theme-accent-3: #c97eff;
            --simple-colors-default-theme-accent-4: #bb63f9;
            --simple-colors-default-theme-accent-5: #b44aff;
            --simple-colors-default-theme-accent-6: #a931ff;
            --simple-colors-default-theme-accent-7: #7e00d8;
            --simple-colors-default-theme-accent-8: #5d009f;
            --simple-colors-default-theme-accent-9: #4c0081;
            --simple-colors-default-theme-accent-10: #3a0063;
            --simple-colors-default-theme-accent-11: #2a0049;
            --simple-colors-default-theme-accent-12: #1d0033;
            --simple-colors-fixed-theme-accent-1: #f3e4ff;
            --simple-colors-fixed-theme-accent-2: #ddacff;
            --simple-colors-fixed-theme-accent-3: #c97eff;
            --simple-colors-fixed-theme-accent-4: #bb63f9;
            --simple-colors-fixed-theme-accent-5: #b44aff;
            --simple-colors-fixed-theme-accent-6: #a931ff;
            --simple-colors-fixed-theme-accent-7: #7e00d8;
            --simple-colors-fixed-theme-accent-8: #5d009f;
            --simple-colors-fixed-theme-accent-9: #4c0081;
            --simple-colors-fixed-theme-accent-10: #3a0063;
            --simple-colors-fixed-theme-accent-11: #2a0049;
            --simple-colors-fixed-theme-accent-12: #1d0033;
          }

          :host([dark][accent-color="deep-purple"]) {
            --simple-colors-default-theme-accent-1: #1d0033;
            --simple-colors-default-theme-accent-2: #2a0049;
            --simple-colors-default-theme-accent-3: #3a0063;
            --simple-colors-default-theme-accent-4: #4c0081;
            --simple-colors-default-theme-accent-5: #5d009f;
            --simple-colors-default-theme-accent-6: #7e00d8;
            --simple-colors-default-theme-accent-7: #a931ff;
            --simple-colors-default-theme-accent-8: #b44aff;
            --simple-colors-default-theme-accent-9: #bb63f9;
            --simple-colors-default-theme-accent-10: #c97eff;
            --simple-colors-default-theme-accent-11: #ddacff;
            --simple-colors-default-theme-accent-12: #f3e4ff;
          }

          :host([accent-color="indigo"]) {
            --simple-colors-default-theme-accent-1: #e5ddff;
            --simple-colors-default-theme-accent-2: #c3b2ff;
            --simple-colors-default-theme-accent-3: #af97ff;
            --simple-colors-default-theme-accent-4: #9e82ff;
            --simple-colors-default-theme-accent-5: #9373ff;
            --simple-colors-default-theme-accent-6: #835fff;
            --simple-colors-default-theme-accent-7: #3a00ff;
            --simple-colors-default-theme-accent-8: #2801b0;
            --simple-colors-default-theme-accent-9: #20008c;
            --simple-colors-default-theme-accent-10: #160063;
            --simple-colors-default-theme-accent-11: #100049;
            --simple-colors-default-theme-accent-12: #0a0030;
            --simple-colors-fixed-theme-accent-1: #e5ddff;
            --simple-colors-fixed-theme-accent-2: #c3b2ff;
            --simple-colors-fixed-theme-accent-3: #af97ff;
            --simple-colors-fixed-theme-accent-4: #9e82ff;
            --simple-colors-fixed-theme-accent-5: #9373ff;
            --simple-colors-fixed-theme-accent-6: #835fff;
            --simple-colors-fixed-theme-accent-7: #3a00ff;
            --simple-colors-fixed-theme-accent-8: #2801b0;
            --simple-colors-fixed-theme-accent-9: #20008c;
            --simple-colors-fixed-theme-accent-10: #160063;
            --simple-colors-fixed-theme-accent-11: #100049;
            --simple-colors-fixed-theme-accent-12: #0a0030;
          }

          :host([dark][accent-color="indigo"]) {
            --simple-colors-default-theme-accent-1: #0a0030;
            --simple-colors-default-theme-accent-2: #100049;
            --simple-colors-default-theme-accent-3: #160063;
            --simple-colors-default-theme-accent-4: #20008c;
            --simple-colors-default-theme-accent-5: #2801b0;
            --simple-colors-default-theme-accent-6: #3a00ff;
            --simple-colors-default-theme-accent-7: #835fff;
            --simple-colors-default-theme-accent-8: #9373ff;
            --simple-colors-default-theme-accent-9: #9e82ff;
            --simple-colors-default-theme-accent-10: #af97ff;
            --simple-colors-default-theme-accent-11: #c3b2ff;
            --simple-colors-default-theme-accent-12: #e5ddff;
          }

          :host([accent-color="blue"]) {
            --simple-colors-default-theme-accent-1: #e2ecff;
            --simple-colors-default-theme-accent-2: #acc9ff;
            --simple-colors-default-theme-accent-3: #95baff;
            --simple-colors-default-theme-accent-4: #74a5ff;
            --simple-colors-default-theme-accent-5: #5892fd;
            --simple-colors-default-theme-accent-6: #4083ff;
            --simple-colors-default-theme-accent-7: #0059ff;
            --simple-colors-default-theme-accent-8: #0041bb;
            --simple-colors-default-theme-accent-9: #003494;
            --simple-colors-default-theme-accent-10: #002569;
            --simple-colors-default-theme-accent-11: #001947;
            --simple-colors-default-theme-accent-12: #001333;
            --simple-colors-fixed-theme-accent-1: #e2ecff;
            --simple-colors-fixed-theme-accent-2: #acc9ff;
            --simple-colors-fixed-theme-accent-3: #95baff;
            --simple-colors-fixed-theme-accent-4: #74a5ff;
            --simple-colors-fixed-theme-accent-5: #5892fd;
            --simple-colors-fixed-theme-accent-6: #4083ff;
            --simple-colors-fixed-theme-accent-7: #0059ff;
            --simple-colors-fixed-theme-accent-8: #0041bb;
            --simple-colors-fixed-theme-accent-9: #003494;
            --simple-colors-fixed-theme-accent-10: #002569;
            --simple-colors-fixed-theme-accent-11: #001947;
            --simple-colors-fixed-theme-accent-12: #001333;
          }

          :host([dark][accent-color="blue"]) {
            --simple-colors-default-theme-accent-1: #001333;
            --simple-colors-default-theme-accent-2: #001947;
            --simple-colors-default-theme-accent-3: #002569;
            --simple-colors-default-theme-accent-4: #003494;
            --simple-colors-default-theme-accent-5: #0041bb;
            --simple-colors-default-theme-accent-6: #0059ff;
            --simple-colors-default-theme-accent-7: #4083ff;
            --simple-colors-default-theme-accent-8: #5892fd;
            --simple-colors-default-theme-accent-9: #74a5ff;
            --simple-colors-default-theme-accent-10: #95baff;
            --simple-colors-default-theme-accent-11: #acc9ff;
            --simple-colors-default-theme-accent-12: #e2ecff;
          }

          :host([accent-color="light-blue"]) {
            --simple-colors-default-theme-accent-1: #cde8ff;
            --simple-colors-default-theme-accent-2: #a1d1ff;
            --simple-colors-default-theme-accent-3: #92c9ff;
            --simple-colors-default-theme-accent-4: #65b3ff;
            --simple-colors-default-theme-accent-5: #58adff;
            --simple-colors-default-theme-accent-6: #41a1ff;
            --simple-colors-default-theme-accent-7: #007ffc;
            --simple-colors-default-theme-accent-8: #0066ca;
            --simple-colors-default-theme-accent-9: #0055a8;
            --simple-colors-default-theme-accent-10: #003f7d;
            --simple-colors-default-theme-accent-11: #002850;
            --simple-colors-default-theme-accent-12: #001b36;
            --simple-colors-fixed-theme-accent-1: #cde8ff;
            --simple-colors-fixed-theme-accent-2: #a1d1ff;
            --simple-colors-fixed-theme-accent-3: #92c9ff;
            --simple-colors-fixed-theme-accent-4: #65b3ff;
            --simple-colors-fixed-theme-accent-5: #58adff;
            --simple-colors-fixed-theme-accent-6: #41a1ff;
            --simple-colors-fixed-theme-accent-7: #007ffc;
            --simple-colors-fixed-theme-accent-8: #0066ca;
            --simple-colors-fixed-theme-accent-9: #0055a8;
            --simple-colors-fixed-theme-accent-10: #003f7d;
            --simple-colors-fixed-theme-accent-11: #002850;
            --simple-colors-fixed-theme-accent-12: #001b36;
          }

          :host([dark][accent-color="light-blue"]) {
            --simple-colors-default-theme-accent-1: #001b36;
            --simple-colors-default-theme-accent-2: #002850;
            --simple-colors-default-theme-accent-3: #003f7d;
            --simple-colors-default-theme-accent-4: #0055a8;
            --simple-colors-default-theme-accent-5: #0066ca;
            --simple-colors-default-theme-accent-6: #007ffc;
            --simple-colors-default-theme-accent-7: #41a1ff;
            --simple-colors-default-theme-accent-8: #58adff;
            --simple-colors-default-theme-accent-9: #65b3ff;
            --simple-colors-default-theme-accent-10: #92c9ff;
            --simple-colors-default-theme-accent-11: #a1d1ff;
            --simple-colors-default-theme-accent-12: #cde8ff;
          }

          :host([accent-color="cyan"]) {
            --simple-colors-default-theme-accent-1: #ddf8ff;
            --simple-colors-default-theme-accent-2: #9beaff;
            --simple-colors-default-theme-accent-3: #77e2ff;
            --simple-colors-default-theme-accent-4: #33d4ff;
            --simple-colors-default-theme-accent-5: #1ccfff;
            --simple-colors-default-theme-accent-6: #00c9ff;
            --simple-colors-default-theme-accent-7: #009dc7;
            --simple-colors-default-theme-accent-8: #007999;
            --simple-colors-default-theme-accent-9: #005970;
            --simple-colors-default-theme-accent-10: #003f50;
            --simple-colors-default-theme-accent-11: #002c38;
            --simple-colors-default-theme-accent-12: #001a20;
            --simple-colors-fixed-theme-accent-1: #ddf8ff;
            --simple-colors-fixed-theme-accent-2: #9beaff;
            --simple-colors-fixed-theme-accent-3: #77e2ff;
            --simple-colors-fixed-theme-accent-4: #33d4ff;
            --simple-colors-fixed-theme-accent-5: #1ccfff;
            --simple-colors-fixed-theme-accent-6: #00c9ff;
            --simple-colors-fixed-theme-accent-7: #009dc7;
            --simple-colors-fixed-theme-accent-8: #007999;
            --simple-colors-fixed-theme-accent-9: #005970;
            --simple-colors-fixed-theme-accent-10: #003f50;
            --simple-colors-fixed-theme-accent-11: #002c38;
            --simple-colors-fixed-theme-accent-12: #001a20;
          }

          :host([dark][accent-color="cyan"]) {
            --simple-colors-default-theme-accent-1: #001a20;
            --simple-colors-default-theme-accent-2: #002c38;
            --simple-colors-default-theme-accent-3: #003f50;
            --simple-colors-default-theme-accent-4: #005970;
            --simple-colors-default-theme-accent-5: #007999;
            --simple-colors-default-theme-accent-6: #009dc7;
            --simple-colors-default-theme-accent-7: #00c9ff;
            --simple-colors-default-theme-accent-8: #1ccfff;
            --simple-colors-default-theme-accent-9: #33d4ff;
            --simple-colors-default-theme-accent-10: #77e2ff;
            --simple-colors-default-theme-accent-11: #9beaff;
            --simple-colors-default-theme-accent-12: #ddf8ff;
          }

          :host([accent-color="teal"]) {
            --simple-colors-default-theme-accent-1: #d9fff0;
            --simple-colors-default-theme-accent-2: #98ffd7;
            --simple-colors-default-theme-accent-3: #79ffcb;
            --simple-colors-default-theme-accent-4: #56ffbd;
            --simple-colors-default-theme-accent-5: #29ffac;
            --simple-colors-default-theme-accent-6: #00ff9c;
            --simple-colors-default-theme-accent-7: #009d75;
            --simple-colors-default-theme-accent-8: #007658;
            --simple-colors-default-theme-accent-9: #004e3a;
            --simple-colors-default-theme-accent-10: #003829;
            --simple-colors-default-theme-accent-11: #002a20;
            --simple-colors-default-theme-accent-12: #001b14;
            --simple-colors-fixed-theme-accent-1: #d9fff0;
            --simple-colors-fixed-theme-accent-2: #98ffd7;
            --simple-colors-fixed-theme-accent-3: #79ffcb;
            --simple-colors-fixed-theme-accent-4: #56ffbd;
            --simple-colors-fixed-theme-accent-5: #29ffac;
            --simple-colors-fixed-theme-accent-6: #00ff9c;
            --simple-colors-fixed-theme-accent-7: #009d75;
            --simple-colors-fixed-theme-accent-8: #007658;
            --simple-colors-fixed-theme-accent-9: #004e3a;
            --simple-colors-fixed-theme-accent-10: #003829;
            --simple-colors-fixed-theme-accent-11: #002a20;
            --simple-colors-fixed-theme-accent-12: #001b14;
          }

          :host([dark][accent-color="teal"]) {
            --simple-colors-default-theme-accent-1: #001b14;
            --simple-colors-default-theme-accent-2: #002a20;
            --simple-colors-default-theme-accent-3: #003829;
            --simple-colors-default-theme-accent-4: #004e3a;
            --simple-colors-default-theme-accent-5: #007658;
            --simple-colors-default-theme-accent-6: #009d75;
            --simple-colors-default-theme-accent-7: #00ff9c;
            --simple-colors-default-theme-accent-8: #29ffac;
            --simple-colors-default-theme-accent-9: #56ffbd;
            --simple-colors-default-theme-accent-10: #79ffcb;
            --simple-colors-default-theme-accent-11: #98ffd7;
            --simple-colors-default-theme-accent-12: #d9fff0;
          }

          :host([accent-color="green"]) {
            --simple-colors-default-theme-accent-1: #e1ffeb;
            --simple-colors-default-theme-accent-2: #acffc9;
            --simple-colors-default-theme-accent-3: #79ffa7;
            --simple-colors-default-theme-accent-4: #49ff88;
            --simple-colors-default-theme-accent-5: #24ff70;
            --simple-colors-default-theme-accent-6: #00f961;
            --simple-colors-default-theme-accent-7: #008c37;
            --simple-colors-default-theme-accent-8: #00762e;
            --simple-colors-default-theme-accent-9: #005a23;
            --simple-colors-default-theme-accent-10: #003d18;
            --simple-colors-default-theme-accent-11: #002a11;
            --simple-colors-default-theme-accent-12: #001d0c;
            --simple-colors-fixed-theme-accent-1: #e1ffeb;
            --simple-colors-fixed-theme-accent-2: #acffc9;
            --simple-colors-fixed-theme-accent-3: #79ffa7;
            --simple-colors-fixed-theme-accent-4: #49ff88;
            --simple-colors-fixed-theme-accent-5: #24ff70;
            --simple-colors-fixed-theme-accent-6: #00f961;
            --simple-colors-fixed-theme-accent-7: #008c37;
            --simple-colors-fixed-theme-accent-8: #00762e;
            --simple-colors-fixed-theme-accent-9: #005a23;
            --simple-colors-fixed-theme-accent-10: #003d18;
            --simple-colors-fixed-theme-accent-11: #002a11;
            --simple-colors-fixed-theme-accent-12: #001d0c;
          }

          :host([dark][accent-color="green"]) {
            --simple-colors-default-theme-accent-1: #001d0c;
            --simple-colors-default-theme-accent-2: #002a11;
            --simple-colors-default-theme-accent-3: #003d18;
            --simple-colors-default-theme-accent-4: #005a23;
            --simple-colors-default-theme-accent-5: #00762e;
            --simple-colors-default-theme-accent-6: #008c37;
            --simple-colors-default-theme-accent-7: #00f961;
            --simple-colors-default-theme-accent-8: #24ff70;
            --simple-colors-default-theme-accent-9: #49ff88;
            --simple-colors-default-theme-accent-10: #79ffa7;
            --simple-colors-default-theme-accent-11: #acffc9;
            --simple-colors-default-theme-accent-12: #e1ffeb;
          }

          :host([accent-color="light-green"]) {
            --simple-colors-default-theme-accent-1: #ebffdb;
            --simple-colors-default-theme-accent-2: #c7ff9b;
            --simple-colors-default-theme-accent-3: #b1ff75;
            --simple-colors-default-theme-accent-4: #a1fd5a;
            --simple-colors-default-theme-accent-5: #8efd38;
            --simple-colors-default-theme-accent-6: #6fff00;
            --simple-colors-default-theme-accent-7: #429d00;
            --simple-colors-default-theme-accent-8: #357f00;
            --simple-colors-default-theme-accent-9: #296100;
            --simple-colors-default-theme-accent-10: #1b3f00;
            --simple-colors-default-theme-accent-11: #143000;
            --simple-colors-default-theme-accent-12: #0d2000;
            --simple-colors-fixed-theme-accent-1: #ebffdb;
            --simple-colors-fixed-theme-accent-2: #c7ff9b;
            --simple-colors-fixed-theme-accent-3: #b1ff75;
            --simple-colors-fixed-theme-accent-4: #a1fd5a;
            --simple-colors-fixed-theme-accent-5: #8efd38;
            --simple-colors-fixed-theme-accent-6: #6fff00;
            --simple-colors-fixed-theme-accent-7: #429d00;
            --simple-colors-fixed-theme-accent-8: #357f00;
            --simple-colors-fixed-theme-accent-9: #296100;
            --simple-colors-fixed-theme-accent-10: #1b3f00;
            --simple-colors-fixed-theme-accent-11: #143000;
            --simple-colors-fixed-theme-accent-12: #0d2000;
          }

          :host([dark][accent-color="light-green"]) {
            --simple-colors-default-theme-accent-1: #0d2000;
            --simple-colors-default-theme-accent-2: #143000;
            --simple-colors-default-theme-accent-3: #1b3f00;
            --simple-colors-default-theme-accent-4: #296100;
            --simple-colors-default-theme-accent-5: #357f00;
            --simple-colors-default-theme-accent-6: #429d00;
            --simple-colors-default-theme-accent-7: #6fff00;
            --simple-colors-default-theme-accent-8: #8efd38;
            --simple-colors-default-theme-accent-9: #a1fd5a;
            --simple-colors-default-theme-accent-10: #b1ff75;
            --simple-colors-default-theme-accent-11: #c7ff9b;
            --simple-colors-default-theme-accent-12: #ebffdb;
          }

          :host([accent-color="lime"]) {
            --simple-colors-default-theme-accent-1: #f1ffd2;
            --simple-colors-default-theme-accent-2: #dfff9b;
            --simple-colors-default-theme-accent-3: #d4ff77;
            --simple-colors-default-theme-accent-4: #caff58;
            --simple-colors-default-theme-accent-5: #bdff2d;
            --simple-colors-default-theme-accent-6: #aeff00;
            --simple-colors-default-theme-accent-7: #649900;
            --simple-colors-default-theme-accent-8: #4d7600;
            --simple-colors-default-theme-accent-9: #3b5a00;
            --simple-colors-default-theme-accent-10: #293f00;
            --simple-colors-default-theme-accent-11: #223400;
            --simple-colors-default-theme-accent-12: #182400;
            --simple-colors-fixed-theme-accent-1: #f1ffd2;
            --simple-colors-fixed-theme-accent-2: #dfff9b;
            --simple-colors-fixed-theme-accent-3: #d4ff77;
            --simple-colors-fixed-theme-accent-4: #caff58;
            --simple-colors-fixed-theme-accent-5: #bdff2d;
            --simple-colors-fixed-theme-accent-6: #aeff00;
            --simple-colors-fixed-theme-accent-7: #649900;
            --simple-colors-fixed-theme-accent-8: #4d7600;
            --simple-colors-fixed-theme-accent-9: #3b5a00;
            --simple-colors-fixed-theme-accent-10: #293f00;
            --simple-colors-fixed-theme-accent-11: #223400;
            --simple-colors-fixed-theme-accent-12: #182400;
          }

          :host([dark][accent-color="lime"]) {
            --simple-colors-default-theme-accent-1: #182400;
            --simple-colors-default-theme-accent-2: #223400;
            --simple-colors-default-theme-accent-3: #293f00;
            --simple-colors-default-theme-accent-4: #3b5a00;
            --simple-colors-default-theme-accent-5: #4d7600;
            --simple-colors-default-theme-accent-6: #649900;
            --simple-colors-default-theme-accent-7: #aeff00;
            --simple-colors-default-theme-accent-8: #bdff2d;
            --simple-colors-default-theme-accent-9: #caff58;
            --simple-colors-default-theme-accent-10: #d4ff77;
            --simple-colors-default-theme-accent-11: #dfff9b;
            --simple-colors-default-theme-accent-12: #f1ffd2;
          }

          :host([accent-color="yellow"]) {
            --simple-colors-default-theme-accent-1: #ffffd5;
            --simple-colors-default-theme-accent-2: #ffffac;
            --simple-colors-default-theme-accent-3: #ffff90;
            --simple-colors-default-theme-accent-4: #ffff7c;
            --simple-colors-default-theme-accent-5: #ffff3a;
            --simple-colors-default-theme-accent-6: #f6f600;
            --simple-colors-default-theme-accent-7: #929100;
            --simple-colors-default-theme-accent-8: #787700;
            --simple-colors-default-theme-accent-9: #585700;
            --simple-colors-default-theme-accent-10: #454400;
            --simple-colors-default-theme-accent-11: #303000;
            --simple-colors-default-theme-accent-12: #242400;
            --simple-colors-fixed-theme-accent-1: #ffffd5;
            --simple-colors-fixed-theme-accent-2: #ffffac;
            --simple-colors-fixed-theme-accent-3: #ffff90;
            --simple-colors-fixed-theme-accent-4: #ffff7c;
            --simple-colors-fixed-theme-accent-5: #ffff3a;
            --simple-colors-fixed-theme-accent-6: #f6f600;
            --simple-colors-fixed-theme-accent-7: #929100;
            --simple-colors-fixed-theme-accent-8: #787700;
            --simple-colors-fixed-theme-accent-9: #585700;
            --simple-colors-fixed-theme-accent-10: #454400;
            --simple-colors-fixed-theme-accent-11: #303000;
            --simple-colors-fixed-theme-accent-12: #242400;
          }

          :host([dark][accent-color="yellow"]) {
            --simple-colors-default-theme-accent-1: #242400;
            --simple-colors-default-theme-accent-2: #303000;
            --simple-colors-default-theme-accent-3: #454400;
            --simple-colors-default-theme-accent-4: #585700;
            --simple-colors-default-theme-accent-5: #787700;
            --simple-colors-default-theme-accent-6: #929100;
            --simple-colors-default-theme-accent-7: #f6f600;
            --simple-colors-default-theme-accent-8: #ffff3a;
            --simple-colors-default-theme-accent-9: #ffff7c;
            --simple-colors-default-theme-accent-10: #ffff90;
            --simple-colors-default-theme-accent-11: #ffffac;
            --simple-colors-default-theme-accent-12: #ffffd5;
          }

          :host([accent-color="amber"]) {
            --simple-colors-default-theme-accent-1: #fff2d4;
            --simple-colors-default-theme-accent-2: #ffdf92;
            --simple-colors-default-theme-accent-3: #ffd677;
            --simple-colors-default-theme-accent-4: #ffcf5e;
            --simple-colors-default-theme-accent-5: #ffc235;
            --simple-colors-default-theme-accent-6: #ffc500;
            --simple-colors-default-theme-accent-7: #b28900;
            --simple-colors-default-theme-accent-8: #876800;
            --simple-colors-default-theme-accent-9: #614b00;
            --simple-colors-default-theme-accent-10: #413200;
            --simple-colors-default-theme-accent-11: #302500;
            --simple-colors-default-theme-accent-12: #221a00;
            --simple-colors-fixed-theme-accent-1: #fff2d4;
            --simple-colors-fixed-theme-accent-2: #ffdf92;
            --simple-colors-fixed-theme-accent-3: #ffd677;
            --simple-colors-fixed-theme-accent-4: #ffcf5e;
            --simple-colors-fixed-theme-accent-5: #ffc235;
            --simple-colors-fixed-theme-accent-6: #ffc500;
            --simple-colors-fixed-theme-accent-7: #b28900;
            --simple-colors-fixed-theme-accent-8: #876800;
            --simple-colors-fixed-theme-accent-9: #614b00;
            --simple-colors-fixed-theme-accent-10: #413200;
            --simple-colors-fixed-theme-accent-11: #302500;
            --simple-colors-fixed-theme-accent-12: #221a00;
          }

          :host([dark][accent-color="amber"]) {
            --simple-colors-default-theme-accent-1: #221a00;
            --simple-colors-default-theme-accent-2: #302500;
            --simple-colors-default-theme-accent-3: #413200;
            --simple-colors-default-theme-accent-4: #614b00;
            --simple-colors-default-theme-accent-5: #876800;
            --simple-colors-default-theme-accent-6: #b28900;
            --simple-colors-default-theme-accent-7: #ffc500;
            --simple-colors-default-theme-accent-8: #ffc235;
            --simple-colors-default-theme-accent-9: #ffcf5e;
            --simple-colors-default-theme-accent-10: #ffd677;
            --simple-colors-default-theme-accent-11: #ffdf92;
            --simple-colors-default-theme-accent-12: #fff2d4;
          }

          :host([accent-color="orange"]) {
            --simple-colors-default-theme-accent-1: #ffebd7;
            --simple-colors-default-theme-accent-2: #ffca92;
            --simple-colors-default-theme-accent-3: #ffbd75;
            --simple-colors-default-theme-accent-4: #ffb05c;
            --simple-colors-default-theme-accent-5: #ff9e36;
            --simple-colors-default-theme-accent-6: #ff9625;
            --simple-colors-default-theme-accent-7: #e56a00;
            --simple-colors-default-theme-accent-8: #ae5100;
            --simple-colors-default-theme-accent-9: #833d00;
            --simple-colors-default-theme-accent-10: #612d00;
            --simple-colors-default-theme-accent-11: #3d1c00;
            --simple-colors-default-theme-accent-12: #2c1400;
            --simple-colors-fixed-theme-accent-1: #ffebd7;
            --simple-colors-fixed-theme-accent-2: #ffca92;
            --simple-colors-fixed-theme-accent-3: #ffbd75;
            --simple-colors-fixed-theme-accent-4: #ffb05c;
            --simple-colors-fixed-theme-accent-5: #ff9e36;
            --simple-colors-fixed-theme-accent-6: #ff9625;
            --simple-colors-fixed-theme-accent-7: #e56a00;
            --simple-colors-fixed-theme-accent-8: #ae5100;
            --simple-colors-fixed-theme-accent-9: #833d00;
            --simple-colors-fixed-theme-accent-10: #612d00;
            --simple-colors-fixed-theme-accent-11: #3d1c00;
            --simple-colors-fixed-theme-accent-12: #2c1400;
          }

          :host([dark][accent-color="orange"]) {
            --simple-colors-default-theme-accent-1: #2c1400;
            --simple-colors-default-theme-accent-2: #3d1c00;
            --simple-colors-default-theme-accent-3: #612d00;
            --simple-colors-default-theme-accent-4: #833d00;
            --simple-colors-default-theme-accent-5: #ae5100;
            --simple-colors-default-theme-accent-6: #e56a00;
            --simple-colors-default-theme-accent-7: #ff9625;
            --simple-colors-default-theme-accent-8: #ff9e36;
            --simple-colors-default-theme-accent-9: #ffb05c;
            --simple-colors-default-theme-accent-10: #ffbd75;
            --simple-colors-default-theme-accent-11: #ffca92;
            --simple-colors-default-theme-accent-12: #ffebd7;
          }

          :host([accent-color="deep-orange"]) {
            --simple-colors-default-theme-accent-1: #ffe7e0;
            --simple-colors-default-theme-accent-2: #ffb299;
            --simple-colors-default-theme-accent-3: #ffa588;
            --simple-colors-default-theme-accent-4: #ff8a64;
            --simple-colors-default-theme-accent-5: #ff7649;
            --simple-colors-default-theme-accent-6: #ff6c3c;
            --simple-colors-default-theme-accent-7: #f53100;
            --simple-colors-default-theme-accent-8: #b92500;
            --simple-colors-default-theme-accent-9: #8a1c00;
            --simple-colors-default-theme-accent-10: #561100;
            --simple-colors-default-theme-accent-11: #3a0c00;
            --simple-colors-default-theme-accent-12: #240700;
            --simple-colors-fixed-theme-accent-1: #ffe7e0;
            --simple-colors-fixed-theme-accent-2: #ffb299;
            --simple-colors-fixed-theme-accent-3: #ffa588;
            --simple-colors-fixed-theme-accent-4: #ff8a64;
            --simple-colors-fixed-theme-accent-5: #ff7649;
            --simple-colors-fixed-theme-accent-6: #ff6c3c;
            --simple-colors-fixed-theme-accent-7: #f53100;
            --simple-colors-fixed-theme-accent-8: #b92500;
            --simple-colors-fixed-theme-accent-9: #8a1c00;
            --simple-colors-fixed-theme-accent-10: #561100;
            --simple-colors-fixed-theme-accent-11: #3a0c00;
            --simple-colors-fixed-theme-accent-12: #240700;
          }

          :host([dark][accent-color="deep-orange"]) {
            --simple-colors-default-theme-accent-1: #240700;
            --simple-colors-default-theme-accent-2: #3a0c00;
            --simple-colors-default-theme-accent-3: #561100;
            --simple-colors-default-theme-accent-4: #8a1c00;
            --simple-colors-default-theme-accent-5: #b92500;
            --simple-colors-default-theme-accent-6: #f53100;
            --simple-colors-default-theme-accent-7: #ff6c3c;
            --simple-colors-default-theme-accent-8: #ff7649;
            --simple-colors-default-theme-accent-9: #ff8a64;
            --simple-colors-default-theme-accent-10: #ffa588;
            --simple-colors-default-theme-accent-11: #ffb299;
            --simple-colors-default-theme-accent-12: #ffe7e0;
          }

          :host([accent-color="brown"]) {
            --simple-colors-default-theme-accent-1: #f0e2de;
            --simple-colors-default-theme-accent-2: #e5b8aa;
            --simple-colors-default-theme-accent-3: #c59485;
            --simple-colors-default-theme-accent-4: #b68373;
            --simple-colors-default-theme-accent-5: #ac7868;
            --simple-colors-default-theme-accent-6: #a47060;
            --simple-colors-default-theme-accent-7: #85574a;
            --simple-colors-default-theme-accent-8: #724539;
            --simple-colors-default-theme-accent-9: #5b3328;
            --simple-colors-default-theme-accent-10: #3b1e15;
            --simple-colors-default-theme-accent-11: #2c140e;
            --simple-colors-default-theme-accent-12: #200e09;
            --simple-colors-fixed-theme-accent-1: #f0e2de;
            --simple-colors-fixed-theme-accent-2: #e5b8aa;
            --simple-colors-fixed-theme-accent-3: #c59485;
            --simple-colors-fixed-theme-accent-4: #b68373;
            --simple-colors-fixed-theme-accent-5: #ac7868;
            --simple-colors-fixed-theme-accent-6: #a47060;
            --simple-colors-fixed-theme-accent-7: #85574a;
            --simple-colors-fixed-theme-accent-8: #724539;
            --simple-colors-fixed-theme-accent-9: #5b3328;
            --simple-colors-fixed-theme-accent-10: #3b1e15;
            --simple-colors-fixed-theme-accent-11: #2c140e;
            --simple-colors-fixed-theme-accent-12: #200e09;
          }

          :host([dark][accent-color="brown"]) {
            --simple-colors-default-theme-accent-1: #200e09;
            --simple-colors-default-theme-accent-2: #2c140e;
            --simple-colors-default-theme-accent-3: #3b1e15;
            --simple-colors-default-theme-accent-4: #5b3328;
            --simple-colors-default-theme-accent-5: #724539;
            --simple-colors-default-theme-accent-6: #85574a;
            --simple-colors-default-theme-accent-7: #a47060;
            --simple-colors-default-theme-accent-8: #ac7868;
            --simple-colors-default-theme-accent-9: #b68373;
            --simple-colors-default-theme-accent-10: #c59485;
            --simple-colors-default-theme-accent-11: #e5b8aa;
            --simple-colors-default-theme-accent-12: #f0e2de;
          }

          :host([accent-color="blue-grey"]) {
            --simple-colors-default-theme-accent-1: #e7eff1;
            --simple-colors-default-theme-accent-2: #b1c5ce;
            --simple-colors-default-theme-accent-3: #9badb6;
            --simple-colors-default-theme-accent-4: #8d9fa7;
            --simple-colors-default-theme-accent-5: #7a8f98;
            --simple-colors-default-theme-accent-6: #718892;
            --simple-colors-default-theme-accent-7: #56707c;
            --simple-colors-default-theme-accent-8: #40535b;
            --simple-colors-default-theme-accent-9: #2f3e45;
            --simple-colors-default-theme-accent-10: #1e282c;
            --simple-colors-default-theme-accent-11: #182023;
            --simple-colors-default-theme-accent-12: #0f1518;
            --simple-colors-fixed-theme-accent-1: #e7eff1;
            --simple-colors-fixed-theme-accent-2: #b1c5ce;
            --simple-colors-fixed-theme-accent-3: #9badb6;
            --simple-colors-fixed-theme-accent-4: #8d9fa7;
            --simple-colors-fixed-theme-accent-5: #7a8f98;
            --simple-colors-fixed-theme-accent-6: #718892;
            --simple-colors-fixed-theme-accent-7: #56707c;
            --simple-colors-fixed-theme-accent-8: #40535b;
            --simple-colors-fixed-theme-accent-9: #2f3e45;
            --simple-colors-fixed-theme-accent-10: #1e282c;
            --simple-colors-fixed-theme-accent-11: #182023;
            --simple-colors-fixed-theme-accent-12: #0f1518;
          }

          :host([dark][accent-color="blue-grey"]) {
            --simple-colors-default-theme-accent-1: #0f1518;
            --simple-colors-default-theme-accent-2: #182023;
            --simple-colors-default-theme-accent-3: #1e282c;
            --simple-colors-default-theme-accent-4: #2f3e45;
            --simple-colors-default-theme-accent-5: #40535b;
            --simple-colors-default-theme-accent-6: #56707c;
            --simple-colors-default-theme-accent-7: #718892;
            --simple-colors-default-theme-accent-8: #7a8f98;
            --simple-colors-default-theme-accent-9: #8d9fa7;
            --simple-colors-default-theme-accent-10: #9badb6;
            --simple-colors-default-theme-accent-11: #b1c5ce;
            --simple-colors-default-theme-accent-12: #e7eff1;
          }

          /* from a11y-utils */
          .sr-only {
            position: absolute;
            left: -10000px;
            top: auto;
            width: 1px;
            height: 1px;
            overflow: hidden;
          }
        `]}render(){return ge` <slot></slot>`}static get properties(){return a(r({},super.properties),{accentColor:{attribute:"accent-color",type:String,reflect:!0},dark:{name:"dark",type:Boolean,reflect:!0}})}constructor(){super(),this.accentColor="grey",this.dark=!1,this.colors=je.colors}static get tag(){return"simple-colors"}invertShade(e){return je.invertShade(e)}getColorInfo(e){return je.getColorInfo(e)}makeVariable(e="grey",t=1,l="default"){return je.makeVariable("grey",1,"default")}getContrastingColors(e,t,l){return je.getContrastingColors(e,t,l)}getContrastingShades(e,t,l,s){return je.getContrastingShades(e,t,l,s)}isContrastCompliant(e,t,l,s,o){return je.isContrastCompliant(e,t,l,s,o)}}}(Ie)){}customElements.define(We.tag,We);const De=["bunny","coffee","construction","cowboy","education","knight","ninja","party","pirate","watermelon"],Be={accessories:9,base:1,leg:["","R","L"],face:5,faceItem:9,hair:9,pants:9,shirt:9,skin:9,hatColor:9};class He extends We{static get tag(){return"rpg-character"}constructor(){super(),this.literalseed=!1,this.height=142,this.width=113,this.accessories=0,this.base=0,this.face=0,this.faceItem=0,this.hair=0,this.pants=0,this.shirt=0,this.skin=0,this.accentColor="orange",this.seed=null,this.walking=!1,this.leg="",this.speed=500,this.__walkingTimeout=null,this.circle=!1,this.hat="none",this.hatColor=0,this.demo=!1,this.fire=!1,globalThis.matchMedia&&(this.reduceMotion=globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches)}randomColor(e=null){return null===e&&(e=""+Math.floor(Math.random()*Object.keys(this.colors).length)),Object.keys(this.colors)[e]}static get properties(){return a(r({},super.properties),{literalseed:{type:Boolean},accessories:{type:Number},height:{type:Number},width:{type:Number},base:{type:Number},face:{type:Number},faceItem:{type:Number},hair:{type:Number},pants:{type:Number},shirt:{type:Number},skin:{type:Number},hatColor:{type:Number},hat:{type:String},walking:{type:Boolean,reflect:!0},leg:{type:String},seed:{type:String,reflect:!0},speed:{type:Number},circle:{type:Boolean,reflect:!0},fire:{type:Boolean,reflect:!0},demo:{type:Boolean},reduceMotion:{type:Boolean}})}static get styles(){let e=[];return super.styles&&(e=super.styles),[e,L`
        :host {
          display: inline-block;
          margin: 0;
          padding: 0;
          text-align: initial;
          position: relative;
        }
        svg,
        img {
          position: absolute;
          margin: 0;
          padding: 0;
          text-align: initial;
        }
        div {
          transition: 0.3s ease-in-out background-color;
          margin: 0;
          padding: 0;
          text-align: initial;
        }
        #demo {
          height: 30px;
          padding-top: 10px;
          text-align: center;
          background-color: black;
          color: white;
          font-weight: bold;
        }
      `]}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),null===this.seed&&(this.seed=Math.random().toString(36).substring(2,12))}render(){const e=function(e){switch(e){case"./lib/accessories/0.svg":return new URL(new URL("38b0d66f.svg",f.url).href,f.url);case"./lib/accessories/1.svg":return new URL(new URL("05cb68c2.svg",f.url).href,f.url);case"./lib/accessories/2.svg":return new URL(new URL("9927c333.svg",f.url).href,f.url);case"./lib/accessories/3.svg":return new URL(new URL("a7e40fb5.svg",f.url).href,f.url);case"./lib/accessories/4.svg":return new URL(new URL("e4f20f66.svg",f.url).href,f.url);case"./lib/accessories/5.svg":return new URL(new URL("2e905068.svg",f.url).href,f.url);case"./lib/accessories/6.svg":return new URL(new URL("3e8c7fdc.svg",f.url).href,f.url);case"./lib/accessories/7.svg":return new URL(new URL("e5f27157.svg",f.url).href,f.url);case"./lib/accessories/8.svg":return new URL(new URL("b18bc499.svg",f.url).href,f.url);case"./lib/accessories/9.svg":return new URL(new URL("4fd7c98d.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/accessories/${this.accessories}.svg`).href,t=function(e){switch(e){case"./lib/base/0.svg":return new URL(new URL("6644937d.svg",f.url).href,f.url);case"./lib/base/0L.svg":return new URL(new URL("de32f3db.svg",f.url).href,f.url);case"./lib/base/0R.svg":return new URL(new URL("d400b848.svg",f.url).href,f.url);case"./lib/base/1.svg":return new URL(new URL("838d9445.svg",f.url).href,f.url);case"./lib/base/1L.svg":return new URL(new URL("a21af2a1.svg",f.url).href,f.url);case"./lib/base/1R.svg":return new URL(new URL("a0785022.svg",f.url).href,f.url);case"./lib/base/L.svg":return new URL(new URL("0a4596d1.svg",f.url).href,f.url);case"./lib/base/R.svg":return new URL(new URL("cb268b10.svg",f.url).href,f.url);case"./lib/base/fire.svg":return new URL(new URL("e8b4a48f.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/base/${this.base}${this.leg}.svg`).href,l=function(e){switch(e){case"./lib/base/0.svg":return new URL(new URL("6644937d.svg",f.url).href,f.url);case"./lib/base/0L.svg":return new URL(new URL("de32f3db.svg",f.url).href,f.url);case"./lib/base/0R.svg":return new URL(new URL("d400b848.svg",f.url).href,f.url);case"./lib/base/1.svg":return new URL(new URL("838d9445.svg",f.url).href,f.url);case"./lib/base/1L.svg":return new URL(new URL("a21af2a1.svg",f.url).href,f.url);case"./lib/base/1R.svg":return new URL(new URL("a0785022.svg",f.url).href,f.url);case"./lib/base/L.svg":return new URL(new URL("0a4596d1.svg",f.url).href,f.url);case"./lib/base/R.svg":return new URL(new URL("cb268b10.svg",f.url).href,f.url);case"./lib/base/fire.svg":return new URL(new URL("e8b4a48f.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/base/${this.leg}.svg`).href,s=function(e){switch(e){case"./lib/face/0.svg":return new URL(new URL("38b0d66f.svg",f.url).href,f.url);case"./lib/face/1.svg":return new URL(new URL("0d359e99.svg",f.url).href,f.url);case"./lib/face/2.svg":return new URL(new URL("15a1f73a.svg",f.url).href,f.url);case"./lib/face/3.svg":return new URL(new URL("3fe5d04c.svg",f.url).href,f.url);case"./lib/face/4.svg":return new URL(new URL("6c69c29a.svg",f.url).href,f.url);case"./lib/face/5.svg":return new URL(new URL("d5a183a6.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/face/${this.face}.svg`).href,o=function(e){switch(e){case"./lib/faceItem/0.svg":return new URL(new URL("38b0d66f.svg",f.url).href,f.url);case"./lib/faceItem/1.svg":return new URL(new URL("22a1a49e.svg",f.url).href,f.url);case"./lib/faceItem/2.svg":return new URL(new URL("b9948b6b.svg",f.url).href,f.url);case"./lib/faceItem/3.svg":return new URL(new URL("b28bbfb2.svg",f.url).href,f.url);case"./lib/faceItem/4.svg":return new URL(new URL("3d2caf00.svg",f.url).href,f.url);case"./lib/faceItem/5.svg":return new URL(new URL("26696226.svg",f.url).href,f.url);case"./lib/faceItem/6.svg":return new URL(new URL("a83a5596.svg",f.url).href,f.url);case"./lib/faceItem/7.svg":return new URL(new URL("43d36404.svg",f.url).href,f.url);case"./lib/faceItem/8.svg":return new URL(new URL("ed4b86d0.svg",f.url).href,f.url);case"./lib/faceItem/9.svg":return new URL(new URL("08e87d6a.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/faceItem/${this.faceItem}.svg`).href,c=function(e){switch(e){case"./lib/hair/0.svg":return new URL(new URL("2e45ca08.svg",f.url).href,f.url);case"./lib/hair/1.svg":return new URL(new URL("c02ceed0.svg",f.url).href,f.url);case"./lib/hair/2.svg":return new URL(new URL("8132e09f.svg",f.url).href,f.url);case"./lib/hair/3.svg":return new URL(new URL("74cf8b8d.svg",f.url).href,f.url);case"./lib/hair/4.svg":return new URL(new URL("0d344f49.svg",f.url).href,f.url);case"./lib/hair/5.svg":return new URL(new URL("b0f887c4.svg",f.url).href,f.url);case"./lib/hair/6.svg":return new URL(new URL("afe985fd.svg",f.url).href,f.url);case"./lib/hair/7.svg":return new URL(new URL("ff220dde.svg",f.url).href,f.url);case"./lib/hair/8.svg":return new URL(new URL("44a085c4.svg",f.url).href,f.url);case"./lib/hair/9.svg":return new URL(new URL("3b43b8e9.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/hair/${this.hair}.svg`).href,i=function(e){switch(e){case"./lib/pants/0.svg":return new URL(new URL("2f966ff6.svg",f.url).href,f.url);case"./lib/pants/1.svg":return new URL(new URL("9bc53f72.svg",f.url).href,f.url);case"./lib/pants/2.svg":return new URL(new URL("3c6bc74a.svg",f.url).href,f.url);case"./lib/pants/3.svg":return new URL(new URL("28e74258.svg",f.url).href,f.url);case"./lib/pants/4.svg":return new URL(new URL("a7c478b4.svg",f.url).href,f.url);case"./lib/pants/5.svg":return new URL(new URL("36dd4d88.svg",f.url).href,f.url);case"./lib/pants/6.svg":return new URL(new URL("f97a6958.svg",f.url).href,f.url);case"./lib/pants/7.svg":return new URL(new URL("a92ffaf6.svg",f.url).href,f.url);case"./lib/pants/8.svg":return new URL(new URL("bfb4c14c.svg",f.url).href,f.url);case"./lib/pants/9.svg":return new URL(new URL("ff31822b.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/pants/${this.pants}.svg`).href,r=function(e){switch(e){case"./lib/shirt/0.svg":return new URL(new URL("56d67b16.svg",f.url).href,f.url);case"./lib/shirt/1.svg":return new URL(new URL("94399487.svg",f.url).href,f.url);case"./lib/shirt/2.svg":return new URL(new URL("36554f22.svg",f.url).href,f.url);case"./lib/shirt/3.svg":return new URL(new URL("e1bf11a7.svg",f.url).href,f.url);case"./lib/shirt/4.svg":return new URL(new URL("ca72d211.svg",f.url).href,f.url);case"./lib/shirt/5.svg":return new URL(new URL("72f50458.svg",f.url).href,f.url);case"./lib/shirt/6.svg":return new URL(new URL("0ea98ecd.svg",f.url).href,f.url);case"./lib/shirt/7.svg":return new URL(new URL("4340a829.svg",f.url).href,f.url);case"./lib/shirt/8.svg":return new URL(new URL("d73a8441.svg",f.url).href,f.url);case"./lib/shirt/9.svg":return new URL(new URL("d370bae8.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/shirt/${this.shirt}.svg`).href,a=function(e){switch(e){case"./lib/skin/0.svg":return new URL(new URL("665f31a3.svg",f.url).href,f.url);case"./lib/skin/1.svg":return new URL(new URL("75bfdc7f.svg",f.url).href,f.url);case"./lib/skin/2.svg":return new URL(new URL("7941e700.svg",f.url).href,f.url);case"./lib/skin/3.svg":return new URL(new URL("330d77b2.svg",f.url).href,f.url);case"./lib/skin/4.svg":return new URL(new URL("cd068bc0.svg",f.url).href,f.url);case"./lib/skin/5.svg":return new URL(new URL("3a5eff37.svg",f.url).href,f.url);case"./lib/skin/6.svg":return new URL(new URL("13fd1fd9.svg",f.url).href,f.url);case"./lib/skin/7.svg":return new URL(new URL("db634ea7.svg",f.url).href,f.url);case"./lib/skin/8.svg":return new URL(new URL("74857524.svg",f.url).href,f.url);case"./lib/skin/9.svg":return new URL(new URL("31f40cc7.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/skin/${this.skin}.svg`).href;let m=this.hat;this.fire&&"none"===this.hat?m="coffee":"random"===this.hat&&(m=De[Math.floor(Math.random()*De.length)]);const n=function(e){switch(e){case"./lib/hat/bunny.svg":return new URL(new URL("a96d3b68.svg",f.url).href,f.url);case"./lib/hat/coffee.svg":return new URL(new URL("294e4ec4.svg",f.url).href,f.url);case"./lib/hat/construction.svg":return new URL(new URL("5f86d2fe.svg",f.url).href,f.url);case"./lib/hat/cowboy.svg":return new URL(new URL("63bbee54.svg",f.url).href,f.url);case"./lib/hat/edit.svg":return new URL(new URL("bae7914a.svg",f.url).href,f.url);case"./lib/hat/education.svg":return new URL(new URL("5973c1f7.svg",f.url).href,f.url);case"./lib/hat/error.svg":return new URL(new URL("e8bd623f.svg",f.url).href,f.url);case"./lib/hat/good.svg":return new URL(new URL("4885acde.svg",f.url).href,f.url);case"./lib/hat/knight.svg":return new URL(new URL("c0d29bcc.svg",f.url).href,f.url);case"./lib/hat/ninja.svg":return new URL(new URL("8cf5d557.svg",f.url).href,f.url);case"./lib/hat/none.svg":return new URL(new URL("763afcf5.svg",f.url).href,f.url);case"./lib/hat/party.svg":return new URL(new URL("ef24bb04.svg",f.url).href,f.url);case"./lib/hat/pirate.svg":return new URL(new URL("7a694e19.svg",f.url).href,f.url);case"./lib/hat/warning.svg":return new URL(new URL("c85f0bb7.svg",f.url).href,f.url);case"./lib/hat/watermelon.svg":return new URL(new URL("8a9bf483.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/hat/${m}.svg`).href,d=function(e){switch(e){case"./lib/hatColor/0.svg":return new URL(new URL("86cc6302.svg",f.url).href,f.url);case"./lib/hatColor/1.svg":return new URL(new URL("18552b55.svg",f.url).href,f.url);case"./lib/hatColor/2.svg":return new URL(new URL("8c62c994.svg",f.url).href,f.url);case"./lib/hatColor/3.svg":return new URL(new URL("8ed12a6a.svg",f.url).href,f.url);case"./lib/hatColor/4.svg":return new URL(new URL("3fef14a5.svg",f.url).href,f.url);case"./lib/hatColor/5.svg":return new URL(new URL("44d9f8a4.svg",f.url).href,f.url);case"./lib/hatColor/6.svg":return new URL(new URL("f1116ebf.svg",f.url).href,f.url);case"./lib/hatColor/7.svg":return new URL(new URL("48dfbc38.svg",f.url).href,f.url);case"./lib/hatColor/8.svg":return new URL(new URL("a5f7515d.svg",f.url).href,f.url);case"./lib/hatColor/9.svg":return new URL(new URL("0f4611c1.svg",f.url).href,f.url);default:return new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}}(`./lib/hatColor/${this.hatColor}.svg`).href,h=new URL(new URL("e8b4a48f.svg",f.url).href,f.url).href,p=new URL(new URL("92fa7ead.svg",f.url).href,f.url).href;return ge`
      <div class="wrapper">
        ${this.renderPiece(a)}
        ${1===this.base?this.renderPiece(c):""}
        ${this.renderPiece(s)} ${this.renderPiece(o)}
        ${this.renderPiece(r)} ${this.renderPiece(i)}
        ${this.renderPiece(e)} ${this.renderPiece(t)}
        ${""!==this.leg?this.renderPiece(l):""}
        ${this.renderPiece(d)} ${this.fire?this.renderPiece(h):""}
        ${"none"!==m?this.renderPiece(n):""}
        ${this.circle?this.renderPiece(p):""}
      </div>
      ${this.demo?ge`<div id="demo">${this.seed}</div>`:""}
      <style>
        #cardcircle {
          fill: var(
            --simple-colors-default-theme-${this.accentColor}-8,
            var(--simple-colors-default-theme-accent-8, yellow)
          );
        }
        div {
          width: ${this.width+"px"};
        }
        .wrapper {
          height: ${this.height+"px"};
        }
      </style>
    `}renderPiece(e){return xe`
    <svg xmlns="http://www.w3.org/2000/svg" part="rpg-character-item" viewBox="0 0 ${this.width} ${this.height}" preserveAspectRatio="xMidYMid meet">
      <image
        href="${e}"
        width="${this.width}px"
        height="${this.height}px"
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
      ></image>
    </svg>`}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{if("fire"===t&&(this.speed=this[t]?100:500),"demo"===t&&(this[t]?this.shadowRoot.querySelector(".wrapper").addEventListener("click",(e=>{this.seed=Math.random().toString(36).substring(2,12)})):this.shadowRoot.querySelector(".wrapper").removeEventListener("click",(e=>{e.target.seed=Math.random().toString(36).substring(2,12)}))),("leg"===t||"walking"===t)&&this.walking&&!this.reduceMotion&&(clearTimeout(this.__walkingTimeout),this.__walkingTimeout=setTimeout((()=>{switch(this.leg){case"":this.leg="R";break;case"R":this.leg="L";break;case"L":this.leg=""}}),this.speed)),"seed"===t&&this[t]){let e=54;for(let t=0;t<this.seed.length;t++)t<64&&(e*=this.seed.charCodeAt(t));const l={zpg:"7501517984378880262144",edtechjoker:"712215550",btopro:"7122155501"};e=BigInt(e).toString(),Object.keys(l).includes(this[t])&&(e=l[this[t]]),this.literalseed&&(e=BigInt(this.seed).toString()),Object.keys(Be).forEach(((t,l)=>{void 0!==e[l]?this[t]="leg"===t?Be[t][Math.floor(Math.random()*Object.keys(Be[t]).length)]:"base"===t?e[l]>=5?1:0:"face"===t&&e[l]>5?1:e[l]:this[t]=0}))}}))}static get haxProperties(){return function(e){return"./lib/rpg-character.haxProperties.json"===e?new URL(new URL("34e50329.json",f.url).href,f.url):new Promise((function(t,l){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic new URL statement: "+e)))}))}(`./lib/${this.tag}.haxProperties.json`).href}}customElements.define(He.tag,He);export{He as RpgCharacter,Be as charBuilder,De as hatList};
