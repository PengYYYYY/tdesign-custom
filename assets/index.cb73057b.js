import{n as l,A as _,V as f,r}from"./index.7bc89517.js";import{D as o}from"./discount.00dfa94e.js";var b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{direction:"vertical"}},[e("t-space",[e("t-tag",{on:{click:t.onClick}},[t._v("\u6807\u7B7E\u4E00")]),e("a",{attrs:{href:"https://www.tencent.com/zh-cn",target:"_blank"}},[e("t-tag",[t._v("\u8D85\u94FE\u63A5")])],1)],1),e("t-space",[e("t-tag",{attrs:{theme:"primary"}},[t._v("\u6807\u7B7E\u4E00")]),e("t-tag",{attrs:{theme:"success"}},[t._v("\u6807\u7B7E\u4E8C")]),e("t-tag",{attrs:{theme:"warning"}},[t._v("\u6807\u7B7E\u4E09")]),e("t-tag",{attrs:{theme:"danger"}},[t._v("\u6807\u7B7E\u56DB")])],1),e("t-space",[e("t-tag",{attrs:{theme:"primary",variant:"light"}},[t._v("\u6807\u7B7E\u4E00")]),e("t-tag",{attrs:{theme:"success",variant:"light"}},[t._v("\u6807\u7B7E\u4E8C")]),e("t-tag",{attrs:{theme:"warning",variant:"light"}},[t._v("\u6807\u7B7E\u4E09")]),e("t-tag",{attrs:{theme:"danger",variant:"light"}},[t._v("\u6807\u7B7E\u56DB")])],1),e("t-space",[e("t-tag",{attrs:{theme:"primary",variant:"outline"}},[t._v("\u6807\u7B7E\u4E00")]),e("t-tag",{attrs:{theme:"success",variant:"outline"}},[t._v("\u6807\u7B7E\u4E8C")]),e("t-tag",{attrs:{theme:"warning",variant:"outline"}},[t._v("\u6807\u7B7E\u4E09")]),e("t-tag",{attrs:{theme:"danger",variant:"outline"}},[t._v("\u6807\u7B7E\u56DB")])],1),e("t-space",[e("t-tag",{attrs:{theme:"primary",variant:"light-outline"}},[t._v("\u6807\u7B7E\u4E00")]),e("t-tag",{attrs:{theme:"success",variant:"light-outline"}},[t._v("\u6807\u7B7E\u4E8C")]),e("t-tag",{attrs:{theme:"warning",variant:"light-outline"}},[t._v("\u6807\u7B7E\u4E09")]),e("t-tag",{attrs:{theme:"danger",variant:"light-outline"}},[t._v("\u6807\u7B7E\u56DB")])],1)],1)},x=[];const C={methods:{onClick({e:t}){t.stopPropagation()}}},c={};var k=l(C,b,x,!1,y,null,null,null);function y(t){for(let n in c)this[n]=c[n]}const H=function(){return k.exports}(),$={components:{DiscountIcon:o},methods:{renderDiscountIcon(){const t=this.$createElement;return t(o)}}};var w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",[e("t-tag",{attrs:{icon:t.renderDiscountIcon}},[t._v("\u9ED8\u8BA4\u6807\u7B7E")]),e("t-tag",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("discount-icon")]},proxy:!0}])},[t._v(" Icon\u63D2\u69FD ")])],1)},D=[];const u={};var I=l($,w,D,!1,V,null,null,null);function V(t){for(let n in u)this[n]=u[n]}const K=function(){return I.exports}(),E={components:{AddIcon:_,DiscountIcon:o},data(){const t=this.$createElement;return{inputVisible:!1,tags:[{name:"\u53EF\u5220\u9664\u6807\u7B7E\u53EF\u5220\u9664\u6807\u7B7E",type:"default",showClose:!0,maxWidth:100},{name:"\u53EF\u5220\u9664\u6807\u7B7E\u53EF\u5220\u9664\u6807\u7B7E",type:"default",icon:()=>t("discount-icon"),showClose:!0,maxWidth:100},{name:"\u53EF\u5220\u9664\u6807\u7B7E",type:"default",showClose:!0,disabled:!0}]}},methods:{handleClose(t){this.tags.splice(t,1)},handleClick(t){console.log(t)},handleInputEnter(t){t&&!this.tags.some(n=>n.name===t)&&this.tags.push({name:t,type:"default",showClose:!0}),this.inputVisible=!1},handleClickAdd(){this.inputVisible=!0,f.nextTick(()=>{this.$refs.input.focus()})}}};var z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{direction:"vertical",size:"30px"}},[e("t-space",[e("t-tag",{attrs:{theme:"primary",closable:""}},[t._v("\u6807\u7B7E\u4E00")]),e("t-tag",{attrs:{theme:"success",closable:""}},[t._v("\u6807\u7B7E\u4E8C")]),e("t-tag",{attrs:{theme:"warning",closable:""}},[t._v("\u6807\u7B7E\u4E09")]),e("t-tag",{attrs:{theme:"danger",closable:""}},[t._v("\u6807\u7B7E\u56DB")])],1),e("t-space",[e("t-tag",{attrs:{theme:"primary",variant:"light",closable:""}},[t._v("\u6807\u7B7E\u4E00")]),e("t-tag",{attrs:{theme:"success",variant:"light",closable:""}},[t._v("\u6807\u7B7E\u4E8C")]),e("t-tag",{attrs:{theme:"warning",variant:"light",closable:""}},[t._v("\u6807\u7B7E\u4E09")]),e("t-tag",{attrs:{theme:"danger",variant:"light",closable:""}},[t._v("\u6807\u7B7E\u56DB")])],1),e("t-space",[e("t-tag",{attrs:{variant:"outline",theme:"primary",closable:""}},[t._v("\u6807\u7B7E\u4E00")]),e("t-tag",{attrs:{variant:"outline",theme:"success",closable:""}},[t._v("\u6807\u7B7E\u4E8C")]),e("t-tag",{attrs:{variant:"outline",theme:"warning",closable:""}},[t._v("\u6807\u7B7E\u4E09")]),e("t-tag",{attrs:{variant:"outline",theme:"danger",closable:""}},[t._v("\u6807\u7B7E\u56DB")])],1),e("t-space",t._l(t.tags,function(a,s){return e("t-tag",{key:s,attrs:{theme:a.type,closable:a.showClose,icon:a.icon,disabled:!!a.disabled,maxWidth:a.maxWidth},on:{click:t.handleClick,close:function(i){return t.handleClose(s)}}},[t._v(" "+t._s(a.name)+" ")])}),1),e("div",{staticClass:"tag-block editable"},[t.inputVisible?e("t-input",{ref:"input",staticStyle:{width:"94px"},attrs:{size:"small"},on:{blur:t.handleInputEnter,enter:t.handleInputEnter}}):e("t-tag",{on:{click:t.handleClickAdd}},[e("add-icon"),t._v(" \u6DFB\u52A0\u6807\u7B7E ")],1)],1)],1)},A=[];const g={};var P=l(E,z,A,!1,S,"13c6bc58",null,null);function S(t){for(let n in g)this[n]=g[n]}const N=function(){return P.exports}();var W=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{size:"30px"}},t._l(t.tags,function(a,s){return e("t-check-tag",{key:s,attrs:{defaultChecked:a.defaultChecked,disabled:!!a.disabled},on:{click:function(i){return t.handleClick(a,s)},change:t.handleChange}},[t._v(" "+t._s(a.name)+" ")])}),1)},j=[];const M={data(){return{tags:[{name:"\u9009\u4E2D",defaultChecked:!0},{name:"\u672A\u9009"},{name:"\u7981\u7528",disabled:!0}]}},methods:{handleClick(t,n){console.log(t,n)},handleChange(t){console.log(t)}}},d={};var F=l(M,W,j,!1,R,null,null,null);function R(t){for(let n in d)this[n]=d[n]}const O=function(){return F.exports}(),Q=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-tag @click="onClick">\u6807\u7B7E\u4E00</t-tag>
      <a href="https://www.tencent.com/zh-cn" target="_blank">
        <t-tag>\u8D85\u94FE\u63A5</t-tag>
      </a>
    </t-space>
    <t-space>
      <t-tag theme="primary">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag theme="primary" variant="light">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="light">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="light">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="light">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag theme="primary" variant="outline">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="outline">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="outline">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="outline">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag theme="primary" variant="light-outline">\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="light-outline">\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="light-outline">\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="light-outline">\u6807\u7B7E\u56DB</t-tag>
    </t-space>
  </t-space>
