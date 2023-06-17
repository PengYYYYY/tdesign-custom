import{V as m,n as i,r as h}from"./index.fb7ca27a.js";import{u as v,_ as d}from"./use-size-props.363c09d5.js";import{_,I as f}from"./icon.ca3926ce.js";import{C as E}from"./cart.a5bc8a8d.js";var q=["size"];function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,s)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?y(Object(t),!0).forEach(function(s){d(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}var L={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.5 8.2L7 10.7l4.5-4.5-.7-.7L7 9.3 5.2 7.5l-.7.7z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M4.11 2.18a7 7 0 117.78 11.64A7 7 0 014.1 2.18zm.56 10.8a6 6 0 106.66-9.97A6 6 0 004.67 13z",fillOpacity:.9}}]},M=m.extend({name:"CheckCircleIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var s=t.props,r=t.data,o=s.size,c=_(s,q),a=v(o),l=a.className,p=a.style,u=g(g({},c||{}),{},{id:"check-circle",icon:L,staticClass:l,style:p});return r.props=u,n(f,r)}}),V=["size"];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,s)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?b(Object(t),!0).forEach(function(s){d(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}var F={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.48 7.5L6.23 5.25l.7-.7 3.1 3.1c.2.2.2.5 0 .7l-3.1 3.1-.7-.7L8.48 8.5H1v-1h7.48z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M4 5V3h8v10H4v-2H3v2.5c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5V5h1z",fillOpacity:.9}}]},W=m.extend({name:"LoginIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var s=t.props,r=t.data,o=s.size,c=_(s,V),a=v(o),l=a.className,p=a.style,u=$($({},c||{}),{},{id:"login",icon:F,staticClass:l,style:p});return r.props=u,n(f,r)}}),R=["size"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,s)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?x(Object(t),!0).forEach(function(s){d(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}var T={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M11.5 4.5h2a1 1 0 011 1V12a1 1 0 01-1 1h-11a1 1 0 01-1-1V3a1 1 0 011-1h8a1 1 0 011 1v1.5zm-1-1.5h-8v1.5h8V3zm3 2.5h-11V12h11V5.5z",fillOpacity:.9}}]},N=m.extend({name:"WalletIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var s=t.props,r=t.data,o=s.size,c=_(s,R),a=v(o),l=a.className,p=a.style,u=C(C({},c||{}),{},{id:"wallet",icon:T,staticClass:l,style:p});return r.props=u,n(f,r)}}),B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical",size:"large"}},[t("t-steps",{attrs:{defaultCurrent:1}},[t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4"}}),t("t-step-item",{attrs:{title:"\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4"}})],1),t("t-steps",{attrs:{options:e.steps},model:{value:e.current,callback:function(s){e.current=s},expression:"current"}})],1)},A=[];const H={data(){return{current:"third",steps:[{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",value:"first",content:"\u70B9\u51FB\u5207\u6362\u6B65\u9AA4"},{title:"\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4",value:"second",content:"\u70B9\u51FB\u5207\u6362\u6B65\u9AA4"},{title:"\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4",value:"third",content:()=>"\u8FD9\u662F\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4"},{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",value:"forth",content:"\u70B9\u51FB\u5207\u6362\u6B65\u9AA4"}]}}},O={};var K=i(H,B,A,!1,U,null,null,null);function U(e){for(let n in O)this[n]=O[n]}const Et=function(){return K.exports}();var J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-steps",{attrs:{theme:"dot",current:e.current,readonly:""}},[t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}})],1)},G=[];const Q={data(){return{current:1}}},j={};var X=i(Q,J,G,!1,Y,null,null,null);function Y(e){for(let n in j)this[n]=j[n]}const qt=function(){return X.exports}();var Z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{staticClass:"justify-around"},[t("t-steps",{attrs:{layout:"vertical",theme:"dot",current:1,readonly:""}},[t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}})],1),t("t-steps",{attrs:{layout:"vertical",sequence:"reverse",theme:"dot",current:1,readonly:""}},[t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}})],1)],1)},tt=[];const et={},z={};var nt=i(et,Z,tt,!1,st,"56160769",null,null);function st(e){for(let n in z)this[n]=z[n]}const Lt=function(){return nt.exports}();var rt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{staticClass:"justify-around",attrs:{size:236}},[t("t-steps",{attrs:{layout:"vertical",current:1,readonly:""}},[t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}})],1),t("t-steps",{attrs:{layout:"vertical",sequence:"reverse",current:1,readonly:""}},[t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}})],1)],1)},at=[];const ot={},P={};var it=i(ot,rt,at,!1,ct,"484a6fca",null,null);function ct(e){for(let n in P)this[n]=P[n]}const Mt=function(){return it.exports}();var lt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical",size:"large"}},[t("t-steps",{attrs:{current:1,readonly:""}},[t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}})],1),t("t-steps",{attrs:{current:2,readonly:""}},[t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u9519\u8BEF\u7684\u6B65\u9AA4",status:"error",content:"\u8FD9\u91CC\u662F\u9519\u8BEF\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u672A\u8FDB\u884C\u7684\u6B65\u9AA4",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}})],1)],1)},pt=[];const ut={},S={};var mt=i(ut,lt,pt,!1,vt,null,null,null);function vt(e){for(let n in S)this[n]=S[n]}const Vt=function(){return mt.exports}(),dt={components:{TLoginIcon:W},methods:{renderCartIcon(){const e=this.$createElement;return e(E)},renderWalletIcon(){const e=this.$createElement;return e(N)},renderSuccessIcon(){const e=this.$createElement;return e(M)}}};var _t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-steps",{attrs:{current:1,readonly:""}},[t("t-step-item",{attrs:{title:"\u767B\u5F55",content:"\u5DF2\u5B8C\u6210\u72B6\u6001"}},[t("t-login-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-step-item",{attrs:{title:"\u8D2D\u7269",content:"\u8FDB\u884C\u4E2D\u72B6\u6001",icon:e.renderCartIcon}}),t("t-step-item",{attrs:{title:"\u652F\u4ED8",content:"\u672A\u5F00\u59CB",icon:e.renderWalletIcon}}),t("t-step-item",{attrs:{title:"\u5B8C\u6210",content:"\u672A\u5F00\u59CB",icon:e.renderSuccessIcon}})],1)},ft=[];const w={};var ht=i(dt,_t,ft,!1,yt,null,null,null);function yt(e){for(let n in w)this[n]=w[n]}const Ft=function(){return ht.exports}(),gt={data(){return{current:1}},methods:{onCurChanged(e,n){this.current=e,console.log("TDesign Steps:",`current: ${e}, previous: ${n}`)},renderTitle(){const e=this.$createElement;return e("div",{class:"demo"},["\u6B65\u9AA41"])}}};var bt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-steps",{attrs:{layout:"vertical",current:e.current,onChange:e.onCurChanged}},[t("t-step-item",{attrs:{title:e.renderTitle,content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}},[e.current===0?t("template",{slot:"extra"},[t("t-button",{attrs:{size:"small",variant:"base"},on:{click:function(s){s.stopPropagation(),e.current++}}},[e._v("\u4E0B\u4E00\u6B65")])],1):e._e()],2),t("t-step-item",{attrs:{title:"\u6B65\u9AA42",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}},[e.current===1?t("template",{slot:"extra"},[t("t-space",{attrs:{size:"small"}},[t("t-button",{attrs:{size:"small",variant:"text"},on:{click:function(s){s.stopPropagation(),e.current--}}},[e._v("\u4E0A\u4E00\u6B65")]),t("t-button",{attrs:{size:"small",variant:"base"},on:{click:function(s){s.stopPropagation(),e.current++}}},[e._v("\u4E0B\u4E00\u6B65")])],1)],1):e._e()],2),t("t-step-item",{attrs:{title:"\u6B65\u9AA43",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}},[e.current===2?t("template",{slot:"extra"},[t("t-space",{attrs:{size:"small"}},[t("t-button",{attrs:{size:"small",variant:"text"},on:{click:function(s){s.stopPropagation(),e.current--}}},[e._v("\u4E0A\u4E00\u6B65")]),t("t-button",{attrs:{size:"small",variant:"base"},on:{click:function(s){s.stopPropagation(),e.current++}}},[e._v("\u4E0B\u4E00\u6B65")])],1)],1):e._e()],2),t("t-step-item",{attrs:{title:"\u6B65\u9AA44",content:"\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"}},[e.current===3?t("template",{slot:"extra"},[t("t-button",{attrs:{size:"small"},on:{click:function(s){s.stopPropagation(),e.current--}}},[e._v("\u4E0A\u4E00\u6B65")])],1):e._e()],2)],1)},$t=[];const D={};var xt=i(gt,bt,$t,!1,Ct,null,null,null);function Ct(e){for(let n in D)this[n]=D[n]}const Wt=function(){return xt.exports}(),Rt=`<template>
  <t-space direction="vertical" size="large">
    <!-- \u5982\u679C t-step-item \u6CA1\u6709\u4F20\u5165 value\uFF0C\u5219\u4F7F\u7528 index \u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6 -->
    <t-steps :defaultCurrent="1">
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4"></t-step-item>
    </t-steps>
    <!-- \u4F7F\u7528 options \u6E32\u67D3\u6B65\u9AA4\u6761 -->
    <t-steps v-model="current" :options="steps"></t-steps>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      current: 'third',
      steps: [
        { title: '\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4', value: 'first', content: '\u70B9\u51FB\u5207\u6362\u6B65\u9AA4' },
        { title: '\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4', value: 'second', content: '\u70B9\u51FB\u5207\u6362\u6B65\u9AA4' },
        { title: '\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4', value: 'third', content: () => '\u8FD9\u662F\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4' },
        { title: '\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4', value: 'forth', content: '\u70B9\u51FB\u5207\u6362\u6B65\u9AA4' },
      ],
    };
  },
};
<\/script>
`,Tt=`<template>
  <t-steps theme="dot" :current="current" readonly>
    <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
  </t-steps>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
    };
  },
};
<\/script>
`,Nt=`<template>
  <t-space class="justify-around">
    <t-steps layout="vertical" theme="dot" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>

    <t-steps layout="vertical" sequence="reverse" theme="dot" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
  </t-space>
