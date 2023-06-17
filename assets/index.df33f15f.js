import{V as O,n as r,r as p}from"./index.06201486.js";import{A as V}from"./add.21a781d6.js";import{C as k}from"./cloud-upload.f4b26871.js";import{D as M}from"./discount.3155443a.js";import{u as D,_ as j}from"./use-size-props.363c09d5.js";import{_ as P,I}from"./icon.5174cd05.js";import{S as E}from"./search.b920085a.js";var F=["size"];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?b(Object(t),!0).forEach(function(a){j(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var q={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10 3H6V1.5H5V3H3a1 1 0 00-1 1v9a1 1 0 001 1h10a1 1 0 001-1V4a1 1 0 00-1-1h-2V1.5h-1V3zM5 5h1V4h4v1h1V4h2v2H3V4h2v1zM3 7h10v6H3V7z",fillOpacity:.9}}]},R=O.extend({name:"CalendarIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var a=t.props,o=t.data,i=a.size,u=P(a,F),s=D(i),c=s.className,l=s.style,v=d(d({},u||{}),{},{id:"calendar",icon:q,staticClass:c,style:l});return o.props=v,n(I,o)}}),A=["size"];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?m(Object(t),!0).forEach(function(a){j(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var B={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.73 6.26l-.71.09A2.32 2.32 0 002 8.67c0 1.2.89 2.18 2 2.31v1a3.31 3.31 0 01-3-3.31 3.32 3.32 0 012.9-3.32A4.2 4.2 0 018 2c2 0 3.69 1.43 4.1 3.35 1.63.2 2.9 1.6 2.9 3.32a3.31 3.31 0 01-3 3.32v-1c1.11-.14 2-1.11 2-2.32 0-1.22-.9-2.2-2.02-2.32l-.71-.09-.15-.7A3.2 3.2 0 008 3a3.2 3.2 0 00-3.12 2.56l-.15.7z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M9.8 11.3l-1.3 1.29v-4.6h-1v4.6L6.2 11.3l-.7.7 2.15 2.15c.2.2.51.2.7 0L10.5 12l-.7-.71z",fillOpacity:.9}}]},L=O.extend({name:"CloudDownloadIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var a=t.props,o=t.data,i=a.size,u=P(a,A),s=D(i),c=s.className,l=s.style,v=h(h({},u||{}),{},{id:"cloud-download",icon:B,staticClass:c,style:l});return o.props=v,n(I,o)}}),U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{size:"24px"}},[t("t-button",{attrs:{theme:"default",variant:"base"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{theme:"default",variant:"outline"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{theme:"default",variant:"dashed"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{theme:"default",variant:"text"}},[e._v("\u6587\u5B57\u6309\u94AE")])],1)},H=[];const N={},_={};var K=r(N,U,H,!1,J,null,null,null);function J(e){for(let n in _)this[n]=_[n]}const Bt=function(){return K.exports}(),W={components:{AddIcon:V,CloudUploadIcon:k,DiscountIcon:M,CloudDownloadIcon:L},methods:{renderIcon(){const e=this.$createElement;return e(E)}}};var G=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{size:"24px"}},[t("t-button",{attrs:{theme:"primary"}},[t("add-icon",{attrs:{slot:"icon"},slot:"icon"}),e._v(" \u65B0\u5EFA ")],1),t("t-button",{attrs:{variant:"outline"}},[t("cloud-upload-icon",{attrs:{slot:"icon"},slot:"icon"}),e._v(" \u4E0A\u4F20\u6587\u4EF6 ")],1),t("t-button",{attrs:{shape:"circle",theme:"primary"}},[t("discount-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{shape:"circle",theme:"primary"}},[t("cloud-download-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"outline",icon:e.renderIcon}},[e._v(" \u641C\u7D22 ")])],1)},Q=[];const f={};var T=r(W,G,Q,!1,X,null,null,null);function X(e){for(let n in f)this[n]=f[n]}const Lt=function(){return T.exports}();var Y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("t-space",[t("t-button",{attrs:{variant:"outline",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{variant:"outline",theme:"primary",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"primary",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"primary",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{variant:"outline",theme:"success",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"success",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"success",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{variant:"outline",theme:"warning",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"warning",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"warning",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{variant:"outline",theme:"danger",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"danger",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"danger",ghost:""}},[e._v("\u5E7D\u7075\u6309\u94AE")])],1)],1)},Z=[];const tt={},g={};var et=r(tt,Y,Z,!1,nt,null,null,null);function nt(e){for(let n in g)this[n]=g[n]}const Ut=function(){return et.exports}();var at=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical",align:"center"}},[t("t-button",{attrs:{block:"",theme:"primary",variant:"base"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{block:"",variant:"outline"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{block:"",variant:"dashed"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{block:"",variant:"text"}},[e._v("\u6587\u5B57\u6309\u94AE")])],1)},ot=[];const rt={},x={};var st=r(rt,at,ot,!1,it,"2e001a24",null,null);function it(e){for(let n in x)this[n]=x[n]}const Ht=function(){return st.exports}();var ut=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("t-space",[t("t-button",{attrs:{theme:"default"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{variant:"outline",theme:"default"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"default"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"default"}},[e._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"primary"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{variant:"outline",theme:"primary"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"primary"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"primary"}},[e._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"danger"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{variant:"outline",theme:"danger"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"danger"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"danger"}},[e._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"warning"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{variant:"outline",theme:"warning"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"warning"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"warning"}},[e._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"success"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{variant:"outline",theme:"success"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"success"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"success"}},[e._v("\u6587\u5B57\u6309\u94AE")])],1)],1)},ct=[];const lt={},y={};var vt=r(lt,ut,ct,!1,pt,null,null,null);function pt(e){for(let n in y)this[n]=y[n]}const Nt=function(){return vt.exports}();var bt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",[t("t-button",{attrs:{disabled:""}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{loading:""}},[e._v("\u52A0\u8F7D\u4E2D")])],1)},dt=[];const mt={},$={};var ht=r(mt,bt,dt,!1,_t,null,null,null);function _t(e){for(let n in $)this[n]=$[n]}const Kt=function(){return ht.exports}();var ft=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("t-space",[t("t-button",{attrs:{theme:"primary",size:"small",variant:"base"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{size:"small",variant:"outline"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{size:"small",variant:"dashed"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{size:"small",variant:"text"}},[e._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"primary",size:"medium",variant:"base"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{size:"medium",variant:"outline"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{size:"medium",variant:"dashed"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{size:"medium",variant:"text"}},[e._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"primary",size:"large",variant:"base"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{size:"large",variant:"outline"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{size:"large",variant:"dashed"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{size:"large",variant:"text"}},[e._v("\u6587\u5B57\u6309\u94AE")])],1)],1)},gt=[];const xt={},z={};var yt=r(xt,ft,gt,!1,$t,null,null,null);function $t(e){for(let n in z)this[n]=z[n]}const Jt=function(){return yt.exports}();var zt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("t-space",[t("t-button",{attrs:{theme:"primary",shape:"rectangle",variant:"base"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{theme:"primary",shape:"square",variant:"base"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{theme:"primary",shape:"round",variant:"base"}},[e._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{theme:"primary",shape:"circle",variant:"base"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1),t("t-space",[t("t-button",{attrs:{shape:"rectangle",variant:"outline"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{shape:"square",variant:"outline"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{shape:"round",variant:"outline"}},[e._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{shape:"circle",variant:"outline"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1),t("t-space",[t("t-button",{attrs:{shape:"rectangle",variant:"dashed"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{shape:"square",variant:"dashed"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{shape:"round",variant:"dashed"}},[e._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{shape:"circle",variant:"dashed"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1),t("t-space",[t("t-button",{attrs:{shape:"rectangle",variant:"text"}},[e._v("\u6587\u5B57\u6309\u94AE")]),t("t-button",{attrs:{shape:"square",variant:"text"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{shape:"round",variant:"text"}},[e._v("\u6587\u5B57\u6309\u94AE")]),t("t-button",{attrs:{shape:"circle",variant:"text"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1)],1)},wt=[];const Ct={components:{CalendarIcon:R}},w={};var Ot=r(Ct,zt,wt,!1,Dt,null,null,null);function Dt(e){for(let n in w)this[n]=w[n]}const Wt=function(){return Ot.exports}(),Gt=`<template>
  <t-space size="24px">
    <t-button theme="default" variant="base">\u586B\u5145\u6309\u94AE</t-button>
    <t-button theme="default" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
    <t-button theme="default" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
    <t-button theme="default" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
  </t-space>
</template>
`,Qt=`<template>
  <t-space size="24px">
    <t-button theme="primary">
      <add-icon slot="icon" />
      \u65B0\u5EFA
    </t-button>
    <t-button variant="outline">
      <cloud-upload-icon slot="icon" />
      \u4E0A\u4F20\u6587\u4EF6
    </t-button>
    <t-button shape="circle" theme="primary">
      <discount-icon slot="icon" />
    </t-button>
    <t-button shape="circle" theme="primary">
      <cloud-download-icon slot="icon" />
    </t-button>
    <t-button variant="outline" :icon="renderIcon"> \u641C\u7D22 </t-button>
  </t-space>
</template>

<script lang="jsx">
import {
  AddIcon, CloudUploadIcon, SearchIcon, DiscountIcon, CloudDownloadIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    AddIcon,
    CloudUploadIcon,
    DiscountIcon,
    CloudDownloadIcon,
  },
  methods: {
    renderIcon() {
      return <SearchIcon />;
    },
  },
};
<\/script>
`,Tt=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button variant="outline" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="primary" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="primary" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="primary" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="success" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="success" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="success" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="warning" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="warning" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="warning" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="danger" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="danger" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
      <t-button variant="text" theme="danger" ghost>\u5E7D\u7075\u6309\u94AE</t-button>
    </t-space>
  </t-space>
</template>
`,Xt=`<template>
  <t-space direction="vertical" align="center">
    <t-button block theme="primary" variant="base">\u586B\u5145\u6309\u94AE</t-button>
    <t-button block variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
    <t-button block variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
    <t-button block variant="text">\u6587\u5B57\u6309\u94AE</t-button>
  </t-space>
</template>
<style lang="less" scoped>
.t-button {
  min-width: 320px;
  max-width: 640px;
}
</style>
`,Yt=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button theme="default">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="default">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="default">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="default">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="primary">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="primary">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="primary">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="primary">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="danger">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="danger">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="danger">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="danger">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="warning">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="warning">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="warning">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="warning">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="success">\u586B\u5145\u6309\u94AE</t-button>
      <t-button variant="outline" theme="success">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button variant="dashed" theme="success">\u865A\u6846\u6309\u94AE</t-button>
      <t-button variant="text" theme="success">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
  </t-space>
</template>
`,Zt=`<template>
  <t-space>
    <t-button disabled>\u586B\u5145\u6309\u94AE</t-button>
    <t-button loading>\u52A0\u8F7D\u4E2D</t-button>
  </t-space>
</template>
`,te=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button theme="primary" size="small" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button size="small" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button size="small" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button size="small" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="primary" size="medium" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button size="medium" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button size="medium" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button size="medium" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
    <t-space>
      <t-button theme="primary" size="large" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button size="large" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button size="large" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button size="large" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
    </t-space>
  </t-space>
</template>
`,ee=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-button theme="primary" shape="rectangle" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button theme="primary" shape="square" variant="base"><calendar-icon slot="icon" /></t-button>
      <t-button theme="primary" shape="round" variant="base">\u586B\u5145\u6309\u94AE</t-button>
      <t-button theme="primary" shape="circle" variant="base"><calendar-icon slot="icon" /></t-button>
    </t-space>
    <t-space>
      <t-button shape="rectangle" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button shape="square" variant="outline"><calendar-icon slot="icon" /></t-button>
      <t-button shape="round" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
      <t-button shape="circle" variant="outline"><calendar-icon slot="icon" /></t-button>
    </t-space>
    <t-space>
      <t-button shape="rectangle" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button shape="square" variant="dashed"><calendar-icon slot="icon" /></t-button>
      <t-button shape="round" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
      <t-button shape="circle" variant="dashed"><calendar-icon slot="icon" /></t-button>
    </t-space>
    <t-space>
      <t-button shape="rectangle" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
      <t-button shape="square" variant="text"><calendar-icon slot="icon" /></t-button>
      <t-button shape="round" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
      <t-button shape="circle" variant="text"><calendar-icon slot="icon" /></t-button>
    </t-space>
  </t-space>
</template>
<script>
import { CalendarIcon } from 'tdesign-icons-vue';

export default {
  components: {
    CalendarIcon,
  },
};
<\/script>
`,jt=[{name:"block",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"ghost",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"shape",type:"enum",defaultValue:"rectangle",options:[{label:"rectangle",value:"rectangle"},{label:"square",value:"square"},{label:"round",value:"round"},{label:"circle",value:"circle"}]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"type",type:"enum",defaultValue:"button",options:[{label:"submit",value:"submit"},{label:"reset",value:"reset"},{label:"button",value:"button"}]},{name:"variant",type:"enum",defaultValue:"base",options:[{label:"base",value:"base"},{label:"outline",value:"outline"},{label:"dashed",value:"dashed"},{label:"text",value:"text"}]}],S={};S.setup=(e,n)=>{const t=p(jt),a=[{label:"button",value:"button"}],o={button:'<t-button v-bind="configProps">\u786E\u5B9A</t-button>'},i=p(`<template>${o[a[0].value].trim()}</template>`);function u(s){i.value=`<template>${o[s].trim()}</template>`}return{configList:t,panelList:a,usageCode:i,onPanelChange:u}};var Pt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"button",fn:function(a){var o=a.configProps;return[t("t-button",e._b({},"t-button",o,!1),[e._v("\u786E\u5B9A")])]}}])})},It=[];const C={};var St=r(S,Pt,It,!1,Vt,null,null,null);function Vt(e){for(let n in C)this[n]=C[n]}const ne=function(){return St.exports}();export{Bt as D,ne as U,Lt as a,Ut as b,Ht as c,Nt as d,Kt as e,Jt as f,Wt as g,Gt as h,Qt as i,Tt as j,Xt as k,Yt as l,Zt as m,te as n,ee as o};
