import{n as l,e as D,r as u}from"./index.7bc89517.js";const S={data(){return this.$createElement,{value:"first",tab:1,tabList:[{label:"\u9009\u9879\u5361\u4E00",value:1,panel:t=>t("p",{style:"padding: 25px"},["\u8FD9\u662F\u9009\u9879\u5361\u4E00\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3"])},{label:"\u9009\u9879\u5361\u4E8C",value:2,panel:t=>t("p",{style:"padding: 25px"},["\u8FD9\u662F\u9009\u9879\u5361\u4E8C\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3"])},{label:"\u9009\u9879\u5361\u4E09",value:3,panel:t=>t("p",{style:"padding: 25px"},["\u8FD9\u662F\u9009\u9879\u5361\u4E09\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3"])}]}},methods:{panelRender(){const t=this.$createElement;return t("p",{style:"padding: 25px;"},["\u9009\u9879\u53613\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3"])}}};var F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("t-space",{attrs:{direction:"vertical"}},[e("t-tabs",{model:{value:t.value,callback:function(n){t.value=n},expression:"value"}},[e("t-tab-panel",{attrs:{value:"first",label:"\u9009\u9879\u53611",destroyOnHide:!1}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53611\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3")])]),e("t-tab-panel",{attrs:{value:"second",label:"\u9009\u9879\u53612",destroyOnHide:!1}},[e("p",{staticStyle:{padding:"25px"},attrs:{slot:"panel"},slot:"panel"},[t._v("\u9009\u9879\u53612\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3")])]),e("t-tab-panel",{attrs:{value:"third",label:"\u9009\u9879\u53613",panel:t.panelRender}})],1),e("t-tabs",{attrs:{list:t.tabList},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}})],1)},T=[];const o={};var C=l(S,F,T,!1,E,null,null,null);function E(t){for(let a in o)this[a]=o[a]}const yt=function(){return C.exports}();var V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("t-space",{attrs:{direction:"vertical",size:"32px"}},[e("t-space",[e("t-radio-group",{attrs:{variant:"default-filled"},model:{value:t.theme,callback:function(n){t.theme=n},expression:"theme"}},[e("t-radio-button",{attrs:{value:"normal"}},[t._v("\u5E38\u89C4\u578B")]),e("t-radio-button",{attrs:{value:"card"}},[t._v("\u5361\u7247\u578B")])],1)],1),e("t-tabs",{attrs:{value:t.value,theme:t.theme},on:{change:function(n){return t.value=n}}},[e("t-tab-panel",{attrs:{value:"first"},scopedSlots:t._u([{key:"label",fn:function(){return[e("icon",{staticStyle:{"margin-right":"4px"},attrs:{name:"home"}}),t._v(" \u9996\u9875 ")]},proxy:!0}])},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9996\u9875\u7684\u5185\u5BB9")])]),e("t-tab-panel",{attrs:{value:"second"},scopedSlots:t._u([{key:"label",fn:function(){return[e("icon",{staticStyle:{"margin-right":"4px"},attrs:{name:"calendar"}}),t._v(" \u65E5\u7A0B ")]},proxy:!0}])},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u65E5\u7A0B\u7684\u5185\u5BB9")])]),e("t-tab-panel",{attrs:{value:"third"},scopedSlots:t._u([{key:"label",fn:function(){return[e("icon",{staticStyle:{"margin-right":"4px"},attrs:{name:"layers"}}),t._v(" \u4E8B\u9879 ")]},proxy:!0}])},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u4E8B\u9879\u7684\u5185\u5BB9")])])],1)],1)},k=[];const w={components:{Icon:D},data(){return{theme:"normal",value:"first"}}},d={};var z=l(w,V,k,!1,R,null,null,null);function R(t){for(let a in d)this[a]=d[a]}const $t=function(){return z.exports}();var M=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("t-tabs",{staticStyle:{width:"100%"},attrs:{value:t.value,theme:"card",addable:!0},on:{add:t.addTab,remove:t.removeTab,change:t.changeTab}},t._l(t.panelData,function(n){return e("t-tab-panel",{key:n.value,attrs:{value:n.value,label:n.label,removable:n.removable}},[e("p",{staticStyle:{padding:"25px"}},[t._v(t._s(n.content))])])}),1)},j=[];let p=0;const B={data(){return{value:"first",panelData:[{value:"first",label:"\u539F\u6709\u9009\u9879\u5361",removable:!0,content:"\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9"},{value:"second",label:"\u539F\u6709\u9009\u9879\u5361",removable:!0,content:"\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9"}]}},methods:{addTab(){this.panelData=[...this.panelData,{value:`${p}`,label:"\u65B0\u9009\u9879\u5361",removable:!0,content:"\u65B0\u9009\u9879\u5361\u5185\u5BB9"}],this.value=`${p}`,p+=1},removeTab({value:t}){const a=this.panelData.findIndex(e=>e.value===t);if(a<0)return!1;this.panelData.splice(a,1),this.value===t&&this.panelData.length&&(this.value=this.panelData[Math.max(a-1,0)].value)},changeTab(t){this.value=t}}},c={};var L=l(B,M,j,!1,I,null,null,null);function I(t){for(let a in c)this[a]=c[a]}const Dt=function(){return L.exports}();var P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("t-space",{attrs:{direction:"vertical"}},[e("t-tabs",{attrs:{value:t.value1,size:"medium"},on:{change:function(n){return t.value1=n}}},[e("t-tab-panel",{attrs:{value:"first",label:"\u9009\u9879\u53611"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53611")])]),e("t-tab-panel",{attrs:{value:"second",label:"\u9009\u9879\u53612"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53612")])]),e("t-tab-panel",{attrs:{value:"third",label:"\u9009\u9879\u53613"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53613")])])],1),e("t-tabs",{attrs:{value:t.value2,size:"large"},on:{change:function(n){return t.value2=n}}},[e("t-tab-panel",{attrs:{value:"first",label:"\u9009\u9879\u53611"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53611")])]),e("t-tab-panel",{attrs:{value:"second",label:"\u9009\u9879\u53612"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53612")])]),e("t-tab-panel",{attrs:{value:"third",label:"\u9009\u9879\u53613"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53613")])])],1)],1)},H=[];const O={data(){return{value1:"first",value2:"first"}}},v={};var U=l(O,P,H,!1,q,null,null,null);function q(t){for(let a in v)this[a]=v[a]}const St=function(){return U.exports}();var J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("t-space",{attrs:{direction:"vertical"}},[e("t-tabs",{attrs:{value:t.value1},on:{change:function(n){return t.value1=n}}},[e("t-tab-panel",{attrs:{value:"first",label:"\u9009\u9879\u53611"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53611")])]),e("t-tab-panel",{attrs:{value:"second",label:"\u9009\u9879\u53612"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53612")])]),e("t-tab-panel",{attrs:{value:"third",label:"\u9009\u9879\u53613"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53613")])])],1),e("t-tabs",{attrs:{value:t.value2,theme:"card"},on:{change:function(n){return t.value2=n}}},[e("t-tab-panel",{attrs:{value:"first",label:"\u9009\u9879\u53611"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53611")])]),e("t-tab-panel",{attrs:{value:"second",label:"\u9009\u9879\u53612"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53612")])]),e("t-tab-panel",{attrs:{value:"third",label:"\u9009\u9879\u53613"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53613")])])],1)],1)},A=[];const G={data(){return{value1:"first",value2:"first"}}},b={};var K=l(G,J,A,!1,N,null,null,null);function N(t){for(let a in b)this[a]=b[a]}const Ft=function(){return K.exports}();var Q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("t-space",{attrs:{direction:"vertical",size:"32px"}},[e("t-space",[e("t-radio-group",{attrs:{variant:"default-filled"},model:{value:t.placement,callback:function(n){t.placement=n},expression:"placement"}},[e("t-radio-button",{attrs:{value:"top"}},[t._v("top")]),e("t-radio-button",{attrs:{value:"right"}},[t._v("right")]),e("t-radio-button",{attrs:{value:"bottom"}},[t._v("bottom")]),e("t-radio-button",{attrs:{value:"left"}},[t._v("left")])],1)],1),e("t-tabs",{attrs:{value:t.value,placement:t.placement},on:{change:function(n){return t.value=n}}},[e("t-tab-panel",{attrs:{value:"first",label:"\u9009\u9879\u53611"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53611")])]),e("t-tab-panel",{attrs:{value:"second",label:"\u9009\u9879\u53612"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53612")])]),e("t-tab-panel",{attrs:{value:"third",label:"\u9009\u9879\u53613"}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u53613")])])],1)],1)},W=[];const X={data(){return{placement:"top",value:"first"}}},m={};var Y=l(X,Q,W,!1,Z,null,null,null);function Z(t){for(let a in m)this[a]=m[a]}const Tt=function(){return Y.exports}();var tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("t-tabs",{attrs:{value:t.value,theme:"card",addable:!0},on:{add:t.addTab,remove:t.removeTab,change:t.changeTab}},t._l(t.panelData,function(n){return e("t-tab-panel",{key:n.value,attrs:{value:n.value,label:n.label,removable:n.removable}},[e("p",{staticStyle:{padding:"25px"}},[t._v(t._s(n.content))])])}),1)},et=[];let r=0;const at={data(){return{value:"first",panelData:[{value:"first",label:"\u539F\u6709\u9009\u9879\u5361",removable:!1,content:"\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9"},{value:"second",label:"\u539F\u6709\u9009\u9879\u5361",removable:!0,content:"\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9"}]}},methods:{addTab(){this.panelData=[...this.panelData,{value:`${r}`,label:`\u65B0\u9009\u9879\u5361${r}`,removable:!0,content:"\u65B0\u9009\u9879\u5361\u5185\u5BB9"}],this.value=`${r}`,r+=1},removeTab({value:t}){const a=this.panelData.findIndex(e=>e.value===t);if(a<0)return!1;this.panelData.splice(a,1),this.value===t&&(this.value=this.panelData[a-1].value)},changeTab(t){this.value=t}}},_={};var nt=l(at,tt,et,!1,lt,null,null,null);function lt(t){for(let a in _)this[a]=_[a]}const Ct=function(){return nt.exports}();var st=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("t-space",{staticStyle:{width:"100%"},attrs:{direction:"vertical",size:"32px"}},[e("t-space",[e("t-radio-group",{attrs:{variant:"default-filled"},model:{value:t.theme,callback:function(n){t.theme=n},expression:"theme"}},[e("t-radio-button",{attrs:{value:"normal"}},[t._v("\u5E38\u89C4\u578B")]),e("t-radio-button",{attrs:{value:"card"}},[t._v("\u5361\u7247\u578B")])],1)],1),e("t-tabs",{attrs:{theme:t.theme},model:{value:t.value,callback:function(n){t.value=n},expression:"value"}},t._l(20,function(n,s){return e("t-tab-panel",{key:s,attrs:{value:s+"",label:`\u9009\u9879\u5361${s+1}`}},[e("p",{staticStyle:{padding:"25px"}},[t._v("\u9009\u9879\u5361"+t._s(s+1))])])}),1)],1)},rt=[];const pt={data(){return{theme:"normal",value:"1"}}},f={};var it=l(pt,st,rt,!1,ut,null,null,null);function ut(t){for(let a in f)this[a]=f[a]}const Et=function(){return it.exports}();var ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("t-space",{attrs:{direction:"vertical",size:"36px"}},[e("t-space",[e("t-radio-group",{attrs:{variant:"default-filled"},model:{value:t.theme,callback:function(n){t.theme=n},expression:"theme"}},[e("t-radio-button",{attrs:{value:"normal"}},[t._v("\u5E38\u89C4\u578B")]),e("t-radio-button",{attrs:{value:"card"}},[t._v("\u5361\u7247\u578B")])],1)],1),e("t-tabs",{attrs:{value:t.value,theme:t.theme},on:{change:function(n){return t.value=n}}},[e("t-tab-panel",{attrs:{value:"first",label:"\u9009\u9879\u53611"}},[e("p",{staticStyle:{padding:"25px"}},[t._v(t._s("\u9009\u9879\u53611\u7684\u5185\u5BB9"))])]),e("t-tab-panel",{attrs:{value:"second",label:"\u9009\u9879\u53612",disabled:!0}},[e("p",{staticStyle:{padding:"25px"}},[t._v(t._s("\u9009\u9879\u53612\u7684\u5185\u5BB9"))])]),e("t-tab-panel",{attrs:{value:"third",label:"\u9009\u9879\u53613"}},[e("p",{staticStyle:{padding:"25px"}},[t._v(t._s("\u9009\u9879\u53613\u7684\u5185\u5BB9"))])])],1)],1)},dt=[];const ct={data(){return{theme:"normal",value:"first"}}},h={};var vt=l(ct,ot,dt,!1,bt,null,null,null);function bt(t){for(let a in h)this[a]=h[a]}const Vt=function(){return vt.exports}(),kt=`<template>
  <t-space direction="vertical">
    <!-- \u65B9\u5F0F\u4E00\uFF1A t-tab-panel \u65B9\u5F0F -->
    <t-tabs v-model="value">
      <!-- \u9ED8\u8BA4\u63D2\u69FD \u548C \u5177\u540D\u63D2\u69FD\uFF08panel\uFF09\u90FD\u662F\u7528\u6765\u6E32\u67D3\u9762\u677F\u5185\u5BB9 -->
      <t-tab-panel value="first" label="\u9009\u9879\u53611" :destroyOnHide="false">
        <p style="padding: 25px">\u9009\u9879\u53611\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612" :destroyOnHide="false">
        <p slot="panel" style="padding: 25px">\u9009\u9879\u53612\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613" :panel="panelRender" />
    </t-tabs>

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 list \u5B9A\u4E49 Tab -->
    <t-tabs v-model="tab" :list="tabList" />
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value: 'first',
      tab: 1,
      tabList: [
        {
          label: '\u9009\u9879\u5361\u4E00',
          value: 1,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          panel: (h) => <p style="padding: 25px">\u8FD9\u662F\u9009\u9879\u5361\u4E00\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3</p>,
        },
        {
          label: '\u9009\u9879\u5361\u4E8C',
          value: 2,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          panel: (h) => <p style="padding: 25px">\u8FD9\u662F\u9009\u9879\u5361\u4E8C\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3</p>,
        },
        {
          label: '\u9009\u9879\u5361\u4E09',
          value: 3,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          panel: (h) => <p style="padding: 25px">\u8FD9\u662F\u9009\u9879\u5361\u4E09\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tabs \u6E32\u67D3</p>,
        },
      ],
    };
  },
  methods: {
    panelRender() {
      return <p style="padding: 25px;">\u9009\u9879\u53613\u7684\u5185\u5BB9\uFF0C\u4F7F\u7528 t-tab-panel \u6E32\u67D3</p>;
    },
  },
};
<\/script>
`,wt=`<template>
  <t-space direction="vertical" size="32px">
    <t-space>
      <t-radio-group variant="default-filled" v-model="theme">
        <t-radio-button value="normal">\u5E38\u89C4\u578B</t-radio-button>
        <t-radio-button value="card">\u5361\u7247\u578B</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-tabs :value="value" :theme="theme" @change="(newValue) => (value = newValue)">
      <t-tab-panel value="first">
        <template #label> <icon name="home" style="margin-right: 4px" /> \u9996\u9875 </template>
        <p style="padding: 25px">\u9996\u9875\u7684\u5185\u5BB9</p>
      </t-tab-panel>
      <t-tab-panel value="second">
        <template #label> <icon name="calendar" style="margin-right: 4px" /> \u65E5\u7A0B </template>
        <p style="padding: 25px">\u65E5\u7A0B\u7684\u5185\u5BB9</p>
      </t-tab-panel>
      <t-tab-panel value="third">
        <template #label> <icon name="layers" style="margin-right: 4px" /> \u4E8B\u9879 </template>
        <p style="padding: 25px">\u4E8B\u9879\u7684\u5185\u5BB9</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      theme: 'normal',
      value: 'first',
    };
  },
};
<\/script>
`,zt=`<template>
  <t-tabs
    :value="value"
    theme="card"
    :addable="true"
    @add="addTab"
    @remove="removeTab"
    @change="changeTab"
    style="width: 100%"
  >
    <t-tab-panel
      v-for="data in panelData"
      :key="data.value"
      :value="data.value"
      :label="data.label"
      :removable="data.removable"
    >
      <p style="padding: 25px">{{ data.content }}</p>
    </t-tab-panel>
  </t-tabs>