</template>
<style scoped>
.justify-around {
  justify-content: space-around;
}
</style>
`,Bt=`<template>
  <t-space :size="236" class="justify-around">
    <t-steps layout="vertical" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
    <t-steps layout="vertical" sequence="reverse" :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
  </t-space>
</template>

<style scoped>
.justify-around {
  justify-content: space-around;
}
</style>
`,At=`<template>
  <t-space direction="vertical" size="large">
    <t-steps :current="1" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u8FDB\u884C\u4E2D\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
    <t-steps :current="2" readonly>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u5DF2\u5B8C\u6210\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u9519\u8BEF\u7684\u6B65\u9AA4" status="error" content="\u8FD9\u91CC\u662F\u9519\u8BEF\u63D0\u793A\u6587\u5B57"></t-step-item>
      <t-step-item title="\u672A\u8FDB\u884C\u7684\u6B65\u9AA4" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57"></t-step-item>
    </t-steps>
  </t-space>
</template>
`,Ht=`<template>
  <t-steps :current="1" readonly>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u56FE\u6807 -->
    <t-step-item title="\u767B\u5F55" content="\u5DF2\u5B8C\u6210\u72B6\u6001">
      <t-login-icon slot="icon" />
    </t-step-item>
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u6E32\u67D3\u51FD\u6570 icon \u81EA\u5B9A\u4E49\u56FE\u6807 -->
    <t-step-item title="\u8D2D\u7269" content="\u8FDB\u884C\u4E2D\u72B6\u6001" :icon="renderCartIcon"></t-step-item>
    <t-step-item title="\u652F\u4ED8" content="\u672A\u5F00\u59CB" :icon="renderWalletIcon"></t-step-item>
    <t-step-item title="\u5B8C\u6210" content="\u672A\u5F00\u59CB" :icon="renderSuccessIcon"></t-step-item>
  </t-steps>
