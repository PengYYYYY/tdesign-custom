import{n as o,r}from"./index.4ab857ef.js";import{I as M}from"./index.c25e1a9b.js";const A={data(){return this.$createElement,{value1:"",value2:"",options1:[{label:"\u67B6\u6784\u4E91",value:"1",title:"\u67B6\u6784\u4E91\u9009\u9879"},{label:"\u5927\u6570\u636E",value:"2"},{label:"\u533A\u5757\u94FE",value:"3"},{label:"\u7269\u8054\u7F51",value:"4",disabled:!0},{label:"\u4EBA\u5DE5\u667A\u80FD",value:"5"},{label:"\u8BA1\u7B97\u573A\u666F",value:!0,content:e=>e("span",["\u8BA1\u7B97\u573A\u666F\uFF08\u9AD8\u6027\u80FD\u8BA1\u7B97\uFF09"])}],options2:[{label:"\u4E91\u670D\u52A1\u5668",value:"1"},{label:"\u4E91\u6570\u636E\u5E93",value:"2"},{label:"\u57DF\u540D\u6CE8\u518C",value:"3"},{label:"\u7F51\u7AD9\u5907\u6848",value:"4"},{label:"\u5BF9\u8C61\u5B58\u50A8",value:"5"},{label:"\u4F4E\u4EE3\u7801\u5E73\u53F0",value:"6"}]}}};var E=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{attrs:{label:"\u5C5E\u6027\uFF1A",options:e.options1,placeholder:"\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848"},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}}),t("t-select",{attrs:{label:"\u63D2\u69FD\uFF1A",placeholder:"\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1"},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}},e._l(e.options2,function(n){return t("t-option",{key:n.value,attrs:{value:n.value,label:n.label}})}),1)],1)},N=[];const c={};var T=o(A,E,N,!1,R,null,null,null);function R(e){for(let l in c)this[l]=c[l]}const Ol=function(){return T.exports}(),V={data(){return this.$createElement,{value1:["3","5"],value2:["1","2","3","4","5","6"],value3:["3","5","6","2"],options1:[{label:"\u5168\u9009",checkAll:!0},{label:"\u67B6\u6784\u4E91",value:"1"},{label:"\u5927\u6570\u636E",value:"2"},{label:"\u533A\u5757\u94FE",value:"3"},{label:"\u7269\u8054\u7F51",value:"4",disabled:!0},{label:"\u4EBA\u5DE5\u667A\u80FD",value:"5"},{label:"\u8BA1\u7B97\u573A\u666F",value:"6",content:e=>e("span",["\u8BA1\u7B97\u573A\u666F\uFF08\u9AD8\u6027\u80FD\u8BA1\u7B97\uFF09"])}],options2:[{label:"\u4E91\u670D\u52A1\u5668",value:"1"},{label:"\u4E91\u6570\u636E\u5E93",value:"2"},{label:"\u57DF\u540D\u6CE8\u518C",value:"3"},{label:"\u7F51\u7AD9\u5907\u6848",value:"4"},{label:"\u5BF9\u8C61\u5B58\u50A8",value:"5"},{label:"\u4F4E\u4EE3\u7801\u5E73\u53F0",value:"6"}]}},methods:{handleChange(...e){console.log("change",...e)},valueDisplay(e,{onClose:l,displayValue:t}){if(t instanceof Array)return t.map((n,a)=>e("t-tag",{key:a,attrs:{closable:!0},on:{close:s=>{s.e&&s.e.stopPropagation(),l(a)}}},[n.label]))}}};var z=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",{attrs:{direction:"vertical"}},[t("t-select",{attrs:{options:e.options1,placeholder:"\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848",multiple:""},on:{change:e.handleChange},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}}),t("t-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1",multiple:""},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}},e._l(e.options2,function(n){return t("t-option",{key:n.value,attrs:{value:n.value,label:n.label}})}),1),t("t-select",{attrs:{options:e.options1,minCollapsedNum:2,placeholder:"\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848",multiple:"",valueDisplay:e.valueDisplay},model:{value:e.value3,callback:function(n){e.value3=n},expression:"value3"}})],1)},H=[];const v={};var U=o(V,z,H,!1,L,null,null,null);function L(e){for(let l in v)this[l]=v[l]}const Pl=function(){return U.exports}();var W=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{attrs:{options:e.options,placeholder:"\u8BF7\u9009\u62E9",filterable:""},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}}),t("t-select",{style:{minWidth:"240px"},attrs:{multiple:"",placeholder:"\u8BF7\u9009\u62E9",filterable:""},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}},[t("t-option",{attrs:{checkAll:!0}},[e._v("\u5168\u9009")]),e._l(e.options,function(n,a){return t("t-option-group",{key:a,attrs:{label:typeof n.group=="object"?n.group.label:n.group,divider:""}},e._l(n.children,function(s){return t("t-option",{key:s.value,attrs:{value:s.value,label:s.label}},[e._v(" "+e._s(s.label)+" ")])}),1)})],2)],1)},K=[];const J={data(){return{value1:"",value2:[],options:[{group:"\u5206\u7EC4\u4E00",children:[{label:"\u9009\u9879\u4E00",value:1},{label:"\u9009\u9879\u4E8C",value:2}]},{group:"\u5206\u7EC4\u4E8C",children:[{label:"\u9009\u9879\u4E09",value:4},{label:"\u9009\u9879\u56DB",value:5},{label:"\u9009\u9879\u4E94",value:6}]},{group:"\u5206\u7EC4\u4E09",divider:!0,children:[{label:"\u9009\u9879\u516D",value:7},{label:"\u9009\u9879\u4E03",value:8},{label:"\u9009\u9879\u516B",value:9}]}]}}},d={};var q=o(J,W,K,!1,G,null,null,null);function G(e){for(let l in d)this[l]=d[l]}const Fl=function(){return q.exports}();var Q=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{attrs:{options:e.options,placeholder:"\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848"},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}}),t("t-select",{attrs:{options:e.options,disabled:"",placeholder:"\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848"},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}}),t("t-select",{attrs:{options:e.options,loading:"",placeholder:"\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848"},model:{value:e.value3,callback:function(n){e.value3=n},expression:"value3"}})],1)},X=[];const Y={data(){return{value1:"",value2:"",value3:"",options:[{label:"\u67B6\u6784\u4E91",value:"1"},{label:"\u5927\u6570\u636E",value:"2"},{label:"\u533A\u5757\u94FE",value:"3"},{label:"\u7269\u8054\u7F51",value:"4",disabled:!0},{label:"\u4EBA\u5DE5\u667A\u80FD",value:"5"}]}}},m={};var Z=o(Y,Q,X,!1,ee,null,null,null);function ee(e){for(let l in m)this[l]=m[l]}const Il=function(){return Z.exports}();var le=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",{attrs:{align:"center"}},[t("t-select",{staticStyle:{width:"200px",display:"inline-block","margin-right":"20px"},attrs:{size:"small",popupProps:e.popupProps,placeholder:"\u8BF7\u9009\u62E9",clearable:""},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}},e._l(e.options,function(n,a){return t("t-option",{key:a,attrs:{value:n.value,label:n.label}},[e._v(" "+e._s(n.label)+" ")])}),1),t("t-select",{staticStyle:{width:"200px",display:"inline-block","margin-right":"20px"},attrs:{placeholder:"\u8BF7\u9009\u62E9",options:e.options,size:"medium"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("t-select",{staticStyle:{width:"200px",display:"inline-block"},attrs:{placeholder:"\u8BF7\u9009\u62E9",options:e.options,size:"large"},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}})],1)},ne=[];const te={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}],value:"",value1:"",value2:"",popupProps:{overlayStyle:{width:"300px"}}}}},b={};var ae=o(te,le,ne,!1,oe,null,null,null);function oe(e){for(let l in b)this[l]=b[l]}const Bl=function(){return ae.exports}(),se={data(){return{value1:"",value2:"",options:[{label:"\u7528\u6237\u4E00",value:"1",description:"\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9"},{label:"\u7528\u6237\u4E8C",value:"2",description:"\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9"},{label:"\u7528\u6237\u4E09",value:"3",description:"\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9"},{label:"\u7528\u6237\u56DB",value:"4",description:"\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9"},{label:"\u7528\u6237\u4E94",value:"5",description:"\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9"},{label:"\u7528\u6237\u516D",value:"6",description:"\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9"},{label:"\u7528\u6237\u4E03",value:"7",description:"\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9"},{label:"\u7528\u6237\u516B",value:"8",description:"\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9"},{label:"\u7528\u6237\u4E5D",value:"9",description:"\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9"}]}},computed:{optionsData(){return this.options.map(e=>({...e,content:l=>this.optionRender(l,e)}))}},methods:{optionRender(e,l){return e("div",{class:"tdesign-demo__user-option"},[e("img",{attrs:{src:"https://tdesign.gtimg.com/site/avatar.jpg"}}),e("div",{class:"tdesign-demo__user-option-info"},[e("div",[l.label]),e("div",{class:"tdesign-demo__user-option-desc"},[l.description])])])}}};var ie=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{staticStyle:{width:"300px"},attrs:{options:e.optionsData,popupProps:{overlayClassName:"tdesign-demo-select__overlay-option"},placeholder:"\u8BF7\u9009\u62E9"},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}}),t("br"),t("br"),t("t-select",{staticStyle:{width:"300px"},attrs:{placeholder:"\u8BF7\u9009\u62E9",popupProps:{overlayClassName:"tdesign-demo-select__overlay-option"}},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}},e._l(e.options,function(n){return t("t-option",{key:n.value,attrs:{value:n.value,label:n.label}},[t("div",{staticClass:"tdesign-demo__user-option"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/avatar.jpg"}}),t("div",{staticClass:"tdesign-demo__user-option-info"},[t("div",[e._v(e._s(n.label))]),t("div",{staticClass:"tdesign-demo__user-option-desc"},[e._v(e._s(n.description))])])])])}),1)],1)},pe=[];const h={};var ue=o(se,ie,pe,!1,re,null,null,null);function re(e){for(let l in h)this[l]=h[l]}const Ml=function(){return ue.exports}(),_=[{label:"\u67B6\u6784\u4E91",value:"1"},{label:"\u5927\u6570\u636E",value:"2"},{label:"\u533A\u5757\u94FE",value:"3"},{label:"\u7269\u8054\u7F51",value:"4",disabled:!0},{label:"\u4EBA\u5DE5\u667A\u80FD",value:"5"}],ce={data(){return{search:"",value1:"",value2:"",editOrCreate:"create",newOption:"",options1:_,options2:[{label:"\u4E91\u670D\u52A1\u5668",value:"1"},{label:"\u4E91\u6570\u636E\u5E93",value:"2"},{label:"\u57DF\u540D\u6CE8\u518C",value:"3"}]}},methods:{onSearch(){this.options1=_.filter(e=>e.label.indexOf(this.search)!==-1)},onAdd(){this.editOrCreate="edit"},onAddConfirm(){const e=Math.round(Math.random()*100);this.options2.push({label:this.newOption,value:e}),this.newOption="",this.editOrCreate="create"},onAddCancel(){this.editOrCreate="create"}}};var ve=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{attrs:{options:e.options1,clearable:"",placeholder:"\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848"},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}},[t("div",{staticStyle:{padding:"6px 6px 0 6px"},attrs:{slot:"panelTopContent"},slot:"panelTopContent"},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"},on:{change:e.onSearch},model:{value:e.search,callback:function(n){e.search=n},expression:"search"}})],1)]),t("t-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1",clearable:"",options:e.options2},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}},[t("div",{staticClass:"select-panel-footer",attrs:{slot:"panelBottomContent"},slot:"panelBottomContent"},[e.editOrCreate==="create"?t("t-button",{attrs:{theme:"primary",variant:"text",block:""},on:{click:e.onAdd}},[e._v("\u65B0\u589E\u9009\u9879")]):t("div",[t("t-input",{attrs:{autofocus:""},model:{value:e.newOption,callback:function(n){e.newOption=n},expression:"newOption"}}),t("t-button",{staticStyle:{"margin-top":"8px"},attrs:{size:"small"},on:{click:e.onAddConfirm}},[e._v(" \u786E\u8BA4 ")]),t("t-button",{staticStyle:{"margin-top":"8px","margin-left":"8px"},attrs:{theme:"default",size:"small"},on:{click:e.onAddCancel}},[e._v(" \u53D6\u6D88 ")])],1)],1)])],1)},de=[];const f={};var me=o(ce,ve,de,!1,be,"442ee9c7",null,null);function be(e){for(let l in f)this[l]=f[l]}const Al=function(){return me.exports}(),he={data(){return{value1:["1","2","3"],value2:["4","5","6","7"],options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"},{label:"\u9009\u9879\u56DB",value:"4"},{label:"\u9009\u9879\u4E94",value:"5"},{label:"\u9009\u9879\u516D",value:"6"},{label:"\u9009\u9879\u4E03",value:"7"},{label:"\u9009\u9879\u516B",value:"8"},{label:"\u9009\u9879\u4E5D",value:"9"}]}},methods:{valueDisplay(e,{value:l,onClose:t}){if(l instanceof Array)return l.map((n,a)=>e("t-tag",{key:a,attrs:{closable:!0},on:{close:s=>{s.e&&s.e.stopPropagation(),t(a)}}},[n.label,"(",n.value[0].toUpperCase(),")"]))}}};var _e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",{attrs:{direction:"vertical"}},[t("t-select",{attrs:{options:e.options,valueDisplay:e.valueDisplay,placeholder:"\u8BF7\u9009\u62E9",multiple:"",clearable:""},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}}),t("t-select",{attrs:{options:e.options,placeholder:"\u8BF7\u9009\u62E9",multiple:"",clearable:""},scopedSlots:e._u([{key:"valueDisplay",fn:function(n){var a=n.value,s=n.onClose;return e._l(a,function(i,p){return t("t-tag",{key:p,attrs:{closable:!0,onClose:function(u){u.e&&u.e.stopPropagation(),s(p)}}},[e._v(" "+e._s(i.label)+"("+e._s(i.value[0].toUpperCase())+") ")])})}}]),model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}})],1)},fe=[];const x={};var xe=o(he,_e,fe,!1,ge,null,null,null);function ge(e){for(let l in x)this[l]=x[l]}const El=function(){return xe.exports}(),ye={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}],value:["1","3"],minCollapsedNum:1}},methods:{collapsedItems(e,{value:l,count:t,collapsedSelectedItems:n}){if(console.log("collapsedItems: ",l,n,t),!!t)return e("t-popup",[e("div",{slot:"content"},[n.map(a=>e("p",{style:"padding: 8px;"},[a.label]))]),e("span",{directives:[{name:"show",value:t>0}],style:"color: #ED7B2F; margin-left: 8px"},["+",t])])}}};var $e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",{attrs:{direction:"vertical"}},[t("t-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9",multiple:"",minCollapsedNum:e.minCollapsedNum,options:e.options},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("t-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9",multiple:"",minCollapsedNum:e.minCollapsedNum,collapsedItems:e.collapsedItems,options:e.options},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("t-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9",multiple:"",minCollapsedNum:e.minCollapsedNum,options:e.options},scopedSlots:e._u([{key:"collapsedItems",fn:function(n){var a=n.collapsedSelectedItems,s=n.count;return[t("t-popup",{scopedSlots:e._u([{key:"content",fn:function(){return e._l(a,function(i,p){return t("p",{key:p,staticStyle:{padding:"8px"}},[e._v(" "+e._s(i.label)+" ")])})},proxy:!0}],null,!0)},[t("span",{directives:[{name:"show",rawName:"v-show",value:s>0,expression:"count > 0"}],staticStyle:{color:"#00a870","margin-left":"8px"}},[e._v("+"+e._s(s))])])]}}]),model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})],1)},ke=[];const g={};var Ce=o(ye,$e,ke,!1,Se,null,null,null);function Se(e){for(let l in g)this[l]=g[l]}const Nl=function(){return Ce.exports}();var we=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{staticStyle:{width:"200px",display:"inline-block",margin:"0 20px 20px 0"},attrs:{placeholder:"-\u8BF7\u9009\u62E9-",options:e.options,filterable:""},on:{blur:e.handleBlur,focus:e.handleFocus,enter:e.handleEnter},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("t-select",{staticStyle:{width:"400px",display:"inline-block"},attrs:{multiple:"",placeholder:"-\u8BF7\u9009\u62E9-",options:e.options,filter:e.filterMethod},on:{blur:e.handleBlur,focus:e.handleFocus},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}})],1)},De=[];const je={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"},{label:"option4",value:"4"},{label:"OPTION5",value:"5"}],value:"",value2:[]}},methods:{filterMethod(e,l){return console.log("search:",e,", option:",l),l.label.indexOf(e)!==-1},handleBlur({value:e,e:l}){console.log("handleBlur: ",e,l)},handleFocus({value:e,e:l}){console.log("handleFocus: ",e,l)},handleEnter({value:e,e:l,inputValue:t}){console.log("handleEnter: ",e,l,t)}}},y={};var Oe=o(je,we,De,!1,Pe,null,null,null);function Pe(e){for(let l in y)this[l]=y[l]}const Tl=function(){return Oe.exports}();var Fe=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{staticStyle:{width:"200px",display:"inline-block",margin:"0 20px 20px 0"},attrs:{"value-type":"object",filterable:"",placeholder:"\u8BF7\u9009\u62E9",onSearch:e.remoteMethod,loading:e.loading,options:e.options},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("t-select",{staticStyle:{width:"400px",display:"inline-block"},attrs:{"value-type":"object",multiple:"",filterable:"",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22",options:e.options2,loading:e.loading2,reserveKeyword:""},on:{search:e.remoteMethod2},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}})],1)},Ie=[];const Be={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}],options2:[],value:{},value2:[],loading:!1,loading2:!1}},methods:{handleChange(e){console.log(e)},remoteMethod(e){console.log("search",e),this.loading=!0,setTimeout(()=>{this.loading=!1,this.options=[{value:`${e}1`,label:`${e}test1`},{value:`${e}2`,label:`${e}test2`},{value:`${e}3`,label:`${e}test3`}]},500)},remoteMethod2(e){console.log("search2",e),this.loading2=!0,setTimeout(()=>{this.loading2=!1,this.options2=[{value:`${e}1`,label:`${e}test1`},{value:`${e}2`,label:`${e}test2`},{value:`${e}3`,label:`${e}test3`}]},500)}}},$={};var Me=o(Be,Fe,Ie,!1,Ae,null,null,null);function Ae(e){for(let l in $)this[l]=$[l]}const Rl=function(){return Me.exports}();var Ee=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{staticStyle:{width:"200px",display:"inline-block",margin:"0 20px 20px 0"},attrs:{creatable:"",filterable:"",placeholder:"\u5355\u9009\u652F\u6301\u81EA\u5B9A\u4E49\u521B\u5EFA",options:e.options},on:{create:e.createOptions},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("t-select",{staticStyle:{width:"400px",display:"inline-block"},attrs:{creatable:"",filterable:"",multiple:"",placeholder:"\u591A\u9009\u652F\u6301\u81EA\u5B9A\u4E49\u521B\u5EFA",options:e.options},on:{create:e.createOptions},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}})],1)},Ne=[];const Te={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}],value:"",value2:[]}},methods:{createOptions(e){this.options.push({value:e,label:e}),console.log("create option:",e)}}},k={};var Re=o(Te,Ee,Ne,!1,Ve,null,null,null);function Ve(e){for(let l in k)this[l]=k[l]}const Vl=function(){return Re.exports}();var ze=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-select",{staticStyle:{width:"200px"},attrs:{placeholder:"-\u8BF7\u9009\u62E9-",multiple:"",max:2,options:e.options},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}})},He=[];const Ue={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}],value:[]}}},C={};var Le=o(Ue,ze,He,!1,We,null,null,null);function We(e){for(let l in C)this[l]=C[l]}const zl=function(){return Le.exports}();var Ke=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-select",{staticStyle:{width:"200px"},attrs:{options:e.options,clearable:"",placeholder:"-\u8BF7\u9009\u62E9-"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}},[t("icon",{staticStyle:{"margin-right":"8px"},attrs:{slot:"prefixIcon",name:"browse"},slot:"prefixIcon"})],1)},Je=[];const qe={components:{Icon:M},data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}],value:""}}},S={};var Ge=o(qe,Ke,Je,!1,Qe,null,null,null);function Qe(e){for(let l in S)this[l]=S[l]}const Hl=function(){return Ge.exports}();var Xe=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{staticStyle:{width:"200px"},attrs:{borderless:!0,placeholder:"-\u8BF7\u9009\u62E9-",clearable:"",options:e.options},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("t-select",{attrs:{borderless:!0,placeholder:"-\u8BF7\u9009\u62E9-",clearable:"","auto-width":"",options:e.options,multiple:""},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}})],1)},Ye=[];const Ze={data(){return{options:[{label:"\u5DF2\u9009\u62E9\u7684\u9009\u9879",value:"1"},{label:"\u77ED\u7684\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u5185\u5BB9\u8FC7\u957F\u7684\u9009\u62E9\u5668\u9009\u9879",value:"3"}],value:"1",value2:[]}}},w={};var el=o(Ze,Xe,Ye,!1,ll,null,null,null);function ll(e){for(let l in w)this[l]=w[l]}const Ul=function(){return el.exports}();var nl=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{staticStyle:{width:"200px",display:"inline-block","margin-right":"20px"},attrs:{valueType:"object",clearable:"",placeholder:"-\u8BF7\u9009\u62E9-",options:e.options},on:{change:e.handleChange},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("t-select",{staticStyle:{width:"200px",display:"inline-block"},attrs:{valueType:"object",clearable:"",multiple:"",placeholder:"-\u8BF7\u9009\u62E9-",options:e.options},on:{change:e.handleChange},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}})],1)},tl=[];const al={data(){return{options:[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"}],value:{value:"1",label:"\u9009\u9879\u4E00"},value2:[{value:"1",label:"\u9009\u9879\u4E00"}]}},methods:{handleChange(e,l){console.log("handleChange:",e,l)}}},D={};var ol=o(al,nl,tl,!1,sl,null,null,null);function sl(e){for(let l in D)this[l]=D[l]}const Ll=function(){return ol.exports}();var il=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{staticStyle:{width:"200px",display:"inline-block"},attrs:{placeholder:"-\u8BF7\u9009\u62E9-",options:e.options,popupProps:e.popupProps},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("t-select",{staticStyle:{width:"300px",display:"inline-block","margin-left":"20px"},attrs:{placeholder:"-\u8BF7\u9009\u62E9-",options:e.options2,popupProps:e.popupProps2},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}})],1)},pl=[];const ul={data(){return{value:"1",options:[{label:"\u56FA\u5B9A300px\u5BBD\u5EA6",value:"1"},{label:"\u9009\u9879\u5185\u5BB9\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u7684\u9009\u9879",value:"2"}],popupProps:{overlayInnerStyle:{width:"300px"}},value2:"1",options2:[{label:"\u4E0B\u62C9\u6846\u5F3A\u5236\u548C\u8F93\u5165\u6846\u540C\u5BBD",value:"1"},{label:"\u9009\u9879\u5185\u5BB9\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u7684\u9009\u9879",value:"2"}],popupProps2:{overlayInnerStyle:e=>({width:`${e.offsetWidth}px`})}}}},j={};var rl=o(ul,il,pl,!1,cl,null,null,null);function cl(e){for(let l in j)this[l]=j[l]}const Wl=function(){return rl.exports}();var vl=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{staticStyle:{width:"300px"},attrs:{options:e.options,placeholder:"\u8BF7\u9009\u62E9","popup-props":{"on-scroll-to-bottom":e.handleScrollToBottom}}})],1)},dl=[];const I=[];for(let e=1;e<15;e++)I.push({label:`\u7B2C ${e} \u9879`,value:e});const ml={data(){return{options:I}},methods:{handleScroll({e}){const{scrollTop:l,clientHeight:t,scrollHeight:n}=e.target;n-l===t&&(console.log("\u5230\u5E95\u90E8\u4E86"),this.options=this.options.concat({label:`\u6EDA\u52A8\u65B0\u589E\u9009\u9879${this.options.length+1}`,value:this.options.length+1}))},handleScrollToBottom(){this.options=this.options.concat({label:`\u6EDA\u52A8\u65B0\u589E\u9009\u9879${this.options.length+1}`,value:this.options.length+1})}}},O={};var bl=o(ml,vl,dl,!1,hl,null,null,null);function hl(e){for(let l in O)this[l]=O[l]}const Kl=function(){return bl.exports}(),_l={data(){const e=[];for(let l=0;l<1e4;l++)e.push({label:`\u9009\u9879${l+1}`,value:String(l)});return{value1:"",value2:"",options:e}}};var fl=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("t-space",[t("t-select",{style:{width:"300px"},attrs:{options:e.options,placeholder:"\u8BF7\u9009\u62E9",scroll:{type:"virtual"},"popup-props":{overlayInnerStyle:{height:"300px"}}},model:{value:e.value1,callback:function(n){e.value1=n},expression:"value1"}}),t("t-select",{style:{width:"300px"},attrs:{placeholder:"\u8BF7\u9009\u62E9",scroll:{type:"virtual"},"popup-props":{overlayInnerStyle:{height:"300px"}}},model:{value:e.value2,callback:function(n){e.value2=n},expression:"value2"}},e._l(e.options,function(n){return t("t-option",{key:n.value,attrs:{value:n.value,label:n.label}})}),1)],1)},xl=[];const P={};var gl=o(_l,fl,xl,!1,yl,null,null,null);function yl(e){for(let l in P)this[l]=P[l]}const Jl=function(){return gl.exports}(),ql=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002\u4F18\u5148\u7EA7\u9AD8\u4E8E t-option-->
    <t-select label="\u5C5E\u6027\uFF1A" v-model="value1" :options="options1" placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 t-option \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002options \u548C t-option \u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u4E8C\u9009\u4E00\u5373\u53EF -->
    <t-select label="\u63D2\u69FD\uFF1A" v-model="value2" placeholder="\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1">
      <t-option v-for="item in options2" :value="item.value" :label="item.label" :key="item.value"></t-option>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: '',
      value2: '',
      // \u5982\u679C\u6B64\u5904\u6570\u636E\u5B57\u6BB5\u4E0D\u662F label \u548C value\uFF0C\u800C\u662F name \u548C id\uFF0C\u5219\u53EF\u4EE5\u4F20\u5165\u53C2\u6570 \`keys\` \u5B9A\u4E49\u522B\u540D
      // \u793A\u4F8B\uFF1A <t-select :options="options1" :keys="{ label: 'name', value: 'id' }" />
      options1: [
        { label: '\u67B6\u6784\u4E91', value: '1', title: '\u67B6\u6784\u4E91\u9009\u9879' },
        { label: '\u5927\u6570\u636E', value: '2' },
        { label: '\u533A\u5757\u94FE', value: '3' },
        { label: '\u7269\u8054\u7F51', value: '4', disabled: true },
        { label: '\u4EBA\u5DE5\u667A\u80FD', value: '5' },
        // \u53EF\u4EE5\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9\u548C\u6837\u5F0F
        {
          label: '\u8BA1\u7B97\u573A\u666F',
          value: true,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          content: (h) => <span>\u8BA1\u7B97\u573A\u666F\uFF08\u9AD8\u6027\u80FD\u8BA1\u7B97\uFF09</span>,
        },
      ],
      options2: [
        { label: '\u4E91\u670D\u52A1\u5668', value: '1' },
        { label: '\u4E91\u6570\u636E\u5E93', value: '2' },
        { label: '\u57DF\u540D\u6CE8\u518C', value: '3' },
        { label: '\u7F51\u7AD9\u5907\u6848', value: '4' },
        { label: '\u5BF9\u8C61\u5B58\u50A8', value: '5' },
        { label: '\u4F4E\u4EE3\u7801\u5E73\u53F0', value: '6' },
      ],
    };
  },
};
<\/script>
`,Gl=`<template>
  <t-space direction="vertical">
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002\u4F18\u5148\u7EA7\u9AD8\u4E8E t-option-->
    <t-select v-model="value1" :options="options1" placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" multiple @change="handleChange" />
    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528 t-option \u8F93\u51FA\u4E0B\u62C9\u9009\u9879\u3002options \u548C t-option \u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\u4E8C\u9009\u4E00\u5373\u53EF -->
    <t-select v-model="value2" placeholder="\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1" multiple>
      <t-option v-for="item in options2" :value="item.value" :label="item.label" :key="item.value"></t-option>
    </t-select>

    <!-- \u8D85\u51FA 2 \u4E2A\u7684\u9009\u4E2D\u9879\u6298\u53E0\uFF0C\u5982\u679C\u60F3\u8981\u81EA\u5B9A\u4E49\u6298\u53E0\u9879\uFF0C\u53C2\u8003\u4E0B\u6587\u300C\u81EA\u5B9A\u4E49\u6298\u53E0\u7684\u9009\u4E2D\u9879\u300D -->
    <t-select
      v-model="value3"
      :options="options1"
      :minCollapsedNum="2"
      placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848"
      multiple
      :valueDisplay="valueDisplay"
    />
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: ['3', '5'],
      value2: ['1', '2', '3', '4', '5', '6'],
      value3: ['3', '5', '6', '2'],
      options1: [
        { label: '\u5168\u9009', checkAll: true },
        { label: '\u67B6\u6784\u4E91', value: '1' },
        { label: '\u5927\u6570\u636E', value: '2' },
        { label: '\u533A\u5757\u94FE', value: '3' },
        { label: '\u7269\u8054\u7F51', value: '4', disabled: true },
        { label: '\u4EBA\u5DE5\u667A\u80FD', value: '5' },
        // \u53EF\u4EE5\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9\u548C\u6837\u5F0F
        {
          label: '\u8BA1\u7B97\u573A\u666F',
          value: '6',
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          content: (h) => <span>\u8BA1\u7B97\u573A\u666F\uFF08\u9AD8\u6027\u80FD\u8BA1\u7B97\uFF09</span>,
        },
      ],
      options2: [
        { label: '\u4E91\u670D\u52A1\u5668', value: '1' },
        { label: '\u4E91\u6570\u636E\u5E93', value: '2' },
        { label: '\u57DF\u540D\u6CE8\u518C', value: '3' },
        { label: '\u7F51\u7AD9\u5907\u6848', value: '4' },
        { label: '\u5BF9\u8C61\u5B58\u50A8', value: '5' },
        { label: '\u4F4E\u4EE3\u7801\u5E73\u53F0', value: '6' },
      ],
    };
  },
  methods: {
    handleChange(...args) {
      console.log('change', ...args);
    },
    valueDisplay(h, { onClose, displayValue }) {
      if (!(displayValue instanceof Array)) return;
      return displayValue.map((item, index) => (
        <t-tag
          key={index}
          closable={true}
          onClose={(context) => {
            context.e && context.e.stopPropagation();
            onClose(index);
          }}
        >
          {item.label}
        </t-tag>
      ));
    },
  },
};
<\/script>
`,Ql=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u76F4\u63A5\u4F20 options \u6570\u636E\uFF0C\u6BD4\u63D2\u69FD\u7684\u65B9\u5F0F\u66F4\u7B80\u5355 -->
    <t-select v-model="value1" :options="options" placeholder="\u8BF7\u9009\u62E9" filterable />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u8282\u70B9 -->
    <t-select multiple v-model="value2" placeholder="\u8BF7\u9009\u62E9" filterable :style="{ minWidth: '240px' }">
      <t-option :checkAll="true">\u5168\u9009</t-option>
      <t-option-group
        v-for="(list, index) in options"
        :key="index"
        :label="typeof list.group === 'object' ? list.group.label : list.group"
        divider
      >
        <t-option v-for="item in list.children" :value="item.value" :label="item.label" :key="item.value">
          {{ item.label }}
        </t-option>
      </t-option-group>
    </t-select>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: [],
      options: [
        {
          group: '\u5206\u7EC4\u4E00',
          children: [
            { label: '\u9009\u9879\u4E00', value: 1 },
            { label: '\u9009\u9879\u4E8C', value: 2 },
          ],
        },
        {
          group: '\u5206\u7EC4\u4E8C',
          children: [
            { label: '\u9009\u9879\u4E09', value: 4 },
            { label: '\u9009\u9879\u56DB', value: 5 },
            { label: '\u9009\u9879\u4E94', value: 6 },
          ],
        },
        {
          group: '\u5206\u7EC4\u4E09',
          divider: true,
          children: [
            { label: '\u9009\u9879\u516D', value: 7 },
            { label: '\u9009\u9879\u4E03', value: 8 },
            { label: '\u9009\u9879\u516B', value: 9 },
          ],
        },
      ],
    };
  },
};
<\/script>
`,Xl=`<template>
  <t-space>
    <t-select v-model="value1" :options="options" placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />

    <t-select v-model="value2" :options="options" disabled placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />

    <t-select v-model="value3" :options="options" loading placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848" />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      // \u5982\u679C\u6B64\u5904\u6570\u636E\u5B57\u6BB5\u4E0D\u662F label \u548C value\uFF0C\u800C\u662F name \u548C id\uFF0C\u5219\u53EF\u4EE5\u4F20\u5165\u53C2\u6570 \`keys\` \u5B9A\u4E49\u522B\u540D
      // \u793A\u4F8B\uFF1A <t-select :options="options1" :keys="{ label: 'name', value: 'id' }" />
      options: [
        { label: '\u67B6\u6784\u4E91', value: '1' },
        { label: '\u5927\u6570\u636E', value: '2' },
        { label: '\u533A\u5757\u94FE', value: '3' },
        { label: '\u7269\u8054\u7F51', value: '4', disabled: true },
        { label: '\u4EBA\u5DE5\u667A\u80FD', value: '5' },
      ],
    };
  },
};
<\/script>
`,Yl=`<template>
  <t-space align="center">
    <t-select
      size="small"
      v-model="value1"
      :popupProps="popupProps"
      placeholder="\u8BF7\u9009\u62E9"
      style="width: 200px; display: inline-block; margin-right: 20px"
      clearable
    >
      <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
        {{ item.label }}
      </t-option>
    </t-select>
    <t-select
      v-model="value"
      placeholder="\u8BF7\u9009\u62E9"
      :options="options"
      size="medium"
      style="width: 200px; display: inline-block; margin-right: 20px"
    />
    <t-select
      v-model="value2"
      placeholder="\u8BF7\u9009\u62E9"
      :options="options"
      size="large"
      style="width: 200px; display: inline-block"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: '',
      value1: '',
      value2: '',
      popupProps: {
        overlayStyle: {
          width: '300px',
        },
      },
    };
  },
};
<\/script>
`,Zl=`<template>
  <t-space>
    <!-- \u65B9\u5F0F\u4E00\uFF1A\u4F7F\u7528 options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-select
      v-model="value1"
      :options="optionsData"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      placeholder="\u8BF7\u9009\u62E9"
      style="width: 300px"
    />
    <br /><br />

    <!-- \u65B9\u5F0F\u4E8C\uFF1A\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5185\u5BB9 -->
    <t-select
      v-model="value2"
      placeholder="\u8BF7\u9009\u62E9"
      :popupProps="{ overlayClassName: 'tdesign-demo-select__overlay-option' }"
      style="width: 300px"
    >
      <t-option v-for="item in options" :value="item.value" :label="item.label" :key="item.value">
        <div class="tdesign-demo__user-option">
          <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
          <div class="tdesign-demo__user-option-info">
            <div>{{ item.label }}</div>
            <div class="tdesign-demo__user-option-desc">{{ item.description }}</div>
          </div>
        </div>
      </t-option>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: '',
      value2: '',
      options: [
        { label: '\u7528\u6237\u4E00', value: '1', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u4E8C', value: '2', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u4E09', value: '3', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u56DB', value: '4', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u4E94', value: '5', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u516D', value: '6', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u4E03', value: '7', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u516B', value: '8', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
        { label: '\u7528\u6237\u4E5D', value: '9', description: '\u8FD9\u662F\u4E00\u6BB5\u7528\u6237\u63CF\u8FF0\u4FE1\u606F\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5185\u5BB9' },
      ],
    };
  },
  computed: {
    optionsData() {
      return this.options.map((item) => ({
        ...item,
        // options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5173\u952E\u4EE3\u7801
        content: (h) => this.optionRender(h, item),
      }));
    },
  },
  methods: {
    optionRender(h, option) {
      return (
        <div class="tdesign-demo__user-option">
          <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
          <div class="tdesign-demo__user-option-info">
            <div>{option.label}</div>
            <div class="tdesign-demo__user-option-desc">{option.description}</div>
          </div>
        </div>
      );
    },
  },
};
<\/script>

<style>
.tdesign-demo__user-option {
  display: flex;
}

.tdesign-demo__user-option > img {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
}

.tdesign-demo__user-option-desc {
  font-size: 14px;
  color: var(--td-text-color-secondary);
}

.tdesign-demo__user-option-info {
  margin-left: 16px;
}

.tdesign-demo-select__overlay-option .t-select-option {
  height: 100%;
  padding: 8px;
}
</style>
`,en=`<template>
  <t-space>
    <!-- \u81EA\u5B9A\u4E49\u9762\u677F\u9876\u90E8\u5185\u5BB9\uFF1A\u5982\u81EA\u5B9A\u4E49\u641C\u7D22\u6846\u3002\u540C\u65F6\u652F\u6301\u63D2\u69FD\u548C Props(this,panelTopContent) -->
    <t-select v-model="value1" :options="options1" clearable placeholder="\u8BF7\u9009\u62E9\u4E91\u89E3\u51B3\u65B9\u6848">
      <div slot="panelTopContent" style="padding: 6px 6px 0 6px">
        <t-input v-model="search" placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22" @change="onSearch" />
      </div>
    </t-select>

    <!-- \u81EA\u5B9A\u4E49\u9762\u677F\u5E95\u90E8\u5185\u5BB9\uFF1B\u5982\u65B0\u589E\u9879 \u3002\u540C\u65F6\u652F\u6301\u63D2\u69FD\u548C Props\uFF08this,panelBottomContent\uFF09-->
    <t-select v-model="value2" placeholder="\u8BF7\u9009\u62E9\u4E91\u4EA7\u54C1" clearable :options="options2">
      <!-- \u81EA\u5B9A\u4E49\u5E95\u90E8\u5185\u5BB9 -->
      <div slot="panelBottomContent" class="select-panel-footer">
        <t-button v-if="editOrCreate === 'create'" theme="primary" variant="text" block @click="onAdd"
        >\u65B0\u589E\u9009\u9879</t-button
        >
        <div v-else>
          <t-input v-model="newOption" autofocus></t-input>
          <t-button @click="onAddConfirm" size="small" style="margin-top: 8px"> \u786E\u8BA4 </t-button>
          <t-button @click="onAddCancel" theme="default" size="small" style="margin-top: 8px; margin-left: 8px">
            \u53D6\u6D88
          </t-button>
        </div>
      </div>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
const OPTIONS = [
  { label: '\u67B6\u6784\u4E91', value: '1' },
  { label: '\u5927\u6570\u636E', value: '2' },
  { label: '\u533A\u5757\u94FE', value: '3' },
  { label: '\u7269\u8054\u7F51', value: '4', disabled: true },
  { label: '\u4EBA\u5DE5\u667A\u80FD', value: '5' },
];
export default {
  data() {
    return {
      search: '',
      value1: '',
      value2: '',
      editOrCreate: 'create',
      newOption: '',
      // \u5982\u679C\u6B64\u5904\u6570\u636E\u5B57\u6BB5\u4E0D\u662F label \u548C value\uFF0C\u800C\u662F name \u548C id\uFF0C\u5219\u53EF\u4EE5\u4F20\u5165\u53C2\u6570 \`keys\` \u5B9A\u4E49\u522B\u540D
      // \u793A\u4F8B\uFF1A <t-select :options="options1" :keys="{ label: 'name', value: 'id' }" />
      options1: OPTIONS,
      options2: [
        { label: '\u4E91\u670D\u52A1\u5668', value: '1' },
        { label: '\u4E91\u6570\u636E\u5E93', value: '2' },
        { label: '\u57DF\u540D\u6CE8\u518C', value: '3' },
      ],
    };
  },
  methods: {
    onSearch() {
      this.options1 = OPTIONS.filter((item) => item.label.indexOf(this.search) !== -1);
    },
    onAdd() {
      this.editOrCreate = 'edit';
    },
    onAddConfirm() {
      const id = Math.round(Math.random() * 100);
      this.options2.push({ label: this.newOption, value: id });
      this.newOption = '';
      this.editOrCreate = 'create';
    },
    onAddCancel() {
      this.editOrCreate = 'create';
    },
  },
};
<\/script>

<style scoped>
.select-panel-footer {
  border-top: 1px solid var(--td-component-stroke);
  padding: 6px;
}
</style>
`,ln=`<template>
  <t-space direction="vertical">
    <!-- \u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9\uFF0CvalueDisplay \u4E3A\u6E32\u67D3\u51FD\u6570\uFF08function\uFF09 -->
    <t-select
      v-model="value1"
      :options="options"
      :valueDisplay="valueDisplay"
      placeholder="\u8BF7\u9009\u62E9"
      multiple
      clearable
    />

    <!-- \u81EA\u5B9A\u4E49\u9009\u4E2D\u9879\u5185\u5BB9\uFF0CvalueDisplay \u4E3A \u63D2\u69FD(slot) -->
    <t-select v-model="value2" :options="options" placeholder="\u8BF7\u9009\u62E9" multiple clearable>
      <template #valueDisplay="{ value, onClose }">
        <t-tag
          v-for="(item, index) in value"
          :key="index"
          :closable="true"
          :onClose="
            (context) => {
              context.e && context.e.stopPropagation();
              onClose(index);
            }
          "
        >
          {{ item.label }}({{ item.value[0].toUpperCase() }})
        </t-tag>
      </template>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      value1: ['1', '2', '3'],
      value2: ['4', '5', '6', '7'],
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
        { label: '\u9009\u9879\u56DB', value: '4' },
        { label: '\u9009\u9879\u4E94', value: '5' },
        { label: '\u9009\u9879\u516D', value: '6' },
        { label: '\u9009\u9879\u4E03', value: '7' },
        { label: '\u9009\u9879\u516B', value: '8' },
        { label: '\u9009\u9879\u4E5D', value: '9' },
      ],
    };
  },
  methods: {
    valueDisplay(h, { value, onClose }) {
      if (!(value instanceof Array)) return;
      return value.map((item, index) => (
        <t-tag
          key={index}
          closable={true}
          onClose={(context) => {
            context.e && context.e.stopPropagation();
            onClose(index);
          }}
        >
          {item.label}({item.value[0].toUpperCase()})
        </t-tag>
      ));
    },
  },
};
<\/script>
`,nn=`<template>
  <t-space direction="vertical">
    <!-- \u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u53EF\u6298\u53E0 -->
    <t-select v-model="value" placeholder="\u8BF7\u9009\u62E9" multiple :minCollapsedNum="minCollapsedNum" :options="options" />

    <!-- \u81EA\u5B9A\u4E49\u6298\u53E0\u9879\u5185\u5BB9\uFF0CcollapsedItems \u4E3A\u6E32\u67D3\u51FD\u6570 (value, count, collapsedSelectedItems) -->
    <t-select
      v-model="value"
      placeholder="\u8BF7\u9009\u62E9"
      multiple
      :minCollapsedNum="minCollapsedNum"
      :collapsedItems="collapsedItems"
      :options="options"
    />

    <!-- \u81EA\u5B9A\u4E49\u6298\u53E0\u9879\u5185\u5BB9\uFF0CcollapsedItems \u4E3A \u63D2\u69FD(slot) { value, count, collapsedSelectedItems }-->
    <t-select v-model="value" placeholder="\u8BF7\u9009\u62E9" multiple :minCollapsedNum="minCollapsedNum" :options="options">
      <!-- hover\u5C55\u793A\u6298\u53E0\u90E8\u5206\u7684\u5DF2\u9009\u9879 -->
      <template #collapsedItems="{ collapsedSelectedItems, count }">
        <t-popup>
          <template #content>
            <p v-for="(item, index) in collapsedSelectedItems" :key="index" style="padding: 8px">
              {{ item.label }}
            </p>
          </template>
          <span v-show="count > 0" style="color: #00a870; margin-left: 8px">+{{ count }}</span>
        </t-popup>
      </template>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: ['1', '3'],
      minCollapsedNum: 1,
    };
  },
  methods: {
    collapsedItems(h, { value, count, collapsedSelectedItems }) {
      console.log('collapsedItems: ', value, collapsedSelectedItems, count);
      if (!count) return;
      // hover\u5C55\u793A\u5168\u90E8\u5DF2\u9009\u9879
      return (
        <t-popup>
          <div slot="content">
            {collapsedSelectedItems.map((item) => (
              <p style="padding: 8px;">{item.label}</p>
            ))}
          </div>
          <span v-show={count > 0} style="color: #ED7B2F; margin-left: 8px">
            +{count}
          </span>
        </t-popup>
      );
    },
  },
};
<\/script>
`,tn=`<template>
  <t-space>
    <t-select
      v-model="value"
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
      filterable
      @blur="handleBlur"
      @focus="handleFocus"
      @enter="handleEnter"
    />
    <t-select
      v-model="value2"
      multiple
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      :filter="filterMethod"
      style="width: 400px; display: inline-block"
      @blur="handleBlur"
      @focus="handleFocus"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
        { label: 'option4', value: '4' },
        { label: 'OPTION5', value: '5' },
      ],
      value: '',
      value2: [],
    };
  },
  methods: {
    filterMethod(search, option) {
      console.log('search:', search, ', option:', option);
      return option.label.indexOf(search) !== -1;
    },
    handleBlur({ value, e }) {
      console.log('handleBlur: ', value, e);
    },
    handleFocus({ value, e }) {
      console.log('handleFocus: ', value, e);
    },
    handleEnter({ value, e, inputValue }) {
      console.log('handleEnter: ', value, e, inputValue);
    },
  },
};
<\/script>
`,an=`<template>
  <!-- \u8FDC\u7A0B\u641C\u7D22\u573A\u666F\u4F1A\u6539\u53D8 options \u6570\u7EC4\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u68C0\u7D22\u5386\u53F2\u9009\u9879\uFF0C\u53EF\u901A\u8FC7\u5C06 valueType \u6539\u4E3A \`object\` \u4EE5\u4ECE value \u4E2D\u8BFB\u53D6 \`label\`\uFF0C\u89E3\u51B3\u65E0\u6CD5\u56DE\u663E\u7684\u95EE\u9898 -->

  <t-space>
    <t-select
      v-model="value"
      value-type="object"
      filterable
      placeholder="\u8BF7\u9009\u62E9"
      :onSearch="remoteMethod"
      :loading="loading"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
    />
    <t-select
      v-model="value2"
      value-type="object"
      multiple
      filterable
      placeholder="\u8BF7\u8F93\u5165\u641C\u7D22"
      :options="options2"
      @search="remoteMethod2"
      :loading="loading2"
      reserveKeyword
      style="width: 400px; display: inline-block"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      options2: [],
      value: {},
      value2: [],
      loading: false,
      loading2: false,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    remoteMethod(search) {
      console.log('search', search);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.options = [
          {
            value: \`\${search}1\`,
            label: \`\${search}test1\`,
          },
          {
            value: \`\${search}2\`,
            label: \`\${search}test2\`,
          },
          {
            value: \`\${search}3\`,
            label: \`\${search}test3\`,
          },
        ];
      }, 500);
    },
    remoteMethod2(search) {
      console.log('search2', search);
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
        this.options2 = [
          {
            value: \`\${search}1\`,
            label: \`\${search}test1\`,
          },
          {
            value: \`\${search}2\`,
            label: \`\${search}test2\`,
          },
          {
            value: \`\${search}3\`,
            label: \`\${search}test3\`,
          },
        ];
      }, 500);
    },
  },
};
<\/script>
`,on=`<template>
  <t-space>
    <t-select
      v-model="value"
      creatable
      filterable
      placeholder="\u5355\u9009\u652F\u6301\u81EA\u5B9A\u4E49\u521B\u5EFA"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
      @create="createOptions"
    />
    <t-select
      v-model="value2"
      creatable
      filterable
      multiple
      placeholder="\u591A\u9009\u652F\u6301\u81EA\u5B9A\u4E49\u521B\u5EFA"
      :options="options"
      style="width: 400px; display: inline-block"
      @create="createOptions"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: '',
      value2: [],
    };
  },
  methods: {
    createOptions(value) {
      this.options.push({
        value,
        label: value,
      });
      console.log('create option:', value);
    },
  },
};
<\/script>
`,sn=`<template>
  <t-select v-model="value" placeholder="-\u8BF7\u9009\u62E9-" multiple :max="2" :options="options" style="width: 200px" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: [],
    };
  },
};
<\/script>
`,pn=`<template>
  <t-select v-model="value" style="width: 200px" :options="options" clearable placeholder="-\u8BF7\u9009\u62E9-">
    <icon name="browse" slot="prefixIcon" style="margin-right: 8px" />
  </t-select>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: '',
    };
  },
};
<\/script>
`,un=`<template>
  <t-space>
    <t-select
      v-model="value"
      :borderless="true"
      style="width: 200px"
      placeholder="-\u8BF7\u9009\u62E9-"
      clearable
      :options="options"
    />
    <t-select
      v-model="value2"
      :borderless="true"
      placeholder="-\u8BF7\u9009\u62E9-"
      clearable
      auto-width
      :options="options"
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
          label: '\u5DF2\u9009\u62E9\u7684\u9009\u9879',
          value: '1',
        },
        {
          label: '\u77ED\u7684\u9009\u9879\u4E8C',
          value: '2',
        },
        {
          label: '\u9009\u9879\u5185\u5BB9\u8FC7\u957F\u7684\u9009\u62E9\u5668\u9009\u9879',
          value: '3',
        },
      ],
      value: '1',
      value2: [],
    };
  },
};
<\/script>
`,rn=`<template>
  <t-space>
    <t-select
      v-model="value"
      valueType="object"
      clearable
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      style="width: 200px; display: inline-block; margin-right: 20px"
      @change="handleChange"
    />
    <t-select
      v-model="value2"
      valueType="object"
      clearable
      multiple
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      style="width: 200px; display: inline-block"
      @change="handleChange"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: '\u9009\u9879\u4E00', value: '1' },
        { label: '\u9009\u9879\u4E8C', value: '2' },
        { label: '\u9009\u9879\u4E09', value: '3' },
      ],
      value: { value: '1', label: '\u9009\u9879\u4E00' },
      value2: [{ value: '1', label: '\u9009\u9879\u4E00' }],
    };
  },
  methods: {
    handleChange(value, context) {
      console.log('handleChange:', value, context);
    },
  },
};
<\/script>
`,cn=`<template>
  <t-space>
    <t-select
      v-model="value"
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options"
      :popupProps="popupProps"
      style="width: 200px; display: inline-block"
    />
    <t-select
      v-model="value2"
      placeholder="-\u8BF7\u9009\u62E9-"
      :options="options2"
      :popupProps="popupProps2"
      style="width: 300px; display: inline-block; margin-left: 20px"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      value: '1',
      options: [
        {
          label: '\u56FA\u5B9A300px\u5BBD\u5EA6',
          value: '1',
        },
        {
          label: '\u9009\u9879\u5185\u5BB9\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u7684\u9009\u9879',
          value: '2',
        },
      ],
      // \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879\u5BBD\u5EA6\u4E3A300px
      popupProps: {
        overlayInnerStyle: {
          width: '300px',
        },
      },

      value2: '1',
      options2: [
        {
          label: '\u4E0B\u62C9\u6846\u5F3A\u5236\u548C\u8F93\u5165\u6846\u540C\u5BBD',
          value: '1',
        },
        {
          label: '\u9009\u9879\u5185\u5BB9\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u8D85\u957F\u7684\u9009\u9879',
          value: '2',
        },
      ],
      // \u5B9A\u4E49\u4E0B\u62C9\u5BBD\u5EA6\u59CB\u7EC8\u4E0E\u89E6\u53D1\u6D6E\u5C42\u7684\u5143\u7D20\uFF08\u5373select\u7EC4\u4EF6\uFF09\u7B49\u5BBD
      popupProps2: {
        overlayInnerStyle: (trigger) => ({ width: \`\${trigger.offsetWidth}px\` }),
      },
    };
  },
};
<\/script>
`,vn=`<template>
  <t-space>
    <t-select
      style="width: 300px"
      :options="options"
      placeholder="\u8BF7\u9009\u62E9"
      :popup-props="{ 'on-scroll-to-bottom': handleScrollToBottom }"
    />
  </t-space>
</template>
<script>
const options = [];
for (let i = 1; i < 15; i++) {
  options.push({ label: \`\u7B2C \${i} \u9879\`, value: i });
}
export default {
  data() {
    return {
      options,
    };
  },
  methods: {
    // \u901A\u8FC7\u76D1\u542Cscroll\u6EDA\u52A8\u4E8B\u4EF6\u81EA\u884C\u5224\u65AD
    handleScroll({ e }) {
      const { scrollTop, clientHeight, scrollHeight } = e.target;
      if (scrollHeight - scrollTop === clientHeight) {
        console.log('\u5230\u5E95\u90E8\u4E86');
        this.options = this.options.concat({
          label: \`\u6EDA\u52A8\u65B0\u589E\u9009\u9879\${this.options.length + 1}\`,
          value: this.options.length + 1,
        });
      }
    },

    handleScrollToBottom() {
      // \u76F4\u63A5\u4F7F\u7528\u6EDA\u52A8\u89E6\u5E95\u4E8B\u4EF6
      this.options = this.options.concat({
        label: \`\u6EDA\u52A8\u65B0\u589E\u9009\u9879\${this.options.length + 1}\`,
        value: this.options.length + 1,
      });
    },
  },
};
<\/script>
`,dn=`<template>
  <!-- \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u8BF7\u4E3Aselect\u7684panel\u8BBE\u5B9A\u597Dheight \u901A\u8FC7popupProps\u8FDB\u884C\u900F\u4F20 -->
  <t-space>
    <t-select
      v-model="value1"
      :options="options"
      placeholder="\u8BF7\u9009\u62E9"
      :style="{ width: '300px' }"
      :scroll="{ type: 'virtual' }"
      :popup-props="{ overlayInnerStyle: { height: '300px' } }"
    />
    <!-- \u5F00\u542F\u865A\u62DF\u6EDA\u52A8\u8BF7\u4E3Aselect\u7684panel\u8BBE\u5B9A\u597Dheight \u901A\u8FC7popupProps\u8FDB\u884C\u900F\u4F20 -->
    <t-select
      v-model="value2"
      placeholder="\u8BF7\u9009\u62E9"
      :style="{ width: '300px' }"
      :scroll="{ type: 'virtual' }"
      :popup-props="{ overlayInnerStyle: { height: '300px' } }"
    >
      <t-option v-for="item in options" :value="item.value" :label="item.label" :key="item.value"></t-option>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    const options = [];
    for (let i = 0; i < 10000; i++) {
      options.push({ label: \`\u9009\u9879\${i + 1}\`, value: String(i) });
    }
    return {
      value1: '',
      value2: '',
      options,
    };
  },
};
<\/script>
`,$l=[{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"creatable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"filterable",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"reserveKeyword",type:"Boolean",defaultValue:!1,options:[]},{name:"showArrow",type:"Boolean",defaultValue:!0,options:[]},{name:"size",type:"enum",defaultValue:"medium",options:[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}]},{name:"valueType",type:"enum",defaultValue:"value",options:[{label:"value",value:"value"},{label:"object",value:"object"}]}],B={};B.setup=(e,l)=>{const t=r($l),n=[{label:"select",value:"select"}],a={select:`
        <t-select v-bind="configProps">
          <t-option key="apple" label="Apple" value="apple" />
          <t-option key="orange" value="orange">Orange</t-option>
          <t-option key="banana" label="Banana" value="banana" />
        </t-select>
      `},s=r(`<template>${a[n[0].value].trim()}</template>`);function i(p){s.value=`<template>${a[p].trim()}</template>`}return{configList:t,panelList:n,usageCode:s,onPanelChange:i}};var kl=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"select",fn:function(n){var a=n.configProps;return[t("t-select",e._b({},"t-select",a,!1),[t("t-option",{key:"apple",attrs:{label:"Apple",value:"apple"}}),t("t-option",{key:"orange",attrs:{value:"orange"}},[e._v("Orange")]),t("t-option",{key:"banana",attrs:{label:"Banana",value:"banana"}})],1)]}}])})},Cl=[];const F={};var Sl=o(B,kl,Cl,!1,wl,null,null,null);function wl(e){for(let l in F)this[l]=F[l]}const mn=function(){return Sl.exports}();export{nn as A,tn as B,an as C,Ol as D,on as E,sn as F,pn as G,un as H,rn as I,cn as J,vn as K,dn as L,mn as U,Pl as a,Fl as b,Il as c,Bl as d,Ml as e,Al as f,El as g,Nl as h,Tl as i,Rl as j,Vl as k,zl as l,Hl as m,Ul as n,Ll as o,Wl as p,Kl as q,Jl as r,ql as s,Gl as t,Ql as u,Xl as v,Yl as w,Zl as x,en as y,ln as z};
