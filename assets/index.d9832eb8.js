import{V as o,n as a,r as u}from"./index.7ed388d9.js";import{T as d}from"./index.52c4ada7.js";import{Q as V}from"./qrcode.9c38adea.js";import{I as T}from"./image-error.e068f469.js";import{L as F}from"./index.295c811b.js";import{u as R,_ as S}from"./use-size-props.363c09d5.js";import{_ as D,I as M}from"./icon.c86fb0b5.js";var q=["size"];function v(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,r)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?v(Object(e),!0).forEach(function(r){S(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var B={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4 2v2H3a1 1 0 00-1 1v5a1 1 0 001 1h1v3h8v-3h1a1 1 0 001-1V5a1 1 0 00-1-1h-1V2H4zm7 2H5V3h6v1zM3 5h10v5h-1V8H4v2H3V5zm2 8V9h6v4H5z",fillOpacity:.9}}]},_=o.extend({name:"PrintIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,e){var r=e.props,i=e.data,c=r.size,p=D(r,q),s=R(c),l=s.className,g=s.style,m=f(f({},p||{}),{},{id:"print",icon:B,staticClass:l,style:g});return i.props=m,n(M,i)}}),H=["size"];function x(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),e.push.apply(e,r)}return e}function y(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?x(Object(e),!0).forEach(function(r){S(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):x(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var A={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 2.71c2.9 0 5.25 2.36 5.25 5.29h.96a6.2 6.2 0 00-11.5-3.28V2.64h-.96v3.1c0 .29.22.5.5.5h3.09v-.96H3.49A5.25 5.25 0 018 2.71zM1.79 8h.96a5.25 5.25 0 009.76 2.71h-1.85v-.96h3.09c.28 0 .5.22.5.5v3.1h-.96v-2.07A6.2 6.2 0 011.8 8z",fillOpacity:.9}}]},h=o.extend({name:"RefreshIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,e){var r=e.props,i=e.data,c=r.size,p=D(r,H),s=R(c),l=s.className,g=s.style,m=y(y({},p||{}),{},{id:"refresh",icon:A,staticClass:l,style:g});return i.props=m,n(M,i)}}),Q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{breakLine:!0,size:16}},t._l(t.mode,function(r){return e("t-space",{key:r,attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:r}}),e("span",[t._v(t._s(r))])],1)}),1)},N=[];const W=o.extend({data(){return{mode:["fill","contain","cover","none","scale-down"]}},methods:{onEnter(){console.log("trigger enter")},onChange(t){console.log(this.input,t)}}}),b={};var K=a(W,Q,N,!1,U,null,null,null);function U(t){for(let n in b)this[n]=b[n]}const Yt=function(){return K.exports}();var J=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{style:{width:"100%"},attrs:{direction:"vertical"}},[e("t-space",{attrs:{breakLine:""}},[e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",position:"center"}}),e("span",[t._v("cover center")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",position:"left"}}),e("span",[t._v("cover left")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",position:"right"}}),e("span",[t._v("cover right")])],1)],1),e("t-space",{style:{marginTop:20},attrs:{breakLine:""}},[e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"280px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",position:"top"}}),e("span",[t._v("cover top")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"280px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",position:"bottom"}}),e("span",[t._v("cover bottom")])],1)],1),e("t-space",{style:{marginTop:20},attrs:{breakLine:""}},[e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"200px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"contain",position:"top"}}),e("span",[t._v("contain top")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"200px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"contain",position:"bottom"}}),e("span",[t._v("contain bottom")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"120px",height:"200px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"contain",position:"center"}}),e("span",[t._v("contain center")])],1),e("t-space",{style:{marginTop:20},attrs:{breakLine:""}},[e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"280px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"contain",position:"left"}}),e("span",[t._v("contain left")])],1),e("t-space",{attrs:{direction:"vertical",align:"start"}},[e("t-image",{style:{width:"280px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"contain",position:"right"}}),e("span",[t._v("contain right")])],1)],1)],1)],1)},G=[];const X=o.extend({data(){return{}}}),w={};var Y=a(X,J,G,!1,Z,null,null,null);function Z(t){for(let n in w)this[n]=w[n]}const Zt=function(){return Y.exports}();var tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",[e("t-space",{attrs:{direction:"vertical",align:"center"}},[e("t-image",{style:{width:"160px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",shape:"square",fit:"cover"}}),e("span",[t._v("square")])],1),e("t-space",{attrs:{direction:"vertical",align:"center"}},[e("t-image",{style:{width:"160px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover",shape:"round"}}),e("span",[t._v("round")])],1),e("t-space",{attrs:{direction:"vertical",align:"center"}},[e("t-image",{style:{width:"160px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",shape:"circle",fit:"cover"}}),e("span",[t._v("circle")])],1)],1)},et=[];const nt={},$={};var rt=a(nt,tt,et,!1,it,null,null,null);function it(t){for(let n in $)this[n]=$[n]}const te=function(){return rt.exports}(),at=o.extend({data(){return this.$createElement,{label:t=>t(d,{attrs:{shape:"mark",theme:"warning"},style:{margin:"8px",borderRadius:"3px",background:"rgba(236,242,254,1)",color:"rgba(0,82,217,1)"}},["\u6807\u7B7E\u4E00"])}},methods:{}});var ot=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",gallery:!0,overlayContent:t.label}})},st=[];const C={};var ct=a(at,ot,st,!1,pt,null,null,null);function pt(t){for(let n in C)this[n]=C[n]}const ee=function(){return ct.exports}(),lt=o.extend({components:{RefreshIcon:h,QrcodeIcon:V},data(){return{loadingCount:0,errorCount:0}},methods:{renderErrorContent(){const t=this.$createElement;return t(T,{attrs:{size:"24"}})}}});var gt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("t-space",{attrs:{size:24,direction:"vertical"}},[e("div",[e("h3",{style:{"margin-bottom":"15px"}},[t._v("\u52A0\u8F7D\u4E2D\u7684\u56FE\u7247")]),e("t-space",[e("t-space",{attrs:{direction:"vertical"}},[e("span",[t._v("\u9ED8\u8BA4\u5360\u4F4D")]),e("t-image",{key:t.loadingCount,style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png"}}),e("t-button",{attrs:{variant:"outline"},on:{click:function(r){t.loadingCount=t.loadingCount+3}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("refresh-icon")]},proxy:!0}])},[t._v(" \u91CD\u6F14 loading ")])],1),e("t-space",{attrs:{direction:"vertical"}},[e("span",[t._v("\u81EA\u5B9A\u4E49\u5360\u4F4D")]),e("t-image",{key:t.loadingCount,style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png"},scopedSlots:t._u([{key:"loading",fn:function(){return[e("qrcode-icon")]},proxy:!0}])})],1)],1)],1),e("div",[e("h3",{style:{"margin-bottom":"15px"}},[t._v("\u52A0\u8F7D\u5931\u8D25\u7684\u56FE\u7247")]),e("t-space",[e("t-space",{attrs:{direction:"vertical"}},[e("span",[t._v("\u9ED8\u8BA4\u9519\u8BEF")]),e("t-image",{key:t.errorCount,style:{width:"284px",height:"160px"},attrs:{src:""}}),e("t-button",{attrs:{variant:"outline"},on:{click:function(r){t.errorCount=t.errorCount+3}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("refresh-icon")]},proxy:!0}])},[t._v(" \u91CD\u6F14 error ")])],1),e("t-space",{attrs:{direction:"vertical"}},[e("span",[t._v("\u81EA\u5B9A\u4E49\u9519\u8BEF")]),e("t-image",{key:t.errorCount,style:{width:"284px",height:"160px"},attrs:{src:"",error:t.renderErrorContent}})],1)],1)],1)])],1)},mt=[];const k={};var dt=a(lt,gt,mt,!1,ht,null,null,null);function ht(t){for(let n in k)this[n]=k[n]}const ne=function(){return dt.exports}(),ut=o.extend({data(){return this.$createElement,{loadingCount:0,renderPlaceholder:t=>t("img",{attrs:{width:"100%",height:"100%",src:"https://tdesign.gtimg.com/demo/demo-image-5.png"}}),renderLoading:t=>t("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"rgba(255,255,255,.4)",backdropFilter:"blur(10px)"}},[t(F,{attrs:{delay:0,fullscreen:!1,indicator:!0,inheritColor:!1,loading:!0,preventScrollThrough:!0,showOverlay:!0,size:"small"}})])}},methods:{renderRefreshIcon(){const t=this.$createElement;return t(h)}}});var vt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{direction:"vertical"}},[e("t-image",{key:t.loadingCount,style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",lazy:!0,placeholder:t.renderPlaceholder,loading:t.renderLoading}}),e("t-button",{attrs:{variant:"outline",icon:t.renderRefreshIcon},on:{click:function(r){t.loadingCount=t.loadingCount+1}}},[t._v(" \u91CD\u6F14 lazy load ")])],1)},ft=[];const z={};var _t=a(ut,vt,ft,!1,xt,null,null,null);function xt(t){for(let n in z)this[n]=z[n]}const re=function(){return _t.exports}(),yt=o.extend({data(){return{loadingCount:0,list:Array.from({length:24}).map((t,n)=>n)}},methods:{renderRefreshIcon(){const t=this.$createElement;return t(h)}}});var bt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{key:t.loadingCount,attrs:{direction:"vertical"}},[e("t-space",{style:{height:"240px","overflow-y":"scroll"},attrs:{breakLine:!0}},t._l(t.list,function(r){return e("t-image",{key:r,style:{width:"230px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",lazy:!0}})}),1),e("t-button",{attrs:{variant:"outline",icon:t.renderRefreshIcon},on:{click:function(r){t.loadingCount=t.loadingCount+1}}},[t._v(" \u91CD\u6F14 lazy load ")])],1)},wt=[];const j={};var $t=a(yt,bt,wt,!1,Ct,null,null,null);function Ct(t){for(let n in j)this[n]=j[n]}const ie=function(){return $t.exports}(),kt=o.extend({data(){return this.$createElement,{renderMask:t=>t("div",{style:{background:"rgba(0,0,0,.4)",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",lineHeight:"22px"}},[t(d,{attrs:{shape:"mark",theme:"warning"},style:{borderRadius:"3px",background:"transparent",color:"#fff"}},[t(_,{attrs:{size:"16"}})," \u9AD8\u6E05"])]),renderButton:t=>t(d,{attrs:{shape:"mark",theme:"warning"},style:{position:"absolute",right:"8px",bottom:"8px",borderRadius:"3px",background:"rgba(236,242,254,1)",color:"rgba(0,82,217,1)"}},[t(_,{attrs:{size:"16"}})," \u9AD8\u6E05"])}},methods:{}});var zt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{size:32}},[e("t-space",{attrs:{direction:"vertical"}},[e("strong",{style:{fontSize:"20px"}},[t._v("\u6709\u906E\u7F69")]),e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",overlayContent:t.renderMask}})],1),e("t-space",{attrs:{direction:"vertical"}},[e("strong",{style:{fontSize:"20px"}},[t._v("\u65E0\u906E\u7F69")]),e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",overlayContent:t.renderButton}})],1)],1)},jt=[];const P={};var Pt=a(kt,zt,jt,!1,Ot,null,null,null);function Ot(t){for(let n in P)this[n]=P[n]}const ae=function(){return Pt.exports}(),It=o.extend({data(){return this.$createElement,{renderMask:t=>t("div",{style:{background:"rgba(0,0,0,.4)",color:"#fff",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},["\u9884\u89C8"])}},methods:{}});var Et=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-image",{style:{width:"284px",height:"160px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",overlayContent:t.renderMask,overlayTrigger:"hover"}})},Rt=[];const O={};var St=a(It,Et,Rt,!1,Dt,null,null,null);function Dt(t){for(let n in O)this[n]=O[n]}const oe=function(){return St.exports}();var Mt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("t-space",{attrs:{direction:"vertical",align:"center"}},[e("t-image",{style:{maxWidth:"100%"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",srcset:{"image/avif":"https://tdesign.gtimg.com/img/tdesign-image.avif","image/webp":"https://tdesign.gtimg.com/img/tdesign-image.webp"},shape:"square",fit:"scale-down"}}),e("span",[t._v(".avif / .webp")])],1)},Lt=[];const Vt={},I={};var Tt=a(Vt,Mt,Lt,!1,Ft,null,null,null);function Ft(t){for(let n in I)this[n]=I[n]}const se=function(){return Tt.exports}(),ce=`<template>
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
`,pe=`<template>
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
`,le=`<template>
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
`,ge=`<template>
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
      // overlayContent \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      label: (h) => (
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
`,me=`<template>
  <div>
    <t-space :size="24" direction="vertical">
      <div>
        <h3 :style="{ 'margin-bottom': '15px' }">\u52A0\u8F7D\u4E2D\u7684\u56FE\u7247</h3>
        <t-space>
          <t-space direction="vertical">
            <span>\u9ED8\u8BA4\u5360\u4F4D</span>
            <t-image
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              :key="loadingCount"
              :style="{ width: '284px', height: '160px' }"
            />
            <t-button variant="outline" @click="loadingCount = loadingCount + 3">
              <template #icon><refresh-icon /></template>
              \u91CD\u6F14 loading
            </t-button>
          </t-space>

          <t-space direction="vertical">
            <span>\u81EA\u5B9A\u4E49\u5360\u4F4D</span>
            <t-image
              :key="loadingCount"
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              :style="{ width: '284px', height: '160px' }"
            >
              <template #loading>
                <qrcode-icon />
              </template>
            </t-image>
          </t-space>
        </t-space>
      </div>
      <div>
        <h3 :style="{ 'margin-bottom': '15px' }">\u52A0\u8F7D\u5931\u8D25\u7684\u56FE\u7247</h3>
        <t-space>
          <t-space direction="vertical">
            <span>\u9ED8\u8BA4\u9519\u8BEF</span>
            <t-image src="" :key="errorCount" :style="{ width: '284px', height: '160px' }" />

            <t-button variant="outline" @click="errorCount = errorCount + 3">
              <template #icon><refresh-icon /></template>
              \u91CD\u6F14 error
            </t-button>
          </t-space>

          <t-space direction="vertical">
            <span>\u81EA\u5B9A\u4E49\u9519\u8BEF</span>
            <t-image
              src=""
              :key="errorCount"
              :style="{ width: '284px', height: '160px' }"
              :error="renderErrorContent"
            />
          </t-space>
        </t-space>
      </div>
    </t-space>
  </div>
</template>

<script lang="jsx">
import Vue from 'vue';
import { RefreshIcon, ImageErrorIcon, QrcodeIcon } from 'tdesign-icons-vue';

export default Vue.extend({
  components: { RefreshIcon, QrcodeIcon },
  data() {
    return {
      loadingCount: 0,
      errorCount: 0,
    };
  },
  methods: {
    renderErrorContent() {
      return <ImageErrorIcon size="24" />;
    },
  },
});
<\/script>
`,de=`<template>
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

      // renderPlaceholder \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      renderPlaceholder: (h) => (
        <img width="100%" height="100%" src="https://tdesign.gtimg.com/demo/demo-image-5.png" />
      ),

      // renderLoading \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      renderLoading: (h) => (
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
`,he=`<template>
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
`,ue=`<template>
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
      // renderMask \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      renderMask: (h) => (
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
      // renderButton \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      renderButton: (h) => (
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
`,ve=`<template>
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
      // renderMask \u652F\u6301\u63D2\u69FD
      // eslint-disable-next-line
      renderMask: (h) => (
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
`,fe=`<template>
  <t-space direction="vertical" align="center">
    <t-image
      src="https://tdesign.gtimg.com/demo/demo-image-1.png"
      :srcset="{
        'image/avif': 'https://tdesign.gtimg.com/img/tdesign-image.avif',
        'image/webp': 'https://tdesign.gtimg.com/img/tdesign-image.webp',
      }"
      shape="square"
      :style="{ maxWidth: '100%' }"
      fit="scale-down"
    />
    <span>.avif / .webp</span>
  </t-space>
</template>
`,qt=[],L={};L.setup=(t,n)=>{const e=u(qt),r=[{label:"image",value:"image"}],i={image:`
        <t-image v-bind="configProps" src="https://tdesign.gtimg.com/demo/demo-image-1.png" fit="cover" :style="{ width: '120px', height: '120px' }" />
      `},c=u(`<template>${i[r[0].value].trim()}</template>`);function p(s){c.value=`<template>${i[s].trim()}</template>`}return{configList:e,panelList:r,usageCode:c,onPanelChange:p}};var Bt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-usage",{attrs:{code:t.usageCode,"config-list":t.configList,"panel-list":t.panelList},on:{PanelChange:t.onPanelChange},scopedSlots:t._u([{key:"image",fn:function(r){var i=r.configProps;return[e("t-image",t._b({style:{width:"120px",height:"120px"},attrs:{src:"https://tdesign.gtimg.com/demo/demo-image-1.png",fit:"cover"}},"t-image",i,!1))]}}])})},Ht=[];const E={};var At=a(L,Bt,Ht,!1,Qt,null,null,null);function Qt(t){for(let n in E)this[n]=E[n]}const _e=function(){return At.exports}();export{Yt as D,_e as U,Zt as a,te as b,ee as c,ne as d,re as e,ie as f,ae as g,oe as h,se as i,ce as j,pe as k,le as l,ge as m,me as n,de as o,he as p,ue as q,ve as r,fe as s};