</template>

<script lang="jsx">
import {
  LoginIcon, CartIcon, WalletIcon, CheckCircleIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    TLoginIcon: LoginIcon,
  },
  methods: {
    // \u5982\u679C\u9047\u5230 h / createElement \u51FD\u6570\u62A5\u9519\uFF0C\u8BF7\u7ED9\u6E32\u67D3\u51FD\u6570\u6DFB\u52A0\u53C2\u6570 h\u3002\u793A\u4F8B\uFF1ArenderCartIcon(h) {}
    renderCartIcon() {
      return <CartIcon />;
    },
    renderWalletIcon() {
      return <WalletIcon />;
    },
    renderSuccessIcon() {
      return <CheckCircleIcon />;
    },
  },
};
<\/script>
`,Kt=`<template>
  <t-steps layout="vertical" :current="current" :onChange="onCurChanged">
    <t-step-item :title="renderTitle" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 0">
        <t-button size="small" variant="base" @click.stop="current++">\u4E0B\u4E00\u6B65</t-button>
      </template>
    </t-step-item>
    <t-step-item title="\u6B65\u9AA42" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 1">
        <t-space size="small">
          <t-button size="small" variant="text" @click.stop="current--">\u4E0A\u4E00\u6B65</t-button>
          <t-button size="small" variant="base" @click.stop="current++">\u4E0B\u4E00\u6B65</t-button>
        </t-space>
      </template>
    </t-step-item>
    <t-step-item title="\u6B65\u9AA43" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 2">
        <t-space size="small">
          <t-button size="small" variant="text" @click.stop="current--">\u4E0A\u4E00\u6B65</t-button>
          <t-button size="small" variant="base" @click.stop="current++">\u4E0B\u4E00\u6B65</t-button>
        </t-space>
      </template>
    </t-step-item>
    <t-step-item title="\u6B65\u9AA44" content="\u8FD9\u91CC\u662F\u63D0\u793A\u6587\u5B57">
      <template slot="extra" v-if="current === 3">
        <t-button size="small" @click.stop="current--">\u4E0A\u4E00\u6B65</t-button>
      </template>
    </t-step-item>
  </t-steps>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    onCurChanged(cur, pre) {
      this.current = cur;
      console.log('TDesign Steps:', \`current: \${cur}, previous: \${pre}\`);
    },
    renderTitle() {
      return <div class="demo">\u6B65\u9AA41</div>;
    },
  },
};
<\/script>
`,Ot=[{name:"layout",type:"enum",defaultValue:"horizontal",options:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"separator",type:"enum",defaultValue:"line",options:[{label:"line",value:"line"},{label:"dashed",value:"dashed"},{label:"arrow",value:"arrow"}]},{name:"sequence",type:"enum",defaultValue:"positive",options:[{label:"positive",value:"positive"},{label:"reverse",value:"reverse"}]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"dot",value:"dot"}]}],k={};k.setup=(e,n)=>{const t=h(Ot),s=[{label:"steps",value:"steps"}],r={steps:`
        <t-steps :defaultCurrent="1" v-bind="configProps">
          <t-step-item title="\u6B65\u9AA41" content="\u63D0\u793A\u6587\u5B57" />
          <t-step-item title="\u6B65\u9AA42" content="\u63D0\u793A\u6587\u5B57" />
          <t-step-item title="\u6B65\u9AA43" content="\u63D0\u793A\u6587\u5B57" />
        </t-steps>
      `},o=h(`<template>${r[s[0].value].trim()}</template>`);function c(a){o.value=`<template>${r[a].trim()}</template>`}return{configList:t,panelList:s,usageCode:o,onPanelChange:c}};var jt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"steps",fn:function(s){var r=s.configProps;return[t("t-steps",e._b({attrs:{defaultCurrent:1}},"t-steps",r,!1),[t("t-step-item",{attrs:{title:"\u6B65\u9AA41",content:"\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u6B65\u9AA42",content:"\u63D0\u793A\u6587\u5B57"}}),t("t-step-item",{attrs:{title:"\u6B65\u9AA43",content:"\u63D0\u793A\u6587\u5B57"}})],1)]}}])})},zt=[];const I={};var Pt=i(k,jt,zt,!1,St,null,null,null);function St(e){for(let n in I)this[n]=I[n]}const Ut=function(){return Pt.exports}();export{Et as D,Ut as U,qt as a,Lt as b,Mt as c,Vt as d,Ft as e,Wt as f,Rt as g,Tt as h,Nt as i,Bt as j,At as k,Ht as l,Kt as m};
