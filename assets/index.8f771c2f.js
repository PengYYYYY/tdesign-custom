import{V as o,n as i,r as s}from"./index.ba4b8fbd.js";import{M as v}from"./plugin.a82fe062.js";var V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-drawer",{attrs:{visible:e.visible,header:"\u62BD\u5C49\u6807\u9898",onConfirm:e.onClickConfirm,closeBtn:!0},on:{"update:visible":function(a){e.visible=a}}},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("t-button",{attrs:{variant:"outline"},on:{click:e.handleClick}},[e._v("\u6253\u5F00\u62BD\u5C49")])],1)},D=[];const B=o.extend({data(){return{visible:!1}},methods:{handleClick(){this.visible=!0},onClickConfirm(){v.info("\u6570\u636E\u4FDD\u5B58\u4E2D...",1e3);const e=setTimeout(()=>{clearTimeout(e),this.visible=!1,v.info("\u6570\u636E\u4FDD\u5B58\u6210\u529F!")},1e3)}}}),d={};var z=i(B,V,D,!1,M,"567376f3",null,null);function M(e){for(let n in d)this[n]=d[n]}const ze=function(){return z.exports}();var O=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-drawer",{attrs:{visible:e.visible,onConfirm:e.handleClose,header:"\u62BD\u5C49\u6807\u9898"},on:{close:e.handleClose}},[t("div",{staticClass:"t-drawer-demo-div"},[t("span",[e._v("\u6807\u7B7E A")]),t("t-input")],1),t("div",{staticClass:"t-drawer-demo-div"},[t("span",[e._v("\u6807\u7B7E B")]),t("t-input")],1),t("div",{staticClass:"t-drawer-demo-div"},[t("span",[e._v("\u6807\u7B7E C")]),t("t-input")],1)]),t("t-button",{attrs:{variant:"outline"},on:{click:e.handleClick}},[e._v("\u6253\u5F00\u62BD\u5C49")])],1)},E=[];const S=o.extend({data(){return{visible:!1}},methods:{setVisible(e){this.visible=e},handleClick(){this.setVisible(!0)},handleClose(){this.setVisible(!1)}}}),p={};var F=i(S,O,E,!1,j,"05ea721b",null,null);function j(e){for(let n in p)this[n]=p[n]}const Me=function(){return F.exports}();var R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-drawer",{attrs:{visible:e.visible,showOverlay:!1,onConfirm:e.handleClose,preventScrollThrough:!1,header:"\u62BD\u5C49\u6807\u9898"},on:{close:e.handleClose}},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("t-button",{attrs:{variant:"outline"},on:{click:e.handleClick}},[e._v("\u6253\u5F00\u62BD\u5C49")])],1)},P=[];const T=o.extend({data(){return{visible:!1}},methods:{setVisible(e){this.visible=e},handleClick(){this.setVisible(!0)},handleClose(){this.setVisible(!1)}}}),b={};var A=i(T,R,P,!1,L,null,null,null);function L(e){for(let n in b)this[n]=b[n]}const Oe=function(){return A.exports}();var I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",[t("t-drawer",{attrs:{header:"\u62BD\u5C49\u6807\u9898",visible:e.visible,onOverlayClick:function(){return e.visible=!1},onConfirm:function(){return e.visible=!1},placement:e.placement},on:{cancel:function(a){e.visible=!1}}},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("t-space",{attrs:{direction:"vertical"}},[t("t-radio-group",{attrs:{defaultValue:e.placement},model:{value:e.placement,callback:function(a){e.placement=a},expression:"placement"}},[t("t-radio-button",{attrs:{value:"left"}},[e._v("\u5DE6\u4FA7")]),t("t-radio-button",{attrs:{value:"right"}},[e._v("\u53F3\u4FA7")]),t("t-radio-button",{attrs:{value:"top"}},[e._v("\u4E0A\u65B9")]),t("t-radio-button",{attrs:{value:"bottom"}},[e._v("\u4E0B\u65B9")])],1),t("t-button",{staticClass:"btn-top-margin",attrs:{variant:"outline"},on:{click:function(a){e.visible=!0}}},[e._v("\u6253\u5F00\u62BD\u5C49")])],1)],1)},U=[];const q=o.extend({data(){return{visible:!1,placement:"right"}}}),m={};var J=i(q,I,U,!1,K,null,null,null);function K(e){for(let n in m)this[n]=m[n]}const Ee=function(){return J.exports}();var G=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",[t("t-drawer",{attrs:{visible:e.visible,placement:e.placement,size:e.size,onConfirm:function(){return e.visible=!1},header:"\u62BD\u5C49\u6807\u9898"},on:{"update:visible":function(a){e.visible=a}}},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("t-space",{attrs:{direction:"vertical"}},[t("t-radio-group",{attrs:{defaultValue:e.size},model:{value:e.size,callback:function(a){e.size=a},expression:"size"}},[t("t-radio-button",{attrs:{value:"small"}},[e._v("\u5C0F")]),t("t-radio-button",{attrs:{value:"medium"}},[e._v("\u4E2D")]),t("t-radio-button",{attrs:{value:"large"}},[e._v("\u5927")]),t("t-radio-button",{attrs:{value:"200"}},[e._v("200")]),t("t-radio-button",{attrs:{value:"400px"}},[e._v("400px")]),t("t-radio-button",{attrs:{value:"50%"}},[e._v("50%")])],1),t("t-button",{attrs:{variant:"outline"},on:{click:function(a){e.visible=!0}}},[e._v("\u6253\u5F00\u62BD\u5C49")])],1)],1)},H=[];const N=o.extend({data(){return{visible:!1,size:"small",placement:"right"}}}),_={};var Q=i(N,G,H,!1,W,null,null,null);function W(e){for(let n in _)this[n]=_[n]}const Se=function(){return Q.exports}(),X=o.extend({data(){return{visible:!1,visible2:!1,visible3:!1}},methods:{renderFooter(){const e=this.$createElement;return e("div",[e("t-button",["confirm"]),e("t-button",{attrs:{variant:"outline"},on:{click:()=>this.visible2=!1}},["cancel"])])}}});var Y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-drawer",{attrs:{visible:e.visible,closeBtn:!0},on:{"update:visible":function(a){e.visible=a}},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",[e._v("\u81EA\u5B9A\u4E49\u5934\u90E8")])]},proxy:!0},{key:"footer",fn:function(){return[t("t-button",{on:{click:function(a){e.visible=!1}}},[e._v("\u786E\u5B9A")]),t("t-button",{attrs:{variant:"outline"},on:{click:function(a){e.visible=!1}}},[e._v("\u53D6\u6D88")])]},proxy:!0}])},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("t-drawer",{attrs:{visible:e.visible2,header:function(){return"\u62BD\u5C49\u6807\u9898"},footer:e.renderFooter,closeBtn:!0},on:{"update:visible":function(a){e.visible2=a}}},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("t-drawer",{attrs:{visible:e.visible3,header:"\u62BD\u5C49\u6807\u9898",cancelBtn:"\u53D6\u6D88",confirmBtn:{content:"\u786E\u8BA4",disabled:!0},closeBtn:!0},on:{"update:visible":function(a){e.visible3=a}}},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("t-button",{attrs:{variant:"outline"},on:{click:function(a){e.visible=!0}}},[e._v("\u6253\u5F00(\u63D2\u69FD\u5B9A\u4E49)")]),e._v(" \xA0\xA0 "),t("t-button",{attrs:{variant:"outline"},on:{click:function(a){e.visible2=!0}}},[e._v("\u6253\u5F00(\u5C5E\u6027\u5B9A\u4E49)")]),e._v(" \xA0\xA0 "),t("t-button",{attrs:{variant:"outline"},on:{click:function(a){e.visible3=!0}}},[e._v("\u6253\u5F00(\u5355\u72EC\u8BBE\u7F6E\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE)")])],1)},Z=[];const f={};var ee=i(X,Y,Z,!1,te,null,null,null);function te(e){for(let n in f)this[n]=f[n]}const Fe=function(){return ee.exports}();var ne=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-drawer",{attrs:{visible:e.visible,attach:"body",mode:e.mode,placement:e.placement,header:"\u62BD\u5C49\u6807\u9898"},on:{"update:visible":function(a){e.visible=a}}},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("t-space",[e._v(" \u62BD\u5C49\u5F39\u51FA\u6A21\u5F0F\uFF1A "),t("t-radio-group",{model:{value:e.mode,callback:function(a){e.mode=a},expression:"mode"}},[t("t-radio-button",{attrs:{value:"overlay"}},[e._v("overlay")]),t("t-radio-button",{attrs:{value:"push"}},[e._v("push")])],1)],1),t("br"),t("br"),t("t-button",{attrs:{variant:"outline"},on:{click:function(a){e.visible=!0}}},[e._v("\u6253\u5F00\u62BD\u5C49")])],1)},ae=[];const ie=o.extend({data(){return{visible:!1,mode:"push",placement:"right"}}}),h={};var oe=i(ie,ne,ae,!1,le,null,null,null);function le(e){for(let n in h)this[n]=h[n]}const je=function(){return oe.exports}();var re=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"t-container"},[t("div",{staticClass:"t-suf-container"},[t("t-drawer",{attrs:{visible:e.visible,placement:e.placement,mode:e.mode,header:"\u62BD\u5C49\u6807\u9898",showInAttachedElement:""},on:{"update:visible":function(a){e.visible=a}}},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("div",{staticClass:"tdesign-radio-button"},[e._v(" \u62BD\u5C49\u5F39\u51FA\u65B9\u5411\uFF1A "),t("t-radio-group",{model:{value:e.placement,callback:function(a){e.placement=a},expression:"placement"}},[t("t-radio-button",{attrs:{value:"left"}},[e._v("\u5DE6\u4FA7")]),t("t-radio-button",{attrs:{value:"right"}},[e._v("\u53F3\u4FA7")]),t("t-radio-button",{attrs:{value:"top"}},[e._v("\u4E0A\u65B9")]),t("t-radio-button",{attrs:{value:"bottom"}},[e._v("\u4E0B\u65B9")])],1)],1),t("br"),t("div",{staticClass:"tdesign-radio-button"},[e._v(" \u62BD\u5C49\u5F39\u51FA\u6A21\u5F0F\uFF1A "),t("t-radio-group",{model:{value:e.mode,callback:function(a){e.mode=a},expression:"mode"}},[t("t-radio-button",{attrs:{value:"overlay"}},[e._v("overlay")]),t("t-radio-button",{attrs:{value:"push"}},[e._v("push")])],1)],1),t("br"),t("br"),t("t-button",{attrs:{variant:"outline"},on:{click:function(a){e.visible=!0}}},[e._v("\u6253\u5F00\u62BD\u5C49")])],1)])},se=[];const ue=o.extend({data(){return{visible:!1,placement:"right",mode:"overlay"}}}),x={};var ce=i(ue,re,se,!1,ve,"57e92dc8",null,null);function ve(e){for(let n in x)this[n]=x[n]}const Re=function(){return ce.exports}();var de=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-drawer",{attrs:{visible:e.visible,header:"\u62BD\u5C49\u6807\u9898",destroyOnClose:""},on:{"update:visible":function(a){e.visible=a}}},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("t-button",{attrs:{variant:"outline"},on:{click:function(a){e.visible=!0}}},[e._v("\u6253\u5F00\u62BD\u5C49")])],1)},pe=[];const be=o.extend({data(){return{visible:!1}}}),g={};var me=i(be,de,pe,!1,_e,null,null,null);function _e(e){for(let n in g)this[n]=g[n]}const Pe=function(){return me.exports}();var fe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-drawer",{attrs:{header:"\u62BD\u5C49\u6807\u9898",visible:e.visible,onOverlayClick:function(){return e.visible=!1},onConfirm:function(){return e.visible=!1},placement:e.placement,sizeDraggable:!0},on:{cancel:function(a){e.visible=!1}}},[t("p",[e._v("\u62BD\u5C49\u7684\u5185\u5BB9")])]),t("t-space",{attrs:{direction:"vertical"}},[t("t-radio-group",{attrs:{defaultValue:e.placement},model:{value:e.placement,callback:function(a){e.placement=a},expression:"placement"}},[t("t-radio-button",{attrs:{value:"left"}},[e._v("\u4ECE\u5DE6\u4FA7\u62D6\u62FD\u62BD\u5C49")]),t("t-radio-button",{attrs:{value:"right"}},[e._v("\u4ECE\u53F3\u4FA7\u62D6\u62FD\u62BD\u5C49")]),t("t-radio-button",{attrs:{value:"top"}},[e._v("\u4ECE\u4E0A\u65B9\u62D6\u62FD\u62BD\u5C49")]),t("t-radio-button",{attrs:{value:"bottom"}},[e._v("\u4ECE\u4E0B\u65B9\u62D6\u62FD\u62BD\u5C49")])],1),t("t-button",{attrs:{variant:"outline"},on:{click:function(a){e.visible=!0}}},[e._v("\u6253\u5F00\u62BD\u5C49")])],1)],1)},he=[];const xe=o.extend({data(){return{visible:!1,placement:"right"}}}),C={};var ge=i(xe,fe,he,!1,Ce,null,null,null);function Ce(e){for(let n in C)this[n]=C[n]}const Te=function(){return ge.exports}(),Ae=`<template>
  <div>
    <t-drawer :visible.sync="visible" header="\u62BD\u5C49\u6807\u9898" :onConfirm="onClickConfirm" :closeBtn="true">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-button variant="outline" @click="handleClick">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { MessagePlugin as Message } from 'tdesign-vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    handleClick() {
      this.visible = true;
    },
    onClickConfirm() {
      Message.info('\u6570\u636E\u4FDD\u5B58\u4E2D...', 1000);
      const timer = setTimeout(() => {
        clearTimeout(timer);
        this.visible = false;
        Message.info('\u6570\u636E\u4FDD\u5B58\u6210\u529F!');
      }, 1000);
    },
  },
});
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,Le=`<template>
  <div>
    <t-drawer :visible="visible" @close="handleClose" :onConfirm="handleClose" header="\u62BD\u5C49\u6807\u9898">
      <div class="t-drawer-demo-div">
        <span>\u6807\u7B7E A</span>
        <t-input />
      </div>
      <div class="t-drawer-demo-div">
        <span>\u6807\u7B7E B</span>
        <t-input />
      </div>
      <div class="t-drawer-demo-div">
        <span>\u6807\u7B7E C</span>
        <t-input />
      </div>
    </t-drawer>
    <t-button variant="outline" @click="handleClick">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    setVisible(state) {
      this.visible = state;
    },
    handleClick() {
      this.setVisible(true);
    },
    handleClose() {
      this.setVisible(false);
    },
  },
});
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
.t-drawer-demo-div {
  margin-bottom: 24px;
}
</style>
`,Ie=`<template>
  <div>
    <t-drawer
      :visible="visible"
      :showOverlay="false"
      :onConfirm="handleClose"
      :preventScrollThrough="false"
      header="\u62BD\u5C49\u6807\u9898"
      @close="handleClose"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <t-button variant="outline" @click="handleClick">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    setVisible(state) {
      this.visible = state;
    },
    handleClick() {
      this.setVisible(true);
    },
    handleClose() {
      this.setVisible(false);
    },
  },
});
<\/script>
`,Ue=`<template>
  <t-space>
    <!-- @click-cancel \u548C :onClickCancel \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301\uFF1B :onClickOverlay \u548C @click-overlay \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301-->
    <t-drawer
      header="\u62BD\u5C49\u6807\u9898"
      :visible="visible"
      @cancel="visible = false"
      :onOverlayClick="() => (visible = false)"
      :onConfirm="() => (visible = false)"
      :placement="placement"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-space direction="vertical">
      <t-radio-group :defaultValue="placement" v-model="placement">
        <t-radio-button value="left">\u5DE6\u4FA7</t-radio-button>
        <t-radio-button value="right">\u53F3\u4FA7</t-radio-button>
        <t-radio-button value="top">\u4E0A\u65B9</t-radio-button>
        <t-radio-button value="bottom">\u4E0B\u65B9</t-radio-button>
      </t-radio-group>
      <t-button variant="outline" @click="visible = true" class="btn-top-margin">\u6253\u5F00\u62BD\u5C49</t-button>
    </t-space>
  </t-space>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
      placement: 'right',
    };
  },
});
<\/script>
`,qe=`<template>
  <t-space>
    <t-drawer
      :visible.sync="visible"
      :placement="placement"
      :size="size"
      :onConfirm="() => (visible = false)"
      header="\u62BD\u5C49\u6807\u9898"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-space direction="vertical">
      <t-radio-group :defaultValue="size" v-model="size">
        <t-radio-button value="small">\u5C0F</t-radio-button>
        <t-radio-button value="medium">\u4E2D</t-radio-button>
        <t-radio-button value="large">\u5927</t-radio-button>
        <t-radio-button value="200">200</t-radio-button>
        <t-radio-button value="400px">400px</t-radio-button>
        <t-radio-button value="50%">50%</t-radio-button>
      </t-radio-group>

      <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
    </t-space>
  </t-space>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
      size: 'small',
      placement: 'right',
    };
  },
});
<\/script>
`,Je=`<template>
  <div>
    <!-- \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49 -->
    <t-drawer :visible.sync="visible" :closeBtn="true">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
      <template #header>
        <div>\u81EA\u5B9A\u4E49\u5934\u90E8</div>
      </template>
      <template #footer>
        <t-button @click="visible = false">\u786E\u5B9A</t-button>
        <t-button variant="outline" @click="visible = false">\u53D6\u6D88</t-button>
      </template>
    </t-drawer>

    <!-- \u4F7F\u7528 props \u81EA\u5B9A\u4E49 -->
    <t-drawer :visible.sync="visible2" :header="() => '\u62BD\u5C49\u6807\u9898'" :footer="renderFooter" :closeBtn="true">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <!-- \u5355\u72EC\u5B9A\u4E49\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE -->
    <t-drawer
      :visible.sync="visible3"
      header="\u62BD\u5C49\u6807\u9898"
      cancelBtn="\u53D6\u6D88"
      :confirmBtn="{
        content: '\u786E\u8BA4',
        disabled: true,
      }"
      :closeBtn="true"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <t-button variant="outline" @click="visible = true">\u6253\u5F00(\u63D2\u69FD\u5B9A\u4E49)</t-button>
    &nbsp;&nbsp;
    <t-button variant="outline" @click="visible2 = true">\u6253\u5F00(\u5C5E\u6027\u5B9A\u4E49)</t-button>
    &nbsp;&nbsp;
    <t-button variant="outline" @click="visible3 = true">\u6253\u5F00(\u5355\u72EC\u8BBE\u7F6E\u786E\u8BA4/\u53D6\u6D88\u6309\u94AE)</t-button>
  </div>
