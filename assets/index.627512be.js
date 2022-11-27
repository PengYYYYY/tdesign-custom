import{V as a,_ as h,u,I as v,a as f,n as s,r as x}from"./index.0d6d9eb3.js";import{T as m}from"./index.ec3ca700.js";import{L as T}from"./index.7c50c1e7.js";var F=["size"];function y(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,r)}return e}function b(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?y(Object(e),!0).forEach(function(r){f(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var H={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 2v2H3a1 1 0 00-1 1v5a1 1 0 001 1h1v3h8v-3h1a1 1 0 001-1V5a1 1 0 00-1-1h-1V2H4zm7 2H5V3h6v1zM3 5h10v5h-1V8H4v2H3V5zm2 8V9h6v4H5z",fillOpacity:.9}}]},w=a.extend({name:"PrintIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,e){var r=e.props,i=e.data,c=r.size,p=h(r,F),o=u(c),l=o.className,g=o.style,d=b(b({},p||{}),{},{id:"print",icon:H,staticClass:l,style:g});return i.props=d,n(v,i)}}),B=["size"];function C(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,r)}return e}function $(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?C(Object(e),!0).forEach(function(r){f(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):C(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var q={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 4H4v2h2V4z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M2.5 2a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5zM3 3h4v4H3V3zM10.5 2a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm.5 3V3h2v2h-2zM10 10.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3zm1 2.5h2v-2h-2v2zM2.5 10a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm.5 1h2v2H3v-2zM14 7.5h-4v1h4v-1zM8.5 11v3h-1v-3h1zM8.5 10V9h-1v1h1z",fillOpacity:.9}}]},A=a.extend({name:"QrcodeIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,e){var r=e.props,i=e.data,c=r.size,p=h(r,B),o=u(c),l=o.className,g=o.style,d=$($({},p||{}),{},{id:"qrcode",icon:q,staticClass:l,style:g});return i.props=d,n(v,i)}}),N=["size"];function k(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,r)}return e}function z(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?k(Object(e),!0).forEach(function(r){f(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var Q={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 2.71c2.9 0 5.25 2.36 5.25 5.29h.96a6.2 6.2 0 00-11.5-3.28V2.64h-.96v3.1c0 .29.22.5.5.5h3.09v-.96H3.49A5.25 5.25 0 018 2.71zM1.79 8h.96a5.25 5.25 0 009.76 2.71h-1.85v-.96h3.09c.28 0 .5.22.5.5v3.1h-.96v-2.07A6.2 6.2 0 011.8 8z",fillOpacity:.9}}]},_=a.extend({name:"RefreshIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,e){var r=e.props,i=e.data,c=r.size,p=h(r,N),o=u(c),l=o.className,g=o.style,d=z(z({},p||{}),{},{id:"refresh",icon:Q,staticClass:l,style:g});return i.props=d,n(v,i)}}),K=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{breakLine:!0,size:16}},t._l(t.mode,function(r){return e("t-space",{key:r,attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:r}}),e("span",[t._v(t._s(r))])],1)}),1)},U=[];const J=a.extend({data(){return{mode:["fill","contain","cover","none","scale-down"]}},methods:{onEnter(){console.log("trigger enter")},onChange(t){console.log(this.input,t)}}}),O={};var W=s(J,K,U,!1,G,null,null,null);function G(t){for(let n in O)this[n]=O[n]}const Qt=function(){return W.exports}();var X=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{style:{width:"100%"},attrs:{direction:"vertical"}},[e("t-space",{attrs:{breakLine:""}},[e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",position:"center"}}),e("span",[t._v("cover center")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",position:"left"}}),e("span",[t._v("cover left")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",position:"right"}}),e("span",[t._v("cover right")])],1)],1),e("t-space",{style:{marginTop:20},attrs:{breakLine:""}},[e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"280px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",position:"top"}}),e("span",[t._v("cover top")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"280px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",position:"bottom"}}),e("span",[t._v("cover bottom")])],1)],1),e("t-space",{style:{marginTop:20},attrs:{breakLine:""}},[e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"200px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"contain",position:"top"}}),e("span",[t._v("contain top")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"200px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"contain",position:"bottom"}}),e("span",[t._v("contain bottom")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"200px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"contain",position:"center"}}),e("span",[t._v("contain center")])],1),e("t-space",{style:{marginTop:20},attrs:{breakLine:""}},[e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"280px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"contain",position:"left"}}),e("span",[t._v("contain left")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"280px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"contain",position:"right"}}),e("span",[t._v("contain right")])],1)],1)],1)],1)},Y=[];const Z=a.extend({data(){return{}}}),j={};var tt=s(Z,X,Y,!1,et,null,null,null);function et(t){for(let n in j)this[n]=j[n]}const Kt=function(){return tt.exports}();var nt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",[e("t-space",{attrs:{direction:"vertical",align:"center"}},[e("t-image",{style:{width:"160px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",shape:"square",fit:"cover"}}),e("span",[t._v("square")])],1),e("t-space",{attrs:{direction:"vertical",align:"center"}},[e("t-image",{style:{width:"160px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",shape:"round"}}),e("span",[t._v("round")])],1),e("t-space",{attrs:{direction:"vertical",align:"center"}},[e("t-image",{style:{width:"160px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",shape:"circle",fit:"cover"}}),e("span",[t._v("circle")])],1)],1)},rt=[];const it={},P={};var at=s(it,nt,rt,!1,ot,null,null,null);function ot(t){for(let n in P)this[n]=P[n]}const Ut=function(){return at.exports}(),st=a.extend({data(){const t=this.$createElement;return{label:t(m,{attrs:{shape:"mark",theme:"warning"},style:{margin:"8px",borderRadius:"3px",background:"rgba(236,242,254,1)",color:"rgba(0,82,217,1)"}},["\u6807\u7B7E\u4E00"])}},methods:{}});var ct=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",gallery:!0,overlayContent:t.label}})},pt=[];const I={};var lt=s(st,ct,pt,!1,gt,null,null,null);function gt(t){for(let n in I)this[n]=I[n]}const Jt=function(){return lt.exports}(),dt=a.extend({data(){const t=this.$createElement;return{loadingCount:0,errorCount:0,renderCustomIcon:t(A,{attrs:{size:"24"}})}},methods:{renderIcon(){const t=this.$createElement;return t(_)}}});var mt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("t-space",{attrs:{size:24,direction:"vertical"}},[e("div",[e("h3",{style:{"margin-bottom":"15px"}},[t._v("\u52A0\u8F7D\u4E2D\u7684\u56FE\u7247")]),e("t-space",[e("t-space",{attrs:{direction:"vertical"}},[e("span",[t._v("\u9ED8\u8BA4\u5360\u4F4D")]),e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",key:t.loadingCount},on:{"update:key":function(r){t.loadingCount=r}}}),e("t-button",{attrs:{variant:"outline",icon:t.renderIcon},on:{click:function(r){t.loadCount=t.loadCount+1}}},[t._v(" \u91CD\u6F14 loading ")])],1),e("t-space",{attrs:{direction:"vertical"}},[e("span",[t._v("\u81EA\u5B9A\u4E49\u5360\u4F4D")]),e("t-image",{style:{width:"284px",height:"160px"},attrs:{key:t.loadingCount,src:"https://tdesign.gtimg.com/demo/demo-image-1.png",loading:t.renderCustomIcon},on:{"update:key":function(r){t.loadingCount=r}}})],1)],1)],1),e("div",[e("h3",{style:{"margin-bottom":"15px"}},[t._v("\u52A0\u8F7D\u5931\u8D25\u7684\u56FE\u7247")]),e("t-space",[e("t-space",{attrs:{direction:"vertical"}},[e("span",[t._v("\u9ED8\u8BA4\u9519\u8BEF")]),e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"",key:t.errorCount},on:{"update:key":function(r){t.errorCount=r}}}),e("t-button",{attrs:{variant:"outline",icon:t.renderIcon},on:{click:function(r){t.errorCount=t.errorCount+1}}},[t._v(" \u91CD\u6F14 error ")])],1),e("t-space",{attrs:{direction:"vertical"}},[e("span",[t._v("\u81EA\u5B9A\u4E49\u9519\u8BEF")]),e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"",key:t.errorCount,error:t.renderCustomIcon},on:{"update:key":function(r){t.errorCount=r}}})],1)],1)],1)])],1)},ht=[];const S={};var ut=s(dt,mt,ht,!1,vt,null,null,null);function vt(t){for(let n in S)this[n]=S[n]}const Wt=function(){return ut.exports}(),ft=a.extend({data(){const t=this.$createElement;return{loadingCount:0,renderPlaceholder:t("img",{attrs:{width:"100%",height:"100%",src:"https://tdesign.gtimg.com/demo/demo-image-5.png"}}),renderLoading:t("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"rgba(255,255,255,.4)",backdropFilter:"blur(10px)"}},[t(T,{attrs:{delay:0,fullscreen:!1,indicator:!0,inheritColor:!1,loading:!0,preventScrollThrough:!0,showOverlay:!0,size:"small"}})])}},methods:{renderRefreshIcon(){const t=this.$createElement;return t(_)}}});var _t=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{direction:"vertical"}},[e("t-image",{key:t.loadingCount,style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",lazy:!0,placeholder:t.renderPlaceholder,loading:t.renderLoading}}),e("t-button",{attrs:{variant:"outline",icon:t.renderRefreshIcon},on:{click:function(r){t.loadingCount=t.loadingCount+1}}},[t._v(" \u91CD\u6F14 lazy load ")])],1)},xt=[];const D={};var yt=s(ft,_t,xt,!1,bt,null,null,null);function bt(t){for(let n in D)this[n]=D[n]}const Gt=function(){return yt.exports}(),wt=a.extend({data(){return{loadingCount:0,list:Array.from({length:24}).map((t,n)=>n)}},methods:{renderRefreshIcon(){const t=this.$createElement;return t(_)}}});var Ct=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{key:t.loadingCount,attrs:{direction:"vertical"}},[e("t-space",{style:{height:"240px","overflow-y":"scroll"},attrs:{breakLine:!0}},t._l(t.list,function(r){return e("t-image",{key:r,style:{width:"230px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",lazy:!0}})}),1),e("t-button",{attrs:{variant:"outline",icon:t.renderRefreshIcon},on:{click:function(r){t.loadingCount=t.loadingCount+1}}},[t._v(" \u91CD\u6F14 lazy load ")])],1)},$t=[];const M={};var kt=s(wt,Ct,$t,!1,zt,null,null,null);function zt(t){for(let n in M)this[n]=M[n]}const Xt=function(){return kt.exports}(),Ot=a.extend({data(){const t=this.$createElement;return{renderMask:t("div",{style:{background:"rgba(0,0,0,.4)",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",lineHeight:"22px"}},[t(m,{attrs:{shape:"mark",theme:"warning"},style:{borderRadius:"3px",background:"transparent",color:"#fff"}},[t(w,{attrs:{size:"16"}})," \u9AD8\u6E05"])]),renderButton:t(m,{attrs:{shape:"mark",theme:"warning"},style:{position:"absolute",right:"8px",bottom:"8px",borderRadius:"3px",background:"rgba(236,242,254,1)",color:"rgba(0,82,217,1)"}},[t(w,{attrs:{size:"16"}})," \u9AD8\u6E05"])}},methods:{}});var jt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{size:32}},[e("t-space",{attrs:{direction:"vertical"}},[e("strong",{style:{fontSize:"20px"}},[t._v("\u6709\u906E\u7F69")]),e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",overlayContent:t.renderMask}})],1),e("t-space",{attrs:{direction:"vertical"}},[e("strong",{style:{fontSize:"20px"}},[t._v("\u65E0\u906E\u7F69")]),e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",overlayContent:t.renderButton}})],1)],1)},Pt=[];const R={};var It=s(Ot,jt,Pt,!1,St,null,null,null);function St(t){for(let n in R)this[n]=R[n]}const Yt=function(){return It.exports}(),Dt=a.extend({data(){const t=this.$createElement;return{renderMask:t("div",{style:{background:"rgba(0,0,0,.4)",color:"#fff",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},["\u9884\u89C8"])}},methods:{}});var Mt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",overlayContent:t.renderMask,overlayTrigger:"hover"}})},Rt=[];const E={};var Et=s(Dt,Mt,Rt,!1,Vt,null,null,null);function Vt(t){for(let n in E)this[n]=E[n]}const Zt=function(){return Et.exports}(),te=`<template>
  <t-space :breakLine="true" :size="16">
    <t-space v-for="item in mode" direction="vertical" align="start" :key="item">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :fit="item"
        :style="{ width: '120px', height: '120px' }"
      />
      <span>{{ item }}</span>
    </t-space>
  </t-space>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      mode: ['fill', 'contain', 'cover', 'none', 'scale-down'],
    };
  },
  methods: {
    onEnter() {
      console.log('trigger enter');
    },
    onChange(val) {
      console.log(this.input, val);
    },
  },
});
<\/script>
`,ee=`<template>
  <t-space direction="vertical" :style="{ width: '100%' }">
    <t-space breakLine>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          position="center"
          :style="{ width: '120px', height: '120px' }"
        />
        <span>cover center</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '120px', height: '120px' }"
          position="left"
        />
        <span>cover left</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '120px', height: '120px' }"
          position="right"
        />
        <span>cover right</span>
      </t-space>
    </t-space>
    <t-space :style="{ marginTop: 20 }" breakLine>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '280px', height: '120px' }"
          position="top"
        />
        <span>cover top</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="cover"
          :style="{ width: '280px', height: '120px' }"
          position="bottom"
        />
        <span>cover bottom</span>
      </t-space>
    </t-space>
    <t-space :style="{ marginTop: 20 }" breakLine>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="contain"
          :style="{ width: '120px', height: '200px' }"
          position="top"
        />
        <span>contain top</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="contain"
          :style="{ width: '120px', height: '200px' }"
          position="bottom"
        />
        <span>contain bottom</span>
      </t-space>
      <t-space direction="vertical" align="start">
        <t-image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          fit="contain"
          :style="{ width: '120px', height: '200px' }"
          position="center"
        />
        <span>contain center</span>
      </t-space>
      <t-space :style="{ marginTop: 20 }" breakLine>
        <t-space direction="vertical" align="start">
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            fit="contain"
            :style="{ width: '280px', height: '120px' }"
            position="left"
          />
          <span>contain left</span>
        </t-space>
        <t-space direction="vertical" align="start">
          <t-image
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            fit="contain"
            :style="{ width: '280px', height: '120px' }"
            position="right"
          />
          <span>contain right</span>
        </t-space>
      </t-space>
    </t-space>
  </t-space>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
});
<\/script>
`,ne=`<template>
  <t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        shape="square"
        :style="{ width: '160px', height: '160px' }"
        fit="cover"
      />
      <span>square</span>
    </t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '160px', height: '160px' }"
        fit="cover"
        shape="round"
      />
      <span>round</span>
    </t-space>
    <t-space direction="vertical" align="center">
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '160px', height: '160px' }"
        shape="circle"
        fit="cover"
      />
      <span>circle</span>
    </t-space>
  </t-space>
