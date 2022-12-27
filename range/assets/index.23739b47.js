(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const O={};function Be(e){O.context=e}const Fe=(e,t)=>e===t,N=Symbol("solid-proxy"),Ae=Symbol("solid-track"),Q={equals:Fe};let Ee=_e;const k=1,Y=2,Ce={owned:null,cleanups:null,context:null,owner:null};var x=null;let M=null,w=null,S=null,P=null,ye=0;function D(e,t){const n=w,s=x,i=e.length===0,r=i?Ce:{owned:null,cleanups:null,context:null,owner:t||s},o=i?e:()=>e(()=>I(()=>me(r)));x=r,w=null;try{return q(o,!0)}finally{w=n,x=s}}function pe(e,t){t=t?Object.assign({},Q,t):Q;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),Oe(n,i));return[Le.bind(n),s]}function Ie(e,t,n){const s=se(e,t,!0,k);U(s)}function fe(e,t,n){const s=se(e,t,!1,k);U(s)}function Ue(e,t,n){Ee=We;const s=se(e,t,!1,k);s.user=!0,P?P.push(s):U(s)}function ce(e,t,n){n=n?Object.assign({},Q,n):Q;const s=se(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,U(s),Le.bind(s)}function qe(e){return q(e,!1)}function I(e){const t=w;w=null;try{return e()}finally{w=t}}function ne(e){return x===null||(x.cleanups===null?x.cleanups=[e]:x.cleanups.push(e)),e}function $e(){return w}function Ke(e){const t=ce(e),n=ce(()=>ae(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function Le(){const e=M;if(this.sources&&(this.state||e))if(this.state===k||e)U(this);else{const t=S;S=null,q(()=>Z(this),!1),S=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Oe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&q(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=M&&M.running;o&&M.disposed.has(r),(o&&!r.tState||!o&&!r.state)&&(r.pure?S.push(r):P.push(r),r.observers&&Pe(r)),o||(r.state=k)}if(S.length>1e6)throw S=[],new Error},!1)),t}function U(e){if(!e.fn)return;me(e);const t=x,n=w,s=ye;w=x=e,He(e,e.value,s),w=n,x=t}function He(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=k),Ne(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Oe(e,s):e.value=s,e.updatedAt=n)}function se(e,t,n,s=k,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:x,context:null,pure:n};return x===null||x!==Ce&&(x.owned?x.owned.push(r):x.owned=[r]),r}function J(e){const t=M;if(e.state===0||t)return;if(e.state===Y||t)return Z(e);if(e.suspense&&I(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ye);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===k||t)U(e);else if(e.state===Y||t){const i=S;S=null,q(()=>Z(e,n[0]),!1),S=i}}function q(e,t){if(S)return e();let n=!1;t||(S=[]),P?n=!0:P=[],ye++;try{const s=e();return Ge(n),s}catch(s){S||(P=null),Ne(s)}}function Ge(e){if(S&&(_e(S),S=null),e)return;const t=P;P=null,t.length&&q(()=>Ee(t),!1)}function _e(e){for(let t=0;t<e.length;t++)J(e[t])}function We(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:J(s)}for(O.context&&Be(),t=0;t<n;t++)J(e[t])}function Z(e,t){const n=M;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===k||n?i!==t&&J(i):(i.state===Y||n)&&Z(i,t))}}function Pe(e){const t=M;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=Y,s.pure?S.push(s):P.push(s),s.observers&&Pe(s))}}function me(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)me(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ve(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Ne(e){throw e=Ve(e),e}function ae(e){if(typeof e=="function"&&!e.length)return ae(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ae(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function L(e,t){return I(()=>e(t||{}))}function V(){return!0}const Xe={get(e,t,n){return t===N?n:e.get(t)},has(e,t){return e.has(t)},set:V,deleteProperty:V,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:V,deleteProperty:V}},ownKeys(e){return e.keys()}};function ie(e){return(e=typeof e=="function"?e():e)?e:{}}function Qe(...e){if(e.some(n=>n&&(N in n||typeof n=="function")))return new Proxy({get(n){for(let s=e.length-1;s>=0;s--){const i=ie(e[s])[n];if(i!==void 0)return i}},has(n){for(let s=e.length-1;s>=0;s--)if(n in ie(e[s]))return!0;return!1},keys(){const n=[];for(let s=0;s<e.length;s++)n.push(...Object.keys(ie(e[s])));return[...new Set(n)]}},Xe);const t={};for(let n=e.length-1;n>=0;n--)if(e[n]){const s=Object.getOwnPropertyDescriptors(e[n]);for(const i in s)i in t||Object.defineProperty(t,i,{enumerable:!0,get(){for(let r=e.length-1;r>=0;r--){const o=(e[r]||{})[i];if(o!==void 0)return o}}})}return t}function Ye(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,c=t[i-1].nextSibling,h=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const d=r<s?l?n[l-1].nextSibling:n[r-l]:c;for(;l<r;)e.insertBefore(n[l++],d)}else if(r===l)for(;o<i;)(!h||!h.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const d=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],d),t[i]=n[r]}else{if(!h){h=new Map;let g=l;for(;g<r;)h.set(n[g],g++)}const d=h.get(t[o]);if(d!=null)if(l<d&&d<r){let g=o,v=1,u;for(;++g<i&&g<r&&!((u=h.get(t[g]))==null||u!==d+v);)v++;if(v>d-l){const b=t[o];for(;l<d;)e.insertBefore(n[l++],b)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const xe="_$DX_DELEGATE";function Je(e,t,n,s={}){let i;return D(r=>{i=r,t===document?e():R(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function we(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function Ze(e,t=window.document){const n=t[xe]||(t[xe]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,ze))}}function R(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return z(e,t,s,n);fe(i=>z(e,t(),i,n),s)}function ze(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),O.registry&&!O.done&&(O.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function z(e,t,n,s,i){for(O.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(O.context)return n;if(r==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=B(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(O.context)return n;n=B(e,n,s)}else{if(r==="function")return fe(()=>{let l=t();for(;typeof l=="function";)l=l();n=z(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(ue(l,t,n,i))return fe(()=>n=z(e,l,n,s,!0)),()=>n;if(O.context){if(!l.length)return n;for(let h=0;h<l.length;h++)if(l[h].parentNode)return n=l}if(l.length===0){if(n=B(e,n,s),o)return n}else c?n.length===0?Se(e,l,s):Ye(e,n,l):(n&&B(e),Se(e,l));n=l}else if(t instanceof Node){if(O.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=B(e,n,s,t);B(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ue(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],c=n&&n[r];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=ue(e,l,c)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=ue(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||i}else e.push(l),i=!0;else{const h=String(l);c&&c.nodeType===3&&c.data===h?e.push(c):e.push(document.createTextNode(h))}}return i}function Se(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function B(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const c=l.parentNode===e;!r&&!o?c?e.replaceChild(i,l):e.insertBefore(i,n):c&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}const{abs:de,sign:et,min:he,ceil:K,floor:tt}=Math,F=e=>typeof e()=="function"?e():e.bind(void 0),ke=e=>(...t)=>{const n=e();return typeof n=="function"?n(...t):n};function nt(e,t,n={}){let s=[],i=[],r=0;ne(()=>s.forEach(h=>h()));const o=h=>{if(h===0)return s.forEach(d=>d()),n.fallback?D(d=>(s=[d],i=[n.fallback()])):(s=[],i=[]);if(r===0){s[0]&&s[0]();for(let d=0;d<h;d++)i[d]=D(l.bind(void 0,d));return i}{const d=r-h;if(d>0){for(let g=r-1;g>=h;g--)s[g]();return i.splice(h,d),s.splice(h,d),i}}for(let d=r;d<h;d++)i[d]=D(l.bind(void 0,d));return i},l=(h,d)=>(s[h]=d,t(h)),c=ce(()=>Math.floor(Math.max(e(),0)));return()=>{const h=c();return I(()=>{const d=o(h);return r=h,d})}}function st(e){const t=e.fallback?()=>e.fallback:void 0,n=typeof e.children=="function"?e.children:()=>e.children;return nt(()=>e.times,n,{fallback:t})}function it(e,t,n,s,i={}){let r=[],o=[],l=0,c=0,h=n(),d=!1;ne(()=>r.forEach(u=>u()));const g=(u,b,a,f)=>D(y=>{f[u]=y,a[u]=s(b)}),v=(u,b,a)=>{if(u===b)return r.forEach(C=>C()),i.fallback?(d=!0,D(C=>(r=[C],o=[i.fallback()]))):(r=[],o=[]);let f=u,y=0;if(d&&(d=!1,r[0](),o=[]),!o.length){for(;f<b;y++,f+=a)g(y,f,o,r);return o}const A=K((b-u)/a),p=new Array(A),E=new Array(A),$=r;let j;if(u<l)for(j=he(K((l-u)/a),A),f=u;y<j;y++,f+=a)g(y,f,p,E);for(j=K((he(c,b)-u)/a);y<j;f+=a,y++){let C=(f-l)/h;Number.isInteger(C)||C<1&&C+Number.EPSILON>1?(C=K(C),p[y]=o[C],E[y]=r[C],$[C]=void 0):g(y,f,p,E)}if(b>c)for(;y<A;y++,f+=a)g(y,f,p,E);return $.forEach(C=>C?.()),r=E,o=p};return()=>{let u=n();if(u===0)return console.warn("Range cannot have a step of 0"),o;let b=e(),a=t();u=de(u);const f=b<=a;if(!f){let A=b;const p=(b-a)/u;b=b-(Number.isInteger(p)?p-1:tt(p))*u,a=A+u}const y=I(v.bind(void 0,b,a,u));return l=b,c=a,h=u,f?y:[...y].reverse()}}function rt(e){let t,n,s;"to"in e?(t=()=>e.start??0,n=()=>e.to,s=()=>e.step??1):(t=F(()=>e[0]),n=F(()=>e[1]),s=F(()=>e[2]??1));const i=e.fallback?()=>e.fallback:void 0,r=ke(()=>e.children);return it(t,n,s,r,{fallback:i})}function ot(e,t,n,s,i={}){let r=[],o=[],l=[],c=!1;ne(()=>r.forEach(g=>g()));const h=(g,v)=>D(u=>{const[b,a]=pe(v);r[g]=u,o[g]=s(b),l[g]=a}),d=(g,v,u)=>{const b=de(K((v-g)/u));if(b===0)return r.forEach(p=>p()),i.fallback?(c=!0,D(p=>(r=[p],o=[i.fallback()]))):(r=[],l=[],o=[]);let a=g,f=0;c&&(c=!1,r[0](),o=[]);const y=o.length;if(!y){for(;f<b;f++,a+=u)h(f,a);return o}const A=he(b,y);for(;f<A;f++,a+=u)l[f](a);for(;f<b;f++,a+=u)h(f,a);return b<y&&(o.splice(f),l.splice(f),r.splice(f).forEach(p=>p())),o};return()=>{let g=n();if(g===0)return console.warn("Range cannot have a step of 0"),o;let v=e(),u=t();return g=de(g)*et(u-v||1),I(d.bind(void 0,v,u,g))}}function lt(e){let t,n,s;"to"in e?(t=()=>e.start??0,n=()=>e.to,s=()=>e.step??1):(t=F(()=>e[0]),n=F(()=>e[1]),s=F(()=>e[2]??1));const i=e.fallback?()=>e.fallback:void 0,r=ke(()=>e.children);return ot(t,n,s,r,{fallback:i})}function X(e){const{top:t,bottom:n,left:s,right:i,width:r,height:o}=e.getBoundingClientRect(),l=e.parentNode.getBoundingClientRect();return{top:t-l.top,bottom:n,left:s-l.left,right:i,width:r,height:o}}const re=e=>{const t=Ke(()=>e.children),n=e.name||"s";e=Qe({name:n,enterActiveClass:n+"-enter-active",enterClass:n+"-enter",enterToClass:n+"-enter-to",exitActiveClass:n+"-exit-active",exitClass:n+"-exit",exitToClass:n+"-exit-to",moveClass:n+"-move"},e);const{onBeforeEnter:s,onEnter:i,onAfterEnter:r,onBeforeExit:o,onExit:l,onAfterExit:c}=e,[h,d]=pe();let g=[],v=!0;return Ie(()=>{const u=t(),b=[...u],a=new Set(u),f=new Set(g),y=e.enterClass.split(" "),A=e.enterActiveClass.split(" "),p=e.enterToClass.split(" "),E=e.exitClass.split(" "),$=e.exitActiveClass.split(" "),j=e.exitToClass.split(" ");for(let T=0;T<u.length;T++){const m=u[T];if(!v&&!f.has(m)){let _=function(){m&&(m.classList.remove(...A),m.classList.remove(...p),r&&r(m))};var C=_;s&&s(m),m.classList.add(...y),m.classList.add(...A),requestAnimationFrame(()=>{m.classList.remove(...y),m.classList.add(...p),i&&i(m,_),(!i||i.length<2)&&(m.addEventListener("transitionend",_,{once:!0}),m.addEventListener("animationend",_,{once:!0}))})}}for(let T=0;T<g.length;T++){const m=g[T];if(!a.has(m)&&m.parentNode){let _=function(){m.classList.remove(...$),m.classList.remove(...j),c&&c(m),g=g.filter(Me=>Me!==m),d(g)};var C=_;b.splice(T,0,m),o&&o(m),m.classList.add(...E),m.classList.add(...$),requestAnimationFrame(()=>{m.classList.remove(...E),m.classList.add(...j)}),l&&l(m,_),(!l||l.length<2)&&(m.addEventListener("transitionend",_,{once:!0}),m.addEventListener("animationend",_,{once:!0}))}}g=b,d(b)}),Ue(u=>{const b=h();return b.forEach(a=>{let f;(f=u.get(a))?f.new&&(f.new=!1,f.newPos=X(a)):u.set(a,f={pos:X(a),new:!v}),f.new&&a.addEventListener("transitionend",()=>{f.new=!1,a.parentNode&&(f.newPos=X(a))},{once:!0}),f.newPos&&(f.pos=f.newPos),f.newPos=X(a)}),v?(v=!1,u):(b.forEach(a=>{const f=u.get(a),y=f.pos,A=f.newPos,p=y.left-A.left,E=y.top-A.top;if(p||E){f.moved=!0;const $=a.style;$.transform=`translate(${p}px,${E}px)`,$.transitionDuration="0s"}}),document.body.offsetHeight,b.forEach(a=>{const f=u.get(a);if(f.moved){let E=function($){$&&$.target!==a||!a.parentNode||(!$||/transform$/.test($.propertyName))&&(a.removeEventListener("transitionend",E),a.classList.remove(...p))};var y=E;f.moved=!1;const A=a.style,p=e.moveClass.split(" ");a.classList.add(...p),A.transform=A.transitionDuration="",a.addEventListener("transitionend",E)}}),u)},new Map),h};const ge=Symbol("store-raw"),G=Symbol("store-node"),ft=Symbol("store-name");function Te(e,t){let n=e[N];if(!n&&(Object.defineProperty(e,N,{value:n=new Proxy(e,ut)}),!Array.isArray(e))){const s=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let r=0,o=s.length;r<o;r++){const l=s[r];if(i[l].get){const c=i[l].get.bind(n);Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:c})}}}return n}function ee(e){let t;return e!=null&&typeof e=="object"&&(e[N]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function W(e,t=new Set){let n,s,i,r;if(n=e!=null&&e[ge])return n;if(!ee(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,l=e.length;o<l;o++)i=e[o],(s=W(i,t))!==i&&(e[o]=s)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let c=0,h=o.length;c<h;c++)r=o[c],!l[r].get&&(i=e[r],(s=W(i,t))!==i&&(e[r]=s))}return e}function ve(e){let t=e[G];return t||Object.defineProperty(e,G,{value:t={}}),t}function be(e,t,n){return e[t]||(e[t]=De(n))}function ct(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===N||t===G||t===ft||(delete n.value,delete n.writable,n.get=()=>e[N][t]),n}function Re(e){if($e()){const t=ve(e);(t._||(t._=De()))()}}function at(e){return Re(e),Reflect.ownKeys(e)}function De(e){const[t,n]=pe(e,{equals:!1,internal:!0});return t.$=n,t}const ut={get(e,t,n){if(t===ge)return e;if(t===N)return n;if(t===Ae)return Re(e),n;const s=ve(e),i=s.hasOwnProperty(t);let r=i?s[t]():e[t];if(t===G||t==="__proto__")return r;if(!i){const o=Object.getOwnPropertyDescriptor(e,t);$e()&&(typeof r!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(r=be(s,t,r)())}return ee(r)?Te(r):r},has(e,t){return t===ge||t===N||t===Ae||t===G||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:at,getOwnPropertyDescriptor:ct};function te(e,t,n,s=!1){if(!s&&e[t]===n)return;const i=e[t],r=e.length;n===void 0?delete e[t]:e[t]=n;let o=ve(e),l;(l=be(o,t,i))&&l.$(()=>n),Array.isArray(e)&&e.length!==r&&(l=be(o,"length",r))&&l.$(e.length),(l=o._)&&l.$()}function je(e,t){const n=Object.keys(t);for(let s=0;s<n.length;s+=1){const i=n[s];te(e,i,t[i])}}function dt(e,t){if(typeof t=="function"&&(t=t(e)),t=W(t),Array.isArray(t)){if(e===t)return;let n=0,s=t.length;for(;n<s;n++){const i=t[n];e[n]!==i&&te(e,n,i)}te(e,"length",s)}else je(e,t)}function H(e,t,n=[]){let s,i=e;if(t.length>1){s=t.shift();const o=typeof s,l=Array.isArray(e);if(Array.isArray(s)){for(let c=0;c<s.length;c++)H(e,[s[c]].concat(t),n);return}else if(l&&o==="function"){for(let c=0;c<e.length;c++)s(e[c],c)&&H(e,[c].concat(t),n);return}else if(l&&o==="object"){const{from:c=0,to:h=e.length-1,by:d=1}=s;for(let g=c;g<=h;g+=d)H(e,[g].concat(t),n);return}else if(t.length>1){H(e[s],t,[s].concat(n));return}i=e[s],n=[s].concat(n)}let r=t[0];typeof r=="function"&&(r=r(i,n),r===i)||s===void 0&&r==null||(r=W(r),s===void 0||ee(i)&&ee(r)&&!Array.isArray(r)?je(i,r):te(e,s,r))}function ht(...[e,t]){const n=W(e||{}),s=Array.isArray(n),i=Te(n);function r(...o){qe(()=>{s&&o.length===1?dt(n,o[0]):H(n,o)})}return[i,r]}const gt=we('<div class="w-4 h-4 center-child rounded-full bg-cyan-500 transition-all duration-500"></div>'),bt=we('<div class="p-2 bg-gray-600 transition-all duration-500">fallback</div>'),yt=we('<div class="p-24 box-border w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-gray-800 text-white"><div class="wrapper-v"><h4>Start: <!>, To: <!>, Step: </h4><div><button class="btn">shuffle</button></div><h4>Repeat component</h4><div class="flex space-x-2"></div><h4>Range component</h4><div class="flex space-x-2"></div><h4>IndexRange component</h4><div class="flex space-x-2"></div></div></div>'),oe=e=>(()=>{const t=gt.cloneNode(!0);return R(t,()=>e.n),t})(),le=()=>bt.cloneNode(!0),pt=()=>{const[e,t]=ht({start:5,to:-5,step:2}),n=()=>{const i=Math.round(Math.random()*10-6),r=Math.round(Math.random()*10-2),o=Math.round(Math.random()*4);t({start:i,to:r,step:o})},s=setInterval(n,6e3);return ne(()=>clearInterval(s)),(()=>{const i=yt.cloneNode(!0),r=i.firstChild,o=r.firstChild,l=o.firstChild,c=l.nextSibling,h=c.nextSibling,d=h.nextSibling;d.nextSibling;const g=o.nextSibling,v=g.firstChild,u=g.nextSibling,b=u.nextSibling,a=b.nextSibling,f=a.nextSibling,y=f.nextSibling,A=y.nextSibling;return R(o,()=>e.start,c),R(o,()=>e.to,d),R(o,()=>e.step,null),v.$$click=n,R(b,L(re,{name:"fade",get children(){return L(st,{get times(){return e.to},get fallback(){return L(le,{})},children:p=>L(oe,{n:p})})}})),R(f,L(re,{name:"fade",get children(){return L(rt,{get start(){return e.start},get to(){return e.to},get step(){return e.step},get fallback(){return L(le,{})},children:p=>L(oe,{n:p})})}})),R(A,L(re,{name:"fade",get children(){return L(lt,{get start(){return e.start},get to(){return e.to},get step(){return e.step},get fallback(){return L(le,{})},children:p=>L(oe,{get n(){return p()}})})}})),i})()};Je(()=>L(pt,{}),document.getElementById("root"));Ze(["click"]);
