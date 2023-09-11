import{k as Me,u as fr,_ as lr,o as cr,c as dr,a as se}from"./entry.739f88ac.js";const hr=e=>Object.fromEntries(Object.entries(e).filter(([,r])=>r!==void 0)),pr=(e,r)=>(t,i)=>(fr(()=>e({...hr(t),...i.attrs},i)),()=>{var n,a;return r?(a=(n=i.slots).default)==null?void 0:a.call(n):null}),Dt=Me({name:"Title",inheritAttrs:!1,setup:pr((e,{slots:r})=>{var t,i,n;return{title:((n=(i=(t=r.default)==null?void 0:t.call(r))==null?void 0:i[0])==null?void 0:n.children)||null}})}),Ut=Me({name:"Head",inheritAttrs:!1,setup:(e,r)=>()=>{var t,i;return(i=(t=r.slots).default)==null?void 0:i.call(t)}}),mr={name:"EosIconsLoading"},vr={xmlns:"http://www.w3.org/2000/svg",width:"2.5em",height:"2.5em",viewBox:"0 0 24 24"},Er=se("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),Rr=se("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[se("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1),yr=[Er,Rr];function wr(e,r,t,i,n,a){return cr(),dr("svg",vr,yr)}const gt=lr(mr,[["render",wr]]);function br(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ue={exports:{}},He=function(r,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return r.apply(t,n)}},Or=He,fe=Object.prototype.toString,le=function(e){return function(r){var t=fe.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(e){return e=e.toLowerCase(),function(t){return le(t)===e}}function ce(e){return Array.isArray(e)}function $(e){return typeof e>"u"}function Ar(e){return e!==null&&!$(e)&&e.constructor!==null&&!$(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var Je=A("ArrayBuffer");function _r(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&Je(e.buffer),r}function Cr(e){return typeof e=="string"}function Sr(e){return typeof e=="number"}function Ve(e){return e!==null&&typeof e=="object"}function q(e){if(le(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var xr=A("Date"),Tr=A("File"),Pr=A("Blob"),Nr=A("FileList");function de(e){return fe.call(e)==="[object Function]"}function Dr(e){return Ve(e)&&de(e.pipe)}function Ur(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||fe.call(e)===r||de(e.toString)&&e.toString()===r)}var gr=A("URLSearchParams");function Br(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function qr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function he(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ce(e))for(var t=0,i=e.length;t<i;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function oe(){var e={};function r(n,a){q(e[a])&&q(n)?e[a]=oe(e[a],n):q(n)?e[a]=oe({},n):ce(n)?e[a]=n.slice():e[a]=n}for(var t=0,i=arguments.length;t<i;t++)he(arguments[t],r);return e}function Lr(e,r,t){return he(r,function(n,a){t&&typeof n=="function"?e[a]=Or(n,t):e[a]=n}),e}function $r(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Fr(e,r,t,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function jr(e,r,t){var i,n,a,s={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)a=i[n],s[a]||(r[a]=e[a],s[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function Ir(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var i=e.indexOf(r,t);return i!==-1&&i===t}function kr(e){if(!e)return null;var r=e.length;if($(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var Mr=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),m={isArray:ce,isArrayBuffer:Je,isBuffer:Ar,isFormData:Ur,isArrayBufferView:_r,isString:Cr,isNumber:Sr,isObject:Ve,isPlainObject:q,isUndefined:$,isDate:xr,isFile:Tr,isBlob:Pr,isFunction:de,isStream:Dr,isURLSearchParams:gr,isStandardBrowserEnv:qr,forEach:he,merge:oe,extend:Lr,trim:Br,stripBOM:$r,inherits:Fr,toFlatObject:jr,kindOf:le,kindOfTest:A,endsWith:Ir,toArray:kr,isTypedArray:Mr,isFileList:Nr},x=m;function ye(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var We=function(r,t,i){if(!t)return r;var n;if(i)n=i(t);else if(x.isURLSearchParams(t))n=t.toString();else{var a=[];x.forEach(t,function(f,d){f===null||typeof f>"u"||(x.isArray(f)?d=d+"[]":f=[f],x.forEach(f,function(h){x.isDate(h)?h=h.toISOString():x.isObject(h)&&(h=JSON.stringify(h)),a.push(ye(d)+"="+ye(h))}))}),n=a.join("&")}if(n){var s=r.indexOf("#");s!==-1&&(r=r.slice(0,s)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},Hr=m;function F(){this.handlers=[]}F.prototype.use=function(r,t,i){return this.handlers.push({fulfilled:r,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};F.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};F.prototype.forEach=function(r){Hr.forEach(this.handlers,function(i){i!==null&&r(i)})};var Jr=F,Vr=m,Wr=function(r,t){Vr.forEach(r,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[a])})},ze=m;function P(e,r,t,i,n){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}ze.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Xe=P.prototype,Ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Ke[e]={value:e}});Object.defineProperties(P,Ke);Object.defineProperty(Xe,"isAxiosError",{value:!0});P.from=function(e,r,t,i,n,a){var s=Object.create(Xe);return ze.toFlatObject(e,s,function(f){return f!==Error.prototype}),P.call(s,e.message,r,t,i,n),s.name=e.name,a&&Object.assign(s,a),s};var D=P,Qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=m;function zr(e,r){r=r||new FormData;var t=[];function i(a){return a===null?"":w.isDate(a)?a.toISOString():w.isArrayBuffer(a)||w.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(w.isPlainObject(a)||w.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),w.forEach(a,function(f,d){if(!w.isUndefined(f)){var c=s?s+"."+d:d,h;if(f&&!s&&typeof f=="object"){if(w.endsWith(d,"{}"))f=JSON.stringify(f);else if(w.endsWith(d,"[]")&&(h=w.toArray(f))){h.forEach(function(u){!w.isUndefined(u)&&r.append(c,i(u))});return}}n(f,c)}}),t.pop()}else r.append(s,i(a))}return n(e),r}var Ze=zr,V,we;function Xr(){if(we)return V;we=1;var e=D;return V=function(t,i,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},V}var W,be;function Kr(){if(be)return W;be=1;var e=m;return W=e.isStandardBrowserEnv()?function(){return{write:function(i,n,a,s,o,f){var d=[];d.push(i+"="+encodeURIComponent(n)),e.isNumber(a)&&d.push("expires="+new Date(a).toGMTString()),e.isString(s)&&d.push("path="+s),e.isString(o)&&d.push("domain="+o),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),W}var Qr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Zr=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},Yr=Qr,Gr=Zr,Ye=function(r,t){return r&&!Yr(t)?Gr(r,t):t},z,Oe;function et(){if(Oe)return z;Oe=1;var e=m,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return z=function(i){var n={},a,s,o;return i&&e.forEach(i.split(`
`),function(d){if(o=d.indexOf(":"),a=e.trim(d.substr(0,o)).toLowerCase(),s=e.trim(d.substr(o+1)),a){if(n[a]&&r.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([s]):n[a]=n[a]?n[a]+", "+s:s}}),n},z}var X,Ae;function rt(){if(Ae)return X;Ae=1;var e=m;return X=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function a(s){var o=s;return t&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=a(window.location.href),function(o){var f=e.isString(o)?a(o):o;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),X}var K,_e;function j(){if(_e)return K;_e=1;var e=D,r=m;function t(i){e.call(this,i??"canceled",e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),K=t,K}var Q,Ce;function tt(){return Ce||(Ce=1,Q=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),Q}var Z,Se;function xe(){if(Se)return Z;Se=1;var e=m,r=Xr(),t=Kr(),i=We,n=Ye,a=et(),s=rt(),o=Qe,f=D,d=j(),c=tt();return Z=function(u){return new Promise(function(ar,_){var U=u.data,g=u.headers,B=u.responseType,C;function ve(){u.cancelToken&&u.cancelToken.unsubscribe(C),u.signal&&u.signal.removeEventListener("abort",C)}e.isFormData(U)&&e.isStandardBrowserEnv()&&delete g["Content-Type"];var l=new XMLHttpRequest;if(u.auth){var sr=u.auth.username||"",or=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";g.Authorization="Basic "+btoa(sr+":"+or)}var M=n(u.baseURL,u.url);l.open(u.method.toUpperCase(),i(M,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function Ee(){if(l){var y="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,S=!B||B==="text"||B==="json"?l.responseText:l.response,O={data:S,status:l.status,statusText:l.statusText,headers:y,config:u,request:l};r(function(J){ar(J),ve()},function(J){_(J),ve()},O),l=null}}if("onloadend"in l?l.onloadend=Ee:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(Ee)},l.onabort=function(){l&&(_(new f("Request aborted",f.ECONNABORTED,u,l)),l=null)},l.onerror=function(){_(new f("Network Error",f.ERR_NETWORK,u,l,l)),l=null},l.ontimeout=function(){var S=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",O=u.transitional||o;u.timeoutErrorMessage&&(S=u.timeoutErrorMessage),_(new f(S,O.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,l)),l=null},e.isStandardBrowserEnv()){var Re=(u.withCredentials||s(M))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Re&&(g[u.xsrfHeaderName]=Re)}"setRequestHeader"in l&&e.forEach(g,function(S,O){typeof U>"u"&&O.toLowerCase()==="content-type"?delete g[O]:l.setRequestHeader(O,S)}),e.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),B&&B!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(C=function(y){l&&(_(!y||y&&y.type?new d:y),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(C),u.signal&&(u.signal.aborted?C():u.signal.addEventListener("abort",C))),U||(U=null);var H=c(M);if(H&&["http","https","file"].indexOf(H)===-1){_(new f("Unsupported protocol "+H+":",f.ERR_BAD_REQUEST,u));return}l.send(U)})},Z}var Y,Te;function nt(){return Te||(Te=1,Y=null),Y}var p=m,Pe=Wr,Ne=D,it=Qe,at=Ze,st={"Content-Type":"application/x-www-form-urlencoded"};function De(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function ot(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=xe()),e}function ut(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(e)}var I={transitional:it,adapter:ot(),transformRequest:[function(r,t){if(Pe(t,"Accept"),Pe(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r))return r;if(p.isArrayBufferView(r))return r.buffer;if(p.isURLSearchParams(r))return De(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=p.isObject(r),n=t&&t["Content-Type"],a;if((a=p.isFileList(r))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return at(a?{"files[]":r}:r,s&&new s)}else if(i||n==="application/json")return De(t,"application/json"),ut(r);return r}],transformResponse:[function(r){var t=this.transitional||I.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(s){if(a)throw s.name==="SyntaxError"?Ne.from(s,Ne.ERR_BAD_RESPONSE,this,null,this.response):s}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){I.headers[r]={}});p.forEach(["post","put","patch"],function(r){I.headers[r]=p.merge(st)});var pe=I,ft=m,lt=pe,ct=function(r,t,i){var n=this||lt;return ft.forEach(i,function(s){r=s.call(n,r,t)}),r},G,Ue;function Ge(){return Ue||(Ue=1,G=function(r){return!!(r&&r.__CANCEL__)}),G}var ge=m,ee=ct,dt=Ge(),ht=pe,pt=j();function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pt}var mt=function(r){re(r),r.headers=r.headers||{},r.data=ee.call(r,r.data,r.headers,r.transformRequest),r.headers=ge.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),ge.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||ht.adapter;return t(r).then(function(n){return re(r),n.data=ee.call(r,n.data,n.headers,r.transformResponse),n},function(n){return dt(n)||(re(r),n&&n.response&&(n.response.data=ee.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},E=m,er=function(r,t){t=t||{};var i={};function n(c,h){return E.isPlainObject(c)&&E.isPlainObject(h)?E.merge(c,h):E.isPlainObject(h)?E.merge({},h):E.isArray(h)?h.slice():h}function a(c){if(E.isUndefined(t[c])){if(!E.isUndefined(r[c]))return n(void 0,r[c])}else return n(r[c],t[c])}function s(c){if(!E.isUndefined(t[c]))return n(void 0,t[c])}function o(c){if(E.isUndefined(t[c])){if(!E.isUndefined(r[c]))return n(void 0,r[c])}else return n(void 0,t[c])}function f(c){if(c in t)return n(r[c],t[c]);if(c in r)return n(void 0,r[c])}var d={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:f};return E.forEach(Object.keys(r).concat(Object.keys(t)),function(h){var u=d[h]||a,R=u(h);E.isUndefined(R)&&u!==f||(i[h]=R)}),i},te,Be;function rr(){return Be||(Be=1,te={version:"0.27.2"}),te}var vt=rr().version,b=D,me={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){me[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var qe={};me.transitional=function(r,t,i){function n(a,s){return"[Axios v"+vt+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,o){if(r===!1)throw new b(n(s," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!qe[s]&&(qe[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(a,s,o):!0}};function Et(e,r,t){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var a=i[n],s=r[a];if(s){var o=e[a],f=o===void 0||s(o,a,e);if(f!==!0)throw new b("option "+a+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+a,b.ERR_BAD_OPTION)}}var Rt={assertOptions:Et,validators:me},tr=m,yt=We,Le=Jr,$e=mt,k=er,wt=Ye,nr=Rt,T=nr.validators;function N(e){this.defaults=e,this.interceptors={request:new Le,response:new Le}}N.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=k(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&nr.assertOptions(i,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(t)===!1||(a=a&&R.synchronous,n.unshift(R.fulfilled,R.rejected))});var s=[];this.interceptors.response.forEach(function(R){s.push(R.fulfilled,R.rejected)});var o;if(!a){var f=[$e,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var d=t;n.length;){var c=n.shift(),h=n.shift();try{d=c(d)}catch(u){h(u);break}}try{o=$e(d)}catch(u){return Promise.reject(u)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};N.prototype.getUri=function(r){r=k(this.defaults,r);var t=wt(r.baseURL,r.url);return yt(t,r.params,r.paramsSerializer)};tr.forEach(["delete","get","head","options"],function(r){N.prototype[r]=function(t,i){return this.request(k(i||{},{method:r,url:t,data:(i||{}).data}))}});tr.forEach(["post","put","patch"],function(r){function t(i){return function(a,s,o){return this.request(k(o||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}N.prototype[r]=t(),N.prototype[r+"Form"]=t(!0)});var bt=N,ne,Fe;function Ot(){if(Fe)return ne;Fe=1;var e=j();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(s){i=s});var n=this;this.promise.then(function(a){if(n._listeners){var s,o=n._listeners.length;for(s=0;s<o;s++)n._listeners[s](a);n._listeners=null}}),this.promise.then=function(a){var s,o=new Promise(function(f){n.subscribe(f),s=f}).then(a);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s){n.reason||(n.reason=new e(s),i(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var i,n=new r(function(s){i=s});return{token:n,cancel:i}},ne=r,ne}var ie,je;function At(){return je||(je=1,ie=function(r){return function(i){return r.apply(null,i)}}),ie}var ae,Ie;function _t(){if(Ie)return ae;Ie=1;var e=m;return ae=function(t){return e.isObject(t)&&t.isAxiosError===!0},ae}var ke=m,Ct=He,L=bt,St=er,xt=pe;function ir(e){var r=new L(e),t=Ct(L.prototype.request,r);return ke.extend(t,L.prototype,r),ke.extend(t,r),t.create=function(n){return ir(St(e,n))},t}var v=ir(xt);v.Axios=L;v.CanceledError=j();v.CancelToken=Ot();v.isCancel=Ge();v.VERSION=rr().version;v.toFormData=Ze;v.AxiosError=D;v.Cancel=v.CanceledError;v.all=function(r){return Promise.all(r)};v.spread=At();v.isAxiosError=_t();ue.exports=v;ue.exports.default=v;var Tt=ue.exports,Pt=Tt;const Bt=br(Pt),qt=""+new URL("placeholder.09a0f51b.jpg",import.meta.url).href;export{Ut as H,Dt as T,qt as _,Bt as a,gt as b};
