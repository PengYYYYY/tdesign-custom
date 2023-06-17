import{n as t,r}from"./index.4ab857ef.js";var M=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-cascader",{attrs:{label:"\u5355\u9009\uFF1A",options:e.options,clearable:""},on:{change:e.onChange},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},j=[];const P={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:"1.1"}},methods:{onChange(e,l){console.log(this.value,e,l),console.log("path: ",l.node.getPath())}}},i={};var V=t(P,M,j,!1,E,null,null,null);function E(e){for(let l in i)this[l]=i[l]}const sl=function(){return V.exports}();var w=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-cascader",{attrs:{options:e.options,multiple:"",clearable:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},R=[];const B={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:["1.1"]}},methods:{handleValueChange(e){this.value=e}}},v={};var z=t(B,w,R,!1,I,null,null,null);function I(e){for(let l in v)this[l]=v[l]}const ul=function(){return z.exports}(),L={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:["1.1","1.2","1.3"],open:!0}},methods:{collapsedItems(e,{value:l,count:n}){if(!n)return;const a=l instanceof Array?l:[l];return e("t-popup",[e("div",{slot:"content"},[a.map(o=>e("p",{style:"padding: 10px;"},[o.label]))]),e("span",{directives:[{name:"show",value:n>0}],style:"color: #ED7B2F; margin-left: 10px;"},["+",n])])},handleBlur(e){console.log(e)}}};var A=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{options:e.options,"on-remove":e.handleBlur,multiple:"","min-collapsed-num":1},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("t-cascader",{attrs:{options:e.options,"collapsed-items":e.collapsedItems,multiple:"","min-collapsed-num":1},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("t-cascader",{attrs:{options:e.options,multiple:"",clearable:"","min-collapsed-num":1},scopedSlots:e._u([{key:"collapsedItems",fn:function(a){var o=a.collapsedSelectedItems,s=a.count;return[n("t-popup",{scopedSlots:e._u([{key:"content",fn:function(){return e._l(o,function(u,c){return n("p",{key:c,staticStyle:{padding:"10px"}},[e._v(" "+e._s(u)+" ")])})},proxy:!0}],null,!0)},[n("span",{directives:[{name:"show",rawName:"v-show",value:s>0,expression:"count > 0"}],staticStyle:{color:"#00a870","margin-left":"10px"}},[e._v("+"+e._s(s))])])]}}]),model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)},T=[];const p={};var O=t(L,A,T,!1,U,null,null,null);function U(e){for(let l in p)this[l]=p[l]}const cl=function(){return O.exports}();var q=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{options:e.options,"default-value":e.value,clearable:"",size:"small"}}),n("t-cascader",{attrs:{options:e.options,clearable:"",size:"medium"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("t-cascader",{attrs:{options:e.options,value:e.value,clearable:"",size:"large"},on:{change:e.handleValueChange}})],1)},J=[];const N={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:"1.1"}},methods:{handleValueChange(e){this.value=e}}},d={};var G=t(N,q,J,!1,H,null,null,null);function H(e){for(let l in d)this[l]=d[l]}const rl=function(){return G.exports}();var K=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{options:e.options,filterable:"",clearable:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("t-cascader",{attrs:{options:e.options,filterable:"",clearable:"",multiple:"","min-collapsed-num":2},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),n("t-cascader",{attrs:{filter:e.filterMethod,options:e.options,clearable:"","min-collapsed-num":2},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1)},Q=[];const W={data(){return{options:[{label:"\u5F53\u9009\u9879\u4E00\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"2.2"}]}],value:"",value2:["1.1"],value3:""}},methods:{filterMethod(e,l){return console.log("filter:",e,l.label),l.label.indexOf(e)!==-1}}},m={};var X=t(W,K,Q,!1,Y,null,null,null);function Y(e){for(let l in m)this[l]=m[l]}const il=function(){return X.exports}();var Z=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{options:e.options,disabled:""},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),n("t-cascader",{attrs:{options:e.options,disabled:"",multiple:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},ee=[];const le={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value1:"1.1",value2:["1.1"]}}},b={};var ne=t(le,Z,ee,!1,ae,null,null,null);function ae(e){for(let l in b)this[l]=b[l]}const vl=function(){return ne.exports}();var te=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{options:e.options,"show-all-levels":!1},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("t-cascader",{attrs:{options:e.options,"show-all-levels":!1,multiple:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},oe=[];const se={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:"",value2:[]}}},_={};var ue=t(se,te,oe,!1,ce,null,null,null);function ce(e){for(let l in _)this[l]=_[l]}const pl=function(){return ue.exports}();var re=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{options:e.options,"check-strictly":""},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),n("t-cascader",{attrs:{options:e.options,"check-strictly":"",multiple:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},ie=[];const ve={data(){return{options:[{value:"1",label:"1",children:[{value:"1.1",label:"1.1",children:[{value:"1.1.1",label:"1.1.1",children:[{value:"1.1.1.1",label:"1.1.1.1"},{value:"1.1.1.2",label:"1.1.1.2"}]},{value:"1.1.2",label:"1.1.2",children:[{value:"1.1.2.1",label:"1.1.2.1"},{value:"1.1.2.2",label:"1.1.2.2"}]}]},{value:"1.2",label:"1.2",children:[{value:"1.2.1",label:"1.2.1",children:[{value:"1.2.1.1",label:"1.2.1.1"},{value:"1.2.1.2",label:"1.2.1.2"}]},{value:"1.2.2",label:"1.2.2",children:[{value:"1.2.2.1",label:"1.2.2.1"},{value:"1.2.2.2",label:"1.2.2.2"}]}]}]},{value:"2",label:"2",children:[{value:"2.1",label:"2.1"},{value:"2.2",label:"2.2"}]}],value1:"1.2.2",value2:["1.1.2.1","2"]}}},h={};var pe=t(ve,re,ie,!1,de,null,null,null);function de(e){for(let l in h)this[l]=h[l]}const dl=function(){return pe.exports}();var me=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("div",[e._v(e._s(e.value))]),n("t-cascader",{attrs:{options:e.options,"value-type":"full"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("div",[e._v(e._s(e.value2))]),n("t-cascader",{attrs:{multiple:"",options:e.options,"value-type":"full"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},be=[];const _e={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:["1","1.1"],value2:[["1","1.1"],["1","1.2"]]}}},f={};var he=t(_e,me,be,!1,fe,null,null,null);function fe(e){for(let l in f)this[l]=f[l]}const ml=function(){return he.exports}();var xe=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{options:e.options,multiple:"","value-mode":"onlyLeaf"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),n("t-cascader",{attrs:{options:e.options,multiple:"","value-mode":"parentFirst"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),n("t-cascader",{attrs:{options:e.options,multiple:"","value-mode":"all"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1)},$e=[];const ge={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value1:[],value2:[],value3:[]}}},x={};var ye=t(ge,xe,$e,!1,ke,null,null,null);function ke(e){for(let l in x)this[l]=x[l]}const bl=function(){return ye.exports}();var Ce=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{options:e.options,trigger:"click"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("t-cascader",{attrs:{options:e.options,trigger:"hover"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)},De=[];const Se={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:""}}},$={};var Fe=t(Se,Ce,De,!1,Me,null,null,null);function Me(e){for(let l in $)this[l]=$[l]}const _l=function(){return Fe.exports}();var je=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{options:e.options,clearable:"",placeholder:"\u8BF7\u9009\u62E9"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),n("t-cascader",{attrs:{multiple:"",options:e.options,clearable:"",placeholder:"\u8BF7\u9009\u62E9"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},Pe=[];const Ve={data(){return{options:[{label:"\u5F53\u9009\u9879\u4E00\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"2.2"}]}],value1:"1.1",value2:["1.1"]}}},g={};var Ee=t(Ve,je,Pe,!1,we,null,null,null);function we(e){for(let l in g)this[l]=g[l]}const hl=function(){return Ee.exports}();var Re=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-cascader",{attrs:{options:e.options,multiple:"",clearable:"",max:3},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},Be=[];const ze={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:[]}}},y={};var Ie=t(ze,Re,Be,!1,Le,null,null,null);function Le(e){for(let l in y)this[l]=y[l]}const fl=function(){return Ie.exports}();var Ae=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{keys:{label:"name",value:"code",children:"items"},options:e.options,clearable:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("t-cascader",{attrs:{keys:{label:"name",value:"code",children:"items"},options:e.options,clearable:"",multiple:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},Te=[];const Oe={data(){return{options:[{name:"\u9009\u9879\u4E00",code:"1",items:[{name:"\u5B50\u9009\u9879\u4E00",code:"1.1"},{name:"\u5B50\u9009\u9879\u4E8C",code:"1.2"},{name:"\u5B50\u9009\u9879\u4E09",code:"1.3"}]},{name:"\u9009\u9879\u4E8C",code:"2",items:[{name:"\u5B50\u9009\u9879\u4E00",code:"2.1"},{name:"\u5B50\u9009\u9879\u4E8C",code:"2.2"}]}],value:"1.1",value2:["1.1"]}}},k={};var Ue=t(Oe,Ae,Te,!1,qe,null,null,null);function qe(e){for(let l in k)this[l]=k[l]}const xl=function(){return Ue.exports}();var Je=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("t-cascader",{attrs:{options:e.options,clearable:"",load:e.load},on:{change:e.handleChange},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),n("t-cascader",{attrs:{"value-type":"full",clearable:"",options:e.options,load:e.load,"input-props":e.inputProps},on:{change:e.handleChange1},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1)},Ne=[];const Ge={data(){return{options:[{label:"\u9009\u98791",value:"1",children:!0},{label:"\u9009\u98792",value:"2",children:!0}],value:"",value1:["1","1-1.0","1-1.0-1.1"],inputProps:{value:"\u9009\u98791 / \u9009\u98791.1 / \u9009\u98791.1.1"}}},methods:{load(e){return new Promise(l=>{setTimeout(()=>{let n=[];e.level<2&&(n=[{label:`${e.label}.1`,value:`${e.value}-1.${e.level}`,children:e.level<1},{label:`${e.label}.2`,value:`${e.value}-2.${e.level}`,children:e.level<1}]),l(n)},1e3)})},handleChange(e){console.log("value",e)},handleChange1(e,l){const{node:n}=l,o=n.getPath().map(s=>s.label).join(" / ");this.inputProps.value=o,console.log("value1",e)}}},C={};var He=t(Ge,Je,Ne,!1,Ke,null,null,null);function Ke(e){for(let l in C)this[l]=C[l]}const $l=function(){return He.exports}();var Qe=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("t-space",{attrs:{direction:"vertical"}},[n("div",{staticClass:"cascader-demo-panel-container"},[n("t-cascader-panel",{attrs:{options:e.options},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),n("div",{staticClass:"cascader-demo-panel-container"},[n("t-cascader-panel",{attrs:{options:e.options,multiple:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)])},We=[];const Xe={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:"",value2:[]}}},D={};var Ye=t(Xe,Qe,We,!1,Ze,null,null,null);function Ze(e){for(let l in D)this[l]=D[l]}const gl=function(){return Ye.exports}(),yl=`<template>
  <t-cascader label="\u5355\u9009\uFF1A" v-model="value" :options="options" clearable @change="onChange" />
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: '1.1',
    };
  },
  methods: {
    onChange(val, context) {
      console.log(this.value, val, context);
      console.log('path: ', context.node.getPath());
    },
  },
};
<\/script>
`,kl=`<template>
  <t-cascader v-model="value" :options="options" multiple clearable />
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: ['1.1'],
    };
  },
  methods: {
    handleValueChange(e) {
      this.value = e;
    },
  },
};
<\/script>
`,Cl=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" :on-remove="handleBlur" multiple :min-collapsed-num="1" />
    <t-cascader v-model="value" :options="options" :collapsed-items="collapsedItems" multiple :min-collapsed-num="1" />
    <t-cascader v-model="value" :options="options" multiple clearable :min-collapsed-num="1">
      <template #collapsedItems="{ collapsedSelectedItems, count }">
        <t-popup>
          <template #content>
            <p v-for="(item, index) in collapsedSelectedItems" :key="index" style="padding: 10px">
              {{ item }}
            </p>
          </template>
          <span v-show="count > 0" style="color: #00a870; margin-left: 10px">+{{ count }}</span>
        </t-popup>
      </template>
    </t-cascader>
  </t-space>
</template>
<script lang="jsx">
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: ['1.1', '1.2', '1.3'],
      open: true,
    };
  },
  methods: {
    collapsedItems(h, { value: selectedValue, count }) {
      if (!count) return;
      const value = selectedValue instanceof Array ? selectedValue : [selectedValue];
      // hover\u5C55\u793A\u5168\u90E8\u5DF2\u9009\u9879
      return (
        <t-popup>
          <div slot="content">
            {value.map((item) => (
              <p style="padding: 10px;">{item.label}</p>
            ))}
          </div>
          <span v-show={count > 0} style="color: #ED7B2F; margin-left: 10px;">
            +{count}
          </span>
        </t-popup>
      );
    },
    handleBlur(e) {
      console.log(e);
    },
  },
};
<\/script>
`,Dl=`<template>
  <t-space direction="vertical">
    <!-- \u975E\u53D7\u63A7\u7528\u6CD5 -->
    <t-cascader :options="options" :default-value="value" clearable size="small" />
    <!-- \u53D7\u63A7+\u8BED\u6CD5\u7CD6\u7528\u6CD5 -->
    <t-cascader v-model="value" :options="options" clearable size="medium" />
    <!-- \u53D7\u63A7\u7528\u6CD5 -->
    <t-cascader :options="options" :value="value" clearable size="large" @change="handleValueChange" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: '1.1',
    };
  },
  methods: {
    handleValueChange(e) {
      this.value = e;
    },
  },
};
<\/script>
`,Sl=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" filterable clearable />
    <t-cascader v-model="value2" :options="options" filterable clearable multiple :min-collapsed-num="2" />
    <t-cascader v-model="value3" :filter="filterMethod" :options="options" clearable :min-collapsed-num="2" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u5F53\u9009\u9879\u4E00\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
              value: '2.2',
            },
          ],
        },
      ],
      value: '',
      value2: ['1.1'],
      value3: '',
    };
  },
  methods: {
    filterMethod(search, node) {
      console.log('filter:', search, node.label);
      return node.label.indexOf(search) !== -1;
    },
  },
};
<\/script>
`,Fl=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" disabled />
    <t-cascader v-model="value2" :options="options" disabled multiple />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value1: '1.1',
      value2: ['1.1'],
    };
  },
};
<\/script>
`,Ml=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" :show-all-levels="false" />
    <t-cascader v-model="value2" :options="options" :show-all-levels="false" multiple />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: '',
      value2: [],
    };
  },
};
<\/script>
`,jl=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" check-strictly />
    <t-cascader v-model="value2" :options="options" check-strictly multiple />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
              children: [
                {
                  value: '1.1.1',
                  label: '1.1.1',
                  children: [
                    {
                      value: '1.1.1.1',
                      label: '1.1.1.1',
                    },
                    {
                      value: '1.1.1.2',
                      label: '1.1.1.2',
                    },
                  ],
                },
                {
                  value: '1.1.2',
                  label: '1.1.2',
                  children: [
                    {
                      value: '1.1.2.1',
                      label: '1.1.2.1',
                    },
                    {
                      value: '1.1.2.2',
                      label: '1.1.2.2',
                    },
                  ],
                },
              ],
            },
            {
              value: '1.2',
              label: '1.2',
              children: [
                {
                  value: '1.2.1',
                  label: '1.2.1',
                  children: [
                    {
                      value: '1.2.1.1',
                      label: '1.2.1.1',
                    },
                    {
                      value: '1.2.1.2',
                      label: '1.2.1.2',
                    },
                  ],
                },
                {
                  value: '1.2.2',
                  label: '1.2.2',
                  children: [
                    {
                      value: '1.2.2.1',
                      label: '1.2.2.1',
                    },
                    {
                      value: '1.2.2.2',
                      label: '1.2.2.2',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          value: '2',
          label: '2',
          children: [
            {
              value: '2.1',
              label: '2.1',
            },
            {
              value: '2.2',
              label: '2.2',
            },
          ],
        },
      ],
      value1: '1.2.2',
      value2: ['1.1.2.1', '2'],
    };
  },
};
<\/script>
`,Pl=`<template>
  <t-space direction="vertical">
    <div>{{ value }}</div>
    <t-cascader v-model="value" :options="options" value-type="full" />
    <div>{{ value2 }}</div>
    <t-cascader v-model="value2" multiple :options="options" value-type="full" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: ['1', '1.1'],
      value2: [
        ['1', '1.1'],
        ['1', '1.2'],
      ],
    };
  },
};
<\/script>
`,Vl=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" multiple value-mode="onlyLeaf" />
    <t-cascader v-model="value2" :options="options" multiple value-mode="parentFirst" />
    <t-cascader v-model="value3" :options="options" multiple value-mode="all" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value1: [],
      value2: [],
      value3: [],
    };
  },
};
<\/script>
`,El=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" trigger="click" />
    <t-cascader v-model="value" :options="options" trigger="hover" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: '',
    };
  },
};
<\/script>
`,wl=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" clearable placeholder="\u8BF7\u9009\u62E9" />
    <t-cascader v-model="value2" multiple :options="options" clearable placeholder="\u8BF7\u9009\u62E9" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u5F53\u9009\u9879\u4E00\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6',
              value: '2.2',
            },
          ],
        },
      ],
      value1: '1.1',
      value2: ['1.1'],
    };
  },
};
<\/script>
`,Rl=`<template>
  <t-cascader v-model="value" :options="options" multiple clearable :max="3" />
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: [],
    };
  },
};
<\/script>
`,Bl=`<template>
  <t-space direction="vertical">
    <t-cascader
      v-model="value"
      :keys="{ label: 'name', value: 'code', children: 'items' }"
      :options="options"
      clearable
    />
    <t-cascader
      v-model="value2"
      :keys="{ label: 'name', value: 'code', children: 'items' }"
      :options="options"
      clearable
      multiple
    />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          name: '\u9009\u9879\u4E00',
          code: '1',
          items: [
            {
              name: '\u5B50\u9009\u9879\u4E00',
              code: '1.1',
            },
            {
              name: '\u5B50\u9009\u9879\u4E8C',
              code: '1.2',
            },
            {
              name: '\u5B50\u9009\u9879\u4E09',
              code: '1.3',
            },
          ],
        },
        {
          name: '\u9009\u9879\u4E8C',
          code: '2',
          items: [
            {
              name: '\u5B50\u9009\u9879\u4E00',
              code: '2.1',
            },
            {
              name: '\u5B50\u9009\u9879\u4E8C',
              code: '2.2',
            },
          ],
        },
      ],
      value: '1.1',
      value2: ['1.1'],
    };
  },
};
<\/script>
`,zl=`<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" clearable :load="load" @change="handleChange" />
    <t-cascader
      v-model="value1"
      value-type="full"
      clearable
      :options="options"
      :load="load"
      :input-props="inputProps"
      @change="handleChange1"
    />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u98791',
          value: '1',
          children: true,
        },
        {
          label: '\u9009\u98792',
          value: '2',
          children: true,
        },
      ],
      value: '',
      value1: ['1', '1-1.0', '1-1.0-1.1'],
      inputProps: {
        value: '\u9009\u98791 / \u9009\u98791.1 / \u9009\u98791.1.1',
      },
    };
  },
  methods: {
    load(node) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < 2) {
            nodes = [
              {
                label: \`\${node.label}.1\`,
                value: \`\${node.value}-1.\${node.level}\`,
                children: node.level < 1,
              },
              {
                label: \`\${node.label}.2\`,
                value: \`\${node.value}-2.\${node.level}\`,
                children: node.level < 1,
              },
            ];
          }
          resolve(nodes);
        }, 1000);
      });
    },
    handleChange(value) {
      console.log('value', value);
    },
    handleChange1(value, context) {
      const { node } = context;
      const path = node.getPath();
      const labelPath = path.map((item) => item.label).join(' / ');
      this.inputProps.value = labelPath;
      console.log('value1', value);
    },
  },
};
<\/script>
`,Il=`<template>
  <t-space direction="vertical">
    <div class="cascader-demo-panel-container">
      <t-cascader-panel v-model="value" :options="options" />
    </div>
    <div class="cascader-demo-panel-container">
      <t-cascader-panel v-model="value2" :options="options" multiple />
    </div>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '\u9009\u9879\u4E00',
          value: '1',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '1.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '1.2',
            },
            {
              label: '\u5B50\u9009\u9879\u4E09',
              value: '1.3',
            },
          ],
        },
        {
          label: '\u9009\u9879\u4E8C',
          value: '2',
          children: [
            {
              label: '\u5B50\u9009\u9879\u4E00',
              value: '2.1',
            },
            {
              label: '\u5B50\u9009\u9879\u4E8C',
              value: '2.2',
            },
          ],
        },
      ],
      value: '',
      value2: [],
    };
  },
};
<\/script>
<style>
.cascader-demo-panel-container {
  border: 1px solid #eee;
  width: 100%;
}
</style>
`,el=[{name:"checkStrictly",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"filterable",type:"Boolean",defaultValue:!1,options:[]},{name:"lazy",type:"Boolean",defaultValue:!0,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"showAllLevels",type:"Boolean",defaultValue:!0,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"large",value:"large"},{label:"medium",value:"medium"},{label:"small",value:"small"}]},{name:"trigger",type:"enum",defaultValue:"click",options:[{label:"click",value:"click"},{label:"hover",value:"hover"}]},{name:"valueMode",type:"enum",defaultValue:"onlyLeaf",options:[{label:"onlyLeaf",value:"onlyLeaf"},{label:"parentFirst",value:"parentFirst"},{label:"all",value:"all"}]},{name:"valueType",type:"enum",defaultValue:"single",options:[{label:"single",value:"single"},{label:"full",value:"full"}]}],F={};F.setup=(e,l)=>{const n=r(el),a=[{label:"cascader",value:"cascader"}],o={cascader:`
        <t-cascader :options="[
          {
            label: '\u9009\u9879\u4E00',
            value: '1',
            children: [
              { label: '\u5B50\u9009\u9879\u4E00', value: '1.1' },
              { label: '\u5B50\u9009\u9879\u4E8C', value: '1.2' },
            ],
          },
          {
            label: '\u9009\u9879\u4E8C',
            value: '2',
            children: [
              { label: '\u5B50\u9009\u9879\u4E00', value: '2.1' },
              { label: '\u5B50\u9009\u9879\u4E8C', value: '2.2' },
            ],
          },
        ]" v-bind="configProps" />
      `},s=r(`<template>${o[a[0].value].trim()}</template>`);function u(c){s.value=`<template>${o[c].trim()}</template>`}return{configList:n,panelList:a,usageCode:s,onPanelChange:u}};var ll=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"cascader",fn:function(a){var o=a.configProps;return[n("t-cascader",e._b({attrs:{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}]}},"t-cascader",o,!1))]}}])})},nl=[];const S={};var al=t(F,ll,nl,!1,tl,null,null,null);function tl(e){for(let l in S)this[l]=S[l]}const Ll=function(){return al.exports}();export{wl as A,Rl as B,Bl as C,sl as D,zl as E,Il as F,Ll as U,ul as a,cl as b,rl as c,il as d,vl as e,pl as f,dl as g,ml as h,bl as i,_l as j,hl as k,fl as l,xl as m,$l as n,gl as o,yl as p,kl as q,Cl as r,Dl as s,Sl as t,Fl as u,Ml as v,jl as w,Pl as x,Vl as y,El as z};
