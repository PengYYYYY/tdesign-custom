import{v as se,y as ue,r as I,z as ce,D as pe,F as me,i as M,G as de,T as ve,P as q,n as P}from"./index.0d6d9eb3.js";import{c as he,u as B,a as fe,b as _e,d as ge,S as ke,_ as J,p as Ce,v as H,f as Pe,T as O,R as Ie}from"./index.2db17279.js";import{w as Y}from"./withInstall.4adcce94.js";/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function Q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,a)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Q(Object(t),!0).forEach(function(a){M(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}se.extend(he);var xe=ue({name:"TTimePicker",props:R({},Ce),setup:function(n,t){var a=B("classPrefix"),c=a.classPrefix,v=fe("time-picker"),k=_e({TimeIcon:ve}),$=k.TimeIcon,h=I(""),b=I(!1),_=B("timePicker"),r=_.global,g=ce(n),E=g.value,T=ge(E,n.defaultValue,n.onChange,"change"),D=pe(T,2),x=D[0],S=D[1],j=me(function(){return["".concat(v.value,"__group"),M({},"".concat(c.value,"-is-focused"),b.value)]}),y=function(o,p){if(b.value=o,o){var s;(s=n.onOpen)===null||s===void 0||s.call(n,p),t.emit("open",p)}else{var l;(l=n.onClose)===null||l===void 0||l.call(n,p),t.emit("close",p)}},F=function(o){var p=o.e;p.stopPropagation(),h.value=null,S(null)},A=function(o){h.value=o},z=function(o,p){var s,l=p.e;if(n.allowInput){var i=H(h.value,n.format);i&&S(Pe(h.value,n.format))}(s=n.onBlur)===null||s===void 0||s.call(n,{value:o,e:l}),t.emit("blur",{value:o,e:l})},N=function(){var o=H(h.value,n.format);o&&S(h.value),b.value=!1},G=function(o){h.value=o},L=function(o){var p;(p=n.onFocus)===null||p===void 0||p.call(n,o),t.emit("focus",o)},K=function(o){var p;(p=n.onPick)===null||p===void 0||p.call(n,o),t.emit("pick",o)};return de(function(){return b.value},function(){var m;h.value=b.value&&(m=x.value)!==null&&m!==void 0?m:""}),{handleClickConfirm:N,handlePanelChange:G,handleInputBlur:z,handleInputChange:A,handleClear:F,handleShowPopup:y,handleOnFocus:L,handleOnPick:K,inputClasses:j,componentName:v,innerValue:x,isShowPanel:b,global:r,currentValue:h,TimeIcon:$}},render:function(){var n,t,a=this,c=arguments[0],v=this.TimeIcon;return c("div",{class:this.componentName},[c(ke,{props:R({},{onFocus:this.handleOnFocus,onClear:this.handleClear,onBlur:this.handleInputBlur,onInputChange:this.handleInputChange,disabled:this.disabled,clearable:this.clearable,allowInput:this.allowInput,class:this.inputClasses,suffixIcon:function(){return c(v)},popupVisible:this.isShowPanel,placeholder:this.innerValue?void 0:this.placeholder||this.global.placeholder,value:this.isShowPanel?this.currentValue:(n=this.innerValue)!==null&&n!==void 0?n:void 0,inputValue:this.isShowPanel?this.currentValue:(t=this.innerValue)!==null&&t!==void 0?t:void 0,inputProps:this.inputProps,panel:function(){return c(J,{props:R({},{steps:a.steps,format:a.format,value:a.currentValue,isFooterDisplay:!0,isShowPanel:a.isShowPanel,disableTime:a.disableTime,onChange:a.handlePanelChange,onPick:a.handleOnPick,hideDisabledTime:a.hideDisabledTime,handleConfirmClick:a.handleClickConfirm,presets:a.presets})})},popupProps:R({overlayInnerStyle:{width:"auto",padding:0},onVisibleChange:this.handleShowPopup},this.popupProps)})})])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */var ye={allowInput:Boolean,clearable:Boolean,disableTime:{type:Function},disabled:{type:[Boolean,Array],default:!1},format:{type:String,default:"HH:mm:ss"},hideDisabledTime:{type:Boolean,default:!0},placeholder:{type:[String,Array],default:void 0},popupProps:{type:Object},presets:{type:Object},rangeInputProps:{type:Object},size:{type:String,default:"medium",validator:function(n){return n?["small","medium","large"].includes(n):!0}},steps:{type:Array,default:function(){return[1,1,1]}},value:{type:Array},defaultValue:{type:Array},onBlur:Function,onChange:Function,onFocus:Function,onInput:Function,onPick:Function};/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,a)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?W(Object(t),!0).forEach(function(a){M(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}se.extend(he);var we=ue({name:"TTimeRangePicker",props:w(w({},ye),{},{rangeInputProps:Object,popupProps:Object}),setup:function(n,t){var a=fe("time-range-picker"),c=B("timePicker"),v=c.global,k=B("classPrefix"),$=k.classPrefix,h=_e({TimeIcon:ve}),b=h.TimeIcon,_=I(void 0),r=I(O),g=I(!1),E=me(function(){return["".concat(a.value,"__group"),M({},"".concat($.value,"-is-focused"),g.value)]}),T=ce(n),D=T.value,x=T.format,S=ge(D,n.defaultValue,n.onChange,"change"),j=pe(S,2),y=j[0],F=j[1],A=function(l,i){if(i.trigger==="trigger-element-click"){g.value=!0;return}g.value=l},z=function(l){var i=l.e;i.stopPropagation(),r.value=O,F(null)},N=function(l){var i=l.position;_.value=i==="first"?0:1},G=function(l){if(_.value===0){var i;r.value=[l,(i=r.value[1])!==null&&i!==void 0?i:l]}else{var u;r.value=[(u=r.value[0])!==null&&u!==void 0?u:l,l]}},L=function(l,i){var u,d=i.e;if(n.allowInput){var f=H(r.value[_.value],x.value);if(f){var C,U,V=Pe(r.value[_.value],x.value);_.value===0?r.value=[V,(C=r.value[1])!==null&&C!==void 0?C:V]:r.value=[(U=r.value[0])!==null&&U!==void 0?U:V,V]}}(u=n.onBlur)===null||u===void 0||u.call(n,{value:l,e:d})},K=function(l,i){var u,d=i.e,f=i.position;r.value=l,(u=n.onInput)===null||u===void 0||u.call(n,{value:y.value,e:d,position:f==="first"?"start":"end"}),t.emit("input",{value:y.value,e:d,position:f==="first"?"start":"end"})},m=function(){var l=!r.value.find(function(i){return!H(i,x.value)});l&&F(r.value),g.value=!1},o=function(l,i){var u,d=i.e,f=i.position;(u=n.onFocus)===null||u===void 0||u.call(n,{value:l,e:d,position:f==="first"?"start":"end"}),t.emit("focus",{value:l,e:d,position:f==="first"?"start":"end"})},p=function(l){var i,u=[],d={};if(_.value===0){var f;u=[l,(f=r.value[1])!==null&&f!==void 0?f:l],d={position:"start"}}else{var C;u=[(C=r.value[0])!==null&&C!==void 0?C:l,l],d={position:"end"}}(i=n.onPick)===null||i===void 0||i.call(n,u,d),t.emit("pick",u,d)};return de(function(){return g.value},function(){var s;r.value=g.value?(s=y.value)!==null&&s!==void 0?s:O:O,g.value||(_.value=void 0)}),{global:v,componentName:a,currentValue:r,currentPanelIdx:_,inputClasses:E,innerValue:y,isShowPanel:g,handleInputChange:K,handleShowPopup:A,handleClear:z,handleFocus:o,handleOnPick:p,handleClickConfirm:m,handleClick:N,handleInputBlur:L,handleTimeChange:G,TimeIcon:b}},render:function(){var n,t=this,a=arguments[0],c=this.TimeIcon;return a("div",{class:this.componentName},[a(Ie,{props:w({},{onInputChange:this.handleInputChange,disabled:this.disabled,popupVisible:this.isShowPanel,inputValue:this.isShowPanel?this.currentValue:(n=this.innerValue)!==null&&n!==void 0?n:O,popupProps:w({overlayInnerStyle:{width:"auto",padding:0},onVisibleChange:this.handleShowPopup},this.popupProps),rangeInputProps:w({size:this.size,clearable:this.clearable,class:this.inputClasses,placeholder:this.placeholder||[this.global.placeholder,this.global.placeholder],suffixIcon:function(){return a(c)},onClear:this.handleClear,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleInputBlur,readonly:!this.allowInput,activeIndex:this.currentPanelIdx},this.rangeInputProps),panel:function(){return a(J,{props:w({},{steps:t.steps,format:t.format,isShowPanel:t.isShowPanel,disableTime:t.disableTime,hideDisabledTime:t.hideDisabledTime,isFooterDisplay:!0,value:t.currentValue[t.currentPanelIdx||0],onChange:t.handleTimeChange,onPick:t.handleOnPick,handleConfirmClick:t.handleClickConfirm,position:t.currentPanelIdx===0?"start":"end",activeIndex:t.currentPanelIdx,presets:t.presets})})}})})])}});/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */Y(xe,q);Y(we,q);var $e=Y(J,q),Se=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-time-picker",{on:{change:e.timechange,open:e.open,close:e.close,pick:e.pick},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},Oe=[];const Te={name:"hms",data(){return{value:"12:20:30"}},methods:{timechange(e){console.log(e)},open(){console.log("open")},close(){console.log("close")},pick(e){console.log(e,"vv")}}},X={};var De=P(Te,Se,Oe,!1,je,null,null,null);function je(e){for(let n in X)this[n]=X[n]}const Sn=function(){return De.exports}();var Fe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("h3",[e._v("\u65F6\u5206\u9009\u62E9")]),t("t-time-picker",{attrs:{format:"HH:mm"}}),t("h3",[e._v("\u6BEB\u79D2\u9009\u62E9")]),t("t-time-picker",{attrs:{"default-value":"12:59:59:000",format:"HH:mm:ss:SSS"}})],1)},Ve=[];const Re={name:"showSecond",data(){return{}}},Z={};var Be=P(Re,Fe,Ve,!1,He,null,null,null);function He(e){for(let n in Z)this[n]=Z[n]}const On=function(){return Be.exports}();var Me=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-time-picker",{attrs:{steps:[1,2,3]}})},Ee=[];const Ae={},ee={};var ze=P(Ae,Me,Ee,!1,Ne,null,null,null);function Ne(e){for(let n in ee)this[n]=ee[n]}const Tn=function(){return ze.exports}();var Ge=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-time-picker",{attrs:{format:"A hh:mm:ss",placeholder:"\u9009\u62E9\u65F6\u95F4"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},Le=[];const Ke={name:"twelveHours",data(){return{value:"PM 10:20:30"}}},ne={};var Ue=P(Ke,Ge,Le,!1,qe,null,null,null);function qe(e){for(let n in ne)this[n]=ne[n]}const Dn=function(){return Ue.exports}();var Je=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",[t("t-time-range-picker",{staticClass:"demos",attrs:{clearable:"",format:"HH:mm:ss","allow-input":""},on:{pick:e.handleRangePick},model:{value:e.time,callback:function(a){e.time=a},expression:"time"}})],1)},Ye=[];const Qe={name:"timeRange",data(){return{time:["00:00:00","23:59:59"]}},methods:{handleRangePick(e){console.log("picked range time is",e)}}},te={};var We=P(Qe,Je,Ye,!1,Xe,null,null,null);function Xe(e){for(let n in te)this[n]=te[n]}const jn=function(){return We.exports}();var Ze=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("h3",[e._v("\u5141\u8BB8\u8F93\u5165")]),t("t-time-picker",{attrs:{allowInput:""},on:{blur:e.blur,focus:e.focus},model:{value:e.time1,callback:function(a){e.time1=a},expression:"time1"}}),t("h3",[e._v("\u7981\u6B62\u8F93\u5165")]),t("t-time-picker",{attrs:{allowInput:!1},model:{value:e.time2,callback:function(a){e.time2=a},expression:"time2"}})],1)},en=[];const nn={name:"canInput",data(){return{time1:"20:22:33",time2:"22:22:22"}},methods:{blur(e){console.log("blur"),console.log(e)},focus(e){console.log("focus"),console.log(e)}}},ae={};var tn=P(nn,Ze,en,!1,an,null,null,null);function an(e){for(let n in ae)this[n]=ae[n]}const Fn=function(){return tn.exports}();var ln=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("h3",[e._v("\u5177\u5907\u6E05\u7A7A\u6309\u94AE")]),t("t-time-picker",{attrs:{clearable:""},model:{value:e.time1,callback:function(a){e.time1=a},expression:"time1"}}),t("h3",[e._v("\u7981\u6B62\u6E05\u7A7A\u6309\u94AE")]),t("t-time-picker",{attrs:{clearable:!1}})],1)},on=[];const rn={name:"clearable",data(){return{time1:"11:12:10"}}},le={};var sn=P(rn,ln,on,!1,un,null,null,null);function un(e){for(let n in le)this[n]=le[n]}const Vn=function(){return sn.exports}();var cn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical"}},[t("h3",[e._v("\u7981\u7528\u6574\u4E2A\u9009\u62E9\u5668")]),t("t-time-picker",{attrs:{disabled:!0},model:{value:e.time1,callback:function(a){e.time1=a},expression:"time1"}}),t("h3",[e._v("\u7981\u7528\u6307\u5B9A\u65F6\u95F4")]),t("t-time-picker",{attrs:{"disable-time":e.disableTime}})],1)},pn=[];const mn={name:"Disabled",data(){return{time1:"11:12:10"}},methods:{disableTime(e){const n=[1,2,3];return e>4?{hour:n,minute:[30,31,32,33,34]}:{hour:n}}}},ie={};var dn=P(mn,cn,pn,!1,vn,null,null,null);function vn(e){for(let n in ie)this[n]=ie[n]}const Rn=function(){return dn.exports}();var hn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("time-picker-panel",{attrs:{value:e.value},on:{change:e.handleChange}})},fn=[];const _n={components:{TimePickerPanel:$e},data(){return{value:"11:11:11"}},methods:{handleChange(e){this.value=e}}},oe={};var gn=P(_n,hn,fn,!1,Pn,null,null,null);function Pn(e){for(let n in oe)this[n]=oe[n]}const Bn=function(){return gn.exports}(),Hn=`<template>
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
      console.log(v, 'vv');
    },
  },
};
<\/script>
`,Mn=`<template>
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
`,En=`<template>
  <t-time-picker :steps="[1, 2, 3]" />
