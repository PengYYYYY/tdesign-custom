import{n as o}from"./index.7ed388d9.js";var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("t-space",{staticStyle:{"max-width":"500px"},attrs:{direction:"vertical"}},[e("t-input-adornment",{attrs:{prepend:"http://"}},[e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),e("t-input-adornment",{attrs:{append:".com"}},[e("t-tag-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),e("t-input-adornment",{attrs:{prepend:"http://",append:".com"}},[e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1)],1)},c=[];const s={},l={};var d=o(s,r,c,!1,i,null,null,null);function i(n){for(let t in l)this[t]=l[t]}const x=function(){return d.exports}(),u={data(){const n=this.$createElement;return{protocolSelect:()=>n("t-select",{attrs:{autoWidth:!0,options:["http://","https://"].map(t=>({label:t,value:t})),defaultValue:"http://"}}),tldSelect:()=>n("t-select",{attrs:{autoWidth:!0,options:[".com",".cn",".net",".org"].map(t=>({label:t,value:t})),defaultValue:".cn"}})}}};var m=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("t-space",{staticClass:"adornment-select",staticStyle:{"max-width":"500px"},attrs:{direction:"vertical"}},[e("t-input-adornment",{attrs:{prepend:n.protocolSelect}},[e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),e("t-input-adornment",{attrs:{append:n.tldSelect}},[e("t-tag-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),e("t-input-adornment",{attrs:{prepend:n.protocolSelect,append:n.tldSelect}},[e("t-select",{attrs:{options:["tencent","qq","cloud.tencent"].map(function(a){return{label:a,value:a}}),defaultValue:"tencent"}})],1)],1)},h=[];const p={};var _=o(u,m,h,!1,v,null,null,null);function v(n){for(let t in p)this[t]=p[t]}const S=function(){return _.exports}(),$=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input-adornment prepend="http://">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment append=".com">
      <t-tag-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment prepend="http://" append=".com">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>
  </t-space>
</template>
`,b=`<template>
  <t-space direction="vertical" class="adornment-select" style="max-width: 500px">
    <t-input-adornment :prepend="protocolSelect">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment :append="tldSelect">
      <t-tag-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment :prepend="protocolSelect" :append="tldSelect">
      <t-select
        :options="['tencent', 'qq', 'cloud.tencent'].map((value) => ({ label: value, value }))"
        defaultValue="tencent"
      />
    </t-input-adornment>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      protocolSelect: () => (
        <t-select
          autoWidth
          options={['http://', 'https://'].map((value) => ({ label: value, value }))}
          defaultValue="http://"
        />
      ),
      tldSelect: () => (
        <t-select
          autoWidth
          options={['.com', '.cn', '.net', '.org'].map((value) => ({ label: value, value }))}
          defaultValue=".cn"
        />
      ),
    };
  },
};
<\/script>
`;export{x as D,S as a,$ as b,b as c};
