(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const h={};function q(e){h.context=e}const ke=(e,t)=>e===t,Te=Symbol("solid-track"),K={equals:ke};let ge=ve;const O=1,G=2,be={owned:null,cleanups:null,context:null,owner:null},ne={};var w=null;let T=null,y=null,C=null,k=null,se=0;function D(e,t){const n=y,i=w,r=e.length===0,l=r?be:{owned:null,cleanups:null,context:null,owner:t||i},o=r?e:()=>e(()=>N(()=>Z(l)));w=l,y=null;try{return j(o,!0)}finally{y=n,w=i}}function P(e,t){t=t?Object.assign({},K,t):K;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),me(n,r));return[xe.bind(n),i]}function le(e,t,n){const i=Y(e,t,!0,O);M(i)}function H(e,t,n){const i=Y(e,t,!1,O);M(i)}function Ne(e,t,n){ge=Fe;const i=Y(e,t,!1,O),r=F&&z(w,F.id);r&&(i.suspense=r),i.user=!0,k?k.push(i):M(i)}function I(e,t,n){n=n?Object.assign({},K,n):K;const i=Y(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,M(i),xe.bind(i)}function _e(e,t,n){let i,r,l;arguments.length===2&&typeof t=="object"||arguments.length===1?(i=!0,r=e,l=t||{}):(i=e,r=t,l=n||{});let o=null,s=ne,c=null,u=!1,f=!1,p="initialValue"in l,a=typeof i=="function"&&I(i);const d=new Set,[x,S]=(l.storage||P)(l.initialValue),[b,$]=P(void 0),[m,E]=P(void 0,{equals:!1}),[L,_]=P(p?"ready":"unresolved");if(h.context){c=`${h.context.id}${h.context.count++}`;let g;l.ssrLoadFrom==="initial"?s=l.initialValue:h.load&&(g=h.load(c))&&(s=g[0])}function R(g,v,A,V){return o===g&&(o=null,p=!0,(g===s||v===s)&&l.onHydrated&&queueMicrotask(()=>l.onHydrated(V,{value:v})),s=ne,Le(v,A)),v}function Le(g,v){j(()=>{v||S(()=>g),_(v?"errored":"ready"),$(v);for(const A of d.keys())A.decrement();d.clear()},!1)}function ee(){const g=F&&z(w,F.id),v=x(),A=b();if(A&&!o)throw A;return y&&!y.user&&g&&le(()=>{m(),o&&(g.resolved&&T&&u?T.promises.add(o):d.has(g)||(g.increment(),d.add(g)))}),v}function te(g=!0){if(g!==!1&&f)return;f=!1;const v=a?a():i;if(u=T,v==null||v===!1){R(o,N(x));return}const A=s!==ne?s:N(()=>r(v,{value:x(),refetching:g}));return typeof A!="object"||!(A&&"then"in A)?(R(o,A,void 0,v),A):(o=A,f=!0,queueMicrotask(()=>f=!1),j(()=>{_(p?"refreshing":"pending"),E()},!1),A.then(V=>R(A,V,void 0,v),V=>R(A,void 0,Ce(V),v)))}return Object.defineProperties(ee,{state:{get:()=>L()},error:{get:()=>b()},loading:{get(){const g=L();return g==="pending"||g==="refreshing"}},latest:{get(){if(!p)return ee();const g=b();if(g&&!o)throw g;return x()}}}),a?le(()=>te(!1)):te(!1),[ee,{refetch:te,mutate:S}]}function N(e){const t=y;y=null;try{return e()}finally{y=t}}function Ie(e,t,n){const i=Array.isArray(e);let r,l=n&&n.defer;return o=>{let s;if(i){s=Array(e.length);for(let u=0;u<e.length;u++)s[u]=e[u]()}else s=e();if(l){l=!1;return}const c=N(()=>t(s,r,o));return r=s,c}}function J(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function Oe(){return w}function Pe(e){k.push.apply(k,e),e.length=0}function ye(e,t){const n=Symbol("context");return{id:n,Provider:Me(n),defaultValue:e}}function Ue(e){let t;return(t=z(w,e.id))!==void 0?t:e.defaultValue}function we(e){const t=I(e),n=I(()=>ie(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}let F;function je(){return F||(F=ye({}))}function xe(){const e=T;if(this.sources&&(this.state||e))if(this.state===O||e)M(this);else{const t=C;C=null,j(()=>W(this),!1),C=t}if(y){const t=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(t)):(y.sources=[this],y.sourceSlots=[t]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function me(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let r=0;r<e.observers.length;r+=1){const l=e.observers[r],o=T&&T.running;o&&T.disposed.has(l),(o&&!l.tState||!o&&!l.state)&&(l.pure?C.push(l):k.push(l),l.observers&&Ae(l)),o||(l.state=O)}if(C.length>1e6)throw C=[],new Error},!1)),t}function M(e){if(!e.fn)return;Z(e);const t=w,n=y,i=se;y=w=e,Re(e,e.value,i),y=n,w=t}function Re(e,t,n){let i;try{i=e.fn(t)}catch(r){e.pure&&(e.state=O,e.owned&&e.owned.forEach(Z),e.owned=null),Se(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?me(e,i):e.value=i,e.updatedAt=n)}function Y(e,t,n,i=O,r){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:null,pure:n};return w===null||w!==be&&(w.owned?w.owned.push(l):w.owned=[l]),l}function Q(e){const t=T;if(e.state===0||t)return;if(e.state===G||t)return W(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<se);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===O||t)M(e);else if(e.state===G||t){const r=C;C=null,j(()=>W(e,n[0]),!1),C=r}}function j(e,t){if(C)return e();let n=!1;t||(C=[]),k?n=!0:k=[],se++;try{const i=e();return Be(n),i}catch(i){C||(k=null),Se(i)}}function Be(e){if(C&&(ve(C),C=null),e)return;const t=k;k=null,t.length&&j(()=>ge(t),!1)}function ve(e){for(let t=0;t<e.length;t++)Q(e[t])}function Fe(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:Q(i)}for(h.context&&q(),t=0;t<n;t++)Q(e[t])}function W(e,t){const n=T;e.state=0;for(let i=0;i<e.sources.length;i+=1){const r=e.sources[i];r.sources&&(r.state===O||n?r!==t&&Q(r):(r.state===G||n)&&W(r,t))}}function Ae(e){const t=T;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=G,i.pure?C.push(i):k.push(i),i.observers&&Ae(i))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const l=r.pop(),o=n.observerSlots.pop();i<r.length&&(l.sourceSlots[o]=i,r[i]=l,n.observerSlots[i]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ce(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Se(e){throw e=Ce(e),e}function z(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:z(e.owner,t):void 0}function ie(e){if(typeof e=="function"&&!e.length)return ie(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=ie(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function Me(e,t){return function(i){let r;return H(()=>r=N(()=>(w.context={[e]:i.value},we(()=>i.children))),void 0),r}}const Ve=Symbol("fallback");function oe(e){for(let t=0;t<e.length;t++)e[t]()}function qe(e,t,n={}){let i=[],r=[],l=[],o=0,s=t.length>1?[]:null;return J(()=>oe(l)),()=>{let c=e()||[],u,f;return c[Te],N(()=>{let a=c.length,d,x,S,b,$,m,E,L,_;if(a===0)o!==0&&(oe(l),l=[],i=[],r=[],o=0,s&&(s=[])),n.fallback&&(i=[Ve],r[0]=D(R=>(l[0]=R,n.fallback())),o=1);else if(o===0){for(r=new Array(a),f=0;f<a;f++)i[f]=c[f],r[f]=D(p);o=a}else{for(S=new Array(a),b=new Array(a),s&&($=new Array(a)),m=0,E=Math.min(o,a);m<E&&i[m]===c[m];m++);for(E=o-1,L=a-1;E>=m&&L>=m&&i[E]===c[L];E--,L--)S[L]=r[E],b[L]=l[E],s&&($[L]=s[E]);for(d=new Map,x=new Array(L+1),f=L;f>=m;f--)_=c[f],u=d.get(_),x[f]=u===void 0?-1:u,d.set(_,f);for(u=m;u<=E;u++)_=i[u],f=d.get(_),f!==void 0&&f!==-1?(S[f]=r[u],b[f]=l[u],s&&($[f]=s[u]),f=x[f],d.set(_,f)):l[u]();for(f=m;f<a;f++)f in S?(r[f]=S[f],l[f]=b[f],s&&(s[f]=$[f],s[f](f))):r[f]=D(p);r=r.slice(0,o=a),i=c.slice(0)}return r});function p(a){if(l[f]=a,s){const[d,x]=P(f);return s[f]=x,t(c[f],d)}return t(c[f])}}}function U(e,t){return N(()=>e(t||{}))}function De(e){const t="fallback"in e&&{fallback:()=>e.fallback};return I(qe(()=>e.each,e.children,t||void 0))}function He(e){let t=!1,n=!1;const i=(o,s)=>o[0]===s[0]&&(t?o[1]===s[1]:!o[1]==!s[1])&&o[2]===s[2],r=we(()=>e.children),l=I(()=>{let o=r();Array.isArray(o)||(o=[o]);for(let s=0;s<o.length;s++){const c=o[s].when;if(c)return n=!!o[s].keyed,[s,c,o[s]]}return[-1]},void 0,{equals:i});return I(()=>{const[o,s,c]=l();if(o<0)return e.fallback;const u=c.children,f=typeof u=="function"&&u.length>0;return t=n||f,f?N(()=>u(s)):u},void 0,void 0)}function fe(e){return e}const Ke=ye();function Ge(e){let t=0,n,i,r,l,o;const[s,c]=P(!1),u=je(),f={increment:()=>{++t===1&&c(!0)},decrement:()=>{--t===0&&c(!1)},inFallback:s,effects:[],resolved:!1},p=Oe();if(h.context&&h.load){const x=h.context.id+h.context.count;let S=h.load(x);if(S&&(r=S[0])&&r!=="$$f"){(typeof r!="object"||!("then"in r))&&(r=Promise.resolve(r));const[b,$]=P(void 0,{equals:!1});l=b,r.then(m=>{if(m||h.done)return m&&(o=m),$();h.gather(x),q(i),$(),q()})}}const a=Ue(Ke);a&&(n=a.register(f.inFallback));let d;return J(()=>d&&d()),U(u.Provider,{value:f,get children(){return I(()=>{if(o)throw o;if(i=h.context,l)return l(),l=void 0;i&&r==="$$f"&&q();const x=I(()=>e.children);return I(S=>{const b=f.inFallback(),{showContent:$=!0,showFallback:m=!0}=n?n():{};if((!b||r&&r!=="$$f")&&$)return f.resolved=!0,d&&d(),d=i=r=void 0,Pe(f.effects),x();if(m)return d?S:D(E=>(d=E,i&&(q({id:i.id+"f",count:0}),i=void 0),e.fallback),p)})})}})}function Qe(e,t,n){let i=n.length,r=t.length,l=i,o=0,s=0,c=t[r-1].nextSibling,u=null;for(;o<r||s<l;){if(t[o]===n[s]){o++,s++;continue}for(;t[r-1]===n[l-1];)r--,l--;if(r===o){const f=l<i?s?n[s-1].nextSibling:n[l-s]:c;for(;s<l;)e.insertBefore(n[s++],f)}else if(l===s)for(;o<r;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[l-1]&&n[s]===t[r-1]){const f=t[--r].nextSibling;e.insertBefore(n[s++],t[o++].nextSibling),e.insertBefore(n[--l],f),t[r]=n[l]}else{if(!u){u=new Map;let p=s;for(;p<l;)u.set(n[p],p++)}const f=u.get(t[o]);if(f!=null)if(s<f&&f<l){let p=o,a=1,d;for(;++p<r&&p<l&&!((d=u.get(t[p]))==null||d!==f+a);)a++;if(a>f-s){const x=t[o];for(;s<f;)e.insertBefore(n[s++],x)}else e.replaceChild(n[s++],t[o++])}else o++;else t[o++].remove()}}}const ue="_$DX_DELEGATE";function We(e,t,n,i={}){let r;return D(l=>{r=l,t===document?e():Ee(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function $e(e,t,n){const i=document.createElement("template");i.innerHTML=e;let r=i.content.firstChild;return n&&(r=r.firstChild),r}function Xe(e,t=window.document){const n=t[ue]||(t[ue]=new Set);for(let i=0,r=e.length;i<r;i++){const l=e[i];n.has(l)||(n.add(l),t.addEventListener(l,Ze))}}function Je(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ye(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=l=>r.call(e,n[1],l))}else e.addEventListener(t,n)}function ce(e,t,n){return N(()=>e(t,n))}function Ee(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return X(e,t,i,n);H(r=>X(e,t(),r,n),i)}function Ze(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),h.registry&&!h.done&&(h.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>{for(;i&&i.nodeType!==8&&i.nodeValue!=="pl-"+e;){let r=i.nextSibling;i.remove(),i=r}i&&i.remove()}));n;){const i=n[t];if(i&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?i.call(n,r,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function X(e,t,n,i,r){for(h.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(h.context)return n;if(l==="number"&&(t=t.toString()),o){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=B(e,n,i,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(h.context)return n;n=B(e,n,i)}else{if(l==="function")return H(()=>{let s=t();for(;typeof s=="function";)s=s();n=X(e,s,n,i)}),()=>n;if(Array.isArray(t)){const s=[],c=n&&Array.isArray(n);if(re(s,t,n,r))return H(()=>n=X(e,s,n,i,!0)),()=>n;if(h.context){if(!s.length)return n;for(let u=0;u<s.length;u++)if(s[u].parentNode)return n=s}if(s.length===0){if(n=B(e,n,i),o)return n}else c?n.length===0?ae(e,s,i):Qe(e,n,s):(n&&B(e),ae(e,s));n=s}else if(t instanceof Node){if(h.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=B(e,n,i,t);B(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function re(e,t,n,i){let r=!1;for(let l=0,o=t.length;l<o;l++){let s=t[l],c=n&&n[l];if(s instanceof Node)e.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))r=re(e,s,c)||r;else if(typeof s=="function")if(i){for(;typeof s=="function";)s=s();r=re(e,Array.isArray(s)?s:[s],Array.isArray(c)?c:[c])||r}else e.push(s),r=!0;else{const u=String(s);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return r}function ae(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function B(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const s=t[o];if(r!==s){const c=s.parentNode===e;!l&&!o?c?e.replaceChild(r,s):e.insertBefore(r,n):c&&s.remove()}else l=!0}}else e.insertBefore(r,n);return[r]}var ze=e=>typeof e=="function"&&!e.length?e():e;const de=async e=>{typeof e=="string"?await navigator.clipboard.writeText(e):await navigator.clipboard.write(e)};function et(){return navigator.clipboard.read()}const tt=(e,t)=>{let n=!0;const[i,{refetch:r}]=_e(async(l,o)=>{if(n)return n=!1,o.value;try{const s=await et();return s.length?Promise.all(s.map(async c=>{const u=c.types[c.types.length-1],f=await c.getType(u),p=f.type==="text/plain"?await f.text():void 0;return{type:u,blob:f,text:p}})):[]}catch{return[]}},{initialValue:[]});return navigator.clipboard.addEventListener("clipboardchange",r),J(()=>navigator.clipboard.removeEventListener("clipboardchange",r)),e&&Ne(Ie(e,()=>de(e()),{defer:t||!0})),[i,r,de]},he=(e,t)=>{const n=()=>{const i=ze(t);let r=i.value;r||(r=e[["input","texfield"].includes(e.tagName.toLowerCase())?"value":"innerHTML"]);let l;i.setter?l=i.setter:l=async o=>await navigator.clipboard.writeText(o),i.highlight&&i.highlight(e),l(r)};e.addEventListener("click",n),J(()=>e.removeEventListener("click",n))},pe=(e,t)=>new ClipboardItem({[e]:t}),nt=(e,t)=>n=>{n.setSelectionRange(e||0,t||n.value.length)},it=""+new URL("img-1640bb3a.png",import.meta.url).href,rt=""+new URL("img2-0b97106c.png",import.meta.url).href;const st=$e('<div class="flex justify-center items-center box-border w-full h-screen overflow-hidden bg-gray-900"><div class="flex flex-col items-center"><div class="flex flex-col space-y-3 max-w-lg"><div class="flex flex-col bg-white rounded-lg p-5 shadow"><input class="p-3 text-2xl border-blue-700 border-3 rounded-md text-center" value="Copy me by clicking!"><button class="mt-2 font-semibold p-3 text-white bg-blue-700 hover:bg-blue-600 transition cursor-pointer border-none rounded-md">Copy button text</button><div class="mt-2 grid grid-cols-2 gap-2"><button class="font-semibold p-3 text-white bg-blue-700 hover:bg-blue-600 transition cursor-pointer border-none rounded-md">Copy Image 1</button><button class="font-semibold p-3 text-white bg-blue-700 hover:bg-blue-600 transition cursor-pointer border-none rounded-md">Copy Image 2</button></div></div><div class="flex rounded-lg overflow-hidden text-center bg-white"><div class="w-full p-5"></div><button class="p-4 bg-blue-700 border-none font-semibold text-white hover:bg-blue-600 transition cursor-pointer">Read</button></div></div></div></div>'),lt=$e('<img class="w-full">'),ot=()=>{const[e,t]=P(""),[n,i]=tt(e);return(()=>{const r=st.cloneNode(!0),l=r.firstChild,o=l.firstChild,s=o.firstChild,c=s.firstChild,u=c.nextSibling,f=u.nextSibling,p=f.firstChild,a=p.nextSibling,d=s.nextSibling,x=d.firstChild,S=x.nextSibling;return ce(he,c,()=>({highlight:nt()})),ce(he,u,()=>!0),p.$$click=async()=>{const b=await fetch(it);t([pe("image/png",b.blob())])},a.$$click=async()=>{const b=await fetch(rt);t([pe("image/png",b.blob())])},Ee(x,U(Ge,{fallback:"Loading...",get children(){return U(De,{get each(){return n()},children:b=>U(He,{get children(){return[U(fe,{get when(){return b.type=="text/plain"},get children(){return b.text}}),U(fe,{get when(){return b.type=="image/png"},get children(){const $=lt.cloneNode(!0);return H(()=>Je($,"src",URL.createObjectURL(b.blob))),$}})]}})})}})),Ye(S,"click",i,!0),r})()};We(()=>U(ot,{}),document.getElementById("root"));Xe(["click"]);
