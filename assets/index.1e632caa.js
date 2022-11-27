import{n as s,e as l,r}from"./index.7bc89517.js";var h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{attrs:{size:"80px"}},[n("t-popconfirm",{attrs:{theme:"default",content:"\u786E\u8BA4\u5220\u9664\u8BA2\u5355\u5417"}},[n("t-button",[t._v("\u5220\u9664\u8BA2\u5355")])],1),n("t-popconfirm",{attrs:{visible:t.visible,theme:"default",content:"\u662F\u5426\u63D0\u4EA4\u5BA1\u6838\uFF1F\uFF08\u81EA\u7531\u63A7\u5236\u6D6E\u5C42\u663E\u793A\u6216\u9690\u85CF\uFF09"},on:{"visible-change":t.onVisibleChange}},[n("t-button",[t._v("\u63D0\u4EA4\u5BA1\u6838")])],1)],1)},g=[];const x={data(){return{visible:!0}},methods:{onVisibleChange(t,e={}){if(e&&e.trigger==="confirm"){const n=this.$message.info("\u63D0\u4EA4\u4E2D"),o=setTimeout(()=>{this.$message.close(n),this.$message.success("\u63D0\u4EA4\u6210\u529F\uFF01"),this.visible=!1,clearTimeout(o)},1e3)}else this.visible=t}}},c={};var $=s(x,h,g,!1,y,null,null,null);function y(t){for(let e in c)this[e]=c[e]}const Q=function(){return $.exports}(),w={components:{Icon:l},data(){return{visible1:!0,visible2:!1,visible3:!1}},methods:{customIcon(){const t=this.$createElement;return t(l,{attrs:{name:"browse"},style:"margin-right: 8px"})}}};var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{attrs:{size:"60px"}},[n("t-popconfirm",{attrs:{content:"\u666E\u901A\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u786E\u8BA4"},model:{value:t.visible1,callback:function(o){t.visible1=o},expression:"visible1"}},[n("t-button",[t._v("\u9ED8\u8BA4")])],1),n("t-popconfirm",{attrs:{theme:"warning",content:"\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u63D0\u793A"},model:{value:t.visible2,callback:function(o){t.visible2=o},expression:"visible2"}},[n("t-button",{attrs:{theme:"warning"}},[t._v("\u8B66\u544A")])],1),n("t-popconfirm",{attrs:{theme:"danger",content:"\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u9AD8\u5371\u63D0\u9192"},model:{value:t.visible3,callback:function(o){t.visible3=o},expression:"visible3"}},[n("t-button",{attrs:{theme:"danger"}},[t._v("\u5371\u9669")])],1),n("t-popconfirm",{attrs:{content:"\u57FA\u7840\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u6848\u793A\u610F\u6587\u5B57\u6309\u94AE",popupProps:{placement:"bottom"}}},[n("icon",{staticStyle:{color:"#0052d9"},attrs:{slot:"icon",name:"browse"},slot:"icon"}),n("t-button",{attrs:{variant:"outline"}},[t._v("\u81EA\u5B9A\u4E49\u56FE\u6807\uFF08\u63D2\u69FD\uFF09")])],1),n("t-popconfirm",{attrs:{content:"\u57FA\u7840\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u6848\u793A\u610F\u6587\u5B57\u6309\u94AE",icon:t.customIcon,popupProps:{placement:"bottom"}}},[n("t-button",{attrs:{variant:"outline"}},[t._v("\u81EA\u5B9A\u4E49\u56FE\u6807\uFF08\u5C5E\u6027\uFF09")])],1)],1)},B=[];const p={};var z=s(w,C,B,!1,P,"47148957",null,null);function P(t){for(let e in p)this[e]=p[e]}const W=function(){return z.exports}();var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{attrs:{size:"80px"}},[n("t-popconfirm",{attrs:{theme:"default"}},[n("template",{slot:"content"},[n("p",{staticClass:"title"},[t._v("\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u5B57\u6309\u94AE")]),n("p",{staticClass:"describe"},[t._v("\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u5728\u4E3B\u8981\u8BF4\u660E\u4E4B\u5916\u589E\u52A0\u4E86\u64CD\u4F5C\u76F8\u5173\u7684\u8BE6\u7EC6\u63CF\u8FF0")])]),n("t-button",{attrs:{theme:"primary"}},[t._v("\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9")])],2),n("t-popconfirm",{attrs:{theme:"warning"}},[n("template",{slot:"content"},[n("p",{staticClass:"title"},[t._v("\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u5B57\u6309\u94AE")]),n("p",{staticClass:"describe"},[t._v("\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u5728\u4E3B\u8981\u8BF4\u660E\u4E4B\u5916\u589E\u52A0\u4E86\u64CD\u4F5C\u76F8\u5173\u7684\u8BE6\u7EC6\u63CF\u8FF0")])]),n("t-button",{attrs:{theme:"warning"}},[t._v("\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9")])],2)],1)},k=[];const S={},m={};var V=s(S,D,k,!1,j,"674a918a",null,null);function j(t){for(let e in m)this[e]=m[e]}const X=function(){return V.exports}();var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",[n("t-space",[n("t-popconfirm",{attrs:{theme:"default",content:"\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417",confirmBtn:"\u786E\u8BA4\u63D0\u4EA4",cancelBtn:"\u6211\u518D\u60F3\u60F3"}},[n("t-button",{attrs:{variant:"outline"}},[t._v("\u6309\u94AE\u6837\u5F0F\uFF08\u5C5E\u6027-\u5B57\u7B26\u4E32\uFF09")])],1),n("t-popconfirm",{attrs:{theme:"default",content:"\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417",confirmBtn:{content:"\u786E\u8BA4\u63D0\u4EA4",theme:"warning"},cancelBtn:{content:"\u6211\u518D\u60F3\u60F3",theme:"default",variant:"outline"}}},[n("t-button",{attrs:{variant:"outline"}},[t._v("\u6309\u94AE\u6837\u5F0F\uFF08\u5C5E\u6027-\u5BF9\u8C61\uFF09")])],1),n("t-popconfirm",{attrs:{visible:t.visible,theme:"default",content:"\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417"}},[n("t-button",{attrs:{variant:"outline"},on:{click:function(o){t.visible=!0}}},[t._v("\u6309\u94AE\u6837\u5F0F\uFF08\u63D2\u69FD\uFF09")]),n("t-button",{staticStyle:{"margin-right":"12px"},attrs:{slot:"cancelBtn",size:"small",variant:"text"},on:{click:function(o){t.visible=!1}},slot:"cancelBtn"},[t._v("\u53D6\u6D88")]),n("t-button",{attrs:{slot:"confirmBtn",size:"small",theme:"primary"},on:{click:function(o){t.visible=!1}},slot:"confirmBtn"},[t._v("\u786E\u5B9A")])],1)],1)],1)},E=[];const M={data(){return{visible:!0}}},u={};var F=s(M,I,E,!1,R,null,null,null);function R(t){for(let e in u)this[e]=u[e]}const Y=function(){return F.exports}();var L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{attrs:{size:"80px"}},[n("t-popconfirm",{attrs:{theme:"default",content:"\u76F4\u63A5\u4F7F\u7528 placement \u8FDB\u884C\u8BBE\u7F6E",placement:"bottom"}},[n("t-button",{attrs:{variant:"outline"}},[t._v("\u6D6E\u5C42\u51FA\u73B0\u5728\u4E0B\u65B9")])],1),n("t-popconfirm",{attrs:{theme:"default",content:"\u900F\u4F20\u5C5E\u6027\u5230 Popup \u7EC4\u4EF6\u8FDB\u884C\u8BBE\u7F6E",popupProps:{placement:"right"}}},[n("t-button",{attrs:{variant:"outline"}},[t._v("\u6D6E\u5C42\u51FA\u73B0\u5728\u53F3\u4FA7")])],1)],1)},T=[];const U={},f={};var A=s(U,L,T,!1,J,null,null,null);function J(t){for(let e in f)this[e]=f[e]}const Z=function(){return A.exports}(),tt=`<template>
  <t-space size="80px">
    <t-popconfirm theme="default" content="\u786E\u8BA4\u5220\u9664\u8BA2\u5355\u5417">
      <t-button>\u5220\u9664\u8BA2\u5355</t-button>
    </t-popconfirm>

    <!-- \u53D7\u63A7\u7528\u6CD5\uFF1A\u81EA\u7531\u63A7\u5236\u6D6E\u5C42\u663E\u793A\u4E0E\u5426 -->
    <t-popconfirm
      :visible="visible"
      theme="default"
      content="\u662F\u5426\u63D0\u4EA4\u5BA1\u6838\uFF1F\uFF08\u81EA\u7531\u63A7\u5236\u6D6E\u5C42\u663E\u793A\u6216\u9690\u85CF\uFF09"
      @visible-change="onVisibleChange"
    >
      <t-button>\u63D0\u4EA4\u5BA1\u6838</t-button>
    </t-popconfirm>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    onVisibleChange(val, context = {}) {
      // trigger \u8868\u793A\u89E6\u53D1\u6765\u6E90\uFF0C\u53EF\u4EE5\u6839\u636E\u89E6\u53D1\u6765\u6E90\u81EA\u7531\u63A7\u5236 visible
      if (context && context.trigger === 'confirm') {
        const msg = this.$message.info('\u63D0\u4EA4\u4E2D');
        const timer = setTimeout(() => {
          this.$message.close(msg);
          this.$message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
          this.visible = false;
          clearTimeout(timer);
        }, 1000);
      } else {
        this.visible = val;
      }
    },
  },
};
<\/script>
`,nt=`<template>
  <t-space size="60px">
    <t-popconfirm content="\u666E\u901A\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u786E\u8BA4" v-model="visible1">
      <t-button>\u9ED8\u8BA4</t-button>
    </t-popconfirm>
    <t-popconfirm theme="warning" content="\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u63D0\u793A" v-model="visible2">
      <t-button theme="warning">\u8B66\u544A</t-button>
    </t-popconfirm>
    <t-popconfirm theme="danger" content="\u4E8B\u4EF6\u901A\u77E5\u7C7B\u578B\u504F\u5411\u4E8E\u9AD8\u5371\u63D0\u9192" v-model="visible3">
      <t-button theme="danger">\u5371\u9669</t-button>
    </t-popconfirm>
    <t-popconfirm content="\u57FA\u7840\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u6848\u793A\u610F\u6587\u5B57\u6309\u94AE" :popupProps="{ placement: 'bottom' }">
      <icon name="browse" style="color: #0052d9" slot="icon" />
      <t-button variant="outline">\u81EA\u5B9A\u4E49\u56FE\u6807\uFF08\u63D2\u69FD\uFF09</t-button>
    </t-popconfirm>

    <t-popconfirm content="\u57FA\u7840\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u6848\u793A\u610F\u6587\u5B57\u6309\u94AE" :icon="customIcon" :popupProps="{ placement: 'bottom' }">
      <t-button variant="outline">\u81EA\u5B9A\u4E49\u56FE\u6807\uFF08\u5C5E\u6027\uFF09</t-button>
    </t-popconfirm>
  </t-space>
