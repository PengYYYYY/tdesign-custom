import{V as f,n as a}from"./index.fb7ca27a.js";import{M as s}from"./plugin.c2a54d0d.js";import{C as m}from"./chat.be6cd974.js";import{U as _}from"./user.faa0c8cb.js";import{H as V}from"./heart.aaefc36b.js";import{u as g,_ as x}from"./use-size-props.363c09d5.js";import{_ as y,I as b}from"./icon.ca3926ce.js";var B=["size"];function $(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function M(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?$(Object(e),!0).forEach(function(r){x(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):$(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var A={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 4a1 1 0 100-2 1 1 0 000 2zM8 9a1 1 0 100-2 1 1 0 000 2zM9 13a1 1 0 11-2 0 1 1 0 012 0z",fillOpacity:.9}}]},v=f.extend({name:"MoreIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,e){var r=e.props,o=e.data,i=r.size,l=y(r,B),c=g(i),u=c.className,p=c.style,d=M(M({},l||{}),{},{id:"more",icon:A,staticClass:u,style:p});return o.props=d,n(b,o)}}),K=["size"];function j(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function k(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?j(Object(e),!0).forEach(function(r){x(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var L={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M9.93 5.36a2.31 2.31 0 004.02-1.57 2.32 2.32 0 10-4.52.7L6.07 6.45a2.31 2.31 0 00-4.02 1.58A2.32 2.32 0 006.07 9.6l3.36 1.96a2.32 2.32 0 10.5-.87L6.57 8.73a2.32 2.32 0 000-1.41l3.36-1.96zm1.7-2.9a1.32 1.32 0 110 2.64 1.32 1.32 0 010-2.63zM5.5 7.35a.5.5 0 00.03.05 1.31 1.31 0 01-.03 1.33 1.32 1.32 0 110-1.38zm4.83 4.93c0-.22.05-.43.14-.6a.52.52 0 00.07-.13 1.32 1.32 0 11-.21.73z",fillOpacity:.9}}]},h=f.extend({name:"ShareIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,e){var r=e.props,o=e.data,i=r.size,l=y(r,K),c=g(i),u=c.className,p=c.style,d=k(k({},l||{}),{},{id:"share",icon:L,staticClass:u,style:p});return o.props=d,n(b,o)}}),G=["size"];function S(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function I(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?S(Object(e),!0).forEach(function(r){x(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):S(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var Q={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10 6h3.22a1 1 0 01.97 1.24l-1.5 6a1 1 0 01-.97.76H3a1 1 0 01-1-1V8a1 1 0 011-1h2l2-5h2a1 1 0 011 1v3zM6 7.2V13h5.72l1.5-6H9V3H7.68L6 7.2zM5 8H3v5h2V8z",fillOpacity:.9}}]},w=f.extend({name:"ThumbUpIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,e){var r=e.props,o=e.data,i=r.size,l=y(r,G),c=g(i),u=c.className,p=c.style,d=I(I({},l||{}),{},{id:"thumb-up",icon:Q,staticClass:u,style:p});return o.props=d,n(b,o)}}),W=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{bordered:""}},[t._v(" "+t._s(t.infoMessage)+" ")])},J=[];const X={data(){return{infoMessage:"\u4EC5\u6709\u5185\u5BB9\u533A\u57DF\u7684\u5361\u7247\u5F62\u5F0F\u3002\u5361\u7247\u5185\u5BB9\u533A\u57DF\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u3001\u8868\u5355\u3001\u8868\u683C\u7B49\u5F62\u5F0F\u4FE1\u606F\u5185\u5BB9\u3002\u53EF\u4F7F\u7528\u5927\u4E2D\u5C0F\u4E0D\u540C\u7684\u5361\u7247\u5C3A\u5BF8\uFF0C\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u5448\u73B0\u3002"}}},P={};var Y=a(X,W,J,!1,Z,null,null,null);function Z(t){for(let n in P)this[n]=P[n]}const me=function(){return Y.exports}();var tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo-card"},[e("t-card",{style:{width:"400px"},attrs:{title:t.title,bordered:!1,"hover-shadow":""},scopedSlots:t._u([{key:"actions",fn:function(){return[e("a",{staticStyle:{"line-height":"24px"},attrs:{href:"javascript:void(0)"},on:{click:t.clickHandler}},[t._v("\u64CD\u4F5C")])]},proxy:!0}])},[t._v(" "+t._s(t.infoMessage)+" ")])],1)},et=[];const nt={data(){return{title:"\u6807\u9898",actions:"\u64CD\u4F5C",infoMessage:"\u4EC5\u6709\u5185\u5BB9\u533A\u57DF\u7684\u5361\u7247\u5F62\u5F0F\u3002\u5361\u7247\u5185\u5BB9\u533A\u57DF\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u3001\u8868\u5355\u3001\u8868\u683C\u7B49\u5F62\u5F0F\u4FE1\u606F\u5185\u5BB9\u3002\u53EF\u4F7F\u7528\u5927\u4E2D\u5C0F\u4E0D\u540C\u7684\u5361\u7247\u5C3A\u5BF8\uFF0C\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u5448\u73B0\u3002"}},methods:{clickHandler(){s.success("\u64CD\u4F5C")}}},H={};var rt=a(nt,tt,et,!1,ot,"64f321f9",null,null);function ot(t){for(let n in H)this[n]=H[n]}const ve=function(){return rt.exports}();var at=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{title:t.title,"hover-shadow":""},scopedSlots:t._u([{key:"actions",fn:function(){return[e("a",{staticStyle:{"line-height":"24px"},attrs:{href:"javascript:void(0)"},on:{click:t.clickHandler}},[t._v("\u64CD\u4F5C")])]},proxy:!0}])},[t._v(" "+t._s(t.infoMessage)+" ")])},st=[];const ct={data(){return{title:"\u6807\u9898",infoMessage:"\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002"}},methods:{clickHandler(){s.success("\u64CD\u4F5C")}}},O={};var it=a(ct,at,st,!1,lt,null,null,null);function lt(t){for(let n in O)this[n]=O[n]}const he=function(){return it.exports}();var ut=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{title:t.title,"header-bordered":""},scopedSlots:t._u([{key:"actions",fn:function(){return[e("a",{staticStyle:{"line-height":"24px"},attrs:{href:"javascript:void(0)"},on:{click:t.clickHandler}},[t._v("\u64CD\u4F5C")])]},proxy:!0}])},[t._v(" "+t._s(t.infoMessage)+" ")])},pt=[];const dt={data(){return{title:"\u6807\u9898",infoMessage:"\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002"}},methods:{clickHandler(){s.success("\u64CD\u4F5C")}}},C={};var mt=a(dt,ut,pt,!1,vt,null,null,null);function vt(t){for(let n in C)this[n]=C[n]}const fe=function(){return mt.exports}(),ht={components:{ThumbUpIcon:w,ChatIcon:m,ShareIcon:h},data(){return{title:"\u6807\u9898",subtitle:"\u526F\u6807\u9898",actions:"\u9ED8\u8BA4\u6807\u7B7E",cover:"https://tdesign.gtimg.com/site/source/card-demo.png"}},methods:{icon(){const t=this.$createElement;return t(_)}}};var ft=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{cover:t.cover,bordered:""},scopedSlots:t._u([{key:"footer",fn:function(){return[e("t-row",{staticStyle:{gap:"24px"},attrs:{align:"middle",justify:"center"}},[e("t-col",{staticStyle:{display:"inline-flex","justify-content":"center"},attrs:{flex:"auto"}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("thumb-up-icon")],1)],1),e("t-col",{staticStyle:{display:"inline-flex","justify-content":"center"},attrs:{flex:"auto"}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("chat-icon")],1)],1),e("t-col",{staticStyle:{display:"inline-flex","justify-content":"center"},attrs:{flex:"auto"}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("share-icon")],1)],1)],1)]},proxy:!0}])})},_t=[];const q={};var gt=a(ht,ft,_t,!1,xt,null,null,null);function xt(t){for(let n in q)this[n]=q[n]}const _e=function(){return gt.exports}(),yt={components:{ThumbUpIcon:w,ChatIcon:m,ShareIcon:h,HeartIcon:V,MoreIcon:v},data(){return{cover:"https://tdesign.gtimg.com/site/source/card-demo.png",infoMessage:`\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u793A\u4F8B\u3002`,image:"https://tdesign.gtimg.com/site/avatar-boy.jpg",options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2}]}},methods:{icon(){const t=this.$createElement;return t(_)},clickHandler(t){s.success(`\u9009\u4E2D\u3010${t.content}\u3011`)}}};var bt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{direction:"vertical"}},[e("t-card",{style:{width:"400px"},attrs:{cover:t.cover,theme:"poster2"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("t-row",{staticStyle:{gap:"24px"},attrs:{align:"middle",justify:"center"}},[e("t-col",{staticStyle:{display:"inline-flex","justify-content":"center"},attrs:{flex:"auto"}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("thumb-up-icon")],1)],1),e("t-col",{staticStyle:{display:"inline-flex","justify-content":"center"},attrs:{flex:"auto"}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("chat-icon")],1)],1),e("t-col",{staticStyle:{display:"inline-flex","justify-content":"center"},attrs:{flex:"auto"}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("share-icon")],1)],1)],1)]},proxy:!0}])}),e("t-card",{style:{width:"400px"},attrs:{cover:t.cover,theme:"poster2"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("t-button",{style:{"margin-right":"8px"},attrs:{variant:"text",shape:"square"}},[e("heart-icon")],1),e("t-button",{style:{"margin-right":"8px"},attrs:{variant:"text",shape:"square"}},[e("chat-icon")],1),e("t-button",{attrs:{variant:"text",shape:"square"}},[e("share-icon")],1)]},proxy:!0},{key:"actions",fn:function(){return[e("t-dropdown",{attrs:{options:t.options,"min-column-width":112},on:{click:t.clickHandler}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("more-icon")],1)],1)]},proxy:!0}])}),e("t-card",{style:{width:"400px"},attrs:{cover:t.cover,theme:"poster2"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("t-avatar-group",{attrs:{cascading:"left-up",max:2}},[e("t-avatar",{attrs:{image:t.image}}),e("t-avatar",[t._v("Q")]),e("t-avatar",[t._v("C")]),e("t-avatar",[t._v("G")]),e("t-avatar",{attrs:{icon:t.icon}})],1)]},proxy:!0},{key:"actions",fn:function(){return[e("t-dropdown",{attrs:{options:t.options,"min-column-width":112},on:{click:t.clickHandler}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("more-icon")],1)],1)]},proxy:!0}])})],1)},wt=[];const D={};var $t=a(yt,bt,wt,!1,Mt,null,null,null);function Mt(t){for(let n in D)this[n]=D[n]}const ge=function(){return $t.exports}(),jt={data(){return{cover:"https://tdesign.gtimg.com/site/source/card-demo.png"}},methods:{clickHandler(t){s.success(`\u9009\u4E2D\u3010${t.content}\u3011`)}}};var kt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{cover:t.cover,theme:"poster2"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("t-comment",{attrs:{avatar:"https://tdesign.gtimg.com/site/avatar-boy.jpg",author:"\u6807\u9898",content:"\u5361\u7247\u5185\u5BB9"}})]},proxy:!0}])})},St=[];const z={};var It=a(jt,kt,St,!1,Pt,null,null,null);function Pt(t){for(let n in z)this[n]=z[n]}const xe=function(){return It.exports}();var Ht=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{cover:t.cover,theme:"poster2"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("t-comment",{attrs:{avatar:"https://tdesign.gtimg.com/site/avatar-boy.jpg",author:"\u6807\u9898",content:"\u5361\u7247\u5185\u5BB9"}})]},proxy:!0},{key:"actions",fn:function(){return[e("t-dropdown",{attrs:{options:t.options,"min-column-width":112},on:{click:t.clickHandler}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("more-icon")],1)],1)]},proxy:!0}])})},Ot=[];const Ct={components:{MoreIcon:v},data(){return{infoMessage:`\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u793A\u4F8B\u3002`,options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2}],cover:"https://tdesign.gtimg.com/site/source/card-demo.png"}},methods:{clickHandler(t){s.success(`\u9009\u4E2D\u3010${t.content}\u3011`)}}},E={};var qt=a(Ct,Ht,Ot,!1,Dt,"45b88b6a",null,null);function Dt(t){for(let n in E)this[n]=E[n]}const ye=function(){return qt.exports}(),zt={components:{ThumbUpIcon:w,ChatIcon:m,ShareIcon:h,MoreIcon:v},data(){return{title:"\u6807\u9898",subtitle:"\u526F\u6807\u9898",image:"https://tdesign.gtimg.com/site/avatar-boy.jpg",cover:"https://tdesign.gtimg.com/site/source/card-demo.png",options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2}]}},methods:{icon(){const t=this.$createElement;return t(_)},clickHandler(){s.success("\u64CD\u4F5C")}}};var Et=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{title:t.title,subtitle:t.subtitle,cover:t.cover},scopedSlots:t._u([{key:"actions",fn:function(){return[e("t-dropdown",{attrs:{options:t.options,"min-column-width":112},on:{click:t.clickHandler}},[e("div",{staticClass:"tdesign-demo-dropdown-trigger"},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("more-icon")],1)],1)])]},proxy:!0},{key:"footer",fn:function(){return[e("t-row",{staticStyle:{gap:"24px"},attrs:{align:"middle",justify:"center"}},[e("t-col",{staticStyle:{display:"inline-flex","justify-content":"center"},attrs:{flex:"auto"}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("thumb-up-icon")],1)],1),e("t-col",{staticStyle:{display:"inline-flex","justify-content":"center"},attrs:{flex:"auto"}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("chat-icon")],1)],1),e("t-col",{staticStyle:{display:"inline-flex","justify-content":"center"},attrs:{flex:"auto"}},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("share-icon")],1)],1)],1)]},proxy:!0}])})},Ut=[];const U={};var Ft=a(zt,Et,Ut,!1,Rt,null,null,null);function Rt(t){for(let n in U)this[n]=U[n]}const be=function(){return Ft.exports}();var Tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{cover:t.cover,title:"\u6807\u9898",description:"\u5361\u7247\u5185\u5BB9"},scopedSlots:t._u([{key:"avatar",fn:function(){return[e("t-avatar",{attrs:{image:"https://tdesign.gtimg.com/site/avatar-boy.jpg",size:"56px"}})]},proxy:!0},{key:"actions",fn:function(){return[e("t-dropdown",{attrs:{options:t.options,"min-column-width":112},on:{click:t.clickHandler}},[e("div",{staticClass:"tdesign-demo-dropdown-trigger"},[e("t-button",{attrs:{variant:"text",shape:"square"}},[e("more-icon")],1)],1)])]},proxy:!0},{key:"footer",fn:function(){return[e("t-button",{style:{"margin-right":"8px"},attrs:{variant:"text",shape:"square"}},[e("heart-icon")],1),e("t-button",{style:{"margin-right":"8px"},attrs:{variant:"text",shape:"square"}},[e("chat-icon")],1),e("t-button",{attrs:{variant:"text",shape:"square"}},[e("share-icon")],1)]},proxy:!0}])})},Nt=[];const Vt={components:{HeartIcon:V,ChatIcon:m,ShareIcon:h,MoreIcon:v},data(){return{cover:"https://tdesign.gtimg.com/site/source/card-demo.png",options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2}]}},methods:{clickHandler(){s.success("\u64CD\u4F5C")}}},F={};var Bt=a(Vt,Tt,Nt,!1,At,"d55d3356",null,null);function At(t){for(let n in F)this[n]=F[n]}const we=function(){return Bt.exports}();var Kt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{title:t.title,subtitle:t.subtitle,actions:t.actions,"hover-shadow":""},on:{actions:t.clickHandler}},[t._v(" "+t._s(t.infoMessage)+" ")])},Lt=[];const Gt={data(){return{title:"\u6807\u9898",subtitle:"\u526F\u6807\u9898",actions:"\u64CD\u4F5C",infoMessage:"\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002"}},methods:{clickHandler(){s.success("\u64CD\u4F5C")}}},R={};var Qt=a(Gt,Kt,Lt,!1,Wt,null,null,null);function Wt(t){for(let n in R)this[n]=R[n]}const $e=function(){return Qt.exports}();var Jt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{title:t.title,description:t.description,actions:t.actions,"hover-shadow":""},on:{actions:t.clickHandler}},[t._v(" "+t._s(t.infoMessage)+" ")])},Xt=[];const Yt={data(){return{title:"\u6807\u9898",description:"\u63CF\u8FF0",actions:"\u64CD\u4F5C",infoMessage:"\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002"}},methods:{clickHandler(){s.success("\u64CD\u4F5C")}}},T={};var Zt=a(Yt,Jt,Xt,!1,te,null,null,null);function te(t){for(let n in T)this[n]=T[n]}const Me=function(){return Zt.exports}();var ee=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-card",{style:{width:"400px"},attrs:{title:t.title,subtitle:t.subtitle,description:t.description,actions:t.actions,"hover-shadow":""},on:{actions:t.clickHandler}},[t._v(" "+t._s(t.infoMessage)+" ")])},ne=[];const re={data(){return{title:"\u6807\u9898",subtitle:"\u526F\u6807\u9898",description:"\u63CF\u8FF0",actions:"\u64CD\u4F5C",infoMessage:"\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002"}},methods:{clickHandler(){s.success("\u64CD\u4F5C")}}},N={};var oe=a(re,ee,ne,!1,ae,null,null,null);function ae(t){for(let n in N)this[n]=N[n]}const je=function(){return oe.exports}(),ke=`<template>
  <t-card bordered :style="{ width: '400px' }"> {{ infoMessage }} </t-card>
</template>

<script>
export default {
  data() {
    return {
      infoMessage:
        '\u4EC5\u6709\u5185\u5BB9\u533A\u57DF\u7684\u5361\u7247\u5F62\u5F0F\u3002\u5361\u7247\u5185\u5BB9\u533A\u57DF\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u3001\u8868\u5355\u3001\u8868\u683C\u7B49\u5F62\u5F0F\u4FE1\u606F\u5185\u5BB9\u3002\u53EF\u4F7F\u7528\u5927\u4E2D\u5C0F\u4E0D\u540C\u7684\u5361\u7247\u5C3A\u5BF8\uFF0C\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u5448\u73B0\u3002',
    };
  },
};
<\/script>
`,Se=`<template>
  <div class="demo-card">
    <t-card :title="title" :bordered="false" hover-shadow :style="{ width: '400px' }">
      {{ infoMessage }}
      <template #actions>
        <a href="javascript:void(0)" @click="clickHandler" style="line-height: 24px">\u64CD\u4F5C</a>
      </template>
    </t-card>
  </div>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      actions: '\u64CD\u4F5C',
      infoMessage:
        '\u4EC5\u6709\u5185\u5BB9\u533A\u57DF\u7684\u5361\u7247\u5F62\u5F0F\u3002\u5361\u7247\u5185\u5BB9\u533A\u57DF\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u3001\u8868\u5355\u3001\u8868\u683C\u7B49\u5F62\u5F0F\u4FE1\u606F\u5185\u5BB9\u3002\u53EF\u4F7F\u7528\u5927\u4E2D\u5C0F\u4E0D\u540C\u7684\u5361\u7247\u5C3A\u5BF8\uFF0C\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u5448\u73B0\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
<style lang="less" scoped>
.demo-card {
  padding: 16px;
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,Ie=`<template>
  <t-card :title="title" hover-shadow :style="{ width: '400px' }">
    {{ infoMessage }}
    <template #actions>
      <a href="javascript:void(0)" @click="clickHandler" style="line-height: 24px">\u64CD\u4F5C</a>
    </template>
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,Pe=`<template>
  <t-card :title="title" header-bordered :style="{ width: '400px' }">
    {{ infoMessage }}
    <template #actions>
      <a href="javascript:void(0)" @click="clickHandler" style="line-height: 24px">\u64CD\u4F5C</a>
    </template>
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,He=`<template>
  <t-card :cover="cover" bordered :style="{ width: '400px' }">
    <template #footer>
      <t-row :align="'middle'" justify="center" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <thumb-up-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <chat-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <share-icon />
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</template>
<script lang="jsx">
import {
  ThumbUpIcon, ChatIcon, ShareIcon, UserIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
    ShareIcon,
  },
  data() {
    return {
      title: '\u6807\u9898',
      subtitle: '\u526F\u6807\u9898',
      actions: '\u9ED8\u8BA4\u6807\u7B7E',
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
    };
  },
  methods: {
    icon() {
      return <UserIcon />;
    },
  },
};
<\/script>
`,Oe=`<template>
  <t-space direction="vertical">
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-row :align="'middle'" justify="center" style="gap: 24px">
          <t-col flex="auto" style="display: inline-flex; justify-content: center">
            <t-button variant="text" shape="square">
              <thumb-up-icon />
            </t-button>
          </t-col>

          <t-col flex="auto" style="display: inline-flex; justify-content: center">
            <t-button variant="text" shape="square">
              <chat-icon />
            </t-button>
          </t-col>

          <t-col flex="auto" style="display: inline-flex; justify-content: center">
            <t-button variant="text" shape="square">
              <share-icon />
            </t-button>
          </t-col>
        </t-row>
      </template>
    </t-card>
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
          <heart-icon />
        </t-button>
        <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
          <chat-icon />
        </t-button>
        <t-button variant="text" shape="square">
          <share-icon />
        </t-button>
      </template>
      <template #actions>
        <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </t-dropdown>
      </template>
    </t-card>
    <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
      <template #footer>
        <t-avatar-group cascading="left-up" :max="2">
          <t-avatar :image="image" />
          <t-avatar>Q</t-avatar>
          <t-avatar>C</t-avatar>
          <t-avatar>G</t-avatar>
          <t-avatar :icon="icon" />
        </t-avatar-group>
      </template>
      <template #actions>
        <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </t-dropdown>
      </template>
    </t-card>
  </t-space>
</template>
<script lang="jsx">
import {
  ThumbUpIcon, ChatIcon, ShareIcon, HeartIcon, MoreIcon, UserIcon,
} from 'tdesign-icons-vue';
import { MessagePlugin } from 'tdesign-vue';

export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
    ShareIcon,
    HeartIcon,
    MoreIcon,
  },
  data() {
    return {
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
      infoMessage: \`\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u793A\u4F8B\u3002\`,
      image: 'https://tdesign.gtimg.com/site/avatar-boy.jpg',
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
      ],
    };
  },
  methods: {
    icon() {
      return <UserIcon />;
    },
    clickHandler(data) {
      MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
`,Ce=`<template>
  <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
    <template #footer>
      <t-comment avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg" author="\u6807\u9898" content="\u5361\u7247\u5185\u5BB9" />
    </template>
  </t-card>
</template>
<script lang="jsx">
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
    };
  },
  methods: {
    clickHandler(data) {
      MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
`,qe=`<template>
  <t-card :cover="cover" theme="poster2" :style="{ width: '400px' }">
    <template #footer>
      <t-comment avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg" author="\u6807\u9898" content="\u5361\u7247\u5185\u5BB9" />
    </template>
    <template #actions>
      <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
        <t-button variant="text" shape="square">
          <more-icon />
        </t-button>
      </t-dropdown>
    </template>
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';
import { MoreIcon } from 'tdesign-icons-vue';

export default {
  components: {
    MoreIcon,
  },
  data() {
    return {
      infoMessage: \`\u8FD9\u662F\u4E00\u6BB5\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F
  \u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u7684\u5185\u5BB9\u793A\u4F8B\u3002\`,
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
      ],
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
    };
  },
  methods: {
    clickHandler(data) {
      MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
<style scoped>
.tdesign-demo-block /deep/ .t-card__actions {
  display: flex;
  align-items: center;
}
</style>
`,De=`<template>
  <t-card :title="title" :subtitle="subtitle" :cover="cover" :style="{ width: '400px' }">
    <template #actions>
      <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
        <div class="tdesign-demo-dropdown-trigger">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </div>
      </t-dropdown>
    </template>
    <template #footer>
      <t-row :align="'middle'" justify="center" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <thumb-up-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <chat-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <share-icon />
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</template>
<script lang="jsx">
import {
  ThumbUpIcon, ChatIcon, ShareIcon, MoreIcon, UserIcon,
} from 'tdesign-icons-vue';
import { MessagePlugin } from 'tdesign-vue';

export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
    ShareIcon,
    MoreIcon,
  },
  data() {
    return {
      title: '\u6807\u9898',
      subtitle: '\u526F\u6807\u9898',
      image: 'https://tdesign.gtimg.com/site/avatar-boy.jpg',
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
      ],
    };
  },
  methods: {
    icon() {
      return <UserIcon />;
    },
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,ze=`<template>
  <t-card :cover="cover" title="\u6807\u9898" description="\u5361\u7247\u5185\u5BB9" :style="{ width: '400px' }">
    <template #avatar>
      <t-avatar image="https://tdesign.gtimg.com/site/avatar-boy.jpg" size="56px"></t-avatar>
    </template>
    <template #actions>
      <t-dropdown :options="options" :min-column-width="112" @click="clickHandler">
        <div class="tdesign-demo-dropdown-trigger">
          <t-button variant="text" shape="square">
            <more-icon />
          </t-button>
        </div>
      </t-dropdown>
    </template>
    <template #footer>
      <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
        <heart-icon />
      </t-button>
      <t-button variant="text" shape="square" :style="{ 'margin-right': '8px' }">
        <chat-icon />
      </t-button>
      <t-button variant="text" shape="square">
        <share-icon />
      </t-button>
    </template>
  </t-card>
</template>
<script>
import {
  HeartIcon, ChatIcon, ShareIcon, MoreIcon,
} from 'tdesign-icons-vue';

import { MessagePlugin } from 'tdesign-vue';

export default {
  components: {
    HeartIcon,
    ChatIcon,
    ShareIcon,
    MoreIcon,
  },
  data() {
    return {
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
      ],
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
<style scoped>
.tdesign-demo-block /deep/ .t-card__actions {
  display: flex;
  align-items: center;
}
</style>
`,Ee=`<template>
  <t-card
    :title="title"
    :subtitle="subtitle"
    :actions="actions"
    hover-shadow
    @actions="clickHandler"
    :style="{ width: '400px' }"
  >
    {{ infoMessage }}
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      subtitle: '\u526F\u6807\u9898',
      actions: '\u64CD\u4F5C',
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,Ue=`<template>
  <t-card
    :title="title"
    :description="description"
    :actions="actions"
    hover-shadow
    @actions="clickHandler"
    :style="{ width: '400px' }"
  >
    {{ infoMessage }}
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      description: '\u63CF\u8FF0',
      actions: '\u64CD\u4F5C',
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`,Fe=`<template>
  <t-card
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :actions="actions"
    hover-shadow
    @actions="clickHandler"
    :style="{ width: '400px' }"
  >
    {{ infoMessage }}
  </t-card>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      title: '\u6807\u9898',
      subtitle: '\u526F\u6807\u9898',
      description: '\u63CF\u8FF0',
      actions: '\u64CD\u4F5C',
      infoMessage: '\u5361\u7247\u5185\u5BB9\uFF0C\u4EE5\u63CF\u8FF0\u6027\u4E3A\u4E3B\uFF0C\u53EF\u4EE5\u662F\u6587\u5B57\u3001\u56FE\u7247\u6216\u56FE\u6587\u7EC4\u5408\u7684\u5F62\u5F0F\u3002\u6309\u4E1A\u52A1\u9700\u6C42\u8FDB\u884C\u81EA\u5B9A\u4E49\u7EC4\u5408\u3002',
    };
  },
  methods: {
    clickHandler() {
      MessagePlugin.success('\u64CD\u4F5C');
    },
  },
};
<\/script>
`;export{me as D,ve as a,he as b,fe as c,_e as d,ge as e,xe as f,ye as g,be as h,we as i,$e as j,Me as k,je as l,ke as m,Se as n,Ie as o,Pe as p,He as q,Oe as r,Ce as s,qe as t,De as u,ze as v,Ee as w,Ue as x,Fe as y};
