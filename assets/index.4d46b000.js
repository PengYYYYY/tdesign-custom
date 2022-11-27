import{V as T,i as L,n as o,r as c}from"./index.0d6d9eb3.js";import{_ as D}from"./loading.ac94253a.js";import{p as O}from"./config.dabee373.js";import{r as F,g as P}from"./dom.c46068d8.js";/**
 * tdesign v0.49.3
 * (c) 2022 tdesign
 * @license MIT
 */function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?d(Object(e),!0).forEach(function(a){L(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}var k="".concat(O,"-loading--lock"),s=null;function g(t){var n=u({},t),e=new D({propsData:u({},n)}).$mount(),a=P(n.attach);a?a.appendChild(e.$el):console.error("attach is not exist");var i={hide:function(){e.loading=!1,e.$el.parentNode.removeChild(e.$el)}};return i}function b(t){if(t===!0)return s=g({fullscreen:!0,loading:!0,attach:"body"}),s;if(t===!1){F(document.body,k),s.hide(),s=null;return}return g(t)}var l=b;l.install=function(){T.prototype.$loading=b};var j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",[e("t-loading")],1)},C=[];const A={},p={};var E=o(A,j,C,!1,M,null,null,null);function M(t){for(let n in p)this[n]=p[n]}const Dt=function(){return E.exports}(),B={name:"TextLoading",methods:{renderText(){const t=this.$createElement;return t("span",["\u53D8\u91CF\u6587\u5B57\u52A0\u8F7D\u4E2D..."])}}};var R=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{size:100}},[e("t-loading",{attrs:{text:"\u9759\u6001\u6587\u5B57\u52A0\u8F7D\u4E2D...",indicator:!1}}),e("t-loading",{attrs:{text:t.renderText,indicator:!1}}),e("t-loading",{attrs:{indicator:!1},scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\u63D2\u69FD\u6587\u5B57\u52A0\u8F7D\u4E2D...")]},proxy:!0}])})],1)},I=[];const m={};var V=o(B,R,I,!1,U,null,null,null);function U(t){for(let n in m)this[n]=m[n]}const Ot=function(){return V.exports}();var J=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",[e("t-loading",{attrs:{text:"\u52A0\u8F7D\u4E2D...",size:"small"}})],1)},K=[];const N={},v={};var q=o(N,J,K,!1,G,null,null,null);function G(t){for(let n in v)this[n]=v[n]}const Ft=function(){return q.exports}();var H=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{direction:"vertical",size:"large"}},[e("div",[e("t-loading",{attrs:{size:"small",text:"\u52A0\u8F7D\u4E2D(\u5C0F)..."}})],1),e("div",[e("t-loading",{attrs:{size:"26px",text:"\u52A0\u8F7D\u4E2D(size=26px)..."}})],1),e("div",[e("t-loading",{attrs:{size:"medium",text:"\u52A0\u8F7D\u4E2D(\u4E2D)..."}})],1),e("div",[e("t-loading",{staticStyle:{"font-size":"46px"},attrs:{text:"\u52A0\u8F7D\u4E2D(\u6837\u5F0F\u5B9A\u4E49)..."}})],1),e("div",[e("t-loading",{attrs:{size:"large",text:"\u52A0\u8F7D\u4E2D(\u5927)..."}})],1)])},Q=[];const W={},h={};var X=o(W,H,Q,!1,Y,null,null,null);function Y(t){for(let n in h)this[n]=h[n]}const Pt=function(){return X.exports}();var Z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{size:"large",direction:"vertical"}},[e("t-space",[e("t-loading",{attrs:{size:"small",loading:t.loading,showOverlay:""}},[e("div",[t._v("this is loading component")]),e("div",[t._v("this is loading component")]),e("div",[t._v("this is loading component")]),e("div",[t._v("this is loading component")]),e("div",[t._v("this is loading component")])])],1),e("t-space",{attrs:{size:24}},[e("t-button",{attrs:{size:"small"},on:{click:function(a){t.loading=!0}}},[t._v("\u52A0\u8F7D\u4E2D")]),e("t-button",{attrs:{size:"small"},on:{click:function(a){t.loading=!1}}},[t._v("\u52A0\u8F7D\u5B8C\u6210")])],1)],1)},tt=[];const et={data(){return{loading:!0}}},_={};var nt=o(et,Z,tt,!1,at,null,null,null);function at(t){for(let n in _)this[n]=_[n]}const kt=function(){return nt.exports}();var ot=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{direction:"vertical"}},[e("t-space",[t.loading?e("t-loading",{attrs:{delay:t.delay,size:"small"}}):t._e(),t.data?e("div",[t._v("loading \u4F5C\u4E3A\u72EC\u7ACB\u5143\u7D20\uFF1A"+t._s(t.data))]):t._e()],1),e("div",[e("t-loading",{attrs:{loading:t.loading,delay:t.delay,size:"small",showOverlay:""}},[e("div",[t._v(t._s(t.data?`loading \u4F5C\u4E3A\u5305\u88F9\u5143\u7D20\uFF1A${t.data}`:""))])])],1),e("t-space",[e("t-button",{attrs:{size:"small"},on:{click:t.loadingData}},[t._v("\u5FEB\u901F\u91CD\u65B0\u52A0\u8F7D\u6570\u636E\uFF08\u65E0loading\uFF09")]),e("t-button",{attrs:{size:"small"},on:{click:function(){return t.loadingData(1e3)}}},[t._v("\u6162\u901F\u91CD\u65B0\u52A0\u8F7D\u6570\u636E")])],1)],1)},it=[];const lt={name:"loadingBase",data(){return{loading:!1,delay:500,data:""}},created(){this.loadingData()},methods:{loadingData(t){this.loading=!0,this.data="";const n=setTimeout(()=>{this.loading=!1,this.data="\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\uFF0C\u77ED\u65F6\u95F4\u7684\u6570\u636E\u52A0\u8F7D\u5E76\u672A\u51FA\u73B0 loading",clearTimeout(n)},t||100)}}},f={};var st=o(lt,ot,it,!1,rt,null,null,null);function rt(t){for(let n in f)this[n]=f[n]}const jt=function(){return st.exports}();var ct=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",[e("t-loading",{attrs:{loading:t.loading,text:"\u52A0\u8F7D\u4E2D...",fullscreen:""}}),e("div",[t._v(" \u5168\u5C40\u52A0\u8F7D\u5F00\u5173\uFF08\u5F00\u542F\u52A0\u8F7D1\u79D2\u540E\u81EA\u52A8\u5F52\u4F4D\uFF09\uFF1A "),e("t-switch",{model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}})],1)],1)},dt=[];const ut={name:"FullScreenLoading",data(){return{loading:!1}},watch:{loading(t){if(t){const n=setTimeout(()=>{this.loading=!1,clearTimeout(n)},1e3)}}}},x={};var gt=o(ut,ct,dt,!1,pt,null,null,null);function pt(t){for(let n in x)this[n]=x[n]}const Ct=function(){return gt.exports}();var mt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{direction:"vertical"}},[e("div",{ref:"content",staticClass:"loading-service-demo",attrs:{id:"loading-service-demo"}},[t._v("Loading \u6302\u8F7D\u5BB9\u5668")]),e("p",[t._v("this.$loading({ attach: '#loading-service-demo', showOverlay: true })")]),e("p",[t._v("this.$loading(true)")]),e("p",[t._v("this.$loading({ fullscreen: true, attach: 'body', preventScrollThrough: false })")]),e("t-space",[e("t-button",{attrs:{size:"small",disabled:t.attachLoading},on:{click:t.showAttach1}},[t._v("\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5C40\u90E8\uFF09")]),e("t-button",{attrs:{size:"small"},on:{click:t.showFullScreen1}},[t._v("\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F\uFF09")]),e("t-button",{attrs:{size:"small"},on:{click:t.showFullScrollScreen1}},[t._v("\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F-\u6EDA\u52A8\u7A7F\u900F\uFF09")])],1),e("p",[t._v("LoadingPlugin({ attach: '#loading-service-demo', showOverlay: true })")]),e("p",[t._v("LoadingPlugin(true)")]),e("p",[t._v("LoadingPlugin({ fullscreen: true, attach: 'body', preventScrollThrough: false })")]),e("t-space",[e("t-button",{attrs:{size:"small",disabled:t.attachLoading},on:{click:t.showAttach2}},[t._v("\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5C40\u90E8\uFF09")]),e("t-button",{attrs:{size:"small"},on:{click:t.showFullScreen2}},[t._v("\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F\uFF09")]),e("t-button",{attrs:{size:"small"},on:{click:t.showFullScrollScreen2}},[t._v("\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F-\u6EDA\u52A8\u7A7F\u900F\uFF09")])],1)],1)},vt=[];const ht={name:"LoadingPlugin",data(){return{attachLoading:!1}},methods:{showAttach1(){const t=this.$loading({attach:"#loading-service-demo",showOverlay:!0,size:"20px"});this.attachLoading=!0;const n=setTimeout(()=>{t.hide(),this.attachLoading=!1,clearTimeout(n)},1e3)},showFullScreen1(){this.$loading(!0);const t=setTimeout(()=>{this.$loading(!1),clearTimeout(t)},1e3)},showFullScrollScreen1(){const t=this.$loading({fullscreen:!0,attach:"body",preventScrollThrough:!1}),n=setTimeout(()=>{t.hide(),clearTimeout(n)},1e3)},showAttach2(){const t=l({attach:()=>this.$refs.content,showOverlay:!0,size:"20px"});this.attachLoading=!0;const n=setTimeout(()=>{t.hide(),this.attachLoading=!1,clearTimeout(n)},1e3)},showFullScreen2(){l(!0);const t=setTimeout(()=>{l(!1),clearTimeout(t)},1e3)},showFullScrollScreen2(){const t=l({fullscreen:!0,attach:"body",preventScrollThrough:!1}),n=setTimeout(()=>{t.hide(),clearTimeout(n)},1e3)}}},$={};var _t=o(ht,mt,vt,!1,ft,"a2656dda",null,null);function ft(t){for(let n in $)this[n]=$[n]}const At=function(){return _t.exports}(),Et=`<template>
  <t-space>
    <t-loading></t-loading>
  </t-space>
</template>
`,Mt=`<template>
  <t-space :size="100">
    <!-- \u4F7F\u7528 props \u5B9E\u73B0\u81EA\u5B9A\u4E49 -->
    <t-loading text="\u9759\u6001\u6587\u5B57\u52A0\u8F7D\u4E2D..." :indicator="false"></t-loading>
    <!-- \u4F7F\u7528 props \u5B9E\u73B0\u81EA\u5B9A\u4E49 -->
    <t-loading :text="renderText" :indicator="false"></t-loading>
    <t-loading :indicator="false">
      <!-- \u4F7F\u7528\u63D2\u69FD\u5B9E\u73B0\u81EA\u5B9A\u4E49 -->
      <template #text>\u63D2\u69FD\u6587\u5B57\u52A0\u8F7D\u4E2D...</template>
    </t-loading>
  </t-space>
</template>
<script lang="jsx">
export default {
  name: 'TextLoading',
  methods: {
    renderText() {
      return <span>\u53D8\u91CF\u6587\u5B57\u52A0\u8F7D\u4E2D...</span>;
    },
  },
};
<\/script>
`,Bt=`<template>
  <t-space>
    <t-loading text="\u52A0\u8F7D\u4E2D..." size="small"></t-loading>
  </t-space>
</template>
`,Rt=`<template>
  <t-space direction="vertical" size="large">
    <div>
      <t-loading size="small" text="\u52A0\u8F7D\u4E2D(\u5C0F)..."></t-loading>
    </div>
    <div>
      <t-loading size="26px" text="\u52A0\u8F7D\u4E2D(size=26px)..."></t-loading>
    </div>
    <div>
      <t-loading size="medium" text="\u52A0\u8F7D\u4E2D(\u4E2D)..."></t-loading>
    </div>
    <div>
      <t-loading style="font-size: 46px" text="\u52A0\u8F7D\u4E2D(\u6837\u5F0F\u5B9A\u4E49)..."></t-loading>
    </div>
    <div>
      <t-loading size="large" text="\u52A0\u8F7D\u4E2D(\u5927)..."></t-loading>
    </div>
  </t-space>
</template>
`,It=`<template>
  <t-space size="large" direction="vertical">
    <t-space>
      <t-loading size="small" :loading="loading" showOverlay>
        <div>this is loading component</div>
        <div>this is loading component</div>
        <div>this is loading component</div>
        <div>this is loading component</div>
        <div>this is loading component</div>
      </t-loading>
    </t-space>
    <t-space :size="24">
      <t-button @click="loading = true" size="small">\u52A0\u8F7D\u4E2D</t-button>
      <t-button @click="loading = false" size="small">\u52A0\u8F7D\u5B8C\u6210</t-button>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
};
<\/script>
<style scoped></style>
`,Vt=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-loading v-if="loading" :delay="delay" size="small"></t-loading>
      <div v-if="data">loading \u4F5C\u4E3A\u72EC\u7ACB\u5143\u7D20\uFF1A{{ data }}</div>
    </t-space>

    <div>
      <t-loading :loading="loading" :delay="delay" size="small" showOverlay>
        <div>{{ data ? \`loading \u4F5C\u4E3A\u5305\u88F9\u5143\u7D20\uFF1A\${data}\` : '' }}</div>
      </t-loading>
    </div>

    <t-space>
      <t-button @click="loadingData" size="small">\u5FEB\u901F\u91CD\u65B0\u52A0\u8F7D\u6570\u636E\uFF08\u65E0loading\uFF09</t-button>
      <t-button @click="() => loadingData(1000)" size="small">\u6162\u901F\u91CD\u65B0\u52A0\u8F7D\u6570\u636E</t-button>
    </t-space>
  </t-space>
</template>
<script>
export default {
  name: 'loadingBase',
  data() {
    return {
      loading: false,
      delay: 500,
      data: '',
    };
  },
  created() {
    this.loadingData();
  },
  methods: {
    loadingData(time) {
      this.loading = true;
      this.data = '';
      const timer = setTimeout(() => {
        this.loading = false;
        this.data = '\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\uFF0C\u77ED\u65F6\u95F4\u7684\u6570\u636E\u52A0\u8F7D\u5E76\u672A\u51FA\u73B0 loading';
        clearTimeout(timer);
      }, time || 100);
    },
  },
};
<\/script>
`,Ut=`<template>
  <t-space>
    <t-loading :loading="loading" text="\u52A0\u8F7D\u4E2D..." fullscreen />
    <div>
      \u5168\u5C40\u52A0\u8F7D\u5F00\u5173\uFF08\u5F00\u542F\u52A0\u8F7D1\u79D2\u540E\u81EA\u52A8\u5F52\u4F4D\uFF09\uFF1A
      <t-switch v-model="loading"></t-switch>
    </div>
  </t-space>
</template>
<script>
export default {
  name: 'FullScreenLoading',
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    loading(v) {
      if (v) {
        const timer = setTimeout(() => {
          this.loading = false;
          clearTimeout(timer);
        }, 1000);
      }
    },
  },
};
<\/script>
`,Jt=`<template>
  <t-space direction="vertical">
    <div id="loading-service-demo" ref="content" class="loading-service-demo">Loading \u6302\u8F7D\u5BB9\u5668</div>

    <p>this.$loading({ attach: '#loading-service-demo', showOverlay: true })</p>
    <p>this.$loading(true)</p>
    <p>this.$loading({ fullscreen: true, attach: 'body', preventScrollThrough: false })</p>

    <t-space>
      <t-button @click="showAttach1" size="small" :disabled="attachLoading">\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5C40\u90E8\uFF09</t-button>
      <t-button @click="showFullScreen1" size="small">\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F\uFF09</t-button>
      <t-button @click="showFullScrollScreen1" size="small">\u63D2\u4EF6\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F-\u6EDA\u52A8\u7A7F\u900F\uFF09</t-button>
    </t-space>

    <p>LoadingPlugin({ attach: '#loading-service-demo', showOverlay: true })</p>
    <p>LoadingPlugin(true)</p>
    <p>LoadingPlugin({ fullscreen: true, attach: 'body', preventScrollThrough: false })</p>

    <t-space>
      <t-button @click="showAttach2" size="small" :disabled="attachLoading">\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5C40\u90E8\uFF09</t-button>
      <t-button @click="showFullScreen2" size="small">\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F\uFF09</t-button>
      <t-button @click="showFullScrollScreen2" size="small">\u51FD\u6570\u65B9\u5F0F\u52A0\u8F7D\uFF08\u5168\u5C4F-\u6EDA\u52A8\u7A7F\u900F\uFF09</t-button>
    </t-space>
  </t-space>
</template>
<script>
import { LoadingPlugin } from 'tdesign-vue';

export default {
  name: 'LoadingPlugin',
  data() {
    return {
      attachLoading: false,
    };
  },
  methods: {
    // \u63D2\u4EF6\u5F0F\uFF1A\u5C40\u90E8\u52A0\u8F7D\uFF0C\u5C40\u90E8\u52A0\u8F7D\u6A21\u5F0F\u6DFB\u52A0 attach="body" \u65E0\u6548
    showAttach1() {
      const loadingAttachInstance = this.$loading({
        attach: '#loading-service-demo',
        showOverlay: true,
        size: '20px',
      });
      this.attachLoading = true;
      const timer = setTimeout(() => {
        loadingAttachInstance.hide();
        this.attachLoading = false;
        clearTimeout(timer);
      }, 1000);
    },
    // \u63D2\u4EF6\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u9632\u6B62\u6EDA\u52A8\u7A7F\u900F
    showFullScreen1() {
      this.$loading(true);
      const timer = setTimeout(() => {
        this.$loading(false);
        clearTimeout(timer);
      }, 1000);
    },
    // \u63D2\u4EF6\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u5141\u8BB8\u6EDA\u52A8\u7A7F\u900F
    showFullScrollScreen1() {
      const instance = this.$loading({
        fullscreen: true,
        attach: 'body',
        preventScrollThrough: false,
      });
      const timer = setTimeout(() => {
        instance.hide();
        clearTimeout(timer);
      }, 1000);
    },

    // \u51FD\u6570\u5F0F\uFF1A\u5C40\u90E8\u52A0\u8F7D
    showAttach2() {
      const loadingAttachInstance = LoadingPlugin({
        attach: () => this.$refs.content,
        showOverlay: true,
        size: '20px',
      });
      this.attachLoading = true;
      const timer = setTimeout(() => {
        loadingAttachInstance.hide();
        this.attachLoading = false;
        clearTimeout(timer);
      }, 1000);
    },
    // \u51FD\u6570\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u9632\u6B62\u6EDA\u52A8\u7A7F\u900F
    showFullScreen2() {
      LoadingPlugin(true);
      const timer = setTimeout(() => {
        LoadingPlugin(false);
        clearTimeout(timer);
      }, 1000);
    },
    // \u51FD\u6570\u5F0F\uFF1A\u5168\u5C4F\u52A0\u8F7D\uFF0C\u5141\u8BB8\u6EDA\u52A8\u7A7F\u900F
    showFullScrollScreen2() {
      const instance = LoadingPlugin({
        fullscreen: true,
        attach: 'body',
        preventScrollThrough: false,
      });
      const timer = setTimeout(() => {
        instance.hide();
        clearTimeout(timer);
      }, 1000);
    },
  },
};
<\/script>

<style scoped>
.loading-service-demo {
  position: relative;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px var(--component-border, #eee) solid;
}
</style>
`,xt=[{name:"fullscreen",type:"Boolean",defaultValue:!1,options:[]},{name:"indicator",type:"Boolean",defaultValue:!0,options:[]},{name:"inheritColor",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!0,options:[]},{name:"preventScrollThrough",type:"Boolean",defaultValue:!0,options:[]},{name:"showOverlay",type:"Boolean",defaultValue:!0,options:[]}],z={};z.setup=(t,n)=>{const e=c(xt),a=[{label:"loading",value:"loading"}],i={loading:'<t-loading v-bind="configProps" />'},r=c(`<template>${i[a[0].value].trim()}</template>`);function w(S){r.value=`<template>${i[S].trim()}</template>`}return{configList:e,panelList:a,usageCode:r,onPanelChange:w}};var $t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"loading",fn:function(a){var i=a.configProps;return[e("t-loading",t._b({},"t-loading",i,!1))]}}])})},yt=[];const y={};var bt=o(z,$t,yt,!1,zt,null,null,null);function zt(t){for(let n in y)this[n]=y[n]}const Kt=function(){return bt.exports}();export{Dt as D,Kt as U,Ot as a,Ft as b,Pt as c,kt as d,jt as e,Ct as f,At as g,Et as h,Mt as i,Bt as j,Rt as k,It as l,Vt as m,Ut as n,Jt as o};
