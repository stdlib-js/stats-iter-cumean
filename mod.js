// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var c,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=c):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var c=e;function a(t,e,r){c(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&d.call(t,e)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var w=s()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[_],e=m(t,_);try{t[_]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[_]=r:delete t[_],n}:function(t){return v.call(t)},g=Boolean.prototype.toString;var j=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function S(t){return p(t)||h(t)}function E(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,x="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof x?x:null;var P=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(O)return O;if(A)return A;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),T=P.document&&P.document.childNodes,C=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;a(V,"REGEXP",k);var G=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function L(t){return null!==t&&"object"==typeof t}function N(t){var e,r,n,o;if(("Object"===(r=w(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=k.exec(n.toString()))return e[1]}return L(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(L,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!G(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(L));var F="function"==typeof y||"object"==typeof C||"function"==typeof T?function(t){return N(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?N(t).toLowerCase():e};function I(t){return"function"===F(t)}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function R(t){var e,r,n,o,u,i,f;if(u=typeof(o=t),null===o||"object"!==u&&"function"!==u||!I(o.next))throw new TypeError(function(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}("0f249",t));return i=0,f=0,n=function(t){return 0===arguments.length?0===f?null:i:i+=(t-i)/(f+=1)},a(e={},"next",(function(){var e;if(r)return{done:!0};if((e=t.next()).done)return r=!0,e;e="number"==typeof e.value?n(e.value):n(NaN);return{value:e,done:!1}})),a(e,"return",(function(t){if(r=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),M&&I(t[M])&&a(e,M,(function(){return R(t[M]())})),e}export{R as default};
//# sourceMappingURL=mod.js.map
