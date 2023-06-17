import{n as o,r}from"./index.ba4b8fbd.js";var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-textarea",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848",name:"description"},on:{change:e.onChange},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("t-textarea",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF1Bautosize=true",name:"description",autosize:!0},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),n("t-textarea",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF0C\u6700\u5C0F3\u884C\uFF0C\u6700\u59275\u884C\uFF1Bautosize={minRows: 3, maxRows: 5}",name:"description",autosize:{minRows:3,maxRows:5}},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1)},x=[];const h={data(){return{value:"",value2:"",value3:""}},methods:{onChange(e,t){console.log("onChange\uFF1A",e,t)}}},u={};var g=o(h,f,x,!1,y,null,null,null);function y(e){for(let t in u)this[t]=u[t]}const A=function(){return g.exports}();var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-textarea",{attrs:{tips:"\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u63D0\u793A\u6587\u5B57",placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6587\u672C\u957F\u5EA6\u6700\u591A20\uFF0Cmaxlength=20",maxlength:20},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("t-textarea",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6700\u591A20\u5B57\u7B26\uFF08\u4E00\u4E2A\u6C49\u5B57\u5360\u4E24\u4E2A\u5B57\u7B26\u957F\u5EA6\uFF09\uFF0Cmaxcharacter=20",maxcharacter:20},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},b=[];const w={data(){return{value:"",value2:""}},methods:{}},c={};var K=o(w,$,b,!1,C,null,null,null);function C(e){for(let t in c)this[t]=c[t]}const G=function(){return K.exports}();var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-textarea",{attrs:{placeholder:"\u8BF7\u8F93\u5165"},on:{keypress:e.onKeypress,keydown:e.onKeydown,keyup:e.onKeyup,focus:e.onFocus,blur:e.onBlur},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},R=[];const F={data(){return{value:""}},methods:{onKeypress(e,t){console.log("onKeypress: ",e,t)},onKeydown(e,t){console.log("onKeydown: ",e,t)},onKeyup(e,t){console.log("onKeyup: ",e,t)},onFocus(e,t){console.log("onFocus: ",e,t)},onBlur(e,t){console.log("onBlur: ",e,t)}}},i={};var z=o(F,k,R,!1,B,null,null,null);function B(e){for(let t in i)this[t]=i[t]}const H=function(){return z.exports}();var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-textarea",{attrs:{disabled:"","default-value":"\u7981\u7528\u72B6\u6001"}}),n("t-textarea",{attrs:{readonly:"","default-value":"\u53EA\u8BFB\u72B6\u6001"}}),n("t-textarea",{attrs:{"default-value":"\u666E\u901A\u72B6\u6001",tips:"\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A"}}),n("t-textarea",{attrs:{status:"success","default-value":"\u6210\u529F\u72B6\u6001",tips:"\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A"}}),n("t-textarea",{attrs:{status:"warning","default-value":"\u8B66\u544A\u72B6\u6001",tips:"\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A"}}),n("t-textarea",{attrs:{status:"error","default-value":"\u9519\u8BEF\u72B6\u6001",tips:"\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A"}})],1)},M=[];const P={},v={};var S=o(P,D,M,!1,j,null,null,null);function j(e){for(let t in v)this[t]=v[t]}const I=function(){return S.exports}(),N=`<template>
  <t-space direction="vertical">
    <t-textarea v-model="value" placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848" name="description" @change="onChange" />

    <t-textarea
      v-model="value2"
      placeholder="\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF1Bautosize=true"
      name="description"
      :autosize="true"
    />

    <t-textarea
      v-model="value3"
      placeholder="\u8BF7\u8F93\u5165\u6587\u6848\uFF0C\u9AD8\u5EA6\u53EF\u81EA\u9002\u5E94\uFF0C\u6700\u5C0F3\u884C\uFF0C\u6700\u59275\u884C\uFF1Bautosize={minRows: 3, maxRows: 5}"
      name="description"
      :autosize="{ minRows: 3, maxRows: 5 }"
    />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      value2: '',
      value3: '',
    };
  },
  methods: {
    onChange(value, e) {
      console.log('onChange\uFF1A', value, e);
    },
  },
};
<\/script>
`,O=`<template>
  <t-space direction="vertical">
    <t-textarea
      v-model="value"
      tips="\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u63D0\u793A\u6587\u5B57"
      placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6587\u672C\u957F\u5EA6\u6700\u591A20\uFF0Cmaxlength=20"
      :maxlength="20"
    ></t-textarea>

    <t-textarea
      v-model="value2"
      placeholder="\u8BF7\u8F93\u5165\u63CF\u8FF0\u6587\u6848\uFF0C\u6700\u591A20\u5B57\u7B26\uFF08\u4E00\u4E2A\u6C49\u5B57\u5360\u4E24\u4E2A\u5B57\u7B26\u957F\u5EA6\uFF09\uFF0Cmaxcharacter=20"
      :maxcharacter="20"
    ></t-textarea>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      value2: '',
    };
  },
  methods: {},
};
<\/script>
<style></style>
`,Q=`<template>
  <t-textarea
    v-model="value"
    placeholder="\u8BF7\u8F93\u5165"
    @keypress="onKeypress"
    @keydown="onKeydown"
    @keyup="onKeyup"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>
<script>
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onKeypress(value, e) {
      console.log('onKeypress: ', value, e);
    },
    onKeydown(value, e) {
      console.log('onKeydown: ', value, e);
    },
    onKeyup(value, e) {
      console.log('onKeyup: ', value, e);
    },

    onFocus(value, e) {
      console.log('onFocus: ', value, e);
    },
    onBlur(value, e) {
      console.log('onBlur: ', value, e);
    },
  },
};
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <t-textarea disabled default-value="\u7981\u7528\u72B6\u6001" />
    <t-textarea readonly default-value="\u53EA\u8BFB\u72B6\u6001" />
    <t-textarea default-value="\u666E\u901A\u72B6\u6001" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A" />
    <t-textarea status="success" default-value="\u6210\u529F\u72B6\u6001" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
    <t-textarea status="warning" default-value="\u8B66\u544A\u72B6\u6001" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
    <t-textarea status="error" default-value="\u9519\u8BEF\u72B6\u6001" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" />
  </t-space>
</template>
`,E=[{name:"autofocus",type:"Boolean",defaultValue:!1,options:[]},{name:"autosize",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]}],d={};d.setup=(e,t)=>{const n=r(E),a=[{label:"textarea",value:"textarea"}],l={textarea:'<t-textarea placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-bind="configProps" />'},s=r(`<template>${l[a[0].value].trim()}</template>`);function m(_){s.value=`<template>${l[_].trim()}</template>`}return{configList:n,panelList:a,usageCode:s,onPanelChange:m}};var L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"textarea",fn:function(a){var l=a.configProps;return[n("t-textarea",e._b({attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}},"t-textarea",l,!1))]}}])})},V=[];const p={};var U=o(d,L,V,!1,J,null,null,null);function J(e){for(let t in p)this[t]=p[t]}const W=function(){return U.exports}();export{A as D,W as U,G as a,H as b,I as c,N as d,O as e,Q as f,T as g};
