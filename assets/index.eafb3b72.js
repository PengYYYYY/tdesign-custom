import{n as l,r as i}from"./index.0d6d9eb3.js";var y=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("t-space",{attrs:{direction:"vertical"}},[n("t-input-number",{attrs:{step:.1,max:5,autoWidth:""},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),n("t-input-number",{staticStyle:{width:"200px"},attrs:{step:.18,max:5,"allow-input-over-limit":!1},model:{value:e.decimalValue,callback:function(t){e.decimalValue=t},expression:"decimalValue"}}),n("t-input-number",{staticStyle:{width:"250px"},attrs:{theme:"row",max:15,min:-2,disabled:!1,tips:e.tips,suffix:"\u4E2A"},on:{change:e.handleChange,validate:e.onValidate,blur:e.handleBlur,focus:e.handleFocus,enter:e.handleEnter},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)},k=[];const w={data(){return{value1:"",value2:100,decimalValue:3.41,error:void 0}},computed:{tips(){if(this.error==="exceed-maximum")return"number can not be exceed maximum";if(this.error==="below-minimum")return"number can not be below minimum"}},methods:{handleChange(e,a){console.info("change",e,a)},onValidate({error:e}){this.error=e},handleFocus(e,a){console.info("focus",e,a)},handleBlur(e,a){console.info("blur",e,a)},handleKeydown(e,a){console.info("keydown",e,a)},handleKeyup(e,a){console.info("keyup",e,a)},handleKeypress(e,a){console.info("keypress",e,a)},handleEnter(e,a){console.info("enter",e,a)}}},o={};var C=l(w,y,k,!1,S,null,null,null);function S(e){for(let a in o)this[a]=o[a]}const we=function(){return C.exports}();var D=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("t-space",[n("t-input-number",{attrs:{theme:"column"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),n("t-input-number",{staticStyle:{width:"150px"},attrs:{theme:"column",align:"center",max:15,min:-2,label:"\u6570\u5B57"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)},P=[];const V={data(){return{value1:3,value2:3}}},s={};var E=l(V,D,P,!1,F,null,null,null);function F(e){for(let a in s)this[a]=s[a]}const Ce=function(){return E.exports}();var N=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("t-space",{attrs:{direction:"vertical"}},[n("t-input-number",{attrs:{theme:"normal",max:15,min:0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("t-input-number",{attrs:{theme:"normal",align:"right"},scopedSlots:e._u([{key:"label",fn:function(){return[n("span",[e._v("\u91D1\u989D\uFF1A")])]},proxy:!0},{key:"suffix",fn:function(){return[n("span",[e._v("\u5143")])]},proxy:!0}]),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("t-input-number",{attrs:{theme:"normal",align:"right",label:"\u673A\u5668\uFF1A",suffix:"\u53F0"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},j=[];const M={data(){return{value:3}}},m={};var R=l(M,N,j,!1,W,null,null,null);function W(e){for(let a in m)this[a]=m[a]}const Se=function(){return R.exports}();var z=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("t-input-number",{attrs:{max:15,min:-5,step:1.2,"decimal-places":2},on:{change:e.onChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},B=[];const K={data(){return{value:3.2}},methods:{onChange(e){console.info(e)}}},c={};var L=l(K,z,B,!1,U,null,null,null);function U(e){for(let a in c)this[a]=c[a]}const De=function(){return L.exports}();var q=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("t-space",{attrs:{direction:"vertical"}},[n("t-input-number",{attrs:{max:15,min:-2,format:function(t){return`${t} %`},autoWidth:""},on:{change:e.onChange},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),n("t-input-number",{attrs:{decimalPlaces:2,format:function(t,u){var r=u.fixedNumber;return`${r} %`},autoWidth:""},on:{change:e.onChange},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)},J=[];const A={data(){return{value1:3,value2:3.01}},methods:{onChange(e){console.info(e)}}},v={};var G=l(A,q,J,!1,H,null,null,null);function H(e){for(let a in v)this[a]=v[a]}const Pe=function(){return G.exports}();var I=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("t-input-number",{attrs:{size:"small",max:15,min:-2},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),n("t-input-number",{staticStyle:{margin:"0 50px"},attrs:{max:15,min:-2},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),n("t-input-number",{attrs:{size:"large",max:15,min:-2},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1)},O=[];const Q={data(){return{value1:3,value2:3,value3:3}},methods:{}},p={};var T=l(Q,I,O,!1,X,null,null,null);function X(e){for(let a in p)this[a]=p[a]}const Ve=function(){return T.exports}();var Y=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"tdesign-demo-block-column-large"},[n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[n("t-radio-button",{attrs:{value:"hide"}},[e._v("\u9690\u85CF\u6587\u672C\u63D0\u793A")]),n("t-radio-button",{attrs:{value:"align-left"}},[e._v("\u6587\u672C\u63D0\u793A\u5DE6\u5BF9\u9F50")]),n("t-radio-button",{attrs:{value:"align-input"}},[e._v("\u6587\u672C\u63D0\u793A\u5BF9\u9F50\u8F93\u5165\u6846")])],1)],1),n("t-form",[e.type==="hide"?[n("t-form-item",{attrs:{label:"\u7981\u7528"}},[n("t-input-number",{attrs:{disabled:""},model:{value:e.value0,callback:function(t){e.value0=t},expression:"value0"}})],1),n("t-form-item",{attrs:{label:"\u53EA\u8BFB"}},[n("t-input-number",{attrs:{readonly:""},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),n("t-form-item",{attrs:{label:"\u6B63\u5E38"}},[n("t-input-number",{model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),n("t-form-item",{attrs:{label:"\u6210\u529F"}},[n("t-input-number",{attrs:{status:"success"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),n("t-form-item",{attrs:{label:"\u8B66\u544A"}},[n("t-input-number",{attrs:{status:"warning"},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1),n("t-form-item",{attrs:{label:"\u9519\u8BEF"}},[n("t-input-number",{attrs:{status:"error"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1)]:e._e(),e.type==="align-left"?[n("t-form-item",{attrs:{label:"\u6B63\u5E38\u63D0\u793A"}},[n("t-input-number",{attrs:{tips:"\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A"},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1),n("br"),n("t-form-item",{attrs:{label:"\u6210\u529F\u63D0\u793A"}},[n("t-input-number",{attrs:{status:"success",tips:"\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A"},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}})],1),n("br"),n("t-form-item",{attrs:{label:"\u8B66\u544A\u63D0\u793A"}},[n("t-input-number",{attrs:{status:"warning",tips:"\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A"},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}})],1),n("br"),n("t-form-item",{attrs:{label:"\u9519\u8BEF\u63D0\u793A"}},[n("t-input-number",{attrs:{status:"error",tips:"\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A"},model:{value:e.value9,callback:function(t){e.value9=t},expression:"value9"}})],1),n("br")]:e._e(),e.type==="align-input"?[n("t-form-item",{attrs:{label:"\u6B63\u5E38\u63D0\u793A"}},[n("t-input-number",{attrs:{inputProps:{tips:"\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A"}},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1),n("br"),n("t-form-item",{attrs:{label:"\u6210\u529F\u63D0\u793A"}},[n("t-input-number",{attrs:{status:"success",inputProps:{tips:"\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A"}},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}})],1),n("br"),n("t-form-item",{attrs:{label:"\u8B66\u544A\u63D0\u793A"}},[n("t-input-number",{attrs:{status:"warning",inputProps:{tips:"\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A"}},model:{value:e.value8,callback:function(t){e.value8=t},expression:"value8"}})],1),n("br"),n("t-form-item",{attrs:{label:"\u9519\u8BEF\u63D0\u793A"}},[n("t-input-number",{attrs:{status:"error",inputProps:{tips:"\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A"}},model:{value:e.value9,callback:function(t){e.value9=t},expression:"value9"}})],1),n("br")]:e._e()],2)],1)},Z=[];const ee={data(){return{type:"align-input",value0:3,value1:3,value2:3,value3:3,value4:3,value5:3,value6:3,value7:3,value8:3,value9:3}}},d={};var ne=l(ee,Y,Z,!1,te,"ac824850",null,null);function te(e){for(let a in d)this[a]=d[a]}const Ee=function(){return ne.exports}();var ae=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("t-space",[n("t-space",{attrs:{direction:"vertical"}},[n("t-input-number",{attrs:{"default-value":100,align:"left"}}),n("t-input-number",{attrs:{"default-value":200,align:"center"}}),n("t-input-number",{attrs:{"default-value":300,align:"right"}})],1),n("t-space",{staticStyle:{"margin-left":"100px"},attrs:{direction:"vertical"}},[n("t-input-number",{attrs:{"default-value":100,align:"left",theme:"normal"}}),n("t-input-number",{attrs:{"default-value":200,align:"center",theme:"normal"}}),n("t-input-number",{attrs:{"default-value":300,align:"right",theme:"normal"}})],1)],1)},le=[];const ue={},f={};var re=l(ue,ae,le,!1,ie,null,null,null);function ie(e){for(let a in f)this[a]=f[a]}const Fe=function(){return re.exports}();var oe=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("t-input-number",{attrs:{min:0,autoWidth:!0},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},se=[];const me={data(){return{value:3}}},b={};var ce=l(me,oe,se,!1,ve,null,null,null);function ve(e){for(let a in b)this[a]=b[a]}const Ne=function(){return ce.exports}();var pe=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"tdesign-demo-block-column-large"},[n("div",[n("t-input-number",{staticStyle:{width:"300px"},attrs:{largeNumber:"",decimalPlaces:2,step:"1"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),n("div",[n("t-input-number",{staticStyle:{width:"300px"},attrs:{largeNumber:"",step:"0.888"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)])},de=[];const fe={data(){return{value1:"19999999999999999",value2:"0.8975527383412673418"}}},_={};var be=l(fe,pe,de,!1,_e,null,null,null);function _e(e){for(let a in _)this[a]=_[a]}const je=function(){return be.exports}(),Me=`<template>
  <t-space direction="vertical">
    <t-input-number v-model="value1" :step="0.1" :max="5" autoWidth />

    <t-input-number v-model="decimalValue" :step="0.18" :max="5" :allow-input-over-limit="false" style="width: 200px" />

    <t-input-number
      v-model="value2"
      theme="row"
      :max="15"
      :min="-2"
      :disabled="false"
      :tips="tips"
      suffix="\u4E2A"
      style="width: 250px"
      @change="handleChange"
      @validate="onValidate"
      @blur="handleBlur"
      @focus="handleFocus"
      @enter="handleEnter"
    ></t-input-number>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      // \u5982\u679C\u5E0C\u671B\u9ED8\u8BA4\u663E\u793A\u4E3A\u7A7A\uFF0C\u8BF7\u4F7F\u7528 ''\uFF0C\u5207\u52FF\u4F7F\u7528 undefined
      value1: '',
      value2: 100,
      decimalValue: 3.41,
      error: undefined,
    };
  },
  computed: {
    tips() {
      if (this.error === 'exceed-maximum') return 'number can not be exceed maximum';
      if (this.error === 'below-minimum') return 'number can not be below minimum';
      return undefined;
    },
  },
  methods: {
    handleChange(v, ctx) {
      console.info('change', v, ctx);
    },
    onValidate({ error }) {
      this.error = error;
    },
    handleFocus(v, ctx) {
      console.info('focus', v, ctx);
    },
    handleBlur(v, ctx) {
      console.info('blur', v, ctx);
    },
    handleKeydown(v, ctx) {
      console.info('keydown', v, ctx);
    },
    handleKeyup(v, ctx) {
      console.info('keyup', v, ctx);
    },
    handleKeypress(v, ctx) {
      console.info('keypress', v, ctx);
    },
    handleEnter(v, ctx) {
      console.info('enter', v, ctx);
    },
  },
};
<\/script>

<style>
/** \u6570\u5B57\u8F93\u5165\u6846\u8FC7\u77ED\u6362\u884C\u65F6\uFF0C\u5219\u901A\u8FC7 CSS \u8C03\u6574\u5BBD\u5EA6 */
.tdesign-demo__input-number-center .t-input__tips {
  width: 300px;
}
</style>
`,Re=`<template>
  <t-space>
    <t-input-number v-model="value1" theme="column"></t-input-number>

    <t-input-number
      v-model="value2"
      theme="column"
      align="center"
      :max="15"
      :min="-2"
      label="\u6570\u5B57"
      style="width: 150px"
    ></t-input-number>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 3,
    };
  },
};
<\/script>
`,We=`<template>
  <t-space direction="vertical">
    <t-input-number v-model="value" theme="normal" :max="15" :min="0"></t-input-number>

    <t-input-number v-model="value" theme="normal" align="right">
      <template #label><span>\u91D1\u989D\uFF1A</span></template>
      <template #suffix><span>\u5143</span></template>
    </t-input-number>

    <t-input-number v-model="value" theme="normal" align="right" label="\u673A\u5668\uFF1A" suffix="\u53F0"></t-input-number>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
<\/script>
`,ze=`<template>
  <div>
    <t-input-number
      v-model="value"
      :max="15"
      :min="-5"
      :step="1.2"
      :decimal-places="2"
      @change="onChange"
    ></t-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.2,
    };
  },
  methods: {
    onChange(ev) {
      console.info(ev);
    },
  },
};
<\/script>
`,Be=`<template>
  <t-space direction="vertical">
    <t-input-number
      v-model="value1"
      :max="15"
      :min="-2"
      :format="(value) => \`\${value} %\`"
      autoWidth
      @change="onChange"
    ></t-input-number>

    <!-- \u5C0F\u6570\u4F4D\u6570\u548C\u683C\u5F0F\u5316\u51FD\u6570\u7EC4\u5408\u4F7F\u7528 -->
    <t-input-number
      v-model="value2"
      :decimalPlaces="2"
      :format="(value, { fixedNumber }) => \`\${fixedNumber} %\`"
      autoWidth
      @change="onChange"
    ></t-input-number>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 3.01,
    };
  },
  methods: {
    onChange(ev) {
      console.info(ev);
    },
  },
};
<\/script>
`,Ke=`<template>
  <div>
    <t-input-number v-model="value1" size="small" :max="15" :min="-2"></t-input-number>

    <t-input-number style="margin: 0 50px" v-model="value2" :max="15" :min="-2"></t-input-number>

    <t-input-number v-model="value3" size="large" :max="15" :min="-2"></t-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 3,
      value3: 3,
    };
  },
  methods: {},
};
<\/script>
`,Le=`<template>
  <div class="tdesign-demo-block-column-large">
    <div>
      <t-radio-group v-model="type" variant="default-filled">
        <t-radio-button value="hide">\u9690\u85CF\u6587\u672C\u63D0\u793A</t-radio-button>
        <t-radio-button value="align-left">\u6587\u672C\u63D0\u793A\u5DE6\u5BF9\u9F50</t-radio-button>
        <t-radio-button value="align-input">\u6587\u672C\u63D0\u793A\u5BF9\u9F50\u8F93\u5165\u6846</t-radio-button>
      </t-radio-group>
    </div>
    <t-form>
      <!-- \u9690\u85CF\u6587\u672C\u63D0\u793A -->
      <template v-if="type === 'hide'">
        <t-form-item label="\u7981\u7528">
          <t-input-number v-model="value0" disabled></t-input-number>
        </t-form-item>
        <t-form-item label="\u53EA\u8BFB">
          <t-input-number v-model="value1" readonly></t-input-number>
        </t-form-item>
        <t-form-item label="\u6B63\u5E38">
          <t-input-number v-model="value2"></t-input-number>
        </t-form-item>
        <t-form-item label="\u6210\u529F">
          <t-input-number v-model="value3" status="success"></t-input-number>
        </t-form-item>
        <t-form-item label="\u8B66\u544A">
          <t-input-number v-model="value4" status="warning"></t-input-number>
        </t-form-item>
        <t-form-item label="\u9519\u8BEF">
          <t-input-number v-model="value5" status="error"></t-input-number>
        </t-form-item>
      </template>

      <!-- \u6587\u672C\u63D0\u793A\u5DE6\u5BF9\u9F50 -->
      <template v-if="type === 'align-left'">
        <t-form-item label="\u6B63\u5E38\u63D0\u793A">
          <t-input-number v-model="value6" tips="\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u6210\u529F\u63D0\u793A">
          <t-input-number v-model="value7" status="success" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u8B66\u544A\u63D0\u793A">
          <t-input-number v-model="value8" status="warning" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u9519\u8BEF\u63D0\u793A">
          <t-input-number
            v-model="value9"
            status="error"
            tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A"
          ></t-input-number> </t-form-item
        ><br />
      </template>

      <!-- \u6587\u672C\u63D0\u793A\u5BF9\u9F50\u8F93\u5165\u6846 -->
      <template v-if="type === 'align-input'">
        <t-form-item label="\u6B63\u5E38\u63D0\u793A">
          <t-input-number v-model="value6" :inputProps="{ tips: '\u8FD9\u662F\u666E\u901A\u6587\u672C\u63D0\u793A' }"></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u6210\u529F\u63D0\u793A">
          <t-input-number
            v-model="value7"
            status="success"
            :inputProps="{ tips: '\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A' }"
          ></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u8B66\u544A\u63D0\u793A">
          <t-input-number
            v-model="value8"
            status="warning"
            :inputProps="{ tips: '\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A' }"
          ></t-input-number> </t-form-item
        ><br />
        <t-form-item label="\u9519\u8BEF\u63D0\u793A">
          <t-input-number
            v-model="value9"
            status="error"
            :inputProps="{ tips: '\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A' }"
          ></t-input-number> </t-form-item
        ><br />
      </template>
    </t-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'align-input',
      value0: 3,
      value1: 3,
      value2: 3,
      value3: 3,
      value4: 3,
      value5: 3,
      value6: 3,
      value7: 3,
      value8: 3,
      value9: 3,
    };
  },
};
<\/script>
<style scoped>
.t-input-number {
  width: 300px;
}
</style>
`,Ue=`<template>
  <t-space>
    <t-space direction="vertical">
      <t-input-number :default-value="100" align="left" />
      <t-input-number :default-value="200" align="center" />
      <t-input-number :default-value="300" align="right" />
    </t-space>
    <t-space direction="vertical" style="margin-left: 100px">
      <t-input-number :default-value="100" align="left" theme="normal" />
      <t-input-number :default-value="200" align="center" theme="normal" />
      <t-input-number :default-value="300" align="right" theme="normal" />
    </t-space>
  </t-space>
</template>
`,qe=`<template>
  <div>
    <t-input-number v-model="value" :min="0" :autoWidth="true"></t-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
<\/script>
`,Je=`<template>
  <div class="tdesign-demo-block-column-large">
    <div>
      <t-input-number v-model="value1" largeNumber :decimalPlaces="2" step="1" style="width: 300px"></t-input-number>
    </div>

    <div>
      <t-input-number v-model="value2" largeNumber step="0.888" style="width: 300px"></t-input-number>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '19999999999999999',
      value2: '0.8975527383412673418',
    };
  },
};
<\/script>
`,xe=[{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"largeNumber",type:"Boolean",defaultValue:!1,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"theme",type:"enum",defaultValue:"row",options:[{label:"column",value:"column"},{label:"row",value:"row"},{label:"normal",value:"normal"}]}],h={};h.setup=(e,a)=>{const n=i(xe),t=[{label:"inputNumber",value:"inputNumber"}],u={inputNumber:'<t-input-number v-bind="configProps"/>'},r=i(`<template>${u[t[0].value].trim()}</template>`);function g($){r.value=`<template>${u[$].trim()}</template>`}return{configList:n,panelList:t,usageCode:r,onPanelChange:g}};var he=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"inputNumber",fn:function(t){var u=t.configProps;return[n("t-input-number",e._b({},"t-input-number",u,!1))]}}])})},ge=[];const x={};var $e=l(h,he,ge,!1,ye,null,null,null);function ye(e){for(let a in x)this[a]=x[a]}const Ae=function(){return $e.exports}();export{we as D,Ae as U,Ce as a,Se as b,De as c,Pe as d,Ve as e,Ee as f,Fe as g,Ne as h,je as i,Me as j,Re as k,We as l,ze as m,Be as n,Ke as o,Le as p,Ue as q,qe as r,Je as s};
