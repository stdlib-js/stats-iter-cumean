"use strict";var d=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var f=d(function(b,v){
var i=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),q=require('@stdlib/assert-is-function/dist'),u=require('@stdlib/symbol-iterator/dist'),p=require('@stdlib/stats-incr-mean/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(n){var e,t,a;if(!m(n))throw new TypeError(x('1KH3w',n));return a=p(),e={},i(e,"next",s),i(e,"return",c),u&&q(n[u])&&i(e,u,l),e;function s(){var r;return t?{done:!0}:(r=n.next(),r.done?(t=!0,r):(typeof r.value=="number"?r=a(r.value):r=a(NaN),{value:r,done:!1}))}function c(r){return t=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return o(n[u]())}}v.exports=o
});var y=f();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
