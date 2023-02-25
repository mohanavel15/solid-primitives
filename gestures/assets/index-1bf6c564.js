(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();const w={};function Q(e){w.context=e}const V=(e,t)=>e===t,D={equals:V};let M=H;const g=1,S=2,P={owned:null,cleanups:null,context:null,owner:null};var a=null;let x=null,f=null,c=null,d=null,_=0;function W(e,t){const s=f,i=a,n=e.length===0,l=n?P:{owned:null,cleanups:null,context:null,owner:t||i},r=n?e:()=>e(()=>m(()=>T(l)));a=l,f=null;try{return A(r,!0)}finally{f=s,a=i}}function F(e,t){t=t?Object.assign({},D,t):D;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=n=>(typeof n=="function"&&(n=n(s.value)),R(s,n));return[Y.bind(s),i]}function B(e,t,s){const i=j(e,t,!1,g);N(i)}function J(e,t,s){M=z;const i=j(e,t,!1,g);i.user=!0,d?d.push(i):N(i)}function m(e){const t=f;f=null;try{return e()}finally{f=t}}function X(e){J(()=>m(e))}function Y(){const e=x;if(this.sources&&(this.state||e))if(this.state===g||e)N(this);else{const t=c;c=null,A(()=>E(this),!1),c=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function R(e,t,s){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&A(()=>{for(let n=0;n<e.observers.length;n+=1){const l=e.observers[n],r=x&&x.running;r&&x.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?c.push(l):d.push(l),l.observers&&q(l)),r||(l.state=g)}if(c.length>1e6)throw c=[],new Error},!1)),t}function N(e){if(!e.fn)return;T(e);const t=a,s=f,i=_;f=a=e,Z(e,e.value,i),f=s,a=t}function Z(e,t,s){let i;try{i=e.fn(t)}catch(n){e.pure&&(e.state=g,e.owned&&e.owned.forEach(T),e.owned=null),G(n)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?R(e,i):e.value=i,e.updatedAt=s)}function j(e,t,s,i=g,n){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:s};return a===null||a!==P&&(a.owned?a.owned.push(l):a.owned=[l]),l}function C(e){const t=x;if(e.state===0||t)return;if(e.state===S||t)return E(e);if(e.suspense&&m(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<_);)(e.state||t)&&s.push(e);for(let i=s.length-1;i>=0;i--)if(e=s[i],e.state===g||t)N(e);else if(e.state===S||t){const n=c;c=null,A(()=>E(e,s[0]),!1),c=n}}function A(e,t){if(c)return e();let s=!1;t||(c=[]),d?s=!0:d=[],_++;try{const i=e();return k(s),i}catch(i){c||(d=null),G(i)}}function k(e){if(c&&(H(c),c=null),e)return;const t=d;d=null,t.length&&A(()=>M(t),!1)}function H(e){for(let t=0;t<e.length;t++)C(e[t])}function z(e){let t,s=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[s++]=i:C(i)}for(w.context&&Q(),t=0;t<s;t++)C(e[t])}function E(e,t){const s=x;e.state=0;for(let i=0;i<e.sources.length;i+=1){const n=e.sources[i];n.sources&&(n.state===g||s?n!==t&&C(n):(n.state===S||s)&&E(n,t))}}function q(e){const t=x;for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s];(!i.state||t)&&(i.state=S,i.pure?c.push(i):d.push(i),i.observers&&q(i))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),i=e.sourceSlots.pop(),n=s.observers;if(n&&n.length){const l=n.pop(),r=s.observerSlots.pop();i<n.length&&(l.sourceSlots[r]=i,n[i]=l,s.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ee(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function G(e){throw e=ee(e),e}function te(e,t){return m(()=>e(t||{}))}function se(e,t,s){let i=s.length,n=t.length,l=i,r=0,o=0,u=t[n-1].nextSibling,h=null;for(;r<n||o<l;){if(t[r]===s[o]){r++,o++;continue}for(;t[n-1]===s[l-1];)n--,l--;if(n===r){const p=l<i?o?s[o-1].nextSibling:s[l-o]:u;for(;o<l;)e.insertBefore(s[o++],p)}else if(l===o)for(;r<n;)(!h||!h.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[l-1]&&s[o]===t[n-1]){const p=t[--n].nextSibling;e.insertBefore(s[o++],t[r++].nextSibling),e.insertBefore(s[--l],p),t[n]=s[l]}else{if(!h){h=new Map;let y=o;for(;y<l;)h.set(s[y],y++)}const p=h.get(t[r]);if(p!=null)if(o<p&&p<l){let y=r,L=1,$;for(;++y<n&&y<l&&!(($=h.get(t[y]))==null||$!==p+L);)L++;if(L>p-o){const K=t[r];for(;o<p;)e.insertBefore(s[o++],K)}else e.replaceChild(s[o++],t[r++])}else r++;else t[r++].remove()}}}function ne(e,t,s,i={}){let n;return W(l=>{n=l,t===document?e():O(t,e(),t.firstChild?null:void 0,s)},i.owner),()=>{n(),t.textContent=""}}function ie(e,t,s){const i=document.createElement("template");i.innerHTML=e;let n=i.content.firstChild;return s&&(n=n.firstChild),n}function le(e,t,s){return m(()=>e(t,s))}function O(e,t,s,i){if(s!==void 0&&!i&&(i=[]),typeof t!="function")return v(e,t,i,s);B(n=>v(e,t(),n,s),i)}function v(e,t,s,i,n){for(w.context&&!s&&(s=[...e.childNodes]);typeof s=="function";)s=s();if(t===s)return s;const l=typeof t,r=i!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,l==="string"||l==="number"){if(w.context)return s;if(l==="number"&&(t=t.toString()),r){let o=s[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),s=b(e,s,i,o)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t}else if(t==null||l==="boolean"){if(w.context)return s;s=b(e,s,i)}else{if(l==="function")return B(()=>{let o=t();for(;typeof o=="function";)o=o();s=v(e,o,s,i)}),()=>s;if(Array.isArray(t)){const o=[],u=s&&Array.isArray(s);if(U(o,t,s,n))return B(()=>s=v(e,o,s,i,!0)),()=>s;if(w.context){if(!o.length)return s;for(let h=0;h<o.length;h++)if(o[h].parentNode)return s=o}if(o.length===0){if(s=b(e,s,i),r)return s}else u?s.length===0?I(e,o,i):se(e,s,o):(s&&b(e),I(e,o));s=o}else if(t instanceof Node){if(w.context&&t.parentNode)return s=r?[t]:t;if(Array.isArray(s)){if(r)return s=b(e,s,i,t);b(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function U(e,t,s,i){let n=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],u=s&&s[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))n=U(e,o,u)||n;else if(typeof o=="function")if(i){for(;typeof o=="function";)o=o();n=U(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||n}else e.push(o),n=!0;else{const h=String(o);u&&u.nodeType===3&&u.data===h?e.push(u):e.push(document.createTextNode(h))}}return n}function I(e,t,s=null){for(let i=0,n=t.length;i<n;i++)e.insertBefore(t[i],s)}function b(e,t,s,i){if(s===void 0)return e.textContent="";const n=i||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(n!==o){const u=o.parentNode===e;!l&&!r?u?e.replaceChild(n,o):e.insertBefore(n,s):u&&o.remove()}else l=!0}}else e.insertBefore(n,s);return[n]}const oe=ie('<div class="box-border w-full min-h-screen flex flex-col justify-center items-center space-y-12 bg-gray-800 text-white"><div class="w-36 h-36 rounded-3xl bg-orange-400"><br></div></div>'),re=()=>{const[e,t]=F(0),[s,i]=F("");let n;return X(()=>{n.addEventListener("pointermove",l=>{console.log(l.x,l.y),i(`${l.x}, ${l.y}`)},{passive:!0})}),(()=>{const l=oe.cloneNode(!0),r=l.firstChild,o=r.firstChild,u=n;return typeof u=="function"?le(u,l):n=l,O(r,e,o),O(r,s,null),l})()};ne(()=>te(re,{}),document.getElementById("root"));
