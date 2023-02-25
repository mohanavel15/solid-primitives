(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const y={},ce=(e,t)=>e===t,$=Symbol("solid-proxy"),L={equals:ce};let ue=te;const m=1,O=2,Y={owned:null,cleanups:null,context:null,owner:null};var d=null;let b=null,u=null,a=null,p=null,U=0;function ae(e,t){const n=u,s=d,i=e.length===0,o=i?Y:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>j(()=>_(o)));d=o,u=null;try{return S(r,!0)}finally{u=n,d=s}}function I(e,t){t=t?Object.assign({},L,t):L;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),Z(n,i));return[J.bind(n),s]}function x(e,t,n){const s=z(e,t,!1,m);k(s)}function P(e,t,n){n=n?Object.assign({},L,n):L;const s=z(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,k(s),J.bind(s)}function j(e){const t=u;u=null;try{return e()}finally{u=t}}function J(){const e=b;if(this.sources&&(this.state||e))if(this.state===m||e)k(this);else{const t=a;a=null,S(()=>T(this),!1),a=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function Z(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=b&&b.running;r&&b.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?a.push(o):p.push(o),o.observers&&ne(o)),r||(o.state=m)}if(a.length>1e6)throw a=[],new Error},!1)),t}function k(e){if(!e.fn)return;_(e);const t=d,n=u,s=U;u=d=e,he(e,e.value,s),u=n,d=t}function he(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=m,e.owned&&e.owned.forEach(_),e.owned=null),se(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Z(e,s):e.value=s,e.updatedAt=n)}function z(e,t,n,s=m,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==Y&&(d.owned?d.owned.push(o):d.owned=[o]),o}function ee(e){const t=b;if(e.state===0||t)return;if(e.state===O||t)return T(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<U);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===m||t)k(e);else if(e.state===O||t){const i=a;a=null,S(()=>T(e,n[0]),!1),a=i}}function S(e,t){if(a)return e();let n=!1;t||(a=[]),p?n=!0:p=[],U++;try{const s=e();return de(n),s}catch(s){a||(p=null),se(s)}}function de(e){if(a&&(te(a),a=null),e)return;const t=p;p=null,t.length&&S(()=>ue(t),!1)}function te(e){for(let t=0;t<e.length;t++)ee(e[t])}function T(e,t){const n=b;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===m||n?i!==t&&ee(i):(i.state===O||n)&&T(i,t))}}function ne(e){const t=b;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=O,s.pure?a.push(s):p.push(s),s.observers&&ne(s))}}function _(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),r=n.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)_(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ge(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function se(e){throw e=ge(e),e}function q(e,t){return j(()=>e(t||{}))}function C(){return!0}const ye={get(e,t,n){return t===$?n:e.get(t)},has(e,t){return t===$?!0:e.has(t)},set:C,deleteProperty:C,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:C,deleteProperty:C}},ownKeys(e){return e.keys()}};function D(e){return(e=typeof e=="function"?e():e)?e:{}}function be(...e){let t=!1;for(let s=0;s<e.length;s++){const i=e[s];t=t||!!i&&$ in i,e[s]=typeof i=="function"?(t=!0,P(i)):i}if(t)return new Proxy({get(s){for(let i=e.length-1;i>=0;i--){const o=D(e[i])[s];if(o!==void 0)return o}},has(s){for(let i=e.length-1;i>=0;i--)if(s in D(e[i]))return!0;return!1},keys(){const s=[];for(let i=0;i<e.length;i++)s.push(...Object.keys(D(e[i])));return[...new Set(s)]}},ye);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const i=Object.getOwnPropertyDescriptors(e[s]);for(const o in i)o in n||Object.defineProperty(n,o,{enumerable:!0,get(){for(let r=e.length-1;r>=0;r--){const l=(e[r]||{})[o];if(l!==void 0)return l}}})}return n}function pe(e){let t=!1;const n=e.keyed,s=P(()=>e.when,void 0,{equals:(i,o)=>t?i===o:!i==!o});return P(()=>{const i=s();if(i){const o=e.children,r=typeof o=="function"&&o.length>0;return t=n||r,r?j(()=>o(i)):o}return e.fallback},void 0,void 0)}const me=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],we=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...me]),xe=new Set(["innerHTML","textContent","innerText","children"]),Ae=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),K=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Se=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ce={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ee(e,t,n){let s=n.length,i=t.length,o=s,r=0,l=0,c=t[i-1].nextSibling,f=null;for(;r<i||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===r){const h=o<s?l?n[l-1].nextSibling:n[o-l]:c;for(;l<o;)e.insertBefore(n[l++],h)}else if(o===l)for(;r<i;)(!f||!f.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[i-1]){const h=t[--i].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],h),t[i]=n[o]}else{if(!f){f=new Map;let g=l;for(;g<o;)f.set(n[g],g++)}const h=f.get(t[r]);if(h!=null)if(l<h&&h<o){let g=r,B=1,v;for(;++g<i&&g<o&&!((v=f.get(t[g]))==null||v!==h+B);)B++;if(B>h-l){const fe=t[r];for(;l<h;)e.insertBefore(n[l++],fe)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}const V="_$DX_DELEGATE";function Ne(e,t,n,s={}){let i;return ae(o=>{i=o,t===document?e():re(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function ie(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function oe(e,t=window.document){const n=t[V]||(t[V]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Be))}}function le(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function $e(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Le(e,t){t==null?e.removeAttribute("class"):e.className=t}function Oe(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=o=>i.call(e,n[1],o))}else e.addEventListener(t,n)}function Pe(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let o,r;for(o=0,r=i.length;o<r;o++){const l=i[o];!l||l==="undefined"||t[l]||(H(e,l,!1),delete n[l])}for(o=0,r=s.length;o<r;o++){const l=s[o],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(H(e,l,!0),n[l]=c)}return n}function Te(e,t,n){if(!t)return n?le(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,o;for(o in n)t[o]==null&&s.removeProperty(o),delete n[o];for(o in t)i=t[o],i!==n[o]&&(s.setProperty(o,i),n[o]=i);return n}function je(e,t={},n,s){const i={};return s||x(()=>i.children=A(e,t.children,i.children)),x(()=>t.ref&&t.ref(e)),x(()=>ke(e,t,n,!0,i,!0)),i}function re(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return A(e,t,s,n);x(i=>A(e,t(),i,n),s)}function ke(e,t,n,s,i={},o=!1){t||(t={});for(const r in i)if(!(r in t)){if(r==="children")continue;i[r]=X(e,r,null,i[r],n,o)}for(const r in t){if(r==="children"){s||A(e,t.children);continue}const l=t[r];i[r]=X(e,r,l,i[r],n,o)}}function _e(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function H(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,o=s.length;i<o;i++)e.classList.toggle(s[i],n)}function X(e,t,n,s,i,o){let r,l,c;if(t==="style")return Te(e,n,s);if(t==="classList")return Pe(e,n,s);if(n===s)return s;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const f=t.slice(3);s&&e.removeEventListener(f,s),n&&e.addEventListener(f,n)}else if(t.slice(0,10)==="oncapture:"){const f=t.slice(10);s&&e.removeEventListener(f,s,!0),n&&e.addEventListener(f,n,!0)}else if(t.slice(0,2)==="on"){const f=t.slice(2).toLowerCase(),h=Se.has(f);if(!h&&s){const g=Array.isArray(s)?s[0]:s;e.removeEventListener(f,g)}(h||n)&&(Oe(e,f,n,h),h&&oe([f]))}else if((c=xe.has(t))||!i&&(K[t]||(l=we.has(t)))||(r=e.nodeName.includes("-")))t==="class"||t==="className"?Le(e,n):r&&!l&&!c?e[_e(t)]=n:e[K[t]||t]=n;else{const f=i&&t.indexOf(":")>-1&&Ce[t.split(":")[0]];f?$e(e,f,t,n):le(e,Ae[t]||t,n)}return n}function Be(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function A(e,t,n,s,i){for(y.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(y.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=w(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(y.context)return n;n=w(e,n,s)}else{if(o==="function")return x(()=>{let l=t();for(;typeof l=="function";)l=l();n=A(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(F(l,t,n,i))return x(()=>n=A(e,l,n,s,!0)),()=>n;if(y.context){if(!l.length)return n;for(let f=0;f<l.length;f++)if(l[f].parentNode)return n=l}if(l.length===0){if(n=w(e,n,s),r)return n}else c?n.length===0?G(e,l,s):Ee(e,n,l):(n&&w(e),G(e,l));n=l}else if(t instanceof Node){if(y.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=w(e,n,s,t);w(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function F(e,t,n,s){let i=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],c=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=F(e,l,c)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=F(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||i}else e.push(l),i=!0;else{const f=String(l);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return i}function G(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function w(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const c=l.parentNode===e;!o&&!r?c?e.replaceChild(i,l):e.insertBefore(i,n):c&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}function E(){return!0}const De={get(e,t,n){return t===$?n:e.get(t)},has(e,t){return e.has(t)},set:E,deleteProperty:E,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:E,deleteProperty:E}},ownKeys(e){return e.keys()}};function Q(e){return(...t)=>{for(const n of e)typeof n=="function"&&n(...t)}}var R=e=>typeof e=="function"&&!e.length?e():e;const Me=/([^:; ]*):\s*([^;]*)/g;function W(e){const t={};let n;for(;n=Me.exec(e);)t[n[1]]=n[2];return t}function qe(e,t){if(typeof e=="object"&&typeof t=="object")return{...e,...t};if(typeof e=="string"&&typeof t=="string")return`${e};${t}`;const n=typeof e=="object"?e:W(e),s=typeof t=="object"?t:W(t);return{...n,...s}}const M=(e,t,n)=>{let s;for(const i of e){const o=R(i)[t];s?o&&(s=n(s,o)):s=o}return s};function N(...e){if(e.length===1)return e[0];const t={};for(const s of e){const i=R(s);for(const o in i)if(o[0]==="o"&&o[1]==="n"&&o[2]){const r=i[o],l=o.toLowerCase(),c=typeof r=="function"?r:Array.isArray(r)?r.length===1?r[0]:r[0].bind(void 0,r[1]):void 0;c?t[l]?t[l].push(c):t[l]=[c]:delete t[l]}}const n=be(...e);return new Proxy({get(s){if(typeof s!="string")return Reflect.get(n,s);if(s==="style")return M(e,"style",qe);if(s==="ref"){const i=[];for(const o of e){const r=R(o)[s];typeof r=="function"&&i.push(r)}return Q(i)}if(s[0]==="o"&&s[1]==="n"&&s[2]){const i=t[s.toLowerCase()];return i?Q(i):Reflect.get(n,s)}return s==="class"||s==="className"?M(e,s,(i,o)=>`${i} ${o}`):s==="classList"?M(e,s,(i,o)=>({...i,...o})):Reflect.get(n,s)},has(s){return Reflect.has(n,s)},keys(){return Object.keys(n)}},De)}const Fe=ie("<button></button>"),Re=ie('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-v"><button>Toggle</button></div></div>'),Ue=e=>{const t=N(N(N(N(e,{class:"btn",onClick:()=>console.log("click"),type:"button",onmouseenter:()=>console.log("mouse enter"),onmouseleave:()=>console.log("mouse leave"),style:{color:"#eee"}}),{onClick:()=>console.log("click 2"),onmouseenter:()=>console.log("mouse enter 2"),"aria-label":"button",style:{padding:"8px 16px"}}),{onClick:()=>console.log("click 3"),onkeydown:()=>console.log("key down"),"aria-label":"button 2"}),{onClick:()=>console.log("click 4"),onkeydown:()=>console.log("key down 2"),"aria-label":"button 3",class:"btn-primary",style:{color:"#fff"}});return(()=>{const n=Fe.cloneNode(!0);return je(n,t,!1,!1),n})()},ve=()=>{const[e,t]=I(!0),[n,s]=I(0),i=()=>s(n()+1);return(()=>{const o=Re.cloneNode(!0),r=o.firstChild,l=r.firstChild;return l.$$click=()=>t(!e()),re(r,q(pe,{get when(){return e()},get children(){return Array.from({length:2e3},(c,f)=>q(Ue,{class:"btn-primary",onClick:i,get children(){return[f,"_",P(()=>n())]}}))}}),null),o})()};Ne(()=>q(ve,{}),document.getElementById("root"));oe(["click"]);
