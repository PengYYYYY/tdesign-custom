import{V as O,n as a,r as u}from"./index.ba4b8fbd.js";import{u as P,_ as j}from"./use-size-props.363c09d5.js";import{_ as D,I as w}from"./icon.9ced2b01.js";import{U as V}from"./user.b6ce50d4.js";import{H as M}from"./heart.02bc128a.js";var k=["size"];function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?v(Object(t),!0).forEach(function(i){j(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}var I={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 11v1h4v-1H6z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M7.65 1.65c.2-.2.5-.2.7 0l6.5 6.5-.7.7L13 7.71v5.79a1 1 0 01-1 1H4a1 1 0 01-1-1V7.7L1.85 8.86l-.7-.7 6.5-6.5zM8 2.7l-4 4v6.79h8V6.7l-4-4z",fillOpacity:.9}}]},E=O.extend({name:"HomeIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var i=t.props,l=t.data,r=i.size,s=D(i,k),o=P(r),m=o.className,c=o.style,d=p(p({},s||{}),{},{id:"home",icon:I,staticClass:m,style:c});return l.props=d,n(w,l)}}),H=["size"];function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,i)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?_(Object(t),!0).forEach(function(i){j(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}var F={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 1c-1.38 0-2.63.55-3.53 1.47a4.96 4.96 0 000 7.06c.3.32.65.58 1.03.8V12a1 1 0 001 1h3a1 1 0 001-1v-1.67A4.96 4.96 0 0013 6a5 5 0 00-5-5zM5.18 3.17a4 4 0 115.65 5.65v.01c-.3.3-.66.55-1.05.75l-.28.14V12h-3V9.72l-.28-.14A3.96 3.96 0 014 6c0-1.1.44-2.1 1.17-2.82zM5.5 14v1h5v-1h-5z",fillOpacity:.9}}]},L=O.extend({name:"TipsIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var i=t.props,l=t.data,r=i.size,s=D(i,H),o=P(r),m=o.className,c=o.style,d=h(h({},s||{}),{},{id:"tips",icon:F,staticClass:m,style:c});return l.props=d,n(w,l)}}),R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("t-space",{attrs:{align:"center"}},[t("label",[e._v("\u65F6\u95F4\u8F74\u65B9\u5411")]),t("t-radio-group",{attrs:{"default-value":"vertical"},on:{change:e.handleChange}},[t("t-radio-button",{attrs:{value:"vertical"}},[e._v("\u5782\u76F4\u65F6\u95F4\u8F74")]),t("t-radio-button",{attrs:{value:"horizontal"}},[e._v("\u6C34\u5E73\u65F6\u95F4\u8F74")])],1)],1),t("t-timeline",{attrs:{layout:e.direction,mode:"same"}},[t("t-timeline-item",{attrs:{label:"2022-01-01"}},[e._v("\u4E8B\u4EF6\u4E00")]),t("t-timeline-item",{attrs:{label:"2022-02-01"}},[e._v("\u4E8B\u4EF6\u4E8C")]),t("t-timeline-item",{attrs:{label:"2022-03-01"}},[e._v("\u4E8B\u4EF6\u4E09")]),t("t-timeline-item",{attrs:{label:"2022-04-01"}},[e._v("\u4E8B\u4EF6\u56DB")])],1)],1)},U=[];const A={data(){return{direction:"vertical"}},methods:{handleChange(e){this.direction=e}}},f={};var T=a(A,R,U,!1,B,null,null,null);function B(e){for(let n in f)this[n]=f[n]}const Se=function(){return T.exports}();var N=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-space",{attrs:{direction:"vertical",size:"large"}},[t("t-space",[t("label",[e._v("\u662F\u5426\u5012\u5E8F")]),t("t-switch",{attrs:{size:"large"},model:{value:e.reverse,callback:function(i){e.reverse=i},expression:"reverse"}})],1)],1),t("t-timeline",{attrs:{mode:"same",reverse:e.reverse}},[t("t-timeline-item",{attrs:{label:"2022-01-01"}},[e._v("\u4E8B\u4EF6\u4E00")]),t("t-timeline-item",{attrs:{label:"2022-02-01"}},[e._v("\u4E8B\u4EF6\u4E8C")]),t("t-timeline-item",{attrs:{label:"2022-03-01"}},[e._v("\u4E8B\u4EF6\u4E09")]),t("t-timeline-item",{attrs:{label:"2022-04-01"}},[e._v("\u4E8B\u4EF6\u56DB")])],1)],1)},W=[];const K={data(){return{reverse:!1}}},b={};var J=a(K,N,W,!1,q,null,null,null);function q(e){for(let n in b)this[n]=b[n]}const Ve=function(){return J.exports}();var G=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("t-space",{attrs:{align:"center"}},[t("label",[e._v("\u65F6\u95F4\u8F74\u6837\u5F0F")]),t("t-radio-group",{attrs:{"default-value":"default",variant:"default-filled"},on:{change:e.handleChange}},[t("t-radio-button",{attrs:{value:"default"}},[e._v("\u9ED8\u8BA4\u6837\u5F0F")]),t("t-radio-button",{attrs:{value:"dot"}},[e._v("\u70B9\u72B6\u6837\u5F0F")])],1)],1),t("t-timeline",{attrs:{mode:"same",theme:e.docStyle}},[t("t-timeline-item",{attrs:{label:"2022-01-01"}},[e._v("\u4E8B\u4EF6\u4E00 "),t("tips-icon",{style:{color:e.color},attrs:{slot:"dot",size:"medium"},slot:"dot"})],1),t("t-timeline-item",{attrs:{label:"2022-02-01"}},[e._v("\u4E8B\u4EF6\u4E8C "),t("user-icon",{style:{color:e.color},attrs:{slot:"dot",size:"medium"},slot:"dot"})],1),t("t-timeline-item",{attrs:{label:"2022-03-01"}},[e._v("\u4E8B\u4EF6\u4E09 "),t("heart-icon",{style:{color:e.color},attrs:{slot:"dot",size:"medium"},slot:"dot"})],1),t("t-timeline-item",{attrs:{label:"2022-04-01"}},[e._v("\u4E8B\u4EF6\u56DB "),t("home-icon",{style:{color:e.color},attrs:{slot:"dot",size:"medium"},slot:"dot"})],1)],1)],1)},Q=[];const X={components:{TipsIcon:L,UserIcon:V,HeartIcon:M,HomeIcon:E},data(){return{docStyle:"default",color:"var(--td-brand-color)"}},methods:{handleChange(e){this.docStyle=e}}},g={};var Y=a(X,G,Q,!1,Z,null,null,null);function Z(e){for(let n in g)this[n]=g[n]}const Me=function(){return Y.exports}();var ee=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-timeline",{attrs:{mode:"same"}},[t("t-timeline-item",{attrs:{label:"2022-01-01"}},[t("div",[e._v("\u4E8B\u4EF6\u4E00")]),t("div",{staticClass:"timeline-custom-content"},[e._v("\u4E8B\u4EF6\u4E00\u81EA\u5B9A\u4E49\u5185\u5BB9")])]),t("t-timeline-item",{attrs:{label:"2022-02-01"}},[t("div",[e._v("\u4E8B\u4EF6\u4E8C")]),t("div",{staticClass:"timeline-custom-content"},[e._v("\u4E8B\u4EF6\u4E8C\u81EA\u5B9A\u4E49\u5185\u5BB9")])]),t("t-timeline-item",{attrs:{label:"2022-03-01"}},[t("div",[e._v("\u4E8B\u4EF6\u4E09")]),t("div",{staticClass:"timeline-custom-content"},[e._v("\u4E8B\u4EF6\u4E09\u81EA\u5B9A\u4E49\u5185\u5BB9")])]),t("t-timeline-item",{attrs:{label:"2022-04-01"}},[t("div",[e._v("\u4E8B\u4EF6\u56DB")]),t("div",{staticClass:"timeline-custom-content"},[e._v("\u4E8B\u4EF6\u56DB\u81EA\u5B9A\u4E49\u5185\u5BB9")])])],1)],1)},te=[];const ne={},y={};var ie=a(ne,ee,te,!1,le,"e83ee7f0",null,null);function le(e){for(let n in y)this[n]=y[n]}const ke=function(){return ie.exports}();var ae=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-space",{attrs:{direction:"vertical"}},[t("t-space",[t("h4",[e._v("\u65F6\u95F4\u8F74\u65B9\u5411")]),t("t-radio-group",{attrs:{"default-value":"vertical"},on:{change:e.handleLayoutChange}},[t("t-radio-button",{attrs:{value:"vertical"}},[e._v("\u5782\u76F4\u65F6\u95F4\u8F74")]),t("t-radio-button",{attrs:{value:"horizontal"}},[e._v("\u6C34\u5E73\u65F6\u95F4\u8F74")])],1)],1),t("t-space",[t("h4",[e._v("\u5BF9\u9F50\u65B9\u5F0F")]),t("t-radio-group",{attrs:{"default-value":"left"},on:{change:e.handleDirectionChange}},[t("t-radio-button",{attrs:{value:"left"}},[e._v("\u5DE6\u5BF9\u9F50")]),t("t-radio-button",{attrs:{value:"alternate"}},[e._v("\u4EA4\u9519\u5BF9\u9F50")]),t("t-radio-button",{attrs:{value:"right"}},[e._v("\u53F3\u5BF9\u9F50")])],1)],1),t("t-space",[t("h4",[e._v("label\u5BF9\u9F50\u65B9\u5F0F")]),t("t-radio-group",{attrs:{"default-value":"same"},on:{change:e.handleModeChange}},[t("t-radio-button",{attrs:{value:"same"}},[e._v("\u540C\u4FA7")]),t("t-radio-button",{attrs:{value:"alternate"}},[e._v("\u4EA4\u9519")])],1)],1)],1),t("t-timeline",{attrs:{layout:e.layout,labelAlign:e.direction,mode:e.mode}},[t("t-timeline-item",{attrs:{label:"2022-01-01"}},[e._v("\u4E8B\u4EF6\u4E00")]),t("t-timeline-item",{attrs:{label:"2022-02-01"}},[e._v("\u4E8B\u4EF6\u4E8C")]),t("t-timeline-item",{attrs:{label:"2022-03-01"}},[e._v("\u4E8B\u4EF6\u4E09")]),t("t-timeline-item",{attrs:{label:"2022-04-01"}},[e._v("\u4E8B\u4EF6\u56DB")])],1)],1)},oe=[];const re={data(){return{layout:"vertical",direction:"left",mode:"same"}},methods:{handleLayoutChange(e){this.layout=e},handleDirectionChange(e){this.direction=e},handleModeChange(e){this.mode=e}}},C={};var se=a(re,ae,oe,!1,me,null,null,null);function me(e){for(let n in C)this[n]=C[n]}const Ie=function(){return se.exports}();var ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-space",{attrs:{direction:"vertical"}},[t("t-space",[t("t-form",{attrs:{labelWidth:"200"}},[t("t-form-item",{staticStyle:{"margin-bottom":"5px"},attrs:{label:"\u52A0\u8F7D\u4E2D"}},[t("t-switch",{attrs:{size:"large"},on:{change:e.onChange},model:{value:e.loading,callback:function(i){e.loading=i},expression:"loading"}})],1)],1)],1)],1),t("t-timeline",{attrs:{mode:"same"}},[t("t-timeline-item",{attrs:{label:"2022-01-01"}},[e._v("\u4E8B\u4EF6\u4E00")]),t("t-timeline-item",{attrs:{label:"2022-02-01",loading:e.loading}},[e._v("\u4E8B\u4EF6\u4E8C")]),t("t-timeline-item",{attrs:{label:"2022-03-01"}},[e._v("\u4E8B\u4EF6\u4E09")]),t("t-timeline-item",{attrs:{label:"2022-04-01",loading:e.loading}},[e._v(" \u4E8B\u4EF6\u56DB ")])],1)],1)},de=[];const ue={data(){return{loading:!1}},methods:{onChange(e){this.loading=e}}},$={};var ve=a(ue,ce,de,!1,pe,null,null,null);function pe(e){for(let n in $)this[n]=$[n]}const Ee=function(){return ve.exports}();var _e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-space",{attrs:{direction:"vertical"}},[t("t-timeline-item",[e._v("123")]),t("t-timeline",{attrs:{mode:"same"}},[t("t-timeline-item",{attrs:{label:"2022-01-01",dotColor:"primary"}},[e._v(" \u5DF2\u5B8C\u6210\u7684\u65F6\u95F4 ")]),t("t-timeline-item",{attrs:{label:"2022-03-01",dotColor:"error"}},[e._v(" \u5371\u9669\u65F6\u95F4 ")]),t("t-timeline-item",{attrs:{label:"2022-04-01",dotColor:"warning"}},[e._v(" \u544A\u8B66\u4E8B\u4EF6 ")]),t("t-timeline-item",{attrs:{label:"2022-05-01"}},[e._v("\u9ED8\u8BA4\u7684\u65F6\u95F4")]),t("t-timeline-item",{attrs:{label:"2022-06-01",dotColor:"yellowgreen"}},[e._v(" \u81EA\u5B9A\u4E49\u4E3B\u9898\u8272 ")])],1)],1)],1)},he=[];const fe={data(){return{}},methods:{handleChange(e){this.direction=e}}},x={};var be=a(fe,_e,he,!1,ge,null,null,null);function ge(e){for(let n in x)this[n]=x[n]}const He=function(){return be.exports}(),Fe=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <label>\u65F6\u95F4\u8F74\u65B9\u5411</label>
      <t-radio-group default-value="vertical" @change="handleChange">
        <t-radio-button value="vertical">\u5782\u76F4\u65F6\u95F4\u8F74</t-radio-button>
        <t-radio-button value="horizontal">\u6C34\u5E73\u65F6\u95F4\u8F74</t-radio-button>
      </t-radio-group>
    </t-space>

    <t-timeline :layout="direction" mode="same">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01">\u4E8B\u4EF6\u56DB</t-timeline-item>
    </t-timeline>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      direction: 'vertical',
    };
  },
  methods: {
    handleChange(checkedValue) {
      this.direction = checkedValue;
    },
  },
};
<\/script>
`,Le=`<template>
  <div>
    <t-space direction="vertical" size="large">
      <t-space>
        <label>\u662F\u5426\u5012\u5E8F</label>
        <t-switch size="large" v-model="reverse"></t-switch>
      </t-space>
    </t-space>
    <t-timeline mode="same" :reverse="reverse">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01">\u4E8B\u4EF6\u56DB</t-timeline-item>
    </t-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: false,
    };
  },
};
<\/script>
`,Re=`<template>
  <t-space direction="vertical">
    <t-space align="center">
      <label>\u65F6\u95F4\u8F74\u6837\u5F0F</label>
      <t-radio-group default-value="default" @change="handleChange" variant="default-filled">
        <t-radio-button value="default">\u9ED8\u8BA4\u6837\u5F0F</t-radio-button>
        <t-radio-button value="dot">\u70B9\u72B6\u6837\u5F0F</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-timeline mode="same" :theme="docStyle">
      <t-timeline-item label="2022-01-01"
      >\u4E8B\u4EF6\u4E00
        <tips-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
      <t-timeline-item label="2022-02-01"
      >\u4E8B\u4EF6\u4E8C
        <user-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
      <t-timeline-item label="2022-03-01"
      >\u4E8B\u4EF6\u4E09
        <heart-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
      <t-timeline-item label="2022-04-01"
      >\u4E8B\u4EF6\u56DB
        <home-icon size="medium" :style="{ color: color }" slot="dot" />
      </t-timeline-item>
    </t-timeline>
  </t-space>
