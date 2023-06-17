import{V as M,n as o,r}from"./index.fb7ca27a.js";import{C as c}from"./chevron-down.99402e6e.js";import{S as E}from"./search.6cf47c0e.js";import{T as A}from"./index.35ddcb62.js";import{u as j,_ as F}from"./use-size-props.363c09d5.js";import{_ as R,I as N}from"./icon.ca3926ce.js";var B=["size"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,l)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(l){F(e,l,n[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))})}return e}var z={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14.5 4.25L8.47.77a.94.94 0 00-.94 0L1.5 4.25v6.96c0 .33.18.64.47.81L8 15.5l6.03-3.48a.94.94 0 00.47-.81V4.25zM8 7.42L3 4.54l5-2.89 5 2.89-5 2.88zm.5.87l5-2.89v5.77l-5 2.89V8.29zm-1 0v5.77l-5-2.89V5.4l5 2.89z",fillRule:"evenodd",clipRule:"evenodd"}}]},L=M.extend({name:"ControlPlatformIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(t,n){var l=n.props,a=n.data,s=l.size,i=R(l,B),p=j(s),P=p.className,O=p.style,D=d(d({},i||{}),{},{id:"control-platform",icon:z,staticClass:P,style:O});return a.props=D,t(N,a)}}),H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-select-input",{staticStyle:{width:"300px"},attrs:{value:e.selectValue,"popup-visible":e.popupVisible,"popup-props":{overlayInnerStyle:{padding:"6px"}},placeholder:"Please Select",clearable:"","allow-input":""},on:{"popup-visible-change":e.onPopupVisibleChange,clear:e.onClear,"input-change":e.onInputChange},scopedSlots:e._u([{key:"panel",fn:function(){return[n("ul",{staticClass:"tdesign-demo__select-input-ul-single"},e._l(e.options,function(l){return n("li",{key:l.value,on:{click:function(){return e.onOptionClick(l)}}},[e._v(" "+e._s(l.label)+" ")])}),0)]},proxy:!0},{key:"suffixIcon",fn:function(){return[n("chevron-down-icon")]},proxy:!0}])})},U=[];const W={components:{ChevronDownIcon:c},data(){return{options:[{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2},{label:"tdesign-miniprogram",value:3},{label:"tdesign-angular",value:4},{label:"tdesign-mobile-vue",value:5},{label:"tdesign-mobile-react",value:6}],selectValue:{label:"tdesign-vue",value:1},popupVisible:!1}},methods:{onOptionClick(e){this.selectValue=e,this.popupVisible=!1},onClear(){this.selectValue=void 0},onPopupVisibleChange(e){console.log(e),this.popupVisible=e},onInputChange(e,t){console.log(e,t)}}},v={};var Y=o(W,H,U,!1,q,"4152a70e",null,null);function q(e){for(let t in v)this[t]=v[t]}const fn=function(){return Y.exports}();var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-demo__select-input-multiple",staticStyle:{width:"100%"},attrs:{direction:"vertical"}},[n("div",[n("t-checkbox",{model:{value:e.allowInput,callback:function(l){e.allowInput=l},expression:"allowInput"}},[e._v("\u662F\u5426\u5141\u8BB8\u8F93\u5165")]),n("t-checkbox",{model:{value:e.creatable,callback:function(l){e.creatable=l},expression:"creatable"}},[e._v("\u5141\u8BB8\u521B\u5EFA\u65B0\u9009\u9879\uFF08Enter \u521B\u5EFA\uFF09")])],1),n("div",[n("t-radio-group",{attrs:{options:[{label:"\u9009\u4E2D\u9879\u8FC7\u591A\u6A2A\u5411\u6EDA\u52A8",value:"scroll"},{label:"\u9009\u4E2D\u9879\u8FC7\u591A\u6362\u884C\u663E\u793A",value:"break-line"}]},model:{value:e.excessTagsDisplayType,callback:function(l){e.excessTagsDisplayType=l},expression:"excessTagsDisplayType"}})],1),n("t-select-input",{attrs:{"input-value:sync":e.inputValue,value:e.value,"allow-input":e.allowInput,placeholder:e.allowInput?"\u8BF7\u9009\u62E9\u6216\u8F93\u5165":"\u8BF7\u9009\u62E9","tag-input-props":{excessTagsDisplayType:e.excessTagsDisplayType},"popup-props":{overlayInnerClassName:["narrow-scrollbar"],overlayInnerStyle:{maxHeight:"280px",overflowY:"auto",overscrollBehavior:"contain",padding:"6px"}},clearable:"",multiple:""},on:{focus:e.handleFocus,blur:e.handleBlur,"tag-change":e.onTagChange,"input-change":e.onInputChange,clear:e.handleClear,enter:e.handleEnter,mouseenter:e.handleMouseenter,change:e.handleChange},scopedSlots:e._u([{key:"panel",fn:function(){return[e.options.length?n("t-checkbox-group",{staticClass:"tdesign-demo__panel-options-multiple",attrs:{value:e.checkboxValue,options:e.options},on:{change:e.onCheckedChange}}):n("div",{staticClass:"tdesign-demo__select-empty-multiple"},[e._v("\u6682\u65E0\u6570\u636E")])]},proxy:!0},{key:"suffixIcon",fn:function(){return[n("chevron-down-icon")]},proxy:!0}])})],1)},K=[];const G=[{label:"Check All",checkAll:!0},{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2},{label:"tdesign-miniprogram",value:3},{label:"tdesign-angular",value:4},{label:"tdesign-mobile-vue",value:5},{label:"tdesign-mobile-react",value:6}],Q={components:{ChevronDownIcon:c},data(){return{excessTagsDisplayType:"break-line",allowInput:!0,creatable:!0,inputValue:"",options:[...G],value:[{label:"Vue",value:1},{label:"React",value:2},{label:"Miniprogram",value:3}]}},computed:{checkboxValue(){const e=[],t=this.value;for(let n=0,l=t.length;n<l;n++)t[n].value&&e.push(t[n].value);return e}},methods:{handleFocus(e,t){console.log("focus",e,t)},handleBlur(){console.log("Blur")},handleClear(){console.log("Clear")},handleEnter(){console.log("Enter")},handleMouseenter(){console.log("Mouseenter")},handleChange(){console.log("Change")},onCheckedChange(e,{current:t,type:n}){if(console.log(t),!t){this.value=n==="check"?this.options.slice(1):[];return}if(n==="check"){const l=this.options.find(a=>a.value===t);this.value.push(l)}else this.value=this.value.filter(l=>l.value!==t)},onTagChange(e,t){console.log(e,t);const{trigger:n,index:l,item:a}=t;if(n==="clear"&&(this.value=[]),["tag-remove","backspace"].includes(n)&&this.value.splice(l,1),this.creatable&&n==="enter"){const s={label:a,value:a};this.value.push(s);const i=this.options.concat(s);this.options=i,this.inputValue=""}},onInputChange(e,t){console.log(e,t)}}},g={};var X=o(Q,J,K,!1,Z,null,null,null);function Z(e){for(let t in g)this[t]=g[t]}const xn=function(){return X.exports}();var ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-select-input",{staticStyle:{width:"300px"},attrs:{value:e.selectValue,"popup-visible":e.popupVisible,"popup-props":{overlayInnerStyle:{padding:"6px"}},placeholder:"\u8BF7\u8F93\u5165\u4EFB\u610F\u5173\u952E\u8BCD","allow-input":"",clearable:""},on:{"input-change":e.onInputChange,"popup-visible-change":e.onPopupVisibleChange},scopedSlots:e._u([{key:"panel",fn:function(){return[n("ul",{staticClass:"tdesign-demo__select-input-ul-autocomplete"},e._l(e.options,function(l){return n("li",{key:l,on:{click:function(){return e.onOptionClick(l)}}},[e._v(" "+e._s(l)+" ")])}),0)]},proxy:!0},{key:"suffixIcon",fn:function(){return[n("search-icon")]},proxy:!0}])})},ne=[];const te={components:{SearchIcon:E},data(){return{selectValue:"",popupVisible:!1,options:["Student A","Student B","Student C","Student D","Student E","Student F"]}},methods:{onOptionClick(e){this.selectValue=e,this.popupVisible=!1},onInputChange(e){this.selectValue=e,this.options=new Array(5).fill(null).map((t,n)=>`${e} Student ${n}`)},onPopupVisibleChange(e){this.popupVisible=e}}},h={};var le=o(te,ee,ne,!1,ae,null,null,null);function ae(e){for(let t in h)this[t]=h[t]}const yn=function(){return le.exports}();var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{attrs:{direction:"vertical"}},[n("t-select-input",{staticStyle:{width:"300px"},attrs:{value:e.selectValue,"popup-visible":e.popupVisible,"popup-props":{overlayInnerStyle:{padding:"6px"}},label:"\u524D\u7F6E\u5185\u5BB9\uFF1A",placeholder:"Please Select",clearable:""},on:{"popup-visible-change":e.onPopupVisibleChange,clear:e.onClear},scopedSlots:e._u([{key:"panel",fn:function(){return[n("ul",{staticClass:"tdesign-demo__select-input-ul-label-suffix"},e._l(e.options,function(l){return n("li",{key:l.value,on:{click:function(){return e.onOptionClick(l)}}},[e._v(" "+e._s(l.label)+" ")])}),0)]},proxy:!0},{key:"suffixIcon",fn:function(){return[n("chevron-down-icon")]},proxy:!0}])}),n("br"),n("br"),n("t-select-input",{staticStyle:{width:"300px"},attrs:{value:e.selectValue,"popup-visible":e.popupVisible2,"popup-props":{overlayInnerStyle:{padding:"6px"}},suffix:"\u5355\u4F4D\uFF1A\u5143",placeholder:"Please Select",clearable:""},on:{"popup-visible-change":e.onPopupVisibleChange2,clear:e.onClear},scopedSlots:e._u([{key:"panel",fn:function(){return[n("ul",{staticClass:"tdesign-demo__select-input-ul-label-suffix"},e._l(e.options,function(l){return n("li",{key:l.value,on:{click:function(){return e.onOptionClick(l)}}},[e._v(" "+e._s(l.label)+" ")])}),0)]},proxy:!0},{key:"suffixIcon",fn:function(){return[n("chevron-down-icon")]},proxy:!0}])})],1)},oe=[];const ie=[{label:"Check All",checkAll:!0},{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2},{label:"tdesign-miniprogram",value:3},{label:"tdesign-angular",value:4},{label:"tdesign-mobile-vue",value:5},{label:"tdesign-mobile-react",value:6}],pe={components:{ChevronDownIcon:c},data(){return{options:ie,selectValue:{label:"tdesign-vue",value:1},popupVisible:!1,popupVisible2:!1}},methods:{onOptionClick(e){this.selectValue=e,this.popupVisible=!1,this.popupVisible2=!1},onClear(){this.selectValue=void 0},onPopupVisibleChange(e,t){console.log(t),this.popupVisible=e},onPopupVisibleChange2(e){this.popupVisible2=e}}},m={};var ce=o(pe,se,oe,!1,re,"e7809428",null,null);function re(e){for(let t in m)this[t]=m[t]}const Cn=function(){return ce.exports}();var ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-demo-select-input-status",staticStyle:{width:"100%"},attrs:{direction:"vertical"}},[n("t-space",{attrs:{align:"center"}},[n("span",[e._v("\u7981\u7528\u72B6\u6001\uFF1A")]),n("t-select-input",{attrs:{value:e.selectValue,disabled:"",tips:"\u8FD9\u662F\u7981\u7528\u72B6\u6001\u6587\u672C\u63D0\u793A",placeholder:"Please Select"},scopedSlots:e._u([{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-status"},[e._v("\u6682\u65E0\u6570\u636E")])]},proxy:!0}])})],1),n("t-space",{attrs:{align:"center"}},[n("span",[e._v("\u53EA\u8BFB\u72B6\u6001\uFF1A")]),n("t-select-input",{attrs:{value:e.selectValue,readonly:"",tips:"\u8FD9\u662F\u666E\u901A\u72B6\u6001\u7684\u6587\u672C\u63D0\u793A",placeholder:"Please Select"},scopedSlots:e._u([{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-status"},[e._v("\u6682\u65E0\u6570\u636E")])]},proxy:!0}])})],1),n("t-space",{attrs:{align:"center"}},[n("span",[e._v("\u6210\u529F\u72B6\u6001\uFF1A")]),n("t-select-input",{attrs:{value:e.selectValue,status:"success",tips:"\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A",placeholder:"Please Select"},scopedSlots:e._u([{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-status"},[e._v("\u6682\u65E0\u6570\u636E")])]},proxy:!0}])})],1),n("t-space",{attrs:{align:"center"}},[n("span",[e._v("\u8B66\u544A\u72B6\u6001\uFF1A")]),n("t-select-input",{attrs:{value:e.selectValue,status:"warning",tips:"\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A",placeholder:"Please Select"},scopedSlots:e._u([{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-status"},[e._v("\u6682\u65E0\u6570\u636E")])]},proxy:!0}])})],1),n("t-space",{attrs:{align:"center"}},[n("span",[e._v("\u9519\u8BEF\u72B6\u6001\uFF1A")]),n("t-select-input",{attrs:{value:e.selectValue,status:"error",tips:"\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A",placeholder:"Please Select"},scopedSlots:e._u([{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-status"},[e._v("\u6682\u65E0\u6570\u636E")])]},proxy:!0}])})],1)],1)},de=[];const ve={data(){return{selectValue:"TDesign"}}},_={};var ge=o(ve,ue,de,!1,he,null,null,null);function he(e){for(let t in _)this[t]=_[t]}const kn=function(){return ge.exports}();var me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-demo__select-input-width",attrs:{direction:"vertical"}},[n("div",[n("span",[e._v("\u4E0B\u62C9\u6846\u9ED8\u8BA4\u5BBD\u5EA6\uFF1A")]),n("t-select-input",{staticClass:"t-demo-normal",attrs:{value:e.selectValue,placeholder:"Please Select"},scopedSlots:e._u([{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-width"},[e._v("\u4E0B\u62C9\u6846\u5BBD\u5EA6\u548C\u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\uFF08\u9ED8\u8BA4\uFF09")])]},proxy:!0}])})],1),n("div",[n("span",[e._v("\u4E0B\u62C9\u6846\u6700\u5927\u5BBD\u5EA6\uFF1A")]),n("t-select-input",{staticClass:"t-demo-normal",attrs:{value:e.selectValue,placeholder:"Please Select"},scopedSlots:e._u([{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-width"},[e._v(" \u4E0B\u62C9\u6846\u5BBD\u5EA6\u548C\u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u662F\u5F53\u4E0B\u62C9\u6846\u5185\u5BB9\u5BBD\u5EA6\u8D85\u51FA\u65F6\uFF0C\u81EA\u52A8\u6491\u5F00\u4E0B\u62C9\u6846\u5BBD\u5EA6\uFF0C\u6700\u5927\u4E0D\u8D85\u8FC7 1000px\uFF08\u9ED8\u8BA4\uFF09 ")])]},proxy:!0}])})],1),n("div",[n("span",[e._v("\u4E0E\u5185\u5BB9\u5BBD\u5EA6\u4E00\u81F4\uFF1A")]),n("t-select-input",{staticClass:"t-demo-normal",attrs:{value:e.selectValue,"popup-props":{overlayInnerStyle:{width:"auto"}},placeholder:"Please Select"},scopedSlots:e._u([{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-width"},[e._v("\u5BBD\u5EA6\u968F\u5185\u5BB9\u5BBD\u5EA6\u81EA\u9002\u5E94")])]},proxy:!0}])})],1),n("div",[n("span",[e._v("\u4E0B\u62C9\u6846\u56FA\u5B9A\u5BBD\u5EA6\uFF1A")]),n("t-select-input",{staticClass:"t-demo-normal",attrs:{value:e.selectValue,"popup-props":{overlayInnerStyle:{width:"360px"}},placeholder:"Please Select"},scopedSlots:e._u([{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-width"},[e._v("\u56FA\u5B9A\u5BBD\u5EA6 360px")])]},proxy:!0}])})],1)])},_e=[];const be={data(){return{selectValue:"TDesign"}}},b={};var fe=o(be,me,_e,!1,xe,null,null,null);function xe(e){for(let t in b)this[t]=b[t]}const wn=function(){return fe.exports}();var ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-demo__select-input-excess-tags-display-type",staticStyle:{width:"100%"},attrs:{direction:"vertical"}},[n("p",[e._v("\u7B2C\u4E00\u79CD\u5448\u73B0\u65B9\u5F0F\uFF1A\u8D85\u51FA\u65F6\u6EDA\u52A8\u663E\u793A")]),n("t-select-input",{attrs:{value:e.value,"tag-input-props":{excessTagsDisplayType:"scroll"},"popup-props":{overlayInnerStyle:{padding:"6px"}},placeholder:"\u8BF7\u9009\u62E9","allow-input":"",clearable:"",multiple:""},on:{"tag-change":e.onTagChange},scopedSlots:e._u([{key:"panel",fn:function(){return[n("t-checkbox-group",{staticClass:"tdesign-demo__panel-options-excess-tags-display-type",attrs:{value:e.checkboxValue,options:e.options},on:{change:e.onCheckedChange}})]},proxy:!0}])}),n("p",[e._v("\u7B2C\u4E8C\u79CD\u5448\u73B0\u65B9\u5F0F\uFF1A\u8D85\u51FA\u65F6\u6362\u884C\u663E\u793A")]),n("t-select-input",{attrs:{value:e.value,"tag-input-props":{excessTagsDisplayType:"break-line"},"popup-props":{overlayInnerStyle:{padding:"6px"}},placeholder:"\u8BF7\u9009\u62E9","allow-input":"",clearable:"",multiple:""},on:{"tag-change":e.onTagChange},scopedSlots:e._u([{key:"panel",fn:function(){return[n("t-checkbox-group",{staticClass:"tdesign-demo__panel-options-excess-tags-display-type",attrs:{value:e.checkboxValue,options:e.options},on:{change:e.onCheckedChange}})]},proxy:!0}])})],1)},Ce=[];const f=[{label:"Check All",checkAll:!0},{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2},{label:"tdesign-miniprogram",value:3},{label:"tdesign-angular",value:4},{label:"tdesign-mobile-vue",value:5},{label:"tdesign-mobile-react",value:6}],ke={data(){return{options:[...f],value:f.slice(1)}},computed:{checkboxValue(){const e=[],t=this.value;for(let n=0,l=t.length;n<l;n++)t[n].value&&e.push(t[n].value);return e}},methods:{onCheckedChange(e,{current:t,type:n}){if(!t){this.value=n==="check"?this.options.slice(1):[];return}if(n==="check"){const l=this.options.find(a=>a.value===t);this.value.push(l)}else this.value=this.value.filter(l=>l.value!==t)},onTagChange(e,t){console.log(e,t);const{trigger:n,index:l,item:a}=t;if(n==="clear"&&(this.value=[]),["tag-remove","backspace"].includes(n)&&this.value.splice(l,1),n==="enter"){const s={label:a,value:a};this.value.push(s),this.options=this.options.concat(s)}}}},x={};var we=o(ke,ye,Ce,!1,Ve,null,null,null);function Ve(e){for(let t in x)this[t]=x[t]}const Vn=function(){return we.exports}(),y=[{label:"Check All",checkAll:!0},{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2},{label:"tdesign-miniprogram",value:3},{label:"tdesign-angular",value:4},{label:"tdesign-mobile-vue",value:5},{label:"tdesign-mobile-react",value:6}],Se={data(){return{options:[...y],value:y.slice(1)}},computed:{checkboxValue(){const e=[],t=this.value;for(let n=0,l=t.length;n<l;n++)t[n].value&&e.push(t[n].value);return e}},methods:{onCheckedChange(e,{current:t,type:n}){if(!t){this.value=n==="check"?this.options.slice(1):[];return}if(n==="check"){const l=this.options.find(a=>a.value===t);this.value.push(l)}else this.value=this.value.filter(l=>l.value!==t)},onTagChange(e,t){console.log(e,t);const{trigger:n,index:l,item:a}=t;if(n==="clear"&&(this.value=[]),["tag-remove","backspace"].includes(n)&&this.value.splice(l,1),n==="enter"){const s={label:a,value:a};this.value.push(s),this.options=this.options.concat(s)}},renderCollapsedItems(e,{collapsedTags:t}){const n=this.$createElement;return n(A,["\u66F4\u591A(",t.length,")"])}}};var Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-demo__select-input-collapsed-items",attrs:{direction:"vertical"}},[n("t-select-input",{attrs:{value:e.value,"min-collapsed-num":1,"popup-props":{overlayInnerStyle:{padding:"6px"}},placeholder:"\u8BF7\u9009\u62E9","allow-input":"",clearable:"",multiple:""},on:{"tag-change":e.onTagChange},scopedSlots:e._u([{key:"panel",fn:function(){return[n("t-checkbox-group",{staticClass:"tdesign-demo__panel-options-collapsed-items",attrs:{value:e.checkboxValue,options:e.options},on:{change:e.onCheckedChange}})]},proxy:!0}])}),n("t-select-input",{attrs:{value:e.value,"min-collapsed-num":2,"collapsed-items":e.renderCollapsedItems,"popup-props":{overlayInnerStyle:{padding:"6px"}},placeholder:"\u8BF7\u9009\u62E9","allow-input":"",clearable:"",multiple:""},on:{"tag-change":e.onTagChange},scopedSlots:e._u([{key:"panel",fn:function(){return[n("t-checkbox-group",{staticClass:"tdesign-demo__panel-options-collapsed-items",attrs:{value:e.checkboxValue,options:e.options},on:{change:e.onCheckedChange}})]},proxy:!0}])}),n("t-select-input",{attrs:{value:e.value,"min-collapsed-num":3,"popup-props":{overlayInnerStyle:{padding:"6px"}},placeholder:"\u8BF7\u9009\u62E9","allow-input":"",clearable:"",multiple:""},on:{"tag-change":e.onTagChange},scopedSlots:e._u([{key:"collapsedItems",fn:function(l){var a=l.collapsedTags;return[n("t-popup",{scopedSlots:e._u([{key:"content",fn:function(){return e._l(a,function(s){return n("t-tag",{key:s,staticStyle:{margin:"4px 4px 4px 0"}},[e._v(" "+e._s(s)+" ")])})},proxy:!0}],null,!0)},[n("t-tag",[e._v("More("+e._s(a.length)+")")])],1)]}},{key:"panel",fn:function(){return[n("t-checkbox-group",{staticClass:"tdesign-demo__panel-options-collapsed-items",attrs:{value:e.checkboxValue,options:e.options},on:{change:e.onCheckedChange}})]},proxy:!0}])})],1)},Te=[];const C={};var $e=o(Se,Ie,Te,!1,Pe,null,null,null);function Pe(e){for(let t in C)this[t]=C[t]}const Sn=function(){return $e.exports}();var Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-demo-select-input-custom-tag",attrs:{direction:"vertical"}},[n("t-select-input",{attrs:{"popup-props":{overlayInnerStyle:{padding:"6px"}},value:e.selectValue1,placeholder:"Please Select",clearable:""},on:{clear:e.onClear},scopedSlots:e._u([{key:"valueDisplay",fn:function(){return[e.selectValue1?n("span",{staticClass:"displaySpan"},[n("control-platform-icon",{staticClass:"tdesign-demo-select-input__img"}),e._v(" "+e._s(e.selectValue1.label)+" ")],1):e._e()]},proxy:!0},{key:"panel",fn:function(){return[n("ul",{staticClass:"tdesign-demo__select-input-ul-single"},e._l(e.options,function(l){return n("li",{key:l.value,on:{click:function(){return e.onOptionClick(l)}}},[e._v(" "+e._s(l.label)+" ")])}),0)]},proxy:!0}])}),n("t-select-input",{attrs:{value:e.selectValue2,clearable:"",placeholder:"Please Select",multiple:""},on:{"tag-change":e.onTagChange2},scopedSlots:e._u([{key:"tag",fn:function(l){var a=l.value;return[n("span",{staticClass:"displaySpan"},[n("control-platform-icon"),e._v(" "+e._s(a)+" ")],1)]}},{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-custom"},[e._v("\u6682\u65E0\u793A\u610F\u6570\u636E")])]},proxy:!0}])}),n("t-select-input",{attrs:{value:e.selectValue3,placeholder:"Please Select",multiple:""},on:{"tag-change":e.onTagChange3},scopedSlots:e._u([{key:"valueDisplay",fn:function(l){var a=l.value,s=l.onClose;return e._l(a,function(i,p){return n("t-tag",{key:i,staticStyle:{"margin-right":"4px"},attrs:{closable:""},on:{close:function(){return s(p)}}},[n("span",{staticClass:"displaySpan"},[n("control-platform-icon"),n("span",[e._v(e._s(i))])],1)])})}},{key:"panel",fn:function(){return[n("div",{staticClass:"tdesign-demo__select-empty-custom"},[e._v("\u6682\u65E0\u793A\u610F\u6570\u636E")])]},proxy:!0}])})],1)},De=[];const Me=[{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2},{label:"tdesign-miniprogram",value:3},{label:"tdesign-angular",value:4},{label:"tdesign-mobile-vue",value:5},{label:"tdesign-mobile-react",value:6}],Ee={components:{ControlPlatformIcon:L},data(){return{options:Me,selectValue1:{label:"tdesign-vue",value:1},selectValue2:["tdesign-vue","tdesign-react"],selectValue3:["tdesign-vue","tdesign-react","tdesign-mobile-vue"]}},methods:{onOptionClick(e){this.selectValue1=e},onClear(){this.selectValue1=void 0},onTagChange2(e){this.selectValue2=e},onTagChange3(e){this.selectValue3=e}}},k={};var Ae=o(Ee,Oe,De,!1,je,"39a2c8d5",null,null);function je(e){for(let t in k)this[t]=k[t]}const In=function(){return Ae.exports}(),Fe=[{label:"all frameworks",checkAll:!0},{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2},{label:"tdesign-miniprogram",value:3},{label:"tdesign-angular",value:4},{label:"tdesign-mobile-vue",value:5},{label:"tdesign-mobile-react",value:6}],Re={data(){return{selectValue:{label:"tdesign-vue",value:1},options:Fe,popupVisible:!1}},methods:{onOptionClick(e){this.selectValue=e,this.popupVisible=!1},onClear(){this.selectValue=void 0},onPopupVisibleChange(e){this.popupVisible=e}}};var Ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-select-input",{attrs:{value:e.selectValue,"popup-visible":e.popupVisible,"popup-props":{overlayInnerStyle:{padding:"6px"}},placeholder:"Please Select",borderless:"",clearable:""},on:{"popup-visible-change":e.onPopupVisibleChange,clear:e.onClear},scopedSlots:e._u([{key:"panel",fn:function(){return[n("ul",{staticClass:"tdesign-demo__select-input-ul-borderless"},e._l(e.options,function(l){return n("li",{key:l.value,on:{click:function(){return e.onOptionClick(l)}}},[e._v(" "+e._s(l.label)+" ")])}),0)]},proxy:!0}])})},Be=[];const w={};var ze=o(Re,Ne,Be,!1,Le,"10adf8f5",null,null);function Le(e){for(let t in w)this[t]=w[t]}const Tn=function(){return ze.exports}();var He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo__select-input-borderless-multiple",staticStyle:{width:"100%"}},[n("t-select-input",{staticStyle:{width:"250px"},attrs:{value:e.value,"min-collapsed-num":1,"popup-props":{overlayInnerStyle:{padding:"6px"}},borderless:"","allow-input":"",placeholder:"select frameworks",clearable:"",multiple:""},on:{"tag-change":e.onTagChange},scopedSlots:e._u([{key:"panel",fn:function(){return[n("t-checkbox-group",{staticClass:"tdesign-demo__panel-options-borderless-multiple",attrs:{value:e.checkboxValue,options:e.options},on:{change:e.onCheckedChange}})]},proxy:!0}])})],1)},Ue=[];const We=[{label:"all frameworks",checkAll:!0},{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2},{label:"tdesign-miniprogram",value:3},{label:"tdesign-angular",value:4},{label:"tdesign-mobile-vue",value:5},{label:"tdesign-mobile-react",value:6}],Ye={data(){return{options:We,value:[{label:"Vue",value:1},{label:"React",value:2},{label:"Miniprogram",value:3}]}},computed:{checkboxValue(){const e=[],t=this.value;for(let n=0,l=t.length;n<l;n++)t[n].value&&e.push(t[n].value);return e}},methods:{onCheckedChange(e,{current:t,type:n}){if(!t){this.value=n==="check"?this.options.slice(1):[];return}if(n==="check"){const l=this.options.find(a=>a.value===t);this.value.push(l)}else this.value=this.value.filter(l=>l.value!==t)},onTagChange(e,t){const{trigger:n,index:l,item:a}=t;if(n==="clear"&&(this.value=[]),["tag-remove","backspace"].includes(n)&&this.value.splice(l,1),n==="enter"){const s={label:a,value:a};this.value.push(s),this.options=this.options.concat(s)}}}},V={};var qe=o(Ye,He,Ue,!1,Je,null,null,null);function Je(e){for(let t in V)this[t]=V[t]}const $n=function(){return qe.exports}();var Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-select-input",{attrs:{value:e.selectValue,"popup-visible":e.popupVisible,placeholder:"Please Select",clearable:"","auto-width":"","allow-input":""},on:{"popup-visible-change":e.onPopupVisibleChange,clear:e.onClear,"input-change":e.onInputChange},scopedSlots:e._u([{key:"panel",fn:function(){return[n("ul",{staticClass:"tdesign-demo__select-input-ul-auto-width"},e._l(e.options,function(l){return n("li",{key:l.value,on:{click:function(){return e.onOptionClick(l)}}},[e._v(" "+e._s(l.label)+" ")])}),0)]},proxy:!0},{key:"suffixIcon",fn:function(){return[n("chevron-down-icon")]},proxy:!0}])})},Ge=[];const Qe=[{label:"all frameworks",checkAll:!0},{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2},{label:"tdesign-miniprogram",value:3},{label:"tdesign-angular",value:4},{label:"tdesign-mobile-vue",value:5},{label:"tdesign-mobile-react",value:6}],Xe={components:{ChevronDownIcon:c},data(){return{selectValue:{label:"tdesign-vue",value:1},options:Qe,popupVisible:!1}},methods:{onOptionClick(e){this.selectValue=e,this.popupVisible=!1},onClear(){this.selectValue=void 0},onPopupVisibleChange(e){this.popupVisible=e},onInputChange(e){console.log(e)}}},S={};var Ze=o(Xe,Ke,Ge,!1,en,null,null,null);function en(e){for(let t in S)this[t]=S[t]}const Pn=function(){return Ze.exports}();var nn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tdesign-demo__select-input-autowidth-multiple",staticStyle:{width:"100%"}},[n("t-select-input",{attrs:{value:e.value,"min-collapsed-num":1,"auto-width":"","allow-input":"",placeholder:"select frameworks",clearable:"",multiple:""},on:{"tag-change":e.onTagChange},scopedSlots:e._u([{key:"panel",fn:function(){return[n("t-checkbox-group",{staticClass:"tdesign-demo__panel-options-autowidth-multiple",attrs:{value:e.checkboxValue,options:e.options},on:{change:e.onCheckedChange}})]},proxy:!0},{key:"suffixIcon",fn:function(){return[n("chevron-down-icon")]},proxy:!0}])})],1)},tn=[];const ln=[{label:"all frameworks",checkAll:!0},{label:"tdesign-vue",value:1},{label:"tdesign-react",value:2},{label:"tdesign-miniprogram",value:3},{label:"tdesign-angular",value:4},{label:"tdesign-mobile-vue",value:5},{label:"tdesign-mobile-react",value:6}],an={components:{ChevronDownIcon:c},data(){return{options:ln,value:[{label:"Vue",value:1},{label:"React",value:2},{label:"Miniprogram",value:3}]}},computed:{checkboxValue(){const e=[],t=this.value;for(let n=0,l=t.length;n<l;n++)t[n].value&&e.push(t[n].value);return e}},methods:{onCheckedChange(e,{current:t,type:n}){if(!t){this.value=n==="check"?this.options.slice(1):[];return}if(n==="check"){const l=this.options.find(a=>a.value===t);this.value.push(l)}else this.value=this.value.filter(l=>l.value!==t)},onTagChange(e,t){const{trigger:n,index:l,item:a}=t;if(n==="clear"&&(this.value=[]),["tag-remove","backspace"].includes(n)&&this.value.splice(l,1),n==="enter"){const s={label:a,value:a};this.value.push(s),this.options=this.options.concat(s)}}}},I={};var sn=o(an,nn,tn,!1,on,null,null,null);function on(e){for(let t in I)this[t]=I[t]}const On=function(){return sn.exports}(),Dn=`<template>
  <!-- :popup-props="{ trigger: 'hover' }" -->
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
    style="width: 300px"
    placeholder="Please Select"
    clearable
    allow-input
    @popup-visible-change="onPopupVisibleChange"
    @clear="onClear"
    @input-change="onInputChange"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-single">
        <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </template>
    <template #suffixIcon>
      <chevron-down-icon />
    </template>
  </t-select-input>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      options: [
        { label: 'tdesign-vue', value: 1 },
        { label: 'tdesign-react', value: 2 },
        { label: 'tdesign-miniprogram', value: 3 },
        { label: 'tdesign-angular', value: 4 },
        { label: 'tdesign-mobile-vue', value: 5 },
        { label: 'tdesign-mobile-react', value: 6 },
      ],
      selectValue: { label: 'tdesign-vue', value: 1 },
      popupVisible: false,
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      this.popupVisible = false;
    },
    onClear() {
      this.selectValue = undefined;
    },
    onPopupVisibleChange(val) {
      console.log(val);
      this.popupVisible = val;
    },
    onInputChange(val, context) {
      // \u8FC7\u6EE4\u529F\u80FD
      console.log(val, context);
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-single {
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 2px;
}
.tdesign-demo__select-input-ul-single > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-single > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,Mn=`<template>
  <t-space direction="vertical" class="tdesign-demo__select-input-multiple" style="width: 100%">
    <div>
      <t-checkbox v-model="allowInput">\u662F\u5426\u5141\u8BB8\u8F93\u5165</t-checkbox>
      <t-checkbox v-model="creatable">\u5141\u8BB8\u521B\u5EFA\u65B0\u9009\u9879\uFF08Enter \u521B\u5EFA\uFF09</t-checkbox>
    </div>
    <div>
      <t-radio-group
        v-model="excessTagsDisplayType"
        :options="[
          { label: '\u9009\u4E2D\u9879\u8FC7\u591A\u6A2A\u5411\u6EDA\u52A8', value: 'scroll' },
          { label: '\u9009\u4E2D\u9879\u8FC7\u591A\u6362\u884C\u663E\u793A', value: 'break-line' },
        ]"
      />
    </div>

    <!-- :popup-props="{ trigger: 'hover' }" -->
    <t-select-input
      :input-value:sync="inputValue"
      :value="value"
      :allow-input="allowInput"
      :placeholder="allowInput ? '\u8BF7\u9009\u62E9\u6216\u8F93\u5165' : '\u8BF7\u9009\u62E9'"
      :tag-input-props="{ excessTagsDisplayType }"
      :popup-props="{
        overlayInnerClassName: ['narrow-scrollbar'],
        overlayInnerStyle: {
          maxHeight: '280px',
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          padding: '6px',
        },
      }"
      clearable
      multiple
      @focus="handleFocus"
      @blur="handleBlur"
      @tag-change="onTagChange"
      @input-change="onInputChange"
      @clear="handleClear"
      @enter="handleEnter"
      @mouseenter="handleMouseenter"
      @change="handleChange"
    >
      <template #panel>
        <t-checkbox-group
          v-if="options.length"
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-multiple"
          @change="onCheckedChange"
        />
        <div v-else class="tdesign-demo__select-empty-multiple">\u6682\u65E0\u6570\u636E</div>
      </template>
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
  </t-space>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

