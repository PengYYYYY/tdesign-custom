import{n as l,r as c}from"./index.ba4b8fbd.js";import{M as y}from"./plugin.a82fe062.js";import{T as C}from"./index.486fa12b.js";var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-space",{staticStyle:{width:"80%"},attrs:{direction:"vertical"}},[a("t-tag-input",{attrs:{clearable:""},on:{paste:t.onPaste,enter:t.onTagInputEnter},model:{value:t.tags1,callback:function(n){t.tags1=n},expression:"tags1"}}),a("t-tag-input",{attrs:{value:t.tags2,label:"Controlled: ",clearable:""},on:{change:t.onChange}}),a("t-tag-input",{attrs:{"default-value":t.tags3,"input-value":t.inputValue,label:"UnControlled: ",clearable:""},on:{"update:inputValue":function(n){t.inputValue=n},"update:input-value":function(n){t.inputValue=n}}})],1)},R=[];const S={data(){return{tags1:["Vue","React1"],tags2:["Vue","React2"],tags3:["Vue","React3"],inputValue:""}},methods:{onTagInputEnter(t,e){console.log(t,e)},onChange(t,e){console.log(t,e),this.tags2=t},onPaste(t){console.log(t)}}},u={};var k=l(S,V,R,!1,D,null,null,null);function D(t){for(let e in u)this[e]=u[e]}const Dt=function(){return k.exports}();var M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-space",{staticStyle:{width:"80%"},attrs:{direction:"vertical"}},[a("t-tag-input",{attrs:{label:"Scroll: ","excess-tags-display-type":"scroll",clearable:""},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}}),a("t-tag-input",{attrs:{label:"BreakLine: ",clearable:""},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}})],1)},I=[];const w={data(){return{tags:["Vue","React"]}}},g={};var E=l(w,M,I,!1,T,null,null,null);function T(t){for(let e in g)this[e]=g[e]}const Mt=function(){return E.exports}();var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-tag-input",{staticStyle:{width:"80%"},attrs:{placeholder:"\u6700\u591A\u53EA\u80FD\u8F93\u5165 3 \u4E2A\u6807\u7B7E",max:3},on:{enter:t.onEnter},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}})},P=[];const F={data(){return{tags:[]}},methods:{onEnter(t,{inputValue:e}){t.length>=3&&e&&y.warning("\u6700\u591A\u53EA\u80FD\u8F93\u5165 3 \u4E2A\u6807\u7B7E!")}}},p={};var z=l(F,j,P,!1,A,null,null,null);function A(t){for(let e in p)this[e]=p[e]}const It=function(){return z.exports}();var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-space",{staticStyle:{width:"80%"},attrs:{direction:"vertical"}},[a("t-tag-input",{attrs:{size:"small",clearable:""},model:{value:t.tags1,callback:function(n){t.tags1=n},expression:"tags1"}}),a("t-tag-input",{attrs:{clearable:""},model:{value:t.tags2,callback:function(n){t.tags2=n},expression:"tags2"}}),a("t-tag-input",{attrs:{size:"large",clearable:""},model:{value:t.tags3,callback:function(n){t.tags3=n},expression:"tags3"}})],1)},L=[];const U={data(){return{tags1:["Vue","React"],tags2:["Vue","React"],tags3:["Vue","React"]}}},d={};var q=l(U,B,L,!1,J,null,null,null);function J(t){for(let e in d)this[e]=d[e]}const wt=function(){return q.exports}(),W={data(){const t=this.$createElement;return{tags:["Vue","React","Miniprogram","Angular","Flutter"],renderCollapsedItems:(e,{collapsedTags:a})=>t(C,["\u66F4\u591A(",a.length,")"])}}};var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-space",{staticStyle:{width:"80%"},attrs:{direction:"vertical"}},[a("t-tag-input",{attrs:{"min-collapsed-num":1},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}}),a("t-tag-input",{attrs:{"min-collapsed-num":2,"collapsed-items":t.renderCollapsedItems},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}}),a("t-tag-input",{attrs:{"min-collapsed-num":3},scopedSlots:t._u([{key:"collapsedItems",fn:function(n){var s=n.collapsedTags;return[a("t-popup",{scopedSlots:t._u([{key:"content",fn:function(){return t._l(s,function(o){return a("t-tag",{key:o,staticStyle:{"margin-right":"4px"}},[t._v(" "+t._s(o)+" ")])})},proxy:!0}],null,!0)},[a("t-tag",[t._v("More("+t._s(s.length)+")")])],1)]}}]),model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}})],1)},H=[];const m={};var K=l(W,G,H,!1,N,null,null,null);function N(t){for(let e in m)this[e]=m[e]}const Et=function(){return K.exports}();var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-space",{attrs:{direction:"vertical"}},[a("t-tag-input",{attrs:{clearable:"","min-collapsed-num":2},scopedSlots:t._u([{key:"tag",fn:function(n){var s=n.value;return[a("img",{staticStyle:{"max-width":"20px","max-height":"20px","border-radius":"50%","vertical-align":"text-top"},attrs:{src:"https://tdesign.gtimg.com/site/avatar.jpg"}}),a("span",[t._v("\xA0\xA0"+t._s(s))])]}}]),model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}}),a("t-tag-input",{attrs:{clearable:""},scopedSlots:t._u([{key:"valueDisplay",fn:function(n){var s=n.value,o=n.onClose;return t._l(s,function(r,i){return a("t-tag",{key:r,staticStyle:{"margin-right":"4px"},attrs:{closable:""},on:{close:function(){return o(i)}}},[a("img",{staticStyle:{"max-width":"20px","max-height":"20px","border-radius":"50%","vertical-align":"text-top"},attrs:{src:"https://tdesign.gtimg.com/site/avatar.jpg"}}),a("span",[t._v("\xA0\xA0"+t._s(r))])])})}}]),model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}})],1)},Q=[];const X={data(){return{tags:["StudentA","StudentB","StudentC"]}},methods:{onTagDelete(t){this.tags.splice(t,1)}}},v={};var Y=l(X,O,Q,!1,Z,null,null,null);function Z(t){for(let e in v)this[e]=v[e]}const Tt=function(){return Y.exports}();var tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-space",{attrs:{direction:"vertical",size:"32px"}},[a("div",{staticClass:"t-tdesign-demo__tag-input"},[a("label",[t._v("\u7981\u7528\u72B6\u6001\uFF1A")]),a("t-tag-input",{attrs:{value:t.tags1,disabled:""}})],1),a("div",{staticClass:"t-tdesign-demo__tag-input"},[a("label",[t._v("\u53EA\u8BFB\u72B6\u6001\uFF1A")]),a("t-tag-input",{attrs:{value:t.tags2,tips:"\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A",readonly:""}})],1),a("div",{staticClass:"t-tdesign-demo__tag-input"},[a("label",[t._v("\u6210\u529F\u72B6\u6001\uFF1A")]),a("t-tag-input",{attrs:{status:"success",tips:"\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A",clearable:""},model:{value:t.tags3,callback:function(n){t.tags3=n},expression:"tags3"}})],1),a("div",{staticClass:"t-tdesign-demo__tag-input"},[a("label",[t._v("\u544A\u8B66\u72B6\u6001\uFF1A")]),a("t-tag-input",{attrs:{status:"warning",tips:"\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A",clearable:""},model:{value:t.tags4,callback:function(n){t.tags4=n},expression:"tags4"}})],1),a("div",{staticClass:"t-tdesign-demo__tag-input"},[a("label",[t._v("\u9519\u8BEF\u72B6\u6001\uFF1A")]),a("t-tag-input",{attrs:{status:"error",tips:"\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A",clearable:""},model:{value:t.tags5,callback:function(n){t.tags5=n},expression:"tags5"}})],1)])},et=[];const at={data(){return{tags1:["Vue","React","Miniprogram"],tags2:["Vue","React","Miniprogram"],tags3:["Vue","React","Miniprogram"],tags4:["Vue","React","Miniprogram"],tags5:["Vue","React","Miniprogram"]}}},_={};var nt=l(at,tt,et,!1,st,null,null,null);function st(t){for(let e in _)this[e]=_[e]}const jt=function(){return nt.exports}();var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-space",{attrs:{direction:"vertical"}},[a("t-tag-input",{attrs:{placeholder:"\u6DFB\u52A0\u65B0\u6807\u7B7E","tag-props":{theme:"primary"}},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}}),a("t-tag-input",{attrs:{placeholder:"\u6DFB\u52A0\u65B0\u6807\u7B7E","tag-props":{theme:"success"}},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}}),a("t-tag-input",{attrs:{placeholder:"\u6DFB\u52A0\u65B0\u6807\u7B7E","tag-props":{theme:"warning"}},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}}),a("t-tag-input",{attrs:{placeholder:"\u6DFB\u52A0\u65B0\u6807\u7B7E","tag-props":{theme:"danger"}},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}})],1)},ot=[];const rt={data(){return{tags:["Vue","React","Miniprogram"]}}},h={};var it=l(rt,lt,ot,!1,ct,null,null,null);function ct(t){for(let e in h)this[e]=h[e]}const Pt=function(){return it.exports}();var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-tag-input",{attrs:{"auto-width":"",clearable:""},model:{value:t.tags,callback:function(n){t.tags=n},expression:"tags"}})},gt=[];const pt={data(){return{tags:["Vue","React"]}}},f={};var dt=l(pt,ut,gt,!1,mt,null,null,null);function mt(t){for(let e in f)this[e]=f[e]}const Ft=function(){return dt.exports}();var vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("t-space",{attrs:{direction:"vertical"}},[a("t-tag-input",{attrs:{clearable:"","drag-sort":"",placeholder:"\u8BF7\u8F93\u5165"},on:{paste:t.onPaste,enter:t.onTagInputEnter,change:t.onChange,"drag-sort":t.onDragSort},model:{value:t.tags1,callback:function(n){t.tags1=n},expression:"tags1"}}),a("t-tag-input",{attrs:{"drag-sort":"",clearable:"",label:"Controlled: ","excess-tags-display-type":"break-line",placeholder:"\u8BF7\u8F93\u5165"},on:{change:t.onChange2,"drag-sort":t.onDragSort2},model:{value:t.tags2,callback:function(n){t.tags2=n},expression:"tags2"}})],1)},_t=[];const ht={data(){return{tags1:["Vue","React","Angular"],tags2:["Vue","React","Angular","Miniprogram"]}},methods:{onTagInputEnter(t,e){console.log(t,e)},onChange(t,e){console.log(t,e)},onChange2(t,e){console.log(t,e)},onPaste(t){console.log(t)},onDragSort({currentIndex:t,targetIndex:e}){const a=this.tags1[e];this.$set(this.tags1,e,this.tags1[t]),this.$set(this.tags1,t,a)},onDragSort2({currentIndex:t,targetIndex:e}){const a=this.tags2[e];this.$set(this.tags2,e,this.tags2[t]),this.$set(this.tags2,t,a)}}},x={};var ft=l(ht,vt,_t,!1,xt,null,null,null);function xt(t){for(let e in x)this[e]=x[e]}const zt=function(){return ft.exports}(),At=`<template>
  <t-space direction="vertical" style="width: 80%">
    <t-tag-input v-model="tags1" clearable @paste="onPaste" @enter="onTagInputEnter" />

    <t-tag-input :value="tags2" label="Controlled: " clearable @change="onChange" />

    <t-tag-input :default-value="tags3" :input-value.sync="inputValue" label="UnControlled: " clearable />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags1: ['Vue', 'React1'],
      tags2: ['Vue', 'React2'],
      tags3: ['Vue', 'React3'],
      inputValue: '',
    };
  },
  methods: {
    onTagInputEnter(val, context) {
      console.log(val, context);
    },
    onChange(val, context) {
      console.log(val, context);
      this.tags2 = val;
    },
    onPaste(context) {
      console.log(context);
    },
  },
};
<\/script>
`,Bt=`<template>
  <t-space direction="vertical" style="width: 80%">
    <!-- \u6807\u7B7E\u6570\u91CF\u8D85\u51FA\u65F6\uFF0C\u6EDA\u52A8\u663E\u793A -->
    <t-tag-input v-model="tags" label="Scroll: " excess-tags-display-type="scroll" clearable />

    <!-- \u6807\u7B7E\u6570\u91CF\u8D85\u51FA\u65F6\uFF0C\u6362\u884C\u663E\u793A -->
    <t-tag-input v-model="tags" label="BreakLine: " clearable />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags: ['Vue', 'React'],
    };
  },
};
<\/script>
`,Lt=`<template>
  <t-tag-input v-model="tags" placeholder="\u6700\u591A\u53EA\u80FD\u8F93\u5165 3 \u4E2A\u6807\u7B7E" :max="3" @enter="onEnter" style="width: 80%" />
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

