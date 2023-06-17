import{C as o}from"./chat.f8756897.js";import{A as r}from"./add.16d114d9.js";import{Q as c}from"./qrcode.666225a5.js";import{n as i}from"./index.ba4b8fbd.js";const d={methods:{renderChatIcon(){const e=this.$createElement;return e(o)},renderAddIcon(){const e=this.$createElement;return e(r)},renderQrIcon(){const e=this.$createElement;return e(c)},renderPopup(){const e=this.$createElement;return e("img",{attrs:{alt:"TDesign Logo",width:"120",height:"120",src:"https://tdesign.gtimg.com/site/site.jpg"}})},handleClick(e){console.log("click",e)},handleHover(e){console.log("hover",e)}}};var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",[n("t-sticky-tool",{style:{position:"relative",overflow:"hidden"},attrs:{offset:[-500,-24]},on:{click:e.handleClick,hover:e.handleHover}},[n("t-sticky-item",{attrs:{label:"chat",icon:e.renderChatIcon}}),n("t-sticky-item",{attrs:{label:"add",icon:e.renderAddIcon}}),n("t-sticky-item",{attrs:{trigger:"click",label:"aqcode",icon:e.renderQrIcon,popup:e.renderPopup,"popup-props":{overlayInnerStyle:{padding:"4px",height:"128px"}}}})],1)],1)},h=[];const s={};var m=i(d,p,h,!1,u,null,null,null);function u(e){for(let t in s)this[t]=s[t]}const w=function(){return m.exports}(),g={methods:{renderChatIcon(){const e=this.$createElement;return e(o)},renderAddIcon(){const e=this.$createElement;return e(r)},renderQrIcon(){const e=this.$createElement;return e(c)},renderPopup(){const e=this.$createElement;return e("img",{attrs:{alt:"TDesign Logo",width:"120",height:"120",src:"https://tdesign.gtimg.com/site/site.jpg"}})},handleClick(e){console.log("click",e)},handleHover(e){console.log("hover",e)}}};var v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",[n("t-sticky-tool",{style:{position:"relative",overflow:"hidden"},attrs:{type:"compact",offset:[-500,-24]},on:{click:e.handleClick,hover:e.handleHover}},[n("t-sticky-item",{attrs:{icon:e.renderChatIcon,popup:"chat"}}),n("t-sticky-item",{attrs:{icon:e.renderAddIcon,popup:"add"}}),n("t-sticky-item",{attrs:{icon:e.renderQrIcon,popup:e.renderPopup,"popup-props":{overlayInnerStyle:{padding:"4px",height:"128px"}}}})],1)],1)},k=[];const l={};var y=i(g,v,k,!1,I,null,null,null);function I(e){for(let t in l)this[t]=l[t]}const H=function(){return y.exports}(),f={methods:{renderChatIcon(){const e=this.$createElement;return e(o)},renderAddIcon(){const e=this.$createElement;return e(r)},renderQrIcon(){const e=this.$createElement;return e(c)},renderPopup(){const e=this.$createElement;return e("img",{attrs:{alt:"TDesign Logo",width:"120",height:"120",src:"https://tdesign.gtimg.com/site/site.jpg"}})},handleClick(e){console.log("click",e)},handleHover(e){console.log("hover",e)}}};var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",[n("t-sticky-tool",{style:{position:"relative",overflow:"hidden"},attrs:{offset:[-500,-24]},on:{click:e.handleClick,hover:e.handleHover}},[n("t-sticky-item",{attrs:{label:"chat",icon:e.renderChatIcon}}),n("t-sticky-item",{attrs:{label:"add",icon:e.renderAddIcon}}),n("t-sticky-item",{attrs:{label:"aqcode",icon:e.renderQrIcon,popup:e.renderPopup,"popup-props":{overlayInnerStyle:{padding:"4px",height:"128px"}}}})],1),n("t-sticky-tool",{style:{position:"relative",overflow:"hidden"},attrs:{shape:"round",offset:[-300,-24]},on:{click:e.handleClick,hover:e.handleHover}},[n("t-sticky-item",{attrs:{label:"chat",icon:e.renderChatIcon}}),n("t-sticky-item",{attrs:{label:"add",icon:e.renderAddIcon}}),n("t-sticky-item",{attrs:{label:"aqcode",icon:e.renderQrIcon,popup:e.renderPopup,"popup-props":{overlayInnerStyle:{padding:"4px",height:"128px"}}}})],1)],1)},x=[];const a={};var C=i(f,_,x,!1,$,null,null,null);function $(e){for(let t in a)this[t]=a[t]}const P=function(){return C.exports}(),D=`<template>
  <t-space>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      :offset="[-500, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item label="chat" :icon="renderChatIcon"> </t-sticky-item>
      <t-sticky-item label="add" :icon="renderAddIcon"> </t-sticky-item>
      <t-sticky-item
        trigger="click"
        label="aqcode"
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
  </t-space>
