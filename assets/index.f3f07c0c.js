import{n as l,v as r,B as Y,r as i}from"./index.7bc89517.js";import{L as j}from"./lock-on.d8f143df.js";var w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-date-picker",{attrs:{mode:"year",clearable:"","allow-input":""}}),a("t-date-range-picker",{attrs:{mode:"year",clearable:"","allow-input":""}})],1)},M=[];const V={},d={};var R=l(V,w,M,!1,S,null,null,null);function S(e){for(let t in d)this[t]=d[t]}const Te=function(){return R.exports}();var E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-date-picker",{attrs:{mode:"month",clearable:"","allow-input":""}}),a("t-date-range-picker",{attrs:{mode:"month",clearable:"","allow-input":""}})],1)},F=[];const I={},p={};var B=l(I,E,F,!1,O,null,null,null);function O(e){for(let t in p)this[t]=p[t]}const Je=function(){return B.exports}();var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-date-picker",{attrs:{mode:"quarter",clearable:"","allow-input":""}}),a("t-date-range-picker",{attrs:{mode:"quarter",clearable:"","allow-input":""}})],1)},q=[];const L={},u={};var T=l(L,W,q,!1,J,null,null,null);function J(e){for(let t in u)this[t]=u[t]}const Ue=function(){return T.exports}();var U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-date-picker",{attrs:{mode:"week",clearable:"","allow-input":""}}),a("t-date-range-picker",{attrs:{mode:"week",clearable:"","allow-input":""}})],1)},z=[];const A={},m={};var G=l(A,U,z,!1,H,null,null,null);function H(e){for(let t in m)this[t]=m[t]}const ze=function(){return G.exports}();var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-date-picker",{attrs:{firstDayOfWeek:3,inputProps:e.inputProps},on:{change:e.handleChange},model:{value:e.date2,callback:function(n){e.date2=n},expression:"date2"}}),a("t-date-picker",{attrs:{placeholder:"\u53EF\u6E05\u9664\u3001\u53EF\u8F93\u5165\u7684\u65E5\u671F\u9009\u62E9\u5668",clearable:"","allow-input":""},on:{change:e.handleChange},model:{value:e.date,callback:function(n){e.date=n},expression:"date"}})],1)},N=[];const Q={data(){return{date:"",date2:"",firstDayOfWeek:3,inputProps:{inputClass:"test-inputClass"},presets:{\u6628\u5929:r().subtract(1,"day").format("YYYY-MM-DD")},timePickerProps:{value:"13:00:00"}}},methods:{handleChange(e,t){console.log("onChange:",e,t),console.log("timestamp:",t.dayjsValue.valueOf()),console.log("YYYYMMDD:",t.dayjsValue.format("YYYYMMDD"))}}},_={};var X=l(Q,K,N,!1,Z,null,null,null);function Z(e){for(let t in _)this[t]=_[t]}const Ae=function(){return X.exports}();var ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-date-picker",{attrs:{"enable-time-picker":"","allow-input":"",clearable:""}}),a("t-date-picker",{attrs:{"enable-time-picker":"","allow-input":"",clearable:"",format:"YYYY-MM-DD a hh:mm:ss"}})],1)},te=[];const ae={},f={};var ne=l(ae,ee,te,!1,le,null,null,null);function le(e){for(let t in f)this[t]=f[t]}const Ge=function(){return ne.exports}();var re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-date-range-picker",{attrs:{"allow-input":"",clearable:""},on:{pick:e.onPick,change:e.onChange}}),a("t-date-range-picker",{attrs:{"enable-time-picker":"","allow-input":"",clearable:""},on:{pick:e.onPick,change:e.onChange}})],1)},oe=[];const ce={methods:{onPick(e,t){console.log("onPick:",e,t)},onChange(e,t){console.log("onChange:",e,t),console.log("timestamp:",t.dayjsValue.map(a=>a.valueOf())),console.log("YYYYMMDD:",t.dayjsValue.map(a=>a.format("YYYYMMDD")))}}},v={};var se=l(ce,re,oe,!1,ie,null,null,null);function ie(e){for(let t in v)this[t]=v[t]}const He=function(){return se.exports}();var de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-date-range-picker",{attrs:{presets:e.presets},model:{value:e.range1,callback:function(n){e.range1=n},expression:"range1"}}),a("t-date-range-picker",{attrs:{presets:e.presets,"enable-time-picker":""},model:{value:e.range2,callback:function(n){e.range2=n},expression:"range2"}})],1)},pe=[];const ue={data(){return{presets:{\u6700\u8FD17\u5929:[r().subtract(6,"day").toDate(),r().toDate()],\u6700\u8FD13\u5929:[r().subtract(2,"day").toDate(),r().toDate()],\u4ECA\u5929:[r().toDate(),r().toDate()]},range1:["2022-01-01","2022-08-08"],range2:["2022-01-01 00:00:00","2022-08-08 23:59:59"]}}},k={};var me=l(ue,de,pe,!1,_e,null,null,null);function _e(e){for(let t in k)this[t]=k[t]}const Ke=function(){return me.exports}();var fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-date-picker",{attrs:{placeholder:"\u7981\u7528\u6628\u5929\u3001\u524D\u5929","disable-date":[e.dayjs().subtract(1,"day").format(),e.dayjs().subtract(2,"day").format()]}}),a("t-date-picker",{attrs:{placeholder:"\u660E\u540E\u4E09\u5929\u7981\u7528","disable-date":{from:e.dayjs().add(1,"day").format(),to:e.dayjs().add(3,"day").format()}}}),a("t-date-picker",{attrs:{placeholder:"\u7981\u7528\u6240\u6709\u5468\u516D","disable-date":function(n){return e.dayjs(n).day()===6}}}),a("t-date-picker",{attrs:{placeholder:"\u7981\u7528\u6700\u8FD1 3 \u5929\u5916\u7684\u65E5\u671F","disable-date":{before:e.dayjs().subtract(3,"day").format(),after:e.dayjs().add(3,"day").format()}}}),a("t-date-picker",{attrs:{placeholder:"\u7981\u7528\u65E5\u671F\u7CBE\u786E\u5230\u65F6\u95F4","enable-time-picker":"","disable-date":{before:e.dayjs().subtract(1,"day").format()},"time-picker-props":e.timePickerProps},on:{pick:function(n){return e.pickDate=e.dayjs(n).format("YYYY-MM-DD")}}}),a("t-date-range-picker",{attrs:{placeholder:"\u7981\u7528\u6700\u8FD1 5 \u5929\u5916\u7684\u65E5\u671F","disable-date":{before:e.dayjs().subtract(5,"day").format(),after:e.dayjs().add(5,"day").format()}}})],1)},ve=[];const ke={data(){return{pickDate:"",dayjs:r}},computed:{timePickerProps(){return{disableTime:()=>this.pickDate===r().format("YYYY-MM-DD")?{hour:[0,1,2,3,4,5,6]}:{}}}}},h={};var he=l(ke,fe,ve,!1,be,null,null,null);function be(e){for(let t in h)this[t]=h[t]}const Ne=function(){return he.exports}();var ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.startWeek,callback:function(n){e.startWeek=n},expression:"startWeek"}},e._l(e.list,function(n){return a("t-radio-button",{key:n,attrs:{value:n}},[e._v(e._s(n))])}),1),a("t-date-picker",{attrs:{"first-day-of-week":e.startWeek}})],1)},ye=[];const Ce={data(){return{startWeek:1,list:[1,2,3,4,5,6,7]}}},b={};var $e=l(Ce,ge,ye,!1,xe,null,null,null);function xe(e){for(let t in b)this[t]=b[t]}const Qe=function(){return $e.exports}(),De={components:{LockOnIcon:j},data(){const e=this.$createElement;return{renderPrefixIcon:()=>e(Y)}}};var Pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("t-date-picker",{attrs:{clearable:"","prefix-icon":e.renderPrefixIcon},scopedSlots:e._u([{key:"suffixIcon",fn:function(){return[a("lock-on-icon")]},proxy:!0}])})],1)},Ye=[];const g={};var je=l(De,Pe,Ye,!1,we,null,null,null);function we(e){for(let t in g)this[t]=g[t]}const Xe=function(){return je.exports}();var Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("t-space",{attrs:{direction:"vertical"}},[a("div",{staticClass:"date-picker-panel-border"},[a("t-date-picker-panel",{attrs:{"on-change":e.handleChange},on:{"panel-click":e.handlePanelClick,"cell-click":e.handleCellClick}})],1),a("div",{staticClass:"date-picker-panel-border"},[a("t-date-picker-panel",{attrs:{"enable-time-picker":"","on-change":e.handleChange},on:{"panel-click":e.handlePanelClick,"cell-click":e.handleCellClick}})],1),a("div",{staticClass:"date-picker-panel-border"},[a("t-date-range-picker-panel",{attrs:{"on-change":e.handleChange,value:["2022-02-16","2022-02-21"]},on:{"panel-click":e.handlePanelClick,"cell-click":e.handleCellClick}})],1),a("div",{staticClass:"date-picker-panel-border"},[a("t-date-range-picker-panel",{attrs:{"enable-time-picker":"","on-change":e.handleChange},on:{"panel-click":e.handlePanelClick,"cell-click":e.handleCellClick}})],1)])},Ve=[];const Re={methods:{handleChange(e){console.log("onChange value",e)},handleCellClick(e){console.log("onCellClick value",e)},handlePanelClick(e){console.log("onPanelClick",e)}}},y={};var Se=l(Re,Me,Ve,!1,Ee,null,null,null);function Ee(e){for(let t in y)this[t]=y[t]}const Ze=function(){return Se.exports}(),et=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="year" clearable allow-input />
    <t-date-range-picker mode="year" clearable allow-input />
  </t-space>