</template>
`,re=`<template>
  <t-image
    src="https://tdesign.gtimg.com/demo/demo-image-1.png"
    :style="{ width: '284px', height: '160px' }"
    :gallery="true"
    :overlayContent="label"
  />
</template>

<script lang="jsx">
import Vue from 'vue';
import { Tag } from 'tdesign-vue';

export default Vue.extend({
  data() {
    return {
      label: (
        <Tag
          shape="mark"
          theme="warning"
          style={{
            margin: '8px',
            borderRadius: '3px',
            background: 'rgba(236,242,254,1)',
            color: 'rgba(0,82,217,1)',
          }}
        >
          \u6807\u7B7E\u4E00
        </Tag>
      ),
    };
  },
  methods: {},
});
<\/script>
`,ie=`<template>
  <div>
    <t-space :size="24" direction="vertical">
      <div>
        <h3 :style="{ 'margin-bottom': '15px' }">\u52A0\u8F7D\u4E2D\u7684\u56FE\u7247</h3>
        <t-space>
          <t-space direction="vertical">
            <span>\u9ED8\u8BA4\u5360\u4F4D</span>
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              :key.sync="loadingCount"
              :style="{ width: '284px', height: '160px' }"
            />
            <t-button variant="outline" :icon="renderIcon" @click="loadCount = loadCount + 1"> \u91CD\u6F14 loading </t-button>
          </t-space>
          <t-space direction="vertical">
            <span>\u81EA\u5B9A\u4E49\u5360\u4F4D</span>
            <t-image
              :key.sync="loadingCount"
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              :style="{ width: '284px', height: '160px' }"
              :loading="renderCustomIcon"
            />
          </t-space>
        </t-space>
      </div>
      <div>
        <h3 :style="{ 'margin-bottom': '15px' }">\u52A0\u8F7D\u5931\u8D25\u7684\u56FE\u7247</h3>
        <t-space>
          <t-space direction="vertical">
            <span>\u9ED8\u8BA4\u9519\u8BEF</span>
            <t-image src="" :key.sync="errorCount" :style="{ width: '284px', height: '160px' }" />
            <t-button variant="outline" :icon="renderIcon" @click="errorCount = errorCount + 1"> \u91CD\u6F14 error </t-button>
          </t-space>
          <t-space direction="vertical">
            <span>\u81EA\u5B9A\u4E49\u9519\u8BEF</span>
            <t-image
              src=""
              :key.sync="errorCount"
              :style="{ width: '284px', height: '160px' }"
              :error="renderCustomIcon"
            />
          </t-space>
        </t-space>
      </div>
    </t-space>
  </div>
