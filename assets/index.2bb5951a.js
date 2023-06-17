import{n as o,r as i}from"./index.fb7ca27a.js";var y=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-tree-select",{staticStyle:{width:"500px"},attrs:{data:e.options,treeProps:{expandAll:!0,valueMode:"onlyLeaf"},filterable:"",clearable:"",placeholder:"\u8BF7\u9009\u62E9\uFF08\u4EC5\u663E\u793A\u53F6\u5B50\u8282\u70B9\uFF09"},on:{blur:e.onBlurTrigger,change:e.onChange},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("t-tree-select",{ref:"single-tree-select",staticStyle:{width:"500px"},attrs:{data:e.options,label:"\u5355\u9009\uFF1A",treeProps:{expandAll:!0,valueMode:"onlyLeaf"},clearable:"",placeholder:"\u8BF7\u9009\u62E9\uFF08\u663E\u793A\u9009\u4E2D\u8282\u70B9\u7684\u5168\u90E8\u8DEF\u5F84\uFF09"},on:{blur:e.onBlurTrigger,change:e.onChange},scopedSlots:e._u([{key:"valueDisplay",fn:function(a){var t=a.value;return[t.label?l("div",[e._v(e._s(e.getNodePath(t)))]):e._e()]}}]),model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},$=[];const V={data(){return{value1:"",value2:"",popupVisible:!1,options:[{label:"\u5E7F\u4E1C\u7701",value:"guangdong",children:[{label:"\u5E7F\u5DDE\u5E02",value:"guangzhou"},{label:"\u6DF1\u5733\u5E02",value:"shenzhen",children:[{label:"\u5357\u5C71\u533A\u6D77\u5929\u4E8C\u8DEF33\u53F7\u817E\u8BAF\u6EE8\u6D77\u5927\u53A6",value:"Tencent"}]}]},{label:"\u6C5F\u82CF\u7701",value:"jiangsu",disabled:!0,children:[{label:"\u5357\u4EAC\u5E02",value:"nanjing"},{label:"\u82CF\u5DDE\u5E02",value:"suzhou"}]}]}},methods:{onBlurTrigger(e){console.log("blur:",e)},onChange(e,n){var l;console.log("change:",e,n,(l=n.node)==null?void 0:l.getPath())},onVisibleChange(e,n){var l;(n.trigger||((l=n.node)==null?void 0:l.label)!=="\u5E7F\u5DDE\u5E02")&&(this.popupVisible=e)},getNodePath(e){var l;return!e.value||!this.$refs["single-tree-select"]?void 0:((l=this.$refs["single-tree-select"].$refs.treeRef)==null?void 0:l.getPath(e.value)).map(a=>a.data.label).join("/")}}},c={};var z=o(V,y,$,!1,P,null,null,null);function P(e){for(let n in c)this[n]=c[n]}const he=function(){return z.exports}(),j=[{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2,children:[{label:"tdesign-web-react",value:"2.1"},{label:"tdesign-mobile-react",value:"2.2"}]},{label:"tdesign-miniprogram",value:3},{label:e=>e("span",["tdesign-mobile-react"]),text:"tdesign-mobile-react",value:"4"},{label:"tdesign-angular",value:"5"},{label:"tdesign-mobile-vue",value:"6"}],S={data(){return{value:[1,2,3],options:j}},methods:{handleRemove(e){console.log("\u79FB\u9664\u9009\u9879",e)}}};var w=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-tree-select",{attrs:{data:e.options,multiple:"",clearable:"",placeholder:"\u8BF7\u9009\u62E9"},on:{remove:e.handleRemove},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},C=[];const p={};var T=o(S,w,C,!1,k,null,null,null);function k(e){for(let n in p)this[n]=p[n]}const me=function(){return T.exports}(),d=[{label:"\u5E7F\u4E1C\u7701",value:"guangdong",children:[{label:"\u5E7F\u5DDE\u5E02",value:"guangzhou"},{label:"\u6DF1\u5733\u5E02",value:"shenzhen"}]},{label:"\u6C5F\u82CF\u7701",value:"jiangsu",children:[{label:"\u5357\u4EAC\u5E02",value:"nanjing"},{label:"\u82CF\u5DDE\u5E02",value:"suzhou"}]}],M={data(){return{multiple:!0,multipleValue1:[],multipleValue2:[],multipleValue3:[],loading:!1,singleValue1:"",singleValue2:"",singleValue3:"",type:"filterable",options:d}},methods:{filterFunction(e,n){return n.data.label.indexOf(e)>=0},onMultipleRemoteSearch(e){if(!e){this.options=d;return}console.log("search",e),this.loading=!0;const n=setTimeout(()=>{this.options=[{label:`\u641C\u7D22\u7ED3\u679C\u4E00\uFF1A${e}`,value:`${e}1`},{label:`\u641C\u7D22\u7ED3\u679C\u4E8C\uFF1A${e}`,value:`${e}2`}],this.loading=!1,clearTimeout(n)},300)},loadingText(e){return e("div",["123"])},onFocus(){console.log("focus")}}};var D=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.type,callback:function(a){e.type=a},expression:"type"}},[l("t-radio-button",{attrs:{value:"filterable"}},[e._v("\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219")]),l("t-radio-button",{attrs:{value:"filter"}},[e._v("\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219")]),l("t-radio-button",{attrs:{value:"search"}},[e._v("\u8FDC\u7A0B\u641C\u7D22")])],1),l("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.multiple,callback:function(a){e.multiple=a},expression:"multiple"}},[l("t-radio-button",{attrs:{value:!0}},[e._v("\u591A\u9009")]),l("t-radio-button",{attrs:{value:!1}},[e._v("\u5355\u9009")])],1),e.multiple?[e.type==="filterable"?l("t-tree-select",{staticStyle:{width:"500px"},attrs:{data:e.options,multiple:"",clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9"},model:{value:e.multipleValue1,callback:function(a){e.multipleValue1=a},expression:"multipleValue1"}}):e.type==="filter"?l("t-tree-select",{staticStyle:{width:"500px"},attrs:{data:e.options,multiple:"",clearable:"",filter:e.filterFunction,treeProps:{expandAll:!0,valueMode:"onlyLeaf"},placeholder:"\u8BF7\u9009\u62E9"},model:{value:e.multipleValue2,callback:function(a){e.multipleValue2=a},expression:"multipleValue2"}}):l("t-tree-select",{staticStyle:{width:"500px"},attrs:{data:e.options,multiple:"",clearable:"",placeholder:"\u8BF7\u9009\u62E9",popupVisible:!0,loading:e.loading,treeProps:{expandAll:!0,valueMode:"onlyLeaf"}},on:{search:e.onMultipleRemoteSearch},model:{value:e.multipleValue3,callback:function(a){e.multipleValue3=a},expression:"multipleValue3"}})]:[e.type==="filterable"?l("t-tree-select",{staticStyle:{width:"300px"},attrs:{data:e.options,treeProps:{expandAll:!0,valueMode:"onlyLeaf"},clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9"},on:{focus:e.onFocus},model:{value:e.singleValue1,callback:function(a){e.singleValue1=a},expression:"singleValue1"}}):e.type==="filter"?l("t-tree-select",{staticStyle:{width:"300px"},attrs:{data:e.options,clearable:"",filter:e.filterFunction,treeProps:{expandAll:!0,valueMode:"onlyLeaf"},placeholder:"\u8BF7\u9009\u62E9"},model:{value:e.singleValue2,callback:function(a){e.singleValue2=a},expression:"singleValue2"}}):l("t-tree-select",{staticStyle:{width:"500px"},attrs:{data:e.options,clearable:"",placeholder:"\u8BF7\u9009\u62E9",loading:e.loading,treeProps:{expandAll:!0,valueMode:"onlyLeaf"}},on:{search:e.onMultipleRemoteSearch},model:{value:e.singleValue3,callback:function(a){e.singleValue3=a},expression:"singleValue3"}})]],2)},F=[];const v={};var R=o(M,D,F,!1,L,null,null,null);function L(e){for(let n in v)this[n]=v[n]}const be=function(){return R.exports}();var O=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-tree-select",{staticStyle:{width:"300px"},attrs:{data:e.options,clearable:"",valueType:"object",placeholder:"\u8BF7\u9009\u62E9"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("t-tree-select",{staticStyle:{width:"300px"},attrs:{data:e.options,clearable:"",multiple:"",valueType:"object",placeholder:"\u8BF7\u9009\u62E9"},model:{value:e.mulValue,callback:function(a){e.mulValue=a},expression:"mulValue"}})],1)},A=[];const B={data(){return{value:{label:"\u6DF1\u5733\u5E02",value:"shenzhen"},mulValue:[{label:"\u5E7F\u5DDE\u5E02",value:"guangzhou"},{label:"\u6DF1\u5733\u5E02",value:"shenzhen"}],options:[{label:"\u5E7F\u4E1C\u7701",value:"guangdong",children:[{label:"\u5E7F\u5DDE\u5E02",value:"guangzhou"},{label:"\u6DF1\u5733\u5E02",value:"shenzhen"}]},{label:"\u6C5F\u82CF\u7701",value:"jiangsu",children:[{label:"\u5357\u4EAC\u5E02",value:"nanjing"},{label:"\u82CF\u5DDE\u5E02",value:"suzhou"}]}]}}},h={};var N=o(B,O,A,!1,I,null,null,null);function I(e){for(let n in h)this[n]=h[n]}const ge=function(){return N.exports}();var E=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-tree-select",{staticStyle:{width:"300px"},attrs:{data:e.options,clearable:"",placeholder:"\u8BF7\u9009\u62E9",popupProps:e.popupProps,treeProps:e.treeProps},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},U=[];const J={data(){return{value:"shenzhen",options:[{name:"\u5E7F\u4E1C\u7701",pinyin:"guangdong",children:[{name:"\u5E7F\u5DDE\u5E02",pinyin:"guangzhou"},{name:"\u6DF1\u5733\u5E02",pinyin:"shenzhen"}]},{name:"\u6C5F\u82CF\u7701",pinyin:"jiangsu",children:[{name:"\u5357\u4EAC\u5E02",pinyin:"nanjing"},{name:"\u82CF\u5DDE\u5E02",pinyin:"suzhou"}]}],popupProps:{overlayInnerStyle:{width:"500px"}},treeProps:{keys:{label:"name",value:"pinyin",children:"children"}}}}},m={};var W=o(J,E,U,!1,q,null,null,null);function q(e){for(let n in m)this[n]=m[n]}const fe=function(){return W.exports}();var G=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-tree-select",{staticStyle:{width:"300px"},attrs:{data:e.options,clearable:"",placeholder:"\u8BF7\u9009\u62E9",treeProps:{load:e.loadFunc}},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},H=[];const K={data(){return{value:"",options:[{label:"\u9009\u98791",value:"1",children:!0},{label:"\u9009\u98792",value:"2",children:!0}]}},methods:{loadFunc(e){return new Promise(n=>{setTimeout(()=>{let l=[];e.level<2&&(l=[{label:`${e.label}.1`,value:`${e.value}.1`,children:!0},{label:`${e.label}.2`,value:`${e.value}.2`,children:!0}]),n(l)},2e3)})}}},b={};var Q=o(K,G,H,!1,X,null,null,null);function X(e){for(let n in b)this[n]=b[n]}const _e=function(){return Q.exports}();var Y=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-tree-select",{staticStyle:{width:"300px"},attrs:{data:e.options,multiple:"",clearable:"",placeholder:"\u8BF7\u9009\u62E9",minCollapsedNum:1},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("t-tree-select",{staticStyle:{width:"300px"},attrs:{data:e.options,multiple:"",clearable:"",placeholder:"\u8BF7\u9009\u62E9",minCollapsedNum:1},model:{value:e.slotValue,callback:function(a){e.slotValue=a},expression:"slotValue"}},[l("template",{slot:"collapsedItems"},[l("t-tag",[e._v("\u66F4\u591A...")])],1)],2)],1)},Z=[];const ee={data(){return{value:["guangzhou","shenzhen"],slotValue:["guangzhou","shenzhen"],options:[{label:"\u5E7F\u4E1C\u7701",value:"guangdong",children:[{label:"\u5E7F\u5DDE\u5E02",value:"guangzhou"},{label:"\u6DF1\u5733\u5E02",value:"shenzhen"}]},{label:"\u6C5F\u82CF\u7701",value:"jiangsu",children:[{label:"\u5357\u4EAC\u5E02",value:"nanjing"},{label:"\u82CF\u5DDE\u5E02",value:"suzhou"}]}]}}},g={};var ne=o(ee,Y,Z,!1,le,null,null,null);function le(e){for(let n in g)this[n]=g[n]}const xe=function(){return ne.exports}();var ae=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-tree-select",{staticStyle:{width:"400px"},attrs:{data:e.options,clearable:"",placeholder:"\u8BF7\u9009\u62E9"},scopedSlots:e._u([e.value?{key:"valueDisplay",fn:function(a){var t=a.value;return[e._v(" "+e._s(t.label)+"("+e._s(t.value)+")")]}}:null],null,!0),model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("t-tree-select",{staticStyle:{width:"400px"},attrs:{data:e.options,multiple:"",clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9"},scopedSlots:e._u([{key:"valueDisplay",fn:function(a){var t=a.value,u=a.onClose;return e._l(t,function(r,s){return l("t-tag",{key:s,attrs:{closable:"",onClose:function(){return u(s)}}},[e._v(" "+e._s(r.label)+"("+e._s(r.value)+") ")])})}}]),model:{value:e.mulValue,callback:function(a){e.mulValue=a},expression:"mulValue"}})],1)},te=[];const oe={data(){return{value:"shenzhen",mulValue:["shenzhen","guangzhou"],options:[{label:"\u5E7F\u4E1C\u7701",value:"guangdong",children:[{label:"\u5E7F\u5DDE\u5E02",value:"guangzhou"},{label:"\u6DF1\u5733\u5E02",value:"shenzhen"}]},{label:"\u6C5F\u82CF\u7701",value:"jiangsu",children:[{label:"\u5357\u4EAC\u5E02",value:"nanjing"},{label:"\u82CF\u5DDE\u5E02",value:"suzhou"}]}]}}},f={};var ue=o(oe,ae,te,!1,re,null,null,null);function re(e){for(let n in f)this[n]=f[n]}const ye=function(){return ue.exports}(),$e=`<template>
  <t-space direction="vertical">
    <!-- \u57FA\u7840\u793A\u4F8B\uFF0C\u5355\u9009\u573A\u666F\uFF0CvalueMode: 'onlyLeaf' \u8868\u793A\u53EA\u5141\u8BB8\u9009\u4E2D\u53F6\u5B50\u8282\u70B9 -->
    <t-tree-select
      style="width: 500px"
      :data="options"
      v-model="value1"
      :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
      filterable
      clearable
      placeholder="\u8BF7\u9009\u62E9\uFF08\u4EC5\u663E\u793A\u53F6\u5B50\u8282\u70B9\uFF09"
      @blur="onBlurTrigger"
      @change="onChange"
    />

    <!-- \u9009\u4E2D\u503C\u4E3A\u53F6\u5B50\u8282\u70B9\uFF0C\u8F93\u5165\u6846\u663E\u793A\u5168\u90E8\u5C42\u7EA7 -->
    <t-tree-select
      ref="single-tree-select"
      style="width: 500px"
      :data="options"
      v-model="value2"
      label="\u5355\u9009\uFF1A"
      :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
      clearable
      placeholder="\u8BF7\u9009\u62E9\uFF08\u663E\u793A\u9009\u4E2D\u8282\u70B9\u7684\u5168\u90E8\u8DEF\u5F84\uFF09"
      @blur="onBlurTrigger"
      @change="onChange"
    >
      <template #valueDisplay="{ value }">
        <div v-if="value.label">{{ getNodePath(value) }}</div>
      </template>
    </t-tree-select>

    <!-- \u81EA\u7531\u63A7\u5236\u4E0B\u62C9\u6846\u663E\u793A\u4E0E\u5426\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
    <!-- <t-tree-select
      style="width: 500px"
      :data="options"
      v-model="value"
      :popupVisible="popupVisible"
      :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
      filterable
      clearable
      placeholder="\u8BF7\u9009\u62E9"
      @blur="onBlurTrigger"
      @change="onChange"
      @popup-visible-change="onVisibleChange"
    /> -->
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      popupVisible: false,
      options: [
        {
          label: '\u5E7F\u4E1C\u7701',
          value: 'guangdong',
          children: [
            {
              label: '\u5E7F\u5DDE\u5E02',
              value: 'guangzhou',
            },
            {
              label: '\u6DF1\u5733\u5E02',
              value: 'shenzhen',
              children: [
                {
                  label: '\u5357\u5C71\u533A\u6D77\u5929\u4E8C\u8DEF33\u53F7\u817E\u8BAF\u6EE8\u6D77\u5927\u53A6',
                  value: 'Tencent',
                },
              ],
            },
          ],
        },
        {
          label: '\u6C5F\u82CF\u7701',
          value: 'jiangsu',
          disabled: true,
          children: [
            {
              label: '\u5357\u4EAC\u5E02',
              value: 'nanjing',
            },
            {
              label: '\u82CF\u5DDE\u5E02',
              value: 'suzhou',
            },
          ],
        },
      ],
    };
  },
  methods: {
    onBlurTrigger(context) {
      console.log('blur:', context);
    },
    onChange(value, context) {
      console.log('change:', value, context, context.node?.getPath());
    },
    onVisibleChange(v, c) {
      if (c.trigger || c.node?.label !== '\u5E7F\u5DDE\u5E02') {
        this.popupVisible = v;
      }
    },
    getNodePath(nodeInfo) {
      if (!nodeInfo.value || !this.$refs['single-tree-select']) return;
      const path = this.$refs['single-tree-select'].$refs.treeRef?.getPath(nodeInfo.value);
      return path.map((node) => node.data.label).join('/');
    },
  },
};
<\/script>
`,Ve=`<template>
  <t-tree-select v-model="value" :data="options" multiple clearable placeholder="\u8BF7\u9009\u62E9" @remove="handleRemove">
  </t-tree-select>
</template>
<script lang="jsx">
const OPTIONS = [
  { label: 'tdesign-vue', value: 1 },
  {
    label: 'tdesign-react',
    value: 2,
    children: [
      { label: 'tdesign-web-react', value: '2.1' },
      { label: 'tdesign-mobile-react', value: '2.2' },
    ],
  },
  { label: 'tdesign-miniprogram', value: 3 },
  // eslint-disable-next-line
  { label: (h) => <span>tdesign-mobile-react</span>, text: 'tdesign-mobile-react', value: '4' },
  { label: 'tdesign-angular', value: '5' },
  { label: 'tdesign-mobile-vue', value: '6' },
];
export default {
  data() {
    return {
      value: [1, 2, 3],
      options: OPTIONS,
    };
  },
  methods: {
    handleRemove(ctx) {
      console.log('\u79FB\u9664\u9009\u9879', ctx);
    },
  },
};
<\/script>
`,ze=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="type" variant="default-filled">
      <t-radio-button value="filterable">\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219</t-radio-button>
      <t-radio-button value="filter">\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219</t-radio-button>
      <t-radio-button value="search">\u8FDC\u7A0B\u641C\u7D22</t-radio-button>
    </t-radio-group>
    <t-radio-group v-model="multiple" variant="default-filled">
      <t-radio-button :value="true">\u591A\u9009</t-radio-button>
      <t-radio-button :value="false">\u5355\u9009</t-radio-button>
    </t-radio-group>

    <template v-if="multiple">
      <!-- \u591A\u9009\uFF1A\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-if="type === 'filterable'"
        v-model="multipleValue1"
        :data="options"
        multiple
        clearable
        filterable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
      ></t-tree-select>

      <!-- \u591A\u9009\uFF1A\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-else-if="type === 'filter'"
        v-model="multipleValue2"
        :data="options"
        multiple
        clearable
        :filter="filterFunction"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
      ></t-tree-select>

      <!-- \u591A\u9009\uFF1A\u8FDC\u7A0B\u641C\u7D22 -->
      <!-- :loadingText="loadingText" -->
      <t-tree-select
        v-else
        v-model="multipleValue3"
        :data="options"
        multiple
        clearable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
        :popupVisible="true"
        :loading="loading"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        @search="onMultipleRemoteSearch"
      ></t-tree-select>
    </template>

    <template v-else>
      <!-- \u5355\u9009\uFF1A\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-if="type === 'filterable'"
        v-model="singleValue1"
        :data="options"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        clearable
        filterable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 300px"
        @focus="onFocus"
      ></t-tree-select>

      <!-- \u5355\u9009\uFF1A\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219 -->
      <t-tree-select
        v-else-if="type === 'filter'"
        v-model="singleValue2"
        :data="options"
        clearable
        :filter="filterFunction"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 300px"
      ></t-tree-select>

      <!-- \u5355\u9009\uFF1A\u8FDC\u7A0B\u641C\u7D22 -->
      <!-- :loadingText="loadingText" -->
      <t-tree-select
        v-else
        v-model="singleValue3"
        :data="options"
        clearable
        placeholder="\u8BF7\u9009\u62E9"
        style="width: 500px"
        :loading="loading"
        :treeProps="{ expandAll: true, valueMode: 'onlyLeaf' }"
        @search="onMultipleRemoteSearch"
      ></t-tree-select>
    </template>
  </t-space>
</template>
<script lang="jsx">
const OPTIONS = [
  {
    label: '\u5E7F\u4E1C\u7701',
    value: 'guangdong',
    children: [
      {
        label: '\u5E7F\u5DDE\u5E02',
        value: 'guangzhou',
      },
      {
        label: '\u6DF1\u5733\u5E02',
        value: 'shenzhen',
      },
    ],
  },
  {
    label: '\u6C5F\u82CF\u7701',
    value: 'jiangsu',
    children: [
      {
        label: '\u5357\u4EAC\u5E02',
        value: 'nanjing',
      },
      {
        label: '\u82CF\u5DDE\u5E02',
        value: 'suzhou',
      },
    ],
  },
];
export default {
  data() {
    return {
      multiple: true,
      multipleValue1: [],
      multipleValue2: [],
      multipleValue3: [],
      loading: false,
      singleValue1: '',
      singleValue2: '',
      singleValue3: '',
      type: 'filterable',
      options: OPTIONS,
    };
  },

  methods: {
    filterFunction(searchText, node) {
      return node.data.label.indexOf(searchText) >= 0;
    },
    onMultipleRemoteSearch(keyword) {
      if (!keyword) {
        this.options = OPTIONS;
        return;
      }
      console.log('search', keyword);
      this.loading = true;
      const timer = setTimeout(() => {
        this.options = [
          { label: \`\u641C\u7D22\u7ED3\u679C\u4E00\uFF1A\${keyword}\`, value: \`\${keyword}1\` },
          { label: \`\u641C\u7D22\u7ED3\u679C\u4E8C\uFF1A\${keyword}\`, value: \`\${keyword}2\` },
        ];
        this.loading = false;
        clearTimeout(timer);
      }, 300);
    },
    // eslint-disable-next-line
    loadingText(h) {
      return <div>123</div>;
    },
    onFocus() {
      console.log('focus');
    },
  },
};
<\/script>
`,Pe=`<template>
  <t-space direction="vertical">
    <t-tree-select
      style="width: 300px"
      :data="options"
      v-model="value"
      clearable
      valueType="object"
      placeholder="\u8BF7\u9009\u62E9"
    />
    <t-tree-select
      style="width: 300px"
      :data="options"
      v-model="mulValue"
      clearable
      multiple
      valueType="object"
      placeholder="\u8BF7\u9009\u62E9"
    />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: { label: '\u6DF1\u5733\u5E02', value: 'shenzhen' },
      mulValue: [
        { label: '\u5E7F\u5DDE\u5E02', value: 'guangzhou' },
        { label: '\u6DF1\u5733\u5E02', value: 'shenzhen' },
      ],
      options: [
        {
          label: '\u5E7F\u4E1C\u7701',
          value: 'guangdong',
          children: [
            {
              label: '\u5E7F\u5DDE\u5E02',
              value: 'guangzhou',
            },
            {
              label: '\u6DF1\u5733\u5E02',
              value: 'shenzhen',
            },
          ],
        },
        {
          label: '\u6C5F\u82CF\u7701',
          value: 'jiangsu',
          children: [
            {
              label: '\u5357\u4EAC\u5E02',
              value: 'nanjing',
            },
            {
              label: '\u82CF\u5DDE\u5E02',
              value: 'suzhou',
            },
          ],
        },
      ],
    };
  },
};
<\/script>
`,je=`<template>
  <!-- :keys="treeProps.keys" -->
  <t-tree-select
    :data="options"
    v-model="value"
    clearable
    placeholder="\u8BF7\u9009\u62E9"
    :popupProps="popupProps"
    :treeProps="treeProps"
    style="width: 300px"
  />
</template>
<script>
export default {
  data() {
    return {
      value: 'shenzhen',
      options: [
        {
          name: '\u5E7F\u4E1C\u7701',
          pinyin: 'guangdong',
          children: [
            {
              name: '\u5E7F\u5DDE\u5E02',
              pinyin: 'guangzhou',
            },
            {
              name: '\u6DF1\u5733\u5E02',
              pinyin: 'shenzhen',
            },
          ],
        },
        {
          name: '\u6C5F\u82CF\u7701',
          pinyin: 'jiangsu',
          children: [
            {
              name: '\u5357\u4EAC\u5E02',
              pinyin: 'nanjing',
            },
            {
              name: '\u82CF\u5DDE\u5E02',
              pinyin: 'suzhou',
            },
          ],
        },
      ],
      popupProps: {
        overlayInnerStyle: {
          width: '500px',
        },
      },
      treeProps: {
        keys: {
          label: 'name',
          value: 'pinyin',
          children: 'children',
        },
      },
    };
  },
};
<\/script>
`,Se=`<template>
  <t-tree-select
    v-model="value"
    :data="options"
    clearable
    placeholder="\u8BF7\u9009\u62E9"
    :treeProps="{
      load: loadFunc,
    }"
    style="width: 300px"
  />
</template>
<script>
export default {
  data() {
    return {
      value: '',
      options: [
        {
          label: '\u9009\u98791',
          value: '1',
          children: true,
        },
        {
          label: '\u9009\u98792',
          value: '2',
          children: true,
        },
      ],
    };
  },
  methods: {
    loadFunc(node) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < 2) {
            nodes = [
              {
                label: \`\${node.label}.1\`,
                value: \`\${node.value}.1\`,
                children: true,
              },
              {
                label: \`\${node.label}.2\`,
                value: \`\${node.value}.2\`,
                children: true,
              },
            ];
          }
          resolve(nodes);
        }, 2000);
      });
    },
  },
};
<\/script>
`,we=`<template>
  <t-space direction="vertical">
    <t-tree-select
      v-model="value"
      :data="options"
      multiple
      clearable
      placeholder="\u8BF7\u9009\u62E9"
      :minCollapsedNum="1"
      style="width: 300px"
    >
    </t-tree-select>
    <t-tree-select
      v-model="slotValue"
      style="width: 300px"
      :data="options"
      multiple
      clearable
      placeholder="\u8BF7\u9009\u62E9"
      :minCollapsedNum="1"
    >
      <template slot="collapsedItems">
        <t-tag>\u66F4\u591A...</t-tag>
      </template>
    </t-tree-select>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: ['guangzhou', 'shenzhen'],
      slotValue: ['guangzhou', 'shenzhen'],
      options: [
        {
          label: '\u5E7F\u4E1C\u7701',
          value: 'guangdong',
          children: [
            {
              label: '\u5E7F\u5DDE\u5E02',
              value: 'guangzhou',
            },
            {
              label: '\u6DF1\u5733\u5E02',
              value: 'shenzhen',
            },
          ],
        },
        {
          label: '\u6C5F\u82CF\u7701',
          value: 'jiangsu',
          children: [
            {
              label: '\u5357\u4EAC\u5E02',
              value: 'nanjing',
            },
            {
              label: '\u82CF\u5DDE\u5E02',
              value: 'suzhou',
            },
          ],
        },
      ],
    };
  },
};
<\/script>
`,Ce=`<template>
  <t-space direction="vertical">
    <t-tree-select :data="options" v-model="value" clearable placeholder="\u8BF7\u9009\u62E9" style="width: 400px">
      <template #valueDisplay="{ value }" v-if="value"> {{ value.label }}({{ value.value }})</template>
    </t-tree-select>
    <t-tree-select
      :data="options"
      v-model="mulValue"
      multiple
      clearable
      filterable
      style="width: 400px"
      placeholder="\u8BF7\u9009\u62E9"
    >
      <template #valueDisplay="{ value, onClose }">
        <t-tag v-for="(item, index) in value" :key="index" closable :onClose="() => onClose(index)">
          {{ item.label }}({{ item.value }})
        </t-tag>
      </template>
    </t-tree-select>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      value: 'shenzhen',
      mulValue: ['shenzhen', 'guangzhou'],
      options: [
        {
          label: '\u5E7F\u4E1C\u7701',
          value: 'guangdong',
          children: [
            {
              label: '\u5E7F\u5DDE\u5E02',
              value: 'guangzhou',
            },
            {
              label: '\u6DF1\u5733\u5E02',
              value: 'shenzhen',
            },
          ],
        },
        {
          label: '\u6C5F\u82CF\u7701',
          value: 'jiangsu',
          children: [
            {
              label: '\u5357\u4EAC\u5E02',
              value: 'nanjing',
            },
            {
              label: '\u82CF\u5DDE\u5E02',
              value: 'suzhou',
            },
          ],
        },
      ],
    };
  },
};
<\/script>
`,se=[{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"filterable",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"valueType",type:"enum",defaultValue:"value",options:[{label:"value",value:"value"},{label:"object",value:"object"}]}],x={};x.setup=(e,n)=>{const l=i(se),a=[{label:"treeSelect",value:"treeSelect"}],t={treeSelect:`
        <t-tree-select v-bind="configProps"
          :data="[{
              label: '\u5E7F\u4E1C\u7701',
              value: 'guangdong',
              children: [{
                label: '\u5E7F\u5DDE\u5E02',
                value: 'guangzhou',
              }, {
                label: '\u6DF1\u5733\u5E02',
                value: 'shenzhen',
              }],
            }, {
              label: '\u6C5F\u82CF\u7701',
              value: 'jiangsu',
              children: [{
                label: '\u5357\u4EAC\u5E02',
                value: 'nanjing',
              }, {
                label: '\u82CF\u5DDE\u5E02',
                value: 'suzhou',
              }],
            }]"
        placeholder="\u8BF7\u9009\u62E9"
        />
      `},u=i(`<template>${t[a[0].value].trim()}</template>`);function r(s){u.value=`<template>${t[s].trim()}</template>`}return{configList:l,panelList:a,usageCode:u,onPanelChange:r}};var ie=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"treeSelect",fn:function(a){var t=a.configProps;return[l("t-tree-select",e._b({attrs:{data:[{label:"\u5E7F\u4E1C\u7701",value:"guangdong",children:[{label:"\u5E7F\u5DDE\u5E02",value:"guangzhou"},{label:"\u6DF1\u5733\u5E02",value:"shenzhen"}]},{label:"\u6C5F\u82CF\u7701",value:"jiangsu",children:[{label:"\u5357\u4EAC\u5E02",value:"nanjing"},{label:"\u82CF\u5DDE\u5E02",value:"suzhou"}]}],placeholder:"\u8BF7\u9009\u62E9"}},"t-tree-select",t,!1))]}}])})},ce=[];const _={};var pe=o(x,ie,ce,!1,de,null,null,null);function de(e){for(let n in _)this[n]=_[n]}const Te=function(){return pe.exports}();export{he as D,Te as U,me as a,be as b,ge as c,fe as d,_e as e,xe as f,ye as g,$e as h,Ve as i,ze as j,Pe as k,je as l,Se as m,we as n,Ce as o};
