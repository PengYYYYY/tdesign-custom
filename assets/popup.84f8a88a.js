import{n as a}from"./index.4ab857ef.js";var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-range-input")},i=[];const u={},r={};var p=a(u,c,i,!1,_,null,null,null);function _(e){for(let t in r)this[t]=r[t]}const M=function(){return p.exports}();var m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-range-input",{attrs:{size:"small"}}),n("t-range-input"),n("t-range-input",{attrs:{size:"large"}})],1)},v=[];const d={},s={};var f=a(d,m,v,!1,$,null,null,null);function $(e){for(let t in s)this[t]=s[t]}const R=function(){return f.exports}();var g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-range-input",{attrs:{status:"success"}}),n("t-range-input",{attrs:{status:"warning"}}),n("t-range-input",{attrs:{status:"error"}})],1)},x=[];const h={},l={};var D=a(h,g,x,!1,z,null,null,null);function z(e){for(let t in l)this[t]=l[t]}const S=function(){return D.exports}(),j={data(){const e=this.$createElement;return{panel:()=>e("div",["hello world"])}}};var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-range-input-popup",{attrs:{panel:e.panel}})},E=[];const o={};var w=a(j,C,E,!1,y,null,null,null);function y(e){for(let t in o)this[t]=o[t]}const b=function(){return w.exports}(),k=`<template>
  <t-range-input />
</template>
`,q=`<template>
  <t-space direction="vertical">
    <t-range-input size="small" />
    <t-range-input />
    <t-range-input size="large" />
  </t-space>
</template>
`,A=`<template>
  <t-space direction="vertical">
    <t-range-input status="success" />
    <t-range-input status="warning" />
    <t-range-input status="error" />
  </t-space>
</template>
`,B=`<template>
  <t-range-input-popup :panel="panel" />
</template>

<script lang="jsx">
export default {
  data() {
    return {
      panel: () => <div>hello world</div>,
    };
  },
};
<\/script>
`;export{M as D,R as a,S as b,b as c,k as d,q as e,A as f,B as g};