</template>

<script lang="jsx">
import Vue from 'vue';
import { RefreshIcon, QrcodeIcon } from 'tdesign-icons-vue';

export default Vue.extend({
  data() {
    return {
      loadingCount: 0,
      errorCount: 0,
      renderCustomIcon: <QrcodeIcon size="24" />,
    };
  },
  methods: {
    renderIcon() {
      return <RefreshIcon />;
    },
  },
});
<\/script>
`,ae=`<template>
  <t-space direction="vertical">
    <t-image
      src="https://tdesign.gtimg.com/demo/demo-image-1.png"
      :style="{ width: '284px', height: '160px' }"
      :lazy="true"
      :placeholder="renderPlaceholder"
      :loading="renderLoading"
      :key="loadingCount"
    />
    <t-button variant="outline" :icon="renderRefreshIcon" @click="loadingCount = loadingCount + 1">
      \u91CD\u6F14 lazy load
    </t-button>
  </t-space>
</template>

<script lang="jsx">
import Vue from 'vue';
import { RefreshIcon } from 'tdesign-icons-vue';
import { Loading } from 'tdesign-vue';

export default Vue.extend({
  data() {
    return {
      loadingCount: 0,
      renderPlaceholder: <img width="100%" height="100%" src="https://tdesign.gtimg.com/demo/demo-image-5.png" />,
      renderLoading: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            background: 'rgba(255,255,255,.4)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Loading
            delay={0}
            fullscreen={false}
            indicator
            inheritColor={false}
            loading
            preventScrollThrough
            showOverlay
            size="small"
          />
        </div>
      ),
    };
  },
  methods: {
    renderRefreshIcon() {
      return <RefreshIcon />;
    },
  },
});
<\/script>
`,oe=`<template>
  <t-space direction="vertical" :key="loadingCount">
    <t-space :breakLine="true" :style="{ height: '240px', 'overflow-y': 'scroll' }">
      <t-image
        v-for="item in list"
        :key="item"
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '230px', height: '120px' }"
        :lazy="true"
      />
    </t-space>
    <t-button variant="outline" :icon="renderRefreshIcon" @click="loadingCount = loadingCount + 1">
      \u91CD\u6F14 lazy load
    </t-button>
  </t-space>
