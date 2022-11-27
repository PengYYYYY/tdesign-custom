import{n as l,r as i}from"./index.7bc89517.js";import{L as u}from"./lock-on.d8f143df.js";var S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{staticStyle:{"max-width":"500px"},attrs:{direction:"vertical"}},[e("t-input"),e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9\uFF08\u6709\u9ED8\u8BA4\u503C\uFF09"},on:{enter:t.onEnter,change:t.onChange},model:{value:t.input,callback:function(a){t.input=a},expression:"input"}}),e("t-input",{attrs:{label:"\u4EF7\u683C\uFF1A",suffix:"\u5143"}})],1)},D=[];const C={data(){return{input:"\u6709\u9ED8\u8BA4\u503C"}},methods:{onEnter(){console.log("trigger enter")},onChange(t){console.log(this.input,t)}}},o={};var k=l(C,S,D,!1,E,null,null,null);function E(t){for(let n in o)this[n]=o[n]}const Mt=function(){return k.exports}();var j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{staticStyle:{"max-width":"500px"},attrs:{direction:"vertical"}},[e("t-input-adornment",{attrs:{prepend:"http://"}},[e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),e("t-input-adornment",{attrs:{append:".com"}},[e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),e("t-input-adornment",{attrs:{prepend:"http://",append:".com"}},[e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1)],1)},T=[];const V={},p={};var M=l(V,j,T,!1,z,null,null,null);function z(t){for(let n in p)this[n]=p[n]}const zt=function(){return M.exports}();var F=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{staticStyle:{"max-width":"500px"},attrs:{direction:"vertical"}},[e("t-input-group",{attrs:{separate:""}},[e("t-input",{style:{width:"100px"},attrs:{"default-value":"0731"}}),e("t-input",{attrs:{"default-value":"12345677"}})],1),e("t-input-group",{attrs:{separate:""}},[e("t-input"),e("t-input")],1),e("t-input-group",[e("t-input"),e("t-input")],1),e("t-input-group",{attrs:{separate:""}},[e("t-input",{style:{width:"100px"},attrs:{"default-value":"0731"}}),e("span",{style:{lineHeight:"32px"}},[t._v("\xA0-\xA0")]),e("t-input",{style:{width:"100px"},attrs:{"default-value":"12345"}}),e("t-input",{style:{width:"100px"},attrs:{"default-value":"678901"}}),e("t-input",{style:{width:"100px"}})],1)],1)},R=[];const L={},c={};var I=l(L,F,R,!1,P,null,null,null);function P(t){for(let n in c)this[n]=c[n]}const Ft=function(){return I.exports}();var O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-input",{staticStyle:{"max-width":"500px"},attrs:{clearable:"",placeholder:"\u8BF7\u8F93\u5165"},on:{clear:t.onClear},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})},B=[];const H={data(){return{value:"Hello TDesign"}},methods:{onClear(){console.log("clear")}}},d={};var N=l(H,O,B,!1,U,null,null,null);function U(t){for(let n in d)this[n]=d[n]}const Rt=function(){return N.exports}(),q={components:{LockOnIcon:u},methods:{renderPrefixIcon(){const t=this.$createElement;return t(u)}}};var J=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{staticStyle:{"max-width":"500px"},attrs:{direction:"vertical"}},[e("t-input",{attrs:{type:"password","default-value":"520 TDesign"}},[e("lock-on-icon",{attrs:{slot:"prefix-icon"},slot:"prefix-icon"})],1),e("t-input",{attrs:{type:"password","default-value":"520 TDesign","prefix-icon":t.renderPrefixIcon}})],1)},W=[];const m={};var A=l(q,J,W,!1,G,null,null,null);function G(t){for(let n in m)this[n]=m[n]}const Lt=function(){return A.exports}();var K=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{staticClass:"t-demo__input-status",staticStyle:{"max-width":"800px"},attrs:{size:80}},[e("t-space",{attrs:{direction:"vertical"}},[e("t-input",{attrs:{disabled:"","default-value":"\u7981\u7528\u72B6\u6001"}}),e("t-input",{attrs:{readonly:"","default-value":"\u53EA\u8BFB\u72B6\u6001"}})],1),e("t-space",{attrs:{direction:"vertical"}},[e("t-input",{attrs:{"default-value":"\u6210\u529F\u72B6\u6001"}}),e("t-input",{attrs:{status:"success","default-value":"\u6210\u529F\u72B6\u6001"}}),e("t-input",{attrs:{status:"warning","default-value":"\u8B66\u544A\u72B6\u6001"}}),e("t-input",{attrs:{status:"error","default-value":"\u9519\u8BEF\u72B6\u6001"}})],1),e("t-space",{attrs:{direction:"vertical"}},[e("t-input",{attrs:{"default-value":"\u666E\u901A\u72B6\u6001",tips:"\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A"}}),e("t-input",{attrs:{status:"success","default-value":"\u6210\u529F\u72B6\u6001",tips:"\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A"}}),e("t-input",{attrs:{status:"warning","default-value":"\u8B66\u544A\u72B6\u6001",tips:"\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A"}}),e("t-input",{attrs:{status:"error","default-value":"\u9519\u8BEF\u72B6\u6001",tips:"\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A"}})],1)],1)},Q=[];const X={},v={};var Y=l(X,K,Q,!1,Z,null,null,null);function Z(t){for(let n in v)this[n]=v[n]}const It=function(){return Y.exports}();var tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{staticStyle:{"max-width":"500px"},attrs:{direction:"vertical"}},[e("t-input",{attrs:{size:"large",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}}),e("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}}),e("t-input",{attrs:{size:"small",placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1)},et=[];const nt={},_={};var at=l(nt,tt,et,!1,lt,null,null,null);function lt(t){for(let n in _)this[n]=_[n]}const Pt=function(){return at.exports}();var st=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{staticStyle:{"max-width":"500px"},attrs:{direction:"vertical"}},[e("t-input",{attrs:{"default-value":"\u5DE6\u5BF9\u9F50",align:"left"}}),e("t-input",{attrs:{"default-value":"\u5C45\u4E2D\u5BF9\u9F50",align:"center"}}),e("t-input",{attrs:{"default-value":"\u53F3\u5BF9\u9F50",align:"right"}})],1)},rt=[];const it={},f={};var ut=l(it,st,rt,!1,ot,null,null,null);function ot(t){for(let n in f)this[n]=f[n]}const Ot=function(){return ut.exports}();var pt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-input",{staticStyle:{"max-width":"500px"},attrs:{"auto-width":"","default-value":"\u5BBD\u5EA6\u81EA\u9002\u5E94"}})},ct=[];const dt={},h={};var mt=l(dt,pt,ct,!1,vt,null,null,null);function vt(t){for(let n in h)this[n]=h[n]}const Bt=function(){return mt.exports}();var _t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{staticStyle:{"max-width":"500px"},attrs:{direction:"vertical",size:24}},[e("t-input",{attrs:{maxlength:5,"show-limit-number":"",placeholder:"\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u6700\u5927\u6587\u672C\u957F\u5EA6\uFF0C\u4E00\u4E2A\u4E2D\u6587\u5B57\u7B49\u4E8E\u4E00\u4E2A\u957F\u5EA6"},model:{value:t.input1,callback:function(a){t.input1=a},expression:"input1"}}),e("t-input",{attrs:{maxcharacter:10,"show-limit-number":"",placeholder:"\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u6700\u5927\u5B57\u7B26\u6570\u91CF\u9650\u5236\uFF0C\u4E00\u4E2A\u4E2D\u6587\u5B57\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26"},model:{value:t.input2,callback:function(a){t.input2=a},expression:"input2"}}),e("t-input",{attrs:{maxlength:5,"show-limit-number":"","allow-input-over-max":"",placeholder:"\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u5B57\u6570\u8D85\u51FA\u65F6\u5141\u8BB8\u7EE7\u7EED\u8F93\u5165",tips:t.errorTips,status:t.errorTips?"error":""},on:{validate:t.onValidate},model:{value:t.input3,callback:function(a){t.input3=a},expression:"input3"}}),e("t-input",{attrs:{maxlength:5,suffix:t.suffix,placeholder:"\u81EA\u5B9A\u4E49\u5B57\u6570\u9650\u5236\u6587\u672C"},model:{value:t.input4,callback:function(a){t.input4=a},expression:"input4"}})],1)},ft=[];const ht={data(){return{input1:"",input2:"",input3:"",input4:"",errorTips:""}},computed:{suffix(){return`${[...this.input4].length}/5`}},methods:{onValidate({error:t}){this.errorTips=t?"\u8F93\u5165\u5185\u5BB9\u957F\u5EA6\u4E0D\u5141\u8BB8\u8D85\u8FC7 5 \u4E2A\u5B57":""}}},x={};var xt=l(ht,_t,ft,!1,gt,null,null,null);function gt(t){for(let n in x)this[n]=x[n]}const Ht=function(){return xt.exports}();var $t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-input",{staticStyle:{"max-width":"500px"},attrs:{status:t.inputStatus,format:t.format,placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57",tips:t.tips},model:{value:t.input,callback:function(a){t.input=a},expression:"input"}})},yt=[];const bt={data(){return{input:""}},computed:{inputStatus(){return isNaN(+this.input)?"error":""},tips(){return this.inputStatus?"\u8BF7\u8F93\u5165\u6570\u5B57":""}},methods:{format(t){const n=/(\d)(?=(?:\d{3})+$)/g;return t.replace(n,"$1,")}}},g={};var wt=l(bt,$t,yt,!1,St,null,null,null);function St(t){for(let n in g)this[n]=g[n]}const Nt=function(){return wt.exports}(),Ut=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input />
    <t-input v-model="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9\uFF08\u6709\u9ED8\u8BA4\u503C\uFF09" @enter="onEnter" @change="onChange" />
    <t-input label="\u4EF7\u683C\uFF1A" suffix="\u5143" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      input: '\u6709\u9ED8\u8BA4\u503C',
    };
  },
  methods: {
    onEnter() {
      console.log('trigger enter');
    },
    onChange(val) {
      console.log(this.input, val);
    },
  },
};
<\/script>
`,qt=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input-adornment prepend="http://">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment append=".com">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>

    <t-input-adornment prepend="http://" append=".com">
      <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    </t-input-adornment>
  </t-space>
</template>
`,Jt=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input-group separate>
      <t-input :style="{ width: '100px' }" default-value="0731" />
      <t-input default-value="12345677" />
    </t-input-group>

    <t-input-group separate>
      <t-input />
      <t-input />
    </t-input-group>

    <t-input-group>
      <t-input />
      <t-input />
    </t-input-group>

    <t-input-group separate>
      <t-input :style="{ width: '100px' }" default-value="0731" />
      <span :style="{ lineHeight: '32px' }">&nbsp;-&nbsp;</span>
      <t-input :style="{ width: '100px' }" default-value="12345" />
      <t-input :style="{ width: '100px' }" default-value="678901" />
      <t-input :style="{ width: '100px' }" />
    </t-input-group>
  </t-space>
