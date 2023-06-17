import{n as a,e as r,r as i}from"./index.06201486.js";var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-calendar")},P=[];const W={},c={};var M=a(W,D,P,!1,z,null,null,null);function z(e){for(let t in c)this[t]=c[t]}const Ne=function(){return M.exports}();var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical",size:"large"}},[n("t-space",{attrs:{size:"small",align:"center"}},[n("label",[e._v("\u8BF7\u9009\u62E9\u98CE\u683C\uFF1A")]),n("t-select",{model:{value:e.theme,callback:function(l){e.theme=l},expression:"theme"}},e._l(e.options,function(l){return n("t-option",{key:l.value,attrs:{value:l.value,label:l.label}})}),1),n("t-button",{attrs:{theme:"primary"},on:{click:function(l){return e.toCurrent()}}},[e._v(" \u4ECA\u5929\uFF08\u5F53\u524D\u9AD8\u4EAE\u65E5\u671F\uFF09 ")])],1),n("div",[n("label",[e._v("\u65E5\u671F\u8865\u96F6\uFF1A")]),n("t-switch",{attrs:{size:"large"},model:{value:e.fillWithZero,callback:function(l){e.fillWithZero=l},expression:"fillWithZero"}})],1),n("t-calendar",{ref:"myCalendar",attrs:{theme:e.theme,"is-show-weekend-default":!0,"fill-with-zero":e.fillWithZero}})],1)},j=[];const B={data(){return{theme:"card",isShowWeekendDefault:!0,fillWithZero:!0,options:[{value:"full",label:"\u5168\u5C4F\u98CE\u683C"},{value:"card",label:"\u5361\u7247\u98CE\u683C"}]}},methods:{toCurrent(){this.$refs.myCalendar&&this.$refs.myCalendar.toCurrent()}}},d={};var T=a(B,S,j,!1,R,"5e3ad658",null,null);function R(e){for(let t in d)this[t]=d[t]}const Ve=function(){return T.exports}();var E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-form",{attrs:{layout:"inline"}},[n("t-form-item",{attrs:{label:"\u81EA\u5DF1\u6307\u5B9A\u5E74\uFF1A"}},[n("t-input",{model:{value:e.year,callback:function(l){e.year=l},expression:"year"}})],1),n("t-form-item",{attrs:{label:"\u81EA\u5DF1\u6307\u5B9A\u5E74\u6708\uFF1A"}},[n("t-input",{model:{value:e.month,callback:function(l){e.month=l},expression:"month"}})],1)],1),n("h2",[e._v("\u5355\u4E2A\u9AD8\u4EAE\u65E5\u671F")]),n("t-calendar",{attrs:{value:e.value,year:e.year,month:e.month}}),n("br"),n("h2",[e._v("\u591A\u4E2A\u9AD8\u4EAE\u65E5\u671F")]),n("t-calendar",{attrs:{multiple:"",value:e.valueList,year:e.year,month:e.month}})],1)},F=[];const L={data(){return{year:"1998",month:"11",value:"1998-11-11",valueList:["1998-10-27","1998-11-11","1998-11-12","1998-11-13","1998-12-05"]}}},u={};var O=a(L,E,F,!1,Y,null,null,null);function Y(e){for(let t in u)this[t]=u[t]}const Ae=function(){return O.exports}();var Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-select",{staticClass:"demo-select-base",model:{value:e.mode,callback:function(l){e.mode=l},expression:"mode"}},e._l(e.options,function(l){return n("t-option",{key:l.value,attrs:{value:l.value,label:l.label}})}),1),n("t-calendar",{attrs:{mode:e.mode}})],1)},G=[];const N={data(){return{mode:"year",options:[{value:"month",label:"\u65E5\u5386"},{value:"year",label:"\u6708\u5386"}]}}},p={};var V=a(N,Z,G,!1,A,"63c03082",null,null);function A(e){for(let t in p)this[t]=p[t]}const He=function(){return V.exports}();var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-space",{attrs:{size:"small",align:"center"}},[n("label",[e._v("\u65E5\u5386\u7684\u7B2C\u4E00\u5217\u4E3A\uFF1A")]),n("t-select",{staticClass:"demo-select-base",model:{value:e.firstDayOfWeek,callback:function(l){e.firstDayOfWeek=l},expression:"firstDayOfWeek"}},e._l(e.options,function(l){return n("t-option",{key:l.value,attrs:{value:l.value,label:l.label}})}),1)],1),n("t-calendar",{attrs:{firstDayOfWeek:e.firstDayOfWeek}})],1)},U=[];const q={data(){return{firstDayOfWeek:3,options:[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}]}}},m={};var J=a(q,H,U,!1,I,"417edf88",null,null);function I(e){for(let t in m)this[t]=m[t]}const Ue=function(){return J.exports}();var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"controllerConfig-demo"},[e.controllerConfig?n("div",{staticStyle:{margin:"12px 0"}},[n("fieldset",[n("legend",[e._v("\u63A7\u4EF6\u5168\u5C40")]),n("p",[n("label",[e._v("\u662F\u5426\u663E\u793A\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.visible,callback:function(l){e.$set(e.controllerConfig,"visible",l)},expression:"controllerConfig.visible"}})],1),n("p",[n("label",[e._v("\u662F\u5426\u7981\u7528\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.disabled,callback:function(l){e.$set(e.controllerConfig,"disabled",l)},expression:"controllerConfig.disabled"}})],1)]),n("fieldset",[n("legend",[e._v("\u63A7\u4EF6\u5C40\u90E8")]),n("p",[n("label",[e._v("\u662F\u5426\u663E\u793A\u201C\u5E74\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.year.visible,callback:function(l){e.$set(e.controllerConfig.year,"visible",l)},expression:"controllerConfig.year.visible"}}),n("label",[e._v("\u662F\u5426\u7981\u7528\u201C\u5E74\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.year.selectProps.disabled,callback:function(l){e.$set(e.controllerConfig.year.selectProps,"disabled",l)},expression:"controllerConfig.year.selectProps.disabled"}})],1),n("p",[n("label",[e._v("\u662F\u5426\u663E\u793A\u201C\u6708\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.month.visible,callback:function(l){e.$set(e.controllerConfig.month,"visible",l)},expression:"controllerConfig.month.visible"}}),n("label",[e._v("\u662F\u5426\u7981\u7528\u201C\u6708\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.month.selectProps.disabled,callback:function(l){e.$set(e.controllerConfig.month.selectProps,"disabled",l)},expression:"controllerConfig.month.selectProps.disabled"}})],1),n("p",[n("label",[e._v("\u662F\u5426\u663E\u793A\u201C\u6A21\u5F0F\u5207\u6362\u201D\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.mode.visible,callback:function(l){e.$set(e.controllerConfig.mode,"visible",l)},expression:"controllerConfig.mode.visible"}}),n("label",[e._v("\u662F\u5426\u7981\u7528\u201C\u6A21\u5F0F\u5207\u6362\u201D\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.mode.radioGroupProps.disabled,callback:function(l){e.$set(e.controllerConfig.mode.radioGroupProps,"disabled",l)},expression:"controllerConfig.mode.radioGroupProps.disabled"}})],1),n("p",[n("label",[e._v("\u662F\u5426\u7981\u7528\u201C\u9690\u85CF\u5468\u672B\u201D\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.weekend.hideWeekendButtonProps.disabled,callback:function(l){e.$set(e.controllerConfig.weekend.hideWeekendButtonProps,"disabled",l)},expression:"controllerConfig.weekend.hideWeekendButtonProps.disabled"}}),n("label",[e._v("\u662F\u5426\u7981\u7528\u201C\u663E\u793A\u5468\u672B\u201D\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.weekend.showWeekendButtonProps.disabled,callback:function(l){e.$set(e.controllerConfig.weekend.showWeekendButtonProps,"disabled",l)},expression:"controllerConfig.weekend.showWeekendButtonProps.disabled"}}),n("label",[e._v("\u662F\u5426\u663E\u793A\u201C\u9690\u85CF\\\u663E\u793A\u5468\u672B\u201D\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.weekend.visible,callback:function(l){e.$set(e.controllerConfig.weekend,"visible",l)},expression:"controllerConfig.weekend.visible"}})],1),n("p",[n("label",[e._v("\u662F\u5426\u7981\u7528\u201C\u4ECA\u5929\u201D\u6309\u94AE\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.current.currentDayButtonProps.disabled,callback:function(l){e.$set(e.controllerConfig.current.currentDayButtonProps,"disabled",l)},expression:"controllerConfig.current.currentDayButtonProps.disabled"}}),n("label",[e._v("\u662F\u5426\u7981\u7528\u201C\u672C\u6708\u201D\u6309\u94AE\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.current.currentMonthButtonProps.disabled,callback:function(l){e.$set(e.controllerConfig.current.currentMonthButtonProps,"disabled",l)},expression:"controllerConfig.current.currentMonthButtonProps.disabled"}}),n("label",[e._v("\u662F\u5426\u663E\u793A\u201C\u4ECA\u5929\\\u672C\u6708\u201D\u63A7\u4EF6\uFF1A")]),n("t-switch",{model:{value:e.controllerConfig.current.visible,callback:function(l){e.$set(e.controllerConfig.current,"visible",l)},expression:"controllerConfig.current.visible"}})],1)])]):e._e(),n("t-calendar",{attrs:{controllerConfig:e.controllerConfig.visible?e.controllerConfig:!1}})],1)},Q=[];const X={data(){return{controllerConfig:{visible:!0,disabled:!1,year:{visible:!0,selectProps:{disabled:!1,size:"small"}},month:{visible:!0,selectProps:{disabled:!1,size:"small"}},mode:{visible:!0,radioGroupProps:{disabled:!1,size:"small"}},weekend:{visible:!0,showWeekendButtonProps:{disabled:!1,size:"medium"},hideWeekendButtonProps:{disabled:!1,variant:"base",size:"medium"}},current:{visible:!0,currentDayButtonProps:{disabled:!1,size:"small",theme:"warning"},currentMonthButtonProps:{disabled:!1,size:"small",theme:"success"}}}}}},v={};var ee=a(X,K,Q,!1,ne,"d91bf44a",null,null);function ne(e){for(let t in v)this[t]=v[t]}const qe=function(){return ee.exports}();var te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-calendar",{attrs:{range:e.range}})},le=[];const ae={data(){return{range:["2018-08","2028-04"]}}},f={};var oe=a(ae,te,le,!1,re,null,null,null);function re(e){for(let t in f)this[t]=f[t]}const Je=function(){return oe.exports}(),se={data(){return{week:["\u661F\u671F1","\u661F\u671F2","\u661F\u671F3","\u661F\u671F4","\u661F\u671F5","\u661F\u671F6","\u661F\u671F\u5929"]}},methods:{renderWeek(e,t){return t.day===3?e("span",{style:"color:#dd4a68"},["\u5468\u4E09\u5566"]):t.day===6||t.day===7?e("span",{style:"color:#0052d9"},["\u653E\u5047\u5566"]):e("span",[`\u661F\u671F${t.day}`])}}};var ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column-large"},[n("t-space",{attrs:{direction:"vertical"}},[n("h3",[e._v("\u4F7F\u7528\u63D2\u69FD")]),n("t-calendar",{scopedSlots:e._u([{key:"week",fn:function(l){return[e._v(" "+e._s(l.day===7?"\u661F\u671F\u5929":`\u661F\u671F${l.day}`)+" ")]}}])})],1),n("t-space",{attrs:{direction:"vertical"}},[n("h3",[e._v("\u4F7F\u7528week\u5C5E\u6027 - Array")]),n("t-calendar",{attrs:{week:e.week,firstDayOfWeek:7}})],1),n("t-space",{attrs:{direction:"vertical"}},[n("h3",[e._v("\u4F7F\u7528week\u5C5E\u6027 - TNode")]),n("t-calendar",{attrs:{week:e.renderWeek}})],1)],1)},ce=[];const _={};var de=a(se,ie,ce,!1,ue,null,null,null);function ue(e){for(let t in _)this[t]=_[t]}const Ie=function(){return de.exports}();var pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo-block-column-large"},[n("t-calendar",{on:{"cell-click":e.cellClick,"cell-double-click":e.cellDoubleClick,"cell-right-click":e.cellRightClick,"month-change":e.monthChange,"controller-change":e.controllerChange}})],1)},me=[];const ve={data(){return{cellClickTimmer:null}},methods:{cellClick(e){clearTimeout(this.cellClickTimmer),this.cellClickTimmer=setTimeout(()=>{console.log(`\u9F20\u6807\u5DE6\u952E\u5355\u51FB\u5355\u5143\u683C ${e.cell.formattedDate}`)},300)},cellDoubleClick(e){clearTimeout(this.cellClickTimmer),console.log(`\u9F20\u6807\u53CC\u51FB\u5355\u5143\u683C ${e.cell.formattedDate}`)},cellRightClick(e){console.log(`\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u5143\u683C ${e.cell.formattedDate}`)},monthChange(e){console.log(`\u6708\u4EFD\u5207\u6362 ${e.year}-${e.month}`)},controllerChange(e){console.log("\u63A7\u4EF6\u503C\u53D8\u5316",e)}}},h={};var fe=a(ve,pe,me,!1,_e,"46693e3c",null,null);function _e(e){for(let t in h)this[t]=h[t]}const Ke=function(){return fe.exports}();var he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-calendar",[n("div",{attrs:{slot:"head"},slot:"head"},[e._v("\u{1F5D3} TDesign\u5F00\u53D1\u8BA1\u5212")])])},be=[];const ge={},b={};var ye=a(ge,he,be,!1,Ce,null,null,null);function Ce(e){for(let t in b)this[t]=b[t]}const Qe=function(){return ye.exports}();var xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-calendar",{scopedSlots:e._u([{key:"cellAppend",fn:function(l){return[e.getShow(l)?n("div",{staticClass:"cell-append-demo-outer"},[n("t-tag",{staticClass:"activeTag",staticStyle:{width:"100%"},attrs:{theme:"success",variant:"light",size:"small"}},[e._v(" "+e._s(l.mode=="month"?"\u6211\u4EEC\u7684\u7EAA\u5FF5\u65E5":"\u6211\u4EEC\u7684\u7EAA\u5FF5\u6708")+" ")]),n("t-tag",{staticClass:"activeTag",staticStyle:{width:"100%"},attrs:{theme:"warning",variant:"light",size:"small"}},[e._v(" "+e._s((l.mode=="month","\u5BB6\u5EAD\u805A\u4F1A"))+" ")])],1):e._e()]}}])})},ke=[];const we={methods:{getShow(e){return e.mode==="month"?r().format("YYYY-MM-DD")===e.formattedDate:e.date.getMonth()===new Date().getMonth()}}},g={};var $e=a(we,xe,ke,!1,De,null,null,null);function De(e){for(let t in g)this[t]=g[t]}const Xe=function(){return $e.exports}();var Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-calendar",{scopedSlots:e._u([{key:"cell",fn:function(l){return n("div",{staticClass:"outerWrapper"},[n("div",{staticClass:"number"},[e._v(e._s(e.displayNum(l)))]),e.isShow(l)?[n("div",{staticClass:"slotWrapper"},e._l(e.dataList,function(o,s){return n("div",{key:s,staticClass:"item"},[n("span",{class:o.value}),e._v(" "+e._s(o.label)+" ")])}),0),n("div",{staticClass:"shadow"})]:e._e()],2)}}])})},We=[];const Me={data(){return{dataList:[{value:"error",label:"\u9519\u8BEF\u4E8B\u4EF6"},{value:"warning",label:"\u8B66\u544A\u4E8B\u4EF6"},{value:"success",label:"\u6B63\u5E38\u4E8B\u4EF6"}]}},methods:{isShow(e){return e.mode==="month"?r(e.formattedDate).date()===15:r(e.formattedDate).month()===7},displayNum(e){return e.mode==="month"?e.date.getDate():e.date.getMonth()+1}}},y={};var ze=a(Me,Pe,We,!1,Se,"70651b6e",null,null);function Se(e){for(let t in y)this[t]=y[t]}const en=function(){return ze.exports}(),je={methods:{renderHead(e,t){let n=t.filterDate.getFullYear();return t.mode==="month"&&(n+=`-${t.filterDate.getMonth()+1}`),n+=" \u5DE5\u4F5C\u5B89\u6392",e("div",[n])},renderCell(e,t){const n=[{value:"error",label:"\u9519\u8BEF\u4E8B\u4EF6"},{value:"warning",label:"\u8B66\u544A\u4E8B\u4EF6"},{value:"success",label:"\u6B63\u5E38\u4E8B\u4EF6"}];return e("div",{class:"calendar-slot-props-api-demo"},[(t.mode==="month"?r(t.formattedDate).date()===15:r(t.formattedDate).month()===7)&&e("span",[e("div",{class:"calendar-slot-props-api-demo-slot-wrapper"},[n.map(l=>e("div",{class:"item"},[e("span",{class:l.value}),l.label]))]),e("div",{class:"shadow"})]),e("div",{class:"number"},[t.mode==="year"?r(t.formattedDate).month():r(t.formattedDate).date()])])}}};var Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-calendar",{attrs:{head:e.renderHead,cell:e.renderCell}})},Te=[];const C={};var Re=a(je,Be,Te,!1,Ee,null,null,null);function Ee(e){for(let t in C)this[t]=C[t]}const nn=function(){return Re.exports}(),tn=`<template>
  <t-calendar />