const OPTIONS = [
  // \u5168\u9009
  { label: 'Check All', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      excessTagsDisplayType: 'break-line',
      allowInput: true,
      creatable: true,
      inputValue: '',
      options: [...OPTIONS],
      value: [
        { label: 'Vue', value: 1 },
        { label: 'React', value: 2 },
        { label: 'Miniprogram', value: 3 },
      ],
    };
  },
  computed: {
    checkboxValue() {
      const arr = [];
      const list = this.value;
      // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].value && arr.push(list[i].value);
      }
      return arr;
    },
  },
  methods: {
    handleFocus(value, context) {
      console.log('focus', value, context);
    },
    handleBlur() {
      console.log('Blur');
    },
    handleClear() {
      console.log('Clear');
    },
    handleEnter() {
      console.log('Enter');
    },
    handleMouseenter() {
      console.log('Mouseenter');
    },
    handleChange() {
      console.log('Change');
    },
    onCheckedChange(val, { current, type }) {
      console.log(current);
      // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
      if (!current) {
        this.value = type === 'check' ? this.options.slice(1) : [];
        return;
      }
      // \u666E\u901A\u64CD\u4F5C
      if (type === 'check') {
        const option = this.options.find((t) => t.value === current);
        this.value.push(option);
      } else {
        this.value = this.value.filter((v) => v.value !== current);
      }
    },
    onTagChange(currentTags, context) {
      console.log(currentTags, context);
      const { trigger, index, item } = context;
      if (trigger === 'clear') {
        this.value = [];
      }
      if (['tag-remove', 'backspace'].includes(trigger)) {
        this.value.splice(index, 1);
      }
      // \u5982\u679C\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE
      if (this.creatable && trigger === 'enter') {
        const current = { label: item, value: item };
        this.value.push(current);
        const newOptions = this.options.concat(current);
        this.options = newOptions;
        this.inputValue = '';
      }
    },
    onInputChange(val, context) {
      console.log(val, context);
    },
  },
};
<\/script>
<style>
.tdesign-demo__panel-options-multiple {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__panel-options-multiple .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.tdesign-demo__panel-options-multiple .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,En=`<template>
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
    placeholder="\u8BF7\u8F93\u5165\u4EFB\u610F\u5173\u952E\u8BCD"
    allow-input
    clearable
    style="width: 300px"
    @input-change="onInputChange"
    @popup-visible-change="onPopupVisibleChange"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-autocomplete">
        <li v-for="item in options" :key="item" @click="() => onOptionClick(item)">
          {{ item }}
        </li>
      </ul>
    </template>
    <template #suffixIcon><search-icon /></template>
  </t-select-input>
</template>
<script>
import { SearchIcon } from 'tdesign-icons-vue';

export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      selectValue: '',
      popupVisible: false,
      options: ['Student A', 'Student B', 'Student C', 'Student D', 'Student E', 'Student F'],
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      this.popupVisible = false;
    },
    onInputChange(keyword) {
      this.selectValue = keyword;
      this.options = new Array(5).fill(null).map((t, index) => \`\${keyword} Student \${index}\`);
    },
    onPopupVisibleChange(val) {
      this.popupVisible = val;
    },
  },
};
<\/script>
<style lang="less">
.tdesign-demo__select-input-ul-autocomplete {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-autocomplete > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-autocomplete > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,An=`<template>
  <t-space direction="vertical">
    <!-- :popup-props="{ trigger: 'hover' }" -->
    <!-- \u524D\u7F6E\u5185\u5BB9\u4F7F\u7528 label \u81EA\u5B9A\u4E49\uFF0C\u652F\u6301\u540C\u540D\u63D2\u69FD label -->
    <t-select-input
      :value="selectValue"
      :popup-visible="popupVisible"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      label="\u524D\u7F6E\u5185\u5BB9\uFF1A"
      style="width: 300px"
      placeholder="Please Select"
      clearable
      @popup-visible-change="onPopupVisibleChange"
      @clear="onClear"
    >
      <template #panel>
        <ul class="tdesign-demo__select-input-ul-label-suffix">
          <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
            {{ item.label }}
          </li>
        </ul>
      </template>
      <!-- \u540E\u7F6E\u56FE\u6807 -->
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
    <br /><br />

    <!-- \u540E\u7F6E\u5185\u5BB9\u4F7F\u7528 suffix \u81EA\u5B9A\u4E49\uFF0C\u652F\u6301\u540C\u540D\u63D2\u69FD suffix -->
    <t-select-input
      :value="selectValue"
      :popup-visible="popupVisible2"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      suffix="\u5355\u4F4D\uFF1A\u5143"
      style="width: 300px"
      placeholder="Please Select"
      clearable
      @popup-visible-change="onPopupVisibleChange2"
      @clear="onClear"
    >
      <template #panel>
        <ul class="tdesign-demo__select-input-ul-label-suffix">
          <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
            {{ item.label }}
          </li>
        </ul>
      </template>
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
  </t-space>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

const options = [
  // \u5168\u9009
  { label: 'Check All', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      options,
      selectValue: { label: 'tdesign-vue', value: 1 },
      popupVisible: false,
      popupVisible2: false,
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      // \u9009\u4E2D\u540E\u7ACB\u5373\u5173\u95ED\u6D6E\u5C42
      this.popupVisible = false;
      this.popupVisible2 = false;
    },
    onClear() {
      this.selectValue = undefined;
    },
    onPopupVisibleChange(val, context) {
      console.log(context);
      this.popupVisible = val;
    },
    onPopupVisibleChange2(val) {
      this.popupVisible2 = val;
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-label-suffix {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-label-suffix > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-label-suffix > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,jn=`<template>
  <t-space direction="vertical" class="tdesign-demo-select-input-status" style="width: 100%">
    <t-space align="center">
      <span>\u7981\u7528\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" disabled tips="\u8FD9\u662F\u7981\u7528\u72B6\u6001\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u53EA\u8BFB\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" readonly tips="\u8FD9\u662F\u666E\u901A\u72B6\u6001\u7684\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u6210\u529F\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" status="success" tips="\u6821\u9A8C\u901A\u8FC7\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u8B66\u544A\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" status="warning" tips="\u6821\u9A8C\u4E0D\u901A\u8FC7\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>

    <t-space align="center">
      <span>\u9519\u8BEF\u72B6\u6001\uFF1A</span>
      <t-select-input :value="selectValue" status="error" tips="\u6821\u9A8C\u5B58\u5728\u4E25\u91CD\u95EE\u9898\u6587\u672C\u63D0\u793A" placeholder="Please Select">
        <template #panel>
          <div class="tdesign-demo__select-empty-status">\u6682\u65E0\u6570\u636E</div>
        </template>
      </t-select-input>
    </t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      selectValue: 'TDesign',
    };
  },
};
<\/script>
<style>
.tdesign-demo__select-empty-status {
  text-align: center;
  color: var(--td-text-color-disabled);
  line-height: 32px;
}
.tdesign-demo-select-input-status > div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.tdesign-demo-select-input-status .t-select-input__wrap {
  width: 300px;
  height: 32px;
}
</style>
`,Fn=`<template>
  <t-space class="tdesign-demo__select-input-width" direction="vertical">
    <div>
      <span>\u4E0B\u62C9\u6846\u9ED8\u8BA4\u5BBD\u5EA6\uFF1A</span>
      <t-select-input :value="selectValue" placeholder="Please Select" class="t-demo-normal">
        <template #panel>
          <div class="tdesign-demo__select-empty-width">\u4E0B\u62C9\u6846\u5BBD\u5EA6\u548C\u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\uFF08\u9ED8\u8BA4\uFF09</div>
        </template>
      </t-select-input>
    </div>

    <div>
      <span>\u4E0B\u62C9\u6846\u6700\u5927\u5BBD\u5EA6\uFF1A</span>
      <t-select-input :value="selectValue" placeholder="Please Select" class="t-demo-normal">
        <template #panel>
          <div class="tdesign-demo__select-empty-width">
            \u4E0B\u62C9\u6846\u5BBD\u5EA6\u548C\u89E6\u53D1\u5143\u7D20\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F46\u662F\u5F53\u4E0B\u62C9\u6846\u5185\u5BB9\u5BBD\u5EA6\u8D85\u51FA\u65F6\uFF0C\u81EA\u52A8\u6491\u5F00\u4E0B\u62C9\u6846\u5BBD\u5EA6\uFF0C\u6700\u5927\u4E0D\u8D85\u8FC7 1000px\uFF08\u9ED8\u8BA4\uFF09
          </div>
        </template>
      </t-select-input>
    </div>

    <div>
      <span>\u4E0E\u5185\u5BB9\u5BBD\u5EA6\u4E00\u81F4\uFF1A</span>
      <t-select-input
        :value="selectValue"
        :popup-props="{
          overlayInnerStyle: { width: 'auto' },
        }"
        placeholder="Please Select"
        class="t-demo-normal"
      >
        <template #panel>
          <div class="tdesign-demo__select-empty-width">\u5BBD\u5EA6\u968F\u5185\u5BB9\u5BBD\u5EA6\u81EA\u9002\u5E94</div>
        </template>
      </t-select-input>
    </div>

    <div>
      <span>\u4E0B\u62C9\u6846\u56FA\u5B9A\u5BBD\u5EA6\uFF1A</span>
      <t-select-input
        :value="selectValue"
        :popup-props="{
          overlayInnerStyle: { width: '360px' },
        }"
        placeholder="Please Select"
        class="t-demo-normal"
      >
        <template #panel>
          <div class="tdesign-demo__select-empty-width">\u56FA\u5B9A\u5BBD\u5EA6 360px</div>
        </template>
      </t-select-input>
    </div>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      selectValue: 'TDesign',
    };
  },
};
<\/script>
<style>
.tdesign-demo__select-empty-width {
  text-align: center;
  color: var(--td-text-color-disabled);
  line-height: 32px;
}
.tdesign-demo__select-input-width .t-input__wrap {
  width: 380px;
  vertical-align: middle;
  display: inline-flex;
}

.tdesign-demo__select-input-width .t-demo-normal {
  width: 380px;
  vertical-align: middle;
  display: inline-flex;
}
</style>
`,Rn=`<template>
  <t-space direction="vertical" class="tdesign-demo__select-input-excess-tags-display-type" style="width: 100%">
    <!-- excessTagsDisplayType: 'scroll'\uFF0C\u8D85\u51FA\u65F6\uFF0C\u6EDA\u52A8\u663E\u793A -->
    <p>\u7B2C\u4E00\u79CD\u5448\u73B0\u65B9\u5F0F\uFF1A\u8D85\u51FA\u65F6\u6EDA\u52A8\u663E\u793A</p>
    <t-select-input
      :value="value"
      :tag-input-props="{ excessTagsDisplayType: 'scroll' }"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-excess-tags-display-type"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>

    <!-- excessTagsDisplayType: 'scroll'\uFF0C\u8D85\u51FA\u65F6\uFF0C\u6362\u884C\u663E\u793A -->
    <p>\u7B2C\u4E8C\u79CD\u5448\u73B0\u65B9\u5F0F\uFF1A\u8D85\u51FA\u65F6\u6362\u884C\u663E\u793A</p>
    <t-select-input
      :value="value"
      :tag-input-props="{ excessTagsDisplayType: 'break-line' }"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-excess-tags-display-type"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>
  </t-space>
</template>
<script>
const OPTIONS = [
  // \u5168\u9009
  { label: 'Check All', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  data() {
    return {
      options: [...OPTIONS],
      value: OPTIONS.slice(1),
    };
  },
  computed: {
    checkboxValue() {
      const arr = [];
      const list = this.value;
      // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].value && arr.push(list[i].value);
      }
      return arr;
    },
  },
  methods: {
    onCheckedChange(val, { current, type }) {
      // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
      if (!current) {
        this.value = type === 'check' ? this.options.slice(1) : [];
        return;
      }
      // \u666E\u901A\u64CD\u4F5C
      if (type === 'check') {
        const option = this.options.find((t) => t.value === current);
        this.value.push(option);
      } else {
        this.value = this.value.filter((v) => v.value !== current);
      }
    },
    onTagChange(currentTags, context) {
      console.log(currentTags, context);
      const { trigger, index, item } = context;
      if (trigger === 'clear') {
        this.value = [];
      }
      if (['tag-remove', 'backspace'].includes(trigger)) {
        this.value.splice(index, 1);
      }
      if (trigger === 'enter') {
        const current = { label: item, value: item };
        this.value.push(current);
        this.options = this.options.concat(current);
      }
    },
  },
};
<\/script>
<style>
.tdesign-demo__panel-options-excess-tags-display-type {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__panel-options-excess-tags-display-type .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 0;
}

.tdesign-demo__panel-options-excess-tags-display-type .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,Nn=`<template>
  <t-space direction="vertical" class="tdesign-demo__select-input-collapsed-items">
    <t-select-input
      :value="value"
      :min-collapsed-num="1"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-collapsed-items"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>

    <!-- \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528\u6E32\u67D3\u51FD\u6570 collapsed-items \u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-select-input
      :value="value"
      :min-collapsed-num="2"
      :collapsed-items="renderCollapsedItems"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-collapsed-items"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>

    <!-- \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528\u63D2\u69FD collapsedItems \u81EA\u5B9A\u4E49\u6298\u53E0\u9879 -->
    <t-select-input
      :value="value"
      :min-collapsed-num="3"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      placeholder="\u8BF7\u9009\u62E9"
      allow-input
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #collapsedItems="{ collapsedTags }">
        <t-popup>
          <t-tag>More({{ collapsedTags.length }})</t-tag>
          <template #content>
            <t-tag v-for="item in collapsedTags" :key="item" style="margin: 4px 4px 4px 0">
              {{ item }}
            </t-tag>
          </template>
        </t-popup>
      </template>
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-collapsed-items"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>
  </t-space>
</template>
<script lang="jsx">
import { Tag } from 'tdesign-vue';

const OPTIONS = [
  // \u5168\u9009
  { label: 'Check All', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  data() {
    return {
      options: [...OPTIONS],
      value: OPTIONS.slice(1),
    };
  },
  computed: {
    checkboxValue() {
      const arr = [];
      const list = this.value;
      // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].value && arr.push(list[i].value);
      }
      return arr;
    },
  },
  methods: {
    onCheckedChange(val, { current, type }) {
      // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
      if (!current) {
        this.value = type === 'check' ? this.options.slice(1) : [];
        return;
      }
      // \u666E\u901A\u64CD\u4F5C
      if (type === 'check') {
        const option = this.options.find((t) => t.value === current);
        this.value.push(option);
      } else {
        this.value = this.value.filter((v) => v.value !== current);
      }
    },
    onTagChange(currentTags, context) {
      console.log(currentTags, context);
      const { trigger, index, item } = context;
      if (trigger === 'clear') {
        this.value = [];
      }
      if (['tag-remove', 'backspace'].includes(trigger)) {
        this.value.splice(index, 1);
      }
      if (trigger === 'enter') {
        const current = { label: item, value: item };
        this.value.push(current);
        this.options = this.options.concat(current);
      }
    },
    renderCollapsedItems(_, { collapsedTags }) {
      return <Tag>\u66F4\u591A({collapsedTags.length})</Tag>;
    },
  },
};
<\/script>
<style>
.tdesign-demo__panel-options-collapsed-items {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__panel-options-collapsed-items .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.tdesign-demo__panel-options-collapsed-items .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,Bn=`<template>
  <t-space direction="vertical" class="tdesign-demo-select-input-custom-tag">
    <!-- \u5355\u9009\uFF0C\u4F7F\u7528 valueDisplay \u63D2\u69FD\u5B9A\u4E49\u9009\u4E2D\u7684\u67D0\u4E00\u9879\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 props.valueDisplay -->
    <t-select-input
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      :value="selectValue1"
      placeholder="Please Select"
      clearable
      @clear="onClear"
    >
      <template #valueDisplay>
        <span v-if="selectValue1" class="displaySpan">
          <control-platform-icon class="tdesign-demo-select-input__img" />
          {{ selectValue1.label }}
        </span>
      </template>
      <template #panel>
        <ul class="tdesign-demo__select-input-ul-single">
          <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
            {{ item.label }}
          </li>
        </ul>
      </template>
    </t-select-input>

    <!-- \u591A\u9009\uFF0C\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528 tag \u63D2\u69FD\u5B9A\u4E49\u9009\u4E2D\u7684\u67D0\u4E00\u9879\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 props.tag -->
    <t-select-input :value="selectValue2" clearable placeholder="Please Select" multiple @tag-change="onTagChange2">
      <template #tag="{ value }">
        <span class="displaySpan">
          <control-platform-icon />
          {{ value }}
        </span>
      </template>
      <template #panel>
        <div class="tdesign-demo__select-empty-custom">\u6682\u65E0\u793A\u610F\u6570\u636E</div>
      </template>
    </t-select-input>

    <!-- \u591A\u9009\uFF0C\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u4F7F\u7528 valueDisplay \u63D2\u69FD\u5B9A\u4E49\u5168\u90E8\u9009\u4E2D\u9879\u7684\u5185\u5BB9\uFF0C\u4E5F\u53EF\u4F7F\u7528\u540C\u540D\u6E32\u67D3\u51FD\u6570 props.valueDisplay -->
    <t-select-input :value="selectValue3" placeholder="Please Select" multiple @tag-change="onTagChange3">
      <template #valueDisplay="{ value, onClose }">
        <!-- <span><LayersIcon />{{ value }}</span> -->
        <t-tag
          v-for="(item, index) in value"
          :key="item"
          closable
          style="margin-right: 4px"
          @close="() => onClose(index)"
        >
          <span class="displaySpan">
            <control-platform-icon />
            <span>{{ item }}</span>
          </span>
        </t-tag>
      </template>
      <template #panel>
        <div class="tdesign-demo__select-empty-custom">\u6682\u65E0\u793A\u610F\u6570\u636E</div>
      </template>
    </t-select-input>
  </t-space>
</template>
<script>
import { ControlPlatformIcon } from 'tdesign-icons-vue';

const options = [
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];
export default {
  components: { ControlPlatformIcon },
  data() {
    return {
      options,
      selectValue1: { label: 'tdesign-vue', value: 1 },
      selectValue2: ['tdesign-vue', 'tdesign-react'],
      selectValue3: ['tdesign-vue', 'tdesign-react', 'tdesign-mobile-vue'],
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue1 = item;
    },
    onClear() {
      this.selectValue1 = undefined;
    },
    onTagChange2(val) {
      this.selectValue2 = val;
    },
    onTagChange3(val) {
      this.selectValue3 = val;
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-single {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-single > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-single > li:hover {
  background-color: var(--td-bg-color-container-hover);
}

.tdesign-demo-select-input-custom-tag .tdesign-demo-select-input__img {
  font-size: 16px;
  margin-right: 4px;
}

.tdesign-demo__select-empty-custom {
  text-align: center;
  color: var(--td-text-color-disabled);
  line-height: 32px;
}
.displaySpan {
  line-height: 24px;
}
</style>
`,zn=`<template>
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
    placeholder="Please Select"
    borderless
    clearable
    @popup-visible-change="onPopupVisibleChange"
    @clear="onClear"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-borderless">
        <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </template>
  </t-select-input>
</template>
<script lang="jsx">
const options = [
  // \u5168\u9009
  { label: 'all frameworks', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  data() {
    return {
      selectValue: { label: 'tdesign-vue', value: 1 },
      options,
      popupVisible: false,
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      this.popupVisible = false;
    },
    onClear() {
      this.selectValue = undefined;
    },
    onPopupVisibleChange(val) {
      this.popupVisible = val;
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo__select-input-ul-borderless {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-borderless > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-borderless > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,Ln=`<template>
  <div class="tdesign-demo__select-input-borderless-multiple" style="width: 100%">
    <t-select-input
      :value="value"
      :min-collapsed-num="1"
      :popup-props="{ overlayInnerStyle: { padding: '6px' } }"
      borderless
      allow-input
      placeholder="select frameworks"
      clearable
      multiple
      style="width: 250px"
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-borderless-multiple"
          @change="onCheckedChange"
        />
      </template>
    </t-select-input>
  </div>
</template>
<script>
const OPTIONS = [
  // \u5168\u9009
  { label: 'all frameworks', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  data() {
    return {
      options: OPTIONS,
      value: [
        { label: 'Vue', value: 1 },
        { label: 'React', value: 2 },
        { label: 'Miniprogram', value: 3 },
      ],
    };
  },
  computed: {
    checkboxValue() {
      const arr = [];
      const list = this.value;
      // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].value && arr.push(list[i].value);
      }
      return arr;
    },
  },
  methods: {
    onCheckedChange(val, { current, type }) {
      // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
      if (!current) {
        this.value = type === 'check' ? this.options.slice(1) : [];
        return;
      }
      // \u666E\u901A\u64CD\u4F5C
      if (type === 'check') {
        const option = this.options.find((t) => t.value === current);
        this.value.push(option);
      } else {
        this.value = this.value.filter((v) => v.value !== current);
      }
    },
    onTagChange(currentTags, context) {
      const { trigger, index, item } = context;
      if (trigger === 'clear') {
        this.value = [];
      }
      if (['tag-remove', 'backspace'].includes(trigger)) {
        this.value.splice(index, 1);
      }
      // \u5982\u679C\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE
      if (trigger === 'enter') {
        const current = { label: item, value: item };
        this.value.push(current);
        this.options = this.options.concat(current);
      }
    },
  },
};
<\/script>
<style lang="less">
.tdesign-demo__panel-options-borderless-multiple {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__panel-options-borderless-multiple .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.tdesign-demo__panel-options-borderless-multiple .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,Hn=`<template>
  <!-- :popup-props="{ trigger: 'hover' }" -->
  <t-select-input
    :value="selectValue"
    :popup-visible="popupVisible"
    placeholder="Please Select"
    clearable
    auto-width
    allow-input
    @popup-visible-change="onPopupVisibleChange"
    @clear="onClear"
    @input-change="onInputChange"
  >
    <template #panel>
      <ul class="tdesign-demo__select-input-ul-auto-width">
        <li v-for="item in options" :key="item.value" @click="() => onOptionClick(item)">
          {{ item.label }}
        </li>
      </ul>
    </template>
    <template #suffixIcon>
      <chevron-down-icon />
    </template>
  </t-select-input>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

const options = [
  // \u5168\u9009
  { label: 'all frameworks', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  components: { ChevronDownIcon },
  data() {
    return {
      selectValue: { label: 'tdesign-vue', value: 1 },
      options,
      popupVisible: false,
    };
  },
  methods: {
    onOptionClick(item) {
      this.selectValue = item;
      this.popupVisible = false;
    },
    onClear() {
      this.selectValue = undefined;
    },
    onPopupVisibleChange(val) {
      this.popupVisible = val;
    },
    onInputChange(ctx) {
      console.log(ctx);
    },
  },
};
<\/script>
<style>
.tdesign-demo__select-input-ul-auto-width {
  padding: 2px 0;
  margin: 0 -2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__select-input-ul-auto-width > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-auto-width > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,Un=`<template>
  <div class="tdesign-demo__select-input-autowidth-multiple" style="width: 100%">
    <t-select-input
      :value="value"
      :min-collapsed-num="1"
      auto-width
      allow-input
      placeholder="select frameworks"
      clearable
      multiple
      @tag-change="onTagChange"
    >
      <template #panel>
        <t-checkbox-group
          :value="checkboxValue"
          :options="options"
          class="tdesign-demo__panel-options-autowidth-multiple"
          @change="onCheckedChange"
        />
      </template>
      <template #suffixIcon>
        <chevron-down-icon />
      </template>
    </t-select-input>
  </div>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

const OPTIONS = [
  // \u5168\u9009
  { label: 'all frameworks', checkAll: true },
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default {
  components: { ChevronDownIcon },
  data() {
    return {
      options: OPTIONS,
      value: [
        { label: 'Vue', value: 1 },
        { label: 'React', value: 2 },
        { label: 'Miniprogram', value: 3 },
      ],
    };
  },
  computed: {
    checkboxValue() {
      const arr = [];
      const list = this.value;
      // \u6B64\u5904\u4E0D\u4F7F\u7528 forEach\uFF0C\u51CF\u5C11\u51FD\u6570\u8FED\u4EE3
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].value && arr.push(list[i].value);
      }
      return arr;
    },
  },
  methods: {
    onCheckedChange(val, { current, type }) {
      // current \u4E0D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u64CD\u4F5C\u5168\u9009
      if (!current) {
        this.value = type === 'check' ? this.options.slice(1) : [];
        return;
      }
      // \u666E\u901A\u64CD\u4F5C
      if (type === 'check') {
        const option = this.options.find((t) => t.value === current);
        this.value.push(option);
      } else {
        this.value = this.value.filter((v) => v.value !== current);
      }
    },
    onTagChange(currentTags, context) {
      const { trigger, index, item } = context;
      if (trigger === 'clear') {
        this.value = [];
      }
      if (['tag-remove', 'backspace'].includes(trigger)) {
        this.value.splice(index, 1);
      }
      // \u5982\u679C\u5141\u8BB8\u521B\u5EFA\u65B0\u6761\u76EE
      if (trigger === 'enter') {
        const current = { label: item, value: item };
        this.value.push(current);
        this.options = this.options.concat(current);
      }
    },
  },
};
<\/script>
<style>
.tdesign-demo__panel-options-autowidth-multiple {
  width: 100%;
  padding: 2px 0;
  margin: 0 -2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tdesign-demo__panel-options-autowidth-multiple .t-checkbox {
  display: flex;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}

.tdesign-demo__panel-options-autowidth-multiple .t-checkbox:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`,pn=[{name:"allowInput",type:"Boolean",defaultValue:!1,options:[]},{name:"autoWidth",type:"Boolean",defaultValue:!1,options:[]},{name:"borderless",type:"Boolean",defaultValue:!1,options:[]},{name:"clearable",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"loading",type:"Boolean",defaultValue:!1,options:[]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"readonly",type:"Boolean",defaultValue:!1,options:[]},{name:"status",type:"enum",defaultValue:"",options:[{label:"default",value:""},{label:"success",value:"success"},{label:"warning",value:"warning"},{label:"error",value:"error"}]}],$={};$.setup=(e,t)=>{const n=r(pn),l=[{label:"selectInput",value:"selectInput"}],a={selectInput:'<t-select-input panel="\u6682\u65E0\u6570\u636E" tips="\u8FD9\u662F tips \u6587\u672C\u4FE1\u606F" v-bind="configProps" />'},s=r(`<template>${a[l[0].value].trim()}</template>`);function i(p){s.value=`<template>${a[p].trim()}</template>`}return{configList:n,panelList:l,usageCode:s,onPanelChange:i}};var cn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"selectInput",fn:function(l){var a=l.configProps;return[n("t-select-input",e._b({attrs:{panel:"\u6682\u65E0\u6570\u636E",tips:"\u8FD9\u662F tips \u6587\u672C\u4FE1\u606F"}},"t-select-input",a,!1))]}}])})},rn=[];const T={};var un=o($,cn,rn,!1,dn,null,null,null);function dn(e){for(let t in T)this[t]=T[t]}const Wn=function(){return un.exports}();export{fn as D,Wn as U,xn as a,yn as b,Cn as c,kn as d,wn as e,Vn as f,Sn as g,In as h,Tn as i,$n as j,Pn as k,On as l,Dn as m,Mn as n,En as o,An as p,jn as q,Fn as r,Rn as s,Nn as t,Bn as u,zn as v,Ln as w,Hn as x,Un as y};
