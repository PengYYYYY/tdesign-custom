import{V as S,n as o}from"./index.4ab857ef.js";import{u as w,_ as P}from"./use-size-props.363c09d5.js";import{_ as N,I as $}from"./icon.6041ac7f.js";import{P as D}from"./prism.add139ef.js";var j=["size"];function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?d(Object(t),!0).forEach(function(i){P(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}var F={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M7.5 3.91L3.85 7.56l-.7-.7L7.79 2.2a.3.3 0 01.42 0l4.64 4.64-.7.71L8.5 3.91V14h-1V3.91z",fillOpacity:.9}}]},T=S.extend({name:"ArrowUpIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var i=t.props,l=t.data,f=i.size,x=N(i,j),r=w(f),C=r.className,y=r.style,k=c(c({},x||{}),{},{id:"arrow-up",icon:F,staticClass:C,style:y});return l.props=k,n($,l)}}),z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-row",{attrs:{justify:"center"}},[t("t-button",{on:{click:e.handleClick}},[e._v("\u65B0\u624B\u5F15\u5BFC")]),t("t-drawer",{attrs:{visible:e.visible,header:"\u6F14\u793A\u65B0\u624B\u5F15\u5BFC",size:"60%","show-overlay":!1,"destroy-on-close":""},on:{"update:visible":function(i){e.visible=i}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("t-button",{on:{click:function(i){e.visible=!1}}},[e._v(" \u5173\u95ED\u62BD\u5C49 ")])]},proxy:!0}])},[t("div",{staticClass:"guide-container"},[t("div",{staticClass:"main-title"},[t("div",{staticClass:"title-major"},[e._v("Guide \u7528\u6237\u5F15\u5BFC")]),t("div",{staticClass:"title-sub"},[e._v("\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002")])]),t("div",{staticClass:"field label-field"},[t("div",{staticClass:"label"},[e._v("Label")]),t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("div",{staticClass:"field"},[t("div",{staticClass:"label"},[e._v("Label")]),t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("t-row",{staticClass:"action"},[t("t-button",[e._v("\u786E\u5B9A")]),t("t-button",{attrs:{theme:"default",variant:"base"}},[e._v("\u53D6\u6D88")])],1)],1),t("t-guide",{attrs:{current:e.current,steps:e.steps,highlightPadding:32},on:{"update:current":function(i){e.current=i},change:e.handleChange,"prev-step-click":e.handlePrevStepClick,"next-step-click":e.handleNextStepClick,finish:e.handleFinish,skip:e.handleSkip}})],1)],1)},B=[];const O={data(){return{visible:!1,current:-1,steps:[{element:".main-title",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"bottom-right"},{element:".label-field",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"bottom"},{element:".action",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"right"}]}},methods:{handleClick(){this.visible=!0,setTimeout(()=>{this.current=0},1e3)},handleChange(e,{e:n,total:t}){console.log(e,n,t)},handlePrevStepClick({e,prev:n,current:t,total:i}){console.log(e,n,t,i)},handleNextStepClick({e,next:n,current:t,total:i}){console.log(e,n,t,i)},handleFinish({e,current:n,total:t}){this.visible=!1,console.log(e,n,t)},handleSkip({e,current:n,total:t}){this.visible=!1,console.log(e,n,t)}}},v={};var M=o(O,z,B,!1,E,"3b695792",null,null);function E(e){for(let n in v)this[n]=v[n]}const L=function(){return M.exports}();var G=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-row",{attrs:{justify:"center"}},[t("t-button",{on:{click:e.handleClick}},[e._v("\u65B0\u624B\u5F15\u5BFC")]),t("t-drawer",{attrs:{visible:e.visible,header:"\u6F14\u793A\u65B0\u624B\u5F15\u5BFC",size:"60%","show-overlay":!1,"destroy-on-close":""},on:{"update:visible":function(i){e.visible=i}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("t-button",{on:{click:function(i){e.visible=!1}}},[e._v(" \u5173\u95ED\u62BD\u5C49 ")])]},proxy:!0}])},[t("div",{staticClass:"guide-container"},[t("div",{staticClass:"main-title"},[t("div",{staticClass:"title-major"},[e._v("Guide \u7528\u6237\u5F15\u5BFC")]),t("div",{staticClass:"title-sub"},[e._v("\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002")])]),t("div",{staticClass:"field label-field"},[t("div",{staticClass:"label"},[e._v("Label")]),t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("div",{staticClass:"field"},[t("div",{staticClass:"label"},[e._v("Label")]),t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("t-row",{staticClass:"action"},[t("t-button",[e._v("\u786E\u5B9A")]),t("t-button",{attrs:{theme:"default",variant:"base"}},[e._v("\u53D6\u6D88")])],1)],1),t("t-guide",{attrs:{current:e.current,steps:e.steps,"show-overlay":!1},on:{"update:current":function(i){e.current=i},change:e.handleChange,"prev-step-click":e.handlePrevStepClick,"next-step-click":e.handleNextStepClick,finish:e.handleFinish,skip:e.handleSkip}})],1)],1)},A=[];const I={data(){return{visible:!1,current:-1,steps:[{element:".main-title",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"bottom-right"},{element:".label-field",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"bottom"},{element:".action",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"right"}]}},methods:{handleClick(){this.visible=!0,setTimeout(()=>{this.current=0},1e3)},handleChange(e,{e:n,total:t}){console.log(e,n,t)},handlePrevStepClick({e,prev:n,current:t,total:i}){console.log(e,n,t,i)},handleNextStepClick({e,next:n,current:t,total:i}){console.log(e,n,t,i)},handleFinish({e,current:n,total:t}){this.visible=!1,console.log(e,n,t)},handleSkip({e,current:n,total:t}){this.visible=!1,console.log(e,n,t)}}},p={};var R=o(I,G,A,!1,q,"5d2fc7ca",null,null);function q(e){for(let n in p)this[n]=p[n]}const V=function(){return R.exports}();var U=function(){var e=this,n=e.$createElement;return e._self._c,e._m(0)},H=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"dialog-body"},[t("div",{staticClass:"img-wrapper"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",alt:"demo"}})]),t("p",[e._v("\u6B64\u5904\u663E\u793A\u672C\u9875\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848\uFF0C\u53EF\u6309\u9700\u8981\u64B0\u5199\uFF0C\u5982\u5185\u5BB9\u8FC7\u591A\u53EF\u6298\u884C\u663E\u793A\u3002\u56FE\u6587\u4E5F\u53EF\u6309\u9700\u81EA\u7531\u8BBE\u8BA1\u3002")])])}];const K={},u={};var W=o(K,U,H,!1,Y,"5987717d",null,null);function Y(e){for(let n in u)this[n]=u[n]}const a=function(){return W.exports}();var J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-row",{attrs:{justify:"center"}},[t("t-button",{on:{click:e.handleClick}},[e._v("\u65B0\u624B\u5F15\u5BFC")]),t("t-drawer",{attrs:{visible:e.visible,header:"\u6F14\u793A\u65B0\u624B\u5F15\u5BFC",size:"60%","show-overlay":!1,"destroy-on-close":""},on:{"update:visible":function(i){e.visible=i}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("t-button",{on:{click:function(i){e.visible=!1}}},[e._v(" \u5173\u95ED\u62BD\u5C49 ")])]},proxy:!0}])},[t("div",{staticClass:"guide-container"},[t("div",{staticClass:"main-title"},[t("div",{staticClass:"title-major"},[e._v("Guide \u7528\u6237\u5F15\u5BFC")]),t("div",{staticClass:"title-sub"},[e._v("\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002")])]),t("div",{staticClass:"field label-field"},[t("div",{staticClass:"label"},[e._v("Label")]),t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("div",{staticClass:"field"},[t("div",{staticClass:"label"},[e._v("Label")]),t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("t-row",{staticClass:"action"},[t("t-button",[e._v("\u786E\u5B9A")]),t("t-button",{attrs:{theme:"default",variant:"base"}},[e._v("\u53D6\u6D88")])],1)],1),t("t-guide",{attrs:{current:e.current,steps:e.steps,mode:"dialog"},on:{"update:current":function(i){e.current=i},change:e.handleChange,"prev-step-click":e.handlePrevStepClick,"next-step-click":e.handleNextStepClick,finish:e.handleFinish,skip:e.handleSkip}})],1)],1)},Q=[];const X={data(){return{visible:!1,current:-1,steps:[{element:".main-title",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:a,placement:"bottom-right"},{element:".label-field",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:a,placement:"bottom"},{element:".action",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:a,placement:"right"}]}},methods:{handleClick(){this.visible=!0,setTimeout(()=>{this.current=0},1e3)},handleChange(e,{e:n,total:t}){console.log(e,n,t)},handlePrevStepClick({e,prev:n,current:t,total:i}){console.log(e,n,t,i)},handleNextStepClick({e,next:n,current:t,total:i}){console.log(e,n,t,i)},handleFinish({e,current:n,total:t}){this.visible=!1,console.log(e,n,t)},handleSkip({e,current:n,total:t}){this.visible=!1,console.log(e,n,t)}}},_={};var Z=o(X,J,Q,!1,tt,"6ec6d614",null,null);function tt(e){for(let n in _)this[n]=_[n]}const et=function(){return Z.exports}();var nt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-row",{attrs:{justify:"center"}},[t("t-button",{on:{click:e.handleClick}},[e._v("\u65B0\u624B\u5F15\u5BFC")]),t("t-drawer",{attrs:{visible:e.visible,header:"\u6F14\u793A\u65B0\u624B\u5F15\u5BFC",size:"60%","show-overlay":!1,"destroy-on-close":""},on:{"update:visible":function(i){e.visible=i}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("t-button",{on:{click:function(i){e.visible=!1}}},[e._v(" \u5173\u95ED\u62BD\u5C49 ")])]},proxy:!0}])},[t("div",{staticClass:"guide-container"},[t("div",{staticClass:"main-title"},[t("div",{staticClass:"title-major"},[e._v("Guide \u7528\u6237\u5F15\u5BFC")]),t("div",{staticClass:"title-sub"},[e._v("\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002")])]),t("div",{staticClass:"field label-field"},[t("div",{staticClass:"label"},[e._v("Label")]),t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("div",{staticClass:"field"},[t("div",{staticClass:"label"},[e._v("Label")]),t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("t-row",{staticClass:"action"},[t("t-button",[e._v("\u786E\u5B9A")]),t("t-button",{attrs:{theme:"default",variant:"base"}},[e._v("\u53D6\u6D88")])],1)],1),t("t-guide",{attrs:{current:e.current,steps:e.steps},on:{"update:current":function(i){e.current=i},change:e.handleChange,"prev-step-click":e.handlePrevStepClick,"next-step-click":e.handleNextStepClick,finish:e.handleFinish,skip:e.handleSkip}})],1)],1)},it=[];const ot={data(){return{visible:!1,current:-1,steps:[{element:".main-title",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"bottom-right"},{element:".label-field",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:a,placement:"bottom",mode:"dialog"},{element:".action",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",body:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"right"}]}},methods:{handleClick(){this.visible=!0,setTimeout(()=>{this.current=0},800)},handleChange(e,{e:n,total:t}){console.log(e,n,t)},handlePrevStepClick({e,prev:n,current:t,total:i}){console.log(e,n,t,i)},handleNextStepClick({e,next:n,current:t,total:i}){console.log(e,n,t,i)},handleFinish({e,current:n,total:t}){this.visible=!1,console.log(e,n,t)},handleSkip({e,current:n,total:t}){this.visible=!1,console.log(e,n,t)}}},m={};var lt=o(ot,nt,it,!1,at,"533af10b",null,null);function at(e){for(let n in m)this[n]=m[n]}const st=function(){return lt.exports}();var rt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"my-popup"},[t("arrow-up-icon",{staticClass:"pop-icon"}),t("p",{staticClass:"popup-desc"},[e._v("\u81EA\u5B9A\u4E49\u7684\u56FE\u5F62\u6216\u8BF4\u660E\u6587\u6848\uFF0C\u7528\u6765\u89E3\u91CA\u6216\u6307\u5BFC\u8BE5\u529F\u80FD\u4F7F\u7528\u3002")]),t("div",{staticClass:"popup-action"},[t("t-button",{attrs:{theme:"default",size:"small"},on:{click:e.handleSkip}},[e._v(" \u8DF3\u8FC7 ")]),e.current!==0?t("t-button",{attrs:{theme:"default",size:"small"},on:{click:e.handlePrev}},[e._v(" \u4E0A\u4E00\u6B65 ")]):e._e(),e.current+1<e.total?t("t-button",{attrs:{theme:"primary",size:"small"},on:{click:e.handleNext}},[e._v(" \u4E0B\u4E00\u6B65 ")]):e._e(),e.current+1===e.total?t("t-button",{attrs:{theme:"primary",size:"small"},on:{click:e.handleFinish}},[e._v(" \u5B8C\u6210 ")]):e._e()],1)],1)},dt=[];const ct={components:{ArrowUpIcon:T},props:{handlePrev:Function,handleNext:Function,handleSkip:Function,handleFinish:Function,current:Number,total:Number}},h={};var vt=o(ct,rt,dt,!1,pt,"6946474b",null,null);function pt(e){for(let n in h)this[n]=h[n]}const s=function(){return vt.exports}(),ut={data(){return{visible:!1,current:-1,steps:[{element:".main-title-popup",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",description:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"bottom-right",content:s},{element:".label-field-1",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",description:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"bottom",content:s},{element:".label-field-2",title:"\u65B0\u624B\u5F15\u5BFC\u6807\u9898",description:"\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848",placement:"bottom-left",content:s}]}},methods:{handleClick(){this.visible=!0,setTimeout(()=>{this.current=0},1e3)},handleChange(e,{e:n,total:t}){console.log(e,n,t)},handlePrevStepClick({e,prev:n,current:t,total:i}){console.log(e,n,t,i)},handleNextStepClick({e,next:n,current:t,total:i}){console.log(e,n,t,i)},handleFinish({e,current:n,total:t}){this.visible=!1,console.log(e,n,t)},handleSkip({e,current:n,total:t}){this.visible=!1,console.log(e,n,t)}}};var _t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-row",{attrs:{justify:"center"}},[t("t-button",{on:{click:e.handleClick}},[e._v("\u65B0\u624B\u5F15\u5BFC")]),t("t-drawer",{attrs:{visible:e.visible,header:"\u6F14\u793A\u65B0\u624B\u5F15\u5BFC",size:"60%","show-overlay":!1,"destroy-on-close":""},on:{"update:visible":function(i){e.visible=i}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("t-button",{on:{click:function(i){e.visible=!1}}},[e._v(" \u5173\u95ED\u62BD\u5C49 ")])]},proxy:!0}])},[t("div",{staticClass:"guide-container"},[t("div",{staticClass:"main-title-popup"},[t("div",{staticClass:"title-major"},[e._v("Guide \u7528\u6237\u5F15\u5BFC")]),t("div",{staticClass:"title-sub"},[e._v("\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002")])]),t("div",{staticClass:"field label-field-1"},[t("div",{staticClass:"label"},[e._v("Label")]),t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("div",{staticClass:"field label-field-2"},[t("div",{staticClass:"label"},[e._v("Label")]),t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("t-row",{staticClass:"action"},[t("t-button",[e._v("\u786E\u5B9A")]),t("t-button",{attrs:{theme:"default",variant:"base"}},[e._v("\u53D6\u6D88")])],1)],1),t("t-guide",{attrs:{current:e.current,steps:e.steps},on:{"update:current":function(i){e.current=i},change:e.handleChange,"prev-step-click":e.handlePrevStepClick,"next-step-click":e.handleNextStepClick,finish:e.handleFinish,skip:e.handleSkip}})],1)],1)},mt=[];const b={};var ht=o(ut,_t,mt,!1,bt,"2dfd9cfb",null,null);function bt(e){for(let n in b)this[n]=b[n]}const gt=function(){return ht.exports}(),ft=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        :highlightPadding="32"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      current: -1,
      steps: [
        {
          element: '.main-title',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom-right',
        },
        {
          element: '.label-field',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom',
        },
        {
          element: '.action',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'right',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
      setTimeout(() => {
        this.current = 0;
      }, 1000);
    },
    handleChange(current, { e, total }) {
      console.log(current, e, total);
    },
    handlePrevStepClick({
      e, prev, current, total,
    }) {
      console.log(e, prev, current, total);
    },
    handleNextStepClick({
      e, next, current, total,
    }) {
      console.log(e, next, current, total);
    },
    handleFinish({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
    handleSkip({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
  },
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,xt=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        :show-overlay="false"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      current: -1,
      steps: [
        {
          element: '.main-title',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom-right',
        },
        {
          element: '.label-field',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom',
        },
        {
          element: '.action',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'right',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
      setTimeout(() => {
        this.current = 0;
      }, 1000);
    },

    handleChange(current, { e, total }) {
      console.log(current, e, total);
    },

    handlePrevStepClick({
      e, prev, current, total,
    }) {
      console.log(e, prev, current, total);
    },

    handleNextStepClick({
      e, next, current, total,
    }) {
      console.log(e, next, current, total);
    },

    handleFinish({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },

    handleSkip({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
  },
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,Ct=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        mode="dialog"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script>
import DialogBody from './dialog-body.vue';

export default {
  data() {
    return {
      visible: false,
      current: -1,
      steps: [
        {
          element: '.main-title',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: DialogBody,
          placement: 'bottom-right',
        },
        {
          element: '.label-field',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: DialogBody,
          placement: 'bottom',
        },
        {
          element: '.action',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: DialogBody,
          placement: 'right',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
      setTimeout(() => {
        this.current = 0;
      }, 1000);
    },

    handleChange(current, { e, total }) {
      console.log(current, e, total);
    },

    handlePrevStepClick({
      e, prev, current, total,
    }) {
      console.log(e, prev, current, total);
    },

    handleNextStepClick({
      e, next, current, total,
    }) {
      console.log(e, next, current, total);
    },

    handleFinish({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },

    handleSkip({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
  },
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,yt=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script>
import DialogBody from './dialog-body.vue';

export default {
  data() {
    return {
      visible: false,
      current: -1,
      steps: [
        {
          element: '.main-title',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom-right',
        },
        {
          element: '.label-field',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: DialogBody,
          placement: 'bottom',
          mode: 'dialog',
        },
        {
          element: '.action',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          body: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'right',
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
      setTimeout(() => {
        this.current = 0;
      }, 800);
    },

    handleChange(current, { e, total }) {
      console.log(current, e, total);
    },

    handlePrevStepClick({
      e, prev, current, total,
    }) {
      console.log(e, prev, current, total);
    },

    handleNextStepClick({
      e, next, current, total,
    }) {
      console.log(e, next, current, total);
    },

    handleFinish({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },

    handleSkip({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
  },
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`,kt=`<template>
  <t-row justify="center">
    <t-button @click="handleClick">\u65B0\u624B\u5F15\u5BFC</t-button>
    <t-drawer :visible.sync="visible" header="\u6F14\u793A\u65B0\u624B\u5F15\u5BFC" size="60%" :show-overlay="false" destroy-on-close>
      <template #footer>
        <t-button @click="visible = false"> \u5173\u95ED\u62BD\u5C49 </t-button>
      </template>
      <div class="guide-container">
        <div class="main-title-popup">
          <div class="title-major">Guide \u7528\u6237\u5F15\u5BFC</div>
          <div class="title-sub">\u6309\u94AE\u7528\u4E8E\u5F00\u542F\u4E00\u4E2A\u95ED\u73AF\u7684\u64CD\u4F5C\u4EFB\u52A1\uFF0C\u5982\u201C\u5220\u9664\u201D\u5BF9\u8C61\u3001\u201C\u8D2D\u4E70\u201D\u5546\u54C1\u7B49\u3002</div>
        </div>
        <div class="field label-field-1">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <div class="field label-field-2">
          <div class="label">Label</div>
          <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
        </div>
        <t-row class="action">
          <t-button>\u786E\u5B9A</t-button>
          <t-button theme="default" variant="base">\u53D6\u6D88</t-button>
        </t-row>
      </div>

      <t-guide
        :current.sync="current"
        :steps="steps"
        @change="handleChange"
        @prev-step-click="handlePrevStepClick"
        @next-step-click="handleNextStepClick"
        @finish="handleFinish"
        @skip="handleSkip"
      />
    </t-drawer>
  </t-row>
</template>

<script lang="jsx">
import MyPopup from './my-popup.vue';

export default {
  data() {
    return {
      visible: false,
      current: -1,
      steps: [
        {
          element: '.main-title-popup',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          description: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom-right',
          content: MyPopup,
        },
        {
          element: '.label-field-1',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          description: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom',
          content: MyPopup,
        },
        {
          element: '.label-field-2',
          title: '\u65B0\u624B\u5F15\u5BFC\u6807\u9898',
          description: '\u65B0\u624B\u5F15\u5BFC\u7684\u8BF4\u660E\u6587\u6848',
          placement: 'bottom-left',
          content: MyPopup,
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
      setTimeout(() => {
        this.current = 0;
      }, 1000);
    },
    handleChange(current, { e, total }) {
      console.log(current, e, total);
    },

    handlePrevStepClick({
      e, prev, current, total,
    }) {
      console.log(e, prev, current, total);
    },

    handleNextStepClick({
      e, next, current, total,
    }) {
      console.log(e, next, current, total);
    },

    handleFinish({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },

    handleSkip({ e, current, total }) {
      this.visible = false;
      console.log(e, current, total);
    },
  },
};
<\/script>

<style scoped>
.guide-container {
  max-width: 600px;
  padding: 40px;
}

.title-major {
  color: var(--td-text-color-primary);
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
}

.title-sub {
  margin-top: 8px;
  color: var(--td-text-color-secondary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.field {
  margin-top: 50px;
}

.label {
  margin-bottom: 8px;
  color: var(--td-text-color-primary);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}

.action {
  display: inline-flex;
  margin-top: 50px;
}

.action button:first-child {
  margin-right: 10px;
}
</style>
`;var St=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("td-doc-content",{ref:"tdDocContent",attrs:{"page-status":"hidden"}},[t("td-doc-header",{ref:"tdDocHeader",attrs:{slot:"doc-header",spline:"layout",platform:"web"},slot:"doc-header"},[t("td-doc-badge",{attrs:{slot:"badge",label:"coverage",message:"0%"},slot:"badge"})],1),t("td-doc-tabs",{ref:"tdDocTabs",attrs:{tab:e.tab}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="demo",expression:"tab === 'demo'"}]},[t("div",{attrs:{name:"DEMO"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u57FA\u672C\u5F15\u5BFC"}},[e._v("\u57FA\u672C\u5F15\u5BFC")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4E0D\u5E26\u906E\u7F69\u7684\u5F15\u5BFC"}},[e._v("\u4E0D\u5E26\u906E\u7F69\u7684\u5F15\u5BFC")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5F39\u7A97\u5F62\u5F0F\u7684\u5F15\u5BFC"}},[e._v("\u5F39\u7A97\u5F62\u5F0F\u7684\u5F15\u5BFC")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u6C14\u6CE1\u4E0E\u5F39\u7A97\u6DF7\u5408\u7684\u5F15\u5BFC"}},[e._v("\u6C14\u6CE1\u4E0E\u5F39\u7A97\u6DF7\u5408\u7684\u5F15\u5BFC")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u81EA\u5B9A\u4E49\u6C14\u6CE1"}},[e._v("\u81EA\u5B9A\u4E49\u6C14\u6CE1")])])])]),t("h3",{attrs:{id:"\u57FA\u672C\u5F15\u5BFC"}},[e._v("\u57FA\u672C\u5F15\u5BFC "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u57FA\u672C\u5F15\u5BFC"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--guide-base tdesign-demo-item--guide"},[t("td-doc-demo",{attrs:{code:e.DemoexamplebaseCode,"demo-name":"base",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"base","component-name":" guide",code:e.DemoexamplebaseCode}}),t("Codesandbox",{attrs:{"demo-name":"base","component-name":" guide",code:e.DemoexamplebaseCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplebase")],1)])],1),t("h3",{attrs:{id:"\u4E0D\u5E26\u906E\u7F69\u7684\u5F15\u5BFC"}},[e._v("\u4E0D\u5E26\u906E\u7F69\u7684\u5F15\u5BFC "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4E0D\u5E26\u906E\u7F69\u7684\u5F15\u5BFC"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--guide-no-mask tdesign-demo-item--guide"},[t("td-doc-demo",{attrs:{code:e.DemoexamplenomaskCode,"demo-name":"no-mask",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"no-mask","component-name":" guide",code:e.DemoexamplenomaskCode}}),t("Codesandbox",{attrs:{"demo-name":"no-mask","component-name":" guide",code:e.DemoexamplenomaskCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplenomask")],1)])],1),t("h3",{attrs:{id:"\u5F39\u7A97\u5F62\u5F0F\u7684\u5F15\u5BFC"}},[e._v("\u5F39\u7A97\u5F62\u5F0F\u7684\u5F15\u5BFC "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5F39\u7A97\u5F62\u5F0F\u7684\u5F15\u5BFC"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--guide-dialog tdesign-demo-item--guide"},[t("td-doc-demo",{attrs:{code:e.DemoexampledialogCode,"demo-name":"dialog",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"dialog","component-name":" guide",code:e.DemoexampledialogCode}}),t("Codesandbox",{attrs:{"demo-name":"dialog","component-name":" guide",code:e.DemoexampledialogCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampledialog")],1)])],1),t("h3",{attrs:{id:"\u6C14\u6CE1\u4E0E\u5F39\u7A97\u6DF7\u5408\u7684\u5F15\u5BFC"}},[e._v("\u6C14\u6CE1\u4E0E\u5F39\u7A97\u6DF7\u5408\u7684\u5F15\u5BFC "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u6C14\u6CE1\u4E0E\u5F39\u7A97\u6DF7\u5408\u7684\u5F15\u5BFC"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--guide-popup-dialog tdesign-demo-item--guide"},[t("td-doc-demo",{attrs:{code:e.DemoexamplepopupdialogCode,"demo-name":"popup-dialog",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"popup-dialog","component-name":" guide",code:e.DemoexamplepopupdialogCode}}),t("Codesandbox",{attrs:{"demo-name":"popup-dialog","component-name":" guide",code:e.DemoexamplepopupdialogCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplepopupdialog")],1)])],1),t("h3",{attrs:{id:"\u81EA\u5B9A\u4E49\u6C14\u6CE1"}},[e._v("\u81EA\u5B9A\u4E49\u6C14\u6CE1 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u81EA\u5B9A\u4E49\u6C14\u6CE1"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--guide-custom-popup tdesign-demo-item--guide"},[t("td-doc-demo",{attrs:{code:e.DemoexamplecustompopupCode,"demo-name":"custom-popup",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"custom-popup","component-name":" guide",code:e.DemoexamplecustompopupCode}}),t("Codesandbox",{attrs:{"demo-name":"custom-popup","component-name":" guide",code:e.DemoexamplecustompopupCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplecustompopup")],1)])],1)]),t("td-contributors",{attrs:{platform:"web",framework:"vue","component-name":"guide"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="api",expression:"tab === 'api'"}],attrs:{name:"API"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#guide-props"}},[e._v("Guide Props")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#guide-events"}},[e._v("Guide Events")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#guidestep"}},[e._v("GuideStep")])])])]),t("h3",{attrs:{id:"guide-props"}},[e._v("Guide Props "),t("a",{staticClass:"header-anchor",attrs:{href:"#guide-props"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("counter")]),t("td",[e._v("Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u6E32\u67D3\u8BA1\u6570\u90E8\u5206\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode<{ current: number; total: number }>")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("current")]),t("td",[e._v("Number")]),t("td",[e._v("-")]),t("td",[e._v("\u5F53\u524D\u6B65\u9AA4\uFF0C\u5373\u6574\u4E2A\u5F15\u5BFC\u7684\u8FDB\u5EA6\u3002-1 \u5219\u4E0D\u5C55\u793A\uFF0C\u7528\u4E8E\u9700\u8981\u4E2D\u65AD\u5C55\u793A\u7684\u573A\u666F\u3002\u652F\u6301\u8BED\u6CD5\u7CD6 "),t("code",[e._v("v-model")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("defaultCurrent")]),t("td",[e._v("Number")]),t("td",[e._v("-")]),t("td",[e._v("\u5F53\u524D\u6B65\u9AA4\uFF0C\u5373\u6574\u4E2A\u5F15\u5BFC\u7684\u8FDB\u5EA6\u3002-1 \u5219\u4E0D\u5C55\u793A\uFF0C\u7528\u4E8E\u9700\u8981\u4E2D\u65AD\u5C55\u793A\u7684\u573A\u666F\u3002\u975E\u53D7\u63A7\u5C5E\u6027")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("finishButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u900F\u4F20 \u5B8C\u6210 \u7684\u5168\u90E8\u5C5E\u6027\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("{ content: '\u5B8C\u6210', theme: 'primary' }")]),e._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("hideCounter")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u662F\u5426\u9690\u85CF\u8BA1\u6570")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("hidePrev")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u662F\u5426\u9690\u85CF\u4E0A\u4E00\u6B65\u6309\u94AE")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("hideSkip")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u662F\u5426\u9690\u85CF\u8DF3\u8FC7\u6309\u94AE")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("highlightPadding")]),t("td",[e._v("Number")]),t("td",[e._v("8")]),t("td",[e._v("\u9AD8\u4EAE\u6846\u7684\u5185\u8FB9\u8DDD")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("mode")]),t("td",[e._v("String")]),t("td",[e._v("popup")]),t("td",[e._v("\u5F15\u5BFC\u6846\u7684\u7C7B\u578B\u3002\u53EF\u9009\u9879\uFF1Apopup/dialog")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("nextButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u900F\u4F20 \u4E0B\u4E00\u6B65\u6309\u94AE \u7684\u5168\u90E8\u5C5E\u6027\uFF0C\u793A\u4F8B\uFF1A{ content: '\u4E0B\u4E00\u6B65', theme: 'primary' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")]),e._v("\uFF0C"),t("a",{attrs:{href:"./button?tab=api"}},[e._v("Button API Documents")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/guide/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("prevButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u900F\u4F20 \u4E0A\u4E00\u6B65\u6309\u94AE \u7684\u5168\u90E8\u5C5E\u6027\uFF0C\u793A\u4F8B\uFF1A{ content: '\u4E0A\u4E00\u6B65', theme: 'default' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("showOverlay")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u662F\u5426\u51FA\u73B0\u906E\u7F69\u5C42")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("skipButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u900F\u4F20 \u8DF3\u8FC7\u6309\u94AE \u7684\u5168\u90E8\u5C5E\u6027\uFF0C{ content: '\u8DF3\u8FC7', theme: 'default' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("steps")]),t("td",[e._v("Array")]),t("td",[e._v("-")]),t("td",[e._v("\u7528\u4E8E\u5B9A\u4E49\u6BCF\u4E2A\u6B65\u9AA4\u7684\u5185\u5BB9\uFF0C\u5305\u62EC\u9AD8\u4EAE\u7684\u8282\u70B9\u3001\u76F8\u5BF9\u4F4D\u7F6E\u548C\u5177\u4F53\u7684\u6587\u6848\u5185\u5BB9\u7B49\u3002\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("Array<GuideStep>")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("zIndex")]),t("td",[e._v("Number")]),t("td",[e._v("999999")]),t("td",[e._v("\u63D0\u793A\u6846\u7684\u5C42\u7EA7")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("onChange")]),t("td",[e._v("Function")]),t("td"),t("td",[e._v("TS \u7C7B\u578B\uFF1A"),t("code",[e._v("(current: number, context?: { e: MouseEvent, total: number }) => void")]),t("br"),e._v("\u5F53\u524D\u6B65\u9AA4\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("onFinish")]),t("td",[e._v("Function")]),t("td"),t("td",[e._v("TS \u7C7B\u578B\uFF1A"),t("code",[e._v("(context: { e: MouseEvent, current: number, total: number }) => void")]),t("br"),e._v("\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("onNextStepClick")]),t("td",[e._v("Function")]),t("td"),t("td",[e._v("TS \u7C7B\u578B\uFF1A"),t("code",[e._v("(context: { e: MouseEvent, next: number, current: number, total: number }) => void")]),t("br"),e._v("\u70B9\u51FB\u4E0B\u4E00\u6B65\u65F6\u89E6\u53D1")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("onPrevStepClick")]),t("td",[e._v("Function")]),t("td"),t("td",[e._v("TS \u7C7B\u578B\uFF1A"),t("code",[e._v("(context: { e: MouseEvent, prev: number, current: number, total: number }) => void")]),t("br"),e._v("\u70B9\u51FB\u4E0A\u4E00\u6B65\u65F6\u89E6\u53D1")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("onSkip")]),t("td",[e._v("Function")]),t("td"),t("td",[e._v("TS \u7C7B\u578B\uFF1A"),t("code",[e._v("(context: { e: MouseEvent, current: number, total: number }) => void")]),t("br"),e._v("\u70B9\u51FB\u8DF3\u8FC7\u6309\u94AE\u65F6\u89E6\u53D1")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"guide-events"}},[e._v("Guide Events "),t("a",{staticClass:"header-anchor",attrs:{href:"#guide-events"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u53C2\u6570")]),t("th",[e._v("\u63CF\u8FF0")])])]),t("tbody",[t("tr",[t("td",[e._v("change")]),t("td",[t("code",[e._v("(current: number, context?: { e: MouseEvent, total: number })")])]),t("td",[e._v("\u5F53\u524D\u6B65\u9AA4\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1")])]),t("tr",[t("td",[e._v("finish")]),t("td",[t("code",[e._v("(context: { e: MouseEvent, current: number, total: number })")])]),t("td",[e._v("\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u65F6\u89E6\u53D1")])]),t("tr",[t("td",[e._v("next-step-click")]),t("td",[t("code",[e._v("(context: { e: MouseEvent, next: number, current: number, total: number })")])]),t("td",[e._v("\u70B9\u51FB\u4E0B\u4E00\u6B65\u65F6\u89E6\u53D1")])]),t("tr",[t("td",[e._v("prev-step-click")]),t("td",[t("code",[e._v("(context: { e: MouseEvent, prev: number, current: number, total: number })")])]),t("td",[e._v("\u70B9\u51FB\u4E0A\u4E00\u6B65\u65F6\u89E6\u53D1")])]),t("tr",[t("td",[e._v("skip")]),t("td",[t("code",[e._v("(context: { e: MouseEvent, current: number, total: number })")])]),t("td",[e._v("\u70B9\u51FB\u8DF3\u8FC7\u6309\u94AE\u65F6\u89E6\u53D1")])])])]),t("h3",{attrs:{id:"guidestep"}},[e._v("GuideStep "),t("a",{staticClass:"header-anchor",attrs:{href:"#guidestep"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("body")]),t("td",[e._v("String / Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u5F53\u524D\u6B65\u9AA4\u63D0\u793A\u6846\u7684\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("content")]),t("td",[e._v("Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u7528\u6237\u81EA\u5B9A\u4E49\u5F15\u5BFC\u5F39\u6846\u7684\u5185\u5BB9\uFF0C\u4E00\u65E6\u5B58\u5728\uFF0C\u6B64\u65F6\u9664 "),t("code",[e._v("placement")]),e._v("\u3001"),t("code",[e._v("offset")]),e._v("\u548C"),t("code",[e._v("element")]),e._v(" \u5916\uFF0C\u5176\u5B83\u5C5E\u6027\u5168\u90E8\u5931\u6548\uFF09\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("element")]),t("td",[e._v("String / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u5FC5\u9700\u3002\u9AD8\u4EAE\u7684\u8282\u70B9\u3002\u6570\u636E\u7C7B\u578B\u4E3A String \u65F6\uFF0C\u4F1A\u88AB\u5F53\u4F5C\u9009\u62E9\u5668\u5904\u7406\uFF0C\u8FDB\u884C\u8282\u70B9\u67E5\u8BE2\u3002\u793A\u4F8B\uFF1A'#tdesign' \u6216 () => document.querySelector('#tdesign')\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("AttachNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("Y")])]),t("tr",[t("td",[e._v("highlightContent")]),t("td",[e._v("Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u9AD8\u4EAE\u6846 (\u4EC5\u5F53 "),t("code",[e._v("mode")]),e._v(" \u4E3A "),t("code",[e._v("popup")]),e._v(" \u65F6\u751F\u6548)\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("highlightPadding")]),t("td",[e._v("Number")]),t("td",[e._v("-")]),t("td",[e._v("\u9AD8\u4EAE\u6846\u7684\u5185\u8FB9\u8DDD")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("mode")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u5F15\u5BFC\u6846\u7684\u7C7B\u578B\u3002\u53EF\u9009\u9879\uFF1Apopup/dialog")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("nextButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u5F53\u524D\u5F15\u5BFC\u6846\u7684\u4E0B\u4E00\u6B65\u6309\u94AE\u7684\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("offset")]),t("td",[e._v("Array")]),t("td",[e._v("-")]),t("td",[e._v("\u3010\u8BA8\u8BBA\u786E\u8BA4\u4E2D\u3011\u76F8\u5BF9\u4E8E placement \u7684\u504F\u79FB\u91CF\uFF0C\u793A\u4F8B\uFF1A[-10, 20] \u6216 ['10px', '8px']\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("Array<string | number>")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("placement")]),t("td",[e._v("String")]),t("td",[e._v("'top'")]),t("td",[e._v("\u5F15\u5BFC\u6846\u76F8\u5BF9\u4E8E\u9AD8\u4EAE\u5143\u7D20\u51FA\u73B0\u7684\u4F4D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("StepPopupPlacement | StepDialogPlacement")]),e._v(" "),t("code",[e._v("type StepPopupPlacement = 'top'|'left'|'right'|'bottom'|'top-left'|'top-right'|'bottom-left'|'bottom-right'|'left-top'|'left-bottom'|'right-top'|'right-bottom'")]),e._v(" "),t("code",[e._v("type StepDialogPlacement = 'top'|'center' ")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/guide/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("popupProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u900F\u4F20\u5168\u90E8\u5C5E\u6027\u5230 Popup \u7EC4\u4EF6\u3002"),t("code",[e._v("mode=popup")]),e._v(" \u65F6\u6709\u6548\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("PopupProps")]),e._v("\uFF0C"),t("a",{attrs:{href:"./popup?tab=api"}},[e._v("Popup API Documents")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/guide/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("prevButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u5F53\u524D\u5F15\u5BFC\u6846\u7684\u4E0A\u4E00\u6B65\u6309\u94AE\u7684\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("showOverlay")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u662F\u5426\u51FA\u73B0\u906E\u7F69\u5C42")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("skipButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u7528\u4E8E\u81EA\u5B9A\u4E49\u5F53\u524D\u6B65\u9AA4\u5F15\u5BFC\u6846\u7684\u8DF3\u8FC7\u6309\u94AE\u7684\u5185\u5BB9\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("stepOverlayClass")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8986\u76D6\u5F15\u5BFC\u6846\u7684\u7C7B\u540D")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("title")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u5F53\u524D\u6B65\u9AA4\u7684\u6807\u9898\u5185\u5BB9")]),t("td",[e._v("N")])])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="design",expression:"tab === 'design'"}],attrs:{name:"DESIGN"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}},[e._v("\u4F55\u65F6\u4F7F\u7528")])])])]),t("h3",{attrs:{id:"\u4F55\u65F6\u4F7F\u7528"}},[e._v("\u4F55\u65F6\u4F7F\u7528 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u4F55\u65F6\u4F7F\u7528"}})]),t("p",[e._v("\u9010\u6B65\u9AA4\u8FDB\u884C\u6307\u5F15\u6216\u89E3\u91CA\u8BF4\u660E\u7684\u7EC4\u4EF6\uFF0C\u5E38\u7528\u4E8E\u7528\u6237\u4E0D\u719F\u6089\u7684\u6216\u9700\u8FDB\u884C\u7279\u522B\u5F3A\u8C03\u7684\u9875\u9762")])]),t("div",{staticStyle:{"margin-top":"48px"}},[t("td-doc-history",{attrs:{time:"1687013422723"}})],1),t("td-doc-footer",{attrs:{slot:"doc-footer"},slot:"doc-footer"})],1)},wt=[];const Pt={components:{Demoexamplebase:L,Demoexamplenomask:V,Demoexampledialog:et,Demoexamplepopupdialog:st,Demoexamplecustompopup:gt},data(){return{DemoexamplebaseCode:ft,DemoexamplenomaskCode:xt,DemoexampledialogCode:Ct,DemoexamplepopupdialogCode:yt,DemoexamplecustompopupCode:kt}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:n,tdDocTabs:t}=this.$refs;n&&(n.docInfo={title:"Guide \u5F15\u5BFC",desc:"\u9010\u6B65\u9AA4\u8FDB\u884C\u6307\u5F15\u6216\u89E3\u91CA\u8BF4\u660E\u7684\u7EC4\u4EF6\uFF0C\u5E38\u7528\u4E8E\u7528\u6237\u4E0D\u719F\u6089\u7684\u6216\u9700\u8FDB\u884C\u7279\u522B\u5F3A\u8C03\u7684\u9875\u9762\u3002"}),document.title="Guide \u5F15\u5BFC | TDesign Custom",t&&(t.tabs=[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"},{tab:"design",name:"\u6307\u5357"}],t.onchange=({detail:i})=>this.tab=i),D.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}},g={};var Nt=o(Pt,St,wt,!1,$t,null,null,null);function $t(e){for(let n in g)this[n]=g[n]}const zt=function(){return Nt.exports}();export{zt as default};
