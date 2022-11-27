import{n as i}from"./index.0d6d9eb3.js";var r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"affix-base"},[t("t-affix",{ref:"affix",attrs:{"offset-top":n.top,"offset-bottom":20}},[t("t-button",[n._v("\u56FA\u9489")])],1)],1)},s=[];const f={data(){return{top:140}}},o={};var d=i(f,r,s,!1,l,null,null,null);function l(n){for(let e in o)this[e]=o[e]}const h=function(){return d.exports}();var c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"affix-container"},[t("div",{ref:"affixContainer",staticClass:"affix-container-demo1"},[t("div",{staticClass:"background"},[t("t-affix",{ref:"affix",attrs:{"z-index":5,"offset-top":50,"offset-bottom":50,container:n.getContainer},on:{fixedChange:n.handleFixedChange}},[t("t-button",[n._v("Fixed open:"+n._s(n.open))])],1)],1)])])},x=[];const p={data(){return{open:0,fixedBottom:0}},mounted(){this.$nextTick(()=>{var n;window.addEventListener("scroll",(n=this.$refs)==null?void 0:n.affix.handleScroll)})},beforeDestroy(){var n;window.removeEventListener("scroll",(n=this.$refs)==null?void 0:n.affix.handleScroll)},methods:{getContainer(){var n;return(n=this.$refs)==null?void 0:n.affixContainer},handleFixedChange(n,{top:e}){console.log("top",e),this.open=n}}},a={};var u=i(p,c,x,!1,_,"5cbd447c",null,null);function _(n){for(let e in a)this[e]=a[e]}const m=function(){return u.exports}(),b=`<template>
  <div class="affix-base">
    <t-affix :offset-top="top" :offset-bottom="20" ref="affix">
      <t-button>\u56FA\u9489</t-button>
    </t-affix>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 140,
    };
  },
};
<\/script>
`,g=`<template>
  <div class="affix-container">
    <div class="affix-container-demo1" ref="affixContainer">
      <div class="background">
        <t-affix
          ref="affix"
          :z-index="5"
          :offset-top="50"
          :offset-bottom="50"
          :container="getContainer"
          @fixedChange="handleFixedChange"
        >
          <t-button>Fixed open:{{ open }}</t-button>
        </t-affix>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: 0,
      fixedBottom: 0,
    };
  },
  mounted() {
    // \u76F8\u5BF9 window \u7684\u79FB\u52A8\uFF0C\u4F7F\u7528\u4F1A\u5F71\u54CD\u6027\u80FD
    this.$nextTick(() => {
      window.addEventListener('scroll', this.$refs?.affix.handleScroll);
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.$refs?.affix.handleScroll);
  },
  methods: {
    getContainer() {
      return this.$refs?.affixContainer;
    },
    handleFixedChange(affixed, { top }) {
      console.log('top', top);
      this.open = affixed;
    },
  },
};
<\/script>

<style lang="less" scoped>
.affix-container {
  width: 100%;
  &-demo1 {
    border: 1px solid #e7e7e7;
    border-radius: 3px;
    height: 400px;
    overflow: auto;
    overscroll-behavior: none;
    .background {
      height: 1500px;
      padding-top: 700px;
      background: -webkit-linear-gradient(top, transparent 19px, #e7e7e7 20px),
        -webkit-linear-gradient(left, transparent 19px, #e7e7e7 20px);
      background-size: 20px 20px;
    }
  }
}
</style>
`;export{h as D,m as a,b,g as c};
