(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ti(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const le={},Jt=[],Be=()=>{},$l=()=>!1,Hl=/^on[^a-z]/,Ur=e=>Hl.test(e),ni=e=>e.startsWith("onUpdate:"),he=Object.assign,ri=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},jl=Object.prototype.hasOwnProperty,ee=(e,t)=>jl.call(e,t),z=Array.isArray,Yt=e=>fn(e)==="[object Map]",Ra=e=>fn(e)==="[object Set]",Yi=e=>fn(e)==="[object Date]",zl=e=>fn(e)==="[object RegExp]",J=e=>typeof e=="function",ue=e=>typeof e=="string",kn=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Pa=e=>ae(e)&&J(e.then)&&J(e.catch),Oa=Object.prototype.toString,fn=e=>Oa.call(e),Vl=e=>fn(e).slice(8,-1),ka=e=>fn(e)==="[object Object]",si=e=>ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fr=ti(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Wl=/-(\w)/g,Je=Fr(e=>e.replace(Wl,(t,n)=>n?n.toUpperCase():"")),Kl=/\B([A-Z])/g,jt=Fr(e=>e.replace(Kl,"-$1").toLowerCase()),Br=Fr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ss=Fr(e=>e?`on${Br(e)}`:""),xn=(e,t)=>!Object.is(e,t),Xt=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},yr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ql=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Gl=e=>{const t=ue(e)?Number(e):NaN;return isNaN(t)?e:t};let Xi;const Ss=()=>Xi||(Xi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $r(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ue(r)?Ql(r):$r(r);if(s)for(const i in s)t[i]=s[i]}return t}else{if(ue(e))return e;if(ae(e))return e}}const Jl=/;(?![^(]*\))/g,Yl=/:([^]+)/,Xl=/\/\*[^]*?\*\//g;function Ql(e){const t={};return e.replace(Xl,"").split(Jl).forEach(n=>{if(n){const r=n.split(Yl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ii(e){let t="";if(ue(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=ii(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Zl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",eu=ti(Zl);function xa(e){return!!e||e===""}function tu(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=br(e[r],t[r]);return n}function br(e,t){if(e===t)return!0;let n=Yi(e),r=Yi(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=kn(e),r=kn(t),n||r)return e===t;if(n=z(e),r=z(t),n||r)return n&&r?tu(e,t):!1;if(n=ae(e),r=ae(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const c=e.hasOwnProperty(o),a=t.hasOwnProperty(o);if(c&&!a||!c&&a||!br(e[o],t[o]))return!1}}return String(e)===String(t)}const Y_=e=>ue(e)?e:e==null?"":z(e)||ae(e)&&(e.toString===Oa||!J(e.toString))?JSON.stringify(e,Na,2):String(e),Na=(e,t)=>t&&t.__v_isRef?Na(e,t.value):Yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ra(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!z(t)&&!ka(t)?String(t):t;let Pe;class Da{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function La(e){return new Da(e)}function nu(e,t=Pe){t&&t.active&&t.effects.push(e)}function oi(){return Pe}function Ma(e){Pe&&Pe.cleanups.push(e)}const ai=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ua=e=>(e.w&Ct)>0,Fa=e=>(e.n&Ct)>0,ru=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ct},su=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];Ua(s)&&!Fa(s)?s.delete(e):t[n++]=s,s.w&=~Ct,s.n&=~Ct}t.length=n}},Er=new WeakMap;let En=0,Ct=1;const As=30;let Ue;const Ut=Symbol(""),Rs=Symbol("");class ci{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nu(this,r)}run(){if(!this.active)return this.fn();let t=Ue,n=yt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ue,Ue=this,yt=!0,Ct=1<<++En,En<=As?ru(this):Qi(this),this.fn()}finally{En<=As&&su(this),Ct=1<<--En,Ue=this.parent,yt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ue===this?this.deferStop=!0:this.active&&(Qi(this),this.onStop&&this.onStop(),this.active=!1)}}function Qi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let yt=!0;const Ba=[];function dn(){Ba.push(yt),yt=!1}function hn(){const e=Ba.pop();yt=e===void 0?!0:e}function Ae(e,t,n){if(yt&&Ue){let r=Er.get(e);r||Er.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=ai()),$a(s)}}function $a(e,t){let n=!1;En<=As?Fa(e)||(e.n|=Ct,n=!Ua(e)):n=!e.has(Ue),n&&(e.add(Ue),Ue.deps.push(e))}function nt(e,t,n,r,s,i){const o=Er.get(e);if(!o)return;let c=[];if(t==="clear")c=[...o.values()];else if(n==="length"&&z(e)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),t){case"add":z(e)?si(n)&&c.push(o.get("length")):(c.push(o.get(Ut)),Yt(e)&&c.push(o.get(Rs)));break;case"delete":z(e)||(c.push(o.get(Ut)),Yt(e)&&c.push(o.get(Rs)));break;case"set":Yt(e)&&c.push(o.get(Ut));break}if(c.length===1)c[0]&&Ps(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);Ps(ai(a))}}function Ps(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&Zi(r);for(const r of n)r.computed||Zi(r)}function Zi(e,t){(e!==Ue||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function iu(e,t){var n;return(n=Er.get(e))==null?void 0:n.get(t)}const ou=ti("__proto__,__v_isRef,__isVue"),Ha=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(kn)),au=li(),cu=li(!1,!0),lu=li(!0),eo=uu();function uu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Z(this);for(let i=0,o=this.length;i<o;i++)Ae(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(Z)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){dn();const r=Z(this)[t].apply(this,n);return hn(),r}}),e}function fu(e){const t=Z(this);return Ae(t,"has",e),t.hasOwnProperty(e)}function li(e=!1,t=!1){return function(r,s,i){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&i===(e?t?Au:Ka:t?Wa:Va).get(r))return r;const o=z(r);if(!e){if(o&&ee(eo,s))return Reflect.get(eo,s,i);if(s==="hasOwnProperty")return fu}const c=Reflect.get(r,s,i);return(kn(s)?Ha.has(s):ou(s))||(e||Ae(r,"get",s),t)?c:fe(c)?o&&si(s)?c:c.value:ae(c)?e?di(c):pn(c):c}}const du=ja(),hu=ja(!0);function ja(e=!1){return function(n,r,s,i){let o=n[r];if(rn(o)&&fe(o)&&!fe(s))return!1;if(!e&&(!wr(s)&&!rn(s)&&(o=Z(o),s=Z(s)),!z(n)&&fe(o)&&!fe(s)))return o.value=s,!0;const c=z(n)&&si(r)?Number(r)<n.length:ee(n,r),a=Reflect.set(n,r,s,i);return n===Z(i)&&(c?xn(s,o)&&nt(n,"set",r,s):nt(n,"add",r,s)),a}}function pu(e,t){const n=ee(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&nt(e,"delete",t,void 0),r}function gu(e,t){const n=Reflect.has(e,t);return(!kn(t)||!Ha.has(t))&&Ae(e,"has",t),n}function mu(e){return Ae(e,"iterate",z(e)?"length":Ut),Reflect.ownKeys(e)}const za={get:au,set:du,deleteProperty:pu,has:gu,ownKeys:mu},_u={get:lu,set(e,t){return!0},deleteProperty(e,t){return!0}},vu=he({},za,{get:cu,set:hu}),ui=e=>e,Hr=e=>Reflect.getPrototypeOf(e);function er(e,t,n=!1,r=!1){e=e.__v_raw;const s=Z(e),i=Z(t);n||(t!==i&&Ae(s,"get",t),Ae(s,"get",i));const{has:o}=Hr(s),c=r?ui:n?pi:Nn;if(o.call(s,t))return c(e.get(t));if(o.call(s,i))return c(e.get(i));e!==s&&e.get(t)}function tr(e,t=!1){const n=this.__v_raw,r=Z(n),s=Z(e);return t||(e!==s&&Ae(r,"has",e),Ae(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function nr(e,t=!1){return e=e.__v_raw,!t&&Ae(Z(e),"iterate",Ut),Reflect.get(e,"size",e)}function to(e){e=Z(e);const t=Z(this);return Hr(t).has.call(t,e)||(t.add(e),nt(t,"add",e,e)),this}function no(e,t){t=Z(t);const n=Z(this),{has:r,get:s}=Hr(n);let i=r.call(n,e);i||(e=Z(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?xn(t,o)&&nt(n,"set",e,t):nt(n,"add",e,t),this}function ro(e){const t=Z(this),{has:n,get:r}=Hr(t);let s=n.call(t,e);s||(e=Z(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&nt(t,"delete",e,void 0),i}function so(){const e=Z(this),t=e.size!==0,n=e.clear();return t&&nt(e,"clear",void 0,void 0),n}function rr(e,t){return function(r,s){const i=this,o=i.__v_raw,c=Z(o),a=t?ui:e?pi:Nn;return!e&&Ae(c,"iterate",Ut),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function sr(e,t,n){return function(...r){const s=this.__v_raw,i=Z(s),o=Yt(i),c=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,l=s[e](...r),u=n?ui:t?pi:Nn;return!t&&Ae(i,"iterate",a?Rs:Ut),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:c?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:this}}function yu(){const e={get(i){return er(this,i)},get size(){return nr(this)},has:tr,add:to,set:no,delete:ro,clear:so,forEach:rr(!1,!1)},t={get(i){return er(this,i,!1,!0)},get size(){return nr(this)},has:tr,add:to,set:no,delete:ro,clear:so,forEach:rr(!1,!0)},n={get(i){return er(this,i,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:rr(!0,!1)},r={get(i){return er(this,i,!0,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),t[i]=sr(i,!1,!0),r[i]=sr(i,!0,!0)}),[e,n,t,r]}const[bu,Eu,wu,Iu]=yu();function fi(e,t){const n=t?e?Iu:wu:e?Eu:bu;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ee(n,s)&&s in r?n:r,s,i)}const Tu={get:fi(!1,!1)},Cu={get:fi(!1,!0)},Su={get:fi(!0,!1)},Va=new WeakMap,Wa=new WeakMap,Ka=new WeakMap,Au=new WeakMap;function Ru(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pu(e){return e.__v_skip||!Object.isExtensible(e)?0:Ru(Vl(e))}function pn(e){return rn(e)?e:hi(e,!1,za,Tu,Va)}function qa(e){return hi(e,!1,vu,Cu,Wa)}function di(e){return hi(e,!0,_u,Su,Ka)}function hi(e,t,n,r,s){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Pu(e);if(o===0)return e;const c=new Proxy(e,o===2?r:n);return s.set(e,c),c}function bt(e){return rn(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function rn(e){return!!(e&&e.__v_isReadonly)}function wr(e){return!!(e&&e.__v_isShallow)}function Ga(e){return bt(e)||rn(e)}function Z(e){const t=e&&e.__v_raw;return t?Z(t):e}function jr(e){return yr(e,"__v_skip",!0),e}const Nn=e=>ae(e)?pn(e):e,pi=e=>ae(e)?di(e):e;function Ja(e){yt&&Ue&&(e=Z(e),$a(e.dep||(e.dep=ai())))}function Ya(e,t){e=Z(e);const n=e.dep;n&&Ps(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Et(e){return Qa(e,!1)}function Xa(e){return Qa(e,!0)}function Qa(e,t){return fe(e)?e:new Ou(e,t)}class Ou{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Z(t),this._value=n?t:Nn(t)}get value(){return Ja(this),this._value}set value(t){const n=this.__v_isShallow||wr(t)||rn(t);t=n?t:Z(t),xn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Nn(t),Ya(this))}}function We(e){return fe(e)?e.value:e}const ku={get:(e,t,n)=>We(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Za(e){return bt(e)?e:new Proxy(e,ku)}function xu(e){const t=z(e)?new Array(e.length):{};for(const n in e)t[n]=Du(e,n);return t}class Nu{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return iu(Z(this._object),this._key)}}function Du(e,t,n){const r=e[t];return fe(r)?r:new Nu(e,t,n)}class Lu{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ci(t,()=>{this._dirty||(this._dirty=!0,Ya(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=Z(this);return Ja(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Mu(e,t,n=!1){let r,s;const i=J(e);return i?(r=e,s=Be):(r=e.get,s=e.set),new Lu(r,s,i||!s,n)}function wt(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){zr(i,t,n)}return s}function De(e,t,n,r){if(J(e)){const i=wt(e,t,n,r);return i&&Pa(i)&&i.catch(o=>{zr(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(De(e[i],t,n,r));return s}function zr(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,c)===!1)return}i=i.parent}const a=t.appContext.config.errorHandler;if(a){wt(a,null,10,[e,o,c]);return}}Uu(e,n,s,r)}function Uu(e,t,n,r=!0){console.error(e)}let Dn=!1,Os=!1;const ye=[];let Ve=0;const Qt=[];let Ze=null,Nt=0;const ec=Promise.resolve();let gi=null;function sn(e){const t=gi||ec;return e?t.then(this?e.bind(this):e):t}function Fu(e){let t=Ve+1,n=ye.length;for(;t<n;){const r=t+n>>>1;Ln(ye[r])<e?t=r+1:n=r}return t}function mi(e){(!ye.length||!ye.includes(e,Dn&&e.allowRecurse?Ve+1:Ve))&&(e.id==null?ye.push(e):ye.splice(Fu(e.id),0,e),tc())}function tc(){!Dn&&!Os&&(Os=!0,gi=ec.then(rc))}function Bu(e){const t=ye.indexOf(e);t>Ve&&ye.splice(t,1)}function $u(e){z(e)?Qt.push(...e):(!Ze||!Ze.includes(e,e.allowRecurse?Nt+1:Nt))&&Qt.push(e),tc()}function io(e,t=Dn?Ve+1:0){for(;t<ye.length;t++){const n=ye[t];n&&n.pre&&(ye.splice(t,1),t--,n())}}function nc(e){if(Qt.length){const t=[...new Set(Qt)];if(Qt.length=0,Ze){Ze.push(...t);return}for(Ze=t,Ze.sort((n,r)=>Ln(n)-Ln(r)),Nt=0;Nt<Ze.length;Nt++)Ze[Nt]();Ze=null,Nt=0}}const Ln=e=>e.id==null?1/0:e.id,Hu=(e,t)=>{const n=Ln(e)-Ln(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function rc(e){Os=!1,Dn=!0,ye.sort(Hu);const t=Be;try{for(Ve=0;Ve<ye.length;Ve++){const n=ye[Ve];n&&n.active!==!1&&wt(n,null,14)}}finally{Ve=0,ye.length=0,nc(),Dn=!1,gi=null,(ye.length||Qt.length)&&rc()}}function ju(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||le;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[u]||le;p&&(s=n.map(m=>ue(m)?m.trim():m)),d&&(s=n.map(ql))}let c,a=r[c=ss(t)]||r[c=ss(Je(t))];!a&&i&&(a=r[c=ss(jt(t))]),a&&De(a,e,6,s);const l=r[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,De(l,e,6,s)}}function sc(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},c=!1;if(!J(e)){const a=l=>{const u=sc(l,t,!0);u&&(c=!0,he(o,u))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!c?(ae(e)&&r.set(e,null),null):(z(i)?i.forEach(a=>o[a]=null):he(o,i),ae(e)&&r.set(e,o),o)}function Vr(e,t){return!e||!Ur(t)?!1:(t=t.slice(2).replace(/Once$/,""),ee(e,t[0].toLowerCase()+t.slice(1))||ee(e,jt(t))||ee(e,t))}let ge=null,ic=null;function Ir(e){const t=ge;return ge=e,ic=e&&e.type.__scopeId||null,t}function zu(e,t=ge,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&bo(-1);const i=Ir(t);let o;try{o=e(...s)}finally{Ir(i),r._d&&bo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function is(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:d,data:p,setupState:m,ctx:I,inheritAttrs:C}=e;let M,k;const E=Ir(e);try{if(n.shapeFlag&4){const b=s||r;M=ze(u.call(b,b,d,i,m,p,I)),k=a}else{const b=t;M=ze(b.length>1?b(i,{attrs:a,slots:c,emit:l}):b(i,null)),k=t.props?a:Vu(a)}}catch(b){Sn.length=0,zr(b,e,1),M=Se(Le)}let O=M;if(k&&C!==!1){const b=Object.keys(k),{shapeFlag:F}=O;b.length&&F&7&&(o&&b.some(ni)&&(k=Wu(k,o)),O=rt(O,k))}return n.dirs&&(O=rt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),M=O,Ir(E),M}const Vu=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ur(n))&&((t||(t={}))[n]=e[n]);return t},Wu=(e,t)=>{const n={};for(const r in e)(!ni(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ku(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:c,patchFlag:a}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?oo(r,o,l):!!o;if(a&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==r[p]&&!Vr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?oo(r,o,l):!0:!!o;return!1}function oo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Vr(n,i))return!0}return!1}function qu({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const oc=e=>e.__isSuspense;function Gu(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):$u(e)}function X_(e,t){return _i(e,null,t)}const ir={};function Oe(e,t,n){return _i(e,t,n)}function _i(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=le){var c;const a=oi()===((c=pe)==null?void 0:c.scope)?pe:null;let l,u=!1,d=!1;if(fe(e)?(l=()=>e.value,u=wr(e)):bt(e)?(l=()=>e,r=!0):z(e)?(d=!0,u=e.some(b=>bt(b)||wr(b)),l=()=>e.map(b=>{if(fe(b))return b.value;if(bt(b))return Lt(b);if(J(b))return wt(b,a,2)})):J(e)?t?l=()=>wt(e,a,2):l=()=>{if(!(a&&a.isUnmounted))return p&&p(),De(e,a,3,[m])}:l=Be,t&&r){const b=l;l=()=>Lt(b())}let p,m=b=>{p=E.onStop=()=>{wt(b,a,4)}},I;if(Bn)if(m=Be,t?n&&De(t,a,3,[l(),d?[]:void 0,m]):l(),s==="sync"){const b=qf();I=b.__watcherHandles||(b.__watcherHandles=[])}else return Be;let C=d?new Array(e.length).fill(ir):ir;const M=()=>{if(!!E.active)if(t){const b=E.run();(r||u||(d?b.some((F,W)=>xn(F,C[W])):xn(b,C)))&&(p&&p(),De(t,a,3,[b,C===ir?void 0:d&&C[0]===ir?[]:C,m]),C=b)}else E.run()};M.allowRecurse=!!t;let k;s==="sync"?k=M:s==="post"?k=()=>_e(M,a&&a.suspense):(M.pre=!0,a&&(M.id=a.uid),k=()=>mi(M));const E=new ci(l,k);t?n?M():C=E.run():s==="post"?_e(E.run.bind(E),a&&a.suspense):E.run();const O=()=>{E.stop(),a&&a.scope&&ri(a.scope.effects,E)};return I&&I.push(O),O}function Ju(e,t,n){const r=this.proxy,s=ue(e)?e.includes(".")?ac(r,e):()=>r[e]:e.bind(r,r);let i;J(t)?i=t:(i=t.handler,n=t);const o=pe;on(this);const c=_i(s,i.bind(r),n);return o?on(o):Ft(),c}function ac(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Lt(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))Lt(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)Lt(e[n],t);else if(Ra(e)||Yt(e))e.forEach(n=>{Lt(n,t)});else if(ka(e))for(const n in e)Lt(e[n],t);return e}function Q_(e,t){const n=ge;if(n===null)return e;const r=Xr(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,c,a,l=le]=t[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&Lt(c),s.push({dir:o,instance:r,value:c,oldValue:void 0,arg:a,modifiers:l}))}return e}function At(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(dn(),De(a,n,8,[e.el,c,e,t]),hn())}}function Yu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qr(()=>{e.isMounted=!0}),yi(()=>{e.isUnmounting=!0}),e}const ke=[Function,Array],cc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ke,onEnter:ke,onAfterEnter:ke,onEnterCancelled:ke,onBeforeLeave:ke,onLeave:ke,onAfterLeave:ke,onLeaveCancelled:ke,onBeforeAppear:ke,onAppear:ke,onAfterAppear:ke,onAppearCancelled:ke},Xu={name:"BaseTransition",props:cc,setup(e,{slots:t}){const n=Ri(),r=Yu();let s;return()=>{const i=t.default&&uc(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const C of i)if(C.type!==Le){o=C;break}}const c=Z(e),{mode:a}=c;if(r.isLeaving)return os(o);const l=ao(o);if(!l)return os(o);const u=ks(l,c,r,n);Tr(l,u);const d=n.subTree,p=d&&ao(d);let m=!1;const{getTransitionKey:I}=l.type;if(I){const C=I();s===void 0?s=C:C!==s&&(s=C,m=!0)}if(p&&p.type!==Le&&(!gt(l,p)||m)){const C=ks(p,c,r,n);if(Tr(p,C),a==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},os(o);a==="in-out"&&l.type!==Le&&(C.delayLeave=(M,k,E)=>{const O=lc(r,p);O[String(p.key)]=p,M._leaveCb=()=>{k(),M._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},Qu=Xu;function lc(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ks(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:c,onEnter:a,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:I,onBeforeAppear:C,onAppear:M,onAfterAppear:k,onAppearCancelled:E}=t,O=String(e.key),b=lc(n,e),F=(y,P)=>{y&&De(y,r,9,P)},W=(y,P)=>{const A=P[1];F(y,P),z(y)?y.every(G=>G.length<=1)&&A():y.length<=1&&A()},V={mode:i,persisted:o,beforeEnter(y){let P=c;if(!n.isMounted)if(s)P=C||c;else return;y._leaveCb&&y._leaveCb(!0);const A=b[O];A&&gt(e,A)&&A.el._leaveCb&&A.el._leaveCb(),F(P,[y])},enter(y){let P=a,A=l,G=u;if(!n.isMounted)if(s)P=M||a,A=k||l,G=E||u;else return;let L=!1;const Y=y._enterCb=me=>{L||(L=!0,me?F(G,[y]):F(A,[y]),V.delayedLeave&&V.delayedLeave(),y._enterCb=void 0)};P?W(P,[y,Y]):Y()},leave(y,P){const A=String(e.key);if(y._enterCb&&y._enterCb(!0),n.isUnmounting)return P();F(d,[y]);let G=!1;const L=y._leaveCb=Y=>{G||(G=!0,P(),Y?F(I,[y]):F(m,[y]),y._leaveCb=void 0,b[A]===e&&delete b[A])};b[A]=e,p?W(p,[y,L]):L()},clone(y){return ks(y,t,n,r)}};return V}function os(e){if(Wr(e))return e=rt(e),e.children=null,e}function ao(e){return Wr(e)?e.children?e.children[0]:void 0:e}function Tr(e,t){e.shapeFlag&6&&e.component?Tr(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function uc(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ne?(o.patchFlag&128&&s++,r=r.concat(uc(o.children,t,c))):(t||o.type!==Le)&&r.push(c!=null?rt(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function vi(e,t){return J(e)?(()=>he({name:e.name},t,{setup:e}))():e}const Zt=e=>!!e.type.__asyncLoader,Wr=e=>e.type.__isKeepAlive,Zu={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Ri(),r=n.ctx;if(!r.renderer)return()=>{const E=t.default&&t.default();return E&&E.length===1?E[0]:E};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:a,m:l,um:u,o:{createElement:d}}}=r,p=d("div");r.activate=(E,O,b,F,W)=>{const V=E.component;l(E,O,b,0,c),a(V.vnode,E,O,b,V,c,F,E.slotScopeIds,W),_e(()=>{V.isDeactivated=!1,V.a&&Xt(V.a);const y=E.props&&E.props.onVnodeMounted;y&&xe(y,V.parent,E)},c)},r.deactivate=E=>{const O=E.component;l(E,p,null,1,c),_e(()=>{O.da&&Xt(O.da);const b=E.props&&E.props.onVnodeUnmounted;b&&xe(b,O.parent,E),O.isDeactivated=!0},c)};function m(E){as(E),u(E,n,c,!0)}function I(E){s.forEach((O,b)=>{const F=Fs(O.type);F&&(!E||!E(F))&&C(b)})}function C(E){const O=s.get(E);!o||!gt(O,o)?m(O):o&&as(o),s.delete(E),i.delete(E)}Oe(()=>[e.include,e.exclude],([E,O])=>{E&&I(b=>wn(E,b)),O&&I(b=>!wn(O,b))},{flush:"post",deep:!0});let M=null;const k=()=>{M!=null&&s.set(M,cs(n.subTree))};return qr(k),dc(k),yi(()=>{s.forEach(E=>{const{subTree:O,suspense:b}=n,F=cs(O);if(E.type===F.type&&E.key===F.key){as(F);const W=F.component.da;W&&_e(W,b);return}m(E)})}),()=>{if(M=null,!t.default)return null;const E=t.default(),O=E[0];if(E.length>1)return o=null,E;if(!Fn(O)||!(O.shapeFlag&4)&&!(O.shapeFlag&128))return o=null,O;let b=cs(O);const F=b.type,W=Fs(Zt(b)?b.type.__asyncResolved||{}:F),{include:V,exclude:y,max:P}=e;if(V&&(!W||!wn(V,W))||y&&W&&wn(y,W))return o=b,O;const A=b.key==null?F:b.key,G=s.get(A);return b.el&&(b=rt(b),O.shapeFlag&128&&(O.ssContent=b)),M=A,G?(b.el=G.el,b.component=G.component,b.transition&&Tr(b,b.transition),b.shapeFlag|=512,i.delete(A),i.add(A)):(i.add(A),P&&i.size>parseInt(P,10)&&C(i.values().next().value)),b.shapeFlag|=256,o=b,oc(O.type)?O:b}}},Z_=Zu;function wn(e,t){return z(e)?e.some(n=>wn(n,t)):ue(e)?e.split(",").includes(t):zl(e)?e.test(t):!1}function ef(e,t){fc(e,"a",t)}function tf(e,t){fc(e,"da",t)}function fc(e,t,n=pe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Kr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Wr(s.parent.vnode)&&nf(r,t,n,s),s=s.parent}}function nf(e,t,n,r){const s=Kr(t,e,r,!0);bi(()=>{ri(r[t],s)},n)}function as(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function cs(e){return e.shapeFlag&128?e.ssContent:e}function Kr(e,t,n=pe,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;dn(),on(n);const c=De(t,n,e,o);return Ft(),hn(),c});return r?s.unshift(i):s.push(i),i}}const it=e=>(t,n=pe)=>(!Bn||e==="sp")&&Kr(e,(...r)=>t(...r),n),rf=it("bm"),qr=it("m"),sf=it("bu"),dc=it("u"),yi=it("bum"),bi=it("um"),of=it("sp"),af=it("rtg"),cf=it("rtc");function lf(e,t=pe){Kr("ec",e,t)}const Ei="components",uf="directives";function ff(e,t){return wi(Ei,e,!0,t)||e}const hc=Symbol.for("v-ndc");function ev(e){return ue(e)?wi(Ei,e,!1)||e:e||hc}function tv(e){return wi(uf,e)}function wi(e,t,n=!0,r=!1){const s=ge||pe;if(s){const i=s.type;if(e===Ei){const c=Fs(i,!1);if(c&&(c===t||c===Je(t)||c===Br(Je(t))))return i}const o=co(s[e]||i[e],t)||co(s.appContext[e],t);return!o&&r?i:o}}function co(e,t){return e&&(e[t]||e[Je(t)]||e[Br(Je(t))])}function nv(e,t,n,r){let s;const i=n&&n[r];if(z(e)||ue(e)){s=new Array(e.length);for(let o=0,c=e.length;o<c;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(ae(e))if(e[Symbol.iterator])s=Array.from(e,(o,c)=>t(o,c,void 0,i&&i[c]));else{const o=Object.keys(e);s=new Array(o.length);for(let c=0,a=o.length;c<a;c++){const l=o[c];s[c]=t(e[l],l,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}function lo(e,t,n={},r,s){if(ge.isCE||ge.parent&&Zt(ge.parent)&&ge.parent.isCE)return t!=="default"&&(n.name=t),Se("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Jr();const o=i&&pc(i(n)),c=Si(Ne,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function pc(e){return e.some(t=>Fn(t)?!(t.type===Le||t.type===Ne&&!pc(t.children)):!0)?e:null}const xs=e=>e?Cc(e)?Xr(e)||e.proxy:xs(e.parent):null,Tn=he(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xs(e.parent),$root:e=>xs(e.root),$emit:e=>e.emit,$options:e=>Ii(e),$forceUpdate:e=>e.f||(e.f=()=>mi(e.update)),$nextTick:e=>e.n||(e.n=sn.bind(e.proxy)),$watch:e=>Ju.bind(e)}),ls=(e,t)=>e!==le&&!e.__isScriptSetup&&ee(e,t),df={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(ls(r,t))return o[t]=1,r[t];if(s!==le&&ee(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&ee(l,t))return o[t]=3,i[t];if(n!==le&&ee(n,t))return o[t]=4,n[t];Ns&&(o[t]=0)}}const u=Tn[t];let d,p;if(u)return t==="$attrs"&&Ae(e,"get",t),u(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==le&&ee(n,t))return o[t]=4,n[t];if(p=a.config.globalProperties,ee(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return ls(s,t)?(s[t]=n,!0):r!==le&&ee(r,t)?(r[t]=n,!0):ee(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||e!==le&&ee(e,o)||ls(t,o)||(c=i[0])&&ee(c,o)||ee(r,o)||ee(Tn,o)||ee(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ee(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function rv(){return hf().attrs}function hf(){const e=Ri();return e.setupContext||(e.setupContext=Ac(e))}function uo(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ns=!0;function pf(e){const t=Ii(e),n=e.proxy,r=e.ctx;Ns=!1,t.beforeCreate&&fo(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:m,updated:I,activated:C,deactivated:M,beforeDestroy:k,beforeUnmount:E,destroyed:O,unmounted:b,render:F,renderTracked:W,renderTriggered:V,errorCaptured:y,serverPrefetch:P,expose:A,inheritAttrs:G,components:L,directives:Y,filters:me}=t;if(l&&gf(l,r,null),o)for(const ie in o){const te=o[ie];J(te)&&(r[ie]=te.bind(n))}if(s){const ie=s.call(n,n);ae(ie)&&(e.data=pn(ie))}if(Ns=!0,i)for(const ie in i){const te=i[ie],Xe=J(te)?te.bind(n,n):J(te.get)?te.get.bind(n,n):Be,ot=!J(te)&&J(te.set)?te.set.bind(n):Be,He=be({get:Xe,set:ot});Object.defineProperty(r,ie,{enumerable:!0,configurable:!0,get:()=>He.value,set:Te=>He.value=Te})}if(c)for(const ie in c)gc(c[ie],r,n,ie);if(a){const ie=J(a)?a.call(n):a;Reflect.ownKeys(ie).forEach(te=>{dr(te,ie[te])})}u&&fo(u,e,"c");function Q(ie,te){z(te)?te.forEach(Xe=>ie(Xe.bind(n))):te&&ie(te.bind(n))}if(Q(rf,d),Q(qr,p),Q(sf,m),Q(dc,I),Q(ef,C),Q(tf,M),Q(lf,y),Q(cf,W),Q(af,V),Q(yi,E),Q(bi,b),Q(of,P),z(A))if(A.length){const ie=e.exposed||(e.exposed={});A.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:Xe=>n[te]=Xe})})}else e.exposed||(e.exposed={});F&&e.render===Be&&(e.render=F),G!=null&&(e.inheritAttrs=G),L&&(e.components=L),Y&&(e.directives=Y)}function gf(e,t,n=Be){z(e)&&(e=Ds(e));for(const r in e){const s=e[r];let i;ae(s)?"default"in s?i=Ke(s.from||r,s.default,!0):i=Ke(s.from||r):i=Ke(s),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function fo(e,t,n){De(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function gc(e,t,n,r){const s=r.includes(".")?ac(n,r):()=>n[r];if(ue(e)){const i=t[e];J(i)&&Oe(s,i)}else if(J(e))Oe(s,e.bind(n));else if(ae(e))if(z(e))e.forEach(i=>gc(i,t,n,r));else{const i=J(e.handler)?e.handler.bind(n):t[e.handler];J(i)&&Oe(s,i,e)}}function Ii(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,c=i.get(t);let a;return c?a=c:!s.length&&!n&&!r?a=t:(a={},s.length&&s.forEach(l=>Cr(a,l,o,!0)),Cr(a,t,o)),ae(t)&&i.set(t,a),a}function Cr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Cr(e,i,n,!0),s&&s.forEach(o=>Cr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const c=mf[o]||n&&n[o];e[o]=c?c(e[o],t[o]):t[o]}return e}const mf={data:ho,props:po,emits:po,methods:In,computed:In,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:In,directives:In,watch:vf,provide:ho,inject:_f};function ho(e,t){return t?e?function(){return he(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function _f(e,t){return In(Ds(e),Ds(t))}function Ds(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function In(e,t){return e?he(Object.create(null),e,t):t}function po(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:he(Object.create(null),uo(e),uo(t!=null?t:{})):t}function vf(e,t){if(!e)return t;if(!t)return e;const n=he(Object.create(null),e);for(const r in t)n[r]=Ie(e[r],t[r]);return n}function mc(){return{app:null,config:{isNativeTag:$l,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yf=0;function bf(e,t){return function(r,s=null){J(r)||(r=he({},r)),s!=null&&!ae(s)&&(s=null);const i=mc(),o=new Set;let c=!1;const a=i.app={_uid:yf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(a,...u)):J(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,d){if(!c){const p=Se(r,s);return p.appContext=i,u&&t?t(p,l):e(p,l,d),c=!0,a._container=l,l.__vue_app__=a,Xr(p.component)||p.component.proxy}},unmount(){c&&(e(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){Mn=a;try{return l()}finally{Mn=null}}};return a}}let Mn=null;function dr(e,t){if(pe){let n=pe.provides;const r=pe.parent&&pe.parent.provides;r===n&&(n=pe.provides=Object.create(r)),n[e]=t}}function Ke(e,t,n=!1){const r=pe||ge;if(r||Mn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Mn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&J(t)?t.call(r&&r.proxy):t}}function Ef(){return!!(pe||ge||Mn)}function wf(e,t,n,r=!1){const s={},i={};yr(i,Yr,1),e.propsDefaults=Object.create(null),_c(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:qa(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function If(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,c=Z(s),[a]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Vr(e.emitsOptions,p))continue;const m=t[p];if(a)if(ee(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const I=Je(p);s[I]=Ls(a,c,I,m,e,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{_c(e,t,s,i)&&(l=!0);let u;for(const d in c)(!t||!ee(t,d)&&((u=jt(d))===d||!ee(t,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Ls(a,c,d,void 0,e,!0)):delete s[d]);if(i!==c)for(const d in i)(!t||!ee(t,d)&&!0)&&(delete i[d],l=!0)}l&&nt(e,"set","$attrs")}function _c(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,c;if(t)for(let a in t){if(fr(a))continue;const l=t[a];let u;s&&ee(s,u=Je(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:Vr(e.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=Z(n),l=c||le;for(let u=0;u<i.length;u++){const d=i[u];n[d]=Ls(s,a,d,l[d],e,!ee(l,d))}}return o}function Ls(e,t,n,r,s,i){const o=e[n];if(o!=null){const c=ee(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&J(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(on(s),r=l[n]=a.call(null,t),Ft())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===jt(n))&&(r=!0))}return r}function vc(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},c=[];let a=!1;if(!J(e)){const u=d=>{a=!0;const[p,m]=vc(d,t,!0);he(o,p),m&&c.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!a)return ae(e)&&r.set(e,Jt),Jt;if(z(i))for(let u=0;u<i.length;u++){const d=Je(i[u]);go(d)&&(o[d]=le)}else if(i)for(const u in i){const d=Je(u);if(go(d)){const p=i[u],m=o[d]=z(p)||J(p)?{type:p}:he({},p);if(m){const I=vo(Boolean,m.type),C=vo(String,m.type);m[0]=I>-1,m[1]=C<0||I<C,(I>-1||ee(m,"default"))&&c.push(d)}}}const l=[o,c];return ae(e)&&r.set(e,l),l}function go(e){return e[0]!=="$"}function mo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function _o(e,t){return mo(e)===mo(t)}function vo(e,t){return z(t)?t.findIndex(n=>_o(n,e)):J(t)&&_o(t,e)?0:-1}const yc=e=>e[0]==="_"||e==="$stable",Ti=e=>z(e)?e.map(ze):[ze(e)],Tf=(e,t,n)=>{if(t._n)return t;const r=zu((...s)=>Ti(t(...s)),n);return r._c=!1,r},bc=(e,t,n)=>{const r=e._ctx;for(const s in e){if(yc(s))continue;const i=e[s];if(J(i))t[s]=Tf(s,i,r);else if(i!=null){const o=Ti(i);t[s]=()=>o}}},Ec=(e,t)=>{const n=Ti(t);e.slots.default=()=>n},Cf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Z(t),yr(t,"_",n)):bc(t,e.slots={})}else e.slots={},t&&Ec(e,t);yr(e.slots,Yr,1)},Sf=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=le;if(r.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:(he(s,t),!n&&c===1&&delete s._):(i=!t.$stable,bc(t,s)),o=t}else t&&(Ec(e,t),o={default:1});if(i)for(const c in s)!yc(c)&&!(c in o)&&delete s[c]};function Ms(e,t,n,r,s=!1){if(z(e)){e.forEach((p,m)=>Ms(p,t&&(z(t)?t[m]:t),n,r,s));return}if(Zt(r)&&!s)return;const i=r.shapeFlag&4?Xr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=e,l=t&&t.r,u=c.refs===le?c.refs={}:c.refs,d=c.setupState;if(l!=null&&l!==a&&(ue(l)?(u[l]=null,ee(d,l)&&(d[l]=null)):fe(l)&&(l.value=null)),J(a))wt(a,c,12,[o,u]);else{const p=ue(a),m=fe(a);if(p||m){const I=()=>{if(e.f){const C=p?ee(d,a)?d[a]:u[a]:a.value;s?z(C)&&ri(C,i):z(C)?C.includes(i)||C.push(i):p?(u[a]=[i],ee(d,a)&&(d[a]=u[a])):(a.value=[i],e.k&&(u[e.k]=a.value))}else p?(u[a]=o,ee(d,a)&&(d[a]=o)):m&&(a.value=o,e.k&&(u[e.k]=o))};o?(I.id=-1,_e(I,n)):I()}}}const _e=Gu;function Af(e){return Rf(e)}function Rf(e,t){const n=Ss();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:m=Be,insertStaticContent:I}=e,C=(f,h,g,_=null,w=null,T=null,D=!1,R=null,x=!!h.dynamicChildren)=>{if(f===h)return;f&&!gt(f,h)&&(_=v(f),Te(f,w,T,!0),f=null),h.patchFlag===-2&&(x=!1,h.dynamicChildren=null);const{type:S,ref:H,shapeFlag:B}=h;switch(S){case Gr:M(f,h,g,_);break;case Le:k(f,h,g,_);break;case us:f==null&&E(h,g,_,D);break;case Ne:L(f,h,g,_,w,T,D,R,x);break;default:B&1?F(f,h,g,_,w,T,D,R,x):B&6?Y(f,h,g,_,w,T,D,R,x):(B&64||B&128)&&S.process(f,h,g,_,w,T,D,R,x,N)}H!=null&&w&&Ms(H,f&&f.ref,T,h||f,!h)},M=(f,h,g,_)=>{if(f==null)r(h.el=c(h.children),g,_);else{const w=h.el=f.el;h.children!==f.children&&l(w,h.children)}},k=(f,h,g,_)=>{f==null?r(h.el=a(h.children||""),g,_):h.el=f.el},E=(f,h,g,_)=>{[f.el,f.anchor]=I(f.children,h,g,_,f.el,f.anchor)},O=({el:f,anchor:h},g,_)=>{let w;for(;f&&f!==h;)w=p(f),r(f,g,_),f=w;r(h,g,_)},b=({el:f,anchor:h})=>{let g;for(;f&&f!==h;)g=p(f),s(f),f=g;s(h)},F=(f,h,g,_,w,T,D,R,x)=>{D=D||h.type==="svg",f==null?W(h,g,_,w,T,D,R,x):P(f,h,w,T,D,R,x)},W=(f,h,g,_,w,T,D,R)=>{let x,S;const{type:H,props:B,shapeFlag:j,transition:K,dirs:X}=f;if(x=f.el=o(f.type,T,B&&B.is,B),j&8?u(x,f.children):j&16&&y(f.children,x,null,_,w,T&&H!=="foreignObject",D,R),X&&At(f,null,_,"created"),V(x,f,f.scopeId,D,_),B){for(const se in B)se!=="value"&&!fr(se)&&i(x,se,null,B[se],T,f.children,_,w,ve);"value"in B&&i(x,"value",null,B.value),(S=B.onVnodeBeforeMount)&&xe(S,_,f)}X&&At(f,null,_,"beforeMount");const ce=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;ce&&K.beforeEnter(x),r(x,h,g),((S=B&&B.onVnodeMounted)||ce||X)&&_e(()=>{S&&xe(S,_,f),ce&&K.enter(x),X&&At(f,null,_,"mounted")},w)},V=(f,h,g,_,w)=>{if(g&&m(f,g),_)for(let T=0;T<_.length;T++)m(f,_[T]);if(w){let T=w.subTree;if(h===T){const D=w.vnode;V(f,D,D.scopeId,D.slotScopeIds,w.parent)}}},y=(f,h,g,_,w,T,D,R,x=0)=>{for(let S=x;S<f.length;S++){const H=f[S]=R?ht(f[S]):ze(f[S]);C(null,H,h,g,_,w,T,D,R)}},P=(f,h,g,_,w,T,D)=>{const R=h.el=f.el;let{patchFlag:x,dynamicChildren:S,dirs:H}=h;x|=f.patchFlag&16;const B=f.props||le,j=h.props||le;let K;g&&Rt(g,!1),(K=j.onVnodeBeforeUpdate)&&xe(K,g,h,f),H&&At(h,f,g,"beforeUpdate"),g&&Rt(g,!0);const X=w&&h.type!=="foreignObject";if(S?A(f.dynamicChildren,S,R,g,_,X,T):D||te(f,h,R,null,g,_,X,T,!1),x>0){if(x&16)G(R,h,B,j,g,_,w);else if(x&2&&B.class!==j.class&&i(R,"class",null,j.class,w),x&4&&i(R,"style",B.style,j.style,w),x&8){const ce=h.dynamicProps;for(let se=0;se<ce.length;se++){const de=ce[se],Me=B[de],Wt=j[de];(Wt!==Me||de==="value")&&i(R,de,Me,Wt,w,f.children,g,_,ve)}}x&1&&f.children!==h.children&&u(R,h.children)}else!D&&S==null&&G(R,h,B,j,g,_,w);((K=j.onVnodeUpdated)||H)&&_e(()=>{K&&xe(K,g,h,f),H&&At(h,f,g,"updated")},_)},A=(f,h,g,_,w,T,D)=>{for(let R=0;R<h.length;R++){const x=f[R],S=h[R],H=x.el&&(x.type===Ne||!gt(x,S)||x.shapeFlag&70)?d(x.el):g;C(x,S,H,null,_,w,T,D,!0)}},G=(f,h,g,_,w,T,D)=>{if(g!==_){if(g!==le)for(const R in g)!fr(R)&&!(R in _)&&i(f,R,g[R],null,D,h.children,w,T,ve);for(const R in _){if(fr(R))continue;const x=_[R],S=g[R];x!==S&&R!=="value"&&i(f,R,S,x,D,h.children,w,T,ve)}"value"in _&&i(f,"value",g.value,_.value)}},L=(f,h,g,_,w,T,D,R,x)=>{const S=h.el=f?f.el:c(""),H=h.anchor=f?f.anchor:c("");let{patchFlag:B,dynamicChildren:j,slotScopeIds:K}=h;K&&(R=R?R.concat(K):K),f==null?(r(S,g,_),r(H,g,_),y(h.children,g,H,w,T,D,R,x)):B>0&&B&64&&j&&f.dynamicChildren?(A(f.dynamicChildren,j,g,w,T,D,R),(h.key!=null||w&&h===w.subTree)&&Ci(f,h,!0)):te(f,h,g,H,w,T,D,R,x)},Y=(f,h,g,_,w,T,D,R,x)=>{h.slotScopeIds=R,f==null?h.shapeFlag&512?w.ctx.activate(h,g,_,D,x):me(h,g,_,w,T,D,x):we(f,h,x)},me=(f,h,g,_,w,T,D)=>{const R=f.component=Hf(f,_,w);if(Wr(f)&&(R.ctx.renderer=N),jf(R),R.asyncDep){if(w&&w.registerDep(R,Q),!f.el){const x=R.subTree=Se(Le);k(null,x,h,g)}return}Q(R,f,h,g,w,T,D)},we=(f,h,g)=>{const _=h.component=f.component;if(Ku(f,h,g))if(_.asyncDep&&!_.asyncResolved){ie(_,h,g);return}else _.next=h,Bu(_.update),_.update();else h.el=f.el,_.vnode=h},Q=(f,h,g,_,w,T,D)=>{const R=()=>{if(f.isMounted){let{next:H,bu:B,u:j,parent:K,vnode:X}=f,ce=H,se;Rt(f,!1),H?(H.el=X.el,ie(f,H,D)):H=X,B&&Xt(B),(se=H.props&&H.props.onVnodeBeforeUpdate)&&xe(se,K,H,X),Rt(f,!0);const de=is(f),Me=f.subTree;f.subTree=de,C(Me,de,d(Me.el),v(Me),f,w,T),H.el=de.el,ce===null&&qu(f,de.el),j&&_e(j,w),(se=H.props&&H.props.onVnodeUpdated)&&_e(()=>xe(se,K,H,X),w)}else{let H;const{el:B,props:j}=h,{bm:K,m:X,parent:ce}=f,se=Zt(h);if(Rt(f,!1),K&&Xt(K),!se&&(H=j&&j.onVnodeBeforeMount)&&xe(H,ce,h),Rt(f,!0),B&&ne){const de=()=>{f.subTree=is(f),ne(B,f.subTree,f,w,null)};se?h.type.__asyncLoader().then(()=>!f.isUnmounted&&de()):de()}else{const de=f.subTree=is(f);C(null,de,g,_,f,w,T),h.el=de.el}if(X&&_e(X,w),!se&&(H=j&&j.onVnodeMounted)){const de=h;_e(()=>xe(H,ce,de),w)}(h.shapeFlag&256||ce&&Zt(ce.vnode)&&ce.vnode.shapeFlag&256)&&f.a&&_e(f.a,w),f.isMounted=!0,h=g=_=null}},x=f.effect=new ci(R,()=>mi(S),f.scope),S=f.update=()=>x.run();S.id=f.uid,Rt(f,!0),S()},ie=(f,h,g)=>{h.component=f;const _=f.vnode.props;f.vnode=h,f.next=null,If(f,h.props,_,g),Sf(f,h.children,g),dn(),io(),hn()},te=(f,h,g,_,w,T,D,R,x=!1)=>{const S=f&&f.children,H=f?f.shapeFlag:0,B=h.children,{patchFlag:j,shapeFlag:K}=h;if(j>0){if(j&128){ot(S,B,g,_,w,T,D,R,x);return}else if(j&256){Xe(S,B,g,_,w,T,D,R,x);return}}K&8?(H&16&&ve(S,w,T),B!==S&&u(g,B)):H&16?K&16?ot(S,B,g,_,w,T,D,R,x):ve(S,w,T,!0):(H&8&&u(g,""),K&16&&y(B,g,_,w,T,D,R,x))},Xe=(f,h,g,_,w,T,D,R,x)=>{f=f||Jt,h=h||Jt;const S=f.length,H=h.length,B=Math.min(S,H);let j;for(j=0;j<B;j++){const K=h[j]=x?ht(h[j]):ze(h[j]);C(f[j],K,g,null,w,T,D,R,x)}S>H?ve(f,w,T,!0,!1,B):y(h,g,_,w,T,D,R,x,B)},ot=(f,h,g,_,w,T,D,R,x)=>{let S=0;const H=h.length;let B=f.length-1,j=H-1;for(;S<=B&&S<=j;){const K=f[S],X=h[S]=x?ht(h[S]):ze(h[S]);if(gt(K,X))C(K,X,g,null,w,T,D,R,x);else break;S++}for(;S<=B&&S<=j;){const K=f[B],X=h[j]=x?ht(h[j]):ze(h[j]);if(gt(K,X))C(K,X,g,null,w,T,D,R,x);else break;B--,j--}if(S>B){if(S<=j){const K=j+1,X=K<H?h[K].el:_;for(;S<=j;)C(null,h[S]=x?ht(h[S]):ze(h[S]),g,X,w,T,D,R,x),S++}}else if(S>j)for(;S<=B;)Te(f[S],w,T,!0),S++;else{const K=S,X=S,ce=new Map;for(S=X;S<=j;S++){const Re=h[S]=x?ht(h[S]):ze(h[S]);Re.key!=null&&ce.set(Re.key,S)}let se,de=0;const Me=j-X+1;let Wt=!1,qi=0;const mn=new Array(Me);for(S=0;S<Me;S++)mn[S]=0;for(S=K;S<=B;S++){const Re=f[S];if(de>=Me){Te(Re,w,T,!0);continue}let je;if(Re.key!=null)je=ce.get(Re.key);else for(se=X;se<=j;se++)if(mn[se-X]===0&&gt(Re,h[se])){je=se;break}je===void 0?Te(Re,w,T,!0):(mn[je-X]=S+1,je>=qi?qi=je:Wt=!0,C(Re,h[je],g,null,w,T,D,R,x),de++)}const Gi=Wt?Pf(mn):Jt;for(se=Gi.length-1,S=Me-1;S>=0;S--){const Re=X+S,je=h[Re],Ji=Re+1<H?h[Re+1].el:_;mn[S]===0?C(null,je,g,Ji,w,T,D,R,x):Wt&&(se<0||S!==Gi[se]?He(je,g,Ji,2):se--)}}},He=(f,h,g,_,w=null)=>{const{el:T,type:D,transition:R,children:x,shapeFlag:S}=f;if(S&6){He(f.component.subTree,h,g,_);return}if(S&128){f.suspense.move(h,g,_);return}if(S&64){D.move(f,h,g,N);return}if(D===Ne){r(T,h,g);for(let B=0;B<x.length;B++)He(x[B],h,g,_);r(f.anchor,h,g);return}if(D===us){O(f,h,g);return}if(_!==2&&S&1&&R)if(_===0)R.beforeEnter(T),r(T,h,g),_e(()=>R.enter(T),w);else{const{leave:B,delayLeave:j,afterLeave:K}=R,X=()=>r(T,h,g),ce=()=>{B(T,()=>{X(),K&&K()})};j?j(T,X,ce):ce()}else r(T,h,g)},Te=(f,h,g,_=!1,w=!1)=>{const{type:T,props:D,ref:R,children:x,dynamicChildren:S,shapeFlag:H,patchFlag:B,dirs:j}=f;if(R!=null&&Ms(R,null,g,f,!0),H&256){h.ctx.deactivate(f);return}const K=H&1&&j,X=!Zt(f);let ce;if(X&&(ce=D&&D.onVnodeBeforeUnmount)&&xe(ce,h,f),H&6)Zn(f.component,g,_);else{if(H&128){f.suspense.unmount(g,_);return}K&&At(f,null,h,"beforeUnmount"),H&64?f.type.remove(f,h,g,w,N,_):S&&(T!==Ne||B>0&&B&64)?ve(S,h,g,!1,!0):(T===Ne&&B&384||!w&&H&16)&&ve(x,h,g),_&&zt(f)}(X&&(ce=D&&D.onVnodeUnmounted)||K)&&_e(()=>{ce&&xe(ce,h,f),K&&At(f,null,h,"unmounted")},g)},zt=f=>{const{type:h,el:g,anchor:_,transition:w}=f;if(h===Ne){Vt(g,_);return}if(h===us){b(f);return}const T=()=>{s(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:R}=w,x=()=>D(g,T);R?R(f.el,T,x):x()}else T()},Vt=(f,h)=>{let g;for(;f!==h;)g=p(f),s(f),f=g;s(h)},Zn=(f,h,g)=>{const{bum:_,scope:w,update:T,subTree:D,um:R}=f;_&&Xt(_),w.stop(),T&&(T.active=!1,Te(D,f,h,g)),R&&_e(R,h),_e(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ve=(f,h,g,_=!1,w=!1,T=0)=>{for(let D=T;D<f.length;D++)Te(f[D],h,g,_,w)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),U=(f,h,g)=>{f==null?h._vnode&&Te(h._vnode,null,null,!0):C(h._vnode||null,f,h,null,null,null,g),io(),nc(),h._vnode=f},N={p:C,um:Te,m:He,r:zt,mt:me,mc:y,pc:te,pbc:A,n:v,o:e};let $,ne;return t&&([$,ne]=t(N)),{render:U,hydrate:$,createApp:bf(U,$)}}function Rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ci(e,t,n=!1){const r=e.children,s=t.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ht(s[i]),c.el=o.el),n||Ci(o,c)),c.type===Gr&&(c.el=o.el)}}function Pf(e){const t=e.slice(),n=[0];let r,s,i,o,c;const a=e.length;for(r=0;r<a;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,e[n[c]]<l?i=c+1:o=c;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Of=e=>e.__isTeleport,Cn=e=>e&&(e.disabled||e.disabled===""),yo=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Us=(e,t)=>{const n=e&&e.to;return ue(n)?t?t(n):null:n},kf={__isTeleport:!0,process(e,t,n,r,s,i,o,c,a,l){const{mc:u,pc:d,pbc:p,o:{insert:m,querySelector:I,createText:C,createComment:M}}=l,k=Cn(t.props);let{shapeFlag:E,children:O,dynamicChildren:b}=t;if(e==null){const F=t.el=C(""),W=t.anchor=C("");m(F,n,r),m(W,n,r);const V=t.target=Us(t.props,I),y=t.targetAnchor=C("");V&&(m(y,V),o=o||yo(V));const P=(A,G)=>{E&16&&u(O,A,G,s,i,o,c,a)};k?P(n,W):V&&P(V,y)}else{t.el=e.el;const F=t.anchor=e.anchor,W=t.target=e.target,V=t.targetAnchor=e.targetAnchor,y=Cn(e.props),P=y?n:W,A=y?F:V;if(o=o||yo(W),b?(p(e.dynamicChildren,b,P,s,i,o,c),Ci(e,t,!0)):a||d(e,t,P,A,s,i,o,c,!1),k)y||or(t,n,F,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const G=t.target=Us(t.props,I);G&&or(t,G,null,l,0)}else y&&or(t,W,V,l,1)}wc(t)},remove(e,t,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:a,anchor:l,targetAnchor:u,target:d,props:p}=e;if(d&&i(u),(o||!Cn(p))&&(i(l),c&16))for(let m=0;m<a.length;m++){const I=a[m];s(I,t,n,!0,!!I.dynamicChildren)}},move:or,hydrate:xf};function or(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:c,shapeFlag:a,children:l,props:u}=e,d=i===2;if(d&&r(o,t,n),(!d||Cn(u))&&a&16)for(let p=0;p<l.length;p++)s(l[p],t,n,2);d&&r(c,t,n)}function xf(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:a}},l){const u=t.target=Us(t.props,a);if(u){const d=u._lpa||u.firstChild;if(t.shapeFlag&16)if(Cn(t.props))t.anchor=l(o(e),t,c(e),n,r,s,i),t.targetAnchor=d;else{t.anchor=o(e);let p=d;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}l(d,t,u,n,r,s,i)}wc(t)}return t.anchor&&o(t.anchor)}const sv=kf;function wc(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ne=Symbol.for("v-fgt"),Gr=Symbol.for("v-txt"),Le=Symbol.for("v-cmt"),us=Symbol.for("v-stc"),Sn=[];let Fe=null;function Jr(e=!1){Sn.push(Fe=e?null:[])}function Nf(){Sn.pop(),Fe=Sn[Sn.length-1]||null}let Un=1;function bo(e){Un+=e}function Ic(e){return e.dynamicChildren=Un>0?Fe||Jt:null,Nf(),Un>0&&Fe&&Fe.push(e),e}function Df(e,t,n,r,s,i){return Ic(Sr(e,t,n,r,s,i,!0))}function Si(e,t,n,r,s){return Ic(Se(e,t,n,r,s,!0))}function Fn(e){return e?e.__v_isVNode===!0:!1}function gt(e,t){return e.type===t.type&&e.key===t.key}const Yr="__vInternal",Tc=({key:e})=>e!=null?e:null,hr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ue(e)||fe(e)||J(e)?{i:ge,r:e,k:t,f:!!n}:e:null);function Sr(e,t=null,n=null,r=0,s=null,i=e===Ne?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Tc(t),ref:t&&hr(t),scopeId:ic,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ge};return c?(Ai(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),Un>0&&!o&&Fe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Fe.push(a),a}const Se=Lf;function Lf(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===hc)&&(e=Le),Fn(e)){const c=rt(e,t,!0);return n&&Ai(c,n),Un>0&&!i&&Fe&&(c.shapeFlag&6?Fe[Fe.indexOf(e)]=c:Fe.push(c)),c.patchFlag|=-2,c}if(Wf(e)&&(e=e.__vccOpts),t){t=Mf(t);let{class:c,style:a}=t;c&&!ue(c)&&(t.class=ii(c)),ae(a)&&(Ga(a)&&!z(a)&&(a=he({},a)),t.style=$r(a))}const o=ue(e)?1:oc(e)?128:Of(e)?64:ae(e)?4:J(e)?2:0;return Sr(e,t,n,r,s,o,i,!0)}function Mf(e){return e?Ga(e)||Yr in e?he({},e):e:null}function rt(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,c=t?Ff(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Tc(c),ref:t&&t.ref?n&&s?z(s)?s.concat(hr(t)):[s,hr(t)]:hr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rt(e.ssContent),ssFallback:e.ssFallback&&rt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Uf(e=" ",t=0){return Se(Gr,null,e,t)}function iv(e="",t=!1){return t?(Jr(),Si(Le,null,e)):Se(Le,null,e)}function ze(e){return e==null||typeof e=="boolean"?Se(Le):z(e)?Se(Ne,null,e.slice()):typeof e=="object"?ht(e):Se(Gr,null,String(e))}function ht(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:rt(e)}function Ai(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Ai(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Yr in t)?t._ctx=ge:s===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else J(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),r&64?(n=16,t=[Uf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ff(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ii([t.class,r.class]));else if(s==="style")t.style=$r([t.style,r.style]);else if(Ur(s)){const i=t[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function xe(e,t,n,r=null){De(e,t,7,[n,r])}const Bf=mc();let $f=0;function Hf(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Bf,i={uid:$f++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Da(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vc(r,s),emitsOptions:sc(r,s),emit:null,emitted:null,propsDefaults:le,inheritAttrs:r.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ju.bind(null,i),e.ce&&e.ce(i),i}let pe=null;const Ri=()=>pe||ge;let Pi,Kt,Eo="__VUE_INSTANCE_SETTERS__";(Kt=Ss()[Eo])||(Kt=Ss()[Eo]=[]),Kt.push(e=>pe=e),Pi=e=>{Kt.length>1?Kt.forEach(t=>t(e)):Kt[0](e)};const on=e=>{Pi(e),e.scope.on()},Ft=()=>{pe&&pe.scope.off(),Pi(null)};function Cc(e){return e.vnode.shapeFlag&4}let Bn=!1;function jf(e,t=!1){Bn=t;const{props:n,children:r}=e.vnode,s=Cc(e);wf(e,n,s,t),Cf(e,r);const i=s?zf(e,t):void 0;return Bn=!1,i}function zf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=jr(new Proxy(e.ctx,df));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Ac(e):null;on(e),dn();const i=wt(r,e,0,[e.props,s]);if(hn(),Ft(),Pa(i)){if(i.then(Ft,Ft),t)return i.then(o=>{wo(e,o,t)}).catch(o=>{zr(o,e,0)});e.asyncDep=i}else wo(e,i,t)}else Sc(e,t)}function wo(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=Za(t)),Sc(e,n)}let Io;function Sc(e,t,n){const r=e.type;if(!e.render){if(!t&&Io&&!r.render){const s=r.template||Ii(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:c,compilerOptions:a}=r,l=he(he({isCustomElement:i,delimiters:c},o),a);r.render=Io(s,l)}}e.render=r.render||Be}on(e),dn(),pf(e),hn(),Ft()}function Vf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ae(e,"get","$attrs"),t[n]}}))}function Ac(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Vf(e)},slots:e.slots,emit:e.emit,expose:t}}function Xr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Za(jr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Tn)return Tn[n](e)},has(t,n){return n in t||n in Tn}}))}function Fs(e,t=!0){return J(e)?e.displayName||e.name:e.name||t&&e.__name}function Wf(e){return J(e)&&"__vccOpts"in e}const be=(e,t)=>Mu(e,t,Bn);function Oi(e,t,n){const r=arguments.length;return r===2?ae(t)&&!z(t)?Fn(t)?Se(e,null,[t]):Se(e,t):Se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Fn(n)&&(n=[n]),Se(e,t,n))}const Kf=Symbol.for("v-scx"),qf=()=>Ke(Kf),Gf="3.3.4",Jf="http://www.w3.org/2000/svg",Dt=typeof document<"u"?document:null,To=Dt&&Dt.createElement("template"),Yf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?Dt.createElementNS(Jf,e):Dt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Dt.createTextNode(e),createComment:e=>Dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{To.innerHTML=r?`<svg>${e}</svg>`:e;const c=To.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}t.insertBefore(c,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Xf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Qf(e,t,n){const r=e.style,s=ue(n);if(n&&!s){if(t&&!ue(t))for(const i in t)n[i]==null&&Bs(r,i,"");for(const i in n)Bs(r,i,n[i])}else{const i=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Co=/\s*!important$/;function Bs(e,t,n){if(z(n))n.forEach(r=>Bs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Zf(e,t);Co.test(n)?e.setProperty(jt(r),n.replace(Co,""),"important"):e[r]=n}}const So=["Webkit","Moz","ms"],fs={};function Zf(e,t){const n=fs[t];if(n)return n;let r=Je(t);if(r!=="filter"&&r in e)return fs[t]=r;r=Br(r);for(let s=0;s<So.length;s++){const i=So[s]+r;if(i in e)return fs[t]=i}return t}const Ao="http://www.w3.org/1999/xlink";function ed(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ao,t.slice(6,t.length)):e.setAttributeNS(Ao,t,n);else{const i=eu(t);n==null||i&&!xa(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function td(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n==null?"":n;return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=n;const l=c==="OPTION"?e.getAttribute("value"):e.value,u=n==null?"":n;l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=xa(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function Rc(e,t,n,r){e.addEventListener(t,n,r)}function nd(e,t,n,r){e.removeEventListener(t,n,r)}function rd(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[c,a]=sd(t);if(r){const l=i[t]=ad(r,s);Rc(e,c,l,a)}else o&&(nd(e,c,o,a),i[t]=void 0)}}const Ro=/(?:Once|Passive|Capture)$/;function sd(e){let t;if(Ro.test(e)){t={};let r;for(;r=e.match(Ro);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let ds=0;const id=Promise.resolve(),od=()=>ds||(id.then(()=>ds=0),ds=Date.now());function ad(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(cd(r,n.value),t,5,[r])};return n.value=e,n.attached=od(),n}function cd(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Po=/^on[a-z]/,ld=(e,t,n,r,s=!1,i,o,c,a)=>{t==="class"?Xf(e,r,s):t==="style"?Qf(e,n,r):Ur(t)?ni(t)||rd(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ud(e,t,r,s))?td(e,t,r,i,o,c,a):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ed(e,t,r,s))};function ud(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Po.test(t)&&J(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Po.test(t)&&ue(n)?!1:t in e}const ct="transition",_n="animation",Pc=(e,{slots:t})=>Oi(Qu,fd(e),t);Pc.displayName="Transition";const Oc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Pc.props=he({},cc,Oc);const Pt=(e,t=[])=>{z(e)?e.forEach(n=>n(...t)):e&&e(...t)},Oo=e=>e?z(e)?e.some(t=>t.length>1):e.length>1:!1;function fd(e){const t={};for(const L in e)L in Oc||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:u=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,I=dd(s),C=I&&I[0],M=I&&I[1],{onBeforeEnter:k,onEnter:E,onEnterCancelled:O,onLeave:b,onLeaveCancelled:F,onBeforeAppear:W=k,onAppear:V=E,onAppearCancelled:y=O}=t,P=(L,Y,me)=>{Ot(L,Y?u:c),Ot(L,Y?l:o),me&&me()},A=(L,Y)=>{L._isLeaving=!1,Ot(L,d),Ot(L,m),Ot(L,p),Y&&Y()},G=L=>(Y,me)=>{const we=L?V:E,Q=()=>P(Y,L,me);Pt(we,[Y,Q]),ko(()=>{Ot(Y,L?a:i),lt(Y,L?u:c),Oo(we)||xo(Y,r,C,Q)})};return he(t,{onBeforeEnter(L){Pt(k,[L]),lt(L,i),lt(L,o)},onBeforeAppear(L){Pt(W,[L]),lt(L,a),lt(L,l)},onEnter:G(!1),onAppear:G(!0),onLeave(L,Y){L._isLeaving=!0;const me=()=>A(L,Y);lt(L,d),gd(),lt(L,p),ko(()=>{!L._isLeaving||(Ot(L,d),lt(L,m),Oo(b)||xo(L,r,M,me))}),Pt(b,[L,me])},onEnterCancelled(L){P(L,!1),Pt(O,[L])},onAppearCancelled(L){P(L,!0),Pt(y,[L])},onLeaveCancelled(L){A(L),Pt(F,[L])}})}function dd(e){if(e==null)return null;if(ae(e))return[hs(e.enter),hs(e.leave)];{const t=hs(e);return[t,t]}}function hs(e){return Gl(e)}function lt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Ot(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ko(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let hd=0;function xo(e,t,n,r){const s=e._endId=++hd,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=pd(e,t);if(!o)return r();const l=o+"end";let u=0;const d=()=>{e.removeEventListener(l,p),i()},p=m=>{m.target===e&&++u>=a&&d()};setTimeout(()=>{u<a&&d()},c+1),e.addEventListener(l,p)}function pd(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),s=r(`${ct}Delay`),i=r(`${ct}Duration`),o=No(s,i),c=r(`${_n}Delay`),a=r(`${_n}Duration`),l=No(c,a);let u=null,d=0,p=0;t===ct?o>0&&(u=ct,d=o,p=i.length):t===_n?l>0&&(u=_n,d=l,p=a.length):(d=Math.max(o,l),u=d>0?o>l?ct:_n:null,p=u?u===ct?i.length:a.length:0);const m=u===ct&&/\b(transform|all)(,|$)/.test(r(`${ct}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:m}}function No(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Do(n)+Do(e[r])))}function Do(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function gd(){return document.body.offsetHeight}const Lo=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>Xt(t,n):t},ov={created(e,{value:t},n){e.checked=br(t,n.props.value),e._assign=Lo(n),Rc(e,"change",()=>{e._assign(md(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=Lo(r),t!==n&&(e.checked=br(t,r.props.value))}};function md(e){return"_value"in e?e._value:e.value}const _d=["ctrl","shift","alt","meta"],vd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>_d.some(n=>e[`${n}Key`]&&!t.includes(n))},av=(e,t)=>(n,...r)=>{for(let s=0;s<t.length;s++){const i=vd[t[s]];if(i&&i(n,t))return}return e(n,...r)},yd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cv=(e,t)=>n=>{if(!("key"in n))return;const r=jt(n.key);if(t.some(s=>s===r||yd[s]===r))return e(n)},lv={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):vn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),vn(e,!0),r.enter(e)):r.leave(e,()=>{vn(e,!1)}):vn(e,t))},beforeUnmount(e,{value:t}){vn(e,t)}};function vn(e,t){e.style.display=t?e._vod:"none"}const bd=he({patchProp:ld},Yf);let Mo;function Ed(){return Mo||(Mo=Af(bd))}const wd=(...e)=>{const t=Ed().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Id(r);if(!s)return;const i=t._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Id(e){return ue(e)?document.querySelector(e):e}const Td=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Cd={};function Sd(e,t){const n=ff("router-view");return Jr(),Si(n)}const Ad=Td(Cd,[["render",Sd],["__scopeId","data-v-0c8ad337"]]),Rd="modulepreload",Pd=function(e,t){return new URL(e,t).href},Uo={},kt=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Pd(i,r),i in Uo)return;Uo[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Rd,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Gt=typeof window<"u";function Od(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function ps(e,t){const n={};for(const r in t){const s=t[r];n[r]=$e(s)?s.map(e):e(s)}return n}const An=()=>{},$e=Array.isArray,kd=/\/$/,xd=e=>e.replace(kd,"");function gs(e,t,n="/"){let r,s={},i="",o="";const c=t.indexOf("#");let a=t.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=Md(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Nd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Fo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Dd(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&an(t.matched[r],n.matched[s])&&kc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function an(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function kc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ld(e[n],t[n]))return!1;return!0}function Ld(e,t){return $e(e)?Bo(e,t):$e(t)?Bo(t,e):e===t}function Bo(e,t){return $e(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Md(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var $n;(function(e){e.pop="pop",e.push="push"})($n||($n={}));var Rn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Rn||(Rn={}));function Ud(e){if(!e)if(Gt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),xd(e)}const Fd=/^[^#]+#/;function Bd(e,t){return e.replace(Fd,"#")+t}function $d(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Qr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Hd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=$d(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $o(e,t){return(history.state?history.state.position-t:-1)+e}const $s=new Map;function jd(e,t){$s.set(e,t)}function zd(e){const t=$s.get(e);return $s.delete(e),t}let Vd=()=>location.protocol+"//"+location.host;function xc(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let c=s.includes(e.slice(i))?e.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Fo(a,"")}return Fo(n,e)+r+s}function Wd(e,t,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=xc(e,location),I=n.value,C=t.value;let M=0;if(p){if(n.value=m,t.value=p,o&&o===I){o=null;return}M=C?p.position-C.position:0}else r(m);s.forEach(k=>{k(n.value,I,{delta:M,type:$n.pop,direction:M?M>0?Rn.forward:Rn.back:Rn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const m=()=>{const I=s.indexOf(p);I>-1&&s.splice(I,1)};return i.push(m),m}function u(){const{history:p}=window;!p.state||p.replaceState(re({},p.state,{scroll:Qr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:d}}function Ho(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Qr():null}}function Kd(e){const{history:t,location:n}=window,r={value:xc(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+a:Vd()+e+a;try{t[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(a,l){const u=re({},t.state,Ho(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=re({},s.value,t.state,{forward:a,scroll:Qr()});i(u.current,u,!0);const d=re({},Ho(r.value,a,null),{position:u.position+1},l);i(a,d,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function qd(e){e=Ud(e);const t=Kd(e),n=Wd(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:e,go:r,createHref:Bd.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Gd(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),qd(e)}function Jd(e){return typeof e=="string"||e&&typeof e=="object"}function Nc(e){return typeof e=="string"||typeof e=="symbol"}const ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Dc=Symbol("");var jo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(jo||(jo={}));function cn(e,t){return re(new Error,{type:e,[Dc]:!0},t)}function Qe(e,t){return e instanceof Error&&Dc in e&&(t==null||!!(e.type&t))}const zo="[^/]+?",Yd={sensitive:!1,strict:!1,start:!0,end:!0},Xd=/[.+*?^${}()[\]/\\]/g;function Qd(e,t){const n=re({},Yd,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let m=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(Xd,"\\$&"),m+=40;else if(p.type===1){const{value:I,repeatable:C,optional:M,regexp:k}=p;i.push({name:I,repeatable:C,optional:M});const E=k||zo;if(E!==zo){m+=10;try{new RegExp(`(${E})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${I}" (${E}): `+b.message)}}let O=C?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(O=M&&l.length<2?`(?:/${O})`:"/"+O),M&&(O+="?"),s+=O,m+=20,M&&(m+=-8),C&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",I=i[p-1];d[I.name]=m&&I.repeatable?m.split("/"):m}return d}function a(l){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:C,optional:M}=m,k=I in l?l[I]:"";if($e(k)&&!C)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const E=$e(k)?k.join("/"):k;if(!E)if(M)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${I}"`);u+=E}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Zd(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function eh(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Zd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Vo(r))return 1;if(Vo(s))return-1}return s.length-r.length}function Vo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const th={type:0,value:""},nh=/[a-zA-Z0-9_]/;function rh(e){if(!e)return[[]];if(e==="/")return[[th]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function d(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<e.length;){if(a=e[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&d(),o()):a===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:nh.test(a)?p():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),s}function sh(e,t,n){const r=Qd(rh(e.path),n),s=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function ih(e,t){const n=[],r=new Map;t=qo({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,d,p){const m=!p,I=oh(u);I.aliasOf=p&&p.record;const C=qo(t,u),M=[I];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of O)M.push(re({},I,{components:p?p.record.components:I.components,path:b,aliasOf:p?p.record:I}))}let k,E;for(const O of M){const{path:b}=O;if(d&&b[0]!=="/"){const F=d.record.path,W=F[F.length-1]==="/"?"":"/";O.path=d.record.path+(b&&W+b)}if(k=sh(O,d,C),p?p.alias.push(k):(E=E||k,E!==k&&E.alias.push(k),m&&u.name&&!Ko(k)&&o(u.name)),I.children){const F=I.children;for(let W=0;W<F.length;W++)i(F[W],k,p&&p.children[W])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&a(k)}return E?()=>{o(E)}:An}function o(u){if(Nc(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let d=0;for(;d<n.length&&eh(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Lc(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ko(u)&&r.set(u.record.name,u)}function l(u,d){let p,m={},I,C;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw cn(1,{location:u});C=p.record.name,m=re(Wo(d.params,p.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&Wo(u.params,p.keys.map(E=>E.name))),I=p.stringify(m)}else if("path"in u)I=u.path,p=n.find(E=>E.re.test(I)),p&&(m=p.parse(I),C=p.record.name);else{if(p=d.name?r.get(d.name):n.find(E=>E.re.test(d.path)),!p)throw cn(1,{location:u,currentLocation:d});C=p.record.name,m=re({},d.params,u.params),I=p.stringify(m)}const M=[];let k=p;for(;k;)M.unshift(k.record),k=k.parent;return{name:C,path:I,params:m,matched:M,meta:ch(M)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Wo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function oh(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ah(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ah(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ko(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ch(e){return e.reduce((t,n)=>re(t,n.meta),{})}function qo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Lc(e,t){return t.children.some(n=>n===e||Lc(e,n))}const Mc=/#/g,lh=/&/g,uh=/\//g,fh=/=/g,dh=/\?/g,Uc=/\+/g,hh=/%5B/g,ph=/%5D/g,Fc=/%5E/g,gh=/%60/g,Bc=/%7B/g,mh=/%7C/g,$c=/%7D/g,_h=/%20/g;function ki(e){return encodeURI(""+e).replace(mh,"|").replace(hh,"[").replace(ph,"]")}function vh(e){return ki(e).replace(Bc,"{").replace($c,"}").replace(Fc,"^")}function Hs(e){return ki(e).replace(Uc,"%2B").replace(_h,"+").replace(Mc,"%23").replace(lh,"%26").replace(gh,"`").replace(Bc,"{").replace($c,"}").replace(Fc,"^")}function yh(e){return Hs(e).replace(fh,"%3D")}function bh(e){return ki(e).replace(Mc,"%23").replace(dh,"%3F")}function Eh(e){return e==null?"":bh(e).replace(uh,"%2F")}function Ar(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function wh(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Uc," "),o=i.indexOf("="),c=Ar(o<0?i:i.slice(0,o)),a=o<0?null:Ar(i.slice(o+1));if(c in t){let l=t[c];$e(l)||(l=t[c]=[l]),l.push(a)}else t[c]=a}return t}function Go(e){let t="";for(let n in e){const r=e[n];if(n=yh(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}($e(r)?r.map(i=>i&&Hs(i)):[r&&Hs(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Ih(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=$e(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Th=Symbol(""),Jo=Symbol(""),xi=Symbol(""),Hc=Symbol(""),js=Symbol("");function yn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function pt(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=d=>{d===!1?c(cn(4,{from:n,to:t})):d instanceof Error?c(d):Jd(d)?c(cn(2,{from:t,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},l=e.call(r&&r.instances[s],t,n,a);let u=Promise.resolve(l);e.length<3&&(u=u.then(a)),u.catch(d=>c(d))})}function ms(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let c=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Ch(c)){const l=(c.__vccOpts||c)[t];l&&s.push(pt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Od(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[t];return p&&pt(p,n,r,i,o)()}))}}return s}function Ch(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yo(e){const t=Ke(xi),n=Ke(Hc),r=be(()=>t.resolve(We(e.to))),s=be(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(an.bind(null,u));if(p>-1)return p;const m=Xo(a[l-2]);return l>1&&Xo(u)===m&&d[d.length-1].path!==m?d.findIndex(an.bind(null,a[l-2])):p}),i=be(()=>s.value>-1&&Ph(n.params,r.value.params)),o=be(()=>s.value>-1&&s.value===n.matched.length-1&&kc(n.params,r.value.params));function c(a={}){return Rh(a)?t[We(e.replace)?"replace":"push"](We(e.to)).catch(An):Promise.resolve()}return{route:r,href:be(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Sh=vi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yo,setup(e,{slots:t}){const n=pn(Yo(e)),{options:r}=Ke(xi),s=be(()=>({[Qo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Qo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Oi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ah=Sh;function Rh(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ph(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$e(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Xo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qo=(e,t,n)=>e!=null?e:t!=null?t:n,Oh=vi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ke(js),s=be(()=>e.route||r.value),i=Ke(Jo,0),o=be(()=>{let l=We(i);const{matched:u}=s.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),c=be(()=>s.value.matched[o.value]);dr(Jo,be(()=>o.value+1)),dr(Th,c),dr(js,s);const a=Et();return Oe(()=>[a.value,c.value,e.name],([l,u,d],[p,m,I])=>{u&&(u.instances[d]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!an(u,m)||!p)&&(u.enterCallbacks[d]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,d=c.value,p=d&&d.components[u];if(!p)return Zo(n.default,{Component:p,route:l});const m=d.props[u],I=m?m===!0?l.params:typeof m=="function"?m(l):m:null,M=Oi(p,re({},I,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return Zo(n.default,{Component:M,route:l})||M}}});function Zo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const kh=Oh;function xh(e){const t=ih(e.routes,e),n=e.parseQuery||wh,r=e.stringifyQuery||Go,s=e.history,i=yn(),o=yn(),c=yn(),a=Xa(ut);let l=ut;Gt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ps.bind(null,v=>""+v),d=ps.bind(null,Eh),p=ps.bind(null,Ar);function m(v,U){let N,$;return Nc(v)?(N=t.getRecordMatcher(v),$=U):$=v,t.addRoute($,N)}function I(v){const U=t.getRecordMatcher(v);U&&t.removeRoute(U)}function C(){return t.getRoutes().map(v=>v.record)}function M(v){return!!t.getRecordMatcher(v)}function k(v,U){if(U=re({},U||a.value),typeof v=="string"){const g=gs(n,v,U.path),_=t.resolve({path:g.path},U),w=s.createHref(g.fullPath);return re(g,_,{params:p(_.params),hash:Ar(g.hash),redirectedFrom:void 0,href:w})}let N;if("path"in v)N=re({},v,{path:gs(n,v.path,U.path).path});else{const g=re({},v.params);for(const _ in g)g[_]==null&&delete g[_];N=re({},v,{params:d(g)}),U.params=d(U.params)}const $=t.resolve(N,U),ne=v.hash||"";$.params=u(p($.params));const f=Nd(r,re({},v,{hash:vh(ne),path:$.path})),h=s.createHref(f);return re({fullPath:f,hash:ne,query:r===Go?Ih(v.query):v.query||{}},$,{redirectedFrom:void 0,href:h})}function E(v){return typeof v=="string"?gs(n,v,a.value.path):re({},v)}function O(v,U){if(l!==v)return cn(8,{from:U,to:v})}function b(v){return V(v)}function F(v){return b(re(E(v),{replace:!0}))}function W(v){const U=v.matched[v.matched.length-1];if(U&&U.redirect){const{redirect:N}=U;let $=typeof N=="function"?N(v):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=E($):{path:$},$.params={}),re({query:v.query,hash:v.hash,params:"path"in $?{}:v.params},$)}}function V(v,U){const N=l=k(v),$=a.value,ne=v.state,f=v.force,h=v.replace===!0,g=W(N);if(g)return V(re(E(g),{state:typeof g=="object"?re({},ne,g.state):ne,force:f,replace:h}),U||N);const _=N;_.redirectedFrom=U;let w;return!f&&Dd(r,$,N)&&(w=cn(16,{to:_,from:$}),He($,$,!0,!1)),(w?Promise.resolve(w):A(_,$)).catch(T=>Qe(T)?Qe(T,2)?T:ot(T):te(T,_,$)).then(T=>{if(T){if(Qe(T,2))return V(re({replace:h},E(T.to),{state:typeof T.to=="object"?re({},ne,T.to.state):ne,force:f}),U||_)}else T=L(_,$,!0,h,ne);return G(_,$,T),T})}function y(v,U){const N=O(v,U);return N?Promise.reject(N):Promise.resolve()}function P(v){const U=Vt.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(v):v()}function A(v,U){let N;const[$,ne,f]=Nh(v,U);N=ms($.reverse(),"beforeRouteLeave",v,U);for(const g of $)g.leaveGuards.forEach(_=>{N.push(pt(_,v,U))});const h=y.bind(null,v,U);return N.push(h),ve(N).then(()=>{N=[];for(const g of i.list())N.push(pt(g,v,U));return N.push(h),ve(N)}).then(()=>{N=ms(ne,"beforeRouteUpdate",v,U);for(const g of ne)g.updateGuards.forEach(_=>{N.push(pt(_,v,U))});return N.push(h),ve(N)}).then(()=>{N=[];for(const g of f)if(g.beforeEnter)if($e(g.beforeEnter))for(const _ of g.beforeEnter)N.push(pt(_,v,U));else N.push(pt(g.beforeEnter,v,U));return N.push(h),ve(N)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),N=ms(f,"beforeRouteEnter",v,U),N.push(h),ve(N))).then(()=>{N=[];for(const g of o.list())N.push(pt(g,v,U));return N.push(h),ve(N)}).catch(g=>Qe(g,8)?g:Promise.reject(g))}function G(v,U,N){c.list().forEach($=>P(()=>$(v,U,N)))}function L(v,U,N,$,ne){const f=O(v,U);if(f)return f;const h=U===ut,g=Gt?history.state:{};N&&($||h?s.replace(v.fullPath,re({scroll:h&&g&&g.scroll},ne)):s.push(v.fullPath,ne)),a.value=v,He(v,U,N,h),ot()}let Y;function me(){Y||(Y=s.listen((v,U,N)=>{if(!Zn.listening)return;const $=k(v),ne=W($);if(ne){V(re(ne,{replace:!0}),$).catch(An);return}l=$;const f=a.value;Gt&&jd($o(f.fullPath,N.delta),Qr()),A($,f).catch(h=>Qe(h,12)?h:Qe(h,2)?(V(h.to,$).then(g=>{Qe(g,20)&&!N.delta&&N.type===$n.pop&&s.go(-1,!1)}).catch(An),Promise.reject()):(N.delta&&s.go(-N.delta,!1),te(h,$,f))).then(h=>{h=h||L($,f,!1),h&&(N.delta&&!Qe(h,8)?s.go(-N.delta,!1):N.type===$n.pop&&Qe(h,20)&&s.go(-1,!1)),G($,f,h)}).catch(An)}))}let we=yn(),Q=yn(),ie;function te(v,U,N){ot(v);const $=Q.list();return $.length?$.forEach(ne=>ne(v,U,N)):console.error(v),Promise.reject(v)}function Xe(){return ie&&a.value!==ut?Promise.resolve():new Promise((v,U)=>{we.add([v,U])})}function ot(v){return ie||(ie=!v,me(),we.list().forEach(([U,N])=>v?N(v):U()),we.reset()),v}function He(v,U,N,$){const{scrollBehavior:ne}=e;if(!Gt||!ne)return Promise.resolve();const f=!N&&zd($o(v.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return sn().then(()=>ne(v,U,f)).then(h=>h&&Hd(h)).catch(h=>te(h,v,U))}const Te=v=>s.go(v);let zt;const Vt=new Set,Zn={currentRoute:a,listening:!0,addRoute:m,removeRoute:I,hasRoute:M,getRoutes:C,resolve:k,options:e,push:b,replace:F,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Q.add,isReady:Xe,install(v){const U=this;v.component("RouterLink",Ah),v.component("RouterView",kh),v.config.globalProperties.$router=U,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>We(a)}),Gt&&!zt&&a.value===ut&&(zt=!0,b(s.location).catch(ne=>{}));const N={};for(const ne in ut)Object.defineProperty(N,ne,{get:()=>a.value[ne],enumerable:!0});v.provide(xi,U),v.provide(Hc,qa(N)),v.provide(js,a);const $=v.unmount;Vt.add(v),v.unmount=function(){Vt.delete(v),Vt.size<1&&(l=ut,Y&&Y(),Y=null,a.value=ut,zt=!1,ie=!1),$()}}};function ve(v){return v.reduce((U,N)=>U.then(()=>P(N)),Promise.resolve())}return Zn}function Nh(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const c=t.matched[o];c&&(e.matched.find(l=>an(l,c))?r.push(c):n.push(c));const a=e.matched[o];a&&(t.matched.find(l=>an(l,a))||s.push(a))}return[n,r,s]}const Dh=[{path:"/",name:"home",component:()=>kt(()=>import("./Home.e85258fe.js"),["./Home.e85258fe.js","./Navbar.vue_vue_type_script_setup_true_lang.262f34dc.js"],import.meta.url)},{path:"/dashboard",name:"dashboard",component:()=>kt(()=>import("./Dashboard.57b18a64.js"),["./Dashboard.57b18a64.js","./Navbar.vue_vue_type_script_setup_true_lang.262f34dc.js"],import.meta.url)},{path:"/chapters",name:"chapters",component:()=>kt(()=>import("./Chapters.e28367c8.js"),["./Chapters.e28367c8.js","./Navbar.vue_vue_type_script_setup_true_lang.262f34dc.js","./axios.f2a602b3.js"],import.meta.url)},{path:"/sections",name:"sections",component:()=>kt(()=>import("./Sections.299cb437.js"),["./Sections.299cb437.js","./Navbar.vue_vue_type_script_setup_true_lang.262f34dc.js","./axios.f2a602b3.js"],import.meta.url)},{path:"/section",name:"section",component:()=>kt(()=>import("./Section.090515ae.js"),["./Section.090515ae.js","./Navbar.vue_vue_type_script_setup_true_lang.262f34dc.js","./axios.f2a602b3.js"],import.meta.url)},{path:"/terms",name:"terms",component:()=>kt(()=>import("./Terms.8a81d643.js"),["./Terms.8a81d643.js","./Navbar.vue_vue_type_script_setup_true_lang.262f34dc.js","./axios.f2a602b3.js"],import.meta.url)},{path:"/questions",name:"questions",component:()=>kt(()=>import("./Questions.30e19cad.js"),["./Questions.30e19cad.js","./Navbar.vue_vue_type_script_setup_true_lang.262f34dc.js","./axios.f2a602b3.js"],import.meta.url)}],Lh=xh({history:Gd(),routes:Dh});var Mh=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let jc;const Zr=e=>jc=e,zc=Symbol();function zs(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Pn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Pn||(Pn={}));function Uh(){const e=La(!0),t=e.run(()=>Et({}));let n=[],r=[];const s=jr({install(i){Zr(s),s._a=i,i.provide(zc,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Mh?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const Vc=()=>{};function ea(e,t,n,r=Vc){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&oi()&&Ma(s),s}function qt(e,...t){e.slice().forEach(n=>{n(...t)})}const Fh=e=>e();function Vs(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];zs(s)&&zs(r)&&e.hasOwnProperty(n)&&!fe(r)&&!bt(r)?e[n]=Vs(s,r):e[n]=r}return e}const Bh=Symbol();function $h(e){return!zs(e)||!e.hasOwnProperty(Bh)}const{assign:dt}=Object;function Hh(e){return!!(fe(e)&&e.effect)}function jh(e,t,n,r){const{state:s,actions:i,getters:o}=t,c=n.state.value[e];let a;function l(){c||(n.state.value[e]=s?s():{});const u=xu(n.state.value[e]);return dt(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=jr(be(()=>{Zr(n);const m=n._s.get(e);return o[p].call(m,m)})),d),{}))}return a=Wc(e,l,t,n,r,!0),a}function Wc(e,t,n={},r,s,i){let o;const c=dt({actions:{}},n),a={deep:!0};let l,u,d=[],p=[],m;const I=r.state.value[e];!i&&!I&&(r.state.value[e]={}),Et({});let C;function M(y){let P;l=u=!1,typeof y=="function"?(y(r.state.value[e]),P={type:Pn.patchFunction,storeId:e,events:m}):(Vs(r.state.value[e],y),P={type:Pn.patchObject,payload:y,storeId:e,events:m});const A=C=Symbol();sn().then(()=>{C===A&&(l=!0)}),u=!0,qt(d,P,r.state.value[e])}const k=i?function(){const{state:P}=n,A=P?P():{};this.$patch(G=>{dt(G,A)})}:Vc;function E(){o.stop(),d=[],p=[],r._s.delete(e)}function O(y,P){return function(){Zr(r);const A=Array.from(arguments),G=[],L=[];function Y(Q){G.push(Q)}function me(Q){L.push(Q)}qt(p,{args:A,name:y,store:F,after:Y,onError:me});let we;try{we=P.apply(this&&this.$id===e?this:F,A)}catch(Q){throw qt(L,Q),Q}return we instanceof Promise?we.then(Q=>(qt(G,Q),Q)).catch(Q=>(qt(L,Q),Promise.reject(Q))):(qt(G,we),we)}}const b={_p:r,$id:e,$onAction:ea.bind(null,p),$patch:M,$reset:k,$subscribe(y,P={}){const A=ea(d,y,P.detached,()=>G()),G=o.run(()=>Oe(()=>r.state.value[e],L=>{(P.flush==="sync"?u:l)&&y({storeId:e,type:Pn.direct,events:m},L)},dt({},a,P)));return A},$dispose:E},F=pn(b);r._s.set(e,F);const V=(r._a&&r._a.runWithContext||Fh)(()=>r._e.run(()=>(o=La()).run(t)));for(const y in V){const P=V[y];if(fe(P)&&!Hh(P)||bt(P))i||(I&&$h(P)&&(fe(P)?P.value=I[y]:Vs(P,I[y])),r.state.value[e][y]=P);else if(typeof P=="function"){const A=O(y,P);V[y]=A,c.actions[y]=P}}return dt(F,V),dt(Z(F),V),Object.defineProperty(F,"$state",{get:()=>r.state.value[e],set:y=>{M(P=>{dt(P,y)})}}),r._p.forEach(y=>{dt(F,o.run(()=>y({store:F,app:r._a,pinia:r,options:c})))}),I&&i&&n.hydrate&&n.hydrate(F.$state,I),l=!0,u=!0,F}function zh(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(c,a){const l=Ef();return c=c||(l?Ke(zc,null):null),c&&Zr(c),c=jc,c._s.has(r)||(i?Wc(r,t,s,c):jh(r,s,c)),c._s.get(r)}return o.$id=r,o}var _s=null;function Vh(e){return _s||(_s=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return setTimeout(t,16)}).bind(window)),_s(e)}var vs=null;function Wh(e){vs||(vs=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)}).bind(window)),vs(e)}function Kh(e){var t=document.createElement("style");return t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(t),t}function ar(e,t){t===void 0&&(t={});var n=document.createElement(e);return Object.keys(t).forEach(function(r){n[r]=t[r]}),n}function Kc(e,t,n){var r=window.getComputedStyle(e,n||null)||{display:"none"};return r[t]}function Ws(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if(Kc(t,"display")==="none")return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var qh='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',Ks=0,pr=null;function Gh(e,t){e.__resize_mutation_handler__||(e.__resize_mutation_handler__=Xh.bind(e));var n=e.__resize_listeners__;if(!n){if(e.__resize_listeners__=[],window.ResizeObserver){var r=e.offsetWidth,s=e.offsetHeight,i=new ResizeObserver(function(){!e.__resize_observer_triggered__&&(e.__resize_observer_triggered__=!0,e.offsetWidth===r&&e.offsetHeight===s)||Rr(e)}),o=Ws(e),c=o.detached,a=o.rendered;e.__resize_observer_triggered__=c===!1&&a===!1,e.__resize_observer__=i,i.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){Rr(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(Ks||(pr=Kh(qh)),Qh(e),e.__resize_rendered__=Ws(e).rendered,window.MutationObserver){var l=new MutationObserver(e.__resize_mutation_handler__);l.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=l}}e.__resize_listeners__.push(t),Ks++}function Jh(e,t){var n=e.__resize_listeners__;if(!!n){if(t&&n.splice(n.indexOf(t),1),!n.length||!t){if(e.detachEvent&&e.removeEventListener){e.detachEvent("onresize",e.__resize_legacy_resize_handler__),document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);return}e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",Ni),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--Ks&&pr&&pr.parentNode.removeChild(pr)}}function Yh(e){var t=e.__resize_last__,n=t.width,r=t.height,s=e.offsetWidth,i=e.offsetHeight;return s!==n||i!==r?{width:s,height:i}:null}function Xh(){var e=Ws(this),t=e.rendered,n=e.detached;t!==this.__resize_rendered__&&(!n&&this.__resize_triggers__&&(Di(this),this.addEventListener("scroll",Ni,!0)),this.__resize_rendered__=t,Rr(this))}function Ni(){var e=this;Di(this),this.__resize_raf__&&Wh(this.__resize_raf__),this.__resize_raf__=Vh(function(){var t=Yh(e);t&&(e.__resize_last__=t,Rr(e))})}function Rr(e){!e||!e.__resize_listeners__||e.__resize_listeners__.forEach(function(t){t.call(e,e)})}function Qh(e){var t=Kc(e,"position");(!t||t==="static")&&(e.style.position="relative"),e.__resize_old_position__=t,e.__resize_last__={};var n=ar("div",{className:"resize-triggers"}),r=ar("div",{className:"resize-expand-trigger"}),s=ar("div"),i=ar("div",{className:"resize-contract-trigger"});r.appendChild(s),n.appendChild(r),n.appendChild(i),e.appendChild(n),e.__resize_triggers__={triggers:n,expand:r,expandChild:s,contract:i},Di(e),e.addEventListener("scroll",Ni,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}function Di(e){var t=e.__resize_triggers__,n=t.expand,r=t.expandChild,s=t.contract,i=s.scrollWidth,o=s.scrollHeight,c=n.offsetWidth,a=n.offsetHeight,l=n.scrollWidth,u=n.scrollHeight;s.scrollLeft=i,s.scrollTop=o,r.style.width=c+1+"px",r.style.height=a+1+"px",n.scrollLeft=l,n.scrollTop=u}const Zh=["aria-label"];var qc=vi({__name:"text-clamp",props:{text:{type:String,required:!0},maxHeight:{type:[String,Number],required:!1},maxLines:{type:Number,required:!1},expanded:{type:Boolean,required:!1,default:!1},location:{type:String,required:!1,default:"end"},ellipsis:{type:String,required:!1,default:"\u2026"},autoResize:{type:Boolean,required:!1,default:!1}},emits:["clamp-change","update:expanded"],setup(e,{emit:t}){const n=e,r=Et(null),s=Et(null),i=Et(null),o=pn({offset:0,localExpanded:!!n.expanded,unregisterResizeCallback:null}),c=be(()=>{if(!o.localExpanded&&n.maxHeight)return typeof(n==null?void 0:n.maxHeight)=="number"?`${n==null?void 0:n.maxHeight}px`:n==null?void 0:n.maxHeight}),a=()=>{i.value&&(i.value.textContent=F.value)},l=()=>{o.localExpanded||(a(),(p()||b.value)&&I())},u=()=>{n.text&&(o.offset=n.text.length,d(),n.autoResize&&r.value&&(Gh(r.value,l),o.unregisterResizeCallback=()=>{r.value&&Jh(r.value,l)}),l())},d=()=>{var A;(A=o.unregisterResizeCallback)==null||A.call(o)},p=()=>!(!n.maxLines&&!n.maxHeight)&&!!r.value&&(!!(n.maxLines&&m()>n.maxLines)||!!(n.maxHeight&&r.value.scrollHeight>r.value.offsetHeight)),m=()=>s.value?Object.keys(Array.prototype.slice.call(s.value.getClientRects()).reduce((A,{top:G,bottom:L})=>{const Y=`${G}/${L}`;return A[Y]||(A[Y]=!0),A},{})).length:0,I=(...A)=>{const[G=0,L=o.offset]=A;if(L-G<=3)return void M();const Y=Math.floor((L+G)/2);C(Y),p()?I(G,Y):I(Y,L)},C=A=>{o.offset=A,a()},M=()=>{k(),E()},k=()=>{for(;(!p()||m()<2)&&o.offset<n.text.length;)O(1)},E=()=>{for(;p()&&m()>1&&o.offset>0;)O(-1)},O=A=>{C(o.offset+A)},b=be(()=>!!n.text&&o.offset!==n.text.length);Oe(()=>b.value,A=>{setTimeout(()=>{t("clamp-change",A)},0)},{immediate:!0});const F=be(()=>b.value?W.value:n.text),W=be(()=>{if(n.location==="start")return n.ellipsis+(n.text.slice(-o.offset)||"").trim();if(n.location==="middle"){const A=Math.floor(o.offset/2);return(n.text.slice(0,A)||"").trim()+n.ellipsis+(n.text.slice(-A)||"").trim()}return(n.text.slice(0,o.offset)||"").trim()+n.ellipsis}),V=()=>{o.localExpanded=!0},y=()=>{o.localExpanded=!1},P=()=>{o.localExpanded=!o.localExpanded};return Oe(()=>n.expanded,A=>{o.localExpanded=A}),Oe(()=>o.localExpanded,A=>{A?C(n.text.length):l(),n.expanded!==A&&t("update:expanded",A)}),Oe(()=>[n.maxLines,n.maxHeight,n.ellipsis,n.location,b.value].join(),()=>{sn(()=>{l()})}),Oe(()=>[n.text,n.autoResize].join(),()=>{sn(()=>{u()})}),bi(()=>{d()}),qr(()=>{u()}),(A,G)=>(Jr(),Df("div",{ref_key:"textClampRef",ref:r,class:"text-clamp",style:$r({overflow:"hidden",maxHeight:We(c)})},[Sr("span",{ref_key:"contentRef",ref:s},[lo(A.$slots,"before",{expand:V,collapse:y,toggle:P,clamped:We(b),expanded:o.localExpanded}),Sr("span",{ref_key:"textRef",ref:i,"aria-label":e.text},null,8,Zh),lo(A.$slots,"after",{expand:V,collapse:y,toggle:P,clamped:We(b),expanded:o.localExpanded})],512)],4))}});qc.__file="package/text-clamp.vue";const ep=e=>(e.install=function(t){t.component(e.__name,e)},e),tp=ep(qc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},np=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],c=e[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,c=o?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,u=i>>2,d=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,m=l&63;a||(m=64,o||(p=64)),r.push(n[u],n[d],n[p],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gc(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):np(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const d=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||c==null||l==null||d==null)throw new rp;const p=i<<2|c>>4;if(r.push(p),l!==64){const m=c<<4&240|l>>2;if(r.push(m),d!==64){const I=l<<6&192|d;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class rp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sp=function(e){const t=Gc(e);return Jc.encodeByteArray(t,!0)},Yc=function(e){return sp(e).replace(/\./g,"")},Xc=function(e){try{return Jc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=()=>ip().__FIREBASE_DEFAULTS__,ap=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},cp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Xc(e[1]);return t&&JSON.parse(t)},Li=()=>{try{return op()||ap()||cp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},lp=e=>{var t,n;return(n=(t=Li())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Qc=()=>{var e;return(e=Li())===null||e===void 0?void 0:e.config},Zc=e=>{var t;return(t=Li())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function dp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function hp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pp(){const e=Ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function gp(){try{return typeof indexedDB=="object"}catch{return!1}}function mp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="FirebaseError";class St extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=_p,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?vp(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new St(s,c,r)}}function vp(e,t){return e.replace(yp,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const yp=/\{\$([^}]+)}/g;function bp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Pr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(ta(i)&&ta(o)){if(!Pr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ta(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ep(e,t){const n=new wp(e,t);return n.subscribe.bind(n)}class wp{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ip(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=ys),s.error===void 0&&(s.error=ys),s.complete===void 0&&(s.complete=ys);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ip(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ys(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e){return e&&e._delegate?e._delegate:e}class ln{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new up;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sp(t))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xt){return this.instances.has(t)}getOptions(t=xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cp(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=xt){return this.component?this.component.multipleInstances?t:xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cp(e){return e===xt?void 0:e}function Sp(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Tp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(oe||(oe={}));const Rp={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Pp=oe.INFO,Op={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},kp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Op[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class el{constructor(t){this.name=t,this._logLevel=Pp,this._logHandler=kp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Rp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}const xp=(e,t)=>t.some(n=>e instanceof n);let na,ra;function Np(){return na||(na=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dp(){return ra||(ra=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tl=new WeakMap,qs=new WeakMap,nl=new WeakMap,bs=new WeakMap,Mi=new WeakMap;function Lp(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(It(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&tl.set(n,e)}).catch(()=>{}),Mi.set(t,e),t}function Mp(e){if(qs.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});qs.set(e,t)}let Gs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return qs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||nl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Up(e){Gs=e(Gs)}function Fp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Es(this),t,...n);return nl.set(r,t.sort?t.sort():[t]),It(r)}:Dp().includes(e)?function(...t){return e.apply(Es(this),t),It(tl.get(this))}:function(...t){return It(e.apply(Es(this),t))}}function Bp(e){return typeof e=="function"?Fp(e):(e instanceof IDBTransaction&&Mp(e),xp(e,Np())?new Proxy(e,Gs):e)}function It(e){if(e instanceof IDBRequest)return Lp(e);if(bs.has(e))return bs.get(e);const t=Bp(e);return t!==e&&(bs.set(e,t),Mi.set(t,e)),t}const Es=e=>Mi.get(e);function $p(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),c=It(o);return r&&o.addEventListener("upgradeneeded",a=>{r(It(o.result),a.oldVersion,a.newVersion,It(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Hp=["get","getKey","getAll","getAllKeys","count"],jp=["put","add","delete","clear"],ws=new Map;function sa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ws.get(t))return ws.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=jp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hp.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return ws.set(t,i),i}Up(e=>({...e,get:(t,n,r)=>sa(t,n)||e.get(t,n,r),has:(t,n)=>!!sa(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vp(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Js="@firebase/app",ia="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new el("@firebase/app"),Wp="@firebase/app-compat",Kp="@firebase/analytics-compat",qp="@firebase/analytics",Gp="@firebase/app-check-compat",Jp="@firebase/app-check",Yp="@firebase/auth",Xp="@firebase/auth-compat",Qp="@firebase/database",Zp="@firebase/database-compat",eg="@firebase/functions",tg="@firebase/functions-compat",ng="@firebase/installations",rg="@firebase/installations-compat",sg="@firebase/messaging",ig="@firebase/messaging-compat",og="@firebase/performance",ag="@firebase/performance-compat",cg="@firebase/remote-config",lg="@firebase/remote-config-compat",ug="@firebase/storage",fg="@firebase/storage-compat",dg="@firebase/firestore",hg="@firebase/firestore-compat",pg="firebase",gg="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="[DEFAULT]",mg={[Js]:"fire-core",[Wp]:"fire-core-compat",[qp]:"fire-analytics",[Kp]:"fire-analytics-compat",[Jp]:"fire-app-check",[Gp]:"fire-app-check-compat",[Yp]:"fire-auth",[Xp]:"fire-auth-compat",[Qp]:"fire-rtdb",[Zp]:"fire-rtdb-compat",[eg]:"fire-fn",[tg]:"fire-fn-compat",[ng]:"fire-iid",[rg]:"fire-iid-compat",[sg]:"fire-fcm",[ig]:"fire-fcm-compat",[og]:"fire-perf",[ag]:"fire-perf-compat",[cg]:"fire-rc",[lg]:"fire-rc-compat",[ug]:"fire-gcs",[fg]:"fire-gcs-compat",[dg]:"fire-fst",[hg]:"fire-fst-compat","fire-js":"fire-js",[pg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Map,Xs=new Map;function _g(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Hn(e){const t=e.name;if(Xs.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Xs.set(t,e);for(const n of Or.values())_g(n,e);return!0}function rl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tt=new Wn("app","Firebase",vg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=gg;function Ui(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ys,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});if(n||(n=Qc()),!n)throw Tt.create("no-options");const i=Or.get(s);if(i){if(Pr(n,i.options)&&Pr(r,i.config))return i;throw Tt.create("duplicate-app",{appName:s})}const o=new Ap(s);for(const a of Xs.values())o.addComponent(a);const c=new yg(n,r,o);return Or.set(s,c),c}function bg(e=Ys){const t=Or.get(e);if(!t&&e===Ys&&Qc())return Ui();if(!t)throw Tt.create("no-app",{appName:e});return t}function en(e,t,n){var r;let s=(r=mg[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${t}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(c.join(" "));return}Hn(new ln(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg="firebase-heartbeat-database",wg=1,jn="firebase-heartbeat-store";let Is=null;function sl(){return Is||(Is=$p(Eg,wg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(jn)}}}).catch(e=>{throw Tt.create("idb-open",{originalErrorMessage:e.message})})),Is}async function Ig(e){try{return await(await sl()).transaction(jn).objectStore(jn).get(il(e))}catch(t){if(t instanceof St)$t.warn(t.message);else{const n=Tt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});$t.warn(n.message)}}}async function oa(e,t){try{const r=(await sl()).transaction(jn,"readwrite");await r.objectStore(jn).put(t,il(e)),await r.done}catch(n){if(n instanceof St)$t.warn(n.message);else{const r=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function il(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=1024,Cg=30*24*60*60*1e3;class Sg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=aa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Cg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=aa(),{heartbeatsToSend:n,unsentEntries:r}=Ag(this._heartbeatsCache.heartbeats),s=Yc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function aa(){return new Date().toISOString().substring(0,10)}function Ag(e,t=Tg){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ca(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ca(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gp()?mp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ig(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return oa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return oa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ca(e){return Yc(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(e){Hn(new ln("platform-logger",t=>new zp(t),"PRIVATE")),Hn(new ln("heartbeat",t=>new Sg(t),"PRIVATE")),en(Js,ia,e),en(Js,ia,"esm2017"),en("fire-js","")}Pg("");var Og="firebase",kg="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(Og,kg,"app");function Fi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function ol(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xg=ol,al=new Wn("auth","Firebase",ol());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new el("@firebase/auth");function Ng(e,...t){kr.logLevel<=oe.WARN&&kr.warn(`Auth (${qn}): ${e}`,...t)}function gr(e,...t){kr.logLevel<=oe.ERROR&&kr.error(`Auth (${qn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,...t){throw Bi(e,...t)}function qe(e,...t){return Bi(e,...t)}function cl(e,t,n){const r=Object.assign(Object.assign({},xg()),{[t]:n});return new Wn("auth","Firebase",r).create(t,{appName:e.name})}function Dg(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ye(e,"argument-error"),cl(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bi(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return al.create(e,...t)}function q(e,t,...n){if(!e)throw Bi(t,...n)}function et(e){const t="INTERNAL ASSERTION FAILED: "+e;throw gr(t),new Error(t)}function st(e,t){e||et(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Lg(){return la()==="http:"||la()==="https:"}function la(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lg()||dp()||"connection"in navigator)?navigator.onLine:!0}function Ug(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,n){this.shortDelay=t,this.longDelay=n,st(n>t,"Short delay should be less than long delay!"),this.isMobile=fp()||hp()}get(){return Mg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e,t){st(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new Gn(3e4,6e4);function ul(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Jn(e,t,n,r,s={}){return fl(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const c=Kn(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ll.fetch()(dl(e,e.config.apiHost,n,c),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))})}async function fl(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fg),t);try{const s=new Hg(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cr(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw cr(e,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw cr(e,"email-already-in-use",o);if(a==="USER_DISABLED")throw cr(e,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw cl(e,u,l);Ye(e,u)}}catch(s){if(s instanceof St)throw s;Ye(e,"network-request-failed",{message:String(s)})}}async function $g(e,t,n,r,s={}){const i=await Jn(e,t,n,r,s);return"mfaPendingCredential"in i&&Ye(e,"multi-factor-auth-required",{_serverResponse:i}),i}function dl(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?$i(e.config,s):`${e.config.apiScheme}://${s}`}class Hg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),Bg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qe(e,t,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(e,t){return Jn(e,"POST","/v1/accounts:delete",t)}async function zg(e,t){return Jn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Vg(e,t=!1){const n=gn(e),r=await n.getIdToken(t),s=Hi(r);q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(Ts(s.auth_time)),issuedAtTime:On(Ts(s.iat)),expirationTime:On(Ts(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ts(e){return Number(e)*1e3}function Hi(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return gr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xc(n);return s?JSON.parse(s):(gr("Failed to decode base64 JWT payload"),null)}catch(s){return gr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wg(e){const t=Hi(e);return q(t,"internal-error"),q(typeof t.exp<"u","internal-error"),q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof St&&Kg(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Kg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(e){var t;const n=e.auth,r=await e.getIdToken(),s=await zn(e,zg(n,{idToken:r}));q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Yg(i.providerUserInfo):[],c=Jg(e.providerData,o),a=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new hl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Gg(e){const t=gn(e);await xr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Jg(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Yg(e){return e.map(t=>{var{providerId:n}=t,r=Fi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(e,t){const n=await fl(e,{},async()=>{const r=Kn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=dl(e,s,"/v1/token",`key=${i}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ll.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){q(t.idToken,"internal-error"),q(typeof t.idToken<"u","internal-error"),q(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Wg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return q(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Xg(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vn;return r&&(q(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e,t){q(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Bt{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Fi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await zn(this,this.stsTokenManager.getToken(this.auth,t));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Vg(this,t)}reload(){return Gg(this)}_assign(t){this!==t&&(q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await xr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await zn(this,jg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,c,a,l,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(c=n.tenantId)!==null&&c!==void 0?c:void 0,M=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:b,isAnonymous:F,providerData:W,stsTokenManager:V}=n;q(O&&V,t,"internal-error");const y=Vn.fromJSON(this.name,V);q(typeof O=="string",t,"internal-error"),ft(d,t.name),ft(p,t.name),q(typeof b=="boolean",t,"internal-error"),q(typeof F=="boolean",t,"internal-error"),ft(m,t.name),ft(I,t.name),ft(C,t.name),ft(M,t.name),ft(k,t.name),ft(E,t.name);const P=new Bt({uid:O,auth:t,email:p,emailVerified:b,displayName:d,isAnonymous:F,photoURL:I,phoneNumber:m,tenantId:C,stsTokenManager:y,createdAt:k,lastLoginAt:E});return W&&Array.isArray(W)&&(P.providerData=W.map(A=>Object.assign({},A))),M&&(P._redirectEventId=M),P}static async _fromIdTokenResponse(t,n,r=!1){const s=new Vn;s.updateFromServerResponse(n);const i=new Bt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await xr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Map;function tt(e){st(e instanceof Function,"Expected a class definition");let t=ua.get(e);return t?(st(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ua.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}pl.type="NONE";const fa=pl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t,n){return`firebase:${e}:${t}:${n}`}class tn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mr(this.userKey,s.apiKey,i),this.fullPersistenceKey=mr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Bt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new tn(tt(fa),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||tt(fa);const o=mr(r,t.config.apiKey,t.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const d=Bt._fromJSON(t,u);l!==i&&(c=d),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new tn(i,t,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new tn(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_l(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yl(t))return"Blackberry";if(bl(t))return"Webos";if(ji(t))return"Safari";if((t.includes("chrome/")||ml(t))&&!t.includes("edge/"))return"Chrome";if(vl(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gl(e=Ee()){return/firefox\//i.test(e)}function ji(e=Ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ml(e=Ee()){return/crios\//i.test(e)}function _l(e=Ee()){return/iemobile/i.test(e)}function vl(e=Ee()){return/android/i.test(e)}function yl(e=Ee()){return/blackberry/i.test(e)}function bl(e=Ee()){return/webos/i.test(e)}function es(e=Ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Qg(e=Ee()){var t;return es(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Zg(){return pp()&&document.documentMode===10}function El(e=Ee()){return es(e)||vl(e)||bl(e)||yl(e)||/windows phone/i.test(e)||_l(e)}function em(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e,t=[]){let n;switch(e){case"Browser":n=da(Ee());break;case"Worker":n=`${da(Ee())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,c)=>{try{const a=t(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(e,t={}){return Jn(e,"GET","/v2/passwordPolicy",ul(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=6;class sm{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ha(this),this.idTokenSubscription=new ha(this),this.beforeStateQueue=new tm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=al,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await tn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(t);(!o||o===c)&&(a==null?void 0:a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await xr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Ug()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?gn(t):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await nm(this),n=new sm(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Wn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&tt(t)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=t.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=t.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Ng(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yn(e){return gn(e)}class ha{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ep(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function am(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",om().appendChild(r)})}function cm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(e,t){const n=rl(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pr(i,t!=null?t:{}))return s;Ye(s,"already-initialized")}return n.initialize({options:t})}function um(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function fm(e,t,n){const r=Yn(e);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Il(t),{host:o,port:c}=dm(t),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hm()}function Il(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function dm(e){const t=Il(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pa(o)}}}function pa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function hm(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(t){return et("not implemented")}_linkToIdToken(t,n){return et("not implemented")}_getReauthenticationResolver(t){return et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,t){return $g(e,"POST","/v1/accounts:signInWithIdp",ul(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="http://localhost";class Ht extends Tl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ht(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Fi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ht(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return nn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,nn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,nn(t,n)}buildRequest(){const t={requestUri:pm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Kn(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends zi{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Xn{constructor(){super("facebook.com")}static credential(t){return Ht._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return mt.credentialFromTaggedObject(t)}static credentialFromError(t){return mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return mt.credential(t.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends Xn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ht._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ce.credentialFromTaggedObject(t)}static credentialFromError(t){return Ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ce.credential(n,r)}catch{return null}}}Ce.GOOGLE_SIGN_IN_METHOD="google.com";Ce.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Xn{constructor(){super("github.com")}static credential(t){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Xn{constructor(){super("twitter.com")}static credential(t,n){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return vt.credentialFromTaggedObject(t)}static credentialFromError(t){return vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Bt._fromIdTokenResponse(t,r,s),o=ga(r);return new un({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=ga(r);return new un({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function ga(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends St{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Nr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Nr(t,n,r,s)}}function Cl(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Nr._fromErrorAndOperation(e,i,t,r):i})}async function gm(e,t,n=!1){const r=await zn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return un._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await zn(e,Cl(r,s,t,e),n);q(i.idToken,r,"internal-error");const o=Hi(i.idToken);q(o,r,"internal-error");const{sub:c}=o;return q(e.uid===c,r,"user-mismatch"),un._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ye(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(e,t,n=!1){const r="signIn",s=await Cl(e,r,t),i=await un._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}function vm(e,t,n,r){return gn(e).onIdTokenChanged(t,n,r)}function ym(e,t,n){return gn(e).beforeAuthStateChanged(t,n)}const Dr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dr,"1"),this.storage.removeItem(Dr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){const e=Ee();return ji(e)||es(e)}const Em=1e3,wm=10;class Al extends Sl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bm()&&em(),this.fallbackToPolling=El(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Zg()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,wm):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Em)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Al.type="LOCAL";const Im=Al;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Sl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Rl.type="SESSION";const Pl=Rl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new ts(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Tm(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Vi("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return window}function Sm(e){Ge().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function Am(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rm(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Pm(){return Ol()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="firebaseLocalStorageDb",Om=1,Lr="firebaseLocalStorage",xl="fbase_key";class Qn{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ns(e,t){return e.transaction([Lr],t?"readwrite":"readonly").objectStore(Lr)}function km(){const e=indexedDB.deleteDatabase(kl);return new Qn(e).toPromise()}function Zs(){const e=indexedDB.open(kl,Om);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Lr,{keyPath:xl})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Lr)?t(r):(r.close(),await km(),t(await Zs()))})})}async function ma(e,t,n){const r=ns(e,!0).put({[xl]:t,value:n});return new Qn(r).toPromise()}async function xm(e,t){const n=ns(e,!1).get(t),r=await new Qn(n).toPromise();return r===void 0?null:r.value}function _a(e,t){const n=ns(e,!0).delete(t);return new Qn(n).toPromise()}const Nm=800,Dm=3;class Nl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zs(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Dm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(Pm()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Am(),!this.activeServiceWorker)return;this.sender=new Cm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Rm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zs();return await ma(t,Dr,"1"),await _a(t,Dr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ma(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>xm(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>_a(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=ns(s,!1).getAll();return new Qn(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nl.type="LOCAL";const Lm=Nl;new Gn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(e,t){return t?tt(t):(q(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Tl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return nn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return nn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return nn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Mm(e){return _m(e.auth,new Wi(e),e.bypassAuthState)}function Um(e){const{auth:t,user:n}=e;return q(n,t,"internal-error"),mm(n,new Wi(e),e.bypassAuthState)}async function Fm(e){const{auth:t,user:n}=e;return q(n,t,"internal-error"),gm(n,new Wi(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=t;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Mm;case"linkViaPopup":case"linkViaRedirect":return Fm;case"reauthViaPopup":case"reauthViaRedirect":return Um;default:Ye(this.auth,"internal-error")}}resolve(t){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new Gn(2e3,1e4);async function $m(e,t,n){const r=Yn(e);Dg(e,t,zi);const s=Dl(r,n);return new Mt(r,"signInViaPopup",t,s).executeNotNull()}class Mt extends Ll{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mt.currentPopupAction&&Mt.currentPopupAction.cancel(),Mt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return q(t,this.auth,"internal-error"),t}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const t=Vi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Bm.get())};t()}}Mt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="pendingRedirect",_r=new Map;class jm extends Ll{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=_r.get(this.auth._key());if(!t){try{const r=await zm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}_r.set(this.auth._key(),t)}return this.bypassAuthState||_r.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zm(e,t){const n=Km(t),r=Wm(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vm(e,t){_r.set(e._key(),t)}function Wm(e){return tt(e._redirectPersistence)}function Km(e){return mr(Hm,e.config.apiKey,e.name)}async function qm(e,t){return await Yn(e)._initializationPromise,Ml(e,t,!1)}async function Ml(e,t,n=!1){const r=Yn(e),s=Dl(r,t),o=await new jm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=10*60*1e3;class Jm{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ym(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ul(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Gm&&this.cachedEventUids.clear(),this.cachedEventUids.has(va(t))}saveEventToCache(t){this.cachedEventUids.add(va(t)),this.lastProcessedEventTime=Date.now()}}function va(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ul({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ym(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ul(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(e,t={}){return Jn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zm=/^https?/;async function e_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Xm(e);for(const n of t)try{if(t_(n))return}catch{}Ye(e,"unauthorized-domain")}function t_(e){const t=Qs(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Zm.test(n))return!1;if(Qm.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new Gn(3e4,6e4);function ya(){const e=Ge().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function r_(e){return new Promise((t,n)=>{var r,s,i;function o(){ya(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ya(),n(qe(e,"network-request-failed"))},timeout:n_.get()})}if(!((s=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=Ge().gapi)===null||i===void 0)&&i.load)o();else{const c=cm("iframefcb");return Ge()[c]=()=>{gapi.load?o():n(qe(e,"network-request-failed"))},am(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(t=>{throw vr=null,t})}let vr=null;function s_(e){return vr=vr||r_(e),vr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Gn(5e3,15e3),o_="__/auth/iframe",a_="emulator/auth/iframe",c_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},l_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function u_(e){const t=e.config;q(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?$i(t,a_):`https://${e.config.authDomain}/${o_}`,r={apiKey:t.apiKey,appName:e.name,v:qn},s=l_.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Kn(r).slice(1)}`}async function f_(e){const t=await s_(e),n=Ge().gapi;return q(n,e,"internal-error"),t.open({where:document.body,url:u_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qe(e,"network-request-failed"),c=Ge().setTimeout(()=>{i(o)},i_.get());function a(){Ge().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},h_=500,p_=600,g_="_blank",m_="http://localhost";class ba{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function __(e,t,n,r=h_,s=p_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},d_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ee().toLowerCase();n&&(c=ml(l)?g_:n),gl(l)&&(t=t||m_,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[m,I])=>`${p}${m}=${I},`,"");if(Qg(l)&&c!=="_self")return v_(t||"",c),new ba(null);const d=window.open(t||"",c,u);q(d,e,"popup-blocked");try{d.focus()}catch{}return new ba(d)}function v_(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="__/auth/handler",b_="emulator/auth/handler",E_=encodeURIComponent("fac");async function Ea(e,t,n,r,s,i){q(e.config.authDomain,e,"auth-domain-config-required"),q(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qn,eventId:s};if(t instanceof zi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",bp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries(i||{}))o[u]=d}if(t instanceof Xn){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await e._getAppCheckToken(),l=a?`#${E_}=${encodeURIComponent(a)}`:"";return`${w_(e)}?${Kn(c).slice(1)}${l}`}function w_({config:e}){return e.emulator?$i(e,b_):`https://${e.authDomain}/${y_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="webStorageSupport";class I_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pl,this._completeRedirectFn=Ml,this._overrideRedirectResult=Vm}async _openPopup(t,n,r,s){var i;st((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ea(t,n,r,Qs(),s);return __(t,o,Vi())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Ea(t,n,r,Qs(),s);return Sm(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(st(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await f_(t),r=new Jm(t);return n.register("authEvent",s=>(q(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Cs,{type:Cs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Cs];o!==void 0&&n(!!o),Ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=e_(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return El()||ji()||es()}}const T_=I_;var wa="@firebase/auth",Ia="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function A_(e){Hn(new ln("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wl(e)},l=new im(r,s,i,a);return um(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Hn(new ln("auth-internal",t=>{const n=Yn(t.getProvider("auth").getImmediate());return(r=>new C_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(wa,Ia,S_(e)),en(wa,Ia,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=5*60,P_=Zc("authIdTokenMaxAge")||R_;let Ta=null;const O_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>P_)return;const s=n==null?void 0:n.token;Ta!==s&&(Ta=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function k_(e=bg()){const t=rl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=lm(e,{popupRedirectResolver:T_,persistence:[Lm,Im,Pl]}),r=Zc("authTokenSyncURL");if(r){const i=O_(r);ym(n,i,()=>i(n.currentUser)),vm(n,o=>i(o))}const s=lp("auth");return s&&fm(n,`http://${s}`),n}A_("Browser");function x_(e){return oi()?(Ma(e),!0):!1}function Ki(e){return typeof e=="function"?e():We(e)}const rs=typeof window<"u"&&typeof document<"u",N_=Object.prototype.toString,D_=e=>N_.call(e)==="[object Object]",L_=()=>{};function M_(e,t){function n(...r){return new Promise((s,i)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(s).catch(i)})}return n}const Fl=e=>e();function U_(e=Fl){const t=Et(!0);function n(){t.value=!1}function r(){t.value=!0}const s=(...i)=>{t.value&&e(...i)};return{isActive:di(t),pause:n,resume:r,eventFilter:s}}function F_(e,t,n={}){const{eventFilter:r=Fl,...s}=n;return Oe(e,M_(r,t),s)}function B_(e,t,n={}){const{eventFilter:r,...s}=n,{eventFilter:i,pause:o,resume:c,isActive:a}=U_(r);return{stop:F_(e,t,{...s,eventFilter:i}),pause:o,resume:c,isActive:a}}function $_(e){var t;const n=Ki(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Mr=rs?window:void 0;rs&&window.document;rs&&window.navigator;rs&&window.location;function Ca(...e){let t,n,r,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,s]=e,t=Mr):[t,n,r,s]=e,!t)return L_;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},c=(u,d,p,m)=>(u.addEventListener(d,p,m),()=>u.removeEventListener(d,p,m)),a=Oe(()=>[$_(t),Ki(s)],([u,d])=>{if(o(),!u)return;const p=D_(d)?{...d}:d;i.push(...n.flatMap(m=>r.map(I=>c(u,m,I,p))))},{immediate:!0,flush:"post"}),l=()=>{a(),o()};return x_(l),l}const lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ur="__vueuse_ssr_handlers__",H_=j_();function j_(){return ur in lr||(lr[ur]=lr[ur]||{}),lr[ur]}function z_(e,t){return H_[e]||t}function V_(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const W_={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Sa="vueuse-storage";function K_(e,t,n,r={}){var s;const{flush:i="pre",deep:o=!0,listenToStorageChanges:c=!0,writeDefaults:a=!0,mergeDefaults:l=!1,shallow:u,window:d=Mr,eventFilter:p,onError:m=y=>{console.error(y)}}=r,I=(u?Xa:Et)(t);if(!n)try{n=z_("getDefaultStorage",()=>{var y;return(y=Mr)==null?void 0:y.localStorage})()}catch(y){m(y)}if(!n)return I;const C=Ki(t),M=V_(C),k=(s=r.serializer)!=null?s:W_[M],{pause:E,resume:O}=B_(I,()=>b(I.value),{flush:i,deep:o,eventFilter:p});return d&&c&&(Ca(d,"storage",V),Ca(d,Sa,W)),V(),I;function b(y){try{if(y==null)n.removeItem(e);else{const P=k.write(y),A=n.getItem(e);A!==P&&(n.setItem(e,P),d&&d.dispatchEvent(new CustomEvent(Sa,{detail:{key:e,oldValue:A,newValue:P,storageArea:n}})))}}catch(P){m(P)}}function F(y){const P=y?y.newValue:n.getItem(e);if(P==null)return a&&C!==null&&n.setItem(e,k.write(C)),C;if(!y&&l){const A=k.read(P);return typeof l=="function"?l(A,C):M==="object"&&!Array.isArray(A)?{...C,...A}:A}else return typeof P!="string"?P:k.read(P)}function W(y){V(y.detail)}function V(y){if(!(y&&y.storageArea!==n)){if(y&&y.key==null){I.value=C;return}if(!(y&&y.key!==e)){E();try{(y==null?void 0:y.newValue)!==k.write(I.value)&&(I.value=F(y))}catch(P){m(P)}finally{y?sn(O):O()}}}}}function bn(e,t,n={}){const{window:r=Mr}=n;return K_(e,t,r==null?void 0:r.localStorage,n)}const ei=zh("main",{state:()=>({user_name:bn("user_name",""),user_avatar:bn("user_avatar",""),loggedIn:bn("loggedIn",!1),current_nav:bn("current_nav",""),current_section_id:bn("current_section_id",0)})}),Bl={apiKey:"AIzaSyBOPpyE4u7-1DfCIHEcugkB8fgOLWsXFuM",authDomain:"mystudypal-39c9c.firebaseapp.com",projectId:"mystudypal-39c9c",storageBucket:"mystudypal-39c9c.appspot.com",messagingSenderId:"466102574842",appId:"1:466102574842:web:a600e4f98ec915ff27f343"},q_=()=>{Ui(Bl)},G_=Ui(Bl),J_=new Ce,Aa=k_(G_);function uv(){qm(Aa).then(e=>{const t=ei();if(e){const n=Ce.credentialFromResult(e);if(console.log(n),n!=null){const r=n.accessToken;console.log(r);const s=e.user;console.log(s),console.log(s),t.loggedIn=!0,t.user_name=s.displayName?s.displayName:""}}}).catch(e=>{const t=e.code;t!=null&&console.log(t);const n=e.message;n!=null&&console.log(n);const r=e.customData;if(r!=null&&console.log(r),Ce!=null){const s=Ce.credentialFromError(e);console.log(s)}}),$m(Aa,J_).then(e=>{const t=ei(),n=e.user;console.log(n),t.user_name=n.displayName?n.displayName:"",t.loggedIn=!0,t.user_avatar=n.photoURL?n.photoURL:"",console.log(t.user_avatar)}).catch(e=>{const t=e.code;t!=null&&console.log(t);const n=e.message;n!=null&&console.log(n);const r=e.customData;if(r!=null&&console.log(r),Ce!=null){const s=Ce.credentialFromError(e);console.log(s)}})}function fv(){const e=ei();e.user_name="",e.loggedIn=!1,e.user_avatar="",e.current_nav=""}q_();wd(Ad).use(Lh).use(Uh()).use(tp).mount("#app");export{dr as A,sv as B,ff as C,dc as D,Y_ as E,Ne as F,ov as G,sn as H,nv as I,lv as J,Z_ as K,pn as L,yi as M,av as N,uv as O,fv as P,tp as Q,tv as R,Lh as S,Pc as T,Se as a,We as b,Df as c,vi as d,Jr as e,Sr as f,Uf as g,rv as h,be as i,Si as j,ev as k,Q_ as l,Ff as m,ii as n,qr as o,lo as p,iv as q,Et as r,bi as s,Oe as t,ei as u,cv as v,zu as w,$r as x,Ke as y,X_ as z};
