import{c as $,j as a,i as l,t as o,d as _}from"./index-4938f250.js";import{h as m}from"./index-faae49c2.js";const f=o("<p>Signal:"),i=o('<button class="btn">'),g=o("<p>Setter:"),b=o("<p>Result: ");function S(){const[e,c]=$(1),[n,p]=m(t=>(e(),++t),-2),[r,u]=m(e,-2);return a(()=>{c(2),console.log(2,e(),r())}),a(()=>{u(-3),console.log(-3,r())}),[f(),(()=>{const t=i();return t.$$click=()=>c(s=>++s),l(t,e),t})(),g(),(()=>{const t=i();return t.$$click=()=>p(s=>--s),l(t,n),t})(),(()=>{const t=b();return t.firstChild,l(t,n,null),t})()]}_(["click"]);export{S as default};
