import{n as o,r as s}from"./index.ba4b8fbd.js";var $=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("t-pagination",{attrs:{total:36,"page-size":e.pageSize},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"current-change":e.onCurrentChange,"page-size-change":e.onPageSizeChange,change:e.onChange},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}}),a("br"),a("br"),a("t-pagination",{attrs:{showFirstAndLastPageBtn:"",total:36,"default-current":2,"default-page-size":10},on:{"current-change":e.onCurrentChange,"page-size-change":e.onPageSizeChange,change:e.onChange}})],1)},x=[];const C={data(){return{current:12,pageSize:5}},methods:{onPageSizeChange(e,n){console.log("Page Size:",this.pageSize,e,n)},onCurrentChange(e,n){console.log("Current Page",this.current,e,n)},onChange(e){console.log("Page Info: ",e)}}},l={};var b=o(C,$,x,!1,y,null,null,null);function y(e){for(let n in l)this[n]=l[n]}const fe=function(){return b.exports}();var P=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("t-space",{staticStyle:{width:"100%"},attrs:{direction:"vertical",size:"large"}},[a("span",[e._v("\u5C55\u793A\u9996\u5C3E\u9875\u7801\u7701\u7565")]),a("t-pagination",{attrs:{total:100,"page-size":e.pageSize},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}}),a("span",[e._v("\u4E0D\u5C55\u793A\u9996\u5C3E\u9875\u7801\u7701\u7565")]),a("t-pagination",{attrs:{"page-ellipsis-mode":"both-ends",total:100,"page-size":e.pageSize},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}})],1)],1)},D=[];const j={data(){return{current:12,pageSize:5}}},p={};var w=o(j,P,D,!1,F,null,null,null);function F(e){for(let n in p)this[n]=p[n]}const he=function(){return w.exports}(),B={data(){return{current:12,pageSize:10,total:685}},methods:{renderTotalContent(){const e=this.$createElement;return e("div",{class:"t-pagination__total"},[`\u5171 ${this.total} \u9879\u6570\u636E`])}}};var E=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("t-pagination",{attrs:{total:e.total,"page-size":e.pageSize,totalContent:e.renderTotalContent},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}})],1)},M=[];const u={};var k=o(B,E,M,!1,I,null,null,null);function I(e){for(let n in u)this[n]=u[n]}const Se=function(){return k.exports}();var R=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("t-pagination",{attrs:{total:645,"page-size":e.pageSize,"on-page-size-change":e.onPageSizeChange,"show-sizer":"","page-size-options":e.pageSizeOptions},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}})],1)},V=[];const L={data(){return{pageSize:30,current:1,pageSizeOptions:[{label:"\u6BCF\u9875 10 \u6761",value:10},{label:"\u6BCF\u9875 30 \u6761",value:30},{label:"\u6BCF\u9875 100 \u6761",value:100},{label:"\u6BCF\u9875 50 \u6761",value:50}]}},methods:{onPageSizeChange(e,n){console.log(e,n)}}},c={};var O=o(L,R,V,!1,A,null,null,null);function A(e){for(let n in c)this[n]=c[n]}const $e=function(){return O.exports}();var T=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("t-pagination",{attrs:{total:101,"page-size":e.pageSize,"show-jumper":""},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}})],1)},J=[];const N={data(){return{pageSize:20,current:1}}},g={};var U=o(N,T,J,!1,q,null,null,null);function q(e){for(let n in g)this[n]=g[n]}const xe=function(){return U.exports}();var G=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("t-pagination",{attrs:{theme:"simple",total:100,"page-size":e.pageSize},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}}})],1)},H=[];const K={data(){return{pageSize:5}}},d={};var Q=o(K,G,H,!1,W,null,null,null);function W(e){for(let n in d)this[n]=d[n]}const Ce=function(){return Q.exports}();var X=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("t-pagination",{attrs:{size:"small",total:100,"page-size":e.pageSize},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}}})],1)},Y=[];const Z={data(){return{pageSize:5}}},m={};var ee=o(Z,X,Y,!1,ne,null,null,null);function ne(e){for(let n in m)this[n]=m[n]}const be=function(){return ee.exports}();var te=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("t-pagination",{attrs:{theme:"simple",size:"small",total:100,"page-size":e.pageSize},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}}})},ae=[];const oe={data(){return{pageSize:5}}},_={};var ie=o(oe,te,ae,!1,re,null,null,null);function re(e){for(let n in _)this[n]=_[n]}const ye=function(){return ie.exports}();var se=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("t-space",{attrs:{direction:"vertical",size:16}},[a("t-space",{attrs:{align:"center"}},[a("span",[e._v("layout:")]),a("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.layout,callback:function(t){e.layout=t},expression:"layout"}},[a("t-radio-button",{attrs:{value:"vertical"}},[e._v("vertical")]),a("t-radio-button",{attrs:{value:"horizontal"}},[e._v("horizontal")])],1)],1),a("t-space",{attrs:{align:"center"}},[a("span",[e._v("size:")]),a("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}},[a("t-radio-button",{attrs:{value:"small"}},[e._v("small")]),a("t-radio-button",{attrs:{value:"medium"}},[e._v("medium")]),a("t-radio-button",{attrs:{value:"large"}},[e._v("large")])],1)],1),a("t-pagination-mini",{attrs:{layout:e.layout,size:e.size,tips:e.tips}})],1)},le=[];const pe={data(){return{layout:"vertical",size:"medium",tips:{prev:"\u524D\u5C18\u5FC6\u68A6",current:"\u56DE\u5230\u73B0\u5728",next:"\u5C55\u671B\u672A\u6765"}}}},v={};var ue=o(pe,se,le,!1,ce,null,null,null);function ce(e){for(let n in v)this[n]=v[n]}const Pe=function(){return ue.exports}(),De=`<template>
  <div>
    <t-pagination
      v-model="current"
      :total="36"
      :page-size.sync="pageSize"
      @current-change="onCurrentChange"
      @page-size-change="onPageSizeChange"
      @change="onChange"
    />
    <br /><br />
    <!-- :pageSizeOptions="[]" \u8868\u793A\u9690\u85CF\u5206\u9875\u5668\u9009\u9879 -->
    <!-- \u975E\u53D7\u63A7\u7528\u6CD5\uFF0C\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220\u3002 -->
    <t-pagination
      showFirstAndLastPageBtn
      :total="36"
      :default-current="2"
      :default-page-size="10"
      @current-change="onCurrentChange"
      @page-size-change="onPageSizeChange"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 12,
      pageSize: 5,
    };
  },
  methods: {
    onPageSizeChange(size, pageInfo) {
      console.log('Page Size:', this.pageSize, size, pageInfo);
    },
    onCurrentChange(current, pageInfo) {
      console.log('Current Page', this.current, current, pageInfo);
    },
    onChange(pageInfo) {
      console.log('Page Info: ', pageInfo);
    },
  },
};
<\/script>
`,je=`<template>
  <div>
    <t-space direction="vertical" size="large" style="width: 100%">
      <span>\u5C55\u793A\u9996\u5C3E\u9875\u7801\u7701\u7565</span>
      <t-pagination v-model="current" :total="100" :page-size.sync="pageSize" />
      <span>\u4E0D\u5C55\u793A\u9996\u5C3E\u9875\u7801\u7701\u7565</span>
      <t-pagination v-model="current" page-ellipsis-mode="both-ends" :total="100" :page-size.sync="pageSize" />
    </t-space>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 12,
      pageSize: 5,
    };
  },
};
<\/script>
`,we=`<template>
  <div>
    <t-pagination v-model="current" :total="total" :page-size.sync="pageSize" :totalContent="renderTotalContent" />
  </div>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      current: 12,
      pageSize: 10,
      total: 685,
    };
  },
  methods: {
    renderTotalContent() {
      return <div class="t-pagination__total">{\`\u5171 \${this.total} \u9879\u6570\u636E\`}</div>;
    },
  },
};
<\/script>
`,Fe=`<template>
  <div>
    <t-pagination
      :total="645"
      :page-size.sync="pageSize"
      v-model="current"
      :on-page-size-change="onPageSizeChange"
      show-sizer
      :page-size-options="pageSizeOptions"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 30,
      current: 1,
      pageSizeOptions: [
        { label: '\u6BCF\u9875 10 \u6761', value: 10 },
        { label: '\u6BCF\u9875 30 \u6761', value: 30 },
        { label: '\u6BCF\u9875 100 \u6761', value: 100 },
        { label: '\u6BCF\u9875 50 \u6761', value: 50 },
      ],
    };
  },
  methods: {
    onPageSizeChange(pageSize, pageInfo) {
      console.log(pageSize, pageInfo);
    },
  },
};
<\/script>
`,Be=`<template>
  <div>
    <t-pagination v-model="current" :total="101" :page-size.sync="pageSize" show-jumper />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 20,
      current: 1,
    };
  },
};
<\/script>
`,Ee=`<template>
  <div>
    <t-pagination theme="simple" :total="100" :page-size.sync="pageSize" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 5,
    };
  },
};
<\/script>
`,Me=`<template>
  <div>
    <t-pagination size="small" :total="100" :page-size.sync="pageSize" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSize: 5,
    };
  },
};
<\/script>
`,ke=`<template>
  <t-pagination theme="simple" size="small" :total="100" :page-size.sync="pageSize" />
</template>

<script>
export default {
  data() {
    return {
      pageSize: 5,
    };
  },
};
<\/script>
`,Ie=`<template>
  <t-space direction="vertical" :size="16">
    <t-space align="center">
      <span>layout:</span>
      <t-radio-group v-model="layout" variant="default-filled">
        <t-radio-button value="vertical">vertical</t-radio-button>
        <t-radio-button value="horizontal">horizontal</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-space align="center">
      <span>size:</span>
      <t-radio-group v-model="size" variant="default-filled">
        <t-radio-button value="small">small</t-radio-button>
        <t-radio-button value="medium">medium</t-radio-button>
        <t-radio-button value="large">large</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-pagination-mini :layout="layout" :size="size" :tips="tips" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      layout: 'vertical',
      size: 'medium',
      tips: { prev: '\u524D\u5C18\u5FC6\u68A6', current: '\u56DE\u5230\u73B0\u5728', next: '\u5C55\u671B\u672A\u6765' },
    };
  },
};
<\/script>
`,ge=[{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"showFirstAndLastPageBtn",type:"Boolean",defaultValue:!1,options:[]},{name:"showJumper",type:"Boolean",defaultValue:!1,options:[]},{name:"showPageNumber",type:"Boolean",defaultValue:!0,options:[]},{name:"showPageSize",type:"Boolean",defaultValue:!0,options:[]},{name:"showPreviousAndNextBtn",type:"Boolean",defaultValue:!0,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"}]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"simple",value:"simple"}]},{name:"totalContent",type:"Boolean",defaultValue:!0,options:[]}],f={};f.setup=(e,n)=>{const a=s(ge),t=[{label:"pagination",value:"pagination"}],i={pagination:'<t-pagination :total="30" v-bind="configProps" />'},r=s(`<template>${i[t[0].value].trim()}</template>`);function h(S){r.value=`<template>${i[S].trim()}</template>`}return{configList:a,panelList:t,usageCode:r,onPanelChange:h}};var de=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"pagination",fn:function(t){var i=t.configProps;return[a("t-pagination",e._b({attrs:{total:30}},"t-pagination",i,!1))]}}])})},me=[];const z={};var _e=o(f,de,me,!1,ve,null,null,null);function ve(e){for(let n in z)this[n]=z[n]}const Re=function(){return _e.exports}();export{fe as D,Re as U,he as a,Se as b,$e as c,xe as d,Ce as e,be as f,ye as g,Pe as h,De as i,je as j,we as k,Fe as l,Be as m,Ee as n,Me as o,ke as p,Ie as q};