</template>
`,Wt=`<template>
  <t-input clearable v-model="value" placeholder="\u8BF7\u8F93\u5165" @clear="onClear" style="max-width: 500px" />
</template>

<script>
export default {
  data() {
    return {
      value: 'Hello TDesign',
    };
  },
  methods: {
    onClear() {
      console.log('clear');
    },
  },
};
<\/script>
`,At=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input type="password" default-value="520 TDesign">
      <lock-on-icon slot="prefix-icon"></lock-on-icon>
    </t-input>
    <!-- \u4F7F\u7528 function \u7684\u5F62\u5F0F\u5B9A\u4E49 icon -->
    <t-input type="password" default-value="520 TDesign" :prefix-icon="renderPrefixIcon" />
  </t-space>
</template>
<script lang="jsx">
import { LockOnIcon } from 'tdesign-icons-vue';

export default {
  components: {
    LockOnIcon,
  },
  methods: {
    renderPrefixIcon() {
      return <LockOnIcon></LockOnIcon>;
    },
  },
};
<\/script>
`,Gt=`<template>
  <t-space class="t-demo__input-status" :size="80" style="max-width: 800px">
    <t-space direction="vertical">
      <t-input disabled default-value="\u7981\u7528\u72B6\u6001" />
      <t-input readonly default-value="\u53EA\u8BFB\u72B6\u6001" />
    </t-space>
    <t-space direction="vertical">
      <t-input default-value="\u6210\u529F\u72B6\u6001" />
      <t-input status="success" default-value="\u6210\u529F\u72B6\u6001" />
      <t-input status="warning" default-value="\u8B66\u544A\u72B6\u6001" />
      <t-input status="error" default-value="\u9519\u8BEF\u72B6\u6001" />
    </t-space>
    <t-space direction="vertical">
      <t-input default-value="\u666E\u901A\u72B6\u6001" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A" />
      <t-input status="success" default-value="\u6210\u529F\u72B6\u6001" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
      <t-input status="warning" default-value="\u8B66\u544A\u72B6\u6001" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" />
      <t-input status="error" default-value="\u9519\u8BEF\u72B6\u6001" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" />
    </t-space>
  </t-space>
</template>

<style>
.t-demo__input-status .t-space-item {
  margin-bottom: 12px;
}
</style>
`,Kt=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input size="large" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
    <t-input size="small" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
  </t-space>
