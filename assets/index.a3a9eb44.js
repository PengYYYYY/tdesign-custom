import{V as jt,_ as Xn,u as Zn,I as ea,a as ta,O as xe,i as A,y as Oe,a6 as Ll,a7 as ns,a8 as mn,a9 as Bl,h as na,F as L,N as Vt,D as me,l as ot,aa as It,Q as zl,z as Pe,r as H,G as ce,X as Et,A as as,ab as rs,P as ct,k as Ne,ac as aa,s as oe,$ as ra,ad as oa,J as Va,Z as xn,ae as Ha,af as os,ag as fn,ah as Q,a0 as Wa,ai as Pa,w as Vl,aj as ls,ak as is,al as ss,am as us,a3 as cs,v as Y,an as la,ao as ds,ap as fs,aq as gn,C as Hl,ar as Wl,as as zn,at as Yl,au as ql,W as vn,K as Ae,av as vs,p as ps,aw as hs,ax as Jl,ay as ms,az as gs,aA as ha,aB as bs,aC as ys,aD as ws,aE as Cs,aF as xs,aG as Gl,aH as Ql,Y as _s,n as ge,aI as Os,e as Ss}from"./index.0d6d9eb3.js";import{M as Ct}from"./plugin.38dcbf6c.js";import{P as fr,e as ks,a as lt,b as xt,u as ke,l as be,d as ia,I as _n,g as Ya,h as $t,i as Ul,j as Rt,S as Xl,k as Qe,m as Wt,c as Ps,_ as Ds,R as Ts,n as qa,o as sa}from"./index.2db17279.js";import{h as fe,R as Rs}from"./dep-63c1cdf0.7ae50007.js";import{B as et,D as Es}from"./plugin.b61a4790.js";import{w as Fe}from"./withInstall.4adcce94.js";import{L as bn}from"./index.7c50c1e7.js";import{g as Mt,m as Kt,r as Zl,b as an,e as $s,f as vr,a as Ks,c as As}from"./render-tnode.b2e5410f.js";import{e as Fs,o as He,d as Le,i as pr,h as Ns}from"./dom.c46068d8.js";import{m as rn,T as js}from"./index.ec3ca700.js";import{a as Vn}from"./loading.ac94253a.js";import{o as ei,e as Tt,a as ti}from"./event.69d75d52.js";var Is=["size"];function hr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function mr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hr(Object(n),!0).forEach(function(a){ta(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Ms={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.25 1.75a3 3 0 100 6 3 3 0 000-6zm-2 3a2 2 0 114 0 2 2 0 01-4 0zM2 3a1 1 0 011-1h3.5a1 1 0 011 1v3.5a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm1 0v3.5h3.5V3H3zM2 9.5a1 1 0 011-1h3.5a1 1 0 011 1V13a1 1 0 01-1 1H3a1 1 0 01-1-1V9.5zm1 0V13h3.5V9.5H3zM8.5 9.5a1 1 0 011-1H13a1 1 0 011 1V13a1 1 0 01-1 1H9.5a1 1 0 01-1-1V9.5zm1 3.5H13V9.5H9.5V13z",fillOpacity:.9}}]},Ls=jt.extend({name:"AppIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(t,n){var a=n.props,r=n.data,l=a.size,i=Xn(a,Is),o=Zn(l),s=o.className,u=o.style,d=mr(mr({},i||{}),{},{id:"app",icon:Ms,staticClass:s,style:u});return r.props=d,t(ea,r)}}),Bs=["size"];function gr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function br(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gr(Object(n),!0).forEach(function(a){ta(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var zs={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12.13 3.86a2.02 2.02 0 00-2.85 0l-7.2 7.21-.71-.7 7.2-7.21a3.02 3.02 0 114.27 4.26L7 13.26a1.88 1.88 0 01-2.66-2.66L10 4.93l.71.7-5.67 5.68a.88.88 0 101.25 1.25l5.84-5.84c.79-.8.78-2.08-.01-2.86z",fillOpacity:.9}}]},Vs=jt.extend({name:"AttachIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(t,n){var a=n.props,r=n.data,l=a.size,i=Xn(a,Bs),o=Zn(l),s=o.className,u=o.style,d=br(br({},i||{}),{},{id:"attach",icon:zs,staticClass:s,style:u});return r.props=d,t(ea,r)}}),Hs=["size"];function yr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function wr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yr(Object(n),!0).forEach(function(a){ta(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Ws={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11 6H5l3 4.5L11 6z",fillOpacity:.9}}]},Ys=jt.extend({name:"CaretDownSmallIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(t,n){var a=n.props,r=n.data,l=a.size,i=Xn(a,Hs),o=Zn(l),s=o.className,u=o.style,d=wr(wr({},i||{}),{},{id:"caret-down-small",icon:Ws,staticClass:s,style:u});return r.props=d,t(ea,r)}}),qs=["size"];function Cr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function xr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cr(Object(n),!0).forEach(function(a){ta(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Js={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M5 1a1 1 0 100 2 1 1 0 000-2zM11 1a1 1 0 100 2 1 1 0 000-2zM4 6a1 1 0 112 0 1 1 0 01-2 0zM11 5a1 1 0 100 2 1 1 0 000-2zM4 10a1 1 0 112 0 1 1 0 01-2 0zM5 13a1 1 0 100 2 1 1 0 000-2zM10 10a1 1 0 112 0 1 1 0 01-2 0zM11 13a1 1 0 100 2 1 1 0 000-2z",fillOpacity:.9}}]},ni=jt.extend({name:"MoveIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(t,n){var a=n.props,r=n.data,l=a.size,i=Xn(a,qs),o=Zn(l),s=o.className,u=o.style,d=xr(xr({},i||{}),{},{id:"move",icon:Js,staticClass:s,style:u});return r.props=d,t(ea,r)}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Gs={container:{type:[String,Function],default:function(){return function(){return window}}},offsetBottom:{type:Number,default:0},offsetTop:{type:Number,default:0},zIndex:{type:Number},onFixedChange:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function _r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Qs(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_r(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_r(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Us=Mt("affix"),Xs=Kt(jt,Us).extend({name:"TAffix",props:Qs({},Gs),watch:{offsetTop:function(){this.handleScroll()},offsetBottom:function(){this.handleScroll()},zIndex:function(){this.handleScroll()}},methods:{handleScroll:function(){var t=this,n=this.scrollContainer,a=this.offsetTop,r=this.offsetBottom,l=this.$refs,i=l.affixWrapRef,o=l.affixRef;this.ticking||(window.requestAnimationFrame(function(){var s,u=(s=i==null?void 0:i.getBoundingClientRect())!==null&&s!==void 0?s:{top:0,width:0,height:0},d=u.top,v=u.width,c=u.height,f=0;if(n instanceof HTMLElement){var p;f=n==null||(p=n.getBoundingClientRect)===null||p===void 0?void 0:p.call(n).top}var h,y=d-f,m=(n==null?void 0:n[n instanceof Window?"innerHeight":"clientHeight"])-c,g=f+m-r;if(a!==void 0&&y<=a?h=f+a:r!==void 0&&d>=g?h=g:h=!1,o){var b=h!==!1,C=i.contains(t.placeholderEL);b?(o.className=t.componentName,o.style.top="".concat(h,"px"),o.style.width="".concat(v,"px"),o.style.height="".concat(c,"px"),t.zIndex&&(o.style.zIndex="".concat(t.zIndex)),C||(t.placeholderEL.style.width="".concat(v,"px"),t.placeholderEL.style.height="".concat(c,"px"),i.appendChild(t.placeholderEL))):(o.removeAttribute("class"),o.removeAttribute("style"),C&&t.placeholderEL.remove()),t.$emit("fixedChange",b,{top:h}),xe(t.onFixedChange)&&t.onFixedChange(b,{top:Number(h)})}t.ticking=!1}),this.ticking=!0)}},mounted:function(){var t=this;this.placeholderEL=document.createElement("div");var n=setTimeout(function(){t.scrollContainer=Fs(t.container),t.handleScroll(),He(t.scrollContainer,"scroll",t.handleScroll),He(window,"resize",t.handleScroll),clearTimeout(n)},0)},destroyed:function(){!this.scrollContainer||(Le(this.scrollContainer,"scroll",this.handleScroll),Le(window,"resize",this.handleScroll))},render:function(){var t=arguments[0];return t("div",{ref:"affixWrapRef"},[t("div",{ref:"affixRef"},[this.$slots.default])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var kn=Fe(Xs);/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Zs={delay:{type:Number},destroyOnClose:{type:Boolean,default:!0},duration:{type:Number},placement:{type:String,default:"top"},showArrow:{type:Boolean,default:!0},theme:{type:String,default:"default",validator:function(t){return t?["default","primary","success","danger","warning","light"].includes(t):!0}}};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Or(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Yt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Or(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Or(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var eu=Mt("tooltip"),tu=Kt(eu).extend({name:"TTooltip",components:{Popup:fr},props:Yt(Yt({},ks),Zs),data:function(){return{timer:null,x:0,offsetX:0,tooltipVisible:!1}},computed:{tooltipOverlayClassName:function(){return[this.componentName,A({},"".concat(this.componentName,"--").concat(this.theme),this.theme),this.overlayClassName]},tooltipOverlayInnerStyle:function(){var t=this;if(this.placement!=="mouse"||this.offsetX===0)return this.overlayInnerStyle;var n=function(r){return{transform:"translateX(".concat(t.offsetX-r.getBoundingClientRect().left,"px)")}};return this.overlayInnerStyle?function(a,r){return Yt(Yt({},n(a)),xe(t.overlayInnerStyle)?t.overlayInnerStyle(a,r):t.overlayInnerStyle)}:n}},watch:{visible:function(t){this.timer&&!t&&(clearTimeout(this.timer),this.timer=null)}},created:function(){var t=this;this.duration&&this.visible&&(this.timer=setTimeout(function(){t.$emit("visible-change",!1),clearTimeout(t.timer),t.timer=null},this.duration))},mounted:function(){var t;(t=window)===null||t===void 0||t.addEventListener("mousemove",this.onMouseMove,{passive:!0})},destroyed:function(){var t;(t=window)===null||t===void 0||t.removeEventListener("mousemove",this.onMouseMove)},methods:{onMouseMove:function(t){this.x=t.clientX},onTipVisibleChange:function(t,n){this.timer&&(n==null?void 0:n.trigger)!=="document"||(t&&(this.offsetX=this.x),this.$emit("visible-change",t))},getPopupProps:function(){var t=this,n=Yt(Yt({},this.$props),{},{showArrow:this.placement==="mouse"?!1:this.showArrow,placement:this.placement==="mouse"?"bottom-left":this.placement,content:function(){return Zl(t,"content")},default:function(){return an(t,"default","triggerElement")},overlayClassName:this.tooltipOverlayClassName,overlayInnerStyle:this.tooltipOverlayInnerStyle});return n},updatedTooltip:function(){this.$refs.popup&&this.$refs.popup.updatePopper()}},render:function(){var t=arguments[0];return t(fr,fe([{ref:"popup",attrs:{visible:this.visible}},{props:this.getPopupProps()},{},{on:{"visible-change":this.onTipVisibleChange}}]))}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var ai=Fe(rn(["visible"],{model:{prop:"visible",event:"visible-change"}})(tu));/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var nu={disabled:{type:[Boolean,Object]},layout:{type:String,default:"horizontal",validator:function(t){return t?["horizontal","vertical"].includes(t):!0}},showCurrent:{type:Boolean,default:!0},size:{type:String,default:"medium",validator:function(t){return t?["small","medium","large"].includes(t):!0}},tips:{type:[Boolean,Object]},variant:{type:String,default:"text",validator:function(t){return t?["text","outline"].includes(t):!0}},onChange:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Sr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function au(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var ru=Oe({name:"TJumper",props:au({},nu),setup:function(t,n){var a=n.emit,r=lt("jumper"),l=xt({ChevronLeftIcon:Ll,RoundIcon:ns,ChevronRightIcon:mn,ChevronUpIcon:Bl,ChevronDownIcon:na}),i=l.ChevronLeftIcon,o=l.RoundIcon,s=l.ChevronRightIcon,u=l.ChevronUpIcon,d=l.ChevronDownIcon,v=L(function(){return Vt(t.tips)?t.tips:t.tips===!0?{prev:"\u4E0A\u4E00\u9875",current:"\u5F53\u524D",next:"\u4E0B\u4E00\u9875"}:{}}),c=L(function(){return Vt(t.disabled)?t.disabled:t.disabled===!0?{prev:!0,current:!0,next:!0}:{prev:!1,current:!1,next:!1}});function f(p){var h;a("change",p),(h=t.onChange)===null||h===void 0||h.call(t,p)}return{COMPONENT_NAME:r,ChevronLeftIcon:i,RoundIcon:o,ChevronRightIcon:s,ChevronUpIcon:u,ChevronDownIcon:d,titleConfig:v,disabledConfig:c,handleChange:f}},render:function(){var t=arguments[0],n=this.COMPONENT_NAME,a=this.ChevronLeftIcon,r=this.RoundIcon,l=this.ChevronRightIcon,i=this.ChevronUpIcon,o=this.ChevronDownIcon,s=this.titleConfig,u=this.disabledConfig,d=this.handleChange,v=[n,A({},"".concat(n,"--outline"),this.variant==="outline")];return t("div",{class:v},[t(et,{attrs:{title:s.prev,variant:this.variant,size:this.size,shape:"square",icon:this.layout==="horizontal"?function(){return t(a)}:function(){return t(i)},disabled:u.prev},on:{click:function(f){return d({e:f,trigger:"prev"})}},class:"".concat(n,"__prev")}),this.showCurrent&&t(et,{attrs:{title:s.current,variant:this.variant,size:this.size,shape:"square",icon:function(){return t(r)},disabled:u.current},on:{click:function(f){return d({e:f,trigger:"current"})}},class:"".concat(n,"__current")}),t(et,{attrs:{title:s.next,variant:this.variant,size:this.size,shape:"square",icon:this.layout==="horizontal"?function(){return t(l)}:function(){return t(o)},disabled:u.next},on:{click:function(f){return d({e:f,trigger:"next"})}},class:"".concat(n,"__next")})])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var ou=Mt("fake-arrow"),lu=Kt(ou).extend({name:"TFakeArrow",props:{isActive:{type:Boolean},overlayClassName:{type:[String,Object,Array]},overlayStyle:{type:Object}},computed:{classes:function(){return[this.componentName,A({},"".concat(this.componentName,"--active"),this.isActive),this.overlayClassName]}},render:function(){var t=arguments[0];return t("svg",{class:this.classes,attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},style:this.overlayStyle},[t("path",{attrs:{d:"M3.75 5.7998L7.99274 10.0425L12.2361 5.79921",stroke:"black","stroke-opacity":"0.9","stroke-width":"1.3"}})])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var iu={align:{type:String,validator:function(t){return t?["left","center","right"].includes(t):!0}},autoWidth:Boolean,decimalPlaces:{type:Number,default:void 0},disabled:Boolean,format:{type:Function},inputProps:{type:Object},label:{type:[String,Function]},largeNumber:Boolean,max:{type:[String,Number],default:1/0},min:{type:[String,Number],default:-1/0},placeholder:{type:String,default:void 0},readonly:Boolean,size:{type:String,default:"medium",validator:function(t){return t?["small","medium","large"].includes(t):!0}},status:{type:String,validator:function(t){return t?["default","success","warning","error"].includes(t):!0}},step:{type:[String,Number],default:1},suffix:{type:[String,Function]},theme:{type:String,default:"row",validator:function(t){return t?["column","row","normal"].includes(t):!0}},tips:{type:[String,Function]},value:{type:[String,Number],default:void 0},defaultValue:{type:[String,Number]},onBlur:Function,onChange:Function,onEnter:Function,onFocus:Function,onKeydown:Function,onKeypress:Function,onKeyup:Function,onValidate:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function ua(){var e=ke(),t=e.classPrefix,n={small:"".concat(t.value,"-size-s"),medium:"".concat(t.value,"-size-m"),large:"".concat(t.value,"-size-l"),default:"",xs:"".concat(t.value,"-size-xs"),xl:"".concat(t.value,"-size-xl"),block:"".concat(t.value,"-size-full-width")},a={loading:"".concat(t.value,"-is-loading"),loadMore:"".concat(t.value,"-is-load-more"),disabled:"".concat(t.value,"-is-disabled"),focused:"".concat(t.value,"-is-focused"),success:"".concat(t.value,"-is-success"),error:"".concat(t.value,"-is-error"),warning:"".concat(t.value,"-is-warning"),selected:"".concat(t.value,"-is-selected"),active:"".concat(t.value,"-is-active"),checked:"".concat(t.value,"-is-checked"),current:"".concat(t.value,"-is-current"),hidden:"".concat(t.value,"-is-hidden"),visible:"".concat(t.value,"-is-visible"),expanded:"".concat(t.value,"-is-expanded"),indeterminate:"".concat(t.value,"-is-indeterminate")};return{classPrefix:t,sizeClassNames:n,statusClassNames:a,classNames:{size:n,status:a}}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function yn(e){return new Array(e).fill(0).join("")}function ri(e){if(!e)return!0;if(typeof e=="number")return Number.isNaN(e);var t=/^[0-9|e|E|-]+\.*[0-9|e|E|-]*$/.test(e);if(!t)return!1;for(var n=0,a=0,r=0,l=0,i=e.length;l<i;l++)if(e[l]==="."&&(r+=1,r>1)||/(e|E)+/.test(e[l])&&(n+=1,n>1)||e[l]==="-"&&(a+=1,a>2))return!1;return!0}function rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return e.indexOf(".")!==-1?(be.error("InputNumber","num is not a integer number."),e):!e||e==="0"&&t?"":e==="0"?e:(t?e.replace(/0+$/,""):e.replace(/^0+/,""))||"0"}function ma(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,a=rt(e,n),r=rt(t,n),l=a.length>r.length,i=l?a:r,o=l?r:a,s=[],u=[],d=n?0:i.length-o.length,v=n?o.length:i.length,c=v-1;c>=0;c--){var f=c-d,p=Number(i[c])+(Number(o[f])||0)+(u[c]||0);p>=10&&(u[c-1]=1),s.unshift(String(p%10))}return u[-1]&&s.unshift("1"),n?s.concat(i.slice(v,i.length)).join(""):s.join("")}function Zt(e,t){var n=e.split("."),a=me(n,2),r=a[0],l=r===void 0?"0":r,i=a[1],o=i===void 0?"0":i,s=t.split("."),u=me(s,2),d=u[0],v=d===void 0?"0":d,c=u[1],f=c===void 0?"0":c,p=ma(l,v);if(o==="0"&&f==="0")return p;var h=rt(o,!0),y=rt(f,!0),m=ma(h,y,!0),g=m.length;return g>h.length&&g>y.length?[rt(ma(p,"1")),rt(m.slice(1),!0)].filter(function(b){return b}).join("."):[rt(p),rt(m,!0)].filter(function(b){return b}).join(".")}function oi(e,t){var n=rt(e),a=rt(t);if(n.length===a.length){for(var r=0,l=n.length;r<l;r++){if(n[r]>a[r])return 1;if(n[r]<a[r])return-1}return 0}return n.length>a.length?1:-1}function li(e,t){for(var n=e&&e!=="0"?e.replace(/0+$/,""):"0",a=t&&t!=="0"?t.replace(/0+$/,""):"0",r=Math.max(n.length,a.length),l=0,i=r;l<i;l++){if((n[l]||0)>(a[l]||0))return 1;if((n[l]||0)<(a[l]||0))return-1}return 0}function su(e,t){var n=e.split("."),a=me(n,2),r=a[0],l=a[1],i=t.split("."),o=me(i,2),s=o[0],u=o[1],d=oi(r.replace("-",""),s.replace("-","")),v=r.includes("-"),c=s.includes("-");return v&&!c?-1:!v&&c?1:v&&c?d===0?0:d>0?-1:1:d===0?li(l,u):d}function kr(e){return[-1/0,1/0].includes(Number(e))}function Pr(e){return Number(e)<Number.MAX_SAFE_INTEGER&&Number(e)>Number.MIN_SAFE_INTEGER}function Ht(e,t,n){var a=Pr(e)&&Pr(t)&&!n,r=kr(e)||kr(t);return a||r?Number(e)===Number(t)?0:Number(e)>Number(t)?1:-1:su(String(e),String(t))}function sn(e,t,n){if(e===t)return"0";for(var a=n||{},r=a.decimal,l=a.stayZero,i=rt(e),o=rt(t),s=oi(i,o)>0,u=s?i:o,d=s?o:i,v=[],c=[],f=r?0:u.length-d.length,p=r?d.length:u.length,h=p-1;h>=0;h--){var y=h-f,m=Number(u[h])-(Number(d[y])||0)-(c[h]||0);m<0&&(c[h-1]=1,m+=10),v.unshift(String(m))}if(r)return v.concat(u.slice(p,u.length)).join("");var g=v.join("");return l||(g=g.replace(/^0+/,"")),rt(s?g:"-".concat(g))}function Hn(e,t){if(e===t)return"0";var n=Ht(e,t,!0)>0,a=n?e:t,r=n?t:e,l=a.split("."),i=me(l,2),o=i[0],s=i[1],u=s===void 0?"0":s,d=r.split("."),v=me(d,2),c=v[0],f=v[1],p=f===void 0?"0":f,h=sn(o,c);if(u==="0"&&p==="0")return n?h:"-".concat(h);var y="",m=u;u.length<p.length&&(m="".concat(u).concat(yn(p.length-u.length))),li(m,p)>=0?y=sn(m,p,{decimal:!0}):(u.length<p.length||u==="0"?(y=sn("1".concat(m),p,{stayZero:!0}),y=yn(p.length-y.length)+y):y=sn(u,p,{decimal:!0}),h=sn(h,"1"));var g=y?[h,y].join("."):h;return n?g:"-".concat(g)}function uu(e,t){var n=e[0]==="-",a=t[0]==="-";if(n&&!a){var r=Zt(e.slice(1),t);return"-".concat(r)}return n&&a?Hn(t.slice(1),e.slice(1)):!n&&a?Zt(e,t.slice(1)):Hn(e,t)}function cu(e,t){var n=e[0]==="-",a=t[0]==="-";if(n&&!a)return Hn(t,e.slice(1));if(n&&a){var r=Zt(t.slice(1),e.slice(1));return"-".concat(r)}return!n&&a?Hn(e,t.slice(1)):Zt(e,t)}function du(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!n)return Number(e).toFixed(t);if(typeof e!="string")return String(e);var a=e.split("."),r=me(a,2),l=r[0],i=r[1];if(!i)return t?[e,yn(t)].join("."):e;if(t===0)return Number(i[0])>=5?Zt(l,"1"):l;var o=i.slice(0,t);return i.length<t?o+=yn(t-i.length):o=Number(i[t])>=5?Zt(o,"1"):o,[l,o].join(".")}function fu(e){var t=e.split("e"),n=me(t,2),a=n[0],r=n[1],l=e.split("."),i=me(l,2),o=i[0],s=i[1],u=s===void 0?"":s,d=Number(r),v=u.split("e"),c=me(v,1),f=c[0];if(d>f.length){var p=yn(d-f.length);return a.replace(/(^0+|\.)/g,"")+p}var h=o.replace(/^0+/,"")+f.slice(0,d),y=f.slice(d);return y?[h,y].join("."):h}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function vu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e&&e!==0?!0:n&&ot(e)?Ht(e,t,n)<0:e<t}function pu(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e&&e!==0?!0:n&&ot(e)?Ht(e,t,n)>0:e>t}function ga(e,t){if(e==null||e==="")return e;if(e==="-")return 0;if(e[e.length-1]===".")return e.slice(0,-1);var n=(t==null?void 0:t.largeNumber)&&ot(e),a=e;(ot(e)&&e.includes("e")||It(e))&&(a=n?fu(e):Number(e)),(t==null?void 0:t.decimalPlaces)!==void 0&&(a=du(a,t.decimalPlaces,t.largeNumber));var r=n||(t==null?void 0:t.decimalPlaces)!==void 0?a:Number(a);if(String(r)!=="NaN")return r}function hu(e,t){if(e!==""){var n=t.max,a=t.min,r=t.lastValue,l=t.largeNumber;return ri(e)?l&&(ot(n)||n===1/0)&&(ot(a)||a===-1/0)?Ht(n,e,l)<0?n:Ht(a,e,l)>0?a:e:Math.max(Number(a),Math.min(Number(n),Number(e))):r}}function Wn(e,t){var n,a;if(!e||!t)return(e||0)+(t||0);var r=((n=e.toString().split(".")[1])===null||n===void 0?void 0:n.length)||0,l=((a=t.toString().split(".")[1])===null||a===void 0?void 0:a.length)||0;if(!r||!l)return e+t;var i=e,o=t,s=Math.abs(r-l),u=Math.pow(10,Math.max(r,l));if(s>0){var d=Math.pow(10,s);r>l?(i=Number(e.toString().replace(".","")),o=Number(t.toString().replace(".",""))*d):(i=Number(e.toString().replace(".",""))*d,o=Number(t.toString().replace(".","")))}else i=Number(e.toString().replace(".","")),o=Number(t.toString().replace(".",""));return(i+o)/u}function Yn(e,t){var n,a;if(!e||!t)return(e||0)-(t||0);var r=((n=e.toString().split(".")[1])===null||n===void 0?void 0:n.length)||0,l=((a=t.toString().split(".")[1])===null||a===void 0?void 0:a.length)||0,i=Math.pow(10,Math.max(r,l)),o=r>=l?r:l;return Number(((e*i-t*i)/i).toFixed(o))}function mu(e,t){return e<0&&t>0?Yn(t,Math.abs(e)):e<0&&t<0?Wn(Math.abs(e),Math.abs(t))*-1:e>0&&t<0?Yn(e,Math.abs(t)):Wn(e,t)}function gu(e,t){return e<0&&t>0?Wn(Math.abs(e),t)*-1:e<0&&t<0?Yn(Math.abs(t),Math.abs(e)):e>0&&t<0?Wn(e,Math.abs(t)):Yn(e,t)}function bu(e){var t=e.op,n=e.step,a=e.lastValue,r=a===void 0?0:a,l=e.max,i=e.min,o=e.largeNumber;if(n<=0)return be.error("InputNumber","step must be larger than 0."),r;var s=It(n)?String(n):n,u;return t==="add"?o&&ot(r)?u=cu(String(r),String(s)):u=mu(Number(r||0),Number(n)):t==="reduce"&&(o&&ot(r)?u=uu(String(r),String(s)):u=gu(Number(r||0),Number(n))),r===void 0&&(u=hu(u,{max:l,min:i,lastValue:r,largeNumber:o})),o?u:Number(u)}function yu(e){var t=e.largeNumber,n=e.value,a=e.max,r=e.min;if(t!==void 0){t&&It(n)&&be.warn("InputNumber","largeNumber value must be a string.");var l;return Ht(n,a,t)>0?l="exceed-maximum":Ht(n,r,t)<0?l="below-minimum":l=void 0,l}}function wu(e,t){if(!e&&typeof e=="string")return!0;var n=t&&ri(e)||!Number.isNaN(Number(e));return!(!n&&!["-",".","e","E"].includes(e.slice(-1)))}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Ja(){var e=L(function(){for(var t=zl(),n=t.parent;n;){if(n.proxy.$options.name==="TForm")return n.props.disabled;n=n.parent}return!1});return{formDisabled:e}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Cu(e,t){var n=ua(),a=n.classPrefix,r=n.sizeClassNames,l=n.statusClassNames,i=Pe(e),o=i.value,s=i.max,u=i.min,d=ia(o,e.defaultValue,e.onChange,"change"),v=me(d,2),c=v[0],f=v[1],p=H(),h=H(""),y=H(),m=Ja(),g=m.formDisabled,b=L(function(){return e.disabled||g.value}),C=H(),w=L(function(){return b.value||!pu(c.value,e.min,e.largeNumber)}),x=L(function(){return b.value||!vu(c.value,e.max,e.largeNumber)}),S=L(function(){var V;return["".concat(a.value,"-input-number"),r[e.size],(V={},A(V,l.disabled,b.value),A(V,"".concat(a.value,"-is-controls-right"),e.theme==="column"),A(V,"".concat(a.value,"-input-number--").concat(e.theme),e.theme),A(V,"".concat(a.value,"-input-number--auto-width"),e.autoWidth),V)]}),T=L(function(){return["".concat(a.value,"-input-number__decrease"),A({},l.disabled,w.value)]}),k=L(function(){return["".concat(a.value,"-input-number__increase"),A({},l.disabled,x.value)]}),_=function(j){var J,U;if(!j&&j!==0)return"";var Z=j||j===0?String(j):"";if(!((J=p.value)!==null&&J!==void 0&&(U=J.$el)!==null&&U!==void 0&&U.contains(document.activeElement))){var ve=ga(Z,{decimalPlaces:e.decimalPlaces,largeNumber:e.largeNumber});Z=ve||ve===0?String(ve):"",e.format&&(Z=String(e.format(j,{fixedNumber:Z})))}return Z};ce(c,function(V){var j=[void 0,null].includes(V)?"":String(V);h.value=_(j)},{immediate:!0}),Et(function(){h.value=_(c.value)}),ce([c,s,u],function(){var V;if(![void 0,"",null].includes(c.value)){var j=yu({value:c.value,largeNumber:e.largeNumber,max:e.max,min:e.min});C.value=j,(V=e.onValidate)===null||V===void 0||V.call(e,{error:j}),t.emit("validate",{error:j})}},{immediate:!0});var R=function(j){return bu({op:j,step:e.step,max:e.max,min:e.min,lastValue:c.value,largeNumber:e.largeNumber})},P=function(j){if(!(w.value||e.readonly)){var J=R("reduce");f(J,{type:"reduce",e:j})}},O=function(j){if(!(x.value||e.readonly)){var J=R("add");f(J,{type:"add",e:j})}},$=function(j,J){if(!!wu(j,e.largeNumber)){h.value=j;var U=J.e.inputType==="deleteContentBackward",Z=U||e.largeNumber||!j?j:Number(j);Z!==c.value&&!["-",".","e","E"].includes(j.slice(-1))&&f(Z,{type:"input",e:J.e})}},D=function(j,J){var U;h.value=_(c.value);var Z=ga(j,{decimalPlaces:e.decimalPlaces,largeNumber:e.largeNumber});Z!==j&&String(Z)!==j&&f(Z,{type:"blur",e:J.e}),(U=e.onBlur)===null||U===void 0||U.call(e,Z,J),t.emit("blur",Z,J)},N=function(j,J){var U;h.value=c.value||c.value===0?String(c.value):"",(U=e.onFocus)===null||U===void 0||U.call(e,j,J),t.emit("focus",j,J)},K=function(j,J){var U,Z=J.e,ve={ArrowUp:O,ArrowDown:P},we=Z.code||Z.key;ve[we]!==void 0&&ve[we](Z),(U=e.onKeydown)===null||U===void 0||U.call(e,j,J),t.emit("keydown",j,J)},E=function(j,J){var U;(U=e.onKeyup)===null||U===void 0||U.call(e,j,J),t.emit("keyup",j,J)},F=function(j,J){var U;(U=e.onKeypress)===null||U===void 0||U.call(e,j,J),t.emit("keypress",j,J)},B=function(j,J){var U;h.value=_(j);var Z=ga(j,{decimalPlaces:e.decimalPlaces,largeNumber:e.largeNumber});Z!==j&&String(Z)!==j&&f(Z,{type:"enter",e:J.e}),(U=e.onEnter)===null||U===void 0||U.call(e,Z,J),t.emit("enter",Z,J)},z=function(){p.value.focus()},M=function(){p.value.blur()},I={blur:D,focus:N,keydown:K,keyup:E,keypress:F,enter:B,click:z};return{classPrefix:a,wrapClasses:S,reduceClasses:T,addClasses:k,displayValue:y,tDisabled:b,isError:C,listeners:I,userInput:h,tValue:c,inputRef:p,formDisabled:g,focus:z,blur:M,handleReduce:P,handleAdd:O,onInnerInputChange:$}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Dr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Tr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var xu=Oe({name:"TInputNumber",props:iu,setup:function(t,n){var a=Cu(t,n),r=xt({AddIcon:as,RemoveIcon:rs,ChevronDownIcon:na,ChevronUpIcon:Bl}),l=r.AddIcon,i=r.RemoveIcon,o=r.ChevronDownIcon,s=r.ChevronUpIcon;return Tr(Tr({},a),{},{AddIcon:l,RemoveIcon:i,ChevronDownIcon:o,ChevronUpIcon:s})},render:function(){var t=arguments[0],n=this.AddIcon,a=this.RemoveIcon,r=this.ChevronDownIcon,l=this.ChevronUpIcon,i=this.theme==="column"?t(r,{attrs:{size:this.size}}):t(a,{attrs:{size:this.size}}),o=this.theme==="column"?t(l,{attrs:{size:this.size}}):t(n,{attrs:{size:this.size}}),s=this.isError?"error":this.status;return t("div",{class:this.wrapClasses},[this.theme!=="normal"&&t(et,{class:this.reduceClasses,attrs:{disabled:this.tDisabled,variant:"outline",shape:"square",icon:function(){return i}},on:{click:this.handleReduce}}),t(_n,fe([{ref:"inputRef",attrs:{disabled:this.tDisabled,readonly:this.readonly,autocomplete:"off",placeholder:this.placeholder,unselectable:this.readonly?"on":"off",autoWidth:this.autoWidth,align:this.align||(this.theme==="row"?"center":void 0),status:s,label:this.label,suffix:this.suffix}},{on:this.listeners},{scopedSlots:this.$scopedSlots},{props:this.inputProps},{attrs:{value:this.userInput},on:{change:this.onInnerInputChange}}])),this.theme!=="normal"&&t(et,{class:this.addClasses,attrs:{disabled:this.tDisabled,variant:"outline",shape:"square",icon:function(){return o}},on:{click:this.handleAdd}}),this.tips&&t("div",{class:"".concat(this.classPrefix,"-input__tips ").concat(this.classPrefix,"-input__tips--").concat(s)},[this.tips])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var _u=Fe(xu,ct);/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Ou={autoWidth:Boolean,borderless:Boolean,clearable:Boolean,collapsedItems:{type:Function},creatable:Boolean,disabled:Boolean,empty:{type:[String,Function]},filter:{type:Function},filterable:Boolean,inputProps:{type:Object},inputValue:{type:[String,Number]},defaultInputValue:{type:[String,Number]},keys:{type:Object},loading:Boolean,loadingText:{type:[String,Function]},max:{type:Number,default:0},minCollapsedNum:{type:Number,default:0},multiple:Boolean,options:{type:Array},panelBottomContent:{type:[String,Function]},panelTopContent:{type:[String,Function]},placeholder:{type:String,default:void 0},popupProps:{type:Object},popupVisible:Boolean,defaultPopupVisible:Boolean,prefixIcon:{type:Function},readonly:Boolean,reserveKeyword:Boolean,scroll:{type:Object},selectInputProps:{type:Object},showArrow:{type:Boolean,default:!0},size:{type:String,default:"medium",validator:function(t){return t?["small","medium","large"].includes(t):!0}},status:{type:String,validator:function(t){return t?["default","success","warning","error"].includes(t):!0}},tagInputProps:{type:Object},tagProps:{type:Object},tips:{type:[String,Function]},value:{type:[String,Number,Object,Array]},defaultValue:{type:[String,Number,Object,Array]},valueDisplay:{type:[String,Function]},valueType:{type:String,default:"value",validator:function(t){return t?["value","object"].includes(t):!0}},onBlur:Function,onChange:Function,onClear:Function,onCreate:Function,onEnter:Function,onFocus:Function,onInputChange:Function,onPopupVisibleChange:Function,onRemove:Function,onSearch:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Su={checkAll:Boolean,content:{type:[String,Function]},default:{type:[String,Function]},disabled:Boolean,label:{type:String,default:""},value:{type:[String,Number]}};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var ku={checkAll:Boolean,checked:Boolean,defaultChecked:Boolean,default:{type:[String,Function]},disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:{type:[String,Function]},name:{type:String,default:""},readonly:Boolean,value:{type:[String,Number]},onChange:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Rr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ba(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Rr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Pu=Mt("checkbox"),Da=Kt(Pu,jt).extend({name:"TCheckbox",inheritAttrs:!1,props:ba(ba({},ku),{},{stopLabelTrigger:Boolean}),inject:{checkboxGroup:{default:void 0}},data:function(){return{formDisabled:void 0}},computed:{labelClasses:function(){var t;return["".concat(this.componentName),(t={},A(t,this.commonStatusClassName.checked,this.checked$),A(t,this.commonStatusClassName.disabled,this.disabled$),A(t,this.commonStatusClassName.indeterminate,this.indeterminate$),t)]},disabled$:function(){var t,n;return this.formDisabled?this.formDisabled:!this.checkAll&&!this.checked$&&(t=this.checkboxGroup)!==null&&t!==void 0&&t.maxExceeded?!0:this.disabled!==void 0?this.disabled:!!((n=this.checkboxGroup)!==null&&n!==void 0&&n.disabled)},name$:function(){var t;return this.name||((t=this.checkboxGroup)===null||t===void 0?void 0:t.name)},checked$:function(){var t;return this.checkAll?(t=this.checkboxGroup)===null||t===void 0?void 0:t.isCheckAll:this.checkboxGroup?!!this.checkboxGroup.checkedMap[this.value]:this.checked},indeterminate$:function(){var t;return this.checkAll?(t=this.checkboxGroup)===null||t===void 0?void 0:t.indeterminate:this.indeterminate}},render:function(){var t=arguments[0];return t("label",{class:this.labelClasses,attrs:{title:this.$attrs.title}},[t("input",fe([{attrs:{type:"checkbox"}},{on:ba({},ei(this.$listeners,["checked","change"]))},{class:"".concat(this.componentName,"__former"),attrs:{disabled:this.disabled$,readonly:this.readonly,indeterminate:this.indeterminate$,name:this.name$},domProps:{value:this.value,checked:this.checked$},on:{change:this.handleChange}}])),t("span",{class:"".concat(this.componentName,"__input")}),t("span",{class:"".concat(this.componentName,"__label"),on:{click:this.handleLabelClick}},[an(this,"default","label")])])},methods:{handleLabelClick:function(t){this.stopLabelTrigger&&t.preventDefault()},handleChange:function(t){var n,a=!this.checked$;Tt(this,"change",a,{e:t}),t.stopPropagation(),this===null||this===void 0||(n=this.checkboxGroup)===null||n===void 0||n.$emit("checked-change",{checked:a,checkAll:this.checkAll,e:t,option:this.$props})}}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Du={disabled:Boolean,max:{type:Number,default:void 0},name:{type:String,default:""},options:{type:Array,default:function(){return[]}},value:{type:Array,default:function(){return[]}},defaultValue:{type:Array,default:function(){return[]}},onChange:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Er(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function $r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Er(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Er(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Tu=Mt("checkbox"),Ru=Kt(Tu).extend({name:"TCheckboxGroup",components:{Checkbox:Da},props:$r({},Du),data:function(){return{checkedMap:{},optionList:[]}},provide:function(){return{checkboxGroup:this}},watch:{values:{immediate:!0,handler:function(){if(this.value instanceof Array){var t={};this.value.forEach(function(n){t[n]=!0}),this.checkedMap=t}}},options:{immediate:!0,deep:!0,handler:function(){var t=this;if(!this.options)return[];this.optionList=this.options.map(function(n){var a={};return Ne(n)!=="object"?a={label:String(n),value:n}:(a=$r({},n),a.disabled=a.disabled===void 0?t.disabled:a.disabled),a})}}},computed:{values:function(){return this.value instanceof Array?this.value.join():""},intersectionLen:function(){var t=this.optionList.map(function(a){return a.value});if(this.value instanceof Array){var n=aa(this.value,t);return n.length}return 0},isCheckAll:function(){return this.value instanceof Array&&this.value.length!==this.optionList.length-1?!1:this.intersectionLen===this.optionList.length-1},indeterminate:function(){return!this.isCheckAll&&this.intersectionLen<this.optionList.length&&this.intersectionLen!==0},maxExceeded:function(){return this.max!==void 0&&this.value.length===this.max}},mounted:function(){var t;this.$scopedSlots.default&&(t=this.options)!==null&&t!==void 0&&t.length&&console.warn("TDesign CheckboxGroup Warn: both `options` and slot exist, rendered by `options`")},created:function(){this.$on("checked-change",this.onCheckedChange)},render:function(){var t,n=this,a=arguments[0],r=null;if((t=this.options)!==null&&t!==void 0&&t.length){var l;r=(l=this.optionList)===null||l===void 0?void 0:l.map(function(o,s){return a(Da,fe([{key:s},{props:o},{attrs:{checked:n.checkedMap[o.value]}}]),[n.renderLabel(o)])})}else{var i=this.$scopedSlots.default&&this.$scopedSlots.default(null);this.optionList=this.getOptionListBySlots(i),r=i}return a("div",{class:"".concat(this.componentName,"-group"),on:{click:function(s){return n.$emit("click",s)}}},[r])},methods:{onCheckedChange:function(t){var n=t.checked,a=t.checkAll,r=t.e;a?this.onCheckAllChange(n,{e:r}):this.handleCheckboxChange(t)},getOptionListBySlots:function(t){var n=[];return t==null||t.forEach(function(a){var r,l=a==null||(r=a.componentOptions)===null||r===void 0?void 0:r.propsData;l&&n.push(l)}),n},renderLabel:function(t){return typeof t.label=="function"?t.label(this.$createElement):t.label},emitChange:function(t,n){Tt(this,"change",t,n)},handleCheckboxChange:function(t){var n=t.option.value;if(this.value instanceof Array){var a=oe(this.value);if(t.checked)a.push(n);else{var r=a.indexOf(n);a.splice(r,1)}this.emitChange(a,{e:t.e,current:t.option.value,option:t.option,type:t.checked?"check":"uncheck"})}else console.warn("TDesign CheckboxGroup Warn: `value` must be an array, instead of ".concat(Ne(this.value)))},getAllCheckboxValue:function(){for(var t=new Set,n=0,a=this.optionList.length;n<a;n++){var r=this.optionList[n];if(!r.checkAll&&(t.add(r.value),this.maxExceeded))break}return oe(t)},onCheckAllChange:function(t,n){var a=t?this.getAllCheckboxValue():[];this.emitChange(a,{e:n.e,type:t?"check":"uncheck",current:void 0,option:void 0})}}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var qn=Fe(rn(["checked"],{model:{prop:"checked",event:"change"}})(Da)),ii=Fe(rn(["value"],{model:{prop:"value",event:"change"}})(Ru));/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Eu(e,t,n,a){if(!window||!window.IntersectionObserver)return n(),null;var r=null;try{r=new window.IntersectionObserver(function(l){var i=l[0];i.isIntersecting&&(n(),r.unobserve(e))},{rootMargin:"0px 0px ".concat(a,"px 0px"),root:t}),r.observe(e)}catch(l){console.error(l),n()}return r}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function si(e,t,n){var a=L(function(){return Math.max(n.rowHeight||48,48)}),r=H(n.rowIndex===0),l=L(function(){return(n==null?void 0:n.type)==="lazy"&&!r.value}),i=(typeof window>"u"?!1:window.requestAnimationFrame)||function(s){return setTimeout(s,16.6)},o=function(){r.value||i(function(){r.value=!0})};return Et(function(){(n==null?void 0:n.type)==="lazy"&&ra(function(){var s=Math.max(10,n.bufferSize||10),u=a.value*s;Eu(t.value,e==null?void 0:e.value,o,u)})}),{hasLazyLoadHolder:l,tRowHeight:a}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function ui(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=$u(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(u){throw u},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,i=!1,o;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return l=u.done,u},e:function(u){i=!0,o=u},f:function(){try{!l&&n.return!=null&&n.return()}finally{if(i)throw o}}}}function $u(e,t){if(!!e){if(typeof e=="string")return Kr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kr(e,t)}}function Kr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var Ta=function(t,n){var a=ui(n),r;try{for(a.s();!(r=a.n()).done;){var l=r.value;if(l.value===t)return(l==null?void 0:l.label)||String(l.value)}}catch(i){a.e(i)}finally{a.f()}return t!=null?String(t):void 0},Ku=function(t,n){var a=[],r=ui(t),l;try{for(r.s();!(l=r.n()).done;){var i=l.value,o=Ta(i,n);o&&a.push(o)}}catch(s){r.e(s)}finally{r.f()}return a},Ra=function(t,n){var a=oa(t),r=a.indexOf(n);return r<0?a.push(n):a.splice(r,1),{value:a,isCheck:r<0}};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Ar(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Fr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ar(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ar(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Au=$s(),Ga=Oe({name:"TOption",props:Fr(Fr({},Su),{},{isCreatedOption:Boolean,multiple:Boolean,rowIndex:Number,trs:Map,scrollType:String,isVirtual:Boolean,bufferSize:Number,index:Number}),components:{TCheckbox:qn},mixins:[Au],directives:{Ripple:Rs},setup:function(t,n){var a=Va("tSelect"),r=H(null),l=ua(),i=l.sizeClassNames,o=l.statusClassNames,s=ke("classPrefix"),u=s.classPrefix,d=Pe(t),v=d.value,c=d.label,f=d.disabled,p=d.panelElement,h=d.scrollType,y=d.bufferSize,m=d.index,g=d.multiple,b=d.isCreatedOption,C=si(p,r,xn({type:h,bufferSize:y,rowIndex:t.rowIndex})),w=C.hasLazyLoadHolder,x=w===void 0?null:w,S=C.tRowHeight,T=S===void 0?null:S,k=H(!1),_=H(void 0),R=L(function(){return _.value||f.value||a.isReachMaxLimit.value}),P=L(function(){var E;return g.value?(E=a.selectValue.value)===null||E===void 0?void 0:E.includes(t.value):a.selectValue.value===t.value}),O=function(F){k.value=F},$=L(function(){return c.value||v.value}),D=L(function(){var E;return["".concat(u.value,"-select-option"),i[a&&a.size.value],(E={},A(E,o.disabled,R.value),A(E,o.selected,P.value),A(E,"".concat(u.value,"-select-option__hover"),(k.value||a.hoverIndex.value===m.value)&&!R.value&&!P.value),E)]}),N=function(F){if(!(g.value||R.value)){if(F.stopPropagation(),b.value){var B;if((B=a.handleCreate)===null||B===void 0||B.call(a,v.value),a.multiple.value){var z=Ra(a.selectValue.value,v.value);a.handleValueChange(z.value,{e:F,trigger:"check"},v.value);return}}a.handleValueChange(v.value,{e:F,trigger:"check"},v.value),a.handlePopupVisibleChange(!1,{e:F})}},K=function(F,B){var z=Ra(a.selectValue.value,v.value);a.handleValueChange(z.value,{e:B.e,trigger:F?"check":"uncheck"},v.value),a.reserveKeyword.value||a.handlerInputChange("")};return Et(function(){var E=t.trs,F=t.rowIndex,B=t.scrollType,z=t.isVirtual;B==="virtual"&&z&&(E.set(F,r.value),n.emit("onRowMounted"))}),Ha(function(){if(t.isVirtual){var E=t.trs,F=t.rowIndex;E.delete(F)}}),{isHover:k,isSelected:P,mouseEvent:O,classes:D,selectProvider:a,labelText:$,optionNode:r,tRowHeight:T,hasLazyLoadHolder:x,handleClick:N,handleCheckboxClick:K}},render:function(){var t=arguments[0],n=this.classes,a=this.multiple,r=this.labelText,l=this.isSelected,i=this.disabled,o=this.selectProvider,s=this.handleCheckboxClick,u=this.mouseEvent,d=an(this,"default","content"),v=d||t("span",[r]);return this.hasLazyLoadHolder?t("li",{ref:"optionNode",class:n,on:{mouseenter:function(){return u(!0)},mouseleave:function(){return u(!1)},click:this.handleClick},directives:[{name:"ripple",value:this.keepAnimation.ripple}]},[t("span",{style:{height:"".concat(this.tRowHeight,"px"),border:"none"}})]):t("li",{ref:"optionNode",class:n,on:{mouseenter:function(){return u(!0)},mouseleave:function(){return u(!1)},click:this.handleClick},directives:[{name:"ripple",value:this.keepAnimation.ripple}]},[a?t("t-checkbox",{attrs:{checked:l,disabled:i||!l&&o.isReachMaxLimit.value},on:{change:s}},[v]):t("span",[v])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Nr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function jr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var ci=function(t){var n=t.data,a=t.container,r=t.fixedHeight,l=r===void 0?!1:r,i=t.lineHeight,o=i===void 0?30:i,s=t.bufferSize,u=s===void 0?20:s,d=t.threshold,v=d===void 0?100:d,c=xn({visibleData:[],cachedHeight:[],cachedScrollY:[]}),f=L(function(){return n.value.length>v}),p=H(0),h=new Map,y=0,m=0,g=0,b=0,C=0,w=0,x=function(){n.value.forEach(function(N,K){N.$index=K,l&&(c.cachedScrollY[K]=K*o)}),l||(c.cachedScrollY[n.value.length-1]=void 0)};x();var S=L(function(){var D=c.cachedHeight,N=D.length;if(N){var K=D.reduce(function(F,B){return F+B||o},0);if(D.length===n.value.length)return K;var E=K/D.length;return K+(n.value.length-D.length)*E}return f.value?n.value.length*o:0}),T=L(function(){var D=c.visibleData,N=D[0];return N?D.length===1?0:c.cachedScrollY[N.$index]:0}),k=function(){w=Math.min(C+y+u*2,n.value.length),c.visibleData=n.value.slice(C,w)},_=function(){var N,K=h.get(g);if(!!K){var E=K==null||(N=K.getBoundingClientRect())===null||N===void 0?void 0:N.height;c.cachedScrollY[g]=a.value.scrollTop-b,c.cachedHeight[g]=E;for(var F=g+1;F<=c.visibleData[c.visibleData.length-1].$index;F++){var B,z=h.get(F),M=((B=z)===null||B===void 0?void 0:B.getBoundingClientRect())||{},I=M.height;c.cachedHeight[F]=I;var V=c.cachedScrollY[F-1]+c.cachedHeight[F-1];c.cachedScrollY.splice(F,1,V)}for(var j=g-1;j>=c.visibleData[0].$index;j--){var J,U=h.get(j),Z=((J=U)===null||J===void 0?void 0:J.getBoundingClientRect())||{},ve=Z.height;c.cachedHeight[j]=ve;var we=c.cachedScrollY[j+1]-c.cachedHeight[j];c.cachedScrollY.splice(j,1,we)}if(c.cachedScrollY[0]>0){for(var ye=c.cachedScrollY[0],Te=Math.min(w,n.value.length),Ve=0;Ve<Te;Ve++)c.cachedScrollY.splice(Ve,1,c.cachedScrollY[Ve]-ye);var it=c.cachedScrollY[g-1]?c.cachedScrollY[g-1]+b:b;a.value.scrollTop=it,m=it}if(c.cachedScrollY[C]<0){var Ee=c.cachedHeight.slice(0,Math.max(0,g)).reduce(function(Ge,dt){return Ge+dt},0)+b;a.value.scrollTop=Ee,m=Ee,Ee===0&&(g=0,b=0)}ra(function(){var Ge=a.value,dt=Ge.scrollTop,mt=Ge.scrollHeight,_t=Ge.clientHeight;if(dt+_t===mt)for(var Be=w-1;Be>=C;Be--)Be===w-1?c.cachedScrollY.splice(Be,1,mt.value-c.cachedHeight[Be]):c.cachedScrollY.splice(Be,1,c.cachedScrollY[Be+1]-c.cachedHeight[Be])})}},R=function(){if(!!f.value&&!!a.value){var N=a.value.scrollTop,K=N-m;m=N,K+=b;var E=g;if(!!K){if(K>=0){for(;E<n.value.length&&K>(c.cachedHeight[E]||o);)c.cachedHeight[E]||(c.cachedHeight[E]=o),K-=c.cachedHeight[E],E++;E>=n.value.length?(g=n.value.length-1,b=0):(g=E,b=K);var F=a.value,B=F.clientHeight,z=F.scrollHeight;N+B===z&&(g=n.value.length-y+1),C<=g-u&&(C=Math.min(n.value.length-y,g-u),C<0&&(C=0))}else{for(;K<0;)E--,c.cachedHeight[E]||(c.cachedHeight[E]=o),K+=c.cachedHeight[E];E<0?(g=0,b=0):(g=E,b=K),_(),C>g-u&&(C=Math.max(0,g-u))}k()}}};!l&&ce(p,_,{flush:"post"});var P=function(){!f.value||p.value++};ce(n,function(){x(),c.visibleData=[],c.cachedScrollY=[],c.cachedHeight=[],m=0,g=0,b=0,C=0,h.clear(),n.value.length<=v?c.visibleData=n.value:k(),a.value&&(a.value.scrollTop=0)});var O=!1,$=function(){O&&(y=Math.ceil(a.value.offsetHeight/o),k())};return Et(function(){if(!(!window||!window.IntersectionObserver)){var D=new window.IntersectionObserver(function(N){var K=N[0];(K.isIntersecting||K.intersectionRatio)&&(O=!0,f.value&&$(),D.unobserve(a.value))});a.value&&D.observe(a.value)}}),jr(jr({trs:h,scrollHeight:S},Pe(c)),{},{translateY:T,handleScroll:R,handleRowMounted:P,refreshContainer:$,fixedHeight:l,calculateScrollY:_})};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Ir(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ir(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ir(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Fu={small:"s",medium:"m",large:"l"},Nu=Oe({name:"TSelectPanel",components:{TOption:Ga},props:["inputValue","panelTopContent","panelBottomContent","size","options","empty","filter","loading","loadingText","multiple","scroll","creatable","filterable"],setup:function(t){var n,a=Pe(t),r=a.options,l=a.inputValue,i=$t(),o=ke("select"),s=o.t,u=o.global,d=Va("tSelect"),v=Ya("select"),c=L(function(){return d.getOverlayElm()}),f=t.scroll||{},p=f.type,h=f.rowHeight,y=h===void 0?28:h,m=f.bufferSize,g=m===void 0?20:m,b=f.isFixedRowHeight,C=b===void 0?!1:b,w=f.threshold,x=w===void 0?100:w,S=L(function(){if(!l.value||!(t.filterable||xe(t.filter)))return r.value;var U=function(ye){var Te;return xe(t.filter)?t.filter("".concat(t.inputValue),ye):((Te=ye.label)===null||Te===void 0?void 0:Te.indexOf("".concat(t.inputValue)))>-1},Z=[],ve=k.value?1:0;return t.options.forEach(function(we){we.group&&we.children&&Z.push(gt(gt({},we),{},{children:we.children.filter(U).reduce(function(ye,Te){return ye.push(gt(gt({},Te),{},{index:ve})),ve+=1,ye},[])})),U(we)&&Z.push(gt(gt({},we),{},{index:ve+Z.length}))}),Z}),T=function(){var Z=[];return k.value&&Z.push({label:String(l.value),value:String(l.value),isCreated:!0}),Z.push.apply(Z,oe(S.value)),Z},k=L(function(){return!!(t.creatable&&t.filterable&&t.inputValue)}),_=L(function(){return!(S.value.length>0)}),R=L(function(){var U,Z,ve;return((U=t.scroll)===null||U===void 0?void 0:U.type)==="virtual"&&((Z=t.options)===null||Z===void 0?void 0:Z.length)>(((ve=t.scroll)===null||ve===void 0?void 0:ve.threshold)||100)}),P=p==="virtual"?ci({container:c,data:S,fixedHeight:C,lineHeight:y,bufferSize:g,threshold:x}):{},O=P.trs,$=O===void 0?null:O,D=P.visibleData,N=D===void 0?null:D,K=P.handleScroll,E=K===void 0?null:K,F=P.scrollHeight,B=F===void 0?null:F,z=P.translateY,M=z===void 0?null:z,I=P.handleRowMounted,V=I===void 0?null:I,j=-1,J=function(Z){if(!!R.value){var ve=Z.target||Z.srcElement,we=ve.scrollTop;Math.abs(j-we)>5?(E(),j=we):j=-1}};return Et(function(){var U;((U=t.scroll)===null||U===void 0?void 0:U.type)==="virtual"&&d.getOverlayElm().addEventListener("scroll",J)}),Ha(function(){var U;((U=t.scroll)===null||U===void 0?void 0:U.type)==="virtual"&&d.getOverlayElm().removeEventListener("scroll",J)}),{t:s,global:u,isEmpty:_,renderTNode:i,selectProvider:d,isCreateOptionShown:k,trs:$,isVirtual:R,onInnerVirtualScroll:J,visibleData:N,scrollHeight:B,translateY:M,scrollType:(n=t.scroll)===null||n===void 0?void 0:n.type,handleRowMounted:V,bufferSize:g,threshold:x,displayOptions:S,getDisplayOptions:T,componentName:v}},methods:{renderEmptyContent:function(){var t=this.$createElement,n=this.empty,a=this.t,r=this.global;return n&&typeof n=="string"?t("div",{class:"".concat(this.componentName,"__empty")},[n]):vr(this,"empty",t("div",{class:"".concat(this.componentName,"__empty")},[a(r.empty)]))},renderLoadingContent:function(){var t=this.$createElement,n=this.loadingText,a=this.t,r=this.global;return n&&typeof n=="string"?t("div",{class:"".concat(this.componentName,"__loading-tips")},[n]):vr(this,"loadingText",t("div",{class:"".concat(this.componentName,"__loading-tips")},[a(r.loadingText)]))},renderCreateOption:function(){var t=this.$createElement,n=this.inputValue,a=this.trs,r=this.scrollType,l=this.isVirtual,i=this.handleRowMounted,o=this.bufferSize,s=l?{onRowMounted:i}:{};return t("ul",{class:["".concat(this.componentName,"__create-option"),"".concat(this.componentName,"__list")]},[t("t-option",fe([{attrs:{index:0,isCreatedOption:!0,value:n,label:n,trs:a,scrollType:r,isVirtual:l,bufferSize:o},class:"".concat(this.componentName,"__create-option--special")},{on:s}]))])},renderOptionsContent:function(t){var n=this,a=this.$createElement,r=this.multiple,l=this.trs,i=this.scrollType,o=this.isVirtual,s=this.handleRowMounted,u=this.bufferSize,d=o?{onRowMounted:s}:{};return a("ul",{class:"".concat(this.componentName,"__list")},[t.map(function(v,c){if(v.group)return a("t-option-group",{attrs:{label:v.group,divider:v.divider}},[n.renderOptionsContent(v.children)]);var f=o?{rowIndex:v.$index,trs:l,scrollType:i,isVirtual:o,bufferSize:u}:{key:c};return a("t-option",fe([{class:v.class,style:v.style,props:gt({},gt(gt({},v),f)),attrs:{multiple:r},scopedSlots:{default:v.slots},key:"".concat(v.$index||"","_").concat(c)},{on:d}]))})])},renderPanelContent:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=this.$createElement,a=this.renderTNode,r=this.isEmpty,l=this.isCreateOptionShown,i=this.size,o=this.loading,s=this.isVirtual,u=this.visibleData,d=this.displayOptions;return n("div",{class:["".concat(this.componentName,"__dropdown-inner"),"".concat(this.componentName,"__dropdown-inner--size-").concat(Fu[i])],style:t},[a("panelTopContent"),l&&this.renderCreateOption(),o&&this.renderLoadingContent(),!o&&r&&!l&&this.renderEmptyContent(),!o&&!r&&this.renderOptionsContent(s&&u?u:d),a("panelBottomContent")])}},render:function(){var t=arguments[0],n=this.translateY,a=this.scrollHeight,r=this.isVirtual;if(r){var l="translate(0, ".concat(a,"px)"),i={position:"absolute",width:"1px",height:"1px",transition:"transform 0.2s",transform:l,"-ms-transform":l,"-moz-transform":l,"-webkit-transform":l},o="translate(0, ".concat(n,"px)"),s={transform:o,"-ms-transform":o,"-moz-transform":o,"-webkit-transform":o};return t("div",[t("div",{style:gt({},i)}),this.renderPanelContent(s)])}return this.renderPanelContent()}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Mr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ju(e,t,n){var a=H([]),r=function(){var s,u=0,d=((s=e.options)===null||s===void 0?void 0:s.map(function(p){var h=function(m){var g=n.value,b=g.value,C=g.label,w=bt(bt({},m),{},{index:u,label:Q(m,C),value:Q(m,b)});return u+=1,w};return p.group&&p.children?bt(bt({},p),{},{children:p.children.map(function(y){return h(y)})}):h(p)}))||[],v=t.proxy.$slots.default||[],c=v.filter(function(p){var h;return((h=p.componentOptions)===null||h===void 0?void 0:h.tag)==="t-option"}),f=v.filter(function(p){var h;return((h=p.componentOptions)===null||h===void 0?void 0:h.tag)==="t-option-group"});fn(f)&&f.forEach(function(p){var h,y=bt(bt({group:(h=p.componentOptions.propsData)===null||h===void 0?void 0:h.label},p.componentOptions.propsData),{},{children:[]}),m=p.componentOptions.children;fn(m)&&m.forEach(function(g){y.children.push(bt(bt({class:g.data.staticClass,style:g.data.staticStyle},g.componentOptions.propsData),{},{slots:function(){return g.componentOptions.children},index:u})),u+=1}),d.push(y)}),fn(c)&&c.forEach(function(p){d.push(bt(bt({class:p.data.staticClass,style:p.data.staticStyle},p.componentOptions.propsData),{},{slots:function(){return p.componentOptions.children},index:u})),u+=1}),a.value=d},l=L(function(){var o=new Map;return i.value.forEach(function(s){o.set(s.value,s)}),o}),i=L(function(){var o=[],s=function u(d){d.forEach(function(v){v.group?u(v.children):o.push(v)})};return s(a.value),o});return r(),ce(function(){return e.options},function(){r()}),os(function(){r()}),{options:a,optionsMap:l,optionsList:i}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Iu=["overlayClassName"];function Lr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function qt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Ea=Oe({name:"TSelect",props:qt({},Ou),components:{TInput:_n,TLoading:bn,Tag:js,Popup:Ul,TOption:Ga,FakeArrow:lu,SelectPanel:Nu},setup:function(t,n){var a=ke("select"),r=a.t,l=a.global,i=$t(),o=zl(),s=H(null),u=H(),d=H(250),v=Ja(),c=v.formDisabled,f=Ya("select"),p=ke("classPrefix"),h=p.classPrefix,y=Pe(t),m=y.valueType,g=y.disabled,b=y.size,C=y.value,w=y.multiple,x=y.placeholder,S=y.loading,T=y.max,k=y.reserveKeyword,_=y.inputValue,R=y.popupVisible,P=y.minCollapsedNum,O=y.creatable,$=L(function(){var te,W;return{label:((te=t.keys)===null||te===void 0?void 0:te.label)||"label",value:((W=t.keys)===null||W===void 0?void 0:W.value)||"value"}}),D=ju(t,o,$),N=D.options,K=D.optionsMap,E=D.optionsList,F=ia(C,t.defaultValue,t.onChange,"change"),B=me(F,2),z=B[0],M=B[1],I=L(function(){var te=m.value==="object",W=z.value;if(!w.value&&fn(W)&&(be.warn("Select",'Invalid value for "value" props: got an Array when multiple was set to false'),W=te?{}:""),w.value&&!fn(W)&&(be.warn("Select",'Invalid value for "value" props: expected an Array when multiple was set to true'),W=[]),te){if(w.value)return W.filter(function(ee){var _e=Vt(ee);return _e||be.warn("Select",'Invalid value for "value" props: expected an Object, but got '.concat(Ne(ee))),_e}).map(function(ee){return ee[$.value.value]});var G=Vt(W);return G?W[$.value.value]:(be.warn("Select",'Invalid value for "value" props: expected an Object, but got '.concat(Ne(W))),"")}return W}),V=function(W,G,ee){if(W!==z.value){var _e=[],Ce=$.value,$e=Ce.value,de=Ce.label,je=new Map;w.value&&z.value.forEach(function(Ie){je.set(Ie[$e],Ie)});var ze=function(Ye){var Re=K.value.get(Ye);return Re&&delete Re.index,Re},Ke=function(Ye){var Re,De=K.value.get(Ye)||je.get(Ye);return De&&delete De.index,Re={},A(Re,$e,Q(De,$e)),A(Re,de,Q(De,de)),Re};w.value?W.forEach(function(Ie){return _e.push(ze(Ie))}):_e.push(ze(W)),m.value==="object"&&(W=w.value?W.map(function(Ie){return Ke(Ie)}):Ke(W));var nt=qt(qt({},G),{},{selectedOptions:_e});ee&&(nt.option=ze(ee)),M(W,nt)}},j=Rt(_,t.defaultInputValue||"",t.onInputChange,"inputValue","input-change"),J=me(j,2),U=J[0],Z=J[1],ve=Rt(R,t.defaultPopupVisible,function(te,W){var G;(G=t.onPopupVisibleChange)===null||G===void 0||G.call(t,te,W),o.emit("visible-change",te)},"popupVisible","popup-visible-change"),we=me(ve,2),ye=we[0],Te=we[1],Ve=L(function(){return c.value||g.value}),it=L(function(){return S.value&&!Ve.value}),Ee=L(function(){return Boolean(t.filterable||l.value.filterable||xe(t.filter))}),Ge=L(function(){return w.value&&T.value!==0&&T.value<=I.value.length}),dt=L(function(){var te,W;return(te=!w.value&&ye.value&&(m.value==="object"&&(((W=z.value)===null||W===void 0?void 0:W[$.value.label])||I.value)||Ta(I.value,E.value))||x.value)!==null&&te!==void 0?te:r(l.value.placeholder)}),mt=L(function(){if(w.value)return m.value==="object"?z.value.map(function(W){return W[$.value.label]}):Ku(I.value,E.value);if(m.value==="object"){var te;return((te=z.value)===null||te===void 0?void 0:te[$.value.label])||I.value}return Ta(I.value,E.value)}),_t=L(function(){var te=w.value?I.value.map(function(W){var G;return{value:W,label:(G=K.value.get(W))===null||G===void 0?void 0:G.label}}):I.value;return{value:te,onClose:w.value?function(W){return ft(W)}:function(){}}}),Be=L(function(){return w.value?{value:I.value,collapsedSelectedItems:I.value.slice(P.value),count:I.value.length-P.value}:{}}),ft=function(W,G){var ee,_e=G||{},Ce=_e.e;if(Ce==null||Ce.stopPropagation(),!Ve.value){var $e=oa(I.value),de=$e[W];$e.splice(W,1),V($e,{e:Ce,trigger:"tag-remove"});var je={value:de,data:K.value.get(de),e:Ce};o.emit("remove",je),(ee=t.onRemove)===null||ee===void 0||ee.call(t,je)}},st=function(){var W;if(!!U.value){var G=U.value;w.value&&Z(""),o.emit("create",G),(W=t.onCreate)===null||W===void 0||W.call(t,G)}},At=function(W){var G,ee=W.e;ee==null||ee.stopPropagation(),w.value?V([],{trigger:"clear",e:ee}):V("",{trigger:"clear",e:ee}),o.emit("clear",{e:ee}),(G=t.onClear)===null||G===void 0||G.call(t,{e:ee})},Ft=function(W,G){G.trigger==="blur"||!ye.value||(Z(W),ae())},se=function(W,G){var ee=G.trigger,_e=G.index,Ce=G.e;ee==="clear"&&V([],{trigger:"tag-remove",e:Ce}),["tag-remove","backspace"].includes(ee)&&ft(_e)},q=function(W,G){var ee;o.emit("focus",{value:W,e:G==null?void 0:G.e}),(ee=t.onFocus)===null||ee===void 0||ee.call(t,{value:W,e:G==null?void 0:G.e})},X=function(W,G){var ee;o.emit("blur",{value:W,e:G==null?void 0:G.e}),(ee=t.onBlur)===null||ee===void 0||ee.call(t,{value:W,e:G==null?void 0:G.e})},ne=function(W,G){var ee;o.emit("enter",{value:W,e:G==null?void 0:G.e,inputValue:U.value}),(ee=t.onEnter)===null||ee===void 0||ee.call(t,{value:W,e:G==null?void 0:G.e,inputValue:U.value.toString()}),O.value&&re.value<1&&st()},ae=Wa(function(){var te;o.emit("search",U.value),(te=t.onSearch)===null||te===void 0||te.call(t,U.value.toString())},300),le=function(){var W;try{var G=n.refs.selectInputRef.$refs.selectInputRef.$refs;W=G.overlay||G.component.$refs.overlay}catch(ee){be.warn("Select",ee)}return W},he=function(W){var G;if(((G=t.scroll)===null||G===void 0?void 0:G.type)!=="virtual"){var ee=le();if(!!ee){var _e=ee==null?void 0:ee.querySelector(".".concat(h.value,"-is-selected"));ra(function(){if(_e&&W){var Ce=getComputedStyle(_e),$e=Ce.paddingBottom,de=getComputedStyle(W),je=de.marginBottom,ze=parseInt($e,10)+parseInt(je,10),Ke=_e.offsetTop-W.offsetTop-(W.clientHeight-_e.clientHeight)+ze;W.scrollTop=Ke}})}}},re=H(-1),pe=function(W){var G,ee=[],_e=function Ye(Re){Re.forEach(function(De){De.group?Ye(De.children):ee.push(De)})};_e((G=u.value)===null||G===void 0?void 0:G.getDisplayOptions());var Ce=ee.length,$e=function(){for(var Re=0;re.value<Ce;){var De;if(!((De=ee[re.value])!==null&&De!==void 0&&De.disabled)||(re.value===Ce-1?re.value=0:re.value+=1,Re+=1,Re>=Ce))break}},de=function(){for(var Re=0;re.value>-1;){var De;if(!((De=ee[re.value])!==null&&De!==void 0&&De.disabled)||(re.value===0?re.value=Ce-1:re.value-=1,Re+=1,Re>=Ce))break}};if(Ce!==0){var je=["ArrowDown","ArrowUp","Enter","Escape","Tab"];switch(je.includes(W.code)&&W.preventDefault(),W.code){case"ArrowDown":if(re.value===-1){re.value=0;return}re.value<Ce-1?(re.value+=1,$e()):(re.value=0,$e());break;case"ArrowUp":if(re.value===-1){re.value=0;return}re.value>0?(re.value-=1,de()):(re.value=Ce-1,de());break;case"Enter":if(re.value===-1)return;if(ee[re.value].isCreated&&w.value&&st(),w.value){var Ke;if(re.value===-1)return;var nt=(Ke=ee[re.value])===null||Ke===void 0?void 0:Ke.value;if(!nt)return;var Ie=Ra(I.value,nt);V(Ie.value,{e:W,trigger:Ie.isCheck?"check":"uncheck"},nt)}else{var ze=ee[re.value].value;V(ze,{e:W,trigger:"check"},ze),Te(!1,{e:W})}break;case"Escape":case"Tab":Te(!1,{trigger:"keydown-esc",e:W}),Z("");break}}};return ce(ye,function(te){te&&He(document,"keydown",pe),!te&&Le(document,"keydown",pe)},{flush:"sync"}),ce(ye,function(te){te?re.value=-1:U.value&&Z("")}),Pa("tSelect",{size:b,multiple:w,popupOpenTime:d,hoverIndex:re,selectValue:I,reserveKeyword:k,isReachMaxLimit:Ge,getOverlayElm:le,handleCreate:st,handleValueChange:V,handlerInputChange:Z,handlePopupVisibleChange:Te}),{isFilterable:Ee,isDisabled:Ve,isLoading:it,innerOptions:N,placeholderText:dt,selectInputRef:s,selectPanelRef:u,innerPopupVisible:ye,displayText:mt,tInputValue:U,collapsedItemsParams:Be,valueDisplayParams:_t,handleFocus:q,handleBlur:X,handleEnter:ne,handleClear:At,handleTagChange:se,handleTInputValueChange:Ft,setInnerPopupVisible:Te,removeTag:ft,renderTNode:i,updateScrollTop:he,componentName:f}},methods:{renderSuffixIcon:function(){var t=this.$createElement,n=this.isLoading,a=this.showArrow,r=this.innerPopupVisible,l=this.isDisabled;return n?t("t-loading",{class:["".concat(this.componentName,"__right-icon"),"".concat(this.componentName,"__active-icon")],attrs:{size:"small"}}):a?t("fake-arrow",{attrs:{overlayClassName:"".concat(this.componentName,"__right-icon"),isActive:r&&!l}}):null}},render:function(){var t=this,n=arguments[0],a=this.renderTNode,r=function(){return a("prefixIcon")},l=function(){return a("valueDisplay",{params:t.valueDisplayParams})},i=function(){return a("collapsedItems",{params:t.collapsedItemsParams})},o=this.popupProps||{},s=o.overlayClassName,u=Vl(o,Iu);return n("div",{ref:"select",class:"".concat(this.componentName,"__wrap")},[n(Xl,fe([{ref:"selectInputRef",class:this.componentName,attrs:{autoWidth:this.autoWidth,borderless:this.borderless,readonly:this.readonly,allowInput:this.isFilterable,multiple:this.multiple,keys:this.keys,status:this.status,tips:this.tips,value:this.displayText,valueDisplay:l,clearable:this.clearable,disabled:this.isDisabled,label:r,suffixIcon:this.renderSuffixIcon,placeholder:this.placeholderText,inputValue:this.tInputValue,inputProps:qt({size:this.size},this.inputProps),tagInputProps:qt({autoWidth:!0},this.tagInputProps),tagProps:this.tagProps,minCollapsedNum:this.minCollapsedNum,collapsedItems:i,popupVisible:this.innerPopupVisible,popupProps:qt({overlayClassName:["".concat(this.componentName,"__dropdown"),s]},u)}},{on:{focus:this.handleFocus,blur:this.handleBlur,enter:this.handleEnter,clear:this.handleClear,"input-change":this.handleTInputValueChange,"popup-visible-change":this.setInnerPopupVisible,"tag-change":this.handleTagChange}},{},this.selectInputProps,{attrs:{updateScrollTop:this.updateScrollTop}}]),[n("select-panel",{ref:"selectPanelRef",slot:"panel",scopedSlots:this.$scopedSlots,attrs:{size:this.size,options:this.innerOptions,inputValue:this.tInputValue,multiple:this.multiple,empty:this.empty,filter:this.filter,filterable:this.isFilterable,creatable:this.creatable,scroll:this.scroll,loading:this.isLoading,loadingText:this.loadingText,panelTopContent:this.panelTopContent,panelBottomContent:this.panelBottomContent}})])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Mu={divider:{type:Boolean,default:!0},label:{type:String,default:""}};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Br(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Lu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Br(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Br(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Bu=Oe({name:"TOptionGroup",props:Lu({},Mu),setup:function(t){var n=Pe(t),a=n.divider,r=Va("tSelect"),l=ua(),i=l.sizeClassNames,o=Ya("select"),s=ke("classPrefix"),u=s.classPrefix,d=L(function(){var v;return["".concat(o.value,"-option-group"),(v={},A(v,i[r.size],r&&r.size),A(v,"".concat(o.value,"-option-group__divider"),a),v)]});return{classes:d,classPrefix:u,componentName:o}},render:function(){var t=arguments[0],n=$t(),a=n("default");return t("li",{class:this.classes},[t("div",{class:"".concat(this.componentName,"-option-group__header")},[this.label]),a])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var wn=Fe(Ea,ct),zu=Fe(Ga,ct);Fe(Bu,ct);/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Vu={append:{type:[String,Function]},prepend:{type:[String,Function]}};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Hu=Mt("input-adornment"),Wu=Kt(Hu).extend({name:"TInputAdornment",props:Vu,methods:{renderAddon:function(t,n,a){var r;return this.$scopedSlots[n]?r=this.$scopedSlots[n](null):typeof a=="string"?r=a:typeof a=="function"?r=a(t):r=null,r&&t("span",{class:"".concat(this.componentName,"__").concat(n)},[r])}},render:function(t){var n,a=this.renderAddon(t,"prepend",this.prepend),r=this.renderAddon(t,"append",this.append),l=this.$scopedSlots.default?this.$scopedSlots.default(null):[null],i=[this.componentName,(n={},A(n,"".concat(this.componentName,"--prepend"),a),A(n,"".concat(this.componentName,"--append"),r),n)];return!a&&!r?l[0]:t("div",{class:i},[a,l[0],r])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Yu=Fe(Wu);/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var qu={current:{type:Number,default:void 0},defaultCurrent:{type:Number,default:1},disabled:Boolean,foldedMaxPageBtn:{type:Number,default:5},maxPageBtn:{type:Number,default:10},pageEllipsisMode:{type:String,default:"mid",validator:function(t){return t?["mid","both-ends"].includes(t):!0}},pageSize:{type:Number,default:void 0},defaultPageSize:{type:Number,default:10},pageSizeOptions:{type:Array,default:function(){return[5,10,20,50]}},selectProps:{type:Object},showFirstAndLastPageBtn:Boolean,showJumper:Boolean,showPageNumber:{type:Boolean,default:!0},showPageSize:{type:Boolean,default:!0},showPreviousAndNextBtn:{type:Boolean,default:!0},size:{type:String,default:"medium",validator:function(t){return t?["small","medium"].includes(t):!0}},theme:{type:String,default:"default",validator:function(t){return t?["default","simple"].includes(t):!0}},total:{type:Number,default:0},totalContent:{type:[Boolean,Function],default:!0},onChange:Function,onCurrentChange:Function,onPageSizeChange:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function zr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Vr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var zt=1,Ju=Kt(As("pagination"),Ks()).extend({name:"TPagination",components:{TInputNumber:_u,TInputAdornment:Yu,TSelect:wn,TOption:zu},props:Vr(Vr({},qu),{},{current:{type:Number,default:1,validator:function(t){return t>0}},pageSize:{type:Number,default:10,validator:function(t){return t>0}}}),data:function(){return{prevMore:!1,nextMore:!1,jumpIndex:this.current}},watch:{current:function(t){this.jumpIndex=t}},computed:{paginationClass:function(){return["".concat(this.componentName),this.commonSizeClassName[this.size],A({},this.commonStatusClassName.disabled,this.disabled)]},totalClass:function(){return["".concat(this.componentName,"__total")]},sizerClass:function(){return["".concat(this.componentName,"__select")]},preBtnClass:function(){return["".concat(this.componentName,"__btn"),"".concat(this.componentName,"__btn-prev"),A({},this.commonStatusClassName.disabled,this.disabled||this.current===1)]},nextBtnClass:function(){return["".concat(this.componentName,"__btn"),"".concat(this.componentName,"__btn-next"),A({},this.commonStatusClassName.disabled,this.disabled||this.current===this.pageCount)]},btnWrapClass:function(){return["".concat(this.componentName,"__pager")]},btnMoreClass:function(){return["".concat(this.componentName,"__number"),"".concat(this.componentName,"__number--more"),A({},this.commonStatusClassName.disabled,this.disabled)]},jumperClass:function(){return["".concat(this.componentName,"__jump")]},jumperInputClass:function(){return["".concat(this.componentName,"__input")]},pageCount:function(){var t=Math.ceil(this.total/this.pageSize);return t>0?t:1},sizeOptions:function(){var t=this,n=this.pageSizeOptions.map(function(a){return Ne(a)==="object"?a:{label:t.t(t.global.itemsPerPage,{size:a}),value:Number(a)}});return n.sort(function(a,r){return a.value-r.value})},curPageLeftCount:function(){return Math.ceil((this.foldedMaxPageBtn-1)/2)},curPageRightCount:function(){return Math.ceil((this.foldedMaxPageBtn-1)/2)},isPrevMoreShow:function(){return 2+this.curPageLeftCount<this.current},isNextMoreShow:function(){return this.pageCount-1-this.curPageRightCount>this.current},pages:function(){var t=[],n,a;if(this.isFolded)if(this.isPrevMoreShow&&this.isNextMoreShow)n=this.current-this.curPageLeftCount,a=this.current+this.curPageRightCount;else{var r=this.isMidEllipsis?2:1,l=this.isMidEllipsis?this.pageCount-1:this.pageCount;n=this.isPrevMoreShow?this.pageCount-this.foldedMaxPageBtn+1:r,a=this.isPrevMoreShow?l:this.foldedMaxPageBtn}else n=1,a=this.pageCount;for(var i=n;i<=a;i++)t.push(i);return t},isFolded:function(){return this.pageCount>this.maxPageBtn},isMidEllipsis:function(){return this.pageEllipsisMode==="mid"}},methods:{toPage:function(t,n){if(!this.disabled){var a=t;if(t<zt?a=zt:t>this.pageCount&&(a=this.pageCount),this.current!==a){var r=this.current,l={current:a,previous:r,pageSize:this.pageSize};Tt(this,"current-change",a,l),n!==!1&&Tt(this,"change",l)}}},prevPage:function(){this.toPage(this.current-1)},nextPage:function(){this.toPage(this.current+1)},prevMorePage:function(){this.toPage(this.current-this.foldedMaxPageBtn)},nextMorePage:function(){this.toPage(this.current+this.foldedMaxPageBtn)},getButtonClass:function(t){var n;return["".concat(this.componentName,"__number"),(n={},A(n,this.commonStatusClassName.disabled,this.disabled),A(n,this.commonStatusClassName.current,this.current===t),n)]},onSelectorChange:function(t){if(!this.disabled){var n=parseInt(t,10),a=1;n>0&&(a=Math.ceil(this.total/n));var r=!1;this.current>a&&(r=!0);var l={current:r?a:this.current,previous:this.current,pageSize:n};this.$emit("update:pageSize",n,l),Tt(this,"page-size-change",n,l),Tt(this,"change",l),r&&this.toPage(a,!1)}},onJumperChange:function(t){var n=Number(t);isNaN(n)||this.toPage(n)}},render:function(){var t=this,n=arguments[0],a=this.useGlobalIcon({PageFirstIcon:ls,PageLastIcon:is,ChevronLeftIcon:Ll,ChevronRightIcon:mn,ChevronLeftDoubleIcon:ss,ChevronRightDoubleIcon:us,EllipsisIcon:cs}),r=a.PageFirstIcon,l=a.PageLastIcon,i=a.ChevronLeftIcon,o=a.ChevronRightIcon,s=a.ChevronLeftDoubleIcon,u=a.ChevronRightDoubleIcon,d=a.EllipsisIcon,v=n("div",{class:this.jumperClass},[this.t(this.global.jumpTo),n("t-input-adornment",{attrs:{append:"/ ".concat(this.pageCount," ").concat(this.t(this.global.page))}},[n("t-input-number",{class:this.jumperInputClass,on:{blur:this.onJumperChange,enter:this.onJumperChange},attrs:{max:this.pageCount,min:zt,size:this.size,theme:"normal",placeholder:""},model:{value:t.jumpIndex,callback:function(f){t.jumpIndex=f}}})])]);return n("div",{class:this.paginationClass},[Zl(this,"totalContent",n("div",{class:this.totalClass},[this.t(this.global.total,{total:this.total})])),this.showPageSize&&this.pageSizeOptions.length?n("t-select",fe([{attrs:{size:this.size,value:this.pageSize,disabled:this.disabled,autoWidth:!0},class:this.sizerClass,on:{change:this.onSelectorChange}},{props:this.selectProps||{}}]),[this.sizeOptions.map(function(c,f){return n("t-option",{attrs:{value:c.value,label:c.label},key:f})})]):null,this.showFirstAndLastPageBtn?n("div",{class:this.preBtnClass,on:{click:function(){return t.toPage(1)}},attrs:{disabled:this.disabled||this.current===zt}},[n(r)]):null,this.showPreviousAndNextBtn?n("div",{class:this.preBtnClass,on:{click:this.prevPage},attrs:{disabled:this.disabled||this.current===zt}},[n(i)]):null,this.showPageNumber&&this.theme==="default"?n("ul",{class:this.btnWrapClass},[this.isFolded&&this.isMidEllipsis?n("li",{class:this.getButtonClass(1),on:{click:function(){return t.toPage(zt)}}},[zt]):null,this.isFolded&&this.isPrevMoreShow&&this.isMidEllipsis?n("li",{class:this.btnMoreClass,on:{click:this.prevMorePage,mouseover:function(){return t.prevMore=!0},mouseout:function(){return t.prevMore=!1}}},[this.prevMore?n(s):n(d)]):null,this.pages.map(function(c){return n("li",{class:t.getButtonClass(c),key:c,on:{click:function(){return t.toPage(c)}}},[c])}),this.isFolded&&this.isNextMoreShow&&this.isMidEllipsis?n("li",{class:this.btnMoreClass,on:{click:this.nextMorePage,mouseover:function(){return t.nextMore=!0},mouseout:function(){return t.nextMore=!1}}},[this.nextMore?n(u):n(d)]):null,this.isFolded&&this.isMidEllipsis?n("li",{class:this.getButtonClass(this.pageCount),on:{click:function(){return t.toPage(t.pageCount)}}},[this.pageCount]):null]):null,this.theme==="simple"&&v,this.showPreviousAndNextBtn?n("div",{class:this.nextBtnClass,on:{click:this.nextPage},attrs:{disabled:this.disabled||this.current===this.pageCount}},[n(o)]):null,this.showFirstAndLastPageBtn?n("div",{class:this.nextBtnClass,on:{click:function(){return t.toPage(t.pageCount)}},attrs:{disabled:this.disabled||this.current===this.pageCount}},[n(l)]):null,this.theme==="default"&&this.showJumper&&v])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Gu=Fe(rn(["current","pageSize"],{model:{prop:"current",event:"current-change"}})(Ju));/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var di={allowUncheck:Boolean,checked:Boolean,defaultChecked:Boolean,default:{type:[String,Function]},disabled:{type:Boolean,default:void 0},label:{type:[String,Function]},name:{type:String,default:""},value:{type:[String,Number,Boolean],default:void 0},onChange:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Hr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ya(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Qu=Mt("radio"),Cn=Kt(jt,Qu).extend({name:"TRadio",inheritAttrs:!1,props:ya({},di),inject:{radioGroup:{default:void 0},radioButton:{default:void 0}},data:function(){return{formDisabled:void 0}},computed:{tDisabled:function(){return this.formDisabled||this.disabled}},render:function(){var t,n=arguments[0],a=this.radioGroup,r=this.radioButton,l={checked:this.checked,disabled:this.tDisabled,value:this.value,name:this.name};a&&(l.checked=this.value===a.value,l.disabled=this.tDisabled===void 0?a.disabled:this.tDisabled,l.name=a.name);var i=r?"".concat(this.componentName,"-button"):this.componentName,o=["".concat(i),(t={},A(t,this.commonStatusClassName.checked,l.checked),A(t,this.commonStatusClassName.disabled,l.disabled),t)];return n("label",{class:o},[n("input",fe([{attrs:{type:"radio"},class:"".concat(i,"__former")},{on:ya({},ei(this.$listeners,["change","click"]))},{domProps:ya({},l),on:{change:this.handleChange,click:this.handleClick}}])),n("span",{class:"".concat(i,"__input")}),n("span",{class:"".concat(i,"__label")},[an(this,"default","label")])])},methods:{handleChange:function(t){if(this.radioGroup)this.radioGroup.handleRadioChange(this.value,{e:t});else{var n=t.target;Tt(this,"change",n.checked,{e:t})}},handleClick:function(t){this.$emit("click"),!(!this.checked||!this.allowUncheck)&&(this.radioGroup?this.radioGroup.handleRadioChange(void 0,{e:t}):Tt(this,"change",!1,{e:t}))}}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Uu={disabled:{type:Boolean,default:void 0},name:{type:String,default:""},options:{type:Array},size:{type:String,default:"medium",validator:function(t){return["small","medium","large"].includes(t)}},value:{type:[String,Number,Boolean],default:void 0},defaultValue:{type:[String,Number,Boolean],default:void 0},variant:{type:String,default:"outline",validator:function(t){return["outline","primary-filled","default-filled"].includes(t)}},onChange:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Wr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Xu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Zu=Mt("radio-group"),ec=Kt(Zu).extend({name:"TRadioGroup",props:Xu({},Uu),components:{Radio:Cn},provide:function(){return{radioGroup:this}},data:function(){return{barStyle:{width:"0px",left:"0px"},observer:null}},computed:{checkedClassName:function(){return".".concat(this.classPrefix,"-radio-button.").concat(this.commonStatusClassName.checked)}},render:function(t){var n=this,a,r=this.$scopedSlots,l=r.default&&r.default(null);this.options&&this.options.length&&(l=this.options.map(function(o,s){var u=o;return(It(o)||ot(o))&&(u={value:o,label:o.toString()}),t(Cn,fe([{},{props:o},{key:"radio-group-options-".concat(u.value,"-").concat(s),attrs:{name:n.name,checked:n.value===u.value,disabled:"disabled"in u?u.disabled:n.disabled,value:u.value}}]),[typeof u.label=="function"?u.label(t):u.label])}));var i=["".concat(this.componentName),this.commonSizeClassName[this.size],(a={},A(a,"".concat(this.componentName,"__outline"),this.variant==="outline"),A(a,"".concat(this.componentName,"--filled"),this.variant.includes("filled")),A(a,"".concat(this.componentName,"--primary-filled"),this.variant==="primary-filled"),a)];return this.variant.includes("filled")&&l&&l.push(t("div",{style:this.barStyle,class:"".concat(this.componentName,"__bg-block")})),t("div",{class:i},[l])},watch:{value:function(){var t=this;this.$nextTick(function(){return t.calcBarStyle()})}},created:function(){this.$on("checked-change",this.handleRadioChange)},mounted:function(){this.calcBarStyle();var t=new MutationObserver(this.calcBarStyle);t.observe(this.$el,{childList:!0,attributes:!0,subtree:!0}),this.observer=t},beforeDestroy:function(){this.observer.disconnect()},methods:{handleRadioChange:function(t,n){Tt(this,"change",t,n)},calcDefaultBarStyle:function(){var t=this.$el.cloneNode(!0),n=document.createElement("div");n.setAttribute("style","position: absolute; visibility: hidden;"),n.appendChild(t),document.body.appendChild(n);var a=n.querySelector(this.checkedClassName),r=a.offsetWidth,l=a.offsetLeft;this.barStyle={width:"".concat(r,"px"),left:"".concat(l,"px")},document.body.removeChild(n)},calcBarStyle:function(){if(this.variant!=="outline"){var t=this.$el.querySelector(this.checkedClassName);if(!!t){var n=t.offsetWidth,a=t.offsetLeft;n?this.barStyle={width:"".concat(n,"px"),left:"".concat(a,"px")}:this.calcDefaultBarStyle()}}}}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Yr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function qr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var tc=jt.extend({name:"TRadioButton",inheritAttrs:!1,props:qr({},di),components:{Radio:Cn},provide:function(){return{radioButton:this}},inject:{radioGroup:{default:void 0}},render:function(){var t=arguments[0],n=this.$props,a=this.$listeners,r=this.radioGroup,l={props:qr({},n),on:a};return r&&(l.props.checked=n.value===r.value,l.props.disabled=n.disabled===void 0?r.disabled:n.disabled,l.props.name=r.name),t(Cn,fe([{},l]),[an(this,"default","label")])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var nc=Fe(rn(["checked"],{model:{prop:"checked",event:"change"}})(Cn)),ac=Fe(rn(["value"],{model:{prop:"value",event:"change"}})(ec));Fe(tc);/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var rc=Qe(function(e,t){(function(n,a){e.exports=a()})(Wt,function(){return function(n,a,r){a.prototype.isBetween=function(l,i,o,s){var u=r(l),d=r(i),v=(s=s||"()")[0]==="(",c=s[1]===")";return(v?this.isAfter(u,o):!this.isBefore(u,o))&&(c?this.isBefore(d,o):!this.isAfter(d,o))||(v?this.isBefore(u,o):!this.isAfter(u,o))&&(c?this.isAfter(d,o):!this.isBefore(d,o))}}})}),oc=Qe(function(e,t){(function(n,a){e.exports=a()})(Wt,function(){return function(n,a){a.prototype.weekYear=function(){var r=this.month(),l=this.week(),i=this.year();return l===1&&r===11?i+1:r===0&&l>=52?i-1:i}}})}),lc=Qe(function(e,t){(function(n,a){e.exports=a()})(Wt,function(){return function(n,a,r){var l=a.prototype,i=function(c){return c&&(c.indexOf?c:c.s)},o=function(c,f,p,h,y){var m=c.name?c:c.$locale(),g=i(m[f]),b=i(m[p]),C=g||b.map(function(x){return x.slice(0,h)});if(!y)return C;var w=m.weekStart;return C.map(function(x,S){return C[(S+(w||0))%7]})},s=function(){return r.Ls[r.locale()]},u=function(c,f){return c.formats[f]||function(p){return p.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(h,y,m){return y||m.slice(1)})}(c.formats[f.toUpperCase()])},d=function(){var c=this;return{months:function(p){return p?p.format("MMMM"):o(c,"months")},monthsShort:function(p){return p?p.format("MMM"):o(c,"monthsShort","months",3)},firstDayOfWeek:function(){return c.$locale().weekStart||0},weekdays:function(p){return p?p.format("dddd"):o(c,"weekdays")},weekdaysMin:function(p){return p?p.format("dd"):o(c,"weekdaysMin","weekdays",2)},weekdaysShort:function(p){return p?p.format("ddd"):o(c,"weekdaysShort","weekdays",3)},longDateFormat:function(p){return u(c.$locale(),p)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};l.localeData=function(){return d.bind(this)()},r.localeData=function(){var v=s();return{firstDayOfWeek:function(){return v.weekStart||0},weekdays:function(){return r.weekdays()},weekdaysShort:function(){return r.weekdaysShort()},weekdaysMin:function(){return r.weekdaysMin()},months:function(){return r.months()},monthsShort:function(){return r.monthsShort()},longDateFormat:function(f){return u(v,f)},meridiem:v.meridiem,ordinal:v.ordinal}},r.months=function(){return o(s(),"months")},r.monthsShort=function(){return o(s(),"monthsShort","months",3)},r.weekdays=function(v){return o(s(),"weekdays",null,null,v)},r.weekdaysShort=function(v){return o(s(),"weekdaysShort","weekdays",3,v)},r.weekdaysMin=function(v){return o(s(),"weekdaysMin","weekdays",2,v)}}})}),ic=Qe(function(e,t){(function(n,a){e.exports=a()})(Wt,function(){var n="week",a="year";return function(r,l,i){var o=l.prototype;o.week=function(s){if(s===void 0&&(s=null),s!==null)return this.add(7*(s-this.week()),"day");var u=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var d=i(this).startOf(a).add(1,a).date(u),v=i(this).endOf(n);if(d.isBefore(v))return 1}var c=i(this).startOf(a).date(u).startOf(n).subtract(1,"millisecond"),f=this.diff(c,n,!0);return f<0?i(this).startOf("week").week():Math.ceil(f)},o.weeks=function(s){return s===void 0&&(s=null),this.week(s)}}})}),sc=Qe(function(e,t){(function(n,a){e.exports=a()})(Wt,function(){var n="month",a="quarter";return function(r,l){var i=l.prototype;i.quarter=function(u){return this.$utils().u(u)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(u-1))};var o=i.add;i.add=function(u,d){return u=Number(u),this.$utils().p(d)===a?this.add(3*u,n):o.bind(this)(u,d)};var s=i.startOf;i.startOf=function(u,d){var v=this.$utils(),c=!!v.u(d)||d;if(v.p(u)===a){var f=this.quarter()-1;return c?this.month(3*f).startOf(n).startOf("day"):this.month(3*f+2).endOf(n).endOf("day")}return s.bind(this)(u,d)}}})}),uc=Qe(function(e,t){(function(n,a){e.exports=a()})(Wt,function(){var n="day";return function(a,r,l){var i=function(d){return d.add(4-d.isoWeekday(),n)},o=r.prototype;o.isoWeekYear=function(){return i(this).year()},o.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),n);var d,v,c,f,p=i(this),h=(d=this.isoWeekYear(),v=this.$u,c=(v?l.utc:l)().year(d).startOf("year"),f=4-c.isoWeekday(),c.isoWeekday()>4&&(f+=7),c.add(f,n));return p.diff(h,"week")+1},o.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var s=o.startOf;o.startOf=function(u,d){var v=this.$utils(),c=!!v.u(d)||d;return v.p(u)==="isoweek"?c?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(u,d)}}})}),cc=Qe(function(e,t){(function(n,a){e.exports=a()})(Wt,function(){return function(n,a){var r=a.prototype,l=r.format;r.format=function(i){var o=this,s=this.$locale();if(!this.isValid())return l.bind(this)(i);var u=this.$utils(),d=(i||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(v){switch(v){case"Q":return Math.ceil((o.$M+1)/3);case"Do":return s.ordinal(o.$D);case"gggg":return o.weekYear();case"GGGG":return o.isoWeekYear();case"wo":return s.ordinal(o.week(),"W");case"w":case"ww":return u.s(o.week(),v==="w"?1:2,"0");case"W":case"WW":return u.s(o.isoWeek(),v==="W"?1:2,"0");case"k":case"kk":return u.s(String(o.$H===0?24:o.$H),v==="k"?1:2,"0");case"X":return Math.floor(o.$d.getTime()/1e3);case"x":return o.$d.getTime();case"z":return"["+o.offsetName()+"]";case"zzz":return"["+o.offsetName("long")+"]";default:return v}});return l.bind(this)(d)}}})});function Jr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Gr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}Y.extend(uc);Y.extend(oc);Y.extend(lc);Y.extend(ic);Y.extend(sc);Y.extend(cc);Y.extend(Ps);Y.extend(rc);function dc(e){return e&&e[0].toUpperCase().concat(e.substring(1,e.length))}function fc(e){var t=e.year,n=e.month;return new Date(t,n,1)}function fi(e){var t=e.year,n=e.month;return new Date(t,n+1,0).getDate()}function vc(e){var t=e.year,n=e.month;return new Date(t,n,fi({year:t,month:n}))}function Qa(e,t){return e.getFullYear()===t.getFullYear()}function pc(e,t){return Qa(e,t)&&Y(e).quarter()===Y(t).quarter()}function Ua(e,t){return Qa(e,t)&&e.getMonth()===t.getMonth()}function hc(e,t){return Ua(e,t)&&Y(e).week()===Y(t).week()}function mc(e,t){return Ua(e,t)&&e.getDate()===t.getDate()}function Qr(e,t){var n=e.getTime(),a=t.getTime();return n<a?-1:n>a?1:0}function Dt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"date",a={isSameYear:Qa,isSameQuarter:pc,isSameMonth:Ua,isSameWeek:hc,isSameDate:mc};return a["isSame".concat(dc(n))](e,t)}function Xt(e,t,n){return t&&Qr(e,t)===-1||n&&Qr(e,n)===1}function ca(){var e=new Date;return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0)}function da(e,t){return Y(e).subtract(t,"month").toDate()}function fa(e,t){return Y(e).add(t,"month").toDate()}function Ur(e,t){var n=e.year,a=e.month,r=t.firstDayOfWeek,l=t.showWeekOfYear,i=l===void 0?!1:l,o=t.disableDate,s=o===void 0?function(){return!1}:o,u=t.minDate,d=t.maxDate,v=fc({year:n,month:a}),c=vc({year:n,month:a}),f=fi({year:n,month:a}),p=[],h=1,y=ca();for(h;h<=f;h++){var m=new Date(n,a,h);p.push({text:h,active:!1,value:m,disabled:typeof s=="function"&&s(m)||Xt(m,u,d),now:Dt(y,m),firstDayOfMonth:h===1,lastDayOfMonth:h===f,type:"current-month"})}if(v.getDay()!==r)for(v.setDate(0);p.unshift({text:v.getDate().toString(),active:!1,value:new Date(v),disabled:typeof s=="function"&&s(v)||Xt(v,u,d),additional:!0,type:"prev-month"}),v.setDate(v.getDate()-1),v.getDay()!==Math.abs(r+6)%7;);for(var g=42;p.length<g;)c.setDate(c.getDate()+1),p.push({text:c.getDate(),active:!1,value:new Date(c),disabled:typeof s=="function"&&s(c)||Xt(c,u,d),additional:!0,type:"next-month"});var b=la(p,7);return i&&b.forEach(function(C){C.unshift(Gr(Gr({},C[0]),{},{active:!1,value:C[0].value,text:Y(C[0].value).week()}))}),b}function gc(e,t){for(var n=t.disableDate,a=n===void 0?function(){return!1}:n,r=t.minDate,l=t.maxDate,i=t.quarterLocal,o=[],s=ca(),u=1;u<=4;u++){var d=Y(new Date(e,0)).quarter(u).toDate();o.push({value:d,now:Dt(d,s,"quarter"),disabled:typeof a=="function"&&a(d)||Xt(d,r,l),active:!1,text:i[u-1]})}return la(o,4)}function bc(e,t){for(var n=t.disableDate,a=n===void 0?function(){return!1}:n,r=t.minDate,l=t.maxDate,i=parseInt((e/10).toString(),10)*10,o=i+9,s=[],u=ca(),d=i;d<=o;d++){var v=new Date(d,1);s.push({value:v,now:Dt(v,u,"year"),disabled:typeof a=="function"&&a(v)||Xt(v,r,l),active:!1,text:"".concat(v.getFullYear())})}return la(s,3)}function yc(e,t){for(var n=t.disableDate,a=n===void 0?function(){return!1}:n,r=t.minDate,l=t.maxDate,i=t.monthLocal,o=[],s=ca(),u=0;u<=11;u++){var d=new Date(e,u);o.push({value:d,now:Dt(d,s,"month"),disabled:typeof a=="function"&&a(d)||Xt(d,r,l),active:!1,text:i[d.getMonth()]})}return la(o,3)}function wc(e,t){var n=ds({},(fs(t),t)),a=n.start,r=n.end,l=n.hoverStart,i=n.hoverEnd,o=n.type,s=o===void 0?"date":o,u=n.isRange,d=u===void 0?!1:u;return s==="week"?e:d?e.map(function(v){return v.map(function(c){var f=c,p=c.value,h=a&&Dt(a,p,s),y=l&&Dt(l,p,s),m=r&&Dt(r,p,s),g=i&&Dt(i,p,s);return f.active=(h||m)&&!f.additional,a&&r&&(f.highlight=Y(p).isBetween(a,r,s,"[]")&&!f.additional,f.startOfRange=h,f.endOfRange=m),l&&i&&(f.hoverHighlight=Y(p).isBetween(l,i,s,"[]")&&!f.additional,f.hoverStartOfRange=y,f.hoverEndOfRange=g),f})}):e.map(function(v){return v.map(function(c){var f=c;return f.active=a&&Dt(c.value,a,s)&&!f.additional,f})})}function Xa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=e.match(/(a\s)?h{1,2}(:m{1,2})?(:s{1,2})?(\sa)?/i);return t?t[0]:null}function en(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=e.match(/[ap]m/i)||[""],n=/\d{1,2}(:\d{1,2})?(:\d{1,2})?(:\d{1,3})?/,a=e.match(n)||["0:0:0:0"],r=a[0].split(":"),l=me(r,4),i=l[0],o=i===void 0?0:i,s=l[1],u=s===void 0?0:s,d=l[2],v=d===void 0?0:d,c=l[3],f=c===void 0?0:c;return{hours:+o,minutes:+u,seconds:+v,milliseconds:+f,meridiem:t[0]}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var un="HH:mm:ss";function ie(e,t,n){if(e==="")return Y();var a=e;if(/[w|W]/g.test(t)){typeof a!="string"&&(a=Y(a).format(t));for(var r=a.split(/[-/.]/)[0],l=a.split(/[-/.]/)[1],i=t.split(/[-/.]/)[1],o=Y(r,"YYYY").startOf("year"),s=0;s<=52;s+=1){var u=o.add(s,"week");if(n==="start"&&(u=u.subtract(5,"day")),u.format(i)===l)return u}}if(/Q/g.test(t)){typeof a!="string"&&(a=Y(a).format(t));for(var d=a.split(/[-/.]/)[0],v=a.split(/[-/.]/)[1],c=t.split(/[-/.]/)[1],f=Y(d,"YYYY").startOf("year"),p=0;p<=52;p+=1){var h=f.add(p,"quarter");if(h.format(c)===v)return h}}var y=Y(a,t).isValid()?Y(a,t):Y(a);return y.isValid()?y:(be.error("DatePicker",`Check whether the format\u3001value format is valid.
 value: '`.concat(e,"', format: '").concat(t,"'")),Y())}function Cc(e){var t=e.newDate,n=e.format,a=e.targetFormat,r=e.autoSwap;if(!t||!Array.isArray(t))return[];var l=t.map(function(i){return i&&ie(i,n)});return r&&l[0]&&l[1]&&l[0].toDate().getTime()>l[1].toDate().getTime()&&(l=[l[1],l[0]]),l.some(function(i){return i&&!i.isValid()})?(be.error("DatePicker",`Check whether the value\u3001format\u3001valueType format is valid.
format: '`.concat(n,"' value: '").concat(t,"' valueType: '").concat(a,"'")),[]):a==="time-stamp"?l.map(function(i){return i&&i.toDate().getTime()}):a==="Date"?l.map(function(i){return i&&i.toDate()}):l.map(function(i){return i&&i.format(a||n)})}function xc(e){var t=e.newDate,n=e.format,a=e.targetFormat;if(!t)return"";var r=ie(t,n);return r.isValid()?a==="time-stamp"?r.toDate().getTime():a==="Date"?r.toDate():r.format(a||n):(be.error("DatePicker",`Check whether the format\u3001value format is valid.
format: '`.concat(n,"' value: '").concat(t,"'")),"")}function We(e,t){return Array.isArray(e)?e.every(function(n){return Y(n,t).isValid()||Y(n).isValid()}):Y(e,t).isValid()||Y(e).isValid()}function ue(e,t){var n=t.format,a=t.targetFormat,r=t.autoSwap,l;return Array.isArray(e)?l=Cc({newDate:e,format:n,targetFormat:a,autoSwap:r}):l=xc({newDate:e,format:n,targetFormat:a}),l}function tn(e,t){var n;return Array.isArray(e)?n=e.map(function(a){return Y(a||new Date(new Date().setHours(0,0,0,0))).format(t)}):n=Y(e||new Date(new Date().setHours(0,0,0,0))).format(t),n}function ht(e){var t=e.mode,n=t===void 0?"date":t,a=e.format,r=e.valueType,l=e.enableTimePicker;return n==="year"?{format:a||"YYYY",valueType:r||a||"YYYY",timeFormat:un}:n==="month"?{format:a||"YYYY-MM",valueType:r||a||"YYYY-MM",timeFormat:un}:n==="quarter"?{format:a||"YYYY-[Q]Q",valueType:r||a||"YYYY-[Q]Q",timeFormat:un}:n==="week"?{format:a||"YYYY-wo",valueType:r||a||"YYYY-wo",timeFormat:un}:n==="date"?{format:a||"YYYY-MM-DD".concat(l?" HH:mm:ss":""),valueType:r||a||"YYYY-MM-DD".concat(l?" HH:mm:ss":""),timeFormat:Xa(a||"YYYY-MM-DD".concat(l?" HH:mm:ss":""))||un}:(be.error("DatePicker","Invalid mode: ".concat(n)),{})}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function vi(e){var t=Pe(e),n=t.value,a=ia(n,e.defaultValue,e.onChange,"change"),r=me(a,2),l=r[0],i=r[1],o=L(function(){return ht({mode:e.mode,format:e.format,enableTimePicker:e.enableTimePicker})});e.enableTimePicker&&(Xa(o.value.format)||console.error("format: ".concat(o.value.format," \u4E0D\u89C4\u8303\uFF0C\u5305\u542B\u65F6\u95F4\u9009\u62E9\u5FC5\u987B\u8981\u6709\u65F6\u95F4\u683C\u5F0F\u5316 HH:mm:ss")));var s=H(tn(l.value,o.value.timeFormat)),u=H(Y(l.value).month()||new Date().getMonth()),d=H(Y(l.value).year()||new Date().getFullYear()),v=H(ue(l.value,{format:o.value.format}));return gn(function(){if(!l.value){v.value="";return}!We(l.value,o.value.format)||(v.value=ue(l.value,{format:o.value.format}),s.value=tn(l.value,o.value.timeFormat))}),{year:d,month:u,value:l,time:s,cacheValue:v,onChange:i}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Xr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Pn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function _c(e,t){var n=t.emit,a=lt("date-picker"),r=ke("datePicker"),l=r.global,i=H(),o=vi(e),s=o.value,u=o.onChange,d=o.time,v=o.month,c=o.year,f=o.cacheValue,p=L(function(){return ht({mode:e.mode,format:e.format,valueType:e.valueType,enableTimePicker:e.enableTimePicker})}),h=H(!1),y=H(!1),m=H(ue(s.value,{format:p.value.format})),g=L(function(){return Pn(Pn({},e.inputProps),{},{ref:i,prefixIcon:e.prefixIcon,placeholder:e.placeholder||l.value.placeholder[e.mode],class:[A({},"".concat(a.value,"__input--placeholder"),y.value)],onClear:function(w){var x;w==null||(x=w.e)===null||x===void 0||x.stopPropagation(),h.value=!1,u==null||u("",{dayjsValue:Y(),trigger:"clear"}),n("clear","",{dayjsValue:Y(),trigger:"clear"})},onBlur:function(w,x){var S;(S=e.onBlur)===null||S===void 0||S.call(e,{value:w,e:x.e}),n("blur",{value:w,e:x.e})},onFocus:function(w,x){var S,T=x.e;(S=e.onFocus)===null||S===void 0||S.call(e,{value:s.value,e:T}),n("focus",{value:s.value,e:T})},onChange:function(w){if(m.value=w,!!We(w,p.value.format)){var x=Y(w).month(),S=Y(w).year(),T=tn(w,p.value.timeFormat);!Number.isNaN(S)&&(c.value=S),!Number.isNaN(x)&&(v.value=x),!Number.isNaN(T)&&(d.value=T)}},onEnter:function(w){if(!w){u==null||u("",{dayjsValue:Y(),trigger:"enter"}),h.value=!1;return}!We(w,p.value.format)&&!We(s.value,p.value.format)||(h.value=!1,We(w,p.value.format)?u==null||u(ue(w,{format:p.value.format,targetFormat:p.value.valueType}),{dayjsValue:ie(w,p.value.format),trigger:"enter"}):We(s.value,p.value.format)?m.value=ue(s.value,{format:p.value.format}):m.value="")}})}),b=L(function(){var C,w,x;return Pn(Pn({expandAnimation:!0},e.popupProps),{},{overlayInnerStyle:(C=(w=e.popupProps)===null||w===void 0?void 0:w.overlayInnerStyle)!==null&&C!==void 0?C:{width:"auto"},overlayClassName:[(x=e.popupProps)===null||x===void 0?void 0:x.overlayClassName,"".concat(a.value,"__panel-container")],onVisibleChange:function(T,k){var _,R;if((_=e.popupProps)===null||_===void 0||(R=_.onVisibleChange)===null||R===void 0||R.call(_,T,k),k.trigger==="trigger-element-click"){h.value=!0;return}h.value=T}})});return gn(function(){if(!s.value){m.value="";return}!We(s.value,p.value.format)||(m.value=ue(s.value,{format:p.value.format}))}),{year:c,month:v,value:s,time:d,inputValue:m,popupVisible:h,inputProps:g,popupProps:b,inputRef:i,cacheValue:f,isHoverCell:y,onChange:u}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var ut={allowInput:Boolean,clearable:Boolean,disableDate:{type:[Object,Array,Function]},disabled:Boolean,enableTimePicker:Boolean,firstDayOfWeek:{type:Number,validator:function(t){return t?[1,2,3,4,5,6,7].includes(t):!0}},format:{type:String,default:void 0},inputProps:{type:Object},mode:{type:String,default:"date",validator:function(t){return t?["year","quarter","month","week","date"].includes(t):!0}},placeholder:{type:[String,Array],default:void 0},popupProps:{type:Object},prefixIcon:{type:Function},presets:{type:Object},presetsPlacement:{type:String,default:"bottom",validator:function(t){return t?["left","top","right","bottom"].includes(t):!0}},status:{type:String,validator:function(t){return t?["default","success","warning","error"].includes(t):!0}},suffixIcon:{type:Function},timePickerProps:{type:Object},tips:{type:[String,Function]},value:{type:[String,Number,Array,Date],default:void 0},defaultValue:{type:[String,Number,Array,Date],default:""},valueType:{type:String,validator:function(t){return t?["time-stamp","Date","YYYY","YYYY-MM","YYYY-MM-DD","YYYY-MM-DD HH","YYYY-MM-DD HH:mm","YYYY-MM-DD HH:mm:ss","YYYY-MM-DD HH:mm:ss:SSS"].includes(t):!0}},onBlur:Function,onChange:Function,onFocus:Function,onPick:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Zr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function wa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zr(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zr(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Oc=Oe({name:"TDatePickerHeader",props:{mode:{type:String,default:"date"},year:Number,month:Number,onMonthChange:Function,onYearChange:Function,onJumperClick:Function},setup:function(t){var n=ke("classPrefix"),a=n.classPrefix,r=lt("date-picker__header"),l=ke("datePicker"),i=l.global,o=H(v(t.year)),s=t.mode==="date"||t.mode==="week",u=L(function(){var m;return((m=o.value.find(function(g){return g.value-t.year<=9&&g.value-t.year>=0}))===null||m===void 0?void 0:m.value)||t.year}),d=L(function(){return i.value.months.map(function(m,g){return{label:m,value:g}})});function v(m){var g=[];if(t.mode==="year")for(var b=m%10,C=m-b-100,w=m-b+100,x=C;x<=w;x+=10)g.push({label:"".concat(x," - ").concat(x+9),value:x+b});else{g.push({label:"".concat(m),value:m});for(var S=1;S<=10;S++)g.push({label:"".concat(m+S),value:m+S}),g.unshift({label:"".concat(m-S),value:m-S})}return g}function c(m,g){var b=[];if(t.mode==="year"){var C=m%10;if(g==="add")for(var w=m-C+10;w<=m-C+50;w+=10)b.push({label:"".concat(w," - ").concat(w+9),value:w});else for(var x=m-C-1;x>m-C-50;x-=10)b.unshift({label:"".concat(x-9," - ").concat(x),value:x})}else if(g==="add")for(var S=m+1;S<=m+10;S++)b.push({label:"".concat(S),value:S});else for(var T=m-1;T>m-10;T--)b.unshift({label:"".concat(T),value:T});return b}var f={year:{prev:i.value.preDecade,current:i.value.now,next:i.value.nextDecade},month:{prev:i.value.preYear,current:i.value.now,next:i.value.nextYear},date:{prev:i.value.preMonth,current:i.value.now,next:i.value.nextMonth}};function p(m){var g;m==null||(g=m.stopPropagation)===null||g===void 0||g.call(m);var b=o.value[0].value,C=c(b,"reduce");o.value=[].concat(oe(C),oe(o.value))}function h(m){var g;m==null||(g=m.stopPropagation)===null||g===void 0||g.call(m);var b=o.value.slice(-1)[0].value,C=c(b,"add");o.value=[].concat(oe(o.value),oe(C))}function y(m){var g=m.e;g.target.scrollTop===0?p(g):g.target.scrollTop===g.target.scrollHeight-g.target.clientHeight&&h(g)}return{COMPONENT_NAME:r,labelMap:f,nearestYear:u,classPrefix:a,monthOptions:d,yearOptions:o,showMonthPicker:s,handleScroll:y,handlePanelTopClick:p,handlePanelBottomClick:h}},render:function(){var t=this,n=arguments[0],a=this.COMPONENT_NAME,r=this.labelMap,l=this.nearestYear,i=this.classPrefix,o=this.monthOptions,s=this.yearOptions,u=this.showMonthPicker,d=this.handlePanelTopClick,v=this.handlePanelBottomClick;return n("div",{class:a},[n("div",{class:"".concat(a,"-controller")},[u&&n(Ea,{class:"".concat(a,"-controller-month"),props:wa({},{value:this.month,options:o,onChange:function(f){var p;return(p=t.onMonthChange)===null||p===void 0?void 0:p.call(t,f)},popupProps:{attach:function(f){return f.parentNode},overlayClassName:"".concat(a,"-controller-month-popup")}})}),n(Ea,{class:"".concat(a,"-controller-year"),props:wa({},{value:this.mode==="year"?l:this.year,options:s,onChange:function(f){var p;return(p=t.onYearChange)===null||p===void 0?void 0:p.call(t,f)},popupProps:{onScroll:this.handleScroll,attach:function(f){return f.parentNode},overlayClassName:"".concat(a,"-controller-year-popup")},panelTopContent:function(){return n("div",{class:"".concat(i,"-select-option"),on:{click:d}},["..."])},panelBottomContent:function(){return n("div",{class:"".concat(i,"-select-option"),on:{click:v}},["..."])}})})]),n(ru,{props:wa({},{tips:r[this.mode],onChange:this.onJumperClick,size:"small"})})])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Sc=Oe({name:"TDatePickerCell",props:{time:String,text:[String,Number],value:Date,active:Boolean,highlight:Boolean,disabled:Boolean,startOfRange:Boolean,endOfRange:Boolean,hoverHighlight:Boolean,hoverStartOfRange:Boolean,hoverEndOfRange:Boolean,additional:Boolean,now:Boolean,firstDayOfMonth:Boolean,lastDayOfMonth:Boolean,onClick:Function,onMouseEnter:Function},setup:function(t){var n=lt("date-picker__cell"),a=L(function(){var i;return[n.value,(i={},A(i,"".concat(n.value,"--now"),t.now),A(i,"".concat(n.value,"--active"),t.active),A(i,"".concat(n.value,"--disabled"),t.disabled),A(i,"".concat(n.value,"--highlight"),t.highlight),A(i,"".concat(n.value,"--hover-highlight"),t.hoverHighlight),A(i,"".concat(n.value,"--active-start"),t.startOfRange),A(i,"".concat(n.value,"--active-end"),t.endOfRange),A(i,"".concat(n.value,"--hover-start"),t.hoverStartOfRange),A(i,"".concat(n.value,"--hover-end"),t.hoverEndOfRange),A(i,"".concat(n.value,"--additional"),t.additional),A(i,"".concat(n.value,"--first-day-of-month"),t.firstDayOfMonth),A(i,"".concat(n.value,"--last-day-of-month"),t.lastDayOfMonth),i)]});function r(i){var o;if(!t.disabled){if(t.time){var s=en(t.time),u=s.hours,d=s.minutes,v=s.seconds,c=s.milliseconds,f=s.meridiem,p=u;/am/i.test(f)&&p===12&&(p-=12),/pm/i.test(f)&&p<12&&(p+=12),t.value.setHours(p),t.value.setMinutes(d),t.value.setSeconds(v),t.value.setMilliseconds(c)}(o=t.onClick)===null||o===void 0||o.call(t,t.value,{e:i})}}function l(){var i;if(!t.disabled){if(t.time){var o=en(t.time),s=o.hours,u=o.minutes,d=o.seconds,v=o.milliseconds,c=o.meridiem,f=s;/am/i.test(c)&&f===12&&(f-=12),/pm/i.test(c)&&f<12&&(f+=12),t.value.setHours(f),t.value.setMinutes(u),t.value.setSeconds(d),t.value.setMilliseconds(v)}(i=t.onMouseEnter)===null||i===void 0||i.call(t,t.value)}}return{cellClass:a,COMPONENT_NAME:n,handleClick:r,handleMouseEnter:l}},render:function(){var t=arguments[0],n=this.cellClass,a=this.COMPONENT_NAME,r=this.handleClick,l=this.handleMouseEnter;return t("td",{class:n,on:{click:r,mouseenter:l}},[t("div",{class:"".concat(a,"-inner")},[this.text])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Ca(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var kc=Oe({name:"TDatePickerTable",props:{mode:{type:String,default:"date"},firstDayOfWeek:Number,data:Array,time:String,value:[String,Number,Array,Date],format:String,onCellClick:Function,onCellMouseEnter:Function,onCellMouseLeave:Function},setup:function(t){var n=lt("date-picker__table"),a=ke("datePicker"),r=a.global,l=r.value,i=l.weekdays,o=l.weekAbbreviation,s=L(function(){for(var v=[],c=t.firstDayOfWeek-1,f=i.length;v.length<f;)v.push(i[c]),c=(c+f+1)%f;return t.mode==="week"&&v.unshift(o),v}),u=L(function(){return t.mode==="date"||t.mode==="week"}),d=function(c,f,p){if(t.mode!=="week")return{};if(Array.isArray(c)){var h;if(!c.length)return{};var y=c.map(function(O){return ie(O,f)}),m=me(y,2),g=m[0],b=m[1],C=g.year(),w=g.week(),x=b&&b.year(),S=b&&b.week(),T=ie(p,f),k=T.year(),_=T.week(),R=k===C&&_===w||k===x&&_===S,P=k>=C&&k<=x&&_>w&&_<S;return h={},A(h,"".concat(n.value,"-").concat(t.mode,"-row--active"),R),A(h,"".concat(n.value,"-").concat(t.mode,"-row--range"),P),h}return A({},"".concat(n.value,"-").concat(t.mode,"-row--active"),ie(c,f).week()===ie(p,f).week())};return{COMPONENT_NAME:n,weekArr:s,showThead:u,weekRowClass:d}},render:function(){var t=this,n=arguments[0],a=this.COMPONENT_NAME,r=this.weekArr,l=this.showThead,i=this.weekRowClass;return n("div",{class:a,on:{mouseleave:function(s){var u;return(u=t.onCellMouseLeave)===null||u===void 0?void 0:u.call(t,{e:s})}}},[n("table",[l&&n("thead",[n("tr",[r.map(function(o,s){return n("th",{key:s},[o])})])]),n("tbody",[this.data.map(function(o,s){return n("tr",{key:s,class:Ca(A({},"".concat(a,"-").concat(t.mode,"-row"),!0),i(t.value,t.format,o[0].value))},[o.map(function(u,d){return n(Sc,{key:d,props:Ca({},Ca({time:t.time,onClick:t.onCellClick,onMouseEnter:t.onCellMouseEnter},u))})})])})])])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function to(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function xa(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?to(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):to(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Bn=Oe({name:"TPanelContent",props:{mode:String,format:String,enableTimePicker:Boolean,timePickerProps:{type:Object,default:function(){return{}}},value:[String,Number,Array,Date],year:Number,month:Number,tableData:Array,time:String,popupVisible:Boolean,firstDayOfWeek:Number,partial:String,onYearChange:Function,onMonthChange:Function,onJumperClick:Function,onCellMouseEnter:Function,onCellClick:Function,onCellMouseLeave:Function,onTimePickerChange:Function},setup:function(t){var n=lt("date-picker__panel"),a=ht({mode:t.mode,format:t.format,enableTimePicker:t.enableTimePicker}),r=a.timeFormat,l="00:00:00";return{COMPONENT_NAME:n,defaultTimeValue:l,timeFormat:r}},render:function(){var t=this,n=arguments[0],a=this.COMPONENT_NAME,r=this.defaultTimeValue,l=this.timeFormat;return n("div",{class:"".concat(a,"-content")},[n("div",{class:"".concat(a,"-").concat(this.mode)},[n(Oc,{props:xa({},{mode:this.mode,year:this.year,month:this.month,onMonthChange:function(o){var s;return(s=t.onMonthChange)===null||s===void 0?void 0:s.call(t,o,{partial:t.partial})},onYearChange:function(o){var s;return(s=t.onYearChange)===null||s===void 0?void 0:s.call(t,o,{partial:t.partial})},onJumperClick:function(o){var s,u=o.trigger;return(s=t.onJumperClick)===null||s===void 0?void 0:s.call(t,{trigger:u,partial:t.partial})}})}),n(kc,{props:xa({},{mode:this.mode,data:this.tableData,time:this.time,value:this.value,format:this.format,firstDayOfWeek:this.firstDayOfWeek,onCellClick:function(o,s){var u,d=s.e;return(u=t.onCellClick)===null||u===void 0?void 0:u.call(t,o,{e:d,partial:t.partial})},onCellMouseEnter:function(o){var s;return(s=t.onCellMouseEnter)===null||s===void 0?void 0:s.call(t,o,{partial:t.partial})},onCellMouseLeave:this.onCellMouseLeave})})]),this.enableTimePicker&&n("div",{class:"".concat(a,"-time")},[n("div",{class:"".concat(a,"-time-viewer")},[this.time||r]),n(Ds,fe([{},{key:this.partial,props:xa({format:l,value:this.time||r,onChange:this.onTimePickerChange,isShowPanel:this.popupVisible},this.timePickerProps)}]))])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function no(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Pc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?no(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):no(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Dc=Oe({name:"TDatePickerTable",props:{enableTimePicker:Boolean,presetsPlacement:String,presets:Object,selectedValue:[Date,String,Number],onPresetClick:Function,onConfirmClick:Function},setup:function(t){var n=lt("date-picker__footer"),a=lt("date-picker__presets"),r=ke("datePicker"),l=r.t,i=r.global,o=L(function(){return[n.value,"".concat(n.value,"--").concat(t.presetsPlacement)]});return{footerClass:o,presetsClass:a,global:i,t:l}},render:function(){var t=this,n=arguments[0],a=this.footerClass,r=this.presetsClass,l=this.global,i=this.t;return n("div",{class:a},[n("div",{class:r},[this.presets&&Object.keys(this.presets).map(function(o){return n(et,{key:o,attrs:{size:"small",variant:"text"},on:{click:function(u){var d;return(d=t.onPresetClick)===null||d===void 0?void 0:d.call(t,t.presets[o],{e:u})}}},[o])})]),this.enableTimePicker&&n(et,{props:Pc({},{size:"small",theme:"primary",disabled:!this.selectedValue,onClick:function(s){var u;return(u=t.onConfirmClick)===null||u===void 0?void 0:u.call(t,{e:s})}})},[i(l.confirm)])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Tc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ao(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ao(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Jn=Oe({name:"TExtraContent",props:{presets:Object,enableTimePicker:Boolean,presetsPlacement:String,onPresetClick:Function,onConfirmClick:Function,selectedValue:String},setup:function(t){var n=L(function(){return t.enableTimePicker||t.presets});return{showPanelFooter:n}},render:function(){var t=arguments[0],n=this.showPanelFooter;return n?t(Dc,{props:Tc({},{presets:this.presets,onPresetClick:this.onPresetClick,enableTimePicker:this.enableTimePicker,onConfirmClick:this.onConfirmClick,presetsPlacement:this.presetsPlacement,selectedValue:this.selectedValue})}):null}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function $a(e){var t,n=ke("datePicker"),a=n.global,r={minDate:e.minDate,maxDate:e.maxDate,disableDate:e.disableDate,firstDayOfWeek:(t=e.firstDayOfWeek)!==null&&t!==void 0?t:a.value.firstDayOfWeek,monthLocal:a.value.months,quarterLocal:a.value.quarters,showWeekOfYear:e.mode==="week"},l=[];return e.mode==="date"?l=Ur({year:e.year,month:e.month},r):e.mode==="week"?l=Ur({year:e.year,month:e.month},r):e.mode==="quarter"?l=gc(e.year,r):e.mode==="month"?l=yc(e.year,r):e.mode==="year"&&(l=bc(e.year,r)),wc(l,{start:e.start,end:e.end,hoverStart:e.hoverStart,hoverEnd:e.hoverEnd,type:e.mode,isRange:e.isRange})}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function pi(e){return{disableDate:function(n){return!Rc({disableDate:e.disableDate,format:e.format,mode:e.mode,value:n})},minDate:Vt(e.disableDate)&&"before"in e.disableDate?new Date(e.disableDate.before):e.start,maxDate:Vt(e.disableDate)&&"after"in e.disableDate?new Date(e.disableDate.after):e.end}}function Rc(e){if(!e.disableDate)return!0;var t=!0;if(typeof e.disableDate=="function")return!e.disableDate(e.value);if(Array.isArray(e.disableDate)){var n=!1,a=e.disableDate.map(function(c){return Y(c,e.format)});return a.forEach(function(c){c.isSame(Y(e.value))&&(n=!0)}),!n}if(e.disableDate.from&&e.disableDate.to){var r=Y(new Date(e.disableDate.from)),l=Y(new Date(e.disableDate.to));return!Y(e.value).isBetween(r,l,e.mode,"[]")}var i=e.disableDate.before?new Date(e.disableDate.before):null,o=e.disableDate.after?new Date(e.disableDate.after):null;if(o&&i){var s=Y(new Date(i)),u=Y(new Date(o));t=Y(e.value).isBetween(s,u,e.mode,"[]")}else if(i){var d=Y(new Date(i));t=!Y(e.value).isBefore(d,e.mode)}else if(o){var v=Y(new Date(o));t=!Y(e.value).isAfter(v,e.mode)}return t}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function ro(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Dn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ro(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ro(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var hi=Oe({name:"TSinglePanel",props:{disableDate:[Object,Array,Function],mode:{type:String,default:"date"},format:String,presetsPlacement:{type:String,default:"bottom"},value:[String,Number,Array,Date],timePickerProps:Object,presets:Object,enableTimePicker:Boolean,firstDayOfWeek:Number,year:Number,month:Number,time:String,popupVisible:Boolean,onPanelClick:Function,onCellClick:Function,onCellMouseEnter:Function,onCellMouseLeave:Function,onJumperClick:Function,onConfirmClick:Function,onPresetClick:Function,onYearChange:Function,onMonthChange:Function,onTimePickerChange:Function},setup:function(t){var n=lt("date-picker__panel"),a=ke("datePicker"),r=a.global,l=ht({mode:t.mode,format:t.format,enableTimePicker:t.enableTimePicker}),i=l.format,o=pi({format:i,mode:t.mode,disableDate:t.disableDate}),s=L(function(){return $a(Dn({year:t.year,month:t.month,mode:t.mode,start:t.value?ie(t.value,i).toDate():void 0,firstDayOfWeek:t.firstDayOfWeek||r.value.firstDayOfWeek},o))}),u=L(function(){return{format:i,value:t.value,mode:t.mode,year:t.year,month:t.month,firstDayOfWeek:t.firstDayOfWeek||r.value.firstDayOfWeek,tableData:s.value,popupVisible:t.popupVisible,enableTimePicker:t.enableTimePicker,timePickerProps:t.timePickerProps,time:t.time,onMonthChange:t.onMonthChange,onYearChange:t.onYearChange,onJumperClick:t.onJumperClick,onCellClick:t.onCellClick,onCellMouseEnter:t.onCellMouseEnter,onCellMouseLeave:t.onCellMouseLeave,onTimePickerChange:t.onTimePickerChange}}),d=L(function(){return{presets:t.presets,enableTimePicker:t.enableTimePicker,presetsPlacement:t.presetsPlacement,onPresetClick:t.onPresetClick,onConfirmClick:t.onConfirmClick,selectedValue:t.value}});return{COMPONENT_NAME:n,panelContentProps:u,extraProps:d}},render:function(){var t=this,n=arguments[0],a=this.COMPONENT_NAME,r=this.panelContentProps,l=this.extraProps;return n("div",{class:[a,A({},"".concat(a,"--direction-row"),["left","right"].includes(this.presetsPlacement))],on:{click:function(o){var s;return(s=t.onPanelClick)===null||s===void 0?void 0:s.call(t,{e:o})}}},[["top","left"].includes(this.presetsPlacement)?n(Jn,{props:Dn({},l)}):null,n(Bn,{props:Dn({},r)}),["bottom","right"].includes(this.presetsPlacement)?n(Jn,{props:Dn({},l)}):null])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function oo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function lo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Ec=Oe({name:"TDatePicker",props:ut,setup:function(t,n){var a=n.emit,r=lt("date-picker"),l=xt({CalendarIcon:Hl}),i=l.CalendarIcon,o=_c(t,{emit:a}),s=o.inputValue,u=o.popupVisible,d=o.inputProps,v=o.popupProps,c=o.isHoverCell,f=o.cacheValue,p=o.value,h=o.year,y=o.month,m=o.time,g=o.inputRef,b=o.onChange,C=L(function(){return ht({mode:t.mode,format:t.format,valueType:t.valueType,enableTimePicker:t.enableTimePicker})}),w=Ja(),x=w.formDisabled,S=L(function(){return x.value||t.disabled});ce(u,function(E){f.value=ue(p.value,{format:C.value.format}),s.value=ue(p.value,{format:C.value.format}),E?(h.value=ie(p.value,C.value.format).year(),y.value=ie(p.value,C.value.format).month(),m.value=tn(p.value,C.value.timeFormat)):c.value=!1});function T(E){c.value=!0,s.value=ue(E,{format:C.value.format})}function k(){c.value=!1,s.value=ue(f.value,{format:C.value.format})}function _(E){var F;c.value=!1,t.mode==="date"&&(h.value=E.getFullYear(),y.value=E.getMonth()),t.enableTimePicker?f.value=ue(E,{format:C.value.format}):(b==null||b(ue(E,{format:C.value.format,targetFormat:C.value.valueType}),{dayjsValue:ie(E,C.value.format),trigger:"pick"}),u.value=!1),(F=t.onPick)===null||F===void 0||F.call(t,E),a("pick",E)}function R(E){var F=E.trigger,B={date:1,week:1,month:12,quarter:12,year:120},z=B[t.mode]||0,M=new Date(h.value,y.value),I=null;F==="prev"?I=da(M,z):F==="current"?I=new Date:F==="next"&&(I=fa(M,z));var V=I.getFullYear(),j=I.getMonth();h.value=V,y.value=j}function P(E){var F;m.value=E;var B=en(E),z=B.hours,M=B.minutes,I=B.seconds,V=B.milliseconds,j=B.meridiem,J=z;/am/i.test(j)&&J===12&&(J-=12),/pm/i.test(j)&&J<12&&(J+=12);var U=Y(s.value,C.value.format).isValid()?Y(s.value,C.value.format):Y(),Z=U.hour(J).minute(M).second(I).millisecond(V).toDate();s.value=ue(Z,{format:C.value.format}),f.value=ue(Z,{format:C.value.format}),(F=t.onPick)===null||F===void 0||F.call(t,Z)}function O(){var E=ue(s.value,{format:C.value.format});E?b==null||b(ue(s.value,{format:C.value.format,targetFormat:C.value.valueType}),{dayjsValue:ie(s.value,C.value.format),trigger:"confirm"}):s.value=ue(p.value,{format:C.value.format}),u.value=!1}function $(E){var F=typeof E=="function"?E():E;b==null||b(ue(F,{format:C.value.format,targetFormat:C.value.valueType}),{dayjsValue:ie(F,C.value.format),trigger:"preset"}),u.value=!1}function D(E){h.value=E}function N(E){y.value=E}var K=L(function(){return{value:f.value,year:h.value,month:y.value,format:C.value.format,mode:t.mode,presets:t.presets,time:m.value,disableDate:t.disableDate,firstDayOfWeek:t.firstDayOfWeek,timePickerProps:t.timePickerProps,enableTimePicker:t.enableTimePicker,presetsPlacement:t.presetsPlacement,popupVisible:u.value,onCellClick:_,onCellMouseEnter:T,onCellMouseLeave:k,onJumperClick:R,onConfirmClick:O,onPresetClick:$,onYearChange:D,onMonthChange:N,onTimePickerChange:P,onPanelClick:function(){var F,B;return(F=g.value)===null||F===void 0||(B=F.focus)===null||B===void 0?void 0:B.call(F)}}});return{COMPONENT_NAME:r,inputValue:s,datePickerPopupProps:v,datePickerInputProps:d,popupVisible:u,panelProps:K,isDisabled:S,CalendarIcon:i}},render:function(){var t=this,n=arguments[0],a=this.COMPONENT_NAME,r=this.inputValue,l=this.datePickerPopupProps,i=this.datePickerInputProps,o=this.popupVisible,s=this.panelProps,u=this.isDisabled,d=this.CalendarIcon,v=function(){return t.suffixIcon?t.suffixIcon:t.$scopedSlots.suffixIcon?t.$scopedSlots.suffixIcon:t.$scopedSlots["suffix-icon"]?t.$scopedSlots["suffix-icon"]:function(){return n(d)}};return n("div",{class:a},[n(Xl,{attrs:{disabled:u,value:r,status:this.status,tips:this.tips,popupProps:l,inputProps:lo({suffixIcon:v()},i),popupVisible:o,clearable:this.clearable,allowInput:this.allowInput,panel:function(){return n(hi,{props:lo({},s)})}}})])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var $c={onCellClick:Function,onChange:Function,onConfirm:Function,onMonthChange:Function,onPanelClick:Function,onPresetClick:Function,onTimeChange:Function,onYearChange:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function so(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?io(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):io(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Kc=Oe({name:"TDatePickerPanel",props:so({value:ut.value,defaultValue:ut.defaultValue,disabled:ut.disabled,disableDate:ut.disableDate,enableTimePicker:ut.enableTimePicker,firstDayOfWeek:ut.firstDayOfWeek,format:ut.format,mode:ut.mode,presets:ut.presets,presetsPlacement:ut.presetsPlacement,timePickerProps:ut.timePickerProps},$c),setup:function(t,n){var a=n.emit,r=vi(t),l=r.cacheValue,i=r.value,o=r.year,s=r.month,u=r.time,d=r.onChange,v=L(function(){return ht({mode:t.mode,format:t.format,enableTimePicker:t.enableTimePicker})});function c(w,x){var S,T=x.e;(S=t.onCellClick)===null||S===void 0||S.call(t,{date:w,e:T}),a("cell-click",{date:w,e:T}),t.mode==="date"&&(o.value=w.getFullYear(),s.value=w.getMonth()),t.enableTimePicker?l.value=ue(w,{format:v.value.format}):d==null||d(ue(w,{format:v.value.format}),{dayjsValue:ie(w,v.value.format),trigger:"pick"})}function f(w){var x=w.trigger,S={prev:"arrow-previous",next:"arrow-next"},T={date:1,week:1,month:12,quarter:12,year:120},k=T[t.mode]||0,_=new Date(o.value,s.value),R=null;x==="prev"?R=da(_,k):x==="current"?R=new Date:x==="next"&&(R=fa(_,k));var P=R.getFullYear(),O=R.getMonth();if(o.value!==P){var $;($=t.onYearChange)===null||$===void 0||$.call(t,{year:P,date:Y(i.value).toDate(),trigger:x==="current"?"today":"year-".concat(S[x])}),a("year-change",{year:P,date:Y(i.value).toDate(),trigger:x==="current"?"today":"year-".concat(S[x])})}if(s.value!==O){var D;(D=t.onMonthChange)===null||D===void 0||D.call(t,{month:O,date:Y(i.value).toDate(),trigger:x==="current"?"today":"month-".concat(S[x])}),a("month-change",{month:O,date:Y(i.value).toDate(),trigger:x==="current"?"today":"month-".concat(S[x])})}o.value=P,s.value=O}function p(w){var x;u.value=w;var S=en(w),T=S.hours,k=S.minutes,_=S.seconds,R=S.milliseconds,P=S.meridiem,O=T;/am/i.test(P)&&O===12&&(O-=12),/pm/i.test(P)&&O<12&&(O+=12);var $=Y(l.value,v.value.format).isValid()?Y(l.value,v.value.format):Y(),D=$.hour(O).minute(k).second(_).millisecond(R).toDate();l.value=ue(D,{format:v.value.format}),(x=t.onTimeChange)===null||x===void 0||x.call(t,{time:w,date:ie(i.value,v.value.format).toDate(),trigger:"time-hour"}),a("time-change",{time:w,date:ie(i.value,v.value.format).toDate(),trigger:"time-hour"})}function h(w){var x,S=w.e;d==null||d(ue(l.value,{format:v.value.format}),{dayjsValue:ie(l.value,v.value.format),trigger:"confirm"}),(x=t.onConfirm)===null||x===void 0||x.call(t,{date:Y(l.value).toDate(),e:S}),a("confirm",{date:Y(l.value).toDate(),e:S})}function y(w,x){var S,T=x.e,k=x.preset,_=typeof w=="function"?w():w;d==null||d(ue(_,{format:v.value.format}),{dayjsValue:ie(_,v.value.format),trigger:"preset"}),(S=t.onPresetClick)===null||S===void 0||S.call(t,{e:T,preset:k}),a("preset-click",{e:T,preset:k})}function m(w){var x;o.value=w,(x=t.onYearChange)===null||x===void 0||x.call(t,{year:o.value,date:ie(i.value,v.value.format).toDate(),trigger:"year-select"}),a("year-change",{year:o.value,date:ie(i.value,v.value.format).toDate(),trigger:"year-select"})}function g(w){var x;s.value=w,(x=t.onMonthChange)===null||x===void 0||x.call(t,{month:s.value,date:ie(i.value,v.value.format).toDate(),trigger:"month-select"}),a("month-change",{month:s.value,date:ie(i.value,v.value.format).toDate(),trigger:"month-select"})}function b(w){var x;(x=t.onPanelClick)===null||x===void 0||x.call(t,w),a("panel-click",w)}var C=L(function(){return{value:l.value,year:o.value,month:s.value,mode:t.mode,format:v.value.format,presets:t.presets,time:u.value,disableDate:t.disableDate,firstDayOfWeek:t.firstDayOfWeek,timePickerProps:t.timePickerProps,enableTimePicker:t.enableTimePicker,presetsPlacement:t.presetsPlacement,onPanelClick:b,onCellClick:c,onJumperClick:f,onConfirmClick:h,onPresetClick:y,onYearChange:m,onMonthChange:g,onTimePickerChange:p}});return{panelProps:C}},render:function(){var t=arguments[0],n=this.panelProps;return t(hi,{props:so({},n)})}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var at={allowInput:Boolean,clearable:Boolean,disableDate:{type:[Object,Array,Function]},disabled:Boolean,enableTimePicker:Boolean,firstDayOfWeek:{type:Number,validator:function(t){return t?[1,2,3,4,5,6,7].includes(t):!0}},format:{type:String,default:""},mode:{type:String,default:"date",validator:function(t){return t?["year","quarter","month","week","date"].includes(t):!0}},panelPreselection:{type:Boolean,default:!0},placeholder:{type:[String,Array]},popupProps:{type:Object},prefixIcon:{type:Function},presets:{type:Object},presetsPlacement:{type:String,default:"bottom",validator:function(t){return t?["left","top","right","bottom"].includes(t):!0}},rangeInputProps:{type:Object},separator:{type:String,default:""},status:{type:String,validator:function(t){return t?["default","success","warning","error"].includes(t):!0}},suffixIcon:{type:Function},timePickerProps:{type:Object},tips:{type:[String,Function]},value:{type:Array,default:void 0},defaultValue:{type:Array,default:function(){return[]}},valueType:{type:String,validator:function(t){return t?["time-stamp","Date","YYYY","YYYY-MM","YYYY-MM-DD","YYYY-MM-DD HH","YYYY-MM-DD HH:mm","YYYY-MM-DD HH:mm:ss","YYYY-MM-DD HH:mm:ss:SSS"].includes(t):!0}},onBlur:Function,onChange:Function,onFocus:Function,onInput:Function,onPick:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function uo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function yt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?uo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):uo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var mi=Oe({name:"TRangePanel",props:{hoverValue:Array,activeIndex:Number,isFirstValueSelected:Boolean,disableDate:[Object,Array,Function],mode:{type:String,default:"date"},format:String,presetsPlacement:{type:String,default:"bottom"},value:Array,timePickerProps:Object,presets:Object,enableTimePicker:Boolean,firstDayOfWeek:Number,panelPreselection:Boolean,hidePreselection:{type:Boolean,defaultValue:!0},popupVisible:Boolean,year:Array,month:Array,time:Array,onClick:Function,onCellClick:Function,onCellMouseEnter:Function,onCellMouseLeave:Function,onJumperClick:Function,onConfirmClick:Function,onPresetClick:Function,onYearChange:Function,onMonthChange:Function,onTimePickerChange:Function},setup:function(t){var n=lt("date-range-picker__panel"),a=ke("datePicker"),r=a.global,l=ht({mode:t.mode,format:t.format,enableTimePicker:t.enableTimePicker}),i=l.format,o=!t.panelPreselection&&t.value.length===2,s=pi({format:i,mode:t.mode,disableDate:t.disableDate,start:t.isFirstValueSelected&&t.activeIndex===1?new Date(ie(t.value[0],i,"start").toDate().setHours(0,0,0)):void 0,end:t.isFirstValueSelected&&t.activeIndex===0?new Date(ie(t.value[1],i).toDate().setHours(23,59,59)):void 0}),u=L(function(){return $a(yt({isRange:!0,start:t.value[0]?ie(t.value[0],i).toDate():void 0,end:t.value[1]?ie(t.value[1],i).toDate():void 0,hoverStart:!o&&t.hoverValue[0]?ie(t.hoverValue[0],i).toDate():void 0,hoverEnd:!o&&t.hoverValue[1]?ie(t.hoverValue[1],i).toDate():void 0,year:t.year[0],month:t.month[0],mode:t.mode,firstDayOfWeek:t.firstDayOfWeek||r.value.firstDayOfWeek},s))}),d=L(function(){return $a(yt({isRange:!0,start:t.value[0]?ie(t.value[0],i).toDate():void 0,end:t.value[1]?ie(t.value[1],i).toDate():void 0,hoverStart:!o&&t.hoverValue[0]?ie(t.hoverValue[0],i).toDate():void 0,hoverEnd:!o&&t.hoverValue[1]?ie(t.hoverValue[1],i).toDate():void 0,year:t.year[1],month:t.month[1],mode:t.mode,firstDayOfWeek:t.firstDayOfWeek||r.value.firstDayOfWeek},s))}),v=L(function(){return{format:i,mode:t.mode,firstDayOfWeek:t.firstDayOfWeek||r.value.firstDayOfWeek,popupVisible:t.popupVisible,enableTimePicker:t.enableTimePicker,timePickerProps:t.timePickerProps,onMonthChange:t.onMonthChange,onYearChange:t.onYearChange,onJumperClick:t.onJumperClick,onCellClick:t.onCellClick,onCellMouseEnter:t.onCellMouseEnter,onCellMouseLeave:t.onCellMouseLeave,onTimePickerChange:t.onTimePickerChange}});return{COMPONENT_NAME:n,startTableData:u,endTableData:d,panelContentProps:v}},render:function(){var t=this,n=arguments[0],a=this.COMPONENT_NAME,r=this.startTableData,l=this.endTableData,i=this.panelContentProps;return n("div",{class:[a,A({},"".concat(a,"--direction-row"),["left","right"].includes(this.presetsPlacement))],on:{click:function(s){var u;return(u=t.onClick)===null||u===void 0?void 0:u.call(t,{e:s})}}},[["top","left"].includes(this.presetsPlacement)?n(Jn,{props:yt({},{presets:this.presets,selectedValue:this.value[this.activeIndex],enableTimePicker:this.enableTimePicker,onPresetClick:this.onPresetClick,onConfirmClick:this.onConfirmClick,presetsPlacement:this.presetsPlacement})}):null,n("div",{class:"".concat(a,"-content-wrapper")},[this.enableTimePicker?n(Bn,{key:"start",props:yt({},yt({partial:this.activeIndex?"end":"start",year:this.activeIndex?this.year[1]:this.year[0],month:this.activeIndex?this.month[1]:this.month[0],time:this.activeIndex?this.time[1]:this.time[0],value:this.value,tableData:this.activeIndex?l:r},i))}):[n(Bn,{key:"startPanel",props:yt({},yt({partial:"start",year:this.year[0],month:this.month[0],time:this.time[0],value:this.value,tableData:r},i))}),n(Bn,{key:"endPanel",props:yt({},yt({partial:"end",year:this.year[1],month:this.month[1],time:this.time[1],value:this.value,tableData:l},i))})]]),["bottom","right"].includes(this.presetsPlacement)?n(Jn,{props:yt({},{presets:this.presets,selectedValue:this.value[this.activeIndex],enableTimePicker:this.enableTimePicker,onPresetClick:this.onPresetClick,onConfirmClick:this.onConfirmClick,presetsPlacement:this.presetsPlacement})}):null])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function pn(e){var t=e.value,n=e.mode,a=n===void 0?"date":n,r=e.format,l=e.timeFormat,i=l===void 0?"HH:mm:ss":l,o=e.enableTimePicker,s={year:[Y().year(),Y().year()],month:[Y().month(),Y().month()],time:[Y().format(i),Y().format(i)]};return a==="year"?s.year[1]+=10:a==="month"||a==="quarter"?s.year[1]+=1:(a==="date"||a==="week")&&!o&&(s.month[1]+=1),!t||!Array.isArray(t)||!t.length?s:{year:t.map(function(u){return ie(u,r).year()}),month:t.map(function(u){return ie(u,r).month()}),time:t.map(function(u){return ie(u,r).format(i)})}}function gi(e){var t=Pe(e),n=t.value,a=ia(n,e.defaultValue,e.onChange,"change"),r=me(a,2),l=r[0],i=r[1],o=L(function(){return ht({mode:e.mode,format:e.format,enableTimePicker:e.enableTimePicker})});e.enableTimePicker&&(Xa(o.value.format)||console.error("format: ".concat(o.value.format," \u4E0D\u89C4\u8303\uFF0C\u5305\u542B\u65F6\u95F4\u9009\u62E9\u5FC5\u987B\u8981\u6709\u65F6\u95F4\u683C\u5F0F\u5316 HH:mm:ss"))),Array.isArray(l.value)?We(l.value,o.value.format)||console.error("value: ".concat(l.value," is invalid dateTime! Check whether the value is consistent with format: ").concat(o.value.format)):console.error("typeof value: ".concat(l.value," must be Array!"));var s=H(!1),u=H(pn({value:l.value,mode:e.mode,format:o.value.format,timeFormat:o.value.timeFormat}).time),d=H(pn({value:l.value,mode:e.mode,format:o.value.format,enableTimePicker:e.enableTimePicker}).month),v=H(pn({value:l.value,mode:e.mode,format:o.value.format}).year),c=H(ue(l.value,{format:o.value.format}));return gn(function(){if(!l.value){c.value=[];return}!We(l.value,o.value.format)||(c.value=ue(l.value,{format:o.value.format}),u.value=tn(l.value,o.value.timeFormat))}),{year:v,month:d,value:l,time:u,isFirstValueSelected:s,cacheValue:c,onChange:i}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function co(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?co(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):co(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Rn={first:"start",second:"end"};function Ac(e,t){var n=t.emit,a=lt("date-range-picker"),r=ke("datePicker"),l=r.global,i=H(!1),o=H(),s=gi(e),u=s.value,d=s.onChange,v=s.time,c=s.month,f=s.year,p=s.cacheValue,h=s.isFirstValueSelected,y=L(function(){return ht({mode:e.mode,format:e.format,valueType:e.valueType,enableTimePicker:e.enableTimePicker})}),m=H(!1),g=H(!1),b=H(0),C=H(ue(e.value,{format:y.value.format})),w=L(function(){return Tn(Tn({},e.rangeInputProps),{},{ref:o,clearable:e.clearable,prefixIcon:e.prefixIcon,readonly:!e.allowInput,separator:e.separator,placeholder:e.placeholder||l.value.placeholder[e.mode],activeIndex:m.value?b.value:void 0,class:A({},"".concat(a.value,"__input--placeholder"),g.value),onClick:function(T){var k=T.position;b.value=k==="first"?0:1},onClear:function(T){var k=T.e;k.stopPropagation(),m.value=!1,d==null||d([],{dayjsValue:[],trigger:"clear"}),n("clear",[],{dayjsValue:[],trigger:"clear"})},onBlur:function(T,k){var _,R=k.e,P=k.position;(_=e.onBlur)===null||_===void 0||_.call(e,{value:T,partial:Rn[P],e:R}),n("blur",{value:T,partial:Rn[P],e:R})},onFocus:function(T,k){var _,R=k.e,P=k.position;(_=e.onFocus)===null||_===void 0||_.call(e,{value:T,partial:Rn[P],e:R}),n("focus",{value:T,partial:Rn[P],e:R}),b.value=P==="first"?0:1},onChange:function(T){if(C.value=T,!!We(T,y.value.format)){var k=[],_=[],R=[];T.forEach(function(P,O){k.push(Y(P).year()||f.value[O]),_.push(Y(P).month()||c.value[O]),R.push(Y(P).format(y.value.timeFormat)||v.value[O])}),f.value=k,c.value=_,v.value=R}},onEnter:function(T){!We(T,y.value.format)&&!We(u.value,y.value.format)||(m.value=!1,We(T,y.value.format)?d==null||d(ue(T,{format:y.value.format,targetFormat:y.value.valueType,autoSwap:!0}),{dayjsValue:T.map(function(k){return ie(k,y.value.format)}),trigger:"enter"}):We(u.value,y.value.format)?C.value=ue(u.value,{format:y.value.format}):C.value=[])}})}),x=L(function(){var S,T,k;return Tn(Tn({expandAnimation:!0},e.popupProps),{},{overlayInnerStyle:(S=(T=e.popupProps)===null||T===void 0?void 0:T.overlayInnerStyle)!==null&&S!==void 0?S:{width:"auto"},overlayClassName:[(k=e.popupProps)===null||k===void 0?void 0:k.overlayClassName,"".concat(a.value,"__panel-container")],onVisibleChange:function(R,P){var O,$;if((O=e.popupProps)===null||O===void 0||($=O.onVisibleChange)===null||$===void 0||$.call(O,R,P),P.trigger==="trigger-element-click"){var D,N,K={0:"first",1:"second"};(D=o.value)===null||D===void 0||(N=D.focus)===null||N===void 0||N.call(D,{position:K[b.value]}),m.value=!0;return}m.value=R}})});return gn(function(){if(!u.value){C.value=[];return}!We(u.value,y.value.format)||(C.value=ue(u.value,{format:y.value.format}))}),gn(function(){var S,T;if(!i.value){i.value=!0;return}var k={0:"first",1:"second"};(S=o.value)===null||S===void 0||(T=S.focus)===null||T===void 0||T.call(S,{position:k[b.value]})}),{year:f,month:c,value:u,time:v,inputValue:C,popupVisible:m,rangeInputProps:w,popupProps:x,isHoverCell:g,activeIndex:b,isFirstValueSelected:h,cacheValue:p,onChange:d}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function fo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function vo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Fc=Oe({name:"TDateRangePicker",props:at,setup:function(t,n){var a=n.emit,r=lt("date-range-picker"),l=xt({CalendarIcon:Hl}),i=l.CalendarIcon,o=Ac(t,{emit:a}),s=o.inputValue,u=o.popupVisible,d=o.rangeInputProps,v=o.popupProps,c=o.value,f=o.year,p=o.month,h=o.time,y=o.cacheValue,m=o.activeIndex,g=o.isHoverCell,b=o.isFirstValueSelected,C=o.onChange,w=L(function(){return ht({mode:t.mode,enableTimePicker:t.enableTimePicker,format:t.format,valueType:t.valueType})}),x=H(!1);ce(u,function(K){if(K)if(x.value=!1,y.value=ue(c.value||[],{format:w.value.format}),h.value=tn(c.value||[Y().format(w.value.timeFormat),Y().format(w.value.timeFormat)],w.value.timeFormat),!c.value.length)f.value=pn({value:c.value,mode:t.mode,format:w.value.format}).year,p.value=pn({value:c.value,mode:t.mode,format:w.value.format,enableTimePicker:t.enableTimePicker}).month;else if(c.value.length===2&&!t.enableTimePicker){var E=c.value.map(function(F){return ie(F||new Date,w.value.format).month()});f.value[0]===f.value[1]&&E[0]===E[1]&&(E[0]===11?E[0]-=1:E[1]+=1),p.value=E,f.value=c.value.map(function(F){return ie(F||new Date,w.value.format).year()}),(t.mode==="month"||t.mode==="quarter")&&f.value[0]===f.value[1]&&(f.value=[f.value[0],f.value[0]+1])}else f.value=c.value.map(function(F){return ie(F||new Date,w.value.format).year()}),p.value=c.value.map(function(F){return ie(F||new Date,w.value.format).month()});else g.value=!1,b.value=!1,s.value=ue(c.value,{format:w.value.format})});function S(K){var E=K;m.value&&!t.enableTimePicker&&E.setHours(23,59,59),g.value=!0;var F=oe(s.value);F[m.value]=ue(E,{format:w.value.format}),s.value=F}function T(){g.value=!1,s.value=y.value}function k(K,E){var F,B=E.e,z=E.partial,M=K;m.value&&!t.enableTimePicker&&M.setHours(23,59,59),(F=t.onPick)===null||F===void 0||F.call(t,M,{e:B,partial:m.value?"end":"start"}),a("pick",M,{e:B,partial:m.value?"end":"start"}),g.value=!1,x.value=!0;var I=oe(s.value);if(I[m.value]=ue(M,{format:w.value.format}),y.value=I,s.value=I,t.mode==="date"){var V=z==="start"?0:1,j=Y(M).month()!==p.value[V];j&&(m.value===0&&(p.value=[Y(M).month(),Math.min(Y(M).month()+1,11)]),m.value===1&&(p.value=[Math.max(Y(M).month()-1,0),Y(M).month()]))}if(!t.enableTimePicker){var J=I.findIndex(function(Z){return!Z||!We(Z,w.value.format)});if(J===-1&&I.length===2&&(!b.value&&ie(I[0],w.value.format).isAfter(ie(I[1],w.value.format))?(I[m.value?0:1]="",y.value=I,s.value=I):C==null||C(ue(I,{format:w.value.format,targetFormat:w.value.valueType,autoSwap:!0}),{dayjsValue:I.map(function(Z){return ie(Z,w.value.format)}),trigger:"pick"})),b.value)u.value=!1;else{var U=J;U===-1&&(U=m.value?0:1),m.value=U,b.value=!0}}}function _(K){var E=K.trigger,F=K.partial,B=F==="start"?0:1,z={date:1,week:1,month:12,quarter:12,year:120},M=z[t.mode]||0,I=new Date(f.value[B],p.value[B]),V=null;E==="prev"?V=da(I,M):E==="current"?V=new Date:E==="next"&&(V=fa(I,M));var j=oe(f.value);j[B]=V.getFullYear();var J=oe(p.value);J[B]=V.getMonth(),B===0&&(j[1]=Math.max(j[0],j[1]),j[0]===j[1]&&(J[1]=Math.max(J[0],J[1]))),B===1&&(j[0]=Math.min(j[0],j[1]),j[0]===j[1]&&(J[0]=Math.min(J[0],J[1]))),f.value=j,p.value=J}function R(K){var E=en(K),F=E.hours,B=E.minutes,z=E.seconds,M=E.milliseconds,I=E.meridiem,V=oe(s.value),j=s.value[m.value],J=Y(j,w.value.format).isValid()?Y(j,w.value.format):Y().year(f.value[m.value]).month(p.value[m.value]),U=F;/am/i.test(I)&&U===12&&(U-=12),/pm/i.test(I)&&U<12&&(U+=12);var Z=J.hour(U).minute(B).second(z).millisecond(M).toDate();V[m.value]=Z;var ve=oe(h.value);ve[m.value]=K,h.value=ve,x.value=!0,s.value=ue(V,{format:w.value.format}),y.value=ue(V,{format:w.value.format})}function P(){var K=oe(s.value),E=K.findIndex(function(B){return!B||!We(B,w.value.format)});if(E===-1&&K.length===2&&(!b.value&&ie(K[0],w.value.format).isAfter(ie(K[1],w.value.format))?(K[m.value?0:1]="",y.value=K,s.value=K):C==null||C(ue(K,{format:w.value.format,targetFormat:w.value.valueType,autoSwap:!0}),{dayjsValue:K.map(function(B){return ie(B,w.value.format)}),trigger:"confirm"})),b.value)u.value=!1;else{var F=E;F===-1&&(F=m.value?0:1),m.value=F,b.value=!0}}function O(K){var E=K;typeof K=="function"&&(E=K()),Array.isArray(E)?(C==null||C(ue(E,{format:w.value.format,targetFormat:w.value.valueType,autoSwap:!0}),{dayjsValue:E.map(function(F){return ie(F,w.value.format)}),trigger:"preset"}),u.value=!1):console.error("preset: ".concat(K," \u9884\u8BBE\u503C\u5FC5\u987B\u662F\u6570\u7EC4!"))}function $(K,E){var F=E.partial,B=F==="start"?0:1;t.enableTimePicker&&(B=m.value);var z=oe(f.value);z[B]=K,B===0&&(z[1]=Math.max(z[0],z[1])),B===1&&(z[0]=Math.min(z[0],z[1])),f.value=z}function D(K,E){var F=E.partial,B=F==="start"?0:1;t.enableTimePicker&&(B=m.value);var z=oe(p.value);z[B]=K,f[0]===f[1]&&(B===0&&(z[1]=Math.max(z[0],z[1])),B===1&&(z[0]=Math.min(z[0],z[1]))),p.value=z}var N=L(function(){return{hoverValue:g.value?s.value:[],value:x.value?y.value:c.value,isFirstValueSelected:b.value,activeIndex:m.value,year:f.value,month:p.value,format:w.value.format,mode:t.mode,presets:t.presets,time:h.value,disableDate:t.disableDate,firstDayOfWeek:t.firstDayOfWeek,timePickerProps:t.timePickerProps,enableTimePicker:t.enableTimePicker,presetsPlacement:t.presetsPlacement,panelPreselection:t.panelPreselection,popupVisible:u.value,onCellClick:k,onCellMouseEnter:S,onCellMouseLeave:T,onJumperClick:_,onConfirmClick:P,onPresetClick:O,onYearChange:$,onMonthChange:D,onTimePickerChange:R}});return{COMPONENT_NAME:r,inputValue:s,dateRangePickerPopupProps:v,dateRangePickerRangeInputProps:d,popupVisible:u,panelProps:N,CalendarIcon:i}},render:function(){var t=this,n=arguments[0],a=this.COMPONENT_NAME,r=this.inputValue,l=this.dateRangePickerPopupProps,i=this.dateRangePickerRangeInputProps,o=this.popupVisible,s=this.panelProps,u=this.CalendarIcon,d=function(){return t.suffixIcon?t.suffixIcon:t.$scopedSlots.suffixIcon?t.$scopedSlots.suffixIcon:t.$scopedSlots["suffix-icon"]?t.$scopedSlots["suffix-icon"]:function(){return n(u)}};return n("div",{class:a},[n(Ts,{attrs:{disabled:this.disabled,status:this.status,tips:this.tips,inputValue:r,popupProps:l,rangeInputProps:vo({suffixIcon:d()},i),popupVisible:o,panel:function(){return n(mi,{props:vo({},s)})}}})])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Nc={onCellClick:Function,onChange:Function,onConfirm:Function,onMonthChange:Function,onPanelClick:Function,onPresetClick:Function,onTimeChange:Function,onYearChange:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function po(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ho(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?po(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):po(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var jc=Oe({name:"TDateRangePickerPanel",props:ho({value:at.value,defaultValue:at.defaultValue,disabled:at.disabled,disableDate:at.disableDate,enableTimePicker:at.enableTimePicker,firstDayOfWeek:at.firstDayOfWeek,format:at.format,mode:at.mode,presets:at.presets,presetsPlacement:at.presetsPlacement,timePickerProps:at.timePickerProps,panelPreselection:at.panelPreselection},Nc),setup:function(t,n){var a=n.emit,r=gi(t),l=r.value,i=r.year,o=r.month,s=r.time,u=r.cacheValue,d=r.isFirstValueSelected,v=r.onChange,c=L(function(){return ht({mode:t.mode,enableTimePicker:t.enableTimePicker,format:t.format})}),f=H(!1),p=H(!1),h=H([]),y=L(function(){return d.value?1:0});ce(function(){return l.value},function(P){if(P.length===2&&!t.enableTimePicker){var O=P.map(function($){return ie($||new Date,c.value.format).month()});i.value[0]===i.value[1]&&O[0]===O[1]&&(O[0]===11?O[0]-=1:O[1]+=1),o.value=O}},{immediate:!0});function m(P){p.value=!0;var O=oe(h.value);O[y.value]=ue(P,{format:c.value.format}),h.value=O}function g(){p.value=!1,h.value=u.value}function b(P,O){var $,D=O.e;p.value=!1,f.value=!0;var N=oe(u.value);N[y.value]=ue(P,{format:c.value.format}),u.value=N,($=t.onCellClick)===null||$===void 0||$.call(t,{e:D,partial:y.value?"end":"start",date:N.map(function(K){return ie(K,c.value.format).toDate()})}),a("cell-click",{e:D,partial:y.value?"end":"start",date:N.map(function(K){return ie(K,c.value.format).toDate()})}),!t.enableTimePicker&&(N.length===2&&d.value?(v==null||v(ue(N,{format:c.value.format,autoSwap:!0}),{dayjsValue:N.map(function(K){return ie(K,c.value.format)}),trigger:"pick"}),d.value=!1):d.value=!0)}function C(P){var O=P.trigger,$=P.partial,D=$==="start"?0:1,N={prev:"arrow-previous",next:"arrow-next"},K={date:1,month:12,year:120},E=K[t.mode]||0,F=new Date(i.value[D],o.value[D]),B=null;O==="prev"?B=da(F,E):O==="current"?B=new Date:O==="next"&&(B=fa(F,E));var z=oe(i.value);z[D]=B.getFullYear();var M=oe(o.value);if(M[D]=B.getMonth(),D===0&&(z[1]=Math.max(z[0],z[1]),z[0]===z[1]&&(M[1]=Math.max(M[0],M[1]))),D===1&&(z[0]=Math.min(z[0],z[1]),z[0]===z[1]&&(M[0]=Math.min(M[0],M[1]))),i.value.some(function(j){return!z.includes(j)})){var I;(I=t.onYearChange)===null||I===void 0||I.call(t,{partial:$,year:z[D],date:l.value.map(function(j){return Y(j).toDate()}),trigger:O==="current"?"today":"year-".concat(N[O])}),a("year-change",{partial:$,year:z[D],date:l.value.map(function(j){return Y(j).toDate()}),trigger:O==="current"?"today":"year-".concat(N[O])})}if(o.value.some(function(j){return!M.includes(j)})){var V;(V=t.onMonthChange)===null||V===void 0||V.call(t,{partial:$,month:M[D],date:l.value.map(function(j){return Y(j).toDate()}),trigger:O==="current"?"today":"month-".concat(N[O])}),a("month-change",{partial:$,month:M[D],date:l.value.map(function(j){return Y(j).toDate()}),trigger:O==="current"?"today":"month-".concat(N[O])})}i.value=z,o.value=M}function w(P){var O,$=en(P),D=$.hours,N=$.minutes,K=$.seconds,E=$.milliseconds,F=$.meridiem,B=oe(u.value),z=u.value[y.value],M=Y(z,c.value.format).isValid()?Y(z,c.value.format):Y().year(i.value[y.value]).month(o.value[y.value]),I=D;/am/i.test(F)&&I===12&&(I-=12),/pm/i.test(F)&&I<12&&(I+=12);var V=M.hour(I).minute(N).second(K).millisecond(E).toDate();B[y.value]=V;var j=oe(s.value);j[y.value]=P,s.value=j,f.value=!0,u.value=ue(B,{format:c.value.format}),(O=t.onTimeChange)===null||O===void 0||O.call(t,{time:P,date:l.value.map(function(J){return Y(J).toDate()}),partial:y.value?"end":"start",trigger:"time-hour"}),a("time-change",{time:P,date:l.value.map(function(J){return Y(J).toDate()}),partial:y.value?"end":"start",trigger:"time-hour"})}function x(P){var O,$=P.e,D=oe(u.value);D.length===2&&d.value?(v==null||v(ue(D,{format:c.value.format,autoSwap:!0}),{dayjsValue:D.map(function(N){return ie(N,c.value.format)}),trigger:"confirm"}),i.value=D.map(function(N){return Y(N,c.value.format).year()}),o.value=D.map(function(N){return Y(N,c.value.format).month()}),d.value=!1):d.value=!0,(O=t.onConfirm)===null||O===void 0||O.call(t,{date:l.value.map(function(N){return Y(N).toDate()}),e:$}),a("confirm",{date:l.value.map(function(N){return Y(N).toDate()}),e:$})}function S(P){var O=P;typeof P=="function"&&(O=P()),Array.isArray(O)?v==null||v(ue(O,{format:c.value.format,autoSwap:!0}),{dayjsValue:O.map(function($){return ie($,c.value.format)}),trigger:"preset"}):console.error("preset: ".concat(P," \u9884\u8BBE\u503C\u5FC5\u987B\u662F\u6570\u7EC4!"))}function T(P,O){var $,D=O.partial,N=D==="start"?0:1;t.enableTimePicker&&(N=y.value);var K=oe(i.value);K[N]=P,N===0&&(K[1]=Math.max(K[0],K[1])),N===1&&(K[0]=Math.min(K[0],K[1])),i.value=K,($=t.onYearChange)===null||$===void 0||$.call(t,{partial:D,year:K[N],date:l.value.map(function(E){return Y(E).toDate()}),trigger:"year-select"}),a("year-change",{partial:D,year:K[N],date:l.value.map(function(E){return Y(E).toDate()}),trigger:"year-select"})}function k(P,O){var $,D=O.partial,N=D==="start"?0:1;t.enableTimePicker&&(N=y.value);var K=oe(o.value);K[N]=P,i[0]===i[1]&&(N===0&&(K[1]=Math.max(K[0],K[1])),N===1&&(K[0]=Math.min(K[0],K[1]))),o.value=K,($=t.onMonthChange)===null||$===void 0||$.call(t,{partial:D,month:K[N],date:l.value.map(function(E){return Y(E).toDate()}),trigger:"month-select"}),a("month-change",{partial:D,month:K[N],date:l.value.map(function(E){return Y(E).toDate()}),trigger:"month-select"})}function _(P){var O;(O=t.onPanelClick)===null||O===void 0||O.call(t,P),a("panel-click",P)}var R=L(function(){return{hoverValue:p.value?h.value:[],value:f.value?ue(u.value,{format:c.value.format}):l.value,activeIndex:y.value,year:i.value,month:o.value,mode:t.mode,format:c.value.format,presets:t.presets,time:s.value,disableDate:t.disableDate,firstDayOfWeek:t.firstDayOfWeek,timePickerProps:t.timePickerProps,enableTimePicker:t.enableTimePicker,presetsPlacement:t.presetsPlacement,panelPreselection:t.panelPreselection,onPanelClick:_,onCellClick:b,onCellMouseEnter:m,onCellMouseLeave:g,onJumperClick:C,onConfirmClick:x,onPresetClick:S,onYearChange:T,onMonthChange:k,onTimePickerChange:w}});return{panelProps:R}},render:function(){var t=arguments[0],n=this.panelProps;return t(mi,{props:ho({},n)})}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var bi=Fe(Ec,ct);Fe(Kc,ct);Fe(Fc,ct);var Ic=Fe(jc,ct);/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var va=Qe(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;for(var l in r)typeof a[l]>"u"&&(a[l]=r[l]);return a}e.exports=t.default,e.exports.default=t.default}),Mc=Qe(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var n=a(va);function a(h){return h&&h.__esModule?h:{default:h}}function r(h,y){return o(h)||i(h,y)||u(h,y)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(h,y){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(h)))){var m=[],g=!0,b=!1,C=void 0;try{for(var w=h[Symbol.iterator](),x;!(g=(x=w.next()).done)&&(m.push(x.value),!(y&&m.length===y));g=!0);}catch(S){b=!0,C=S}finally{try{!g&&w.return!=null&&w.return()}finally{if(b)throw C}}return m}}function o(h){if(Array.isArray(h))return h}function s(h,y){var m;if(typeof Symbol>"u"||h[Symbol.iterator]==null){if(Array.isArray(h)||(m=u(h))||y&&h&&typeof h.length=="number"){m&&(h=m);var g=0,b=function(){};return{s:b,n:function(){return g>=h.length?{done:!0}:{done:!1,value:h[g++]}},e:function(T){throw T},f:b}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var C=!0,w=!1,x;return{s:function(){m=h[Symbol.iterator]()},n:function(){var T=m.next();return C=T.done,T},e:function(T){w=!0,x=T},f:function(){try{!C&&m.return!=null&&m.return()}finally{if(w)throw x}}}}function u(h,y){if(!!h){if(typeof h=="string")return d(h,y);var m=Object.prototype.toString.call(h).slice(8,-1);if(m==="Object"&&h.constructor&&(m=h.constructor.name),m==="Map"||m==="Set")return Array.from(h);if(m==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))return d(h,y)}}function d(h,y){(y==null||y>h.length)&&(y=h.length);for(var m=0,g=new Array(y);m<y;m++)g[m]=h[m];return g}var v={format:"YYYY/MM/DD",delimiters:["/","-"],strictMode:!1};function c(h){return/(^(y{4}|y{2})[.\/-](m{1,2})[.\/-](d{1,2})$)|(^(m{1,2})[.\/-](d{1,2})[.\/-]((y{4}|y{2})$))|(^(d{1,2})[.\/-](m{1,2})[.\/-]((y{4}|y{2})$))/gi.test(h)}function f(h,y){for(var m=[],g=Math.min(h.length,y.length),b=0;b<g;b++)m.push([h[b],y[b]]);return m}function p(h,y){if(typeof y=="string"?y=(0,n.default)({format:y},v):y=(0,n.default)(y,v),typeof h=="string"&&c(y.format)){var m=y.delimiters.find(function(_){return y.format.indexOf(_)!==-1}),g=y.strictMode?m:y.delimiters.find(function(_){return h.indexOf(_)!==-1}),b=f(h.split(g),y.format.toLowerCase().split(m)),C={},w=s(b),x;try{for(w.s();!(x=w.n()).done;){var S=r(x.value,2),T=S[0],k=S[1];if(T.length!==k.length)return!1;C[k.charAt(0)]=T}}catch(_){w.e(_)}finally{w.f()}return new Date("".concat(C.m,"/").concat(C.d,"/").concat(C.y)).getDate()===+C.d}return y.strictMode?!1:Object.prototype.toString.call(h)==="[object Date]"&&isFinite(h)}e.exports=t.default,e.exports.default=t.default}),Lc=qa(Mc),On=Qe(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;function n(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(i){return typeof i}:n=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},n(r)}function a(r){var l=typeof r=="string"||r instanceof String;if(!l){var i=n(r);throw r===null?i="null":i==="object"&&(i=r.constructor.name),new TypeError("Expected a string but received a ".concat(i))}}e.exports=t.default,e.exports.default=t.default}),Bc=Qe(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=a(On);function a(i){return i&&i.__esModule?i:{default:i}}function r(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?r=function(s){return typeof s}:r=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},r(i)}function l(i,o){(0,n.default)(i);var s,u;r(o)==="object"?(s=o.min||0,u=o.max):(s=arguments[1],u=arguments[2]);var d=encodeURI(i).split(/%..|./).length-1;return d>=s&&(typeof u>"u"||d<=u)}e.exports=t.default,e.exports.default=t.default}),yi=Qe(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=r(On),a=r(va);function r(o){return o&&o.__esModule?o:{default:o}}var l={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1};function i(o,s){(0,n.default)(o),s=(0,a.default)(s,l),s.allow_trailing_dot&&o[o.length-1]==="."&&(o=o.substring(0,o.length-1)),s.allow_wildcard===!0&&o.indexOf("*.")===0&&(o=o.substring(2));var u=o.split("."),d=u[u.length-1];return s.require_tld&&(u.length<2||!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(d)||/\s/.test(d))||!s.allow_numeric_tld&&/^\d+$/.test(d)?!1:u.every(function(v){return!(v.length>63||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(v)||/[\uff01-\uff5e]/.test(v)||/^-|-$/.test(v)||!s.allow_underscores&&/_/.test(v))})}e.exports=t.default,e.exports.default=t.default}),wi=Qe(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n=a(On);function a(d){return d&&d.__esModule?d:{default:d}}var r="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",l="(".concat(r,"[.]){3}").concat(r),i=new RegExp("^".concat(l,"$")),o="(?:[0-9a-fA-F]{1,4})",s=new RegExp("^("+"(?:".concat(o,":){7}(?:").concat(o,"|:)|")+"(?:".concat(o,":){6}(?:").concat(l,"|:").concat(o,"|:)|")+"(?:".concat(o,":){5}(?::").concat(l,"|(:").concat(o,"){1,2}|:)|")+"(?:".concat(o,":){4}(?:(:").concat(o,"){0,1}:").concat(l,"|(:").concat(o,"){1,3}|:)|")+"(?:".concat(o,":){3}(?:(:").concat(o,"){0,2}:").concat(l,"|(:").concat(o,"){1,4}|:)|")+"(?:".concat(o,":){2}(?:(:").concat(o,"){0,3}:").concat(l,"|(:").concat(o,"){1,5}|:)|")+"(?:".concat(o,":){1}(?:(:").concat(o,"){0,4}:").concat(l,"|(:").concat(o,"){1,6}|:)|")+"(?::((?::".concat(o,"){0,5}:").concat(l,"|(?::").concat(o,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function u(d){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if((0,n.default)(d),v=String(v),!v)return u(d,4)||u(d,6);if(v==="4"){if(!i.test(d))return!1;var c=d.split(".").sort(function(f,p){return f-p});return c[3]<=255}return v==="6"?!!s.test(d):!1}e.exports=t.default,e.exports.default=t.default}),zc=Qe(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=m;var n=o(On),a=o(va),r=o(Bc),l=o(yi),i=o(wi);function o(g){return g&&g.__esModule?g:{default:g}}var s={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[]},u=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,d=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,v=/^[a-z\d]+$/,c=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,f=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,p=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,h=254;function y(g){var b=g.replace(/^"(.+)"$/,"$1");if(!b.trim())return!1;var C=/[\.";<>]/.test(b);if(C){if(b===g)return!1;var w=b.split('"').length===b.split('\\"').length;if(!w)return!1}return!0}function m(g,b){if((0,n.default)(g),b=(0,a.default)(b,s),b.require_display_name||b.allow_display_name){var C=g.match(u);if(C){var w=C[1];if(g=g.replace(w,"").replace(/(^<|>$)/g,""),w.endsWith(" ")&&(w=w.substr(0,w.length-1)),!y(w))return!1}else if(b.require_display_name)return!1}if(!b.ignore_max_length&&g.length>h)return!1;var x=g.split("@"),S=x.pop(),T=S.toLowerCase();if(b.host_blacklist.includes(T))return!1;var k=x.join("@");if(b.domain_specific_validation&&(T==="gmail.com"||T==="googlemail.com")){k=k.toLowerCase();var _=k.split("+")[0];if(!(0,r.default)(_.replace(/\./g,""),{min:6,max:30}))return!1;for(var R=_.split("."),P=0;P<R.length;P++)if(!v.test(R[P]))return!1}if(b.ignore_max_length===!1&&(!(0,r.default)(k,{max:64})||!(0,r.default)(S,{max:254})))return!1;if(!(0,l.default)(S,{require_tld:b.require_tld})){if(!b.allow_ip_domain)return!1;if(!(0,i.default)(S)){if(!S.startsWith("[")||!S.endsWith("]"))return!1;var O=S.substr(1,S.length-2);if(O.length===0||!(0,i.default)(O))return!1}}if(k[0]==='"')return k=k.slice(1,k.length-1),b.allow_utf8_local_part?p.test(k):c.test(k);for(var $=b.allow_utf8_local_part?f:d,D=k.split("."),N=0;N<D.length;N++)if(!$.test(D[N]))return!1;return!(b.blacklisted_chars&&k.search(new RegExp("[".concat(b.blacklisted_chars,"]+"),"g"))!==-1)}e.exports=t.default,e.exports.default=t.default}),Vc=qa(zc),Hc=Qe(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=m;var n=i(On),a=i(yi),r=i(wi),l=i(va);function i(g){return g&&g.__esModule?g:{default:g}}function o(g,b){return c(g)||v(g,b)||u(g,b)||s()}function s(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u(g,b){if(!!g){if(typeof g=="string")return d(g,b);var C=Object.prototype.toString.call(g).slice(8,-1);if(C==="Object"&&g.constructor&&(C=g.constructor.name),C==="Map"||C==="Set")return Array.from(g);if(C==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C))return d(g,b)}}function d(g,b){(b==null||b>g.length)&&(b=g.length);for(var C=0,w=new Array(b);C<b;C++)w[C]=g[C];return w}function v(g,b){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(g)))){var C=[],w=!0,x=!1,S=void 0;try{for(var T=g[Symbol.iterator](),k;!(w=(k=T.next()).done)&&(C.push(k.value),!(b&&C.length===b));w=!0);}catch(_){x=!0,S=_}finally{try{!w&&T.return!=null&&T.return()}finally{if(x)throw S}}return C}}function c(g){if(Array.isArray(g))return g}var f={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_port:!1,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1,allow_fragments:!0,allow_query_components:!0,validate_length:!0},p=/^\[([^\]]+)\](?::([0-9]+))?$/;function h(g){return Object.prototype.toString.call(g)==="[object RegExp]"}function y(g,b){for(var C=0;C<b.length;C++){var w=b[C];if(g===w||h(w)&&w.test(g))return!0}return!1}function m(g,b){if((0,n.default)(g),!g||/[\s<>]/.test(g)||g.indexOf("mailto:")===0||(b=(0,l.default)(b,f),b.validate_length&&g.length>=2083)||!b.allow_fragments&&g.includes("#")||!b.allow_query_components&&(g.includes("?")||g.includes("&")))return!1;var C,w,x,S,T,k,_,R;if(_=g.split("#"),g=_.shift(),_=g.split("?"),g=_.shift(),_=g.split("://"),_.length>1){if(C=_.shift().toLowerCase(),b.require_valid_protocol&&b.protocols.indexOf(C)===-1)return!1}else{if(b.require_protocol)return!1;if(g.substr(0,2)==="//"){if(!b.allow_protocol_relative_urls)return!1;_[0]=g.substr(2)}}if(g=_.join("://"),g==="")return!1;if(_=g.split("/"),g=_.shift(),g===""&&!b.require_host)return!0;if(_=g.split("@"),_.length>1){if(b.disallow_auth||_[0]===""||(w=_.shift(),w.indexOf(":")>=0&&w.split(":").length>2))return!1;var P=w.split(":"),O=o(P,2),$=O[0],D=O[1];if($===""&&D==="")return!1}S=_.join("@"),k=null,R=null;var N=S.match(p);if(N?(x="",R=N[1],k=N[2]||null):(_=S.split(":"),x=_.shift(),_.length&&(k=_.join(":"))),k!==null&&k.length>0){if(T=parseInt(k,10),!/^[0-9]+$/.test(k)||T<=0||T>65535)return!1}else if(b.require_port)return!1;return b.host_whitelist?y(x,b.host_whitelist):!(!(0,r.default)(x)&&!(0,a.default)(x,b)&&(!R||!(0,r.default)(R,6))||(x=x||R,b.host_blacklist&&y(x,b.host_blacklist)))}e.exports=t.default,e.exports.default=t.default}),Wc=qa(Hc);function mo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function go(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ci(e){var t=Object.prototype.toString.call(e),n={Date:"[object Date]"};return t===n.Date?!1:Ne(e)==="object"?Yl(e):["",void 0,null].includes(e)}var bo=function(t,n,a){var r=function(i,o){return a?i<=o:i>=o};return It(t)?r(t,n):Array.isArray(t)?r(t.length,n):r(ti(t),n)},Yc={date:Lc,url:Wc,email:Vc,required:function(t){return!Ci(t)},whitespace:function(t){return!(/^\s+$/.test(t)||t==="")},boolean:function(t){return typeof t=="boolean"},max:function(t,n){return bo(t,n,!0)},min:function(t,n){return bo(t,n,!1)},len:function(t,n){return ti(t)===n},number:function(t){return It(t)},enum:function(t,n){return n.includes(t)},idcard:function(t){return/^(\d{18,18}|\d{15,15}|\d{17,17}x)$/i.test(t)},telnumber:function(t){return/^1[3-9]\d{9}$/.test(t)},pattern:function(t,n){return n.test(t)},validator:function(t,n){return n(t)}};function qc(e,t){return Ka.apply(this,arguments)}function Ka(){return Ka=Wl(zn.mark(function e(t,n){var a,r,l,i,o,s,u;return zn.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:a={result:!0},r=Object.keys(n),o=0;case 3:if(!(o<r.length)){v.next=15;break}if(s=r[o],!(!n.required&&Ci(t)&&!n.validator)){v.next=7;break}return v.abrupt("return",a);case 7:if(u=Yc[s],!(u&&n[s])){v.next=12;break}return l=n[s]===!0?void 0:n[s],i=u,v.abrupt("break",15);case 12:o++,v.next=3;break;case 15:if(!i){v.next=23;break}return v.next=18,i(t,l);case 18:if(a=v.sent,typeof a!="boolean"){v.next=21;break}return v.abrupt("return",go(go({},n),{},{result:a}));case 21:if(Ne(a)!=="object"){v.next=23;break}return v.abrupt("return",a);case 23:return v.abrupt("return",a);case 24:case"end":return v.stop()}},e)})),Ka.apply(this,arguments)}function xi(e,t){return Aa.apply(this,arguments)}function Aa(){return Aa=Wl(zn.mark(function e(t,n){var a,r;return zn.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=n.map(function(o){return qc(t,o)}),i.next=3,Promise.all(a);case 3:return r=i.sent,i.abrupt("return",r);case 5:case"end":return i.stop()}},e)})),Aa.apply(this,arguments)}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var nn={allowResizeColumnWidth:{type:Boolean,default:void 0},bordered:Boolean,bottomContent:{type:[String,Function]},cellEmptyContent:{type:[String,Function]},columns:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}},disableDataPage:Boolean,empty:{type:[String,Function],default:""},firstFullRow:{type:[String,Function]},fixedRows:{type:Array},footData:{type:Array,default:function(){return[]}},footerAffixProps:{type:Object},footerAffixedBottom:{type:[Boolean,Object],default:!1},footerSummary:{type:[String,Function]},headerAffixProps:{type:Object},headerAffixedTop:{type:[Boolean,Object],default:!1},height:{type:[String,Number]},horizontalScrollAffixedBottom:{type:[Boolean,Object]},hover:Boolean,lastFullRow:{type:[String,Function]},loading:{type:[Boolean,Function],default:void 0},loadingProps:{type:Object},maxHeight:{type:[String,Number]},pagination:{type:Object},paginationAffixedBottom:{type:[Boolean,Object]},resizable:Boolean,rowAttributes:{type:[Object,Array,Function]},rowClassName:{type:[String,Object,Array,Function]},rowKey:{type:String,default:"id",required:!0},rowspanAndColspan:{type:Function},rowspanAndColspanInFooter:{type:Function},scroll:{type:Object},showHeader:{type:Boolean,default:!0},size:{type:String,default:"medium",validator:function(t){return t?["small","medium","large"].includes(t):!0}},stripe:Boolean,tableContentWidth:{type:String,default:""},tableLayout:{type:String,default:"fixed",validator:function(t){return t?["auto","fixed"].includes(t):!0}},topContent:{type:[String,Function]},verticalAlign:{type:String,default:"middle",validator:function(t){return t?["top","middle","bottom"].includes(t):!0}},onCellClick:Function,onPageChange:Function,onRowClick:Function,onRowDblclick:Function,onRowMousedown:Function,onRowMouseenter:Function,onRowMouseleave:Function,onRowMouseover:Function,onRowMouseup:Function,onScroll:Function,onScrollX:Function,onScrollY:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function _i(e,t){for(var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,a=n,r=0,l=e.length;r<l;r++){var i,o=e[r];if(t.set(o,n),o!=null&&(i=o.children)!==null&&i!==void 0&&i.length){var s=_i(o.children,t,n+1);s>a&&(a=s)}}return a}function Oi(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=t,a=(e==null?void 0:e.children)||[],r=0,l=a.length;r<l;r++){var i=a[r];i.children?n=Oi(i,n):n+=1}return n}function Jc(e){var t=new Map,n=_i(e,t),a=new Map,r=function i(o,s){for(var u=0,d=o.length;u<d;u++){var v,c=o[u],f=c.children?1:n-t.get(c)+1,p=c.children?Oi(c):1,h={};f>1&&(h.rowspan=f),p>1&&(h.colspan=p),a.set(c,h),c!=null&&(v=c.children)!==null&&v!==void 0&&v.length?i(c.children,s):s.push(c)}},l=[];return r(e,l),{rowspanAndColspanMap:a,leafColumns:l}}function Gc(e){var t=function a(r,l){for(var i,o=[],s=[],u=0,d=r.length;u<d;u++){var v,c=r[u],f=[c];o=o.concat(f),c!=null&&(v=c.children)!==null&&v!==void 0&&v.length&&(s=s.concat(c.children))}return(i=s)!==null&&i!==void 0&&i.length&&a(s,l),l.push(o),o},n=[];return t(e,n),n=n.reverse(),n}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function tt(){var e=ke(),t=e.classPrefix,n={classPrefix:t.value,tableBaseClass:{table:"".concat(t.value,"-table"),columnResizableTable:"".concat(t.value,"-table--column-resizable"),overflowVisible:"".concat(t.value,"-table--overflow-visible"),body:"".concat(t.value,"-table__body"),content:"".concat(t.value,"-table__content"),topContent:"".concat(t.value,"-table__top-content"),bottomContent:"".concat(t.value,"-table__bottom-content"),paginationWrap:"".concat(t.value,"-table__pagination-wrap"),tdLastRow:"".concat(t.value,"-table__td-last-row"),tdFirstCol:"".concat(t.value,"-table__td-first-col"),thCellInner:"".concat(t.value,"-table__th-cell-inner"),tableRowEdit:"".concat(t.value,"-table--row-edit"),cellEditable:"".concat(t.value,"-table__cell--editable"),cellEditWrap:"".concat(t.value,"-table__cell-wrap"),bordered:"".concat(t.value,"-table--bordered"),striped:"".concat(t.value,"-table--striped"),hover:"".concat(t.value,"-table--hoverable"),loading:"".concat(t.value,"-table--loading"),rowspanAndColspan:"".concat(t.value,"-table--rowspan-colspan"),empty:"".concat(t.value,"-table__empty"),emptyRow:"".concat(t.value,"-table__empty-row"),headerFixed:"".concat(t.value,"-table--header-fixed"),columnFixed:"".concat(t.value,"-table--column-fixed"),widthOverflow:"".concat(t.value,"-table--width-overflow"),multipleHeader:"".concat(t.value,"-table--multiple-header"),footerAffixed:"".concat(t.value,"-table--footer-affixed"),horizontalBarAffixed:"".concat(t.value,"-table--horizontal-bar-affixed"),affixedHeader:"".concat(t.value,"-table--affixed-header"),affixedHeaderElm:"".concat(t.value,"-table__affixed-header-elm"),affixedFooterElm:"".concat(t.value,"-table__affixed-footer-elm"),affixedFooterWrap:"".concat(t.value,"-table__affixed-footer-wrap"),scrollbarDivider:"".concat(t.value,"-table__scroll-bar-divider"),fullHeight:"".concat(t.value,"-table--full-height"),resizeLine:"".concat(t.value,"-table__resize-line"),obviousScrollbar:"".concat(t.value,"-table__scrollbar--obvious"),affixedHeaderWrap:"".concat(t.value,"-table__affixed-header-elm-wrap")},tdAlignClasses:{left:"".concat(t.value,"-align-left"),right:"".concat(t.value,"-align-right"),center:"".concat(t.value,"-align-center")},tableHeaderClasses:{header:"".concat(t.value,"-table__header"),thBordered:"".concat(t.value,"-table__header-th--bordered"),fixed:"".concat(t.value,"-table__header--fixed"),multipleHeader:"".concat(t.value,"-table__header--multiple")},tableFooterClasses:{footer:"".concat(t.value,"-table__footer"),footerSummary:"".concat(t.value,"-table__footer-summary"),fixed:"".concat(t.value,"-table__footer--fixed")},tableAlignClasses:{top:"".concat(t.value,"-vertical-align-top"),middle:"".concat(t.value,"-vertical-align-middle"),bottom:"".concat(t.value,"-vertical-align-bottom")},tableRowFixedClasses:{top:"".concat(t.value,"-table__row--fixed-top"),bottom:"".concat(t.value,"-table__row--fixed-bottom"),firstBottom:"".concat(t.value,"-table__row--fixed-bottom-first"),withoutBorderBottom:"".concat(t.value,"-table__row--without-border-bottom")},tableColFixedClasses:{left:"".concat(t.value,"-table__cell--fixed-left"),right:"".concat(t.value,"-table__cell--fixed-right"),lastLeft:"".concat(t.value,"-table__cell--fixed-left-last"),firstRight:"".concat(t.value,"-table__cell--fixed-right-first"),leftShadow:"".concat(t.value,"-table__content--scrollable-to-left"),rightShadow:"".concat(t.value,"-table__content--scrollable-to-right")},tableLayoutClasses:{auto:"".concat(t.value,"-table--layout-auto"),fixed:"".concat(t.value,"-table--layout-fixed")},tdEllipsisClass:"".concat(t.value,"-table-td--ellipsis"),tableFullRowClasses:{base:"".concat(t.value,"-table__row--full"),innerFullRow:"".concat(t.value,"-table__row-full-inner"),innerFullElement:"".concat(t.value,"-table__row-full-element"),firstFullRow:"".concat(t.value,"-table__first-full-row"),lastFullRow:"".concat(t.value,"-table__last-full-row")},tableExpandClasses:{iconBox:"".concat(t.value,"-table__expand-box"),iconCell:"".concat(t.value,"-table__expandable-icon-cell"),row:"".concat(t.value,"-table__expanded-row"),rowInner:"".concat(t.value,"-table__expanded-row-inner"),expanded:"".concat(t.value,"-table__row--expanded"),collapsed:"".concat(t.value,"-table__row--collapsed")},tableSortClasses:{sortable:"".concat(t.value,"-table__cell--sortable"),sortColumn:"".concat(t.value,"-table__sort-column"),title:"".concat(t.value,"-table__cell--title"),trigger:"".concat(t.value,"-table__cell--sort-trigger"),doubleIcon:"".concat(t.value,"-table__double-icons"),sortIcon:"".concat(t.value,"-table__sort-icon"),iconDirection:{asc:"".concat(t.value,"-table-sort-asc"),desc:"".concat(t.value,"-table-sort-desc")},iconActive:"".concat(t.value,"-table__sort-icon--active"),iconDefault:"".concat(t.value,"-icon-sort--default")},tableSelectedClasses:{selected:"".concat(t.value,"-table__row--selected"),disabled:"".concat(t.value,"-table__row--disabled"),checkCell:"".concat(t.value,"-table__cell-check")},tableFilterClasses:{filterable:"".concat(t.value,"-table__cell--filterable"),popup:"".concat(t.value,"-table__filter-pop"),icon:"".concat(t.value,"-table__filter-icon"),popupContent:"".concat(t.value,"-table__filter-pop-content"),result:"".concat(t.value,"-table__filter-result"),inner:"".concat(t.value,"-table__row-filter-inner"),bottomButtons:"".concat(t.value,"-table__filter--bottom-buttons"),contentInner:"".concat(t.value,"-table__filter-pop-content-inner"),iconWrap:"".concat(t.value,"-table__filter-icon-wrap")},asyncLoadingClass:"".concat(t.value,"-table__async-loading"),isFocusClass:"".concat(t.value,"-is-focus"),isLoadingClass:"".concat(t.value,"-is-loading"),isLoadMoreClass:"".concat(t.value,"-is-load-more"),tableTreeClasses:{col:"".concat(t.value,"-table__tree-col"),inlineCol:"".concat(t.value,"-table__tree-col--inline"),icon:"".concat(t.value,"-table__tree-op-icon"),leafNode:"".concat(t.value,"-table__tree-leaf-node")},tableDraggableClasses:{rowDraggable:"".concat(t.value,"-table--row-draggable"),rowHandlerDraggable:"".concat(t.value,"-table--row-handler-draggable"),colDraggable:"".concat(t.value,"-table--col-draggable"),handle:"".concat(t.value,"-table__handle-draggable"),ghost:"".concat(t.value,"-table__ele--draggable-ghost"),chosen:"".concat(t.value,"-table__ele--draggable-chosen"),dragging:"".concat(t.value,"-table__ele--draggable-dragging")},virtualScrollClasses:{cursor:"".concat(t.value,"-table__virtual-scroll-cursor"),header:"".concat(t.value,"-table__virtual-scroll-header")},positiveRotate90:"".concat(t.value,"-positive-rotate-90"),negativeRotate180:"".concat(t.value,"-negative-rotate-180")};return n}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function yo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Qc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Za=Oe({name:"TEllipsis",props:{content:{type:[String,Function]},default:{type:[String,Function]},tooltipContent:{type:[String,Number,Function]},placement:String,attach:Function,tooltipProps:Object,zIndex:Number,overlayClassName:String,classPrefix:{type:String}},setup:function(t){var n=H(),a=H(!1),r=L(function(){return["".concat(t.classPrefix,"-table__ellipsis"),"".concat(t.classPrefix,"-text-ellipsis")]}),l=L(function(){return["".concat(t.classPrefix,"-table__ellipsis-content"),t.overlayClassName]}),i=function(){!n.value||(a.value=pr(n.value))},o=function(){a.value=pr(n.value)},s=Wa(function(u){u.type==="mouseleave"?o():i()},80);return{root:n,isOverflow:a,ellipsisClasses:r,innerEllipsisClassName:l,onMouseAround:s}},render:function(){var t=this,n=arguments[0],a=an(this,"default","content"),r=n("div",{ref:"root",class:this.ellipsisClasses,on:{mouseenter:this.onMouseAround,mouseleave:this.onMouseAround}},[a]),l=null,i=this.tooltipProps;if(this.isOverflow){var o=Qc({content:this.tooltipContent||function(){return a},destroyOnClose:!0,zIndex:this.zIndex,attach:this.attach||function(){return t.root},placement:this.placement,overlayClassName:i!=null&&i.overlayClassName?this.innerEllipsisClassName.concat(i.overlayClassName):this.innerEllipsisClassName},i);l=n(ai,fe([{},{props:o}]),[r])}else l=r;return l}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function wo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Co(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function er(e,t,n,a){var r={col:n,colIndex:a};return xe(n.title)?n.title(e,r):ot(n.title)&&t[n.title]?(n.colKey===n.title&&be.error("Table",["both colKey '".concat(n.colKey,"' and title have the same slot name"),"please set a different slot name for col and title."].join(", ")),t[n.title](r)):xe(n.render)&&n.render(e,Co(Co({},r),{},{type:"title",row:{},rowIndex:-1}))||n.title}function Si(e){var t=tt(),n=t.tableSortClasses,a=t.tableFilterClasses,r=L(function(){return Jc(e.columns)}),l=L(function(){return Gc(e.columns)}),i=L(function(){return l.value.length>1}),o=function(u,d,v,c,f,p,h){var y,m=me(d,3),g=m[0],b=m[1],C=m[2],w=(y={},A(y,n.sortable,b),A(y,a.filterable,C),y),x=xe(f)?f(u,{col:v,colIndex:c}):void 0,S=Boolean(f!==void 0?f:v.ellipsis);return u("div",{class:w},[u("div",{class:n.title},[S?u(Za,{attrs:{placement:"bottom",attach:p?function(){return p}:void 0,tooltipContent:x&&function(){return x},tooltipProps:Ne(f)==="object"?f:void 0,classPrefix:h==null?void 0:h.classPrefix,overlayClassName:h==null?void 0:h.ellipsisOverlayClassName}},[g]):u("div",[g]),Boolean(b||C)&&u("div",{class:a.iconWrap},[b,C])])])};return{thList:l,isMultipleHeader:i,spansAndLeafNodes:r,renderTitleWidthIcon:o}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function xo(e,t,n){var a=xe(e.disabled)?e.disabled({row:t,rowIndex:n}):e.disabled;return e.checkProps&&(xe(e.checkProps)?a=a||e.checkProps({row:t,rowIndex:n}).disabled:e.checkProps==="object"&&(a=a||e.checkProps.disabled)),!!a}function Ze(e,t){var n=e[t];return It(n)?n:parseFloat(n)}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var _o=function(t){var n=[],a=[];if(t.children)for(t.children.forEach(function(l){return n.push(l)});n.length;){var r=n.shift();!r.children||!r.children.length?a.push(r):r.children.forEach(function(l){return n.push(l)})}return a};function Oo(e,t,n,a,r){var l=a.getThWidthList,i=a.DEFAULT_MIN_WIDTH,o=l(),s=_o(e),u=_o(n);if(s.length||u.length){var d,v=0,c=0,f=[],p=0,h={};s.length||s.push(e),u.length||u.push(n),s.forEach(function(w){v+=o[w.colKey]||Ze(w,"width"),f.push(w.colKey)}),u.forEach(function(w){var x;c+=o[w.colKey]||Ze(w,"width"),f.push(w.colKey),p+=Math.max(((x=w.resize)===null||x===void 0?void 0:x.minWidth)||i,Ze(w,"minWidth")||i)}),s.forEach(function(w){h[w.colKey]=o[w.colKey]/v*t});var y=Math.max(p,v+c-t,Math.max(Ze(n,"minWidth")||i,((d=n.resize)===null||d===void 0?void 0:d.minWidth)||i));u.forEach(function(w){var x;h[w.colKey]=Math.max(((x=w.resize)===null||x===void 0?void 0:x.minWidth)||i,Ze(w,"minWidth")||i,o[w.colKey]/c*y)}),r(h,f)}else{var m,g,b=o[e.colKey]||Ze(e,"width"),C=o[n.colKey]||Ze(n,"width");r((g={},A(g,e.colKey,t),A(g,n.colKey,Math.max(((m=n.resize)===null||m===void 0?void 0:m.minWidth)||i,Ze(n,"minWidth")||i,b+C-t)),g),[e.colKey,n.colKey])}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Uc=function(t,n,a,r,l,i){var o=a;if(l<i){var s=i-l,u=[];if(n.forEach(function(p){var h=Ze(p,"minWidth");h?(o[p.colKey]=h,s-=h):u.push(p)}),s>0)if(u.length){var d=s/u.length;u.forEach(function(p){o[p.colKey]=d})}else{var v=s/n.length;n.forEach(function(p){o[p.colKey]+=v})}else u.forEach(function(p){o[p.colKey]=100})}else if(r==="fixed")n.forEach(function(p){o[p.colKey]=Ze(p,"minWidth")||100});else{var c=0;n.forEach(function(p){c+=Ze(p,"minWidth")||100});var f=c+l;t.forEach(function(p){if(o[p.colKey])o[p.colKey]=o[p.colKey]/f*i;else{var h=Ze(p,"minWidth")||100;o[p.colKey]=h/f*i}})}},Xc=function(t,n,a,r,l){var i=n;t.forEach(function(o){l.includes(o.colKey)||(i[o.colKey]=i[o.colKey]/a*r)})},Zc=function(t,n){var a=n;t.forEach(function(r){a[r.colKey]=Ze(r,"minWidth")||100})};function ed(e,t,n,a,r,l){var i=0,o=[],s={};e.forEach(function(f){t[f.colKey]?s[f.colKey]=t[f.colKey]:s[f.colKey]=Ze(f,"width");var p=s[f.colKey];p?i+=p:o.push(f)});var u=a,d=!1;if(u>0)if(o.length)Uc(e,o,s,n,i,u),d=!0;else{if(r.length){var v=0;r.forEach(function(f){v+=s[f]}),i-=v,u-=v}(i!==u||r.length)&&(Xc(e,s,i,u,r),d=!0)}else Zc(o,s),d=!0;if(d){var c=0;Object.keys(s).forEach(function(f){var p=s[f];c+=p-Math.floor(p),s[f]=Math.floor(p)+(c>1?1:0),c>1&&(c-=1)}),c>.5&&(s[e[0].colKey]+=1)}l(s)}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var En=80,td=600;function nd(e,t,n,a){var r=H(),l=H([]),i=H({}),o=function p(h,y){!h||h.forEach(function(m,g){var b=y?i.value[y.colKey].prev:h[g+1],C=y?i.value[y.colKey].next:h[g-1],w=g===0?b:h[g-1],x=g===h.length-1?C:h[g+1];i.value[m.colKey]={prev:w,next:x},p(m.children,m)})},s={isDragging:!1,draggingCol:null,draggingStart:0,effectCol:null},u=xn({display:"none",height:"10px",left:"10px",bottom:"0"}),d=function(h){l.value=h},v=function(h,y){if(!!r.value){var m=h.target.closest("th"),g=m.getBoundingClientRect();if(!s.isDragging){var b=8;if(g.right-h.pageX<=b){var C,w=(C=y.resizable)!==null&&C!==void 0?C:!0;if(w){m.style.cursor="col-resize",s.draggingCol=m,s.effectCol="next";return}}else if(h.pageX-g.left<=b){var x=m.previousElementSibling;if(x){var S,T=i.value[y.colKey].prev,k=(S=T.resizable)!==null&&S!==void 0?S:!0;if(k){m.style.cursor="col-resize",s.draggingCol=x,s.effectCol="prev";return}}}m.style.cursor="",s.draggingCol=null,s.effectCol=null}}},c=function(h,y){var m;if(!!s.draggingCol){var g=function(F,B){var z,M,I=null;s.effectCol==="next"?I=F:I=B;var V=It(I.minWidth)?I.minWidth:parseFloat(I.minWidth);return{minColWidth:Math.max(((z=I.resize)===null||z===void 0?void 0:z.minWidth)||En,V||En),maxColWidth:((M=I.resize)===null||M===void 0?void 0:M.maxWidth)||td}},b=s.draggingCol,C=b.getBoundingClientRect(),w=(m=e.value)===null||m===void 0?void 0:m.getBoundingClientRect(),x=C.right-w.left,S=C.left-w.left,T=i.value[y.colKey].next,k=i.value[y.colKey].prev,_=g(y,k),R=_.minColWidth,P=_.maxColWidth,O=S+R,$=S+P;if(s.isDragging=!0,s.draggingStart=h.x,r!=null&&r.value){u.display="block",u.height="".concat(w.bottom-C.top,"px"),u.left="".concat(x,"px");var D=e.value.parentElement.getBoundingClientRect();u.bottom="".concat(D.bottom-w.bottom,"px")}var N=function E(){if(s.isDragging){var F=Math.ceil(parseInt(u.left,10)-S)||0;F<=R?F=R:F>=P&&(F=P),s.effectCol==="next"?Oo(y,F,T,{getThWidthList:n,DEFAULT_MIN_WIDTH:En},function(B,z){a(B),d(z)}):s.effectCol==="prev"&&Oo(k,F,y,{getThWidthList:n,DEFAULT_MIN_WIDTH:En},function(B,z){a(B),d(z)}),s.isDragging=!1,s.draggingCol=null,s.effectCol=null,b.style.cursor="",u.display="none",u.left="0",document.removeEventListener("mousemove",K),document.removeEventListener("mouseup",E),document.onselectstart=null,document.ondragstart=null}t()},K=function(F){if(s.isDragging){var B=x+F.x-s.draggingStart;u.left="".concat(Math.min(Math.max(B,O),$),"px")}};document.addEventListener("mouseup",N),document.addEventListener("mousemove",K),document.onselectstart=function(){return!1},document.ondragstart=function(){return!1}}},f=function(h,y,m,g){ed(h,y,m,g,l.value,function(b){a(b),l.value.length&&(l.value=[])})};return{resizeLineRef:r,resizeLineStyle:u,onColumnMouseover:v,onColumnMousedown:c,recalculateColWidth:f,setEffectColMap:o}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function ad(){var e=6;if(!navigator||/(Chrome|Safari)/i.test(navigator.userAgent))return e;var t=document.createElement("div");t.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(t);var n=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),/Firefox/.test(navigator.userAgent)&&(n-=4),Vn()<=11&&(n=12),n}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function So(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?So(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):So(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function tr(e,t,n,a){var r,l=n==null?void 0:n.get(e.colKey||t);if(!l)return{};var i=(r={},A(r,a.left,e.fixed==="left"),A(r,a.right,e.fixed==="right"),A(r,a.lastLeft,e.fixed==="left"&&l.lastLeftFixedCol),A(r,a.firstRight,e.fixed==="right"&&l.firstRightFixedCol),r),o={left:e.fixed==="left"?"".concat(l.left,"px"):void 0,right:e.fixed==="right"?"".concat(l.right,"px"):void 0};return{style:o,classes:i}}function rd(e,t,n,a,r,l){var i;if(!a||!a.length)return{style:void 0,classes:void 0};var o=t<a[0],s=t>n-1-a[1],u=n-a[1],d=(r==null?void 0:r.get(e))||{},v=(i={},A(i,l.top,o),A(i,l.bottom,s),A(i,l.firstBottom,t===u),A(i,l.withoutBorderBottom,t===u-1),i),c={top:o?"".concat(d.top,"px"):void 0,bottom:s?"".concat(d.bottom,"px"):void 0};return{style:c,classes:v}}function od(e,t,n,a){var r=Pe(e),l=r.columns,i=r.tableLayout,o=r.tableContentWidth,s=r.fixedRows,u=r.firstFullRow,d=r.lastFullRow,v=r.maxHeight,c=r.headerAffixedTop,f=r.footerAffixedBottom,p=r.bordered,h=r.resizable,y=r.allowResizeColumnWidth,m=H([]),g=H(),b=H(),C=H(!1),w=H(!1),x=H(),S=H(6),T=H(new Map),k=xn({left:!1,right:!1}),_=H({left:0,top:0}),R=H(0),P=H(0),O=H({}),$=H(!1),D=H(!1),N=H(!1),K=L(function(){return h.value||y.value||!1}),E=L(function(){var se;return!(e.headerAffixedTop||e.footerAffixedBottom||e.horizontalScrollAffixedBottom||((se=e.scroll)===null||se===void 0?void 0:se.type)==="virtual")}),F=H(function(){});function B(se){x.value=se}function z(se){F.value=se}function M(se){for(var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Map,X=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],ne=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,ae=arguments.length>4?arguments[4]:void 0,le=0,he=se.length;le<he;le++){var re,pe=se[le];["left","right"].includes(pe.fixed)&&($.value=!0),pe.fixed==="right"&&(D.value=!0),pe.fixed==="left"&&(N.value=!0);var te=pe.colKey||le,W={col:pe,parent:ae,index:le};q.set(te,W),(re=pe.children)!==null&&re!==void 0&&re.length&&M(pe.children,q,X,ne+1,W),X[ne]?X[ne].push(W):X[ne]=[W]}return{newColumnsMap:q,levelNodes:X}}var I=function se(q,X){for(var ne=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},ae=0,le=q.length;ae<le;ae++){var he,re=q[ae];if(re.fixed==="right")return;for(var pe=X.get(re.colKey||ae),te=ae-1;te>=0&&q[te].fixed!=="left";)te-=1;var W=q[te],G=ae===0&&(ne==null?void 0:ne.left)||0,ee=X.get((W==null?void 0:W.colKey)||ae-1);pe.left=((ee==null?void 0:ee.left)||G)+((ee==null?void 0:ee.width)||0),(he=re.children)!==null&&he!==void 0&&he.length&&se(re.children,X,pe)}},V=function se(q,X){for(var ne=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},ae=q.length-1;ae>=0;ae--){var le,he=q[ae];if(he.fixed==="left")return;for(var re=X.get(he.colKey||ae),pe=ae+1;pe<q.length&&q[pe].fixed!=="right";)pe+=1;var te=q[pe],W=ae===q.length-1&&(ne==null?void 0:ne.right)||0,G=X.get((te==null?void 0:te.colKey)||ae+1);re.right=((G==null?void 0:G.right)||W)+((G==null?void 0:G.width)||0),(le=he.children)!==null&&le!==void 0&&le.length&&se(he.children,X,re)}},j=function(q,X){if(!!q){for(var ne=0,ae=q.length;ne<ae;ne++)for(var le=q[ne].children,he=0,re=le.length;he<re;he++){var pe,te=le[he],W=te.dataset.colkey;W||be.warn("TDesign Table","".concat(te.innerText," missing colKey. colKey is required for fixed column feature."));var G=X.get(W||he);G!=null&&(pe=G.col)!==null&&pe!==void 0&&pe.fixed&&X.set(W,Jt(Jt({},G),{},{width:te.getBoundingClientRect().width}))}I(l.value,X),V(l.value,X)}},J=function(q,X,ne,ae){for(var le=s.value||[],he=me(le,2),re=he[0],pe=he[1],te=e.data,W=e.rowKey,G=W===void 0?"id":W,ee=0;ee<re;ee++){var _e=q[ee],Ce=Q(te[ee],G),$e=X.get(Ce)||{},de=Q(te[ee-1],G),je=X.get(de)||{},ze=0;ee===0&&(ze=(ne==null?void 0:ne.getBoundingClientRect().height)||0),$e.top=(je.top||ze)+(je.height||0),X.set(Ce,Jt(Jt({},$e),{},{height:_e.getBoundingClientRect().height}))}for(var Ke=te.length-1;Ke>=te.length-pe;Ke--){var nt=q[Ke],Ie=Q(te[Ke],G),Ye=X.get(Ie)||{},Re=Q(te[Ke+1],G),De=X.get(Re)||{},Ue=0;Ke===te.length-1&&(Ue=(ae==null?void 0:ae.getBoundingClientRect().height)||0),Ye.bottom=(De.bottom||Ue)+(De.height||0),X.set(Ie,Jt(Jt({},Ye),{},{height:nt.getBoundingClientRect().height}))}},U=function(q,X){if(T.value.clear(),!!q){var ne=q.querySelector("thead");ne&&j(ne.children,X);var ae=q.querySelector("tbody"),le=q.querySelector("tfoot");ae&&J(ae.children,X,ne,le),T.value=X}},Z,ve=function(q,X){if(!(!$||!q)){var ne=q.scrollLeft;if(!(Z===ne&&(!X||!X.skipScrollLimit))){Z=ne;var ae=q.clientWidth+ne<q.scrollWidth;k.left=ne>0,k.right=ae}}},we=function(q){for(var X=0;X<q.length;X++)for(var ne=q[X],ae=0,le=ne.length;ae<le;ae++){var he,re,pe=ne[ae],te=ne[ae+1],W=pe.parent,G=!W||(W==null?void 0:W.lastLeftFixedCol);G&&pe.col.fixed==="left"&&((he=te)===null||he===void 0?void 0:he.col.fixed)!=="left"&&(pe.lastLeftFixedCol=!0);var ee=ne[ae-1],_e=!W||(W==null?void 0:W.firstRightFixedCol);_e&&pe.col.fixed==="right"&&((re=ee)===null||re===void 0?void 0:re.col.fixed)!=="right"&&(pe.firstRightFixedCol=!0)}},ye=function(){var q=M(l.value),X=q.newColumnsMap,ne=q.levelNodes;we(ne);var ae=setTimeout(function(){var le;($.value||(le=s.value)!==null&&le!==void 0&&le.length)&&U(b.value,X),clearTimeout(ae)},0);return function(){clearTimeout(ae)}},Te=function(){var q=setTimeout(function(){if(!!b.value){C.value=b.value.scrollHeight>b.value.clientHeight,w.value=b.value.scrollWidth>b.value.clientWidth;var X=b.value.getBoundingClientRect();_.value={top:X.top,left:X.left},clearTimeout(q)}},0)},Ve=function(){var q,X,ne=(q=b.value)===null||q===void 0?void 0:q.getBoundingClientRect();if(!!ne){var ae=C.value?S.value:0;R.value=ne.width-ae-(e.bordered?1:0);var le=x==null||(X=x.value)===null||X===void 0?void 0:X.getBoundingClientRect();P.value=le==null?void 0:le.width}},it=function(){var q,X,ne,ae,le,he,re,pe;(q=a.paginationAffixRef.value)===null||q===void 0||(X=q.handleScroll)===null||X===void 0||X.call(q),(ne=a.horizontalScrollAffixRef.value)===null||ne===void 0||(ae=ne.handleScroll)===null||ae===void 0||ae.call(ne),(le=a.headerTopAffixRef.value)===null||le===void 0||(he=le.handleScroll)===null||he===void 0||he.call(le),(re=a.footerBottomAffixRef.value)===null||re===void 0||(pe=re.handleScroll)===null||pe===void 0||pe.call(re)},Ee=function(q){if(q instanceof HTMLCollection){if(K.value)return;for(var X={},ne=0,ae=q.length;ne<ae;ne++)for(var le=q[ne].children,he=0,re=le.length;he<re;he++){var pe=le[he],te=pe.dataset.colkey;X[te]=pe.getBoundingClientRect().width}O.value=X}else O.value||(O.value={}),Object.entries(q).forEach(function(W){var G=me(W,2),ee=G[0],_e=G[1];O.value[ee]=_e})},Ge=function(){if(K.value&&F.value(n.value,O.value,i.value,P.value),!E.value)var q=setTimeout(function(){var X;Ve();var ne=(X=b.value)===null||X===void 0?void 0:X.querySelector("thead");!ne||(Ee(ne.children),clearTimeout(q))},0)},dt=function(){O.value={}},mt=function(q){var X,ne,ae;(X=e.onScrollX)===null||X===void 0||X.call(e,{e:q}),t.emit("scroll-x",{e:q}),(ne=e.onScrollY)===null||ne===void 0||ne.call(e,{e:q}),t.emit("scroll-y",{e:q}),(ae=e.onScroll)===null||ae===void 0||ae.call(e,{e:q}),t.emit("scroll",{e:q})},_t=function(){return O.value||(O.value={}),O.value};ce([m,l,p,i,o,C,w,$,s,u,d],ye,{immediate:!0}),ce([$,l],function(){var se=setTimeout(function(){$.value&&ve(b.value),clearTimeout(se)},0)},{immediate:!0}),ce([v,m,l,p],Te,{immediate:!0}),ce(n,function(){dt(),K.value&&F.value(n.value,O.value,i.value,P.value)}),ce([m,l,p,i,s,C,c,f,o],function(){Ge(),it()},{immediate:!0});var Be=Wa(function(){Ve(),Te(),Ge(),it(),($.value||C.value)&&(ye(),ve(b.value,{skipScrollLimit:!0}))},30),ft=Be,st=null;function At(se){Vn()<11||typeof window.ResizeObserver>"u"||(Le(window,"resize",ft),st=new window.ResizeObserver(function(){Be()}),st.observe(se),g.value=se)}Et(function(){var se=ad();S.value=se;var q=setTimeout(function(){Ve(),K.value&&F.value(n.value,O.value,i.value,P.value),clearTimeout(q)}),X=$.value||C.value||!E.value||!m.value.length;(X&&Vn()<11||typeof window.ResizeObserver>"u")&&He(window,"resize",ft)}),ql(function(){var se,q;Le(window,"resize",ft),(se=st)===null||se===void 0||se.unobserve(g.value),(q=st)===null||q===void 0||q.disconnect()});var Ft=function(q){m.value=q};return{tableWidth:R,tableElmWidth:P,thWidthList:O,isFixedHeader:C,isWidthOverflow:w,tableContentRef:b,isFixedColumn:$,showColumnShadow:k,rowAndColFixedPosition:T,virtualScrollHeaderPos:_,scrollbarWidth:S,setData:Ft,refreshTable:Be,emitScrollEvent:mt,updateThWidthListHandler:Ge,updateColumnFixedShadow:ve,setUseFixedTableElmRef:B,getThWidthList:_t,updateThWidthList:Ee,setRecalculateColWidthFuncRef:z,addTableResizeObserver:At}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function ko(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Po(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ko(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ko(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ld(e,t){var n,a,r,l=Pe(e),i=l.pagination,o=l.data,s=l.disableDataPage,u=ke(),d=u.classPrefix,v=((n=i.value)===null||n===void 0?void 0:n.pageSize)||((a=i.value)===null||a===void 0?void 0:a.defaultPageSize)||10,c=H(((r=e.data)===null||r===void 0?void 0:r.slice(0,v))||[]),f=H(!1),p=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10,b=e.data,C=Boolean(!s.value&&b.length>g);if(f.value=C,C){var w=(m-1)*g,x=m*g;c.value=b.slice(w,x)}else c.value=b};ce(function(){var y,m;return[(y=i.value)===null||y===void 0?void 0:y.current,(m=i.value)===null||m===void 0?void 0:m.pageSize,o.value.length,s]},function(){!i.value||!i.value.current||p(i.value.current,i.value.pageSize)},{immediate:!0}),ce([o],function(){!i.value||!i.value.defaultCurrent||p(i.value.defaultCurrent,i.value.defaultPageSize)},{immediate:!0});var h=function(m){return i.value?m("div",{class:"".concat(d.value,"-table__pagination")},[m(Gu,{props:Po({},i.value),on:Po({},{change:function(b){t.emit("page-change",b,c.value),i.value&&!i.value.current&&i.value.defaultCurrent&&p(b.current,b.pageSize)}})})]):null};return{isPaginateData:f,dataSource:c,renderPagination:h}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function id(e){var t=H(),n=H(),a=H(),r=H(),l=H(),i=H(!0),o=H(!0),s=H(!0),u=L(function(){return e.scroll&&e.scroll.type==="virtual"&&(e.scroll.threshold||100)<e.data.length}),d=L(function(){return!!(e.headerAffixedTop||e.footerAffixedBottom||e.horizontalScrollAffixedBottom)}),v=0,c=function(F){if(!(!d.value&&!u.value)){var B=F;if(!B&&t.value&&(v=0,B=t.value),!!B){var z=B.scrollLeft;if(v!==z){v=z;for(var M=[t.value,n.value,a.value,r.value],I=0,V=M.length;I<V;I++)M[I]&&F!==M[I]&&(M[I].scrollLeft=z)}}}},f=function(F,B,z){return B.top+z<F.top&&F.top>F.height},p=function(F,B,z){return t.value.scrollWidth>t.value.clientWidth&&f(F,B,z)},h=function(F){return typeof F=="boolean"?0:F.offsetTop||0},y=function(){var F,B,z,M;if(!(!d.value&&!u.value)){var I=(F=t.value)===null||F===void 0?void 0:F.getBoundingClientRect(),V=(B=t.value)===null||B===void 0||(z=B.querySelector("thead"))===null||z===void 0?void 0:z.getBoundingClientRect(),j=(V==null?void 0:V.height)||0,J=(M=a.value)===null||M===void 0?void 0:M.getBoundingClientRect();if((e.headerAffixedTop||u.value)&&n.value){var U=h(e.headerAffixProps||e.headerAffixedTop),Z=(J==null?void 0:J.height)||0,ve=Math.abs(I.top)<I.height-j-U-Z;u.value&&(ve=I.top>-1*V.height),i.value=ve}if(e.footerAffixedBottom&&a!==null&&a!==void 0&&a.value)o.value=f(J,I,j);else if(e.horizontalScrollAffixedBottom&&r!==null&&r!==void 0&&r.value){var we=r.value.getBoundingClientRect();o.value=p(we,I,j)}if(e.paginationAffixedBottom&&l.value){var ye=l.value.getBoundingClientRect();s.value=f(ye,I,j)}}},m=function(){y()},g=function(){c(a.value)},b=function(){c(n.value)},C=function(){c(r.value)},w=function(){c(t.value)},x=function(){He(a.value,"scroll",g)},S=function(){Le(a.value,"scroll",g)},T=function(){He(n.value,"scroll",b)},k=function(){Le(n.value,"scroll",b)},_=function(){He(r.value,"scroll",C)},R=function(){Le(r.value,"scroll",C)},P=function(){He(t.value,"scroll",w)},O=function(){Le(t.value,"scroll",w)},$=function(){n.value&&(He(n.value,"mouseenter",T),He(n.value,"mouseleave",k)),e.footerAffixedBottom&&a.value&&(He(a.value,"mouseenter",x),He(a.value,"mouseleave",S)),e.horizontalScrollAffixedBottom&&r.value&&(He(r.value,"mouseenter",_),He(r.value,"mouseleave",R)),(d.value||u.value)&&t.value&&(He(t.value,"mouseenter",P),He(t.value,"mouseleave",O))},D=function(){n.value&&(Le(n.value,"mouseenter",T),Le(n.value,"mouseleave",k)),a.value&&(Le(a.value,"mouseenter",x),Le(a.value,"mouseleave",S)),t.value&&(Le(t.value,"mouseenter",P),Le(t.value,"mouseleave",O)),r.value&&(Le(r.value,"mouseenter",_),Le(r.value,"mouseleave",R))},N=function(){if(!(!d.value&&!e.paginationAffixedBottom))var F=setTimeout(function(){d.value||e.paginationAffixedBottom?He(document,"scroll",m):Le(document,"scroll",m),clearTimeout(F)})};ce([n,a,r,t],function(){$(),c(),y()}),ce(d,N),ce(function(){return[e.data,e.columns,e.headerAffixedTop,e.footerAffixedBottom,e.horizontalScrollAffixedBottom]},function(){c()}),ql(function(){Le(document,"scroll",m),D()});var K=function(F){t.value=F,N()};return{showAffixHeader:i,showAffixFooter:o,showAffixPagination:s,affixHeaderRef:n,affixFooterRef:a,horizontalScrollbarRef:r,paginationRef:l,onHorizontalScroll:c,setTableContentRef:K,updateAffixHeaderOrFooter:y}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function nr(e,t){if(!!e){for(var n=e instanceof Array?e:[e],a={},r=0;r<n.length;r++){var l=n[r];if(!!l){var i=xe(l)?l(t):l;a=i instanceof Array?nr(i,t):Object.assign(a,i)}}return a}}function ar(e,t,n){for(var a=e instanceof Array?e:[e],r=t.row,l=t.rowIndex,i=[],o=0,s=a.length;o<s;o++){var u=a[o],d=xe(u)?u(t):u;if(Vt(d)&&!(d instanceof Array)){d[l]&&(d=d[l]);var v=Q(r,n||"id");d[v]&&(d=d[v])}else d instanceof Array&&(d=ar(d,t,n));i=i.concat(d)}return i}function ki(e,t){for(var n=e instanceof Array?e:[e],a=[],r=0,l=n.length;r<l;r++){var i=n[r];xe(i)?a.push(i(t)):a.push(i)}return a}function sd(e,t,n){var a=xe(e.disabled)?e.disabled({row:t,rowIndex:n}):e.disabled;return e.checkProps&&(xe(e.checkProps)?a=a||e.checkProps({row:t,rowIndex:n}).disabled:e.checkProps==="object"&&(a=a||e.checkProps.disabled)),!!a}function Pi(e,t){if(!(!e||!t)){var n=e==null?void 0:e.find(function(s){return s.colKey===t});if(n)return n;for(var a=0,r=e.length;a<r;a++){var l,i;if((l=e[a])!==null&&l!==void 0&&(i=l.children)!==null&&i!==void 0&&i.length){var o;return Pi((o=e[a])===null||o===void 0?void 0:o.children,t)}}}}function $n(e,t){return Ne(e)==="object"?e:Ne(t)==="object"?t:{}}function ud(e,t,n){for(var a={},r=0,l=t.length;r<l;r++){var i=Q(t[r],n);e.includes(i)&&(a[i]=!0)}return a}function Gn(e,t){for(var n=0,a=e.length;n<a;n++){var r;if(e[n].colKey===t)return e[n];if((r=e[n].children)!==null&&r!==void 0&&r.length){var l=Gn(e[n].children,t);if(l)return l}}return null}function Do(e,t){for(var n=0,a=e.length;n<a;n++){var r;if(e[n].colKey===t)return n;if((r=e[n].children)!==null&&r!==void 0&&r.length){var l=Gn(e[n].children,t);if(l)return n}}return-1}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Qn(e,t,n,a){var r=Q(e,t);return r===void 0&&be.error("Table","rowKey is wrong, can not get unique identifier of row."),[r,n||a].join("_")}function Di(e,t,n,a){var r=H(new Map),l=function(s,u){var d=s.rowIndex,v=s.colIndex;if(!(!u.rowspan&&!u.colspan)){for(var c=d+(u.rowspan||1),f=v+(u.colspan||1),p=d;p<c;p++)for(var h=v;h<f;h++)if(p!==d||h!==v){if(!e.value[p]||!t.value[h])return;var y=Qn(e.value[p],n.value,t.value[h].colKey,h),m=r.value.get(y)||{};m.skipped=!0,r.value.set(y,m)}}},i=function(s,u,d){var v;if((v=r.value)===null||v===void 0||v.clear(),!(!s||!d))for(var c=0,f=s.length;c<f;c++)for(var p=s[c],h=0,y=u.length;h<y;h++){var m=u[h],g={row:p,col:m,rowIndex:c,colIndex:h},b=Qn(p,n.value,m.colKey,h),C=r.value.get(b)||{},w=d(g)||{};(w.rowspan||w.colspan||C.rowspan||C.colspan)&&(w.rowspan&&(C.rowspan=w.rowspan),w.colspan&&(C.colspan=w.colspan),r.value.set(b,C)),l==null||l(g,C)}};return ce(function(){return[e.value,t.value,a]},function(){i(e.value,t.value,a==null?void 0:a.value)},{immediate:!0}),{skipSpansMap:r}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function To(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?To(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):To(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Ti=["rowKey","rowClassName","columns","fixedRows","footData","rowAttributes","rowspanAndColspan","scroll","cellEmptyContent","onCellClick","onRowClick","onRowDblclick","onRowMouseover","onRowMousedown","onRowMouseenter","onRowMouseleave","onRowMouseup"],rr=["click","dblclick","mouseover","mousedown","mouseenter","mouseleave","mouseup"];function Un(e,t,n){var a=e.col,r=e.row,l=e.rowIndex;if(a.colKey==="serial-number")return l+1;if(xe(a.cell))return a.cell(Ae,e);if(t[a.colKey])return t[a.colKey](e);if(ot(a.cell)&&t[a.cell])return t[a.cell](e);if(xe(a.render))return a.render(Ae,Je(Je({},e),{},{type:"cell"}));var i=Q(r,a.colKey);return[void 0,"",null].includes(i)?n!=null&&n.cellEmptyContent?xe(n.cellEmptyContent)?n.cellEmptyContent(Ae,e):n.cellEmptyContent:t.cellEmptyContent?t.cellEmptyContent(e):i:i}var cd=Oe({name:"TR",props:Je(Je({row:Object,rowIndex:Number,ellipsisOverlayClassName:String,classPrefix:String,dataLength:Number,rowAndColFixedPosition:Map,skipSpansMap:Map},vn(nn,Ti)),{},{scrollType:String,rowHeight:Number,trs:Map,bufferSize:Number,isVirtual:Boolean,tableElm:{},tableContentElm:{}}),setup:function(t,n){var a=Pe(t),r=a.tableContentElm,l=H(null),i=tt(),o=i.tdEllipsisClass,s=i.tableBaseClass,u=i.tableColFixedClasses,d=i.tableRowFixedClasses,v=i.tdAlignClasses,c=i.tableDraggableClasses,f=L(function(){return rd(Q(t.row,t.rowKey||"id"),t.rowIndex,t.dataLength,t.fixedRows,t.rowAndColFixedPosition,d)}),p=L(function(){return nr(t.rowAttributes,{row:t.row,rowIndex:t.rowIndex,type:"body"})}),h=L(function(){var C,w=ar(t.rowClassName,{row:t.row,rowIndex:t.rowIndex,type:"body"},t.rowKey||"id");return[(C=f.value)===null||C===void 0?void 0:C.classes,w]}),y=si(r,l,xn(Je(Je({},t.scroll),{},{rowIndex:t.rowIndex}))),m=y.hasLazyLoadHolder,g=y.tRowHeight,b=function(w,x){var S={};return rr.forEach(function(T){S[T]=function(k){var _,R={e:k,row:w,index:x};(_=t["onRow".concat(vs(T))])===null||_===void 0||_.call(t,R),n.emit("row-".concat(T),R)}}),S};return Et(function(){var C=t.trs,w=t.row,x=t.scrollType,S=t.isVirtual;if(x==="virtual"&&S){var T=w.$index;C.set(T,l.value),n.emit("onRowMounted")}}),Ha(function(){if(t.isVirtual){var C=t.trs,w=t.row,x=w.$index;C.delete(x)}}),{trRef:l,tableColFixedClasses:u,tableDraggableClasses:c,tSlots:n.slots,tdEllipsisClass:o,tableBaseClass:s,tdAlignClasses:v,trStyles:f,classes:h,trAttributes:p,tRowHeight:g,hasLazyLoadHolder:m,getTrListeners:b}},methods:{renderEllipsisCell:function(t,n,a){var r=this,l=this.$createElement,i=a.cellNode,o=n.col,s=xe(o.ellipsis)?o.ellipsis(t,n):void 0;Ne(o.ellipsis)==="object"&&xe(o.ellipsis.content)&&(s=o.ellipsis.content(t,n));var u={};return Ne(o.ellipsis)==="object"&&(u="props"in o.ellipsis?o.ellipsis.props:o.ellipsis||void 0),l(Za,{attrs:{placement:"top",attach:this.tableElm?function(){return r.tableElm}:void 0,tooltipContent:s&&function(){return s},tooltipProps:u,overlayClassName:this.ellipsisOverlayClassName,classPrefix:this.classPrefix}},[i])},renderTd:function(t,n,a){var r,l=this,i=this.$createElement,o=n.col,s=n.colIndex,u=n.rowIndex,d=a.cellSpans,v=a.dataLength,c=a.rowAndColFixedPosition,f=Un(n,this.tSlots,{cellEmptyContent:a.cellEmptyContent}),p=tr(o,s,c,this.tableColFixedClasses),h=ki(o.className,Je(Je({},n),{},{type:"td"})),y=[p.classes,h,(r={},A(r,this.tdEllipsisClass,o.ellipsis),A(r,this.tableBaseClass.tdLastRow,u+d.rowspan===v),A(r,this.tableBaseClass.tdFirstCol,s===0&&this.rowspanAndColspan),A(r,this.tdAlignClasses[o.align],o.align&&o.align!=="left"),A(r,this.tableDraggableClasses.handle,o.colKey==="drag"),r)],m=function(w){var x,S=Je(Je({},n),{},{e:w});(x=l.onCellClick)===null||x===void 0||x.call(l,S),l.$emit("cell-click",S)},g=xe(o.attrs)?o.attrs(Je(Je({},n),{},{type:"td"})):o.attrs,b=Je(Je({},g),d);return i("td",fe([{class:y},{attrs:b},{style:Je(Je({},p.style),b.style),on:{click:m}}]),[o.ellipsis?this.renderEllipsisCell(t,n,{cellNode:f}):f])}},render:function(t){var n,a=this,r,l=arguments[0],i=this.row,o=this.rowIndex,s=this.dataLength,u=this.rowAndColFixedPosition,d=(n=this.columns)===null||n===void 0?void 0:n.map(function(c,f){var p={},h={row:i,col:c,rowIndex:o,colIndex:f},y=null;if(a.skipSpansMap.size){var m,g,b=Qn(i,a.rowKey,c.colKey,f);if(y=a.skipSpansMap.get(b)||{},((m=y)===null||m===void 0?void 0:m.rowspan)>1&&(p.rowspan=y.rowspan),((g=y)===null||g===void 0?void 0:g.colspan)>1&&(p.colspan=y.colspan),y.skipped)return null}return a.renderTd(t,h,{dataLength:s,rowAndColFixedPosition:u,columnLength:a.columns.length,cellSpans:p,cellEmptyContent:a.cellEmptyContent})}),v=this.trAttributes||{};return l("tr",fe([{ref:"trRef"},{attrs:v},{style:(r=this.trStyles)===null||r===void 0?void 0:r.style,class:this.classes},{on:this.getTrListeners(i,o)}]),[this.hasLazyLoadHolder?[l("td",{style:{height:"".concat(this.tRowHeight,"px"),border:"none"}})]:d])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Ro(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Kn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ro(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ro(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var dd=rr.concat("cell-click"),Ri=["rowKey","rowClassName","rowAttributes","loading","empty","fixedRows","firstFullRow","lastFullRow","rowspanAndColspan","scroll","cellEmptyContent","onCellClick","onPageChange","onRowClick","onRowDblclick","onRowMouseover","onRowMousedown","onRowMouseenter","onRowMouseleave","onRowMouseup","onScroll","onScrollX","onScrollY"],fd=Oe({name:"TBody",props:Kn({classPrefix:String,ellipsisOverlayClassName:String,data:Array,columns:Array,rowAndColFixedPosition:Map,showColumnShadow:Object,tableElm:{},tableWidth:Number,isWidthOverflow:Boolean,translateY:Number,scrollType:String,isVirtual:Boolean,rowHeight:Number,trs:Map,bufferSize:Number,tableContentElm:{},handleRowMounted:Function,renderExpandedRow:Function,firstFullRow:[String,Function],lastFullRow:[String,Function]},vn(nn,Ri)),setup:function(t,n){var a=n.emit,r=$t(),l=Pe(t),i=l.data,o=l.columns,s=l.rowKey,u=l.rowspanAndColspan,d=ke("table"),v=d.t,c=d.global,f=tt(),p=f.tableFullRowClasses,h=f.tableBaseClass,y=Di(i,o,s,u),m=y.skipSpansMap,g=L(function(){return[h.body]}),b=L(function(){return t.isWidthOverflow&&!!t.columns.find(function(w){return w.fixed==="left"})}),C=function(){var x={};return dd.forEach(function(S){var T=["cell-click"].includes(S)?S:"row-".concat(S);x[T]=function(k){a(T,k)}}),x};return{t:v,global:c,tableFullRowClasses:p,tbodyClasses:g,tableBaseClass:h,isFixedLeftColumn:b,skipSpansMap:m,renderTNode:r,getTrListeners:C}},render:function(t){var n=this,a,r,l=function(y,m){return t("tr",{class:[n.tableBaseClass.emptyRow,A({},n.tableFullRowClasses.base,n.isWidthOverflow)]},[t("td",{attrs:{colspan:m.length}},[t("div",{class:[n.tableBaseClass.empty,A({},n.tableFullRowClasses.innerFullRow,n.isWidthOverflow)],style:n.isWidthOverflow?{width:"".concat(n.tableWidth,"px")}:{}},[n.renderTNode("empty")||n.t(n.global.empty)])])])},i=function(y,m,g){var b=ps(g),C=n.renderTNode(b);if(["",null,void 0,!1].includes(C))return null;var w=[n.tableFullRowClasses.base,n.tableFullRowClasses[b]];return t("tr",{class:w},[t("td",{attrs:{colspan:m}},[t("div",{class:A({},n.tableFullRowClasses.innerFullRow,n.isFixedToLeft),style:n.isFixedToLeft?{width:"".concat(n.tableWidth,"px")}:{}},[t("div",{class:n.tableFullRowClasses.innerFullElement},[C])])])])},o=this.columns.length,s=this.data.length,u=[],d=["classPrefix","ellipsisOverlayClassName","rowAndColFixedPosition","scroll","tableElm","tableContentElm","trs","bufferSize","isVirtual","rowHeight","scrollType"];(a=this.data)===null||a===void 0||a.forEach(function(h,y){var m=Kn(Kn({},vn(n.$props,Ti)),{},{row:h,columns:n.columns,rowIndex:y,dataLength:s,skipSpansMap:n.skipSpansMap},vn(n.$props,d));n.onCellClick&&(m.onCellClick=n.onCellClick);var g=n.getTrListeners();n.handleRowMounted&&(g.onRowMounted=n.handleRowMounted);var b=t(cd,fe([{scopedSlots:n.$scopedSlots,key:Q(h,n.rowKey||"id")},{on:g},{},{props:m}]));if(u.push(b),n.renderExpandedRow){var C={row:h,index:y,columns:n.columns,tableWidth:n.tableWidth,isWidthOverflow:n.isWidthOverflow},w=n.renderExpandedRow(t,C);w&&u.push(w)}});var v=[i(t,o,"first-full-row"),u,i(t,o,"last-full-row")],c=!((r=this.data)!==null&&r!==void 0&&r.length)&&!this.loading&&!this.firstFullRow&&!this.lastFullRow,f="translate(0, ".concat(this.translateY,"px)"),p={transform:f,"-ms-transform":f,"-moz-transform":f,"-webkit-transform":f};return t("tbody",{class:this.tbodyClasses,style:this.isVirtual&&Kn({},p)},[c?l(t,this.columns):v])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function hn(e){return e&&(isNaN(Number(e))?e:"".concat(e,"px"))}function Ei(e){var t=Pe(e),n=t.bordered,a=t.stripe,r=t.hover,l=t.verticalAlign,i=t.height,o=t.maxHeight,s=t.tableContentWidth,u=tt(),d=u.tableBaseClass,v=u.tableAlignClasses,c=ua(),f=c.sizeClassNames,p=L(function(){var m;return[d.table,(m={},A(m,f[e.size],e.size!=="medium"),A(m,d.bordered,n.value),A(m,d.striped,a.value),A(m,d.hover,r.value),A(m,d.loading,e.loading),A(m,d.affixedHeader,e.headerAffixedTop),A(m,d.rowspanAndColspan,e.rowspanAndColspan),A(m,d.horizontalBarAffixed,e.horizontalScrollAffixedBottom),A(m,d.footerAffixed,e.footerAffixedBottom),A(m,v[l.value],l.value!=="middle"),m)]}),h=L(function(){return{height:hn(i.value),maxHeight:hn(o.value)}}),y=L(function(){return{width:hn(s.value)}});return{sizeClassNames:f,tableClasses:p,tableElementStyles:y,tableContentStyles:h}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function wt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Eo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var $o=Oe({name:"THead",props:{ellipsisOverlayClassName:String,isFixedHeader:Boolean,rowAndColFixedPosition:Map,thWidthList:Object,bordered:Boolean,isMultipleHeader:Boolean,resizable:Boolean,spansAndLeafNodes:Object,thList:Array,columnResizeParams:Object},setup:function(t,n){var a=n.slots,r=H(),l=tt(),i=l.tableHeaderClasses,o=l.tableBaseClass,s=L(function(){var v;return[i.header,(v={},A(v,i.fixed,t.isFixedHeader),A(v,o.bordered,t.bordered&&t.isMultipleHeader),A(v,i.multipleHeader,t.isMultipleHeader),v)]}),u=L(function(){for(var v={},c=t.thList[0],f=0,p=c.length;f<p;f++){var h=c[f];if(h.colspan>1)for(var y=f+1;y<f+h.colspan;y++)c[y]&&(v[c[y].colKey]=!0)}return v}),d=function(c){for(var f=c;f;){var p,h;if(f=f.parentNode,(p=f)!==null&&p!==void 0&&(h=p.classList)!==null&&h!==void 0&&h.contains("".concat(t.classPrefix,"-table")))break}return f};return wt(wt({},l),{},{colspanSkipMap:u,theadRef:r,theadClasses:s,slots:a,getTableNode:d})},render:function(t){var n=this,a=function(l,i,o){var s=new Map,u=n.spansAndLeafNodes.rowspanAndColspanMap;return n.thList.map(function(d,v){var c=d.map(function(f,p){var h,y;if(n.colspanSkipMap[f.colKey])return null;var m=u.get(f);if(p===0&&m.rowspan>1)for(var g=v+1;g<v+m.rowspan;g++)s.set(n.thList[g][0],!0);var b=tr(f,p,i,n.tableColFixedClasses),C={col:f,colIndex:p,row:{},rowIndex:-1},w=ki(f.className,wt(wt({},C),{},{type:"th"})),x=[b.classes,w,(h={},A(h,n.tableHeaderClasses.thBordered,s.get(f)),A(h,"".concat(n.classPrefix,"-table__th-").concat(f.colKey),f.colKey),A(h,n.tdAlignClasses[f.align],f.align&&f.align!=="left"),h)],S=!((y=f.children)!==null&&y!==void 0&&y.length),T=S&&o!==null&&o!==void 0&&o[f.colKey]?"".concat(o==null?void 0:o[f.colKey],"px"):void 0,k=wt(wt({},b.style||{}),{},{width:T}),_=er(l,n.slots,f,p),R=n.resizable?{mousedown:function(N){var K,E;return(K=n.columnResizeParams)===null||K===void 0||(E=K.onColumnMousedown)===null||E===void 0?void 0:E.call(K,N,f)},mousemove:function(N){var K,E;return(K=n.columnResizeParams)===null||K===void 0||(E=K.onColumnMouseover)===null||E===void 0?void 0:E.call(K,N,f)}}:{},P=xe(f.ellipsisTitle)?f.ellipsisTitle(l,{col:f,colIndex:p}):void 0,O=f.ellipsisTitle!==void 0?Boolean(f.ellipsisTitle):Boolean(f.ellipsis),$=(xe(f.attrs)?f.attrs(wt(wt({},C),{},{type:"th"})):f.attrs)||{};return f.colspan>1&&($.colspan=f.colspan),t("th",fe([{key:f.colKey,attrs:{"data-colkey":f.colKey},class:x,style:k},{attrs:wt(wt({},$),m)},{},{on:R}]),[t("div",{class:n.tableBaseClass.thCellInner},[O?t(Za,{attrs:{placement:"bottom",attach:n.theadRef?function(){return n.getTableNode(n.theadRef)}:void 0,tooltipContent:P&&function(){return P},tooltipProps:Ne(f.ellipsisTitle)==="object"?f.ellipsisTitle:void 0,overlayClassName:n.ellipsisOverlayClassName,classPrefix:n.classPrefix}},[_]):_])])});return t("tr",{key:v},[c])})};return t("thead",{ref:"theadRef",class:this.theadClasses},[a(t,this.rowAndColFixedPosition,this.thWidthList)])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Ko(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function An(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ko(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ko(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Ao=Oe({name:"TFoot",props:{rowKey:String,isFixedHeader:Boolean,rowAndColFixedPosition:Map,footData:Array,columns:Array,rowAttributes:[Array,Object,Function],rowClassName:[Array,String,Object,Function],thWidthList:[Object],footerSummary:[String,Function],rowspanAndColspanInFooter:Function},setup:function(t,n){var a=$t(),r=tt(),l=Pe(t),i=l.footData,o=l.columns,s=l.rowKey,u=l.rowspanAndColspanInFooter,d=Di(i,o,s,u),v=d.skipSpansMap,c=function(p){var h=p.col,y=p.row;return xe(h.foot)?h.foot(Ae,p):ot(h.foot)&&n.slots[h.foot]?n.slots[h.foot](p):h.foot||Q(y,h.colKey)};return An(An({skipSpansMap:v},r),{},{renderTFootCell:c,renderTNode:a})},render:function(){var t,n=this,a=arguments[0];if(!this.columns)return null;var r=[this.tableFooterClasses.footer,A({},this.tableFooterClasses.fixed,this.isFixedHeader)],l=(t=this.footData)===null||t===void 0?void 0:t.map(function(o,s){var u=nr(n.rowAttributes,{row:o,rowIndex:s,type:"foot"}),d=ar(n.rowClassName,{row:o,rowIndex:s,type:"foot"},n.rowKey||"id");return a("tr",fe([{key:s},{attrs:u},{class:d}]),[n.columns.map(function(v,c){var f,p={},h=null;if(n.skipSpansMap.size){var y,m,g=Qn(o,n.rowKey,v.colKey,c);if(h=n.skipSpansMap.get(g)||{},((y=h)===null||y===void 0?void 0:y.rowspan)>1&&(p.rowspan=h.rowspan),((m=h)===null||m===void 0?void 0:m.colspan)>1&&(p.colspan=h.colspan),h.skipped)return null}var b=tr(v,c,n.rowAndColFixedPosition,n.tableColFixedClasses),C=An({},b.style);return(f=n.thWidthList)!==null&&f!==void 0&&f[v.colKey]&&(C.width="".concat(n.thWidthList[v.colKey],"px")),a("td",fe([{},{attrs:An({key:v.colKey},p)},{class:b.classes,style:C}]),[n.renderTFootCell({row:o,rowIndex:s,col:v,colIndex:c})])})])}),i=this.renderTNode("footerSummary");return!i&&(!this.footData||!this.footData.length)?null:a("tfoot",{ref:"tFooterRef",class:r},[i&&a("tr",{class:this.tableFullRowClasses.base},[a("td",{attrs:{colspan:this.columns.length}},[a("div",{class:this.tableFullRowClasses.innerFullElement},[i])])]),l])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Fo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Nt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var vd=["page-change","cell-click","scroll","scrollX","scrollY"],or=rr.map(function(e){return"row-".concat(e)}).concat(vd),$i=Oe({name:"TBaseTable",props:Nt(Nt({},nn),{},{renderExpandedRow:Function,onLeafColumnsChange:Function}),setup:function(t,n){var a,r=$t(),l=H(),i=H(),o=H(),s=H(0),u=tt(),d=u.classPrefix,v=u.virtualScrollClasses,c=u.tableLayoutClasses,f=u.tableBaseClass,p=u.tableColFixedClasses,h=Ei(t),y=h.tableClasses,m=h.sizeClassNames,g=h.tableContentStyles,b=h.tableElementStyles,C=ke("table"),w=C.global,x=Si(t),S=x.isMultipleHeader,T=x.spansAndLeafNodes,k=x.thList,_=L(function(){var Se;return((Se=T.value)===null||Se===void 0?void 0:Se.leafColumns)||t.columns}),R=H(),P=H(),O=H(),$=H(),D=od(t,n,_,{paginationAffixRef:R,horizontalScrollAffixRef:P,headerTopAffixRef:O,footerBottomAffixRef:$}),N=D.scrollbarWidth,K=D.tableWidth,E=D.tableElmWidth,F=D.tableContentRef,B=D.isFixedHeader,z=D.isWidthOverflow,M=D.isFixedColumn,I=D.thWidthList,V=D.showColumnShadow,j=D.rowAndColFixedPosition,J=D.setData,U=D.refreshTable,Z=D.emitScrollEvent,ve=D.setUseFixedTableElmRef,we=D.updateColumnFixedShadow,ye=D.getThWidthList,Te=D.updateThWidthList,Ve=D.setRecalculateColWidthFuncRef,it=D.addTableResizeObserver,Ee=id(t),Ge=Ee.affixHeaderRef,dt=Ee.affixFooterRef,mt=Ee.horizontalScrollbarRef,_t=Ee.paginationRef,Be=Ee.showAffixHeader,ft=Ee.showAffixFooter,st=Ee.showAffixPagination,At=Ee.onHorizontalScroll,Ft=Ee.updateAffixHeaderOrFooter,se=Ee.setTableContentRef,q=ld(t,n),X=q.dataSource,ne=q.isPaginateData,ae=q.renderPagination,le=nd(F,U,ye,Te),he=le.resizeLineRef,re=le.resizeLineStyle,pe=le.recalculateColWidth,te=le.setEffectColMap;Ve(pe);var W=L(function(){var Se;return[y.value,(Se={},A(Se,f.headerFixed,B.value),A(Se,f.columnFixed,M.value),A(Se,f.widthOverflow,z.value),A(Se,f.multipleHeader,S.value),A(Se,p.leftShadow,V.left),A(Se,p.rightShadow,V.right),A(Se,f.columnResizableTable,t.resizable),Se)]}),G=L(function(){return[[c[t.tableLayout]],A({},f.fullHeight,t.height)]}),ee=L(function(){var Se,Xe,St;return((Se=t.scroll)===null||Se===void 0?void 0:Se.type)==="virtual"&&((Xe=t.data)===null||Xe===void 0?void 0:Xe.length)>(((St=t.scroll)===null||St===void 0?void 0:St.threshold)||100)}),_e=L(function(){return t.bordered&&B.value&&(S.value&&z.value||!S.value)}),Ce=L(function(){return t.allowResizeColumnWidth===void 0?t.resizable:t.allowResizeColumnWidth});ce(i,function(){ve(i.value)}),ce(function(){return[t.data,X,ne]},function(){J(ne.value?X.value:t.data)}),ce(T,function(){var Se;(Se=t.onLeafColumnsChange)===null||Se===void 0||Se.call(t,T.value.leafColumns),n.emit("LeafColumnsChange",T.value.leafColumns)},{immediate:!0}),ce(k,function(){te(k.value[0],null)},{immediate:!0});var $e=function(){ra(function(){At(),Ft()})},de=function(){var Xe={};return or.forEach(function(St){Xe[St]=function(){for(var ln=arguments.length,dr=new Array(ln),Sn=0;Sn<ln;Sn++)dr[Sn]=arguments[Sn];n.emit.apply(n,[St].concat(dr))}}),Xe},je=t.scroll||{},ze=je.type,Ke=je.rowHeight,nt=je.bufferSize,Ie=nt===void 0?20:nt,Ye=je.isFixedRowHeight,Re=Ye===void 0?!1:Ye,De=Pe(t),Ue=De.data,qe=ze==="virtual"?ci({container:F,data:Ue,fixedHeight:Re,lineHeight:Ke,bufferSize:Ie,threshold:(a=t.scroll)===null||a===void 0?void 0:a.threshold}):{},vt=qe.trs,Ot=vt===void 0?null:vt,Lt=qe.scrollHeight,on=Lt===void 0?null:Lt,Bt=qe.visibleData,Ui=Bt===void 0?null:Bt,ir=qe.translateY,Xi=ir===void 0?null:ir,sr=qe.handleScroll,Zi=sr===void 0?null:sr,ur=qe.handleRowMounted,es=ur===void 0?null:ur;Pa("tableContentRef",F),Pa("rowHeightRef",H(Ke));var pa=0,ts=function(Xe){var St=Xe.target||Xe.srcElement,ln=St.scrollTop;pa!==ln?ee.value&&Zi():(pa=0,we(St)),pa=ln,Z(Xe)},cr=function(){var Xe;!i.value||(s.value=(Xe=i.value.querySelector("tfoot"))===null||Xe===void 0?void 0:Xe.getBoundingClientRect().height)};return ce(F,function(){se(F.value)}),ce(i,cr),ce(l,function(Se){it(Se)}),Et(function(){cr(),se(F.value),it(l.value)}),{columnResizable:Ce,thList:k,classPrefix:d,isVirtual:ee,global:w,tableFootHeight:s,tableWidth:K,tableElmWidth:E,tableRef:l,tableElmRef:i,sizeClassNames:m,tableBaseClass:f,spansAndLeafNodes:T,dynamicBaseTableClasses:W,tableContentStyles:g,tableElementStyles:b,virtualScrollClasses:v,tableLayoutClasses:c,tableElmClasses:G,tableContentRef:F,isFixedHeader:B,isWidthOverflow:z,isFixedColumn:M,rowAndColFixedPosition:j,showColumnShadow:V,thWidthList:I,isPaginateData:ne,dataSource:X,scrollType:ze,rowHeight:Ke,trs:Ot,bufferSize:Ie,scrollHeight:on,visibleData:Ui,translateY:Xi,affixHeaderRef:Ge,affixFooterRef:dt,paginationRef:_t,showAffixHeader:Be,showAffixFooter:ft,scrollbarWidth:N,isMultipleHeader:S,showRightDivider:_e,resizeLineRef:he,resizeLineStyle:re,columnResizeParams:le,horizontalScrollbarRef:mt,tableBodyRef:o,showAffixPagination:st,getListener:de,renderPagination:ae,renderTNode:r,handleRowMounted:es,onFixedChange:$e,onHorizontalScroll:At,updateAffixHeaderOrFooter:Ft,refreshTable:U,onInnerVirtualScroll:ts,paginationAffixRef:R,horizontalScrollAffixRef:P,headerTopAffixRef:O,footerBottomAffixRef:$}},methods:{renderColGroup:function(t){var n=this,a=this.$createElement,r=this.tableLayout==="fixed"&&this.isWidthOverflow?"100px":void 0;return a("colgroup",[t.map(function(l){var i={width:hn(n.thWidthList[l.colKey]||l.width)||r};return l.minWidth&&(i.minWidth=hn(l.minWidth)),a("col",{key:l.colKey,style:i})})])},getHeadProps:function(){var t={isFixedHeader:this.isFixedHeader,rowAndColFixedPosition:this.rowAndColFixedPosition,isMultipleHeader:this.isMultipleHeader,bordered:this.bordered,spansAndLeafNodes:this.spansAndLeafNodes,thList:this.thList,thWidthList:this.thWidthList,resizable:this.resizable,columnResizeParams:this.columnResizeParams,classPrefix:this.classPrefix,ellipsisOverlayClassName:this.size!=="medium"?this.sizeClassNames[this.size]:""};return t},renderFixedHeader:function(t){var n,a,r=this.$createElement;if(!this.showHeader)return null;var l=!!(this.isVirtual&&!this.headerAffixedTop&&this.bordered)&&/Chrome/.test((n=navigator)===null||n===void 0?void 0:n.userAgent),i=this.bordered&&l?1:0,o=this.isWidthOverflow?this.scrollbarWidth:0,s=Vn()<=11?4:0,u=(((a=this.affixHeaderRef)===null||a===void 0?void 0:a.getBoundingClientRect().height)||0)-s,d=u-o-i,v=this.headerAffixedTop?Number(this.showAffixHeader):1,c={width:"".concat(this.tableWidth,"px"),height:"".concat(d,"px"),opacity:v,marginTop:l?"".concat(i,"px"):0},f=this.renderColGroup(t),p=this.bordered?1:0,h=Boolean((this.headerAffixedTop||this.isVirtual)&&this.tableWidth)&&r("div",{ref:"affixHeaderRef",style:{width:"".concat(this.tableWidth-p,"px"),opacity:v},class:["scrollbar",A({},this.tableBaseClass.affixedHeaderElm,this.headerAffixedTop||this.isVirtual)]},[r("table",{class:this.tableElmClasses,style:Nt(Nt({},this.tableElementStyles),{},{width:"".concat(this.tableElmWidth,"px")})},[f,r($o,fe([{scopedSlots:this.$scopedSlots},{props:this.getHeadProps()}]))])]),y=r("div",{class:this.tableBaseClass.affixedHeaderWrap,style:c},[h]);return y},renderAffixedFooter:function(t){var n,a=this.$createElement,r=this.isWidthOverflow?this.scrollbarWidth:0,l=this.bordered?1:0,i=r;this.bordered&&(i+=1);var o=Boolean(this.footerAffixedBottom&&((n=this.footData)===null||n===void 0?void 0:n.length)&&this.tableWidth)&&a(kn,fe([{class:this.tableBaseClass.affixedFooterWrap,on:{fixedChange:this.onFixedChange},attrs:{offsetBottom:i||0}},{props:$n(this.footerAffixedBottom,this.footerAffixProps)},{style:{marginTop:"".concat(-1*(this.tableFootHeight+i),"px")},ref:"footerBottomAffixRef"}]),[a("div",{ref:"affixFooterRef",style:{width:"".concat(this.tableWidth-l,"px"),opacity:Number(this.showAffixFooter)},class:["scrollbar",A({},this.tableBaseClass.affixedFooterElm,this.footerAffixedBottom||this.isVirtual)]},[a("table",{class:this.tableElmClasses,style:Nt(Nt({},this.tableElementStyles),{},{width:"".concat(this.tableElmWidth,"px")})},[this.renderColGroup(t),a(Ao,{attrs:{rowKey:this.rowKey,isFixedHeader:this.isFixedHeader,rowAndColFixedPosition:this.rowAndColFixedPosition,footData:this.footData,columns:t,rowAttributes:this.rowAttributes,rowClassName:this.rowClassName,thWidthList:this.thWidthList,footerSummary:this.footerSummary,rowspanAndColspanInFooter:this.rowspanAndColspanInFooter},scopedSlots:this.$scopedSlots})])])]);return o},renderAffixedHeader:function(t){var n=this.$createElement;return nn.showHeader?!!(this.isVirtual||this.headerAffixedTop)&&(this.headerAffixedTop?n(kn,fe([{attrs:{offsetTop:0}},{props:$n(this.headerAffixedTop,this.headerAffixProps)},{on:{fixedChange:this.onFixedChange},ref:"headerTopAffixRef"}]),[this.renderFixedHeader(t)]):this.isFixedHeader&&this.renderFixedHeader(t)):null}},render:function(t){var n,a=this,r,l=this.rowAndColFixedPosition,i=this.isPaginateData?this.dataSource:this.data,o=((n=this.spansAndLeafNodes)===null||n===void 0?void 0:n.leafColumns)||this.columns;this.allowResizeColumnWidth&&be.warn("Table","allowResizeColumnWidth is going to be deprecated, please use resizable instead."),this.columnResizable&&this.tableLayout==="auto"&&be.warn("Table","table-layout can not be `auto` for resizable column table, set `table-layout: fixed` please.");var s="translate(0, ".concat(this.scrollHeight,"px)"),u={transform:s,"-ms-transform":s,"-moz-transform":s,"-webkit-transform":s},d=Nt({rowAndColFixedPosition:l,showColumnShadow:this.showColumnShadow,data:this.isVirtual?this.visibleData:i,columns:o,tableElm:this.tableRef,tableContentElm:this.tableContentRef,tableWidth:this.tableWidth,isWidthOverflow:this.isWidthOverflow,isVirtual:this.isVirtual,translateY:this.translateY,scrollType:this.scrollType,rowHeight:this.rowHeight,trs:this.trs,bufferSize:this.bufferSize,scroll:this.scroll,cellEmptyContent:this.cellEmptyContent,classPrefix:this.classPrefix,handleRowMounted:this.handleRowMounted,renderExpandedRow:this.renderExpandedRow},vn(this.$props,Ri)),v=this.getListener(),c=t("div",fe([{ref:"tableContentRef",class:this.tableBaseClass.content,style:this.tableContentStyles},{on:{scroll:this.onInnerVirtualScroll}}]),[this.isVirtual&&t("div",{class:this.virtualScrollClasses.cursor,style:u}),t("table",{ref:"tableElmRef",class:this.tableElmClasses,style:this.tableElementStyles},[this.renderColGroup(o),this.showHeader&&t($o,fe([{scopedSlots:this.$scopedSlots},{props:this.getHeadProps()}])),t(fd,fe([{ref:"tableBodyRef",scopedSlots:this.$scopedSlots},{props:d},{},{on:v}])),t(Ao,{attrs:{rowKey:this.rowKey,isFixedHeader:this.isFixedHeader,rowAndColFixedPosition:l,footData:this.footData,columns:o,rowAttributes:this.rowAttributes,rowClassName:this.rowClassName,footerSummary:this.footerSummary,rowspanAndColspanInFooter:this.rowspanAndColspanInFooter},scopedSlots:this.$scopedSlots})])]),f=this.renderTNode("loading"),p=this.loading!==void 0&&t(bn,fe([{attrs:{loading:!!this.loading,text:f?function(){return f}:void 0,attach:this.tableRef?function(){return a.tableRef}:void 0,showOverlay:!0}},{props:Nt({size:"small"},this.loadingProps)}])),h=this.renderTNode("topContent"),y=this.renderTNode("bottomContent"),m=t("div",{ref:"paginationRef",class:this.tableBaseClass.paginationWrap,style:{opacity:Number(this.showAffixPagination)}},[this.renderPagination(t)]),g=!!y&&t("div",{class:this.tableBaseClass.bottomContent},[y]);return t("div",{ref:"tableRef",class:this.dynamicBaseTableClasses,style:"position: relative"},[!!h&&t("div",{class:this.tableBaseClass.topContent},[h]),this.renderAffixedHeader(o),c,this.renderAffixedFooter(o),p,this.showRightDivider&&t("div",{class:this.tableBaseClass.scrollbarDivider,style:{right:"".concat(this.scrollbarWidth,"px"),height:"".concat((r=this.tableContentRef)===null||r===void 0?void 0:r.getBoundingClientRect().height,"px")}}),g,this.horizontalScrollAffixedBottom&&t(kn,fe([{attrs:{offsetBottom:0}},{props:$n(this.horizontalScrollAffixedBottom)},{style:this.showAffixFooter?{marginTop:"-".concat(this.scrollbarWidth*2,"px")}:{float:"right",visibility:"hidden"},ref:"horizontalScrollAffixRef"}]),[t("div",{ref:"horizontalScrollbarRef",class:["scrollbar",this.tableBaseClass.obviousScrollbar],style:{width:"".concat(this.tableWidth,"px"),overflow:"auto",opacity:Number(this.showAffixFooter)}},[t("div",{style:{width:"".concat(this.tableElmWidth,"px"),height:"5px"}})])]),this.paginationAffixedBottom?t(kn,fe([{attrs:{offsetBottom:0}},{props:$n(this.paginationAffixedBottom)},{ref:"paginationAffixRef"}]),[m]):m,t("div",{ref:"resizeLineRef",class:this.tableBaseClass.resizeLine,style:this.resizeLineStyle})])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Ki={asyncLoading:{type:[String,Function]},columnController:{type:Object},columnControllerVisible:{type:Boolean,default:void 0},defaultColumnControllerVisible:{type:Boolean,default:void 0},columns:{type:Array,default:function(){return[]}},displayColumns:{type:Array,default:void 0},defaultDisplayColumns:{type:Array},dragSort:{type:String,validator:function(t){return t?["row","row-handler","col","row-handler-col","drag-col"].includes(t):!0}},dragSortOptions:{type:Object},editableCellState:{type:Function},editableRowKeys:{type:Array},expandIcon:{type:[Boolean,Function],default:!0},expandOnRowClick:Boolean,expandedRow:{type:[String,Function]},expandedRowKeys:{type:Array,default:void 0},defaultExpandedRowKeys:{type:Array,default:function(){return[]}},filterIcon:{type:Function},filterRow:{type:[String,Function]},filterValue:{type:Object,default:void 0},defaultFilterValue:{type:Object},hideSortTips:Boolean,indeterminateSelectedRowKeys:{type:Array},multipleSort:Boolean,selectedRowKeys:{type:Array,default:void 0},defaultSelectedRowKeys:{type:Array,default:function(){return[]}},showSortColumnBgColor:Boolean,sort:{type:[Object,Array],default:void 0},defaultSort:{type:[Object,Array]},sortIcon:{type:Function},sortOnRowDraggable:Boolean,onAsyncLoadingClick:Function,onCellClick:Function,onChange:Function,onColumnChange:Function,onColumnControllerVisibleChange:Function,onDataChange:Function,onDisplayColumnsChange:Function,onDragSort:Function,onExpandChange:Function,onFilterChange:Function,onRowEdit:Function,onRowValidate:Function,onSelectChange:Function,onSortChange:Function,onValidate:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function No(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function pd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?No(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):No(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Fa(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set,n=0,a=e.length;n<a;n++){var r,l=e[n];l.colKey&&t.add(l.colKey),(r=l.children)!==null&&r!==void 0&&r.length&&Fa(l.children,t)}return t}function hd(e,t){var n=ke("table"),a=n.classPrefix,r=n.global,l=xt({SettingIcon:hs}),i=l.SettingIcon,o=Pe(e),s=o.columns,u=o.columnController,d=o.displayColumns,v=o.columnControllerVisible,c=H(null),f=L(function(){var R,P=(((R=u.value)===null||R===void 0?void 0:R.fields)||oe(Fa(s.value))).filter(function(O){return O});return new Set(P)}),p=oe(Fa(s.value)),h=Rt(d,e.defaultDisplayColumns||p,e.onDisplayColumnsChange,"displayColumns","display-columns-change"),y=me(h,2),m=y[0],g=y[1],b=H(d.value||e.defaultDisplayColumns||p),C=L(function(){return x(s.value)}),w=L(function(){return aa(b.value,oe(f.value))});ce([d],function(R){var P=me(R,1),O=P[0];b.value=O||e.defaultDisplayColumns||p});function x(R){for(var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],O=function(K,E){var F,B=R[K];B.colKey&&P.push({label:function(){return er(Ae,t.slots,B,K)},value:B.colKey,disabled:!f.value.has(B.colKey)}),(F=B.children)!==null&&F!==void 0&&F.length&&x(B.children,P)},$=0,D=R.length;$<D;$++)O($);return P}var S=function(P,O){var $;b.value=P;var D={columns:P,type:O.type,currentColumn:Pi(s.value,String(O.current)),e:O.e};($=e.onColumnChange)===null||$===void 0||$.call(e,D),t.emit("column-change",D)},T=function(P,O){if(P){var $,D,N=(($=C.value)===null||$===void 0?void 0:$.map(function(z){return z.value}))||[];b.value=N;var K={type:"check",columns:N,e:O.e};(D=e.onColumnChange)===null||D===void 0||D.call(e,K),t.emit("column-change",K)}else{var E,F=C.value.filter(function(z){return z.disabled}).map(function(z){return z.value});b.value=F;var B={type:"uncheck",columns:F,e:O.e};(E=e.onColumnChange)===null||E===void 0||E.call(e,B),t.emit("column-change",B)}},k=function(){var P;c.value=Es.confirm(pd({header:r.value.columnConfigTitleText,body:function($){var D,N,K=((D=u.value)===null||D===void 0?void 0:D.displayType)==="fixed-width"?"fixed":"auto",E=w.value.length,F=E===f.value.size,B=E>0&&E<f.value.size,z=a.value,M=["".concat(z,"-table__column-controller"),"".concat(z,"-table__column-controller--").concat(K)],I=Ae("div",{class:M},[Ae("div",{class:"".concat(z,"-table__column-controller-body")},[Ae("p",{class:"".concat(z,"-table__column-controller-desc")},[r.value.columnConfigDescriptionText]),Ae("div",{class:"".concat(z,"-table__column-controller-block")},[Ae(qn,{attrs:{indeterminate:B,checked:F},on:{change:T}},[r.value.selectAllText])]),Ae("div",{class:"".concat(z,"-table__column-controller-block")},[Ae(ii,fe([{attrs:{options:C.value}},{props:(N=u.value)===null||N===void 0?void 0:N.checkboxProps},{attrs:{value:b.value},on:{change:S}}]))])])]);return I},confirmBtn:r.value.confirmText,cancelBtn:r.value.cancelText,width:612,onConfirm:function(){if(g(oe(b.value)),v.value===void 0)c.value.hide();else{var $;($=e.onColumnControllerVisibleChange)===null||$===void 0||$.call(e,!1,{trigger:"confirm"}),t.emit("update:columnControllerVisible",!1)}},onClose:function(){if(v.value===void 0)c.value.hide();else{var $;($=e.onColumnControllerVisibleChange)===null||$===void 0||$.call(e,!1,{trigger:"cancel"}),t.emit("update:columnControllerVisible",!1)}}},((P=u.value)===null||P===void 0?void 0:P.dialogProps)||{}))};ce([v],function(R){var P=me(R,1),O=P[0];O!==void 0&&(c.value?O?c.value.show():c.value.hide():O&&k())},{immediate:!0});var _=function(P){var O,$=!!(u.value&&Object.keys(u.value).length),D=$?u.value.placement||"top-right":"";if($&&u.value.hideTriggerButton)return null;var N=["".concat(a.value,"-table__column-controller-trigger"),A({},"".concat(a.value,"-align-").concat(D),!!D)];return Ae("div",{class:N},[Ae(et,fe([{attrs:{theme:"default",variant:"outline",content:r.value.columnConfigButtonText},on:{click:k},scopedSlots:{icon:function(){return Ae(i)}}},{props:(O=e.columnController)===null||O===void 0?void 0:O.buttonProps}]))])};return{tDisplayColumns:m,columnCheckboxKeys:b,checkboxOptions:C,renderColumnController:_}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function md(e,t){var n=Pe(e),a=n.expandedRowKeys,r=$t(),l=ke("table"),i=l.t,o=l.global,s=xt({ChevronRightCircleIcon:Jl}),u=s.ChevronRightCircleIcon,d=tt(),v=d.tableExpandClasses,c=d.positiveRotate90,f=d.tableFullRowClasses,p=Rt(a,e.defaultExpandedRowKeys||[],e.onExpandChange,"expandedRowKeys","expand-change"),h=me(p,2),y=h[0],m=h[1],g=L(function(){return Boolean(e.expandedRow||t.slots.expandedRow||t.slots["expanded-row"])}),b=L(function(){return e.expandIcon!==!1&&g.value}),C=L(function(){var _,R;return((_=e.columns)===null||_===void 0||(R=_[0])===null||R===void 0?void 0:R.fixed)==="left"}),w=function(R,P){e.expandOnRowClick&&R.stopPropagation();var O=Q(P,e.rowKey||"id"),$=y.value.indexOf(O),D=oe(y.value);$!==-1?D.splice($,1):D.push(O),m(D,{expandedRowData:e.data.filter(function(N){return D.includes(Q(N,e.rowKey||"id"))}),currentRowData:P})},x=function(R,P){var O=P.row,$=P.rowIndex,D=Q(O,e.rowKey||"id"),N=y.value.includes(D),K=r("expandIcon",{defaultNode:i(o.value.expandIcon)||R(u),params:{row:O,index:$}});if(!K)return null;var E=[v.iconBox,v[N?"expanded":"collapsed"],A({},c,N)];return R("span",{class:E,on:{click:function(B){return w(B,O)}}},[K])},S=function(R){var P={colKey:"__EXPAND_ROW_ICON_COLUMN__",width:64,className:v.iconCell,fixed:C.value?"left":void 0,cell:x};return P},T=function(R,P){var O=Q(P.row,e.rowKey||"id");if(!y.value||!y.value.includes(O))return null;var $=P.isWidthOverflow&&e.columns.find(function(D){return D.fixed==="left"});return R("tr",{key:"expand_".concat(O),class:[v.row,A({},f.base,$)]},[R("td",{attrs:{colspan:P.columns.length}},[R("div",{class:[v.rowInner,A({},f.innerFullRow,$)],style:$?{width:"".concat(P.tableWidth,"px")}:{}},[R("div",{class:f.innerFullElement},[r("expandedRow",{params:P})])])])])},k=function(R){w(R.e,R.row)};return{showExpandedRow:g,showExpandIconColumn:b,getExpandColumn:S,renderExpandedRow:T,onInnerExpandRowClick:k}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function jo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Fn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function gd(e,t){var n=Pe(e),a=n.selectedRowKeys,r=n.columns,l=n.data,i=n.rowKey,o=H(),s=Rt(a,e.defaultSelectedRowKeys||[],e.onSelectChange,"selectedRowKeys","select-change"),u=me(s,2),d=u[0],v=u[1],c=H(new Map),f=L(function(){return e.columns.find(function(x){var S=x.type;return["multiple","single"].includes(S)})}),p=L(function(){return l.value.filter(function(x,S){return!y(x,S)})}),h=L(function(){return aa(d.value,p.value.map(function(x){return Q(x,e.rowKey||"id")}))});ce([l,r,d,f,i],function(){var x,S=function(O){return f.value.disabled(O)?t.disabled:""},T=(x=f.value)!==null&&x!==void 0&&x.disabled?S:void 0,k=new Set(d.value),_=function(O){var $=O.row,D=Q($,e.rowKey||"id");return k.has(D)?t.selected:""},R=k.size?_:void 0;o.value=[T,R].filter(function(P){return P})},{immediate:!0});function y(x,S){return sd(f.value,x,S)}function m(x){return function(){return Ae(qn,{attrs:{checked:h.value.length!==0&&p.value.length!==0&&h.value.length===p.value.length,indeterminate:h.value.length>0&&h.value.length<p.value.length,disabled:!p.value.length},on:Fn({},{change:C})})}}function g(x,S){var T=S.col,k=S.row,_=k===void 0?{}:k,R=S.rowIndex,P=d.value.includes(Q(_,e.rowKey||"id")),O=typeof T.disabled=="function"?T.disabled({row:_,rowIndex:R}):T.disabled,$=xe(T.checkProps)?T.checkProps({row:_,rowIndex:R}):T.checkProps,D={props:Fn({checked:P,disabled:O},$),on:{click:function(F){F==null||F.stopPropagation()},change:function(){return b(_)}}};if(T.type==="single")return Ae(nc,fe([{},D]));if(T.type==="multiple"){var N,K=(N=e.indeterminateSelectedRowKeys)!==null&&N!==void 0&&N.length?e.indeterminateSelectedRowKeys.includes(Q(_,e.rowKey)):!1;return Ae(qn,fe([{attrs:{indeterminate:K}},D]))}return null}function b(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=oe(d.value),T=e.rowKey||"id",k=Q(x,T),_=S.indexOf(k),R=_!==-1;if(f.value.type==="multiple")R?S.splice(_,1):S.push(k);else if(f.value.type==="single")S=R?[]:[k];else{be.warn("Table","`column.type` must be one of `multiple` and `single`");return}v(S,{selectedRowData:S.map(function(P){return c.value.get(P)}),currentRowKey:k,currentRowData:x,type:R?"uncheck":"check"})}function C(x){var S,T=e.rowKey||"id",k=p.value.map(function(P){return Q(P,T)}),_=((S=a.value)===null||S===void 0?void 0:S.filter(function(P){return!k.includes(P)}))||[],R=x?[].concat(oe(_),oe(k)):oe(_);v(R,{selectedRowData:x?R.map(function(P){return c.value.get(P)}):[],type:x?"check":"uncheck",currentRowKey:"CHECK_ALL_BOX"})}function w(x){var S=["multiple","single"].includes(x.type);return S?Fn(Fn({},x),{},{width:x.width||64,className:[t.checkCell,x.className],cell:function(k,_){return g(k,_)},title:x.type==="multiple"?m():x.title}):x}return ce([l,i],function(x){for(var S=me(x,2),T=S[0],k=S[1],_=0,R=T.length;_<R;_++)c.value.set(Q(T[_],k||"id"),T[_])},{immediate:!0}),{selectedRowClassNames:o,formatToRowSelectColumn:w}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var bd=Oe({props:{sortType:{type:String,default:"all"},sortOrder:{type:String,default:function(){return""}},sortIcon:Function,tooltipProps:Object,hideSortTips:Boolean},setup:function(t,n){var a=tt(),r=a.tableSortClasses,l=a.negativeRotate180,i=sa(),o=ke("table"),s=o.t,u=o.global,d=xt({ChevronDownIcon:na}),v=d.ChevronDownIcon,c=L(function(){return t.sortType==="all"?["asc","desc"]:[t.sortType]}),f=function(h,y){n.emit("sort-icon-click",h,{descending:y==="desc"})};return{t:s,global:u,ChevronDownIcon:v,tableSortClasses:r,negativeRotate180:l,allowSortTypes:c,onSortIconClick:f,renderTNode:i}},methods:{getSortIcon:function(t,n){var a=this,r=this.$createElement,l=this.ChevronDownIcon,i=this.t(this.global.sortIcon)||r(l),o=this.renderTNode("sortIcon",i),s=[n,this.tableSortClasses.sortIcon,this.tableSortClasses.iconDirection[t],A({},this.negativeRotate180,t==="asc")];return r("span",{class:s,on:{click:function(d){return a.onSortIconClick(d,t)}}},[o])}},render:function(){var t=this,n=arguments[0],a=this.tableSortClasses,r=[a.trigger,A({},a.doubleIcon,this.allowSortTypes.length>1)],l={asc:this.global.sortAscendingOperationText,desc:this.global.sortDescendingOperationText},i=this.allowSortTypes.map(function(o){var s,u=o===t.sortOrder?a.iconActive:a.iconDefault,d=t.global.sortCancelOperationText,v=o===t.sortOrder?d:l[o];return((s=t.hideSortTips)!==null&&s!==void 0?s:t.global.hideSortTips)?t.getSortIcon(o,u):n(ai,fe([{attrs:{content:v,placement:"right"}},t.tooltipProps,{attrs:{showArrow:!1},class:t.tableSortClasses.iconDirection[o]}]),[t.getSortIcon(o,u)])});return n("div",{class:r},[i])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Io(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function yd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Io(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Io(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function wd(e,t){var n=t.emit,a=t.slots,r=Pe(e),l=r.sort,i=r.data,o=H(),s=Rt(l,e.defaultSort,e.onSortChange,"sort","sort-change"),u=me(s,2),d=u[0],v=u[1],c=Rt(i,[],e.onDataChange,"data","data-change"),f=me(c,2),p=f[0],h=f[1],y=L(function(){return b(e.columns)}),m=L(function(){var _=d.value;return _?Array.isArray(_)?_:[_]:[]}),g=L(function(){var _={};return m.value.forEach(function(R,P){var O=R.sortBy;_[O]=yd({index:P},R)}),_});function b(_){for(var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},P=0,O=_.length;P<O;P++){var $,D=_[P];xe(D.sorter)&&(R[D.colKey]=D.sorter),($=D.children)!==null&&$!==void 0&&$.length&&b(D.children,R)}return R}function C(_){var R=_;if(!!Object.keys(y.value).length){o.value||(o.value=p.value);var P=!R||R instanceof Array&&!R.length,O=!(R instanceof Array)&&!(R!=null&&R.sortBy);if(P||O)return h(o.value,{trigger:"sort"}),o.value;var $=R instanceof Array?R:[R],D=p.value.slice().sort(function(N,K){for(var E=0,F=0,B=$.length;F<B;F++){var z=$[F],M=y.value[z.sortBy];if(E===0&&M)E=z.descending?M(K,N):M(N,K);else break}return E});if(JSON.stringify(D)!==JSON.stringify(p.value))return h(D,{trigger:"sort"}),D}}function w(_,R){var P,O;if(e.multipleSort)O=T(_,R);else{var $=d.value instanceof Array?d.value[0]:d.value;O=S(_,$,R)}var D=C(O),N=D||p.value,K=N;v(O,{currentDataSource:K,col:_}),(P=e.onChange)===null||P===void 0||P.call(e,{sorter:O},{currentData:N,trigger:"sorter"}),n("change",{sorter:O},{currentData:N,col:_,trigger:"sorter"})}function x(_){if(_!==void 0)return _?"desc":"asc"}function S(_,R,P){if(!(R&&R.sortBy===_.colKey&&R.descending===P.descending))return{sortBy:_.colKey,descending:P.descending}}function T(_,R){var P=d.value;if(P instanceof Array){for(var O=_.colKey,$=oe(P),D=0,N=P.length;D<N;D++)if(P[D].sortBy===O){var K=S(_,P[D],R);return K?$[D]=K:$.splice(D,1),$}return $.push({sortBy:O,descending:R.descending}),$}}function k(_,R){var P,O=R.col;if(!O.sorter)return null;var $={sortType:O.sortType,sortOrder:x((P=g.value[O.colKey])===null||P===void 0?void 0:P.descending),sortIcon:e.sortIcon,hideSortTips:e.hideSortTips};return _(bd,fe([{scopedSlots:{sortIcon:a.sortIcon}},{props:$},{},{on:{"sort-icon-click":function(N,K){return w(O,K)}}}]))}return{renderSortIcon:k}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Mo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Gt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Cd=Oe({name:"TableFilterController",props:{column:Object,tFilterValue:Object,innerFilterValue:Object,tableFilterClasses:Object,isFocusClass:String,primaryTableElement:{}},setup:function(t,n){var a=n.emit,r=H(null),l=sa(),i=ke("table"),o=i.t,s=i.global,u=xt({FilterIcon:ms}),d=u.FilterIcon,v=H(!1),c=function(p){v.value=p,a("visible-change",p)};return{t:o,global:s,FilterIcon:d,filterPopupVisible:v,triggerElementRef:r,renderTNode:l,onFilterPopupVisibleChange:c}},render:function(t){var n=this,a,r=function(f,p){var h,y,m,g=["single","multiple","input"];if(p.type&&!g.includes(p.filter.type)){be.error("Table","filter.type must be the following: ".concat(JSON.stringify(g)));return}if(!p.filter.type&&!p.filter.component){be.error("Table","both filter.type and filter.component can not be empty.");return}var b={single:ac,multiple:ii,input:_n}[p.filter.type]||p.filter.component;if(!(!b&&!p.filter.component)){var C=Gt(Gt({options:["single","multiple"].includes(p.filter.type)?(h=p.filter)===null||h===void 0?void 0:h.list:void 0},((y=p.filter)===null||y===void 0?void 0:y.props)||{}),{},{value:(m=n.innerFilterValue)===null||m===void 0?void 0:m[p.colKey]});p.filter.type==="single"&&(C.onChange=function(T){n.$emit("inner-filter-change",T,p)});var w={change:function(k){n.$emit("inner-filter-change",k,p)}};p.filter.confirmEvents&&p.filter.confirmEvents.forEach(function(T){var k=gs(T.replace("on",""));w[k]=function(){n.$emit("confirm",p),n.filterPopupVisible=!1}});var x={};p.filter.showConfirmAndReset&&(x.click=function(T){return T.stopPropagation()});var S=function(){var k;if(!b)return null;var _=b.install&&b.component;return typeof b=="function"&&!_?b(function(R,P){var O=Ne(P)==="object"&&"attrs"in P?P.attrs:{};return f(R,{props:Gt(Gt({},C),O),on:w})}):t(b,fe([{attrs:{value:(k=n.innerFilterValue)===null||k===void 0?void 0:k[p.colKey]}},{props:Gt({},C)},{},{on:Gt({},w)}]))};return t("div",fe([{class:n.tableFilterClasses.contentInner},{on:x}]),[S()])}},l=function(f,p){if(!!p.filter.showConfirmAndReset)return t("div",{class:n.tableFilterClasses.bottomButtons},[t(et,{attrs:{theme:"default",size:"small"},on:{click:function(){n.$emit("reset",p),n.filterPopupVisible=!1}}},[n.global.resetText]),t(et,{attrs:{theme:"primary",size:"small"},on:{click:function(){n.$emit("confirm",p),n.filterPopupVisible=!1}}},[n.global.confirmText])])},i=this.column,o=this.FilterIcon;if(!i.filter||i.filter&&!Object.keys(i.filter).length)return null;var s=this.t(this.global.filterIcon)||t(o),u=(a=this.tFilterValue)===null||a===void 0?void 0:a[i.colKey],d=Ne(u)==="object"&&!Yl(u),v=u&&Ne(u)!=="object";return t(Ul,fe([{attrs:{attach:this.primaryTableElement?function(){return n.primaryTableElement}:void 0,visible:this.filterPopupVisible,destroyOnClose:!0,trigger:"click",placement:"bottom",showArrow:!0,overlayClassName:this.tableFilterClasses.popup}},{on:{"visible-change":function(f){return n.onFilterPopupVisibleChange(f)}}},{class:[this.tableFilterClasses.icon,A({},this.isFocusClass,d||v)],attrs:{content:function(){return t("div",{class:n.tableFilterClasses.popupContent},[r(t,i),l(t,i)])}}}]),[t("div",{ref:"triggerElementRef"},[this.renderTNode("filterIcon",s)])])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Lo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Nn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ai(e){var t=e instanceof Array&&e.length,n=Ne(e)==="object"&&!(e instanceof Array),a=n&&Object.keys(e).length;return t||a||!["null","","undefined"].includes(String(e))}function xd(e){var t={};return Object.keys(e).forEach(function(n){var a=e[n];Ai(a)&&(t[n]=a)}),t}function _d(e,t){var n=H(null),a=ke("table"),r=a.t,l=a.global,i=sa(),o=Pe(e),s=o.filterValue,u=tt(),d=u.tableFilterClasses,v=u.isFocusClass,c=H(),f=Rt(s,e.defaultFilterValue,e.onFilterChange,"filterValue","filter-change"),p=me(f,2),h=p[0],y=p[1],m=H(h.value),g=L(function(){var O=xd(h.value||{});return!h.value||!Object.keys(O).length});ce([h],function(O){var $=me(O,1),D=$[0];m.value=D});function b(O){var $,D;if(g.value)return null;var N=O("div",{class:d.result},[r(l.value.searchResultText,{result:C(),count:(($=e.pagination)===null||$===void 0?void 0:$.total)||((D=e.data)===null||D===void 0?void 0:D.length)}),O(et,{attrs:{theme:"primary",variant:"text"},on:{click:T}},[l.value.clearFilterResultButtonText])]),K=i("filterRow");return e.filterRow&&!K?null:O("div",{class:d.inner},[K||N])}function C(){var O=[];return e.columns.filter(function($){return $.filter}).forEach(function($){var D=h.value[$.colKey];if($.filter.list&&!["null","","undefined"].includes(String(D))){var N=D instanceof Array?D:[D],K=[];$.filter.list.forEach(function(E){N.includes(E.value)&&K.push(E.label)}),D=K.join()}Ai(D)&&O.push("".concat($.title,"\uFF1A").concat(D))}),O.join("\uFF1B")}function w(O,$){var D=Nn(Nn({},m.value),{},A({},$.colKey,O));m.value=D,$.filter.showConfirmAndReset||x(D,$)}function x(O,$){var D;y(O,{col:$}),(D=e.onChange)===null||D===void 0||D.call(e,{filter:O},{trigger:"filter"}),t.emit("change",{filter:O},{trigger:"filter"})}function S(O){var $,D,N=Nn(Nn({},h.value),{},A({},O.colKey,($=(D=O.filter.resetValue)!==null&&D!==void 0?D:{single:"",multiple:[],input:""}[O.filter.type])!==null&&$!==void 0?$:""));x(N,O)}function T(){x({},void 0)}function k(O){x(m.value,O)}function _(O,$){var D,N=$.col;return O(Cd,fe([{scopedSlots:{filterIcon:t.slots.filterIcon},attrs:{column:N,filterIcon:e.filterIcon,tFilterValue:h.value,innerFilterValue:m.value,tableFilterClasses:d,isFocusClass:v,primaryTableElement:(D=n.value)===null||D===void 0?void 0:D.$el}},{on:{reset:S,confirm:k,"inner-filter-change":w,"visible-change":P}}]))}function R(O){n.value=O}function P(O){O&&!c.value&&(c.value=!O)}return{hasEmptyCondition:g,isTableOverflowHidden:c,renderFilterIcon:_,renderFirstFilterRow:b,setFilterPrimaryTableRef:R}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Bo(e,t,n){var a=oe(e);return n-t>0?(a.splice(n+1,0,a[t]),a.splice(t,1)):(a.splice(n,0,a[t]),a.splice(t+1,1)),a}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function zo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Qt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Od(e,t){var n=Pe(e),a=n.sortOnRowDraggable,r=n.dragSort,l=n.data,i=tt(),o=i.tableDraggableClasses,s=i.tableBaseClass,u=i.tableFullRowClasses,d=H(e.columns||[]),v=H(null),c=L(function(){var T;return(T=d.value)===null||T===void 0?void 0:T.find(function(k){return k.colKey==="drag"})}),f=L(function(){return a.value||r.value==="row"}),p=L(function(){return["drag-col","row-handler","row-handler-col"].includes(r.value)&&!!c.value}),h=L(function(){return["col","row-handler-col"].includes(r.value)}),y=H([]),m=H([]);r.value==="drag-col"&&be.error("Table","dragSort='drag-col' is going to be deprecated, please use dragSort='col' instead."),e.sortOnRowDraggable&&be.error("Table","`sortOnRowDraggable` is going to be deprecated, please use dragSort='row' instead."),ce(l,function(T){y.value=T==null?void 0:T.map(function(k){return Q(k,e.rowKey)})},{immediate:!0}),ce(d,function(T){m.value=T?T.map(function(k){return k.colKey}):[]},{immediate:!0});function g(T){var k=e.pagination;return!e.disableDataPage&&k&&l.value.length>k.pageSize?k.pageSize*(k.current-1)+T:T}var b=function(k){if(!(!p.value&&!f.value)){var _=k==null?void 0:k.querySelector("tbody");if(!_)return console.error("tbody does not exist."),null;var R=null,P=Qt({animation:150,ghostClass:o.ghost,chosenClass:o.chosen,dragClass:o.dragging,filter:".".concat(u.base),onMove:function($){return!Ns($.related,u.base)},onEnd:function($){var D,N;(D=R)===null||D===void 0||D.sort(y.value);var K=$.oldIndex,E=$.newIndex;(xe(e.firstFullRow)&&e.firstFullRow(Ae)||t.slots.firstFullRow)&&(K-=1,E-=1);var F={data:l.value,currentIndex:K,current:l.value[K],targetIndex:E,target:l.value[E],newData:Bo(oe(e.data),g(K),g(E)),e:$,sort:"row"};F.currentData=F.newData,(N=e.onDragSort)===null||N===void 0||N.call(e,F),t.emit("drag-sort",F)}},e.dragSortOptions);!_||(f.value?R=new ha(_,Qt({},P)):R=new ha(_,Qt(Qt({},P),{},{handle:".".concat(o.handle)})),y.value=R.toArray())}},C=function(k,_){var R=null,P=Qt(Qt({animation:150},e.dragSortOptions),{},{dataIdAttr:"data-colkey",direction:"vertical",ghostClass:o.ghost,chosenClass:o.chosen,dragClass:o.dragging,handle:".".concat(s.thCellInner),onEnd:function($){var D;if(_){var N;(N=R)===null||N===void 0||N.sort(oe(m.value))}var K=$.oldIndex,E=$.newIndex,F=$.target,B=_?K:E,z=_?E:K,M=F.children[B],I=F.children[z],V=Gn(d.value,M.dataset.colkey),j=Gn(d.value,I.dataset.colkey);(!V||!V.colKey)&&be.error("Table","colKey is missing in ".concat(JSON.stringify(V))),(!j||!j.colKey)&&be.error("Table","colKey is missing in ".concat(JSON.stringify(j))),B=Do(e.columns,V.colKey),z=Do(e.columns,j.colKey);var J={data:d.value,currentIndex:B,current:V,targetIndex:z,target:j,newData:Bo(oe(e.columns),B,z),e:$,sort:"col"};J.currentData=J.newData,(D=e.onDragSort)===null||D===void 0||D.call(e,J),t.emit("drag-sort",J)}});if(!!k)return R=new ha(k,P),R},w=function(k){if(!(!h.value||!k)){var _=k.querySelectorAll("thead > tr");if(_.length<=1){var R=me(_,1),P=R[0],O=C(P,!0);m.value=O==null?void 0:O.toArray()}else _.forEach(function($){C($,!1)})}};function x(T){v.value=T}function S(T){d.value=T}return ce([v],function(T){var k=me(T,1),_=k[0];if(!(!_||!_.$el)){b(_.$el),w(_.$el);var R=setTimeout(function(){_.$refs.affixHeaderRef&&w(_.$refs.affixHeaderRef),clearTimeout(R)})}}),{isRowDraggable:f,isRowHandlerDraggable:p,isColDraggable:h,setDragSortPrimaryTableRef:x,setDragSortColumns:S}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Sd(e,t){var n=$t(),a=ke("table"),r=a.global,l=tt(),i=l.isLoadingClass,o=l.isLoadMoreClass,s=l.asyncLoadingClass,u=L(function(){var c;return[s,(c={},A(c,i,e.asyncLoading==="loading"),A(c,o,e.asyncLoading==="load-more"),c)]});function d(){var c;typeof e.asyncLoading=="string"&&((c=e.onAsyncLoadingClick)===null||c===void 0||c.call(e,{status:e.asyncLoading}),t.emit("async-loading-click",{status:e.asyncLoading}))}function v(c){var f=n("asyncLoading");if(ot(f)){var p=e.asyncLoading,h={"load-more":r.value.loadingMoreText,loading:r.value.loadingText}[String(p)];return c("div",{class:u.value,on:{click:d}},[c(bn,{attrs:{loading:p==="loading",size:"small",text:h}})])}return[null,!1,void 0].includes(f)?null:c("div",{class:u.value,on:{click:d}},[f])}return{renderAsyncLoading:v}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Vo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var kd=Oe({name:"TableEditableCell",props:{row:Object,rowIndex:Number,col:Object,colIndex:Number,oldCell:[Function,String],tableBaseClass:Object,cellEmptyContent:[Function,String],editable:{type:Boolean,default:void 0},readonly:{type:Boolean},errors:{type:Array,default:void 0},onChange:Function,onValidate:Function,onRuleChange:Function},setup:function(t,n){var a,r=Pe(t),l=r.row,i=r.col,o=H(null),s=H(((a=t.col.edit)===null||a===void 0?void 0:a.defaultEditable)||!1),u=H(),d=H(),v=xt({Edit1Icon:bs}),c=v.Edit1Icon,f=L(function(){var k=Me({},l.value);return i.value&&ys(k,i.value.colKey,u.value),k}),p=L(function(){return{rowIndex:t.rowIndex,colIndex:t.colIndex,col:t.col,row:t.row}}),h=L(function(){var k=Un({row:f.value,col:Me(Me({},i.value),{},{cell:t.oldCell}),rowIndex:t.rowIndex,colIndex:t.colIndex},n.slots,{cellEmptyContent:t.cellEmptyContent});return k}),y=L(function(){var k,_=i.value.edit;if(!_)return{};var R=xe(_.props)?_.props(Me(Me({},p.value),{},{editedRow:f.value})):Me({},_.props);return delete R.onChange,delete R.value,(k=_.abortEditOnEvent)===null||k===void 0||k.forEach(function(P){delete R[P]}),R}),m=L(function(){var k,_=i.value.edit;return _?Boolean((k=_.abortEditOnEvent)===null||k===void 0?void 0:k.includes("onChange")):!1}),g=function(_){return new Promise(function(R){var P={result:[Me(Me({},p.value),{},{errorList:[],value:u.value})],trigger:_},O=xe(i.value.edit.rules)?i.value.edit.rules(p.value):i.value.edit.rules;if(!i.value.edit||!O||!O.length){var $;($=t.onValidate)===null||$===void 0||$.call(t,P),R(!0);return}xi(u.value,O).then(function(D){var N,K=D==null?void 0:D.filter(function(E){return!E.result});P.result[0].errorList=K,(N=t.onValidate)===null||N===void 0||N.call(t,P),!K||!K.length?R(!0):(d.value=K,R(K))})})},b=function(_,R){return Ne(_)==="object"&&Ne(R)==="object"?JSON.stringify(_)===JSON.stringify(R):_===R},C=function(_){for(var R=arguments.length,P=new Array(R>1?R-1:0),O=1;O<R;O++)P[O-1]=arguments[O];g("self").then(function($){if($===!0){var D=Q(l.value,i.value.colKey);b(u.value,D)||(u.value=D,_==null||_.apply(void 0,P));var N=setTimeout(function(){s.value=!1,d.value=[],clearTimeout(N)},0)}})},w=L(function(){var k,_=i.value.edit,R=t.editable===void 0;if(!(!s.value||!R)){if(!(_!=null&&(k=_.abortEditOnEvent)!==null&&k!==void 0&&k.length))return{};var P={},O=_==null?void 0:_.onEdited;return _.abortEditOnEvent.forEach(function($){if($!=="onChange"){var D=$.slice(2,3).toLocaleLowerCase()+$.slice(3);P[D]=function(){for(var N=arguments.length,K=new Array(N),E=0;E<N;E++)K[E]=arguments[E];C.apply(void 0,[O,Me(Me({},p.value),{},{trigger:$,newRowData:f.value})].concat(K))}}}),P}}),x=function(_){var R,P;u.value=_;var O=Me(Me({},p.value),{},{value:_,editedRow:Me(Me({},t.row),{},A({},t.col.colKey,_))});(R=t.onChange)===null||R===void 0||R.call(t,O),(P=t.onRuleChange)===null||P===void 0||P.call(t,O);var $=t.editable===void 0;if($&&m.value){for(var D,N=(D=i.value.edit)===null||D===void 0?void 0:D.onEdited,K=arguments.length,E=new Array(K>1?K-1:0),F=1;F<K;F++)E[F-1]=arguments[F];C.apply(void 0,[N,Me(Me({},p.value),{},{trigger:"onChange",newRowData:f.value})].concat(E))}},S=function(_){var R,P;if(!(!i.value.edit||!i.value.edit.component)&&!!s.value&&!((R=_.path)!==null&&R!==void 0&&R.includes((P=o.value)===null||P===void 0?void 0:P.$el))){for(var O=0,$=_.path.length;O<$;O++){var D,N,K=_.path[O];if((D=K.classList)!==null&&D!==void 0&&(N=D.value)!==null&&N!==void 0&&N.includes("popup__content"))return}var E=i.value.edit.onEdited;C(E,Me(Me({},p.value),{},{trigger:"document",newRowData:f.value}))}},T=L(function(){return Q(l.value,i.value.colKey)});return ce(T,function(k){var _=k;Ne(_)==="object"&&_!==null&&(_=_ instanceof Array?oe(_):Me({},_)),u.value=_},{immediate:!0}),ce(s,function(k){var _=t.editable===void 0;!i.value.edit||!i.value.edit.component||!_||(k?document.addEventListener("click",S):document.removeEventListener("click",S))},{immediate:!0}),ce(function(){return[t.editable,t.rowIndex,t.colIndex]},function(k){var _=me(k,3),R=_[0],P=_[1],O=_[2];if(R===!1)u.value=T.value;else{var $;($=t.onRuleChange)===null||$===void 0||$.call(t,{col:i.value,row:l.value,rowIndex:P,colIndex:O,value:T.value,editedRow:l.value})}},{immediate:!0}),ce(function(){return t.errors},function(k){d.value=k}),{editValue:u,isEdit:s,cellNode:h,isAbortEditOnChange:m,listeners:w,componentProps:y,tableEditableCellRef:o,errorList:d,onEditChange:x,Edit1Icon:c,cellParams:p}},render:function(){var t=this,n,a,r,l,i,o,s=arguments[0];if(this.readonly)return s("div",[this.cellNode]);if(this.editable===void 0&&!this.isEdit||this.editable===!1){var u,d,v=this.Edit1Icon;return s("div",{class:(u=this.tableBaseClass)===null||u===void 0?void 0:u.cellEditable,on:{click:function(h){t.isEdit=!0,h.stopPropagation()}}},[this.cellNode,((d=this.col.edit)===null||d===void 0?void 0:d.showEditIcon)!==!1&&s(v,{attrs:{size:"12px"}})])}var c=(n=this.col.edit)===null||n===void 0?void 0:n.component;if(!c)return be.error("Table","edit.component is required."),null;var f=(a=this.errorList)===null||a===void 0||(r=a[0])===null||r===void 0?void 0:r.message;return s("div",{class:(l=this.tableBaseClass)===null||l===void 0?void 0:l.cellEditWrap,on:{click:function(h){h.stopPropagation()}}},[s(c,fe([{ref:"tableEditableCellRef",attrs:{status:f?((i=this.errorList)===null||i===void 0||(o=i[0])===null||o===void 0?void 0:o.type)||"error":void 0,tips:f}},{props:this.componentProps},{},{on:this.listeners},{attrs:{value:this.editValue},on:{change:this.onEditChange}}]))])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Pd(e,t){var n=function(r,l){return r(kd,fe([{},{props:l},{scopedSlots:t.slots}]))};return{renderEditableCell:n}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Ho(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function jn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ho(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ho(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var In=new Map;function Dd(e,t){var n=H({}),a=L(function(){return ud(e.editableRowKeys,e.data,e.rowKey||"id")}),r=function(f){var p={};return f.forEach(function(h){var y=h.row,m=h.col,g=h.errorList,b=Q(y,e.rowKey||"id"),C=[b,m.colKey].join("__");g!=null&&g.length?p[C]=g:delete p[C]}),p},l=function(f){var p=In.get(f);if(!!p){var h=p.map(function(y){return new Promise(function(m){var g=y.editedRow,b=y.col,C=xe(b.edit.rules)?b.edit.rules(y):b.edit.rules;if(!b.edit||!C||!C.length){m(jn(jn({},y),{},{errorList:[]}));return}xi(g[b.colKey],C).then(function(w){m(jn(jn({},y),{},{errorList:w.filter(function(x){return!x.result})}))})})});return new Promise(function(y,m){Promise.all(h).then(function(g){y({errors:g.filter(function(b){var C;return(C=b.errorList)===null||C===void 0?void 0:C.length}),errorMap:r(g)})},m)})}},i=function(f){return new Promise(function(p,h){l(f).then(function(y){var m,g=y.errors,b=y.errorMap;n.value=b;var C="parent";(m=e.onRowValidate)===null||m===void 0||m.call(e,{trigger:C,result:g}),p({trigger:C,result:g})},h)})},o=function(){for(var f=[],p=e.data||[],h=0,y=p.length;h<y;h++){var m=Q(p[h],e.rowKey||"id");f.push(l(m))}return new Promise(function(g,b){Promise.all(f).then(function(C){var w,x={};C.forEach(function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{errors:[],errorMap:{}},T=S.errorMap;T&&Object.assign(x,T)}),n.value=x,(w=e.onValidate)===null||w===void 0||w.call(e,{result:x}),g({result:x})},b)})},s=function(f){if(e.editableRowKeys){var p=Q(f.row,e.rowKey||"id"),h=In.get(p);if(h){var y=h.findIndex(function(m){return m.col.colKey===f.col.colKey});y===-1?h.push(f):h[y]=f,In.set(p,h)}else In.set(p,[f])}},u=function(){n.value={}},d=function(f){var p;(p=e.onRowEdit)===null||p===void 0||p.call(e,f),t.emit("row-edit",f)},v=function(f){var p;(p=e.onRowValidate)===null||p===void 0||p.call(e,f),t.emit("row-validate",f)};return{errorListMap:n,editableKeysMap:a,validateTableData:o,validateRowData:i,onRuleChange:s,clearValidateData:u,onPrimaryTableRowEdit:d,onPrimaryTableRowValidate:v}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Wo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function kt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Td=["hideSortTips","dragSort","defaultExpandedRowKeys","defaultSelectedRowKeys","columnController","filterRow","sortOnRowDraggable","expandOnRowClick","multipleSort","expandIcon","onChange","onAsyncLoadingClick","onChange","onColumnChange","onColumnControllerVisibleChange","onDataChange","onDisplayColumnsChange","onDragSort","onExpandChange","onFilterChange","onSelectChange","onSortChange"],lr=Oe({name:"TPrimaryTable",props:kt(kt({},nn),Ki),setup:function(t,n){var a=$t(),r=Pe(t),l=r.columns,i=H(null),o=tt(),s=o.classPrefix,u=o.tableDraggableClasses,d=o.tableBaseClass,v=o.tableSelectedClasses,c=o.tableSortClasses,f=Ei(t),p=f.sizeClassNames,h=hd(t,n),y=h.tDisplayColumns,m=h.renderColumnController,g=md(t,n),b=g.showExpandedRow,C=g.showExpandIconColumn,w=g.getExpandColumn,x=g.renderExpandedRow,S=g.onInnerExpandRowClick,T=wd(t,n),k=T.renderSortIcon,_=gd(t,v),R=_.formatToRowSelectColumn,P=_.selectedRowClassNames,O=_d(t,n),$=O.hasEmptyCondition,D=O.isTableOverflowHidden,N=O.renderFilterIcon,K=O.renderFirstFilterRow,E=O.setFilterPrimaryTableRef,F=Od(t,n),B=F.isRowHandlerDraggable,z=F.isRowDraggable,M=F.isColDraggable,I=F.setDragSortPrimaryTableRef,V=F.setDragSortColumns,j=Si(t),J=j.renderTitleWidthIcon,U=Sd(t,n),Z=U.renderAsyncLoading,ve=Pd(t,n),we=ve.renderEditableCell,ye=Dd(t,n),Te=ye.errorListMap,Ve=ye.editableKeysMap,it=ye.validateRowData,Ee=ye.validateTableData,Ge=ye.onRuleChange,dt=ye.clearValidateData,mt=ye.onPrimaryTableRowValidate,_t=ye.onPrimaryTableRowEdit,Be=L(function(){var q;return q={},A(q,u.colDraggable,M.value),A(q,u.rowHandlerDraggable,B.value),A(q,u.rowDraggable,z.value),A(q,d.overflowVisible,D.value===!1),A(q,d.tableRowEdit,t.editableRowKeys),q}),ft=L(function(){var q=[t.rowClassName,P.value];return q.filter(function(X){return X})}),st=L(function(){var q=[t.rowAttributes];return(B.value||z.value)&&q.push(function(X){var ne=X.row;return{"data-id":Q(ne,t.rowKey||"id")}}),q.filter(function(X){return X})});Et(function(){E(i.value),I(i.value)}),ce(i,function(){E(i.value),I(i.value)});var At=function q(X){for(var ne=[],ae=function(te,W){var G,ee,_e,Ce,$e,de=kt({},X[te]),je=((G=de.children)===null||G===void 0?void 0:G.length)||((ee=y.value)===null||ee===void 0?void 0:ee.includes(de.colKey));if(!je&&t.columnController)return"continue";de=R(de);var ze=t.sort;if(de.sorter&&t.showSortColumnBgColor){var Ke=ze instanceof Array?ze:[ze],nt=Ke.find(function(Ue){return Ue&&Ue.sortBy===de.colKey&&Ue.descending!==void 0});nt&&(de.className=de.className instanceof Array?de.className.concat(c.sortColumn):[de.className,c.sortColumn])}if(de.sorter||de.filter){var Ie=er(Ae,n.slots,de,te),Ye=de,Re=Ye.ellipsisTitle;de.title=function(Ue,qe){var vt,Ot,Lt=de.sorter?k(Ue,qe):null,on=de.filter?N(Ue,qe):null,Bt=(vt=i.value)===null||vt===void 0||(Ot=vt.$refs)===null||Ot===void 0?void 0:Ot.tableContentRef;return J(Ue,[Ie,Lt,on],qe.col,qe.colIndex,Re,Bt,{classPrefix:s,ellipsisOverlayClassName:t.size!=="medium"?p[t.size]:""})},de.ellipsisTitle=!1}if((_e=de.edit)!==null&&_e!==void 0&&_e.component){var De=de.cell;de.cell=function(Ue,qe){var vt=kt(kt({},qe),{},{oldCell:De,tableBaseClass:d,cellEmptyContent:t.cellEmptyContent,onChange:_t,onValidate:mt,onRuleChange:Ge});if(t.editableRowKeys){var Ot,Lt=Q(qe.row,t.rowKey||"id");vt.editable=Ve.value[Lt]||!1;var on=[Lt,qe.col.colKey].join("__"),Bt=(Ot=Te.value)===null||Ot===void 0?void 0:Ot[on];Bt&&(vt.errors=Bt)}return t.editableCellState&&(vt.readonly=!t.editableCellState(qe)),we(Ue,vt)}}(Ce=de.children)!==null&&Ce!==void 0&&Ce.length&&(de.children=q(de.children)),(!de.children||($e=de.children)!==null&&$e!==void 0&&$e.length)&&ne.push(de)},le=0,he=X.length;le<he;le++)var re=ae(le);return ne},Ft=L(function(){var q=At(l.value);return C.value&&q.unshift(w(Ae)),q}),se=function(X,ne){var ae,le;(ae=t.onPageChange)===null||ae===void 0||ae.call(t,X,ne),n.emit("page-change",X,ne);var he=[{pagination:X},{trigger:"pagination",currentData:ne}];(le=t.onChange)===null||le===void 0||le.call.apply(le,[t].concat(he)),n.emit.apply(n,["change"].concat(he))};return{tColumns:Ft,showExpandedRow:b,tRowClassNames:ft,hasEmptyCondition:$,primaryTableRef:i,tRowAttributes:st,primaryTableClasses:Be,errorListMap:Te,validateRowData:it,validateTableData:Ee,clearValidateData:dt,renderTNode:a,renderColumnController:m,renderExpandedRow:x,onInnerExpandRowClick:S,renderFirstFilterRow:K,renderAsyncLoading:Z,onInnerPageChange:se,setDragSortColumns:V}},methods:{getListener:function(){var t=this,n={};return or.forEach(function(a){n[a]=function(){for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];t.$emit.apply(t,[a].concat(l))}}),n},formatNode:function(t,n,a,r){var l=this.$createElement;if(!a)return this[t];var i=n(l),o=this.renderTNode(t);return i&&!o?function(){return i}:o&&!i?function(){return o}:i&&o?function(){return r!=null&&r.reverse?l("div",[i,o]):l("div",[o,i])}:null}},render:function(){var t=arguments[0],n=!!(this.columnController&&Object.keys(this.columnController).length),a=n?this.columnController.placement||"top-right":"",r=n&&(a==null?void 0:a.indexOf("bottom"))!==-1,l=this.formatNode("topContent",this.renderColumnController,n&&!r),i=this.formatNode("bottomContent",this.renderColumnController,r,{reverse:!0}),o=this.formatNode("firstFullRow",this.renderFirstFilterRow,!this.hasEmptyCondition),s=this.formatNode("lastFullRow",this.renderAsyncLoading,!!this.asyncLoading),u=kt(kt({},ws(this.$props,Td)),{},{rowClassName:this.tRowClassNames,rowAttributes:this.tRowAttributes,columns:this.tColumns,topContent:l,bottomContent:i,firstFullRow:o,lastFullRow:s,renderExpandedRow:this.showExpandedRow?this.renderExpandedRow:void 0}),d=kt(kt({},this.getListener()),{},{"page-change":this.onInnerPageChange});return this.expandOnRowClick&&(d["row-click"]=this.onInnerExpandRowClick),d.LeafColumnsChange=this.setDragSortColumns,t($i,fe([{ref:"primaryTableRef",scopedSlots:this.$scopedSlots},{props:u},{},{on:d},{},this.$attrs,{class:this.primaryTableClasses}]))}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Rd={beforeDragSort:{type:Function},tree:{type:Object},treeExpandAndFoldIcon:{type:Function},onAbnormalDragSort:Function,onTreeExpandChange:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Yo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Mn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var qo={code:1001,reason:"The same level of rows can not be swapped."},Ed=function(){function e(){xs(this,e),A(this,"treeDataMap",new Map),A(this,"expandAllRowIndex",void 0),this.treeDataMap=new Map}return Cs(e,[{key:"initialTreeStore",value:function(n,a,r){var l;(l=this.treeDataMap)===null||l===void 0||l.clear(),this.initialTreeDataMap(this.treeDataMap,n,a[0],r)}},{key:"getAllUniqueKeys",value:function(n,a){for(var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],l=0,i=n.length;l<i;l++){var o=n[l];r.push(Q(o,a.rowKey));var s=Q(o,a.childrenKey);s!=null&&s.length&&this.getAllUniqueKeys(s,a,r)}return r}},{key:"toggleExpandData",value:function(n,a,r){if(!n)return be.error("EnhancedTable","the node you want to toggleExpand doest not exist in `data`"),a;var l=Q(n.row,r.rowKey);if(l===void 0)return be.error("EnhancedTable","`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`."),[];var i=Q(n.row,r.childrenKey);if(i===!0)return a;var o=this.treeDataMap.get(l);return o.rowIndex=n.rowIndex,o.expanded=!o.expanded,this.treeDataMap.set(l,o),this.updateExpandRow(o,a,r)}},{key:"updateExpandRow",value:function(n,a,r){var l=n.row,i=n.rowIndex,o=n.expanded,s=this.treeDataMap,u=Q(l,r.childrenKey);if(!l||!u)return a;if(o)Na(s,n,o,r),cn(s,l,u.length,"expand",r),a.splice.apply(a,[i+1,0].concat(u));else{Na(s,n,o,r);var d=n.expandChildrenLength||u.length;cn(s,l,-1*d,"fold",r),a.splice(i+1,d)}return Ut(s,a,{rowKey:r.rowKey,minRowIndex:i+1}),a}},{key:"getData",value:function(n){return this.treeDataMap.get(n)}},{key:"updateData",value:function(n,a,r,l){var i=Q(a,l.rowKey),o=this.treeDataMap.get(n);if(!o||o.rowIndex===-1)return Ni(r,n,a,{rowKey:l.rowKey,childrenKey:l.childrenKey}),-1;if(Q(a,l.childrenKey)===!0){var s=Q(o.row,l.childrenKey);if(s!=null&&s.length)for(var u=0,d=s.length;u<d;u++){var v=Q(s[u],l.rowKey),c=this.treeDataMap.get(v);c&&this.treeDataMap.delete(v)}}var f=o.rowIndex;if(o.row=a,o.id=i,o.parent){var p=Q(o.parent.row,l.childrenKey),h=p.findIndex(function(y){return Q(y,l.rowKey)===n});p[h]=a}return this.treeDataMap.set(i,o),n!==i&&this.treeDataMap.delete(n),f}},{key:"remove",value:function(n,a,r){var l=this.treeDataMap.get(n);if(l&&l.rowIndex>=0){var i=(l.expandChildrenLength||0)+1;if(a.splice(l.rowIndex,i),l.parent){var o=Q(l.parent.row,r.childrenKey),s=o.findIndex(function(u){return Q(u,r.rowKey)===n});o.splice(s,1),cn(this.treeDataMap,l.parent.row,-1*i,"delete",r)}this.treeDataMap.delete(n),Ut(this.treeDataMap,a,{minRowIndex:l.rowIndex,rowKey:r.rowKey,type:"remove"})}else be.warn("EnhancedTable","Do not remove this node, which is not appeared.");return a}},{key:"appendTo",value:function(n,a,r,l){var i=this.treeDataMap.get(n);if(!this.validateDataExist(i,n))return r;for(var o=Q(i.row,l.childrenKey),s=i.expanded||!(o!=null&&o.length),u=a instanceof Array?a:[a],d=[],v=-1,c=0,f=u.length;c<f;c++){var p=u[c],h=Q(p,l.rowKey),y=this.treeDataMap.get(h);if(!this.validateDataDoubleExist(y,h))be.warn("Table","Duplicated Data `".concat(h,"` has been removed."));else{var m=s?i.rowIndex+(i.expandChildrenLength||0)+(c+1):-1;c===0&&(v=m);var g={id:h,row:p,rowIndex:m,level:i.level+1,expanded:!1,expandChildrenLength:0,disabled:!1,path:oe(i.path),parent:i};g.path=g.path.concat(g),d.push(p),this.treeDataMap.set(h,g)}}if(!d.length)return r;if(o!=null&&o.length?i.row[l.childrenKey]=i.row[l.childrenKey].concat(d):(i.row[l.childrenKey]=d,i.expanded=!0),s){r.splice.apply(r,[v,0].concat(d));var b=d.length||1;cn(this.treeDataMap,i.row,b,"insert",{rowKey:l.rowKey,childrenKey:l.childrenKey}),Ut(this.treeDataMap,r,{minRowIndex:v+d.length-1,rowKey:l.rowKey,type:"add",count:1})}return r}},{key:"appendToRoot",value:function(n,a,r){for(var l=a.concat(n),i=n instanceof Array?n:[n],o=a.length,s=0,u=i.length;s<u;s++){var d=Q(i[s],r.rowKey);if(!d){be.error("Table","`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");continue}var v={id:d,row:i[s],rowIndex:o+s,level:0,expanded:!1,expandChildrenLength:0,disabled:!1};v.path=[v],this.treeDataMap.set(d,v)}return l}},{key:"insertAfter",value:function(n,a,r,l){return this.insert(n,a,r,l,"after")}},{key:"insertBefore",value:function(n,a,r,l){return this.insert(n,a,r,l,"before")}},{key:"insert",value:function(n,a,r,l,i){var o=this.treeDataMap.get(n);if(!this.validateDataExist(o,n))return r;var s=Q(a,l.rowKey),u=this.treeDataMap.get(s);if(!this.validateDataDoubleExist(u,s))return r;var d=i==="after"?o.rowIndex+1:o.rowIndex,v={id:s,row:a,rowIndex:d,level:o.level,expanded:!1,expandChildrenLength:0,disabled:!1,path:o.path.slice(0,-1),parent:o.parent};v.path=v.path.concat(v);var c=i==="after"?o.rowIndex+(o.expandChildrenLength+1):o.rowIndex;r.splice(c,0,a);var f=i==="after"?1:0;if(o.parent){var p=o.parent.row[l.childrenKey].findIndex(function(h){return n===Q(h,l.rowKey)});o.parent.row[l.childrenKey].splice(p+f,0,a),cn(this.treeDataMap,o.parent.row,1,"insert",l)}return this.treeDataMap.set(s,v),Ut(this.treeDataMap,r,{rowKey:l.rowKey,minRowIndex:o.rowIndex+1,type:"add"}),r}},{key:"swapData",value:function(n,a,r){var l=a.currentIndex,i=a.targetIndex;if(l===i)return{dataSource:n,result:!0};var o=Q(a.current,r.rowKey),s=Q(a.target,r.rowKey),u=this.treeDataMap.get(o),d=this.treeDataMap.get(s);if(u.level!==d.level)return{dataSource:n,result:!1,code:qo.code,reason:qo.reason};var v=l+u.expandChildrenLength+1,c=i+d.expandChildrenLength+1,f=n.slice(l,v),p=n.slice(i,c);if(l>i){var h=n.slice(c,l),y=f.concat(p,h);n.splice(i,y.length),n.splice.apply(n,[i,0].concat(oe(y))),Ut(this.treeDataMap,n,{rowKey:r.rowKey,minRowIndex:i,maxRowIndex:v})}else{var m=n.slice(v,i),g=m.concat(p,f);n.splice(l,g.length),n.splice.apply(n,[l,0].concat(oe(g))),Ut(this.treeDataMap,n,{rowKey:r.rowKey,minRowIndex:l,maxRowIndex:c})}if(u.parent){for(var b=u.parent.row[r.childrenKey],C=0,w=-1,x=-1,S=0,T=b.length;S<T&&(Q(b[S],r.rowKey)===o&&(w=S,C+=1),Q(b[S],r.rowKey)===s&&(x=S,C+=1),!(C>=2));S++);b[w]=a.target,b[x]=a.current}return{dataSource:n,result:!0}}},{key:"expandAll",value:function(n,a){var r=this;this.expandAllRowIndex=0;var l=function i(o,s){for(var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,v=arguments.length>4&&arguments[4]!==void 0?arguments[4]:null,c=0,f=o.length;c<f;c++){var p=o[c],h=Q(p,s.rowKey),y=r.treeDataMap.get(h),m=Q(p,s.childrenKey),g=y.expanded;if(y.rowIndex=r.expandAllRowIndex,m!==!0&&m!==null&&m!==void 0&&m.length&&(y.expanded=!0),y.expandChildrenLength=(m==null?void 0:m.length)||0,r.expandAllRowIndex+=1,d||u.push(p),r.treeDataMap.set(h,y),m!=null&&m.length&&!g){for(var b=v;(C=b)!==null&&C!==void 0&&C.row;){var C;b.expandChildrenLength+=m.length,r.treeDataMap.set(b.id,b),b=b.parent}i(m,s,u,g,y)}}return u};return l(n,a)}},{key:"foldAll",value:function(n,a){for(var r=[],l=0,i=n.length;l<i;l++){var o=n[l],s=Q(o,a.rowKey),u=this.treeDataMap.get(s);u.rowIndex=u.level===0?l:-1,u.expanded=!1,u.expandChildrenLength=0,u.level===0&&r.push(o);var d=Q(o,a.childrenKey);d!=null&&d.length&&this.foldAll(d,a)}return r}},{key:"getTreeNode",value:function(n,a){for(var r=[],l=0,i=n.length;l<i;l++){var o=n[l],s=Q(o,a.rowKey),u=this.treeDataMap.get(s);u.level===0&&r.push(o)}return r}},{key:"getTreeExpandedRow",value:function(n,a){var r=this,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"data",i=[];return n.forEach(function(o){var s=Q(o,a.rowKey),u=r.treeDataMap.get(s);!u.expanded||(l==="unique"?i.push(s):l==="data"?i.push(o):i.push(u))}),i}},{key:"initialTreeDataMap",value:function(n,a,r,l){for(var i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:null,s=0,u=a.length;s<u;s++){var d=a[s],v=Q(d,l.rowKey);if(v===void 0){be.error("EnhancedTable","`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");return}var c=Q(d,l.childrenKey),f={id:v,row:d,rowIndex:i===0?s:-1,level:i,expanded:!1,expandChildrenLength:0,disabled:xo(r,d,s),parent:o};f.path=o?o.path.concat(f):[f],n.set(v,f),c!=null&&c.length&&this.initialTreeDataMap(n,c,r,l,i+1,f)}}},{key:"updateDisabledState",value:function(n,a,r){for(var l=0,i=n.length;l<i;l++){var o=n[l],s=Q(o,r.rowKey);if(s===void 0){be.error("EnhancedTable","`rowKey` could be wrong, can not get rowValue from `data` by `rowKey`.");return}var u=this.treeDataMap.get(s);u.disabled=xo(a,o,l),this.treeDataMap.set(s,u);var d=Q(o,r.childrenKey);d!=null&&d.length&&this.updateDisabledState(d,a,r)}}},{key:"validateDataExist",value:function(n,a){return n?!0:(be.warn("EnhancedTable","".concat(a," does not exist.")),!1)}},{key:"validateDataDoubleExist",value:function(n,a){return n?(be.warn("EnhancedTable","Duplicated Key. ".concat(a," already exists.")),!1):!0}}]),e}();function cn(e,t,n,a,r){for(var l=t;l;){var i,o=e.get(Q(l,r.rowKey)),s=(o.expandChildrenLength||0)+n;o.expandChildrenLength=Math.max(0,s),l=o==null||(i=o.parent)===null||i===void 0?void 0:i.row}a==="fold"&&Fi(e,t,r)}function Fi(e,t,n){var a=Q(t,n.childrenKey);a!=null&&a.length&&a.forEach(function(r){var l=e.get(Q(r,n.rowKey));!l||(l.expandChildrenLength=0,Fi(e,l.row,n))})}function Na(e,t,n,a){var r=t.row,l=t.rowIndex,i=Q(r,a.childrenKey);i.forEach(function(o,s){var u=Q(o,a.rowKey),d=n?l+1+s:-1,v=e.get(u),c=Mn(Mn({},v),{},{row:o,rowIndex:d,expanded:!1,parent:t});if(e.set(u,c),!n){var f=Q(o,a.childrenKey);f!=null&&f.length&&Na(e,Mn(Mn({},c),{},{rowIndex:-1,expanded:!1}),n,a)}})}function Ni(e,t,n,a){for(var r=0,l=e.length;r<l;r++){var i=e[r];if(Q(i,a.rowKey)===t){e[r]=n;return}var o=Q(i,a.childrenKey)||[];o!=null&&o.length&&Ni(o,t,n,a)}}function Ut(e,t,n){for(var a=n.minRowIndex||0,r=n.maxRowIndex||t.length,l=a;l<r;l++){var i=t[l],o=e.get(Q(i,n.rowKey));o||be.warn("Table","tree map went wrong"),o.rowIndex=l+((n==null?void 0:n.count)||1)-1}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Jo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function pt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function $d(e,t){var n=Pe(e),a=n.data,r=n.columns,l=ke("table"),i=l.t,o=l.global,s=xt({AddRectangleIcon:Gl,MinusRectangleIcon:Ql}),u=s.AddRectangleIcon,d=s.MinusRectangleIcon,v=H(new Ed),c=H(),f=H([]),p=tt(),h=p.tableTreeClasses,y=sa(),m=L(function(){var M;return{rowKey:e.rowKey||"id",childrenKey:((M=e.tree)===null||M===void 0?void 0:M.childrenKey)||"children"}}),g=L(function(){return r.value.find(function(M){return M.colKey==="row-select"})});ce(g,function(M){!v.value||!g.value||v.value.updateDisabledState(f.value,M,m.value)});function b(M,I){var V=pt(pt({},I),{},{type:"fold"}),j=i(o.value.treeExpandAndFoldIcon,M,V)||M(d);return y("treeExpandAndFoldIcon",{defaultNode:j,params:V})}function C(M,I){var V=pt(pt({},I),{},{type:"expand"}),j=i(o.value.treeExpandAndFoldIcon,M,V)||M(u);return y("treeExpandAndFoldIcon",{defaultNode:j,params:V})}var w=L(function(){var M,I;return((M=v.value)===null||M===void 0||(I=M.getAllUniqueKeys(a.value,m.value))===null||I===void 0?void 0:I.join())||""});ce([w],function(){if(!a.value)return[];if(!e.tree){f.value=a.value;return}x(a.value)},{immediate:!0}),_s(function(){var M;!e.tree||((M=v.value.treeDataMap)===null||M===void 0||M.clear(),v.value=null)}),ce(function(){var M;return[r,(M=e.tree)===null||M===void 0?void 0:M.treeNodeColumnIndex]},function(){c.value=k()},{immediate:!0});function x(M){var I,V=oa(M);v.value.initialTreeStore(V,e.columns,m.value),(I=e.tree)!==null&&I!==void 0&&I.defaultExpandAll&&(V=v.value.expandAll(V,m.value)),f.value=V}function S(M){var I,V;if(M!==void 0){var j=((I=e.tree)===null||I===void 0?void 0:I.indent)===void 0?24:(V=e.tree)===null||V===void 0?void 0:V.indent;return j?{paddingLeft:"".concat(M*j||1,"px")}:{}}}function T(M,I){var V,j,J;f.value=v.value.toggleExpandData(M,f.value,m.value);var U=Q(M.row,m.value.rowKey),Z=(V=v.value)===null||V===void 0||(j=V.treeDataMap)===null||j===void 0?void 0:j.get(U),ve={row:M.row,rowIndex:M.rowIndex,rowState:Z,trigger:I};(J=e.onTreeExpandChange)===null||J===void 0||J.call(e,ve),t.emit("tree-expand-change",ve)}function k(){for(var M,I=e.columns,V=((M=e.tree)===null||M===void 0?void 0:M.treeNodeColumnIndex)||0;(j=I[V])!==null&&j!==void 0&&j.type||((J=I[V])===null||J===void 0?void 0:J.colKey)==="__EXPAND_ROW_ICON_COLUMN__";){var j,J;V+=1}return I[V]}function _(M){if(!e.tree||M.colKey!==c.value.colKey)return M;var I=pt({},c.value);return I.cell=function(V,j){var J=Un(pt(pt({},j),{},{col:pt({},c.value)}),t.slots,{cellEmptyContent:e.cellEmptyContent}),U=v.value.treeDataMap.get(Q(j.row,m.value.rowKey)),Z=S(U==null?void 0:U.level),ve=A({},h.inlineCol,!!M.ellipsis),we=Q(j.row,m.value.childrenKey);if(we&&we instanceof Array||we===!0){var ye,Te=(ye=v.value.treeDataMap.get(Q(j.row,m.value.rowKey)))!==null&&ye!==void 0&&ye.expanded?b(V,j):C(V,j);return V("div",{class:[h.col,ve],style:Z},[!!(we.length||we===!0)&&V("span",{class:h.icon,on:{click:function(){return T(j,"expand-fold-icon")}}},[Te]),J])}return V("div",{style:Z,class:[ve,h.leafNode]},[V("span",{class:h.icon}),J])},I.ellipsis===!0&&(I.ellipsis=function(V,j){return Un(pt(pt({},j),{},{col:pt({},c.value)}),t.slots)}),I}function R(M,I){var V=v.value.updateData(M,I,f.value,m.value),j=oe(f.value);j[V]=I,f.value=j}function P(M){return v.value.getData(M)}function O(M){f.value=oe(v.value.remove(M,f.value,m.value))}function $(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",I=arguments.length>1?arguments[1]:void 0;if(!M){f.value=v.value.appendToRoot(I,f.value,m.value);return}f.value=oe(v.value.appendTo(M,I,f.value,m.value))}function D(M,I){f.value=oe(v.value.insertAfter(M,I,f.value,m.value))}function N(M,I){f.value=oe(v.value.insertBefore(M,I,f.value,m.value))}function K(){f.value=oe(v.value.expandAll(f.value,m.value))}function E(){f.value=oe(v.value.foldAll(f.value,m.value))}function F(M){var I=v.value.swapData(f.value,M,m.value);if(I.result)f.value=oe(I.dataSource);else{var V,j={code:I.code,reason:I.reason};(V=e.onAbnormalDragSort)===null||V===void 0||V.call(e,j),t.emit("abnormal-drag-sort",j)}}function B(){return v.value.getTreeNode(f.value,m.value)}function z(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data";return v.value.getTreeExpandedRow(f.value,m.value,M)}return{store:v,rowDataKeys:m,dataSource:f,swapData:F,setData:R,getData:P,remove:O,appendTo:$,insertAfter:D,insertBefore:N,formatTreeColumn:_,toggleExpandData:T,expandAll:K,foldAll:E,getTreeNode:B,resetData:x,getTreeExpandedRow:z}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Go(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Ln(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Go(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Go(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var ja=new Map;function dn(e,t,n,a){if(ja.get(t))return ja.get(t);var r=a||{allChildren:[],allChildrenKeys:[],leafNodeKeys:[]},l=Q(t,n.childrenKey);if(!l||!l.length)return r;var i=l.filter(function(m){var g;return!((g=e.get(Q(m,n.rowKey)))!==null&&g!==void 0&&g.disabled)});r.allChildren=oe(new Set(r.allChildren.concat(i)));for(var o=0,s=l.length;o<s;o++){var u=l[o],d=Q(u,n.childrenKey);if(d!=null&&d.length){var v=dn(e,u,n,r);r.allChildren=oe(new Set(r.allChildren.concat(v.allChildren)))}}for(var c=0,f=r.allChildren.length;c<f;c++){var p=r.allChildren[c],h=Q(p,n.childrenKey),y=Q(p,n.rowKey);r.allChildrenKeys.push(y),(!h||!h.length)&&r.leafNodeKeys.push(y)}return r.allChildrenKeys=oe(new Set(r.allChildrenKeys)),r.leafNodeKeys=oe(new Set(r.leafNodeKeys)),r}function Kd(e,t){for(var n=e.selectedRowKeys,a=e.removeKeys,r=t||{data:[],keys:[]},l=0,i=n.length;l<i;l++){var o=n[l];a.includes(o)||r.keys.push(o)}return r}function Ad(e){for(var t=e.treeDataMap,n=e.selectedRowKeys,a=[],r=0,l=n.length;r<l;r++){var i=n[r];a.push(t.get(i))}return a}function Fd(e,t){var n=Pe(e),a=n.selectedRowKeys,r=n.tree,l=n.data,i=n.indeterminateSelectedRowKeys,o=H([]),s=Rt(a,e.defaultSelectedRowKeys||[],e.onSelectChange,"selectedRowKeys","select-change"),u=me(s,2),d=u[0],v=u[1],c=L(function(){var g;return{rowKey:e.rowKey||"id",childrenKey:((g=e.tree)===null||g===void 0?void 0:g.childrenKey)||"children"}});ce([r,t,l,d],function(g){var b=me(g,2),C=b[0],w=b[1];!C||!w.size||C.checkStrictly||f()});function f(){if(!(!r.value||r.value.checkStrictly)){if(!d.value.length){o.value=[];return}for(var g=[],b={},C=0,w=d.value.length;C<w;C++){var x=d.value[C],S=t.value.get(x),T=Q(S.row,c.value.childrenKey);if(!T||!T.length)for(var k=S.parent;k;){b[k.id]||(b[k.id]=[]),b[k.id].push(S.row);var _=b[k.id].length,R=dn(t.value,k.row,c.value),P=R.allChildrenKeys,O=g.indexOf(k.id),$=d.value.indexOf(k.id);_>0&&_<P.length&&$===-1?O===-1&&g.push(k.id):O!==-1&&g.splice(O,1),k=k.parent}}o.value=g}}function p(g,b,C){if(!(!r.value||r.value.checkStrictly)){for(var w=oe(g),x=t.value.get(b),S=x.parent;S;){var T=dn(t.value,S.row,c.value),k=T.leafNodeKeys,_=aa(k,g),R=w.indexOf(S.id);C==="uncheck"?R!==-1&&w.splice(R,1):_.length===k.length&&R===-1&&w.push(S.id),S=S.parent}return w}}function h(g,b){if(!r.value||r.value.checkStrictly){v(g,b);return}b.currentRowKey==="CHECK_ALL_BOX"?y(b):m(g,b)}function y(g){var b=[],C=[];if(g.type==="check")for(var w=oe(t.value.values()),x=0,S=w.length;x<S;x++){var T=w[x];T.disabled||(C.push(T.row),b.push(Q(T.row,c.value.rowKey)))}var k=Ln(Ln({},g),{},{selectedRowData:C||[]});v(b,k)}function m(g,b){var C,w=oe(g);if(((C=e.tree)===null||C===void 0?void 0:C.checkStrictly)===!1){if((b==null?void 0:b.type)==="check"){var x=dn(t.value,b.currentRowData,c.value),S=x.allChildrenKeys;ja.set(b.currentRowData,x),w=oe(new Set(w.concat(S)))}else if((b==null?void 0:b.type)==="uncheck"){var T=dn(t.value,b.currentRowData,c.value),k=Kd({selectedRowKeys:g,removeKeys:T.allChildrenKeys});w=k.keys}}w=p(w,b.currentRowKey,b.type);var _=Ad({treeDataMap:t.value,selectedRowKeys:w}),R=Ln(Ln({},b),{},{selectedRowData:_});v(w,R)}return{tIndeterminateSelectedRowKeys:i.value?i:o,onInnerSelectChange:h}}/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var Nd=["store","dataSource","formatTreeColumn","swapData"];function Qo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Pt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var jd=["cell-click","change","page-change","expand-change","filter-change","select-change","sort-change","data-change","async-loading-click","column-change","column-controller-visible-change","display-columns-change","drag-sort","row-edit","row-validate","validate"],Id=or.concat(jd),Md=Oe({name:"TEnhancedTable",props:Pt(Pt(Pt({},nn),Ki),Rd),setup:function(t,n){var a=H(),r=$d(t,n),l=r.store,i=r.dataSource,o=r.formatTreeColumn,s=r.swapData,u=Vl(r,Nd),d=H(l.value.treeDataMap),v=Fd(t,d),c=v.tIndeterminateSelectedRowKeys,f=v.onInnerSelectChange,p=function m(g){for(var b=[],C=0,w=g.length;C<w;C++){var x,S,T=Pt({},g[C]);T=o(T),(x=T.children)!==null&&x!==void 0&&x.length&&(T.children=m(T.children)),(!T.children||(S=T.children)!==null&&S!==void 0&&S.length)&&b.push(T)}return b},h=L(function(){var m=!t.tree||!Object.keys(t.tree).length;return m?t.columns:p(t.columns)}),y=function(g){var b;t.beforeDragSort&&!t.beforeDragSort(g)||(s({current:g.current,target:g.target,currentIndex:g.currentIndex,targetIndex:g.targetIndex}),(b=t.onDragSort)===null||b===void 0||b.call(t,g),n.emit("drag-sort",g))};return Pt({store:l,dataSource:i,tColumns:h,tIndeterminateSelectedRowKeys:c,enhancedTableRef:a,onDragSortChange:y,onInnerSelectChange:f},u)},methods:{getListener:function(){var t=this,n={};return Id.forEach(function(a){n[a]=function(){for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];t.$emit.apply(t,[a].concat(l)),a==="display-columns-change"&&t.$emit.apply(t,["update:displayColumns"].concat(l))}}),n}},render:function(){var t=arguments[0],n=Pt(Pt({},this.$options.propsData),{},{data:this.dataSource,columns:this.tColumns,indeterminateSelectedRowKeys:this.tIndeterminateSelectedRowKeys,disableDataPage:Boolean(this.tree&&Object.keys(this.tree).length)}),a=Pt(Pt({},this.getListener()),{},{"select-change":this.onInnerSelectChange,"drag-sort":this.onDragSortChange});return t(lr,fe([{ref:"enhancedTableRef",scopedSlots:this.$scopedSlots},{props:n},{},{on:a},{},this.$attrs]))}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Uo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Xo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Uo(Object(n),!0).forEach(function(a){A(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Uo(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}Fe($i,ct);Fe(lr,ct);var ji=Fe(Md,ct);Fe(Xo(Xo({},lr),{},{name:"TTable"}),ct);const Ii=[],Mi=28;for(let e=0;e<Mi;e++)Ii.push({index:e,platform:e%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][e%4],default:["0","[]"][e%5],detail:{position:`\u8BFB\u53D6 ${e} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},needed:e%4===0?"\u662F":"\u5426",description:"\u6570\u636E\u6E90"});const Ld={data(){return{data:Ii,size:"medium",tableLayout:!1,stripe:!0,bordered:!0,hover:!1,showHeader:!0,columns:[{colKey:"serial-number",title:"\u5E8F\u53F7",width:"100",align:"center",className:"custom-column-class-name",attrs:{"data-id":"first-column",style:{}}},{width:100,colKey:"platform",title:"\u5E73\u53F0"},{colKey:"type",title:"\u7C7B\u578B"},{colKey:"default",title:"\u9ED8\u8BA4\u503C"},{colKey:"needed",title:"\u662F\u5426\u5FC5\u4F20"},{colKey:"detail.position",title:"\u8BE6\u60C5\u4FE1\u606F",width:200,ellipsis:!0,ellipsisTitle:!1}],pagination:{defaultCurrent:2,defaultPageSize:5,total:Mi}}}};var Bd=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.size,callback:function(a){e.size=a},expression:"size"}},[n("t-radio-button",{attrs:{value:"small"}},[e._v("\u5C0F\u5C3A\u5BF8")]),n("t-radio-button",{attrs:{value:"medium"}},[e._v("\u4E2D\u5C3A\u5BF8")]),n("t-radio-button",{attrs:{value:"large"}},[e._v("\u5927\u5C3A\u5BF8")])],1)],1),n("t-space",[n("t-checkbox",{model:{value:e.stripe,callback:function(a){e.stripe=a},expression:"stripe"}},[e._v("\u663E\u793A\u6591\u9A6C\u7EB9")]),n("t-checkbox",{model:{value:e.bordered,callback:function(a){e.bordered=a},expression:"bordered"}},[e._v("\u663E\u793A\u8868\u683C\u8FB9\u6846")]),n("t-checkbox",{model:{value:e.hover,callback:function(a){e.hover=a},expression:"hover"}},[e._v("\u663E\u793A\u60AC\u6D6E\u6548\u679C")]),n("t-checkbox",{model:{value:e.tableLayout,callback:function(a){e.tableLayout=a},expression:"tableLayout"}},[e._v("\u5BBD\u5EA6\u81EA\u9002\u5E94")]),n("t-checkbox",{model:{value:e.showHeader,callback:function(a){e.showHeader=a},expression:"showHeader"}},[e._v("\u663E\u793A\u8868\u5934")])],1),n("t-table",{attrs:{rowKey:"index",data:e.data,columns:e.columns,stripe:e.stripe,bordered:e.bordered,hover:e.hover,size:e.size,"table-layout":e.tableLayout?"auto":"fixed",pagination:e.pagination,showHeader:e.showHeader,cellEmptyContent:"-"}})],1)},zd=[];const Zo={};var Vd=ge(Ld,Bd,zd,!1,Hd,null,null,null);function Hd(e){for(let t in Zo)this[t]=Zo[t]}const Qh=function(){return Vd.exports}();var Wd=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"t-demo__style"},[n("t-table",{attrs:{"row-key":"id",data:e.data,columns:e.columns,"row-class-name":e.getRowClassName},scopedSlots:e._u([{key:"footerSummary",fn:function(){return[n("div",{staticClass:"t-table__row-filter-inner"},[e._v("\u6C47\u603B\uFF1A\u8FD1\u671F\u6570\u636E\u6CE2\u52A8\u8F83\u5927")])]},proxy:!0}])})],1)},Yd=[];const Li=[],qd=5;for(let e=0;e<qd;e++)Li.push({id:e,framework:["tdesign-vue","tdesign-react","tdesign-vue-next"][e%3],data:["100,000","21,514","7,884","1,290"][e%4],ringRatio:["8%","30%","75%","200%"][e%4],yearRatio:["10%","20%","80%","100%"][e%4]});const Jd={data(){return{data:Li,columns:[{colKey:"serial-number",title:"\u5E8F\u53F7",align:"center",width:80},{colKey:"framework",title:"\u6846\u67B6"},{colKey:"data",title:"\u6570\u636E",align:"right",attrs:({type:e,row:t})=>({style:e==="td"&&t.data==="21,514"?{color:"green",fontWeight:600,backgroundColor:"var(--td-brand-color-1)",fontSize:"16px"}:void 0})},{colKey:"ringRatio",title:"\u73AF\u6BD4",align:"right",className:({type:e,row:t})=>e==="td"&&t.ringRatio==="200%"?"custom-cell-class-name":""},{colKey:"yearRatio",title:"\u540C\u6BD4",align:"right",className:"last-column-class-name"}]}},methods:{getRowClassName({rowIndex:e}){return e===2?"custom-third-class-name":""}}},el={};var Gd=ge(Jd,Wd,Yd,!1,Qd,null,null,null);function Qd(e){for(let t in el)this[t]=el[t]}const Uh=function(){return Gd.exports}();function Ud(e){if(navigator.clipboard)navigator.clipboard.writeText(e);else{const t=document.createElement("textarea");document.body.appendChild(t),t.style.position="fixed",t.style.clip="rect(0 0 0 0)",t.style.top="10px",t.value=e,t.select(),document.execCommand("copy",!0),document.body.removeChild(t)}Ct.success("\u6587\u672C\u590D\u5236\u6210\u529F")}const Bi=[],Xd=5;for(let e=0;e<Xd;e++)Bi.push({id:e+1,desc:["\u5355\u5143\u683C\u6587\u672C\u8D85\u51FA\u7701\u7565\u8BBE\u7F6E","\u8FD9\u662F\u666E\u901A\u6587\u672C\u7684\u8D85\u51FA\u7701\u7565"][e%2],link:"Long link text. Popup content is pure text",something:"\u4EC5\u6807\u9898\u7701\u7565",ellipsisProps:"Setting ellipsis tooltip to be light",ellipsisContent:"Custom Ellipsis Content",propsAndContent1:"Setting props and content at the same time",propsAndContent2:"Setting props and content at the same time"});const Zd={data(){return this.$createElement,{data:Bi,columns:[{title:"Description",colKey:"desc",ellipsis:!0},{title:"\u8FD9\u662F\u4E00\u4E2A\u5F88\u957F\u5F88\u957F\u7684\u6807\u9898",colKey:"something",width:120,ellipsisTitle:!0},{title:"Link",colKey:"link",ellipsis:(e,{row:t})=>t.link,cell:(e,{row:t})=>e("a",{attrs:{href:"/vue-next/components/table",target:"_blank"}},[t.link])},{title:"Ellipsis Props",colKey:"ellipsisProps",ellipsis:{theme:"light",placement:"bottom"}},{title:"Ellipsis Content",colKey:"ellipsisContent",ellipsis:(e,{row:t})=>e("div",[t.ellipsisContent,e(Os,{style:{cursor:"pointer",marginLeft:"4px"},on:{click:()=>Ud(t.ellipsisContent)}})])},{title:"Props & Content",colKey:"propsAndContent1",ellipsis:{props:{theme:"light",placement:"bottom-right"},content:(e,{row:t})=>e("div",[e("p",[e("b",["Tooltip1:"])," ",t.propsAndContent1]),e("p",[e("b",["Tooltip2:"])," ",t.propsAndContent2])])}}]}}};var ef=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("t-table",{attrs:{"row-key":"id",data:e.data,columns:e.columns}})],1)},tf=[];const tl={};var nf=ge(Zd,ef,tf,!1,af,null,null,null);function af(e){for(let t in tl)this[t]=tl[t]}const Xh=function(){return nf.exports}();var rf=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.tableLayout,callback:function(a){e.tableLayout=a},expression:"tableLayout"}},[n("t-radio-button",{attrs:{value:"fixed"}},[e._v("table-layout: fixed")]),n("t-radio-button",{attrs:{value:"auto"}},[e._v("table-layout: auto")])],1)],1),n("br"),n("br"),n("div",[n("t-checkbox",{model:{value:e.fixedTopAndBottomRows,callback:function(a){e.fixedTopAndBottomRows=a},expression:"fixedTopAndBottomRows"}},[e._v("\u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C")])],1),n("br"),n("br"),n("t-table",{attrs:{rowKey:"index",data:e.data,footData:[{}],columns:e.columns,"table-layout":e.tableLayout,"max-height":e.fixedTopAndBottomRows?500:300,fixedRows:e.fixedTopAndBottomRows?[2,2]:void 0,bordered:""}})],1)},of=[];const zi=[];for(let e=0;e<20;e++)zi.push({index:e,platform:e%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][e%4],default:["-","0","[]","{}"][e%4],detail:{position:`\u8BFB\u53D6 ${e} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},needed:e%4===0?"\u662F":"\u5426",description:"\u6570\u636E\u6E90"});const lf={data(){return{tableLayout:"fixed",fixedTopAndBottomRows:!1,data:zi,columns:[{width:120,colKey:"platform",title:"\u5E73\u53F0",foot:"\u6C47\u603B"},{width:120,colKey:"type",title:"\u7C7B\u578B",foot:"Number(5)"},{colKey:"default",title:"\u9ED8\u8BA4\u503C",foot:"-"},{colKey:"needed",title:"\u5FC5\u4F20",foot:"\u5426(6)"},{colKey:"detail.position",title:"\u8BE6\u60C5\u4FE1\u606F",width:200,ellipsis:!0,foot:"-"},{colKey:"description",title:"\u8BF4\u660E",foot:"\u6570\u636E(10)"}]}}},nl={};var sf=ge(lf,rf,of,!1,uf,null,null,null);function uf(e){for(let t in nl)this[t]=nl[t]}const Zh=function(){return sf.exports}();var cf=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column tdesign-demo__table",staticStyle:{"max-width":"1200px"}},[n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.leftFixedColumn,callback:function(a){e.leftFixedColumn=a},expression:"leftFixedColumn"}},[n("t-radio-button",{attrs:{value:1}},[e._v("\u5DE6\u4FA7\u56FA\u5B9A\u4E00\u5217")]),n("t-radio-button",{attrs:{value:2}},[e._v("\u5DE6\u4FA7\u56FA\u5B9A\u4E24\u5217")])],1)],1),n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.rightFixedColumn,callback:function(a){e.rightFixedColumn=a},expression:"rightFixedColumn"}},[n("t-radio-button",{attrs:{value:1}},[e._v("\u53F3\u4FA7\u56FA\u5B9A\u4E00\u5217")]),n("t-radio-button",{attrs:{value:2}},[e._v("\u53F3\u4FA7\u56FA\u5B9A\u4E24\u5217")])],1)],1),n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.tableLayout,callback:function(a){e.tableLayout=a},expression:"tableLayout"}},[n("t-radio-button",{attrs:{value:"fixed"}},[e._v("table-layout: fixed")]),n("t-radio-button",{attrs:{value:"auto"}},[e._v("table-layout: auto")])],1),n("t-checkbox",{staticStyle:{"margin-left":"16px","vertical-align":"middle"},model:{value:e.emptyData,callback:function(a){e.emptyData=a},expression:"emptyData"}},[e._v("\u7A7A\u6570\u636E")])],1),n("t-table",{attrs:{rowKey:"index",data:e.emptyData?[]:e.data,columns:e.columns,"table-layout":e.tableLayout,"table-content-width":e.tableLayout==="fixed"?void 0:"1200px",bordered:"",resizable:""},scopedSlots:e._u([{key:"operation",fn:function(a){return[n("a",{staticClass:"link",on:{click:function(r){return e.rehandleClickOp(a)}}},[e._v("\u5220\u9664")])]}}])})],1)},df=[];const Vi=[];for(let e=0;e<5;e++)Vi.push({index:e,platform:e%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][e%4],default:["-","0","[]","{}"][e%4],detail:{position:`\u8BFB\u53D6 ${e} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},needed:e%4===0?"\u662F":"\u5426",description:"\u6570\u636E\u6E90"});const ff={data(){return{data:Vi,tableLayout:"fixed",leftFixedColumn:2,rightFixedColumn:1,emptyData:!1}},computed:{columns(){return[{align:"center",width:80,colKey:"index",title:"\u5E8F\u53F7",fixed:"left"},{colKey:"platform",title:"\u5E73\u53F0",width:100,fixed:this.leftFixedColumn>=2?"left":void 0},{colKey:"type",title:"\u7C7B\u578B",width:150},{colKey:"default",title:"\u9ED8\u8BA4\u503C"},{colKey:"description",title:"\u8BF4\u660E",width:100},{colKey:"needed",title:"\u662F\u5426\u5FC5\u4F20",width:150},{colKey:"operation",title:"\u64CD\u4F5C",width:100,cell:"operation",fixed:this.rightFixedColumn>=2?"right":void 0},{colKey:"detail.position",title:"\u8BE6\u60C5\u4FE1\u606F",width:120,fixed:"right",ellipsis:{placement:"bottom-right"}}]}}},al={};var vf=ge(ff,cf,df,!1,pf,"d66a9384",null,null);function pf(e){for(let t in al)this[t]=al[t]}const em=function(){return vf.exports}();var hf=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column tdesign-demo__table",staticStyle:{width:"100%"}},[n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.tableLayout,callback:function(a){e.tableLayout=a},expression:"tableLayout"}},[n("t-radio-button",{attrs:{value:"fixed"}},[e._v("table-layout: fixed")]),n("t-radio-button",{attrs:{value:"auto"}},[e._v("table-layout: auto")])],1)],1),n("div",[n("t-checkbox",{model:{value:e.fixedTopAndBottomRows,callback:function(a){e.fixedTopAndBottomRows=a},expression:"fixedTopAndBottomRows"}},[e._v("\u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C")]),n("t-checkbox",{model:{value:e.stripe,callback:function(a){e.stripe=a},expression:"stripe"}},[e._v("\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9")])],1),n("t-table",{attrs:{rowKey:"index",data:e.data,footData:[{}],columns:e.columns,"table-layout":e.tableLayout,"table-content-width":e.tableLayout==="fixed"?void 0:"1600px","max-height":e.fixedTopAndBottomRows?500:300,fixedRows:e.fixedTopAndBottomRows?[2,2]:void 0,scroll:e.virtualScroll?{type:"virtual"}:void 0,stripe:e.stripe,bordered:"",resizable:""},scopedSlots:e._u([{key:"operation",fn:function(a){return[n("a",{staticClass:"link",on:{click:function(r){return e.rehandleClickOp(a)}}},[e._v("\u5220\u9664")])]}}])})],1)},mf=[];function _a(e){const t=[];for(let n=0;n<e;n++)t.push({index:n,platform:n%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][n%4],default:["-","0","[]","{}"][n%4],detail:{position:`\u8BFB\u53D6 ${n} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`,position1:`\u8BFB\u53D6 ${n} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},description:"\u6570\u636E\u6E90",needed:n%4===0?"\u662F":"\u5426"});return t}const gf={data(){return{virtualScroll:!1,fixedTopAndBottomRows:!1,stripe:!1,tableLayout:"fixed",data:_a(14),columns:[{align:"center",width:100,colKey:"index",title:"\u5E8F\u53F7",fixed:"left",foot:"\u603B\u8FF0"},{colKey:"platform",title:"\u5E73\u53F0",width:120,foot:"\u516C\u6709(5)"},{colKey:"type",title:"\u7C7B\u578B",width:120,foot:"Number(5)"},{colKey:"default",title:"\u9ED8\u8BA4\u503C",width:150,foot:"-"},{colKey:"detail.position",title:"\u8BE6\u60C5\u4FE1\u606F",width:250,foot:"-"},{colKey:"description",title:"\u8BF4\u660E",width:120,foot:"\u6570\u636E(10)"},{colKey:"needed",title:"\u5FC5\u4F20",foot:"\u5426(6)",width:120},{colKey:"operation",title:"\u64CD\u4F5C",width:100,cell:"operation",fixed:"right"}]}},watch:{virtualScroll(e){this.data=_a(e?2e3:15)}},methods:{rehandleClickOp({text:e,row:t}){console.log(e,t)}}},rl={};var bf=ge(gf,hf,mf,!1,yf,"95a32c5c",null,null);function yf(e){for(let t in rl)this[t]=rl[t]}const tm=function(){return bf.exports}(),wf={components:{AttachIcon:Vs},data(){return this.$createElement,{data:[{platform:"\u516C\u6709",property:"data",type:"any[]",default:"[]",needed:"Y",description:"\u6570\u636E\u6E90"},{platform:"\u516C\u6709",property:"rowkey",type:"String",default:"-1",needed:"N",description:"\u6307\u5B9Arowkey"}],columns:[{colKey:"type",title:"\u7C7B\u578B",cell:"type-slot-name"},{colKey:"platform",title:"\u5E73\u53F0"},{colKey:"property",title:"\u5C5E\u6027\u540D",cell:(e,{col:t,row:n})=>e("div",["\u4F7F\u7528 cell \u65B9\u6CD5\u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF1A",n[t.colKey]])},{colKey:"description",render(e,t){const{type:n,rowIndex:a,colIndex:r}=t;return n==="title"?"render":`render \u65B9\u6CD5\u6E32\u67D3\u5355\u5143\u683C: ${a}-${r}`}}]}}};var Cf=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo__table"},[n("t-table",{attrs:{data:e.data,columns:e.columns,rowKey:"property",verticalAlign:"top"},scopedSlots:e._u([{key:"type-slot-name",fn:function(a){var r=a.col,l=a.row;return[e._v(" \u81EA\u5B9A\u4E49\u63D2\u69FD\u540D\u79F0\uFF1A"+e._s(l[r.colKey])+" ")]}},{key:"platform",fn:function(a){var r=a.row;return[n("attach-icon"),n("a",{staticClass:"link",attrs:{href:"#"}},[e._v(e._s(r.platform))]),e._v("\uFF08\u63D2\u69FD\u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF09 ")]}}])})],1)},xf=[];const ol={};var _f=ge(wf,Cf,xf,!1,Of,"3cf467ec",null,null);function Of(e){for(let t in ol)this[t]=ol[t]}const nm=function(){return _f.exports}(),Sf={components:{AppIcon:Ls},data(){return this.$createElement,{data:[{platform:"\u6807\u9898\u4F7F\u7528 title \u65B9\u6CD5\u81EA\u5B9A\u4E49",property:"data",type:"\u6807\u9898\u662F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49",default:"[]",needed:"Y",description:"\u6570\u636E\u6E90"},{platform:"\u6807\u9898\u4F7F\u7528 title \u65B9\u6CD5\u81EA\u5B9A\u4E49",property:"rowkey",type:"\u63D2\u69FD\u540D\u79F0\u4E3A title \u7684\u503C",default:"-1",needed:"N",description:"\u6307\u5B9Arowkey"}],columns:[{colKey:"type",title:"title-slot-name"},{colKey:"platform",title:(e,{colIndex:t})=>e("b",{style:"color: #0052d9"},[["","\u6807\u9898"][t]])},{colKey:"property",render(e,t){const{type:n,row:a,col:r}=t;return{title:"\u5C5E\u6027\u540D",cell:a&&a[r.colKey]}[n]}}]}}};var kf=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-table",{attrs:{data:e.data,columns:e.columns,rowKey:"property"},scopedSlots:e._u([{key:"title-slot-name",fn:function(){return[n("app-icon"),e._v(" \u7C7B\u578B ")]},proxy:!0}])})},Pf=[];const ll={};var Df=ge(Sf,kf,Pf,!1,Tf,null,null,null);function Tf(e){for(let t in ll)this[t]=ll[t]}const am=function(){return Df.exports}(),Hi=[];for(let e=0;e<3;e++)Hi.push({index:e,platform:e%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][e%4],default:["-","0","[]","{}"][e%4],detail:{position:`\u8BFB\u53D6 ${e} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},required:e%4===0?"\u662F":"\u5426",description:"\u6570\u636E\u6E90"});const Rf={data(){const e=this.$createElement;return{data:Hi,footerType:"normal",footData:[{index:"123",type:"\u5168\u90E8\u7C7B\u578B",default:"",description:"-"}],columns:[{align:"center",width:"100",className:"row",colKey:"index",title:"\u5E8F\u53F7",foot:()=>e("b",{style:"color: rgb(0, 82, 217)"},["\u8868\u5C3E"])},{width:100,colKey:"platform",title:"\u5E73\u53F0",foot:(t,{rowIndex:n})=>t("div",{style:"width: 100%; text-align: center"},["\u7B2C ",n+1," \u884C"])},{colKey:"type",title:"\u7C7B\u578B"},{colKey:"default",title:"\u9ED8\u8BA4\u503C",foot:(t,{row:n})=>t("span",[n.default||"\u7A7A"])},{colKey:"required",title:"\u662F\u5426\u5FC5\u4F20",width:150,foot:"t-foot-required"},{colKey:"detail.position",title:"\u8BE6\u60C5\u4FE1\u606F",width:200,ellipsis:!0,foot:()=>e("div",["\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u8868\u5C3E\u4FE1\u606F"])}]}},methods:{rowClassName({type:e}){return e==="foot"?"t-tdesign__custom-footer-tr":"t-tdesign__custom-body-tr"},rowspanAndColspanInFooter({rowIndex:e,colIndex:t}){return e===0&&t===1?{colspan:this.columns.length-2}:{}}}};var Ef=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column-large tdesign-demo__table"},[n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.footerType,callback:function(a){e.footerType=a},expression:"footerType"}},[n("t-radio-button",{attrs:{value:"normal"}},[e._v("\u666E\u901A\u8868\u5C3E")]),n("t-radio-button",{attrs:{value:"full"}},[e._v("\u901A\u680F\u8868\u5C3E")]),n("t-radio-button",{attrs:{value:"custom"}},[e._v("\u81EA\u5B9A\u4E49\u8868\u5C3E\u5408\u5E76\u5217")])],1)],1),n("t-table",{attrs:{rowKey:"index",bordered:"",data:e.data,columns:e.columns,"foot-data":["normal","custom"].includes(e.footerType)?e.footData:[],rowClassName:e.rowClassName,rowspanAndColspanInFooter:e.footerType==="custom"?e.rowspanAndColspanInFooter:void 0},scopedSlots:e._u([{key:"footerSummary",fn:function(){return[e.footerType==="full"?n("div",{staticClass:"t-table__row-filter-inner"},[e._v("\u901A\u680F\u603B\u7ED3\u884C\u4FE1\u606F")]):e._e()]},proxy:!0},{key:"t-foot-required",fn:function(){return[n("b",[e._v("\u5FC5\u4F20(\u63D2\u69FD)")])]},proxy:!0}])})],1)},$f=[];const il={};var Kf=ge(Rf,Ef,$f,!1,Af,null,null,null);function Af(e){for(let t in il)this[t]=il[t]}const rm=function(){return Kf.exports}();function Ff(e){const t=[];for(let n=0;n<e;n++)t.push({index:n,platform:n%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][n%4],default:["-","0","[]","{}"][n%4],detail:{position:`\u8BFB\u53D6 ${n} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},required:n%4===0?"\u662F":"\u5426",description:"\u6570\u636E\u6E90",expo:235245,click:1653,ctr:"12%"});return t}const sl=38;function ul(e,{fixedLeftColumn:t,fixedRightColumn:n}){return[{align:"center",className:"row",colKey:"index",title:"\u5E8F\u53F7",foot:()=>e("b",{style:"color: rgb(0, 82, 217)"},["\u8868\u5C3E"]),fixed:t?"left":void 0},{colKey:"platform",title:"\u5E73\u53F0",foot:(a,{rowIndex:r})=>a("span",["\u7B2C ",r+1," \u884C"])},{colKey:"type",title:"\u7C7B\u578B"},{colKey:"expo",title:"\u66DD\u5149",foot:"-"},{colKey:"click",title:"\u70B9\u51FB",foot:"-"},{colKey:"ctr",title:"\u70B9\u51FB\u7387",foot:"-"},{colKey:"default",title:"\u9ED8\u8BA4\u503C",foot:(a,{row:r})=>a("span",[r.default||"\u7A7A"])},{colKey:"required",title:"\u662F\u5426\u5FC5\u4F20",foot:"t-foot-required"},{colKey:"detail.position",title:"\u8BE6\u60C5\u4FE1\u606F",ellipsis:!0,foot:()=>e("div",["\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u8868\u5C3E\u4FE1\u606F"])},{colKey:"operation",title:"\u64CD\u4F5C",cell:()=>"\u67E5\u770B",width:80,foot:"-",fixed:n?"right":void 0}]}const Nf={data(){return{data:Ff(sl),TOTAL:sl,headerAffixedTop:!0,footerAffixedBottom:!0,fixedLeftColumn:!0,fixedRightColumn:!0,horizontalScrollAffixedBottom:!1,paginationAffixedBottom:!1,footData:[{index:"footer-row-1",type:"\u5168\u90E8\u7C7B\u578B",description:"-"}],columns:[]}},watch:{horizontalScrollAffixedBottom(e){e&&(this.footerAffixedBottom=!1)},footerAffixedBottom(e){e&&(this.horizontalScrollAffixedBottom=!1)},fixedLeftColumn:{handler(e){this.columns=ul(this.$createElement,{fixedLeftColumn:e,fixedRightColumn:this.fixedRightColumn})},immediate:!0},fixedRightColumn(e){this.columns=ul(this.$createElement,{fixedLeftColumn:this.fixedLeftColumn,fixedRightColumn:e})}},methods:{rowClassName({type:e}){return e==="foot"?"t-tdesign__custom-footer-tr":"t-tdesign__custom-body-tr"},onDragSortChange({newData:e}){this.columns=e}}};var jf=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column-large tdesign-demo__table tdesign-demo__table-affix",staticStyle:{width:"100%"}},[n("div",[n("t-checkbox",{model:{value:e.headerAffixedTop,callback:function(a){e.headerAffixedTop=a},expression:"headerAffixedTop"}},[e._v("\u8868\u5934\u5438\u9876")]),n("t-checkbox",{staticStyle:{"margin-left":"32px"},model:{value:e.footerAffixedBottom,callback:function(a){e.footerAffixedBottom=a},expression:"footerAffixedBottom"}},[e._v("\u8868\u5C3E\u5438\u5E95")]),n("t-checkbox",{staticStyle:{"margin-left":"32px"},model:{value:e.horizontalScrollAffixedBottom,callback:function(a){e.horizontalScrollAffixedBottom=a},expression:"horizontalScrollAffixedBottom"}},[e._v("\u6EDA\u52A8\u6761\u5438\u5E95")]),n("t-checkbox",{staticStyle:{"margin-left":"32px"},model:{value:e.paginationAffixedBottom,callback:function(a){e.paginationAffixedBottom=a},expression:"paginationAffixedBottom"}},[e._v("\u5206\u9875\u5668\u5438\u5E95")]),n("t-checkbox",{staticStyle:{"margin-left":"32px"},model:{value:e.fixedLeftColumn,callback:function(a){e.fixedLeftColumn=a},expression:"fixedLeftColumn"}},[e._v("\u56FA\u5B9A\u5DE6\u4FA7\u5217")]),n("t-checkbox",{staticStyle:{"margin-left":"32px"},model:{value:e.fixedRightColumn,callback:function(a){e.fixedRightColumn=a},expression:"fixedRightColumn"}},[e._v("\u56FA\u5B9A\u53F3\u4FA7\u5217")])],1),n("t-table",{attrs:{rowKey:"index",data:e.data,columns:e.columns,footData:e.footData,rowClassName:e.rowClassName,pagination:{defaultCurrent:1,defaultPageSize:5,total:e.TOTAL},headerAffixedTop:{offsetTop:87,zIndex:1e3},footerAffixedBottom:e.footerAffixedBottom?{offsetBottom:e.paginationAffixedBottom?60:0,zIndex:1e3}:!1,horizontalScrollAffixedBottom:e.horizontalScrollAffixedBottom?{offsetBottom:e.paginationAffixedBottom?61:0,zIndex:1e3}:!1,paginationAffixedBottom:e.paginationAffixedBottom,"table-layout":"fixed",dragSort:"col",bordered:"",resizable:""},on:{"drag-sort":e.onDragSortChange},scopedSlots:e._u([{key:"t-foot-required",fn:function(){return[e._v(" \u63D2\u69FD\u6E32\u67D3\u8868\u5C3E ")]},proxy:!0}])})],1)},If=[];const cl={};var Mf=ge(Nf,jf,If,!1,Lf,null,null,null);function Lf(e){for(let t in cl)this[t]=cl[t]}const om=function(){return Mf.exports}(),Bf=e=>[{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0",fixed:e?"left":""},{colKey:"status",title:"\u72B6\u6001",cell:"status"},{colKey:"owner",title:"\u7BA1\u7406\u5458"},{colKey:"description",title:"\u63CF\u8FF0"},{colKey:"field1",title:"\u5B57\u6BB5 1"},{colKey:"field2",title:"\u5B57\u6BB5 2"},{colKey:"field3",title:"\u5B57\u6BB5 3"},{colKey:"field4",title:"\u5B57\u6BB5 4"},{colKey:"field5",title:"\u5B57\u6BB5 5"},{colKey:"field6",title:"\u5B57\u6BB5 6"},{colKey:"op",title:"op-column",cell:"op",fixed:e?"right":""}],zf=new Array(5).fill(null).map((e,t)=>({id:t+100,instance:`JQTest${t+1}`,status:t%2,owner:"jenny;peter",description:"description",field1:"field1",field2:"field2",field3:"field3",field4:"field4",field5:"field5",field6:"field6"})),Vf={data(){return this.$createElement,{expandControl:"true",expandIcon:!0,expandOnRowClick:!0,fixedColumns:!1,emptyData:!1,data:zf,expandedRowKeys:[102],expandedRow:(e,{row:t})=>e("div",{class:"more-detail"},[e("p",{class:"title"},[e("b",["\u96C6\u7FA4\u540D\u79F0:"])]),e("p",{class:"content"},[t.instance]),e("br"),e("p",{class:"title"},[e("b",["\u7BA1\u7406\u5458:"])]),e("p",{class:"content"},[t.owner]),e("br"),e("p",{class:"title"},[e("b",["\u63CF\u8FF0:"])]),e("p",{class:"content"},[t.description])]),globalLocale:{table:{expandIcon:e=>e&&e(mn)}}}},computed:{columns(){return Bf(this.fixedColumns)}},watch:{expandControl(e){this.$createElement,e==="true"?this.expandIcon=!0:e==="false"?this.expandIcon=!1:e==="custom"&&(this.expandIcon=(t,{row:n,index:a})=>a===0?!1:n.id===103?t(mn):t(Jl))}},methods:{rehandleClickOp(e){console.log(e)},rehandleExpandChange(e,t){this.expandedRowKeys=e,console.log("rehandleExpandChange",t)}}};var Hf=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column tdesign-demo__table",staticStyle:{width:"100%"}},[n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.expandControl,callback:function(a){e.expandControl=a},expression:"expandControl"}},[n("t-radio-button",{attrs:{value:"true"}},[e._v("\u663E\u793A\u5C55\u5F00\u56FE\u6807")]),n("t-radio-button",{attrs:{value:"false"}},[e._v("\u9690\u85CF\u5C55\u5F00\u56FE\u6807")]),n("t-radio-button",{attrs:{value:"custom"}},[e._v("\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807")])],1)],1),n("div",[n("t-checkbox",{model:{value:e.expandOnRowClick,callback:function(a){e.expandOnRowClick=a},expression:"expandOnRowClick"}},[e._v("\u5141\u8BB8\u70B9\u51FB\u884C\u4E4B\u540E\u5C55\u5F00/\u6536\u8D77")]),n("t-checkbox",{staticStyle:{"margin-left":"32px"},model:{value:e.fixedColumns,callback:function(a){e.fixedColumns=a},expression:"fixedColumns"}},[e._v("\u56FA\u5B9A\u5217")]),n("t-checkbox",{staticStyle:{"margin-left":"32px"},model:{value:e.emptyData,callback:function(a){e.emptyData=a},expression:"emptyData"}},[e._v("\u7A7A\u6570\u636E")])],1),n("t-table",{attrs:{"row-key":"id",columns:e.columns,data:e.emptyData?[]:e.data,"expanded-row-keys":e.expandedRowKeys,"expanded-row":e.expandedRow,expandIcon:e.expandIcon,expandOnRowClick:e.expandOnRowClick,horizontalScrollAffixedBottom:!0,"table-layout":"auto",tableContentWidth:"1200"},on:{"expand-change":e.rehandleExpandChange},scopedSlots:e._u([{key:"status",fn:function(a){var r=a.row;return[r.status===0?n("p",{staticClass:"status"},[e._v("\u5065\u5EB7")]):e._e(),r.status===1?n("p",{staticClass:"status unhealth"},[e._v("\u5F02\u5E38")]):e._e()]}},{key:"op-column",fn:function(){return[n("p",[e._v("\u64CD\u4F5C")])]},proxy:!0},{key:"op",fn:function(a){return[n("a",{staticClass:"link",on:{click:function(r){return e.rehandleClickOp(a)}}},[e._v("\u7BA1\u7406")]),n("a",{staticClass:"link",on:{click:function(r){return e.rehandleClickOp(a)}}},[e._v("\u5220\u9664")])]}}])})],1)},Wf=[];const dl={};var Yf=ge(Vf,Hf,Wf,!1,qf,"7a0e3326",null,null);function qf(e){for(let t in dl)this[t]=dl[t]}const lm=function(){return Yf.exports}(),Wi=[];for(let e=0;e<100;e++)Wi.push({index:e,platform:e%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][e%4],default:["-","0","[]","{}"][e%4],detail:{position:`\u8BFB\u53D6 ${e} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},needed:e%4===0?"\u662F":"\u5426",description:"\u6570\u636E\u6E90"});const Jf=["index","needed","detail.position"],Gf={data(){return{data:Wi,placement:"top-right",customText:!1,bordered:!0,displayColumns:Jf.concat(["platform","type","default"]),columns:[{align:"center",className:"row",colKey:"index",title:"\u5E8F\u53F7"},{colKey:"platform",title:"\u5E73\u53F0"},{colKey:"type",title:"\u7C7B\u578B"},{colKey:"default",title:"\u9ED8\u8BA4\u503C"},{colKey:"needed",title:"\u662F\u5426\u5FC5\u4F20"},{colKey:"detail.position",title:"\u8BE6\u60C5\u4FE1\u606F",ellipsis:!0}]}},methods:{onColumnChange(e){console.log(e)},onDragSortChange({newData:e}){this.columns=e}}};var Qf=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column-large tdesign-demo__table"},[n("t-space",{attrs:{direction:"vertical"}},[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.placement,callback:function(a){e.placement=a},expression:"placement"}},[n("t-radio-button",{attrs:{value:"top-left"}},[e._v("\u5DE6\u4E0A\u89D2")]),n("t-radio-button",{attrs:{value:"top-right"}},[e._v("\u53F3\u4E0A\u89D2")]),n("t-radio-button",{attrs:{value:"bottom-left"}},[e._v("\u5DE6\u4E0B\u89D2")]),n("t-radio-button",{attrs:{value:"bottom-right"}},[e._v("\u53F3\u4E0B\u89D2")])],1),n("t-space",[n("t-checkbox",{model:{value:e.bordered,callback:function(a){e.bordered=a},expression:"bordered"}},[e._v("\u662F\u5426\u663E\u793A\u8FB9\u6846")]),n("t-checkbox",{staticStyle:{"margin-left":"16px"},model:{value:e.customText,callback:function(a){e.customText=a},expression:"customText"}},[e._v("\u81EA\u5B9A\u4E49\u5217\u914D\u7F6E\u6309\u94AE")])],1)],1),n("t-table",{attrs:{rowKey:"index",data:e.data,columns:e.columns,displayColumns:e.displayColumns,columnController:{placement:e.placement,fields:["platform","type","default"],dialogProps:{preventScrollThrough:!0},buttonProps:e.customText?{content:"\u663E\u793A\u5217\u63A7\u5236",theme:"primary",variant:"base"}:void 0},pagination:{defaultPageSize:5,defaultCurrent:1,total:100},bordered:e.bordered,tableLayout:"auto",stripe:"","drag-sort":"col"},on:{"update:displayColumns":function(a){e.displayColumns=a},"update:display-columns":function(a){e.displayColumns=a},"drag-sort":e.onDragSortChange,"column-change":e.onColumnChange}})],1)},Uf=[];const fl={};var Xf=ge(Gf,Qf,Uf,!1,Zf,null,null,null);function Zf(e){for(let t in fl)this[t]=fl[t]}const im=function(){return Xf.exports}(),Yi=[];for(let e=0;e<100;e++)Yi.push({index:e,platform:e%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][e%4],default:["-","0","[]","{}"][e%4],detail:{position:`\u8BFB\u53D6 ${e} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},needed:e%4===0?"\u662F":"\u5426",description:"\u6570\u636E\u6E90"});const ev=["index","needed","detail.position"],tv={data(){return{data:Yi,columnControllerVisible:!1,displayColumns:ev.concat(["platform","type","default"]),columns:[{align:"center",className:"row",colKey:"index",title:"\u5E8F\u53F7"},{colKey:"platform",title:"\u5E73\u53F0"},{colKey:"type",title:"\u7C7B\u578B"},{colKey:"default",title:"\u9ED8\u8BA4\u503C"},{colKey:"needed",title:"\u662F\u5426\u5FC5\u4F20"},{colKey:"detail.position",title:"\u8BE6\u60C5\u4FE1\u606F",ellipsis:!0}]}},methods:{onColumnChange(e){console.log(e)}}};var nv=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column-large tdesign-demo__table"},[n("div",[n("t-button",{on:{click:function(a){e.columnControllerVisible=!0}}},[e._v("\u663E\u793A\u5217\u914D\u7F6E\u5F39\u7A97")])],1),n("t-table",{attrs:{rowKey:"index",data:e.data,columns:e.columns,displayColumns:e.displayColumns,columnControllerVisible:e.columnControllerVisible,columnController:{fields:["platform","type","default"],dialogProps:{preventScrollThrough:!0},hideTriggerButton:!0},pagination:{defaultPageSize:5,defaultCurrent:1,total:100},tableLayout:"auto",stripe:""},on:{"update:displayColumns":function(a){e.displayColumns=a},"update:display-columns":function(a){e.displayColumns=a},"update:columnControllerVisible":function(a){e.columnControllerVisible=a},"update:column-controller-visible":function(a){e.columnControllerVisible=a},"column-change":e.onColumnChange}})],1)},av=[];const vl={};var rv=ge(tv,nv,av,!1,ov,null,null,null);function ov(e){for(let t in vl)this[t]=vl[t]}const sm=function(){return rv.exports}();var lv=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column-large demo-container"},[n("div",[n("t-checkbox",{model:{value:e.hideSortTips,callback:function(a){e.hideSortTips=a},expression:"hideSortTips"}},[e._v(" \u9690\u85CF\u6392\u5E8F\u6587\u672C\u63D0\u793A ")]),n("span",{staticStyle:{"padding-left":"16px","vertical-align":"top"}},[e._v("\u6392\u5E8F\uFF1A"+e._s(e.sort))])],1),n("t-table",{attrs:{rowKey:"id",columns:e.columns,data:e.data,sort:e.sort,hideSortTips:e.hideSortTips,showSortColumnBgColor:!0,bordered:""},on:{"sort-change":e.sortChange,change:e.onChange},scopedSlots:e._u([{key:"status",fn:function(a){var r=a.row;return[r.status===0?n("p",{staticClass:"status"},[e._v("\u5065\u5EB7")]):e._e(),r.status===1?n("p",{staticClass:"status warning"},[e._v("\u8B66\u544A")]):e._e(),r.status===2?n("p",{staticClass:"status unhealth"},[e._v("\u5F02\u5E38")]):e._e()]}}])})],1)},iv=[];const sv=[{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0",width:150},{colKey:"status",title:"\u72B6\u6001",width:100,sortType:"all",sorter:!0},{colKey:"survivalTime",title:"\u5B58\u6D3B\u65F6\u95F4(s)",width:200,sortType:"all",sorter:!0},{colKey:"owner",title:"\u7BA1\u7406\u5458",width:100}],Oa=new Array(4).fill(null).map((e,t)=>({id:t+1,instance:`JQTest${t+1}`,status:[0,1,2,1][t%3],owner:["jenny;peter","jenny","peter"][t%3],survivalTime:[1e3,1e3,500,1500][t%3]})),uv={data(){return{data:Oa,columns:sv,hideSortTips:!1,sort:{sortBy:"status",descending:!0}}},methods:{sortChange(e){this.sort=e,this.request(e),console.log("sort-change",e)},onChange(e,t){console.log("change",e,t)},defaultSortChange(e){this.request(e)},request(e){const t=setTimeout(()=>{e?this.data=Oa.concat().sort((n,a)=>e.descending?a[e.sortBy]-n[e.sortBy]:n[e.sortBy]-a[e.sortBy]):this.data=Oa.concat(),clearTimeout(t)},100)}}},pl={};var cv=ge(uv,lv,iv,!1,dv,null,null,null);function dv(e){for(let t in pl)this[t]=pl[t]}const um=function(){return cv.exports}();var fv=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-container"},[n("div",{staticClass:"item"},[n("p",{staticStyle:{"margin-left":"24px"}},[e._v("\u6392\u5E8F\uFF1A"+e._s(e.sort))]),n("br"),n("t-table",{attrs:{rowKey:"id",columns:e.columns,data:e.data,sort:e.sort,multipleSort:""},on:{"sort-change":e.sortChange},scopedSlots:e._u([{key:"status",fn:function(a){var r=a.row;return[r.status===0?n("p",{staticClass:"status"},[e._v("\u5065\u5EB7")]):e._e(),r.status===1?n("p",{staticClass:"status warning"},[e._v("\u8B66\u544A")]):e._e(),r.status===2?n("p",{staticClass:"status unhealth"},[e._v("\u5F02\u5E38")]):e._e()]}}])})],1)])},vv=[];const pv=[{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0",width:150},{colKey:"status",title:"\u72B6\u6001",width:100,sortType:"all",sorter:!0},{colKey:"survivalTime",title:"\u5B58\u6D3B\u65F6\u95F4(s)",width:200,sortType:"all",sorter:!0},{colKey:"owner",title:"\u7BA1\u7406\u5458",width:100}],hv=[{id:1,instance:"JQTest1",status:0,owner:"jenny;peter",survivalTime:1e3},{id:2,instance:"JQTest2",status:1,owner:"jenny",survivalTime:1e3},{id:3,instance:"JQTest3",status:2,owner:"jenny",survivalTime:500},{id:4,instance:"JQTest4",status:1,owner:"peter",survivalTime:1500}],mv={data(){return{data:hv,columns:pv,sort:[{sortBy:"status",descending:!0},{sortBy:"survivalTime",descending:!1}]}},methods:{sortChange(e){this.sort=e,console.log("\u53D1\u8D77\u8FDC\u7A0B\u8BF7\u6C42\u8FDB\u884C\u6392\u5E8F\uFF08\u672A\u6A21\u62DF\u8BF7\u6C42\u6570\u636E\uFF09")}}},hl={};var gv=ge(mv,fv,vv,!1,bv,null,null,null);function bv(e){for(let t in hl)this[t]=hl[t]}const cm=function(){return gv.exports}(),yv=[{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0",width:150},{colKey:"status",title:"\u72B6\u6001",width:100,sortType:"all",sorter:(e,t)=>e.status-t.status},{colKey:"survivalTime",title:"\u5B58\u6D3B\u65F6\u95F4(s)",width:200,sortType:"all",sorter:(e,t)=>e.survivalTime-t.survivalTime},{colKey:"owner",title:"\u7BA1\u7406\u5458",width:100}],wv=new Array(4).fill(null).map((e,t)=>({id:t+1,instance:`JQTest${t+1}`,status:[0,1,2,1][t%3],owner:["jenny;peter","jenny","peter"][t%3],survivalTime:[1e3,1e3,500,1500][t%3]})),Cv={components:{Icon:Ss},data(){return this.$createElement,{data:wv,columns:yv,sort:{},singleSort:{sortBy:"status",descending:!0},multipleSorts:[{sortBy:"status",descending:!0}],allowMultipleSort:!1,globalLocale:{table:{sortIcon:e=>e&&e(Ys,{attrs:{size:"16px"}})}}}},watch:{allowMultipleSort:{immediate:!0,handler(e){this.sort=e?this.multipleSorts:this.singleSort}}},methods:{sortChange(e,t){console.log("sort-change",e,t),this.sort=e,this.data=t.currentDataSource},dataChange(e){console.log("data-change",e)}}};var xv=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-container t-table-demo-sort tdesign-demo__table"},[n("t-config-provider",{attrs:{globalConfig:e.globalLocale}},[n("div",{staticClass:"item"},[n("div",{staticStyle:{margin:"16px"}},[n("t-checkbox",{model:{value:e.allowMultipleSort,callback:function(a){e.allowMultipleSort=a},expression:"allowMultipleSort"}},[e._v("\u662F\u5426\u5141\u8BB8\u591A\u5B57\u6BB5\u6392\u5E8F")])],1),n("div",{staticStyle:{margin:"16px"}},[e._v("\u6392\u5E8F\uFF1A"+e._s(JSON.stringify(e.sort)||"\u6682\u65E0"))]),n("t-table",{attrs:{rowKey:"id",columns:e.columns,data:e.data,sort:e.sort,multipleSort:e.allowMultipleSort},on:{"sort-change":e.sortChange,"data-change":e.dataChange},scopedSlots:e._u([{key:"status",fn:function(a){var r=a.row;return[n("p",{staticClass:"status",class:["","warning","unhealth"][r.status]},[e._v(" "+e._s(["\u5065\u5EB7","\u8B66\u544A","\u5F02\u5E38"][r.status])+" ")])]}}])},[n("icon",{attrs:{slot:"op-column",name:"descending-order"},slot:"op-column"})],1)],1)])],1)},_v=[];const ml={};var Ov=ge(Cv,xv,_v,!1,Sv,null,null,null);function Sv(e){for(let t in ml)this[t]=ml[t]}const dm=function(){return Ov.exports}();var kv=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo__table"},[n("t-space",[n("t-checkbox",{model:{value:e.highlightSelectedRow,callback:function(a){e.highlightSelectedRow=a},expression:"highlightSelectedRow"}},[e._v("\u9AD8\u4EAE\u884C\u9009\u4E2D")]),n("t-checkbox",{model:{value:e.selectedOnRowClick,callback:function(a){e.selectedOnRowClick=a},expression:"selectedOnRowClick"}},[e._v("\u6574\u884C\u9009\u4E2D")])],1),n("t-table",{class:e.highlightSelectedRow?"tdesign-demo__select-single":"",attrs:{rowKey:"id",columns:e.columns,data:e.data,"selected-row-keys":e.selectedRowKeys},on:{"select-change":e.rehandleSelectChange,"row-click":e.onRowClick},scopedSlots:e._u([{key:"status",fn:function(a){var r=a.row;return[r.status===0?n("p",{staticClass:"status"},[e._v("\u5065\u5EB7")]):e._e(),r.status===1?n("p",{staticClass:"status unhealth"},[e._v("\u5F02\u5E38")]):e._e()]}},{key:"op-column",fn:function(){return[n("p",[e._v("\u64CD\u4F5C")])]},proxy:!0},{key:"op",fn:function(a){return[n("a",{staticClass:"link",on:{click:function(r){return e.rehandleClickOp(a)}}},[e._v("\u7BA1\u7406")]),n("a",{staticClass:"link",on:{click:function(r){return e.rehandleClickOp(a)}}},[e._v("\u5220\u9664")])]}}])})],1)},Pv=[];const Dv=new Array(5).fill(null).map((e,t)=>({id:t+100,instance:`JQTest${t+1}`,status:t%2,owner:"jenny;peter",description:"test"})),gl=({rowIndex:e})=>e===1||e===3,Tv={data(){return{highlightSelectedRow:!1,selectedOnRowClick:!1,selectedRowKeys:[102],columns:[{colKey:"row-select",type:"single",className:"demo-single-select-cell",checkProps:{allowUncheck:!0},disabled:gl,width:64},{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0",width:120},{colKey:"status",title:"\u72B6\u6001",width:100,cell:"status"},{colKey:"owner",title:"\u7BA1\u7406\u5458"},{colKey:"description",title:"\u63CF\u8FF0"},{colKey:"op",width:150,title:"op-column",cell:"op"}],data:Dv}},methods:{rehandleClickOp({text:e,row:t}){console.log(e,t)},rehandleSelectChange(e,{selectedRowData:t}){this.selectedRowKeys=e,console.log(e,t)},onRowClick({row:e,index:t}){this.selectedOnRowClick&&!gl({row:e,rowIndex:t})&&(this.selectedRowKeys=[e.id])}}},bl={};var Rv=ge(Tv,kv,Pv,!1,Ev,"a341f992",null,null);function Ev(e){for(let t in bl)this[t]=bl[t]}const fm=function(){return Rv.exports}();var $v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("t-table",{attrs:{"row-key":"tid",columns:e.columns,data:e.data,"selected-row-keys":e.selectedRowKeys},on:{"select-change":e.rehandleSelectChange},scopedSlots:e._u([{key:"status",fn:function(a){var r=a.row;return[r.status===0?n("p",{staticClass:"status"},[e._v("\u5065\u5EB7")]):e._e(),r.status===1?n("p",{staticClass:"status unhealth"},[e._v("\u5F02\u5E38")]):e._e()]}},{key:"op-column",fn:function(){return[n("p",[e._v("\u64CD\u4F5C")])]},proxy:!0},{key:"op",fn:function(a){return[n("a",{staticClass:"link",on:{click:function(r){return e.rehandleClickOp(a)}}},[e._v("\u7BA1\u7406")]),n("a",{staticClass:"link",on:{click:function(r){return e.rehandleClickOp(a)}}},[e._v("\u5220\u9664")])]}}])})],1)},Kv=[];const Av=new Array(5).fill(null).map((e,t)=>({tid:t+100,instance:`JQTest${t+1}`,status:t%2,owner:"jenny;peter",description:"test"})),Fv={data(){return{selectedRowKeys:[1],columns:[{colKey:"row-select",type:"multiple",className:"demo-multiple-select-cell",checkProps:({rowIndex:e})=>({disabled:e%2!==0}),width:64},{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0",width:120},{colKey:"status",title:"\u72B6\u6001",width:100,cell:"status"},{colKey:"owner",title:"\u7BA1\u7406\u5458"},{colKey:"description",title:"\u63CF\u8FF0"},{colKey:"op",width:150,title:"op-column",cell:"op"}],data:Av}},methods:{rehandleClickOp({text:e,row:t}){console.log(e,t)},rehandleSelectChange(e,{selectedRowData:t}){this.selectedRowKeys=e,console.log(e,t)}}},yl={};var Nv=ge(Fv,$v,Kv,!1,jv,"622076f2",null,null);function jv(e){for(let t in yl)this[t]=yl[t]}const vm=function(){return Nv.exports}();var Iv=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-table",{attrs:{data:e.data,columns:e.columns,rowKey:e.rowKey,loading:e.isLoading,pagination:e.pagination,"selected-row-keys":e.selectedRowKeys,bordered:"",stripe:""},on:{change:e.rehandleChange,"page-change":e.onPageChange,"select-change":e.onSelectChange}})},Mv=[];const Lv={data(){return{data:[],isLoading:!1,selectedRowKeys:[],columns:[{colKey:"row-select",type:"multiple",width:64},{width:200,colKey:"name",title:"\u59D3\u540D",render(e,{row:{name:t}}){return t?`${t.first} ${t.last}`:"UNKNOWN_USER"}},{width:200,colKey:"gender",title:"\u6027\u522B"},{width:200,colKey:"phone",title:"\u8054\u7CFB\u65B9\u5F0F",render(e,{row:{phone:t}}){return t}},{width:260,colKey:"email",title:"\u90AE\u7BB1",ellipsis:!0}],rowKey:"phone",tableLayout:"auto",rowClassName:"property-class",pagination:{current:1,pageSize:10,showJumper:!0,onChange:e=>{console.log("pagination.onChange",e)}}}},async mounted(){await this.fetchData({current:this.pagination.current||this.pagination.defaultCurrent,pageSize:this.pagination.pageSize||this.pagination.defaultPageSize})},methods:{async fetchData(e=this.pagination){try{this.isLoading=!0;const{current:t,pageSize:n}=e,a=new URL("https://randomuser.me/api"),r={page:t,results:n};Object.keys(r).forEach(i=>a.searchParams.append(i,r[i]));const l=await fetch(a).then(i=>i.json());this.data=l.results,this.pagination.total=120}catch{this.data=[]}this.isLoading=!1},rehandleChange(e,t){console.log("\u5206\u9875\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u7B49\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6\uFF1A",e,t)},async onPageChange(e){console.log("page-change",e),this.pagination.current=e.current,this.pagination.pageSize=e.pageSize,await this.fetchData(e)},onSelectChange(e,{selectedRowData:t}){this.selectedRowKeys=e,console.log(e,t)}}},wl={};var Bv=ge(Lv,Iv,Mv,!1,zv,null,null,null);function zv(e){for(let t in wl)this[t]=wl[t]}const pm=function(){return Bv.exports}();var Vv=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("t-table",{attrs:{rowKey:"index",data:e.data,columns:e.columns,pagination:e.pagination},on:{change:e.onChange,"page-change":e.onPageChange}})],1)},Hv=[];const qi=[],Ji=60;for(let e=0;e<Ji;e++)qi.push({index:e,platform:e%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][e%4],default:["-","0","[]","{}"][e%4],detail:{position:`\u8BFB\u53D6 ${e} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},needed:e%4===0?"\u662F":"\u5426",description:"\u6570\u636E\u6E90"});const Wv={data(){return{data:qi,columns:[{align:"center",width:"100",className:"row",colKey:"index",title:"\u5E8F\u53F7"},{width:100,colKey:"platform",title:"\u5E73\u53F0"},{colKey:"type",title:"\u7C7B\u578B"},{colKey:"default",title:"\u9ED8\u8BA4\u503C"},{colKey:"needed",title:"\u662F\u5426\u5FC5\u4F20"},{colKey:"detail.position",title:"\u8BE6\u60C5\u4FE1\u606F",width:200,ellipsis:!0}],pagination:{defaultCurrent:2,defaultPageSize:5,total:Ji,showJumper:!0}}},methods:{onChange(e,t){console.log("change:",e,t)},onPageChange(e,t){console.log("page-change:",e,t)}}},Cl={};var Yv=ge(Wv,Vv,Hv,!1,qv,null,null,null);function qv(e){for(let t in Cl)this[t]=Cl[t]}const hm=function(){return Yv.exports}(),Sa=new Array(5).fill(null).map((e,t)=>({key:String(t+1),firstName:["Eric","Gilberta","Heriberto","Lazarus","Zandra"][t%4],lastName:["Spinke","Purves","Kment","Skures","Croson"][t%4],email:["espinke0@apache.org","gpurves1@issuu.com","hkment2@nsw.gov.au","lskures3@apache.org","zcroson5@virginia.edu"][t%4],createTime:["2021-11-01","2021-12-01","2022-01-01","2022-02-01","2022-03-01"][t%4]})),Jv={data(){return{data:Sa,filterValue:{createTime:[]},bordered:!0,align:"left"}},computed:{columns(){return[{title:"FirstName",colKey:"firstName",align:this.align,filter:{type:"single",list:[{label:"anyone",value:""},{label:"Heriberto",value:"Heriberto"},{label:"Eric",value:"Eric"}]}},{title:"LastName",colKey:"lastName",sorter:!0,filter:{type:"multiple",resetValue:[],showConfirmAndReset:!0,list:[{label:"All",checkAll:!0},{label:"Skures",value:"Skures"},{label:"Purves",value:"Purves"}]}},{title:"Email",colKey:"email",filter:{type:"input",confirmEvents:["onEnter"],props:{placeholder:"\u8F93\u5165\u5173\u952E\u8BCD\u8FC7\u6EE4",clearable:!0},showConfirmAndReset:!0}},{title:"Date",colKey:"createTime",filter:{component:Ic,props:{firstDayOfWeek:7},showConfirmAndReset:!0,resetValue:[]}}]}},methods:{onFilterChange(e){console.log("filter-change",e),this.filterValue={...e,createTime:e.createTime||[]},this.request(this.filterValue)},onChange(e,t){console.log("change",e,t,"\u7B5B\u9009\u3001\u5206\u9875\u3001\u6392\u5E8F\u7B49\u529F\u80FD\u53D1\u751F\u53D8\u5316\u5747\u4F1A\u89E6\u53D1")},setFilters(){this.filterValue={},this.data=Sa},filterIcon(e){return console.log(e),e("i",["icon"])},request(e){const t=setTimeout(()=>{clearTimeout(t),this.data=Sa.filter(n=>{let a=!0;return e.firstName&&(a=n.firstName===e.firstName),a&&e.lastName&&e.lastName.length&&(a=e.lastName.includes(n.lastName)),a&&e.email&&(a=n.email.indexOf(e.email)!==-1),a&&e.createTime&&e.createTime.length&&(a=n.createTime===e.createTime),a})},100)}}};var Gv=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column tdesign-demo__table"},[n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.align,callback:function(a){e.align=a},expression:"align"}},[n("t-radio-button",{attrs:{value:"left"}},[e._v("\u5DE6\u5BF9\u9F50")]),n("t-radio-button",{attrs:{value:"center"}},[e._v("\u5C45\u4E2D\u5BF9\u9F50")]),n("t-radio-button",{attrs:{value:"right"}},[e._v("\u53F3\u5BF9\u9F50")])],1),n("t-button",{staticStyle:{"margin-left":"36px"},attrs:{variant:"text"},on:{click:e.setFilters}},[e._v("\u6E05\u9664\u7B5B\u9009\u6761\u4EF6")]),n("span",{staticStyle:{"padding-left":"36px"}},[e._v("\u5DF2\u9009\u7B5B\u9009\u6761\u4EF6\uFF1A"+e._s(e.filterValue))])],1),n("div",[n("t-checkbox",{model:{value:e.bordered,callback:function(a){e.bordered=a},expression:"bordered"}},[e._v("\u662F\u5426\u663E\u793A\u8868\u683C\u8FB9\u6846")])],1),n("t-table",{attrs:{rowKey:"key",columns:e.columns,data:e.data,"filter-value":e.filterValue,bordered:e.bordered,resizable:"","table-layout":"fixed"},on:{"filter-change":e.onFilterChange,change:e.onChange}})],1)},Qv=[];const xl={};var Uv=ge(Jv,Gv,Qv,!1,Xv,null,null,null);function Xv(e){for(let t in xl)this[t]=xl[t]}const mm=function(){return Uv.exports}();var Zv=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-table",{attrs:{rowKey:"i",bordered:!0,data:e.data,columns:e.columns,rowspanAndColspan:e.rowspanAndColspan,"table-layout":"fixed",resizable:""}})},ep=[];const tp=new Array(6).fill(null).map((e,t)=>({i:t,platform:["\u516C\u6709","\u79C1\u6709"][t%1],type:["Array<any>","String","Object","Boolean","Number"][t%4],default:["[]",'""',"{}","false","-1","0"][t%5],needed:["Y","N"][t%1],description:["\u6570\u636E\u6E90","\u63CF\u8FF0","\u590D\u6742\u7C7B\u578B","\u6807\u8BC6\u7B26","\u4F4D\u7F6E"][t%4],comment:"\u8868\u5934\u5408\u5E76"})),np={data(){return{data:tp,columns:[{className:"test",colKey:"platform",title:"\u5E73\u53F0"},{className:"row",colKey:"type",title:"\u7C7B\u578B"},{className:"test4",colKey:"default",title:"\u9ED8\u8BA4\u503C"},{className:"test3",colKey:"needed",title:"\u662F\u5426\u5FC5\u4F20"},{className:"row",colKey:"description",title:"\u5408\u5E76\u5355\u884C\u8868\u5934\u7684\u6700\u540E\u4E24\u5217",colspan:2},{colKey:"comment",title:"\u5408\u5E76\u5217"}]}},methods:{rowspanAndColspan({col:e,rowIndex:t,colIndex:n}){if(n===0&&t%2===0)return{rowspan:2};if(e.colKey==="needed"&&t===0)return{colspan:2};if(e.colKey==="type"&&t===1)return{colspan:2,rowspan:2};if(e.colKey==="default"&&t===4)return{colspan:2,rowspan:2}}}},_l={};var ap=ge(np,Zv,ep,!1,rp,null,null,null);function rp(e){for(let t in _l)this[t]=_l[t]}const gm=function(){return ap.exports}();var op=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column-large tdesign-demo-table-multi-heade tdesign-demo__tabler",staticStyle:{width:"100%"}},[n("t-space",[n("t-checkbox",{model:{value:e.bordered,callback:function(a){e.bordered=a},expression:"bordered"}},[e._v("\u663E\u793A\u8868\u683C\u8FB9\u6846")]),n("t-checkbox",{model:{value:e.fixedHeader,callback:function(a){e.fixedHeader=a},expression:"fixedHeader"}},[e._v("\u663E\u793A\u56FA\u5B9A\u8868\u5934")]),n("t-checkbox",{model:{value:e.fixedLeftCol,callback:function(a){e.fixedLeftCol=a},expression:"fixedLeftCol"}},[e._v("\u56FA\u5B9A\u5DE6\u4FA7\u5217")]),n("t-checkbox",{model:{value:e.fixedRightCol,callback:function(a){e.fixedRightCol=a},expression:"fixedRightCol"}},[e._v("\u56FA\u5B9A\u53F3\u4FA7\u5217")]),n("t-checkbox",{model:{value:e.headerAffixedTop,callback:function(a){e.headerAffixedTop=a},expression:"headerAffixedTop"}},[e._v("\u8868\u5934\u5438\u9876")])],1),n("t-table",{attrs:{"row-key":"index",data:e.data,sort:e.sortInfo,columns:e.columns,bordered:e.bordered,"max-height":e.fixedHeader?380:void 0,columnController:{displayType:"auto-width"},filterRow:function(){return null},headerAffixedTop:e.headerAffixedTop?{offsetTop:87}:!1,scroll:{type:"virtual"},"drag-sort":"col",resizable:"","table-layout":"fixed"},on:{"update:sort":function(a){e.sortInfo=a},"drag-sort":e.onDragSort,"data-change":e.onDataChange,"filter-change":e.onFilterChange}})],1)},lp=[];const Ia=[];for(let e=0;e<1e3;e++)Ia.push({index:e,platform:e%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][e%4],property:["A","B","C"][e%3],default:e,detail:{position:`\u8BFB\u53D6 ${e} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},needed:e%4===0?"\u662F":"\u5426",type_default:"-",description:"\u6570\u636E\u6E90",field1:"\u5B57\u6BB51",field2:"\u5B57\u6BB52",field3:"\u5B57\u6BB53",field4:"\u5B57\u6BB54",field5:"\u5B57\u6BB55",field6:"\u5B57\u6BB56",field7:"\u5B57\u6BB57",field8:"\u5B57\u6BB58",text:"\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6587\u672C"});function ip(e,t){return[{title:"\u5E8F\u53F7",colKey:"index",fixed:e&&"left",width:100},{title:"\u6C47\u603B\u5C5E\u6027",fixed:e&&"left",width:100,colKey:"total_info",children:[{align:"left",colKey:"platform",title:"\u5E73\u53F0",fixed:e&&"left",width:100},{title:"\u7C7B\u578B\u53CA\u9ED8\u8BA4\u503C",colKey:"type_default",fixed:e&&"left",width:100,children:[{align:"left",colKey:"type",title:"\u7C7B\u578B",fixed:e&&"left",width:110},{align:"left",colKey:"default",title:"\u9ED8\u8BA4\u503C",fixed:e&&"left",width:100,sorter:(n,a)=>n.default-a.default},{align:"left",colKey:"needed",title:"\u662F\u5426\u5FC5\u4F20",fixed:e&&"left",width:100}]}]},{colKey:"field1",title:"\u5B57\u6BB51",width:100},{colKey:"field2",title:"\u5B57\u6BB52",width:100},{colKey:"field3",title:"\u5B57\u6BB53",width:100},{colKey:"field4",title:"\u5B57\u6BB54",width:100},{title:"\u5C5E\u6027\u53CA\u8BF4\u660E",colKey:"instruction",fixed:t&&"right",width:100,children:[{align:"left",colKey:"property",title:"\u5C5E\u6027",fixed:t&&"right",width:110,filter:{type:"single",list:[{label:"any",value:""},{label:"A",value:"A"},{label:"B",value:"B"},{label:"D",value:"D"}]}},{align:"left",ellipsis:!0,colKey:"description",title:"\u8BF4\u660E",fixed:t&&"right",width:100,children:[{colKey:"field6",title:"\u5B57\u6BB56",fixed:t&&"right",width:100},{colKey:"field7",title:"\u5B57\u6BB57",fixed:t&&"right",width:100},{colKey:"text",title:"\u63CF\u8FF0",fixed:t&&"right",ellipsis:!0,width:100}]}]},{colKey:"field5",title:"\u5B57\u6BB55",fixed:t&&"right",width:100}]}const sp={data(){return{sortInfo:{},bordered:!0,fixedHeader:!0,fixedLeftCol:!1,fixedRightCol:!1,headerAffixedTop:!1,virtualScroll:!0,data:Ia}},computed:{columns(){return ip(this.fixedLeftCol,this.fixedRightCol)}},methods:{onDataChange(e){this.data=e.concat()},onFilterChange(e){this.data=Ia.filter(t=>!e.property||e.property===t.property)},onDragSort(e){console.log("\u62D6\u62FD\u6392\u5E8F\u4E8B\u4EF6\u53C2\u6570\uFF1A",e)}}},Ol={};var up=ge(sp,op,lp,!1,cp,null,null,null);function cp(e){for(let t in Ol)this[t]=Ol[t]}const bm=function(){return up.exports}(),dp={data(){return{data:[],columns:[{align:"left",width:"100",className:"row",ellipsis:!0,colKey:"type",title:"\u7C7B\u578B"},{align:"left",width:"100",className:"test",ellipsis:!0,colKey:"platform",title:"\u5E73\u53F0"},{align:"left",width:"100",className:"test2",ellipsis:!0,colKey:"property",title:"\u5C5E\u6027"},{align:"left",width:"100",className:"test4",ellipsis:!0,colKey:"default",title:"\u9ED8\u8BA4\u503C"},{align:"left",width:"100",className:"test3",ellipsis:!0,colKey:"needed",title:"\u662F\u5426\u5FC5\u4F20"},{align:"left",width:"100",className:"row",ellipsis:!0,colKey:"description",title:"\u8BF4\u660E"}],rowKey:"property",size:"small",style:{height:"100px",display:"flex",alignItems:"center",justifyContent:"center"}}},methods:{renderLoading(){const e=this.$createElement;return e("div",{class:"t-table--loading-message"},["\u8FD9\u91CC\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001"])}}};var fp=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column"},[n("t-table",{attrs:{data:e.data,columns:e.columns,rowKey:e.rowKey,size:e.size,loading:!0}}),n("t-table",{attrs:{data:[],columns:e.columns,rowKey:e.rowKey,size:e.size,loading:!0,"loading-props":{indicator:!1}}},[n("div",{staticClass:"t-table--loading-message",attrs:{slot:"loading"},slot:"loading"},[e._v("\u{1F60A} \u8FD9\u91CC\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001 \u{1F60A}")])]),n("t-table",{attrs:{data:[],columns:e.columns,rowKey:e.rowKey,size:e.size,loading:e.renderLoading}})],1)},vp=[];const Sl={};var pp=ge(dp,fp,vp,!1,hp,null,null,null);function hp(e){for(let t in Sl)this[t]=Sl[t]}const ym=function(){return pp.exports}(),mp=[{key:"1",firstName:"Eric",lastName:"Spinke",email:"espinke0@apache.org"},{key:"2",firstName:"Gilberta",lastName:"Purves",email:"gpurves1@issuu.com"},{key:"3",firstName:"Heriberto",lastName:"Kment",email:"hkment2@nsw.gov.au"},{key:"4",firstName:"Lazarus",lastName:"Skures",email:"lskures3@apache.org"},{key:"5",firstName:"Zandra",lastName:"Croson",email:"zcroson5@virginia.edu"}],gp=[{title:"FirstName",colKey:"firstName",width:"100"},{title:"LastName",colKey:"lastName",width:"100"},{title:"Email",colKey:"email",width:"250"}],bp={data(){return{data:mp,columns:gp,asyncLoading:"loading"}},computed:{loadingNode(e){return this.asyncLoading==="loading-custom"?this.customLoadingNode:this.asyncLoading}},methods:{customLoadingNode(e){return e("div",{class:"t-table__async-loading"},["\u8FD9\u662F\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001\u548C\u5185\u5BB9"])},onAsyncLoadingClick({status:e}){e==="load-more"&&(this.asyncLoading="loading")}}};var yp=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column-large tdesign-demo__table"},[n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.asyncLoading,callback:function(a){e.asyncLoading=a},expression:"asyncLoading"}},[n("t-radio-button",{attrs:{value:"load-more"}},[e._v("\u52A0\u8F7D\u66F4\u591A")]),n("t-radio-button",{attrs:{value:"loading"}},[e._v("\u52A0\u8F7D\u4E2D")]),n("t-radio-button",{attrs:{value:"loading-custom"}},[e._v("\u81EA\u5B9A\u4E49\u52A0\u8F7D\u66F4\u591A")]),n("t-radio-button",{attrs:{value:""}},[e._v("\u52A0\u8F7D\u5B8C\u6210")])],1)],1),n("t-table",{attrs:{rowKey:"key",columns:e.columns,data:e.data,asyncLoading:e.loadingNode},on:{"async-loading-click":e.onAsyncLoadingClick}})],1)},wp=[];const kl={};var Cp=ge(bp,yp,wp,!1,xp,null,null,null);function xp(e){for(let t in kl)this[t]=kl[t]}const wm=function(){return Cp.exports}(),_p={data(){const e=this.$createElement;return{columns:[{colKey:"type",title:"\u7C7B\u578B"},{colKey:"platform",title:"\u5E73\u53F0"},{colKey:"property",title:"\u5C5E\u6027"},{colKey:"default",title:"\u9ED8\u8BA4\u503C"},{colKey:"needed",title:"\u662F\u5426\u5FC5\u4F20"},{colKey:"description",title:"\u8BF4\u660E"}],rowKey:"property",empty:()=>e("span",["\u{1F60A} \u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 \u{1F60A}"])}}};var Op=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column-large"},[n("t-table",{attrs:{data:[],columns:e.columns,rowKey:e.rowKey}}),n("t-table",{attrs:{data:[],columns:e.columns,rowKey:e.rowKey},scopedSlots:e._u([{key:"empty",fn:function(){return[n("span",[e._v("\u{1F60A} \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 \u{1F60A}")])]},proxy:!0}])}),n("t-table",{attrs:{data:[],columns:e.columns,empty:e.empty,rowKey:e.rowKey}})],1)},Sp=[];const Pl={};var kp=ge(_p,Op,Sp,!1,Pp,null,null,null);function Pp(e){for(let t in Pl)this[t]=Pl[t]}const Cm=function(){return kp.exports}();var Dp=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-container t-table-demo-sort tdesign-demo__table"},[n("div",{staticClass:"item"},[n("t-table",{attrs:{rowKey:"id",columns:e.columns,data:e.data,dragSort:"row"},on:{"drag-sort":e.onDragSort},scopedSlots:e._u([{key:"status",fn:function(a){var r=a.row;return[n("p",{staticClass:"status",class:["","warning","unhealth"][r&&r.status]},[e._v(" "+e._s(["\u5065\u5EB7","\u8B66\u544A","\u5F02\u5E38"][r&&r.status])+" ")])]}}])})],1)])},Tp=[];const Rp=[{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0",width:150},{colKey:"status",title:"\u72B6\u6001",width:100},{colKey:"survivalTime",title:"\u5B58\u6D3B\u65F6\u95F4(s)",width:200},{colKey:"owner",title:"\u7BA1\u7406\u5458",width:100}],Ep=new Array(4).fill(5).map((e,t)=>({id:t+1,instance:`JQTest${t+1}`,status:[0,1,2,1][t%4],owner:["jenny;peter","jenny","jenny","peter"][t%4],survivalTime:[1e3,1e3,500,1500][t%4]})),$p={data(){return{data:[...Ep],columns:Rp}},methods:{onDragSort({currentIndex:e,current:t,targetIndex:n,target:a,data:r,newData:l,e:i}){console.log("\u91CD\u65B0\u6392\u5E8F",e,t,n,a,r,l,i),this.data=l}}},Dl={};var Kp=ge($p,Dp,Tp,!1,Ap,null,null,null);function Ap(e){for(let t in Dl)this[t]=Dl[t]}const xm=function(){return Kp.exports}(),Fp=[{colKey:"drag",title:"\u6392\u5E8F",cell:e=>e(ni),width:80},{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0"},{colKey:"status",title:"\u72B6\u6001"},{colKey:"survivalTime",title:"\u5B58\u6D3B\u65F6\u95F4(s)"},{colKey:"owner",title:"\u7BA1\u7406\u5458"}],Np=new Array(4).fill(5).map((e,t)=>({id:t+1,instance:`JQTest${t+1}`,status:[0,1,2,1][t%4],owner:["jenny;peter","jenny","jenny","peter"][t%4],survivalTime:[1e3,1e3,500,1500][t%4]})),jp={data(){return{loading:!1,data:[...Np],columns:Fp}},methods:{onDragSort(e){console.log("\u4EA4\u6362\u884C",e),this.data=e.newData}}};var Ip=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-container t-table-demo-sort tdesign-demo__table"},[n("div",[n("t-checkbox",{model:{value:e.loading,callback:function(a){e.loading=a},expression:"loading"}},[e._v("\u52A0\u8F7D\u72B6\u6001")])],1),n("div",{staticClass:"item"},[n("t-table",{attrs:{rowKey:"id",columns:e.columns,data:e.data,loading:e.loading,dragSort:"row-handler"},on:{"drag-sort":e.onDragSort},scopedSlots:e._u([{key:"status",fn:function(a){var r=a.row;return[n("p",{staticClass:"status",class:["","warning","unhealth"][r.status]},[e._v(" "+e._s(["\u5065\u5EB7","\u8B66\u544A","\u5F02\u5E38"][r.status])+" ")])]}}])})],1)])},Mp=[];const Tl={};var Lp=ge(jp,Ip,Mp,!1,Bp,null,null,null);function Bp(e){for(let t in Tl)this[t]=Tl[t]}const _m=function(){return Lp.exports}();var zp=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-container t-table-demo-sort tdesign-demo__table"},[n("div",{staticClass:"item"},[n("t-table",{attrs:{rowKey:"id",columns:e.columns,data:e.data,dragSort:"col"},on:{"drag-sort":e.onDragSort},scopedSlots:e._u([{key:"status",fn:function(a){var r=a.row;return[n("p",{staticClass:"status",class:["","warning","unhealth"][r&&r.status]},[e._v(" "+e._s(["\u5065\u5EB7","\u8B66\u544A","\u5F02\u5E38"][r&&r.status])+" ")])]}}])})],1)])},Vp=[];const Hp=[{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0",width:150},{colKey:"status",title:"\u72B6\u6001",width:100},{colKey:"survivalTime",title:"\u5B58\u6D3B\u65F6\u95F4(s)",width:200},{colKey:"owner",title:"\u7BA1\u7406\u5458",width:100}],Wp=new Array(4).fill(5).map((e,t)=>({id:t+1,instance:`JQTest${t+1}`,status:[0,1,2,1][t%4],owner:["jenny;peter","jenny","jenny","peter"][t%4],survivalTime:[1e3,1e3,500,1500][t%4]})),Yp={data(){return{data:[...Wp],columns:[...Hp]}},methods:{onDragSort(e){console.log("\u91CD\u65B0\u6392\u5E8F",e),e.sort==="col"&&(this.columns=e.newData)}}},Rl={};var qp=ge(Yp,zp,Vp,!1,Jp,null,null,null);function Jp(e){for(let t in Rl)this[t]=Rl[t]}const Om=function(){return qp.exports}(),Gp=[{colKey:"id",title:"id"},{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0"},{colKey:"survivalTime",title:"\u5B58\u6D3B\u65F6\u95F4(s)"},{colKey:"owner",title:"\u7BA1\u7406\u5458"}],Qp=[{id:1,instance:"\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C",status:0,owner:"jenny;peter",survivalTime:1e3},{id:2,instance:"\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C",status:1,owner:"jenny",survivalTime:1e3},{id:3,instance:"JQTest3",status:2,owner:"jenny",survivalTime:500},{id:4,instance:"JQTest4",status:1,owner:"peter",survivalTime:1500},{id:5,instance:"JQTest5",status:1,owner:"peter",survivalTime:1500},{id:6,instance:"JQTest6",status:1,owner:"peter",survivalTime:1500},{id:7,instance:"JQTest7",status:1,owner:"peter",survivalTime:1500},{id:8,instance:"JQTest8",status:1,owner:"peter",survivalTime:1500},{id:9,instance:"JQTest9",status:1,owner:"peter",survivalTime:1500},{id:10,instance:"JQTest10",status:1,owner:"peter",survivalTime:1500}],Up=Array.from(new Array(1e3),()=>""),Ma=[];Up.forEach((e,t)=>{const n=t%10;Ma[t]={...Qp[n],id:t+1}});const Xp={name:"LazyScroll",data(){return{data:[...Ma],columns:Gp}},methods:{reset(){this.data=[],setTimeout(()=>{this.data=Ma})}}};var Zp=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-container"},[n("div",{staticClass:"item"},[n("t-button",{staticStyle:{"margin-top":"10px"},attrs:{theme:"default"},on:{click:e.reset}},[e._v(" \u91CD\u7F6E\u8868\u683C\u6570\u636E ")]),n("br"),n("br"),n("t-table",{attrs:{"row-key":"id",columns:e.columns,data:e.data,height:300,scroll:{type:"lazy",bufferSize:10},bordered:""}})],1)])},eh=[];const El={};var th=ge(Xp,Zp,eh,!1,nh,null,null,null);function nh(e){for(let t in El)this[t]=El[t]}const Sm=function(){return th.exports}(),ah=[{colKey:"id",title:"id"},{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0"},{colKey:"survivalTime",title:"\u5B58\u6D3B\u65F6\u95F4(s)"},{colKey:"owner",title:"\u7BA1\u7406\u5458"}],rh=[{id:1,instance:"\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C",status:0,owner:"jenny;peter",survivalTime:1e3},{id:2,instance:"\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C",status:1,owner:"jenny",survivalTime:1e3},{id:3,instance:"JQTest",status:2,owner:"jenny",survivalTime:500},{id:4,instance:"JQTest",status:1,owner:"peter",survivalTime:1500},{id:5,instance:"JQTest",status:1,owner:"peter",survivalTime:1500},{id:6,instance:"JQTest",status:1,owner:"peter",survivalTime:1500},{id:7,instance:"JQTest",status:1,owner:"peter",survivalTime:1500},{id:8,instance:"JQTest",status:1,owner:"peter",survivalTime:1500},{id:9,instance:"JQTest",status:1,owner:"peter",survivalTime:1500},{id:10,instance:"JQTest",status:1,owner:"peter;peter;peter;peter;peter;peter;peter;peter;peter;peter;peter;peter;peter;peter;",survivalTime:1500}],oh=Array.from(new Array(600),()=>""),Gi=[];oh.forEach((e,t)=>{const n=t%10;Gi[t]={...rh[n],id:t+1}});const lh={name:"VirtualScroll",data(){return{data:[...Gi],columns:ah}}};var ih=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-container"},[n("div",{staticClass:"item"},[n("t-table",{attrs:{"row-key":"id",columns:e.columns,data:e.data,scroll:{type:"virtual",rowHeight:48,bufferSize:30},height:300}})],1)])},sh=[];const $l={};var uh=ge(lh,ih,sh,!1,ch,null,null,null);function ch(e){for(let t in $l)this[t]=$l[t]}const km=function(){return uh.exports}();var dh=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("t-table",{attrs:{"row-key":"key",columns:e.columns,data:e.data,"editable-cell-state":e.editableCellState,bordered:""},on:{"row-validate":e.onRowValidate}})],1)},fh=[];const vh=new Array(5).fill(null).map((e,t)=>({key:String(t+1),firstName:["Eric","Gilberta","Heriberto","Lazarus","Zandra"][t%4],framework:["Vue","React","Miniprogram","Flutter"][t%4],email:["espinke0@apache.org","gpurves1@issuu.com","hkment2@nsw.gov.au","lskures3@apache.org","zcroson5@virginia.edu"][t%4],letters:[["A"],["B","E"],["C"],["D","G","H"]][t%4],createTime:["2021-11-01","2021-12-01","2022-01-01","2022-02-01","2022-03-01"][t%4]})),Kl=[{label:"Vue Framework",value:"Vue"},{label:"React Framework",value:"React"},{label:"Miniprogram Framework",value:"Miniprogram"},{label:"Flutter Framework",value:"Flutter"}],ph={name:"TTableEditableCell",data(){return{align:"left",data:[...vh]}},computed:{columns(){return[{title:"FirstName",colKey:"firstName",align:this.align,edit:{component:_n,props:{clearable:!0,autofocus:!0},abortEditOnEvent:["onEnter"],onEdited:e=>{this.data.splice(e.rowIndex,1,e.newRowData),console.log("Edit firstName:",e),Ct.success("Success")},rules:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A"},{max:10,message:"\u5B57\u7B26\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 10",type:"warning"}],defaultEditable:!0}},{title:"Framework",colKey:"framework",cell:(e,{row:t})=>{var n;return(n=Kl.find(a=>a.value===t.framework))==null?void 0:n.label},edit:{component:wn,props:{clearable:!0,options:Kl},abortEditOnEvent:["onChange"],onEdited:e=>{this.data.splice(e.rowIndex,1,e.newRowData),console.log("Edit Framework:",e),Ct.success("Success")}}},{title:"Letters",colKey:"letters",cell:(e,{row:t})=>t.letters.join("\u3001"),edit:{component:wn,props:({col:e,row:t,rowIndex:n,colIndex:a,editedRow:r})=>(console.log(e,t,n,a,r),{multiple:!0,minCollapsedNum:1,options:[{label:"A",value:"A"},{label:"B",value:"B"},{label:"C",value:"C"},{label:"D",value:"D"},{label:"E",value:"E"},{label:"G",value:"G",show:()=>r.framework!=="React"},{label:"H",value:"H",show:()=>r.framework!=="React"}].filter(l=>l.show===void 0?!0:l.show())}),onEdited:e=>{this.data.splice(e.rowIndex,1,e.newRowData),console.log("Edit Letters:",e),Ct.success("Success")}}},{title:"Date",colKey:"createTime",edit:{component:bi,props:{mode:"date"},abortEditOnEvent:["onChange"],onEdited:e=>{this.data.splice(e.rowIndex,1,e.newRowData),console.log("Edit Date:",e),Ct.success("Success")},rules:()=>[{validator:e=>Y(e).isAfter(Y()),message:"\u53EA\u80FD\u9009\u62E9\u4ECA\u5929\u4EE5\u540E\u65E5\u671F"}]}}]}},methods:{editableCellState(e){return e.rowIndex!==0},onRowValidate(e){console.log("validate:",e)}}},Al={};var hh=ge(ph,dh,fh,!1,mh,"d6e91abc",null,null);function mh(e){for(let t in Al)this[t]=Al[t]}const Pm=function(){return hh.exports}(),gh=new Array(5).fill(null).map((e,t)=>({key:String(t+1),firstName:["Eric","Gilberta","Heriberto","Lazarus","Zandra"][t%4],framework:["Vue","React","Miniprogram","Flutter"][t%4],email:["espinke0@apache.org","gpurves1@issuu.com","hkment2@nsw.gov.au","lskures3@apache.org","zcroson5@virginia.edu"][t%4],letters:[["A"],["B","E"],["C"],["D","G","H"]][t%4],createTime:["2021-11-01","2021-12-01","2022-01-01","2022-02-01","2022-03-01"][t%4]})),bh={name:"TTableEditableCell",data(){return{align:"left",data:[...gh],editableRowKeys:["1"],currentSaveId:"",editMap:{}}},computed:{columns(){return this.$createElement,[{title:"FirstName",colKey:"firstName",align:this.align,edit:{component:_n,props:{clearable:!0,autofocus:!0,autoWidth:!0},rules:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A"},{max:10,message:"\u5B57\u7B26\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 10",type:"warning"}],showEditIcon:!1}},{title:"Framework",colKey:"framework",edit:{component:wn,props:{clearable:!0,options:[{label:"Vue",value:"Vue"},{label:"React",value:"React"},{label:"Miniprogram",value:"Miniprogram"},{label:"Flutter",value:"Flutter"}]},rules:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A"}],showEditIcon:!1}},{title:"Letters",colKey:"letters",cell:(e,{row:t})=>t.letters.join("\u3001"),edit:{component:wn,props:({col:e,row:t,rowIndex:n,colIndex:a,editedRow:r})=>(console.log(e,t,n,a,r),{multiple:!0,minCollapsedNum:1,options:[{label:"A",value:"A"},{label:"B",value:"B"},{label:"C",value:"C"},{label:"D",value:"D"},{label:"E",value:"E"},{label:"G",value:"G",show:()=>r.framework!=="React"},{label:"H",value:"H",show:()=>r.framework!=="React"}].filter(l=>l.show===void 0?!0:l.show())}),rules:[{validator:e=>e&&e.length<3,message:"\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 2 \u4E2A"}],showEditIcon:!1}},{title:"Date",colKey:"createTime",className:"t-demo-col__datepicker",edit:{component:bi,showEditIcon:!1,rules:[{validator:e=>Y(e).isAfter(Y()),message:"\u53EA\u80FD\u9009\u62E9\u4ECA\u5929\u4EE5\u540E\u65E5\u671F"}]}},{title:"Operate",colKey:"operate",width:150,cell:(e,{row:t})=>{const n=this.editableRowKeys.includes(t.key);return e("div",{class:"table-operations"},[!n&&e(et,{attrs:{theme:"primary",variant:"text","data-id":t.key},on:{click:this.onEdit}},["\u7F16\u8F91"]),n&&e(et,{attrs:{theme:"primary",variant:"text","data-id":t.key},on:{click:this.onSave}},["\u4FDD\u5B58"]),n&&e(et,{attrs:{theme:"primary",variant:"text","data-id":t.key},on:{click:this.onCancel}},["\u53D6\u6D88"])])}}]}},methods:{onEdit(e){const{id:t}=e.currentTarget.dataset;this.editableRowKeys.includes(t)||this.editableRowKeys.push(t)},updateEditState(e){const t=this.editableRowKeys.findIndex(n=>n===e);this.editableRowKeys.splice(t,1)},onCancel(e){const{id:t}=e.currentTarget.dataset;this.updateEditState(t),this.$refs.tableRef.clearValidateData()},onSave(e){const{id:t}=e.currentTarget.dataset;this.currentSaveId=t,this.$refs.tableRef.validateRowData(t).then(n=>{if(console.log("Event Table Promise Validate:",n),n.result.length){const a=n.result[0];Ct.error(`${a.col.title} ${a.errorList[0].message}`);return}if(n.trigger==="parent"&&!n.result.length){const a=this.editMap[this.currentSaveId];a&&(this.data.splice(a.rowIndex,1,a.editedRow),Ct.success("\u4FDD\u5B58\u6210\u529F")),this.updateEditState(this.currentSaveId)}})},onRowValidate(e){console.log("Event Table Row Validate:",e)},onValidateTableData(){this.$refs.tableRef.validateTableData().then(e=>{console.log("Promise Table Data Validate:",e);const t=Object.keys(e.result),n=e.result[t[0]];n&&Ct.warning(n[0].message)})},onValidate(e){console.log("Event Table Data Validate:",e)},onRowEdit(e){var o;const{row:t,rowIndex:n,col:a,value:r}=e,i={...((o=this.editMap[t.key])==null?void 0:o.editedRow)||t,[a.colKey]:r};this.editMap[t.key]={...e,editedRow:i}}}};var yh=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"t-table-demo__editable-row"},[n("div",[n("t-button",{on:{click:e.onValidateTableData}},[e._v("\u6821\u9A8C\u5168\u90E8")])],1),n("br"),n("t-table",{ref:"tableRef",attrs:{"row-key":"key",columns:e.columns,data:e.data,"editable-row-keys":e.editableRowKeys,"vertical-align":"top",bordered:""},on:{"row-edit":e.onRowEdit,"row-validate":e.onRowValidate,validate:e.onValidate}})],1)},wh=[];const Fl={};var Ch=ge(bh,yh,wh,!1,xh,null,null,null);function xh(e){for(let t in Fl)this[t]=Fl[t]}const Dm=function(){return Ch.exports}(),La=5;function ka(e,t){return{id:e,key:`\u6211\u662F ${e}_${t} \u53F7`,platform:e%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][e%4],default:["-","0","[]","{}"][e%4],detail:{position:`\u8BFB\u53D6 ${e} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},needed:e%4===0?"\u662F":"\u5426",description:"\u6570\u636E\u6E90"}}function Ba(e=1){const t=[];for(let n=0;n<La;n++){const a=ka(n,e);a.list=n===0?[]:new Array(2).fill(null).map((r,l)=>{const i=100*l+(n+1)*10,o={...a,id:i,key:`\u6211\u662F ${i}_${e} \u53F7`};return o.list=new Array(3).fill(null).map((s,u)=>{const d=i*1e3+100*s+(u+1)*10;return{...a,id:d,key:`\u6211\u662F ${d}_${e} \u53F7`,list:!0}}),o}),t.push(a)}return t.push({...ka(66666,e),list:!0,key:"\u6211\u662F\u61D2\u52A0\u8F7D\u8282\u70B9 66666\uFF0C\u70B9\u6211\u4F53\u9A8C"}),t.push({...ka(88888,e),list:!0,key:"\u6211\u662F\u61D2\u52A0\u8F7D\u8282\u70B9 88888\uFF0C\u70B9\u6211\u4F53\u9A8C "}),t}const _h=Ba(),Oh={components:{TEnhancedTable:ji},data(){return this.$createElement,{customTreeExpandAndFoldIcon:!1,data:_h,lazyLoadingData:null,expandAll:!1,pagination:{current:1,pageSize:10,total:La},defaultPagination:{defaultCurrent:1,defaultPageSize:10,total:La},displayColumns:["drag","id","key","platform","operate"],columns:[{colKey:"drag",title:"\u6392\u5E8F",cell:e=>e(ni),width:80},{colKey:"id",title:"\u7F16\u53F7",ellipsis:!0,width:100},{width:180,colKey:"key",title:"\u540D\u79F0",ellipsis:!0},{colKey:"platform",title:"\u5E73\u53F0",width:80,cell:(e,{row:t})=>t.platform==="New"?e("t-tag",{attrs:{size:"small",theme:"primary"}},[t.platform]):t.platform},{colKey:"operate",width:340,title:"\u64CD\u4F5C",align:"center",cell:(e,{row:t})=>e("div",{class:"tdesign-table-demo__table-operations"},[e("t-button",{attrs:{variant:"text"},on:{click:()=>this.appendTo(t)}},["\u63D2\u5165"]),e("t-button",{attrs:{variant:"text"},on:{click:()=>this.insertBefore(t)}},["\u524D\u63D2"]),e("t-button",{attrs:{variant:"text"},on:{click:()=>this.insertAfter(t)}},["\u540E\u63D2"]),e("t-button",{attrs:{variant:"text"},on:{click:()=>this.onEditClick(t)}},["\u66F4\u65B0"]),e("t-button",{attrs:{variant:"text"},on:{click:()=>this.onLookUp(t)}},["\u67E5\u770B"]),e("t-popconfirm",{attrs:{content:"\u786E\u8BA4\u5220\u9664\u5417"},on:{confirm:()=>this.onDeleteConfirm(t)}},[e("t-button",{attrs:{variant:"text"}},["\u5220\u9664"])])])}]}},computed:{treeExpandIcon(){return this.customTreeExpandAndFoldIcon?this.treeExpandAndFoldIconRender:this.lazyLoadingTreeIconRender}},methods:{resetData(){this.data=Ba(),this.$refs.table.resetData(this.data)},onEditClick(e){const t={...e,platform:"New",type:"Symbol",default:"undefined"};this.$refs.table.setData(e.key,t),this.$message.success("\u6570\u636E\u5DF2\u66F4\u65B0")},onDeleteConfirm(e){this.$refs.table.remove(e.key),this.$message.success("\u5220\u9664\u6210\u529F")},onLookUp(e){const t=this.$refs.table.getData(e.key),n="\u5F53\u524D\u884C\u5168\u90E8\u6570\u636E\uFF0C\u5305\u542B\u8282\u70B9\u8DEF\u5F84\u3001\u7236\u8282\u70B9\u3001\u5B50\u8282\u70B9\u3001\u662F\u5426\u5C55\u5F00\u3001\u662F\u5426\u7981\u7528\u7B49";this.$message.success(`\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B${n}`),console.log(`${n}\uFF1A`,t)},appendTo(e){const t=Math.round(Math.random()*Math.random()*1e3)+1e4;this.$refs.table.appendTo(e.key,{id:t,key:`\u6211\u662F ${t} \u53F7`,platform:"\u79C1\u6709",type:"Number"}),this.$message.success(`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u6211\u662F ${t} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B`)},appendMultipleDataTo(e){const t=Math.round(Math.random()*Math.random()*1e3)+1e4,n=Math.round(Math.random()*Math.random()*1e3)+1e4,a=[{id:t,key:`\u6211\u662F ${t} \u53F7`,platform:"\u79C1\u6709",type:"Number"},{id:n,key:`\u6211\u662F ${n} \u53F7`,platform:"\u79C1\u6709",type:"Number"}];this.$refs.table.appendTo(e==null?void 0:e.key,a),Ct.success(`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u6211\u662F ${t} \u548C ${n} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B`)},insertBefore(e){const t=Math.round(Math.random()*Math.random()*1e3)+1e4;this.$refs.table.insertBefore(e.key,{id:t,key:`\u6211\u662F ${t} \u53F7`,platform:"\u79C1\u6709",type:"Number"}),this.$message.success(`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u6211\u662F ${t} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B`)},insertAfter(e){const t=Math.round(Math.random()*Math.random()*1e3)+1e4;this.$refs.table.insertAfter(e.key,{id:t,key:`\u6211\u662F ${t} \u53F7`,platform:"\u79C1\u6709",type:"Number"}),this.$message.success(`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u6211\u662F ${t} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B`)},onPageChange(e){this.pagination.current=e.current,this.pagination.pageSize=e.pageSize,this.data=Ba(e.current)},onRowToggle(){["\u6211\u662F 1_1 \u53F7","\u6211\u662F 2_1 \u53F7","\u6211\u662F 3_1 \u53F7","\u6211\u662F 4_1 \u53F7"].forEach(t=>{const n=this.$refs.table.getData(t);this.$refs.table.toggleExpandData(n)})},treeExpandAndFoldIconRender(e,{type:t,row:n}){return this.lazyLoadingData&&this.lazyLoadingData.id===(n==null?void 0:n.id)?e(bn,{attrs:{size:"14px"}}):e(t==="expand"?mn:na)},lazyLoadingTreeIconRender(e,t){var r;const{type:n,row:a}=t;return((r=this.lazyLoadingData)==null?void 0:r.id)===(a==null?void 0:a.id)?e(bn,{attrs:{size:"14px"}}):e(n==="expand"?Gl:Ql)},onTreeExpandChange(e){if(console.log(e.rowState.expanded?"\u5C55\u5F00":"\u6536\u8D77",e),e.row.list===!0){this.lazyLoadingData=e.row;const t=setTimeout(()=>{this.appendMultipleDataTo(e.row),this.lazyLoadingData=null,clearTimeout(t)},200)}},getTreeNode(){const e=this.$refs.table.getTreeNode();console.log(e),this.$message.success("\u6811\u5F62\u7ED3\u6784\u83B7\u53D6\u6210\u529F\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B")},onExpandAllToggle(){this.expandAll=!this.expandAll,this.expandAll?this.$refs.table.expandAll():this.$refs.table.foldAll()},appendToRoot(){const e=Math.round(Math.random()*10010);this.$refs.table.appendTo("",{id:e,key:`\u6211\u662F ${e}_${1} \u53F7`,platform:e%2===0?"\u5171\u6709":"\u79C1\u6709",type:["String","Number","Array","Object"][e%4],default:["-","0","[]","{}"][e%4],detail:{position:`\u8BFB\u53D6 ${e} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C`},needed:e%4===0?"\u662F":"\u5426",description:"\u6570\u636E\u6E90"})},onAbnormalDragSort(e){console.log(e),e.code===1001&&this.$message.warning("\u4E0D\u540C\u5C42\u7EA7\u7684\u5143\u7D20\uFF0C\u4E0D\u5141\u8BB8\u8C03\u6574\u987A\u5E8F")},onDragSort(e){console.log("onDragSort:",e)},beforeDragSort(e){return console.log("beforeDragSort:",e),!0}}};var Sh=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("t-button",{on:{click:e.appendToRoot}},[e._v("\u6DFB\u52A0\u6839\u8282\u70B9")]),n("t-button",{staticStyle:{"margin-left":"16px"},attrs:{theme:"default"},on:{click:e.resetData}},[e._v("\u91CD\u7F6E/\u66F4\u65B0\u6570\u636E")]),n("t-button",{staticStyle:{"margin-left":"16px"},attrs:{theme:"default"},on:{click:e.onRowToggle}},[e._v("\u4EFB\u610F\u8282\u70B9\u5C55\u5F00/\u6536\u8D77")]),n("t-button",{staticStyle:{"margin-left":"16px"},attrs:{theme:"default"},on:{click:e.onExpandAllToggle}},[e._v(e._s(e.expandAll?"\u6536\u8D77\u5168\u90E8":"\u5C55\u5F00\u5168\u90E8"))]),n("t-button",{staticStyle:{"margin-left":"16px"},attrs:{theme:"default"},on:{click:e.getTreeNode}},[e._v("\u83B7\u53D6\u5168\u90E8\u6811\u5F62\u7ED3\u6784")])],1),n("br"),n("div",[n("t-checkbox",{staticStyle:{"vertical-align":"middle"},model:{value:e.customTreeExpandAndFoldIcon,callback:function(a){e.customTreeExpandAndFoldIcon=a},expression:"customTreeExpandAndFoldIcon"}},[e._v(" \u81EA\u5B9A\u4E49\u6298\u53E0/\u5C55\u5F00\u56FE\u6807 ")])],1),n("br"),n("t-enhanced-table",{ref:"table",attrs:{rowKey:"key","drag-sort":"row-handler",data:e.data,columns:e.columns,tree:{childrenKey:"list",treeNodeColumnIndex:2},treeExpandAndFoldIcon:e.treeExpandIcon,pagination:e.pagination,beforeDragSort:e.beforeDragSort,columnController:{placement:"bottom-left",fields:["id","platform","operate"],dialogProps:{preventScrollThrough:!0}}},on:{"page-change":e.onPageChange,"abnormal-drag-sort":e.onAbnormalDragSort,"drag-sort":e.onDragSort,"tree-expand-change":e.onTreeExpandChange}})],1)},kh=[];const Nl={};var Ph=ge(Oh,Sh,kh,!1,Dh,null,null,null);function Dh(e){for(let t in Nl)this[t]=Nl[t]}const Tm=function(){return Ph.exports}(),za=[];for(let e=0;e<5;e++){const t={key:e,instance:`JQTest${e}`,status:e%2,owner:e%2===0?"jenny":"peter",description:"important."};t.childrenList=new Array(5).fill(null).map((n,a)=>{const r=100*a+(e+1)*10,l={...t,status:r%3,key:r,instance:`JQTest${r}`};return l.childrenList=new Array(5).fill(null).map((i,o)=>{const s=r*1e3+100*i+(o+1)*10;return{...t,status:s%3,key:s,instance:`JQTest${s}`}}),l}),za.push(t)}const Th={components:{TEnhancedTable:ji},data(){return this.$createElement,{checkStrictly:"true",selectedRowKeys:[],expandedRowKeys:[],columns:[{colKey:"row-select",type:"multiple",checkProps:({row:e})=>({disabled:!e.childrenList&&e.status!==0}),width:20},{colKey:"instance",title:"\u96C6\u7FA4\u540D\u79F0",width:200},{colKey:"status",title:"\u72B6\u6001",width:100,cell:(e,{row:t})=>t.status===0?e("p",{class:"status"},["\u5065\u5EB7"]):e("p",{class:"status unhealth"},["\u5F02\u5E38"])},{colKey:"owner",title:"\u7BA1\u7406\u5458"},{colKey:"description",title:"\u63CF\u8FF0"}],data:za}},watch:{checkStrictly(){this.selectedRowKeys=[],this.data=oa(za)}},methods:{rehandleClickOp({text:e,row:t}){console.log(e,t)},rehandleSelectChange(e,{selectedRowData:t}){this.selectedRowKeys=e,console.log(e,t)},expandedRowRender(e,{row:t}){return e("div",["\u8FD9\u662F\u5C55\u5F00\u9879\u6570\u636E\uFF0C\u6211\u662F ",t.key," \u53F7"])},onExpandChange(e){this.expandedRowKeys=e},getTreeExpandedRow(){const e=this.$refs.enhancedTableRef.getTreeExpandedRow("unique");console.log("\u884C\u552F\u4E00\u6807\u8BC6\u503C\uFF1A",e);const t=this.$refs.enhancedTableRef.getTreeExpandedRow("data");console.log("\u884C\u6570\u636E\uFF1A",t);const n=this.$refs.enhancedTableRef.getTreeExpandedRow("all");console.log("\u5168\u90E8\u884C\u4FE1\u606F\uFF1A",n),Ct.success("\u83B7\u53D6\u6210\u529F\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B")}}};var Rh=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"t-table-tree-select-demo"},[n("t-space",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.checkStrictly,callback:function(a){e.checkStrictly=a},expression:"checkStrictly"}},[n("t-radio-button",{attrs:{value:"true"}},[e._v("\u7236\u5B50\u884C\u9009\u4E2D\u72EC\u7ACB")]),n("t-radio-button",{attrs:{value:"false"}},[n("t-popup",{attrs:{content:"\u300C\u7236\u5B50\u884C\u9009\u4E2D\u5173\u8054\u300D\u7531\u4E8E\u8868\u683C\u6570\u636E\u7684\u7279\u6B8A\u6027\uFF0C\u7236\u8282\u70B9\u9009\u4E2D\u6216\u8005\u53D6\u6D88\u9009\u4E2D\uFF0C\u4F1A\u5F71\u54CD\u5B50\u8282\u70B9\uFF1B\u4F46\u5B50\u8282\u70B9\u9009\u4E2D\u6216\u53D6\u6D88\u4E0D\u5F71\u54CD\u7236\u5143\u7D20"}},[e._v(" \u7236\u5B50\u884C\u9009\u4E2D\u5173\u8054 ")])],1)],1),n("t-button",{attrs:{theme:"default"},on:{click:e.getTreeExpandedRow}},[e._v("\u83B7\u53D6\u6811\u5F62\u7ED3\u6784\u5C55\u5F00\u7684\u8282\u70B9")])],1),n("br"),n("t-enhanced-table",{ref:"enhancedTableRef",attrs:{"row-key":"key",expandedRow:e.expandedRowRender,"expanded-row-keys":e.expandedRowKeys,columns:e.columns,data:e.data,tree:{childrenKey:"childrenList",checkStrictly:e.checkStrictly==="true"},"selected-row-keys":e.selectedRowKeys},on:{"expand-change":e.onExpandChange,"select-change":e.rehandleSelectChange}})],1)},Eh=[];const jl={};var $h=ge(Th,Rh,Eh,!1,Kh,null,null,null);function Kh(e){for(let t in jl)this[t]=jl[t]}const Rm=function(){return $h.exports}(),Em=`<template>
  <t-space direction="vertical">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <div>
      <t-radio-group v-model="size" variant="default-filled">
        <t-radio-button value="small">\u5C0F\u5C3A\u5BF8</t-radio-button>
        <t-radio-button value="medium">\u4E2D\u5C3A\u5BF8</t-radio-button>
        <t-radio-button value="large">\u5927\u5C3A\u5BF8</t-radio-button>
      </t-radio-group>
    </div>

    <t-space>
      <t-checkbox v-model="stripe">\u663E\u793A\u6591\u9A6C\u7EB9</t-checkbox>
      <t-checkbox v-model="bordered">\u663E\u793A\u8868\u683C\u8FB9\u6846</t-checkbox>
      <t-checkbox v-model="hover">\u663E\u793A\u60AC\u6D6E\u6548\u679C</t-checkbox>
      <t-checkbox v-model="tableLayout">\u5BBD\u5EA6\u81EA\u9002\u5E94</t-checkbox>
      <t-checkbox v-model="showHeader">\u663E\u793A\u8868\u5934</t-checkbox>
    </t-space>

    <!-- \u5F53\u6570\u636E\u4E3A\u7A7A\u9700\u8981\u5360\u4F4D\u65F6\uFF0C\u4F1A\u663E\u793A cellEmptyContent -->
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :stripe="stripe"
      :bordered="bordered"
      :hover="hover"
      :size="size"
      :table-layout="tableLayout ? 'auto' : 'fixed'"
      :pagination="pagination"
      :showHeader="showHeader"
      cellEmptyContent="-"
    ></t-table>
  </t-space>
</template>
<script lang="jsx">
const data = [];
const total = 28;
for (let i = 0; i < total; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['0', '[]'][i % 5],
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  });
}
export default {
  data() {
    return {
      data,
      size: 'medium',
      tableLayout: false,
      stripe: true,
      bordered: true,
      hover: false,
      showHeader: true,
      columns: [
        {
          // \u5E8F\u53F7\u5217\uFF0C\u8BBE\u7F6E colKey = serial-number \u5373\u53EF
          colKey: 'serial-number',
          title: '\u5E8F\u53F7',
          width: '100',
          // \u5BF9\u9F50\u65B9\u5F0F
          align: 'center',
          // \u8BBE\u7F6E\u5217\u7C7B\u540D
          className: 'custom-column-class-name',
          // \u8BBE\u7F6E\u5217\u5C5E\u6027
          attrs: {
            'data-id': 'first-column',
            style: {},
          },
        },
        {
          width: 100,
          colKey: 'platform',
          title: '\u5E73\u53F0',
        },
        {
          colKey: 'type',
          title: '\u7C7B\u578B',
        },
        {
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
        },
        {
          colKey: 'needed',
          title: '\u662F\u5426\u5FC5\u4F20',
        },
        {
          colKey: 'detail.position',
          title: '\u8BE6\u60C5\u4FE1\u606F',
          width: 200,
          /**
           * 1.\u5185\u5BB9\u8D85\u51FA\u65F6\uFF0C\u662F\u5426\u663E\u793A\u7701\u7565\u53F7\u3002\u503C\u4E3A true\uFF0C\u5219\u6D6E\u5C42\u9ED8\u8BA4\u663E\u793A\u5355\u5143\u683C\u5185\u5BB9\uFF1B
           * 2.\u503C\u7C7B\u578B\u4E3A Function \u5219\u81EA\u5B9A\u4E49\u6D6E\u5C42\u663E\u793A\u5185\u5BB9\uFF1B
           * 3.\u503C\u7C7B\u578B\u4E3A Object\uFF0C\u5219\u81EA\u52A8\u900F\u4F20\u5C5E\u6027\u5230 Popup \u7EC4\u4EF6\u3002
           */
          ellipsis: true,
          ellipsisTitle: false,

          // \u900F\u4F20\u7701\u7565\u5185\u5BB9\u6D6E\u5C42 Popup \u7EC4\u4EF6\u5168\u90E8\u7279\u6027\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF01\uFF01\uFF01
          // ellipsis: { placement: 'bottom', destroyOnClose: false },

          // \u5B8C\u5168\u81EA\u5B9A\u4E49 ellipsis \u6D6E\u5C42\u7684\u6837\u5F0F\u548C\u5185\u5BB9\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF01\uFF01\uFF01
          // ellipsis: (h, {
          //   row, col, rowIndex, colIndex,
          // }) => {
          //   if (rowIndex % 2) {
          //     return <div>is even row {rowIndex + 1}, with data {row.detail.position}</div>;
          //   }
          //   return <div>is odd row {rowIndex + 1}, with data {row.detail.position}</div>;
          // },
        },
      ],
      /** \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u4E0E\u5206\u9875\u7EC4\u4EF6\u5BF9\u9F50 */
      pagination: {
        defaultCurrent: 2,
        defaultPageSize: 5,
        total,
      },
    };
  },
};
<\/script>
`,$m=`<template>
  <div class="t-demo__style">
    <!-- row-class-name \u8BBE\u7F6E\u884C\u7C7B\u540D -->
    <t-table row-key="id" :data="data" :columns="columns" :row-class-name="getRowClassName">
      <template #footerSummary>
        <div class="t-table__row-filter-inner">\u6C47\u603B\uFF1A\u8FD1\u671F\u6570\u636E\u6CE2\u52A8\u8F83\u5927</div>
      </template>
    </t-table>
  </div>
</template>

<script>
const data = [];
const total = 5;
for (let i = 0; i < total; i++) {
  data.push({
    id: i,
    framework: ['tdesign-vue', 'tdesign-react', 'tdesign-vue-next'][i % 3],
    data: ['100,000', '21,514', '7,884', '1,290'][i % 4],
    ringRatio: ['8%', '30%', '75%', '200%'][i % 4],
    yearRatio: ['10%', '20%', '80%', '100%'][i % 4],
  });
}

export default {
  data() {
    return {
      data,
      columns: [
        {
          colKey: 'serial-number',
          title: '\u5E8F\u53F7',
          align: 'center',
          width: 80,
        },
        { colKey: 'framework', title: '\u6846\u67B6' },
        {
          colKey: 'data',
          title: '\u6570\u636E',
          align: 'right',
          // \u8BBE\u7F6E\u5355\u5143\u683C\u5185\u8054\u6837\u5F0F
          attrs: ({ type, row }) => ({
            style:
              type === 'td' && row.data === '21,514'
                ? {
                  color: 'green',
                  fontWeight: 600,
                  backgroundColor: 'var(--td-brand-color-1)',
                  fontSize: '16px',
                }
                : undefined,
          }),
        },
        {
          colKey: 'ringRatio',
          title: '\u73AF\u6BD4',
          align: 'right',
          // \u8BBE\u7F6E\u5355\u5143\u683C\u7C7B\u540D
          className: ({ type, row }) => {
            if (type === 'td' && row.ringRatio === '200%') {
              return 'custom-cell-class-name';
            }
            return '';
          },
        },
        {
          colKey: 'yearRatio',
          title: '\u540C\u6BD4',
          align: 'right',
          // \u8BBE\u7F6E\u5217\u7C7B\u540D
          className: 'last-column-class-name',
        },
      ],
    };
  },

  methods: {
    getRowClassName({ rowIndex }) {
      if (rowIndex === 2) return 'custom-third-class-name';
      return '';
    },
  },
};
<\/script>

<style>
.t-demo__style .t-table .custom-third-class-name > td {
  color: green;
  font-weight: bold;
}

.t-demo__style .t-table td.last-column-class-name {
  color: orange;
  font-weight: bold;
}

.t-table td.custom-cell-class-name {
  color: orange;
  font-size: 18px;
  font-weight: bold;
}
</style>
`,Km=`<template>
  <div>
    <t-table row-key="id" :data="data" :columns="columns" />
  </div>
</template>

<script lang="jsx">
import { MessagePlugin } from 'tdesign-vue';
import { FileCopyIcon } from 'tdesign-icons-vue';

// thanks to https://www.zhangxinxu.com/wordpress/2021/10/js-copy-paste-clipboard/
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.style.position = 'fixed';
    textarea.style.clip = 'rect(0 0 0 0)';
    textarea.style.top = '10px';
    textarea.value = text;
    textarea.select();
    document.execCommand('copy', true);
    document.body.removeChild(textarea);
  }
  MessagePlugin.success('\u6587\u672C\u590D\u5236\u6210\u529F');
}

const data = [];
const total = 5;
for (let i = 0; i < total; i++) {
  data.push({
    id: i + 1,
    desc: ['\u5355\u5143\u683C\u6587\u672C\u8D85\u51FA\u7701\u7565\u8BBE\u7F6E', '\u8FD9\u662F\u666E\u901A\u6587\u672C\u7684\u8D85\u51FA\u7701\u7565'][i % 2],
    link: 'Long link text. Popup content is pure text',
    something: '\u4EC5\u6807\u9898\u7701\u7565',
    // \u900F\u4F20 Tooltip Props \u5230\u6D6E\u5C42\u7EC4\u4EF6
    ellipsisProps: 'Setting ellipsis tooltip to be light',
    // \u5B8C\u5168\u81EA\u5B9A\u4E49\u8D85\u51FA\u7701\u7565\u7684 Tips \u5185\u5BB9
    ellipsisContent: 'Custom Ellipsis Content',
    propsAndContent1: 'Setting props and content at the same time',
    propsAndContent2: 'Setting props and content at the same time',
  });
}

export default {
  data() {
    return {
      data,
      columns: [
        // {
        //   title: 'ID',
        //   colKey: 'id',
        //   width: 80,
        // },
        {
          title: 'Description',
          colKey: 'desc',
          ellipsis: true,
        },
        {
          title: '\u8FD9\u662F\u4E00\u4E2A\u5F88\u957F\u5F88\u957F\u7684\u6807\u9898',
          colKey: 'something',
          width: 120,
          ellipsisTitle: true,
        },
        {
          title: 'Link',
          colKey: 'link',
          // \u8D85\u51FA\u7701\u7565\u7684\u5185\u5BB9\u663E\u793A\u7EAF\u6587\u672C\uFF0C\u4E0D\u5E26\u4EFB\u4F55\u6837\u5F0F\u548C\u5143\u7D20
          ellipsis: (h, { row }) => row.link,
          // \u6CE8\u610F\u8FD9\u79CD JSX \u5199\u6CD5\u9700\u8BBE\u7F6E <script lang="jsx" setup>
          cell: (h, { row }) => (
            <a href="/vue-next/components/table" target="_blank">
              {row.link}
            </a>
          ),
        },
        {
          title: 'Ellipsis Props',
          colKey: 'ellipsisProps',
          // \u6D6E\u5C42\u6D45\u8272\u80CC\u666F\uFF0C\u65B9\u5411\u9ED8\u8BA4\u671D\u4E0B\u51FA\u73B0
          ellipsis: {
            theme: 'light',
            placement: 'bottom',
          },
        },
        {
          title: 'Ellipsis Content',
          colKey: 'ellipsisContent',
          // ellipsis \u5B9A\u4E49\u8D85\u51FA\u7701\u7565\u7684\u6D6E\u5C42\u5185\u5BB9\uFF0Ccell \u5B9A\u4E49\u5355\u5143\u683C\u5185\u5BB9
          ellipsis: (h, { row }) => (
            <div>
              {row.ellipsisContent}
              <FileCopyIcon
                style={{ cursor: 'pointer', marginLeft: '4px' }}
                onClick={() => copyToClipboard(row.ellipsisContent)}
              />
            </div>
          ),
        },
        {
          title: 'Props & Content',
          colKey: 'propsAndContent1',
          // \u652F\u6301\u540C\u65F6\u8BBE\u7F6E tooltipProps \u548C \u6D6E\u5C42\u5185\u5BB9,
          ellipsis: {
            props: {
              theme: 'light',
              placement: 'bottom-right',
            },
            content: (h, { row }) => (
              <div>
                <p>
                  <b>Tooltip1:</b> {row.propsAndContent1}
                </p>
                <p>
                  <b>Tooltip2:</b> {row.propsAndContent2}
                </p>
              </div>
            ),
          },
        },
      ],
    };
  },
};
<\/script>
`,Am=`<template>
  <div>
    <div>
      <t-radio-group v-model="tableLayout" variant="default-filled">
        <t-radio-button value="fixed">table-layout: fixed</t-radio-button>
        <t-radio-button value="auto">table-layout: auto</t-radio-button>
      </t-radio-group>
    </div>
    <br /><br />
    <div><t-checkbox v-model="fixedTopAndBottomRows">\u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C</t-checkbox></div>
    <br /><br />
    <!-- \u5982\u679C\u5E0C\u671B\u8868\u683C\u5217\u5BBD\u81EA\u9002\u5E94\uFF0C\u8BBE\u7F6E \`table-layout: auto\` \u5373\u53EF\u3002\u5982\u679C\u5217\u5B57\u6BB5\u8FC7\u591A\u8D85\u51FA\u8868\u683C\u5BBD\u5EA6\uFF0C\u8FD8\u9700\u540C\u65F6\u8BBE\u7F6E table-content-width -->
    <!-- fixedRows: [2, 2] \u8868\u793A\u51BB\u7ED3\u8868\u683C\u7684\u5934\u4E24\u884C\u548C\u5C3E\u4E24\u884C -->
    <!-- footData \u53EF\u4EE5\u662F\u591A\u884C\uFF0C\u5747\u652F\u6301\u56FA\u5B9A\u5728\u5E95\u90E8 -->
    <t-table
      rowKey="index"
      :data="data"
      :footData="[{}]"
      :columns="columns"
      :table-layout="tableLayout"
      :max-height="fixedTopAndBottomRows ? 500 : 300"
      :fixedRows="fixedTopAndBottomRows ? [2, 2] : undefined"
      bordered
    ></t-table>
  </div>
</template>
<script>
const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  });
}
export default {
  data() {
    return {
      tableLayout: 'fixed',
      // \u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C
      fixedTopAndBottomRows: false,
      data,
      columns: [
        {
          width: 120,
          colKey: 'platform',
          title: '\u5E73\u53F0',
          foot: '\u6C47\u603B',
        },
        {
          width: 120,
          colKey: 'type',
          title: '\u7C7B\u578B',
          foot: 'Number(5)',
        },
        {
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
          foot: '-',
        },
        {
          colKey: 'needed',
          title: '\u5FC5\u4F20',
          foot: '\u5426(6)',
        },
        {
          colKey: 'detail.position',
          title: '\u8BE6\u60C5\u4FE1\u606F',
          width: 200,
          ellipsis: true,
          foot: '-',
        },
        {
          colKey: 'description',
          title: '\u8BF4\u660E',
          foot: '\u6570\u636E(10)',
        },
      ],
    };
  },
};
<\/script>
`,Fm=`<template>
  <div class="tdesign-demo-block-column tdesign-demo__table" style="max-width: 1200px">
    <div>
      <t-radio-group v-model="leftFixedColumn" variant="default-filled">
        <t-radio-button :value="1">\u5DE6\u4FA7\u56FA\u5B9A\u4E00\u5217</t-radio-button>
        <t-radio-button :value="2">\u5DE6\u4FA7\u56FA\u5B9A\u4E24\u5217</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-radio-group v-model="rightFixedColumn" variant="default-filled">
        <t-radio-button :value="1">\u53F3\u4FA7\u56FA\u5B9A\u4E00\u5217</t-radio-button>
        <t-radio-button :value="2">\u53F3\u4FA7\u56FA\u5B9A\u4E24\u5217</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-radio-group v-model="tableLayout" variant="default-filled">
        <t-radio-button value="fixed">table-layout: fixed</t-radio-button>
        <t-radio-button value="auto">table-layout: auto</t-radio-button>
      </t-radio-group>
      <t-checkbox v-model="emptyData" style="margin-left: 16px; vertical-align: middle">\u7A7A\u6570\u636E</t-checkbox>
    </div>

    <!-- \u5982\u679C\u5E0C\u671B\u8868\u683C\u5217\u5BBD\u81EA\u9002\u5E94\uFF0C\u8BBE\u7F6E \`table-layout: auto\` \u5373\u53EF\u3002\u8FD9\u79CD\u6A21\u5F0F\u4E0B\u7684\u56FA\u5B9A\u5217\uFF0C\u5FC5\u987B\u6307\u5B9A tableContentWidth -->
    <t-table
      rowKey="index"
      :data="emptyData ? [] : data"
      :columns="columns"
      :table-layout="tableLayout"
      :table-content-width="tableLayout === 'fixed' ? undefined : '1200px'"
      bordered
      resizable
    >
      <template #operation="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">\u5220\u9664</a>
      </template>
    </t-table>
  </div>
</template>
<script>
const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  });
}
export default {
  data() {
    return {
      data,
      tableLayout: 'fixed',
      leftFixedColumn: 2,
      rightFixedColumn: 1,
      emptyData: false,
    };
  },
  computed: {
    columns() {
      return [
        {
          align: 'center',
          width: 80,
          colKey: 'index',
          title: '\u5E8F\u53F7',
          fixed: 'left',
        },
        {
          colKey: 'platform',
          title: '\u5E73\u53F0',
          width: 100,
          fixed: this.leftFixedColumn >= 2 ? 'left' : undefined,
        },
        {
          colKey: 'type',
          title: '\u7C7B\u578B',
          width: 150,
          // fixed: 'left',
        },
        {
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
          // width: 150,
        },
        {
          colKey: 'description',
          title: '\u8BF4\u660E',
          width: 100,
        },
        {
          colKey: 'needed',
          title: '\u662F\u5426\u5FC5\u4F20',
          width: 150,
          // fixed: 'right',
        },
        {
          colKey: 'operation',
          title: '\u64CD\u4F5C',
          width: 100,
          cell: 'operation',
          fixed: this.rightFixedColumn >= 2 ? 'right' : undefined,
        },
        {
          colKey: 'detail.position',
          title: '\u8BE6\u60C5\u4FE1\u606F',
          width: 120,
          fixed: 'right',
          // \u5141\u8BB8\u81EA\u5B9A\u4E49\u6D6E\u5C42 Popup \u5168\u90E8\u5C5E\u6027
          ellipsis: { placement: 'bottom-right' },
        },
      ];
    },
  },
};
<\/script>

<style lang="less" scoped>
.tdesign-demo-block-column {
  width: 100%;
}
</style>
`,Nm=`<template>
  <!-- \u7236\u5143\u7D20\u5BBD\u5EA6\u4E0D\u80FD\u8D85\u8FC7 100% -->
  <div class="tdesign-demo-block-column tdesign-demo__table" style="width: 100%">
    <div>
      <t-radio-group v-model="tableLayout" variant="default-filled">
        <t-radio-button value="fixed">table-layout: fixed</t-radio-button>
        <t-radio-button value="auto">table-layout: auto</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-checkbox v-model="fixedTopAndBottomRows">\u662F\u5426\u51BB\u7ED3\u9996\u5C3E\u4E24\u884C</t-checkbox>
      <t-checkbox v-model="stripe">\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9</t-checkbox>
      <!-- TODO\uFF1A\u865A\u62DF\u6EDA\u52A8\u5F00\u542F\u4E0E\u5173\u95ED\u652F\u6301\u52A8\u6001\u54CD\u5E94 -->
      <!-- <t-checkbox v-model="virtualScroll">\u5F00\u542F\u865A\u62DF\u6EDA\u52A8</t-checkbox> -->
    </div>

    <!-- \u5982\u679C\u5E0C\u671B\u8868\u683C\u5217\u5BBD\u81EA\u9002\u5E94\uFF0C\u8BBE\u7F6E \`table-layout: auto\` \u5373\u53EF\u3002\u9700\u540C\u65F6\u8BBE\u7F6E table-content-width -->
    <!-- fixedRows: [2, 2] \u8868\u793A\u51BB\u7ED3\u8868\u683C\u7684\u5934\u4E24\u884C\u548C\u5C3E\u4E24\u884C -->
    <!-- footData \u53EF\u4EE5\u662F\u591A\u884C\uFF0C\u5747\u652F\u6301\u56FA\u5B9A\u5728\u5E95\u90E8 -->
    <t-table
      rowKey="index"
      :data="data"
      :footData="[{}]"
      :columns="columns"
      :table-layout="tableLayout"
      :table-content-width="tableLayout === 'fixed' ? undefined : '1600px'"
      :max-height="fixedTopAndBottomRows ? 500 : 300"
      :fixedRows="fixedTopAndBottomRows ? [2, 2] : undefined"
      :scroll="virtualScroll ? { type: 'virtual' } : undefined"
      :stripe="stripe"
      bordered
      resizable
    >
      <template #operation="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">\u5220\u9664</a>
      </template>
    </t-table>
  </div>
</template>
<script>
function getData(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      index: i,
      platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
      type: ['String', 'Number', 'Array', 'Object'][i % 4],
      default: ['-', '0', '[]', '{}'][i % 4],
      detail: {
        position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
        position1: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
      },
      description: '\u6570\u636E\u6E90',
      needed: i % 4 === 0 ? '\u662F' : '\u5426',
    });
  }
  return data;
}

export default {
  data() {
    return {
      virtualScroll: false,
      fixedTopAndBottomRows: false,
      stripe: false,
      tableLayout: 'fixed',
      data: getData(14),
      columns: [
        {
          align: 'center',
          width: 100,
          colKey: 'index',
          title: '\u5E8F\u53F7',
          fixed: 'left',
          foot: '\u603B\u8FF0',
        },
        {
          colKey: 'platform',
          title: '\u5E73\u53F0',
          width: 120,
          foot: '\u516C\u6709(5)',
        },
        {
          colKey: 'type',
          title: '\u7C7B\u578B',
          width: 120,
          foot: 'Number(5)',
        },
        {
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
          width: 150,
          foot: '-',
        },
        {
          colKey: 'detail.position',
          title: '\u8BE6\u60C5\u4FE1\u606F',
          width: 250,
          foot: '-',
        },
        {
          colKey: 'description',
          title: '\u8BF4\u660E',
          width: 120,
          foot: '\u6570\u636E(10)',
        },
        {
          colKey: 'needed',
          title: '\u5FC5\u4F20',
          foot: '\u5426(6)',
          width: 120,
        },
        {
          colKey: 'operation',
          title: '\u64CD\u4F5C',
          width: 100,
          cell: 'operation',
          fixed: 'right',
        },
      ],
    };
  },
  watch: {
    virtualScroll(val) {
      this.data = val ? getData(2000) : getData(15);
    },
  },
  methods: {
    rehandleClickOp({ text, row }) {
      console.log(text, row);
    },
  },
};
<\/script>

<style lang="less" scoped>
.link {
  cursor: pointer;
}
</style>
`,jm=`<template>
  <div class="tdesign-demo__table">
    <t-table :data="data" :columns="columns" rowKey="property" verticalAlign="top">
      <!-- \u63D2\u69FD\u65B9\u5F0F \u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF1Acell \u7684\u503C\u4E3A\u63D2\u69FD\u540D\u79F0\uFF0C\u53C2\u6570\u6709\uFF1A{col, colIndex, row, rowIndex}  -->
      <template #type-slot-name="{ col, row }"> \u81EA\u5B9A\u4E49\u63D2\u69FD\u540D\u79F0\uFF1A{{ row[col.colKey] }} </template>

      <!-- \u63D2\u69FD\u65B9\u5F0F \u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF0C colKey \u7684\u503C\u9ED8\u8BA4\u4E3A\u63D2\u69FD\u540D\u79F0  -->
      <template #platform="{ row }">
        <attach-icon /><a href="#" class="link">{{ row.platform }}</a
        >\uFF08\u63D2\u69FD\u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF09
      </template>
    </t-table>
  </div>
</template>
<script lang="jsx">
import { AttachIcon } from 'tdesign-icons-vue';

export default {
  components: {
    AttachIcon,
  },
  data() {
    return {
      data: [
        {
          platform: '\u516C\u6709',
          property: 'data',
          type: 'any[]',
          default: '[]',
          needed: 'Y',
          description: '\u6570\u636E\u6E90',
        },
        {
          platform: '\u516C\u6709',
          property: 'rowkey',
          type: 'String',
          default: '-1',
          needed: 'N',
          description: '\u6307\u5B9Arowkey',
        },
      ],
      columns: [
        {
          colKey: 'type',
          title: '\u7C7B\u578B',
          // type-slot-name \u4F1A\u88AB\u7528\u4E8E\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u7684\u63D2\u69FD\u540D\u79F0
          cell: 'type-slot-name',
        },
        {
          // \u6CA1\u6709 cell \u7684\u60C5\u51B5\u4E0B\uFF0C platform \u4F1A\u88AB\u7528\u4F5C\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u7684\u63D2\u69FD\u540D\u79F0
          colKey: 'platform',
          title: '\u5E73\u53F0',
        },
        {
          colKey: 'property',
          title: '\u5C5E\u6027\u540D',
          cell: (h, { col, row }) => <div>\u4F7F\u7528 cell \u65B9\u6CD5\u81EA\u5B9A\u4E49\u5355\u5143\u683C\uFF1A{row[col.colKey]}</div>,
        },
        {
          colKey: 'description',
          // render \u5373\u53EF\u6E32\u67D3\u8868\u5934\uFF0C\u4E5F\u53EF\u4EE5\u6E32\u67D3\u5355\u5143\u683C\u3002\u4F46 cell \u53EA\u80FD\u6E32\u67D3\u5355\u5143\u683C\uFF0Ctitle \u53EA\u80FD\u6E32\u67D3\u8868\u5934
          render(h, context) {
            const { type, rowIndex, colIndex } = context;
            if (type === 'title') return 'render';
            return \`render \u65B9\u6CD5\u6E32\u67D3\u5355\u5143\u683C: \${rowIndex}-\${colIndex}\`;
          },
        },
      ],
    };
  },
};
<\/script>

<style scoped>
.link {
  color: #0052d9;
  text-decoration: none;
}
</style>
`,Im=`<template>
  <t-table :data="data" :columns="columns" rowKey="property">
    <!-- \u81EA\u5B9A\u4E49\u8868\u5934\uFF0Ctitle\u503C\u4E3A\u63D2\u69FD\u540D\u79F0  -->
    <template #title-slot-name> <app-icon /> \u7C7B\u578B </template>
  </t-table>
</template>
<script lang="jsx">
import { AppIcon } from 'tdesign-icons-vue';

export default {
  components: {
    AppIcon,
  },
  data() {
    return {
      data: [
        {
          platform: '\u6807\u9898\u4F7F\u7528 title \u65B9\u6CD5\u81EA\u5B9A\u4E49',
          property: 'data',
          type: '\u6807\u9898\u662F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49',
          default: '[]',
          needed: 'Y',
          description: '\u6570\u636E\u6E90',
        },
        {
          platform: '\u6807\u9898\u4F7F\u7528 title \u65B9\u6CD5\u81EA\u5B9A\u4E49',
          property: 'rowkey',
          type: '\u63D2\u69FD\u540D\u79F0\u4E3A title \u7684\u503C',
          default: '-1',
          needed: 'N',
          description: '\u6307\u5B9Arowkey',
        },
      ],
      columns: [
        {
          colKey: 'type',
          // title-slot-name \u8868\u793A\u5F53\u524D\u5217\u63D2\u69FD\u540D\u79F0
          title: 'title-slot-name',
        },
        {
          colKey: 'platform',
          // \u4F7F\u7528 title \u81EA\u5B9A\u4E49\u6807\u9898
          title: (h, { colIndex }) => <b style="color: #0052d9">{['', '\u6807\u9898'][colIndex]}</b>,
        },
        {
          colKey: 'property',
          // render \u53EF\u4EE5\u6E32\u67D3\u8868\u5934\uFF0C\u4E5F\u53EF\u4EE5\u6E32\u67D3\u5355\u5143\u683C\u3002\u4F46 title \u53EA\u80FD\u6E32\u67D3\u8868\u5934\uFF0Ccell \u53EA\u80FD\u6E32\u67D3\u5355\u5143\u683C
          render(h, context) {
            const { type, row, col } = context;
            return {
              title: '\u5C5E\u6027\u540D',
              cell: row && row[col.colKey],
            }[type];
          },
        },
      ],
    };
  },
};
<\/script>
`,Mm=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <div>
      <!-- \u8868\u5C3E\u6709 3 \u79CD\u65B9\u5F0F -->
      <t-radio-group v-model="footerType" variant="default-filled">
        <t-radio-button value="normal">\u666E\u901A\u8868\u5C3E</t-radio-button>
        <t-radio-button value="full">\u901A\u680F\u8868\u5C3E</t-radio-button>
        <t-radio-button value="custom">\u81EA\u5B9A\u4E49\u8868\u5C3E\u5408\u5E76\u5217</t-radio-button>
      </t-radio-group>
    </div>
    <!-- footData \u4E4B\u6240\u4EE5\u662F\u6570\u7EC4\uFF0C\u662F\u4E3A\u4E86\u652F\u6301\u591A\u884C\u8868\u5C3E\u6570\u636E -->
    <t-table
      rowKey="index"
      bordered
      :data="data"
      :columns="columns"
      :foot-data="['normal', 'custom'].includes(footerType) ? footData : []"
      :rowClassName="rowClassName"
      :rowspanAndColspanInFooter="footerType === 'custom' ? rowspanAndColspanInFooter : undefined"
    >
      <!-- \u5982\u679C\u662F\u901A\u680F\u8868\u5C3E\uFF0C\u53EA\u9700\u8BBE\u7F6E footerSummary\uFF0C\u652F\u6301\u540C\u540D Props \u5C5E\u6027 footerSummary -->
      <!-- \u901A\u680F\u8868\u5C3E\u548C\u666E\u901A\u8868\u5C3E\uFF0C\u5141\u8BB8\u540C\u65F6\u5B58\u5728 -->
      <template #footerSummary>
        <div class="t-table__row-filter-inner" v-if="footerType === 'full'">\u901A\u680F\u603B\u7ED3\u884C\u4FE1\u606F</div>
      </template>
      <template #t-foot-required> <b>\u5FC5\u4F20(\u63D2\u69FD)</b> </template>
    </t-table>
  </div>
</template>
<script lang="jsx">
const data = [];
for (let i = 0; i < 3; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    required: i % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  });
}
export default {
  data() {
    return {
      data,
      footerType: 'normal',
      // \u8868\u5C3E\u6709\u4E00\u884C\u6570\u636E
      footData: [
        {
          index: '123',
          type: '\u5168\u90E8\u7C7B\u578B',
          default: '',
          description: '-',
        },
      ],
      columns: [
        {
          align: 'center',
          width: '100',
          className: 'row',
          colKey: 'index',
          title: '\u5E8F\u53F7',
          foot: () => <b style="color: rgb(0, 82, 217)">\u8868\u5C3E</b>,
        },
        {
          width: 100,
          colKey: 'platform',
          title: '\u5E73\u53F0',
          foot: (h, { rowIndex }) => <div style="width: 100%; text-align: center">\u7B2C {rowIndex + 1} \u884C</div>,
        },
        {
          colKey: 'type',
          title: '\u7C7B\u578B',
        },
        {
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
          foot: (h, { row }) => <span>{row.default || '\u7A7A'}</span>,
        },
        {
          colKey: 'required',
          title: '\u662F\u5426\u5FC5\u4F20',
          width: 150,
          // \u4F7F\u7528\u63D2\u69FD\u6E32\u67D3\uFF0C\u63D2\u69FD\u540D\u79F0\u4E3A 't-foot-required'
          foot: 't-foot-required',
        },
        {
          colKey: 'detail.position',
          title: '\u8BE6\u60C5\u4FE1\u606F',
          width: 200,
          ellipsis: true,
          foot: () => <div>\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u8868\u5C3E\u4FE1\u606F</div>,
        },
      ],
    };
  },

  methods: {
    // type \u53EF\u9009\u503C\uFF1Afoot \u548C body
    rowClassName({ type }) {
      if (type === 'foot') return 't-tdesign__custom-footer-tr';
      return 't-tdesign__custom-body-tr';
    },

    rowspanAndColspanInFooter({ rowIndex, colIndex }) {
      // \u4E2D\u95F4\u5217\u5408\u5E76\uFF0C\u6536\u5C3E\u4E24\u5217\u4E0D\u5408\u5E76
      if (rowIndex === 0 && colIndex === 1) return { colspan: this.columns.length - 2 };
      return {};
    },
  },
};
<\/script>
`,Lm=`<template>
  <!-- \u6CE8\u610F\u7EC4\u4EF6\u7236\u5143\u7D20\u7684\u5BBD\u5EA6 -->
  <div class="tdesign-demo-block-column-large tdesign-demo__table tdesign-demo__table-affix" style="width: 100%">
    <div>
      <t-checkbox v-model="headerAffixedTop">\u8868\u5934\u5438\u9876</t-checkbox>
      <t-checkbox v-model="footerAffixedBottom" style="margin-left: 32px">\u8868\u5C3E\u5438\u5E95</t-checkbox>
      <t-checkbox v-model="horizontalScrollAffixedBottom" style="margin-left: 32px">\u6EDA\u52A8\u6761\u5438\u5E95</t-checkbox>
      <t-checkbox v-model="paginationAffixedBottom" style="margin-left: 32px">\u5206\u9875\u5668\u5438\u5E95</t-checkbox>
      <t-checkbox v-model="fixedLeftColumn" style="margin-left: 32px">\u56FA\u5B9A\u5DE6\u4FA7\u5217</t-checkbox>
      <t-checkbox v-model="fixedRightColumn" style="margin-left: 32px">\u56FA\u5B9A\u53F3\u4FA7\u5217</t-checkbox>
    </div>
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :footData="footData"
      :rowClassName="rowClassName"
      :pagination="{ defaultCurrent: 1, defaultPageSize: 5, total: TOTAL }"
      :headerAffixedTop="{ offsetTop: 87, zIndex: 1000 }"
      :footerAffixedBottom="
        footerAffixedBottom ? { offsetBottom: paginationAffixedBottom ? 60 : 0, zIndex: 1000 } : false
      "
      :horizontalScrollAffixedBottom="
        horizontalScrollAffixedBottom ? { offsetBottom: paginationAffixedBottom ? 61 : 0, zIndex: 1000 } : false
      "
      :paginationAffixedBottom="paginationAffixedBottom"
      table-layout="fixed"
      dragSort="col"
      bordered
      resizable
      @drag-sort="onDragSortChange"
    >
      <template #t-foot-required> \u63D2\u69FD\u6E32\u67D3\u8868\u5C3E </template>
    </t-table>
  </div>
</template>
<script lang="jsx">
function getData(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      index: i,
      platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
      type: ['String', 'Number', 'Array', 'Object'][i % 4],
      default: ['-', '0', '[]', '{}'][i % 4],
      detail: {
        position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
      },
      required: i % 4 === 0 ? '\u662F' : '\u5426',
      description: '\u6570\u636E\u6E90',
      expo: 235245,
      click: 1653,
      ctr: '12%',
    });
  }
  return data;
}

const TOTAL = 38;

function getColumns(h, { fixedLeftColumn, fixedRightColumn }) {
  return [
    {
      align: 'center',
      className: 'row',
      colKey: 'index',
      title: '\u5E8F\u53F7',
      foot: () => <b style="color: rgb(0, 82, 217)">\u8868\u5C3E</b>,
      fixed: fixedLeftColumn ? 'left' : undefined,
    },
    {
      colKey: 'platform',
      title: '\u5E73\u53F0',
      foot: (h, { rowIndex }) => <span>\u7B2C {rowIndex + 1} \u884C</span>,
    },
    {
      colKey: 'type',
      title: '\u7C7B\u578B',
    },
    {
      colKey: 'expo',
      title: '\u66DD\u5149',
      foot: '-',
    },
    {
      colKey: 'click',
      title: '\u70B9\u51FB',
      foot: '-',
    },
    {
      colKey: 'ctr',
      title: '\u70B9\u51FB\u7387',
      foot: '-',
    },
    {
      colKey: 'default',
      title: '\u9ED8\u8BA4\u503C',
      foot: (h, { row }) => <span>{row.default || '\u7A7A'}</span>,
    },
    {
      colKey: 'required',
      title: '\u662F\u5426\u5FC5\u4F20',
      // \u4F7F\u7528\u63D2\u69FD\u6E32\u67D3\uFF0C\u63D2\u69FD\u540D\u79F0\u4E3A 't-foot-required'
      foot: 't-foot-required',
    },
    {
      colKey: 'detail.position',
      title: '\u8BE6\u60C5\u4FE1\u606F',
      ellipsis: true,
      foot: () => <div>\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u8868\u5C3E\u4FE1\u606F</div>,
    },
    {
      colKey: 'operation',
      title: '\u64CD\u4F5C',
      cell: () => '\u67E5\u770B',
      width: 80,
      foot: '-',
      fixed: fixedRightColumn ? 'right' : undefined,
    },
  ];
}

export default {
  data() {
    return {
      data: getData(TOTAL),
      TOTAL,
      // \u91CD\u8981\uFF1A\u5982\u679C\u5728\u9884\u6E32\u67D3\u573A\u666F\u4E0B\uFF0C\u521D\u6B21\u6E32\u67D3\u7684\u8868\u683C\u5BBD\u5EA6\u548C\u6700\u7EC8\u5448\u73B0\u5BBD\u5EA6\u4E0D\u4E00\u6837\uFF0C\u8BF7\u5F02\u6B65\u8BBE\u7F6E\u8868\u5934\u5438\u9876
      headerAffixedTop: true,
      footerAffixedBottom: true,
      fixedLeftColumn: true,
      fixedRightColumn: true,
      horizontalScrollAffixedBottom: false,
      paginationAffixedBottom: false,
      // \u8868\u5C3E\u6709\u4E00\u884C\u6570\u636E
      footData: [{ index: 'footer-row-1', type: '\u5168\u90E8\u7C7B\u578B', description: '-' }],
      columns: [],
    };
  },

  watch: {
    // \u5E95\u90E8\u6EDA\u52A8\u6761 \u548C Footer \u65E0\u9700\u540C\u65F6\u51FA\u73B0\uFF0C\u4E8C\u9009\u4E00\u5373\u53EF
    horizontalScrollAffixedBottom(val) {
      val && (this.footerAffixedBottom = false);
    },
    // \u5E95\u90E8\u6EDA\u52A8\u6761 \u548C Footer \u65E0\u9700\u540C\u65F6\u51FA\u73B0\uFF0C\u4E8C\u9009\u4E00\u5373\u53EF
    footerAffixedBottom(val) {
      val && (this.horizontalScrollAffixedBottom = false);
    },
    // \u5DE6\u4FA7\u56FA\u5B9A\u5217\u53D1\u751F\u53D8\u5316\u65F6
    fixedLeftColumn: {
      handler(val) {
        this.columns = getColumns(this.$createElement, {
          fixedLeftColumn: val,
          fixedRightColumn: this.fixedRightColumn,
        });
      },
      immediate: true,
    },
    // \u53F3\u4FA7\u56FA\u5B9A\u5217\u53D1\u751F\u53D8\u5316\u65F6
    fixedRightColumn(val) {
      this.columns = getColumns(this.$createElement, {
        fixedLeftColumn: this.fixedLeftColumn,
        fixedRightColumn: val,
      });
    },
  },

  methods: {
    // type \u53EF\u9009\u503C\uFF1Afoot \u548C body
    rowClassName({ type }) {
      if (type === 'foot') return 't-tdesign__custom-footer-tr';
      return 't-tdesign__custom-body-tr';
    },
    onDragSortChange({ newData }) {
      this.columns = newData;
    },
  },
};
<\/script>

<style>
/*
 * table-layout: auto \u6A21\u5F0F\u4E0B\uFF0Ctable \u5143\u7D20\u7684\u5BBD\u5EA6\u8BBE\u7F6E\u5F88\u91CD\u8981\u5F88\u91CD\u8981\u3002
 * \u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u5217\u591A\u4E86\u4E4B\u540E\u4F1A\u6324\u5728\u4E00\u8D77
 * **/
.tdesign-demo__table-affix table {
  width: 1200px;
}

.tdesign-demo__table-affix .t-table {
  max-width: 800px;
}
</style>
`,Bm=`<template>
  <div class="tdesign-demo-block-column tdesign-demo__table" style="width: 100%">
    <!-- t-config-provider \u4E00\u822C\u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u67D0\u4E2A\u7EC4\u4EF6\u7684\u7279\u6027\uFF0C\u6B64\u4EE3\u7801\u793A\u4F8B \u793A\u8303\u4E86\u5982\u4F55\u5BF9\u8868\u683C\u6269\u5C55\u56FE\u6807\u8FDB\u884C\u7EDF\u4E00\u914D\u7F6E -->
    <!-- \`globalLocale.table.expandIcon\` \u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u5C55\u5F00\u7BAD\u5934\u56FE\u6807 -->
    <!-- <t-config-provider :globalLocale="globalLocale"> -->

    <!-- expanded-row-keys \u4E3A\u53D7\u63A7\u5C5E\u6027 -->
    <!-- default-expanded-row-keys \u4E3A\u975E\u53D7\u63A7\u5C5E\u6027 -->

    <div>
      <t-radio-group v-model="expandControl" variant="default-filled">
        <t-radio-button value="true">\u663E\u793A\u5C55\u5F00\u56FE\u6807</t-radio-button>
        <t-radio-button value="false">\u9690\u85CF\u5C55\u5F00\u56FE\u6807</t-radio-button>
        <t-radio-button value="custom">\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807</t-radio-button>
      </t-radio-group>
    </div>

    <div>
      <t-checkbox v-model="expandOnRowClick">\u5141\u8BB8\u70B9\u51FB\u884C\u4E4B\u540E\u5C55\u5F00/\u6536\u8D77</t-checkbox>
      <t-checkbox v-model="fixedColumns" style="margin-left: 32px">\u56FA\u5B9A\u5217</t-checkbox>
      <t-checkbox v-model="emptyData" style="margin-left: 32px">\u7A7A\u6570\u636E</t-checkbox>
    </div>

    <!-- :defaultExpandedRowKeys="defaultExpandedRowKeys" -->
    <t-table
      row-key="id"
      :columns="columns"
      :data="emptyData ? [] : data"
      :expanded-row-keys="expandedRowKeys"
      :expanded-row="expandedRow"
      :expandIcon="expandIcon"
      :expandOnRowClick="expandOnRowClick"
      :horizontalScrollAffixedBottom="true"
      table-layout="auto"
      tableContentWidth="1200"
      @expand-change="rehandleExpandChange"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status unhealth">\u5F02\u5E38</p>
      </template>
      <template #op-column><p>\u64CD\u4F5C</p></template>
      <template #op="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">\u7BA1\u7406</a>
        <a class="link" @click="rehandleClickOp(slotProps)">\u5220\u9664</a>
      </template>
    </t-table>

    <!-- </t-config-provider> -->

    <!-- !! \u4E5F\u53EF\u4EE5\u4F7F\u7528\u5177\u540D\u63D2\u69FD \`expandedRow\` \u81EA\u5B9A\u4E49\u5C55\u5F00\u884C\u5185\u5BB9 !! -->
    <!-- <template #expandedRow="{ row }">
      <div class="more-detail">
        <p class="title"><b>\u96C6\u7FA4\u540D\u79F0:</b></p><p class="content">{{row.instance}}</p><br/>
        <p class="title"><b>\u7BA1\u7406\u5458:</b></p><p class="content">{{row.owner}}</p><br/>
        <p class="title"><b>\u63CF\u8FF0:</b></p><p class="content">{{row.description}}</p>
      </div>
    </template> -->
  </div>
</template>

<script lang="jsx">
import { ChevronRightIcon, ChevronRightCircleIcon } from 'tdesign-icons-vue';

const getColumns = (isFixedColumn) => [
  { colKey: 'instance', title: '\u96C6\u7FA4\u540D\u79F0', fixed: isFixedColumn ? 'left' : '' },
  {
    colKey: 'status',
    title: '\u72B6\u6001',
    cell: 'status',
  },
  { colKey: 'owner', title: '\u7BA1\u7406\u5458' },
  { colKey: 'description', title: '\u63CF\u8FF0' },
  { colKey: 'field1', title: '\u5B57\u6BB5 1' },
  { colKey: 'field2', title: '\u5B57\u6BB5 2' },
  { colKey: 'field3', title: '\u5B57\u6BB5 3' },
  { colKey: 'field4', title: '\u5B57\u6BB5 4' },
  { colKey: 'field5', title: '\u5B57\u6BB5 5' },
  { colKey: 'field6', title: '\u5B57\u6BB5 6' },
  {
    colKey: 'op',
    title: 'op-column',
    cell: 'op',
    fixed: isFixedColumn ? 'right' : '',
  },
];

const data = new Array(5).fill(null).map((item, index) => ({
  id: index + 100,
  instance: \`JQTest\${index + 1}\`,
  status: index % 2,
  owner: 'jenny;peter',
  description: 'description',
  field1: 'field1',
  field2: 'field2',
  field3: 'field3',
  field4: 'field4',
  field5: 'field5',
  field6: 'field6',
}));

export default {
  data() {
    return {
      expandControl: 'true',
      expandIcon: true,
      expandOnRowClick: true,
      fixedColumns: false,
      emptyData: false,
      data,
      // \u6709\u54EA\u4E9B data.id \u5728 expandedRowKeys \u4E2D\uFF0C\u5C31\u663E\u793A\u8FD9\u4E9B id \u5BF9\u5E94\u7684\u884C
      expandedRowKeys: [102],
      // defaultExpandedRowKeys: [102, 104],
      expandedRow: (h, { row }) => (
        <div class="more-detail">
          <p class="title">
            <b>\u96C6\u7FA4\u540D\u79F0:</b>
          </p>
          <p class="content">{row.instance}</p>
          <br />
          <p class="title">
            <b>\u7BA1\u7406\u5458:</b>
          </p>
          <p class="content">{row.owner}</p>
          <br />
          <p class="title">
            <b>\u63CF\u8FF0:</b>
          </p>
          <p class="content">{row.description}</p>
        </div>
      ),
      globalLocale: {
        table: {
          expandIcon: (h) => h && <ChevronRightIcon />,
        },
      },
    };
  },
  computed: {
    columns() {
      return getColumns(this.fixedColumns);
    },
  },
  watch: {
    expandControl(val) {
      if (val === 'true') {
        // expandIcon \u9ED8\u8BA4\u4E3A true\uFF0C\u8868\u793A\u663E\u793A\u9ED8\u8BA4\u5C55\u5F00\u56FE\u6807
        this.expandIcon = true;
      } else if (val === 'false') {
        // expandIcon \u503C\u4E3A false\uFF0C\u5219\u8868\u793A\u9690\u85CF\u5168\u90E8\u5C55\u5F00\u56FE\u6807
        this.expandIcon = false;
      } else if (val === 'custom') {
        // \u5B8C\u5168\u81EA\u7531\u63A7\u5236\u8868\u683C\u7684\u6BCF\u4E00\u884C\u662F\u5426\u663E\u793A\u5C55\u5F00\u56FE\u6807\uFF0C\u4EE5\u53CA\u663E\u793A\u4EC0\u4E48\u5185\u5BB9
        this.expandIcon = (h, { row, index }) => {
          // \u7B2C\u4E00\u884C\u4E0D\u663E\u793A\u5C55\u5F00\u56FE\u6807
          if (index === 0) return false;
          // \u7B2C\u4E09\u884C\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807
          if (row.id === 103) return <ChevronRightIcon />;
          // \u5176\u4ED6\u884C\uFF0C\u4F7F\u7528\u8868\u683C\u540C\u6B3E\u5C55\u5F00\u56FE\u6807
          return <ChevronRightCircleIcon />;
        };
      }
    },
  },
  methods: {
    rehandleClickOp(data) {
      console.log(data);
    },
    rehandleExpandChange(value, params) {
      this.expandedRowKeys = value;
      console.log('rehandleExpandChange', params);
    },
  },
};
<\/script>

<style lang="less" scoped>
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}
.link {
  cursor: pointer;
  margin-right: 15px;
}
.status {
  position: relative;
  color: #00a870;
  margin-left: 10px;
  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    background-color: #00a870;
    width: 6px;
    height: 6px;
    margin-left: -10px;
    border-radius: 50%;
  }
}
.status.unhealth {
  color: #e34d59;
  &::before {
    background-color: #e34d59;
  }
}
.more-detail {
  > p {
    display: inline-block;
    margin: 5px;
  }
  > p.title {
    width: 100px;
  }
}
</style>
`,zm=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <t-space direction="vertical">
      <t-radio-group v-model="placement" variant="default-filled">
        <t-radio-button value="top-left">\u5DE6\u4E0A\u89D2</t-radio-button>
        <t-radio-button value="top-right">\u53F3\u4E0A\u89D2</t-radio-button>
        <t-radio-button value="bottom-left">\u5DE6\u4E0B\u89D2</t-radio-button>
        <t-radio-button value="bottom-right">\u53F3\u4E0B\u89D2</t-radio-button>
      </t-radio-group>

      <t-space>
        <t-checkbox v-model="bordered">\u662F\u5426\u663E\u793A\u8FB9\u6846</t-checkbox>
        <t-checkbox v-model="customText" style="margin-left: 16px">\u81EA\u5B9A\u4E49\u5217\u914D\u7F6E\u6309\u94AE</t-checkbox>
      </t-space>
    </t-space>

    <!-- 1. defaultDisplayColumns = ['platform'] \u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u4EC5\u7B2C\u4E00\u6B21\u6709\u6548 -->
    <!-- 2. displayColumns \u52A8\u6001\u8BBE\u7F6E\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u53D7\u63A7\u5C5E\u6027\uFF0C\u652F\u6301 displayColumns.sync \u8BED\u6CD5\u7CD6 -->
    <!-- 3. onDisplayColumnsChange \u5F53\u524D\u663E\u793A\u5217\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1 -->
    <!-- 4. \u5982\u679C\u5E0C\u671B\u9876\u90E8\u5185\u5BB9 \u548C \u5217\u914D\u7F6E\u6309\u94AE \u4FDD\u6301\u5728\u540C\u4E00\u884C\uFF0C\u53EF\u5C06\u5185\u5BB9\u653E\u5728 topContent\uFF0C\u5E76\u8C03\u6574\u6309\u94AE\u7236\u5143\u7D20\u5BBD\u5EA6(CSS) -->
    <!-- \u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220  -->
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :displayColumns.sync="displayColumns"
      :columnController="{
        placement,
        fields: ['platform', 'type', 'default'],
        dialogProps: { preventScrollThrough: true },
        buttonProps: customText ? { content: '\u663E\u793A\u5217\u63A7\u5236', theme: 'primary', variant: 'base' } : undefined,
      }"
      :pagination="{ defaultPageSize: 5, defaultCurrent: 1, total: 100 }"
      :bordered="bordered"
      tableLayout="auto"
      stripe
      drag-sort="col"
      @drag-sort="onDragSortChange"
      @column-change="onColumnChange"
    ></t-table>

    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :columnController="{ displayType: 'fixed-width', fields: ['platform', 'type', 'default'] }"
      tableLayout="auto"
      stripe
      bordered
      @column-change="onColumnChange"
    ></t-table> -->
  </div>
</template>
<script lang="jsx">
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  });
}

const staticColumn = ['index', 'needed', 'detail.position'];
export default {
  data() {
    return {
      data,
      placement: 'top-right',
      customText: false,
      bordered: true,
      displayColumns: staticColumn.concat(['platform', 'type', 'default']),
      columns: [
        {
          align: 'center',
          className: 'row',
          colKey: 'index',
          title: '\u5E8F\u53F7',
        },
        {
          colKey: 'platform',
          title: '\u5E73\u53F0',
        },
        {
          colKey: 'type',
          title: '\u7C7B\u578B',
        },
        {
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
        },
        {
          colKey: 'needed',
          title: '\u662F\u5426\u5FC5\u4F20',
        },
        {
          colKey: 'detail.position',
          title: '\u8BE6\u60C5\u4FE1\u606F',
          ellipsis: true,
        },
      ],
    };
  },

  methods: {
    onColumnChange(params) {
      console.log(params);
    },
    onDragSortChange({ newData }) {
      this.columns = newData;
    },
  },
};
<\/script>
`,Vm=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <div>
      <t-button @click="columnControllerVisible = true">\u663E\u793A\u5217\u914D\u7F6E\u5F39\u7A97</t-button>
    </div>

    <!-- 1. defaultDisplayColumns = ['platform'] \u8BBE\u7F6E\u9ED8\u8BA4\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u4EC5\u7B2C\u4E00\u6B21\u6709\u6548 -->
    <!-- 2. displayColumns \u52A8\u6001\u8BBE\u7F6E\u663E\u793A\u54EA\u4E9B\u5217\uFF0C\u53D7\u63A7\u5C5E\u6027\uFF0C\u652F\u6301 displayColumns.sync \u8BED\u6CD5\u7CD6 -->
    <!-- 3. onDisplayColumnsChange \u5F53\u524D\u663E\u793A\u5217\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1 -->
    <!-- \u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220  -->
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :displayColumns.sync="displayColumns"
      :columnControllerVisible.sync="columnControllerVisible"
      :columnController="{
        fields: ['platform', 'type', 'default'],
        dialogProps: { preventScrollThrough: true },
        hideTriggerButton: true,
      }"
      :pagination="{ defaultPageSize: 5, defaultCurrent: 1, total: 100 }"
      tableLayout="auto"
      stripe
      @column-change="onColumnChange"
    ></t-table>
  </div>
</template>
<script lang="jsx">
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  });
}

const staticColumn = ['index', 'needed', 'detail.position'];
export default {
  data() {
    return {
      data,
      columnControllerVisible: false,
      displayColumns: staticColumn.concat(['platform', 'type', 'default']),
      columns: [
        {
          align: 'center',
          className: 'row',
          colKey: 'index',
          title: '\u5E8F\u53F7',
        },
        {
          colKey: 'platform',
          title: '\u5E73\u53F0',
        },
        {
          colKey: 'type',
          title: '\u7C7B\u578B',
        },
        {
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
        },
        {
          colKey: 'needed',
          title: '\u662F\u5426\u5FC5\u4F20',
        },
        {
          colKey: 'detail.position',
          title: '\u8BE6\u60C5\u4FE1\u606F',
          ellipsis: true,
        },
      ],
    };
  },

  methods: {
    onColumnChange(params) {
      console.log(params);
    },
  },
};
<\/script>
`,Hm=`<template>
  <div class="tdesign-demo-block-column-large demo-container">
    <div>
      <t-checkbox v-model="hideSortTips"> \u9690\u85CF\u6392\u5E8F\u6587\u672C\u63D0\u793A </t-checkbox>
      <span style="padding-left: 16px; vertical-align: top">\u6392\u5E8F\uFF1A{{ sort }}</span>
    </div>

    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u4E0D\u9700\u8981\u4F20 sort\uFF0C\u6216\u8005\u53EA\u9700\u8981\u4F20 defaultSort: { sortBy: 'status', descending: true }\uFF09\uFF0CdefaultSort \u4EC5\u7B2C\u4E00\u6B21\u6709\u6548 -->
    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-table rowKey="id" :columns="columns" :data="data" @sort-change="defaultSortChange">
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status warning">\u8B66\u544A</p>
        <p v-if="row.status === 2" class="status unhealth">\u5F02\u5E38</p>
      </template>
    </t-table> -->

    <!-- \u53D7\u63A7\u7528\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <t-table
      rowKey="id"
      :columns="columns"
      :data="data"
      :sort="sort"
      :hideSortTips="hideSortTips"
      :showSortColumnBgColor="true"
      bordered
      @sort-change="sortChange"
      @change="onChange"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status warning">\u8B66\u544A</p>
        <p v-if="row.status === 2" class="status unhealth">\u5F02\u5E38</p>
      </template>
    </t-table>
  </div>
</template>

<script>
const columns = [
  { colKey: 'instance', title: '\u96C6\u7FA4\u540D\u79F0', width: 150 },
  {
    colKey: 'status',
    title: '\u72B6\u6001',
    width: 100,
    sortType: 'all',
    sorter: true,
    // \u81EA\u5B9A\u4E49\u5217\uFF0C\u6216\u5355\u5143\u683C\u7C7B\u540D
    // className: (params) => {
    //   console.log(params);
    //   return 'status-class-bg';
    // },
  },
  {
    colKey: 'survivalTime',
    title: '\u5B58\u6D3B\u65F6\u95F4(s)',
    width: 200,
    sortType: 'all',
    sorter: true,
  },
  { colKey: 'owner', title: '\u7BA1\u7406\u5458', width: 100 },
];
const data = new Array(4).fill(null).map((_, i) => ({
  id: i + 1,
  instance: \`JQTest\${i + 1}\`,
  status: [0, 1, 2, 1][i % 3],
  owner: ['jenny;peter', 'jenny', 'peter'][i % 3],
  survivalTime: [1000, 1000, 500, 1500][i % 3],
}));

export default {
  data() {
    return {
      data,
      columns,
      hideSortTips: false,
      sort: {
        // \u6309\u7167 status \u5B57\u6BB5\u8FDB\u884C\u6392\u5E8F
        sortBy: 'status',
        // \u662F\u5426\u6309\u7167\u964D\u5E8F\u8FDB\u884C\u6392\u5E8F
        descending: true,
      },
    };
  },
  methods: {
    sortChange(sort) {
      // \u5BF9\u4E8E\u53D7\u63A7\u5C5E\u6027\u800C\u8A00\uFF0C\u8FD9\u91CC\u7684\u8D4B\u503C\u5F88\u91CD\u8981\uFF0C\u4E0D\u53EF\u7F3A\u5C11
      this.sort = sort;
      this.request(sort);
      console.log('sort-change', sort);
    },
    // \u6392\u5E8F\u3001\u5206\u9875\u3001\u8FC7\u6EE4\u7B49\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u51FA\u53D1 change \u4E8B\u4EF6
    onChange(info, context) {
      console.log('change', info, context);
    },
    // \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u4E0D\u9700\u8981\u4F20\u9012 sort \u7ED9 Table \u7EC4\u4EF6\uFF0C\u56E0\u800C\u6B64\u5904\u65E0\u9700\u6267\u884C this.sort = sort \u8FDB\u884C\u8D4B\u503C
    defaultSortChange(sort) {
      this.request(sort);
    },
    request(sort) {
      // \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42\uFF0C\u8FDB\u884C\u6570\u636E\u6392\u5E8F
      const timer = setTimeout(() => {
        if (sort) {
          this.data = data
            .concat()
            .sort((a, b) => (sort.descending ? b[sort.sortBy] - a[sort.sortBy] : a[sort.sortBy] - b[sort.sortBy]));
        } else {
          this.data = data.concat();
        }
        clearTimeout(timer);
      }, 100);
    },
  },
};
<\/script>
<style lang="less">
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}
.demo-container {
  .title {
    font-size: 14px;
    line-height: 28px;
    display: block;
    margin: 10px 0;
    i {
      font-style: normal;
    }
  }
  .status {
    position: relative;
    color: #00a870;
    margin-left: 10px;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: '';
      background-color: #00a870;
      width: 6px;
      height: 6px;
      margin-left: -10px;
      border-radius: 50%;
    }
  }
  .status.unhealth {
    color: #e34d59;
    &::before {
      background-color: #e34d59;
    }
  }
  .status.warning {
    color: #ed7b2f;
    &::before {
      background-color: #ed7b2f;
    }
  }
}
</style>
`,Wm=`<template>
  <div class="demo-container">
    <div class="item">
      <p style="margin-left: 24px">\u6392\u5E8F\uFF1A{{ sort }}</p>
      <br />
      <!-- \u652F\u6301\u53D7\u63A7\u7528\u6CD5 \uFF0C\u4E5F\u652F\u6301\u975E\u53D7\u63A7\u7528\u6CD5 -->
      <t-table rowKey="id" :columns="columns" :data="data" :sort="sort" @sort-change="sortChange" multipleSort>
        <template #status="{ row }">
          <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
          <p v-if="row.status === 1" class="status warning">\u8B66\u544A</p>
          <p v-if="row.status === 2" class="status unhealth">\u5F02\u5E38</p>
        </template>
      </t-table>
    </div>
  </div>
</template>

<script>
const columns = [
  { colKey: 'instance', title: '\u96C6\u7FA4\u540D\u79F0', width: 150 },
  {
    colKey: 'status',
    title: '\u72B6\u6001',
    width: 100,
    sortType: 'all',
    sorter: true,
  },
  {
    colKey: 'survivalTime',
    title: '\u5B58\u6D3B\u65F6\u95F4(s)',
    width: 200,
    sortType: 'all',
    sorter: true,
  },
  { colKey: 'owner', title: '\u7BA1\u7406\u5458', width: 100 },
];
const data = [
  {
    id: 1,
    instance: 'JQTest1',
    status: 0,
    owner: 'jenny;peter',
    survivalTime: 1000,
  },
  {
    id: 2,
    instance: 'JQTest2',
    status: 1,
    owner: 'jenny',
    survivalTime: 1000,
  },
  {
    id: 3,
    instance: 'JQTest3',
    status: 2,
    owner: 'jenny',
    survivalTime: 500,
  },
  {
    id: 4,
    instance: 'JQTest4',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
];

export default {
  data() {
    return {
      data,
      columns,
      sort: [
        {
          sortBy: 'status',
          descending: true,
        },
        {
          sortBy: 'survivalTime',
          descending: false,
        },
      ],
    };
  },
  methods: {
    sortChange(val) {
      this.sort = val;
      // Request: \u53D1\u8D77\u8FDC\u7A0B\u8BF7\u6C42\u8FDB\u884C\u6392\u5E8F
      console.log('\u53D1\u8D77\u8FDC\u7A0B\u8BF7\u6C42\u8FDB\u884C\u6392\u5E8F\uFF08\u672A\u6A21\u62DF\u8BF7\u6C42\u6570\u636E\uFF09');
    },
  },
};
<\/script>
<style lang="less">
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}
.demo-container {
  .title {
    font-size: 14px;
    line-height: 28px;
    display: block;
    margin: 10px 0;
    i {
      font-style: normal;
    }
  }
  .status {
    position: relative;
    color: #00a870;
    margin-left: 10px;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: '';
      background-color: #00a870;
      width: 6px;
      height: 6px;
      margin-left: -10px;
      border-radius: 50%;
    }
  }
  .status.unhealth {
    color: #e34d59;
    &::before {
      background-color: #e34d59;
    }
  }
  .status.warning {
    color: #ed7b2f;
    &::before {
      background-color: #ed7b2f;
    }
  }
}
</style>
`,Ym=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <!-- t-locale-provider \u4E00\u822C\u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u67D0\u4E2A\u7EC4\u4EF6\u7684\u7279\u6027\uFF0C\u6B64\u4EE3\u7801\u793A\u4F8B \u793A\u8303\u4E86\u5982\u4F55\u5BF9\u8868\u683C\u6392\u5E8F\u56FE\u6807\u8FDB\u884C\u7EDF\u4E00\u914D\u7F6E -->
    <t-config-provider :globalConfig="globalLocale">
      <div class="item">
        <div style="margin: 16px">
          <t-checkbox v-model="allowMultipleSort">\u662F\u5426\u5141\u8BB8\u591A\u5B57\u6BB5\u6392\u5E8F</t-checkbox>
        </div>
        <div style="margin: 16px">\u6392\u5E8F\uFF1A{{ JSON.stringify(sort) || '\u6682\u65E0' }}</div>

        <!-- \u672C\u5730\u6570\u636E\u6392\u5E8F\u6D89\u53CA\u5230 data \u7684\u53D8\u66F4\uFF0C\u76F8\u5BF9\u6BD4\u8F83\u614E\u91CD\uFF0C\u56E0\u6B64\u4EC5\u652F\u6301\u53D7\u63A7\u7528\u6CD5 -->
        <!-- 1. \u652F\u6301\u8BED\u6CD5\u7CD6\uFF1Asort.sync\uFF0C\u6548\u679C\u540C :sort="sort" + onSortChange\u30022. \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 defaultSort -->
        <!-- 2. \u652F\u6301\u8BED\u6CD5\u7CD6\uFF1Adata.sync\uFF0C\u6548\u679C\u540C :data="data" + onDataChange -->
        <!-- \u8BED\u6CD5\u7CD6\u7528\u6CD5\u793A\u4F8B\u4EE3\u7801\uFF0C\u6709\u6548\u52FF\u5220 -->
        <!-- <t-table
          rowKey="id"
          :columns="columns"
          :data.sync="data"
          :sort.sync="sort"
        > -->

        <t-table
          rowKey="id"
          :columns="columns"
          :data="data"
          :sort="sort"
          @sort-change="sortChange"
          @data-change="dataChange"
          :multipleSort="allowMultipleSort"
        >
          <icon slot="op-column" name="descending-order" />
          <template #status="{ row }">
            <p class="status" :class="['', 'warning', 'unhealth'][row.status]">
              {{ ['\u5065\u5EB7', '\u8B66\u544A', '\u5F02\u5E38'][row.status] }}
            </p>
          </template>
        </t-table>
      </div>
    </t-config-provider>
  </div>
</template>

<script lang="jsx">
import { CaretDownSmallIcon, Icon } from 'tdesign-icons-vue';

const columns = [
  { colKey: 'instance', title: '\u96C6\u7FA4\u540D\u79F0', width: 150 },
  {
    colKey: 'status',
    title: '\u72B6\u6001',
    width: 100,
    sortType: 'all',
    sorter: (a, b) => a.status - b.status,
  },
  {
    colKey: 'survivalTime',
    title: '\u5B58\u6D3B\u65F6\u95F4(s)',
    width: 200,
    sortType: 'all',
    sorter: (a, b) => a.survivalTime - b.survivalTime,
  },
  { colKey: 'owner', title: '\u7BA1\u7406\u5458', width: 100 },
];

// \u672C\u5730\u6570\u636E\u6392\u5E8F\uFF0C\u8868\u793A\u7EC4\u4EF6\u5185\u90E8\u4F1A\u5BF9\u53C2\u6570 data \u8FDB\u884C\u6570\u636E\u6392\u5E8F\u3002\u5982\u679C data \u6570\u636E\u4E3A 10 \u6761\uFF0C\u5C31\u4EC5\u5BF9\u8FD9 10 \u6761\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3002
const data = new Array(4).fill(null).map((_, i) => ({
  id: i + 1,
  instance: \`JQTest\${i + 1}\`,
  status: [0, 1, 2, 1][i % 3],
  owner: ['jenny;peter', 'jenny', 'peter'][i % 3],
  survivalTime: [1000, 1000, 500, 1500][i % 3],
}));

export default {
  components: {
    Icon,
  },
  data() {
    return {
      data,
      columns,
      sort: {},
      singleSort: {
        sortBy: 'status',
        descending: true,
      },
      multipleSorts: [
        {
          sortBy: 'status',
          descending: true,
        },
      ],
      allowMultipleSort: false,
      globalLocale: {
        table: {
          sortIcon: (h) => h && <CaretDownSmallIcon size="16px" />,
        },
      },
    };
  },
  watch: {
    allowMultipleSort: {
      immediate: true,
      handler(val) {
        this.sort = val ? this.multipleSorts : this.singleSort;
      },
    },
  },
  methods: {
    // \u9664\u4E86\u76D1\u542C sortChange \u4E8B\u4EF6\u8C03\u6574\u6392\u5E8F\uFF0C\u4E5F\u53EF\u4EE5\u76D1\u542C change \u4E8B\u4EF6
    sortChange(sort, options) {
      console.log('sort-change', sort, options);
      // \u53D7\u63A7\u64CD\u4F5C\u5F53\u4E2D\uFF0Cthis.sort \u548C this.data \u7684\u8D4B\u503C\u90FD\u662F\u5FC5\u987B
      this.sort = sort;
      this.data = options.currentDataSource;
    },
    dataChange(data) {
      // \u9664\u4E86 sortChange\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD9\u91CC\u5BF9 data.value \u8FDB\u884C\u8D4B\u503C
      // this.data = data;
      console.log('data-change', data);
    },
  },
};
<\/script>
<style lang="less">
/deep/ [class*='t-table-expandable-icon-cell'] .t-icon {
  background-color: transparent;
}

.demo-container {
  .title {
    font-size: 14px;
    line-height: 28px;
    display: block;
    margin: 10px 0;
    i {
      font-style: normal;
    }
  }
  .status {
    position: relative;
    color: #00a870;
    margin-left: 10px;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: '';
      background-color: #00a870;
      width: 6px;
      height: 6px;
      margin-left: -10px;
      border-radius: 50%;
    }
  }
  .status.unhealth {
    color: #e34d59;
    &::before {
      background-color: #e34d59;
    }
  }
  .status.warning {
    color: #ed7b2f;
    &::before {
      background-color: #ed7b2f;
    }
  }
}
</style>
`,qm=`<template>
  <div class="tdesign-demo__table">
    <t-space>
      <t-checkbox v-model="highlightSelectedRow">\u9AD8\u4EAE\u884C\u9009\u4E2D</t-checkbox>
      <t-checkbox v-model="selectedOnRowClick">\u6574\u884C\u9009\u4E2D</t-checkbox>
    </t-space>

    <!-- \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 default-selected-row-keys -->
    <!-- \u652F\u6301\u8BED\u6CD5\u7CD6 selected-row-keys.sync -->
    <t-table
      rowKey="id"
      :columns="columns"
      :data="data"
      :selected-row-keys="selectedRowKeys"
      :class="highlightSelectedRow ? 'tdesign-demo__select-single' : ''"
      @select-change="rehandleSelectChange"
      @row-click="onRowClick"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status unhealth">\u5F02\u5E38</p>
      </template>
      <template #op-column><p>\u64CD\u4F5C</p></template>
      <template #op="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">\u7BA1\u7406</a>
        <a class="link" @click="rehandleClickOp(slotProps)">\u5220\u9664</a>
      </template>
    </t-table>
  </div>
</template>

<script>
const data = new Array(5).fill(null).map((item, index) => ({
  id: index + 100,
  instance: \`JQTest\${index + 1}\`,
  status: index % 2,
  owner: 'jenny;peter',
  description: 'test',
}));

const disabledFunc = ({ rowIndex }) => rowIndex === 1 || rowIndex === 3;

export default {
  data() {
    return {
      highlightSelectedRow: false,
      selectedOnRowClick: false,
      selectedRowKeys: [102],
      columns: [
        {
          // title: '\u5355\u9009',
          // align: 'center',
          colKey: 'row-select',
          type: 'single',
          className: 'demo-single-select-cell',
          // \u5141\u8BB8\u5355\u9009(Radio)\u53D6\u6D88\u884C\u9009\u4E2D
          checkProps: { allowUncheck: true },

          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 disabled \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF0C\u968F\u65F6\u9700\u8981\u6D4B\u8BD5\uFF09\u3002disabled \u53C2\u6570\uFF1A{row: RowData; rowIndex: number })
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u5F53\u524D\u884C\u4F1A\u6DFB\u52A0\u884C\u7C7B\u540D t-table__row--disabled\uFF0C\u7981\u7528\u884C\u6587\u5B57\u53D8\u7070
          disabled: disabledFunc,

          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 checkProps \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF0C\u968F\u65F6\u9700\u8981\u6D4B\u8BD5\uFF09
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u884C\u6587\u672C\u4E0D\u4F1A\u53D8\u7070
          // checkProps: ({ rowIndex }) => ({ disabled: rowIndex % 2 !== 0 }),
          width: 64,
        },
        { colKey: 'instance', title: '\u96C6\u7FA4\u540D\u79F0', width: 120 },
        {
          colKey: 'status',
          title: '\u72B6\u6001',
          width: 100,
          cell: 'status',
        },
        { colKey: 'owner', title: '\u7BA1\u7406\u5458' },
        { colKey: 'description', title: '\u63CF\u8FF0' },
        {
          colKey: 'op',
          width: 150,
          title: 'op-column',
          cell: 'op',
        },
      ],
      data,
    };
  },
  methods: {
    rehandleClickOp({ text, row }) {
      console.log(text, row);
    },

    rehandleSelectChange(value, { selectedRowData }) {
      this.selectedRowKeys = value;
      console.log(value, selectedRowData);
    },

    // \u6574\u884C\u9009\u4E2D\u793A\u4F8B
    onRowClick({ row, index }) {
      if (this.selectedOnRowClick && !disabledFunc({ row, rowIndex: index })) {
        this.selectedRowKeys = [row.id];
      }
    },
  },
};
<\/script>

<style lang="less">
/** \u6B64\u5904\u793A\u8303 \u5982\u4F55\u8BBE\u7F6E\u884C\u9AD8\u4EAE */
.tdesign-demo__select-single {
  /** \u80CC\u666F\u8272\u793A\u8303 */
  .t-table__row--selected {
    background-color: #ecf2fe;
  }
  /** \u6700\u53F3\u4FA7\u9009\u4E2D\u56FE\u6807\u793A\u8303 */
  .t-table__row--selected > td:last-child::after {
    content: '\u2705';
    font-size: 12px;
    position: absolute;
    right: 0;
    bottom: 18px;
    width: 20px;
    height: 16px;
  }
}
</style>

<style lang="less" scoped>
.link {
  cursor: pointer;
  margin-right: 15px;
}
.status {
  position: relative;
  color: #00a870;
  margin-left: 10px;
  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    background-color: #00a870;
    width: 6px;
    height: 6px;
    margin-left: -10px;
    border-radius: 50%;
  }
}
.status.unhealth {
  color: #e34d59;
  &::before {
    background-color: #e34d59;
  }
}
</style>
`,Jm=`<template>
  <div>
    <!-- \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 default-selected-row-keys -->
    <!-- \u652F\u6301\u8BED\u6CD5\u7CD6 selected-row-keys.sync -->
    <t-table
      row-key="tid"
      :columns="columns"
      :data="data"
      :selected-row-keys="selectedRowKeys"
      @select-change="rehandleSelectChange"
    >
      <template #status="{ row }">
        <p v-if="row.status === 0" class="status">\u5065\u5EB7</p>
        <p v-if="row.status === 1" class="status unhealth">\u5F02\u5E38</p>
      </template>
      <template #op-column><p>\u64CD\u4F5C</p></template>
      <template #op="slotProps">
        <a class="link" @click="rehandleClickOp(slotProps)">\u7BA1\u7406</a>
        <a class="link" @click="rehandleClickOp(slotProps)">\u5220\u9664</a>
      </template>
    </t-table>
  </div>
</template>

<script>
const data = new Array(5).fill(null).map((item, index) => ({
  tid: index + 100,
  instance: \`JQTest\${index + 1}\`,
  status: index % 2,
  owner: 'jenny;peter',
  description: 'test',
}));
export default {
  data() {
    return {
      selectedRowKeys: [1],
      columns: [
        {
          colKey: 'row-select',
          type: 'multiple',
          className: 'demo-multiple-select-cell',
          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 disabled \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09\u3002disabled \u53C2\u6570\uFF1A{row: RowData; rowIndex: number })
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u5F53\u524D\u884C\u4F1A\u6DFB\u52A0\u884C\u7C7B\u540D t-table__row--disabled\uFF0C\u7981\u7528\u884C\u6587\u5B57\u53D8\u7070
          // disabled: ({ rowIndex }) => rowIndex === 1 || rowIndex === 3,

          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 checkProps \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u884C\u6587\u672C\u4E0D\u4F1A\u53D8\u7070
          checkProps: ({ rowIndex }) => ({ disabled: rowIndex % 2 !== 0 }),
          width: 64,
        },
        { colKey: 'instance', title: '\u96C6\u7FA4\u540D\u79F0', width: 120 },
        {
          colKey: 'status',
          title: '\u72B6\u6001',
          width: 100,
          cell: 'status',
        },
        { colKey: 'owner', title: '\u7BA1\u7406\u5458' },
        { colKey: 'description', title: '\u63CF\u8FF0' },
        {
          colKey: 'op',
          width: 150,
          title: 'op-column',
          cell: 'op',
        },
      ],
      data,
    };
  },
  methods: {
    rehandleClickOp({ text, row }) {
      console.log(text, row);
    },
    rehandleSelectChange(value, { selectedRowData }) {
      this.selectedRowKeys = value;
      console.log(value, selectedRowData);
    },
  },
};
<\/script>

<style lang="less" scoped>
.link {
  cursor: pointer;
  margin-right: 15px;
}
.status {
  position: relative;
  color: #00a870;
  margin-left: 10px;
  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    background-color: #00a870;
    width: 6px;
    height: 6px;
    margin-left: -10px;
    border-radius: 50%;
  }
}
.status.unhealth {
  color: #e34d59;
  &::before {
    background-color: #e34d59;
  }
}
</style>
`,Gm=`<template>
  <t-table
    :data="data"
    :columns="columns"
    :rowKey="rowKey"
    :loading="isLoading"
    :pagination="pagination"
    :selected-row-keys="selectedRowKeys"
    @change="rehandleChange"
    @page-change="onPageChange"
    @select-change="onSelectChange"
    bordered
    stripe
  >
  </t-table>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      isLoading: false,
      selectedRowKeys: [],
      columns: [
        {
          colKey: 'row-select',
          type: 'multiple',
          width: 64,
        },
        {
          width: 200,
          colKey: 'name',
          title: '\u59D3\u540D',
          render(h, { row: { name } }) {
            return name ? \`\${name.first} \${name.last}\` : 'UNKNOWN_USER';
          },
        },
        {
          width: 200,
          colKey: 'gender',
          title: '\u6027\u522B',
        },
        {
          width: 200,
          colKey: 'phone',
          title: '\u8054\u7CFB\u65B9\u5F0F',
          render(h, { row: { phone } }) {
            return phone;
          },
        },
        {
          width: 260,
          colKey: 'email',
          title: '\u90AE\u7BB1',
          ellipsis: true,
        },
      ],
      rowKey: 'phone',
      tableLayout: 'auto',
      rowClassName: 'property-class',
      pagination: {
        current: 1,
        pageSize: 10,
        // defaultCurrent: 1,
        // defaultPageSize: 10,
        showJumper: true,
        onChange: (pageInfo) => {
          console.log('pagination.onChange', pageInfo);
        },
      },
    };
  },
  async mounted() {
    await this.fetchData({
      current: this.pagination.current || this.pagination.defaultCurrent,
      pageSize: this.pagination.pageSize || this.pagination.defaultPageSize,
    });
  },
  methods: {
    async fetchData(pagination = this.pagination) {
      try {
        this.isLoading = true;
        const { current, pageSize } = pagination;
        // \u8BF7\u6C42\u53EF\u80FD\u5B58\u5728\u8DE8\u57DF\u95EE\u9898
        const url = new URL('https://randomuser.me/api');
        const params = { page: current, results: pageSize };
        Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
        const response = await fetch(url).then((x) => x.json());
        this.data = response.results;
        // \u6570\u636E\u52A0\u8F7D\u5B8C\u6210\uFF0C\u8BBE\u7F6E\u6570\u636E\u603B\u6761\u6570
        this.pagination.total = 120;
      } catch (err) {
        this.data = [];
      }
      this.isLoading = false;
    },

    // BaseTable \u4E2D\u53EA\u6709 page-change \u4E8B\u4EF6\uFF0C\u6CA1\u6709 change \u4E8B\u4EF6
    rehandleChange(changeParams, triggerAndData) {
      console.log('\u5206\u9875\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u7B49\u53D1\u751F\u53D8\u5316\u65F6\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6\uFF1A', changeParams, triggerAndData);
    },

    // BaseTable \u4E2D\u53EA\u6709 page-change \u4E8B\u4EF6\uFF0C\u6CA1\u6709 change \u4E8B\u4EF6
    async onPageChange(pageInfo) {
      console.log('page-change', pageInfo);
      this.pagination.current = pageInfo.current;
      this.pagination.pageSize = pageInfo.pageSize;
      await this.fetchData(pageInfo);
    },

    onSelectChange(value, { selectedRowData }) {
      this.selectedRowKeys = value;
      console.log(value, selectedRowData);
    },
  },
};
<\/script>
`,Qm=`<template>
  <div>
    <t-table
      rowKey="index"
      :data="data"
      :columns="columns"
      :pagination="pagination"
      @change="onChange"
      @page-change="onPageChange"
    ></t-table>
  </div>
</template>
<script>
const data = [];
const TOTAL = 60;
for (let i = 0; i < TOTAL; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  });
}
export default {
  data() {
    return {
      data,
      columns: [
        {
          align: 'center',
          width: '100',
          className: 'row',
          colKey: 'index',
          title: '\u5E8F\u53F7',
        },
        {
          width: 100,
          colKey: 'platform',
          title: '\u5E73\u53F0',
        },
        {
          colKey: 'type',
          title: '\u7C7B\u578B',
        },
        {
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
        },
        {
          colKey: 'needed',
          title: '\u662F\u5426\u5FC5\u4F20',
        },
        {
          colKey: 'detail.position',
          title: '\u8BE6\u60C5\u4FE1\u606F',
          width: 200,
          ellipsis: true,
        },
      ],
      /** \u975E\u53D7\u63A7\u7528\u6CD5\uFF1A\u4E0E\u5206\u9875\u7EC4\u4EF6\u5BF9\u9F50\uFF08\u6B64\u5904\u6CE8\u91CA\u4E3A\u975E\u53D7\u63A7\u7528\u6CD5\u793A\u4F8B\uFF0C\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09 */
      pagination: {
        // current: 2,
        // pageSize: 5,
        defaultCurrent: 2,
        defaultPageSize: 5,
        total: TOTAL,
        showJumper: true,
      },
    };
  },
  methods: {
    // \u5206\u9875\u3001\u6392\u5E8F\u3001\u8FC7\u6EE4\u7B49\u64CD\u4F5C\u89E6\u53D1\u5747\u4F1A\u89E6\u53D1 change \u4E8B\u4EF6
    onChange(params, context) {
      console.log('change:', params, context);
    },
    // \u5206\u9875\u53D8\u5316\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6
    onPageChange(pageInfo, newData) {
      // \u53D7\u63A7\u7528\u6CD5\u6240\u9700
      // this.pagination.current = pageInfo.current;
      // this.pagination.pageSize = pageInfo.pageSize;
      console.log('page-change:', pageInfo, newData);
    },
  },
};
<\/script>
`,Um=`<template>
  <div class="tdesign-demo-block-column tdesign-demo__table">
    <!-- \u662F\u5426\u663E\u793A\u8868\u683C\u8FB9\u6846 \u548C \u5BF9\u9F50\u65B9\u5F0F\u90FD\u51B3\u5B9A\u7740 \u6392\u5E8F\u56FE\u6807 \u548C \u7B5B\u9009\u56FE\u6807\u7684\u6392\u5217\u4F4D\u7F6E -->
    <div>
      <t-radio-group v-model="align" variant="default-filled">
        <t-radio-button value="left">\u5DE6\u5BF9\u9F50</t-radio-button>
        <t-radio-button value="center">\u5C45\u4E2D\u5BF9\u9F50</t-radio-button>
        <t-radio-button value="right">\u53F3\u5BF9\u9F50</t-radio-button>
      </t-radio-group>
      <t-button @click="setFilters" variant="text" style="margin-left: 36px">\u6E05\u9664\u7B5B\u9009\u6761\u4EF6</t-button>
      <span style="padding-left: 36px">\u5DF2\u9009\u7B5B\u9009\u6761\u4EF6\uFF1A{{ filterValue }}</span>
    </div>
    <div>
      <t-checkbox v-model="bordered">\u662F\u5426\u663E\u793A\u8868\u683C\u8FB9\u6846</t-checkbox>
    </div>

    <!-- 1. \u6B64\u5904\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF01\u652F\u6301\u8BED\u6CD5\u7CD6 filter-value.sync \uFF0C \u652F\u6301\u975E\u53D7\u63A7\u5C5E\u6027 defaultFilterValue -->
    <!-- 2. \u5176\u4E2D\uFF0CfilterIcon \u7528\u4E8E\u81EA\u5B9A\u4E49\u7B5B\u9009\u56FE\u6807\uFF0C\u652F\u6301\u6E32\u67D3\u51FD\u6570 props.filterIcon\uFF0C\u652F\u6301\u63D2\u69FD filterIcon\u3002 -->
    <!-- 3. filterRow={() => null}\uFF0C\u5219\u4E0D\u4F1A\u663E\u793A\u8FC7\u6EE4\u884C -->
    <!-- <t-table
      rowKey='key'
      :columns="columns"
      :data="data"
      :filter-value.sync="filterValue"
      :filterIcon="filterIcon"
    >
      <template #filterRow>\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u884C\u4FE1\u606F</template>
    </t-table> -->

    <!-- 1. v-model:sync \u7B49\u540C\u4E8E filter-value + filter-change -->
    <!-- 2. :filter-row="() => null" \u7528\u4E8E\u9690\u85CF\u8FC7\u6EE4\u7ED3\u679C\u884C -->
    <!-- 3. <template #filterRow><p>\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684\u8FC7\u6EE4\u7ED3\u679C\u884C</p></template> \uFF0C\u53EF\u4F7F\u7528\u63D2\u69FD\u5B8C\u5168\u81EA\u5B9A\u4E49\u7ED3\u679C\u884C\u5185\u5BB9-->
    <t-table
      rowKey="key"
      :columns="columns"
      :data="data"
      :filter-value="filterValue"
      :bordered="bordered"
      resizable
      table-layout="fixed"
      @filter-change="onFilterChange"
      @change="onChange"
    />
  </div>
</template>

<script lang="jsx">
import {
  DateRangePickerPanel,
  // Textarea,
} from 'tdesign-vue';

const data = new Array(5).fill(null).map((_, i) => ({
  key: String(i + 1),
  firstName: ['Eric', 'Gilberta', 'Heriberto', 'Lazarus', 'Zandra'][i % 4],
  lastName: ['Spinke', 'Purves', 'Kment', 'Skures', 'Croson'][i % 4],
  email: [
    'espinke0@apache.org',
    'gpurves1@issuu.com',
    'hkment2@nsw.gov.au',
    'lskures3@apache.org',
    'zcroson5@virginia.edu',
  ][i % 4],
  createTime: ['2021-11-01', '2021-12-01', '2022-01-01', '2022-02-01', '2022-03-01'][i % 4],
}));

export default {
  data() {
    return {
      data,
      filterValue: {
        createTime: [],
      },
      bordered: true,
      align: 'left',
    };
  },

  computed: {
    columns() {
      return [
        {
          title: 'FirstName',
          colKey: 'firstName',
          align: this.align,
          // \u5355\u9009\u8FC7\u6EE4\u914D\u7F6E
          filter: {
            type: 'single',
            // showConfirmAndReset: true,
            list: [
              { label: 'anyone', value: '' },
              { label: 'Heriberto', value: 'Heriberto' },
              { label: 'Eric', value: 'Eric' },
            ],
          },
        },
        {
          title: 'LastName',
          colKey: 'lastName',
          // \u7528\u4E8E\u67E5\u770B\u540C\u65F6\u5B58\u5728\u6392\u5E8F\u548C\u8FC7\u6EE4\u65F6\u7684\u56FE\u6807\u663E\u793A\u662F\u5426\u6B63\u5E38
          sorter: true,
          // \u591A\u9009\u8FC7\u6EE4\u914D\u7F6E
          filter: {
            type: 'multiple',
            resetValue: [],
            // \u662F\u5426\u663E\u793A\u91CD\u7F6E\u53D6\u6D88\u6309\u94AE\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u9700\u8981\u663E\u793A
            showConfirmAndReset: true,
            list: [
              { label: 'All', checkAll: true },
              { label: 'Skures', value: 'Skures' },
              { label: 'Purves', value: 'Purves' },
            ],
          },
        },
        {
          title: 'Email',
          colKey: 'email',
          // \u8F93\u5165\u6846\u8FC7\u6EE4\u914D\u7F6E
          filter: {
            type: 'input',

            // \u5982\u679C\u662F\u6587\u672C\u57DF\u641C\u7D22\uFF0C\u53EF\u4EE5\u4F7F\u7528 Textarea
            // component: Textarea,

            // \u6309\u4E0B Enter \u952E\u65F6\u4E5F\u89E6\u53D1\u786E\u8BA4\u641C\u7D22
            confirmEvents: ['onEnter'],
            props: {
              placeholder: '\u8F93\u5165\u5173\u952E\u8BCD\u8FC7\u6EE4',
              clearable: true,
            },
            // \u662F\u5426\u663E\u793A\u91CD\u7F6E\u53D6\u6D88\u6309\u94AE
            showConfirmAndReset: true,
          },
        },
        {
          title: 'Date',
          colKey: 'createTime',
          // \u81EA\u5B9A\u4E49\u8FC7\u6EE4\u7EC4\u4EF6\uFF1A\u65E5\u671F\u8FC7\u6EE4\u914D\u7F6E\uFF0C\u8BF7\u786E\u4FDD\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5305\u542B value \u548C onChange \u5C5E\u6027
          filter: {
            component: DateRangePickerPanel,
            props: {
              firstDayOfWeek: 7,
            },
            // \u662F\u5426\u663E\u793A\u91CD\u7F6E\u53D6\u6D88\u6309\u94AE\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0D\u9700\u8981\u663E\u793A
            showConfirmAndReset: true,
            // \u65E5\u671F\u8303\u56F4\u662F\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u91CD\u7F6E\u65F6\u9700\u8D4B\u503C\u4E3A []
            resetValue: [],
          },
        },
      ];
    },
  },

  methods: {
    // filters \u53C2\u6570\u5305\u542B\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u7EC4\u4EF6 \u65E5\u671F\u9009\u62E9\u5668 \u7684\u503C
    onFilterChange(filters) {
      console.log('filter-change', filters);
      // \u4FDD\u8BC1\u65E5\u671F\u662F\u4E00\u4E2A\u6570\u7EC4
      this.filterValue = {
        ...filters,
        createTime: filters.createTime || [],
      };
      // \u6A21\u62DF\u5F02\u6B65\u8BF7\u6C42\u8FDB\u884C\u6570\u636E\u8FC7\u6EE4
      this.request(this.filterValue);
    },
    // \u7B5B\u9009\u3001\u5206\u9875\u3001\u6392\u5E8F\u7B49\u529F\u80FD\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5747\u4F1A\u51FA\u53D1 change \u4E8B\u4EF6
    onChange(info, context) {
      console.log('change', info, context, '\u7B5B\u9009\u3001\u5206\u9875\u3001\u6392\u5E8F\u7B49\u529F\u80FD\u53D1\u751F\u53D8\u5316\u5747\u4F1A\u89E6\u53D1');
    },
    setFilters() {
      this.filterValue = {};
      this.data = data;
    },
    filterIcon(h) {
      console.log(h);
      return <i>icon</i>;
    },
    request(filters) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.data = data.filter((item) => {
          let result = true;
          if (filters.firstName) {
            result = item.firstName === filters.firstName;
          }
          if (result && filters.lastName && filters.lastName.length) {
            result = filters.lastName.includes(item.lastName);
          }
          if (result && filters.email) {
            result = item.email.indexOf(filters.email) !== -1;
          }
          if (result && filters.createTime && filters.createTime.length) {
            result = item.createTime === filters.createTime;
          }
          return result;
        });
      }, 100);
    },
  },
};
<\/script>
`,Xm=`<template>
  <t-table
    rowKey="i"
    :bordered="true"
    :data="data"
    :columns="columns"
    :rowspanAndColspan="rowspanAndColspan"
    table-layout="fixed"
    resizable
  >
  </t-table>
</template>
<script>
const data = new Array(6).fill(null).map((_, i) => ({
  i,
  platform: ['\u516C\u6709', '\u79C1\u6709'][i % 1],
  type: ['Array<any>', 'String', 'Object', 'Boolean', 'Number'][i % 4],
  default: ['[]', '""', '{}', 'false', '-1', '0'][i % 5],
  needed: ['Y', 'N'][i % 1],
  description: ['\u6570\u636E\u6E90', '\u63CF\u8FF0', '\u590D\u6742\u7C7B\u578B', '\u6807\u8BC6\u7B26', '\u4F4D\u7F6E'][i % 4],
  comment: '\u8868\u5934\u5408\u5E76',
}));
export default {
  data() {
    return {
      data,
      columns: [
        {
          className: 'test',
          colKey: 'platform',
          title: '\u5E73\u53F0',
        },
        {
          className: 'row',
          colKey: 'type',
          title: '\u7C7B\u578B',
        },
        {
          className: 'test4',
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
        },
        {
          className: 'test3',
          colKey: 'needed',
          title: '\u662F\u5426\u5FC5\u4F20',
        },
        {
          className: 'row',
          colKey: 'description',
          // \u591A\u884C\u8868\u5934\u5408\u5E76\u8BF7\u53C2\u8003\u300C\u591A\u7EA7\u8868\u5934\u793A\u4F8B\u300D
          title: '\u5408\u5E76\u5355\u884C\u8868\u5934\u7684\u6700\u540E\u4E24\u5217',
          // \u4EC5\u9002\u7528\u4E8E\u5355\u884C\u8868\u5934\u5408\u5E76\u5217
          colspan: 2,
          // \u8BBE\u7F6E\u5217\u6837\u5F0F\uFF0C\u6CE8\u91CA\u7684\u793A\u4F8B\u4EE3\u7801\u6709\u6548
          // attrs: ({ type, col, row, colIndex, rowIndex }) => ({
          //   style: {
          //     color: 'blue',
          //   },
          // }),
        },
        {
          colKey: 'comment',
          title: '\u5408\u5E76\u5217',
        },
      ],
    };
  },
  methods: {
    rowspanAndColspan({ col, rowIndex, colIndex }) {
      if (colIndex === 0 && rowIndex % 2 === 0) {
        return {
          rowspan: 2,
        };
      }
      if (col.colKey === 'needed' && rowIndex === 0) {
        return {
          colspan: 2,
        };
      }
      if (col.colKey === 'type' && rowIndex === 1) {
        return {
          colspan: 2,
          rowspan: 2,
        };
      }
      if (col.colKey === 'default' && rowIndex === 4) {
        return {
          colspan: 2,
          rowspan: 2,
        };
      }
    },
  },
};
<\/script>
`,Zm=`<template>
  <!-- \u6CE8\u610F\u63A7\u5236\u7236\u5143\u7D20\u5BBD\u5EA6 -->
  <div style="width: 100%" class="tdesign-demo-block-column-large tdesign-demo-table-multi-heade tdesign-demo__tabler">
    <!-- \u6309\u94AE\u64CD\u4F5C\u533A\u57DF -->
    <t-space>
      <t-checkbox v-model="bordered">\u663E\u793A\u8868\u683C\u8FB9\u6846</t-checkbox>
      <!-- \u53EA\u8981\u6709 maxHeight\uFF0C\u5C31\u6709\u56FA\u5B9A\u8868\u5934\uFF0C\u65E0\u8BBA\u8BE5\u503C\u662F\u5426\u5B58\u5728 -->
      <t-checkbox v-model="fixedHeader">\u663E\u793A\u56FA\u5B9A\u8868\u5934</t-checkbox>
      <!-- \u4E3A\u4FDD\u8BC1\u7EC4\u4EF6\u6536\u76CA\u6700\u5927\u5316\uFF0C\u5F53\u6570\u636E\u91CF\u5C0F\u4E8E \`100\` \u65F6\uFF0C\u65E0\u8BBA\u865A\u62DF\u6EDA\u52A8\u7684\u914D\u7F6E\u662F\u5426\u5B58\u5728\uFF0C\u7EC4\u4EF6\u5185\u90E8\u90FD\u4E0D\u4F1A\u5F00\u542F\u865A\u62DF\u6EDA\u52A8 -->
      <!-- <t-checkbox v-model="virtualScroll">\u865A\u62DF\u6EDA\u52A8</t-checkbox> -->
      <t-checkbox v-model="fixedLeftCol">\u56FA\u5B9A\u5DE6\u4FA7\u5217</t-checkbox>
      <t-checkbox v-model="fixedRightCol">\u56FA\u5B9A\u53F3\u4FA7\u5217</t-checkbox>
      <t-checkbox v-model="headerAffixedTop">\u8868\u5934\u5438\u9876</t-checkbox>
    </t-space>

    <!-- tableContentWidth \u5FC5\u987B\u5927\u4E8E\u8868\u683C\u7684\u5916\u5C42\u5BBD\u5EA6\uFF0C\u5426\u5219\u8BF7\u8BBE\u7F6E width: 100% -->
    <!-- \u591A\u7EA7\u8868\u5934\u4E2D\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u56FA\u5B9A\u5217\u529F\u80FD\uFF0C\u5219\u5FC5\u987B\u8BBE\u7F6E colKey \u548C fixed -->
    <!-- :scroll="{ type: 'virtual' }" \u8868\u793A\u865A\u62DF\u6EDA\u52A8 -->
    <t-table
      row-key="index"
      :data="data"
      :sort.sync="sortInfo"
      :columns="columns"
      :bordered="bordered"
      :max-height="fixedHeader ? 380 : undefined"
      :columnController="{ displayType: 'auto-width' }"
      :filterRow="() => null"
      :headerAffixedTop="headerAffixedTop ? { offsetTop: 87 } : false"
      :scroll="{ type: 'virtual' }"
      drag-sort="col"
      resizable
      :table-layout="'fixed'"
      @drag-sort="onDragSort"
      @data-change="onDataChange"
      @filter-change="onFilterChange"
    ></t-table>
  </div>
</template>
<script>
const data = [];
for (let i = 0; i < 1000; i++) {
  data.push({
    index: i,
    platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    property: ['A', 'B', 'C'][i % 3],
    default: i,
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    type_default: '-',
    description: '\u6570\u636E\u6E90',
    field1: '\u5B57\u6BB51',
    field2: '\u5B57\u6BB52',
    field3: '\u5B57\u6BB53',
    field4: '\u5B57\u6BB54',
    field5: '\u5B57\u6BB55',
    field6: '\u5B57\u6BB56',
    field7: '\u5B57\u6BB57',
    field8: '\u5B57\u6BB58',
    text: '\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u6587\u672C',
  });
}

function getColumns(fixedLeftCol, fixedRightCol) {
  return [
    {
      title: '\u5E8F\u53F7',
      colKey: 'index',
      fixed: fixedLeftCol && 'left',
      width: 100,
    },
    {
      title: '\u6C47\u603B\u5C5E\u6027',
      fixed: fixedLeftCol && 'left',
      width: 100,
      colKey: 'total_info',
      children: [
        {
          align: 'left',
          colKey: 'platform',
          title: '\u5E73\u53F0',
          fixed: fixedLeftCol && 'left',
          width: 100,
        },
        {
          title: '\u7C7B\u578B\u53CA\u9ED8\u8BA4\u503C',
          colKey: 'type_default',
          fixed: fixedLeftCol && 'left',
          width: 100,
          children: [
            {
              align: 'left',
              colKey: 'type',
              title: '\u7C7B\u578B',
              fixed: fixedLeftCol && 'left',
              width: 110,
            },
            {
              align: 'left',
              colKey: 'default',
              title: '\u9ED8\u8BA4\u503C',
              fixed: fixedLeftCol && 'left',
              width: 100,
              sorter: (a, b) => a.default - b.default,
            },
            {
              align: 'left',
              colKey: 'needed',
              title: '\u662F\u5426\u5FC5\u4F20',
              fixed: fixedLeftCol && 'left',
              width: 100,
            },
          ],
        },
      ],
    },
    {
      colKey: 'field1',
      title: '\u5B57\u6BB51',
      width: 100,
    },
    {
      colKey: 'field2',
      title: '\u5B57\u6BB52',
      width: 100,
    },

    {
      colKey: 'field3',
      title: '\u5B57\u6BB53',
      width: 100,
    },
    {
      colKey: 'field4',
      title: '\u5B57\u6BB54',
      width: 100,
    },
    {
      title: '\u5C5E\u6027\u53CA\u8BF4\u660E',
      colKey: 'instruction',
      fixed: fixedRightCol && 'right',
      width: 100,
      children: [
        {
          align: 'left',
          colKey: 'property',
          title: '\u5C5E\u6027',
          fixed: fixedRightCol && 'right',
          width: 110,
          filter: {
            type: 'single',
            list: [
              { label: 'any', value: '' },
              { label: 'A', value: 'A' },
              { label: 'B', value: 'B' },
              { label: 'D', value: 'D' },
            ],
          },
        },
        {
          align: 'left',
          ellipsis: true,
          colKey: 'description',
          title: '\u8BF4\u660E',
          fixed: fixedRightCol && 'right',
          width: 100,
          children: [
            {
              colKey: 'field6',
              title: '\u5B57\u6BB56',
              fixed: fixedRightCol && 'right',
              width: 100,
            },
            {
              colKey: 'field7',
              title: '\u5B57\u6BB57',
              fixed: fixedRightCol && 'right',
              width: 100,
            },
            {
              colKey: 'text',
              title: '\u63CF\u8FF0',
              fixed: fixedRightCol && 'right',
              ellipsis: true,
              width: 100,
            },
          ],
        },
      ],
    },
    {
      colKey: 'field5',
      title: '\u5B57\u6BB55',
      fixed: fixedRightCol && 'right',
      width: 100,
    },
  ];
}

export default {
  data() {
    return {
      sortInfo: {},
      bordered: true,
      fixedHeader: true,
      fixedLeftCol: false,
      fixedRightCol: false,
      headerAffixedTop: false,
      virtualScroll: true,
      data,
    };
  },
  computed: {
    columns() {
      return getColumns(this.fixedLeftCol, this.fixedRightCol);
    },
  },
  methods: {
    onDataChange(val) {
      this.data = val.concat();
    },
    onFilterChange(filterValue) {
      this.data = data.filter((t) => !filterValue.property || filterValue.property === t.property);
    },
    onDragSort(params) {
      console.log('\u62D6\u62FD\u6392\u5E8F\u4E8B\u4EF6\u53C2\u6570\uFF1A', params);
    },
  },
};
<\/script>
`,eg=`<template>
  <div class="tdesign-demo-block-column">
    <t-table :data="data" :columns="columns" :rowKey="rowKey" :size="size" :loading="true"></t-table>

    <!-- loading-props \u7528\u4E8E\u900F\u4F20\u5168\u90E8\u52A0\u8F7D\u7EC4\u4EF6\u7279\u6027\uFF0C\u4EE5\u4FBF\u5B9E\u73B0\u66F4\u591A\u81EA\u5B9A\u4E49\u5185\u5BB9-->
    <!-- loadingProps.indicator=false \u9690\u85CF\u52A0\u8F7D\u56FE\u6807 -->
    <t-table
      :data="[]"
      :columns="columns"
      :rowKey="rowKey"
      :size="size"
      :loading="true"
      :loading-props="{ indicator: false }"
    >
      <div slot="loading" class="t-table--loading-message">\u{1F60A} \u8FD9\u91CC\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001 \u{1F60A}</div>
    </t-table>

    <!-- loadingProps.indicator=false \u9690\u85CF\u52A0\u8F7D\u56FE\u6807 -->
    <t-table :data="[]" :columns="columns" :rowKey="rowKey" :size="size" :loading="renderLoading"></t-table>
  </div>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      data: [],
      columns: [
        {
          align: 'left',
          width: '100',
          className: 'row',
          ellipsis: true,
          colKey: 'type',
          title: '\u7C7B\u578B',
        },
        {
          align: 'left',
          width: '100',
          className: 'test',
          ellipsis: true,
          colKey: 'platform',
          title: '\u5E73\u53F0',
        },
        {
          align: 'left',
          width: '100',
          className: 'test2',
          ellipsis: true,
          colKey: 'property',
          title: '\u5C5E\u6027',
        },
        {
          align: 'left',
          width: '100',
          className: 'test4',
          ellipsis: true,
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
        },
        {
          align: 'left',
          width: '100',
          className: 'test3',
          ellipsis: true,
          colKey: 'needed',
          title: '\u662F\u5426\u5FC5\u4F20',
        },
        {
          align: 'left',
          width: '100',
          className: 'row',
          ellipsis: true,
          colKey: 'description',
          title: '\u8BF4\u660E',
        },
      ],
      rowKey: 'property',
      size: 'small',
      style: {
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    };
  },
  methods: {
    renderLoading() {
      return <div class="t-table--loading-message">\u8FD9\u91CC\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001</div>;
    },
  },
};
<\/script>
`,tg=`<template>
  <div class="tdesign-demo-block-column-large tdesign-demo__table">
    <div>
      <t-radio-group v-model="asyncLoading" variant="default-filled">
        <t-radio-button value="load-more">\u52A0\u8F7D\u66F4\u591A</t-radio-button>
        <t-radio-button value="loading">\u52A0\u8F7D\u4E2D</t-radio-button>
        <t-radio-button value="loading-custom">\u81EA\u5B9A\u4E49\u52A0\u8F7D\u66F4\u591A</t-radio-button>
        <t-radio-button value="">\u52A0\u8F7D\u5B8C\u6210</t-radio-button>
      </t-radio-group>
    </div>

    <t-table
      rowKey="key"
      :columns="columns"
      :data="data"
      :asyncLoading="loadingNode"
      @async-loading-click="onAsyncLoadingClick"
    ></t-table>
  </div>
</template>

<script lang="jsx">
const data = [
  {
    key: '1',
    firstName: 'Eric',
    lastName: 'Spinke',
    email: 'espinke0@apache.org',
  },
  {
    key: '2',
    firstName: 'Gilberta',
    lastName: 'Purves',
    email: 'gpurves1@issuu.com',
  },
  {
    key: '3',
    firstName: 'Heriberto',
    lastName: 'Kment',
    email: 'hkment2@nsw.gov.au',
  },
  {
    key: '4',
    firstName: 'Lazarus',
    lastName: 'Skures',
    email: 'lskures3@apache.org',
  },
  {
    key: '5',
    firstName: 'Zandra',
    lastName: 'Croson',
    email: 'zcroson5@virginia.edu',
  },
];

const columns = [
  {
    title: 'FirstName',
    colKey: 'firstName',
    width: '100',
  },
  {
    title: 'LastName',
    colKey: 'lastName',
    width: '100',
  },
  {
    title: 'Email',
    colKey: 'email',
    width: '250',
  },
];

export default {
  data() {
    return {
      data,
      columns,
      asyncLoading: 'loading',
    };
  },
  computed: {
    // eslint-disable-next-line
    loadingNode(h) {
      return this.asyncLoading === 'loading-custom' ? this.customLoadingNode : this.asyncLoading;
    },
  },
  methods: {
    // eslint-disable-next-line
    customLoadingNode(h) {
      return <div class="t-table__async-loading">\u8FD9\u662F\u81EA\u5B9A\u4E49\u52A0\u8F7D\u72B6\u6001\u548C\u5185\u5BB9</div>;
    },
    onAsyncLoadingClick({ status }) {
      if (status === 'load-more') {
        this.asyncLoading = 'loading';
      }
    },
  },
};
<\/script>
`,ng=`<template>
  <div class="tdesign-demo-block-column-large">
    <!-- \u9ED8\u8BA4\u7A7A\u5185\u5BB9 -->
    <t-table :data="[]" :columns="columns" :rowKey="rowKey"></t-table>

    <!-- \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 -->

    <t-table :data="[]" :columns="columns" :rowKey="rowKey">
      <template #empty>
        <span>\u{1F60A} \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 \u{1F60A}</span>
      </template>
    </t-table>

    <!-- \u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 -->
    <t-table :data="[]" :columns="columns" :empty="empty" :rowKey="rowKey"></t-table>
  </div>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      columns: [
        {
          colKey: 'type',
          title: '\u7C7B\u578B',
        },
        {
          colKey: 'platform',
          title: '\u5E73\u53F0',
        },
        {
          colKey: 'property',
          title: '\u5C5E\u6027',
        },
        {
          colKey: 'default',
          title: '\u9ED8\u8BA4\u503C',
        },
        {
          colKey: 'needed',
          title: '\u662F\u5426\u5FC5\u4F20',
        },
        {
          colKey: 'description',
          title: '\u8BF4\u660E',
        },
      ],
      rowKey: 'property',
      empty: () => <span>\u{1F60A} \u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u7684\u7A7A\u5185\u5BB9 \u{1F60A}</span>,
    };
  },
};
<\/script>
`,ag=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <div class="item">
      <!-- \u62D6\u62FD\u6392\u5E8F\u6D89\u53CA\u5230 data \u7684\u53D8\u66F4\uFF0C\u76F8\u5BF9\u6BD4\u8F83\u614E\u91CD\uFF0C\u56E0\u6B64\u4EC5\u652F\u6301\u53D7\u63A7\u7528\u6CD5 -->

      <t-table rowKey="id" :columns="columns" :data="data" @drag-sort="onDragSort" dragSort="row">
        <template #status="{ row }">
          <p class="status" :class="['', 'warning', 'unhealth'][row && row.status]">
            {{ ['\u5065\u5EB7', '\u8B66\u544A', '\u5F02\u5E38'][row && row.status] }}
          </p>
        </template>
      </t-table>
    </div>
  </div>
</template>

<script>
const columns = [
  { colKey: 'instance', title: '\u96C6\u7FA4\u540D\u79F0', width: 150 },
  {
    colKey: 'status',
    title: '\u72B6\u6001',
    width: 100,
  },
  {
    colKey: 'survivalTime',
    title: '\u5B58\u6D3B\u65F6\u95F4(s)',
    width: 200,
  },
  { colKey: 'owner', title: '\u7BA1\u7406\u5458', width: 100 },
];

const initialData = new Array(4).fill(5).map((_, i) => ({
  id: i + 1,
  instance: \`JQTest\${i + 1}\`,
  status: [0, 1, 2, 1][i % 4],
  owner: ['jenny;peter', 'jenny', 'jenny', 'peter'][i % 4],
  survivalTime: [1000, 1000, 500, 1500][i % 4],
}));

export default {
  data() {
    return {
      data: [...initialData],
      columns,
    };
  },
  methods: {
    // currentData is going to be deprecated
    onDragSort({
      currentIndex, current, targetIndex, target, data, newData, e,
    }) {
      console.log('\u91CD\u65B0\u6392\u5E8F', currentIndex, current, targetIndex, target, data, newData, e);
      this.data = newData;
    },
  },
};
<\/script>
`,rg=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <div>
      <t-checkbox v-model="loading">\u52A0\u8F7D\u72B6\u6001</t-checkbox>
    </div>
    <div class="item">
      <!-- \u62D6\u62FD\u6392\u5E8F\u6D89\u53CA\u5230 data \u7684\u53D8\u66F4\uFF0C\u76F8\u5BF9\u6BD4\u8F83\u614E\u91CD\uFF0C\u56E0\u6B64\u4EC5\u652F\u6301\u53D7\u63A7\u7528\u6CD5 -->

      <t-table
        rowKey="id"
        :columns="columns"
        :data="data"
        :loading="loading"
        dragSort="row-handler"
        @drag-sort="onDragSort"
      >
        <template #status="{ row }">
          <p class="status" :class="['', 'warning', 'unhealth'][row.status]">
            {{ ['\u5065\u5EB7', '\u8B66\u544A', '\u5F02\u5E38'][row.status] }}
          </p>
        </template>
      </t-table>
    </div>
  </div>
</template>

<script lang="jsx">
import { MoveIcon } from 'tdesign-icons-vue';

const columns = [
  {
    colKey: 'drag', // \u5217\u62D6\u62FD\u6392\u5E8F\u5FC5\u8981\u53C2\u6570
    title: '\u6392\u5E8F',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cell: (h) => <MoveIcon />,
    width: 80,
  },
  { colKey: 'instance', title: '\u96C6\u7FA4\u540D\u79F0' },
  {
    colKey: 'status',
    title: '\u72B6\u6001',
  },
  {
    colKey: 'survivalTime',
    title: '\u5B58\u6D3B\u65F6\u95F4(s)',
  },
  { colKey: 'owner', title: '\u7BA1\u7406\u5458' },
];

const initialData = new Array(4).fill(5).map((_, i) => ({
  id: i + 1,
  instance: \`JQTest\${i + 1}\`,
  status: [0, 1, 2, 1][i % 4],
  owner: ['jenny;peter', 'jenny', 'jenny', 'peter'][i % 4],
  survivalTime: [1000, 1000, 500, 1500][i % 4],
}));

export default {
  data() {
    return {
      loading: false,
      data: [...initialData],
      columns,
    };
  },
  methods: {
    // currentIndex, current, targetIndex, target, data, newData, e, sort,
    onDragSort(params) {
      console.log('\u4EA4\u6362\u884C', params);
      this.data = params.newData;
    },
  },
};
<\/script>
`,og=`<template>
  <div class="demo-container t-table-demo-sort tdesign-demo__table">
    <div class="item">
      <t-table rowKey="id" :columns="columns" :data="data" dragSort="col" @drag-sort="onDragSort">
        <template #status="{ row }">
          <p class="status" :class="['', 'warning', 'unhealth'][row && row.status]">
            {{ ['\u5065\u5EB7', '\u8B66\u544A', '\u5F02\u5E38'][row && row.status] }}
          </p>
        </template>
      </t-table>
    </div>
  </div>
</template>

<script>
const initialColumns = [
  { colKey: 'instance', title: '\u96C6\u7FA4\u540D\u79F0', width: 150 },
  {
    colKey: 'status',
    title: '\u72B6\u6001',
    width: 100,
  },
  {
    colKey: 'survivalTime',
    title: '\u5B58\u6D3B\u65F6\u95F4(s)',
    width: 200,
  },
  { colKey: 'owner', title: '\u7BA1\u7406\u5458', width: 100 },
];

const initialData = new Array(4).fill(5).map((_, i) => ({
  id: i + 1,
  instance: \`JQTest\${i + 1}\`,
  status: [0, 1, 2, 1][i % 4],
  owner: ['jenny;peter', 'jenny', 'jenny', 'peter'][i % 4],
  survivalTime: [1000, 1000, 500, 1500][i % 4],
}));

export default {
  data() {
    return {
      data: [...initialData],
      columns: [...initialColumns],
    };
  },
  methods: {
    // currentData is going to be deprecated
    // currentIndex, current, targetIndex, target, data, newData, e, sort,
    onDragSort(params) {
      console.log('\u91CD\u65B0\u6392\u5E8F', params);
      if (params.sort === 'col') {
        this.columns = params.newData;
      }
    },
  },
};
<\/script>
`,lg=`<template>
  <div class="demo-container">
    <div class="item">
      <t-button theme="default" style="margin-top: 10px" @click="reset"> \u91CD\u7F6E\u8868\u683C\u6570\u636E </t-button>
      <br /><br />
      <t-table
        row-key="id"
        :columns="columns"
        :data="data"
        :height="300"
        :scroll="{ type: 'lazy', bufferSize: 10 }"
        bordered
      />
    </div>
  </div>
</template>

<script lang="jsx">
const columns = [
  {
    colKey: 'id',
    title: 'id',
  },
  {
    colKey: 'instance',
    title: '\u96C6\u7FA4\u540D\u79F0',
  },
  {
    colKey: 'survivalTime',
    title: '\u5B58\u6D3B\u65F6\u95F4(s)',
  },
  { colKey: 'owner', title: '\u7BA1\u7406\u5458' },
];

// \u672C\u5730\u6570\u636E\u6392\u5E8F\uFF0C\u8868\u793A\u7EC4\u4EF6\u5185\u90E8\u4F1A\u5BF9\u53C2\u6570 data \u8FDB\u884C\u6570\u636E\u6392\u5E8F\u3002\u5982\u679C data \u6570\u636E\u4E3A 10 \u6761\uFF0C\u5C31\u4EC5\u5BF9\u8FD9 10 \u6761\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3002
const initData = [
  {
    id: 1,
    instance: '\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C',
    status: 0,
    owner: 'jenny;peter',
    survivalTime: 1000,
  },
  {
    id: 2,
    instance: '\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C',
    status: 1,
    owner: 'jenny',
    survivalTime: 1000,
  },
  {
    id: 3,
    instance: 'JQTest3',
    status: 2,
    owner: 'jenny',
    survivalTime: 500,
  },
  {
    id: 4,
    instance: 'JQTest4',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
  {
    id: 5,
    instance: 'JQTest5',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
  {
    id: 6,
    instance: 'JQTest6',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },

  {
    id: 7,
    instance: 'JQTest7',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
  {
    id: 8,
    instance: 'JQTest8',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
  {
    id: 9,
    instance: 'JQTest9',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
  {
    id: 10,
    instance: 'JQTest10',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
];
const times = Array.from(new Array(1000), () => ''); // \u6D4B\u8BD5\u5171\u8BA11k\u6761\u6570\u636E
const testData = [];
times.forEach((item, i) => {
  const k = i % 10;
  testData[i] = { ...initData[k], id: i + 1 };
});

export default {
  name: 'LazyScroll',
  data() {
    return {
      data: [...testData],
      columns,
    };
  },
  methods: {
    reset() {
      this.data = [];
      setTimeout(() => {
        this.data = testData;
      });
    },
  },
};
<\/script>
`,ig=`<template>
  <div class="demo-container">
    <div class="item">
      <!-- \u4E3A\u4FDD\u8BC1\u7EC4\u4EF6\u6536\u76CA\u6700\u5927\u5316\uFF0C\u5F53\u6570\u636E\u91CF\u5C0F\u4E8E \`scroll.threshold\` \u65F6\uFF0C\u65E0\u8BBA\u865A\u62DF\u6EDA\u52A8\u7684\u914D\u7F6E\u662F\u5426\u5B58\u5728\uFF0C\u7EC4\u4EF6\u5185\u90E8\u90FD\u4E0D\u4F1A\u5F00\u542F\u865A\u62DF\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u503C\u4E3A 100 -->
      <t-table
        row-key="id"
        :columns="columns"
        :data="data"
        :scroll="{ type: 'virtual', rowHeight: 48, bufferSize: 30 }"
        :height="300"
      >
      </t-table>
    </div>
  </div>
</template>

<script lang="jsx">
const columns = [
  {
    colKey: 'id',
    title: 'id',
  },
  {
    colKey: 'instance',
    title: '\u96C6\u7FA4\u540D\u79F0',
  },
  {
    colKey: 'survivalTime',
    title: '\u5B58\u6D3B\u65F6\u95F4(s)',
  },
  { colKey: 'owner', title: '\u7BA1\u7406\u5458' },
];

const initData = [
  {
    id: 1,
    instance: '\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C',
    status: 0,
    owner: 'jenny;peter',
    survivalTime: 1000,
  },
  {
    id: 2,
    instance: '\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C,\u5F53\u524D\u884C\u9AD8\u5EA62\u884C',
    status: 1,
    owner: 'jenny',
    survivalTime: 1000,
  },
  {
    id: 3,
    instance: 'JQTest',
    status: 2,
    owner: 'jenny',
    survivalTime: 500,
  },
  {
    id: 4,
    instance: 'JQTest',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
  {
    id: 5,
    instance: 'JQTest',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
  {
    id: 6,
    instance: 'JQTest',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },

  {
    id: 7,
    instance: 'JQTest',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
  {
    id: 8,
    instance: 'JQTest',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
  {
    id: 9,
    instance: 'JQTest',
    status: 1,
    owner: 'peter',
    survivalTime: 1500,
  },
  {
    id: 10,
    instance: 'JQTest',
    status: 1,
    owner: 'peter;peter;peter;peter;peter;peter;peter;peter;peter;peter;peter;peter;peter;peter;',
    survivalTime: 1500,
  },
];

// \u4E3A\u4E86\u4F7F\u5F97\u8868\u683C\u6EDA\u52A8\u66F4\u52A0\u5E73\u7A33\uFF0C\u5EFA\u8BAE\u6307\u5B9Arow-height\u53C2\u6570\u503C\u4E3A\u63A5\u8FD1\u8868\u683C\u7684\u5E73\u5747\u884C\u9AD8
const times = Array.from(new Array(600), () => ''); // \u6D4B\u8BD5\u5171\u8BA11k\u6761\u6570\u636E
const testData = [];
times.forEach((item, i) => {
  const k = i % 10;
  testData[i] = { ...initData[k], id: i + 1 };
});

export default {
  name: 'VirtualScroll',
  data() {
    return {
      data: [...testData],
      columns,
    };
  },
};
<\/script>
`,sg=`<template>
  <div>
    <!-- \u5F53\u524D\u793A\u4F8B\u5305\u542B\uFF1A\u8F93\u5165\u6846\u3001\u5355\u9009\u3001\u591A\u9009\u3001\u65E5\u671F \u7B49\u573A\u666F -->
    <t-table
      row-key="key"
      :columns="columns"
      :data="data"
      :editable-cell-state="editableCellState"
      bordered
      @row-validate="onRowValidate"
    />
  </div>
</template>

<script>
import {
  Input, Select, DatePicker, MessagePlugin,
} from 'tdesign-vue';
import dayjs from 'dayjs';

const initData = new Array(5).fill(null).map((_, i) => ({
  key: String(i + 1),
  firstName: ['Eric', 'Gilberta', 'Heriberto', 'Lazarus', 'Zandra'][i % 4],
  framework: ['Vue', 'React', 'Miniprogram', 'Flutter'][i % 4],
  email: [
    'espinke0@apache.org',
    'gpurves1@issuu.com',
    'hkment2@nsw.gov.au',
    'lskures3@apache.org',
    'zcroson5@virginia.edu',
  ][i % 4],
  letters: [['A'], ['B', 'E'], ['C'], ['D', 'G', 'H']][i % 4],
  createTime: ['2021-11-01', '2021-12-01', '2022-01-01', '2022-02-01', '2022-03-01'][i % 4],
}));

const FRAMEWORK_OPTIONS = [
  { label: 'Vue Framework', value: 'Vue' },
  { label: 'React Framework', value: 'React' },
  { label: 'Miniprogram Framework', value: 'Miniprogram' },
  { label: 'Flutter Framework', value: 'Flutter' },
];

export default {
  name: 'TTableEditableCell',

  data() {
    return {
      align: 'left',
      data: [...initData],
    };
  },

  computed: {
    columns() {
      return [
        {
          title: 'FirstName',
          colKey: 'firstName',
          align: this.align,
          // \u7F16\u8F91\u72B6\u6001\u76F8\u5173\u914D\u7F6E\uFF0C\u5168\u90E8\u96C6\u4E2D\u5728 edit
          edit: {
            // 1. \u652F\u6301\u4EFB\u610F\u7EC4\u4EF6\u3002\u9700\u4FDD\u8BC1\u7EC4\u4EF6\u5305\u542B \`value\` \u548C \`onChange\` \u4E24\u4E2A\u5C5E\u6027\uFF0C\u4E14 onChange \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u503C\u4E3A new value\u3002
            // 2. \u5982\u679C\u5E0C\u671B\u652F\u6301\u6821\u9A8C\uFF0C\u7EC4\u4EF6\u8FD8\u9700\u5305\u542B \`status\` \u548C \`tips\` \u5C5E\u6027\u3002\u5177\u4F53 API \u542B\u4E49\u53C2\u8003 Input \u7EC4\u4EF6
            component: Input,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Input \u7EC4\u4EF6
            props: {
              clearable: true,
              autofocus: true,
            },
            // \u9664\u4E86\u70B9\u51FB\u975E\u81EA\u8EAB\u5143\u7D20\u9000\u51FA\u7F16\u8F91\u6001\u4E4B\u5916\uFF0C\u8FD8\u6709\u54EA\u4E9B\u4E8B\u4EF6\u9000\u51FA\u7F16\u8F91\u6001
            abortEditOnEvent: ['onEnter'],
            // \u7F16\u8F91\u5B8C\u6210\uFF0C\u9000\u51FA\u7F16\u8F91\u6001\u540E\u89E6\u53D1
            onEdited: (context) => {
              this.data.splice(context.rowIndex, 1, context.newRowData);
              console.log('Edit firstName:', context);
              MessagePlugin.success('Success');
            },
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: [
              { required: true, message: '\u4E0D\u80FD\u4E3A\u7A7A' },
              { max: 10, message: '\u5B57\u7B26\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 10', type: 'warning' },
            ],
            // \u9ED8\u8BA4\u662F\u5426\u4E3A\u7F16\u8F91\u72B6\u6001
            defaultEditable: true,
          },
        },
        {
          title: 'Framework',
          colKey: 'framework',
          cell: (h, { row }) => FRAMEWORK_OPTIONS.find((t) => t.value === row.framework)?.label,
          edit: {
            component: Select,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
            props: {
              clearable: true,
              options: FRAMEWORK_OPTIONS,
            },
            // \u9664\u4E86\u70B9\u51FB\u975E\u81EA\u8EAB\u5143\u7D20\u9000\u51FA\u7F16\u8F91\u6001\u4E4B\u5916\uFF0C\u8FD8\u6709\u54EA\u4E9B\u4E8B\u4EF6\u9000\u51FA\u7F16\u8F91\u6001
            abortEditOnEvent: ['onChange'],
            // \u7F16\u8F91\u5B8C\u6210\uFF0C\u9000\u51FA\u7F16\u8F91\u6001\u540E\u89E6\u53D1
            onEdited: (context) => {
              this.data.splice(context.rowIndex, 1, context.newRowData);
              console.log('Edit Framework:', context);
              MessagePlugin.success('Success');
            },
          },
        },
        {
          title: 'Letters',
          colKey: 'letters',
          cell: (h, { row }) => row.letters.join('\u3001'),
          edit: {
            component: Select,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
            // props \u4E3A\u51FD\u6570\u65F6\uFF0C\u53C2\u6570\u6709\uFF1Acol, row, rowIndex, colIndex, editedRow\u3002\u4E00\u822C\u7528\u4E8E\u5B9E\u73B0\u7F16\u8F91\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8054\u52A8
            props: ({
              col, row, rowIndex, colIndex, editedRow,
            }) => {
              console.log(col, row, rowIndex, colIndex, editedRow);
              return {
                multiple: true,
                minCollapsedNum: 1,
                options: [
                  { label: 'A', value: 'A' },
                  { label: 'B', value: 'B' },
                  { label: 'C', value: 'C' },
                  { label: 'D', value: 'D' },
                  { label: 'E', value: 'E' },
                  // \u5982\u679C\u6846\u67B6\u9009\u62E9\u4E86 React\uFF0C\u5219 Letters \u9690\u85CF G \u548C H
                  { label: 'G', value: 'G', show: () => editedRow.framework !== 'React' },
                  { label: 'H', value: 'H', show: () => editedRow.framework !== 'React' },
                ].filter((t) => (t.show === undefined ? true : t.show())),
              };
            },
            // abortEditOnEvent: ['onChange'],
            onEdited: (context) => {
              this.data.splice(context.rowIndex, 1, context.newRowData);
              console.log('Edit Letters:', context);
              MessagePlugin.success('Success');
            },
          },
        },
        {
          title: 'Date',
          colKey: 'createTime',
          // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 DatePicker \u7EC4\u4EF6
          edit: {
            component: DatePicker,
            props: {
              mode: 'date',
            },
            // \u9664\u4E86\u70B9\u51FB\u975E\u81EA\u8EAB\u5143\u7D20\u9000\u51FA\u7F16\u8F91\u6001\u4E4B\u5916\uFF0C\u8FD8\u6709\u54EA\u4E9B\u4E8B\u4EF6\u9000\u51FA\u7F16\u8F91\u6001
            abortEditOnEvent: ['onChange'],
            onEdited: (context) => {
              this.data.splice(context.rowIndex, 1, context.newRowData);
              console.log('Edit Date:', context);
              MessagePlugin.success('Success');
            },
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: () => [
              {
                validator: (val) => dayjs(val).isAfter(dayjs()),
                message: '\u53EA\u80FD\u9009\u62E9\u4ECA\u5929\u4EE5\u540E\u65E5\u671F',
              },
            ],
          },
        },
      ];
    },
  },

  methods: {
    editableCellState(cellParams) {
      // \u7B2C\u4E00\u884C\u4E0D\u5141\u8BB8\u7F16\u8F91
      return cellParams.rowIndex !== 0;
    },
    onRowValidate(params) {
      console.log('validate:', params);
    },
  },
};
<\/script>

<style scoped>
.table-operations {
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
</style>
`,ug=`<template>
  <div class="t-table-demo__editable-row">
    <div>
      <t-button @click="onValidateTableData">\u6821\u9A8C\u5168\u90E8</t-button>
    </div>
    <br />
    <!-- \u5F53\u524D\u793A\u4F8B\u5305\u542B\uFF1A\u8F93\u5165\u6846\u3001\u5355\u9009\u3001\u591A\u9009\u3001\u65E5\u671F \u7B49\u573A\u666F -->
    <t-table
      ref="tableRef"
      row-key="key"
      :columns="columns"
      :data="data"
      :editable-row-keys="editableRowKeys"
      vertical-align="top"
      bordered
      @row-edit="onRowEdit"
      @row-validate="onRowValidate"
      @validate="onValidate"
    />
  </div>
</template>

<script lang="jsx">
import {
  Input, Select, DatePicker, MessagePlugin, Button,
} from 'tdesign-vue';
import dayjs from 'dayjs';

const initData = new Array(5).fill(null).map((_, i) => ({
  key: String(i + 1),
  firstName: ['Eric', 'Gilberta', 'Heriberto', 'Lazarus', 'Zandra'][i % 4],
  framework: ['Vue', 'React', 'Miniprogram', 'Flutter'][i % 4],
  email: [
    'espinke0@apache.org',
    'gpurves1@issuu.com',
    'hkment2@nsw.gov.au',
    'lskures3@apache.org',
    'zcroson5@virginia.edu',
  ][i % 4],
  letters: [['A'], ['B', 'E'], ['C'], ['D', 'G', 'H']][i % 4],
  createTime: ['2021-11-01', '2021-12-01', '2022-01-01', '2022-02-01', '2022-03-01'][i % 4],
}));

export default {
  name: 'TTableEditableCell',

  data() {
    return {
      align: 'left',
      data: [...initData],
      editableRowKeys: ['1'],
      currentSaveId: '',
      // \u4FDD\u5B58\u53D8\u5316\u8FC7\u7684\u884C\u4FE1\u606F
      editMap: {},
    };
  },

  computed: {
    columns() {
      return [
        {
          title: 'FirstName',
          colKey: 'firstName',
          align: this.align,
          // \u7F16\u8F91\u72B6\u6001\u76F8\u5173\u914D\u7F6E\uFF0C\u5168\u90E8\u96C6\u4E2D\u5728 edit
          edit: {
            // 1. \u652F\u6301\u4EFB\u610F\u7EC4\u4EF6\u3002\u9700\u4FDD\u8BC1\u7EC4\u4EF6\u5305\u542B \`value\` \u548C \`onChange\` \u4E24\u4E2A\u5C5E\u6027\uFF0C\u4E14 onChange \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u503C\u4E3A new value\u3002
            // 2. \u5982\u679C\u5E0C\u671B\u652F\u6301\u6821\u9A8C\uFF0C\u7EC4\u4EF6\u8FD8\u9700\u5305\u542B \`status\` \u548C \`tips\` \u5C5E\u6027\u3002\u5177\u4F53 API \u542B\u4E49\u53C2\u8003 Input \u7EC4\u4EF6
            component: Input,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Input \u7EC4\u4EF6
            props: {
              clearable: true,
              autofocus: true,
              autoWidth: true,
            },
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: [
              { required: true, message: '\u4E0D\u80FD\u4E3A\u7A7A' },
              { max: 10, message: '\u5B57\u7B26\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 10', type: 'warning' },
            ],
            showEditIcon: false,
          },
        },
        {
          title: 'Framework',
          colKey: 'framework',
          edit: {
            component: Select,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
            props: {
              clearable: true,
              options: [
                { label: 'Vue', value: 'Vue' },
                { label: 'React', value: 'React' },
                { label: 'Miniprogram', value: 'Miniprogram' },
                { label: 'Flutter', value: 'Flutter' },
              ],
            },
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: [{ required: true, message: '\u4E0D\u80FD\u4E3A\u7A7A' }],
            showEditIcon: false,
          },
        },
        {
          title: 'Letters',
          colKey: 'letters',
          cell: (h, { row }) => row.letters.join('\u3001'),
          edit: {
            component: Select,
            // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Select \u7EC4\u4EF6
            // props \u4E3A\u51FD\u6570\u65F6\uFF0C\u53C2\u6570\u6709\uFF1Acol, row, rowIndex, colIndex, editedRow\u3002\u4E00\u822C\u7528\u4E8E\u5B9E\u73B0\u7F16\u8F91\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8054\u52A8
            props: ({
              col, row, rowIndex, colIndex, editedRow,
            }) => {
              console.log(col, row, rowIndex, colIndex, editedRow);
              return {
                multiple: true,
                minCollapsedNum: 1,
                options: [
                  { label: 'A', value: 'A' },
                  { label: 'B', value: 'B' },
                  { label: 'C', value: 'C' },
                  { label: 'D', value: 'D' },
                  { label: 'E', value: 'E' },
                  // \u5982\u679C\u6846\u67B6\u9009\u62E9\u4E86 React\uFF0C\u5219 Letters \u9690\u85CF G \u548C H
                  { label: 'G', value: 'G', show: () => editedRow.framework !== 'React' },
                  { label: 'H', value: 'H', show: () => editedRow.framework !== 'React' },
                ].filter((t) => (t.show === undefined ? true : t.show())),
              };
            },
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: [{ validator: (val) => val && val.length < 3, message: '\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7 2 \u4E2A' }],
            showEditIcon: false,
          },
        },
        {
          title: 'Date',
          colKey: 'createTime',
          className: 't-demo-col__datepicker',
          // props, \u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 DatePicker \u7EC4\u4EF6
          edit: {
            component: DatePicker,
            showEditIcon: false,
            // \u6821\u9A8C\u89C4\u5219\uFF0C\u6B64\u5904\u540C Form \u8868\u5355
            rules: [
              {
                validator: (val) => dayjs(val).isAfter(dayjs()),
                message: '\u53EA\u80FD\u9009\u62E9\u4ECA\u5929\u4EE5\u540E\u65E5\u671F',
              },
            ],
          },
        },
        {
          title: 'Operate',
          colKey: 'operate',
          width: 150,
          cell: (h, { row }) => {
            const editable = this.editableRowKeys.includes(row.key);
            return (
              <div class="table-operations">
                {!editable && (
                  <Button theme="primary" variant="text" data-id={row.key} onClick={this.onEdit}>
                    \u7F16\u8F91
                  </Button>
                )}
                {editable && (
                  <Button theme="primary" variant="text" data-id={row.key} onClick={this.onSave}>
                    \u4FDD\u5B58
                  </Button>
                )}
                {editable && (
                  <Button theme="primary" variant="text" data-id={row.key} onClick={this.onCancel}>
                    \u53D6\u6D88
                  </Button>
                )}
              </div>
            );
          },
        },
      ];
    },
  },

  methods: {
    onEdit(e) {
      const { id } = e.currentTarget.dataset;
      if (!this.editableRowKeys.includes(id)) {
        this.editableRowKeys.push(id);
      }
    },
    updateEditState(id) {
      const index = this.editableRowKeys.findIndex((t) => t === id);
      this.editableRowKeys.splice(index, 1);
    },
    onCancel(e) {
      const { id } = e.currentTarget.dataset;
      this.updateEditState(id);
      this.$refs.tableRef.clearValidateData();
    },

    onSave(e) {
      const { id } = e.currentTarget.dataset;
      this.currentSaveId = id;
      // \u89E6\u53D1\u5185\u90E8\u6821\u9A8C\uFF0C\u800C\u540E\u5728 onRowValidate \u4E2D\u63A5\u6536\u5F02\u6B65\u6821\u9A8C\u7ED3\u679C
      // \u91CD\u70B9\uFF1A\u53D7\u6846\u67B6\u5C42\u9762\u9650\u5236\uFF0C\u5982\u679C\u662F EnhancedTable \u8BF7\u66F4\u4E3A\u4F7F\u7528 this.$refs.tableRef.enhancedTableRef.validateRowData(id)
      // this.$refs.tableRef.enhancedTableRef.validateRowData(id).then((params) => {
      this.$refs.tableRef.validateRowData(id).then((params) => {
        console.log('Event Table Promise Validate:', params);
        if (params.result.length) {
          const r = params.result[0];
          MessagePlugin.error(\`\${r.col.title} \${r.errorList[0].message}\`);
          return;
        }
        // \u5982\u679C\u662F table \u7684\u7236\u7EC4\u4EF6\u4E3B\u52A8\u89E6\u53D1\u6821\u9A8C
        if (params.trigger === 'parent' && !params.result.length) {
          const current = this.editMap[this.currentSaveId];
          if (current) {
            this.data.splice(current.rowIndex, 1, current.editedRow);
            MessagePlugin.success('\u4FDD\u5B58\u6210\u529F');
          }
          this.updateEditState(this.currentSaveId);
        }
      });
    },

    // \u884C\u6821\u9A8C\u53CD\u9988\u4E8B\u4EF6\uFF0Cthis.$refs.tableRef.validateRowData \u6267\u884C\u7ED3\u675F\u540E\u89E6\u53D1
    onRowValidate(params) {
      console.log('Event Table Row Validate:', params);
    },

    onValidateTableData() {
      // \u6267\u884C\u7ED3\u675F\u540E\u89E6\u53D1\u4E8B\u4EF6 validate
      this.$refs.tableRef.validateTableData().then((params) => {
        console.log('Promise Table Data Validate:', params);
        const cellKeys = Object.keys(params.result);
        const firstError = params.result[cellKeys[0]];
        if (firstError) {
          MessagePlugin.warning(firstError[0].message);
        }
      });
    },

    // \u8868\u683C\u5168\u91CF\u6570\u636E\u6821\u9A8C\u53CD\u9988\u4E8B\u4EF6\uFF0Cthis.$refs.tableRef.validateTableData() \u6267\u884C\u7ED3\u675F\u540E\u89E6\u53D1
    onValidate(params) {
      console.log('Event Table Data Validate:', params);
    },

    onRowEdit(params) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {
        row,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        rowIndex,
        col,
        value,
      } = params;
      const oldRowData = this.editMap[row.key]?.editedRow || row;
      const editedRow = { ...oldRowData, [col.colKey]: value };
      this.editMap[row.key] = {
        ...params,
        editedRow,
      };

      // \u26A0\uFE0F \u91CD\u8981\uFF1A\u4EE5\u4E0B\u5185\u5BB9\u5E94\u7528\u4E8E\u5168\u91CF\u6570\u636E\u6821\u9A8C\uFF08\u5355\u72EC\u7684\u884C\u6821\u9A8C\u4E0D\u9700\u8981\uFF09
      // const newData = [...this.data];
      // newData[rowIndex] = editedRow;
      // this.data = newData;
      // \u6216\u8005
      // this.$set(this.data, rowIndex, editedRow);
    },
  },
};
<\/script>

<style>
.t-table-demo__editable-row .table-operations > button {
  padding: 0 8px;
  line-height: 22px;
  height: 22px;
}
.t-table-demo__editable-row .t-demo-col__datepicker .t-date-picker {
  width: 120px;
}
</style>
`,cg=`<template>
  <div>
    <div>
      <t-button @click="appendToRoot">\u6DFB\u52A0\u6839\u8282\u70B9</t-button>
      <t-button theme="default" style="margin-left: 16px" @click="resetData">\u91CD\u7F6E/\u66F4\u65B0\u6570\u636E</t-button>
      <t-button theme="default" style="margin-left: 16px" @click="onRowToggle">\u4EFB\u610F\u8282\u70B9\u5C55\u5F00/\u6536\u8D77</t-button>
      <t-button theme="default" style="margin-left: 16px" @click="onExpandAllToggle">{{
        expandAll ? '\u6536\u8D77\u5168\u90E8' : '\u5C55\u5F00\u5168\u90E8'
      }}</t-button>
      <t-button theme="default" style="margin-left: 16px" @click="getTreeNode">\u83B7\u53D6\u5168\u90E8\u6811\u5F62\u7ED3\u6784</t-button>
    </div>
    <br />
    <div>
      <t-checkbox v-model="customTreeExpandAndFoldIcon" style="vertical-align: middle">
        \u81EA\u5B9A\u4E49\u6298\u53E0/\u5C55\u5F00\u56FE\u6807
      </t-checkbox>
    </div>
    <br />
    <!-- \u7B2C\u4E00\u5217\u5C55\u5F00\u6811\u7ED3\u70B9\uFF0C\u7F29\u8FDB\u4E3A 24px\uFF0C\u5B50\u8282\u70B9\u5B57\u6BB5 childrenKey \u9ED8\u8BA4\u4E3A children -->
    <!-- !!! \u6811\u5F62\u7ED3\u6784 EnhancedTable \u624D\u652F\u6301\uFF0C\u666E\u901A Table \u4E0D\u652F\u6301 !!! -->
    <!-- Ref: this.$refs.table.dataSource \u67E5\u770B\u6811\u5F62\u7ED3\u6784\u5E73\u94FA\u6570\u636E\uFF0C\u83B7\u53D6\u5C5E\u6027\u7ED3\u6784\u4F7F\u7528 this.$refs.table.getTreeNode() -->
    <!-- \u53EF\u4EE5\u4F7F\u7528\u53D7\u63A7\u5C5E\u6027 :displayColumns.sync="displayColumns" \u5B8C\u5168\u81EA\u7531\u63A7\u5236\u663E\u793A\u5217 -->
    <t-enhanced-table
      ref="table"
      rowKey="key"
      drag-sort="row-handler"
      :data="data"
      :columns="columns"
      :tree="{ childrenKey: 'list', treeNodeColumnIndex: 2 }"
      :treeExpandAndFoldIcon="treeExpandIcon"
      :pagination="pagination"
      :beforeDragSort="beforeDragSort"
      :columnController="{
        placement: 'bottom-left',
        // \u5141\u8BB8\u63A7\u5236\u54EA\u4E9B\u5217\u663E\u793A\u6216\u9690\u85CF
        fields: ['id', 'platform', 'operate'],
        dialogProps: { preventScrollThrough: true },
      }"
      @page-change="onPageChange"
      @abnormal-drag-sort="onAbnormalDragSort"
      @drag-sort="onDragSort"
      @tree-expand-change="onTreeExpandChange"
    ></t-enhanced-table>

    <!-- \u7B2C\u4E8C\u5217\u5C55\u5F00\u6811\u7ED3\u70B9\uFF0C\u7F29\u8FDB\u4E3A 12px\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- indent \u5B9A\u4E49\u7F29\u8FDB\u8DDD\u79BB -->
    <!-- \u5982\u679C\u5B50\u7ED3\u70B9\u5B57\u6BB5\u4E0D\u662F 'children'\uFF0C\u53EF\u4EE5\u4F7F\u7528 childrenKey \u5B9A\u4E49\u5B57\u6BB5\u522B\u540D\uFF0C\u5982 \`:tree="{ childrenKey: 'list' }"\` -->
    <!-- <t-enhanced-table
      ref="table"
      rowKey="key"
      :pagination="defaultPagination"
      :data="data"
      :columns="columns"
      :tree="{ indent: 12, childrenKey: 'list', defaultExpandAll: true }"
      @page-change="onPageChange"
    ></t-enhanced-table> -->
  </div>
</template>
<script lang="jsx">
import { MessagePlugin, EnhancedTable, Loading } from 'tdesign-vue';
import {
  ChevronRightIcon, ChevronDownIcon, MoveIcon, AddRectangleIcon, MinusRectangleIcon,
} from 'tdesign-icons-vue';

const TOTAL = 5;

function getObject(i, currentPage) {
  return {
    id: i,
    key: \`\u6211\u662F \${i}_\${currentPage} \u53F7\`,
    platform: i % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
    type: ['String', 'Number', 'Array', 'Object'][i % 4],
    default: ['-', '0', '[]', '{}'][i % 4],
    detail: {
      position: \`\u8BFB\u53D6 \${i} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
    },
    needed: i % 4 === 0 ? '\u662F' : '\u5426',
    description: '\u6570\u636E\u6E90',
  };
}

function getData(currentPage = 1) {
  const data = [];
  // const pageInfo = \`\u7B2C \${currentPage} \u9875\`;
  for (let i = 0; i < TOTAL; i++) {
    const obj = getObject(i, currentPage);
    // \u7B2C\u4E00\u884C\u4E0D\u8BBE\u7F6E\u5B50\u8282\u70B9
    obj.list = i === 0
      ? []
      : new Array(2).fill(null).map((t, j) => {
        const secondIndex = 100 * j + (i + 1) * 10;
        const secondObj = {
          ...obj,
          id: secondIndex,
          key: \`\u6211\u662F \${secondIndex}_\${currentPage} \u53F7\`,
        };
        secondObj.list = new Array(3).fill(null).map((m, n) => {
          const thirdIndex = secondIndex * 1000 + 100 * m + (n + 1) * 10;
          return {
            ...obj,
            id: thirdIndex,
            key: \`\u6211\u662F \${thirdIndex}_\${currentPage} \u53F7\`,
            list: true,
          };
        });
        return secondObj;
      });
    data.push(obj);
  }
  // \u61D2\u52A0\u8F7D1
  data.push({
    ...getObject(66666, currentPage),
    /** \u5982\u679C\u5B50\u8282\u70B9\u4E3A\u61D2\u52A0\u8F7D\uFF0C\u5219\u521D\u59CB\u503C\u8BBE\u7F6E\u4E3A true */
    list: true,
    key: '\u6211\u662F\u61D2\u52A0\u8F7D\u8282\u70B9 66666\uFF0C\u70B9\u6211\u4F53\u9A8C',
  });
  // \u61D2\u52A0\u8F7D2
  data.push({
    ...getObject(88888, currentPage),
    /** \u5982\u679C\u5B50\u8282\u70B9\u4E3A\u61D2\u52A0\u8F7D\uFF0C\u5219\u521D\u59CB\u503C\u8BBE\u7F6E\u4E3A true */
    list: true,
    key: '\u6211\u662F\u61D2\u52A0\u8F7D\u8282\u70B9 88888\uFF0C\u70B9\u6211\u4F53\u9A8C ',
  });
  return data;
}

const data = getData();

export default {
  components: { TEnhancedTable: EnhancedTable },
  data() {
    return {
      customTreeExpandAndFoldIcon: false,
      data,
      lazyLoadingData: null,
      expandAll: false,
      pagination: {
        current: 1,
        pageSize: 10,
        total: TOTAL,
      },
      defaultPagination: {
        defaultCurrent: 1,
        defaultPageSize: 10,
        total: TOTAL,
      },
      displayColumns: ['drag', 'id', 'key', 'platform', 'operate'],
      columns: [
        {
          // \u5217\u62D6\u62FD\u6392\u5E8F\u5FC5\u8981\u53C2\u6570
          colKey: 'drag',
          title: '\u6392\u5E8F',
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          cell: (h) => <MoveIcon />,
          width: 80,
        },
        {
          colKey: 'id',
          title: '\u7F16\u53F7',
          ellipsis: true,
          width: 100,
        },
        {
          width: 180,
          colKey: 'key',
          title: '\u540D\u79F0',
          ellipsis: true,
        },
        {
          colKey: 'platform',
          title: '\u5E73\u53F0',
          width: 80,
          cell: (h, { row }) => row.platform === 'New' ? (
              <t-tag size="small" theme="primary">
                {row.platform}
              </t-tag>
          ) : (
            row.platform
          ),
        },
        {
          colKey: 'operate',
          width: 340,
          title: '\u64CD\u4F5C',
          align: 'center',
          // \u589E\u3001\u5220\u3001\u6539\u3001\u67E5 \u7B49\u64CD\u4F5C
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          cell: (h, { row }) => (
            <div class="tdesign-table-demo__table-operations">
              <t-button variant="text" onClick={() => this.appendTo(row)}>
                \u63D2\u5165
              </t-button>
              <t-button variant="text" onClick={() => this.insertBefore(row)}>
                \u524D\u63D2
              </t-button>
              <t-button variant="text" onClick={() => this.insertAfter(row)}>
                \u540E\u63D2
              </t-button>
              <t-button variant="text" onClick={() => this.onEditClick(row)}>
                \u66F4\u65B0
              </t-button>
              <t-button variant="text" onClick={() => this.onLookUp(row)}>
                \u67E5\u770B
              </t-button>
              <t-popconfirm content="\u786E\u8BA4\u5220\u9664\u5417" onConfirm={() => this.onDeleteConfirm(row)}>
                <t-button variant="text">\u5220\u9664</t-button>
              </t-popconfirm>
            </div>
          ),
        },
      ],
    };
  },

  computed: {
    // \u53EF\u4EE5\u4F7F\u7528\u540C\u540D\u63D2\u69FD\u4EE3\u66FF\u6E32\u67D3\u51FD\u6570\uFF1A<template #treeExpandAndFoldIcon><icon /></template>
    treeExpandIcon() {
      // \u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807
      if (this.customTreeExpandAndFoldIcon) {
        return this.treeExpandAndFoldIconRender;
      }
      return this.lazyLoadingTreeIconRender;
    },
  },

  // \u9ED8\u8BA4\u5C55\u5F00\u5168\u90E8\u3002\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220
  // mounted() {
  //   this.$refs.table.expandAll();
  // },

  methods: {
    // \u5168\u65B0\u8D4B\u503C
    resetData() {
      this.data = getData();
      this.$refs.table.resetData(this.data);
    },

    // \u66F4\u65B0
    onEditClick(row) {
      const newData = {
        ...row,
        platform: 'New',
        type: 'Symbol',
        default: 'undefined',
      };
      this.$refs.table.setData(row.key, newData);
      this.$message.success('\u6570\u636E\u5DF2\u66F4\u65B0');
    },

    // \u5220\u9664
    onDeleteConfirm(row) {
      this.$refs.table.remove(row.key);
      this.$message.success('\u5220\u9664\u6210\u529F');
    },

    // \u67E5\u770B\u6570\u636E
    onLookUp(row) {
      const allRowData = this.$refs.table.getData(row.key);
      const message = '\u5F53\u524D\u884C\u5168\u90E8\u6570\u636E\uFF0C\u5305\u542B\u8282\u70B9\u8DEF\u5F84\u3001\u7236\u8282\u70B9\u3001\u5B50\u8282\u70B9\u3001\u662F\u5426\u5C55\u5F00\u3001\u662F\u5426\u7981\u7528\u7B49';
      this.$message.success(\`\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\${message}\`);
      console.log(\`\${message}\uFF1A\`, allRowData);
    },

    // \u65B0\u589E\u5B50\u8282\u70B9
    appendTo(row) {
      const randomKey1 = Math.round(Math.random() * Math.random() * 1000) + 10000;
      this.$refs.table.appendTo(row.key, {
        id: randomKey1,
        key: \`\u6211\u662F \${randomKey1} \u53F7\`,
        platform: '\u79C1\u6709',
        type: 'Number',
      });
      this.$message.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u6211\u662F \${randomKey1} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);

      // \u4E00\u6B21\u6027\u6DFB\u52A0\u591A\u4E2A\u5B50\u8282\u70B9\u3002\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF01!!
      // this.appendMultipleDataTo(row);
    },

    appendMultipleDataTo(row) {
      const randomKey1 = Math.round(Math.random() * Math.random() * 1000) + 10000;
      const randomKey2 = Math.round(Math.random() * Math.random() * 1000) + 10000;
      const newData = [
        {
          id: randomKey1,
          key: \`\u6211\u662F \${randomKey1} \u53F7\`,
          platform: '\u79C1\u6709',
          type: 'Number',
        },
        {
          id: randomKey2,
          key: \`\u6211\u662F \${randomKey2} \u53F7\`,
          platform: '\u79C1\u6709',
          type: 'Number',
        },
      ];
      this.$refs.table.appendTo(row?.key, newData);
      MessagePlugin.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u6211\u662F \${randomKey1} \u548C \${randomKey2} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);
    },

    // \u5F53\u524D\u8282\u70B9\u4E4B\u524D\uFF0C\u65B0\u589E\u5144\u5F1F\u8282\u524D
    insertBefore(row) {
      const randomKey = Math.round(Math.random() * Math.random() * 1000) + 10000;
      this.$refs.table.insertBefore(row.key, {
        id: randomKey,
        key: \`\u6211\u662F \${randomKey} \u53F7\`,
        platform: '\u79C1\u6709',
        type: 'Number',
      });
      this.$message.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u6211\u662F \${randomKey} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);
    },

    // \u5F53\u524D\u8282\u70B9\u4E4B\u540E\uFF0C\u65B0\u589E\u5144\u5F1F\u8282\u524D
    insertAfter(row) {
      const randomKey = Math.round(Math.random() * Math.random() * 1000) + 10000;
      this.$refs.table.insertAfter(row.key, {
        id: randomKey,
        key: \`\u6211\u662F \${randomKey} \u53F7\`,
        platform: '\u79C1\u6709',
        type: 'Number',
      });
      this.$message.success(\`\u5DF2\u63D2\u5165\u5B50\u8282\u70B9\u6211\u662F \${randomKey} \u53F7\uFF0C\u8BF7\u5C55\u5F00\u67E5\u770B\`);
    },

    onPageChange(pageInfo) {
      this.pagination.current = pageInfo.current;
      this.pagination.pageSize = pageInfo.pageSize;
      this.data = getData(pageInfo.current);
    },

    onRowToggle() {
      const rowIds = ['\u6211\u662F 1_1 \u53F7', '\u6211\u662F 2_1 \u53F7', '\u6211\u662F 3_1 \u53F7', '\u6211\u662F 4_1 \u53F7'];
      rowIds.forEach((id) => {
        // getData \u53C2\u6570\u4E3A\u884C\u552F\u4E00\u6807\u8BC6\uFF0Clodash.get(row, rowKey)
        const rowData = this.$refs.table.getData(id);
        this.$refs.table.toggleExpandData(rowData);
        // \u6216\u8005
        // this.$refs.table.toggleExpandData({ rowIndex: rowData.rowIndex, row: rowData.row });
      });
    },

    // eslint-disable-next-line
    treeExpandAndFoldIconRender(h, { type, row }) {
      if (this.lazyLoadingData && this.lazyLoadingData.id === row?.id) {
        return <Loading size="14px" />;
      }
      return type === 'expand' ? <ChevronRightIcon /> : <ChevronDownIcon />;
    },

    // \u61D2\u52A0\u8F7D\u56FE\u6807\u6E32\u67D3
    lazyLoadingTreeIconRender(h, params) {
      const { type, row } = params;
      if (this.lazyLoadingData?.id === row?.id) {
        return <Loading size="14px" />;
      }
      return type === 'expand' ? <AddRectangleIcon /> : <MinusRectangleIcon />;
    },

    onTreeExpandChange(context) {
      console.log(context.rowState.expanded ? '\u5C55\u5F00' : '\u6536\u8D77', context);
      /**
       * \u5982\u679C\u662F\u61D2\u52A0\u8F7D\uFF0C\u8BF7\u786E\u8BA4\u81EA\u5DF1\u5B8C\u6210\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4
       * 1. \u63D0\u524D\u8BBE\u7F6E children \u503C\u4E3A true\uFF1B
       * 2. \u5728 onTreeExpandChange \u4E8B\u4EF6\u4E2D\u5904\u7406\u5F02\u6B65\u6570\u636E\uFF1B
       * 3. \u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807\u6E32\u67D3 lazyLoadingTreeIconRender
       */
      if (context.row.list === true) {
        this.lazyLoadingData = context.row;
        const timer = setTimeout(() => {
          this.appendMultipleDataTo(context.row);
          this.lazyLoadingData = null;
          clearTimeout(timer);
        }, 200);
      }
    },

    getTreeNode() {
      const treeData = this.$refs.table.getTreeNode();
      console.log(treeData);
      this.$message.success('\u6811\u5F62\u7ED3\u6784\u83B7\u53D6\u6210\u529F\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B');
    },

    onExpandAllToggle() {
      this.expandAll = !this.expandAll;
      this.expandAll ? this.$refs.table.expandAll() : this.$refs.table.foldAll();
    },

    appendToRoot() {
      const key = Math.round(Math.random() * 10010);
      this.$refs.table.appendTo('', {
        id: key,
        key: \`\u6211\u662F \${key}_\${1} \u53F7\`,
        platform: key % 2 === 0 ? '\u5171\u6709' : '\u79C1\u6709',
        type: ['String', 'Number', 'Array', 'Object'][key % 4],
        default: ['-', '0', '[]', '{}'][key % 4],
        detail: {
          position: \`\u8BFB\u53D6 \${key} \u4E2A\u6570\u636E\u7684\u5D4C\u5957\u4FE1\u606F\u503C\`,
        },
        needed: key % 4 === 0 ? '\u662F' : '\u5426',
        description: '\u6570\u636E\u6E90',
      });

      // \u540C\u65F6\u6DFB\u52A0\u591A\u4E2A\u5143\u7D20\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\u52FF\u5220
      // this.appendMultipleDataTo();
    },

    onAbnormalDragSort(params) {
      console.log(params);
      // this.$message.warning(params.reason);
      if (params.code === 1001) {
        this.$message.warning('\u4E0D\u540C\u5C42\u7EA7\u7684\u5143\u7D20\uFF0C\u4E0D\u5141\u8BB8\u8C03\u6574\u987A\u5E8F');
      }
    },

    // \u62D6\u62FD\u6392\u5E8F\u6210\u529F\u540E\u89E6\u53D1
    onDragSort(params) {
      console.log('onDragSort:', params);
    },

    // \u5E94\u7528\u4E8E\u9700\u8981\u963B\u6B62\u62D6\u62FD\u6392\u5E8F\u7684\u573A\u666F\u3002\u5982\uFF1A\u5F53\u5B50\u8282\u70B9\u5B58\u5728\u65F6\uFF0C\u5219\u4E0D\u5141\u8BB8\u8C03\u6574\u987A\u5E8F
    // \u8FD4\u56DE\u503C\u4E3A true\uFF0C\u5141\u8BB8\u62D6\u62FD\u6392\u5E8F\uFF1B\u8FD4\u56DE\u503C \u4E3A false\uFF0C\u5219\u963B\u6B62\u62D6\u62FD\u6392\u5E8F
    beforeDragSort(params) {
      console.log('beforeDragSort:', params);
      return true;
    },
  },
};
<\/script>

<style>
.tdesign-table-demo__table-operations div {
  display: inline-block;
}
.tdesign-table-demo__table-operations .t-button {
  padding: 0 8px;
}
</style>
`,dg=`<template>
  <div class="t-table-tree-select-demo">
    <t-space>
      <t-radio-group v-model="checkStrictly" variant="default-filled">
        <t-radio-button value="true">\u7236\u5B50\u884C\u9009\u4E2D\u72EC\u7ACB</t-radio-button>
        <t-radio-button value="false">
          <t-popup
            content="\u300C\u7236\u5B50\u884C\u9009\u4E2D\u5173\u8054\u300D\u7531\u4E8E\u8868\u683C\u6570\u636E\u7684\u7279\u6B8A\u6027\uFF0C\u7236\u8282\u70B9\u9009\u4E2D\u6216\u8005\u53D6\u6D88\u9009\u4E2D\uFF0C\u4F1A\u5F71\u54CD\u5B50\u8282\u70B9\uFF1B\u4F46\u5B50\u8282\u70B9\u9009\u4E2D\u6216\u53D6\u6D88\u4E0D\u5F71\u54CD\u7236\u5143\u7D20"
          >
            \u7236\u5B50\u884C\u9009\u4E2D\u5173\u8054
          </t-popup>
        </t-radio-button>
      </t-radio-group>

      <t-button theme="default" @click="getTreeExpandedRow">\u83B7\u53D6\u6811\u5F62\u7ED3\u6784\u5C55\u5F00\u7684\u8282\u70B9</t-button>
    </t-space>
    <br />
    <!-- \u5B50\u8282\u70B9\u5B57\u6BB5\u4E0D\u662F children\uFF0C\u800C\u662F childrenList -->
    <!-- expandedRow \u548C expanded-row-keys \u63A7\u5236\u662F\u5426\u663E\u793A\u5C55\u5F00\u6536\u8D77\u884C\uFF0C\u4EE5\u53CA\u54EA\u4E9B\u884C\u5C55\u5F00 -->
    <!-- !!! EnhancedTable \u624D\u652F\u6301\uFF0C\u666E\u901A Table \u4E0D\u652F\u6301 !!! -->
    <t-enhanced-table
      ref="enhancedTableRef"
      row-key="key"
      :expandedRow="expandedRowRender"
      :expanded-row-keys="expandedRowKeys"
      @expand-change="onExpandChange"
      :columns="columns"
      :data="data"
      :tree="{
        childrenKey: 'childrenList',
        checkStrictly: checkStrictly === 'true' ? true : false,
      }"
      :selected-row-keys="selectedRowKeys"
      @select-change="rehandleSelectChange"
    ></t-enhanced-table>
  </div>
</template>

<script lang="jsx">
import { EnhancedTable, MessagePlugin } from 'tdesign-vue';
import cloneDeep from 'lodash/cloneDeep';

const data = [];
for (let i = 0; i < 5; i++) {
  const obj = {
    key: i,
    instance: \`JQTest\${i}\`,
    status: i % 2,
    owner: i % 2 === 0 ? 'jenny' : 'peter',
    description: 'important.',
  };
  obj.childrenList = new Array(5).fill(null).map((t, j) => {
    const secondIndex = 100 * j + (i + 1) * 10;
    const secondObj = {
      ...obj,
      status: secondIndex % 3,
      key: secondIndex,
      instance: \`JQTest\${secondIndex}\`,
    };
    secondObj.childrenList = new Array(5).fill(null).map((m, n) => {
      const thirdIndex = secondIndex * 1000 + 100 * m + (n + 1) * 10;
      return {
        ...obj,
        status: thirdIndex % 3,
        key: thirdIndex,
        instance: \`JQTest\${thirdIndex}\`,
      };
    });
    return secondObj;
  });
  data.push(obj);
}

export default {
  components: { TEnhancedTable: EnhancedTable },

  data() {
    return {
      checkStrictly: 'true',
      selectedRowKeys: [],
      expandedRowKeys: [],
      columns: [
        {
          colKey: 'row-select',
          type: 'multiple',
          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 disabled \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09\u3002disabled \u53C2\u6570\uFF1A{row: RowData; rowIndex: number })
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u5F53\u524D\u884C\u4F1A\u6DFB\u52A0\u884C\u7C7B\u540D t-table__row--disabled\uFF0C\u7981\u7528\u884C\u6587\u5B57\u53D8\u7070
          // disabled: ({ rowIndex }) => rowIndex === 1 || rowIndex === 3,

          // \u7981\u7528\u884C\u9009\u4E2D\u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 checkProps \u7981\u7528\u884C\uFF08\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\uFF09
          // \u8FD9\u79CD\u65B9\u5F0F\u7981\u7528\u884C\u9009\u4E2D\uFF0C\u884C\u6587\u672C\u4E0D\u4F1A\u53D8\u7070
          checkProps: ({ row }) => ({ disabled: !row.childrenList && row.status !== 0 }),
          // \u81EA\u7531\u8C03\u6574\u5BBD\u5EA6\uFF0C\u5982\u679C\u53D1\u73B0\u5143\u7D20\u770B\u4E0D\u89C1\uFF0C\u8BF7\u52A0\u5927\u5BBD\u5EA6
          width: 20,
        },
        {
          colKey: 'instance',
          title: '\u96C6\u7FA4\u540D\u79F0',
          width: 200,
        },
        {
          colKey: 'status',
          title: '\u72B6\u6001',
          width: 100,
          cell: (h, { row }) => (row.status === 0 ? <p class="status">\u5065\u5EB7</p> : <p class="status unhealth">\u5F02\u5E38</p>),
        },
        { colKey: 'owner', title: '\u7BA1\u7406\u5458' },
        { colKey: 'description', title: '\u63CF\u8FF0' },
      ],
      data,
    };
  },

  watch: {
    // \u5207\u6362\u6A21\u5F0F\uFF0C\u91CD\u7F6E\u6570\u636E\uFF0C\u907F\u514D\u4E92\u76F8\u5F71\u54CD
    checkStrictly() {
      this.selectedRowKeys = [];
      this.data = cloneDeep(data);
    },
  },

  methods: {
    rehandleClickOp({ text, row }) {
      console.log(text, row);
    },

    rehandleSelectChange(value, { selectedRowData }) {
      this.selectedRowKeys = value;
      console.log(value, selectedRowData);
    },

    expandedRowRender(h, { row }) {
      return <div>\u8FD9\u662F\u5C55\u5F00\u9879\u6570\u636E\uFF0C\u6211\u662F {row.key} \u53F7</div>;
    },

    onExpandChange(val) {
      this.expandedRowKeys = val;
    },

    getTreeExpandedRow() {
      const treeExpandedRowKeys = this.$refs.enhancedTableRef.getTreeExpandedRow('unique');
      console.log('\u884C\u552F\u4E00\u6807\u8BC6\u503C\uFF1A', treeExpandedRowKeys);

      const treeExpandedRow = this.$refs.enhancedTableRef.getTreeExpandedRow('data');
      console.log('\u884C\u6570\u636E\uFF1A', treeExpandedRow);

      const treeExpandedRowState = this.$refs.enhancedTableRef.getTreeExpandedRow('all');
      console.log('\u5168\u90E8\u884C\u4FE1\u606F\uFF1A', treeExpandedRowState);

      MessagePlugin.success('\u83B7\u53D6\u6210\u529F\uFF0C\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B');
    },
  },
};
<\/script>

<style lang="less">
.t-table-tree-select-demo {
  .link {
    cursor: pointer;
    margin-right: 15px;
  }
  .status {
    position: relative;
    color: #00a870;
    margin-left: 10px;
    &::before {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      content: '';
      background-color: #00a870;
      width: 6px;
      height: 6px;
      margin-left: -10px;
      border-radius: 50%;
    }
  }
  .status.unhealth {
    color: #e34d59;
    &::before {
      background-color: #e34d59;
    }
  }
}
</style>
`,Il=[{name:"bordered",type:"Boolean",defaultValue:!1,options:[]},{name:"disableDataPage",type:"Boolean",defaultValue:!1,options:[]},{name:"footerAffixedBottom",type:"Boolean",defaultValue:!1,options:[]},{name:"headerAffixedTop",type:"Boolean",defaultValue:!1,options:[]},{name:"horizontalScrollAffixedBottom",type:"Boolean",defaultValue:!1,options:[]},{name:"hover",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"paginationAffixedBottom",type:"Boolean",defaultValue:!1,options:[]},{name:"resizable",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"stripe",type:"Boolean",defaultValue:!1,options:[]},{name:"tableLayout",type:"enum",defaultValue:"fixed",options:[{label:"auto",value:"auto"},{label:"fixed",value:"fixed"}]},{name:"verticalAlign",type:"enum",defaultValue:"middle",options:[{label:"top",value:"top"},{label:"middle",value:"middle"},{label:"bottom",value:"bottom"}]}],Qi={};Qi.setup=(e,t)=>{const n=H(Array(30).fill(0).map((u,d)=>({index:d,platform:"\u516C\u6709",description:"\u6570\u636E\u6E90"}))),a=H([{colKey:"index",title:"index"},{colKey:"platform",title:"\u5E73\u53F0"},{colKey:"description",title:"\u8BF4\u660E"}]),r=H(Il),l=[{label:"baseTable",value:"baseTable",config:Il}],i={baseTable:`<t-table
        v-bind="configProps"
        row-key="index"
        :maxHeight="140"
        :pagination="{ total: 30 }"
        :data="data"
        :columns="columns"
      />`},o=H(`<template>${i[l[0].value].trim()}</template>`);function s(u){r.value=l.find(d=>d.value===u).config,o.value=`<template>${i[u].trim()}</template>`}return{data:n,columns:a,configList:r,panelList:l,usageCode:o,onPanelChange:s}};var Ah=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"baseTable",fn:function(a){var r=a.configProps;return[n("t-table",e._b({attrs:{"row-key":"index",maxHeight:140,pagination:{total:30},data:e.data,columns:e.columns}},"t-table",r,!1))]}}])})},Fh=[];const Ml={};var Nh=ge(Qi,Ah,Fh,!1,jh,null,null,null);function jh(e){for(let t in Ml)this[t]=Ml[t]}const fg=function(){return Nh.exports}();export{Jm as $,_m as A,Om as B,Sm as C,Qh as D,km as E,Pm as F,Dm as G,Tm as H,Rm as I,Em as J,$m as K,Km as L,Am as M,Fm as N,Nm as O,jm as P,Im as Q,Mm as R,Lm as S,Bm as T,fg as U,zm as V,Vm as W,Hm as X,Wm as Y,Ym as Z,qm as _,Uh as a,Gm as a0,Qm as a1,Um as a2,Xm as a3,Zm as a4,eg as a5,tg as a6,ng as a7,ag as a8,rg as a9,og as aa,lg as ab,ig as ac,sg as ad,ug as ae,cg as af,dg as ag,Xh as b,Zh as c,em as d,tm as e,nm as f,am as g,rm as h,om as i,lm as j,im as k,sm as l,um as m,cm as n,dm as o,fm as p,vm as q,pm as r,hm as s,mm as t,gm as u,bm as v,ym as w,wm as x,Cm as y,xm as z};
