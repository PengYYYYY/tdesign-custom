import{V as z,n as r,r as u}from"./index.4ab857ef.js";import{C as i}from"./close.f7620cc7.js";import{u as x,_ as $}from"./use-size-props.363c09d5.js";import{_ as y,I as P}from"./icon.6041ac7f.js";var I=["size"];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,s)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?h(Object(t),!0).forEach(function(s){$(e,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))})}return e}var O={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.43 9.92l6.23-6.22.92.92-7.15 7.14L1.97 7.3l.92-.92 3.54 3.54z",fillOpacity:.9}}]},d=z.extend({name:"CheckIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var s=t.props,c=t.data,a=s.size,o=y(s,I),l=x(a),C=l.className,w=l.style,b=p(p({},o||{}),{},{id:"check",icon:O,staticClass:C,style:w});return c.props=b,n(P,c)}}),j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",[t("t-switch",{attrs:{size:"large"}}),t("t-switch",{attrs:{size:"large"},on:{change:e.onChange},model:{value:e.checked,callback:function(s){e.checked=s},expression:"checked"}})],1)},S=[];const D={data(){return{checked:!0}},methods:{onChange(e){console.log(e)}}},m={};var E=r(D,j,S,!1,M,null,null,null);function M(e){for(let n in m)this[n]=m[n]}const re=function(){return E.exports}(),A={components:{CloseIcon:i,CheckIcon:d},data(){return{checked:!0,renderChecked:!0,renderChecked2:!0,slotChecked:!0}},methods:{onChange(e){console.log(e)},renderActiveContent(){const e=this.$createElement;return e(d)},renderInactiveContent(){const e=this.$createElement;return e(i)},renderContent(e,n){return n.value?e(d):e(i)}}};var F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("div",{staticClass:"tdesign-demo-block-row"},[t("t-switch",{attrs:{size:"large"},scopedSlots:e._u([{key:"label",fn:function(s){return[e._v(e._s(s.value?"\u5F00":"\u5173"))]}}]),model:{value:e.slotChecked,callback:function(s){e.slotChecked=s},expression:"slotChecked"}}),t("t-switch",{attrs:{size:"large"},scopedSlots:e._u([{key:"label",fn:function(s){return[s.value?[t("check-icon")]:[t("close-icon")]]}}])})],1),t("div",{staticClass:"tdesign-demo-block-row"},[t("t-switch",{attrs:{size:"large",label:["\u5F00","\u5173"]},model:{value:e.checked,callback:function(s){e.checked=s},expression:"checked"}}),t("t-switch",{attrs:{size:"large",label:["\u5F00","\u5173"]}})],1),t("div",{staticClass:"tdesign-demo-block-row"},[t("t-switch",{attrs:{size:"large",label:[e.renderActiveContent,e.renderInactiveContent]},model:{value:e.renderChecked,callback:function(s){e.renderChecked=s},expression:"renderChecked"}}),t("t-switch",{attrs:{size:"large",label:[e.renderActiveContent,e.renderInactiveContent]}})],1),t("div",{staticClass:"tdesign-demo-block-row"},[t("t-switch",{attrs:{size:"large",label:e.renderContent},model:{value:e.renderChecked2,callback:function(s){e.renderChecked2=s},expression:"renderChecked2"}}),t("t-switch",{attrs:{size:"large",label:e.renderContent}})],1)])},V=[];const v={};var B=r(A,F,V,!1,L,null,null,null);function L(e){for(let n in v)this[n]=v[n]}const ae=function(){return B.exports}();var R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{"break-line":""}},[t("t-switch",{attrs:{size:"large"},model:{value:e.checked1,callback:function(s){e.checked1=s},expression:"checked1"}}),t("t-switch",{attrs:{size:"large",loading:""},model:{value:e.checked2,callback:function(s){e.checked2=s},expression:"checked2"}}),t("t-switch",{attrs:{size:"large",disabled:""}})],1)},N=[];const U={data(){return{checked1:!0,checked2:!0}}},_={};var J=r(U,R,N,!1,K,null,null,null);function K(e){for(let n in _)this[n]=_[n]}const le=function(){return J.exports}();var W=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{"break-line":""}},[t("t-switch",{attrs:{size:"large"},model:{value:e.checked,callback:function(s){e.checked=s},expression:"checked"}}),t("t-switch",{attrs:{size:"medium"}}),t("t-switch",{attrs:{size:"small"}})],1)},q=[];const G={data(){return{checked:!0}},methods:{onChange(e){console.log(e)}}},f={};var H=r(G,W,q,!1,Q,null,null,null);function Q(e){for(let n in f)this[n]=f[n]}const oe=function(){return H.exports}(),ie=`<template>
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
`,de=`<template>
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
`,ue=`<template>
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
`,he=`<template>
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
`,T=[{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"value",type:"Boolean",defaultValue:!1,options:[]}],k={};k.setup=(e,n)=>{const t=u(T),s=[{label:"switch",value:"switch"}],c={switch:'<t-switch v-bind="configProps" />'},a=u(`<template>${c[s[0].value].trim()}</template>`);function o(l){a.value=`<template>${c[l].trim()}</template>`}return{configList:t,panelList:s,usageCode:a,onPanelChange:o}};var X=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"switch",fn:function(s){var c=s.configProps;return[t("t-switch",e._b({},"t-switch",c,!1))]}}])})},Y=[];const g={};var Z=r(k,X,Y,!1,ee,null,null,null);function ee(e){for(let n in g)this[n]=g[n]}const pe=function(){return Z.exports}();export{re as D,pe as U,ae as a,le as b,oe as c,ie as d,de as e,ue as f,he as g};
