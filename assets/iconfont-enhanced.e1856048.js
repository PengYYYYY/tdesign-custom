import{V as k,n as i}from"./index.fb7ca27a.js";import{c as C,I as v}from"./index.6e0dc257.js";import{u as _,_ as l,C as x}from"./use-size-props.363c09d5.js";import{_ as b,I as U}from"./icon.ca3926ce.js";import{C as $}from"./close.15ba829a.js";import{C as O}from"./check-circle-filled.e727019c.js";var F=["size"];function a(n,c){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);c&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),e.push.apply(e,t)}return e}function m(n){for(var c=1;c<arguments.length;c++){var e=arguments[c]!=null?arguments[c]:{};c%2?a(Object(e),!0).forEach(function(t){l(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}var j={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 1.5a6.5 6.5 0 000 13v-1.63A4.87 4.87 0 1112.88 8h1.62A6.5 6.5 0 008 1.5z",fillOpacity:.9}}]},D=k.extend({name:"LoadingIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(c,e){var t=e.props,o=e.data,r=t.size,y=b(t,F),s=_(r),z=s.className,w=s.style,S=m(m({},y||{}),{},{id:"loading",icon:j,staticClass:z,style:w});return o.props=S,c(U,o)}}),P={name:{type:String,default:"",required:!0},size:{type:String,default:void 0},tag:{type:String,default:"i"},url:{type:[String,Array],default:void 0},loadDefaultIcons:{type:Boolean,default:!0},onClick:Function},p=x.classPrefix,E="https://tdesign.gtimg.com/icon/0.1.2/fonts/index.css",L=k.extend({name:"IconFont",props:P,computed:{isBuiltinIcon:function(){return this.url&&/^t-icon-(\w|-)+$/.test(this.name)},classes:function(){var c,e="".concat(p,"-icon"),t=_(this.size),o=t.className,r=[(c={},l(c,this.name,this.url),l(c,e,!this.url||this.isBuiltinIcon),l(c,"".concat(e,"-").concat(this.name),!this.url),c),o];return r},iconStyle:function(){return["small","medium","large"].includes(this.size)?{}:{"font-size":this.size}}},mounted:function(){var c=[];this.url&&(c=this.url instanceof Array?this.url.concat():[this.url]),this.loadDefaultIcons&&c.push(E),Array.from(new Set(c)).forEach(function(e){C(e,"".concat(p,"-iconfont-stylesheet--unique-class"))})},methods:{handleClick:function(c){var e;this.$emit("click",{e:c}),(e=this.onClick)===null||e===void 0||e.call(this,{e:c})}},render:function(){var c=arguments[0],e=this.tag;return c(e,{class:this.classes,style:this.iconStyle,on:{click:this.handleClick}})}}),I=L,N=function(){var n=this,c=n.$createElement,e=n._self._c||c;return e("t-space",{attrs:{direction:"vertical"}},[e("t-space",{attrs:{"break-line":""}},[e("icon",{staticStyle:{color:"#999999"},attrs:{name:"loading"}}),e("icon",{attrs:{name:"close"},on:{click:n.onIconClose}}),e("icon",{attrs:{name:"check-circle-filled"}})],1),e("t-space",{attrs:{"break-line":"",align:"center"}},[e("icon",{attrs:{name:"check-circle-filled",size:"small"}}),e("icon",{attrs:{name:"check-circle-filled"}}),e("icon",{attrs:{name:"check-circle-filled",size:"medium"}}),e("icon",{attrs:{name:"check-circle-filled",size:"large"}}),e("icon",{attrs:{name:"check-circle-filled",size:"25px"}}),e("icon",{attrs:{name:"check-circle-filled",size:"2em"}})],1),e("t-space",{attrs:{"break-line":""}},[e("icon",{staticStyle:{color:"red"},attrs:{name:"check-circle-filled"}}),e("icon",{staticStyle:{color:"green"},attrs:{name:"check-circle-filled"}}),e("icon",{staticStyle:{color:"orange"},attrs:{name:"check-circle-filled"}})],1)],1)},A=[];const B={components:{Icon:v},methods:{onIconClose(){console.log("icon was clicked.")}}},f={};var M=i(B,N,A,!1,R,null,null,null);function R(n){for(let c in f)this[c]=f[c]}const he=function(){return M.exports}();var q=function(){var n=this,c=n.$createElement,e=n._self._c||c;return e("t-space",{attrs:{direction:"vertical"}},[e("t-space",{attrs:{"break-line":"",align:"center"}},[e("loading-icon"),e("close-icon",{on:{click:n.onIconClose}}),e("check-circle-filled-icon")],1),e("t-space",{attrs:{"break-line":"",align:"center"}},[e("check-circle-filled-icon",{attrs:{size:"small"}}),e("check-circle-filled-icon"),e("check-circle-filled-icon",{attrs:{size:"medium"}}),e("check-circle-filled-icon",{attrs:{size:"large"}}),e("check-circle-filled-icon",{attrs:{size:"25px"}}),e("check-circle-filled-icon",{attrs:{size:"2em"}})],1),e("t-space",{attrs:{"break-line":"",align:"center"}},[e("check-circle-filled-icon",{staticStyle:{color:"red"}}),e("check-circle-filled-icon",{staticStyle:{color:"green"}}),e("check-circle-filled-icon",{staticStyle:{color:"orange"}})],1)],1)},V=[];const K={components:{LoadingIcon:D,CloseIcon:$,CheckCircleFilledIcon:O},methods:{onIconClose(){console.log("icon was clicked.")}}},d={};var T=i(K,q,V,!1,W,null,null,null);function W(n){for(let c in d)this[c]=d[c]}const ue=function(){return T.exports}();var G=function(){var n=this,c=n.$createElement,e=n._self._c||c;return e("t-space",{attrs:{direction:"vertical"}},[e("t-space",{attrs:{"break-line":"",align:"center"}},[e("icon",{attrs:{name:"cps-icon-home-sheep",url:n.newSvgUrl}}),e("icon",{attrs:{name:"cps-icon-home-sheep",url:n.newSvgUrl,size:"medium"}}),e("icon",{attrs:{name:"cps-icon-home-sheep",url:n.newSvgUrl,size:"large"}}),e("icon",{attrs:{name:"cps-icon-home-sheep",url:n.newSvgUrl,size:"25px"}}),e("icon",{attrs:{name:"cps-icon-home-sheep",url:n.newSvgUrl,size:"2em"}})],1),e("t-space",{attrs:{"break-line":"",align:"center"}},[e("icon",{staticStyle:{color:"red"},attrs:{name:"cps-icon-home-sheep",url:n.newSvgUrl}}),e("icon",{staticStyle:{color:"green"},attrs:{name:"cps-icon-home-sheep",url:n.newSvgUrl}}),e("icon",{staticStyle:{color:"orange"},attrs:{name:"cps-icon-home-sheep",url:n.newSvgUrl}}),e("icon",{attrs:{name:"t-icon-home",url:n.newSvgUrl}})],1)],1)},H=[];const J={components:{Icon:v},data(){return{newSvgUrl:"https://tdesign.gtimg.com/icon/default-demo/index.js"}}},h={};var Q=i(J,G,H,!1,X,null,null,null);function X(n){for(let c in h)this[c]=h[c]}const ge=function(){return Q.exports}();var Y=function(){var n=this,c=n.$createElement,e=n._self._c||c;return e("t-space",{attrs:{direction:"vertical"}},[e("t-space",{attrs:{"break-line":""}},[e("icon-font",{attrs:{name:"loading"}}),e("icon-font",{attrs:{name:"close"},on:{click:n.onIconClose}}),e("icon-font",{attrs:{name:"check-circle-filled"}})],1),e("t-space",{attrs:{"break-line":"",align:"center"}},[e("icon-font",{attrs:{name:"check-circle-filled",size:"small"}}),e("icon-font",{attrs:{name:"check-circle-filled"}}),e("icon-font",{attrs:{name:"check-circle-filled",size:"medium"}}),e("icon-font",{attrs:{name:"check-circle-filled",size:"large"}}),e("icon-font",{attrs:{name:"check-circle-filled",size:"25px"}}),e("icon-font",{attrs:{name:"check-circle-filled",size:"2em"}})],1),e("t-space",{attrs:{"break-line":"",align:"center"}},[e("icon-font",{staticStyle:{color:"red"},attrs:{name:"check-circle-filled"}}),e("icon-font",{staticStyle:{color:"green"},attrs:{name:"check-circle-filled"}}),e("icon-font",{staticStyle:{color:"orange"},attrs:{name:"check-circle-filled"}})],1)],1)},Z=[];const ee={components:{IconFont:I},methods:{onIconClose(){console.log("icon was clicked.")}}},u={};var ne=i(ee,Y,Z,!1,ce,null,null,null);function ce(n){for(let c in u)this[c]=u[c]}const ke=function(){return ne.exports}();var te=function(){var n=this,c=n.$createElement,e=n._self._c||c;return e("t-space",{attrs:{direction:"vertical"}},[e("t-space",{attrs:{"break-line":"",align:"center"}},[e("icon-font",{attrs:{name:"cps-icon cps-icon-home-sheep",url:n.newIconfontUrl}}),e("icon-font",{attrs:{name:"cps-icon cps-icon-home-sheep",url:n.newIconfontUrl,size:"medium"}}),e("icon-font",{attrs:{name:"cps-icon cps-icon-home-sheep",url:n.newIconfontUrl,size:"large"}}),e("icon-font",{attrs:{name:"cps-icon cps-icon-home-sheep",url:n.newIconfontUrl,size:"25px"}}),e("icon-font",{attrs:{name:"cps-icon cps-icon-home-sheep",url:n.newIconfontUrl,size:"2em"}})],1),e("t-space",{attrs:{"break-line":"",align:"center"}},[e("icon-font",{staticStyle:{color:"red"},attrs:{name:"cps-icon cps-icon-home-sheep",url:n.newIconfontUrl}}),e("icon-font",{staticStyle:{color:"green"},attrs:{name:"cps-icon cps-icon-home-sheep",url:n.newIconfontUrl}}),e("icon-font",{staticStyle:{color:"orange"},attrs:{name:"cps-icon cps-icon-home-sheep",url:n.newIconfontUrl}}),e("icon-font",{attrs:{name:"t-icon-home",url:n.newIconfontUrl}})],1),e("br")],1)},oe=[];const ie={components:{IconFont:I},data(){return{newIconfontUrl:"https://tdesign.gtimg.com/icon/default-demo/index.css"}}},g={};var le=i(ie,te,oe,!1,re,null,null,null);function re(n){for(let c in g)this[c]=g[c]}const ve=function(){return le.exports}(),_e=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <icon name="loading" style="color: #999999" />
      <icon name="close" @click="onIconClose" />
      <icon name="check-circle-filled" />
    </t-space>
    <t-space break-line align="center">
      <icon name="check-circle-filled" size="small" />
      <icon name="check-circle-filled" />
      <icon name="check-circle-filled" size="medium" />
      <icon name="check-circle-filled" size="large" />
      <icon name="check-circle-filled" size="25px" />
      <icon name="check-circle-filled" size="2em" />
    </t-space>
    <t-space break-line>
      <icon name="check-circle-filled" style="color: red" />
      <icon name="check-circle-filled" style="color: green" />
      <icon name="check-circle-filled" style="color: orange" />
    </t-space>
  </t-space>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: { Icon },
  methods: {
    onIconClose() {
      console.log('icon was clicked.');
    },
  },
};
<\/script>
`,Ie=`<template>
  <t-space direction="vertical">
    <t-space break-line align="center">
      <loading-icon />
      <close-icon @click="onIconClose" />
      <check-circle-filled-icon />
    </t-space>
    <t-space break-line align="center">
      <check-circle-filled-icon size="small" />
      <check-circle-filled-icon />
      <check-circle-filled-icon size="medium" />
      <check-circle-filled-icon size="large" />
      <check-circle-filled-icon size="25px" />
      <check-circle-filled-icon size="2em" />
    </t-space>
    <t-space break-line align="center">
      <check-circle-filled-icon style="color: red" />
      <check-circle-filled-icon style="color: green" />
      <check-circle-filled-icon style="color: orange" />
    </t-space>
  </t-space>
</template>

<script>
import { LoadingIcon, CloseIcon, CheckCircleFilledIcon } from 'tdesign-icons-vue';

export default {
  components: { LoadingIcon, CloseIcon, CheckCircleFilledIcon },
  methods: {
    onIconClose() {
      console.log('icon was clicked.');
    },
  },
};
<\/script>
`,ye=`<template>
  <t-space direction="vertical">
    <t-space break-line align="center">
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="medium" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="large" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="25px" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" size="2em" />
    </t-space>
    <t-space break-line align="center">
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" style="color: red" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" style="color: green" />
      <icon name="cps-icon-home-sheep" :url="newSvgUrl" style="color: orange" />
      <!-- \u5F15\u5165\u65B0 Icon \u4E4B\u540E\uFF0C\u5185\u7F6E Icon \u4F9D\u65E7\u6709\u6548\u3002name \u4F20\u5165\u56FE\u6807\u540D\u79F0\u5168\u79F0\u3002 -->
      <icon name="t-icon-home" :url="newSvgUrl" />
    </t-space>
  </t-space>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      newSvgUrl: 'https://tdesign.gtimg.com/icon/default-demo/index.js',
    };
  },
};
<\/script>
`,ze=`<template>
  <t-space direction="vertical">
    <t-space break-line>
      <icon-font name="loading" />
      <icon-font name="close" @click="onIconClose" />
      <icon-font name="check-circle-filled" />
    </t-space>
    <t-space break-line align="center">
      <icon-font name="check-circle-filled" size="small" />
      <icon-font name="check-circle-filled" />
      <icon-font name="check-circle-filled" size="medium" />
      <icon-font name="check-circle-filled" size="large" />
      <icon-font name="check-circle-filled" size="25px" />
      <icon-font name="check-circle-filled" size="2em" />
    </t-space>
    <t-space break-line align="center">
      <icon-font name="check-circle-filled" style="color: red" />
      <icon-font name="check-circle-filled" style="color: green" />
      <icon-font name="check-circle-filled" style="color: orange" />
    </t-space>
  </t-space>
