import{V as N,n as s,r as d}from"./index.fb7ca27a.js";import{u as L,_ as C}from"./use-size-props.363c09d5.js";import{_ as V,I as z}from"./icon.ca3926ce.js";import{L as M}from"./lock-on.d81105de.js";import{I as p}from"./index.6e0dc257.js";var F=["size"];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?f(Object(t),!0).forEach(function(a){C(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var B={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M2.5 11h5v2H3v1h10v-1H8.5v-2h5a1 1 0 001-1V3a1 1 0 00-1-1h-11a1 1 0 00-1 1v7a1 1 0 001 1zm0-8h11v7h-11V3z",fillOpacity:.9}}]},j=N.extend({name:"DesktopIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var a=t.props,r=t.data,o=a.size,i=V(a,F),l=L(o),q=l.className,R=l.style,P=b(b({},i||{}),{},{id:"desktop",icon:B,staticClass:q,style:R});return r.props=P,n(z,r)}}),W=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-form",{ref:"form",attrs:{data:e.formData,rules:e.rules},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{label:"\u7528\u6237\u540D",help:"\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57",name:"account"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},model:{value:e.formData.account,callback:function(a){e.$set(e.formData,"account",a)},expression:"formData.account"}})],1),t("t-form-item",{attrs:{label:"\u5E74\u9F84",name:"age"}},[t("t-input-number",{attrs:{placeholder:"\u5E74\u9F84"},model:{value:e.formData.age,callback:function(a){e.$set(e.formData,"age",a)},expression:"formData.age"}})],1),t("t-form-item",{attrs:{label:"\u7C4D\u8D2F",name:"region"}},[t("t-cascader",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u7C4D\u8D2F",options:e.regionOptions,clearable:"",filterable:""},model:{value:e.formData.region,callback:function(a){e.$set(e.formData,"region",a)},expression:"formData.region"}})],1),t("t-form-item",{attrs:{label:"\u5BC6\u7801",name:"password"}},[t("t-input",{attrs:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1),t("t-form-item",{attrs:{label:"\u90AE\u7BB1",name:"email"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}})],1),t("t-form-item",{attrs:{label:"\u6027\u522B",name:"gender"}},[t("t-radio-group",{model:{value:e.formData.gender,callback:function(a){e.$set(e.formData,"gender",a)},expression:"formData.gender"}},[t("t-radio",{attrs:{value:"male"}},[e._v("\u7537")]),t("t-radio",{attrs:{value:"female"}},[e._v("\u5973")])],1)],1),t("t-form-item",{attrs:{label:"\u8BFE\u7A0B",name:"course"}},[t("t-checkbox-group",{attrs:{options:e.courseOptions},model:{value:e.formData.course,callback:function(a){e.$set(e.formData,"course",a)},expression:"formData.course"}})],1),t("t-form-item",{attrs:{label:"\u5B66\u9662",name:"college"}},[t("t-select",{staticClass:"demo-select-base",attrs:{clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662"},model:{value:e.formData.college,callback:function(a){e.$set(e.formData,"college",a)},expression:"formData.college"}},e._l(e.options,function(a,r){return t("t-option",{key:r,attrs:{value:a.value,label:a.label}},[e._v(" "+e._s(a.label)+" ")])}),1)],1),t("t-form-item",{attrs:{label:"\u5165\u5B66\u65F6\u95F4",name:"date",rules:[{required:!0,message:"\u6B64\u9879\u5FC5\u586B"},{date:{delimiters:["/","-","."]},message:"\u65E5\u671F\u683C\u5F0F\u6709\u8BEF"}]}},[t("t-date-picker",{model:{value:e.formData.date,callback:function(a){e.$set(e.formData,"date",a)},expression:"formData.date"}})],1),t("t-form-item",{attrs:{label:"\u4E2A\u4EBA\u7F51\u7AD9",name:"content.url"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"},model:{value:e.formData.content.url,callback:function(a){e.$set(e.formData.content,"url",a)},expression:"formData.content.url"}})],1),t("t-form-item",{attrs:{label:"\u4E2A\u4EBA\u7B80\u4ECB",help:"\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1",name:"description"}},[t("t-textarea",{attrs:{placeholder:"\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1"},model:{value:e.formData.description,callback:function(a){e.$set(e.formData,"description",a)},expression:"formData.description"}})],1),t("t-form-item",{attrs:{label:"\u5174\u8DA3\u7231\u597D",name:"hobby"}},[t("t-tree-select",{attrs:{filterable:"",data:e.hobbyOptions,placeholder:"\u8BF7\u9009\u62E9\u4F60\u7684\u5174\u8DA3\u7231\u597D"},model:{value:e.formData.hobby,callback:function(a){e.$set(e.formData,"hobby",a)},expression:"formData.hobby"}})],1),t("t-form-item",{staticStyle:{"margin-left":"100px"}},[t("t-space",{attrs:{size:"10px"}},[t("t-button",{attrs:{theme:"primary",type:"submit"}},[e._v("\u63D0\u4EA4")]),t("t-button",{attrs:{theme:"default",variant:"base",type:"reset"}},[e._v("\u91CD\u7F6E")]),t("t-button",{attrs:{theme:"default",variant:"base"},on:{click:e.handleClear}},[e._v("\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C")])],1)],1)],1)},Z=[];const H={account:"",password:"",age:void 0,region:"",email:"",gender:"",college:"",date:"",content:{url:""},hobby:[],course:[]},U={data(){return{formData:{...H},hobbyOptions:[{label:"\u8FD0\u52A8",value:"sports",children:[{label:"\u8DB3\u7403",value:"soccer"},{label:"\u7BEE\u7403",value:"basketball"}]},{label:"\u5A31\u4E50",value:"entertainment",children:[{label:"\u7535\u5F71",value:"movie"},{label:"\u65C5\u6E38",value:"trip"}]}],regionOptions:[{label:"\u5E7F\u4E1C",value:"1",children:[{label:"\u6DF1\u5733",value:"1.1"},{label:"\u5E7F\u5DDE",value:"1.2"}]},{label:"\u6E56\u5357",value:"2",children:[{label:"\u957F\u6C99",value:"2.1"}]}],courseOptions:[{label:"\u8BED\u6587",value:"1"},{label:"\u6570\u5B66",value:"2"},{label:"\u82F1\u8BED",value:"3"},{label:"\u4F53\u80B2",value:"4"}],options:[{label:"\u8BA1\u7B97\u673A\u5B66\u9662",value:"1"},{label:"\u8F6F\u4EF6\u5B66\u9662",value:"2"},{label:"\u7269\u8054\u7F51\u5B66\u9662",value:"3"}],rules:{account:[{required:!0,message:"\u59D3\u540D\u5FC5\u586B",type:"error",trigger:"blur"},{required:!0,message:"\u59D3\u540D\u5FC5\u586B",type:"error"},{whitespace:!0,message:"\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A"},{min:2,message:"\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26",type:"warning",trigger:"blur"},{max:10,message:"\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA",type:"warning",trigger:"blur"}],description:[{validator:e=>e.length>=5,message:"\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6",type:"warning"},{validator:e=>e.length<20,message:"\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6",type:"warning"}],age:[{required:!0,message:"\u5E74\u9F84\u5FC5\u586B",type:"error"}],region:[{required:!0,message:"\u7C4D\u8D2F\u5FC5\u586B",type:"error"}],password:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B",type:"error"},{len:8,message:"\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801",type:"warning"},{pattern:/[A-Z]+/,message:"\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD",type:"warning"}],college:[{required:!0,message:"\u6B64\u9879\u5FC5\u586B"}],email:[{required:!0,message:"\u90AE\u7BB1\u5FC5\u586B"},{email:{ignore_max_length:!0},message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740"}],gender:[{required:!0,message:"\u6027\u522B\u5FC5\u586B"}],course:[{required:!0,message:"\u8BFE\u7A0B\u5FC5\u586B"},{validator:e=>e.length<=2,message:"\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B",type:"warning"}],hobby:[{required:!0,message:"\u7231\u597D\u5FC5\u586B",type:"error"}],"content.url":[{required:!0,message:"\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B"},{url:{protocols:["http","https","ftp"],require_protocol:!0},message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875"}]}}},methods:{onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F"),console.log("formData",this.formData)},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))},handleClear(){this.$refs.form.clearValidate()}}},v={};var G=s(U,W,Z,!1,J,"413fbf7f",null,null);function J(e){for(let n in v)this[n]=v[n]}const Tt=function(){return G.exports}();var K=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{staticStyle:{width:"350px"}},[t("t-form",{ref:"form",attrs:{data:e.formData,colon:!0,labelWidth:0},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{name:"account"}},[t("t-input",{attrs:{clearable:"",placeholder:"\u8BF7\u8F93\u5165\u8D26\u6237\u540D"},model:{value:e.formData.account,callback:function(a){e.$set(e.formData,"account",a)},expression:"formData.account"}},[t("desktop-icon",{attrs:{slot:"prefix-icon"},slot:"prefix-icon"})],1)],1),t("t-form-item",{attrs:{name:"password"}},[t("t-input",{attrs:{type:"password",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}},[t("lock-on-icon",{attrs:{slot:"prefix-icon"},slot:"prefix-icon"})],1)],1),t("t-form-item",[t("t-button",{attrs:{theme:"primary",type:"submit",block:""}},[e._v("\u767B\u5F55")])],1)],1)],1)},Q=[];const X={account:"",password:""},Y={components:{DesktopIcon:j,LockOnIcon:M},data(){return{formData:{...X}}},methods:{onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F")},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))}}},g={};var ee=s(Y,K,Q,!1,te,null,null,null);function te(e){for(let n in g)this[n]=g[n]}const At=function(){return ee.exports}();var ae=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical",size:"32px"}},[t("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.formData.labelAlign,callback:function(a){e.$set(e.formData,"labelAlign",a)},expression:"formData.labelAlign"}},[t("t-radio-button",{attrs:{value:"left"}},[e._v("\u5DE6\u5BF9\u9F50")]),t("t-radio-button",{attrs:{value:"right"}},[e._v("\u53F3\u5BF9\u9F50")]),t("t-radio-button",{attrs:{value:"top"}},[e._v("\u9876\u90E8\u5BF9\u9F50")])],1),t("t-form",{attrs:{data:e.formData,labelAlign:e.formData.labelAlign,labelWidth:100}},[t("t-form-item",{attrs:{name:"name"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\u59D3\u540D")]},proxy:!0}])},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}})],1),t("t-form-item",{attrs:{label:"\u521D\u59CB\u5BC6\u7801",name:"password"}},[t("t-input",{attrs:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u521D\u59CB\u5BC6\u7801"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1)],1)],1)},ne=[];const re={labelAlign:"right",name:"",password:""},oe={data(){return{formData:{...re}}}},h={};var se=s(oe,ae,ne,!1,le,null,null,null);function le(e){for(let n in h)this[n]=h[n]}const St=function(){return se.exports}();var ie=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical",size:"32px"}},[t("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.formData.layout,callback:function(a){e.$set(e.formData,"layout",a)},expression:"formData.layout"}},[t("t-radio-button",{attrs:{value:"vertical"}},[e._v("\u7EB5\u5411\u5E03\u5C40")]),t("t-radio-button",{attrs:{value:"inline"}},[e._v("\u884C\u5185\u5E03\u5C40")])],1),t("t-form",{ref:"form",attrs:{data:e.formData,labelWidth:"calc(2em + 24px)",layout:e.formData.layout,scrollToFirstError:"smooth"},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{label:"\u59D3\u540D",name:"name"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}})],1),t("t-form-item",{attrs:{label:"\u5BC6\u7801",name:"password"}},[t("t-input",{attrs:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1)],1)],1)},me=[];const ue={layout:"inline",name:"",password:""},ce={data(){return{formData:{...ue}}},methods:{onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F")},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))}}},D={};var de=s(ce,ie,me,!1,pe,null,null,null);function pe(e){for(let n in D)this[n]=D[n]}const Ot=function(){return de.exports}();var fe=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical",size:"32px"}},[t("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.resetType,callback:function(a){e.resetType=a},expression:"resetType"}},[t("t-radio-button",{attrs:{value:"empty"}},[e._v("\u91CD\u7F6E\u4E3A\u7A7A")]),t("t-radio-button",{attrs:{value:"initial"}},[t("t-popup",{attrs:{content:"\u6539\u53D8\u8868\u5355\u6570\u636E\u540E\uFF0C\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\uFF0C\u89C2\u5BDF\u6570\u636E\u91CD\u7F6E\u60C5\u51B5"}},[e._v(" \u91CD\u7F6E\u4E3A\u521D\u59CB\u503C ")])],1)],1),t("t-form",{ref:"form",attrs:{data:e.formData,resetType:e.resetType,colon:""},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{label:"\u59D3\u540D",name:"name"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},on:{enter:e.onEnter},model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}})],1),t("t-form-item",{attrs:{label:"\u624B\u673A\u53F7\u7801",name:"tel"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801"},on:{enter:e.onEnter},model:{value:e.formData.tel,callback:function(a){e.$set(e.formData,"tel",a)},expression:"formData.tel"}})],1),t("t-form-item",{attrs:{label:"\u8BFE\u7A0B",name:"course"}},[t("t-checkbox-group",{attrs:{options:e.courseOptions},model:{value:e.formData.course,callback:function(a){e.$set(e.formData,"course",a)},expression:"formData.course"}})],1),t("t-form-item",{staticStyle:{"margin-left":"100px"}},[t("t-space",{attrs:{size:"10px"}},[t("t-button",{attrs:{theme:"primary",type:"submit"}},[e._v("\u63D0\u4EA4")]),t("t-button",{attrs:{theme:"default",variant:"base",type:"reset"}},[e._v("\u91CD\u7F6E")]),t("t-button",{attrs:{theme:"default",variant:"base"},on:{click:e.resetPhoneNumber}},[e._v("\u53EA\u91CD\u7F6E\u624B\u673A\u53F7\u7801")])],1)],1)],1)],1)},be=[];const ve={name:"TDesign",tel:"18612345678",course:["1"]},ge={data(){return{resetType:"initial",formData:{...ve},courseOptions:[{label:"\u8BED\u6587",value:"1"},{label:"\u6570\u5B66",value:"2"},{label:"\u82F1\u8BED",value:"3"}]}},methods:{onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F")},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))},onEnter(e,{e:n}){n.preventDefault()},resetPhoneNumber(){this.$refs.form.reset({fields:["tel"]})}}},_={};var he=s(ge,fe,be,!1,De,null,null,null);function De(e){for(let n in _)this[n]=_[n]}const Et=function(){return he.exports}(),m={fail:"",warning:"",success:"",failB:"",warningB:"",loading:"",add:"",help:""},_e={components:{Icon:p},data(){return{formStatusIcon:!0,formData:{...m},rules:{fail:[{required:!0,message:"\u5FC5\u586B",type:"error"}],warning:[{required:!0,message:"\u5FC5\u586B",type:"warning"}],success:[{validator:()=>!0}],failB:[{required:!0,message:"\u5FC5\u586B",type:"error"}],warningB:[{required:!0,message:"\u5FC5\u586B",type:"warning"}]},addlist:[{id:0,name:"add0"}],lastAddItem:1}},mounted(){this.$refs.formValidatorStatus.validate()},methods:{addItem(){const e=this.lastAddItem;m[`add${e}`]="",this.addlist.push({id:e,name:`add${e}`}),this.lastAddItem+=1},removeItem(e,n){delete m[`add${e.id}`],this.addlist.splice(n,1)},onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F")},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))},getStatusIcon(){const e=this.$createElement;return e(p,{attrs:{name:"help-circle",size:"16px"},style:"color: #0006"})}}};var ye=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{staticClass:"tdesign-demo-form-status",attrs:{direction:"vertical",size:"32px"}},[t("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.formStatusIcon,callback:function(a){e.formStatusIcon=a},expression:"formStatusIcon"}},[t("t-radio-button",{attrs:{value:!0}},[e._v("\u663E\u793A\u6821\u9A8C\u56FE\u6807")]),t("t-radio-button",{attrs:{value:!1}},[e._v("\u9690\u85CF\u6821\u9A8C\u56FE\u6807")])],1),t("t-form",{ref:"formValidatorStatus",attrs:{data:e.formData,rules:e.rules,labelWidth:80,statusIcon:e.formStatusIcon},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{label:"\u5931\u8D25",name:"fail"}},[t("t-input",{attrs:{placeholder:"\u6821\u9A8C\u4E0D\u901A\u8FC7\u72B6\u6001"},model:{value:e.formData.fail,callback:function(a){e.$set(e.formData,"fail",a)},expression:"formData.fail"}})],1),t("t-form-item",{attrs:{label:"\u8B66\u544A",name:"warning"}},[t("t-input",{attrs:{placeholder:"\u6821\u9A8C\u8B66\u544A\u72B6\u6001"},model:{value:e.formData.warning,callback:function(a){e.$set(e.formData,"warning",a)},expression:"formData.warning"}})],1),t("t-form-item",{attrs:{label:"\u6210\u529F",name:"success"}},[t("t-input",{attrs:{placeholder:"\u4E0D\u5E26\u7EFF\u8272\u8FB9\u6846\u7684\u6210\u529F\u72B6\u6001"},model:{value:e.formData.success,callback:function(a){e.$set(e.formData,"success",a)},expression:"formData.success"}})],1),t("t-form-item",{attrs:{label:"\u6210\u529F",name:"success",successBorder:""}},[t("t-input",{attrs:{placeholder:"\u5E26\u7EFF\u8272\u8FB9\u6846\u7684\u6210\u529F\u72B6\u6001"},model:{value:e.formData.success,callback:function(a){e.$set(e.formData,"success",a)},expression:"formData.success"}})],1),t("t-form-item",{attrs:{label:"\u5931\u8D25",name:"failB",statusIcon:!1}},[t("t-input",{attrs:{placeholder:"\u9690\u85CF\u72B6\u6001\u56FE\u6807"},model:{value:e.formData.failB,callback:function(a){e.$set(e.formData,"failB",a)},expression:"formData.failB"}})],1),t("t-form-item",{attrs:{label:"\u8B66\u544A",name:"warningB"}},[t("t-input",{attrs:{placeholder:"\u6821\u9A8C\u8B66\u544A\u72B6\u6001"},model:{value:e.formData.warningB,callback:function(a){e.$set(e.formData,"warningB",a)},expression:"formData.warningB"}})],1),t("t-form-item",{attrs:{label:"\u52A0\u8F7D\u4E2D",name:"loading"},scopedSlots:e._u([{key:"statusIcon",fn:function(){return[t("div",{staticStyle:{width:"24px",display:"flex","justify-content":"center"}},[t("t-loading",{attrs:{slot:"statusIcon",size:"small"},slot:"statusIcon"})],1)]},proxy:!0}])},[t("t-input",{attrs:{placeholder:"\u6B63\u5728\u6821\u9A8C\u4E2D\uFF0C\u8BF7\u7A0D\u7B49"},model:{value:e.formData.loading,callback:function(a){e.$set(e.formData,"loading",a)},expression:"formData.loading"}})],1),t("t-form-item",{attrs:{label:"\u5E2E\u52A9",statusIcon:e.getStatusIcon,name:"help"}},[t("t-input",{attrs:{placeholder:"\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807"},model:{value:e.formData.help,callback:function(a){e.$set(e.formData,"help",a)},expression:"formData.help"}})],1),e._l(e.addlist,function(a,r){return t("t-form-item",{key:a.id,attrs:{label:"\u65B0\u589E",name:a.name}},[t("t-input",{model:{value:e.formData[a.name],callback:function(o){e.$set(e.formData,a.name,o)},expression:"formData[item.name]"}}),a.id===0||a.id===e.lastAddItem-1?t("t-button",{attrs:{slot:"statusIcon",variant:"dashed"},on:{click:e.addItem},slot:"statusIcon"},[t("icon",{attrs:{name:"add"}})],1):e._e(),a.id>0?t("t-button",{attrs:{slot:"statusIcon",variant:"dashed"},on:{click:function(o){return e.removeItem(a,r)}},slot:"statusIcon"},[t("icon",{attrs:{name:"remove"}})],1):e._e()],1)}),t("t-form-item",{staticStyle:{"margin-left":"80px"},attrs:{statusIcon:!1}},[t("t-space",{attrs:{size:"10px"}},[t("t-button",{attrs:{theme:"primary",type:"submit"}},[e._v("\u63D0\u4EA4")]),t("t-button",{attrs:{theme:"default",variant:"base",type:"reset"}},[e._v("\u91CD\u7F6E")])],1)],1)],2)],1)},xe=[];const y={};var $e=s(_e,ye,xe,!1,we,null,null,null);function we(e){for(let n in y)this[n]=y[n]}const qt=function(){return $e.exports}();var ke=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-form",{ref:"form",attrs:{data:e.formData,rules:e.rules},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{label:"\u7528\u6237\u540D",help:"\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57",name:"account"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},model:{value:e.formData.account,callback:function(a){e.$set(e.formData,"account",a)},expression:"formData.account"}})],1),t("t-form-item",{attrs:{label:"\u5E74\u9F84",name:"age"}},[t("t-input-number",{attrs:{placeholder:"\u5E74\u9F84"},model:{value:e.formData.age,callback:function(a){e.$set(e.formData,"age",a)},expression:"formData.age"}})],1),t("t-form-item",{attrs:{label:"\u7C4D\u8D2F",name:"region"}},[t("t-cascader",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u7C4D\u8D2F",options:e.regionOptions,clearable:"",filterable:""},model:{value:e.formData.region,callback:function(a){e.$set(e.formData,"region",a)},expression:"formData.region"}})],1),t("t-form-item",{attrs:{label:"\u5BC6\u7801",name:"password"}},[t("t-input",{attrs:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1),t("t-form-item",{attrs:{label:"\u90AE\u7BB1",name:"email"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}})],1),t("t-form-item",{attrs:{label:"\u6027\u522B",name:"gender"}},[t("t-radio-group",{model:{value:e.formData.gender,callback:function(a){e.$set(e.formData,"gender",a)},expression:"formData.gender"}},[t("t-radio",{attrs:{value:"male"}},[e._v("\u7537")]),t("t-radio",{attrs:{value:"female"}},[e._v("\u5973")])],1)],1),t("t-form-item",{attrs:{label:"\u8BFE\u7A0B",name:"course"}},[t("t-checkbox-group",{attrs:{options:e.courseOptions},model:{value:e.formData.course,callback:function(a){e.$set(e.formData,"course",a)},expression:"formData.course"}})],1),t("t-form-item",{attrs:{label:"\u5B66\u9662",name:"college"}},[t("t-select",{staticClass:"demo-select-base",attrs:{clearable:"",filterable:"",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662"},model:{value:e.formData.college,callback:function(a){e.$set(e.formData,"college",a)},expression:"formData.college"}},e._l(e.options,function(a,r){return t("t-option",{key:r,attrs:{value:a.value,label:a.label}},[e._v(" "+e._s(a.label)+" ")])}),1)],1),t("t-form-item",{attrs:{label:"\u5165\u5B66\u65F6\u95F4",name:"date",rules:[{required:!0,message:"\u6B64\u9879\u5FC5\u586B"},{date:{delimiters:["/","-","."]},message:"\u65E5\u671F\u683C\u5F0F\u6709\u8BEF"}]}},[t("t-date-picker",{model:{value:e.formData.date,callback:function(a){e.$set(e.formData,"date",a)},expression:"formData.date"}})],1),t("t-form-item",{attrs:{label:"\u4E2A\u4EBA\u7F51\u7AD9",name:"content.url"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"},model:{value:e.formData.content.url,callback:function(a){e.$set(e.formData.content,"url",a)},expression:"formData.content.url"}})],1),t("t-form-item",{attrs:{label:"\u4E2A\u4EBA\u7B80\u4ECB",help:"\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1",name:"description"}},[t("t-textarea",{attrs:{placeholder:"\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1"},model:{value:e.formData.description,callback:function(a){e.$set(e.formData,"description",a)},expression:"formData.description"}})],1),t("t-form-item",{attrs:{label:"\u5174\u8DA3\u7231\u597D",name:"hobby"}},[t("t-tree-select",{attrs:{filterable:"",data:e.hobbyOptions,placeholder:"\u8BF7\u9009\u62E9\u4F60\u7684\u5174\u8DA3\u7231\u597D"},model:{value:e.formData.hobby,callback:function(a){e.$set(e.formData,"hobby",a)},expression:"formData.hobby"}})],1),t("t-form-item",{staticStyle:{"margin-left":"100px"}},[t("t-space",{attrs:{size:"10px"}},[t("t-button",{attrs:{theme:"primary",type:"submit"}},[e._v("\u63D0\u4EA4")]),t("t-button",{attrs:{theme:"default",variant:"base",type:"reset"}},[e._v("\u91CD\u7F6E")]),t("t-button",{attrs:{theme:"default",variant:"base"},on:{click:e.handleClear}},[e._v("\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C")])],1)],1)],1)},Ie=[];const Te={account:"",password:"",description:"",age:void 0,region:"",email:"",gender:"",college:"",date:"",content:{url:""},hobby:"",course:[]},Ae={data(){return{formData:{...Te},hobbyOptions:[{label:"\u8FD0\u52A8",value:"sports",children:[{label:"\u8DB3\u7403",value:"soccer"},{label:"\u7BEE\u7403",value:"basketball"}]},{label:"\u5A31\u4E50",value:"entertainment",children:[{label:"\u7535\u5F71",value:"movie"},{label:"\u65C5\u6E38",value:"trip"}]}],regionOptions:[{label:"\u5E7F\u4E1C",value:"1",children:[{label:"\u6DF1\u5733",value:"1.1"},{label:"\u5E7F\u5DDE",value:"1.2"}]},{label:"\u6E56\u5357",value:"2",children:[{label:"\u957F\u6C99",value:"2.1"}]}],courseOptions:[{label:"\u8BED\u6587",value:"1"},{label:"\u6570\u5B66",value:"2"},{label:"\u82F1\u8BED",value:"3"},{label:"\u4F53\u80B2",value:"4"}],options:[{label:"\u8BA1\u7B97\u673A\u5B66\u9662",value:"1"},{label:"\u8F6F\u4EF6\u5B66\u9662",value:"2"},{label:"\u7269\u8054\u7F51\u5B66\u9662",value:"3"}],rules:{account:[{required:!0,message:"\u59D3\u540D\u5FC5\u586B",type:"error",trigger:"blur"},{required:!0,message:"\u59D3\u540D\u5FC5\u586B",type:"error"},{whitespace:!0,message:"\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A"},{min:2,message:"\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26",type:"warning",trigger:"blur"},{max:10,message:"\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA",type:"warning",trigger:"blur"}],description:[{validator:e=>e.length>=5,message:"\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6",type:"warning"},{validator:e=>e.length<20,message:"\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6",type:"warning"}],age:[{required:!0,message:"\u5E74\u9F84\u5FC5\u586B",type:"error"}],region:[{required:!0,message:"\u7C4D\u8D2F\u5FC5\u586B",type:"error"}],password:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B",type:"error"},{len:8,message:"\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801",type:"warning"},{pattern:/[A-Z]+/,message:"\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD",type:"warning"}],college:[{required:!0,message:"\u6B64\u9879\u5FC5\u586B"}],email:[{required:!0,message:"\u90AE\u7BB1\u5FC5\u586B"},{email:{ignore_max_length:!0},message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740"}],gender:[{required:!0,message:"\u6027\u522B\u5FC5\u586B"}],course:[{required:!0,message:"\u8BFE\u7A0B\u5FC5\u586B"},{validator:e=>e.length<=2,message:"\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B",type:"warning"}],hobby:[{required:!0,message:"\u7231\u597D\u5FC5\u586B",type:"error"}],"content.url":[{required:!0,message:"\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B"},{url:{protocols:["http","https","ftp"],require_protocol:!0},message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875"}]}}},methods:{onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F"),console.log("formData",this.formData)},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))},handleClear(){this.$refs.form.clearValidate()}}},x={};var Se=s(Ae,ke,Ie,!1,Oe,"552fc106",null,null);function Oe(e){for(let n in x)this[n]=x[n]}const Rt=function(){return Se.exports}();var Ee=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-form",{ref:"form",attrs:{data:e.formData,rules:e.rules},on:{reset:e.onReset,submit:e.onSubmit,validate:e.onValidate}},[t("t-form-item",{attrs:{label:"\u7528\u6237\u540D",name:"account"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},model:{value:e.formData.account,callback:function(a){e.$set(e.formData,"account",a)},expression:"formData.account"}})],1),t("t-form-item",{attrs:{label:"\u5BC6\u7801",name:"password",help:"\u540C\u4E00\u4E2A\u6821\u9A8C\u65B9\u6CD5\u53EF\u8F93\u51FA\u4E0D\u540C\u7684\u9519\u8BEF\u4FE1\u606F\u548C\u7C7B\u578B\uFF0C\u4F9D\u6B21\u8F93\u5165\uFF1A1234 \u89C2\u5BDF\u53D8\u5316"}},[t("t-input",{attrs:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1),t("t-form-item",{attrs:{label:"\u786E\u8BA4\u5BC6\u7801",name:"rePassword",help:"\u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u65B9\u6CD5"}},[t("t-input",{attrs:{type:"password",placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"},model:{value:e.formData.rePassword,callback:function(a){e.$set(e.formData,"rePassword",a)},expression:"formData.rePassword"}})],1),t("t-form-item",{staticStyle:{"margin-left":"100px"}},[t("t-space",{attrs:{size:"10px"}},[t("t-button",{attrs:{theme:"primary",type:"submit"}},[e._v("\u63D0\u4EA4")]),t("t-button",{attrs:{theme:"default",variant:"base",type:"reset"}},[e._v("\u91CD\u7F6E")])],1)],1)],1)},qe=[];const Re={account:"",password:"",rePassword:""},Pe={data(){return{formData:{...Re},rules:{account:[{required:!0,message:"\u7528\u6237\u540D\u5FC5\u586B",type:"error"},{validator:this.userNameValidator}],password:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B",type:"error"},{validator:this.passwordValidator}],rePassword:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B",type:"error"},{validator:this.rePassword,message:"\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4"}]}}},methods:{onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F")},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))},onValidate({validateResult:e,firstError:n}){e===!0?console.log("Validate Success"):console.log("Validate Errors: ",n,e)},handleBlur(){this.$refs.form.validate({fields:["account"],trigger:"blur"})},userNameValidator(e){return new Promise(n=>{const t=setTimeout(()=>{["Zhang","Li","Wang"].includes(e)?n({result:!0}):n({result:!1,message:"\u7528\u6237\u540D\u4E0D\u5B58\u5728",type:"error"}),clearTimeout(t)},10)})},passwordValidator(e){return e.length>0&&e.length<=2?{result:!1,message:"\u592A\u7B80\u5355\u4E86\uFF01\u518D\u5F00\u52A8\u4E00\u4E0B\u4F60\u7684\u5C0F\u8111\u7B4B\u5427\uFF01",type:"error"}:e.length>2&&e.length<4?{result:!1,message:"\u8FD8\u5DEE\u4E00\u70B9\u70B9\uFF0C\u5C31\u662F\u4E00\u4E2A\u5B8C\u7F8E\u7684\u5BC6\u7801\u4E86\uFF01",type:"warning"}:{result:!0,message:"\u592A\u5F3A\u4E86\uFF0C\u4F60\u786E\u5B9A\u81EA\u5DF1\u8BB0\u5F97\u4F4F\u5417\uFF01",type:"success"}},rePassword(e){return new Promise(n=>{const t=setTimeout(()=>{n(this.formData.password===e),clearTimeout(t)})})}}},$={};var Ne=s(Pe,Ee,qe,!1,Le,null,null,null);function Le(e){for(let n in $)this[n]=$[n]}const Pt=function(){return Ne.exports}();var Ce=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-form",{ref:"form",attrs:{data:e.formData,rules:e.rules,scrollToFirstError:"smooth"},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{label:"\u7528\u6237\u540D",help:"\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57",name:"account"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},model:{value:e.formData.account,callback:function(a){e.$set(e.formData,"account",a)},expression:"formData.account"}})],1),t("t-form-item",{attrs:{label:"\u4E2A\u4EBA\u7B80\u4ECB",help:"\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1",name:"description"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"},model:{value:e.formData.description,callback:function(a){e.$set(e.formData,"description",a)},expression:"formData.description"}})],1),t("t-form-item",{attrs:{label:"\u5BC6\u7801",name:"password"}},[t("t-input",{attrs:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1),t("t-form-item",{attrs:{label:"\u90AE\u7BB1",name:"email"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}})],1),t("t-form-item",{attrs:{label:"\u6027\u522B",name:"gender"}},[t("t-radio-group",{model:{value:e.formData.gender,callback:function(a){e.$set(e.formData,"gender",a)},expression:"formData.gender"}},[t("t-radio",{attrs:{value:"male"}},[e._v("\u7537")]),t("t-radio",{attrs:{value:"female"}},[e._v("\u5973")])],1)],1),t("t-form-item",{attrs:{label:"\u8BFE\u7A0B",name:"course"}},[t("t-checkbox-group",{attrs:{options:e.courseOptions},model:{value:e.formData.course,callback:function(a){e.$set(e.formData,"course",a)},expression:"formData.course"}})],1),t("t-form-item",{attrs:{label:"\u5B66\u9662",name:"college"}},[t("t-select",{staticClass:"demo-select-base",attrs:{clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u9662\u6821"},model:{value:e.formData.college,callback:function(a){e.$set(e.formData,"college",a)},expression:"formData.college"}},e._l(e.options,function(a,r){return t("t-option",{key:r,attrs:{value:a.value,label:a.label}},[e._v(" "+e._s(a.label)+" ")])}),1)],1),t("t-form-item",{attrs:{label:"\u5165\u5B66\u65F6\u95F4",name:"date",rules:[{date:{delimiters:["/","-","."]},message:"\u65E5\u671F\u683C\u5F0F\u6709\u8BEF"}]}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5165\u5B66\u65F6\u95F4"},model:{value:e.formData.date,callback:function(a){e.$set(e.formData,"date",a)},expression:"formData.date"}})],1),t("t-form-item",{attrs:{label:"\u4E2A\u4EBA\u7F51\u7AD9",name:"content.url"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"},model:{value:e.formData.content.url,callback:function(a){e.$set(e.formData.content,"url",a)},expression:"formData.content.url"}})],1),t("t-form-item",{staticStyle:{"margin-left":"100px"}},[t("t-space",{attrs:{size:"10px"}},[t("t-button",{attrs:{theme:"primary",type:"submit"}},[e._v(" \u63D0\u4EA4 ")]),t("t-button",{attrs:{theme:"default",variant:"base",type:"reset"}},[e._v(" \u91CD\u7F6E ")]),t("t-button",{attrs:{theme:"default",variant:"base"},on:{click:e.handleClear}},[e._v(" \u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C ")]),t("t-button",{attrs:{theme:"default",variant:"base"},on:{click:e.clearFieldsValidateResult}},[e._v(" \u6E05\u9664\u6307\u5B9A\u5B57\u6BB5\u7684\u6821\u9A8C\u7ED3\u679C ")])],1)],1)],1)},Ve=[];const ze={account:"",password:"",description:"",email:"",gender:"",college:"",date:"",content:{url:""},course:[]},Me={data(){return{formData:{...ze},courseOptions:[{label:"\u8BED\u6587",value:"1"},{label:"\u6570\u5B66",value:"2"},{label:"\u82F1\u8BED",value:"3"},{label:"\u4F53\u80B2",value:"4"}],options:[{label:"\u8BA1\u7B97\u673A\u5B66\u9662",value:"1"},{label:"\u8F6F\u4EF6\u5B66\u9662",value:"2"},{label:"\u7269\u8054\u7F51\u5B66\u9662",value:"3"}],rules:{account:[{required:!0,message:"\u59D3\u540D\u5FC5\u586B"},{min:2,message:"\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26"},{max:10,message:"\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA"}],description:[{validator:e=>e.length>=5,message:"\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6"},{validator:e=>e.length<20,message:"\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6"}],password:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B"},{len:8,message:"\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801"},{pattern:/[A-Z]+/,message:"\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD"}],email:[{required:!0,message:"\u90AE\u7BB1\u5FC5\u586B"},{email:{ignore_max_length:!0},message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740"}],gender:[{required:!0,message:"\u6027\u522B\u5FC5\u586B"}],course:[{required:!0,message:"\u8BFE\u7A0B\u5FC5\u586B"},{validator:e=>e.length<=2,message:"\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B"}],"content.url":[{required:!0,message:"\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B"},{url:{protocols:["http","https","ftp"],require_protocol:!0},message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875"}]}}},methods:{onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F"),console.log("formData",this.formData)},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))},handleClear(){this.$refs.form.clearValidate()},clearFieldsValidateResult(){this.$refs.form.clearValidate(["email","course","content.url"]),this.$message.success("\u5DF2\u6E05\u9664\u90AE\u7BB1\u3001\u8BFE\u7A0B\u3001\u4E2A\u4EBA\u7F51\u7AD9\u7B49\u5B57\u6BB5\u6821\u9A8C\u7ED3\u679C")}}},w={};var Fe=s(Me,Ce,Ve,!1,Be,"bdc4c69e",null,null);function Be(e){for(let n in w)this[n]=w[n]}const Nt=function(){return Fe.exports}();var je=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical",size:"32px"}},[t("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.errorConfig,callback:function(a){e.errorConfig=a},expression:"errorConfig"}},[t("t-radio-button",{attrs:{value:"default"}},[t("t-popup",{attrs:{content:"Form.errorMessage \u4E3A\u7A7A\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u5185\u7F6E\u6821\u9A8C\u4FE1\u606F\u3002\u91CD\u7F6E\u540E\uFF0C\u70B9\u51FB\u63D0\u4EA4\u89C2\u5BDF\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F"}},[e._v(" \u4F7F\u7528\u8868\u5355\u9ED8\u8BA4\u6821\u9A8C\u4FE1\u606F ")])],1),t("t-radio-button",{attrs:{value:"config"}},[t("t-popup",{attrs:{content:"\u7EDF\u4E00\u914D\u7F6E Form.errorMessage\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u7684\u6821\u9A8C\u4FE1\u606F\u3002\u91CD\u7F6E\u540E\uFF0C\u70B9\u51FB\u63D0\u4EA4\u89C2\u5BDF\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F"}},[e._v(" \u8868\u5355\u7EDF\u4E00\u914D\u7F6E\u6821\u9A8C\u4FE1\u606F ")])],1)],1),t("t-form",{ref:"form",attrs:{data:e.formData,rules:e.rules,"error-message":e.errorConfig==="default"?void 0:e.errorMessage,scrollToFirstError:"smooth"},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{label:e.renderAccountLabel,help:"\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57",name:"account"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},model:{value:e.formData.account,callback:function(a){e.$set(e.formData,"account",a)},expression:"formData.account"}})],1),t("t-form-item",{attrs:{label:"\u4E2A\u4EBA\u7B80\u4ECB",help:"\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1",name:"description"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"},model:{value:e.formData.description,callback:function(a){e.$set(e.formData,"description",a)},expression:"formData.description"}})],1),t("t-form-item",{attrs:{label:"\u5BC6\u7801",name:"password"}},[t("t-input",{attrs:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1),t("t-form-item",{attrs:{label:"\u90AE\u7BB1",name:"email"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},model:{value:e.formData.email,callback:function(a){e.$set(e.formData,"email",a)},expression:"formData.email"}})],1),t("t-form-item",{attrs:{label:"\u6027\u522B",name:"gender"}},[t("t-radio-group",{model:{value:e.formData.gender,callback:function(a){e.$set(e.formData,"gender",a)},expression:"formData.gender"}},[t("t-radio",{attrs:{value:"male"}},[e._v("\u7537")]),t("t-radio",{attrs:{value:"female"}},[e._v("\u5973")])],1)],1),t("t-form-item",{attrs:{label:"\u8BFE\u7A0B",name:"course"}},[t("t-checkbox-group",{attrs:{options:e.courseOptions},model:{value:e.formData.course,callback:function(a){e.$set(e.formData,"course",a)},expression:"formData.course"}})],1),t("t-form-item",{attrs:{label:"\u5B66\u9662",name:"college"}},[t("t-select",{staticClass:"demo-select-base",attrs:{clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662"},model:{value:e.formData.college,callback:function(a){e.$set(e.formData,"college",a)},expression:"formData.college"}},e._l(e.options,function(a,r){return t("t-option",{key:r,attrs:{value:a.value,label:a.label}},[e._v(" "+e._s(a.label)+" ")])}),1)],1),t("t-form-item",{attrs:{label:"\u5165\u5B66\u65F6\u95F4",name:"date",rules:[{date:{delimiters:["/","-","."]},message:"\u65E5\u671F\u683C\u5F0F\u6709\u8BEF"}]}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5165\u5B66\u65F6\u95F4"},model:{value:e.formData.date,callback:function(a){e.$set(e.formData,"date",a)},expression:"formData.date"}})],1),t("t-form-item",{attrs:{label:"\u4E2A\u4EBA\u7F51\u7AD9",name:"content.url"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"},model:{value:e.formData.content.url,callback:function(a){e.$set(e.formData.content,"url",a)},expression:"formData.content.url"}})],1),t("t-form-item",{staticStyle:{"margin-left":"100px"}},[t("t-space",{attrs:{size:"10px"}},[t("t-button",{attrs:{theme:"primary",type:"submit"}},[e._v("\u63D0\u4EA4")]),t("t-button",{attrs:{theme:"default",variant:"base",type:"reset"}},[e._v("\u91CD\u7F6E")]),t("t-button",{attrs:{theme:"default",variant:"base"},on:{click:e.handleClear}},[e._v("\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C")])],1)],1)],1)],1)},We=[];const Ze={account:"",password:"",description:"",email:"",gender:"",college:"",date:"",content:{url:""},course:[]},He={data(){return{errorConfig:"default",formData:{...Ze},courseOptions:[{label:"\u8BED\u6587",value:"1"},{label:"\u6570\u5B66",value:"2"},{label:"\u82F1\u8BED",value:"3"},{label:"\u4F53\u80B2",value:"4"}],options:[{label:"\u8BA1\u7B97\u673A\u5B66\u9662",value:"1"},{label:"\u8F6F\u4EF6\u5B66\u9662",value:"2"},{label:"\u7269\u8054\u7F51\u5B66\u9662",value:"3"}],errorMessage:{date:"${name}\u4E0D\u6B63\u786E",url:"${name}\u4E0D\u6B63\u786E",required:"\u8BF7\u8F93\u5165${name}",max:"${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 ${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26",min:"${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E ${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26",len:"${name}\u5B57\u7B26\u957F\u5EA6\u5FC5\u987B\u662F ${validate}",pattern:"${name}\u4E0D\u6B63\u786E",validator:"${name}\u6709\u8BEF"},rules:{account:[{required:!0},{min:2},{max:10,type:"warning"}],description:[{validator:e=>e.length>=5},{validator:e=>e.length<10,message:"\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6"}],password:[{required:!0},{len:8,message:"\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801"},{pattern:/[A-Z]+/,message:"\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD"}],email:[{required:!0},{email:{ignore_max_length:!0}}],gender:[{required:!0}],course:[{required:!0},{validator:e=>e.length<=2,message:"\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B",type:"warning"}],"content.url":[{required:!0},{url:{protocols:["http","https","ftp"],require_protocol:!0}}]}}},methods:{renderAccountLabel(){return"\u7528\u6237\u540D"},onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F")},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))},handleClear(){this.$refs.form.clearValidate()}}},k={};var Ue=s(He,je,We,!1,Ge,"692eaa4f",null,null);function Ge(e){for(let n in k)this[n]=k[n]}const Lt=function(){return Ue.exports}();var Je=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-form",{ref:"form",staticStyle:{"max-width":"100%"},attrs:{data:e.formData,rules:e.rules,resetType:"initial"},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{label:"\u5B66\u6821",name:"school"}},[t("t-radio-group",{attrs:{options:e.SCHOOL_OPTIONS},model:{value:e.formData.school,callback:function(a){e.$set(e.formData,"school",a)},expression:"formData.school"}})],1),t("t-tabs",{staticStyle:{"margin-left":"30px",border:"1px solid var(--td-component-stroke)"},attrs:{theme:"card",addable:""},on:{add:e.onAddStudent},model:{value:e.studentTab,callback:function(a){e.studentTab=a},expression:"studentTab"}},e._l(e.formData.students,function(a,r){return t("t-tab-panel",{key:a.id,attrs:{value:a.id,label:a.label,destroyOnHide:!1}},[t("t-space",{staticStyle:{padding:"24px 24px 24px 0"},attrs:{direction:"vertical",size:"24px"}},[t("t-form-item",{attrs:{label:"\u59D3\u540D",name:`students[${r}].name`,"label-width":80}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},model:{value:e.formData.students[r].name,callback:function(o){e.$set(e.formData.students[r],"name",o)},expression:"formData.students[index].name"}})],1),t("t-form-item",{attrs:{label:"\u9009\u79D1",name:`students[${r}].courseType`,"label-width":80}},[t("t-radio-group",{model:{value:e.formData.students[r].courseType,callback:function(o){e.$set(e.formData.students[r],"courseType",o)},expression:"formData.students[index].courseType"}},[t("t-radio",{attrs:{value:"wenke"}},[e._v("\u6587\u79D1")]),t("t-radio",{attrs:{value:"like"}},[e._v("\u7406\u79D1")])],1)],1),t("t-form-item",{attrs:{label:"\u8BFE\u7A0B",name:`students[${r}].course`,"label-width":80}},[t("t-checkbox-group",{attrs:{options:e.courseOptions},model:{value:e.formData.students[r].course,callback:function(o){e.$set(e.formData.students[r],"course",o)},expression:"formData.students[index].course"}})],1),t("t-form-item",{staticStyle:{"margin-left":"100px"},attrs:{"label-width":80}},[t("t-space",{attrs:{size:"10px"}},[t("t-button",{attrs:{theme:"primary",type:"submit"}},[e._v("\u63D0\u4EA4")]),t("t-button",{attrs:{theme:"default",variant:"base",type:"reset"}},[e._v("\u91CD\u7F6E")])],1)],1)],1)],1)}),1)],1)},Ke=[];let I=0;function c(){return I+=1,I}const Qe={school:1,students:[{id:c(),label:"\u5B66\u751F1",name:"Student A",courseType:"wenke",course:["1"]},{id:c(),label:"\u5B66\u751F2",name:"Student B",courseType:"wenke",course:[]}]},Xe=[{label:"\u5168\u90E8",checkAll:!0},{label:"\u8BED\u6587",value:"1",courseTypes:["wenke","like"]},{label:"\u6570\u5B66",value:"2",courseTypes:["wenke","like"]},{label:"\u7269\u7406",value:"3",courseTypes:["like"]},{label:"\u5316\u5B66",value:"4",courseTypes:["like"]},{label:"\u5730\u7406",value:"5",courseTypes:["wenke"]},{label:"\u5386\u53F2",value:"6",courseTypes:["wenke"]}],Ye=[{label:"\u5B66\u6821\u4E00",value:1},{label:"\u5B66\u6821\u4E8C",value:2},{label:"\u5B66\u6821\u4E09",value:3}],et={data(){return{studentTab:1,formData:{...Qe},SCHOOL_OPTIONS:Ye,rules:{school:[{required:!0,message:"\u5B66\u6821\u5FC5\u586B"}],name:[{required:!0,message:"\u7528\u6237\u540D\u5FC5\u586B"}],courseType:[{required:!0,message:"\u9009\u79D1\u5FC5\u586B"}],course:[{required:!0,message:"\u8BFE\u7A0B\u5FC5\u586B"}]}}},computed:{courseOptions(){return Xe.filter(e=>!this.formData.courseType||!e.courseTypes?!0:e.courseTypes.includes(this.formData.courseType))}},watch:{"formData.courseType":function(){this.formData.course=[]}},methods:{onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F")},onSubmit({validateResult:e,firstError:n}){if(e===!0)this.$message.success("\u63D0\u4EA4\u6210\u529F");else{console.log("Errors: ",e),this.$message.warning(n);for(let t=0,a=this.formData.students.length;t<a;t++){const r=this.formData.students[t];if(Object.keys(r).map(l=>`students[${t}].${l}`).find(l=>e[l])){this.studentTab=r.id;return}}}},onAddStudent(){const e=c();this.formData.students.push({id:e,label:`\u5B66\u751F${e}`,name:"",courseType:"wenke",course:[],status:!1}),this.studentTab=e}}},T={};var tt=s(et,Je,Ke,!1,at,null,null,null);function at(e){for(let n in T)this[n]=T[n]}const Ct=function(){return tt.exports}();var nt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-space",{attrs:{direction:"vertical",size:"32px"}},[t("t-space",{staticStyle:{"margin-left":"36px"}},[t("t-checkbox",{attrs:{variant:"default-filled"},model:{value:e.formDisabled,callback:function(a){e.formDisabled=a},expression:"formDisabled"}},[e._v(" \u662F\u5426\u7981\u7528\u8868\u5355 ")])],1),t("t-form",{ref:"form",attrs:{data:e.formData,resetType:"initial",disabled:e.formDisabled,colon:""},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{label:"\u59D3\u540D",name:"name"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},on:{enter:e.onEnter},model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}})],1),t("t-form-item",{attrs:{label:"\u5B66\u9662",name:"college"}},[t("t-select",{attrs:{options:e.COLLEGE_OPTIONS,clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662"},model:{value:e.formData.college,callback:function(a){e.$set(e.formData,"college",a)},expression:"formData.college"}})],1),t("t-form-item",{attrs:{label:"\u5BC4\u4EF6\u5730\u5740",name:"address1"}},[t("t-tree-select",{attrs:{data:e.ADDRESS_OPTIONS,clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5BC4\u4EF6\u5730\u5740"},model:{value:e.formData.address1,callback:function(a){e.$set(e.formData,"address1",a)},expression:"formData.address1"}})],1),t("t-form-item",{attrs:{label:"\u6536\u4EF6\u5730\u5740",name:"address2"}},[t("t-cascader",{attrs:{options:e.ADDRESS_OPTIONS,clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6536\u4EF6\u5730\u5740"},model:{value:e.formData.address2,callback:function(a){e.$set(e.formData,"address2",a)},expression:"formData.address2"}})],1),t("t-form-item",{attrs:{label:"\u65E5\u671F",name:"date"}},[t("t-date-picker",{attrs:{mode:"date",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F"},model:{value:e.formData.date,callback:function(a){e.$set(e.formData,"date",a)},expression:"formData.date"}})],1),t("t-form-item",{attrs:{label:"\u4E2A\u4EBA\u7B80\u4ECB",name:"personalProfile"}},[t("t-textarea",{attrs:{placeholder:"\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1",clearable:""},model:{value:e.formData.personalProfile,callback:function(a){e.$set(e.formData,"personalProfile",a)},expression:"formData.personalProfile"}})],1),t("t-form-item",{attrs:{label:"\u77ED\u4FE1",name:"message"}},[t("t-switch",{attrs:{label:["\u63A5\u53D7","\u4E0D\u63A5"]},model:{value:e.formData.message,callback:function(a){e.$set(e.formData,"message",a)},expression:"formData.message"}})],1),t("t-form-item",{attrs:{label:"\u6027\u522B",name:"gender"}},[t("t-radio-group",{model:{value:e.formData.gender,callback:function(a){e.$set(e.formData,"gender",a)},expression:"formData.gender"}},[t("t-radio",{attrs:{value:"1"}},[e._v("\u7537")]),t("t-radio",{attrs:{value:"2"}},[e._v("\u5973")])],1)],1),t("t-form-item",{attrs:{label:"\u8BFE\u7A0B",name:"course"}},[t("t-checkbox-group",{attrs:{options:e.courseOptions},model:{value:e.formData.course,callback:function(a){e.$set(e.formData,"course",a)},expression:"formData.course"}})],1),t("t-form-item",{attrs:{label:"\u7EE9\u70B9",name:"gradePoint"}},[t("t-input-number",{attrs:{placeholder:"\u5206\u6570\u503C"},model:{value:e.formData.gradePoint,callback:function(a){e.$set(e.formData,"gradePoint",a)},expression:"formData.gradePoint"}})],1),t("t-form-item",{attrs:{label:"\u5934\u50CF",name:"avatar"}},[t("t-upload",{attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",theme:"image",tips:"\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20",accept:"image/*"},model:{value:e.formData.avatar,callback:function(a){e.$set(e.formData,"avatar",a)},expression:"formData.avatar"}})],1),t("t-form-item",{staticStyle:{"margin-left":"100px"}},[t("t-space",{attrs:{size:"10px"}},[t("t-button",{attrs:{theme:"primary",type:"submit"}},[e._v("\u63D0\u4EA4")]),t("t-button",{attrs:{theme:"default",variant:"base",type:"reset"}},[e._v("\u91CD\u7F6E")])],1)],1)],1)],1)},rt=[];const ot={name:"",message:!0,gender:"",course:[],college:"",personalProfile:"",address1:void 0,address2:void 0,gradePoint:void 0,date:"",avatar:[{url:"https://tdesign.gtimg.com/site/avatar.jpg"}]},st=[{label:"\u5B66\u9662 A",value:1},{label:"\u5B66\u9662 B",value:2},{label:"\u5B66\u9662 C",value:3}],lt=[{label:"\u6C5F\u82CF",value:1,children:[{label:"\u5357\u4EAC\u5E02",value:300}]},{label:"\u4E0A\u6D77",value:2,children:[{label:"\u5F90\u6C47\u533A",value:400}]},{label:"\u56DB\u5DDD",value:3,children:[{label:"\u6210\u90FD\u5E02",value:500}]}],it={data(){return{formDisabled:!0,formData:{...ot},COLLEGE_OPTIONS:st,ADDRESS_OPTIONS:lt,courseOptions:[{label:"\u8BED\u6587",value:"1"},{label:"\u6570\u5B66",value:"2"},{label:"\u82F1\u8BED",value:"3"}]}},methods:{onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F")},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))},onEnter(e,n){n&&n.e&&n.e.preventDefault()}}},A={};var mt=s(it,nt,rt,!1,ut,null,null,null);function ut(e){for(let n in A)this[n]=A[n]}const Vt=function(){return mt.exports}();var ct=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-form",{ref:"form",attrs:{data:e.formData,rules:e.rules,scrollToFirstError:"smooth"},on:{reset:e.onReset,submit:e.onSubmit}},[t("t-form-item",{attrs:{label:"\u7528\u6237\u540D",help:"\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57",name:"account"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},model:{value:e.formData.account,callback:function(a){e.$set(e.formData,"account",a)},expression:"formData.account"}})],1),t("t-form-item",{attrs:{label:"\u4E2A\u4EBA\u7B80\u4ECB",help:"\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1",name:"description"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"},model:{value:e.formData.description,callback:function(a){e.$set(e.formData,"description",a)},expression:"formData.description"}})],1),t("t-form-item",{attrs:{label:"\u5BC6\u7801",name:"password"}},[t("t-input",{attrs:{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},model:{value:e.formData.password,callback:function(a){e.$set(e.formData,"password",a)},expression:"formData.password"}})],1),t("t-form-item",{staticStyle:{"margin-left":"100px"}},[t("t-space",{attrs:{size:"10px"}},[t("t-button",{attrs:{theme:"primary",type:"submit"}},[e._v("\u63D0\u4EA4")]),t("t-button",{attrs:{theme:"default",variant:"base",type:"reset"}},[e._v("\u91CD\u7F6E")]),t("t-button",{attrs:{theme:"default",variant:"base"},on:{click:e.handleValidateMessage}},[e._v("\u8BBE\u7F6E\u6821\u9A8C\u4FE1\u606F\u63D0\u793A")])],1)],1)],1)},dt=[];const pt={account:"",description:"",password:""},u={account:[{type:"error",message:"\u81EA\u5B9A\u4E49\u7528\u6237\u540D\u6821\u9A8C\u4FE1\u606F\u63D0\u793A"}],description:[{type:"warning",message:"\u81EA\u5B9A\u4E49\u4E2A\u4EBA\u7B80\u4ECB\u6821\u9A8C\u4FE1\u606F\u63D0\u793A"}]},ft={data(){return{formData:{...pt},validateMessage:u,rules:{account:[{required:!0},{min:2},{max:10,type:"warning"}],description:[{validator:e=>e.length<10,message:"\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6"}],password:[{required:!0},{len:8,message:"\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801"}]}}},mounted(){this.$refs.form.setValidateMessage(u)},methods:{onReset(){this.$message.success("\u91CD\u7F6E\u6210\u529F")},onSubmit({validateResult:e,firstError:n}){e===!0?this.$message.success("\u63D0\u4EA4\u6210\u529F"):(console.log("Errors: ",e),this.$message.warning(n))},handleValidateMessage(){this.$message.success("\u8BBE\u7F6E\u8868\u5355\u6821\u9A8C\u4FE1\u606F\u63D0\u793A\u6210\u529F"),this.$refs.form.setValidateMessage(u)}}},S={};var bt=s(ft,ct,dt,!1,vt,null,null,null);function vt(e){for(let n in S)this[n]=S[n]}const zt=function(){return bt.exports}(),Mt=`<template>
  <!--  scrollToFirstError="smooth" -->
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u5E74\u9F84" name="age">
      <t-input-number v-model="formData.age" placeholder="\u5E74\u9F84" />
    </t-form-item>
    <t-form-item label="\u7C4D\u8D2F" name="region">
      <t-cascader v-model="formData.region" placeholder="\u8BF7\u9009\u62E9\u7C4D\u8D2F" :options="regionOptions" clearable filterable />
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u90AE\u7BB1" name="email">
      <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
    </t-form-item>
    <t-form-item label="\u6027\u522B" name="gender">
      <t-radio-group v-model="formData.gender">
        <t-radio value="male">\u7537</t-radio>
        <t-radio value="female">\u5973</t-radio>
      </t-radio-group>
    </t-form-item>
    <t-form-item label="\u8BFE\u7A0B" name="course">
      <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
    </t-form-item>
    <t-form-item label="\u5B66\u9662" name="college">
      <t-select v-model="formData.college" class="demo-select-base" clearable filterable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662">
        <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
          {{ item.label }}
        </t-option>
      </t-select>
    </t-form-item>
    <t-form-item
      label="\u5165\u5B66\u65F6\u95F4"
      name="date"
      :rules="[
        { required: true, message: '\u6B64\u9879\u5FC5\u586B' },
        { date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' },
      ]"
    >
      <t-date-picker v-model="formData.date"></t-date-picker>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
      <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-textarea v-model="formData.description" placeholder="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1"></t-textarea>
    </t-form-item>
    <t-form-item label="\u5174\u8DA3\u7231\u597D" name="hobby">
      <t-tree-select
        v-model="formData.hobby"
        filterable
        :data="hobbyOptions"
        placeholder="\u8BF7\u9009\u62E9\u4F60\u7684\u5174\u8DA3\u7231\u597D"
      ></t-tree-select>
    </t-form-item>

    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        <t-button theme="default" variant="base" @click="handleClear">\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script>
const INITIAL_DATA = {
  account: '',
  password: '',
  // description: '',
  age: undefined,
  region: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  hobby: [],
  course: [],
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
      hobbyOptions: [
        {
          label: '\u8FD0\u52A8',
          value: 'sports',
          children: [
            {
              label: '\u8DB3\u7403',
              value: 'soccer',
            },
            {
              label: '\u7BEE\u7403',
              value: 'basketball',
            },
          ],
        },
        {
          label: '\u5A31\u4E50',
          value: 'entertainment',
          children: [
            {
              label: '\u7535\u5F71',
              value: 'movie',
            },
            {
              label: '\u65C5\u6E38',
              value: 'trip',
            },
          ],
        },
      ],
      regionOptions: [
        {
          label: '\u5E7F\u4E1C',
          value: '1',
          children: [
            {
              label: '\u6DF1\u5733',
              value: '1.1',
            },
            {
              label: '\u5E7F\u5DDE',
              value: '1.2',
            },
          ],
        },
        {
          label: '\u6E56\u5357',
          value: '2',
          children: [
            {
              label: '\u957F\u6C99',
              value: '2.1',
            },
          ],
        },
      ],
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
        { label: '\u4F53\u80B2', value: '4' },
      ],
      options: [
        { label: '\u8BA1\u7B97\u673A\u5B66\u9662', value: '1' },
        { label: '\u8F6F\u4EF6\u5B66\u9662', value: '2' },
        { label: '\u7269\u8054\u7F51\u5B66\u9662', value: '3' },
      ],
      // FormItem.rules \u4F18\u5148\u7EA7\u5927\u4E8E Form.rules
      rules: {
        account: [
          {
            required: true,
            message: '\u59D3\u540D\u5FC5\u586B',
            type: 'error',
            trigger: 'blur',
          },
          // trigger \u9ED8\u8BA4\u4E3A 'change'
          { required: true, message: '\u59D3\u540D\u5FC5\u586B', type: 'error' },
          { whitespace: true, message: '\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A' },
          {
            min: 2,
            message: '\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
            type: 'warning',
            trigger: 'blur',
          },
          {
            max: 10,
            message: '\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA',
            type: 'warning',
            trigger: 'blur',
          },
        ],
        description: [
          {
            validator: (val) => val.length >= 5,
            message: '\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
            type: 'warning',
          },
          {
            validator: (val) => val.length < 20,
            message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
            type: 'warning',
          },
        ],
        age: [{ required: true, message: '\u5E74\u9F84\u5FC5\u586B', type: 'error' }],
        region: [{ required: true, message: '\u7C4D\u8D2F\u5FC5\u586B', type: 'error' }],

        password: [
          { required: true, message: '\u5BC6\u7801\u5FC5\u586B', type: 'error' },
          { len: 8, message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801', type: 'warning' },
          { pattern: /[A-Z]+/, message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD', type: 'warning' },
        ],
        college: [{ required: true, message: '\u6B64\u9879\u5FC5\u586B' }],
        email: [
          { required: true, message: '\u90AE\u7BB1\u5FC5\u586B' },
          { email: { ignore_max_length: true }, message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740' },
        ],
        gender: [{ required: true, message: '\u6027\u522B\u5FC5\u586B' }],
        course: [
          { required: true, message: '\u8BFE\u7A0B\u5FC5\u586B' },
          { validator: (val) => val.length <= 2, message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B', type: 'warning' },
        ],
        hobby: [{ required: true, message: '\u7231\u597D\u5FC5\u586B', type: 'error' }],
        'content.url': [
          { required: true, message: '\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B' },
          {
            url: {
              protocols: ['http', 'https', 'ftp'],
              require_protocol: true,
            },
            message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875',
          },
        ],
      },
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
      console.log('formData', this.formData);
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    handleClear() {
      this.$refs.form.clearValidate();
    },
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,Ft=`<template>
  <t-space style="width: 350px">
    <t-form :data="formData" ref="form" @reset="onReset" @submit="onSubmit" :colon="true" :labelWidth="0">
      <t-form-item name="account">
        <t-input clearable v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u8D26\u6237\u540D">
          <desktop-icon slot="prefix-icon"></desktop-icon>
        </t-input>
      </t-form-item>
      <t-form-item name="password">
        <t-input type="password" clearable v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801">
          <lock-on-icon slot="prefix-icon"></lock-on-icon>
        </t-input>
      </t-form-item>
      <t-form-item>
        <t-button theme="primary" type="submit" block>\u767B\u5F55</t-button>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-vue';

const INITIAL_DATA = {
  account: '',
  password: '',
};

export default {
  components: {
    DesktopIcon,
    LockOnIcon,
  },
  data() {
    return {
      formData: { ...INITIAL_DATA },
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
  },
};
<\/script>
`,Bt=`<template>
  <t-space direction="vertical" size="32px">
    <t-radio-group v-model="formData.labelAlign" variant="default-filled">
      <t-radio-button value="left">\u5DE6\u5BF9\u9F50</t-radio-button>
      <t-radio-button value="right">\u53F3\u5BF9\u9F50</t-radio-button>
      <t-radio-button value="top">\u9876\u90E8\u5BF9\u9F50</t-radio-button>
    </t-radio-group>

    <t-form :data="formData" :labelAlign="formData.labelAlign" :labelWidth="100">
      <t-form-item name="name">
        <template #label>\u59D3\u540D</template>
        <t-input v-model="formData.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u521D\u59CB\u5BC6\u7801" name="password">
        <t-input v-model="formData.password" type="password" placeholder="\u8BF7\u8F93\u5165\u521D\u59CB\u5BC6\u7801"></t-input>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
const INITIAL_DATA = {
  labelAlign: 'right',
  name: '',
  password: '',
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
    };
  },
};
<\/script>
`,jt=`<template>
  <t-space direction="vertical" size="32px">
    <t-radio-group v-model="formData.layout" variant="default-filled">
      <t-radio-button value="vertical">\u7EB5\u5411\u5E03\u5C40</t-radio-button>
      <t-radio-button value="inline">\u884C\u5185\u5E03\u5C40</t-radio-button>
    </t-radio-group>

    <t-form
      :data="formData"
      labelWidth="calc(2em + 24px)"
      :layout="formData.layout"
      ref="form"
      @reset="onReset"
      @submit="onSubmit"
      scrollToFirstError="smooth"
    >
      <t-form-item label="\u59D3\u540D" name="name">
        <t-input v-model="formData.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u5BC6\u7801" name="password">
        <t-input v-model="formData.password" type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
const INITIAL_DATA = {
  layout: 'inline',
  name: '',
  password: '',
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
    };
  },
  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
  },
};
<\/script>
`,Wt=`<template>
  <t-space direction="vertical" size="32px">
    <t-radio-group v-model="resetType" variant="default-filled">
      <t-radio-button value="empty">\u91CD\u7F6E\u4E3A\u7A7A</t-radio-button>
      <t-radio-button value="initial">
        <t-popup content="\u6539\u53D8\u8868\u5355\u6570\u636E\u540E\uFF0C\u70B9\u51FB\u91CD\u7F6E\u6309\u94AE\uFF0C\u89C2\u5BDF\u6570\u636E\u91CD\u7F6E\u60C5\u51B5"> \u91CD\u7F6E\u4E3A\u521D\u59CB\u503C </t-popup>
      </t-radio-button>
    </t-radio-group>

    <!-- colon \u8868\u793A\uFF0C\u662F\u5426\u7EDF\u4E00\u663E\u793A label \u5192\u53F7 -->
    <t-form ref="form" :data="formData" :resetType="resetType" colon @reset="onReset" @submit="onSubmit">
      <t-form-item label="\u59D3\u540D" name="name">
        <t-input v-model="formData.name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" @enter="onEnter"></t-input>
      </t-form-item>
      <t-form-item label="\u624B\u673A\u53F7\u7801" name="tel">
        <t-input v-model="formData.tel" placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801" @enter="onEnter"></t-input>
      </t-form-item>
      <t-form-item label="\u8BFE\u7A0B" name="course">
        <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
      </t-form-item>
      <t-form-item style="margin-left: 100px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
          <t-button theme="default" variant="base" @click="resetPhoneNumber">\u53EA\u91CD\u7F6E\u624B\u673A\u53F7\u7801</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
// \u8FD9\u662F\u521D\u59CB\u503C\uFF0C\u6570\u636E\u53D8\u5316\u540E\u53EF\u4EE5\u8BBE\u7F6E\u8868\u5355\u91CD\u7F6E\u4E3A\u8FD9\u4E2A\u521D\u59CB\u503C
const INITIAL_DATA = {
  name: 'TDesign',
  tel: '18612345678',
  course: ['1'],
};

export default {
  data() {
    return {
      resetType: 'initial',
      formData: { ...INITIAL_DATA },
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
      ],
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },

    // \u7981\u7528 Input \u7EC4\u4EF6\uFF0C\u6309\u4E0B Enter \u952E\u65F6\uFF0C\u89E6\u53D1 submit \u4E8B\u4EF6
    onEnter(_, { e }) {
      e.preventDefault();
    },

    // \u91CD\u7F6E\u6307\u5B9A\u5B57\u6BB5\uFF1A\u624B\u673A\u53F7\u7801
    resetPhoneNumber() {
      this.$refs.form.reset({ fields: ['tel'] });
    },
  },
};
<\/script>
`,Zt=`<template>
  <t-space direction="vertical" size="32px" class="tdesign-demo-form-status">
    <!--
      1. statusIcon \u503C\u4E3A true\uFF0C\u663E\u793A\u9ED8\u8BA4\u56FE\u6807\u3002\u9ED8\u8BA4\u56FE\u6807\u6709 \u6210\u529F\u3001\u5931\u8D25\u3001\u8B66\u544A \u7B49\uFF0C\u4E0D\u540C\u7684\u72B6\u6001\u56FE\u6807\u4E0D\u540C
      2. statusIcon \u503C\u4E3A false\uFF0C\u4E0D\u663E\u793A\u56FE\u6807
      3. statusIcon \u503C\u7C7B\u578B\u4E3A function\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u53F3\u4FA7\u72B6\u6001\u56FE\u6807
      4. statusIcon \u4E3A slot(\u63D2\u69FD)\uFF0C\u53EF\u81EA\u5B9A\u4E49\u53F3\u4FA7\u72B6\u6001\u56FE\u6807
    -->

    <t-radio-group v-model="formStatusIcon" variant="default-filled">
      <t-radio-button :value="true">\u663E\u793A\u6821\u9A8C\u56FE\u6807</t-radio-button>
      <t-radio-button :value="false">\u9690\u85CF\u6821\u9A8C\u56FE\u6807</t-radio-button>
    </t-radio-group>

    <t-form
      :data="formData"
      :rules="rules"
      :labelWidth="80"
      :statusIcon="formStatusIcon"
      ref="formValidatorStatus"
      @reset="onReset"
      @submit="onSubmit"
    >
      <t-form-item label="\u5931\u8D25" name="fail">
        <t-input v-model="formData.fail" placeholder="\u6821\u9A8C\u4E0D\u901A\u8FC7\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u8B66\u544A" name="warning">
        <t-input v-model="formData.warning" placeholder="\u6821\u9A8C\u8B66\u544A\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u6210\u529F" name="success">
        <t-input v-model="formData.success" placeholder="\u4E0D\u5E26\u7EFF\u8272\u8FB9\u6846\u7684\u6210\u529F\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u6210\u529F" name="success" successBorder>
        <t-input v-model="formData.success" placeholder="\u5E26\u7EFF\u8272\u8FB9\u6846\u7684\u6210\u529F\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u5931\u8D25" name="failB" :statusIcon="false">
        <t-input v-model="formData.failB" placeholder="\u9690\u85CF\u72B6\u6001\u56FE\u6807"></t-input>
      </t-form-item>
      <t-form-item label="\u8B66\u544A" name="warningB">
        <t-input v-model="formData.warningB" placeholder="\u6821\u9A8C\u8B66\u544A\u72B6\u6001"></t-input>
      </t-form-item>
      <t-form-item label="\u52A0\u8F7D\u4E2D" name="loading">
        <t-input v-model="formData.loading" placeholder="\u6B63\u5728\u6821\u9A8C\u4E2D\uFF0C\u8BF7\u7A0D\u7B49"></t-input>
        <template #statusIcon>
          <div style="width: 24px; display: flex; justify-content: center">
            <t-loading slot="statusIcon" size="small"></t-loading>
          </div>
        </template>
      </t-form-item>

      <!-- \u81EA\u5B9A\u4E49\u56FE\u6807\uFF1A\u53EF\u4EE5\u4F7F\u7528\u6E32\u67D3\u51FD\u6570 statusIcon\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD statusIcon -->
      <t-form-item label="\u5E2E\u52A9" :statusIcon="getStatusIcon" name="help">
        <t-input v-model="formData.help" placeholder="\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807"></t-input>
        <!-- <t-icon slot="statusIcon" name='help-circle' size="24px" style="color: #0006"/> -->
      </t-form-item>

      <t-form-item v-for="(item, index) in addlist" :key="item.id" label="\u65B0\u589E" :name="item.name">
        <t-input v-model="formData[item.name]"></t-input>
        <t-button
          v-if="item.id === 0 || item.id === lastAddItem - 1"
          @click="addItem"
          slot="statusIcon"
          variant="dashed"
        >
          <icon name="add" />
        </t-button>
        <t-button v-if="item.id > 0" @click="removeItem(item, index)" slot="statusIcon" variant="dashed">
          <icon name="remove" />
        </t-button>
      </t-form-item>

      <t-form-item :statusIcon="false" style="margin-left: 80px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script lang="jsx">
import { Icon } from 'tdesign-icons-vue';

const INITIAL_DATA = {
  fail: '',
  warning: '',
  success: '',
  failB: '',
  warningB: '',
  loading: '',
  add: '',
  help: '',
};

export default {
  components: {
    Icon,
  },
  data() {
    return {
      formStatusIcon: true,
      formData: { ...INITIAL_DATA },
      rules: {
        fail: [{ required: true, message: '\u5FC5\u586B', type: 'error' }],
        warning: [{ required: true, message: '\u5FC5\u586B', type: 'warning' }],
        success: [{ validator: () => true }],
        failB: [{ required: true, message: '\u5FC5\u586B', type: 'error' }],
        warningB: [{ required: true, message: '\u5FC5\u586B', type: 'warning' }],
      },
      addlist: [{ id: 0, name: 'add0' }],
      lastAddItem: 1,
    };
  },
  mounted() {
    this.$refs.formValidatorStatus.validate();
  },
  methods: {
    addItem() {
      const addNum = this.lastAddItem;
      INITIAL_DATA[\`add\${addNum}\`] = '';
      this.addlist.push({ id: addNum, name: \`add\${addNum}\` });
      this.lastAddItem += 1;
    },
    removeItem(item, index) {
      delete INITIAL_DATA[\`add\${item.id}\`];
      this.addlist.splice(index, 1);
    },
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    getStatusIcon() {
      return <Icon name="help-circle" size="16px" style="color: #0006" />;
    },
  },
};
<\/script>

<style>
.tdesign-demo-form-status .t-input {
  width: 520px;
}
</style>
`,Ht=`<template>
  <!--  scrollToFirstError="smooth" -->
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u5E74\u9F84" name="age">
      <t-input-number v-model="formData.age" placeholder="\u5E74\u9F84" />
    </t-form-item>
    <t-form-item label="\u7C4D\u8D2F" name="region">
      <t-cascader v-model="formData.region" placeholder="\u8BF7\u9009\u62E9\u7C4D\u8D2F" :options="regionOptions" clearable filterable />
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u90AE\u7BB1" name="email">
      <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
    </t-form-item>
    <t-form-item label="\u6027\u522B" name="gender">
      <t-radio-group v-model="formData.gender">
        <t-radio value="male">\u7537</t-radio>
        <t-radio value="female">\u5973</t-radio>
      </t-radio-group>
    </t-form-item>
    <t-form-item label="\u8BFE\u7A0B" name="course">
      <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
    </t-form-item>
    <t-form-item label="\u5B66\u9662" name="college">
      <t-select v-model="formData.college" class="demo-select-base" clearable filterable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662">
        <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
          {{ item.label }}
        </t-option>
      </t-select>
    </t-form-item>
    <t-form-item
      label="\u5165\u5B66\u65F6\u95F4"
      name="date"
      :rules="[
        { required: true, message: '\u6B64\u9879\u5FC5\u586B' },
        { date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' },
      ]"
    >
      <t-date-picker v-model="formData.date"></t-date-picker>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
      <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-textarea v-model="formData.description" placeholder="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1"></t-textarea>
    </t-form-item>
    <t-form-item label="\u5174\u8DA3\u7231\u597D" name="hobby">
      <t-tree-select
        v-model="formData.hobby"
        filterable
        :data="hobbyOptions"
        placeholder="\u8BF7\u9009\u62E9\u4F60\u7684\u5174\u8DA3\u7231\u597D"
      ></t-tree-select>
    </t-form-item>

    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        <t-button theme="default" variant="base" @click="handleClear">\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script>
const INITIAL_DATA = {
  account: '',
  password: '',
  description: '',
  age: undefined,
  region: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  hobby: '',
  course: [],
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
      hobbyOptions: [
        {
          label: '\u8FD0\u52A8',
          value: 'sports',
          children: [
            {
              label: '\u8DB3\u7403',
              value: 'soccer',
            },
            {
              label: '\u7BEE\u7403',
              value: 'basketball',
            },
          ],
        },
        {
          label: '\u5A31\u4E50',
          value: 'entertainment',
          children: [
            {
              label: '\u7535\u5F71',
              value: 'movie',
            },
            {
              label: '\u65C5\u6E38',
              value: 'trip',
            },
          ],
        },
      ],
      regionOptions: [
        {
          label: '\u5E7F\u4E1C',
          value: '1',
          children: [
            {
              label: '\u6DF1\u5733',
              value: '1.1',
            },
            {
              label: '\u5E7F\u5DDE',
              value: '1.2',
            },
          ],
        },
        {
          label: '\u6E56\u5357',
          value: '2',
          children: [
            {
              label: '\u957F\u6C99',
              value: '2.1',
            },
          ],
        },
      ],
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
        { label: '\u4F53\u80B2', value: '4' },
      ],
      options: [
        { label: '\u8BA1\u7B97\u673A\u5B66\u9662', value: '1' },
        { label: '\u8F6F\u4EF6\u5B66\u9662', value: '2' },
        { label: '\u7269\u8054\u7F51\u5B66\u9662', value: '3' },
      ],
      // FormItem.rules \u4F18\u5148\u7EA7\u5927\u4E8E Form.rules
      rules: {
        account: [
          {
            required: true,
            message: '\u59D3\u540D\u5FC5\u586B',
            type: 'error',
            trigger: 'blur',
          },
          // trigger \u9ED8\u8BA4\u4E3A 'change'
          { required: true, message: '\u59D3\u540D\u5FC5\u586B', type: 'error' },
          { whitespace: true, message: '\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A' },
          {
            min: 2,
            message: '\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
            type: 'warning',
            trigger: 'blur',
          },
          {
            max: 10,
            message: '\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA',
            type: 'warning',
            trigger: 'blur',
          },
        ],
        description: [
          {
            validator: (val) => val.length >= 5,
            message: '\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
            type: 'warning',
          },
          {
            validator: (val) => val.length < 20,
            message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6',
            type: 'warning',
          },
        ],
        age: [{ required: true, message: '\u5E74\u9F84\u5FC5\u586B', type: 'error' }],
        region: [{ required: true, message: '\u7C4D\u8D2F\u5FC5\u586B', type: 'error' }],

        password: [
          { required: true, message: '\u5BC6\u7801\u5FC5\u586B', type: 'error' },
          { len: 8, message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801', type: 'warning' },
          { pattern: /[A-Z]+/, message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD', type: 'warning' },
        ],
        college: [{ required: true, message: '\u6B64\u9879\u5FC5\u586B' }],
        email: [
          { required: true, message: '\u90AE\u7BB1\u5FC5\u586B' },
          { email: { ignore_max_length: true }, message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740' },
        ],
        gender: [{ required: true, message: '\u6027\u522B\u5FC5\u586B' }],
        course: [
          { required: true, message: '\u8BFE\u7A0B\u5FC5\u586B' },
          { validator: (val) => val.length <= 2, message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B', type: 'warning' },
        ],
        hobby: [{ required: true, message: '\u7231\u597D\u5FC5\u586B', type: 'error' }],
        'content.url': [
          { required: true, message: '\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B' },
          {
            url: {
              protocols: ['http', 'https', 'ftp'],
              require_protocol: true,
            },
            message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875',
          },
        ],
      },
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
      console.log('formData', this.formData);
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    handleClear() {
      this.$refs.form.clearValidate();
    },
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,Ut=`<template>
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit" @validate="onValidate">
    <t-form-item label="\u7528\u6237\u540D" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password" help="\u540C\u4E00\u4E2A\u6821\u9A8C\u65B9\u6CD5\u53EF\u8F93\u51FA\u4E0D\u540C\u7684\u9519\u8BEF\u4FE1\u606F\u548C\u7C7B\u578B\uFF0C\u4F9D\u6B21\u8F93\u5165\uFF1A1234 \u89C2\u5BDF\u53D8\u5316">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u786E\u8BA4\u5BC6\u7801" name="rePassword" help="\u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u65B9\u6CD5">
      <t-input type="password" v-model="formData.rePassword" placeholder="\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script>
const INITIAL_DATA = {
  account: '',
  password: '',
  rePassword: '',
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
      rules: {
        account: [
          { required: true, message: '\u7528\u6237\u540D\u5FC5\u586B', type: 'error' },
          {
            validator: this.userNameValidator,
          },
        ],
        password: [
          { required: true, message: '\u5BC6\u7801\u5FC5\u586B', type: 'error' },
          // \u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF1A\u4E0D\u540C\u7684\u503C\u53EF\u4EE5\u6709\u4E0D\u540C\u7684\u6821\u9A8C\u7ED3\u679C\uFF0C\u4E0D\u540C\u7684\u6821\u9A8C\u7C7B\u578B
          { validator: this.passwordValidator },
        ],
        rePassword: [
          { required: true, message: '\u5BC6\u7801\u5FC5\u586B', type: 'error' },
          // \u81EA\u5B9A\u4E49\u6821\u9A8C\u89C4\u5219\uFF1A\u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u89C4\u5219
          { validator: this.rePassword, message: '\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4' },
        ],
      },
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    onValidate({ validateResult, firstError }) {
      if (validateResult === true) {
        console.log('Validate Success');
      } else {
        console.log('Validate Errors: ', firstError, validateResult);
      }
    },
    handleBlur() {
      this.$refs.form.validate({
        fields: ['account'],
        trigger: 'blur',
      });
    },
    // \u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u5668\uFF0C\u4F7F\u7528 resolve \u8FD4\u56DE\u7ED3\u679C\u63A7\u5236\u6821\u9A8C\u7ED3\u679C\u3001\u6821\u9A8C\u4FE1\u606F\u3001\u6821\u9A8C\u7ED3\u679C\u7C7B\u578B
    userNameValidator(val) {
      return new Promise((resolve) => {
        const timer = setTimeout(() => {
          if (['Zhang', 'Li', 'Wang'].includes(val)) {
            resolve({ result: true });
          } else {
            resolve({ result: false, message: '\u7528\u6237\u540D\u4E0D\u5B58\u5728', type: 'error' });
          }
          clearTimeout(timer);
        }, 10);
      });
    },
    // \u81EA\u5B9A\u4E49\u6821\u9A8C\u5668\uFF0C\u4E0D\u540C\u7684\u503C\u8F93\u51FA\u4E0D\u540C\u7684\u6821\u9A8C\u7ED3\u679C\u3002\u652F\u6301\u5F02\u6B65\u6821\u9A8C\uFF08\u6587\u6848\u9009\u81EA\u67D0\u5BC6\u7801\u91CD\u7F6E\u7AD9\u70B9\uFF0C\u5982\u6709\u4FB5\u6743\uFF0C\u8BF7\u8054\u7CFB\u6211\u4EEC\u5220\u9664\uFF09
    passwordValidator(val) {
      if (val.length > 0 && val.length <= 2) {
        return { result: false, message: '\u592A\u7B80\u5355\u4E86\uFF01\u518D\u5F00\u52A8\u4E00\u4E0B\u4F60\u7684\u5C0F\u8111\u7B4B\u5427\uFF01', type: 'error' };
      }
      if (val.length > 2 && val.length < 4) {
        return { result: false, message: '\u8FD8\u5DEE\u4E00\u70B9\u70B9\uFF0C\u5C31\u662F\u4E00\u4E2A\u5B8C\u7F8E\u7684\u5BC6\u7801\u4E86\uFF01', type: 'warning' };
      }
      return { result: true, message: '\u592A\u5F3A\u4E86\uFF0C\u4F60\u786E\u5B9A\u81EA\u5DF1\u8BB0\u5F97\u4F4F\u5417\uFF01', type: 'success' };
    },
    // \u81EA\u5B9A\u4E49\u5F02\u6B65\u6821\u9A8C\u5668
    rePassword(val) {
      return new Promise((resolve) => {
        const timer = setTimeout(() => {
          resolve(this.formData.password === val);
          clearTimeout(timer);
        });
      });
    },
  },
};
<\/script>
`,Gt=`<template>
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit" scrollToFirstError="smooth">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-input v-model="formData.description" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"></t-input>
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item label="\u90AE\u7BB1" name="email">
      <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
    </t-form-item>
    <t-form-item label="\u6027\u522B" name="gender">
      <t-radio-group v-model="formData.gender">
        <t-radio value="male">\u7537</t-radio>
        <t-radio value="female">\u5973</t-radio>
      </t-radio-group>
    </t-form-item>
    <t-form-item label="\u8BFE\u7A0B" name="course">
      <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
    </t-form-item>
    <t-form-item label="\u5B66\u9662" name="college">
      <t-select v-model="formData.college" class="demo-select-base" clearable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u9662\u6821">
        <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
          {{ item.label }}
        </t-option>
      </t-select>
    </t-form-item>
    <t-form-item
      label="\u5165\u5B66\u65F6\u95F4"
      name="date"
      :rules="[{ date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' }]"
    >
      <t-input v-model="formData.date" placeholder="\u8BF7\u8F93\u5165\u5165\u5B66\u65F6\u95F4"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
      <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
    </t-form-item>
    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit"> \u63D0\u4EA4 </t-button>
        <t-button theme="default" variant="base" type="reset"> \u91CD\u7F6E </t-button>
        <t-button theme="default" variant="base" @click="handleClear"> \u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C </t-button>
        <t-button theme="default" variant="base" @click="clearFieldsValidateResult"> \u6E05\u9664\u6307\u5B9A\u5B57\u6BB5\u7684\u6821\u9A8C\u7ED3\u679C </t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script>
const INITIAL_DATA = {
  account: '',
  password: '',
  description: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  course: [],
};
export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
        { label: '\u4F53\u80B2', value: '4' },
      ],
      options: [
        { label: '\u8BA1\u7B97\u673A\u5B66\u9662', value: '1' },
        { label: '\u8F6F\u4EF6\u5B66\u9662', value: '2' },
        { label: '\u7269\u8054\u7F51\u5B66\u9662', value: '3' },
      ],
      rules: {
        account: [
          { required: true, message: '\u59D3\u540D\u5FC5\u586B' },
          { min: 2, message: '\u81F3\u5C11\u9700\u8981\u4E24\u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26' },
          { max: 10, message: '\u59D3\u540D\u5B57\u7B26\u957F\u5EA6\u8D85\u51FA' },
        ],
        description: [
          { validator: (val) => val.length >= 5, message: '\u81F3\u5C11 5 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6' },
          { validator: (val) => val.length < 20, message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6' },
        ],
        password: [
          { required: true, message: '\u5BC6\u7801\u5FC5\u586B' },
          { len: 8, message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801' },
          { pattern: /[A-Z]+/, message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD' },
        ],
        email: [
          { required: true, message: '\u90AE\u7BB1\u5FC5\u586B' },
          { email: { ignore_max_length: true }, message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740' },
        ],
        gender: [{ required: true, message: '\u6027\u522B\u5FC5\u586B' }],
        course: [
          { required: true, message: '\u8BFE\u7A0B\u5FC5\u586B' },
          { validator: (val) => val.length <= 2, message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B' },
        ],
        'content.url': [
          { required: true, message: '\u4E2A\u4EBA\u7F51\u7AD9\u5FC5\u586B' },
          {
            url: {
              protocols: ['http', 'https', 'ftp'],
              require_protocol: true,
            },
            message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u4E2A\u4EBA\u4E3B\u9875',
          },
        ],
      },
    };
  },

  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
      console.log('formData', this.formData);
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    handleClear() {
      this.$refs.form.clearValidate();
    },
    // \u6E05\u9664\u6307\u5B9A\u5B57\u6BB5\u7684\u6821\u9A8C\u7ED3\u679C
    clearFieldsValidateResult() {
      this.$refs.form.clearValidate(['email', 'course', 'content.url']);
      this.$message.success('\u5DF2\u6E05\u9664\u90AE\u7BB1\u3001\u8BFE\u7A0B\u3001\u4E2A\u4EBA\u7F51\u7AD9\u7B49\u5B57\u6BB5\u6821\u9A8C\u7ED3\u679C');
    },
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,Jt=`<template>
  <t-space direction="vertical" size="32px">
    <!-- \u53EF\u4EE5\u4F7F\u7528\u5168\u5C40 ConfigProvider errorMessage \u914D\u7F6E\u89C4\u5219\u6821\u9A8C\u7ED3\u679C\u63CF\u8FF0\uFF0C\u800C\u65E0\u9700\u7ED9\u6BCF\u4E00\u4E2A\u8868\u5355\u90FD\u914D\u7F6E\u6821\u9A8C\u4FE1\u606F -->

    <t-radio-group v-model="errorConfig" variant="default-filled">
      <t-radio-button value="default">
        <t-popup content="Form.errorMessage \u4E3A\u7A7A\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u5185\u7F6E\u6821\u9A8C\u4FE1\u606F\u3002\u91CD\u7F6E\u540E\uFF0C\u70B9\u51FB\u63D0\u4EA4\u89C2\u5BDF\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F">
          \u4F7F\u7528\u8868\u5355\u9ED8\u8BA4\u6821\u9A8C\u4FE1\u606F
        </t-popup>
      </t-radio-button>
      <t-radio-button value="config">
        <t-popup content="\u7EDF\u4E00\u914D\u7F6E Form.errorMessage\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u7684\u6821\u9A8C\u4FE1\u606F\u3002\u91CD\u7F6E\u540E\uFF0C\u70B9\u51FB\u63D0\u4EA4\u89C2\u5BDF\u6821\u9A8C\u7ED3\u679C\u4FE1\u606F">
          \u8868\u5355\u7EDF\u4E00\u914D\u7F6E\u6821\u9A8C\u4FE1\u606F
        </t-popup>
      </t-radio-button>
    </t-radio-group>

    <!-- error-message \u975E\u5FC5\u9700 -->
    <t-form
      :data="formData"
      :rules="rules"
      :error-message="errorConfig === 'default' ? undefined : errorMessage"
      ref="form"
      @reset="onReset"
      @submit="onSubmit"
      scrollToFirstError="smooth"
    >
      <!-- !!!\u6CE8\u610F\uFF1A\u5F53 FormItem \u7684 label \u5C5E\u6027\u4E3A Function \u65F6\uFF0CerrorMessage \u6A21\u677F\u4E2D\u7684 \${name} \u4F1A\u88AB\u66FF\u6362\u4E3A FormItem.name \u5C5E\u6027\u503C -->
      <t-form-item :label="renderAccountLabel" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
        <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
        <t-input v-model="formData.description" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"></t-input>
      </t-form-item>
      <t-form-item label="\u5BC6\u7801" name="password">
        <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
      </t-form-item>
      <t-form-item label="\u90AE\u7BB1" name="email">
        <t-input v-model="formData.email" placeholder="\u8BF7\u8F93\u5165\u90AE\u7BB1"></t-input>
      </t-form-item>
      <t-form-item label="\u6027\u522B" name="gender">
        <t-radio-group v-model="formData.gender">
          <t-radio value="male">\u7537</t-radio>
          <t-radio value="female">\u5973</t-radio>
        </t-radio-group>
      </t-form-item>
      <t-form-item label="\u8BFE\u7A0B" name="course">
        <t-checkbox-group v-model="formData.course" :options="courseOptions"></t-checkbox-group>
      </t-form-item>
      <t-form-item label="\u5B66\u9662" name="college">
        <t-select v-model="formData.college" class="demo-select-base" clearable placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662">
          <t-option v-for="(item, index) in options" :value="item.value" :label="item.label" :key="index">
            {{ item.label }}
          </t-option>
        </t-select>
      </t-form-item>
      <t-form-item
        label="\u5165\u5B66\u65F6\u95F4"
        name="date"
        :rules="[{ date: { delimiters: ['/', '-', '.'] }, message: '\u65E5\u671F\u683C\u5F0F\u6709\u8BEF' }]"
      >
        <t-input v-model="formData.date" placeholder="\u8BF7\u8F93\u5165\u5165\u5B66\u65F6\u95F4"></t-input>
      </t-form-item>
      <t-form-item label="\u4E2A\u4EBA\u7F51\u7AD9" name="content.url">
        <t-input v-model="formData.content.url" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7F51\u7AD9\u5730\u5740"></t-input>
      </t-form-item>
      <t-form-item style="margin-left: 100px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
          <t-button theme="default" variant="base" @click="handleClear">\u6E05\u7A7A\u6821\u9A8C\u7ED3\u679C</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
/* eslint-disable no-template-curly-in-string */
const INITIAL_DATA = {
  account: '',
  password: '',
  description: '',
  email: '',
  gender: '',
  college: '',
  date: '',
  content: {
    url: '',
  },
  course: [],
};
export default {
  data() {
    return {
      errorConfig: 'default',
      formData: { ...INITIAL_DATA },
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
        { label: '\u4F53\u80B2', value: '4' },
      ],
      options: [
        { label: '\u8BA1\u7B97\u673A\u5B66\u9662', value: '1' },
        { label: '\u8F6F\u4EF6\u5B66\u9662', value: '2' },
        { label: '\u7269\u8054\u7F51\u5B66\u9662', value: '3' },
      ],
      errorMessage: {
        date: '\${name}\u4E0D\u6B63\u786E',
        url: '\${name}\u4E0D\u6B63\u786E',
        required: '\u8BF7\u8F93\u5165\${name}',
        max: '\${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 \${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
        min: '\${name}\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E \${validate} \u4E2A\u5B57\u7B26\uFF0C\u4E00\u4E2A\u4E2D\u6587\u7B49\u4E8E\u4E24\u4E2A\u5B57\u7B26',
        len: '\${name}\u5B57\u7B26\u957F\u5EA6\u5FC5\u987B\u662F \${validate}',
        pattern: '\${name}\u4E0D\u6B63\u786E',
        validator: '\${name}\u6709\u8BEF',
      },
      rules: {
        account: [
          { required: true },
          // { enum: ['sheep', 'name'] },
          { min: 2 },
          { max: 10, type: 'warning' },
        ],
        description: [
          { validator: (val) => val.length >= 5 },
          { validator: (val) => val.length < 10, message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6' },
        ],
        password: [
          { required: true },
          { len: 8, message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801' },
          { pattern: /[A-Z]+/, message: '\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5199\u5B57\u6BCD' },
        ],
        email: [{ required: true }, { email: { ignore_max_length: true } }],
        gender: [{ required: true }],
        course: [
          { required: true },
          { validator: (val) => val.length <= 2, message: '\u6700\u591A\u9009\u62E9 2 \u95E8\u8BFE\u7A0B', type: 'warning' },
        ],
        'content.url': [
          { required: true },
          {
            url: {
              protocols: ['http', 'https', 'ftp'],
              require_protocol: true,
            },
          },
        ],
      },
    };
  },

  methods: {
    renderAccountLabel() {
      return '\u7528\u6237\u540D';
    },
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    handleClear() {
      this.$refs.form.clearValidate();
    },
  },
};
<\/script>

<style scoped>
.demo-select-base {
  width: 300px;
}
</style>
`,Kt=`<template>
  <t-form
    :data="formData"
    :rules="rules"
    resetType="initial"
    ref="form"
    style="max-width: 100%"
    @reset="onReset"
    @submit="onSubmit"
  >
    <t-form-item label="\u5B66\u6821" name="school">
      <t-radio-group v-model="formData.school" :options="SCHOOL_OPTIONS" />
    </t-form-item>
    <t-tabs
      v-model="studentTab"
      theme="card"
      addable
      @add="onAddStudent"
      style="margin-left: 30px; border: 1px solid var(--td-component-stroke)"
    >
      <t-tab-panel
        v-for="(student, index) in formData.students"
        :key="student.id"
        :value="student.id"
        :label="student.label"
        :destroyOnHide="false"
      >
        <t-space direction="vertical" size="24px" style="padding: 24px 24px 24px 0">
          <!-- \u91CD\u70B9\u9605\u8BFB\uFF1A\u6570\u7EC4\u91CC\u9762\uFF0C\u6CE8\u610F name \u5B9A\u4E49\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u5B57\u6BB5 -->
          <t-form-item label="\u59D3\u540D" :name="\`students[\${index}].name\`" :label-width="80">
            <t-input v-model="formData.students[index].name" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
          </t-form-item>

          <t-form-item label="\u9009\u79D1" :name="\`students[\${index}].courseType\`" :label-width="80">
            <t-radio-group v-model="formData.students[index].courseType">
              <t-radio value="wenke">\u6587\u79D1</t-radio>
              <t-radio value="like">\u7406\u79D1</t-radio>
            </t-radio-group>
          </t-form-item>

          <t-form-item label="\u8BFE\u7A0B" :name="\`students[\${index}].course\`" :label-width="80">
            <t-checkbox-group v-model="formData.students[index].course" :options="courseOptions"></t-checkbox-group>
          </t-form-item>

          <t-form-item style="margin-left: 100px" :label-width="80">
            <t-space size="10px">
              <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
              <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
            </t-space>
          </t-form-item>
        </t-space>
      </t-tab-panel>
    </t-tabs>
  </t-form>
</template>

<script>
let id = 0;
function getId() {
  id += 1;
  return id;
}

const INITIAL_DATA = {
  school: 1,
  students: [
    {
      id: getId(),
      label: '\u5B66\u751F1',
      name: 'Student A',
      courseType: 'wenke',
      course: ['1'],
    },
    {
      id: getId(),
      label: '\u5B66\u751F2',
      name: 'Student B',
      courseType: 'wenke',
      course: [],
    },
  ],
};

const COURSE_OPTIONS = [
  { label: '\u5168\u90E8', checkAll: true },
  { label: '\u8BED\u6587', value: '1', courseTypes: ['wenke', 'like'] },
  { label: '\u6570\u5B66', value: '2', courseTypes: ['wenke', 'like'] },
  { label: '\u7269\u7406', value: '3', courseTypes: ['like'] },
  { label: '\u5316\u5B66', value: '4', courseTypes: ['like'] },
  { label: '\u5730\u7406', value: '5', courseTypes: ['wenke'] },
  { label: '\u5386\u53F2', value: '6', courseTypes: ['wenke'] },
];

const SCHOOL_OPTIONS = [
  { label: '\u5B66\u6821\u4E00', value: 1 },
  { label: '\u5B66\u6821\u4E8C', value: 2 },
  { label: '\u5B66\u6821\u4E09', value: 3 },
];

export default {
  data() {
    return {
      studentTab: 1,
      formData: { ...INITIAL_DATA },
      SCHOOL_OPTIONS,
      // courseOptions: COURSE_OPTIONS,
      rules: {
        school: [{ required: true, message: '\u5B66\u6821\u5FC5\u586B' }],
        name: [{ required: true, message: '\u7528\u6237\u540D\u5FC5\u586B' }],
        courseType: [{ required: true, message: '\u9009\u79D1\u5FC5\u586B' }],
        course: [{ required: true, message: '\u8BFE\u7A0B\u5FC5\u586B' }],
      },
    };
  },

  computed: {
    courseOptions() {
      return COURSE_OPTIONS.filter((item) => {
        if (!this.formData.courseType || !item.courseTypes) return true;
        return item.courseTypes.includes(this.formData.courseType);
      });
    },
  },

  watch: {
    'formData.courseType': function () {
      this.formData.course = [];
    },
  },

  methods: {
    // \u91CD\u7F6E\u65B9\u6CD5\uFF1Athis.$refs.reset()
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    // \u63D0\u4EA4\u65B9\u6CD5\uFF1Athis.$refs.submit()
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
        // \u5224\u65AD\u9519\u8BEF\u5728\u7B2C\u51E0\u4E2A Tab\uFF0C\u800C\u540E\u81EA\u52A8\u5207\u6362\u5230\u7B2C\u51E0\u4E2A
        for (let i = 0, len = this.formData.students.length; i < len; i++) {
          const item = this.formData.students[i];
          const keys = Object.keys(item).map((key) => \`students[\${i}].\${key}\`);
          // \u6570\u7EC4\u6570\u636E key \u5728 validateResult \u4E2D\u5B58\u5728\uFF0C\u5219\u8868\u793A\u6821\u9A8C\u4E0D\u901A\u8FC7
          const isInvalid = keys.find((key) => validateResult[key]);
          if (isInvalid) {
            this.studentTab = item.id;
            return;
          }
        }
      }
    },
    onAddStudent() {
      const id = getId();
      this.formData.students.push({
        id,
        label: \`\u5B66\u751F\${id}\`,
        name: '',
        courseType: 'wenke',
        course: [],
        status: false,
      });
      this.studentTab = id;
    },
  },
};
<\/script>
`,Qt=`<template>
  <t-space direction="vertical" size="32px">
    <t-space style="margin-left: 36px">
      <t-checkbox v-model="formDisabled" variant="default-filled"> \u662F\u5426\u7981\u7528\u8868\u5355 </t-checkbox>
    </t-space>

    <t-form
      :data="formData"
      ref="form"
      resetType="initial"
      :disabled="formDisabled"
      colon
      @reset="onReset"
      @submit="onSubmit"
    >
      <t-form-item label="\u59D3\u540D" name="name">
        <t-input v-model="formData.name" @enter="onEnter" placeholder="\u8BF7\u8F93\u5165\u59D3\u540D"></t-input>
      </t-form-item>
      <t-form-item label="\u5B66\u9662" name="college">
        <t-select
          v-model="formData.college"
          :options="COLLEGE_OPTIONS"
          clearable
          placeholder="\u8BF7\u9009\u62E9\u6240\u5728\u5B66\u9662"
        ></t-select>
      </t-form-item>
      <t-form-item label="\u5BC4\u4EF6\u5730\u5740" name="address1">
        <t-tree-select v-model="formData.address1" :data="ADDRESS_OPTIONS" clearable placeholder="\u8BF7\u9009\u62E9\u5BC4\u4EF6\u5730\u5740" />
      </t-form-item>
      <t-form-item label="\u6536\u4EF6\u5730\u5740" name="address2">
        <t-cascader v-model="formData.address2" :options="ADDRESS_OPTIONS" clearable placeholder="\u8BF7\u9009\u62E9\u6536\u4EF6\u5730\u5740" />
      </t-form-item>
      <t-form-item label="\u65E5\u671F" name="date">
        <t-date-picker v-model="formData.date" mode="date" clearable placeholder="\u8BF7\u9009\u62E9\u65E5\u671F" />
      </t-form-item>
      <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" name="personalProfile">
        <t-textarea v-model="formData.personalProfile" placeholder="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" clearable />
      </t-form-item>
      <t-form-item label="\u77ED\u4FE1" name="message">
        <t-switch v-model="formData.message" :label="['\u63A5\u53D7', '\u4E0D\u63A5']"></t-switch>
      </t-form-item>
      <t-form-item label="\u6027\u522B" name="gender">
        <t-radio-group v-model="formData.gender">
          <t-radio value="1">\u7537</t-radio>
          <t-radio value="2">\u5973</t-radio>
        </t-radio-group>
      </t-form-item>
      <t-form-item label="\u8BFE\u7A0B" name="course">
        <t-checkbox-group v-model="formData.course" :options="courseOptions" />
      </t-form-item>
      <t-form-item label="\u7EE9\u70B9" name="gradePoint">
        <t-input-number v-model="formData.gradePoint" placeholder="\u5206\u6570\u503C" />
      </t-form-item>
      <t-form-item label="\u5934\u50CF" name="avatar">
        <t-upload
          action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
          v-model="formData.avatar"
          theme="image"
          tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20"
          accept="image/*"
        ></t-upload>
      </t-form-item>
      <t-form-item style="margin-left: 100px">
        <t-space size="10px">
          <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
          <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </t-space>
</template>
<script>
const INITIAL_DATA = {
  name: '',
  message: true,
  gender: '',
  course: [],
  college: '',
  personalProfile: '',
  address1: undefined,
  address2: undefined,
  gradePoint: undefined,
  date: '',
  avatar: [{ url: 'https://tdesign.gtimg.com/site/avatar.jpg' }],
};

const COLLEGE_OPTIONS = [
  { label: '\u5B66\u9662 A', value: 1 },
  { label: '\u5B66\u9662 B', value: 2 },
  { label: '\u5B66\u9662 C', value: 3 },
];

const ADDRESS_OPTIONS = [
  { label: '\u6C5F\u82CF', value: 1, children: [{ label: '\u5357\u4EAC\u5E02', value: 300 }] },
  { label: '\u4E0A\u6D77', value: 2, children: [{ label: '\u5F90\u6C47\u533A', value: 400 }] },
  { label: '\u56DB\u5DDD', value: 3, children: [{ label: '\u6210\u90FD\u5E02', value: 500 }] },
];

export default {
  data() {
    return {
      formDisabled: true,
      formData: { ...INITIAL_DATA },
      COLLEGE_OPTIONS,
      ADDRESS_OPTIONS,
      courseOptions: [
        { label: '\u8BED\u6587', value: '1' },
        { label: '\u6570\u5B66', value: '2' },
        { label: '\u82F1\u8BED', value: '3' },
      ],
    };
  },

  methods: {
    // \u91CD\u7F6E\u65B9\u6CD5\uFF1Athis.$refs.reset()
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    // \u63D0\u4EA4\u65B9\u6CD5\uFF1Athis.$refs.submit()
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    // \u963B\u6B62\u8868\u5355\u9ED8\u8BA4\u63D0\u4EA4\u4E8B\u4EF6
    onEnter(_, ctx) {
      if (ctx && ctx.e) {
        ctx.e.preventDefault();
      }
    },
  },
};
<\/script>
`,Xt=`<template>
  <!-- error-message \u975E\u5FC5\u9700 -->
  <t-form :data="formData" :rules="rules" ref="form" @reset="onReset" @submit="onSubmit" scrollToFirstError="smooth">
    <t-form-item label="\u7528\u6237\u540D" help="\u8FD9\u91CC\u53EF\u4EE5\u5C55\u793A\u4E00\u6BB5\u8BF4\u660E\u6587\u5B57" name="account">
      <t-input v-model="formData.account" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D"></t-input>
    </t-form-item>
    <t-form-item label="\u4E2A\u4EBA\u7B80\u4ECB" help="\u8BF7\u7528\u4E00\u53E5\u8BDD\u4ECB\u7ECD\u81EA\u5DF1" name="description">
      <t-input v-model="formData.description" placeholder="\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB"></t-input>
    </t-form-item>
    <t-form-item label="\u5BC6\u7801" name="password">
      <t-input type="password" v-model="formData.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801"></t-input>
    </t-form-item>
    <t-form-item style="margin-left: 100px">
      <t-space size="10px">
        <t-button theme="primary" type="submit">\u63D0\u4EA4</t-button>
        <t-button theme="default" variant="base" type="reset">\u91CD\u7F6E</t-button>
        <t-button theme="default" variant="base" @click="handleValidateMessage">\u8BBE\u7F6E\u6821\u9A8C\u4FE1\u606F\u63D0\u793A</t-button>
      </t-space>
    </t-form-item>
  </t-form>
</template>
<script>
/* eslint-disable no-template-curly-in-string */
const INITIAL_DATA = {
  account: '',
  description: '',
  password: '',
};

const validateMessage = {
  account: [
    {
      type: 'error',
      message: '\u81EA\u5B9A\u4E49\u7528\u6237\u540D\u6821\u9A8C\u4FE1\u606F\u63D0\u793A',
    },
  ],
  description: [
    {
      type: 'warning',
      message: '\u81EA\u5B9A\u4E49\u4E2A\u4EBA\u7B80\u4ECB\u6821\u9A8C\u4FE1\u606F\u63D0\u793A',
    },
  ],
};

export default {
  data() {
    return {
      formData: { ...INITIAL_DATA },
      validateMessage,
      rules: {
        account: [{ required: true }, { min: 2 }, { max: 10, type: 'warning' }],
        description: [{ validator: (val) => val.length < 10, message: '\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\uFF0C\u4E2D\u6587\u957F\u5EA6\u7B49\u4E8E\u82F1\u6587\u957F\u5EA6' }],
        password: [{ required: true }, { len: 8, message: '\u8BF7\u8F93\u5165 8 \u4F4D\u5BC6\u7801' }],
      },
    };
  },
  mounted() {
    this.$refs.form.setValidateMessage(validateMessage);
  },
  methods: {
    onReset() {
      this.$message.success('\u91CD\u7F6E\u6210\u529F');
    },
    onSubmit({ validateResult, firstError }) {
      if (validateResult === true) {
        this.$message.success('\u63D0\u4EA4\u6210\u529F');
      } else {
        console.log('Errors: ', validateResult);
        this.$message.warning(firstError);
      }
    },
    handleValidateMessage() {
      this.$message.success('\u8BBE\u7F6E\u8868\u5355\u6821\u9A8C\u4FE1\u606F\u63D0\u793A\u6210\u529F');
      this.$refs.form.setValidateMessage(validateMessage);
    },
  },
};
<\/script>
`,gt=[{name:"colon",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"labelAlign",type:"enum",defaultValue:"right",options:[{label:"left",value:"left"},{label:"right",value:"right"},{label:"top",value:"top"}]},{name:"layout",type:"enum",defaultValue:"vertical",options:[{label:"vertical",value:"vertical"},{label:"inline",value:"inline"}]},{name:"preventSubmitDefault",type:"Boolean",defaultValue:!0,options:[]},{name:"requiredMark",type:"Boolean",defaultValue:!1,options:[]},{name:"resetType",type:"enum",defaultValue:"empty",options:[{label:"empty",value:"empty"},{label:"initial",value:"initial"}]},{name:"showErrorMessage",type:"Boolean",defaultValue:!0,options:[]},{name:"statusIcon",type:"Boolean",defaultValue:!1,options:[]},{name:"submitWithWarningMessage",type:"Boolean",defaultValue:!1,options:[]}],E={};E.setup=(e,n)=>{const t=d(gt),a=[{label:"form",value:"form"}],r={form:`
        <t-form v-bind="configProps">
          <t-form-item label="\u59D3\u540D" name="name" initialData="TDesign">
            <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
          </t-form-item>
          <t-form-item label="\u624B\u673A\u53F7\u7801" name="tel" initialData="123456">
            <t-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
          </t-form-item>
          <t-form-item label="\u8BFE\u7A0B" name="course" initialData="['1']">
            <t-checkbox-group>
              <t-checkbox value="1">\u8BED\u6587</t-checkbox>
              <t-checkbox value="2">\u6570\u5B66</t-checkbox>
              <t-checkbox value="3">\u82F1\u8BED</t-checkbox>
              <t-checkbox value="4">\u4F53\u80B2</t-checkbox>
            </t-checkbox-group>
          </t-form-item>
        </t-form>
      `},o=d(`<template>${r[a[0].value].trim()}</template>`);function i(l){o.value=`<template>${r[l].trim()}</template>`}return{configList:t,panelList:a,usageCode:o,onPanelChange:i}};var ht=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"form",fn:function(a){var r=a.configProps;return[t("t-form",e._b({},"t-form",r,!1),[t("t-form-item",{attrs:{label:"\u59D3\u540D",name:"name",initialData:"TDesign"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("t-form-item",{attrs:{label:"\u624B\u673A\u53F7\u7801",name:"tel",initialData:"123456"}},[t("t-input",{attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}})],1),t("t-form-item",{attrs:{label:"\u8BFE\u7A0B",name:"course",initialData:"['1']"}},[t("t-checkbox-group",[t("t-checkbox",{attrs:{value:"1"}},[e._v("\u8BED\u6587")]),t("t-checkbox",{attrs:{value:"2"}},[e._v("\u6570\u5B66")]),t("t-checkbox",{attrs:{value:"3"}},[e._v("\u82F1\u8BED")]),t("t-checkbox",{attrs:{value:"4"}},[e._v("\u4F53\u80B2")])],1)],1)],1)]}}])})},Dt=[];const O={};var _t=s(E,ht,Dt,!1,yt,null,null,null);function yt(e){for(let n in O)this[n]=O[n]}const Yt=function(){return _t.exports}();export{Tt as D,Yt as U,At as a,St as b,Ot as c,Et as d,qt as e,Rt as f,Pt as g,Nt as h,Lt as i,Ct as j,Vt as k,zt as l,Mt as m,Ft as n,Bt as o,jt as p,Wt as q,Zt as r,Ht as s,Ut as t,Gt as u,Jt as v,Kt as w,Qt as x,Xt as y};
