import{n as o,r}from"./index.7ed388d9.js";var d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("t-space",{attrs:{direction:"vertical"}},[t("t-message",{attrs:{theme:"info"}},[e._v("\u7528\u4E8E\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A")]),t("t-message",{attrs:{theme:"success"}},[e._v("\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210")]),t("t-message",{attrs:{theme:"warning"}},[e._v("\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C")]),t("t-message",{attrs:{theme:"error"}},[e._v("\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u7684\u540E\u679C")]),t("t-message",{attrs:{theme:"question"}},[e._v("\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u64CD\u4F5C\u7684\u4FE1\u606F\u63D0\u793A")])],1)},f=[];const h={},l={};var p=o(h,d,f,!1,v,null,null,null);function v(e){for(let s in l)this[s]=l[s]}const S=function(){return p.exports}();var b=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("t-space",{attrs:{direction:"vertical"}},[t("t-message",{attrs:{theme:"loading"}},[e._v("\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D")]),t("t-message",{attrs:{theme:e.status1}},[e._v("\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210(10s)")]),t("t-message",{attrs:{theme:e.status2}},[e._v("\u7528\u4E8E\u8868\u793A\u666E\u901A\u64CD\u4F5C\u5931\u8D25\u4E2D\u65AD(10s)")]),t("t-button",{attrs:{disabled:e.isDisabled},on:{click:e.reset}},[e._v("\u91CD\u7F6E")])],1)},$=[];const x={data(){return{status1:"loading",status2:"loading"}},computed:{isDisabled(){return this.status1==="loading"&&this.status2==="loading"}},mounted(){this.fn1(),this.fn2()},methods:{fn1(){setTimeout(()=>{this.status1="success"},1e4)},fn2(){setTimeout(()=>{this.status2="warning"},1e4)},reset(){this.status1="loading",this.status2="loading",this.fn1(),this.fn2()}}},u={};var C=o(x,b,$,!1,D,null,null,null);function D(e){for(let s in u)this[s]=u[s]}const T=function(){return C.exports}(),j=`<template>
  <t-space direction="vertical">
    <t-message theme="info">\u7528\u4E8E\u8868\u793A\u666E\u901A\u64CD\u4F5C\u4FE1\u606F\u63D0\u793A</t-message>
    <t-message theme="success">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210</t-message>
    <t-message theme="warning">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E00\u5B9A\u540E\u679C</t-message>
    <t-message theme="error">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u5F15\u8D77\u4E25\u91CD\u7684\u540E\u679C</t-message>
    <t-message theme="question">\u7528\u4E8E\u5E2E\u52A9\u7528\u6237\u64CD\u4F5C\u7684\u4FE1\u606F\u63D0\u793A</t-message>
  </t-space>
</template>
`,k=`<template>
  <t-space direction="vertical">
    <t-message theme="loading">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u6B63\u5728\u751F\u6548\u7684\u8FC7\u7A0B\u4E2D</t-message>
    <t-message :theme="status1">\u7528\u4E8E\u8868\u793A\u64CD\u4F5C\u987A\u5229\u8FBE\u6210(10s)</t-message>
    <t-message :theme="status2">\u7528\u4E8E\u8868\u793A\u666E\u901A\u64CD\u4F5C\u5931\u8D25\u4E2D\u65AD(10s)</t-message>
    <t-button :disabled="isDisabled" @click="reset">\u91CD\u7F6E</t-button>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      status1: 'loading',
      status2: 'loading',
    };
  },
  computed: {
    isDisabled() {
      return this.status1 === 'loading' && this.status2 === 'loading';
    },
  },
  mounted() {
    this.fn1();
    this.fn2();
  },
  methods: {
    fn1() {
      setTimeout(() => {
        this.status1 = 'success';
      }, 10000);
    },
    fn2() {
      setTimeout(() => {
        this.status2 = 'warning';
      }, 10000);
    },
    reset() {
      this.status1 = 'loading';
      this.status2 = 'loading';
      this.fn1();
      this.fn2();
    },
  },
};
<\/script>
`,y=[{name:"closeBtn",type:"Boolean",defaultValue:!1,options:[]},{name:"icon",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"info",options:[{label:"info",value:"info"},{label:"success",value:"success"},{label:"warning",value:"warning"},{label:"error",value:"error"},{label:"question",value:"question"},{label:"loading",value:"loading"}]}],m={};m.setup=(e,s)=>{const t=r(y),n=[{label:"message",value:"message"}],a={message:'<t-message v-bind="configProps" :duration="0" content="\u8FD9\u91CC\u662F Message \u4FE1\u606F" />'},i=r(`<template>${a[n[0].value].trim()}</template>`);function g(_){i.value=`<template>${a[_].trim()}</template>`}return{configList:t,panelList:n,usageCode:i,onPanelChange:g}};var w=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"message",fn:function(n){var a=n.configProps;return[t("t-message",e._b({attrs:{duration:0,content:"\u8FD9\u91CC\u662F Message \u4FE1\u606F"}},"t-message",a,!1))]}}])})},M=[];const c={};var P=o(m,w,M,!1,q,null,null,null);function q(e){for(let s in c)this[s]=c[s]}const B=function(){return P.exports}();export{S as D,B as U,T as a,j as b,k as c};
