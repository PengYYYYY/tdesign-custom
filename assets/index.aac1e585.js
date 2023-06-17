import{n as r,r as c}from"./index.4ab857ef.js";var x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-transfer",{attrs:{data:e.list,checked:e.checked},on:{"update:checked":function(a){e.checked=a},change:e.onChange,"checked-change":e.handleCheckedChange},model:{value:e.targetValue,callback:function(a){e.targetValue=a},expression:"targetValue"}})},y=[];const m=[];for(let e=0;e<20;e++)m.push({value:e.toString(),label:`\u5185\u5BB9${e+1}`,disabled:e%4<1});const V={data(){return{list:m,targetValue:[],checked:["2"]}},methods:{handleCheckedChange({checked:e,sourceChecked:n,targetChecked:t,type:a}){console.log("handleCheckedChange",{checked:e,sourceChecked:n,targetChecked:t,type:a})},onChange(e){console.log(e)}}},o={};var S=r(V,x,y,!1,L,null,null,null);function L(e){for(let n in o)this[n]=o[n]}const se=function(){return S.exports}();var P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-transfer",{attrs:{theme:"primary",data:e.list,"checked-value":e.checkedValue,search:!0},model:{value:e.targetValue,callback:function(a){e.targetValue=a},expression:"targetValue"}})},D=[];const v=[];for(let e=0;e<20;e++)v.push({value:e.toString(),label:`\u5185\u5BB9${e+1}`});const j={data(){return{list:v,targetValue:[],checkedValue:[]}}},i={};var M=r(j,P,D,!1,E,null,null,null);function E(e){for(let n in i)this[n]=i[n]}const ce=function(){return M.exports}();var F=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-transfer",{attrs:{theme:"primary",data:e.list,"checked-value":e.checkedValue,pagination:e.pagination,onPageChange:e.handlePageChange},model:{value:e.targetValue,callback:function(a){e.targetValue=a},expression:"targetValue"}})},R=[];const f=[];for(let e=0;e<20;e++)f.push({value:e.toString(),label:`\u5185\u5BB9${e+1}`});const w={data(){return{list:f,targetValue:[],checkedValue:[],pagination:[{pageSize:10,defaultCurrent:1},{pageSize:5,defaultCurrent:1}]}},methods:{handlePageChange(...e){console.log("handlePageChange",e)}}},u={};var z=r(w,F,R,!1,I,null,null,null);function I(e){for(let n in u)this[n]=u[n]}const oe=function(){return z.exports}(),_=[];for(let e=0;e<20;e++)_.push({value:e.toString(),label:`\u5185\u5BB9${e+1}`});const b=[];for(let e=0;e<20;e++)b.push({value:e.toString(),label:`\u5185\u5BB9${e+1}`,description:`\u7B2C${e+1}\u6BB5\u4FE1\u606F`});const T={data(){return{list:_,customList:b,targetValue:[],checkedValue:[],targetValue2:[],checkedValue2:[]}},methods:{transferItem(e,{data:n,index:t,type:a}){const l=e("span",{class:"transfer-item"},[n.label," - ",n.description]),s=e("span",{class:"transfer-item"},[t," - ",n.label]);return a==="source"?l:s}}};var B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("p",{staticStyle:{margin:"10px"}},[e._v("\u81EA\u5B9A\u4E49\u5934\u90E8\u3001\u5E95\u90E8\u53CA\u64CD\u4F5C\u6309\u94AE\u7684\u6E32\u67D3")]),t("t-transfer",{staticClass:"tdesign-transfer-custom",attrs:{data:e.list,operation:["\u79FB\u9664","\u52A0\u5165"]},scopedSlots:e._u([{key:"title",fn:function(a){return[t("div",[e._v(e._s(a.type==="target"?"\u76EE\u6807":"\u6765\u6E90"))])]}},{key:"operation",fn:function(a){return[e._v(" "+e._s(a.direction==="left"?"\u79FB\u9664":"\u52A0\u5165")+" ")]}},{key:"footer",fn:function(a){return[t("div",{staticStyle:{padding:"12px 20px"}},[a.type==="source"?t("span",[e._v("\u9009\u4E2D\u5E76\u52A0\u5165")]):t("span",[e._v("\u9009\u4E2D\u5E76\u79FB\u9664")])])]}}])}),t("br"),t("p",{staticStyle:{margin:"10px"}},[e._v("\u81EA\u5B9A\u4E49\u6E32\u67D3\u6570\u636E")]),t("t-transfer",{attrs:{theme:"primary",data:e.customList,"checked-value":e.checkedValue2,"transfer-item":e.transferItem},model:{value:e.targetValue2,callback:function(a){e.targetValue2=a},expression:"targetValue2"}})],1)},N=[];const d={};var U=r(T,B,N,!1,A,null,null,null);function A(e){for(let n in d)this[n]=d[n]}const ie=function(){return U.exports}();var J=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("p",{staticStyle:{margin:"10px 0"}},[e._v("\u9ED8\u8BA4\u6682\u65E0\u6570\u636E")]),t("t-transfer",{attrs:{data:e.list}}),t("p",{staticStyle:{margin:"10px"}},[e._v("\u81EA\u5B9A\u4E49\u7A7A\u72B6\u6001")]),t("t-transfer",{attrs:{data:e.list,empty:"No Data"}})],1)},q=[];const G=[],H={data(){return{list:G}}},p={};var K=r(H,J,q,!1,O,null,null,null);function O(e){for(let n in p)this[n]=p[n]}const ue=function(){return K.exports}();var Q=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-transfer",{attrs:{data:e.items,checked:e.checked},on:{"update:checked":function(a){e.checked=a},change:e.onChange,"checked-change":e.handleCheckedChange},scopedSlots:e._u([{key:"tree",fn:function(a){return[t("t-tree",{attrs:{data:a.data,checkable:"",hover:"","expand-all":"",transition:""},on:{change:a.onChange},model:{value:a.value,callback:function(l){e.$set(a,"value",l)},expression:"slotProps.value"}})]}}]),model:{value:e.targetValue,callback:function(a){e.targetValue=a},expression:"targetValue"}})},W=[];const X={data(){return{items:[{value:"1",label:"1",children:[{value:"1.1",label:"1.1"},{value:"1.2",label:"1.2",children:[{value:"1.2.1",label:"1.2.1",children:[{value:"1.2.1.1",label:"1.2.1.1"},{value:"1.2.1.2",label:"1.2.1.2"}]}]}]},{value:"2",label:"2",children:[{value:"2.1",label:"2.1"},{value:"2.2",label:"2.2"}]}],targetValue:[],checked:[]}},methods:{handleCheckedChange({checked:e,sourceChecked:n,targetChecked:t,type:a}){console.log("handleCheckedChange",{checked:e,sourceChecked:n,targetChecked:t,type:a})},onChange(e){console.log("onChange",e)}}},h={};var Y=r(X,Q,W,!1,Z,null,null,null);function Z(e){for(let n in h)this[n]=h[n]}const de=function(){return Y.exports}(),pe=`<template>
  <t-transfer
    :data="list"
    v-model="targetValue"
    :checked.sync="checked"
    @change="onChange"
    @checked-change="handleCheckedChange"
  />
</template>
<script>
const list = [];
for (let i = 0; i < 20; i++) {
  list.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
    disabled: i % 4 < 1,
  });
}
export default {
  data() {
    return {
      list,
      targetValue: [],
      checked: ['2'],
    };
  },
  methods: {
    handleCheckedChange({
      checked, sourceChecked, targetChecked, type,
    }) {
      console.log('handleCheckedChange', {
        checked,
        sourceChecked,
        targetChecked,
        type,
      });
    },
    onChange(newTargetValue) {
      console.log(newTargetValue);
    },
  },
};
<\/script>
`,he=`<template>
  <t-transfer theme="primary" :data="list" v-model="targetValue" :checked-value="checkedValue" :search="true" />
</template>
<script>
const list = [];
for (let i = 0; i < 20; i++) {
  list.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
  });
}
export default {
  data() {
    return {
      list,
      targetValue: [],
      checkedValue: [],
    };
  },
};
<\/script>
`,ge=`<template>
  <t-transfer
    theme="primary"
    :data="list"
    v-model="targetValue"
    :checked-value="checkedValue"
    :pagination="pagination"
    :onPageChange="handlePageChange"
  />
</template>
<script>
const list = [];
for (let i = 0; i < 20; i++) {
  list.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
  });
}
export default {
  data() {
    return {
      list,
      targetValue: [],
      checkedValue: [],
      pagination: [
        {
          pageSize: 10,
          defaultCurrent: 1,
        },
        {
          pageSize: 5,
          defaultCurrent: 1,
        },
      ],
    };
  },
  methods: {
    handlePageChange(...args) {
      console.log('handlePageChange', args);
    },
  },
};
<\/script>
`,me=`<template>
  <t-space direction="vertical">
    <p style="margin: 10px">\u81EA\u5B9A\u4E49\u5934\u90E8\u3001\u5E95\u90E8\u53CA\u64CD\u4F5C\u6309\u94AE\u7684\u6E32\u67D3</p>
    <t-transfer :data="list" :operation="['\u79FB\u9664', '\u52A0\u5165']" class="tdesign-transfer-custom">
      <template v-slot:title="props" :name="123">
        <div>{{ props.type === 'target' ? '\u76EE\u6807' : '\u6765\u6E90' }}</div>
      </template>
      <template v-slot:operation="props" :name="123">
        {{ props.direction === 'left' ? '\u79FB\u9664' : '\u52A0\u5165' }}
      </template>
      <template v-slot:footer="props" :name="123">
        <div style="padding: 12px 20px">
          <span v-if="props.type === 'source'">\u9009\u4E2D\u5E76\u52A0\u5165</span>
          <span v-else>\u9009\u4E2D\u5E76\u79FB\u9664</span>
        </div>
      </template>
    </t-transfer>
    <br />
    <p style="margin: 10px">\u81EA\u5B9A\u4E49\u6E32\u67D3\u6570\u636E</p>
    <t-transfer
      theme="primary"
      :data="customList"
      v-model="targetValue2"
      :checked-value="checkedValue2"
      :transfer-item="transferItem"
    >
    </t-transfer>
  </t-space>
</template>
<script lang="jsx">
const list = [];
for (let i = 0; i < 20; i++) {
  list.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
  });
}

const customList = [];
for (let i = 0; i < 20; i++) {
  customList.push({
    value: i.toString(),
    label: \`\u5185\u5BB9\${i + 1}\`,
    description: \`\u7B2C\${i + 1}\u6BB5\u4FE1\u606F\`,
  });
}
export default {
  data() {
    return {
      list,
      customList,
      targetValue: [],
      checkedValue: [],
      targetValue2: [],
      checkedValue2: [],
    };
  },
  methods: {
    transferItem(h, { data, index, type }) {
      const sourceLabel = (
        <span class="transfer-item">
          {data.label} - {data.description}
        </span>
      );
      const targetLabel = (
        <span class="transfer-item">
          {index} - {data.label}
        </span>
      );
      return type === 'source' ? sourceLabel : targetLabel;
    },
  },
};
<\/script>
<style>
.tdesign-transfer-custom .t-button .t-icon {
  display: none;
}
.tdesign-transfer-custom .t-icon + .t-button__text:not(:empty) {
  margin-left: 0;
}
</style>
`,ve=`<template>
  <t-space direction="vertical">
    <p style="margin: 10px 0">\u9ED8\u8BA4\u6682\u65E0\u6570\u636E</p>
    <t-transfer :data="list" />
    <p style="margin: 10px">\u81EA\u5B9A\u4E49\u7A7A\u72B6\u6001</p>
    <t-transfer :data="list" empty="No Data" />
  </t-space>
</template>
<script>
const list = [];
export default {
  data() {
    return {
      list,
    };
  },
};
<\/script>
`,fe=`<template>
  <t-transfer
    :data="items"
    v-model="targetValue"
    :checked.sync="checked"
    @change="onChange"
    @checked-change="handleCheckedChange"
  >
    <template v-slot:tree="slotProps">
      <t-tree
        :data="slotProps.data"
        v-model="slotProps.value"
        @change="slotProps.onChange"
        checkable
        hover
        expand-all
        transition
      />
    </template>
  </t-transfer>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
            },
            {
              value: '1.2',
              label: '1.2',
              children: [
                {
                  value: '1.2.1',
                  label: '1.2.1',
                  children: [
                    {
                      value: '1.2.1.1',
                      label: '1.2.1.1',
                    },
                    {
                      value: '1.2.1.2',
                      label: '1.2.1.2',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          value: '2',
          label: '2',
          children: [
            {
              value: '2.1',
              label: '2.1',
            },
            {
              value: '2.2',
              label: '2.2',
            },
          ],
        },
      ],
      targetValue: [],
      checked: [],
    };
  },
  methods: {
    handleCheckedChange({
      checked, sourceChecked, targetChecked, type,
    }) {
      console.log('handleCheckedChange', {
        checked,
        sourceChecked,
        targetChecked,
        type,
      });
    },
    onChange(newTargetValue) {
      console.log('onChange', newTargetValue);
    },
  },
};
<\/script>
`,ee=[{name:"direction",type:"enum",defaultValue:"both",options:[{label:"left",value:"left"},{label:"right",value:"right"},{label:"both",value:"both"}]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"search",type:"Boolean",defaultValue:!1,options:[]},{name:"showCheckAll",type:"Boolean",defaultValue:!0,options:[]},{name:"targetSort",type:"enum",defaultValue:"original",options:[{label:"original",value:"original"},{label:"push",value:"push"},{label:"unshift",value:"unshift"}]}],k={};k.setup=(e,n)=>{const t=c(ee),a=[{label:"transfer",value:"transfer"}],l={transfer:`
        <t-transfer :data="[{
          value: 1,
          label: '\u5185\u5BB91',
          disabled: false
        },{
          value: 2,
          label: '\u5185\u5BB92',
          disabled: true
        },{
          value: 3,
          label: '\u5185\u5BB93',
          disabled: false
        },]" v-bind="configProps" />
      `},s=c(`<template>${l[a[0].value].trim()}</template>`);function C($){s.value=`<template>${l[$].trim()}</template>`}return{configList:t,panelList:a,usageCode:s,onPanelChange:C}};var ne=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"transfer",fn:function(a){var l=a.configProps;return[t("t-transfer",e._b({attrs:{data:[{value:1,label:"\u5185\u5BB91",disabled:!1},{value:2,label:"\u5185\u5BB92",disabled:!0},{value:3,label:"\u5185\u5BB93",disabled:!1}]}},"t-transfer",l,!1))]}}])})},te=[];const g={};var ae=r(k,ne,te,!1,le,null,null,null);function le(e){for(let n in g)this[n]=g[n]}const _e=function(){return ae.exports}();export{se as D,_e as U,ce as a,oe as b,ie as c,ue as d,de as e,pe as f,he as g,ge as h,me as i,ve as j,fe as k};