</template>

<script lang="jsx">
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      visible1: true,
      visible2: false,
      visible3: false,
    };
  },
  methods: {
    customIcon() {
      return <Icon name="browse" style="margin-right: 8px" />;
    },
  },
};
<\/script>

<style scoped>
.popconfirm-demo .tdesign-demo-block {
  display: flex;
  justify-content: flex-start;
}
.popconfirm-demo .demo-item {
  width: 240px;
  text-align: left;
}
</style>
`,et=`<template>
  <t-space size="80px">
    <t-popconfirm theme="default">
      <template slot="content">
        <p class="title">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u5B57\u6309\u94AE</p>
        <p class="describe">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u5728\u4E3B\u8981\u8BF4\u660E\u4E4B\u5916\u589E\u52A0\u4E86\u64CD\u4F5C\u76F8\u5173\u7684\u8BE6\u7EC6\u63CF\u8FF0</p>
      </template>
      <t-button theme="primary">\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9</t-button>
    </t-popconfirm>

    <t-popconfirm theme="warning">
      <template slot="content">
        <p class="title">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u6587\u5B57\u6309\u94AE</p>
        <p class="describe">\u5E26\u63CF\u8FF0\u7684\u6C14\u6CE1\u786E\u8BA4\u6846\u5728\u4E3B\u8981\u8BF4\u660E\u4E4B\u5916\u589E\u52A0\u4E86\u64CD\u4F5C\u76F8\u5173\u7684\u8BE6\u7EC6\u63CF\u8FF0</p>
      </template>
      <t-button theme="warning">\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5185\u5BB9</t-button>
    </t-popconfirm>
  </t-space>
