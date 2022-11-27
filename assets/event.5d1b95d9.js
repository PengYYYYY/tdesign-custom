import{i as p,p as u}from"./index.7bc89517.js";/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(r){p(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function v(e,t){for(var n=s({},e),r=0;r<t.length;r++){var a=t[r];delete n[a]}return n}function l(e){return u("on-".concat(e))}function g(){var e=navigator,t=e.userAgent,n=t.indexOf("compatible")>-1&&t.indexOf("MSIE")>-1,r=t.indexOf("Trident")>-1&&t.indexOf("rv:11.0")>-1;if(n){var a=new RegExp("MSIE (\\d+\\.\\d+);"),o=t.match(a);if(!o)return-1;var f=parseFloat(o[1]);return f<7?6:f}return r?11:Number.MAX_SAFE_INTEGER}function h(e,t){var n=typeof t=="number";if(!e||e.length===0)return n?{length:0,characters:e}:0;for(var r=0,a=0;a<e.length;a++){var o=0;if(e.charCodeAt(a)>127||e.charCodeAt(a)===94?o=2:o=1,n&&r+o>t)return{length:r,characters:e.slice(0,a)};r+=o}return n?{length:r,characters:e}:r}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function d(e,t){var n,r;typeof t=="string"?(n=t,r=l(t)):(n=t.event,r=t.method);for(var a=arguments.length,o=new Array(a>2?a-2:0),f=2;f<a;f++)o[f-2]=arguments[f];if(e.$listeners["".concat(n)]&&e.$emit.apply(e,[n].concat(o)),typeof e.$props[r]=="function"){var i;(i=e.$props)[r].apply(i,o)}}export{h as a,d as e,g,v as o};
