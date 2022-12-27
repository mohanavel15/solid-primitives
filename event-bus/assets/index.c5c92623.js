(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const x={};function fe(e){x.context=e}const ae=(e,n)=>e===n,de=Symbol("solid-track"),F={equals:ae};let te=re;const A=1,M=2,ne={owned:null,cleanups:null,context:null,owner:null};var p=null;let C=null,h=null,g=null,S=null,X=0;function D(e,n){const t=h,s=p,l=e.length===0,i=l?ne:{owned:null,cleanups:null,context:null,owner:n||s},o=l?e:()=>e(()=>k(()=>J(i)));p=i,h=null;try{return I(o,!0)}finally{h=t,p=s}}function T(e,n){n=n?Object.assign({},F,n):F;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=l=>(typeof l=="function"&&(l=l(t.value)),ie(t,l));return[le.bind(t),s]}function O(e,n,t){const s=Q(e,n,!1,A);B(s)}function he(e,n,t){te=we;const s=Q(e,n,!1,A);s.user=!0,S?S.push(s):B(s)}function pe(e,n,t){t=t?Object.assign({},F,t):F;const s=Q(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,B(s),le.bind(s)}function k(e){const n=h;h=null;try{return e()}finally{h=n}}function ge(e){he(()=>k(e))}function se(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function me(){return p}function le(){const e=C;if(this.sources&&(this.state||e))if(this.state===A||e)B(this);else{const n=g;g=null,I(()=>W(this),!1),g=n}if(h){const n=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(n)):(h.sources=[this],h.sourceSlots=[n]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function ie(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&I(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],o=C&&C.running;o&&C.disposed.has(i),(o&&!i.tState||!o&&!i.state)&&(i.pure?g.push(i):S.push(i),i.observers&&oe(i)),o||(i.state=A)}if(g.length>1e6)throw g=[],new Error},!1)),n}function B(e){if(!e.fn)return;J(e);const n=p,t=h,s=X;h=p=e,be(e,e.value,s),h=t,p=n}function be(e,n,t){let s;try{s=e.fn(n)}catch(l){e.pure&&(e.state=A),ue(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?ie(e,s):e.value=s,e.updatedAt=t)}function Q(e,n,t,s=A,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:p,context:null,pure:t};return p===null||p!==ne&&(p.owned?p.owned.push(i):p.owned=[i]),i}function U(e){const n=C;if(e.state===0||n)return;if(e.state===M||n)return W(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<X);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===A||n)B(e);else if(e.state===M||n){const l=g;g=null,I(()=>W(e,t[0]),!1),g=l}}function I(e,n){if(g)return e();let t=!1;n||(g=[]),S?t=!0:S=[],X++;try{const s=e();return ve(t),s}catch(s){g||(S=null),ue(s)}}function ve(e){if(g&&(re(g),g=null),e)return;const n=S;S=null,n.length&&I(()=>te(n),!1)}function re(e){for(let n=0;n<e.length;n++)U(e[n])}function we(e){let n,t=0;for(n=0;n<e.length;n++){const s=e[n];s.user?e[t++]=s:U(s)}for(x.context&&fe(),n=0;n<t;n++)U(e[n])}function W(e,n){const t=C;e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];l.sources&&(l.state===A||t?l!==n&&U(l):(l.state===M||t)&&W(l,n))}}function oe(e){const n=C;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=M,s.pure?g.push(s):S.push(s),s.observers&&oe(s))}}function J(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const i=l.pop(),o=t.observerSlots.pop();s<l.length&&(i.sourceSlots[o]=s,l[s]=i,t.observerSlots[s]=o)}}if(e.owned){for(n=0;n<e.owned.length;n++)J(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function ye(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ue(e){throw e=ye(e),e}const xe=Symbol("fallback");function Y(e){for(let n=0;n<e.length;n++)e[n]()}function $e(e,n,t={}){let s=[],l=[],i=[],o=0,r=n.length>1?[]:null;return se(()=>Y(i)),()=>{let c=e()||[],f,u;return c[de],k(()=>{let d=c.length,m,_,P,G,j,w,y,$,N;if(d===0)o!==0&&(Y(i),i=[],s=[],l=[],o=0,r&&(r=[])),t.fallback&&(s=[xe],l[0]=D(ce=>(i[0]=ce,t.fallback())),o=1);else if(o===0){for(l=new Array(d),u=0;u<d;u++)s[u]=c[u],l[u]=D(a);o=d}else{for(P=new Array(d),G=new Array(d),r&&(j=new Array(d)),w=0,y=Math.min(o,d);w<y&&s[w]===c[w];w++);for(y=o-1,$=d-1;y>=w&&$>=w&&s[y]===c[$];y--,$--)P[$]=l[y],G[$]=i[y],r&&(j[$]=r[y]);for(m=new Map,_=new Array($+1),u=$;u>=w;u--)N=c[u],f=m.get(N),_[u]=f===void 0?-1:f,m.set(N,u);for(f=w;f<=y;f++)N=s[f],u=m.get(N),u!==void 0&&u!==-1?(P[u]=l[f],G[u]=i[f],r&&(j[u]=r[f]),u=_[u],m.set(N,u)):i[f]();for(u=w;u<d;u++)u in P?(l[u]=P[u],i[u]=G[u],r&&(r[u]=j[u],r[u](u))):l[u]=D(a);l=l.slice(0,o=d),s=c.slice(0)}return l});function a(d){if(i[u]=d,r){const[m,_]=T(u);return r[u]=_,n(c[u],m)}return n(c[u])}}}function v(e,n){return k(()=>e(n||{}))}function Se(e){const n="fallback"in e&&{fallback:()=>e.fallback};return pe($e(()=>e.each,e.children,n||void 0))}function Ee(e,n,t){let s=t.length,l=n.length,i=s,o=0,r=0,c=n[l-1].nextSibling,f=null;for(;o<l||r<i;){if(n[o]===t[r]){o++,r++;continue}for(;n[l-1]===t[i-1];)l--,i--;if(l===o){const u=i<s?r?t[r-1].nextSibling:t[i-r]:c;for(;r<i;)e.insertBefore(t[r++],u)}else if(i===r)for(;o<l;)(!f||!f.has(n[o]))&&n[o].remove(),o++;else if(n[o]===t[i-1]&&t[r]===n[l-1]){const u=n[--l].nextSibling;e.insertBefore(t[r++],n[o++].nextSibling),e.insertBefore(t[--i],u),n[l]=t[i]}else{if(!f){f=new Map;let a=r;for(;a<i;)f.set(t[a],a++)}const u=f.get(n[o]);if(u!=null)if(r<u&&u<i){let a=o,d=1,m;for(;++a<l&&a<i&&!((m=f.get(n[a]))==null||m!==u+d);)d++;if(d>u-r){const _=n[o];for(;r<u;)e.insertBefore(t[r++],_)}else e.replaceChild(t[r++],n[o++])}else o++;else n[o++].remove()}}}const Z="_$DX_DELEGATE";function Ae(e,n,t,s={}){let l;return D(i=>{l=i,n===document?e():b(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{l(),n.textContent=""}}function E(e,n,t){const s=document.createElement("template");s.innerHTML=e;let l=s.content.firstChild;return t&&(l=l.firstChild),l}function _e(e,n=window.document){const t=n[Z]||(n[Z]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,Te))}}function Ce(e,n,t){return k(()=>e(n,t))}function b(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return H(e,n,s,t);O(l=>H(e,n(),l,t),s)}function Te(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),x.registry&&!x.done&&(x.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));t;){const s=t[n];if(s&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?s.call(t,l,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function H(e,n,t,s,l){for(x.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,o=s!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(x.context)return t;if(i==="number"&&(n=n.toString()),o){let r=t[0];r&&r.nodeType===3?r.data=n:r=document.createTextNode(n),t=L(e,t,s,r)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||i==="boolean"){if(x.context)return t;t=L(e,t,s)}else{if(i==="function")return O(()=>{let r=n();for(;typeof r=="function";)r=r();t=H(e,r,t,s)}),()=>t;if(Array.isArray(n)){const r=[],c=t&&Array.isArray(t);if(q(r,n,t,l))return O(()=>t=H(e,r,t,s,!0)),()=>t;if(x.context){if(!r.length)return t;for(let f=0;f<r.length;f++)if(r[f].parentNode)return t=r}if(r.length===0){if(t=L(e,t,s),o)return t}else c?t.length===0?z(e,r,s):Ee(e,t,r):(t&&L(e),z(e,r));t=r}else if(n instanceof Node){if(x.context&&n.parentNode)return t=o?[n]:n;if(Array.isArray(t)){if(o)return t=L(e,t,s,n);L(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function q(e,n,t,s){let l=!1;for(let i=0,o=n.length;i<o;i++){let r=n[i],c=t&&t[i];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))l=q(e,r,c)||l;else if(typeof r=="function")if(s){for(;typeof r=="function";)r=r();l=q(e,Array.isArray(r)?r:[r],Array.isArray(c)?c:[c])||l}else e.push(r),l=!0;else{const f=String(r);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return l}function z(e,n,t=null){for(let s=0,l=n.length;s<l;s++)e.insertBefore(n[s],t)}function L(e,n,t,s){if(t===void 0)return e.textContent="";const l=s||document.createTextNode("");if(n.length){let i=!1;for(let o=n.length-1;o>=0;o--){const r=n[o];if(l!==r){const c=r.parentNode===e;!i&&!o?c?e.replaceChild(l,r):e.insertBefore(l,t):c&&r.remove()}else i=!0}}else e.insertBefore(l,t);return[l]}var Ne=()=>{},Le=e=>e.slice(),Oe=(e,n)=>{const t=Le(e);return n(t),t},ee=(e,...n)=>n.reduce((t,s)=>(s in e&&(t[s]=e[s]),t),{}),ke=(e,...n)=>Oe(e,t=>t.push(...n)),Pe=(e,n=1)=>e.slice(n),Be=(e,n)=>Ie(e,t=>t!==n);function Ie(e,n){const t=e.filter(n);return t.removed=e.length-t.length,t}const R=e=>me()?se(e):e;function Ge(e){const n=new Set(e);return R(()=>n.clear()),[t=>(n.add(t),R(()=>n.delete(t)),()=>n.delete(t)),(...t)=>n.forEach(s=>s(...t)),()=>n.clear()]}function V(e={}){const{emitGuard:n,removeGuard:t,beforeEmit:s}=e,l=new WeakSet,i=new Set,o=a=>l.has(a)?!1:!!i.delete(a),r=t?a=>t(()=>o(a),a):o,c=(a,d)=>{i.add(a);const m=R(()=>i.delete(a));return d?(l.add(a),()=>{l.delete(a),m()}):m},f=(...a)=>{s?.(...a),i.forEach(d=>d(...a))},u=n?(...a)=>n((...d)=>f(...d.length?d:a),...a):f;return R(()=>i.clear()),{listen:c,emit:u,remove:r,clear:()=>i.forEach(a=>r(a)),has:a=>i.has(a),value:Ne}}function je(e={}){const{value:n}=e,t=V(e),[s,l]=T(n);return{...t,emit:i=>{let o;l(r=>(o=r,i)),t.emit(i,o)},value:s}}function De(e){const n=V(),t=typeof e=="function"?e(je):e,s={};return Object.entries(t).forEach(([l,i])=>{Object.defineProperty(s,l,{get:i.value,enumerable:!0}),i.listen((...o)=>n.emit(l,o),!0)}),{...t,store:s,on:(l,...i)=>t[l].listen(...i),off:(l,...i)=>t[l].remove(...i),emit:(l,...i)=>t[l].emit(...i),clear:l=>t[l].clear(),clearAll:()=>Object.values(t).forEach(l=>l.clear()),listen:n.listen,remove:n.remove,clearGlobal:n.clear}}function Fe(e={}){const{toValue:n=c=>c,length:t=0}=e,[s,l]=T([]),i=V(ee(e,"emitGuard")),o=V(ee(e,"beforeEmit","removeGuard"));i.listen(c=>{const f=n(c,s());l(u=>{let a=ke(u,f);return t&&a.length>t?Pe(a):a}),o.emit(f,s(),()=>r(f))});const r=c=>!!l(f=>Be(f,c)).removed;return{...o,emit:i.emit,value:s,stack:s,setStack:l,removeFromStack:r}}const Me=E('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-12 bg-gray-800 text-white"></div>'),Ue=E('<button class="w-12 h-8 bg-white border-none rounded font-semibold"></button>'),We=E('<div class="w-18 h-18 bg-gray-500 rounded-full"></div>'),He=E('<div class="wrapper-h"></div>'),Re=E('<div class="wrapper-v"><div class="flex space-x-4"><button class="btn">SPIN!</button><button class="btn">WIGGLE!</button></div><div class="flex justify-center flex-wrap gap-8 !mt-12"></div></div>'),Ve=E('<div><div class="w-32 h-24 center-child bg-orange-700 bg-opacity-80 rounded-lg transition-transform duration-300">Child</div></div>'),Ke=E('<div class="wrapper-h"><form class="flex space-x-2"><input type="text"><button class="btn">SEND</button><button class="btn" type="button">CLEAR</button></form></div>'),qe=E('<div class="fixed top-4 right-4 flex flex-col items-end space-y-4"></div>'),Xe=E('<div class="p-2 px-3 bg-gray-600 animate-fade-in-down animate-count-1 animate-duration-150"><span class="mr-2"></span><button>X</button></div>'),Qe=()=>(()=>{const e=Me.cloneNode(!0);return b(e,v(Je,{}),null),b(e,v(Ye,{}),null),b(e,v(Ze,{}),null),e})(),Je=()=>{const e=l=>{const[i,o]=T(!0),r=()=>o(c=>(l.emit(!c),!c));return(()=>{const c=Ue.cloneNode(!0);return c.$$click=r,b(c,()=>i()?"ON":"OFF"),c})()},n=l=>{const[i,o]=T(!0);return l.subscribe(o),(()=>{const r=We.cloneNode(!0);return O(c=>{const f=!!i(),u=i()?"0 0 24px rgb(254, 239, 179)":"";return f!==c._v$&&r.classList.toggle("bg-yellow-200",c._v$=f),u!==c._v$2&&r.style.setProperty("box-shadow",c._v$2=u),c},{_v$:void 0,_v$2:void 0}),r})()},[t,s]=Ge();return(()=>{const l=He.cloneNode(!0);return b(l,v(e,{emit:s}),null),b(l,v(n,{subscribe:t}),null),l})()},Ye=()=>{const{emit:e,spin:n,wiggle:t}=De(s=>({spin:s(),wiggle:s()}));return(()=>{const s=Re.cloneNode(!0),l=s.firstChild,i=l.firstChild,o=i.nextSibling,r=l.nextSibling;return i.$$click=()=>e("spin",Math.random()*360-180),o.$$click=()=>e("wiggle"),b(r,v(K,{get listenToSpin(){return n.listen},get listenToWiggle(){return t.listen}}),null),b(r,v(K,{get listenToSpin(){return n.listen},get listenToWiggle(){return t.listen}}),null),b(r,v(K,{get listenToSpin(){return n.listen},get listenToWiggle(){return t.listen}}),null),s})()},K=e=>{const[n,t]=T(0);e.listenToSpin(i=>t(o=>o+i));let s,l;return ge(()=>{const i=new KeyframeEffect(s,{transform:["translate3d(-1px, 0, 0)","translate3d(2px, 0, 0)","translate3d(-4px, 0, 0)","translate3d(4px, 0, 0)","translate3d(-4px, 0, 0)","translate3d(4px, 0, 0)","translate3d(-4px, 0, 0)","translate3d(2px, 0, 0)","translate3d(-1px, 0, 0)"]},{duration:500});l=new Animation(i)}),e.listenToWiggle(()=>{l.currentTime=0,l.play()}),(()=>{const i=Ve.cloneNode(!0),o=i.firstChild,r=s;return typeof r=="function"?Ce(r,i):s=i,O(()=>o.style.setProperty("transform",`rotate(${n()}deg)`)),i})()},Ze=()=>{const[e,n]=T("my message!");let t;return(()=>{const s=Ke.cloneNode(!0),l=s.firstChild,i=l.firstChild,o=i.nextSibling,r=o.nextSibling;return l.addEventListener("submit",c=>{c.preventDefault(),t.emit(e()),n("")}),i.$$input=c=>n(c.currentTarget.value),r.$$click=()=>t.setStack([]),b(s,v(ze,{useEventBus:c=>t=c}),null),O(()=>i.value=e()),s})()},ze=e=>{const n=Fe({toValue:t=>({text:t.length>50?t.substring(0,50)+"...":t}),beforeEmit:t=>{console.log("bout to be emitted",t)},emitGuard:(t,s)=>{s?t():console.log("Empty messages are not allowed")},length:10});return e.useEventBus(n),(()=>{const t=qe.cloneNode(!0);return b(t,v(Se,{get each(){return n.stack()},children:s=>(()=>{const l=Xe.cloneNode(!0),i=l.firstChild,o=i.nextSibling;return b(i,()=>s.text),o.$$click=()=>n.removeFromStack(s),l})()})),t})()};Ae(()=>v(Qe,{}),document.getElementById("root"));_e(["click","input"]);
