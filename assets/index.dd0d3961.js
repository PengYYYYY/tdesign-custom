import{n as l,r}from"./index.ba4b8fbd.js";var k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-time-picker",{on:{change:e.timechange,open:e.open,close:e.close,pick:e.pick},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},x=[];const C={name:"hms",data(){return{value:"12:20:30"}},methods:{timechange(e){console.log(e)},open(){console.log("open")},close(){console.log("close")},pick(e){console.log(e)}}},i={};var y=l(C,k,x,!1,D,null,null,null);function D(e){for(let n in i)this[n]=i[n]}const ge=function(){return y.exports}();var P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("h3",[e._v("\u65F6\u5206\u9009\u62E9")]),t("t-time-picker",{attrs:{format:"HH:mm"}}),t("h3",[e._v("\u6BEB\u79D2\u9009\u62E9")]),t("t-time-picker",{attrs:{"default-value":"12:59:59:000",format:"HH:mm:ss:SSS"}})],1)},S=[];const H={name:"showSecond",data(){return{}}},c={};var w=l(H,P,S,!1,R,null,null,null);function R(e){for(let n in c)this[n]=c[n]}const $e=function(){return w.exports}();var M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-time-picker",{attrs:{steps:[1,2,3]}})},j=[];const V={},u={};var E=l(V,M,j,!1,F,null,null,null);function F(e){for(let n in u)this[n]=u[n]}const be=function(){return E.exports}();var I=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-time-picker",{attrs:{format:"A hh:mm:ss",placeholder:"\u9009\u62E9\u65F6\u95F4"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},T=[];const B={name:"twelveHours",data(){return{value:"PM 10:20:30"}}},m={};var L=l(B,I,T,!1,z,null,null,null);function z(e){for(let n in m)this[n]=m[n]}const ke=function(){return L.exports}();var A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",[t("t-time-range-picker",{staticClass:"demos",attrs:{clearable:"",format:"HH:mm:ss","allow-input":""},on:{pick:e.handleRangePick},model:{value:e.time,callback:function(a){e.time=a},expression:"time"}})],1)},U=[];const q={name:"timeRange",data(){return{time:["00:00:00","23:59:59"]}},methods:{handleRangePick(e){console.log("picked range time is",e)}}},p={};var J=l(q,A,U,!1,G,null,null,null);function G(e){for(let n in p)this[n]=p[n]}const xe=function(){return J.exports}();var K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("h3",[e._v("\u5141\u8BB8\u8F93\u5165")]),t("t-time-picker",{attrs:{allowInput:""},on:{blur:e.blur,focus:e.focus},model:{value:e.time1,callback:function(a){e.time1=a},expression:"time1"}}),t("h3",[e._v("\u7981\u6B62\u8F93\u5165")]),t("t-time-picker",{attrs:{allowInput:!1},model:{value:e.time2,callback:function(a){e.time2=a},expression:"time2"}})],1)},N=[];const O={name:"canInput",data(){return{time1:"20:22:33",time2:"22:22:22"}},methods:{blur(e){console.log("blur"),console.log(e)},focus(e){console.log("focus"),console.log(e)}}},_={};var Q=l(O,K,N,!1,W,null,null,null);function W(e){for(let n in _)this[n]=_[n]}const Ce=function(){return Q.exports}();var X=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("h3",[e._v("\u5177\u5907\u6E05\u7A7A\u6309\u94AE")]),t("t-time-picker",{attrs:{clearable:""},model:{value:e.time1,callback:function(a){e.time1=a},expression:"time1"}}),t("h3",[e._v("\u7981\u6B62\u6E05\u7A7A\u6309\u94AE")]),t("t-time-picker",{attrs:{clearable:!1}})],1)},Y=[];const Z={name:"clearable",data(){return{time1:"11:12:10"}}},d={};var ee=l(Z,X,Y,!1,ne,null,null,null);function ne(e){for(let n in d)this[n]=d[n]}const ye=function(){return ee.exports}();var te=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("h3",[e._v("\u7981\u7528\u6574\u4E2A\u9009\u62E9\u5668")]),t("t-time-picker",{attrs:{disabled:!0},model:{value:e.time1,callback:function(a){e.time1=a},expression:"time1"}}),t("h3",[e._v("\u7981\u7528\u6307\u5B9A\u65F6\u95F4")]),t("t-time-picker",{attrs:{"disable-time":e.disableTime}})],1)},ae=[];const le={name:"Disabled",data(){return{time1:"11:12:10"}},methods:{disableTime(e){const n=[1,2,3];return e>4?{hour:n,minute:[30,31,32,33,34]}:{hour:n}}}},v={};var oe=l(le,te,ae,!1,se,null,null,null);function se(e){for(let n in v)this[n]=v[n]}const De=function(){return oe.exports}();var re=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.usage,callback:function(a){e.usage=a},expression:"usage"}},[t("t-radio-button",{attrs:{value:"single"}},[e._v("\u5355\u72EC\u4F7F\u7528\u9762\u677F")]),t("t-radio-button",{attrs:{value:"combine"}},[e._v("\u7EC4\u5408\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528")])],1),e.usage==="single"?t("t-time-picker-panel",{attrs:{value:e.value},on:{change:e.handleChange}}):t("t-popup",[t("t-input",{style:{width:"200px"},attrs:{value:e.inputValue,readonly:"",placeholder:"\u914D\u5408\u8F93\u5165\u6846\u7EC4\u4EF6\u7EC4\u5408\u4F7F\u7528"}}),t("t-time-picker-panel",{attrs:{slot:"content",value:e.value},on:{change:e.handleChange},slot:"content"})],1)],1)},ie=[];const ce={data(){return{usage:"single",value:"11:11:11",inputValue:""}},methods:{handleChange(e){this.value=e,this.inputValue=e}}},h={};var ue=l(ce,re,ie,!1,me,null,null,null);function me(e){for(let n in h)this[n]=h[n]}const Pe=function(){return ue.exports}(),Se=`<template>
  <t-time-picker v-model="value" @change="timechange" @open="open" @close="close" @pick="pick" />
</template>

<script>
export default {
  name: 'hms',
  data() {
    return {
      value: '12:20:30',
    };
  },
  methods: {
    timechange(time) {
      console.log(time);
    },
    open() {
      console.log('open');
    },
    close() {
      console.log('close');
    },
    pick(v) {
      console.log(v);
    },
  },
};
<\/script>
`,He=`<template>
  <t-space direction="vertical">
    <h3>\u65F6\u5206\u9009\u62E9</h3>
    <t-time-picker format="HH:mm" />
    <h3>\u6BEB\u79D2\u9009\u62E9</h3>
    <t-time-picker default-value="12:59:59:000" format="HH:mm:ss:SSS" />
  </t-space>
</template>

<script>
export default {
  name: 'showSecond',
  data() {
    return {};
  },
};
<\/script>
`,we=`<template>
  <t-time-picker :steps="[1, 2, 3]" />
</template>
`,Re=`<template>
  <t-time-picker v-model="value" format="A hh:mm:ss" placeholder="\u9009\u62E9\u65F6\u95F4" />
</template>

<script>
export default {
  name: 'twelveHours',
  data() {
    return {
      value: 'PM 10:20:30',
    };
  },
};
<\/script>
`,Me=`<template>
  <t-space>
    <t-time-range-picker class="demos" clearable v-model="time" format="HH:mm:ss" allow-input @pick="handleRangePick" />
  </t-space>
</template>

<script>
export default {
  name: 'timeRange',
  data() {
    return {
      time: ['00:00:00', '23:59:59'],
    };
  },
  methods: {
    handleRangePick(v) {
      console.log('picked range time is', v);
    },
  },
};
<\/script>
`,je=`<template>
  <t-space direction="vertical">
    <h3>\u5141\u8BB8\u8F93\u5165</h3>
    <t-time-picker v-model="time1" allowInput @blur="blur" @focus="focus" />
    <h3>\u7981\u6B62\u8F93\u5165</h3>
    <t-time-picker v-model="time2" :allowInput="false" />
  </t-space>
</template>

<script>
export default {
  name: 'canInput',
  data() {
    return {
      time1: '20:22:33',
      time2: '22:22:22',
    };
  },
  methods: {
    blur(v) {
      console.log('blur');
      console.log(v);
    },
    focus(v) {
      console.log('focus');
      console.log(v);
    },
  },
};
<\/script>
`,Ve=`<template>
  <t-space direction="vertical">
    <h3>\u5177\u5907\u6E05\u7A7A\u6309\u94AE</h3>
    <t-time-picker v-model="time1" clearable />
    <h3>\u7981\u6B62\u6E05\u7A7A\u6309\u94AE</h3>
    <t-time-picker :clearable="false" />
  </t-space>
</template>

<script>
export default {
  name: 'clearable',
  data() {
    return {
      time1: '11:12:10',
    };
  },
};
<\/script>
`,Ee=`<template>
  <t-space direction="vertical">
    <h3>\u7981\u7528\u6574\u4E2A\u9009\u62E9\u5668</h3>
    <t-time-picker v-model="time1" :disabled="true" />
    <h3>\u7981\u7528\u6307\u5B9A\u65F6\u95F4</h3>
    <t-time-picker :disable-time="disableTime" />
  </t-space>
</template>

<script>
export default {
  name: 'Disabled',
  data() {
    return {
      time1: '11:12:10',
    };
  },
  methods: {
    disableTime(h) {
      const disableHour = [1, 2, 3];
      if (h > 4) {
        return {
          hour: disableHour,
          minute: [30, 31, 32, 33, 34],
        };
      }
      return {
        hour: disableHour,
      };
    },
  },
};
<\/script>
`,Fe=`<template>
  <t-space direction="vertical">
    <t-radio-group v-model="usage" variant="default-filled">
      <t-radio-button value="single">\u5355\u72EC\u4F7F\u7528\u9762\u677F</t-radio-button>
      <t-radio-button value="combine">\u7EC4\u5408\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528</t-radio-button>
    </t-radio-group>
    <t-time-picker-panel :value="value" @change="handleChange" v-if="usage === 'single'" />
    <t-popup v-else>
      <t-input :style="{ width: '200px' }" :value="inputValue" readonly placeholder="\u914D\u5408\u8F93\u5165\u6846\u7EC4\u4EF6\u7EC4\u5408\u4F7F\u7528"></t-input>
      <t-time-picker-panel slot="content" :value="value" @change="handleChange" />
    </t-popup>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      usage: 'single',
      value: '11:11:11',
      inputValue: '',
    };
  },
  methods: {
    handleChange(v) {
      this.value = v;
      this.inputValue = v;
    },
  },
};
<\/script>
`,pe=[{name:"allowInput",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"hideDisabledTime",type:"Boolean",defaultValue:!0,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]}],g={};g.setup=(e,n)=>{const t=r(pe),a=[{label:"timePicker",value:"timePicker"}],o={timePicker:'<t-timePicker v-bind="configProps" />'},s=r(`<template>${o[a[0].value].trim()}</template>`);function $(b){s.value=`<template>${o[b].trim()}</template>`}return{configList:t,panelList:a,usageCode:s,onPanelChange:$}};var _e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"timePicker",fn:function(a){var o=a.configProps;return[t("t-timePicker",e._b({},"t-timePicker",o,!1))]}}])})},de=[];const f={};var ve=l(g,_e,de,!1,he,null,null,null);function he(e){for(let n in f)this[n]=f[n]}const Ie=function(){return ve.exports}();export{ge as D,Ie as U,$e as a,be as b,ke as c,xe as d,Ce as e,ye as f,De as g,Pe as h,Se as i,He as j,we as k,Re as l,Me as m,je as n,Ve as o,Ee as p,Fe as q};