</template>
`,tt=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="month" clearable allow-input />
    <t-date-range-picker mode="month" clearable allow-input />
  </t-space>
</template>
`,at=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="quarter" clearable allow-input />
    <t-date-range-picker mode="quarter" clearable allow-input />
  </t-space>
</template>
`,nt=`<template>
  <t-space direction="vertical">
    <t-date-picker mode="week" clearable allow-input />
    <t-date-range-picker mode="week" clearable allow-input />
  </t-space>
</template>
`,lt=`<template>
  <t-space direction="vertical">
    <t-date-picker v-model="date2" @change="handleChange" :firstDayOfWeek="3" :inputProps="inputProps" />
    <t-date-picker
      v-model="date"
      placeholder="\u53EF\u6E05\u9664\u3001\u53EF\u8F93\u5165\u7684\u65E5\u671F\u9009\u62E9\u5668"
      clearable
      allow-input
      @change="handleChange"
    />
  </t-space>
</template>

<script>
import dayjs from 'dayjs';

export default {
  data() {
    return {
      date: '',
      date2: '',
      firstDayOfWeek: 3,
      inputProps: { inputClass: 'test-inputClass' },
      presets: {
        \u6628\u5929: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
      },
      timePickerProps: {
        value: '13:00:00',
      },
    };
  },
  methods: {
    handleChange(value, context) {
      console.log('onChange:', value, context);
      console.log('timestamp:', context.dayjsValue.valueOf());
      console.log('YYYYMMDD:', context.dayjsValue.format('YYYYMMDD'));
    },
  },
};
<\/script>
`,rt=`<template>
  <t-space direction="vertical">
    <t-date-picker enable-time-picker allow-input clearable />
    <t-date-picker enable-time-picker allow-input clearable format="YYYY-MM-DD a hh:mm:ss" />
  </t-space>