</template>

<script lang="jsx">
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue';

export default {
  methods: {
    renderChatIcon() {
      return <ChatIcon />;
    },
    renderAddIcon() {
      return <AddIcon />;
    },
    renderQrIcon() {
      return <QrcodeIcon />;
    },
    renderPopup() {
      return <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />;
    },
    handleClick(context) {
      console.log('click', context);
    },
    handleHover(context) {
      console.log('hover', context);
    },
  },
};
<\/script>
`,j=`<template>
  <t-space>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      type="compact"
      :offset="[-500, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item :icon="renderChatIcon" popup="chat"> </t-sticky-item>
      <t-sticky-item :icon="renderAddIcon" popup="add"> </t-sticky-item>
      <t-sticky-item
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
  </t-space>
</template>

<script lang="jsx">
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue';

export default {
  methods: {
    renderChatIcon() {
      return <ChatIcon />;
    },
    renderAddIcon() {
      return <AddIcon />;
    },
    renderQrIcon() {
      return <QrcodeIcon />;
    },
    renderPopup() {
      return <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />;
    },
    handleClick(context) {
      console.log('click', context);
    },
    handleHover(context) {
      console.log('hover', context);
    },
  },
};
<\/script>
`,S=`<template>
  <t-space>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      :offset="[-500, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item label="chat" :icon="renderChatIcon"> </t-sticky-item>
      <t-sticky-item label="add" :icon="renderAddIcon"> </t-sticky-item>
      <t-sticky-item
        label="aqcode"
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
    <t-sticky-tool
      :style="{ position: 'relative', overflow: 'hidden' }"
      shape="round"
      :offset="[-300, -24]"
      @click="handleClick"
      @hover="handleHover"
    >
      <t-sticky-item label="chat" :icon="renderChatIcon"> </t-sticky-item>
      <t-sticky-item label="add" :icon="renderAddIcon"> </t-sticky-item>
      <t-sticky-item
        label="aqcode"
        :icon="renderQrIcon"
        :popup="renderPopup"
        :popup-props="{ overlayInnerStyle: { padding: '4px', height: '128px' } }"
      >
      </t-sticky-item>
    </t-sticky-tool>
  </t-space>
</template>

<script lang="jsx">
import { ChatIcon, AddIcon, QrcodeIcon } from 'tdesign-icons-vue';

export default {
  methods: {
    renderChatIcon() {
      return <ChatIcon />;
    },
    renderAddIcon() {
      return <AddIcon />;
    },
    renderQrIcon() {
      return <QrcodeIcon />;
    },
    renderPopup() {
      return <img alt="TDesign Logo" width="120" height="120" src="https://tdesign.gtimg.com/site/site.jpg" />;
    },
    handleClick(context) {
      console.log('click', context);
    },
    handleHover(context) {
      console.log('hover', context);
    },
  },
};
<\/script>
`;export{w as D,H as a,P as b,D as c,j as d,S as e};