export default {
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    onEnter(value, { inputValue }) {
      if (value.length >= 3 && inputValue) {
        MessagePlugin.warning('\u6700\u591A\u53EA\u80FD\u8F93\u5165 3 \u4E2A\u6807\u7B7E!');
      }
    },
  },
};
<\/script>
`,Ut=`<template>
  <t-space direction="vertical" style="width: 80%">
    <t-tag-input v-model="tags1" size="small" clearable />

    <t-tag-input v-model="tags2" clearable />

    <t-tag-input v-model="tags3" size="large" clearable />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags1: ['Vue', 'React'],
      tags2: ['Vue', 'React'],
      tags3: ['Vue', 'React'],
    };
  },
};
<\/script>
`,qt=`<template>
  <t-space direction="vertical" style="width: 80%">
    <t-tag-input v-model="tags" :min-collapsed-num="1" />

    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-tag-input v-model="tags" :min-collapsed-num="2" :collapsed-items="renderCollapsedItems" />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-tag-input v-model="tags" :min-collapsed-num="3">
      <template #collapsedItems="{ collapsedTags }">
        <t-popup>
          <t-tag>More({{ collapsedTags.length }})</t-tag>
          <template #content>
            <t-tag v-for="item in collapsedTags" :key="item" style="margin-right: 4px">
              {{ item }}
            </t-tag>
          </template>
        </t-popup>
      </template>
    </t-tag-input>
  </t-space>
