// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ctors=r()}(this,(function(){"use strict";function e(e){var r=e.default;if("function"==typeof r){var t=function(){return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return r&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,i=n;var o=function(e){return i.call(e)},a=Object.prototype.hasOwnProperty;var u=function(e,r){return null!=e&&a.call(e,r)},f="function"==typeof Symbol?Symbol.toStringTag:"",l=u,c=f,s=n;var h=o,y=function(e){var r,t,n;if(null==e)return s.call(e);t=e[c],r=l(e,c);try{e[c]=void 0}catch(r){return s.call(e)}return n=s.call(e),r?e[c]=t:delete e[c],n},m=t()?y:h,p=m,g="function"==typeof Float64Array;var b="function"==typeof Float64Array?Float64Array:null,v=function(e){return g&&e instanceof Float64Array||"[object Float64Array]"===p(e)},w=b;var d="function"==typeof Float64Array?Float64Array:void 0,E=function(){throw new Error("not implemented")},_=function(){var e,r;if("function"!=typeof w)return!1;try{r=new w([1,3.14,-3.14,NaN]),e=v(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?d:E,T=m,j="function"==typeof Float32Array;var x=function(e){return j&&e instanceof Float32Array||"[object Float32Array]"===T(e)},A=Number.POSITIVE_INFINITY,B="function"==typeof Float32Array?Float32Array:null,L=x,R=A,S=B;var V="function"==typeof Float32Array?Float32Array:void 0,k=function(){throw new Error("not implemented")},O=function(){var e,r;if("function"!=typeof S)return!1;try{r=new S([1,3.14,-3.14,5e40]),e=L(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===R}catch(r){e=!1}return e}()?V:k,P="function"==typeof Object.defineProperty?Object.defineProperty:null;var M=function(){try{return P({},"x",{}),!0}catch(e){return!1}},N=Object.defineProperty,F=Object.prototype,C=F.toString,Y=F.__defineGetter__,I=F.__defineSetter__,W=F.__lookupGetter__,G=F.__lookupSetter__;var J=function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(W.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(e,r,t.get),a&&I&&I.call(e,r,t.set),e},X=N,z=J,D=M()?X:z,U=D;var q=function(e,r,t){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},H=q;var K=function(e){return"number"==typeof e},Q=Number,Z=Q.prototype.toString;var $=m,ee=Q,re=function(e){try{return Z.call(e),!0}catch(e){return!1}},te=t();var ne=function(e){return"object"==typeof e&&(e instanceof ee||(te?re(e):"[object Number]"===$(e)))},ie=K,oe=ne;var ae=H,ue=function(e){return ie(e)||oe(e)},fe=ne;ae(ue,"isPrimitive",K),ae(ue,"isObject",fe);var le=ue,ce=Q.NEGATIVE_INFINITY,se=Math.floor;var he=function(e){return se(e)===e},ye=A,me=ce,pe=he;var ge=function(e){return e<ye&&e>me&&pe(e)},be=le.isPrimitive,ve=ge;var we=function(e){return be(e)&&ve(e)},de=le.isObject,Ee=ge;var _e=function(e){return de(e)&&Ee(e.valueOf())},Te=we,je=_e;var xe=H,Ae=function(e){return Te(e)||je(e)},Be=_e;xe(Ae,"isPrimitive",we),xe(Ae,"isObject",Be);var Le=Ae.isPrimitive;var Re=function(e){return Le(e)&&e>=0},Se=Ae.isObject;var Ve=function(e){return Se(e)&&e.valueOf()>=0},ke=Re,Oe=Ve;var Pe=H,Me=function(e){return ke(e)||Oe(e)},Ne=Ve;Pe(Me,"isPrimitive",Re),Pe(Me,"isObject",Ne);var Fe=Me,Ce=he;var Ye=function(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ce(e.length)&&e.length>=0&&e.length<=4294967295},Ie=he;var We=function(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ie(e.length)&&e.length>=0&&e.length<=9007199254740991},Ge=m,Je="function"==typeof ArrayBuffer;var Xe=function(e){return Je&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===Ge(e)},ze=m;var De=Array.isArray?Array.isArray:function(e){return"[object Array]"===ze(e)},Ue=De;var qe=function(e){return"object"==typeof e&&null!==e&&!Ue(e)},He=/./;var Ke=function(e){return"boolean"==typeof e},Qe=Boolean.prototype.toString;var Ze=m,$e=function(e){try{return Qe.call(e),!0}catch(e){return!1}},er=t();var rr=function(e){return"object"==typeof e&&(e instanceof Boolean||(er?$e(e):"[object Boolean]"===Ze(e)))},tr=Ke,nr=rr;var ir=H,or=function(e){return tr(e)||nr(e)},ar=rr;ir(or,"isPrimitive",Ke),ir(or,"isObject",ar);var ur=or;var fr=function(){return new Function("return this;")()},lr="object"==typeof self?self:null,cr="object"==typeof window?window:null,sr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},hr="object"==typeof sr?sr:null;module.exports=hr;var yr=ur.isPrimitive,mr=fr,pr=lr,gr=cr,br=e(Object.freeze({__proto__:null}));var vr=function(e){if(arguments.length){if(!yr(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return mr()}if(pr)return pr;if(gr)return gr;if(br)return br;throw new Error("unexpected error. Unable to resolve global object.")},wr=vr(),dr=wr.document&&wr.document.childNodes,Er=Int8Array,_r=He,Tr=dr,jr=Er;var xr=function(){return"function"==typeof _r||"object"==typeof jr||"function"==typeof Tr};var Ar=function(){return/^\s*function\s*([^(]*)/i},Br=Ar;H(Br,"REGEXP",Ar());var Lr=Br,Rr=De;var Sr=function(e){return null!==e&&"object"==typeof e};H(Sr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!Rr(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Sr));var Vr=Sr;var kr=m,Or=Lr.REGEXP,Pr=function(e){return Vr(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))};var Mr=function(e){var r,t,n;if(("Object"===(t=kr(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Or.exec(n.toString()))return r[1]}return Pr(e)?"Buffer":t},Nr=Mr;var Fr=Mr;var Cr=function(e){var r;return null===e?"null":"object"===(r=typeof e)?Nr(e).toLowerCase():r},Yr=function(e){return Fr(e).toLowerCase()},Ir=xr()?Yr:Cr;var Wr=function(e){return"function"===Ir(e)};var Gr=le.isPrimitive,Jr=D,Xr=H,zr=function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"},Dr=function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e};function Ur(e,r){if(!(this instanceof Ur))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Gr(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!Gr(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return Jr(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Jr(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Xr(Ur,"BYTES_PER_ELEMENT",8),Xr(Ur.prototype,"BYTES_PER_ELEMENT",8),Xr(Ur.prototype,"byteLength",16),Xr(Ur.prototype,"toString",zr),Xr(Ur.prototype,"toJSON",Dr);var qr=Ur,Hr="function"==typeof Math.fround?Math.fround:null,Kr=new O(1);var Qr=Hr;"function"!=typeof Qr&&(Qr=function(e){return Kr[0]=e,Kr[0]});var Zr=le.isPrimitive,$r=D,et=H,rt=Qr,tt=function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"},nt=function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e};function it(e,r){if(!(this instanceof it))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Zr(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!Zr(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return $r(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:rt(e)}),$r(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:rt(r)}),this}et(it,"BYTES_PER_ELEMENT",4),et(it.prototype,"BYTES_PER_ELEMENT",4),et(it.prototype,"byteLength",8),et(it.prototype,"toString",tt),et(it.prototype,"toJSON",nt);var ot=it,at=qr,ut=ot;var ft=function(e){return e instanceof at||e instanceof ut||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im},lt=he;var ct=function(e){return lt(e/2)},st=u;var ht=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&st(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator},yt=ht()?Symbol.iterator:null,mt=D;var pt=function(e,r,t){mt(e,r,{configurable:!1,enumerable:!1,get:t})},gt=pt;var bt=function(e){return e.re};var vt=function(e){return e.im},wt=O;var dt=function(e,r){return new wt(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))},Et=_;var _t=function(e,r){return new Et(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))};var Tt=function(e,r){return e[r]},jt=function(e,r){return e.get(r)},xt=function(e,r,t){e[r]=t},At=function(e,r,t){e.set(t,r)};var Bt=function(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?jt:Tt,setter:r?At:xt}},Lt=Ye,Rt=ft,St=bt,Vt=vt;var kt=Ye,Ot=ft,Pt=bt,Mt=vt;var Nt=ft,Ft=bt,Ct=vt;var Yt=Fe.isPrimitive,It=Ye,Wt=We,Gt=Xe,Jt=qe,Xt=De,zt=Wr,Dt=ft,Ut=ct,qt=he,Ht=ht,Kt=yt,Qt=H,Zt=gt,$t=_,en=qr,rn=bt,tn=vt,nn=dt,on=_t,an=Bt,un=function(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(n=t.value,Lt(n)&&n.length>=2)r.push(n[0],n[1]);else{if(!Rt(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(St(n),Vt(n))}return r},fn=function(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,o=r.call(t,i.value,a),kt(o)&&o.length>=2)n.push(o[0],o[1]);else{if(!Ot(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(Pt(o),Mt(o))}return n},ln=function(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(n=r[i],!Nt(n))return null;e[o]=Ft(n),e[o+1]=Ct(n),o+=2}return e},cn=2*$t.BYTES_PER_ELEMENT,sn=Ht();function hn(e){return e instanceof gn||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function yn(e){return e===gn||"Complex64Array"===e.name}function mn(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===cn/2}function pn(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===cn}function gn(){var e,r,t,n;if(r=arguments.length,!(this instanceof gn))return 0===r?new gn:1===r?new gn(arguments[0]):2===r?new gn(arguments[0],arguments[1]):new gn(arguments[0],arguments[1],arguments[2]);if(0===r)t=new $t(0);else if(1===r)if(Yt(arguments[0]))t=new $t(2*arguments[0]);else if(Wt(arguments[0]))if((n=(t=arguments[0]).length)&&Xt(t)&&Dt(t[0])){if(null===(t=ln(new $t(2*n),t))){if(!Ut(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new $t(arguments[0])}}else{if(mn(t))t=nn(t,0);else if(pn(t))t=on(t,0);else if(!Ut(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new $t(t)}else if(Gt(arguments[0])){if(!qt((t=arguments[0]).byteLength/cn))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+cn+". Byte length: `"+t.byteLength+"`.");t=new $t(t)}else{if(!Jt(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===sn)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!zt(t[Kt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Kt](),!zt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=un(t))instanceof Error)throw t;t=new $t(t)}else{if(!Gt(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Yt(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!qt(e/cn))throw new RangeError("invalid argument. Byte offset must be a multiple of "+cn+". Value: `"+e+"`.");if(2===r){if(n=t.byteLength-e,!qt(n/cn))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+cn+". View byte length: `"+n+"`.");t=new $t(t,e)}else{if(!Yt(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*cn>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*cn+"`.");t=new $t(t,e,2*n)}}return Qt(this,"_buffer",t),Qt(this,"_length",t.length/2),this}Qt(gn,"BYTES_PER_ELEMENT",cn),Qt(gn,"name","Complex128Array"),Qt(gn,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s;if(!zt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!zt(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(hn(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(l=n.call(r,e.get(c),c),Dt(l))o[s]=rn(l),o[s+1]=tn(l);else{if(!(It(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(e)}if(Wt(e)){if(n){for(u=e.length,a=an(e),c=0;c<u;c++)if(!Dt(a.getter(e,c))){f=!0;break}if(f){if(!Ut(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(l=n.call(r,a.getter(e,c),c),Dt(l))o[s]=rn(l),o[s+1]=tn(l);else{if(!(It(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(e)}if(Jt(e)&&sn&&zt(e[Kt])){if(o=e[Kt](),!zt(o.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?fn(o,n,r):un(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),Qt(gn,"of",(function(){var e,r;if(!zt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Zt(gn.prototype,"buffer",(function(){return this._buffer.buffer})),Zt(gn.prototype,"byteLength",(function(){return this._buffer.byteLength})),Zt(gn.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Qt(gn.prototype,"BYTES_PER_ELEMENT",gn.BYTES_PER_ELEMENT),Qt(gn.prototype,"copyWithin",(function(e,r){if(!hn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Qt(gn.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!hn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Qt(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new en(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Qt(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Kt&&Qt(t,Kt,(function(){return r.entries()})),t})),Qt(gn.prototype,"get",(function(e){var r;if(!hn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Yt(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return r=this._buffer,new en(r[e*=2],r[e+1])})),Zt(gn.prototype,"length",(function(){return this._length})),Qt(gn.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!hn(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Yt(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Dt(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=rn(e),void(n[t+1]=tn(e))}if(hn(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*cn,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new $t(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Wt(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!Dt(e[f])){o=!0;break}if(o){if(!Ut(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*cn,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new $t(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=rn(u),n[t+1]=tn(u),t+=2}}));var bn=gn;var vn=function(e){return e.re};var wn=function(e){return e.im},dn=Ye,En=ft,_n=vn,Tn=wn;var jn=Ye,xn=ft,An=vn,Bn=wn;var Ln=ft,Rn=vn,Sn=wn;var Vn=Fe.isPrimitive,kn=Ye,On=We,Pn=Xe,Mn=qe,Nn=De,Fn=Wr,Cn=ft,Yn=ct,In=he,Wn=ht,Gn=yt,Jn=H,Xn=gt,zn=O,Dn=ot,Un=vn,qn=wn,Hn=dt,Kn=_t,Qn=Bt,Zn=function(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(n=t.value,dn(n)&&n.length>=2)r.push(n[0],n[1]);else{if(!En(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(_n(n),Tn(n))}return r},$n=function(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,o=r.call(t,i.value,a),jn(o)&&o.length>=2)n.push(o[0],o[1]);else{if(!xn(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(An(o),Bn(o))}return n},ei=function(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(n=r[i],!Ln(n))return null;e[o]=Rn(n),e[o+1]=Sn(n),o+=2}return e},ri=2*zn.BYTES_PER_ELEMENT,ti=Wn();function ni(e){return e instanceof ui||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ii(e){return e===ui||"Complex128Array"===e.name}function oi(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ri}function ai(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*ri}function ui(){var e,r,t,n;if(r=arguments.length,!(this instanceof ui))return 0===r?new ui:1===r?new ui(arguments[0]):2===r?new ui(arguments[0],arguments[1]):new ui(arguments[0],arguments[1],arguments[2]);if(0===r)t=new zn(0);else if(1===r)if(Vn(arguments[0]))t=new zn(2*arguments[0]);else if(On(arguments[0]))if((n=(t=arguments[0]).length)&&Nn(t)&&Cn(t[0])){if(null===(t=ei(new zn(2*n),t))){if(!Yn(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new zn(arguments[0])}}else{if(oi(t))t=Hn(t,0);else if(ai(t))t=Kn(t,0);else if(!Yn(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new zn(t)}else if(Pn(arguments[0])){if(!In((t=arguments[0]).byteLength/ri))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+ri+". Byte length: `"+t.byteLength+"`.");t=new zn(t)}else{if(!Mn(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===ti)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Fn(t[Gn]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Gn](),!Fn(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Zn(t))instanceof Error)throw t;t=new zn(t)}else{if(!Pn(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Vn(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!In(e/ri))throw new RangeError("invalid argument. Byte offset must be a multiple of "+ri+". Value: `"+e+"`.");if(2===r){if(n=t.byteLength-e,!In(n/ri))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+ri+". View byte length: `"+n+"`.");t=new zn(t,e)}else{if(!Vn(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*ri>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*ri+"`.");t=new zn(t,e,2*n)}}return Jn(this,"_buffer",t),Jn(this,"_length",t.length/2),this}Jn(ui,"BYTES_PER_ELEMENT",ri),Jn(ui,"name","Complex64Array"),Jn(ui,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s;if(!Fn(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ii(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Fn(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(ni(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(l=n.call(r,e.get(c),c),Cn(l))o[s]=Un(l),o[s+1]=qn(l);else{if(!(kn(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(e)}if(On(e)){if(n){for(u=e.length,a=Qn(e),c=0;c<u;c++)if(!Cn(a.getter(e,c))){f=!0;break}if(f){if(!Yn(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(l=n.call(r,a.getter(e,c),c),Cn(l))o[s]=Un(l),o[s+1]=qn(l);else{if(!(kn(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(e)}if(Mn(e)&&ti&&Fn(e[Gn])){if(o=e[Gn](),!Fn(o.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?$n(o,n,r):Zn(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),Jn(ui,"of",(function(){var e,r;if(!Fn(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ii(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Xn(ui.prototype,"buffer",(function(){return this._buffer.buffer})),Xn(ui.prototype,"byteLength",(function(){return this._buffer.byteLength})),Xn(ui.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Jn(ui.prototype,"BYTES_PER_ELEMENT",ui.BYTES_PER_ELEMENT),Jn(ui.prototype,"copyWithin",(function(e,r){if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Jn(ui.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Jn(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Dn(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),Jn(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Gn&&Jn(t,Gn,(function(){return r.entries()})),t})),Jn(ui.prototype,"get",(function(e){var r;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Vn(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return r=this._buffer,new Dn(r[e*=2],r[e+1])})),Xn(ui.prototype,"length",(function(){return this._length})),Jn(ui.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Vn(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(Cn(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Un(e),void(n[t+1]=qn(e))}if(ni(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*ri,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new zn(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!On(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!Cn(e[f])){o=!0;break}if(o){if(!Yn(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*ri,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new zn(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Un(u),n[t+1]=qn(u),t+=2}}));var fi={float64:_,float32:O,complex128:bn,complex64:ui};return function(e){return fi[e]||null}}));
//# sourceMappingURL=browser.js.map
