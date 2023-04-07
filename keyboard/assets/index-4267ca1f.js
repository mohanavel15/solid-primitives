(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();const he=(e,t)=>e===t,pe=Symbol("solid-track"),U={equals:he};let se=fe;const S=1,I=2,le={owned:null,cleanups:null,context:null,owner:null};var p=null;let V=null,h=null,d=null,b=null,F=0;function D(e,t){const n=h,s=p,l=e.length===0,r=l?le:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},o=l?e:()=>e(()=>x(()=>Q(r)));p=r,h=null;try{return L(o,!0)}finally{h=n,p=s}}function B(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=l=>(typeof l=="function"&&(l=l(n.value)),oe(n,l));return[ie.bind(n),s]}function G(e,t,n){const s=J(e,t,!1,S);T(s)}function de(e,t,n){se=ve;const s=J(e,t,!1,S);s.user=!0,b?b.push(s):T(s)}function H(e,t,n){n=n?Object.assign({},U,n):U;const s=J(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,T(s),ie.bind(s)}function ge(e){return L(e,!1)}function x(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function we(e,t,n){const s=Array.isArray(e);let l,r=n&&n.defer;return o=>{let i;if(s){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(r){r=!1;return}const u=x(()=>t(i,l,o));return l=i,u}}function P(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function re(){return p}function ie(){if(this.sources&&this.state)if(this.state===S)T(this);else{const e=d;d=null,L(()=>j(this),!1),d=e}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function oe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&L(()=>{for(let l=0;l<e.observers.length;l+=1){const r=e.observers[l],o=V&&V.running;o&&V.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?d.push(r):b.push(r),r.observers&&ue(r)),o||(r.state=S)}if(d.length>1e6)throw d=[],new Error},!1)),t}function T(e){if(!e.fn)return;Q(e);const t=p,n=h,s=F;h=p=e,ye(e,e.value,s),h=n,p=t}function ye(e,t,n){let s;try{s=e.fn(t)}catch(l){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(Q),e.owned=null),e.updatedAt=n+1,ce(l)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?oe(e,s):e.value=s,e.updatedAt=n)}function J(e,t,n,s=S,l){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==le&&(p.owned?p.owned.push(r):p.owned=[r]),r}function q(e){if(e.state===0)return;if(e.state===I)return j(e);if(e.suspense&&x(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<F);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===S)T(e);else if(e.state===I){const s=d;d=null,L(()=>j(e,t[0]),!1),d=s}}function L(e,t){if(d)return e();let n=!1;t||(d=[]),b?n=!0:b=[],F++;try{const s=e();return me(n),s}catch(s){n||(b=null),d=null,ce(s)}}function me(e){if(d&&(fe(d),d=null),e)return;const t=b;b=null,t.length&&L(()=>se(t),!1)}function fe(e){for(let t=0;t<e.length;t++)q(e[t])}function ve(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:q(s)}for(t=0;t<n;t++)q(e[t])}function j(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const l=s.state;l===S?s!==t&&(!s.updatedAt||s.updatedAt<F)&&q(s):l===I&&j(s,t)}}}function ue(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=I,n.pure?d.push(n):b.push(n),n.observers&&ue(n))}}function Q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const r=l.pop(),o=n.observerSlots.pop();s<l.length&&(r.sourceSlots[o]=s,l[s]=r,n.observerSlots[s]=o)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ce(e){throw e}const be=Symbol("fallback");function z(e){for(let t=0;t<e.length;t++)e[t]()}function Se(e,t,n={}){let s=[],l=[],r=[],o=0,i=t.length>1?[]:null;return P(()=>z(r)),()=>{let u=e()||[],c,f;return u[pe],x(()=>{let a=u.length,w,A,_,O,R,y,m,v,C;if(a===0)o!==0&&(z(r),r=[],s=[],l=[],o=0,i&&(i=[])),n.fallback&&(s=[be],l[0]=D(ae=>(r[0]=ae,n.fallback())),o=1);else if(o===0){for(l=new Array(a),f=0;f<a;f++)s[f]=u[f],l[f]=D(g);o=a}else{for(_=new Array(a),O=new Array(a),i&&(R=new Array(a)),y=0,m=Math.min(o,a);y<m&&s[y]===u[y];y++);for(m=o-1,v=a-1;m>=y&&v>=y&&s[m]===u[v];m--,v--)_[v]=l[m],O[v]=r[m],i&&(R[v]=i[m]);for(w=new Map,A=new Array(v+1),f=v;f>=y;f--)C=u[f],c=w.get(C),A[f]=c===void 0?-1:c,w.set(C,f);for(c=y;c<=m;c++)C=s[c],f=w.get(C),f!==void 0&&f!==-1?(_[f]=l[c],O[f]=r[c],i&&(R[f]=i[c]),f=A[f],w.set(C,f)):r[c]();for(f=y;f<a;f++)f in _?(l[f]=_[f],r[f]=O[f],i&&(i[f]=R[f],i[f](f))):l[f]=D(g);l=l.slice(0,o=a),s=u.slice(0)}return l});function g(a){if(r[f]=a,i){const[w,A]=B(f);return i[f]=A,t(u[f],w)}return t(u[f])}}}function X(e,t){return x(()=>e(t||{}))}function Ae(e){const t="fallback"in e&&{fallback:()=>e.fallback};return H(Se(()=>e.each,e.children,t||void 0))}let xe;function Ce(e,t,n){let s=n.length,l=t.length,r=s,o=0,i=0,u=t[l-1].nextSibling,c=null;for(;o<l||i<r;){if(t[o]===n[i]){o++,i++;continue}for(;t[l-1]===n[r-1];)l--,r--;if(l===o){const f=r<s?i?n[i-1].nextSibling:n[r-i]:u;for(;i<r;)e.insertBefore(n[i++],f)}else if(r===i)for(;o<l;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[i]===t[l-1]){const f=t[--l].nextSibling;e.insertBefore(n[i++],t[o++].nextSibling),e.insertBefore(n[--r],f),t[l]=n[r]}else{if(!c){c=new Map;let g=i;for(;g<r;)c.set(n[g],g++)}const f=c.get(t[o]);if(f!=null)if(i<f&&f<r){let g=o,a=1,w;for(;++g<l&&g<r&&!((w=c.get(t[g]))==null||w!==f+a);)a++;if(a>f-i){const A=t[o];for(;i<f;)e.insertBefore(n[i++],A)}else e.replaceChild(n[i++],t[o++])}else o++;else t[o++].remove()}}}function Ee(e,t,n,s={}){let l;return D(r=>{l=r,t===document?e():N(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{l(),t.textContent=""}}function Z(e,t,n){let s;const l=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>(s||(s=l())).cloneNode(!0):()=>x(()=>document.importNode(s||(s=l()),!0));return r.cloneNode=r,r}function N(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return W(e,t,s,n);G(l=>W(e,t(),l,n),s)}function W(e,t,n,s,l){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),o){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=E(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=E(e,n,s);else{if(r==="function")return G(()=>{let i=t();for(;typeof i=="function";)i=i();n=W(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],u=n&&Array.isArray(n);if(Y(i,t,n,l))return G(()=>n=W(e,i,n,s,!0)),()=>n;if(i.length===0){if(n=E(e,n,s),o)return n}else u?n.length===0?ee(e,i,s):Ce(e,n,i):(n&&E(e),ee(e,i));n=i}else if(t instanceof Node){if(Array.isArray(n)){if(o)return n=E(e,n,s,t);E(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Y(e,t,n,s){let l=!1;for(let r=0,o=t.length;r<o;r++){let i=t[r],u=n&&n[r];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))l=Y(e,i,u)||l;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();l=Y(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||l}else e.push(i),l=!0;else{const c=String(i);u&&u.nodeType===3?(u.data=c,e.push(u)):e.push(document.createTextNode(c))}}return l}function ee(e,t,n=null){for(let s=0,l=t.length;s<l;s++)e.insertBefore(t[s],n)}function E(e,t,n,s){if(n===void 0)return e.textContent="";const l=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const i=t[o];if(l!==i){const u=i.parentNode===e;!r&&!o?u?e.replaceChild(l,i):e.insertBefore(l,n):u&&i.remove()}else r=!0}}else e.insertBefore(l,n);return[l]}var Ne=!!xe,M=(e,t)=>e===t||e.length===t.length&&e.every((n,s)=>n===t[s]),Le=Ne?e=>re()?P(e):e:P;function $(e,t,n,s){return e.addEventListener(t,n,s),Le(e.removeEventListener.bind(e,t,n,s))}function k(e,t=re()){let n=0,s,l;return()=>(n++,P(()=>{n--,queueMicrotask(()=>{!n&&l&&(l(),l=s=void 0)})}),l||D(r=>s=e(l=r),t),s)}function te(e,t){for(let n=e.length-1;n>=0;n--){const s=t.slice(0,n+1);if(!M(e[n],s))return!1}return!0}const K=k(()=>{const[e,t]=B([]),[n,s]=B(null),l=()=>t([]);return $(window,"keydown",r=>{if(r.repeat||typeof r.key!="string")return;const o=r.key.toUpperCase();e().includes(o)||ge(()=>{s(r),t(i=>[...i,o])})}),$(window,"keyup",r=>{if(typeof r.key!="string")return;const o=r.key.toUpperCase();t(i=>i.filter(u=>u!==o))}),$(window,"blur",l),$(window,"contextmenu",r=>{r.defaultPrevented||l()}),[e,{event:n}]}),_e=k(()=>{const[e]=K();let t=x(e);return H(()=>{const n=e(),s=t;return t=n,s.length===0&&n.length===1?n[0]:null})}),De=k(()=>{const[e]=K();return H(t=>e().length===0?[]:[...t,e()],[])});function Te(e,t={}){e=e.toUpperCase();const{preventDefault:n=!0}=t,[,{event:s}]=K(),l=_e();return H(()=>l()===e?(n&&s().preventDefault(),!0):!1)}function ne(e,t,n={}){if(!e.length)return;e=e.map(f=>f.toUpperCase());const{preventDefault:s=!0,requireReset:l=!1}=n,[,{event:r}]=K(),o=De();let i=!1;de(we(o,l?f=>{if(!f.length)return i=!1;i||(f.length<e.length?te(f,e.slice(0,f.length))?s&&r().preventDefault():i=!0:(i=!0,te(f,e)&&(s&&r().preventDefault(),t())))}:f=>{const g=f.at(-1);if(g){if(s&&g.length<e.length){M(g,e.slice(0,e.length-1))&&r().preventDefault();return}if(M(g,e)){const a=f.at(-2);(!a||M(a,e.slice(0,e.length-1)))&&(s&&r().preventDefault(),t())}}}))}const Ke=Z('<ul class="fixed right-4 top-4 flex flex-col items-end">'),Oe=Z('<li class="border-b border-b-red-700 bg-red-500 p-2 text-white">'),Re=Z('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center space-y-4 bg-gray-800 p-24 text-white"><div class="wrapper-v"><h4>Is pressing Shift?</h4><p></div><div class="wrapper-v"><h4>Pressed keys</h4><p class="min-h-5">'),$e=e=>{const[t,n]=B([]),s=l=>{const r={text:l};n(o=>[...o,r]),setTimeout(()=>n(o=>o.filter(i=>i!==r)),3e3)};return e.messageTrigger(s),(()=>{const l=Ke();return N(l,X(Ae,{get each(){return t()},children:({text:r})=>(()=>{const o=Oe();return N(o,r),o})()})),l})()},Me=()=>{const[e]=K(),t=Te("Shift");ne(["Q"],()=>{n("Q pressed")}),ne(["Control","E","R"],()=>{n("Control + E + R pressed")},{preventDefault:!0});let n;return(()=>{const s=Re(),l=s.firstChild,r=l.firstChild,o=r.nextSibling,i=l.nextSibling,u=i.firstChild,c=u.nextSibling;return N(o,()=>t()?"YES":"NO"),N(c,()=>e().join(", ")),N(s,X($e,{messageTrigger:f=>n=f}),null),s})()};Ee(()=>X(Me,{}),document.getElementById("root"));