</template>

<script>
import { IconFont } from 'tdesign-icons-vue';

export default {
  components: { IconFont },
  methods: {
    onIconClose() {
      console.log('icon was clicked.');
    },
  },
};
<\/script>
`,we=`<template>
  <t-space direction="vertical">
    <t-space break-line align="center">
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="medium" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="large" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="25px" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" size="2em" />
    </t-space>
    <t-space break-line align="center">
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" style="color: red" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" style="color: green" />
      <icon-font name="cps-icon cps-icon-home-sheep" :url="newIconfontUrl" style="color: orange" />
      <!-- \u5F15\u5165\u65B0 Icon \u4E4B\u540E\uFF0C\u5185\u7F6E Icon \u4F9D\u65E7\u6709\u6548\u3002name \u4F20\u5165\u56FE\u6807\u540D\u79F0\u5168\u79F0\u3002 -->
      <icon-font name="t-icon-home" :url="newIconfontUrl" />
    </t-space>
    <br />
  </t-space>
</template>

<script>
import { IconFont } from 'tdesign-icons-vue';

export default {
  components: { IconFont },
  data() {
    return {
      newIconfontUrl: 'https://tdesign.gtimg.com/icon/default-demo/index.css',
    };
  },
};
<\/script>
`;export{he as D,ue as a,ge as b,ke as c,ve as d,_e as e,Ie as f,ye as g,ze as h,we as i};