</template>
`,Qt=`<template>
  <t-space direction="vertical" style="max-width: 500px">
    <t-input default-value="\u5DE6\u5BF9\u9F50" align="left" />
    <t-input default-value="\u5C45\u4E2D\u5BF9\u9F50" align="center" />
    <t-input default-value="\u53F3\u5BF9\u9F50" align="right" />
  </t-space>
</template>
`,Xt=`<template>
  <t-input auto-width default-value="\u5BBD\u5EA6\u81EA\u9002\u5E94" style="max-width: 500px" />
</template>
`,Yt=`<template>
  <t-space direction="vertical" :size="24" style="max-width: 500px">
    <!-- \u5185\u7F6E -->
    <t-input
      v-model="input1"
      :maxlength="5"
      show-limit-number
      placeholder="\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u6700\u5927\u6587\u672C\u957F\u5EA6\uFF0C\u4E00\u4E2A\u4E2D\u6587\u5B57\u7B49\u4E8E\u4E00\u4E2A\u957F\u5EA6"
    />

    <t-input
      v-model="input2"
      :maxcharacter="10"
      show-limit-number
      placeholder="\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u6700\u5927\u5B57\u7B26\u6570\u91CF\u9650\u5236\uFF0C\u4E00\u4E2A\u4E2D\u6587\u5B57\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26"
    />

    <t-input
      v-model="input3"
      :maxlength="5"
      show-limit-number
      allow-input-over-max
      placeholder="\u5185\u7F6E\u5B57\u6570\u9650\u5236\uFF0C\u5B57\u6570\u8D85\u51FA\u65F6\u5141\u8BB8\u7EE7\u7EED\u8F93\u5165"
      :tips="errorTips"
      :status="errorTips ? 'error' : ''"
      @validate="onValidate"
    />

    <!-- \u81EA\u5B9A\u4E49 -->
    <t-input v-model="input4" :maxlength="5" :suffix="suffix" placeholder="\u81EA\u5B9A\u4E49\u5B57\u6570\u9650\u5236\u6587\u672C" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      errorTips: '',
    };
  },

  computed: {
    suffix() {
      return \`\${[...this.input4].length}/5\`;
    },
  },

  methods: {
    onValidate({ error }) {
      this.errorTips = error ? '\u8F93\u5165\u5185\u5BB9\u957F\u5EA6\u4E0D\u5141\u8BB8\u8D85\u8FC7 5 \u4E2A\u5B57' : '';
    },
  },
};
<\/script>
`,Zt=`<template>
  <t-input
    v-model="input"
    :status="inputStatus"
    :format="format"
    placeholder="\u8BF7\u8F93\u5165\u6570\u5B57"
    :tips="tips"
    style="max-width: 500px"
  />
</template>
<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  computed: {
    inputStatus() {
      if (isNaN(+this.input)) {
        return 'error';
      }
      return '';
    },
    tips() {
      if (!this.inputStatus) {
        return '';
      }
      return '\u8BF7\u8F93\u5165\u6570\u5B57';
    },
  },
  methods: {
    format(val) {
      const reg = /(\\d)(?=(?:\\d{3})+$)/g;
      const str = val.replace(reg, '$1,');
      return str;
    },
  },
};
<\/script>
`,Dt=[{name:"align",type:"enum",defaultValue:"left",options:[{label:"left",value:"left"},{label:"center",value:"center"},{label:"right",value:"right"}]},{name:"autofocus",type:"Boolean",defaultValue:!1,options:[]},{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"showClearIconOnEmpty",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"status",type:"enum",defaultValue:"",options:[{label:"default",value:""},{label:"success",value:"success"},{label:"warning",value:"warning"},{label:"error",value:"error"}]},{name:"type",type:"enum",defaultValue:"text",options:[{label:"text",value:"text"},{label:"number",value:"number"},{label:"url",value:"url"},{label:"tel",value:"tel"},{label:"password",value:"password"},{label:"search",value:"search"},{label:"submit",value:"submit"},{label:"hidden",value:"hidden"}]}],y={};y.setup=(t,n)=>{const e=i(Dt),a=[{label:"input",value:"input"}],s={input:'<t-input v-bind="configProps" />'},r=i(`<template>${s[a[0].value].trim()}</template>`);function b(w){r.value=`<template>${s[w].trim()}</template>`}return{configList:e,panelList:a,usageCode:r,onPanelChange:b}};var Ct=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"input",fn:function(a){var s=a.configProps;return[e("t-input",t._b({},"t-input",s,!1))]}}])})},kt=[];const $={};var Et=l(y,Ct,kt,!1,jt,null,null,null);function jt(t){for(let n in $)this[n]=$[n]}const te=function(){return Et.exports}();export{Mt as D,te as U,zt as a,Ft as b,Rt as c,Lt as d,It as e,Pt as f,Ot as g,Bt as h,Ht as i,Nt as j,Ut as k,qt as l,Jt as m,Wt as n,At as o,Gt as p,Kt as q,Qt as r,Xt as s,Yt as t,Zt as u};