</template>
`,ot=`<template>
  <t-space direction="vertical">
    <t-date-range-picker allow-input clearable @pick="onPick" @change="onChange" />
    <t-date-range-picker enable-time-picker allow-input clearable @pick="onPick" @change="onChange" />
  </t-space>
</template>

<script>
export default {
  methods: {
    onPick(value, context) {
      console.log('onPick:', value, context);
    },
    onChange(value, context) {
      console.log('onChange:', value, context);
      console.log(
        'timestamp:',
        context.dayjsValue.map((d) => d.valueOf()),
      );
      console.log(
        'YYYYMMDD:',
        context.dayjsValue.map((d) => d.format('YYYYMMDD')),
      );
    },
  },
};
<\/script>
`,ct=`<template>
  <t-space direction="vertical">
    <t-date-range-picker v-model="range1" :presets="presets" />
    <t-date-range-picker v-model="range2" :presets="presets" enable-time-picker />
  </t-space>
</template>

<script>
import dayjs from 'dayjs';

export default {
  data() {
    return {
      presets: {
        \u6700\u8FD17\u5929: [dayjs().subtract(6, 'day').toDate(), dayjs().toDate()],
        \u6700\u8FD13\u5929: [dayjs().subtract(2, 'day').toDate(), dayjs().toDate()],
        \u4ECA\u5929: [dayjs().toDate(), dayjs().toDate()],
      },
      range1: ['2022-01-01', '2022-08-08'],
      range2: ['2022-01-01 00:00:00', '2022-08-08 23:59:59'],
    };
  },
};
<\/script>
`,st=`<template>
  <t-space direction="vertical">
    <t-date-picker
      placeholder="\u7981\u7528\u6628\u5929\u3001\u524D\u5929"
      :disable-date="[dayjs().subtract(1, 'day').format(), dayjs().subtract(2, 'day').format()]"
    />
    <t-date-picker
      placeholder="\u660E\u540E\u4E09\u5929\u7981\u7528"
      :disable-date="{
        from: dayjs().add(1, 'day').format(),
        to: dayjs().add(3, 'day').format(),
      }"
    />
    <t-date-picker placeholder="\u7981\u7528\u6240\u6709\u5468\u516D" :disable-date="(date) => dayjs(date).day() === 6" />
    <t-date-picker
      placeholder="\u7981\u7528\u6700\u8FD1 3 \u5929\u5916\u7684\u65E5\u671F"
      :disable-date="{
        before: dayjs().subtract(3, 'day').format(),
        after: dayjs().add(3, 'day').format(),
      }"
    />
    <t-date-picker
      placeholder="\u7981\u7528\u65E5\u671F\u7CBE\u786E\u5230\u65F6\u95F4"
      enable-time-picker
      :disable-date="{ before: dayjs().subtract(1, 'day').format() }"
      :time-picker-props="timePickerProps"
      @pick="(date) => (pickDate = dayjs(date).format('YYYY-MM-DD'))"
    />
    <t-date-range-picker
      placeholder="\u7981\u7528\u6700\u8FD1 5 \u5929\u5916\u7684\u65E5\u671F"
      :disable-date="{
        before: dayjs().subtract(5, 'day').format(),
        after: dayjs().add(5, 'day').format(),
      }"
    />
  </t-space>
