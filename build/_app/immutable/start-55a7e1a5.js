import{S as at,i as rt,s as ot,a as st,e as B,c as it,b as J,g as ue,t as F,d as de,f as M,h as G,j as lt,o as Ie,k as ct,l as ft,m as ut,n as be,p as C,q as dt,r as pt,u as ht,v as W,w as Y,x as Ue,y as X,z as Z,A as le}from"./chunks/index-ee150426.js";import{S as tt,I as q,g as Ke,f as ze,a as ve,b as ce,s as V,i as We,c as fe,P as Ye,d as mt,e as _t,h as gt}from"./chunks/singletons-9273d958.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const i of vt){let o=n[i];Object.defineProperty(n,i,{get(){return e(),o},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function Rt(a){return a.replace(/\/$/,"")+St}function Lt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const pe=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&te.delete($e(a)),pe(a,e));const te=new Map;function It(a,e){const n=$e(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:o,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&te.set(n,{body:o,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,d))}return pe(a,e)}function At(a,e,n){if(te.size>0){const i=$e(a,n),o=te.get(i);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);te.delete(i)}}return pe(e,n)}function $e(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const Ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Pt(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${$t(a).map(i=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,h)=>{if(h%2){if(_.startsWith("x+"))return Ee(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Ee(String.fromCharCode(..._.slice(2).split("-").map(O=>parseInt(O,16))));const g=Ot.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,y,R,j,D]=g;return e.push({name:j,matcher:D,optional:!!y,rest:!!R,chained:R?h===1&&t[0]==="":!1}),R?"(.*?)":y?"([^/]*)?":"([^/]+?)"}return Ee(_)}).join("")}).join("")}/?$`),params:e}}function Ut(a){return!/^\([^)]+\)$/.test(a)}function $t(a){return a.slice(1).split("/").filter(Ut)}function Nt(a,e,n){const i={},o=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let _=o[t];if(f.chained&&f.rest&&d&&(_=_?d+"/"+_:d),d="",_===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](_)){if(f.optional&&f.chained){let h=o.indexOf(void 0,t);if(h===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=_;else return}for(;h>=t;)o[h]=o[h-1],h-=1;continue}return}i[f.name]=_}}if(!d)return i}function Ee(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(a,e,n,i){const o=new Set(e);return Object.entries(n).map(([f,[_,h,g]])=>{const{pattern:y,params:R}=Pt(f),j={id:f,exec:D=>{const O=y.exec(D);if(O)return Nt(O,R,i)},errors:[1,...g||[]].map(D=>a[D]),layouts:[0,...h||[]].map(t),leaf:d(_)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function d(f){const _=f<0;return _&&(f=~f),[_,a[f]]}function t(f){return f===void 0?f:[o.has(f),a[f]]}}function Tt(a){let e,n,i;var o=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=W(o,d(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&2&&(_.form=t[1]),o!==(o=t[0][0])){if(e){ue();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),de()}o?(e=W(o,d(t)),Y(e.$$.fragment),M(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&M(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Dt(a){let e,n,i;var o=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return o&&(e=W(o,d(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&4&&(_.data=t[2]),f&523&&(_.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){ue();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),de()}o?(e=W(o,d(t)),Y(e.$$.fragment),M(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&M(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Ct(a){let e,n,i;var o=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=W(o,d(a))),{c(){e&&Y(e.$$.fragment),n=B()},l(t){e&&Ue(e.$$.fragment,t),n=B()},m(t,f){e&&X(e,t,f),J(t,n,f),i=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&2&&(_.form=t[1]),o!==(o=t[0][1])){if(e){ue();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),de()}o?(e=W(o,d(t)),Y(e.$$.fragment),M(e.$$.fragment,1),X(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){i||(e&&M(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Z(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=ct("div"),n&&n.c(),this.h()},l(i){e=ft(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ut(e);n&&n.l(o),o.forEach(G),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(i,o){J(i,e,o),n&&n.m(e,null)},p(i,o){i[5]?n?n.p(i,o):(n=Ze(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&G(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=dt(a[6])},l(n){e=pt(n,a[6])},m(n,i){J(n,e,i)},p(n,i){i&64&&ht(e,n[6])},d(n){n&&G(e)}}}function qt(a){let e,n,i,o,d;const t=[Dt,Tt],f=[];function _(g,y){return g[0][1]?0:1}e=_(a),n=f[e]=t[e](a);let h=a[4]&&Xe(a);return{c(){n.c(),i=st(),h&&h.c(),o=B()},l(g){n.l(g),i=it(g),h&&h.l(g),o=B()},m(g,y){f[e].m(g,y),J(g,i,y),h&&h.m(g,y),J(g,o,y),d=!0},p(g,[y]){let R=e;e=_(g),e===R?f[e].p(g,y):(ue(),F(f[R],1,1,()=>{f[R]=null}),de(),n=f[e],n?n.p(g,y):(n=f[e]=t[e](g),n.c()),M(n,1),n.m(i.parentNode,i)),g[4]?h?h.p(g,y):(h=Xe(g),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(g){d||(M(n),d=!0)},o(g){F(n),d=!1},d(g){f[e].d(g),g&&G(i),h&&h.d(g),g&&G(o)}}}function Vt(a,e,n){let{stores:i}=e,{page:o}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:_=null}=e;lt(i.page.notify);let h=!1,g=!1,y=null;return Ie(()=>{const R=i.page.subscribe(()=>{h&&(n(5,g=!0),n(6,y=document.title||"untitled page"))});return n(4,h=!0),R}),a.$$set=R=>{"stores"in R&&n(7,i=R.stores),"page"in R&&n(8,o=R.page),"components"in R&&n(0,d=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,_=R.data_1)},a.$$.update=()=>{a.$$.dirty&384&&i.page.set(o)},[d,t,f,_,h,g,y,i,o]}class Bt extends at{constructor(e){super(),rt(this,e,Vt,qt,ot,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Mt=function(a,e){return new URL(a,e).href},Qe={},ke=function(e,n,i){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Mt(d,i),d in Qe)return;Qe[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const y=o[g];if(y.href===d&&(!t||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const h=document.createElement("link");if(h.rel=t?"stylesheet":Ft,t||(h.as="script",h.crossOrigin=""),h.href=d,document.head.appendChild(h),t)return new Promise((g,y)=>{h.addEventListener("load",g),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Gt={},he=[()=>ke(()=>import("./chunks/0-4b3da088.js"),["./chunks\\0-4b3da088.js","./components\\pages\\_layout.svelte-f3d9fae0.js","./chunks\\index-ee150426.js","./assets\\_layout-ca700b56.css"],import.meta.url),()=>ke(()=>import("./chunks/1-768c4d3b.js"),["./chunks\\1-768c4d3b.js","./components\\error.svelte-24de4c7a.js","./chunks\\index-ee150426.js","./chunks\\singletons-9273d958.js"],import.meta.url),()=>ke(()=>import("./chunks/2-36ca8b7f.js"),["./chunks\\2-36ca8b7f.js","./components\\pages\\_page.svelte-7ce998da.js","./chunks\\index-ee150426.js","./assets\\_page-fbe54f98.css"],import.meta.url)],Ht=[0],Jt={"/":[2]},Kt={handleError:({error:a})=>{console.error(a)}};let Ae=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},xe=class{constructor(e,n){this.status=e,this.location=n}};async function zt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,o])=>[i,await o])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Wt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(a){if(typeof a=="number")return i(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function i(o,d=!1){if(o===Wt)return;if(o===Xt)return NaN;if(o===Zt)return 1/0;if(o===Qt)return-1/0;if(o===xt)return-0;if(d)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const _=new Set;n[o]=_;for(let y=1;y<t.length;y+=1)_.add(i(t[y]));break;case"Map":const h=new Map;n[o]=h;for(let y=1;y<t.length;y+=2)h.set(i(t[y]),i(t[y+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[o]=g;for(let y=1;y<t.length;y+=2)g[t[y]]=i(t[y+1]);break}else{const f=new Array(t.length);n[o]=f;for(let _=0;_<t.length;_+=1){const h=t[_];h!==Yt&&(f[_]=i(h))}}else{const f={};n[o]=f;for(const _ in t){const h=t[_];f[_]=i(h)}}return n[o]}return i(0)}function tn(a){return a.filter(e=>e!=null)}const Se=jt(he,Ht,Jt,Gt),Oe=he[0],Pe=he[1];Oe();Pe();let ne={};try{ne=JSON.parse(sessionStorage[tt])}catch{}function Re(a){ne[a]=fe()}function nn({target:a,base:e}){var Ge;const n=document.documentElement,i=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,h=!0,g=!1,y=!1,R=!1,j=!1,D,O=(Ge=history.state)==null?void 0:Ge[q];O||(O=Date.now(),history.replaceState({...history.state,[q]:O},"",location.href));const me=ne[O];me&&(history.scrollRestoration="manual",scrollTo(me.x,me.y));let H,Ne,ae;async function je(){ae=ae||Promise.resolve(),await ae,ae=null;const r=new URL(location.href),s=se(r,!0);o=null,await De(s,r,[])}async function _e(r,{noScroll:s=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:u=!1},m,v){return typeof r=="string"&&(r=new URL(r,Ke(document))),ie({url:r,scroll:s?fe():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:v,accepted:()=>{u&&(j=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const s=se(r,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return o={id:s.id,promise:Ve(s).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function re(...r){const c=Se.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function De(r,s,c,l,p={},u){var v,b;Ne=p;let m=r&&await Ve(r);if(m||(m=await Me(s,{id:null},await ee(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(r==null?void 0:r.url)||s,Ne!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(s.pathname))m=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return _e(new URL(m.location,s).href,{},[...c,s.pathname],p),!1;else((b=(v=m.props)==null?void 0:v.page)==null?void 0:b.status)>=400&&await V.updated.check()&&await x(s);if(i.length=0,j=!1,g=!0,l&&l.details){const{details:w}=l,k=w.replaceState?0:1;w.state[q]=O+=k,history[w.replaceState?"replaceState":"pushState"](w.state,"",s)}if(o=null,_?(t=m.state,m.props.page&&(m.props.page.url=s),D.$set(m.props)):Ce(m),l){const{scroll:w,keepfocus:k}=l,{activeElement:P}=document;await le();const T=document.activeElement!==P&&document.activeElement!==document.body;if(!k&&!T&&await Le(),h){const L=s.hash&&document.getElementById(s.hash.slice(1));w?scrollTo(w.x,w.y):L?L.scrollIntoView():scrollTo(0,0)}}else await le();h=!0,m.props.page&&(H=m.props.page),u&&u(),g=!1}function Ce(r){var l;t=r.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),H=r.props.page,D=new Bt({target:a,props:{...r.props,stores:V},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),_=!0}async function Q({url:r,params:s,branch:c,status:l,error:p,route:u,form:m}){let v="never";for(const L of c)(L==null?void 0:L.slash)!==void 0&&(v=L.slash);r.pathname=wt(r.pathname,v),r.search=r.search;const b={type:"loaded",state:{url:r,params:s,branch:c,error:p,route:u},props:{components:tn(c).map(L=>L.node.component)}};m!==void 0&&(b.props.form=m);let w={},k=!H,P=0;for(let L=0;L<Math.max(c.length,t.branch.length);L+=1){const E=c[L],U=t.branch[L];(E==null?void 0:E.data)!==(U==null?void 0:U.data)&&(k=!0),E&&(w={...w,...E.data},k&&(b.props[`data_${P}`]=w),P+=1)}return(!t.url||r.href!==t.url.href||t.error!==p||m!==void 0&&m!==H.form||k)&&(b.props.page={error:p,params:s,route:{id:(u==null?void 0:u.id)??null},status:l,url:new URL(r),form:m??null,data:k?w:H.data}),b}async function ge({loader:r,parent:s,url:c,params:l,route:p,server_data_node:u}){var w,k,P;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await r();if((w=b.universal)!=null&&w.load){let T=function(...E){for(const U of E){const{href:N}=new URL(U,c);v.dependencies.add(N)}};const L={route:{get id(){return v.route=!0,p.id}},params:new Proxy(l,{get:(E,U)=>(v.params.add(U),E[U])}),data:(u==null?void 0:u.data)??null,url:Et(c,()=>{v.url=!0}),async fetch(E,U){let N;E instanceof Request?(N=E.url,U={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...U}):N=E;const S=new URL(N,c).href;return T(S),_?At(N,S,U):It(N,U)},setHeaders:()=>{},depends:T,parent(){return v.parent=!0,s()}};m=await b.universal.load.call(null,L)??null,m=m?await zt(m):null}return{node:b,loader:r,server:u,universal:(k=b.universal)!=null&&k.load?{type:"data",data:m,uses:v}:null,data:m??(u==null?void 0:u.data)??null,slash:((P=b.universal)==null?void 0:P.trailingSlash)??(u==null?void 0:u.slash)}}function qe(r,s,c,l,p){if(j)return!0;if(!l)return!1;if(l.parent&&r||l.route&&s||l.url&&c)return!0;for(const u of l.params)if(p[u]!==t.params[u])return!0;for(const u of l.dependencies)if(i.some(m=>m(new URL(u))))return!0;return!1}function we(r,s){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?s??null:null}async function Ve({id:r,invalidating:s,url:c,params:l,route:p}){if((o==null?void 0:o.id)===r)return o.promise;const{errors:u,layouts:m,leaf:v}=p,b=[...m,v];u.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let w=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,P=t.route?p.id!==t.route.id:!1,T=b.reduce((S,A,$)=>{var z;const I=t.branch[$],K=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||qe(S.some(Boolean),P,k,(z=I.server)==null?void 0:z.uses,l));return S.push(K),S},[]);if(T.some(Boolean)){try{w=await et(c,T)}catch(S){return oe({status:500,error:await ee(S,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(w.type==="redirect")return w}const L=w==null?void 0:w.nodes;let E=!1;const U=b.map(async(S,A)=>{var z;if(!S)return;const $=t.branch[A],I=L==null?void 0:L[A];if((!I||I.type==="skip")&&S[1]===($==null?void 0:$.loader)&&!qe(E,P,k,(z=$.universal)==null?void 0:z.uses,l))return $;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return ge({loader:S[1],url:c,params:l,route:p,parent:async()=>{var Je;const He={};for(let ye=0;ye<A;ye+=1)Object.assign(He,(Je=await U[ye])==null?void 0:Je.data);return He},server_data_node:we(I===void 0&&S[0]?{type:"skip"}:I??null,$==null?void 0:$.server)})});for(const S of U)S.catch(()=>{});const N=[];for(let S=0;S<b.length;S+=1)if(b[S])try{N.push(await U[S])}catch(A){if(A instanceof xe)return{type:"redirect",location:A.location};let $=500,I;if(L!=null&&L.includes(A))$=A.status??$,I=A.error;else if(A instanceof Ae)$=A.status,I=A.body;else{if(await V.updated.check())return await x(c);I=await ee(A,{params:l,url:c,route:{id:p.id}})}const K=await Be(S,N,u);return K?await Q({url:c,params:l,branch:N.slice(0,K.idx).concat(K.node),status:$,error:I,route:p}):await Me(c,{id:p.id},I,$)}else N.push(void 0);return await Q({url:c,params:l,branch:N,status:200,error:null,route:p,form:s?void 0:null})}async function Be(r,s,c){for(;r--;)if(c[r]){let l=r;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:r,error:s,url:c,route:l}){const p={},u=await Oe();let m=null;if(u.has_server_load)try{const w=await et(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await x(c)}const v=await ge({loader:Oe,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:we(m)}),b={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Q({url:c,params:p,branch:[v,b],status:r,error:s,route:null})}function se(r,s){if(We(r,e))return;const c=yt(r.pathname.slice(e.length)||"/");for(const l of Se){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:s,route:l,params:bt(p),url:r}}}function Fe({url:r,type:s,intent:c,delta:l}){var v,b;let p=!1;const u={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:r},willUnload:!c,type:s};l!==void 0&&(u.delta=l);const m={...u,cancel:()=>{p=!0}};return y||d.before_navigate.forEach(w=>w(m)),p?null:u}async function ie({url:r,scroll:s,keepfocus:c,redirect_chain:l,details:p,type:u,delta:m,nav_token:v,accepted:b,blocked:w}){const k=se(r,!1),P=Fe({url:r,type:u,delta:m,intent:k});if(!P){w();return}Re(O),b(),y=!0,_&&V.navigating.set(P),await De(k,r,l,{scroll:s,keepfocus:c,details:p},v,()=>{y=!1,d.after_navigate.forEach(T=>T(P)),V.navigating.set(null)})}async function Me(r,s,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await oe({status:l,error:c,url:r,route:s}):await x(r)}function x(r){return location.href=r.href,new Promise(()=>{})}function nt(){let r;n.addEventListener("mousemove",u=>{const m=u.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function s(u){l(u.composedPath()[0],1)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s,{passive:!0});const c=new IntersectionObserver(u=>{for(const m of u)m.isIntersecting&&(re(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(u,m){const v=ze(u,n);if(!v)return;const{url:b,external:w}=ve(v,e);if(w)return;const k=ce(v);k.reload||(m<=k.preload_data?Te(b):m<=k.preload_code&&re(b.pathname))}function p(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:m,external:v}=ve(u,e);if(v)continue;const b=ce(u);b.reload||(b.preload_code===Ye.viewport&&c.observe(u),b.preload_code===Ye.eager&&re(m.pathname))}}d.after_navigate.push(p),p()}return{after_navigate:r=>{Ie(()=>(d.after_navigate.push(r),()=>{const s=d.after_navigate.indexOf(r);d.after_navigate.splice(s,1)}))},before_navigate:r=>{Ie(()=>(d.before_navigate.push(r),()=>{const s=d.before_navigate.indexOf(r);d.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{(g||!_)&&(h=!1)},goto:(r,s={})=>_e(r,s,[]),invalidate:r=>{if(typeof r=="function")i.push(r);else{const{href:s}=new URL(r,location.href);i.push(c=>c.href===s)}return je()},invalidateAll:()=>(j=!0,je()),preload_data:async r=>{const s=new URL(r,Ke(document));await Te(s)},preload_code:re,apply_action:async r=>{if(r.type==="error"){const s=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Be(t.branch.length,c,l.errors);if(p){const u=await Q({url:s,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=u.state,D.$set(u.props),le().then(Le)}}else if(r.type==="redirect")_e(r.location,{invalidateAll:!0},[]);else{const s={form:r.data,page:{...H,form:r.data,status:r.status}};D.$set(s),r.type==="success"&&le().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let c=!1;if(!y){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(u=>u(p))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(O);try{sessionStorage[tt]=JSON.stringify(ne)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||nt(),n.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const c=ze(s.composedPath()[0],n);if(!c)return;const{url:l,external:p,target:u}=ve(c,e);if(!l)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const m=ce(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||m.reload){Fe({url:l,type:"link"})||s.preventDefault(),y=!0;return}const[b,w]=l.href.split("#");if(w!==void 0&&b===location.href.split("#")[0]){R=!0,Re(O),t.url=l,V.page.set({...H,url:l}),V.page.notify();return}ie({url:l,scroll:m.noscroll?fe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),n.addEventListener("submit",s=>{if(s.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(u,e))return;const m=s.target,{noscroll:v,reload:b}=ce(m);if(b)return;s.preventDefault(),s.stopPropagation();const w=new FormData(m),k=l==null?void 0:l.getAttribute("name");k&&w.append(k,(l==null?void 0:l.getAttribute("value"))??""),u.search=new URLSearchParams(w).toString(),ie({url:u,scroll:v?fe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var c;if((c=s.state)!=null&&c[q]){if(s.state[q]===O)return;const l=s.state[q]-O;ie({url:new URL(location.href),scroll:ne[s.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=s.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[q]:++O},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&V.navigating.set(null)})},_hydrate:async({status:r=200,error:s,node_ids:c,params:l,route:p,data:u,form:m})=>{f=!0;const v=new URL(location.href);({params:l={},route:p={id:null}}=se(v,!1)||{});let b;try{const w=c.map(async(k,P)=>{const T=u[P];return ge({loader:he[k],url:v,params:l,route:p,parent:async()=>{const L={};for(let E=0;E<P;E+=1)Object.assign(L,(await w[E]).data);return L},server_data_node:we(T)})});b=await Q({url:v,params:l,branch:await Promise.all(w),status:r,error:s,form:m,route:Se.find(({id:k})=>k===p.id)??null})}catch(w){if(w instanceof xe){await x(new URL(w.location,location.href));return}b=await oe({status:w instanceof Ae?w.status:500,error:await ee(w,{url:v,params:l,route:p}),url:v,route:p})}Ce(b)}}}async function et(a,e){var d;const n=new URL(a);n.pathname=Rt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await pe(n.href),o=await i.json();if(!i.ok)throw new Error(o);return(d=o.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=en(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ee(a,e){return a instanceof Ae?a.body:Kt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{var o;i((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function ln({env:a,hydrate:e,paths:n,target:i,version:o}){mt(n),gt(o);const d=nn({target:i,base:n.base});_t({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{ln as start};
