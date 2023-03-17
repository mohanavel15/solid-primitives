(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const g={};function W(e){g.context=e}const X=(e,t)=>e===t,v={equals:X};let j=G;const w=1,A=2,D={owned:null,cleanups:null,context:null,owner:null};var u=null;let b=null,f=null,c=null,d=null,T=0;function Y(e,t){const n=f,s=u,i=e.length===0,l=i?D:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},r=i?e:()=>e(()=>N(()=>O(l)));u=l,f=null;try{return x(r,!0)}finally{f=n,u=s}}function P(e,t){t=t?Object.assign({},v,t):v;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),q(n,i));return[R.bind(n),s]}function _(e,t,n){const s=B(e,t,!1,w);S(s)}function Z(e,t,n){j=ie;const s=B(e,t,!1,w);s.user=!0,d?d.push(s):S(s)}function z(e,t,n){n=n?Object.assign({},v,n):v;const s=B(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,S(s),R.bind(s)}function N(e){if(f===null)return e();const t=f;f=null;try{return e()}finally{f=t}}function k(e){Z(()=>N(e))}function ee(e){return u===null||(u.cleanups===null?u.cleanups=[e]:u.cleanups.push(e)),e}function te(){return u}function R(){const e=b;if(this.sources&&(this.state||e))if(this.state===w||e)S(this);else{const t=c;c=null,x(()=>E(this),!1),c=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function q(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&x(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=b&&b.running;r&&b.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?c.push(l):d.push(l),l.observers&&J(l)),r||(l.state=w)}if(c.length>1e6)throw c=[],new Error},!1)),t}function S(e){if(!e.fn)return;O(e);const t=u,n=f,s=T;f=u=e,ne(e,e.value,s),f=n,u=t}function ne(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(O),e.owned=null),e.updatedAt=n+1,K(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?q(e,s):e.value=s,e.updatedAt=n)}function B(e,t,n,s=w,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:null,pure:n};return u===null||u!==D&&(u.owned?u.owned.push(l):u.owned=[l]),l}function C(e){const t=b;if(e.state===0||t)return;if(e.state===A||t)return E(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<T);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===w||t)S(e);else if(e.state===A||t){const i=c;c=null,x(()=>E(e,n[0]),!1),c=i}}function x(e,t){if(c)return e();let n=!1;t||(c=[]),d?n=!0:d=[],T++;try{const s=e();return se(n),s}catch(s){n||(d=null),c=null,K(s)}}function se(e){if(c&&(G(c),c=null),e)return;const t=d;d=null,t.length&&x(()=>j(t),!1)}function G(e){for(let t=0;t<e.length;t++)C(e[t])}function ie(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:C(s)}for(g.context&&W(),t=0;t<n;t++)C(e[t])}function E(e,t){const n=b;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===w||n?i!==t&&(!i.updatedAt||i.updatedAt<T)&&C(i):(i.state===A||n)&&E(i,t))}}function J(e){const t=b;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=A,s.pure?c.push(s):d.push(s),s.observers&&J(s))}}function O(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)O(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function oe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function K(e){throw e=oe(e),e}function le(e,t){return N(()=>e(t||{}))}function re(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,a=t[i-1].nextSibling,h=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const p=l<s?o?n[o-1].nextSibling:n[l-o]:a;for(;o<l;)e.insertBefore(n[o++],p)}else if(l===o)for(;r<i;)(!h||!h.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const p=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],p),t[i]=n[l]}else{if(!h){h=new Map;let y=o;for(;y<l;)h.set(n[y],y++)}const p=h.get(t[r]);if(p!=null)if(o<p&&p<l){let y=r,M=1,H;for(;++y<i&&y<l&&!((H=h.get(t[y]))==null||H!==p+M);)M++;if(M>p-o){const V=t[r];for(;o<p;)e.insertBefore(n[o++],V)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}function fe(e,t,n,s={}){let i;return Y(l=>{i=l,t===document?e():Q(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function U(e,t,n){const s=document.createElement("template");if(s.innerHTML=e,t&&s.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Q(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return L(e,t,s,n);_(i=>L(e,t(),i,n),s)}function L(e,t,n,s,i){for(g.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(g.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=m(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(g.context)return n;n=m(e,n,s)}else{if(l==="function")return _(()=>{let o=t();for(;typeof o=="function";)o=o();n=L(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if($(o,t,n,i))return _(()=>n=L(e,o,n,s,!0)),()=>n;if(g.context){if(!o.length)return n;for(let h=0;h<o.length;h++)if(o[h].parentNode)return n=o}if(o.length===0){if(n=m(e,n,s),r)return n}else a?n.length===0?I(e,o,s):re(e,n,o):(n&&m(e),I(e,o));n=o}else if(t instanceof Node){if(g.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=m(e,n,s,t);m(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function $(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],a=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=$(e,o,a)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=$(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||i}else e.push(o),i=!0;else{const h=String(o);a&&a.nodeType===3&&a.data===h?e.push(a):e.push(document.createTextNode(h))}}return i}function I(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function m(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const a=o.parentNode===e;!l&&!r?a?e.replaceChild(i,o):e.insertBefore(i,n):a&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}var ue=e=>te()?ee(e):e;function ce(e,t,n){if(g.context){const[s,i]=P(e,n);return k(()=>i(()=>t())),[s,i]}return P(t(),n)}function F(e,t,n,s){return e.addEventListener(t,n,s),ue(e.removeEventListener.bind(e,t,n,s))}function ae(e){const t=F(window,"online",e.bind(void 0,!0)),n=F(window,"offline",e.bind(void 0,!1));return()=>{t(),n()}}function he(){const[e,t]=ce(!0,()=>navigator.onLine);return ae(t),e}const pe=U('<div class="box-border flex min-h-screen w-full flex-col items-center justify-center p-24">You are currently: <!> (try toggling your network state in dev tools!)</div>',3),de=U("<strong>online</strong>",2),ge=U("<strong>offline</strong>",2),we=()=>{const e=he();return(()=>{const t=pe.cloneNode(!0),n=t.firstChild,s=n.nextSibling;return s.nextSibling,Q(t,(()=>{const i=z(()=>!!e());return()=>i()?de.cloneNode(!0):ge.cloneNode(!0)})(),s),t})()};fe(()=>le(we,{}),document.getElementById("root"));