</template>

<script>
import dayjs from 'dayjs';

export default {
  data() {
    return { pickDate: '', dayjs };
  },
  computed: {
    timePickerProps() {
      return {
        disableTime: () => {
          if (this.pickDate === dayjs().format('YYYY-MM-DD')) {
            return {
              hour: [0, 1, 2, 3, 4, 5, 6],
            };
          }
          return {};
        },
      };
    },
  },
};
<\/script>
`,it=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="startWeek" variant="default-filled">
      <t-radio-button v-for="i in list" :key="i" :value="i">{{ i }}</t-radio-button>
    </t-radio-group>

    <t-date-picker :first-day-of-week="startWeek" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      startWeek: 1,
      list: [1, 2, 3, 4, 5, 6, 7],
    };
  },
};
<\/script>
`,dt=`<template>
  <t-space direction="vertical">
    <t-date-picker clearable :prefix-icon="renderPrefixIcon">
      <template #suffixIcon>
        <lock-on-icon />
      </template>
    </t-date-picker>
  </t-space>
</template>

<script lang="jsx">
import { BrowseIcon, LockOnIcon } from 'tdesign-icons-vue';

export default {
  components: {
    LockOnIcon,
  },
  data() {
    return {
      renderPrefixIcon: () => <BrowseIcon />,
    };
  },
};
<\/script>
`,pt=`<template>
  <t-space direction="vertical">
    <div class="date-picker-panel-border">
      <t-date-picker-panel @panel-click="handlePanelClick" @cell-click="handleCellClick" :on-change="handleChange" />
    </div>
    <div class="date-picker-panel-border">
      <t-date-picker-panel
        enable-time-picker
        @panel-click="handlePanelClick"
        @cell-click="handleCellClick"
        :on-change="handleChange"
      />
    </div>

    <div class="date-picker-panel-border">
      <t-date-range-picker-panel
        @panel-click="handlePanelClick"
        @cell-click="handleCellClick"
        :on-change="handleChange"
        :value="['2022-02-16', '2022-02-21']"
      />
    </div>
    <div class="date-picker-panel-border">
      <t-date-range-picker-panel
        enable-time-picker
        @panel-click="handlePanelClick"
        @cell-click="handleCellClick"
        :on-change="handleChange"
      />
    </div>
  </t-space>
</template>

<script>
export default {
  methods: {
    handleChange(value) {
      console.log('onChange value', value);
    },
    handleCellClick(value) {
      console.log('onCellClick value', value);
    },
    handlePanelClick(ctx) {
      console.log('onPanelClick', ctx);
    },
  },
};
<\/script>

<style>
.date-picker-panel-border {
  border: 1px solid var(--td-border-level-2-color);
  width: fit-content;
  border-radius: 3;
}
</style>
`,C=[{name:"allowInput",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"enableTimePicker",type:"Boolean",defaultValue:!1,options:[]},{name:"mode",type:"enum",defaultValue:"date",options:[{label:"year",value:"year"},{label:"quarter",value:"quarter"},{label:"month",value:"month"},{label:"week",value:"week"},{label:"date",value:"date"}]},{name:"presetsPlacement",type:"enum",defaultValue:"bottom",options:[{label:"left",value:"left"},{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"}]}],Fe=[{name:"allowInput",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"enableTimePicker",type:"Boolean",defaultValue:!1,options:[]},{name:"mode",type:"enum",defaultValue:"date",options:[{label:"year",value:"year"},{label:"quarter",value:"quarter"},{label:"month",value:"month"},{label:"week",value:"week"},{label:"date",value:"date"}]},{name:"presetsPlacement",type:"enum",defaultValue:"bottom",options:[{label:"left",value:"left"},{label:"top",value:"top"},{label:"right",value:"right"},{label:"bottom",value:"bottom"}]}],x={};x.setup=(e,t)=>{const a=i(C),n=[{label:"datePicker",value:"datePicker",config:C},{label:"dateRangePicker",value:"dateRangePicker",config:Fe}],o={datePicker:'<t-date-picker v-bind="configProps" />',dateRangePicker:'<t-date-range-picker v-bind="configProps" />'},c=i(`<template>${o[n[0].value].trim()}</template>`);function D(s){a.value=n.find(P=>P.value===s).config,c.value=`<template>${o[s].trim()}</template>`}return{configList:a,panelList:n,usageCode:c,onPanelChange:D}};var Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"datePicker",fn:function(n){var o=n.configProps;return[a("t-date-picker",e._b({},"t-date-picker",o,!1))]}},{key:"dateRangePicker",fn:function(n){var o=n.configProps;return[a("t-date-range-picker",e._b({},"t-date-range-picker",o,!1))]}}])})},Be=[];const $={};var Oe=l(x,Ie,Be,!1,We,null,null,null);function We(e){for(let t in $)this[t]=$[t]}const ut=function(){return Oe.exports}();export{Te as D,ut as U,Je as a,Ue as b,ze as c,Ae as d,Ge as e,He as f,Ke as g,Ne as h,Qe as i,Xe as j,Ze as k,et as l,tt as m,at as n,nt as o,lt as p,rt as q,ot as r,ct as s,st as t,it as u,dt as v,pt as w};
