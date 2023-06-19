import{V as O,n as r,r as d}from"./index.7ed388d9.js";import{u as P,_ as I}from"./use-size-props.363c09d5.js";import{_ as L,I as C}from"./icon.c86fb0b5.js";var D=["size"];function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,l)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(l){I(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var M={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2.3 13.7a1 1 0 00.7.3h10a1 1 0 001-1V8.5h-1V13H3V3h4.5V2H3a1 1 0 00-1 1v10c0 .27.1.52.3.7z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M9 3V2h4.5c.28 0 .5.22.5.5V7h-1V3.7L8.7 8 8 7.3 12.3 3H9z",fillOpacity:.9}}]},c=O.extend({name:"JumpIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(t,n){var l=n.props,i=n.data,a=l.size,o=L(l,D),s=P(a),m=s.className,u=s.style,p=h(h({},o||{}),{},{id:"jump",icon:M,staticClass:m,style:u});return i.props=p,t(C,i)}}),V=["size"];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,l)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(l){I(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var E={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6.23 11.89l2.12-2.12.71.7-2.12 2.13A2.5 2.5 0 013.4 9.06l2.13-2.12.7.7-2.12 2.13a1.5 1.5 0 002.12 2.12zM10.47 9.06l-.7-.7 2.12-2.13a1.5 1.5 0 10-2.12-2.12L7.65 6.23l-.71-.7L9.06 3.4a2.5 2.5 0 013.54 3.54l-2.13 2.12z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M9.06 6.23L6.23 9.06l.71.7 2.83-2.82-.7-.7z",fillOpacity:.9}}]},f=O.extend({name:"LinkIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(t,n){var l=n.props,i=n.data,a=l.size,o=L(l,V),s=P(a),m=s.className,u=s.style,p=_(_({},o||{}),{},{id:"link",icon:E,staticClass:m,style:u});return i.props=p,t(C,i)}}),J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",[n("t-link",{attrs:{theme:"primary"}},[e._v("\u8DF3\u8F6C\u94FE\u63A5")])],1)},F=[];const R={},g={};var B=r(R,J,F,!1,N,null,null,null);function N(e){for(let t in g)this[t]=g[t]}const we=function(){return B.exports}();var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",[n("t-link",{attrs:{theme:"default",underline:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"primary",underline:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"danger",underline:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"warning",underline:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"success",underline:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")])],1)},K=[];const U={},x={};var A=r(U,H,K,!1,W,null,null,null);function W(e){for(let t in x)this[t]=x[t]}const Oe=function(){return A.exports}(),q={components:{LinkIcon:f,JumpIcon:c},data(){const e=this.$createElement;return{renderPrefixIcon:()=>e(f),renderSuffixIcon:()=>e(c)}},methods:{clickLink(e){console.log("\u89E6\u53D1",e)}}};var G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",[n("t-link",{attrs:{theme:"default","prefix-icon":e.renderPrefixIcon,onClick:e.clickLink}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"primary",underline:"",href:"https://tdesign.tencent.com/",target:"_self"}},[n("link-icon",{attrs:{slot:"prefix-icon"},slot:"prefix-icon"}),e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")],1),n("t-link",{attrs:{theme:"danger",hover:"color",href:"https://tdesign.tencent.com/",target:"_blank"},on:{click:e.clickLink}},[n("jump-icon",{attrs:{slot:"suffixIcon"},slot:"suffixIcon"}),e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")],1),n("t-link",{attrs:{theme:"warning",suffixIcon:e.renderSuffixIcon,disabled:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")])],1)},Q=[];const y={};var T=r(q,G,Q,!1,X,null,null,null);function X(e){for(let t in y)this[t]=y[t]}const Pe=function(){return T.exports}();var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-space",[n("t-link",{attrs:{theme:"default",hover:"underline"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"primary",hover:"underline"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"danger",hover:"underline"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"warning",hover:"underline"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"success",hover:"underline"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")])],1),n("t-space",[n("t-link",{attrs:{theme:"default",hover:"color"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"primary",hover:"color"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"danger",hover:"color"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"warning",hover:"color"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"success",hover:"color"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")])],1),n("t-space",[n("t-link",{attrs:{theme:"default",hover:"color",underline:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"primary",hover:"color",underline:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"danger",hover:"color",underline:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"warning",hover:"color",underline:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"success",hover:"color",underline:""}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")])],1)],1)},Z=[];const ee={},b={};var ne=r(ee,Y,Z,!1,te,null,null,null);function te(e){for(let t in b)this[t]=b[t]}const Ie=function(){return ne.exports}();var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",[n("t-link",{attrs:{theme:"default"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"primary"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"danger"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"warning"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"success"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")])],1)},ie=[];const re={},$={};var se=r(re,le,ie,!1,ae,null,null,null);function ae(e){for(let t in $)this[t]=$[t]}const Le=function(){return se.exports}(),oe={components:{JumpIcon:c},methods:{clickLink(){console.log("\u4E0D\u89E6\u53D1")}}};var ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",[n("t-link",{attrs:{theme:"default",disabled:""},on:{click:e.clickLink}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"primary",underline:"",disabled:""},on:{click:e.clickLink}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"danger",hover:"color",disabled:""},on:{click:e.clickLink}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"warning",hover:"underline",disabled:"",onClick:e.clickLink}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"success",disabled:""},on:{click:e.clickLink}},[n("jump-icon",{attrs:{slot:"suffixIcon"},slot:"suffixIcon"}),e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")],1)],1)},me=[];const z={};var ue=r(oe,ce,me,!1,pe,null,null,null);function pe(e){for(let t in z)this[t]=z[t]}const Ce=function(){return ue.exports}(),de={components:{JumpIcon:c}};var ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-space",[n("t-link",{attrs:{theme:"default",size:"small"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"primary",size:"small"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"danger",size:"small"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"warning",size:"small",disabled:""}},[e._v("\u8DF3\u8F6C\u94FE\u63A5")]),n("t-link",{attrs:{theme:"success",size:"small"}},[n("jump-icon",{attrs:{slot:"suffix-icon"},slot:"suffix-icon"}),e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")],1)],1),n("t-space",[n("t-link",{attrs:{theme:"default",size:"medium"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"primary",size:"medium"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"danger",size:"medium"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"warning",size:"medium",disabled:""}},[e._v("\u8DF3\u8F6C\u94FE\u63A5")]),n("t-link",{attrs:{theme:"success",size:"medium"}},[n("jump-icon",{attrs:{slot:"suffix-icon"},slot:"suffix-icon"}),e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")],1)],1),n("t-space",[n("t-link",{attrs:{theme:"default",size:"large"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"primary",size:"large"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"danger",size:"large"}},[e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")]),n("t-link",{attrs:{theme:"warning",size:"large",disabled:""}},[e._v("\u8DF3\u8F6C\u94FE\u63A5")]),n("t-link",{attrs:{theme:"success",size:"large"}},[n("jump-icon",{attrs:{slot:"suffix-icon"},slot:"suffix-icon"}),e._v(" \u8DF3\u8F6C\u94FE\u63A5 ")],1)],1)],1)},he=[];const j={};var ve=r(de,ke,he,!1,_e,null,null,null);function _e(e){for(let t in j)this[t]=j[t]}const Se=function(){return ve.exports}(),De=`<template>
  <t-space>
    <t-link theme="primary">\u8DF3\u8F6C\u94FE\u63A5</t-link>
  </t-space>
</template>
`,Me=`<template>
  <t-space>
    <t-link theme="default" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="danger" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="warning" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="success" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
  </t-space>
</template>
`,Ve=`<template>
  <t-space>
    <t-link theme="default" :prefix-icon="renderPrefixIcon" :onClick="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary" underline href="https://tdesign.tencent.com/" target="_self">
      <link-icon slot="prefix-icon"></link-icon>
      \u8DF3\u8F6C\u94FE\u63A5
    </t-link>
    <t-link theme="danger" hover="color" href="https://tdesign.tencent.com/" target="_blank" @click="clickLink">
      <jump-icon slot="suffixIcon" />
      \u8DF3\u8F6C\u94FE\u63A5
    </t-link>
    <t-link theme="warning" :suffixIcon="renderSuffixIcon" disabled> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
  </t-space>
</template>

<script lang="jsx">
import { LinkIcon, JumpIcon } from 'tdesign-icons-vue';

export default {
  components: {
    LinkIcon,
    JumpIcon,
  },
  data() {
    return {
      renderPrefixIcon: () => <LinkIcon />,
      renderSuffixIcon: () => <JumpIcon />,
    };
  },
  methods: {
    clickLink(e) {
      console.log('\u89E6\u53D1', e);
    },
  },
};
<\/script>
`,Ee=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-link theme="default" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="success" hover="underline"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="success" hover="color"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="success" hover="color" underline> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    </t-space>
  </t-space>
</template>
`,Je=`<template>
  <t-space>
    <t-link theme="default"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="danger"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="warning"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="success"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
  </t-space>
</template>
`,Fe=`<template>
  <t-space>
    <t-link theme="default" disabled @click="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="primary" underline disabled @click="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="danger" hover="color" disabled @click="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="warning" hover="underline" disabled :onClick="clickLink"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
    <t-link theme="success" disabled @click="clickLink">
      <jump-icon slot="suffixIcon" />
      \u8DF3\u8F6C\u94FE\u63A5
    </t-link>
  </t-space>
</template>

<script lang="jsx">
import { JumpIcon } from 'tdesign-icons-vue';

export default {
  components: {
    JumpIcon,
  },
  methods: {
    clickLink() {
      console.log('\u4E0D\u89E6\u53D1');
    },
  },
};
<\/script>
`,Re=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-link theme="default" size="small"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" size="small"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" size="small"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" size="small" disabled>\u8DF3\u8F6C\u94FE\u63A5</t-link>
      <t-link theme="success" size="small">
        <jump-icon slot="suffix-icon" />
        \u8DF3\u8F6C\u94FE\u63A5
      </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" size="medium"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" size="medium"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" size="medium"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" size="medium" disabled>\u8DF3\u8F6C\u94FE\u63A5</t-link>
      <t-link theme="success" size="medium">
        <jump-icon slot="suffix-icon" />
        \u8DF3\u8F6C\u94FE\u63A5
      </t-link>
    </t-space>
    <t-space>
      <t-link theme="default" size="large"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="primary" size="large"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="danger" size="large"> \u8DF3\u8F6C\u94FE\u63A5 </t-link>
      <t-link theme="warning" size="large" disabled>\u8DF3\u8F6C\u94FE\u63A5</t-link>
      <t-link theme="success" size="large">
        <jump-icon slot="suffix-icon" />
        \u8DF3\u8F6C\u94FE\u63A5
      </t-link>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
import { JumpIcon } from 'tdesign-icons-vue';

export default {
  components: {
    JumpIcon,
  },
};
<\/script>
`,fe=[{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"underline",type:"Boolean",defaultValue:!1,options:[]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"primary",value:"primary"},{label:"danger",value:"danger"},{label:"warning",value:"warning"},{label:"success",value:"success"}]},{name:"hover",type:"enum",defaultValue:"underline",options:[{label:"underline",value:"underline"},{label:"color",value:"color"}]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]}],S={};S.setup=(e,t)=>{const n=d(fe),l=[{label:"link",value:"link"}],i={link:'<t-link v-bind="configProps">\u8DF3\u8F6C\u94FE\u63A5</t-link>'},a=d(`<template>${i[l[0].value].trim()}</template>`);function o(s){a.value=`<template>${i[s].trim()}</template>`}return{configList:n,panelList:l,usageCode:a,onPanelChange:o}};var ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"link",fn:function(l){var i=l.configProps;return[n("t-link",e._b({},"t-link",i,!1),[e._v("\u8DF3\u8F6C\u94FE\u63A5")])]}}])})},xe=[];const w={};var ye=r(S,ge,xe,!1,be,null,null,null);function be(e){for(let t in w)this[t]=w[t]}const Be=function(){return ye.exports}();export{we as D,Be as U,Oe as a,Pe as b,Ie as c,Le as d,Ce as e,Se as f,De as g,Me as h,Ve as i,Ee as j,Je as k,Fe as l,Re as m};
