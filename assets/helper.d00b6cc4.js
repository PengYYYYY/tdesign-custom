import{q as t}from"./index.fb7ca27a.js";/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */function v(n,e){var i=Object.keys(e);i.forEach(function(r){n.style[r]=e[r]})}/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */function g(){if(typeof navigator>"u"||!navigator)return Number.MAX_SAFE_INTEGER;var n=navigator,e=n.userAgent,i=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,r=e.indexOf("Trident")>-1&&e.indexOf("rv:11.0")>-1;if(i){var o=new RegExp("MSIE (\\d+\\.\\d+);"),a=e.match(o);if(!a)return-1;var u=parseFloat(a[1]);return u<7?6:u}return r?11:Number.MAX_SAFE_INTEGER}function l(n){return t(n!=null?n:"").length}function c(n,e,i){return t(i!=null?i:"").slice().length===e?i||"":t(n!=null?n:"").slice(0,e).join("")}export{l as a,g,c as l,v as s};