</template>
<script><\/script>
`,ln=`<template>
  <t-space direction="vertical" size="large">
    <t-space size="small" align="center">
      <label>\u8BF7\u9009\u62E9\u98CE\u683C\uFF1A</label>
      <t-select v-model="theme">
        <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
      </t-select>
      <t-button theme="primary" @click="toCurrent()"> \u4ECA\u5929\uFF08\u5F53\u524D\u9AD8\u4EAE\u65E5\u671F\uFF09 </t-button>
    </t-space>
    <div>
      <label>\u65E5\u671F\u8865\u96F6\uFF1A</label>
      <t-switch v-model="fillWithZero" size="large" />
    </div>
    <t-calendar ref="myCalendar" :theme="theme" :is-show-weekend-default="true" :fill-with-zero="fillWithZero" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      theme: 'card',
      isShowWeekendDefault: true,
      fillWithZero: true,
      options: [
        { value: 'full', label: '\u5168\u5C4F\u98CE\u683C' },
        { value: 'card', label: '\u5361\u7247\u98CE\u683C' },
      ],
    };
  },
  methods: {
    toCurrent() {
      if (this.$refs.myCalendar) {
        this.$refs.myCalendar.toCurrent();
      }
    },
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 200px;
  display: inline-block;
  margin: 0 10px 0 0;
}
</style>
`,an=`<template>
  <t-space direction="vertical">
    <t-form layout="inline">
      <t-form-item label="\u81EA\u5DF1\u6307\u5B9A\u5E74\uFF1A">
        <t-input v-model="year" />
      </t-form-item>
      <t-form-item label="\u81EA\u5DF1\u6307\u5B9A\u5E74\u6708\uFF1A">
        <t-input v-model="month" />
      </t-form-item>
    </t-form>

    <h2>\u5355\u4E2A\u9AD8\u4EAE\u65E5\u671F</h2>
    <t-calendar :value="value" :year="year" :month="month" />

    <br />

    <h2>\u591A\u4E2A\u9AD8\u4EAE\u65E5\u671F</h2>
    <!-- \u8FD9\u91CC\u8BF7\u6CE8\u610F multiple \u5C5E\u6027\uFF08\u9700\u8981\u8BBE\u4E3A true\uFF09 -->
    <t-calendar multiple :value="valueList" :year="year" :month="month" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      year: '1998',
      month: '11',
      value: '1998-11-11', // new Date(1998, 10, 11)
      valueList: ['1998-10-27', '1998-11-11', '1998-11-12', '1998-11-13', '1998-12-05'],
    };
  },
};
<\/script>
`,on=`<template>
  <t-space direction="vertical">
    <t-select v-model="mode" class="demo-select-base">
      <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
    </t-select>
    <t-calendar :mode="mode"></t-calendar>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      mode: 'year',
      options: [
        { value: 'month', label: '\u65E5\u5386' },
        { value: 'year', label: '\u6708\u5386' },
      ],
    };
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 200px;
  display: inline-block;
  margin: 0 10px 0 0;
}
</style>
`,rn=`<template>
  <t-space direction="vertical">
    <t-space size="small" align="center">
      <label>\u65E5\u5386\u7684\u7B2C\u4E00\u5217\u4E3A\uFF1A</label>
      <t-select v-model="firstDayOfWeek" class="demo-select-base">
        <t-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" />
      </t-select>
    </t-space>
    <t-calendar :firstDayOfWeek="firstDayOfWeek"></t-calendar>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      firstDayOfWeek: 3,
      options: [
        { value: 1, label: '\u5468\u4E00' },
        { value: 2, label: '\u5468\u4E8C' },
        { value: 3, label: '\u5468\u4E09' },
        { value: 4, label: '\u5468\u56DB' },
        { value: 5, label: '\u5468\u4E94' },
        { value: 6, label: '\u5468\u516D' },
        { value: 7, label: '\u5468\u65E5' },
      ],
    };
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 200px;
  display: inline-block;
  margin: 0 10px 0 0;
}
</style>
`,sn=`<template>
  <div class="controllerConfig-demo">
    <div v-if="controllerConfig" style="margin: 12px 0">
      <fieldset>
        <legend>\u63A7\u4EF6\u5168\u5C40</legend>
        <p>
          <label>\u662F\u5426\u663E\u793A\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09\uFF1A</label>
          <t-switch v-model="controllerConfig.visible"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u7981\u7528\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09\uFF1A</label>
          <t-switch v-model="controllerConfig.disabled"></t-switch>
        </p>
      </fieldset>

      <fieldset>
        <legend>\u63A7\u4EF6\u5C40\u90E8</legend>
        <p>
          <label>\u662F\u5426\u663E\u793A\u201C\u5E74\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.year.visible"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u5E74\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.year.selectProps.disabled"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u663E\u793A\u201C\u6708\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.month.visible"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u6708\u4EFD\u9009\u62E9\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.month.selectProps.disabled"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u663E\u793A\u201C\u6A21\u5F0F\u5207\u6362\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.mode.visible"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u6A21\u5F0F\u5207\u6362\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.mode.radioGroupProps.disabled"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u7981\u7528\u201C\u9690\u85CF\u5468\u672B\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.weekend.hideWeekendButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u663E\u793A\u5468\u672B\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.weekend.showWeekendButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u663E\u793A\u201C\u9690\u85CF\\\u663E\u793A\u5468\u672B\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.weekend.visible"></t-switch>
        </p>
        <p>
          <label>\u662F\u5426\u7981\u7528\u201C\u4ECA\u5929\u201D\u6309\u94AE\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.current.currentDayButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u7981\u7528\u201C\u672C\u6708\u201D\u6309\u94AE\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.current.currentMonthButtonProps.disabled"></t-switch>
          <label>\u662F\u5426\u663E\u793A\u201C\u4ECA\u5929\\\u672C\u6708\u201D\u63A7\u4EF6\uFF1A</label>
          <t-switch v-model="controllerConfig.current.visible"></t-switch>
        </p>
      </fieldset>
    </div>
    <t-calendar :controllerConfig="controllerConfig.visible ? controllerConfig : false"></t-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      controllerConfig: {
        visible: true,
        disabled: false, // \u662F\u5426\u7981\u7528\uFF08\u5168\u90E8\u63A7\u4EF6\uFF09
        // \u5E74\u4EFD\u9009\u62E9\u6846\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
        year: {
          visible: true, // \u662F\u5426\u663E\u793A
          selectProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u8BE5select\u7EC4\u4EF6
            disabled: false,
            size: 'small',
          },
        },
        // \u6708\u4EFD\u9009\u62E9\u6846\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
        month: {
          visible: true, // \u662F\u5426\u663E\u793A\uFF08\u201Cyear\u201D\u6A21\u5F0F\u4E0B\u672C\u8EAB\u662F\u4E0D\u663E\u793A\u8BE5\u7EC4\u4EF6\u7684\uFF09
          selectProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u8BE5select\u7EC4\u4EF6
            disabled: false,
            size: 'small',
          },
        },
        // \u6A21\u5F0F\u5207\u6362\u5355\u9009\u7EC4\u4EF6\u8BBE\u7F6E
        mode: {
          visible: true, // \u662F\u5426\u663E\u793A
          radioGroupProps: {
            disabled: false,
            size: 'small',
          },
        },
        // \u9690\u85CF\\\u663E\u793A\u5468\u672B\u6309\u94AE\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
        weekend: {
          visible: true, // \u662F\u5426\u663E\u793A
          showWeekendButtonProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u663E\u793A\u5468\u672B\u6309\u94AE\u7EC4\u4EF6
            disabled: false,
            size: 'medium',
          },
          hideWeekendButtonProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u9690\u85CF\u5468\u672B\u6309\u94AE\u7EC4\u4EF6
            disabled: false,
            variant: 'base',
            size: 'medium',
          },
        },
        // \u201C\u4ECA\u5929\\\u672C\u6708\u201D\u6309\u94AE\u7EC4\u4EF6\u76F8\u5173\u8BBE\u7F6E
        current: {
          visible: true, // \u662F\u5426\u663E\u793A
          currentDayButtonProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u201C\u4ECA\u5929\u201D\u94AE\u7EC4\u4EF6\uFF08\u201Cmonth\u201D\u6A21\u5F0F\u4E0B\u6709\u6548\uFF09
            disabled: false,
            size: 'small',
            theme: 'warning',
          },
          currentMonthButtonProps: {
            // \u7528\u4E8E\u900F\u4F20props\u7ED9\u201C\u672C\u6708\u201D\u6309\u94AE\u7EC4\u4EF6\uFF08\u201Cyear\u201D\u6A21\u5F0F\u4E0B\u6709\u6548\uFF09
            disabled: false,
            size: 'small',
            theme: 'success',
          },
        },
      },
    };
  },
};
<\/script>