</template>

<script>
let id = 0;

export default {
  data() {
    return {
      value: 'first',
      panelData: [
        {
          value: 'first',
          label: '\u539F\u6709\u9009\u9879\u5361',
          removable: true,
          content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
        },
        {
          value: 'second',
          label: '\u539F\u6709\u9009\u9879\u5361',
          removable: true,
          content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
        },
      ],
    };
  },

  methods: {
    addTab() {
      this.panelData = [
        ...this.panelData,
        {
          value: \`\${id}\`,
          label: '\u65B0\u9009\u9879\u5361',
          removable: true,
          content: '\u65B0\u9009\u9879\u5361\u5185\u5BB9',
        },
      ];
      this.value = \`\${id}\`;
      id += 1;
    },
    removeTab({ value }) {
      const index = this.panelData.findIndex((data) => data.value === value);
      if (index < 0) return false;
      this.panelData.splice(index, 1);
      if (this.value === value && this.panelData.length) {
        this.value = this.panelData[Math.max(index - 1, 0)].value;
      }
    },
    changeTab(value) {
      this.value = value;
    },
  },
};
<\/script>
`,Rt=`<template>
  <t-space direction="vertical">
    <t-tabs :value="value1" size="medium" @change="(newValue) => (value1 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>

    <t-tabs :value="value2" size="large" @change="(newValue) => (value2 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: 'first',
      value2: 'first',
    };
  },
};
<\/script>
`,Mt=`<template>
  <t-space direction="vertical">
    <t-tabs :value="value1" @change="(newValue) => (value1 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>

    <t-tabs :value="value2" theme="card" @change="(newValue) => (value2 = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: 'first',
      value2: 'first',
    };
  },
};
<\/script>
`,jt=`<template>
  <t-space direction="vertical" size="32px">
    <t-space>
      <t-radio-group variant="default-filled" v-model="placement">
        <t-radio-button value="top">top</t-radio-button>
        <t-radio-button value="right">right</t-radio-button>
        <t-radio-button value="bottom">bottom</t-radio-button>
        <t-radio-button value="left">left</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-tabs :value="value" :placement="placement" @change="(newValue) => (value = newValue)">
      <t-tab-panel value="first" label="\u9009\u9879\u53611">
        <p style="padding: 25px">\u9009\u9879\u53611</p>
      </t-tab-panel>
      <t-tab-panel value="second" label="\u9009\u9879\u53612">
        <p style="padding: 25px">\u9009\u9879\u53612</p>
      </t-tab-panel>
      <t-tab-panel value="third" label="\u9009\u9879\u53613">
        <p style="padding: 25px">\u9009\u9879\u53613</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      placement: 'top',
      value: 'first',
    };
  },
};
<\/script>
`,Bt=`<template>
  <t-tabs :value="value" theme="card" :addable="true" @add="addTab" @remove="removeTab" @change="changeTab">
    <t-tab-panel
      v-for="data in panelData"
      :key="data.value"
      :value="data.value"
      :label="data.label"
      :removable="data.removable"
    >
      <p style="padding: 25px">{{ data.content }}</p>
    </t-tab-panel>
  </t-tabs>
</template>

<script>
let id = 0;

export default {
  data() {
    return {
      value: 'first',
      panelData: [
        {
          value: 'first',
          label: '\u539F\u6709\u9009\u9879\u5361',
          removable: false,
          content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
        },
        {
          value: 'second',
          label: '\u539F\u6709\u9009\u9879\u5361',
          removable: true,
          content: '\u539F\u6709\u9009\u9879\u5361\u5185\u5BB9',
        },
      ],
    };
  },

  methods: {
    addTab() {
      this.panelData = [
        ...this.panelData,
        {
          value: \`\${id}\`,
          label: \`\u65B0\u9009\u9879\u5361\${id}\`,
          removable: true,
          content: '\u65B0\u9009\u9879\u5361\u5185\u5BB9',
        },
      ];
      this.value = \`\${id}\`;
      id += 1;
    },
    removeTab({ value }) {
      const index = this.panelData.findIndex((data) => data.value === value);
      if (index < 0) return false;
      this.panelData.splice(index, 1);
      if (this.value === value) {
        this.value = this.panelData[index - 1].value;
      }
    },
    changeTab(value) {
      this.value = value;
    },
  },
};
<\/script>
`,Lt=`<template>
  <t-space direction="vertical" style="width: 100%" size="32px">
    <t-space>
      <t-radio-group variant="default-filled" v-model="theme">
        <t-radio-button value="normal">\u5E38\u89C4\u578B</t-radio-button>
        <t-radio-button value="card">\u5361\u7247\u578B</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-tabs v-model="value" :theme="theme">
      <t-tab-panel v-for="(item, index) in 20" :key="index" :value="index + ''" :label="\`\u9009\u9879\u5361\${index + 1}\`">
        <p style="padding: 25px">\u9009\u9879\u5361{{ index + 1 }}</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      theme: 'normal',
      value: '1',
    };
  },
};
<\/script>
`,It=`<template>
  <t-space direction="vertical" size="36px">
    <t-space>
      <t-radio-group variant="default-filled" v-model="theme">
        <t-radio-button value="normal">\u5E38\u89C4\u578B</t-radio-button>
        <t-radio-button value="card">\u5361\u7247\u578B</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-tabs :value="value" :theme="theme" @change="(newValue) => (value = newValue)">
      <t-tab-panel value="first" :label="\`\u9009\u9879\u53611\`">
        <p style="padding: 25px">{{ \`\u9009\u9879\u53611\u7684\u5185\u5BB9\` }}</p>
      </t-tab-panel>
      <t-tab-panel value="second" :label="\`\u9009\u9879\u53612\`" :disabled="true">
        <p style="padding: 25px">{{ \`\u9009\u9879\u53612\u7684\u5185\u5BB9\` }}</p>
      </t-tab-panel>
      <t-tab-panel value="third" :label="\`\u9009\u9879\u53613\`">
        <p style="padding: 25px">{{ \`\u9009\u9879\u53613\u7684\u5185\u5BB9\` }}</p>
      </t-tab-panel>
    </t-tabs>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      theme: 'normal',
      value: 'first',
    };
  },
};
<\/script>
`,mt=[{name:"addable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"placement",type:"enum",defaultValue:"top",options:[{label:"left",value:"left"},{label:"top",value:"top"},{label:"bottom",value:"bottom"},{label:"right",value:"right"}]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"theme",type:"enum",defaultValue:"normal",options:[{label:"normal",value:"normal"},{label:"card",value:"card"}]}],g={};g.setup=(t,a)=>{const e=u(mt),n=[{label:"tabs",value:"tabs"}],s={tabs:`
        <t-tabs v-bind="configProps">
          <t-tab-panel :value="1" label="\u9009\u9879\u53611">
            <p style="margin: 20px">\u9009\u9879\u53611\u5185\u5BB9\u533A</p>
          </t-tab-panel>
          <t-tab-panel :value="2" label="\u9009\u9879\u53612">
            <p style="margin: 20px">\u9009\u9879\u53612\u5185\u5BB9\u533A</p>
          </t-tab-panel>
          <t-tab-panel :value="3" label="\u9009\u9879\u53613">
            <p style="margin: 20px">\u9009\u9879\u53613\u5185\u5BB9\u533A</p>
          </t-tab-panel>
        </t-tabs>
      `},i=u(`<template>${s[n[0].value].trim()}</template>`);function y($){i.value=`<template>${s[$].trim()}</template>`}return{configList:e,panelList:n,usageCode:i,onPanelChange:y}};var _t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"tabs",fn:function(n){var s=n.configProps;return[e("t-tabs",t._b({},"t-tabs",s,!1),[e("t-tab-panel",{attrs:{value:1,label:"\u9009\u9879\u53611"}},[e("p",{staticStyle:{margin:"20px"}},[t._v("\u9009\u9879\u53611\u5185\u5BB9\u533A")])]),e("t-tab-panel",{attrs:{value:2,label:"\u9009\u9879\u53612"}},[e("p",{staticStyle:{margin:"20px"}},[t._v("\u9009\u9879\u53612\u5185\u5BB9\u533A")])]),e("t-tab-panel",{attrs:{value:3,label:"\u9009\u9879\u53613"}},[e("p",{staticStyle:{margin:"20px"}},[t._v("\u9009\u9879\u53613\u5185\u5BB9\u533A")])])],1)]}}])})},ft=[];const x={};var ht=l(g,_t,ft,!1,xt,null,null,null);function xt(t){for(let a in x)this[a]=x[a]}const Pt=function(){return ht.exports}();export{yt as D,Pt as U,$t as a,Dt as b,St as c,Ft as d,Tt as e,Ct as f,Et as g,Vt as h,kt as i,wt as j,zt as k,Rt as l,Mt as m,jt as n,Bt as o,Lt as p,It as q};
