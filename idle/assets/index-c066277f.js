(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const y={};function ge(e){y.context=e}const ye=(e,n)=>e===n,P={equals:ye};let se=le;const m=1,I=2,ie={owned:null,cleanups:null,context:null,owner:null};var d=null;let b=null,c=null,p=null,w=null,V=0;function we(e,n){const t=c,s=d,i=e.length===0,o=i?ie:{owned:null,cleanups:null,context:null,owner:n||s},l=i?e:()=>e(()=>$(()=>U(o)));d=o,c=null;try{return x(l,!0)}finally{c=t,d=s}}function Y(e,n){n=n?Object.assign({},P,n):P;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),re(t,i));return[oe.bind(t),s]}function q(e,n,t){const s=G(e,n,!1,m);N(s)}function me(e,n,t){se=xe;const s=G(e,n,!1,m);s.user=!0,w?w.push(s):N(s)}function O(e,n,t){t=t?Object.assign({},P,t):P;const s=G(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,N(s),oe.bind(s)}function J(e){return x(e,!1)}function $(e){const n=c;c=null;try{return e()}finally{c=n}}function be(e){me(()=>$(e))}function Ae(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function Ee(e){const n=O(e),t=O(()=>H(n()));return t.toArray=()=>{const s=t();return Array.isArray(s)?s:s!=null?[s]:[]},t}function oe(){const e=b;if(this.sources&&(this.state||e))if(this.state===m||e)N(this);else{const n=p;p=null,x(()=>B(this),!1),p=n}if(c){const n=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(n)):(c.sources=[this],c.sourceSlots=[n]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function re(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&x(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],l=b&&b.running;l&&b.disposed.has(o),(l&&!o.tState||!l&&!o.state)&&(o.pure?p.push(o):w.push(o),o.observers&&fe(o)),l||(o.state=m)}if(p.length>1e6)throw p=[],new Error},!1)),n}function N(e){if(!e.fn)return;U(e);const n=d,t=c,s=V;c=d=e,Se(e,e.value,s),c=t,d=n}function Se(e,n,t){let s;try{s=e.fn(n)}catch(i){e.pure&&(e.state=m,e.owned&&e.owned.forEach(U),e.owned=null),ue(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?re(e,s):e.value=s,e.updatedAt=t)}function G(e,n,t,s=m,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:null,pure:t};return d===null||d!==ie&&(d.owned?d.owned.push(o):d.owned=[o]),o}function k(e){const n=b;if(e.state===0||n)return;if(e.state===I||n)return B(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<V);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===m||n)N(e);else if(e.state===I||n){const i=p;p=null,x(()=>B(e,t[0]),!1),p=i}}function x(e,n){if(p)return e();let t=!1;n||(p=[]),w?t=!0:w=[],V++;try{const s=e();return Te(t),s}catch(s){p||(w=null),ue(s)}}function Te(e){if(p&&(le(p),p=null),e)return;const n=w;w=null,n.length&&x(()=>se(n),!1)}function le(e){for(let n=0;n<e.length;n++)k(e[n])}function xe(e){let n,t=0;for(n=0;n<e.length;n++){const s=e[n];s.user?e[t++]=s:k(s)}for(y.context&&ge(),n=0;n<t;n++)k(e[n])}function B(e,n){const t=b;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===m||t?i!==n&&k(i):(i.state===I||t)&&B(i,n))}}function fe(e){const n=b;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=I,s.pure?p.push(s):w.push(s),s.observers&&fe(s))}}function U(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const o=i.pop(),l=t.observerSlots.pop();s<i.length&&(o.sourceSlots[l]=s,i[s]=o,t.observerSlots[s]=l)}}if(e.owned){for(n=0;n<e.owned.length;n++)U(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function ve(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ue(e){throw e=ve(e),e}function H(e){if(typeof e=="function"&&!e.length)return H(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=H(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}function _(e,n){return $(()=>e(n||{}))}function Ce(e){let n=!1,t=!1;const s=(l,r)=>l[0]===r[0]&&(n?l[1]===r[1]:!l[1]==!r[1])&&l[2]===r[2],i=Ee(()=>e.children),o=O(()=>{let l=i();Array.isArray(l)||(l=[l]);for(let r=0;r<l.length;r++){const f=l[r].when;if(f)return t=!!l[r].keyed,[r,f,l[r]]}return[-1]},void 0,{equals:s});return O(()=>{const[l,r,f]=o();if(l<0)return e.fallback;const u=f.children,h=typeof u=="function"&&u.length>0;return n=t||h,h?$(()=>u(r)):u},void 0,void 0)}function Z(e){return e}function $e(e,n,t){let s=t.length,i=n.length,o=s,l=0,r=0,f=n[i-1].nextSibling,u=null;for(;l<i||r<o;){if(n[l]===t[r]){l++,r++;continue}for(;n[i-1]===t[o-1];)i--,o--;if(i===l){const h=o<s?r?t[r-1].nextSibling:t[o-r]:f;for(;r<o;)e.insertBefore(t[r++],h)}else if(o===r)for(;l<i;)(!u||!u.has(n[l]))&&n[l].remove(),l++;else if(n[l]===t[o-1]&&t[r]===n[i-1]){const h=n[--i].nextSibling;e.insertBefore(t[r++],n[l++].nextSibling),e.insertBefore(t[--o],h),n[i]=t[o]}else{if(!u){u=new Map;let g=r;for(;g<o;)u.set(t[g],g++)}const h=u.get(n[l]);if(h!=null)if(r<h&&h<o){let g=l,A=1,E;for(;++g<i&&g<o&&!((E=u.get(n[g]))==null||E!==h+A);)A++;if(A>h-r){const C=n[l];for(;r<h;)e.insertBefore(t[r++],C)}else e.replaceChild(t[r++],n[l++])}else l++;else n[l++].remove()}}}const z="_$DX_DELEGATE";function Ne(e,n,t,s={}){let i;return we(o=>{i=o,n===document?e():Pe(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function v(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function Le(e,n=window.document){const t=n[z]||(n[z]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];t.has(o)||(t.add(o),n.addEventListener(o,Ie))}}function _e(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function L(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=o=>i.call(e,t[1],o))}else e.addEventListener(n,t)}function ee(e,n,t){if(!n)return t?_e(e,"style"):n;const s=e.style;if(typeof n=="string")return s.cssText=n;typeof t=="string"&&(s.cssText=t=void 0),t||(t={}),n||(n={});let i,o;for(o in t)n[o]==null&&s.removeProperty(o),delete t[o];for(o in n)i=n[o],i!==t[o]&&(s.setProperty(o,i),t[o]=i);return t}function Pe(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return D(e,n,s,t);q(i=>D(e,n(),i,t),s)}function Ie(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function D(e,n,t,s,i){for(y.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,l=s!==void 0;if(e=l&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(y.context)return t;if(o==="number"&&(n=n.toString()),l){let r=t[0];r&&r.nodeType===3?r.data=n:r=document.createTextNode(n),t=T(e,t,s,r)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(y.context)return t;t=T(e,t,s)}else{if(o==="function")return q(()=>{let r=n();for(;typeof r=="function";)r=r();t=D(e,r,t,s)}),()=>t;if(Array.isArray(n)){const r=[],f=t&&Array.isArray(t);if(j(r,n,t,i))return q(()=>t=D(e,r,t,s,!0)),()=>t;if(y.context){if(!r.length)return t;for(let u=0;u<r.length;u++)if(r[u].parentNode)return t=r}if(r.length===0){if(t=T(e,t,s),l)return t}else f?t.length===0?te(e,r,s):$e(e,t,r):(t&&T(e),te(e,r));t=r}else if(n instanceof Node){if(y.context&&n.parentNode)return t=l?[n]:n;if(Array.isArray(t)){if(l)return t=T(e,t,s,n);T(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function j(e,n,t,s){let i=!1;for(let o=0,l=n.length;o<l;o++){let r=n[o],f=t&&t[o];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=j(e,r,f)||i;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();i=j(e,Array.isArray(r)?r:[r],Array.isArray(f)?f:[f])||i}else e.push(r),i=!0;else{const u=String(r);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function te(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function T(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let o=!1;for(let l=n.length-1;l>=0;l--){const r=n[l];if(i!==r){const f=r.parentNode===e;!o&&!l?f?e.replaceChild(i,r):e.insertBefore(i,t):f&&r.remove()}else o=!0}}else e.insertBefore(i,t);return[i]}const Oe=250,ke=9e5,Be=["mousemove","keydown","wheel","resize","wheel","mousedown","pointerdown","touchstart","touchmove","visibilitychange"],De=({element:e,events:n=Be,idleTimeout:t=ke,promptTimeout:s=0,onActive:i,onIdle:o,onPrompt:l,startManually:r=!1}={})=>{let f=!1;const[u,h]=Y(!1),[g,A]=Y(!1);let E,C,K=0;function ce(){const a=new Date().getTime(),S=a-K<Oe;return S||(K=a),S}function Q(a){ce()||(g()&&i?.(a),u()||F(a))}function ae(){if(f)return;const a=e??document;for(const S of n)a.addEventListener(S,Q);f=!0}function F(a){f&&(M(),R(),he(a))}function M(){typeof E=="number"&&clearTimeout(E),typeof C=="number"&&clearTimeout(C)}function he(a){E=setTimeout(()=>{h(!0),l?.(a),de(a)},t)}function de(a){C=setTimeout(()=>{J(()=>{A(!0),h(!1)}),o?.(a)},s)}function R(){J(()=>{A(!1),h(!1)})}function W(a=new CustomEvent("manualstart")){M(),R(),ae(),F(a)}function X(){M(),R(),pe()}function pe(){if(!f)return;const a=e??document;for(const S of n)a.removeEventListener(S,Q);f=!1}return be(()=>{r||W(new CustomEvent("mount"))}),Ae(X),{isIdle:g,isPrompted:u,start:()=>W(),reset:()=>F(new CustomEvent("manualreset")),stop:X}},Ue=v("<div>Hiding the data...</div>"),Fe=v("<div><p>Are you still there?</p><button>yup</button></div>"),Me=v("<h1>Super sensitive data: ******</h1>"),Re=v("<button>stop</button>"),qe=v("<button>start</button>"),He=v("<button>reset</button>"),ne={background:"black",color:"white",display:"grid","place-content":"center",height:"100vh",width:"100vw","max-height":"100%","max-width":"100%"},je=()=>{const{isIdle:e,isPrompted:n,start:t,stop:s,reset:i}=De({onActive:o=>console.log("this event re-activated me ⚡ => ",o),onIdle:o=>console.log("last event before I went to sleep 😴 => ",o),idleTimeout:3e3,promptTimeout:2e3});return _(Ce,{get fallback(){return[Me.cloneNode(!0),(()=>{const o=Re.cloneNode(!0);return L(o,"click",s,!0),o})(),(()=>{const o=qe.cloneNode(!0);return L(o,"click",t,!0),o})(),(()=>{const o=He.cloneNode(!0);return L(o,"click",i,!0),o})()]},get children(){return[_(Z,{get when(){return e()},get children(){const o=Ue.cloneNode(!0);return ee(o,ne),o}}),_(Z,{get when(){return n()},get children(){const o=Fe.cloneNode(!0),l=o.firstChild,r=l.nextSibling;return ee(o,ne),L(r,"click",i,!0),o}})]}})};Ne(()=>_(je,{}),document.getElementById("root"));Le(["click"]);