</template>

<style lang="less" scoped>
.title {
  font-weight: 500;
  font-size: 14px;
}
.describe {
  margin-top: 8px;
  font-size: 12px;
  color: var(--td-text-color-secondary);
}
</style>
`,ot=`<template>
  <t-space>
    <!-- \u548C Dialog/Drawer \u7EC4\u4EF6\u7684\u786E\u8BA4/\u53D6\u6D88 \u903B\u8F91\u4E00\u6837 -->
    <t-space>
      <!-- \u4F7F\u7528 props \u5B9A\u4E49\u6309\u94AE\u5185\u5BB9 -->
      <t-popconfirm theme="default" content="\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417" confirmBtn="\u786E\u8BA4\u63D0\u4EA4" cancelBtn="\u6211\u518D\u60F3\u60F3">
        <t-button variant="outline">\u6309\u94AE\u6837\u5F0F\uFF08\u5C5E\u6027-\u5B57\u7B26\u4E32\uFF09</t-button>
      </t-popconfirm>

      <!-- \u901A\u8FC7\u900F\u4F20\u6309\u94AE\u5C5E\u6027\u81EA\u5B9A\u4E49\u6309\u94AE\uFF0CcancelBtn \u548C confirmBtn \u503C\u4E3A null \u65F6\u8868\u793A\u4E0D\u663E\u793A\u8BE5\u6309\u94AE -->
      <t-popconfirm
        theme="default"
        content="\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417"
        :confirmBtn="{
          content: '\u786E\u8BA4\u63D0\u4EA4',
          theme: 'warning',
        }"
        :cancelBtn="{
          content: '\u6211\u518D\u60F3\u60F3',
          theme: 'default',
          variant: 'outline',
        }"
      >
        <t-button variant="outline">\u6309\u94AE\u6837\u5F0F\uFF08\u5C5E\u6027-\u5BF9\u8C61\uFF09</t-button>
      </t-popconfirm>

      <!-- \u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u6309\u94AE\u5185\u5BB9 -->
      <t-popconfirm :visible="visible" theme="default" content="\u60A8\u786E\u5B9A\u8981\u63D0\u4EA4\u5417">
        <!-- \u81EA\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20 -->
        <t-button variant="outline" @click="visible = true">\u6309\u94AE\u6837\u5F0F\uFF08\u63D2\u69FD\uFF09</t-button>

        <!-- \u81EA\u5B9A\u4E49\u6309\u94AE -->
        <t-button slot="cancelBtn" size="small" variant="text" style="margin-right: 12px" @click="visible = false"
        >\u53D6\u6D88</t-button
        >
        <t-button slot="confirmBtn" size="small" theme="primary" @click="visible = false">\u786E\u5B9A</t-button>
      </t-popconfirm>
    </t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
