import{o as c,b as i}from"./dom.c65227e1.js";import"./index.4ab857ef.js";/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var s={attach:{type:[String,Function],default:"body"},content:{type:[String,Function]},default:{type:[String,Function]},delay:{type:[Number,Array]},destroyOnClose:Boolean,disabled:Boolean,hideEmptyPopup:Boolean,overlayClassName:{type:[String,Object,Array]},overlayInnerClassName:{type:[String,Object,Array]},overlayInnerStyle:{type:[Boolean,Object,Function]},overlayStyle:{type:[Boolean,Object,Function]},placement:{type:String,default:"top"},popperOptions:{type:Object},showArrow:Boolean,trigger:{type:String,default:"hover",validator:function(n){return n?["hover","click","focus","mousedown","context-menu"].includes(n):!0}},triggerElement:{type:[String,Function]},visible:{type:Boolean,default:void 0},defaultVisible:Boolean,zIndex:{type:Number},onScroll:Function,onScrollToBottom:Function,onVisibleChange:Function};/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var p=["click","hover","focus","context-menu"];function f(t){return t.replace(/-(left|top)$/,"-start").replace(/-(right|bottom)$/,"-end")}function g(t){var n=[];return{add:function(o,a){c(t,o,a),n.push(function(){i(t,o,a)})},clean:function(){n.forEach(function(o){return o==null?void 0:o()}),n.length=0}}}/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var r=new Set,d={warn:function(n,e){console.warn("TDesign ".concat(n," Warn: ").concat(e))},warnOnce:function(n,e){var o="TDesign ".concat(n," Warn: ").concat(e);r.has(o)||(r.add(o),console.warn(o))},error:function(n,e){console.error("TDesign ".concat(n," Error: ").concat(e))},errorOnce:function(n,e){var o="TDesign ".concat(n," Error: ").concat(e);r.has(o)||(r.add(o),console.error(o))},info:function(n,e){console.info("TDesign ".concat(n," Info: ").concat(e))}};export{g as a,f as g,d as l,s as p,p as t};