</template>

<script lang="jsx">
import Vue from 'vue';
import { RefreshIcon } from 'tdesign-icons-vue';

export default Vue.extend({
  data() {
    return {
      loadingCount: 0,
      list: Array.from({ length: 24 }).map((_, index) => index),
    };
  },
  methods: {
    renderRefreshIcon() {
      return <RefreshIcon />;
    },
  },
});
<\/script>
`,se=`<template>
  <t-space :size="32">
    <t-space direction="vertical">
      <strong :style="{ fontSize: '20px' }">\u6709\u906E\u7F69</strong>
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '284px', height: '160px' }"
        :overlayContent="renderMask"
      />
    </t-space>
    <t-space direction="vertical">
      <strong :style="{ fontSize: '20px' }">\u65E0\u906E\u7F69</strong>
      <t-image
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '284px', height: '160px' }"
        :overlayContent="renderButton"
      />
    </t-space>
  </t-space>
</template>

<script lang="jsx">
import Vue from 'vue';
import { PrintIcon } from 'tdesign-icons-vue';
import { Tag } from 'tdesign-vue';

export default Vue.extend({
  data() {
    return {
      renderMask: (
        <div
          style={{
            background: 'rgba(0,0,0,.4)',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            lineHeight: '22px',
          }}
        >
          <Tag
            shape="mark"
            theme="warning"
            style={{
              borderRadius: '3px',
              background: 'transparent',
              color: '#fff',
            }}
          >
            <PrintIcon size="16" /> \u9AD8\u6E05
          </Tag>
        </div>
      ),
      renderButton: (
        <Tag
          shape="mark"
          theme="warning"
          style={{
            position: 'absolute',
            right: '8px',
            bottom: '8px',
            borderRadius: '3px',
            background: 'rgba(236,242,254,1)',
            color: 'rgba(0,82,217,1)',
          }}
        >
          <PrintIcon size="16" /> \u9AD8\u6E05
        </Tag>
      ),
    };
  },
  methods: {},
});
<\/script>
`,ce=`<template>
  <t-image
    src="https://tdesign.gtimg.com/demo/demo-image-1.png"
    :style="{ width: '284px', height: '160px' }"
    :overlayContent="renderMask"
    overlayTrigger="hover"
  />