<\/script>
`,st=`<template>
  <t-space size="80px">
    <!-- \u53EF\u4EE5\u4F7F\u7528 popupProps.placement \u63A7\u5236\u5F39\u51FA\u65B9\u5411 -->

    <t-popconfirm theme="default" content="\u76F4\u63A5\u4F7F\u7528 placement \u8FDB\u884C\u8BBE\u7F6E" placement="bottom">
      <t-button variant="outline">\u6D6E\u5C42\u51FA\u73B0\u5728\u4E0B\u65B9</t-button>
    </t-popconfirm>
    <t-popconfirm theme="default" content="\u900F\u4F20\u5C5E\u6027\u5230 Popup \u7EC4\u4EF6\u8FDB\u884C\u8BBE\u7F6E" :popupProps="{ placement: 'right' }">
      <t-button variant="outline">\u6D6E\u5C42\u51FA\u73B0\u5728\u53F3\u4FA7</t-button>
    </t-popconfirm>
  </t-space>
</template>
`,O=[{name:"destroyOnClose",type:"Boolean",defaultValue:!0,options:[]},{name:"placement",type:"enum",defaultValue:"top",options:[{label:"top",value:"top"},{label:"left",value:"left"},{label:"right",value:"right"},{label:"bottom",value:"bottom"},{label:"top-left",value:"top-left"},{label:"top-right",value:"top-right"},{label:"bottom-left",value:"bottom-left"},{label:"bottom-right",value:"bottom-right"},{label:"left-top",value:"left-top"},{label:"left-bottom",value:"left-bottom"},{label:"right-top",value:"right-top"},{label:"right-bottom",value:"right-bottom"}]},{name:"showArrow",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"warning",value:"warning"},{label:"danger",value:"danger"}]},{name:"visible",type:"Boolean",defaultValue:!1,options:[]}],b={};b.setup=(t,e)=>{const n=r(O),o=[{label:"popconfirm",value:"popconfirm"}],i={popconfirm:`
        <t-popconfirm v-bind="configProps" :visible="true" content="\u786E\u8BA4\u5220\u9664\u5417">
          <t-button>\u5220\u9664</t-button>
        </t-popconfirm>
      `},a=r(`<template>${i[o[0].value].trim()}</template>`);function _(d){a.value=`<template>${i[d].trim()}</template>`}return{configList:n,panelList:o,usageCode:a,onPanelChange:_}};var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"popconfirm",fn:function(o){var i=o.configProps;return[n("t-popconfirm",t._b({attrs:{visible:!0,content:"\u786E\u8BA4\u5220\u9664\u5417"}},"t-popconfirm",i,!1),[n("t-button",[t._v("\u5220\u9664")])],1)]}}])})},G=[];const v={};var H=s(b,q,G,!1,K,null,null,null);function K(t){for(let e in v)this[e]=v[e]}const it=function(){return H.exports}();export{Q as D,it as U,W as a,X as b,Y as c,Z as d,tt as e,nt as f,et as g,ot as h,st as i};
