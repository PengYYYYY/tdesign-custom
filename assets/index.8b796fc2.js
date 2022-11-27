import{V as w,_ as D,u as I,I as j,a as P,n as s,A as S,S as O,C as k,r as c}from"./index.0d6d9eb3.js";import{C as E}from"./cloud-upload.ecde1276.js";import{D as M}from"./discount.e9c85d94.js";var q=["size"];function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?l(Object(t),!0).forEach(function(a){P(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}var F={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.73 6.26l-.71.09A2.32 2.32 0 002 8.67c0 1.2.89 2.18 2 2.31v1a3.31 3.31 0 01-3-3.31 3.32 3.32 0 012.9-3.32A4.2 4.2 0 018 2c2 0 3.69 1.43 4.1 3.35 1.63.2 2.9 1.6 2.9 3.32a3.31 3.31 0 01-3 3.32v-1c1.11-.14 2-1.11 2-2.32 0-1.22-.9-2.2-2.02-2.32l-.71-.09-.15-.7A3.2 3.2 0 008 3a3.2 3.2 0 00-3.12 2.56l-.15.7z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M9.8 11.3l-1.3 1.29v-4.6h-1v4.6L6.2 11.3l-.7.7 2.15 2.15c.2.2.51.2.7 0L10.5 12l-.7-.71z",fillOpacity:.9}}]},V=w.extend({name:"CloudDownloadIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(e,t){var a=t.props,o=t.data,r=a.size,u=D(a,q),i=I(r),$=i.className,z=i.style,C=v(v({},u||{}),{},{id:"cloud-download",icon:F,staticClass:$,style:z});return o.props=C,e(j,o)}}),R=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("t-space",{attrs:{size:"24px"}},[t("t-button",{attrs:{theme:"default",variant:"base"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{theme:"default",variant:"outline"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{theme:"default",variant:"dashed"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{theme:"default",variant:"text"}},[n._v("\u6587\u5B57\u6309\u94AE")])],1)},A=[];const B={},b={};var L=s(B,R,A,!1,U,null,null,null);function U(n){for(let e in b)this[e]=b[e]}const kt=function(){return L.exports}(),N={components:{AddIcon:S,CloudUploadIcon:E,DiscountIcon:M,CloudDownloadIcon:V},methods:{renderIcon(){const n=this.$createElement;return n(O)}}};var J=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("t-space",{attrs:{size:"24px"}},[t("t-button",{attrs:{theme:"primary"}},[t("add-icon",{attrs:{slot:"icon"},slot:"icon"}),n._v(" \u65B0\u5EFA ")],1),t("t-button",{attrs:{variant:"outline"}},[t("cloud-upload-icon",{attrs:{slot:"icon"},slot:"icon"}),n._v(" \u4E0A\u4F20\u6587\u4EF6 ")],1),t("t-button",{attrs:{shape:"circle",theme:"primary"}},[t("discount-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{shape:"circle",theme:"primary"}},[t("cloud-download-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"outline",icon:n.renderIcon}},[n._v(" \u641C\u7D22 ")])],1)},K=[];const p={};var W=s(N,J,K,!1,G,null,null,null);function G(n){for(let e in p)this[e]=p[e]}const Et=function(){return W.exports}();var H=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("t-space",{attrs:{direction:"vertical"}},[t("t-space",[t("t-button",{attrs:{variant:"outline",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{variant:"outline",theme:"primary",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"primary",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"primary",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{variant:"outline",theme:"success",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"success",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"success",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{variant:"outline",theme:"warning",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"warning",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"warning",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{variant:"outline",theme:"danger",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"danger",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"danger",ghost:""}},[n._v("\u5E7D\u7075\u6309\u94AE")])],1)],1)},Q=[];const T={},d={};var X=s(T,H,Q,!1,Y,null,null,null);function Y(n){for(let e in d)this[e]=d[e]}const Mt=function(){return X.exports}();var Z=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("t-space",{attrs:{direction:"vertical",align:"center"}},[t("t-button",{attrs:{block:"",theme:"primary",variant:"base"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{block:"",variant:"outline"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{block:"",variant:"dashed"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{block:"",variant:"text"}},[n._v("\u6587\u5B57\u6309\u94AE")])],1)},tt=[];const nt={},m={};var et=s(nt,Z,tt,!1,at,"2e001a24",null,null);function at(n){for(let e in m)this[e]=m[e]}const qt=function(){return et.exports}();var ot=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("t-space",{attrs:{direction:"vertical"}},[t("t-space",[t("t-button",{attrs:{theme:"default"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{variant:"outline",theme:"default"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"default"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"default"}},[n._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"primary"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{variant:"outline",theme:"primary"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"primary"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"primary"}},[n._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"danger"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{variant:"outline",theme:"danger"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"danger"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"danger"}},[n._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"warning"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{variant:"outline",theme:"warning"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"warning"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"warning"}},[n._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"success"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{variant:"outline",theme:"success"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{variant:"dashed",theme:"success"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{variant:"text",theme:"success"}},[n._v("\u6587\u5B57\u6309\u94AE")])],1)],1)},st=[];const rt={},h={};var it=s(rt,ot,st,!1,ut,null,null,null);function ut(n){for(let e in h)this[e]=h[e]}const Ft=function(){return it.exports}();var ct=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("t-space",[t("t-button",{attrs:{disabled:""}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{loading:""}},[n._v("\u52A0\u8F7D\u4E2D")])],1)},lt=[];const vt={},_={};var bt=s(vt,ct,lt,!1,pt,null,null,null);function pt(n){for(let e in _)this[e]=_[e]}const Vt=function(){return bt.exports}();var dt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("t-space",{attrs:{direction:"vertical"}},[t("t-space",[t("t-button",{attrs:{theme:"primary",size:"small",variant:"base"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{size:"small",variant:"outline"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{size:"small",variant:"dashed"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{size:"small",variant:"text"}},[n._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"primary",size:"medium",variant:"base"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{size:"medium",variant:"outline"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{size:"medium",variant:"dashed"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{size:"medium",variant:"text"}},[n._v("\u6587\u5B57\u6309\u94AE")])],1),t("t-space",[t("t-button",{attrs:{theme:"primary",size:"large",variant:"base"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{size:"large",variant:"outline"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{size:"large",variant:"dashed"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{size:"large",variant:"text"}},[n._v("\u6587\u5B57\u6309\u94AE")])],1)],1)},mt=[];const ht={},f={};var _t=s(ht,dt,mt,!1,ft,null,null,null);function ft(n){for(let e in f)this[e]=f[e]}const Rt=function(){return _t.exports}();var gt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("t-space",{attrs:{direction:"vertical"}},[t("t-space",[t("t-button",{attrs:{theme:"primary",shape:"rectangle",variant:"base"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{theme:"primary",shape:"square",variant:"base"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{theme:"primary",shape:"round",variant:"base"}},[n._v("\u586B\u5145\u6309\u94AE")]),t("t-button",{attrs:{theme:"primary",shape:"circle",variant:"base"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1),t("t-space",[t("t-button",{attrs:{shape:"rectangle",variant:"outline"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{shape:"square",variant:"outline"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{shape:"round",variant:"outline"}},[n._v("\u63CF\u8FB9\u6309\u94AE")]),t("t-button",{attrs:{shape:"circle",variant:"outline"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1),t("t-space",[t("t-button",{attrs:{shape:"rectangle",variant:"dashed"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{shape:"square",variant:"dashed"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{shape:"round",variant:"dashed"}},[n._v("\u865A\u6846\u6309\u94AE")]),t("t-button",{attrs:{shape:"circle",variant:"dashed"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1),t("t-space",[t("t-button",{attrs:{shape:"rectangle",variant:"text"}},[n._v("\u6587\u5B57\u6309\u94AE")]),t("t-button",{attrs:{shape:"square",variant:"text"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{shape:"round",variant:"text"}},[n._v("\u6587\u5B57\u6309\u94AE")]),t("t-button",{attrs:{shape:"circle",variant:"text"}},[t("calendar-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1)],1)},xt=[];const yt={components:{CalendarIcon:k}},g={};var $t=s(yt,gt,xt,!1,zt,null,null,null);function zt(n){for(let e in g)this[e]=g[e]}const At=function(){return $t.exports}(),Bt=`<template>
  <t-space size="24px">
    <t-button theme="default" variant="base">\u586B\u5145\u6309\u94AE</t-button>
    <t-button theme="default" variant="outline">\u63CF\u8FB9\u6309\u94AE</t-button>
    <t-button theme="default" variant="dashed">\u865A\u6846\u6309\u94AE</t-button>
    <t-button theme="default" variant="text">\u6587\u5B57\u6309\u94AE</t-button>
  </t-space>
</template>
`,Lt=`<template>
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
`,Ut=`<template>
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
`,Nt=`<template>
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
`,Jt=`<template>
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
`,Kt=`<template>
  <t-space>
    <t-button disabled>\u586B\u5145\u6309\u94AE</t-button>
    <t-button loading>\u52A0\u8F7D\u4E2D</t-button>
  </t-space>
</template>
`,Wt=`<template>
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
`,Gt=`<template>
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
`,Ct=[{name:"block",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"ghost",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"shape",type:"enum",defaultValue:"rectangle",options:[{label:"rectangle",value:"rectangle"},{label:"square",value:"square"},{label:"round",value:"round"},{label:"circle",value:"circle"}]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"type",type:"enum",defaultValue:"button",options:[{label:"submit",value:"submit"},{label:"reset",value:"reset"},{label:"button",value:"button"}]},{name:"variant",type:"enum",defaultValue:"base",options:[{label:"base",value:"base"},{label:"outline",value:"outline"},{label:"dashed",value:"dashed"},{label:"text",value:"text"}]}],y={};y.setup=(n,e)=>{const t=c(Ct),a=[{label:"button",value:"button"}],o={button:'<t-button v-bind="configProps">\u786E\u5B9A</t-button>'},r=c(`<template>${o[a[0].value].trim()}</template>`);function u(i){r.value=`<template>${o[i].trim()}</template>`}return{configList:t,panelList:a,usageCode:r,onPanelChange:u}};var wt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"button",fn:function(a){var o=a.configProps;return[t("t-button",n._b({},"t-button",o,!1),[n._v("\u786E\u5B9A")])]}}])})},Dt=[];const x={};var It=s(y,wt,Dt,!1,jt,null,null,null);function jt(n){for(let e in x)this[e]=x[e]}const Ht=function(){return It.exports}();export{kt as D,Ht as U,Et as a,Mt as b,qt as c,Ft as d,Vt as e,Rt as f,At as g,Bt as h,Lt as i,Ut as j,Nt as k,Jt as l,Kt as m,Wt as n,Gt as o};
