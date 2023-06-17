import{n as a,r as s}from"./index.fb7ca27a.js";var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",[n("t-checkbox",[e._v("\u672A\u9009\u4E2D\u9879")]),n("t-checkbox",{attrs:{indeterminate:""}},[e._v("\u534A\u9009\u72B6\u6001")]),n("t-checkbox",{attrs:{checked:!0}},[e._v("\u9009\u4E2D\u9879")]),n("t-checkbox",{attrs:{disabled:""}},[e._v("\u672A\u9009\u7981\u7528\u9879")]),n("t-checkbox",{attrs:{disabled:"",checked:!0}},[e._v("\u9009\u4E2D\u7981\u7528\u9879")])],1)},b=[];const x={},i={};var g=a(x,k,b,!1,m,"6fad1835",null,null);function m(e){for(let t in i)this[t]=i[t]}const G=function(){return g.exports}();var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical",size:"24px"}},[n("div",[e._v("\u9009\u4E2D\u503C: "+e._s(e.checked))]),n("t-space",{attrs:{direction:"vertical"}},[n("t-checkbox-group",{attrs:{options:["\u9009\u9879\u4E00","\u9009\u9879\u4E8C","\u9009\u9879\u4E09"],name:"city"},model:{value:e.checked,callback:function(c){e.checked=c},expression:"checked"}}),n("t-button",{attrs:{size:"small"},on:{click:function(c){e.checked=["\u9009\u9879\u4E8C"]}}},[e._v("\u91CD\u7F6E")])],1)],1)},C=[];const $={data(){return{checked:["\u9009\u9879\u4E8C"]}}},r={};var y=a($,f,C,!1,A,null,null,null);function A(e){for(let t in r)this[t]=r[t]}const H=function(){return y.exports}(),j={data(){return this.$createElement,{value1:["\u9009\u9879\u4E00"],options1:[{value:"\u9009\u9879\u4E00",label:e=>e("div",["\u9009\u9879\u4E00"])},{value:"\u9009\u9879\u4E8C",label:"\u9009\u9879\u4E8C"},{value:"\u9009\u9879\u4E09",label:"\u9009\u9879\u4E09"}],value2:["\u9009\u9879\u4E00"],value3:["\u9009\u9879\u4E00","\u9009\u9879\u4E8C","\u9009\u9879\u4E09"],options2:[{label:"\u5168\u9009",checkAll:!0},{value:"\u9009\u9879\u4E00",label:"\u9009\u9879\u4E00"},{value:"\u9009\u9879\u4E8C",label:e=>e("div",["\u9009\u9879\u4E8C"])},{value:"\u9009\u9879\u4E09",label:"\u9009\u9879\u4E09"}]}},computed:{checkAll(){return this.options1.length===this.value1.length},indeterminate(){return!!(this.options1.length>this.value1.length&&this.value1.length)}},methods:{handleSelectAll(e){this.value1=e?["\u9009\u9879\u4E00","\u9009\u9879\u4E8C","\u9009\u9879\u4E09"]:[]},onChange1(e){console.log(this.value1,e)},onChange2(e){console.log(this.value2,e)},onChange3(e){console.log(this.value3,e)}}};var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical",size:"48px"}},[n("t-space",{attrs:{direction:"vertical"}},[n("div",[e._v("\u65B9\u5F0F\u4E00\uFF1A\u4E1A\u52A1\u4FA7\u81EA\u5B9A\u4E49\u5168\u9009\u529F\u80FD\u3002\u9009\u4E2D\u503C: "+e._s(e.value1.join(",")))]),n("div",[n("t-checkbox",{attrs:{checked:e.checkAll,indeterminate:e.indeterminate,onChange:e.handleSelectAll}},[e._v("\u5168\u9009")])],1),n("t-checkbox-group",{attrs:{options:e.options1},on:{change:e.onChange1},model:{value:e.value1,callback:function(c){e.value1=c},expression:"value1"}})],1),n("t-space",{attrs:{direction:"vertical"}},[n("div",[e._v("\u65B9\u5F0F\u4E8C\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u9009\u9879\u3002\u9009\u4E2D\u503C: "+e._s(e.value2.join(", ")))]),n("t-checkbox-group",{on:{change:e.onChange2},model:{value:e.value2,callback:function(c){e.value2=c},expression:"value2"}},[n("t-checkbox",{attrs:{checkAll:!0,label:"\u5168\u9009"}}),n("t-checkbox",{attrs:{value:"\u9009\u9879\u4E00"}},[e._v("\u9009\u9879\u4E00")]),n("t-checkbox",{attrs:{label:"\u9009\u9879\u4E8C",value:"\u9009\u9879\u4E8C",disabled:!0}}),n("t-checkbox",{attrs:{label:"\u9009\u9879\u4E09",value:"\u9009\u9879\u4E09"}})],1)],1),n("t-space",{attrs:{direction:"vertical"}},[n("div",[e._v("\u65B9\u5F0F\u4E09\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\u4F7F\u7528 `options` \u5B9A\u4E49\u9009\u9879\u3002\u9009\u4E2D\u503C: "+e._s(e.value3.join(", ")))]),n("t-checkbox-group",{attrs:{options:e.options2},on:{change:e.onChange3},model:{value:e.value3,callback:function(c){e.value3=c},expression:"value3"}})],1),n("t-space",{attrs:{direction:"vertical"}},[n("div",[e._v("\u65B9\u5F0F\u56DB\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\u975E\u53D7\u63A7\u7528\u6CD5")]),n("t-checkbox-group",{attrs:{defaultValue:["\u9009\u9879\u4E00"],options:e.options2}})],1)],1)},z=[];const u={};var D=a(j,S,z,!1,E,null,null,null);function E(e){for(let t in u)this[t]=u[t]}const I=function(){return D.exports}();var V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical",size:"36px"}},[n("t-space",[n("t-checkbox",{on:{change:e.onChange1},model:{value:e.checked1,callback:function(c){e.checked1=c},expression:"checked1"}},[e._v("\u8BED\u6CD5\u7CD6\uFF08v-model\uFF09")]),n("t-checkbox",{attrs:{checked:!0},on:{change:e.onChange2}},[e._v("\u53D7\u63A7\u5C5E\u6027")]),n("t-checkbox",{attrs:{defaultChecked:!1,onChange:e.onChange2}},[e._v("\u975E\u53D7\u63A7\u5C5E\u6027")])],1),n("t-checkbox-group",{attrs:{value:e.checked2,options:e.options,onChange:e.onChange2}})],1)},M=[];const P={data(){return{checked1:!0,checked2:[1],options:[{label:"\u5168\u9009",checkAll:!0},{value:1,label:"\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E00"},{value:2,label:"\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E8C"},{value:3,label:"\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E09"}]}},methods:{onChange1(e){console.log("change:",this.checked1,e)},onChange2(e,t){console.log("change: ",e,t)}}},h={};var B=a(P,V,M,!1,F,"b08312dc",null,null);function F(e){for(let t in h)this[t]=h[t]}const K=function(){return B.exports}(),N=`<template>
  <t-space>
    <t-checkbox>\u672A\u9009\u4E2D\u9879</t-checkbox>
    <t-checkbox indeterminate>\u534A\u9009\u72B6\u6001</t-checkbox>
    <t-checkbox :checked="true">\u9009\u4E2D\u9879</t-checkbox>
    <t-checkbox disabled>\u672A\u9009\u7981\u7528\u9879</t-checkbox>
    <t-checkbox disabled :checked="true">\u9009\u4E2D\u7981\u7528\u9879</t-checkbox>
  </t-space>
</template>

<style scoped>
.t-checkbox + .t-checkbox {
  margin-left: 16px;
}
</style>
`,O=`<template>
  <t-space direction="vertical" size="24px">
    <div>\u9009\u4E2D\u503C: {{ checked }}</div>
    <t-space direction="vertical">
      <!-- name \u975E\u5FC5\u9700 -->
      <t-checkbox-group v-model="checked" :options="['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C', '\u9009\u9879\u4E09']" name="city"></t-checkbox-group>
      <t-button @click="checked = ['\u9009\u9879\u4E8C']" size="small">\u91CD\u7F6E</t-button>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked: ['\u9009\u9879\u4E8C'],
    };
  },
};
<\/script>
`,Q=`<template>
  <t-space direction="vertical" size="48px">
    <t-space direction="vertical">
      <div>\u65B9\u5F0F\u4E00\uFF1A\u4E1A\u52A1\u4FA7\u81EA\u5B9A\u4E49\u5168\u9009\u529F\u80FD\u3002\u9009\u4E2D\u503C: {{ value1.join(',') }}</div>
      <div>
        <t-checkbox :checked="checkAll" :indeterminate="indeterminate" :onChange="handleSelectAll">\u5168\u9009</t-checkbox>
      </div>
      <t-checkbox-group v-model="value1" :options="options1" @change="onChange1" />
    </t-space>

    <t-space direction="vertical">
      <div>\u65B9\u5F0F\u4E8C\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u9009\u9879\u3002\u9009\u4E2D\u503C: {{ value2.join(', ') }}</div>
      <t-checkbox-group v-model="value2" @change="onChange2">
        <t-checkbox :checkAll="true" label="\u5168\u9009" />
        <t-checkbox value="\u9009\u9879\u4E00">\u9009\u9879\u4E00</t-checkbox>
        <t-checkbox label="\u9009\u9879\u4E8C" value="\u9009\u9879\u4E8C" :disabled="true" />
        <t-checkbox label="\u9009\u9879\u4E09" value="\u9009\u9879\u4E09" />
      </t-checkbox-group>
    </t-space>

    <t-space direction="vertical">
      <div>\u65B9\u5F0F\u4E09\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\u4F7F\u7528 \`options\` \u5B9A\u4E49\u9009\u9879\u3002\u9009\u4E2D\u503C: {{ value3.join(', ') }}</div>
      <t-checkbox-group v-model="value3" :options="options2" @change="onChange3" />
    </t-space>

    <t-space direction="vertical">
      <div>\u65B9\u5F0F\u56DB\uFF1A\u7EC4\u4EF6\u5185\u7F6E\u5168\u9009\u529F\u80FD\uFF0C\u975E\u53D7\u63A7\u7528\u6CD5</div>
      <t-checkbox-group :defaultValue="['\u9009\u9879\u4E00']" :options="options2" />
    </t-space>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: ['\u9009\u9879\u4E00'],
      options1: [
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        { value: '\u9009\u9879\u4E00', label: (h) => <div>\u9009\u9879\u4E00</div> },
        { value: '\u9009\u9879\u4E8C', label: '\u9009\u9879\u4E8C' },
        { value: '\u9009\u9879\u4E09', label: '\u9009\u9879\u4E09' },
      ],

      value2: ['\u9009\u9879\u4E00'],
      value3: ['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C', '\u9009\u9879\u4E09'],
      options2: [
        { label: '\u5168\u9009', checkAll: true },
        { value: '\u9009\u9879\u4E00', label: '\u9009\u9879\u4E00' },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        { value: '\u9009\u9879\u4E8C', label: (h) => <div>\u9009\u9879\u4E8C</div> },
        { value: '\u9009\u9879\u4E09', label: '\u9009\u9879\u4E09' },
      ],
    };
  },
  computed: {
    checkAll() {
      return this.options1.length === this.value1.length;
    },
    indeterminate() {
      return !!(this.options1.length > this.value1.length && this.value1.length);
    },
  },
  methods: {
    handleSelectAll(checked) {
      this.value1 = checked ? ['\u9009\u9879\u4E00', '\u9009\u9879\u4E8C', '\u9009\u9879\u4E09'] : [];
    },
    onChange1(val) {
      console.log(this.value1, val);
    },
    onChange2(val) {
      console.log(this.value2, val);
    },
    onChange3(val) {
      console.log(this.value3, val);
    },
  },
};
<\/script>
`,T=`<template>
  <t-space direction="vertical" size="36px">
    <!-- \u5355\u4E2A Checkbox \u53D7\u63A7\u6A21\u5F0F -->
    <t-space>
      <t-checkbox v-model="checked1" @change="onChange1">\u8BED\u6CD5\u7CD6\uFF08v-model\uFF09</t-checkbox>
      <t-checkbox :checked="true" @change="onChange2">\u53D7\u63A7\u5C5E\u6027</t-checkbox>
      <t-checkbox :defaultChecked="false" :onChange="onChange2">\u975E\u53D7\u63A7\u5C5E\u6027</t-checkbox>
    </t-space>
    <!-- \u590D\u9009\u6846\u6846\u7EC4\u53D7\u63A7\u6A21\u5F0F -->
    <t-checkbox-group :value="checked2" :options="options" :onChange="onChange2" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: [1],
      options: [
        { label: '\u5168\u9009', checkAll: true },
        { value: 1, label: '\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E00' },
        { value: 2, label: '\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E8C' },
        { value: 3, label: '\u53D7\u63A7\u6A21\u5F0F\u9009\u9879\u4E09' },
      ],
    };
  },
  methods: {
    onChange1(val) {
      console.log('change:', this.checked1, val);
    },
    onChange2(value, context) {
      console.log('change: ', value, context);
    },
  },
};
<\/script>

<style scoped>
.t-checkbox + .t-checkbox {
  margin-left: 16px;
}
</style>
`,R=[{name:"checkAll",type:"Boolean",defaultValue:!1,options:[]},{name:"checked",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"indeterminate",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]}],d={};d.setup=(e,t)=>{const n=s(R),c=[{label:"checkbox",value:"checkbox"}],o={checkbox:'<t-checkbox v-bind="configProps">\u57FA\u7840\u591A\u9009\u6846</t-checkbox>'},l=s(`<template>${o[c[0].value].trim()}</template>`);function p(_){l.value=`<template>${o[_].trim()}</template>`}return{configList:n,panelList:c,usageCode:l,onPanelChange:p}};var L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"checkbox",fn:function(c){var o=c.configProps;return[n("t-checkbox",e._b({},"t-checkbox",o,!1),[e._v("\u57FA\u7840\u591A\u9009\u6846")])]}}])})},U=[];const v={};var J=a(d,L,U,!1,q,null,null,null);function q(e){for(let t in v)this[t]=v[t]}const W=function(){return J.exports}();export{G as D,W as U,H as a,I as b,K as c,N as d,O as e,Q as f,T as g};
