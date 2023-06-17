import{_ as i,V as N}from"./index.fb7ca27a.js";import{g as $,s as f}from"./helper.d00b6cc4.js";import{g as O,m as b,r as p,b as D}from"./render-tnode.bf4f38c7.js";import{g as C,a as z,r as S}from"./dom.71064f9a.js";/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?g(Object(n),!0).forEach(function(o){i(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function T(t){var e,n,o,a,c={};if(!(!t||typeof window>"u")){var r=(e=window)===null||e===void 0||(n=e.getComputedStyle)===null||n===void 0?void 0:n.call(e,t),h=r.color,P=r.fontSize,l=(o=window)===null||o===void 0||(a=o.navigator)===null||a===void 0?void 0:a.userAgent,j=/Safari/.test(l)&&!/Chrome/.test(l),_=/(?=.*iPhone)[?=.*MicroMessenger]/.test(l)&&!/Chrome/.test(l);if((j||_)&&(c={transformOrigin:"0px 0px",transform:"scale(".concat(parseInt(P,10)/12,")")}),h&&$()>11){var d=h.match(/[\d.]+/g),L=d?"rgba(".concat(d[0],", ").concat(d[1],", ").concat(d[2],", 0)"):"";f(t,u(u({},c),{},{background:"conic-gradient(from 90deg at 50% 50%,".concat(L," 0deg, ").concat(h," 360deg)")}))}else f(t,u(u({},c),{},{background:""}))}}/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var I=O("loading"),F=b(I).extend({name:"TLoadingGradient",mounted:function(){var e=this;this.$nextTick(function(){e.updateColor()})},updated:function(){this.updateColor()},methods:{updateColor:function(){var e=this.$refs.circle;T(e)}},render:function(){var e=arguments[0],n=["".concat(this.classPrefix,"-loading__gradient"),"".concat(this.classPrefix,"-icon-loading")];return e("svg",{class:n,attrs:{viewBox:"0 0 12 12",version:"1.1",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg"}},[e("foreignObject",{attrs:{x:"0",y:"0",width:"12",height:"12"}},[e("div",{class:"".concat(this.classPrefix,"-loading__gradient-conic"),ref:"circle"})])])}});/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var k={inserted:function(e,n){if(!!n.value){var o=C(n.value);o==null||o.appendChild(e)}}};/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var B={attach:{type:[String,Function],default:""},content:{type:[String,Function]},default:{type:[String,Function]},delay:{type:Number,default:0},fullscreen:Boolean,indicator:{type:[Boolean,Function],default:!0},inheritColor:Boolean,loading:{type:Boolean,default:!0},preventScrollThrough:{type:Boolean,default:!0},showOverlay:{type:Boolean,default:!0},size:{type:String,default:"medium"},text:{type:[String,Function]},zIndex:{type:Number}};/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,o)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?m(Object(n),!0).forEach(function(o){i(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}var E=O("loading"),M=b(E).extend({name:"TLoading",props:A({},B),directives:{TransferDom:k},data:function(){return{delayShowLoading:!1}},created:function(){this.delay&&this.countDelay()},watch:{loading:{handler:function(e){e?(this.countDelay(),this.lockFullscreen&&z(document.body,"".concat(this.componentName,"--lock"))):this.lockFullscreen&&S(document.body,"".concat(this.componentName,"--lock"))},immediate:!0}},computed:{styles:function(){var e={};return this.zIndex!==void 0&&(e.zIndex=this.zIndex),["small","medium","large"].includes(this.size)||(e["font-size"]=this.size),e},showText:function(){return Boolean(this.text||this.$scopedSlots.text)},baseClasses:function(){return["".concat(this.componentName,"--center"),this.commonSizeClassName[this.size],i({},"".concat(this.componentName,"--inherit-color"),this.inheritColor)]},hasContent:function(){return Boolean(this.default||this.$scopedSlots.default||this.content||this.$scopedSlots.content)},withContentClasses:function(){return this.baseClasses.concat([this.componentName,"".concat(this.componentName,"--full"),i({},"".concat(this.componentName,"__overlay"),this.showOverlay)])},fullScreenClasses:function(){return[this.componentName,"".concat(this.componentName,"__fullscreen"),"".concat(this.componentName,"--center"),"".concat(this.componentName,"__overlay")]},attachClasses:function(){return this.baseClasses.concat([this.componentName,"".concat(this.componentName,"--full"),i({},"".concat(this.componentName,"__overlay"),this.showOverlay)])},normalClasses:function(){return this.baseClasses.concat([this.componentName])},lockFullscreen:function(){return this.preventScrollThrough&&this.fullscreen},delayCounted:function(){return Boolean(!this.delay||this.delay&&this.delayShowLoading)},showWrapLoading:function(){return this.hasContent&&this.loading&&this.delayCounted},showFullScreenLoading:function(){return this.fullscreen&&this.loading&&this.delayCounted},showAttachedLoading:function(){return this.attach&&this.loading&&this.delayCounted}},methods:{countDelay:function(){var e=this;this.delayShowLoading=!1;var n=setTimeout(function(){e.delayShowLoading=!0,clearTimeout(n)},this.delay)}},render:function(){var e=arguments[0],n=e(F,{attrs:{size:this.size}}),o=this.loading&&p(this,"indicator",n),a=this.showText&&e("div",{class:"".concat(this.classPrefix,"-loading__text")},[p(this,"text")]);return this.fullscreen?!this.showFullScreenLoading||!this.loading?null:e("div",{class:this.fullScreenClasses,style:this.styles,directives:[{name:"transfer-dom",value:this.attach}]},[e("div",{class:this.baseClasses},[o,a])]):this.hasContent?e("div",{class:"".concat(this.componentName,"__parent")},[D(this,"default","content"),this.showWrapLoading&&e("div",{class:this.withContentClasses,style:this.styles},[o,a])]):this.attach?!this.showAttachedLoading||!this.loading?void 0:e("div",{class:this.attachClasses,style:this.styles,directives:[{name:"transfer-dom",value:this.attach}]},[o,a]):this.loading?e("div",{class:this.normalClasses,style:this.styles},[o,a]):null}});/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var W="t";/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,o)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?v(Object(n),!0).forEach(function(o){i(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}var K="".concat(W,"-loading--lock"),s=null;function w(t){var e=y({},t),n=new M({propsData:y({},e)}).$mount(),o=C(e.attach);o?o.appendChild(n.$el):console.error("attach is not exist");var a={hide:function(){var r;n.loading=!1,(r=n.$el.parentNode)===null||r===void 0||r.removeChild(n.$el)}};return a}function x(t){var e=function(){S(document.body,K),s.hide(),s=null};if(t===!0)return s?void 0:(s=w({fullscreen:!0,loading:!0,attach:"body"}),s);if(t===!1&&s){e();return}return w(t)}var V=x;V.install=function(){N.prototype.$loading=x};export{V as L,k as T,M as _,W as p};