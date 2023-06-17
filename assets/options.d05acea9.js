import{n as r}from"./index.4ab857ef.js";import{I as o}from"./index.c25e1a9b.js";var b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-breadcrumb",{attrs:{maxItemWidth:"150"}},[e("t-breadcrumbItem",[t._v("\u9875\u97621")]),e("t-breadcrumbItem",[t._v("\u9875\u97622\u9762\u5305\u5C51\u6587\u6848\u8D85\u957F\u65F6\u60AC\u6D6E\u663E\u793A\u6587\u6848\u5168\u90E8\u4FE1\u606F")]),e("t-breadcrumbItem",{attrs:{maxWidth:"160"}},[t._v("\u9762\u5305\u5C51\u4E2D\u6587\u6848\u8FC7\u957F\u65F6\u53EF\u7F29\u7565\u663E\u793A\uFF0C\u9F20\u6807hover\u65F6\u663E\u793A\u5168\u90E8")])],1)},i=[];const l={},c={};var _=r(l,b,i,!1,d,null,null,null);function d(t){for(let n in c)this[n]=c[n]}const A=function(){return _.exports}();var p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-breadcrumb",[e("t-breadcrumbItem",[e("icon",{attrs:{slot:"icon",name:"books"},slot:"icon"}),t._v("\u9875\u97621")],1),e("t-breadcrumbItem",[e("icon",{attrs:{slot:"icon",name:"books"},slot:"icon"}),t._v("\u9875\u97622")],1),e("t-breadcrumbItem",[e("icon",{attrs:{slot:"icon",name:"books"},slot:"icon"}),t._v("\u9875\u97623")],1)],1)},v=[];const f={components:{Icon:o}},a={};var I=r(f,p,v,!1,x,null,null,null);function x(t){for(let n in a)this[n]=a[n]}const B=function(){return I.exports}();var h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-breadcrumb",{scopedSlots:t._u([{key:"default",fn:function(){return[e("t-breadcrumbItem",[t._v("\u9875\u97621")]),e("t-breadcrumbItem",[t._v("\u9875\u97622")]),e("t-breadcrumbItem",[t._v("\u9875\u97623")])]},proxy:!0},{key:"separator",fn:function(){return[e("icon",{attrs:{name:"chevron-right"}})]},proxy:!0}])})},$=[];const D={components:{Icon:o}},m={};var y=r(D,h,$,!1,g,null,null,null);function g(t){for(let n in m)this[n]=m[n]}const G=function(){return y.exports}();var k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-breadcrumb",{attrs:{separator:function(){return"/"}}},[e("t-breadcrumbItem",[t._v("\u9875\u97621")]),e("t-breadcrumbItem",[t._v("\u9875\u97622 "),e("icon",{attrs:{name:"chevron-down"}})],1),e("t-breadcrumbItem",[t._v("\u9875\u97623")])],1)},C=[];const S={components:{Icon:o}},s={};var j=r(S,k,C,!1,E,null,null,null);function E(t){for(let n in s)this[n]=s[n]}const H=function(){return j.exports}();var F=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-breadcrumb",{attrs:{options:t.options}})},M=[];const R={name:"options",data(){return{options:[{content:"\u9875\u97621"},{content:"\u9875\u97622"},{content:"\u9875\u97623",href:"//tdesign.tencent.com/"}]}}},u={};var w=r(R,F,M,!1,W,null,null,null);function W(t){for(let n in u)this[n]=u[n]}const J=function(){return w.exports}(),K=`<template>
  <t-breadcrumb :maxItemWidth="'150'">
    <t-breadcrumbItem>\u9875\u97621</t-breadcrumbItem>
    <t-breadcrumbItem>\u9875\u97622\u9762\u5305\u5C51\u6587\u6848\u8D85\u957F\u65F6\u60AC\u6D6E\u663E\u793A\u6587\u6848\u5168\u90E8\u4FE1\u606F</t-breadcrumbItem>
    <t-breadcrumbItem :maxWidth="'160'">\u9762\u5305\u5C51\u4E2D\u6587\u6848\u8FC7\u957F\u65F6\u53EF\u7F29\u7565\u663E\u793A\uFF0C\u9F20\u6807hover\u65F6\u663E\u793A\u5168\u90E8</t-breadcrumbItem>
  </t-breadcrumb>
</template>
`,L=`<template>
  <t-breadcrumb>
    <t-breadcrumbItem><icon name="books" slot="icon" />\u9875\u97621</t-breadcrumbItem>
    <t-breadcrumbItem><icon name="books" slot="icon" />\u9875\u97622</t-breadcrumbItem>
    <t-breadcrumbItem><icon name="books" slot="icon" />\u9875\u97623</t-breadcrumbItem>
  </t-breadcrumb>
</template>
<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
};
<\/script>
`,N=`<template>
  <t-breadcrumb>
    <template v-slot:default>
      <t-breadcrumbItem>\u9875\u97621</t-breadcrumbItem>
      <t-breadcrumbItem>\u9875\u97622</t-breadcrumbItem>
      <t-breadcrumbItem>\u9875\u97623</t-breadcrumbItem>
    </template>
    <template v-slot:separator> <icon name="chevron-right" /> </template>
  </t-breadcrumb>
</template>
<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
};
<\/script>
`,O=`<template>
  <t-breadcrumb :separator="() => '/'">
    <t-breadcrumbItem>\u9875\u97621</t-breadcrumbItem>
    <t-breadcrumbItem>\u9875\u97622 <icon name="chevron-down" /></t-breadcrumbItem>
    <t-breadcrumbItem>\u9875\u97623</t-breadcrumbItem>
  </t-breadcrumb>
</template>
<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
};
<\/script>
`,P=`<template>
  <t-breadcrumb :options="options"> </t-breadcrumb>
</template>

<script>
export default {
  name: 'options',
  data() {
    return {
      options: [{ content: '\u9875\u97621' }, { content: '\u9875\u97622' }, { content: '\u9875\u97623', href: '//tdesign.tencent.com/' }],
    };
  },
};
<\/script>
`;export{A as D,B as a,G as b,H as c,J as d,K as e,L as f,N as g,O as h,P as i};
