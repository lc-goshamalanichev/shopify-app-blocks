const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),o=new WeakMap;class i{constructor(e,o,i){if(this._$cssResult$=!0,i!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=o.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(i,t))}return t}toString(){return this.cssText}}const r=(e,...o)=>{const r=1===e.length?e[0]:o.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new i(r,e,t)},s=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let o="";for(const t of e.cssRules)o+=t.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,t))(o)})(e):e;var n;const a=window.trustedTypes,l=a?a.emptyScript:"",d=window.reactiveElementPolyfillSupport,c={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},p=(e,t)=>t!==e&&(t==t||e==e),h={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:p};class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const i=this._$Ep(o,t);void 0!==i&&(this._$Ev.set(i,o),e.push(i))})),e}static createProperty(e,t=h){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{e?t.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=e.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=h){var i,r;const s=this.constructor._$Ep(e,o);if(void 0!==s&&!0===o.reflect){const n=(null!==(r=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:c.toAttribute)(t,o.type);this._$El=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var o,i;const r=this.constructor,s=r._$Ev.get(e);if(void 0!==s&&this._$El!==s){const e=r.getPropertyOptions(s),n=e.converter,a=null!==(i=null!==(o=null==n?void 0:n.fromAttribute)&&void 0!==o?o:"function"==typeof n?n:null)&&void 0!==i?i:c.fromAttribute;this._$El=s,this[s]=a(t,e.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var _;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:u}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.3.3");const m=globalThis.trustedTypes,v=m?m.createPolicy("lit-html",{createHTML:e=>e}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,y="?"+x,b=`<${y}>`,g=document,f=(e="")=>g.createComment(e),$=e=>null===e||"object"!=typeof e&&"function"!=typeof e,A=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,C=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,P=/"/g,T=/^(?:script|style|textarea|title)$/i,O=(e=>(t,...o)=>({_$litType$:e,strings:t,values:o}))(1),M=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,U=g.createTreeWalker(g,129,null,!1),R=(e,t)=>{const o=e.length-1,i=[];let r,s=2===t?"<svg>":"",n=w;for(let t=0;t<o;t++){const o=e[t];let a,l,d=-1,c=0;for(;c<o.length&&(n.lastIndex=c,l=n.exec(o),null!==l);)c=n.lastIndex,n===w?"!--"===l[1]?n=S:void 0!==l[1]?n=C:void 0!==l[2]?(T.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=E):void 0!==l[3]&&(n=E):n===E?">"===l[0]?(n=null!=r?r:w,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?E:'"'===l[3]?P:k):n===P||n===k?n=E:n===S||n===C?n=w:(n=E,r=void 0);const p=n===E&&e[t+1].startsWith("/>")?" ":"";s+=n===w?o+b:d>=0?(i.push(a),o.slice(0,d)+"$lit$"+o.slice(d)+x+p):o+x+(-2===d?(i.push(void 0),t):p)}const a=s+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(a):a,i]};class N{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,s=0;const n=e.length-1,a=this.parts,[l,d]=R(e,t);if(this.el=N.createElement(l,o),U.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=U.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(x)){const o=d[s++];if(e.push(t),void 0!==o){const e=i.getAttribute(o.toLowerCase()+"$lit$").split(x),t=/([.?@])?(.*)/.exec(o);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?V:"?"===t[1]?D:"@"===t[1]?F:j})}else a.push({type:6,index:r})}for(const t of e)i.removeAttribute(t)}if(T.test(i.tagName)){const e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=m?m.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],f()),U.nextNode(),a.push({type:2,index:++r});i.append(e[t],f())}}}else if(8===i.nodeType)if(i.data===y)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(x,e+1));)a.push({type:7,index:r}),e+=x.length-1}r++}}static createElement(e,t){const o=g.createElement("template");return o.innerHTML=e,o}}function H(e,t,o=e,i){var r,s,n,a;if(t===M)return t;let l=void 0!==i?null===(r=o._$Cl)||void 0===r?void 0:r[i]:o._$Cu;const d=$(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,o,i)),void 0!==i?(null!==(n=(a=o)._$Cl)&&void 0!==n?n:a._$Cl=[])[i]=l:o._$Cu=l),void 0!==l&&(t=H(e,l._$AS(e,t.values),l,i)),t}class z{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:i}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:g).importNode(o,!0);U.currentNode=r;let s=U.nextNode(),n=0,a=0,l=i[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new L(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new W(s,this,e)),this.v.push(t),l=i[++a]}n!==(null==l?void 0:l.index)&&(s=U.nextNode(),n++)}return r}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class L{constructor(e,t,o,i){var r;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cg=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),$(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==M&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return A(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==B&&$(this._$AH)?this._$AA.nextSibling.data=e:this.k(g.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=N.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.m(o);else{const e=new z(r,this),t=e.p(this.options);e.m(o),this.k(t),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new N(e)),t}S(e){A(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new L(this.M(f()),this.M(f()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class j{constructor(e,t,o,i,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const r=this.strings;let s=!1;if(void 0===r)e=H(this,e,t,0),s=!$(e)||e!==this._$AH&&e!==M,s&&(this._$AH=e);else{const i=e;let n,a;for(e=r[0],n=0;n<r.length-1;n++)a=H(this,i[o+n],t,n),a===M&&(a=this._$AH[n]),s||(s=!$(a)||a!==this._$AH[n]),a===B?e=B:e!==B&&(e+=(null!=a?a:"")+r[n+1]),this._$AH[n]=a}s&&!i&&this.C(e)}C(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class V extends j{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===B?void 0:e}}const I=m?m.emptyScript:"";class D extends j{constructor(){super(...arguments),this.type=4}C(e){e&&e!==B?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class F extends j{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=H(this,e,t,0))&&void 0!==o?o:B)===M)return;const i=this._$AH,r=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==B&&(i===B||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class W{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}const X=window.litHtmlPolyfillSupport;var J,Z;null==X||X(N,L),(null!==(_=globalThis.litHtmlVersions)&&void 0!==_?_:globalThis.litHtmlVersions=[]).push("2.2.6");class G extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var i,r;const s=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:t;let n=s._$litPart$;if(void 0===n){const e=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:null;s._$litPart$=n=new L(t.insertBefore(f(),e),e,void 0,null!=o?o:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return M}}G.finalized=!0,G._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:G});const K=globalThis.litElementPolyfillSupport;null==K||K({LitElement:G}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.1");const Y=1;const Q=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){var t;if(super(e),e.type!==Y||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,o)=>{const i=e[o];return null==i?t:t+`${o=o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ct){this.ct=new Set;for(const e in t)this.ct.add(e);return this.render(t)}this.ct.forEach((e=>{null==t[e]&&(this.ct.delete(e),e.includes("-")?o.removeProperty(e):o[e]="")}));for(const e in t){const i=t[e];null!=i&&(this.ct.add(e),e.includes("-")?o.setProperty(e,i):o[e]=i)}return M}});window.customElements.define("boxer-product-offer",class extends G{static get styles(){return r`
      .boxer-offer-container {
        max-width: 410px;
        padding-bottom: 16px;
      }

      .boxer-offer-placeholder__content {
        border: 1px solid #00b0ff;
        border-radius: 4px;
      }

      @media only screen and (max-width: 510px) {
        .boxer-offer-container {
          max-width: calc(70% + 115px);
        }
      }

      .boxer-learn-more-modal {
        display: none;
        position: fixed;
        z-index: 99999999;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(235, 235, 235, 0.7);
        overflow: auto;
      }

      .boxer-learn-more-modal * {
        font-family: Helvetica, Arial, Sans-Serif;
        padding: 0;
        margin: 0;
        letter-spacing: -0.25px;
      }

      .boxer-learn-more-modal__content {
        background-color: #fefefe;
        display: inline-block;
        height: min-content;
        max-width: 744px;
        margin: auto auto;
        padding: 18px;
        border-radius: 12px;
      }

      .boxer-learn-more-modal__header {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 4px;
      }

      .boxer-learn-more-modal__header--heading {
        color: #1a237e;
        font-size: 36px;
        line-height: 1.2;
        letter-spacing: -2px;
        margin: 0;
      }

      .boxer-learn-more-modal__header--image {
        display: none;
      }

      .boxer-learn-more-modal__promises {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 12px;
      }

      .boxer-learn-more-modal__promises--promise {
        display: flex;
        align-items: center;
      }

      .boxer-learn-more-modal__promises--text {
        line-height: 18px;
        font-size: 14px;
        margin: 0;
        display: inline-block;
        padding-left: 12px;
        color: #1a237e;
      }

      .boxer-learn-more-modal__links {
        color: #0091ea;
        display: block;
        margin-top: 12px;
      }

      .boxer-learn-more-modal__links a {
        text-decoration: none;
      }

      .boxer-learn-more-modal__links--border {
        font-size: 14px;
        line-height: 16px;
        display: inline-block;
        border: 1px #00b0ff solid;
        padding: 12px 18px;
        border-radius: 4px;
        margin-right: 24px;
      }

      .boxer-learn-more-modal__links-container {
        white-space: nowrap;
        margin-top: 24px;
      }

      .boxer-learn-more-modal__promises--image-container {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
      }

      .boxer-learn-more-modal__links--link {
        color: #0091ea;
      }

      .reset-margin {
        margin: 0;
      }

      @media screen and (min-width: 768px) {
        .boxer-learn-more-modal__container {
          padding-right: 48px;
        }

        .boxer-learn-more-modal__content {
          padding: 12px 24px 48px 48px;
        }

        .boxer-learn-more-modal__promises {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 6px;
        }

        .boxer-learn-more-modal__header--image {
          width: 106px;
          height: 102px;
          padding-right: 4px;
          display: block;
        }

        .boxer-learn-more-modal__links-container {
          display: inline-block;
          margin-top: 0px;
        }

        .boxer-learn-more-modal__links {
          align-items: center;
          display: inline-block;
        }
      }
    `}static get properties(){return{cart:{type:Object},product:{type:Object},moneyFormat:{type:String,attribute:"money-format"},moneyWithCurrencyFormat:{type:String,attribute:"money-with-currency-format"},productVariantSelector:{type:String,attribute:"product-variant-selector"},boxerProduct:{type:Object},quoteOptions:{type:Array},selectedVariant:{type:Object},isPlaceholder:{type:Boolean},isExpanded:{type:Boolean},isModalOpen:{type:Boolean},isAddedToCart:{type:Boolean}}}connectedCallback(){super.connectedCallback(),this.disableProductButtons(),this.hookIntoFetch();const e=document.querySelector(this.productVariantSelector);this.selectedVariant=this.product.variants.find((t=>t.id.toString()===e.value)),e.addEventListener("change",(e=>this.handleSelectedVariantChange(e)))}disconnectedCallback(){super.disconnectedCallback();document.querySelector(this.productVariantSelector).removeEventListener("change",(e=>this.handleSelectedVariantChange(e)))}formatMoney(e,t){if("function"==typeof Shopify.formatMoney)return Shopify.formatMoney(e,t);"string"==typeof e&&(e=e.replace(".",""));let o="";const i=/\{\{\s*(\w+)\s*\}\}/,r=t||this.moneyFormat;function s(e,t){return void 0===e?t:e}function n(e,t,o,i){if(t=s(t,2),o=s(o,","),i=s(i,"."),isNaN(e)||null==e)return 0;const r=(e=(e/100).toFixed(t)).split(".");return r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,`$1${o}`)+(r[1]?i+r[1]:"")}switch(r.match(i)[1]){case"amount":o=n(e,2);break;case"amount_no_decimals":o=n(e,0);break;case"amount_with_comma_separator":o=n(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":o=n(e,0,".",",")}return r.replace(i,o)}fetchBoxerProduct(){fetch("https://62c3c793abea8c085a63139e.mockapi.io/quotes",{method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"},cache:"no-cache",body:JSON.stringify({product_description:this.product.description,product_cost_currency:this.cart.currency,product_cost_excl_tax:this.selectedVariant.price/100,product_title:this.product.title})}).then((e=>e.json())).then((e=>{var t,o,i;if(this.quote=e,(null==e||null===(t=e.quote)||void 0===t||null===(o=t[0])||void 0===o||null===(i=o.costs)||void 0===i?void 0:i.length)>0){(async()=>Promise.allSettled(e.quote[0].costs.map((async e=>{const t=await fetch("https://62c3c793abea8c085a63139e.mockapi.io/products/1",{method:"GET",headers:{accept:"application/json"},cache:"no-cache"}),o=await t.json(),i=e.period_months/12,r=1===i?"year":"years";return this.quoteOptions.push({value:o.variants[i-1].id,quoteYears:i,yearText:r}),o}))))().then((e=>{this.boxerProduct=e[0].value}))}})).then((()=>{this.isPlaceholder=!0}))}disableProductButtons(){if("GoBoxer"===this.product.vendor){const e=document.getElementsByTagName("product-form")[0].getElementsByTagName("button");for(let t=0;t<e.length;t++)e[t].disabled=!0,e[t].setAttribute("aria-disabled",!0)}}toggleExpand(){this.isExpanded=!this.isExpanded}toggleModalOpen(){this.isModalOpen=!this.isModalOpen,this.isModalOpen?document.body.style.overflow="hidden":document.body.style.overflow="auto"}handleOutsideClick(e){e.composedPath()[0]===this.shadowRoot.querySelector(".boxer-learn-more-modal")&&(this.isModalOpen=!1)}handleSelectedVariantChange(e){this.selectedVariant=this.product.variants.find((t=>t.id.toString()===e.target.value))}handleAddToCart(e){const{checked:t}=e.target;this.isAddedToCart=t,t&&(this.isExpanded=!0)}titleTemplate(){var e,t;return O`
      <div>
        <p style="margin: 0; line-height: 19px; font-size: 12px">
          <b
            >Add Boxer™ cover from
            ${null!==(e=this.boxerProduct)&&void 0!==e&&e.price?this.formatMoney(null===(t=this.boxerProduct)||void 0===t?void 0:t.price,this.moneyWithCurrencyFormat):"$X.XX"}</b
          >
        </p>
        <p style="margin: 0; line-height: 14px; font-size: 12px">
          Includes carbon offset on shipping.
        </p>
      </div>
    `}hookIntoFetch(){const e=window.fetch;window.fetch=async(...t)=>{if("/cart/add"===t[0]||"/cart/add.js"===t[0]){var o;let e,s;const n="string"==typeof(null===(o=t[1])||void 0===o?void 0:o.body)?JSON.parse(t[1].body):null;if(n)e=null==n?void 0:n.items[0].id,s=null==n?void 0:n.items[0].quantity;else for(const o of null===(i=t[1])||void 0===i||null===(r=i.body)||void 0===r?void 0:r.entries()){var i,r;switch(o[0]){case"id":e=o[1];break;case"quantity":s=o[1]}}const a=this.shadowRoot.querySelector("select[name='boxer_item_id']"),l=String(this.selectedVariant.id);if(a&&e===l){const e=new FormData;e.append("id",parseInt(a.value,10)),e.append("quantity",parseInt(s,10)),e.append("properties[_associated_product_compare_price_amount_cents]",this.shadowRoot.querySelector("input[name='boxer_item_associated_product_compare_price_amount_cents']").value),e.append("properties[_associated_product_compare_price_currency_code]",this.shadowRoot.querySelector("input[name='boxer_item_associated_product_compare_price_currency_code']").value),e.append("properties[_associated_product_title]",this.shadowRoot.querySelector("input[name='boxer_item_associated_product_title']").value),e.append("properties[_associated_product_variant_id]",l),e.append("properties[_boxer_cover_compare_price_amount_cents]",this.shadowRoot.querySelector("input[name='boxer_item_boxer_cover_compare_price_amount_cents']").value),e.append("properties[_boxer_cover_compare_price_currency_code]",this.shadowRoot.querySelector("input[name='boxer_item_boxer_cover_compare_price_currency_code']").value),e.append("properties[_boxer_cover_product_variant_id]",a.value),e.append("properties[_boxer_cover_quote_id]",this.shadowRoot.querySelector("input[name='boxer_item_boxer_cover_quote_id']").value);const t={items:[{id:parseInt(a.value,10),quantity:parseInt(s,10),properties:{_associated_product_compare_price_amount_cents:this.shadowRoot.querySelector("input[name='boxer_item_associated_product_compare_price_amount_cents']").value,_associated_product_compare_price_currency_code:this.shadowRoot.querySelector("input[name='boxer_item_associated_product_compare_price_currency_code']").value,_associated_product_title:this.shadowRoot.querySelector("input[name='boxer_item_associated_product_title']").value,_associated_product_variant_id:this.shadowRoot.querySelector("input[name='boxer_item_associated_product_variant_id']").value,_boxer_cover_compare_price_amount_cents:this.shadowRoot.querySelector("input[name='boxer_item_boxer_cover_compare_price_amount_cents']").value,_boxer_cover_compare_price_currency_code:this.shadowRoot.querySelector("input[name='boxer_item_boxer_cover_compare_price_currency_code']").value,_boxer_cover_product_variant_id:a.value,_boxer_cover_quote_id:this.shadowRoot.querySelector("input[name='boxer_item_boxer_cover_quote_id']").value}}]},o=async()=>fetch("/cart/add",{method:"POST",headers:{"Content-Type":"application/json",accept:"application/json"},cache:"no-cache",body:JSON.stringify(t)});await o()}}return e.apply(window,t)}}constructor(){super(),this.cart={},this.product={},this.boxerProduct=null,this.quote={},this.quoteOptions=[],this.productVariantSelector='input[name="id"]',this.selectedVariant={},this.selectedVariantId="",this.isPlaceholder=!1,this.isExpanded=!1,this.isModalOpen=!1,this.isAddedToCart=!1}render(){var e,t;if(!this.quoteOptions.length)return null;const o=this.isPlaceholder&&(window.Shopify.designMode||"PreviewBarInjector"in window.Shopify);return O`
      <div id="boxer-offer-container" class="boxer-offer-container">
        ${o?O`
              <p
                style="margin: 0; line-height: 16px; font-size: 12px; color: #00B0FF;"
              >
                <b>Boxer placeholder</b>
              </p>
            `:null}

        <div
          style=${o&&Q({border:"1px solid #00B0FF",borderRadius:"4px"})}
        >
          <div style="padding: 6px 2px 6px 10px">
            <div
              style="
                display: grid;
                grid-column-gap: 2px;
                grid-template-columns: 32px auto;
              "
            >
              <div>
                <input
                  type="checkbox"
                  aria-label="${this.isAddedToCart?"Uncheck to exclude Boxer cover from your product":"Check to add Boxer cover with your product"}"
                  name="boxer-options"
                  @change="${this.handleAddToCart}"
                  ?disabled="${o}"
                  style="transform: scale(1.5)"
                />
              </div>
              <div>
                <div
                  style="
                    display: grid;
                    grid-column-gap: 2px;
                    grid-template-columns: auto 56px;
                  "
                >
                  ${this.titleTemplate()}
                  <div style="display: flex; flex-shrink: 0;">
                    <img
                      width="32"
                      height="32"
                      src="https://goboxer.com/shopify-app-assets/boxer-logo-tm.svg"
                      alt="Boxer logo"
                      loading="lazy"
                    />
                    <svg
                      aria-label="Click to expand Boxer offer"
                      aria-hidden="${this.isExpanded}"
                      role="button"
                      @click="${this.toggleExpand}"
                      @keydown="${this.toggleExpand}"
                      style="display: ${this.isExpanded?"none":"block"}; cursor: pointer;"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0002 16.5002C11.7442 16.5002 11.4883 16.4023 11.2933 16.2073L5.29325 10.2072C4.90225 9.81625 4.90225 9.18425 5.29325 8.79325C5.68425 8.40225 6.31625 8.40225 6.70725 8.79325L12.0002 14.0862L17.2933 8.79325C17.6842 8.40225 18.3162 8.40225 18.7072 8.79325C19.0982 9.18425 19.0982 9.81625 18.7072 10.2072L12.7073 16.2073C12.5122 16.4023 12.2562 16.5002 12.0002 16.5002Z"
                        fill="#607D8B"
                      />
                    </svg>
                    <svg
                      aria-label="Click to collapse Boxer offer"
                      aria-hidden="${!this.isExpanded}"
                      role="button"
                      @click="${this.toggleExpand}"
                      @keydown="${this.toggleExpand}"
                      style="display: ${this.isExpanded?"block":"none"}; cursor: pointer;"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.001 8.53773C12.257 8.53773 12.513 8.63573 12.708 8.83073L18.708 14.8307C19.099 15.2217 19.099 15.8537 18.708 16.2447C18.317 16.6357 17.685 16.6357 17.294 16.2447L12.001 10.9517L6.70799 16.2447C6.31699 16.6357 5.68499 16.6357 5.29399 16.2447C4.90299 15.8537 4.90299 15.2217 5.29399 14.8307L11.294 8.83073C11.489 8.63573 11.745 8.53773 12.001 8.53773Z"
                        fill="#607D8B"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  style="display: ${this.isExpanded?"block":"none"};"
                  aria-hidden="${!this.isExpanded}"
                >
                  <div id="boxer-options" style="margin: 6px 0px;">
                    <div
                      style="align-items: center; display: inline-flex; column-gap: 8px;"
                    >
                      <select
                        id="boxer-options-select-value"
                        name="${this.isAddedToCart?"boxer_item_id":""}"
                        style="width: 100%; font-size: 12px; line-height: 14px; padding: 4px;"
                      >
                        ${null!==(e=this.quoteOptions)&&void 0!==e&&e.length?null===(t=this.quoteOptions)||void 0===t?void 0:t.map((({value:e,quoteYears:t,yearText:o},i)=>O`<option
                                  id="boxer-quote-${i}"
                                  value="${e}"
                                >
                                  ${t} ${o} Boxer cover -
                                  ${this.formatMoney(this.boxerProduct.price,this.moneyWithCurrencyFormat)}
                                </option>`)):O`<option>1 year Boxer cover - $X.XX</option>`}
                      </select>

                      ${this.boxerProduct?O`
                            <input
                              id="boxer-associated-product-compare-price-amount-cents"
                              type="hidden"
                              name="${this.isAddedToCart?"boxer_item_associated_product_compare_price_amount_cents":""}"
                              .value="${this.selectedVariant.compare_at_price}"
                            />
                            <input
                              id="boxer-associated-product-compare-price-currency-code"
                              type="hidden"
                              name="${this.isAddedToCart?"boxer_item_associated_product_compare_price_currency_code":""}"
                              .value="${this.cart.currency}"
                            />
                            <input
                              id="boxer-associated-product-variant-id"
                              type="hidden"
                              name="${this.isAddedToCart?"boxer_item_associated_product_variant_id":""}"
                              .value="${this.selectedVariant.id}"
                            />
                            <input
                              id="boxer-associated-product-title"
                              type="hidden"
                              name="${this.isAddedToCart?"boxer_item_associated_product_title":""}"
                              .value="${this.product.title}"
                            />
                            <input
                              id="boxer-cover-compare-price-amount-cents"
                              type="hidden"
                              name="${this.isAddedToCart?"boxer_item_boxer_cover_compare_price_amount_cents":""}"
                              .value="${this.boxerProduct.compare_at_price}"
                            />
                            <input
                              id="boxer-cover-compare-price-currency-code"
                              type="hidden"
                              name="${this.isAddedToCart?"boxer_item_boxer_cover_compare_price_currency_code":""}"
                              .value="${this.cart.currency}"
                            />
                            <input
                              id="boxer-cover-quote-id"
                              type="hidden"
                              name="${this.isAddedToCart?"boxer_item_boxer_cover_quote_id":""}"
                              .value="${this.quote.quote_id}"
                            />
                            <input
                              id="boxer-cover-product-variant-id"
                              type="hidden"
                              name="${this.isAddedToCart?"boxer_item_boxer_cover_product_variant_id":""}"
                              .value="${this.boxerProduct.variants[0].id}"
                            />
                          `:null}
                    </div>
                  </div>

                  <p style="margin: 0px; line-height: 16px; font-size: 12px;">
                    <b> Shop and be sure </b> when you add Boxer cover to your
                    purchase. For a one-off fee you can count on local support
                    where you live, no matter what you are buying and where you
                    are buying from.
                    <button
                      @click="${this.toggleModalOpen}"
                      id="boxer-learn-more"
                      style="
                        margin: 0px;
                        background: none;
                        border: none;
                        padding: 0px;
                        color: #0091ea;
                        cursor: pointer;
                        border-bottom: 1px solid;
                        display: inline-block;
                        font-size: 12px;
                        line-height: 16px;
                      "
                      type="button"
                    >
                      Learn more
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="boxer-learn-more-modal"
        aria-hidden="${this.isModalOpen}"
        style="display: ${this.isModalOpen?"flex":"none"}"
        @click="${this.handleOutsideClick}"
      >
        <div class="boxer-learn-more-modal__content">
          <div style="display: flex; justify-content: end;">
            <img
              style="cursor: pointer;"
              role="button"
              aria-label="Close Boxer modal"
              @click="${this.toggleModalOpen}"
              @keydown="${this.toggleModalOpen}"
              src="https://goboxer.com/shopify-app-assets/boxer-modal-close.svg"
              alt="close modal"
            />
          </div>
          <div class="boxer-learn-more-modal__container">
            <div class="boxer-learn-more-modal__header">
              <div>
                <h1 class="boxer-learn-more-modal__header--heading">
                  <b>Go Boxer&trade; for global shopping success</b>
                </h1>
                <p
                  class="reset-margin"
                  style="margin-top: 6px; color: #455a64; font-size: 12px; line-height: 18px;"
                >
                  When you add Boxer cover to your purchase you can be confident
                  that if something unexpectedly goes wrong you can count on
                  local support where you live – even if what you’re buying
                  comes from 20,000km away.
                </p>
              </div>
              <img
                class="boxer-learn-more-modal__header--image"
                src="https://goboxer.com/shopify-app-assets/boxer-stamp.svg"
                alt="Boxer stamp"
              />
            </div>
            <div
              style="border-top-right-radius: 4px; border-top-left-radius: 4px; margin-top: 18px; padding: 12px 24px 12px 24px; background-color: rgba(128, 216, 255, .2);"
            >
              <p
                class="reset-margin"
                style="padding-bottom: 10px; color: #1a237e; font-size: 15px; line-height: 18px;"
              >
                <b>Boxer will back you up if your purchase...</b>
              </p>
              <div class="boxer-learn-more-modal__promises">
                <div class="boxer-learn-more-modal__promises--promise">
                  <div
                    class="boxer-learn-more-modal__promises--image-container"
                  >
                    <img
                      src="https://goboxer.com/shopify-app-assets/boxer-is-not-delivered.svg"
                      alt="not delivered"
                    />
                  </div>
                  <p class="boxer-learn-more-modal__promises--text">
                    <b>is not delivered</b>
                  </p>
                </div>
                <div class="boxer-learn-more-modal__promises--promise">
                  <div
                    class="boxer-learn-more-modal__promises--image-container"
                  >
                    <img
                      src="https://goboxer.com/shopify-app-assets/boxer-is-counterfeit.svg"
                      alt="not genuine"
                    />
                  </div>
                  <p class="boxer-learn-more-modal__promises--text">
                    <b>is not genuine</b>
                  </p>
                </div>
                <div class="boxer-learn-more-modal__promises--promise">
                  <div
                    class="boxer-learn-more-modal__promises--image-container"
                  >
                    <img
                      src="https://goboxer.com/shopify-app-assets/boxer-is-faulty.svg"
                      alt="faulty"
                    />
                  </div>
                  <p class="boxer-learn-more-modal__promises--text">
                    <b>is faulty</b>
                  </p>
                </div>
              </div>
              <p
                class="reset-margin"
                style="padding: 10px 0px 0px 0px; color: #1a237e; font-size: 12px; line-height: 16px;"
              >
                And if there are extra shipping costs involved to sort out your
                issue, Boxer will take care of those as well.
              </p>
            </div>
            <div
              style="border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; padding: 12px 24px 12px 24px; background-color: #e4fef6; display: flex;"
            >
              <img
                height="40px"
                width="36px"
                src="https://goboxer.com/shopify-app-assets/boxer-sustainability.svg"
                alt="sustainability"
              />
              <p
                class="reset-margin"
                style="color: #033026; margin-left: 12px; font-size: 12px; line-height: 20px;"
              >
                <b
                  >Plus, for every cover added Boxer will offset the carbon cost
                  of shipping your item from our store to you.</b
                >
              </p>
            </div>
            <p
              class="reset-margin"
              style="margin-top: 12px; color: #455a64; font-size: 12px; line-height: 20px;"
            >
              Shop and be sure with Boxer to make your shopping mission a
              success.
            </p>
            <div class="boxer-learn-more-modal__links">
              <a
                class="boxer-learn-more-modal__links--border boxer-learn-more-modal__links--link"
                href="https://goboxer.com/"
                target="_blank"
                ><b>GoBoxer.com</b></a
              >
              <div class="boxer-learn-more-modal__links-container">
                <a
                  class="boxer-learn-more-modal__links--link"
                  style="margin-right: 24px; font-size: 12px; line-height: 14px;"
                  href="https://goboxer.com/info/retailer-or-marketplace-purchase-cover-terms/"
                  target="_blank"
                  >Boxer cover terms</a
                >
                <a
                  class="boxer-learn-more-modal__links--link"
                  style="font-size: 12px; line-height: 14px;"
                  href="https://goboxer.com/legals/privacy-policy"
                  target="_blank"
                  >Privacy statement</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    `}updated(e){e.has("selectedVariant")&&this.fetchBoxerProduct()}});
