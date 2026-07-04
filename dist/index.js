"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(c){throw (r=0, c)}};};var u=v(function(t,i){
var E=require('@stdlib/string-base-uppercase/dist'),a=require('@stdlib/string-base-replace/dist'),n=require('@stdlib/string-base-trim/dist'),p=/\s+/g,_=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,o=/([a-z0-9])([A-Z])/g;function q(e){return e=a(e,_," "),e=a(e,o,"$1 $2"),e=n(e),e=a(e,p,"_"),E(e)}i.exports=q
});var A=u();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