<style scoped>
.controllerConfig-demo fieldset {
  border: solid 1px #eee;
  padding: 10px 20px 10px 0;
  margin-bottom: 10px;
}
.controllerConfig-demo fieldset legend {
  margin-left: 20px;
  padding: 0 10px;
}
.controllerConfig-demo fieldset p {
  margin-bottom: 5px;
}
.controllerConfig-demo fieldset p label {
  margin-left: 20px;
}
</style>
`,cn=`<template>
  <t-calendar :range="range"></t-calendar>
</template>

<script>
export default {
  data() {
    return {
      range: [
        '2018-08', // new Date(2017, 7),
        '2028-04', // new Date(2027, 3),
      ],
    };
  },
};
<\/script>
`,dn=`<template>
  <div class="tdesign-demo-block-column-large">
    <t-space direction="vertical">
      <h3>\u4F7F\u7528\u63D2\u69FD</h3>
      <t-calendar>
        <template slot="week" slot-scope="scope">
          {{ scope.day === 7 ? '\u661F\u671F\u5929' : \`\u661F\u671F\${scope.day}\` }}
        </template>
      </t-calendar>
    </t-space>

    <t-space direction="vertical">
      <h3>\u4F7F\u7528week\u5C5E\u6027 - Array</h3>
      <t-calendar :week="week" :firstDayOfWeek="7"></t-calendar>
    </t-space>

    <t-space direction="vertical">
      <h3>\u4F7F\u7528week\u5C5E\u6027 - TNode</h3>
      <t-calendar :week="renderWeek"></t-calendar>
    </t-space>
  </div>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      week: ['\u661F\u671F1', '\u661F\u671F2', '\u661F\u671F3', '\u661F\u671F4', '\u661F\u671F5', '\u661F\u671F6', '\u661F\u671F\u5929'],
    };
  },
  methods: {
    renderWeek(h, params) {
      if (params.day === 3) return <span style="color:#dd4a68">\u5468\u4E09\u5566</span>;
      if (params.day === 6 || params.day === 7) return <span style="color:#0052d9">\u653E\u5047\u5566</span>;
      return <span>{\`\u661F\u671F\${params.day}\`}</span>;
    },
  },
};
<\/script>
`,un=`<template>
  <div class="tdesign-demo-block-column-large">
    <t-calendar
      @cell-click="cellClick"
      @cell-double-click="cellDoubleClick"
      @cell-right-click="cellRightClick"
      @month-change="monthChange"
      @controller-change="controllerChange"
    ></t-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // \u5355\u5143\u683C\u5355\u51FB\u548C\u53CC\u51FB\u4E8B\u4EF6\u5171\u5B58\u7684\u65F6\u5019\uFF0C\u53CC\u51FB\u4E8B\u4EF6\u4F1A\u89E6\u53D1\u5355\u51FB\u4E8B\u4EF6\uFF08\u4E24\u6B21\uFF09\uFF0C\u8FD9\u201C\u53EF\u80FD\u4E0D\u662F\u201D\u6B63\u786E\u7684\u6548\u679C\uFF0C
      // \u8FD9\u79CD\u573A\u666F\u4E0B\u5EFA\u8BAE\u5BF9\u5355\u51FB\u4E8B\u4EF6\u8FDB\u884C\u5EF6\u8FDF\u5904\u7406\uFF08\u8BE6\u89C1\u4E0B\u9762 cellClick \u548C cellDoubleClick \u7684\u4EE3\u7801\uFF09
      cellClickTimmer: null,
    };
  },
  methods: {
    cellClick(options) {
      clearTimeout(this.cellClickTimmer); // \u7528\u4E8E\u5728\u53CC\u51FB\u4E8B\u4EF6\u4E2D\u53D6\u6D88\u6389\u989D\u5916\u89E6\u53D1\u7684\u4E00\u6B21\u5355\u51FB\u4E8B\u4EF6
      this.cellClickTimmer = setTimeout(() => {
        console.log(\`\u9F20\u6807\u5DE6\u952E\u5355\u51FB\u5355\u5143\u683C \${options.cell.formattedDate}\`);
      }, 300);
    },
    cellDoubleClick(options) {
      clearTimeout(this.cellClickTimmer); // \u7528\u4E8E\u5728\u53CC\u51FB\u4E8B\u4EF6\u4E2D\u53D6\u6D88\u6389\u989D\u5916\u89E6\u53D1\u53E6\u5916\u4E00\u6B21\u5355\u51FB\u4E8B\u4EF6
      console.log(\`\u9F20\u6807\u53CC\u51FB\u5355\u5143\u683C \${options.cell.formattedDate}\`);
    },
    cellRightClick(options) {
      console.log(\`\u9F20\u6807\u53F3\u952E\u70B9\u51FB\u5143\u683C \${options.cell.formattedDate}\`);
    },
    monthChange(options) {
      console.log(\`\u6708\u4EFD\u5207\u6362 \${options.year}-\${options.month}\`);
    },
    controllerChange(data) {
      console.log('\u63A7\u4EF6\u503C\u53D8\u5316', data);
    },
  },
};
<\/script>

<style scoped>
.demo-list {
  max-height: 130px;
  overflow: auto;
  border: 1px solid #eeeeee;
  border-top: none 0;
  border-bottom: none 0;
}
</style>
`,pn=`<template>
  <t-calendar>
    <div slot="head">\u{1F5D3} TDesign\u5F00\u53D1\u8BA1\u5212</div>
  </t-calendar>
</template>
`,mn=`<template>
  <t-calendar>
    <template slot="cellAppend" slot-scope="data">
      <div v-if="getShow(data)" class="cell-append-demo-outer">
        <t-tag theme="success" variant="light" size="small" class="activeTag" style="width: 100%">
          {{ data.mode == 'month' ? '\u6211\u4EEC\u7684\u7EAA\u5FF5\u65E5' : '\u6211\u4EEC\u7684\u7EAA\u5FF5\u6708' }}
        </t-tag>
        <t-tag theme="warning" variant="light" size="small" class="activeTag" style="width: 100%">
          {{ data.mode == 'month' ? '\u5BB6\u5EAD\u805A\u4F1A' : '\u5BB6\u5EAD\u805A\u4F1A' }}
        </t-tag>
      </div>
    </template>
  </t-calendar>
</template>

<script>
import dayjs from 'dayjs';

export default {
  methods: {
    getShow(data) {
      return data.mode === 'month'
        ? dayjs().format('YYYY-MM-DD') === data.formattedDate
        : data.date.getMonth() === new Date().getMonth();
    },
  },
};
<\/script>
`,vn=`<template>
  <t-calendar>
    <div slot="cell" slot-scope="data" class="outerWrapper">
      <div class="number">{{ displayNum(data) }}</div>
      <template v-if="isShow(data)">
        <div class="slotWrapper">
          <div v-for="(item, index) in dataList" :key="index" class="item">
            <span :class="item.value"></span>
            {{ item.label }}
          </div>
        </div>
        <div class="shadow" />
      </template>
    </div>
  </t-calendar>
</template>

<script>
import dayjs from 'dayjs';

export default {
  data() {
    return {
      dataList: [
        {
          value: 'error',
          label: '\u9519\u8BEF\u4E8B\u4EF6',
        },
        {
          value: 'warning',
          label: '\u8B66\u544A\u4E8B\u4EF6',
        },
        {
          value: 'success',
          label: '\u6B63\u5E38\u4E8B\u4EF6',
        },
      ],
    };
  },
  methods: {
    isShow(data) {
      return data.mode === 'month' ? dayjs(data.formattedDate).date() === 15 : dayjs(data.formattedDate).month() === 7;
    },
    displayNum(cellData) {
      if (cellData.mode === 'month') {
        return cellData.date.getDate();
      }
      return cellData.date.getMonth() + 1;
    },
  },
};
<\/script>

<style lang="less" scoped>
.outerWrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .shadow {
    position: absolute;
    width: 100%;
    height: 22px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  }
  .number {
    font-weight: 600;
    position: absolute;
    right: 0;
    font-size: 14px;
    line-height: 22px;
  }
  .item {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--td-text-color-secondary);
    font-size: 14px;
    line-height: 22px;
    span {
      display: block;
      left: 1px;
      width: 5px;
      height: 5px;
      border-radius: 10px;
      margin-right: 4px;
    }
  }
  .error {
    background: var(--td-error-color);
  }
  .warning {
    background: var(--td-warning-color);
  }
  .success {
    background: var(--td-success-color);
  }

  .slotWrapper {
    position: absolute;
    bottom: 2px;
    left: 5px;
  }
}
</style>
`,fn=`<template>
  <t-calendar :head="renderHead" :cell="renderCell"> </t-calendar>
</template>

<script lang="jsx">
import dayjs from 'dayjs';

export default {
  methods: {
    renderHead(h, params) {
      let title = params.filterDate.getFullYear();
      if (params.mode === 'month') {
        title += \`-\${params.filterDate.getMonth() + 1}\`;
      }
      title += ' \u5DE5\u4F5C\u5B89\u6392';
      return <div>{title}</div>;
    },
    renderCell(h, params) {
      const dataList = [
        {
          value: 'error',
          label: '\u9519\u8BEF\u4E8B\u4EF6',
        },
        {
          value: 'warning',
          label: '\u8B66\u544A\u4E8B\u4EF6',
        },
        {
          value: 'success',
          label: '\u6B63\u5E38\u4E8B\u4EF6',
        },
      ];
      return (
        <div class="calendar-slot-props-api-demo">
          {(params.mode === 'month'
            ? dayjs(params.formattedDate).date() === 15
            : dayjs(params.formattedDate).month() === 7) && (
            <span>
              <div class="calendar-slot-props-api-demo-slot-wrapper">
                {dataList.map((item) => (
                  <div class="item">
                    <span class={item.value}></span>
                    {item.label}
                  </div>
                ))}
              </div>
              <div class="shadow" />
            </span>
          )}
          <div class="number">
            {params.mode === 'year' ? dayjs(params.formattedDate).month() : dayjs(params.formattedDate).date()}
          </div>
        </div>
      );
    },
  },
};
<\/script>
<style lang="less">
.calendar-slot-props-api-demo {
  width: 100%;
  height: 100%;
  position: relative;

  .shadow {
    position: absolute;
    width: 100%;
    height: 12px;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  }
  .number {
    font-weight: bold;
    position: absolute;
    top: 3px;
    right: 5px;
    font-size: 14px;
  }
  .item {
    position: relative;
    display: flex;
    align-items: center;
    color: var(--td-text-color-secondary);
    span {
      display: block;
      left: 1px;
      width: 5px;
      height: 5px;
      border-radius: 10px;
      margin-right: 4px;
    }
  }
  .error {
    background: var(--td-error-color);
  }
  .warning {
    background: var(--td-warning-color);
  }
  .success {
    background: var(--td-success-color);
  }
}
.calendar-slot-props-api-demo-slot-wrapper {
  position: absolute;
  bottom: 2px;
  left: 5px;
}
</style>
`,Fe=[{name:"controllerConfig",type:"Boolean",defaultValue:!1,options:[]},{name:"fillWithZero",type:"Boolean",defaultValue:!1,options:[]},{name:"isShowWeekendDefault",type:"Boolean",defaultValue:!0,options:[]},{name:"mode",type:"enum",defaultValue:"month",options:[{label:"month",value:"month"},{label:"year",value:"year"}]},{name:"preventCellContextmenu",type:"Boolean",defaultValue:!1,options:[]},{name:"theme",type:"enum",defaultValue:"full",options:[{label:"full",value:"full"},{label:"card",value:"card"}]}],k={};k.setup=(e,t)=>{const n=i(Fe),l=[{label:"calendar",value:"calendar"}],o={calendar:'<t-calendar v-bind="configProps" />'},s=i(`<template>${o[l[0].value].trim()}</template>`);function w($){s.value=`<template>${o[$].trim()}</template>`}return{configList:n,panelList:l,usageCode:s,onPanelChange:w}};var Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"calendar",fn:function(l){var o=l.configProps;return[n("t-calendar",e._b({},"t-calendar",o,!1))]}}])})},Oe=[];const x={};var Ye=a(k,Le,Oe,!1,Ze,null,null,null);function Ze(e){for(let t in x)this[t]=x[t]}const _n=function(){return Ye.exports}();export{Ne as D,_n as U,Ve as a,Ae as b,He as c,Ue as d,qe as e,Je as f,Ie as g,Ke as h,Qe as i,Xe as j,en as k,nn as l,tn as m,ln as n,an as o,on as p,rn as q,sn as r,cn as s,dn as t,un as u,pn as v,mn as w,vn as x,fn as y};
