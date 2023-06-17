import{n as a,r as l}from"./index.06201486.js";const v={data(){const e=this.$createElement;return{infoMessage:()=>e("div",["\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A"])}}};var h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{staticStyle:{width:"100%"},attrs:{direction:"vertical"}},[t("t-alert",{attrs:{theme:"info",message:e.infoMessage}}),t("t-alert",{attrs:{theme:"success",message:"\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u63D0\u793A"}}),t("t-alert",{attrs:{theme:"warning"},scopedSlots:e._u([{key:"message",fn:function(){return[e._v(" \u8FD9\u662F\u4E00\u6761\u8B66\u793A\u4FE1\u606F ")]},proxy:!0}])}),t("t-alert",{attrs:{theme:"error"}},[e._v(" \u8FD9\u662F\u4E00\u6761\u5931\u8D25\u4FE1\u606F\u63D0\u793A ")])],1)},g=[];const c={};var x=a(v,h,g,!1,$,null,null,null);function $(e){for(let n in c)this[n]=c[n]}const q=function(){return x.exports}(),C={data(){return{warningClose:()=>"FunctionPropClose"}},methods:{handleOperation(){alert("operation clicked")}}};var w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{staticStyle:{width:"100%"}},[t("t-alert",{attrs:{theme:"info",message:"\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A",close:""},scopedSlots:e._u([{key:"operation",fn:function(){return[t("span",{on:{click:e.handleOperation}},[e._v("\u76F8\u5173\u64CD\u4F5C")])]},proxy:!0}])})],1)},y=[];const i={};var F=a(C,w,y,!1,b,null,null,null);function b(e){for(let n in i)this[n]=i[n]}const G=function(){return F.exports}(),S={data(){return{warningClose:()=>"FunctionPropClose"}},methods:{handleOperation(){alert("operation clicked")}}};var k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{staticStyle:{width:"100%"}},[t("t-alert",{attrs:{theme:"info",title:"\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A",message:"\u8FD9\u662F\u4E0E\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A\u76F8\u5173\u7684\u6587\u5B57\u8F85\u52A9\u8BF4\u660E",close:""},scopedSlots:e._u([{key:"operation",fn:function(){return[t("span",{on:{click:e.handleOperation}},[e._v("\u76F8\u5173\u64CD\u4F5C")])]},proxy:!0}])})],1)},D=[];const p={};var P=a(S,k,D,!1,M,null,null,null);function M(e){for(let n in p)this[n]=p[n]}const H=function(){return P.exports}(),j={data(){return{warningClose:()=>"FunctionPropClose"}},methods:{beforeClose(){return window.confirm("\u786E\u8BA4\u5173\u95ED\u5417\uFF1F")},handleClosed(){alert("closed")}}};var E=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{staticStyle:{width:"100%"}},[t("t-alert",{attrs:{theme:"info",close:"","max-line":2}},[t("span",[e._v("\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E00\u6761\u6D88\u606F")]),t("span",[e._v("\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E8C\u6761\u6D88\u606F")]),t("span",[e._v("\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E09\u6761\u6D88\u606F")]),t("span",[e._v("\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u56DB\u6761\u6D88\u606F")]),t("span",[e._v("\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E94\u6761\u6D88\u606F")]),t("span",[e._v("\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u516D\u6761\u6D88\u606F")])])],1)},O=[];const u={};var R=a(j,E,O,!1,L,null,null,null);function L(e){for(let n in u)this[n]=u[n]}const I=function(){return R.exports}(),K=`<template>
  <t-space style="width: 100%" direction="vertical">
    <t-alert theme="info" :message="infoMessage" />
    <t-alert theme="success" message="\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u63D0\u793A" />
    <t-alert theme="warning">
      <template #message> \u8FD9\u662F\u4E00\u6761\u8B66\u793A\u4FE1\u606F </template>
    </t-alert>
    <t-alert theme="error"> \u8FD9\u662F\u4E00\u6761\u5931\u8D25\u4FE1\u606F\u63D0\u793A </t-alert>
  </t-space>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      infoMessage: () => <div>\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A</div>,
    };
  },
};
<\/script>
`,N=`<template>
  <t-space style="width: 100%">
    <t-alert theme="info" message="\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A" close>
      <template #operation>
        <span @click="handleOperation">\u76F8\u5173\u64CD\u4F5C</span>
      </template>
    </t-alert>
  </t-space>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      warningClose: () => 'FunctionPropClose',
    };
  },
  methods: {
    handleOperation() {
      alert('operation clicked');
    },
  },
};
<\/script>
`,Q=`<template>
  <t-space style="width: 100%">
    <t-alert theme="info" title="\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A" message="\u8FD9\u662F\u4E0E\u666E\u901A\u7684\u6D88\u606F\u63D0\u793A\u76F8\u5173\u7684\u6587\u5B57\u8F85\u52A9\u8BF4\u660E" close>
      <template #operation>
        <span @click="handleOperation">\u76F8\u5173\u64CD\u4F5C</span>
      </template>
    </t-alert>
  </t-space>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      warningClose: () => 'FunctionPropClose',
    };
  },
  methods: {
    handleOperation() {
      alert('operation clicked');
    },
  },
};
<\/script>
`,T=`<template>
  <t-space style="width: 100%">
    <t-alert theme="info" close :max-line="2">
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E00\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E8C\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E09\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u56DB\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u4E94\u6761\u6D88\u606F</span>
      <span>\u8FD9\u662F\u6298\u53E0\u7684\u7B2C\u516D\u6761\u6D88\u606F</span>
    </t-alert>
  </t-space>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      warningClose: () => 'FunctionPropClose',
    };
  },
  methods: {
    beforeClose() {
      return window.confirm('\u786E\u8BA4\u5173\u95ED\u5417\uFF1F');
    },
    handleClosed() {
      alert('closed');
    },
  },
};
<\/script>
`,A=[{name:"close",type:"Boolean",defaultValue:!1,options:[]},{name:"theme",type:"enum",defaultValue:"info",options:[{label:"success",value:"success"},{label:"info",value:"info"},{label:"warning",value:"warning"},{label:"error",value:"error"}]}],m={};m.setup=(e,n)=>{const t=l(A),s=[{label:"alert",value:"alert"}],r={alert:'<t-alert message="\u8FD9\u662F\u4E00\u6761\u4FE1\u606F" v-bind="configProps" />'},o=l(`<template>${r[s[0].value].trim()}</template>`);function d(f){o.value=`<template>${r[f].trim()}</template>`}return{configList:t,panelList:s,usageCode:o,onPanelChange:d}};var U=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"alert",fn:function(s){var r=s.configProps;return[t("t-alert",e._b({attrs:{message:"\u8FD9\u662F\u4E00\u6761\u4FE1\u606F"}},"t-alert",r,!1))]}}])})},V=[];const _={};var z=a(m,U,V,!1,B,null,null,null);function B(e){for(let n in _)this[n]=_[n]}const W=function(){return z.exports}();export{q as D,W as U,G as a,H as b,I as c,K as d,N as e,Q as f,T as g};
