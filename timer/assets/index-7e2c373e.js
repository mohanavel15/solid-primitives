(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const g={};function ie(e){g.context=e}const le=(e,n)=>e===n,M={equals:le};let Q=Z;const b=1,T=2,W={owned:null,cleanups:null,context:null,owner:null};var a=null;let m=null,c=null,h=null,w=null,j=0;function oe(e,n){const t=c,s=a,i=e.length===0,l=i?W:{owned:null,cleanups:null,context:null,owner:n||s},r=i?e:()=>e(()=>O(()=>B(l)));a=l,c=null;try{return A(r,!0)}finally{c=t,a=s}}function E(e,n){n=n?Object.assign({},M,n):M;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.value)),J(t,i));return[fe.bind(t),s]}function F(e,n,t){const s=Y(e,n,!1,b);P(s)}function X(e,n,t){Q=ae;const s=Y(e,n,!1,b);s.user=!0,w?w.push(s):P(s)}function O(e){const n=c;c=null;try{return e()}finally{c=n}}function re(e){return a===null||(a.cleanups===null?a.cleanups=[e]:a.cleanups.push(e)),e}function fe(){const e=m;if(this.sources&&(this.state||e))if(this.state===b||e)P(this);else{const n=h;h=null,A(()=>N(this),!1),h=n}if(c){const n=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(n)):(c.sources=[this],c.sourceSlots=[n]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function J(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&A(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=m&&m.running;r&&m.disposed.has(l),(r&&!l.tState||!r&&!l.state)&&(l.pure?h.push(l):w.push(l),l.observers&&z(l)),r||(l.state=b)}if(h.length>1e6)throw h=[],new Error},!1)),n}function P(e){if(!e.fn)return;B(e);const n=a,t=c,s=j;c=a=e,ue(e,e.value,s),c=t,a=n}function ue(e,n,t){let s;try{s=e.fn(n)}catch(i){e.pure&&(e.state=b,e.owned&&e.owned.forEach(B),e.owned=null),ee(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?J(e,s):e.value=s,e.updatedAt=t)}function Y(e,n,t,s=b,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:a,context:null,pure:t};return a===null||a!==W&&(a.owned?a.owned.push(l):a.owned=[l]),l}function _(e){const n=m;if(e.state===0||n)return;if(e.state===T||n)return N(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<j);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===b||n)P(e);else if(e.state===T||n){const i=h;h=null,A(()=>N(e,t[0]),!1),h=i}}function A(e,n){if(h)return e();let t=!1;n||(h=[]),w?t=!0:w=[],j++;try{const s=e();return ce(t),s}catch(s){h||(w=null),ee(s)}}function ce(e){if(h&&(Z(h),h=null),e)return;const n=w;w=null,n.length&&A(()=>Q(n),!1)}function Z(e){for(let n=0;n<e.length;n++)_(e[n])}function ae(e){let n,t=0;for(n=0;n<e.length;n++){const s=e[n];s.user?e[t++]=s:_(s)}for(g.context&&ie(),n=0;n<t;n++)_(e[n])}function N(e,n){const t=m;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===b||t?i!==n&&_(i):(i.state===T||t)&&N(i,n))}}function z(e){const n=m;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=T,s.pure?h.push(s):w.push(s),s.observers&&z(s))}}function B(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)B(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function he(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ee(e){throw e=he(e),e}function k(e,n){return O(()=>e(n||{}))}function pe(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,f=n[i-1].nextSibling,u=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const p=l<s?o?t[o-1].nextSibling:t[l-o]:f;for(;o<l;)e.insertBefore(t[o++],p)}else if(l===o)for(;r<i;)(!u||!u.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const p=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],p),n[i]=t[l]}else{if(!u){u=new Map;let d=o;for(;d<l;)u.set(t[d],d++)}const p=u.get(n[r]);if(p!=null)if(o<p&&p<l){let d=r,y=1,C;for(;++d<i&&d<l&&!((C=u.get(n[d]))==null||C!==p+y);)y++;if(y>p-o){const v=n[r];for(;o<p;)e.insertBefore(t[o++],v)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const V="_$DX_DELEGATE";function de(e,n,t,s={}){let i;return oe(l=>{i=l,n===document?e():$(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function te(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function ge(e,n=window.document){const t=n[V]||(n[V]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,be))}}function we(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=l=>i.call(e,t[1],l))}else e.addEventListener(n,t)}function $(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return L(e,n,s,t);F(i=>L(e,n(),i,t),s)}function be(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),g.registry&&!g.done&&(g.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let i=s.nextSibling;s.remove(),s=i}s&&s.remove()}));t;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function L(e,n,t,s,i){for(g.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(g.context)return t;if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=x(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(g.context)return t;t=x(e,t,s)}else{if(l==="function")return F(()=>{let o=n();for(;typeof o=="function";)o=o();t=L(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(H(o,n,t,i))return F(()=>t=L(e,o,t,s,!0)),()=>t;if(g.context){if(!o.length)return t;for(let u=0;u<o.length;u++)if(o[u].parentNode)return t=o}if(o.length===0){if(t=x(e,t,s),r)return t}else f?t.length===0?G(e,o,s):pe(e,t,o):(t&&x(e),G(e,o));t=o}else if(n instanceof Node){if(g.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=x(e,t,s,n);x(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function H(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],f=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=H(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=H(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||i}else e.push(o),i=!0;else{const u=String(o);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function G(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function x(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,t):f&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const I=(e,n,t)=>{const s=t(e,n);return re(()=>clearInterval(s))},ye=(e,n,t)=>{if(typeof n=="number"){I(e,n,t);return}let s=!1,i=performance.now(),l=0,r=!1;const o=()=>{O(e),i=performance.now(),s=t===setTimeout};X(f=>{if(s)return;const u=n();if(u===!1)return f&&(l+=(performance.now()-i)/f),u;if(f===!1&&(i=performance.now()),r){if(f&&(l+=(performance.now()-i)/f),i=performance.now(),l>=1)l=0,o();else if(l>0){const[p,d]=E(void 0,{equals:!1});return p(),I(()=>{l=0,r=!1,d(),o()},(1-l)*u,setTimeout),u}}return r=!0,I(o,u,t),u})},me=te('<div class="wrapper-v"><h4></h4><p class="caption">Delay: <!> ms</p><p class="caption">Count: </p><div class="wrapper-h"><button class="btn">x10</button><button class="btn">Reset</button><button class="btn">Pause/Unpause</button><button class="btn">÷10</button></div></div>'),xe=te('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"></div>'),K=e=>{const[n,t]=E(void 0,{equals:!1}),[s,i]=E(1e3),[l,r]=E(0),[o,f]=E(!1),u=()=>r(l()+1);return X(()=>(n(),r(0),ye(u,()=>!o()&&s(),e.timer))),(()=>{const p=me.cloneNode(!0),d=p.firstChild,y=d.nextSibling,C=y.firstChild,v=C.nextSibling;v.nextSibling;const D=y.nextSibling;D.firstChild;const ne=D.nextSibling,q=ne.firstChild,R=q.nextSibling,U=R.nextSibling,se=U.nextSibling;return $(d,()=>e.timer.name),$(y,s,v),$(D,l,null),q.$$click=()=>i(S=>S*10),we(R,"click",t,!0),U.$$click=f,U.$$clickData=S=>!S,se.$$click=()=>i(S=>S/10),p})()},$e=()=>(()=>{const e=xe.cloneNode(!0);return $(e,k(K,{timer:setTimeout}),null),$(e,k(K,{timer:setInterval}),null),e})();de(()=>k($e,{}),document.getElementById("root"));ge(["click"]);