</template>
`,An=`<template>
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
`,zn=`<template>
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
`,Nn=`<template>
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
`,Gn=`<template>
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
`,Ln=`<template>
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
`,Kn=`<template>
  <time-picker-panel :value="value" @change="handleChange" />
</template>
<script>
import { TimePickerPanel } from 'tdesign-vue';

export default {
  components: {
    TimePickerPanel,
  },
  data() {
    return {
      value: '11:11:11',
    };
  },
  methods: {
    handleChange(v) {
      this.value = v;
    },
  },
};
<\/script>
`,bn=[{name:"allowInput",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"hideDisabledTime",type:"Boolean",defaultValue:!0,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]}],be={};be.setup=(e,n)=>{const t=I(bn),a=[{label:"timePicker",value:"timePicker"}],c={timePicker:'<t-timePicker v-bind="configProps" />'},v=I(`<template>${c[a[0].value].trim()}</template>`);function k($){v.value=`<template>${c[$].trim()}</template>`}return{configList:t,panelList:a,usageCode:v,onPanelChange:k}};var kn=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"timePicker",fn:function(a){var c=a.configProps;return[t("t-timePicker",e._b({},"t-timePicker",c,!1))]}}])})},Cn=[];const re={};var In=P(be,kn,Cn,!1,xn,null,null,null);function xn(e){for(let n in re)this[n]=re[n]}const Un=function(){return In.exports}();export{Sn as D,Un as U,On as a,Tn as b,Dn as c,jn as d,Fn as e,Vn as f,Rn as g,Bn as h,Hn as i,Mn as j,En as k,An as l,zn as m,Nn as n,Gn as o,Ln as p,Kn as q};