</template>

<script lang="jsx">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      renderMask: (
        <div
          style={{
            background: 'rgba(0,0,0,.4)',
            color: '#fff',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          \u9884\u89C8
        </div>
      ),
    };
  },
  methods: {},
});
<\/script>
`,Lt=[],L={};L.setup=(t,n)=>{const e=x(Lt),r=[{label:"image",value:"image"}],i={image:`
        <t-image v-bind="configProps" src="https://tdesign.gtimg.com/demo/demo-image-1.png" fit="cover" :style="{ width: '120px', height: '120px' }" />
      `},c=x(`<template>${i[r[0].value].trim()}</template>`);function p(o){c.value=`<template>${i[o].trim()}</template>`}return{configList:e,panelList:r,usageCode:c,onPanelChange:p}};var Tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"image",fn:function(r){var i=r.configProps;return[e("t-image",t._b({style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover"}},"t-image",i,!1))]}}])})},Ft=[];const V={};var Ht=s(L,Tt,Ft,!1,Bt,null,null,null);function Bt(t){for(let n in V)this[n]=V[n]}const pe=function(){return Ht.exports}();export{Qt as D,pe as U,Kt as a,Ut as b,Jt as c,Wt as d,Gt as e,Xt as f,Yt as g,Zt as h,te as i,ee as j,ne as k,re as l,ie as m,ae as n,oe as o,se as p,ce as q};