</template>
<script lang="jsx">
import { Tag } from 'tdesign-vue';

export default {
  data() {
    return {
      tags: ['Vue', 'React', 'Miniprogram', 'Angular', 'Flutter'],
      renderCollapsedItems: (_, { collapsedTags }) => <Tag>\u66F4\u591A({collapsedTags.length})</Tag>,
    };
  },
};
<\/script>
`,Jt=`<template>
  <t-space direction="vertical">
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 tag \u5B9A\u4E49\u6807\u7B7E\u5185\u90E8\u5185\u5BB9\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 tag -->
    <t-tag-input v-model="tags" clearable :min-collapsed-num="2">
      <template #tag="{ value }">
        <img
          src="https://tdesign.gtimg.com/site/avatar.jpg"
          style="max-width: 20px; max-height: 20px; border-radius: 50%; vertical-align: text-top"
        />
        <span>&nbsp;&nbsp;{{ value }}</span>
      </template>
    </t-tag-input>
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 valueDisplay \u5B9A\u4E49\u5168\u90E8\u5185\u5BB9\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 valueDisplay -->
    <t-tag-input v-model="tags" clearable>
      <template #valueDisplay="{ value, onClose }">
        <t-tag
          v-for="(item, index) in value"
          :key="item"
          closable
          style="margin-right: 4px"
          @close="() => onClose(index)"
        >
          <img
            src="https://tdesign.gtimg.com/site/avatar.jpg"
            style="max-width: 20px; max-height: 20px; border-radius: 50%; vertical-align: text-top"
          />
          <span>&nbsp;&nbsp;{{ item }}</span>
        </t-tag>
      </template>
    </t-tag-input>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags: ['StudentA', 'StudentB', 'StudentC'],
    };
  },
  methods: {
    onTagDelete(index) {
      this.tags.splice(index, 1);
    },
  },
};
<\/script>
`,Wt=`<template>
  <t-space direction="vertical" size="32px">
    <div class="t-tdesign-demo__tag-input">
      <label>\u7981\u7528\u72B6\u6001\uFF1A</label>
      <t-tag-input :value="tags1" disabled />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u53EA\u8BFB\u72B6\u6001\uFF1A</label>
      <t-tag-input :value="tags2" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A" readonly />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u6210\u529F\u72B6\u6001\uFF1A</label>
      <t-tag-input v-model="tags3" status="success" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" clearable />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u544A\u8B66\u72B6\u6001\uFF1A</label>
      <t-tag-input v-model="tags4" status="warning" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" clearable />
    </div>

    <div class="t-tdesign-demo__tag-input">
      <label>\u9519\u8BEF\u72B6\u6001\uFF1A</label>
      <t-tag-input v-model="tags5" status="error" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" clearable />
    </div>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags1: ['Vue', 'React', 'Miniprogram'],
      tags2: ['Vue', 'React', 'Miniprogram'],
      tags3: ['Vue', 'React', 'Miniprogram'],
      tags4: ['Vue', 'React', 'Miniprogram'],
      tags5: ['Vue', 'React', 'Miniprogram'],
    };
  },
};
<\/script>
<style lang="less">
.t-tdesign-demo__tag-input {
  display: flex;
  align-items: baseline;
  > label {
    width: 100px;
  }
}
</style>
`,Gt=`<template>
  <t-space direction="vertical">
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'primary' }" />
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'success' }" />
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'warning' }" />
    <t-tag-input v-model="tags" placeholder="\u6DFB\u52A0\u65B0\u6807\u7B7E" :tag-props="{ theme: 'danger' }" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      tags: ['Vue', 'React', 'Miniprogram'],
    };
  },
};
<\/script>
`,Ht=`<template>
  <t-tag-input v-model="tags" auto-width clearable />
