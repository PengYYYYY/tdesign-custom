import{n as c,f as l,x as r,r as i}from"./index.7bc89517.js";var g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",[t("t-switch",{attrs:{size:"large"}}),t("t-switch",{attrs:{size:"large"},on:{change:e.onChange},model:{value:e.checked,callback:function(s){e.checked=s},expression:"checked"}})],1)},f=[];const C={data(){return{checked:!0}},methods:{onChange(e){console.log(e)}}},d={};var w=c(C,g,f,!1,b,null,null,null);function b(e){for(let n in d)this[n]=d[n]}const H=function(){return w.exports}(),z={components:{CloseIcon:l,CheckIcon:r},data(){return{checked:!0,renderChecked:!0,renderChecked2:!0,slotChecked:!0}},methods:{onChange(e){console.log(e)},renderActiveContent(){const e=this.$createElement;return e(r)},renderInactiveContent(){const e=this.$createElement;return e(l)},renderContent(e,n){return n.value?e(r):e(l)}}};var x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("div",{staticClass:"tdesign-demo-block-row"},[t("t-switch",{attrs:{size:"large"},scopedSlots:e._u([{key:"label",fn:function(s){return[e._v(e._s(s.value?"\u5F00":"\u5173"))]}}]),model:{value:e.slotChecked,callback:function(s){e.slotChecked=s},expression:"slotChecked"}}),t("t-switch",{attrs:{size:"large"},scopedSlots:e._u([{key:"label",fn:function(s){return[s.value?[t("check-icon")]:[t("close-icon")]]}}])})],1),t("div",{staticClass:"tdesign-demo-block-row"},[t("t-switch",{attrs:{size:"large",label:["\u5F00","\u5173"]},model:{value:e.checked,callback:function(s){e.checked=s},expression:"checked"}}),t("t-switch",{attrs:{size:"large",label:["\u5F00","\u5173"]}})],1),t("div",{staticClass:"tdesign-demo-block-row"},[t("t-switch",{attrs:{size:"large",label:[e.renderActiveContent,e.renderInactiveContent]},model:{value:e.renderChecked,callback:function(s){e.renderChecked=s},expression:"renderChecked"}}),t("t-switch",{attrs:{size:"large",label:[e.renderActiveContent,e.renderInactiveContent]}})],1),t("div",{staticClass:"tdesign-demo-block-row"},[t("t-switch",{attrs:{size:"large",label:e.renderContent},model:{value:e.renderChecked2,callback:function(s){e.renderChecked2=s},expression:"renderChecked2"}}),t("t-switch",{attrs:{size:"large",label:e.renderContent}})],1)])},$=[];const u={};var I=c(z,x,$,!1,y,null,null,null);function y(e){for(let n in u)this[n]=u[n]}const K=function(){return I.exports}();var P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{"break-line":""}},[t("t-switch",{attrs:{size:"large"},model:{value:e.checked1,callback:function(s){e.checked1=s},expression:"checked1"}}),t("t-switch",{attrs:{size:"large",loading:""},model:{value:e.checked2,callback:function(s){e.checked2=s},expression:"checked2"}}),t("t-switch",{attrs:{size:"large",disabled:""}})],1)},D=[];const S={data(){return{checked1:!0,checked2:!0}}},h={};var E=c(S,P,D,!1,j,null,null,null);function j(e){for(let n in h)this[n]=h[n]}const N=function(){return E.exports}();var A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{"break-line":""}},[t("t-switch",{attrs:{size:"large"},model:{value:e.checked,callback:function(s){e.checked=s},expression:"checked"}}),t("t-switch",{attrs:{size:"medium"}}),t("t-switch",{attrs:{size:"small"}})],1)},M=[];const F={data(){return{checked:!0}},methods:{onChange(e){console.log(e)}}},m={};var R=c(F,A,M,!1,L,null,null,null);function L(e){for(let n in m)this[n]=m[n]}const O=function(){return R.exports}(),Q=`<template>
  <t-space>
    <t-switch size="large"></t-switch>
    <t-switch size="large" v-model="checked" @change="onChange"></t-switch>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    onChange(val) {
      console.log(val);
    },
  },
};
<\/script>
`,T=`<template>
  <t-space direction="vertical">
    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="slotChecked">
        <template v-slot:label="slotProps">{{ slotProps.value ? '\u5F00' : '\u5173' }}</template>
      </t-switch>
      <t-switch size="large">
        <template v-slot:label="slotProps">
          <template v-if="slotProps.value">
            <check-icon />
          </template>
          <template v-else>
            <close-icon />
          </template>
        </template>
      </t-switch>
    </div>

    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="checked" :label="['\u5F00', '\u5173']"></t-switch>
      <t-switch size="large" :label="['\u5F00', '\u5173']"></t-switch>
    </div>

    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="renderChecked" :label="[renderActiveContent, renderInactiveContent]"></t-switch>
      <t-switch size="large" :label="[renderActiveContent, renderInactiveContent]"></t-switch>
    </div>

    <div class="tdesign-demo-block-row">
      <t-switch size="large" v-model="renderChecked2" :label="renderContent"></t-switch>
      <t-switch size="large" :label="renderContent"></t-switch>
    </div>
  </t-space>
</template>
<script lang="jsx">
import { CloseIcon, CheckIcon } from 'tdesign-icons-vue';

export default {
  components: { CloseIcon, CheckIcon },
  data() {
    return {
      checked: true,
      renderChecked: true,
      renderChecked2: true,
      slotChecked: true,
    };
  },
  methods: {
    onChange(val) {
      console.log(val);
    },
    renderActiveContent() {
      return <CheckIcon />;
    },
    renderInactiveContent() {
      return <CloseIcon />;
    },
    renderContent(h, data) {
      return data.value ? <CheckIcon /> : <CloseIcon />;
    },
  },
};
<\/script>
`,W=`<template>
  <t-space break-line>
    <t-switch size="large" v-model="checked1"></t-switch>
    <t-switch size="large" loading v-model="checked2"></t-switch>
    <t-switch size="large" disabled></t-switch>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: true,
    };
  },
};
<\/script>
`,X=`<template>
  <t-space break-line>
    <t-switch size="large" v-model="checked"></t-switch>
    <t-switch size="medium"></t-switch>
    <t-switch size="small"></t-switch>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    onChange(val) {
      console.log(val);
    },
  },
};
<\/script>
`,V=[{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"value",type:"Boolean",defaultValue:!1,options:[]}],p={};p.setup=(e,n)=>{const t=i(V),s=[{label:"switch",value:"switch"}],a={switch:'<t-switch v-bind="configProps" />'},o=i(`<template>${a[s[0].value].trim()}</template>`);function _(k){o.value=`<template>${a[k].trim()}</template>`}return{configList:t,panelList:s,usageCode:o,onPanelChange:_}};var B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"switch",fn:function(s){var a=s.configProps;return[t("t-switch",e._b({},"t-switch",a,!1))]}}])})},U=[];const v={};var J=c(p,B,U,!1,q,null,null,null);function q(e){for(let n in v)this[n]=v[n]}const Y=function(){return J.exports}();export{H as D,Y as U,K as a,N as b,O as c,Q as d,T as e,W as f,X as g};