</template>

<script>
export default {
  methods: {
    onClick({ e }) {
      e.stopPropagation();
    },
  },
};
<\/script>
`,X=`<template>
  <t-space>
    <t-tag :icon="renderDiscountIcon">\u9ED8\u8BA4\u6807\u7B7E</t-tag>

    <t-tag>
      <template #icon>
        <discount-icon />
      </template>
      Icon\u63D2\u69FD
    </t-tag>
  </t-space>
</template>

<script lang="jsx">
import { DiscountIcon } from 'tdesign-icons-vue';

export default {
  components: { DiscountIcon },
  methods: {
    renderDiscountIcon() {
      return <DiscountIcon />;
    },
  },
};
<\/script>
`,Y=`<template>
  <t-space direction="vertical" size="30px">
    <t-space>
      <t-tag theme="primary" closable>\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" closable>\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" closable>\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" closable>\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag theme="primary" variant="light" closable>\u6807\u7B7E\u4E00</t-tag>
      <t-tag theme="success" variant="light" closable>\u6807\u7B7E\u4E8C</t-tag>
      <t-tag theme="warning" variant="light" closable>\u6807\u7B7E\u4E09</t-tag>
      <t-tag theme="danger" variant="light" closable>\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag variant="outline" theme="primary" closable>\u6807\u7B7E\u4E00</t-tag>
      <t-tag variant="outline" theme="success" closable>\u6807\u7B7E\u4E8C</t-tag>
      <t-tag variant="outline" theme="warning" closable>\u6807\u7B7E\u4E09</t-tag>
      <t-tag variant="outline" theme="danger" closable>\u6807\u7B7E\u56DB</t-tag>
    </t-space>
    <t-space>
      <t-tag
        v-for="(tag, index) in tags"
        :key="index"
        :theme="tag.type"
        :closable="tag.showClose"
        :icon="tag.icon"
        :disabled="!!tag.disabled"
        :maxWidth="tag.maxWidth"
        @click="handleClick"
        @close="handleClose(index)"
      >
        {{ tag.name }}
      </t-tag>
    </t-space>
    <div class="tag-block editable">
      <t-tag v-if="!inputVisible" @click="handleClickAdd">
        <add-icon />
        \u6DFB\u52A0\u6807\u7B7E
      </t-tag>
      <t-input v-else ref="input" size="small" style="width: 94px" @blur="handleInputEnter" @enter="handleInputEnter" />
    </div>
  </t-space>
