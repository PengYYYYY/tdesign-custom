import{n as o}from"./index.0d6d9eb3.js";var p=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("t-space",{staticStyle:{"max-width":"500px"},attrs:{direction:"vertical"}},[e("t-input-adornment",{attrs:{prepend:"http://"}},[e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),e("t-input-adornment",{attrs:{append:".com"}},[e("t-tag-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),e("t-input-adornment",{attrs:{prepend:"http://",append:".com"}},[e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1)],1)},c=[];const s={},r={};var d=o(s,p,c,!1,u,null,null,null);function u(n){for(let t in r)this[t]=r[t]}const f=function(){return d.exports}(),i={data(){const n=this.$createElement;return{protocolSelect:()=>n("t-select",{attrs:{borderless:!0,autoWidth:!0,options:["http://","https://"].map(t=>({label:t,value:t})),defaultValue:"http://"}}),tldSelect:()=>n("t-select",{attrs:{borderless:!0,autoWidth:!0,options:[".com",".cn",".net",".org"].map(t=>({label:t,value:t})),defaultValue:".cn"}})}}};var m=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("t-space",{staticClass:"adornment-select",staticStyle:{"max-width":"500px"},attrs:{direction:"vertical"}},[e("t-input-adornment",{attrs:{prepend:n.protocolSelect}},[e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),e("t-input-adornment",{attrs:{append:n.tldSelect}},[e("t-tag-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),e("t-input-adornment",{attrs:{prepend:n.protocolSelect,append:n.tldSelect}},[e("t-select",{attrs:{options:["tencent","qq","cloud.tencent"].map(function(a){return{label:a,value:a}}),defaultValue:"tencent"}})],1)],1)},_=[];const l={};var h=o(i,m,_,!1,v,null,null,null);function v(n){for(let t in l)this[t]=l[t]}const S=function(){return h.exports}(),b=`<template>
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
`,g=`<template>
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
          borderless={true}
          autoWidth
          options={['http://', 'https://'].map((value) => ({ label: value, value }))}
          defaultValue="http://"
        />
      ),
      tldSelect: () => (
        <t-select
          borderless={true}
          autoWidth
          options={['.com', '.cn', '.net', '.org'].map((value) => ({ label: value, value }))}
          defaultValue=".cn"
        />
      ),
    };
  },
};
<\/script>

<style lang="less">
.adornment-select {
  .t-input-adornment {
    .t-input-adornment__prepend,
    .t-input-adornment__append {
      transition: background-color 0.3s;
      &:hover {
        background-color: var(--td-bg-color-secondarycontainer-hover);
      }
      .t-select__wrap {
        .t-select {
          .t-input:hover:not(.t-is-disabled) {
            .t-fake-arrow {
              color: var(--td-text-color-placeholder);
            }
          }
        }
      }
    }
  }
}
</style>
`;export{f as D,S as a,b,g as c};