</template>
<script>
import {
  TipsIcon, UserIcon, HeartIcon, HomeIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    TipsIcon,
    UserIcon,
    HeartIcon,
    HomeIcon,
  },
  data() {
    return {
      docStyle: 'default',
      color: 'var(--td-brand-color)',
    };
  },
  methods: {
    handleChange(checkedValue) {
      this.docStyle = checkedValue;
    },
  },
};
<\/script>
`,Ue=`<template>
  <div>
    <t-timeline mode="same">
      <t-timeline-item label="2022-01-01">
        <div>\u4E8B\u4EF6\u4E00</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u4E00\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
      <t-timeline-item label="2022-02-01">
        <div>\u4E8B\u4EF6\u4E8C</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u4E8C\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
      <t-timeline-item label="2022-03-01">
        <div>\u4E8B\u4EF6\u4E09</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u4E09\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
      <t-timeline-item label="2022-04-01">
        <div>\u4E8B\u4EF6\u56DB</div>
        <div class="timeline-custom-content">\u4E8B\u4EF6\u56DB\u81EA\u5B9A\u4E49\u5185\u5BB9</div>
      </t-timeline-item>
    </t-timeline>
  </div>
</template>

<style scoped>
.timeline-custom-content {
  font-size: 12px;
  color: var(--td-text-color-secondary);
}
</style>
`,Ae=`<template>
  <div>
    <t-space direction="vertical">
      <t-space>
        <h4>\u65F6\u95F4\u8F74\u65B9\u5411</h4>
        <t-radio-group default-value="vertical" @change="handleLayoutChange">
          <t-radio-button value="vertical">\u5782\u76F4\u65F6\u95F4\u8F74</t-radio-button>
          <t-radio-button value="horizontal">\u6C34\u5E73\u65F6\u95F4\u8F74</t-radio-button>
        </t-radio-group>
      </t-space>
      <t-space>
        <h4>\u5BF9\u9F50\u65B9\u5F0F</h4>
        <t-radio-group default-value="left" @change="handleDirectionChange">
          <t-radio-button value="left">\u5DE6\u5BF9\u9F50</t-radio-button>
          <t-radio-button value="alternate">\u4EA4\u9519\u5BF9\u9F50</t-radio-button>
          <t-radio-button value="right">\u53F3\u5BF9\u9F50</t-radio-button>
        </t-radio-group>
      </t-space>
      <t-space>
        <h4>label\u5BF9\u9F50\u65B9\u5F0F</h4>
        <t-radio-group default-value="same" @change="handleModeChange">
          <t-radio-button value="same">\u540C\u4FA7</t-radio-button>
          <t-radio-button value="alternate">\u4EA4\u9519</t-radio-button>
        </t-radio-group>
      </t-space>
    </t-space>
    <t-timeline :layout="layout" :labelAlign="direction" :mode="mode">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01">\u4E8B\u4EF6\u56DB</t-timeline-item>
    </t-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layout: 'vertical',
      direction: 'left',
      mode: 'same',
    };
  },
  methods: {
    handleLayoutChange(checkedValue) {
      this.layout = checkedValue;
    },
    handleDirectionChange(checkedValue) {
      this.direction = checkedValue;
    },
    handleModeChange(checkedValue) {
      this.mode = checkedValue;
    },
  },
};
<\/script>
`,Te=`<template>
  <div>
    <t-space direction="vertical">
      <t-space>
        <t-form labelWidth="200">
          <t-form-item label="\u52A0\u8F7D\u4E2D" style="margin-bottom: 5px">
            <t-switch size="large" v-model="loading" @change="onChange"></t-switch>
          </t-form-item>
        </t-form>
      </t-space>
    </t-space>
    <t-timeline mode="same">
      <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
      <t-timeline-item label="2022-02-01" :loading="loading">\u4E8B\u4EF6\u4E8C</t-timeline-item>
      <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      <t-timeline-item label="2022-04-01" :loading="loading">
        \u4E8B\u4EF6\u56DB
        <!-- <t-loading size="12px" slot="dot" /> -->
      </t-timeline-item>
    </t-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    onChange(val) {
      this.loading = val;
    },
  },
};
<\/script>
`,Be=`<template>
  <div>
    <t-space direction="vertical">
      <t-timeline-item>123</t-timeline-item>
      <t-timeline mode="same">
        <t-timeline-item label="2022-01-01" dotColor="primary"> \u5DF2\u5B8C\u6210\u7684\u65F6\u95F4 </t-timeline-item>
        <t-timeline-item label="2022-03-01" dotColor="error"> \u5371\u9669\u65F6\u95F4 </t-timeline-item>
        <t-timeline-item label="2022-04-01" dotColor="warning"> \u544A\u8B66\u4E8B\u4EF6 </t-timeline-item>
        <t-timeline-item label="2022-05-01">\u9ED8\u8BA4\u7684\u65F6\u95F4</t-timeline-item>
        <t-timeline-item label="2022-06-01" dotColor="yellowgreen"> \u81EA\u5B9A\u4E49\u4E3B\u9898\u8272 </t-timeline-item>
      </t-timeline>
    </t-space>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleChange(checkedValue) {
      this.direction = checkedValue;
    },
  },
};
<\/script>
`,ye=[{name:"mode",type:"enum",defaultValue:"same",options:[{label:"alternate",value:"alternate"},{label:"same",value:"same"}]},{name:"labelAlign",type:"enum",defaultValue:"left",options:[{label:"left",value:"left"},{label:"right",value:"right"},{label:"alternate",value:"alternate"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}]},{name:"layout",type:"enum",defaultValue:"vertical",options:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]},{name:"reverse",type:"Boolean",defaultValue:!1,options:[]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"dot",value:"dot"}]}],S={};S.setup=(e,n)=>{const t=u(ye),i=[{label:"timeline",value:"timeline"}],l={timeline:`<t-timeline v-bind="configProps">
              <t-timeline-item label="2022-01-01">\u4E8B\u4EF6\u4E00</t-timeline-item>
              <t-timeline-item label="2022-02-01">\u4E8B\u4EF6\u4E8C</t-timeline-item>
              <t-timeline-item label="2022-03-01">\u4E8B\u4EF6\u4E09</t-timeline-item>
      </t-timeline>`},r=u(`<template>${l[i[0].value].trim()}</template>`);function s(o){r.value=`<template>${l[o].trim()}</template>`}return{configList:t,panelList:i,usageCode:r,onPanelChange:s}};var Ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"timeline",fn:function(i){var l=i.configProps;return[t("t-timeline",e._b({},"t-timeline",l,!1),[t("t-timeline-item",{attrs:{label:"2022-01-01"}},[e._v("\u4E8B\u4EF6\u4E00")]),t("t-timeline-item",{attrs:{label:"2022-02-01"}},[e._v("\u4E8B\u4EF6\u4E8C")]),t("t-timeline-item",{attrs:{label:"2022-03-01"}},[e._v("\u4E8B\u4EF6\u4E09")])],1)]}}])})},$e=[];const z={};var xe=a(S,Ce,$e,!1,ze,null,null,null);function ze(e){for(let n in z)this[n]=z[n]}const Ne=function(){return xe.exports}();export{Se as D,Ne as U,Ve as a,Me as b,ke as c,Ie as d,Ee as e,He as f,Fe as g,Le as h,Re as i,Ue as j,Ae as k,Te as l,Be as m};