</template>

<script lang="jsx">
import { AddIcon, DiscountIcon } from 'tdesign-icons-vue';
import Vue from 'vue';

export default {
  components: {
    AddIcon,
    // eslint-disable-next-line vue/no-unused-components
    DiscountIcon,
  },
  data() {
    return {
      inputVisible: false,
      tags: [
        {
          name: '\u53EF\u5220\u9664\u6807\u7B7E\u53EF\u5220\u9664\u6807\u7B7E',
          type: 'default',
          showClose: true,
          maxWidth: 100,
        },
        {
          name: '\u53EF\u5220\u9664\u6807\u7B7E\u53EF\u5220\u9664\u6807\u7B7E',
          type: 'default',
          icon: () => <discount-icon />,
          showClose: true,
          maxWidth: 100,
        },
        {
          name: '\u53EF\u5220\u9664\u6807\u7B7E',
          type: 'default',
          showClose: true,
          disabled: true,
        },
      ],
    };
  },
  methods: {
    handleClose(index) {
      this.tags.splice(index, 1);
    },
    handleClick(event) {
      console.log(event);
    },
    handleInputEnter(val) {
      if (val && !this.tags.some((item) => item.name === val)) {
        this.tags.push({ name: val, type: 'default', showClose: true });
      }
      this.inputVisible = false;
    },
    handleClickAdd() {
      this.inputVisible = true;
      Vue.nextTick(() => {
        this.$refs.input.focus();
      });
    },
  },
};
<\/script>

<style lang="less" scoped>
.tag-block {
  display: flex;
  margin-bottom: 30px;
  > * {
    margin-right: 30px;
  }
}

.editable .t-tag {
  cursor: pointer;
}
</style>
`,Z=`<template>
  <t-space size="30px">
    <t-check-tag
      v-for="(tag, index) in tags"
      :key="index"
      :defaultChecked="tag.defaultChecked"
      :disabled="!!tag.disabled"
      @click="handleClick(tag, index)"
      @change="handleChange"
    >
      {{ tag.name }}
    </t-check-tag>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        {
          name: '\u9009\u4E2D',
          defaultChecked: true,
        },
        {
          name: '\u672A\u9009',
        },
        {
          name: '\u7981\u7528',
          disabled: true,
        },
      ],
    };
  },
  methods: {
    handleClick(tag, index) {
      console.log(tag, index);
    },
    handleChange(isChecked) {
      console.log(isChecked);
    },
  },
};
<\/script>
`,L=[{name:"closable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"shape",type:"enum",defaultValue:"square",options:[{label:"square",value:"square"},{label:"round",value:"round"},{label:"mark",value:"mark"}]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"primary",value:"primary"},{label:"warning",value:"warning"},{label:"danger",value:"danger"},{label:"success",value:"success"}]},{name:"variant",type:"enum",defaultValue:"dark",options:[{label:"dark",value:"dark"},{label:"light",value:"light"},{label:"outline",value:"outline"},{label:"light-outline",value:"light-outline"}]}],h={};h.setup=(t,n)=>{const e=r(L),a=[{label:"tag",value:"tag"}],s={tag:'<t-tag v-bind="configProps">\u6807\u7B7E</t-tag>'},i=r(`<template>${s[a[0].value].trim()}</template>`);function p(v){i.value=`<template>${s[v].trim()}</template>`}return{configList:e,panelList:a,usageCode:i,onPanelChange:p}};var q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"tag",fn:function(a){var s=a.configProps;return[e("t-tag",t._b({},"t-tag",s,!1),[t._v("\u6807\u7B7E")])]}}])})},B=[];const m={};var T=l(h,q,B,!1,U,null,null,null);function U(t){for(let n in m)this[n]=m[n]}const tt=function(){return T.exports}();export{H as D,tt as U,K as a,N as b,O as c,Q as d,X as e,Y as f,Z as g};
