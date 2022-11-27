import{n as t,r}from"./index.0d6d9eb3.js";var M=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-cascader",{attrs:{options:e.options,clearable:""},on:{change:e.onChange},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},E=[];const j={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:"1.1"}},methods:{onChange(e,n){console.log(this.value,e,n),console.log("path: ",n.node.getPath())}}},i={};var V=t(j,M,E,!1,w,null,null,null);function w(e){for(let n in i)this[n]=i[n]}const sn=function(){return V.exports}();var R=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-cascader",{attrs:{options:e.options,multiple:"",clearable:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},B=[];const z={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:["1.1"]}},methods:{handleValueChange(e){this.value=e}}},v={};var I=t(z,R,B,!1,L,null,null,null);function L(e){for(let n in v)this[n]=v[n]}const un=function(){return I.exports}(),P={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:["1.1","1.2","1.3"],open:!0}},methods:{collapsedItems(e,{value:n,count:l}){if(!(!(n instanceof Array)||!l))return e("t-popup",[e("div",{slot:"content"},[n.map(a=>e("p",{style:"padding: 10px;"},[a]))]),e("span",{directives:[{name:"show",value:l>0}],style:"color: #ED7B2F; margin-left: 10px;"},["+",l-1])])},handleBlur(e){console.log(e)}}};var A=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-cascader",{attrs:{options:e.options,"on-remove":e.handleBlur,multiple:"","min-collapsed-num":1},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("t-cascader",{attrs:{options:e.options,"collapsed-items":e.collapsedItems,multiple:"","min-collapsed-num":1},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("t-cascader",{attrs:{options:e.options,multiple:"",clearable:"","min-collapsed-num":1},scopedSlots:e._u([{key:"collapsedItems",fn:function(a){var o=a.collapsedSelectedItems,s=a.count;return[l("t-popup",{scopedSlots:e._u([{key:"content",fn:function(){return e._l(o,function(u,c){return l("p",{key:c,staticStyle:{padding:"10px"}},[e._v(" "+e._s(u)+" ")])})},proxy:!0}],null,!0)},[l("span",{directives:[{name:"show",rawName:"v-show",value:s>0,expression:"count > 0"}],staticStyle:{color:"#00a870","margin-left":"10px"}},[e._v("+"+e._s(s-1))])])]}}]),model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)},T=[];const p={};var O=t(P,A,T,!1,U,null,null,null);function U(e){for(let n in p)this[n]=p[n]}const cn=function(){return O.exports}();var q=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-cascader",{attrs:{options:e.options,"default-value":e.value,clearable:"",size:"small"}}),l("t-cascader",{attrs:{options:e.options,clearable:"",size:"medium"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("t-cascader",{attrs:{options:e.options,value:e.value,clearable:"",size:"large"},on:{change:e.handleValueChange}})],1)},J=[];const N={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:"1.1"}},methods:{handleValueChange(e){this.value=e}}},d={};var G=t(N,q,J,!1,H,null,null,null);function H(e){for(let n in d)this[n]=d[n]}const rn=function(){return G.exports}();var K=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-cascader",{attrs:{options:e.options,filterable:"",clearable:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("t-cascader",{attrs:{options:e.options,filterable:"",clearable:"",multiple:"","min-collapsed-num":2},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),l("t-cascader",{attrs:{filter:e.filterMethod,options:e.options,clearable:"","min-collapsed-num":2},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1)},Q=[];const W={data(){return{options:[{label:"\u5F53\u9009\u9879\u4E00\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"2.2"}]}],value:"",value2:["1.1"],value3:""}},methods:{filterMethod(e,n){return console.log("filter:",e,n.label),n.label.indexOf(e)!==-1}}},m={};var X=t(W,K,Q,!1,Y,null,null,null);function Y(e){for(let n in m)this[n]=m[n]}const vn=function(){return X.exports}();var Z=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-cascader",{attrs:{options:e.options,disabled:""},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("t-cascader",{attrs:{options:e.options,disabled:"",multiple:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},ee=[];const ne={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value1:"1.1",value2:["1.1"]}}},b={};var le=t(ne,Z,ee,!1,ae,null,null,null);function ae(e){for(let n in b)this[n]=b[n]}const pn=function(){return le.exports}();var te=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-cascader",{attrs:{options:e.options,"show-all-levels":!1},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("t-cascader",{attrs:{options:e.options,"show-all-levels":!1,multiple:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},oe=[];const se={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:"",value2:[]}}},_={};var ue=t(se,te,oe,!1,ce,null,null,null);function ce(e){for(let n in _)this[n]=_[n]}const dn=function(){return ue.exports}();var re=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-cascader",{attrs:{options:e.options,"check-strictly":""},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("t-cascader",{attrs:{options:e.options,"check-strictly":"",multiple:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},ie=[];const ve={data(){return{options:[{value:"1",label:"1",children:[{value:"1.1",label:"1.1",children:[{value:"1.1.1",label:"1.1.1",children:[{value:"1.1.1.1",label:"1.1.1.1"},{value:"1.1.1.2",label:"1.1.1.2"}]},{value:"1.1.2",label:"1.1.2",children:[{value:"1.1.2.1",label:"1.1.2.1"},{value:"1.1.2.2",label:"1.1.2.2"}]}]},{value:"1.2",label:"1.2",children:[{value:"1.2.1",label:"1.2.1",children:[{value:"1.2.1.1",label:"1.2.1.1"},{value:"1.2.1.2",label:"1.2.1.2"}]},{value:"1.2.2",label:"1.2.2",children:[{value:"1.2.2.1",label:"1.2.2.1"},{value:"1.2.2.2",label:"1.2.2.2"}]}]}]},{value:"2",label:"2",children:[{value:"2.1",label:"2.1"},{value:"2.2",label:"2.2"}]}],value1:"1.2.2",value2:["1.1.2.1","2"]}}},f={};var pe=t(ve,re,ie,!1,de,null,null,null);function de(e){for(let n in f)this[n]=f[n]}const mn=function(){return pe.exports}();var me=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("div",[e._v(e._s(e.value))]),l("t-cascader",{attrs:{options:e.options,"value-type":"full"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("div",[e._v(e._s(e.value2))]),l("t-cascader",{attrs:{multiple:"",options:e.options,"value-type":"full"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},be=[];const _e={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:["1","1.1"],value2:[["1","1.1"],["1","1.2"]]}}},h={};var fe=t(_e,me,be,!1,he,null,null,null);function he(e){for(let n in h)this[n]=h[n]}const bn=function(){return fe.exports}();var xe=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-cascader",{attrs:{options:e.options,multiple:"","value-mode":"onlyLeaf"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("t-cascader",{attrs:{options:e.options,multiple:"","value-mode":"parentFirst"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}}),l("t-cascader",{attrs:{options:e.options,multiple:"","value-mode":"all"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1)},$e=[];const ye={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value1:[],value2:[],value3:[]}}},x={};var ge=t(ye,xe,$e,!1,ke,null,null,null);function ke(e){for(let n in x)this[n]=x[n]}const _n=function(){return ge.exports}();var Ce=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-cascader",{attrs:{options:e.options,trigger:"click"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("t-cascader",{attrs:{options:e.options,trigger:"hover"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)},De=[];const Se={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:""}}},$={};var Fe=t(Se,Ce,De,!1,Me,null,null,null);function Me(e){for(let n in $)this[n]=$[n]}const fn=function(){return Fe.exports}();var Ee=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-cascader",{attrs:{options:e.options,clearable:"",placeholder:"\u8BF7\u9009\u62E9"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}}),l("t-cascader",{attrs:{multiple:"",options:e.options,clearable:"",placeholder:"\u8BF7\u9009\u62E9"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},je=[];const Ve={data(){return{options:[{label:"\u5F53\u9009\u9879\u4E00\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5F53\u9009\u9879\u6570\u636E\u5C55\u793A\u6587\u672C\u8FC7\u957F\u65F6",value:"2.2"}]}],value1:"1.1",value2:["1.1"]}}},y={};var we=t(Ve,Ee,je,!1,Re,null,null,null);function Re(e){for(let n in y)this[n]=y[n]}const hn=function(){return we.exports}();var Be=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-cascader",{attrs:{options:e.options,multiple:"",clearable:"",max:3},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},ze=[];const Ie={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:[]}}},g={};var Le=t(Ie,Be,ze,!1,Pe,null,null,null);function Pe(e){for(let n in g)this[n]=g[n]}const xn=function(){return Le.exports}();var Ae=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("t-cascader",{attrs:{keys:{label:"name",value:"code",children:"items"},options:e.options,clearable:""},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}),l("t-cascader",{attrs:{keys:{label:"name",value:"code",children:"items"},options:e.options,clearable:"",multiple:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)},Te=[];const Oe={data(){return{options:[{name:"\u9009\u9879\u4E00",code:"1",items:[{name:"\u5B50\u9009\u9879\u4E00",code:"1.1"},{name:"\u5B50\u9009\u9879\u4E8C",code:"1.2"},{name:"\u5B50\u9009\u9879\u4E09",code:"1.3"}]},{name:"\u9009\u9879\u4E8C",code:"2",items:[{name:"\u5B50\u9009\u9879\u4E00",code:"2.1"},{name:"\u5B50\u9009\u9879\u4E8C",code:"2.2"}]}],value:"1.1",value2:["1.1"]}}},k={};var Ue=t(Oe,Ae,Te,!1,qe,null,null,null);function qe(e){for(let n in k)this[n]=k[n]}const $n=function(){return Ue.exports}();var Je=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-cascader",{attrs:{options:e.options,clearable:"",load:e.load},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},Ne=[];const Ge={data(){return{options:[{label:"\u9009\u98791",value:"1",children:!0},{label:"\u9009\u98792",value:"2",children:!0}],value:""}},methods:{load(e){return new Promise(n=>{setTimeout(()=>{let l=[];e.level<2&&(l=[{label:`${e.label}.1`,children:e.level<1},{label:`${e.label}.2`,children:e.level<1}]),n(l)},1e3)})}}},C={};var He=t(Ge,Je,Ne,!1,Ke,null,null,null);function Ke(e){for(let n in C)this[n]=C[n]}const yn=function(){return He.exports}();var Qe=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("t-space",{attrs:{direction:"vertical"}},[l("div",{staticClass:"cascader-demo-panel-container"},[l("t-cascader-panel",{attrs:{options:e.options},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),l("div",{staticClass:"cascader-demo-panel-container"},[l("t-cascader-panel",{attrs:{options:e.options,multiple:""},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1)])},We=[];const Xe={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"},{label:"\u5B50\u9009\u9879\u4E09",value:"1.3"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}],value:"",value2:[]}}},D={};var Ye=t(Xe,Qe,We,!1,Ze,null,null,null);function Ze(e){for(let n in D)this[n]=D[n]}const gn=function(){return Ye.exports}(),kn=`<template>
  <t-cascader v-model="value" :options="options" clearable @change="onChange" />
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
`,Cn=`<template>
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
`,Dn=`<template>
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
          <span v-show="count > 0" style="color: #00a870; margin-left: 10px">+{{ count - 1 }}</span>
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
    collapsedItems(h, { value, count }) {
      if (!(value instanceof Array) || !count) return;
      // hover\u5C55\u793A\u5168\u90E8\u5DF2\u9009\u9879
      return (
        <t-popup>
          <div slot="content">
            {value.map((item) => (
              <p style="padding: 10px;">{item}</p>
            ))}
          </div>
          <span v-show={count > 0} style="color: #ED7B2F; margin-left: 10px;">
            +{count - 1}
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
`,Sn=`<template>
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
`,Fn=`<template>
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
`,Mn=`<template>
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
`,En=`<template>
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
`,jn=`<template>
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
`,Vn=`<template>
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
`,wn=`<template>
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
`,Rn=`<template>
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
`,Bn=`<template>
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
`,zn=`<template>
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
`,In=`<template>
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
`,Ln=`<template>
  <t-cascader v-model="value" :options="options" clearable :load="load" />
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
                children: node.level < 1,
              },
              {
                label: \`\${node.label}.2\`,
                children: node.level < 1,
              },
            ];
          }
          resolve(nodes);
        }, 1000);
      });
    },
  },
};
<\/script>
`,Pn=`<template>
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
`,en=[{name:"checkStrictly",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"filterable",type:"Boolean",defaultValue:!1,options:[]},{name:"lazy",type:"Boolean",defaultValue:!0,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"showAllLevels",type:"Boolean",defaultValue:!0,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"large",value:"large"},{label:"medium",value:"medium"},{label:"small",value:"small"}]},{name:"trigger",type:"enum",defaultValue:"click",options:[{label:"click",value:"click"},{label:"hover",value:"hover"}]},{name:"valueMode",type:"enum",defaultValue:"onlyLeaf",options:[{label:"onlyLeaf",value:"onlyLeaf"},{label:"parentFirst",value:"parentFirst"},{label:"all",value:"all"}]},{name:"valueType",type:"enum",defaultValue:"single",options:[{label:"single",value:"single"},{label:"full",value:"full"}]}],F={};F.setup=(e,n)=>{const l=r(en),a=[{label:"cascader",value:"cascader"}],o={cascader:`
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
      `},s=r(`<template>${o[a[0].value].trim()}</template>`);function u(c){s.value=`<template>${o[c].trim()}</template>`}return{configList:l,panelList:a,usageCode:s,onPanelChange:u}};var nn=function(){var e=this,n=e.$createElement,l=e._self._c||n;return l("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"cascader",fn:function(a){var o=a.configProps;return[l("t-cascader",e._b({attrs:{options:[{label:"\u9009\u9879\u4E00",value:"1",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"1.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"1.2"}]},{label:"\u9009\u9879\u4E8C",value:"2",children:[{label:"\u5B50\u9009\u9879\u4E00",value:"2.1"},{label:"\u5B50\u9009\u9879\u4E8C",value:"2.2"}]}]}},"t-cascader",o,!1))]}}])})},ln=[];const S={};var an=t(F,nn,ln,!1,tn,null,null,null);function tn(e){for(let n in S)this[n]=S[n]}const An=function(){return an.exports}();export{Bn as A,zn as B,In as C,sn as D,Ln as E,Pn as F,An as U,un as a,cn as b,rn as c,vn as d,pn as e,dn as f,mn as g,bn as h,_n as i,fn as j,hn as k,xn as l,$n as m,yn as n,gn as o,kn as p,Cn as q,Dn as r,Sn as s,Fn as t,Mn as u,En as v,jn as w,Vn as x,wn as y,Rn as z};
