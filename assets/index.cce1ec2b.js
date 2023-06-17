import{n as o,r as c}from"./index.4ab857ef.js";var h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{attrs:{direction:"vertical",size:20}},[n("t-notification",{attrs:{theme:"info",title:"\u6807\u9898\u540D\u79F0",content:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5"}}),t.show?n("t-notification",{attrs:{theme:"info",title:"\u6807\u9898\u540D\u79F0",content:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5\uFF08\u5C55\u793A 5 \u79D2\u540E\u6D88\u5931\uFF09",duration:5e3},on:{"duration-end":function(i){t.show=!1}}}):t._e(),t.show?t._e():n("t-button",{attrs:{variant:"outline"},on:{click:function(i){t.show=!0}}},[t._v("\u70B9\u51FB\u6253\u5F00\u8BA1\u65F6\u901A\u77E5")])],1)},b=[];const $={data(){return{show:!0}}},r={};var x=o($,h,b,!1,g,null,null,null);function g(t){for(let e in r)this[e]=r[e]}const K=function(){return x.exports}();var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{attrs:{direction:"vertical",size:20}},[n("t-notification",{attrs:{theme:"info",title:"\u666E\u901A\u901A\u77E5",content:"\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u901A\u77E5"}}),n("t-notification",{attrs:{theme:"error",title:"\u5371\u9669\u901A\u77E5",content:"\u8FD9\u662F\u4E00\u6761\u5371\u9669\u7684\u6D88\u606F\u901A\u77E5"}}),n("t-notification",{attrs:{theme:"warning",title:"\u544A\u8B66\u901A\u77E5",content:"\u8FD9\u662F\u4E00\u6761\u544A\u8B66\u7684\u6D88\u606F\u901A\u77E5"}}),n("t-notification",{attrs:{theme:"success",title:"\u6210\u529F\u901A\u77E5",content:"\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u901A\u77E5"}})],1)},k=[];const C={},l={};var E=o(C,y,k,!1,w,null,null,null);function w(t){for(let e in l)this[e]=l[e]}const N=function(){return E.exports}(),L={data(){return{visible:!0,options:[{text:"\u64CD\u4F5C\u4E00",id:1},{text:"\u64CD\u4F5C\u4E8C",id:2},{text:"\u64CD\u4F5C\u4E09",id:3},{text:"\u64CD\u4F5C\u56DB",id:4}]}},methods:{footer(){const t=this.$createElement;return t("div",{slot:"footer",class:"t-notification__detail"},[t("t-button",{class:"t-notification__detail-item",attrs:{theme:"primary",variant:"text"}},["\u67E5\u770B\u8BE6\u60C5"])])},footer2(){const t=this.$createElement;return t("div",{slot:"footer",class:"t-notification__detail"},[t("t-button",{class:"t-notification__detail-item",attrs:{theme:"primary",variant:"text"}},["\u67E5\u770B\u8BE6\u60C5"])])},content(){return"\u6587\u6848\u4E0D\u9650\u957F\u5EA6\uFF0C\u4F46\u5728\u5B9E\u9645\u4F7F\u7528\u65F6\u5EFA\u8BAE\u6587\u6848\u663E\u793A\u5185\u5BB9\u4E0D\u6613\u8FC7\u591A\uFF0C\u5EFA\u8BAE\u6700\u5927\u5C55\u793A\u884C\u6570\u6570\u91CF\u4EE5\u4E09\u884C\u4E3A\u5B9C\uFF0C\u6700\u540E\u4E00\u884C\u6298\u884C\u672B\u5C3E\u5904\u8D85\u51FA\u6587\u672C\u5EFA\u8BAE\u4F1A\u53D8\u4E3A\u7701\u7565\u53F7\u663E\u793A\u3002"},title(){const t=this.$createElement;return t("div",["\u81EA\u5B9A\u4E49\u6807\u9898 ",t("small",["\u6211\u662F\u526F\u6807\u9898"])])},remind(){this.visible=!1,setTimeout(()=>{this.visible=!0},1e4)}}};var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{attrs:{direction:"vertical",size:24}},[n("t-notification",{attrs:{theme:"info",title:"\u8D85\u51FA\u7684\u6587\u672C\u7701\u7565\u53F7\u663E\u793A",content:t.content,footer:t.footer}}),n("t-notification",{attrs:{theme:"info",title:"\u5E26\u5173\u95ED\u6309\u94AE",content:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5","close-btn":!0}}),n("t-notification",{attrs:{theme:"info",title:"\u6D88\u606F\u901A\u77E5\u6807\u9898",content:"\u4F7F\u7528 function \u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9",footer:t.footer2}}),t.visible?n("t-notification",{attrs:{theme:"info",content:"1. \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898 2. \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9"},scopedSlots:t._u([{key:"title",fn:function(){return[n("div",[t._v("\u6D88\u606F\u901A\u77E5\u6807\u9898 "),n("small",[t._v("\u6D88\u606F\u901A\u77E5\u526F\u6807\u9898")])])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"t-notification__detail"},[n("t-button",{staticClass:"t-notification__detail-item",attrs:{theme:"default",variant:"text"}},[t._v("\u53D6\u6D88")]),n("t-button",{staticClass:"t-notification__detail-item",attrs:{theme:"primary",variant:"text"},on:{click:t.remind}},[t._v(" \u7A0D\u540E\u63D0\u9192\u6211(10s) ")])],1)]},proxy:!0}],null,!1,1136448019)}):t._e()],1)},D=[];const f={};var B=o(L,z,D,!1,F,null,null,null);function F(t){for(let e in f)this[e]=f[e]}const O=function(){return B.exports}();var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{attrs:{direction:"vertical"}},[n("t-space",{attrs:{direction:"vertical"}},[n("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u6A2A\u5411\u504F\u79FB\u91CF"},model:{value:t.offsetX,callback:function(i){t.offsetX=i},expression:"offsetX"}}),n("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u7EB5\u5411\u504F\u79FB\u91CF"},model:{value:t.offsetY,callback:function(i){t.offsetY=i},expression:"offsetY"}})],1),n("t-space",{attrs:{size:30}},[n("t-space",{attrs:{direction:"vertical",size:30}},[n("t-button",{attrs:{variant:"outline"},on:{click:function(i){return t.$notify.info(t.infoList[0])}}},[t._v("\u5DE6\u4E0A\u89D2")]),n("t-button",{attrs:{variant:"outline"},on:{click:function(i){return t.$notify.info(t.infoList[2])}}},[t._v("\u5DE6\u4E0B\u89D2")])],1),n("t-space",{attrs:{direction:"vertical",size:30}},[n("t-button",{attrs:{variant:"outline"},on:{click:function(i){return t.$notify.info(t.infoList[1])}}},[t._v("\u53F3\u4E0A\u89D2")]),n("t-button",{attrs:{variant:"outline"},on:{click:function(i){return t.$notify.info(t.infoList[3])}}},[t._v("\u53F3\u4E0B\u89D2")])],1)],1)],1)},X=[];const Y={data(){return{offsetX:"",offsetY:""}},computed:{infoList(){return[{placement:"top-left"},{placement:"top-right"},{placement:"bottom-left"},{placement:"bottom-right"}].map(t=>({title:"\u6807\u9898\u540D\u79F0",content:"\u8FD9\u662F\u4E00\u6761\u53EF\u4EE5\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F\u901A\u77E5",duration:3e3,offset:[this.offsetX,this.offsetY],...t}))}}},u={};var j=o(Y,S,X,!1,M,null,null,null);function M(t){for(let e in u)this[e]=u[e]}const Q=function(){return j.exports}();var P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",[n("t-button",{attrs:{variant:"outline"},on:{click:t.toggle}},[t._v("\u81EA\u7531\u63A7\u5236\u5173\u95ED\u65F6\u673A\uFF08"+t._s(t.notification?"\u5173\u95ED":"\u6253\u5F00")+"\uFF09")])],1)},R=[];const V={data(){return{notification:null}},methods:{toggle(){this.notification?(this.$notify.close(this.notification),this.notification=null):this.notification=this.$notify.info({title:"\u6807\u9898\u540D\u79F0",content:"\u8FD9\u662F\u4E00\u6761\u9700\u8981\u624B\u52A8\u5173\u95ED\u7684\u6D88\u606F\u901A\u77E5",duration:0})}}},_={};var A=o(V,P,R,!1,T,"06379bca",null,null);function T(t){for(let e in _)this[e]=_[e]}const W=function(){return A.exports}(),Z=`<template>
  <t-space direction="vertical" :size="20">
    <t-notification theme="info" title="\u6807\u9898\u540D\u79F0" content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5" />
    <t-notification
      v-if="show"
      theme="info"
      title="\u6807\u9898\u540D\u79F0"
      content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5\uFF08\u5C55\u793A 5 \u79D2\u540E\u6D88\u5931\uFF09"
      :duration="5000"
      @duration-end="show = false"
    />
    <t-button variant="outline" @click="show = true" v-if="!show">\u70B9\u51FB\u6253\u5F00\u8BA1\u65F6\u901A\u77E5</t-button>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
<\/script>
`,tt=`<template>
  <t-space direction="vertical" :size="20">
    <t-notification theme="info" title="\u666E\u901A\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u666E\u901A\u7684\u6D88\u606F\u901A\u77E5" />
    <t-notification theme="error" title="\u5371\u9669\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u5371\u9669\u7684\u6D88\u606F\u901A\u77E5" />
    <t-notification theme="warning" title="\u544A\u8B66\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u544A\u8B66\u7684\u6D88\u606F\u901A\u77E5" />
    <t-notification theme="success" title="\u6210\u529F\u901A\u77E5" content="\u8FD9\u662F\u4E00\u6761\u6210\u529F\u7684\u6D88\u606F\u901A\u77E5" />
  </t-space>
</template>
`,nt=`<template>
  <t-space direction="vertical" :size="24">
    <t-notification theme="info" title="\u8D85\u51FA\u7684\u6587\u672C\u7701\u7565\u53F7\u663E\u793A" :content="content" :footer="footer" />
    <t-notification theme="info" title="\u5E26\u5173\u95ED\u6309\u94AE" content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5" :close-btn="true" />
    <t-notification theme="info" title="\u6D88\u606F\u901A\u77E5\u6807\u9898" content="\u4F7F\u7528 function \u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9" :footer="footer2" />
    <t-notification v-if="visible" theme="info" content="1. \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6807\u9898 2. \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9">
      <template #title>
        <div>\u6D88\u606F\u901A\u77E5\u6807\u9898 <small>\u6D88\u606F\u901A\u77E5\u526F\u6807\u9898</small></div>
      </template>
      <template #footer>
        <div class="t-notification__detail">
          <t-button class="t-notification__detail-item" theme="default" variant="text">\u53D6\u6D88</t-button>
          <t-button class="t-notification__detail-item" theme="primary" variant="text" @click="remind">
            \u7A0D\u540E\u63D0\u9192\u6211(10s)
          </t-button>
        </div>
      </template>
    </t-notification>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      visible: true,
      options: [
        {
          text: '\u64CD\u4F5C\u4E00',
          id: 1,
        },
        {
          text: '\u64CD\u4F5C\u4E8C',
          id: 2,
        },
        {
          text: '\u64CD\u4F5C\u4E09',
          id: 3,
        },
        {
          text: '\u64CD\u4F5C\u56DB',
          id: 4,
        },
      ],
    };
  },
  methods: {
    footer() {
      return (
        <div slot="footer" class="t-notification__detail">
          <t-button class="t-notification__detail-item" theme="primary" variant="text">
            \u67E5\u770B\u8BE6\u60C5
          </t-button>
        </div>
      );
    },
    footer2() {
      return (
        <div slot="footer" class="t-notification__detail">
          <t-button class="t-notification__detail-item" theme="primary" variant="text">
            \u67E5\u770B\u8BE6\u60C5
          </t-button>
        </div>
      );
    },
    content() {
      return '\u6587\u6848\u4E0D\u9650\u957F\u5EA6\uFF0C\u4F46\u5728\u5B9E\u9645\u4F7F\u7528\u65F6\u5EFA\u8BAE\u6587\u6848\u663E\u793A\u5185\u5BB9\u4E0D\u6613\u8FC7\u591A\uFF0C\u5EFA\u8BAE\u6700\u5927\u5C55\u793A\u884C\u6570\u6570\u91CF\u4EE5\u4E09\u884C\u4E3A\u5B9C\uFF0C\u6700\u540E\u4E00\u884C\u6298\u884C\u672B\u5C3E\u5904\u8D85\u51FA\u6587\u672C\u5EFA\u8BAE\u4F1A\u53D8\u4E3A\u7701\u7565\u53F7\u663E\u793A\u3002';
    },
    title() {
      return (
        <div>
          \u81EA\u5B9A\u4E49\u6807\u9898 <small>\u6211\u662F\u526F\u6807\u9898</small>
        </div>
      );
    },
    remind() {
      this.visible = false;
      setTimeout(() => {
        this.visible = true;
      }, 10000);
    },
  },
};
<\/script>
`,et=`<template>
  <t-space direction="vertical">
    <t-space direction="vertical">
      <t-input placeholder="\u8BF7\u8F93\u5165\u6A2A\u5411\u504F\u79FB\u91CF" v-model="offsetX"></t-input>
      <t-input placeholder="\u8BF7\u8F93\u5165\u7EB5\u5411\u504F\u79FB\u91CF" v-model="offsetY"></t-input>
    </t-space>
    <t-space :size="30">
      <t-space direction="vertical" :size="30">
        <t-button variant="outline" @click="$notify.info(infoList[0])">\u5DE6\u4E0A\u89D2</t-button>
        <t-button variant="outline" @click="$notify.info(infoList[2])">\u5DE6\u4E0B\u89D2</t-button>
      </t-space>
      <t-space direction="vertical" :size="30">
        <t-button variant="outline" @click="$notify.info(infoList[1])">\u53F3\u4E0A\u89D2</t-button>
        <t-button variant="outline" @click="$notify.info(infoList[3])">\u53F3\u4E0B\u89D2</t-button>
      </t-space>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      offsetX: '',
      offsetY: '',
    };
  },
  computed: {
    infoList() {
      return [
        { placement: 'top-left' },
        { placement: 'top-right' },
        { placement: 'bottom-left' },
        { placement: 'bottom-right' },
      ].map((item) => ({
        title: '\u6807\u9898\u540D\u79F0',
        content: '\u8FD9\u662F\u4E00\u6761\u53EF\u4EE5\u81EA\u52A8\u5173\u95ED\u7684\u6D88\u606F\u901A\u77E5',
        duration: 3000,
        offset: [this.offsetX, this.offsetY],
        ...item,
      }));
    },
  },
};
<\/script>
`,it=`<template>
  <t-space>
    <t-button variant="outline" @click="toggle">\u81EA\u7531\u63A7\u5236\u5173\u95ED\u65F6\u673A\uFF08{{ notification ? '\u5173\u95ED' : '\u6253\u5F00' }}\uFF09</t-button>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      notification: null,
    };
  },
  methods: {
    toggle() {
      if (!this.notification) {
        this.notification = this.$notify.info({
          title: '\u6807\u9898\u540D\u79F0',
          content: '\u8FD9\u662F\u4E00\u6761\u9700\u8981\u624B\u52A8\u5173\u95ED\u7684\u6D88\u606F\u901A\u77E5',
          duration: 0,
        });
      } else {
        // this.notification.then(ins => ins.close()); // \u53E6\u4E00\u79CD\u5173\u95ED\u65B9\u6CD5
        this.$notify.close(this.notification);
        this.notification = null;
      }
    },
  },
};
<\/script>

<style scoped>
.t-button + .t-button {
  margin-left: 16px;
}
</style>
`,U=[{name:"closeBtn",type:"Boolean",defaultValue:!1,options:[]},{name:"icon",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"info",options:[{label:"info",value:"info"},{label:"success",value:"success"},{label:"warning",value:"warning"},{label:"error",value:"error"}]}],p={};p.setup=(t,e)=>{const n=c(U),i=[{label:"notification",value:"notification"}],a={notification:'<t-notification v-bind="configProps" duration="0" title="\u6807\u9898\u540D\u79F0" content="\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5" />'},s=c(`<template>${a[i[0].value].trim()}</template>`);function v(d){s.value=`<template>${a[d].trim()}</template>`}return{configList:n,panelList:i,usageCode:s,onPanelChange:v}};var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"notification",fn:function(i){var a=i.configProps;return[n("t-notification",t._b({attrs:{duration:"0",title:"\u6807\u9898\u540D\u79F0",content:"\u8FD9\u662F\u4E00\u6761\u6D88\u606F\u901A\u77E5"}},"t-notification",a,!1))]}}])})},q=[];const m={};var G=o(p,J,q,!1,H,null,null,null);function H(t){for(let e in m)this[e]=m[e]}const ot=function(){return G.exports}();export{K as D,ot as U,N as a,O as b,Q as c,W as d,Z as e,tt as f,nt as g,et as h,it as i};