</template>
<script>
export default {
  data() {
    return {
      tags: ['Vue', 'React'],
    };
  },
};
<\/script>
`,Kt=`<template>
  <t-space direction="vertical">
    <t-tag-input
      v-model="tags1"
      clearable
      drag-sort
      placeholder="\u8BF7\u8F93\u5165"
      @paste="onPaste"
      @enter="onTagInputEnter"
      @change="onChange"
      @drag-sort="onDragSort"
    />
    <t-tag-input
      v-model="tags2"
      drag-sort
      clearable
      label="Controlled: "
      excess-tags-display-type="break-line"
      placeholder="\u8BF7\u8F93\u5165"
      @change="onChange2"
      @drag-sort="onDragSort2"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      tags1: ['Vue', 'React', 'Angular'],
      tags2: ['Vue', 'React', 'Angular', 'Miniprogram'],
    };
  },
  methods: {
    onTagInputEnter(val, context) {
      console.log(val, context);
    },

    onChange(val, context) {
      console.log(val, context);
    },

    onChange2(val, context) {
      console.log(val, context);
    },

    onPaste(context) {
      console.log(context);
    },

    onDragSort({ currentIndex, targetIndex }) {
      const temp = this.tags1[targetIndex];
      this.$set(this.tags1, targetIndex, this.tags1[currentIndex]);
      this.$set(this.tags1, currentIndex, temp);
    },

    onDragSort2({ currentIndex, targetIndex }) {
      const temp = this.tags2[targetIndex];
      this.$set(this.tags2, targetIndex, this.tags2[currentIndex]);
      this.$set(this.tags2, currentIndex, temp);
    },
  },
};
<\/script>
`,bt=[{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"dragSort",type:"Boolean",defaultValue:!1,options:[]},{name:"excessTagsDisplayType",type:"enum",defaultValue:"scroll",options:[{label:"scroll",value:"scroll"},{label:"break-line",value:"break-line"}]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]}],$={};$.setup=(t,e)=>{const a=c(bt),n=[{label:"tagInput",value:"tagInput"}],s={tagInput:'<t-tagInput v-bind="configProps" />'},o=c(`<template>${s[n[0].value].trim()}</template>`);function r(i){o.value=`<template>${s[i].trim()}</template>`}return{configList:a,panelList:n,usageCode:o,onPanelChange:r}};var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"tagInput",fn:function(n){var s=n.configProps;return[a("t-tagInput",t._b({},"t-tagInput",s,!1))]}}])})},yt=[];const b={};var Ct=l($,$t,yt,!1,Vt,null,null,null);function Vt(t){for(let e in b)this[e]=b[e]}const Nt=function(){return Ct.exports}();export{Dt as D,Nt as U,Mt as a,It as b,wt as c,Et as d,Tt as e,jt as f,Pt as g,Ft as h,zt as i,At as j,Bt as k,Lt as l,Ut as m,qt as n,Jt as o,Wt as p,Gt as q,Ht as r,Kt as s};