</template>

<script lang="jsx">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
    };
  },
  methods: {
    renderFooter() {
      return (
        <div>
          <t-button>confirm</t-button>
          <t-button variant="outline" onClick={() => (this.visible2 = false)}>
            cancel
          </t-button>
        </div>
      );
    },
  },
});
<\/script>
`,Ke=`<template>
  <div>
    <t-drawer :visible.sync="visible" attach="body" :mode="mode" :placement="placement" header="\u62BD\u5C49\u6807\u9898">
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <!-- \u72B6\u6001\u63A7\u5236\u533A -->
    <t-space>
      \u62BD\u5C49\u5F39\u51FA\u6A21\u5F0F\uFF1A
      <t-radio-group v-model="mode">
        <t-radio-button value="overlay">overlay</t-radio-button>
        <t-radio-button value="push">push</t-radio-button>
      </t-radio-group>
    </t-space>
    <br /><br />
    <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
      mode: 'push',
      placement: 'right',
    };
  },
});
<\/script>
`,Ge=`<template>
  <div class="t-container">
    <div class="t-suf-container">
      <t-drawer :visible.sync="visible" :placement="placement" :mode="mode" header="\u62BD\u5C49\u6807\u9898" showInAttachedElement>
        <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
      </t-drawer>
      <div class="tdesign-radio-button">
        \u62BD\u5C49\u5F39\u51FA\u65B9\u5411\uFF1A
        <t-radio-group v-model="placement">
          <t-radio-button value="left">\u5DE6\u4FA7</t-radio-button>
          <t-radio-button value="right">\u53F3\u4FA7</t-radio-button>
          <t-radio-button value="top">\u4E0A\u65B9</t-radio-button>
          <t-radio-button value="bottom">\u4E0B\u65B9</t-radio-button>
        </t-radio-group>
      </div>
      <br />
      <div class="tdesign-radio-button">
        \u62BD\u5C49\u5F39\u51FA\u6A21\u5F0F\uFF1A
        <t-radio-group v-model="mode">
          <t-radio-button value="overlay">overlay</t-radio-button>
          <t-radio-button value="push">push</t-radio-button>
        </t-radio-group>
      </div>
      <br /><br />
      <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
      placement: 'right',
      mode: 'overlay',
    };
  },
});
<\/script>
<style scoped>
.t-container {
  position: relative;
  height: 400px;
  overflow: hidden;
  border: 1px solid #ebedf0;
  border-radius: 2px;
}
.t-suf-container {
  height: 100%;
  padding: 48px;
}
</style>
`,He=`<template>
  <div>
    <!-- \u52A8\u753B\u6548\u679C\u5F85\u5F00\u53D1 -->
    <t-drawer :visible.sync="visible" header="\u62BD\u5C49\u6807\u9898" destroyOnClose>
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>

    <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
    };
  },
});
<\/script>
`,Ne=`<template>
  <div>
    <!-- @click-cancel \u548C :onClickCancel \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301\uFF1B :onClickOverlay \u548C @click-overlay \u4E24\u79CD\u5199\u6CD5\u90FD\u652F\u6301-->
    <t-drawer
      header="\u62BD\u5C49\u6807\u9898"
      :visible="visible"
      @cancel="visible = false"
      :onOverlayClick="() => (visible = false)"
      :onConfirm="() => (visible = false)"
      :placement="placement"
      :sizeDraggable="true"
    >
      <p>\u62BD\u5C49\u7684\u5185\u5BB9</p>
    </t-drawer>
    <t-space direction="vertical">
      <t-radio-group :defaultValue="placement" v-model="placement">
        <t-radio-button value="left">\u4ECE\u5DE6\u4FA7\u62D6\u62FD\u62BD\u5C49</t-radio-button>
        <t-radio-button value="right">\u4ECE\u53F3\u4FA7\u62D6\u62FD\u62BD\u5C49</t-radio-button>
        <t-radio-button value="top">\u4ECE\u4E0A\u65B9\u62D6\u62FD\u62BD\u5C49</t-radio-button>
        <t-radio-button value="bottom">\u4ECE\u4E0B\u65B9\u62D6\u62FD\u62BD\u5C49</t-radio-button>
      </t-radio-group>
      <t-button variant="outline" @click="visible = true">\u6253\u5F00\u62BD\u5C49</t-button>
    </t-space>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
      placement: 'right',
    };
  },
});
<\/script>
`,$e=[{name:"closeBtn",type:"Boolean",defaultValue:!0,options:[]},{name:"closeOnEscKeydown",type:"Boolean",defaultValue:!0,options:[]},{name:"closeOnOverlayClick",type:"Boolean",defaultValue:!0,options:[]},{name:"destroyOnClose",type:"Boolean",defaultValue:!1,options:[]},{name:"footer",type:"Boolean",defaultValue:!0,options:[]},{name:"header",type:"Boolean",defaultValue:!0,options:[]},{name:"mode",type:"enum",defaultValue:"overlay",options:[{label:"overlay",value:"overlay"},{label:"push",value:"push"}]},{name:"placement",type:"enum",defaultValue:"right",options:[{label:"left",value:"left"},{label:"right",value:"right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}]},{name:"preventScrollThrough",type:"Boolean",defaultValue:!0,options:[]},{name:"showInAttachedElement",type:"Boolean",defaultValue:!1,options:[]},{name:"showOverlay",type:"Boolean",defaultValue:!0,options:[]},{name:"sizeDraggable",type:"Boolean",defaultValue:!1,options:[]},{name:"visible",type:"Boolean",defaultValue:!1,options:[]}],y={};y.setup=(e,n)=>{const t=s(!1),a=()=>{t.value=!0},r=s($e),l=[{label:"drawer",value:"drawer"}],u={drawer:`
        <div>
          <t-button @click="handleClick">Open Drawer</t-button>
          <t-drawer v-bind="configProps" :visible.sync="visible" header="header">
            <p>This is a Drawer</p>
          </t-drawer>
        </div>
      `},c=s(`<template>${u[l[0].value].trim()}</template>`);function k(w){c.value=`<template>${u[w].trim()}</template>`}return{visible:t,handleClick:a,configList:r,panelList:l,usageCode:c,onPanelChange:k}};var ye=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"drawer",fn:function(a){var r=a.configProps;return[t("div",[t("t-button",{on:{click:e.handleClick}},[e._v("Open Drawer")]),t("t-drawer",e._b({attrs:{visible:e.visible,header:"header"},on:{"update:visible":function(l){e.visible=l}}},"t-drawer",r,!1),[t("p",[e._v("This is a Drawer")])])],1)]}}])})},ke=[];const $={};var we=i(y,ye,ke,!1,Ve,null,null,null);function Ve(e){for(let n in $)this[n]=$[n]}const Qe=function(){return we.exports}();export{ze as D,Qe as U,Me as a,Oe as b,Ee as c,Se as d,Fe as e,je as f,Re as g,Pe as h,Te as i,Ae as j,Le as k,Ie as l,Ue as m,qe as n,Je as o,Ke as p,Ge as q,He as r,Ne as s};
