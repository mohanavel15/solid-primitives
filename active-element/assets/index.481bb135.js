(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();const p={},se=(e,t)=>e===t,le=Symbol("solid-track"),S={equals:se};let ie=z;const m=1,C=2,H={owned:null,cleanups:null,context:null,owner:null};var a=null;let b=null,c=null,d=null,y=null,D=0;function B(e,t){const n=c,s=a,l=e.length===0,i=l?H:{owned:null,cleanups:null,context:null,owner:t||s},r=l?e:()=>e(()=>v(()=>I(i)));a=i,c=null;try{return A(r,!0)}finally{c=n,a=s}}function k(e,t){t=t?Object.assign({},S,t):S;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=l=>(typeof l=="function"&&(l=l(n.value)),Q(n,l));return[W.bind(n),s]}function $(e,t,n){const s=X(e,t,!1,m);O(s)}function V(e,t,n){n=n?Object.assign({},S,n):S;const s=X(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,O(s),W.bind(s)}function v(e){const t=c;c=null;try{return e()}finally{c=t}}function G(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function oe(){return a}function W(){const e=b;if(this.sources&&(this.state||e))if(this.state===m||e)O(this);else{const t=d;d=null,A(()=>L(this),!1),d=t}if(c){const t=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(t)):(c.sources=[this],c.sourceSlots=[t]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function Q(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&A(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],r=b&&b.running;r&&b.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?d.push(i):y.push(i),i.observers&&J(i)),r||(i.state=m)}if(d.length>1e6)throw d=[],new Error},!1)),t}function O(e){if(!e.fn)return;I(e);const t=a,n=c,s=D;c=a=e,re(e,e.value,s),c=n,a=t}function re(e,t,n){let s;try{s=e.fn(t)}catch(l){e.pure&&(e.state=m),Z(l)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Q(e,s):e.value=s,e.updatedAt=n)}function X(e,t,n,s=m,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:n};return a===null||a!==H&&(a.owned?a.owned.push(i):a.owned=[i]),i}function Y(e){const t=b;if(e.state===0||t)return;if(e.state===C||t)return L(e);if(e.suspense&&v(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===m||t)O(e);else if(e.state===C||t){const l=d;d=null,A(()=>L(e,n[0]),!1),d=l}}function A(e,t){if(d)return e();let n=!1;t||(d=[]),y?n=!0:y=[],D++;try{const s=e();return fe(n),s}catch(s){d||(y=null),Z(s)}}function fe(e){if(d&&(z(d),d=null),e)return;const t=y;y=null,t.length&&A(()=>ie(t),!1)}function z(e){for(let t=0;t<e.length;t++)Y(e[t])}function L(e,t){const n=b;e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];l.sources&&(l.state===m||n?l!==t&&Y(l):(l.state===C||n)&&L(l,t))}}function J(e){const t=b;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=C,s.pure?d.push(s):y.push(s),s.observers&&J(s))}}function I(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const i=l.pop(),r=n.observerSlots.pop();s<l.length&&(i.sourceSlots[r]=s,l[s]=i,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)I(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ue(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Z(e){throw e=ue(e),e}const M=Symbol("fallback");function j(e){for(let t=0;t<e.length;t++)e[t]()}function ce(e,t,n={}){let s=[],l=[],i=[],r=[],o=0,f;return G(()=>j(i)),()=>{const u=e()||[];return u[le],v(()=>{if(u.length===0)return o!==0&&(j(i),i=[],s=[],l=[],o=0,r=[]),n.fallback&&(s=[M],l[0]=B(g=>(i[0]=g,n.fallback())),o=1),l;for(s[0]===M&&(i[0](),i=[],s=[],l=[],o=0),f=0;f<u.length;f++)f<s.length&&s[f]!==u[f]?r[f](()=>u[f]):f>=s.length&&(l[f]=B(h));for(;f<s.length;f++)i[f]();return o=r.length=i.length=u.length,s=u.slice(0),l=l.slice(0,o)});function h(g){i[f]=g;const[x,E]=k(u[f]);return r[f]=E,t(x,f)}}}function P(e,t){return v(()=>e(t||{}))}function ae(e){const t="fallback"in e&&{fallback:()=>e.fallback};return V(ce(()=>e.each,e.children,t||void 0))}function de(e,t,n){let s=n.length,l=t.length,i=s,r=0,o=0,f=t[l-1].nextSibling,u=null;for(;r<l||o<i;){if(t[r]===n[o]){r++,o++;continue}for(;t[l-1]===n[i-1];)l--,i--;if(l===r){const h=i<s?o?n[o-1].nextSibling:n[i-o]:f;for(;o<i;)e.insertBefore(n[o++],h)}else if(i===o)for(;r<l;)(!u||!u.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[i-1]&&n[o]===t[l-1]){const h=t[--l].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--i],h),t[l]=n[i]}else{if(!u){u=new Map;let g=o;for(;g<i;)u.set(n[g],g++)}const h=u.get(t[r]);if(h!=null)if(o<h&&h<i){let g=r,x=1,E;for(;++g<l&&g<i&&!((E=u.get(t[g]))==null||E!==h+x);)x++;if(x>h-o){const ne=t[r];for(;o<h;)e.insertBefore(n[o++],ne)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const q="_$DX_DELEGATE";function he(e,t,n,s={}){let l;return B(i=>{l=i,t===document?e():N(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{l(),t.textContent=""}}function ee(e,t,n){const s=document.createElement("template");s.innerHTML=e;let l=s.content.firstChild;return n&&(l=l.firstChild),l}function ge(e,t=window.document){const n=t[q]||(t[q]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,ye))}}function pe(e,t,n={}){const s=Object.keys(t||{}),l=Object.keys(n);let i,r;for(i=0,r=l.length;i<r;i++){const o=l[i];!o||o==="undefined"||t[o]||(K(e,o,!1),delete n[o])}for(i=0,r=s.length;i<r;i++){const o=s[i],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(K(e,o,!0),n[o]=f)}return n}function be(e,t,n){return v(()=>e(t,n))}function N(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return T(e,t,s,n);$(l=>T(e,t(),l,n),s)}function K(e,t,n){const s=t.trim().split(/\s+/);for(let l=0,i=s.length;l<i;l++)e.classList.toggle(s[l],n)}function ye(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),p.registry&&!p.done&&(p.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n;){const s=n[t];if(s&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?s.call(n,l,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function T(e,t,n,s,l){for(p.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(p.context)return n;if(i==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=w(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(p.context)return n;n=w(e,n,s)}else{if(i==="function")return $(()=>{let o=t();for(;typeof o=="function";)o=o();n=T(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(F(o,t,n,l))return $(()=>n=T(e,o,n,s,!0)),()=>n;if(p.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=w(e,n,s),r)return n}else f?n.length===0?U(e,o,s):de(e,n,o):(n&&w(e),U(e,o));n=o}else if(t instanceof Node){if(p.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=w(e,n,s,t);w(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function F(e,t,n,s){let l=!1;for(let i=0,r=t.length;i<r;i++){let o=t[i],f=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))l=F(e,o,f)||l;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();l=F(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||l}else e.push(o),l=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return l}function U(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function w(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(l!==o){const f=o.parentNode===e;!i&&!r?f?e.replaceChild(l,o):e.insertBefore(l,n):f&&o.remove()}else i=!0}}else e.insertBefore(l,n);return[l]}var me=e=>oe()?G(e):e;function _(e,t,n,s){return e.addEventListener(t,n,s),me(e.removeEventListener.bind(e,t,n,s))}const te=()=>document.activeElement===document.body?null:document.activeElement;function we(e){const t=()=>e(te()),n=_(window,"blur",t,!0),s=_(window,"focus",t,!0);return()=>(n(),s())}function xe(){const[e,t]=k(te());return we(t),e}function ve(e,t,n=!0){const s=_(e,"blur",t.bind(void 0,!1),n),l=_(e,"focus",t.bind(void 0,!0),n);return()=>(s(),l())}const Ae=(e,t)=>{const n=t();n(document.activeElement===e),ve(e,n)};const R=()=>Array.from({length:10},(e,t)=>({x:Math.random()*(window.innerWidth-192),y:Math.random()*(window.innerHeight-192),size:Math.random()+.15,id:t})),Ee=ee('<button class="fixed top-0 left-0 w-48 h-48 rounded-full bg-orange-700 border-none cursor-pointer hover:bg-orange-600 text-4xl font-extrabold text-gray-900"></button>'),Se=ee('<div class="box-border w-full h-screen overflow-hidden bg-gray-900 text-white"><button class="fixed w-64 h-16 top-1/2 left-1/2 -mt-8 -ml-32 rounded-lg bg-transparent border-none text-5xl font-extrabold text-white hover:text-yellow-200 cursor-pointer">Shuffle!</button><div class="absolute top-6 left-6 text-4xl font-extrabold">Active Element: </div></div>'),Ce=e=>{const[t,n]=k(!1);return(()=>{const s=Ee.cloneNode(!0);return be(Ae,s,()=>n),s.style.setProperty("transition","transform 500ms, background 200ms"),N(s,()=>e.children),$(l=>{const i={"!bg-indigo-700 !hover:bg-indigo-600":t()},r=`translate(${e.x}px, ${e.y}px) scale(${e.size})`;return l._v$=pe(s,i,l._v$),r!==l._v$2&&s.style.setProperty("transform",l._v$2=r),l},{_v$:void 0,_v$2:void 0}),s})()},$e=()=>{const[e,t]=k(R()),n=()=>t(R()),s=xe();return(()=>{const l=Se.cloneNode(!0),i=l.firstChild,r=i.nextSibling;return r.firstChild,N(l,P(ae,{get each(){return e()},children:o=>P(Ce,{get x(){return o().x},get y(){return o().y},get size(){return o().size},get children(){return o().id}})}),i),i.$$click=n,N(r,(()=>{const o=V(()=>!!(s()&&s()?.tagName!=="BODY"));return()=>o()?s()?.textContent:"null"})(),null),l})()};he(()=>P($e,{}),document.getElementById("root"));ge(["click"]);
