(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const d={};function J(e){d.context=e}const V=(e,t)=>e===t,v={equals:V};let D=G;const w=1,C=2,H={owned:null,cleanups:null,context:null,owner:null};var u=null;let b=null,f=null,c=null,g=null,$=0;function X(e,t){const n=f,s=u,i=e.length===0,l=i?H:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>L(()=>T(l)));u=l,f=null;try{return S(r,!0)}finally{f=n,u=s}}function I(e,t){t=t?Object.assign({},v,t):v;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),q(n,i));return[R.bind(n),s]}function _(e,t,n){const s=U(e,t,!1,w);x(s)}function Z(e,t,n){D=ie;const s=U(e,t,!1,w);s.user=!0,g?g.push(s):x(s)}function k(e,t,n){n=n?Object.assign({},v,n):v;const s=U(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,x(s),R.bind(s)}function L(e){const t=f;f=null;try{return e()}finally{f=t}}function z(e){Z(()=>L(e))}function ee(e){return u===null||(u.cleanups===null?u.cleanups=[e]:u.cleanups.push(e)),e}function te(){return u}function R(){const e=b;if(this.sources&&(this.state||e))if(this.state===w||e)x(this);else{const t=c;c=null,S(()=>E(this),!1),c=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function q(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=b&&b.running;r&&b.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?c.push(l):g.push(l),l.observers&&K(l)),r||(l.state=w)}if(c.length>1e6)throw c=[],new Error},!1)),t}function x(e){if(!e.fn)return;T(e);const t=u,n=f,s=$;f=u=e,ne(e,e.value,s),f=n,u=t}function ne(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=w,e.owned&&e.owned.forEach(T),e.owned=null),Q(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?q(e,s):e.value=s,e.updatedAt=n)}function U(e,t,n,s=w,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:null,pure:n};return u===null||u!==H&&(u.owned?u.owned.push(l):u.owned=[l]),l}function A(e){const t=b;if(e.state===0||t)return;if(e.state===C||t)return E(e);if(e.suspense&&L(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===w||t)x(e);else if(e.state===C||t){const i=c;c=null,S(()=>E(e,n[0]),!1),c=i}}function S(e,t){if(c)return e();let n=!1;t||(c=[]),g?n=!0:g=[],$++;try{const s=e();return se(n),s}catch(s){c||(g=null),Q(s)}}function se(e){if(c&&(G(c),c=null),e)return;const t=g;g=null,t.length&&S(()=>D(t),!1)}function G(e){for(let t=0;t<e.length;t++)A(e[t])}function ie(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:A(s)}for(d.context&&J(),t=0;t<n;t++)A(e[t])}function E(e,t){const n=b;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===w||n?i!==t&&A(i):(i.state===C||n)&&E(i,t))}}function K(e){const t=b;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=C,s.pure?c.push(s):g.push(s),s.observers&&K(s))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function oe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Q(e){throw e=oe(e),e}function le(e,t){return L(()=>e(t||{}))}function re(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,a=t[i-1].nextSibling,h=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const p=l<s?o?n[o-1].nextSibling:n[l-o]:a;for(;o<l;)e.insertBefore(n[o++],p)}else if(l===o)for(;r<i;)(!h||!h.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const p=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],p),t[i]=n[l]}else{if(!h){h=new Map;let y=o;for(;y<l;)h.set(n[y],y++)}const p=h.get(t[r]);if(p!=null)if(o<p&&p<l){let y=r,O=1,F;for(;++y<i&&y<l&&!((F=h.get(t[y]))==null||F!==p+O);)O++;if(O>p-o){const Y=t[r];for(;o<p;)e.insertBefore(n[o++],Y)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}function fe(e,t,n,s={}){let i;return X(l=>{i=l,t===document?e():W(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function M(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function W(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return N(e,t,s,n);_(i=>N(e,t(),i,n),s)}function N(e,t,n,s,i){for(d.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(d.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=m(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(d.context)return n;n=m(e,n,s)}else{if(l==="function")return _(()=>{let o=t();for(;typeof o=="function";)o=o();n=N(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(B(o,t,n,i))return _(()=>n=N(e,o,n,s,!0)),()=>n;if(d.context){if(!o.length)return n;for(let h=0;h<o.length;h++)if(o[h].parentNode)return n=o}if(o.length===0){if(n=m(e,n,s),r)return n}else a?n.length===0?P(e,o,s):re(e,n,o):(n&&m(e),P(e,o));n=o}else if(t instanceof Node){if(d.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=m(e,n,s,t);m(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function B(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],a=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=B(e,o,a)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=B(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||i}else e.push(o),i=!0;else{const h=String(o);a&&a.nodeType===3&&a.data===h?e.push(a):e.push(document.createTextNode(h))}}return i}function P(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function m(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const a=o.parentNode===e;!l&&!r?a?e.replaceChild(i,o):e.insertBefore(i,n):a&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const ue=!1;var ce=ue,ae=e=>te()?ee(e):e;function he(e,t,n){if(ce)return I(e);const[s,i]=I(d.context?e:t(),n);return d.context&&z(()=>i(()=>t())),[s,i]}function j(e,t,n,s){return e.addEventListener(t,n,s),ae(e.removeEventListener.bind(e,t,n,s))}function pe(e){const t=j(window,"online",e.bind(void 0,!0)),n=j(window,"offline",e.bind(void 0,!1));return()=>(t(),n())}function de(){const[e,t]=he(!0,()=>navigator.onLine);return pe(t),e}const ge=M('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center">You are currently: <!> (try toggling your network state in dev tools!)</div>'),we=M("<strong>online</strong>"),ye=M("<strong>offline</strong>"),be=()=>{const e=de();return(()=>{const t=ge.cloneNode(!0),n=t.firstChild,s=n.nextSibling;return s.nextSibling,W(t,(()=>{const i=k(()=>!!e());return()=>i()?we.cloneNode(!0):ye.cloneNode(!0)})(),s),t})()};fe(()=>le(be,{}),document.getElementById("root"));
