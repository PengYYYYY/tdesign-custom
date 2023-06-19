import{n as o,m as s,V as g}from"./index.7ed388d9.js";import{c as E,a as B}from"./dep-f3b31c2b.94166270.js";import{L}from"./lock-on.fd10db79.js";import{u as m,_ as f}from"./use-size-props.363c09d5.js";import{_ as u,I as h}from"./icon.c86fb0b5.js";import{C as z,a as R}from"./chevron-right.c86a4af4.js";import{C as W}from"./close.e86225e5.js";import{P as U}from"./prism.2871a942.js";/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */E(function(e,n){(function(t,r){e.exports=r()})(B,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var a=["th","st","nd","rd"],i=r%100;return"["+r+(a[(i-20)%10]||a[i]||a[0])+"]"}}})});var l={pagination:{itemsPerPage:"{size} / page",jumpTo:"jump to",page:"",total:"{total} items"},cascader:{empty:"Empty Data",loadingText:"loading...",placeholder:"please select"},calendar:{yearSelection:"{year}",monthSelection:"{month}",yearRadio:"year",monthRadio:"month",hideWeekend:"Hide Week",showWeekend:"Show Week",today:"Today",thisMonth:"This Month",week:"Monday,Tuesday,Wedsday,Thuresday,Friday,Staturday,Sunday",cellMonth:"January,February,March,April,May,June,July,August,September,October,November,December"},transfer:{title:"{checked} / {total}",empty:"Empty Data",placeholder:"enter keyworkd to search"},timePicker:{dayjsLocale:"en",now:"Now",confirm:"Confirm",anteMeridiem:"AM",postMeridiem:"PM",placeholder:"please select"},dialog:{confirm:"Confirm",cancel:"Cancel"},drawer:{confirm:"Confirm",cancel:"Cancel"},popconfirm:{confirm:{content:"OK"},cancel:{content:"Cancel"}},table:{empty:"Empty Data",loadingText:"loading...",loadingMoreText:"loading more",filterInputPlaceholder:"",sortAscendingOperationText:"click to sort ascending",sortCancelOperationText:"click to cancel sorting",sortDescendingOperationText:"click to sort descending",clearFilterResultButtonText:"Clear",columnConfigButtonText:"Column Config",columnConfigTitleText:"Table Column Config",columnConfigDescriptionText:"Please select columns to show them in the table",confirmText:"Confirm",cancelText:"Cancel",resetText:"Reset",selectAllText:"Select All",searchResultText:'Search "{result}". Find {count} items.'},select:{empty:"Empty Data",loadingText:"loading...",placeholder:"please select"},tree:{empty:"Empty Data"},treeSelect:{empty:"Empty Data",loadingText:"loading...",placeholder:"please select"},datePicker:{dayjsLocale:"en",placeholder:{date:"select date",month:"select month",year:"select year"},weekdays:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],quarters:["Q1","Q2","Q3","Q4"],rangeSeparator:" - ",direction:"ltr",format:"YYYY-MM-DD",dayAriaLabel:"D",yearAriaLabel:"Y",monthAriaLabel:"M",weekAbbreviation:"W",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",nextYear:"Next Year",preYear:"Last Year",nextMonth:"Next Month",preMonth:"Last Month",preDecade:"Last Decade",nextDecade:"Next Decade",now:"Now"},upload:{sizeLimitMessage:"File is too large to upload. {sizeLimit}",cancelUploadText:"Cancel",triggerUploadText:{fileInput:"Upload",image:"Click to upload",normal:"Upload",reupload:"ReUpload",continueUpload:"Continue Upload",delete:"Delete",uploading:"Uploading"},dragger:{dragDropText:"Drop hear",draggingText:"Drag file to this area to upload",clickAndDragText:'Click "Upload" or Drag file to this area to upload'},file:{fileNameText:"filename",fileSizeText:"size",fileStatusText:"status",fileOperationText:"operation",fileOperationDateText:"date"},progress:{uploadingText:"Uploading",waitingText:"Waiting",failText:"Failed",successText:"Success"}},form:{errorMessage:{date:"${name} is invalid",url:"${name} is invalid",required:"${name} is required",max:"${name} must be at least ${validate} characters",min:"${name} cannot be longer than ${validate} characters",len:"${name} must be exactly ${validate} characters",enum:"${name} must be one of ${validate}",idcard:"${name} is invalid",telnumber:"${name} is invalid",pattern:"${name} is invalid",validator:"${name} is invalid",boolean:"${name} is not a boolean",number:"${name} must be a number"}},input:{placeholder:"please enter"},list:{loadingText:"loading...",loadingMoreText:"loading more"},alert:{expandText:"expand",collapseText:"collapse"},anchor:{copySuccessText:"copy the link successfully",copyText:"copy link"},colorPicker:{swatchColorTitle:"System Default",recentColorTitle:"Recently Used",clearConfirmText:"Clear recently used colors?"},guide:{finishButtonProps:{content:"Finish",theme:"primary"},nextButtonProps:{content:"Next Step",theme:"primary"},skipButtonProps:{content:"Skip",theme:"default"},prevButtonProps:{content:"Last Step",theme:"default"},image:{errorText:"unable to load",loadingText:"loading"},imageViewer:{errorText:"unable to load",mirrorTipText:"mirror",rotateTipText:"rotate",originalSizeTipText:"original"}}},V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-config-provider",{attrs:{"global-config":e.globalConfig}},[t("t-space",{attrs:{direction:"vertical"}},[t("p",[e._v("\u4F7F\u7528"),t("code",[e._v("t-config-provider")]),e._v("\u5305\u88F9\u4E1A\u52A1\u529F\u80FD\u7684\u6700\u5916\u5C42\u7EC4\u4EF6\uFF0C\u70B9\u51FB\u4E0B\u65B9\u56FE\u6807\u67E5\u770B\u793A\u4F8B\u4EE3\u7801")]),t("p",[e._v("\u82F1\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A"),t("code",[e._v("import enConfig from 'tdesign-vue/es/locale/en_US';")])]),t("p",[e._v("\u4E2D\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A"),t("code",[e._v("import zhConfig from 'tdesign-vue/es/locale/zh_CN';")])]),t("p",[e._v("\u65E5\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A"),t("code",[e._v("import jpConfig from 'tdesign-vue/es/locale/ja_JP';")])]),t("p",[e._v("\u97E9\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A"),t("code",[e._v("import koConfig from 'tdesign-vue/es/locale/ko_KR';")])])])],1)},Y=[];const K={data(){return{globalConfig:s(l,{calendar:{},table:{},pagination:{}})}}},b={};var J=o(K,V,Y,!1,G,null,null,null);function G(e){for(let n in b)this[n]=b[n]}const q=function(){return J.exports}();var H=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-config-provider",{staticStyle:{padding:"16px"},attrs:{globalConfig:e.globalConfig}},[t("t-pagination",{attrs:{total:36,"show-jumper":"",maxPageBtn:5},model:{value:e.current,callback:function(r){e.current=r},expression:"current"}})],1)},Q=[];const Z={data(){return{current:1,globalConfig:s(l,{pagination:{itemsPerPage:"{size} / page",jumpTo:"jump to",page:"",total:"Total {total} items"}})}}},y={};var X=o(Z,H,Q,!1,tt,"d186c306",null,null);function tt(e){for(let n in y)this[n]=y[n]}const et=function(){return X.exports}();var nt=["size"];function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?C(Object(t),!0).forEach(function(r){f(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var rt={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M4.98 10.31L7.3 8 5 5.69l.7-.7L8 7.28 10.31 5l.7.7L8.72 8l2.3 2.31-.7.7L8 8.72 5.69 11l-.7-.7z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M8 1a7 7 0 110 14A7 7 0 018 1zm0 1a6 6 0 100 12A6 6 0 008 2z",fillOpacity:.9}}]},at=g.extend({name:"CloseCircleIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var r=t.props,a=t.data,i=r.size,c=u(r,nt),d=m(i),_=d.className,v=d.style,p=S(S({},c||{}),{},{id:"close-circle",icon:rt,staticClass:_,style:v});return a.props=p,n(h,a)}}),ot=["size"];function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?T(Object(t),!0).forEach(function(r){f(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var it={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8.5 2h-1v9h1V2zm.1 10.8H7.4V14h1.2v-1.2z",fillOpacity:.9}}]},dt=g.extend({name:"ErrorIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var r=t.props,a=t.data,i=r.size,c=u(r,ot),d=m(i),_=d.className,v=d.style,p=x(x({},c||{}),{},{id:"error",icon:it,staticClass:_,style:v});return a.props=p,n(h,a)}}),st=["size"];function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?k(Object(t),!0).forEach(function(r){f(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var lt={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 11v-1h4v1H6z",fillOpacity:.9}},{tag:"path",attrs:{fill:"currentColor",d:"M4.5 6V5a3.5 3.5 0 117 0h-1a2.5 2.5 0 00-5 0v1H13c.28 0 .5.22.5.5v7a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5v-7c0-.28.22-.5.5-.5h1.5zm-1 7h9V7h-9v6z",fillOpacity:.9}}]},ct=g.extend({name:"LockOffIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var r=t.props,a=t.data,i=r.size,c=u(r,st),d=m(i),_=d.className,v=d.style,p=w(w({},c||{}),{},{id:"lock-off",icon:lt,staticClass:_,style:v});return a.props=p,n(h,a)}}),_t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-config-provider",{attrs:{globalConfig:e.globalConfig}},[t("t-input",{attrs:{type:"password","default-value":"520 TDesign"}})],1)},vt=[];const pt={data(){return{globalConfig:{icon:{BrowseOffIcon:L,BrowseIcon:ct}}}}},N={};var gt=o(pt,_t,vt,!1,mt,null,null,null);function mt(e){for(let n in N)this[n]=N[n]}const ft=function(){return gt.exports}();var ut=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-config-provider",{staticClass:"tdesign-demo-item__locale-provider-date-picker",attrs:{globalConfig:e.globalConfig}},[t("t-date-picker",{attrs:{mode:"date",firstDayOfWeek:7}}),t("br"),t("br"),t("t-date-picker",{attrs:{mode:"date",range:""}}),t("br"),t("br"),t("t-date-picker",{attrs:{mode:"month"}}),t("br"),t("br"),t("t-date-picker",{attrs:{mode:"month",range:""}}),t("br"),t("br"),t("t-date-picker",{attrs:{mode:"year"}}),t("br"),t("br"),t("t-date-picker",{attrs:{mode:"year",range:""}}),t("br"),t("br")],1)},ht=[];const bt=s(l,{placeholder:{date:"select date",month:"select month",year:"select year"},weekdays:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rangeSeparator:" ~ ",format:"DD/MM/YYYY",yearAriaLabel:"",now:"Now",selectTime:"Select Time",selectDate:"Select Date"}),yt={data(){return{globalConfig:{datePicker:bt}}}},D={};var Ct=o(yt,ut,ht,!1,St,"37f9904a",null,null);function St(e){for(let n in D)this[n]=D[n]}const Tt=function(){return Ct.exports}();var xt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-config-provider",{staticStyle:{padding:"16px"},attrs:{globalConfig:e.globalConfig}},[t("t-calendar")],1)},kt=[];const O=["January","February","March","April","May","June","July","August","September","October","November","December"],wt=s(l,{calendar:{yearSelection:"{year}",firstDayOfWeek:7,monthSelection:({month:e})=>O[e-1],yearRadio:"Year",monthRadio:"Month",hideWeekend:"Hide Weekend",showWeekend:"Show Weekend",today:"Today",thisMonth:"This Month",week:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].join(),cellMonth:O.join(),fillWithZero:!1,controllerConfig:{year:{visible:!0,selectProps:{size:"small"}},month:{visible:!0,selectProps:{size:"small"}},mode:{visible:!0,radioGroupProps:{size:"small"}},weekend:{visible:!0,showWeekendButtonProps:{size:"small"},hideWeekendButtonProps:{size:"small"}},current:{visible:!0,currentDayButtonProps:{theme:"warning",size:"small"},currentMonthButtonProps:{theme:"success",size:"small"}}}}}),Nt={data(){return{globalConfig:wt}}},P={};var Dt=o(Nt,xt,kt,!1,Ot,"0894fc62",null,null);function Ot(e){for(let n in P)this[n]=P[n]}const Pt=function(){return Dt.exports}();var jt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-config-provider",{staticStyle:{padding:"16px"},attrs:{globalConfig:e.globalConfig}},[t("div",{staticStyle:{width:"480px"}},[t("t-dialog",{attrs:{header:"Title",body:"Would you like to be my friends\uFF1F",mode:"normal",theme:"default",visible:""}}),t("br"),t("t-dialog",{attrs:{header:"confirm",body:"Would you like to be my friends\uFF1F",mode:"normal",theme:"info",visible:""}}),t("br"),t("t-dialog",{attrs:{header:"confirm",body:"Would you like to be my friends\uFF1F",mode:"normal",theme:"warning",visible:""}}),t("br"),t("t-dialog",{attrs:{header:"confirm",body:"Would you like to be my friends\uFF1F",mode:"normal",theme:"danger",visible:""}}),t("br"),t("t-dialog",{attrs:{header:"confirm",body:"Would you like to be my friends\uFF1F",mode:"normal",theme:"success",visible:""}})],1)])},Mt=[];const It={data(){return{globalConfig:{dialog:{confirm:"confirm",cancel:{theme:"default",variant:"outline",content:"cancel"},confirmBtnTheme:{default:"primary",info:"primary",warning:"warning",danger:"danger",success:"success"}}}}}},j={};var $t=o(It,jt,Mt,!1,At,"2ff88b20",null,null);function At(e){for(let n in j)this[n]=j[n]}const zt=function(){return $t.exports}();var Ft=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-config-provider",{staticStyle:{padding:"16px"},attrs:{globalConfig:e.globalConfig}},[t("div",{staticClass:"tdesign-demo-item__config-provider-base"},[t("t-popconfirm",{attrs:{theme:"default",content:"Do you want to delete"}},[t("t-button",[e._v("Default")])],1),t("t-popconfirm",{attrs:{theme:"warning",content:"Do you want to delete"}},[t("t-button",{attrs:{theme:"warning"}},[e._v("Warning")])],1),t("t-popconfirm",{attrs:{theme:"danger",content:"Do you want to delete"}},[t("t-button",{attrs:{theme:"danger"}},[e._v("Danger")])],1),t("t-button",{attrs:{theme:"primary"},on:{click:function(r){e.drawerVisible=!0}}},[e._v("Open Drawer")]),t("t-drawer",{attrs:{visible:e.drawerVisible,header:"Drawer",onConfirm:function(){return e.drawerVisible=!1},closeBtn:!0},on:{"update:visible":function(r){e.drawerVisible=r}}},[t("p",[e._v("This is a controlled drawer")])])],1)])},Et=[];const Bt={data(){return{drawerVisible:!1,globalConfig:{popconfirm:{confirmBtnTheme:{default:"primary",warning:"warning",danger:"danger"},confirm:"OK",cancel:{theme:"default",variant:"outline",content:"Cancel"}},drawer:{confirm:"confirm",cancel:"cancel"}}}}},M={};var Lt=o(Bt,Ft,Et,!1,Rt,"27cd2960",null,null);function Rt(e){for(let n in M)this[n]=M[n]}const Wt=function(){return Lt.exports}(),Ut=[{colKey:"type",title:"Type",sorter:!0},{colKey:"platform",title:"Platform",filter:{type:"single"}},{colKey:"property",title:"Property",sorter:!0,filter:{type:"single"}}],Vt=[{type:"Array",platform:"Vue(PC)",property:"A"},{type:"String",platform:"React(PC)",property:"B"},{type:"Object",platform:"Miniprogram",property:"C"}],Yt={data(){return this.$createElement,{globalConfig:s(l,{table:{empty:"Empty Data",expandIcon:e=>e&&e(z),sortIcon:e=>e&&e(R,{attrs:{size:"18px"}})}}),columns:Ut,data:Vt}},methods:{expandedRow(e){return e("div",["This is expanded row info"])}}};var Kt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-config-provider",{staticStyle:{padding:"16px"},attrs:{globalConfig:e.globalConfig}},[t("t-table",{attrs:{data:[],columns:e.columns,bordered:"",rowKey:"property"}}),t("br"),t("br"),t("t-table",{attrs:{data:e.data,columns:e.columns,expandedRow:e.expandedRow,expandOnRowClick:"",rowKey:"property"}}),t("br"),t("br")],1)},Jt=[];const I={};var Gt=o(Yt,Kt,Jt,!1,qt,"5b053e2e",null,null);function qt(e){for(let n in I)this[n]=I[n]}const Ht=function(){return Gt.exports}(),F=[];for(let e=0;e<20;e++)F.push({value:e.toString(),label:`content ${e+1}`,disabled:e%4<1});const Qt=[{label:"Shanghai",value:"shanghai"},{label:"Beijing",value:"beijing"},{label:"Shenzhen",value:"shenzhen"}],Zt=[{label:"1",value:"1",children:[{label:"1.1",value:"1.1"},{label:"1.2",value:"1.2"}]},{label:"2",value:"2",children:[{label:"2.1",value:"2.1"},{label:"2.2",value:"2.2"}]}],Xt=[{value:"1",label:"Department A",children:[{label:"1.1 custom fold icon",value:"1.1"},{label:"1.2 custom fold icon",value:"1.2"}]},{value:"2",label:"Department B",children:[{label:"2.1"},{label:"2.2"}]}],te={data(){return this.$createElement,{globalConfig:s(l,{image:{replaceImageSrc(e){return console.log(e),"https://tdesign.gtimg.com/demo/demo-image-1.png"}},form:{requiredMark:!1},transfer:{title:"{checked} / {total}",empty:"Empty Data",placeholder:"type keyword to search"},tree:{empty:"Tree Empty Data",folderIcon:e=>e&&e(z,{attrs:{size:"18px"}})},select:{empty:"Empty Data",loadingText:"loading...",clearIcon:e=>e&&e(W)},treeSelect:{empty:"Empty Data",loadingText:"loading..."},timePicker:{now:"Now",confirm:"Confirm",anteMeridiem:"AM",postMeridiem:"PM",placeholder:"select time"},tag:{closeIcon:e=>e&&e(at)},cascader:{empty:"empty data",loadingText:"loading...",placeholder:"select cascader data"},steps:{errorIcon:e=>e&&e(dt)}}),transferList:F,transferChecked:[],transferTargetValue:[],options1:Qt.concat(),treeValue:"",treeOptions:Zt,treeData:Xt,formData:{username:"",password:""},rules:{username:[{required:!0,message:"\u6B64\u9879\u5FC5\u586B",type:"error"}]}}}};var ee=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-config-provider",{staticClass:"tdesign-demo-item--locale-provider-base",attrs:{globalConfig:e.globalConfig}},[t("t-form",{attrs:{data:e.formData,rules:e.rules}},[t("t-form-item",{attrs:{label:"User Name",name:"username"}},[t("t-input",{staticStyle:{width:"400px"},attrs:{placeholder:"There is no required mark on the left of this input in Form"},model:{value:e.formData.username,callback:function(r){e.$set(e.formData,"username",r)},expression:"formData.username"}})],1),t("t-form-item",{attrs:{label:"Password",name:"password",requiredMark:""}},[t("t-input",{staticStyle:{width:"400px"},attrs:{type:"password",placeholder:"There is required mark on the left of this input in Form"},model:{value:e.formData.password,callback:function(r){e.$set(e.formData,"password",r)},expression:"formData.password"}})],1)],1),t("br"),t("br"),t("t-transfer",{attrs:{data:e.transferList,checked:e.transferChecked,search:!0},on:{"update:checked":function(r){e.transferChecked=r}},model:{value:e.transferTargetValue,callback:function(r){e.transferTargetValue=r},expression:"transferTargetValue"}}),t("br"),t("br"),t("t-select",{staticStyle:{width:"400px"},attrs:{options:e.options1,placeholder:"see clear icon, it is configurable",clearable:""}}),t("br"),t("br"),t("t-select",{staticStyle:{width:"400px"},attrs:{options:[],placeholder:"select without data in Select"}}),t("br"),t("br"),t("t-select",{staticStyle:{width:"400px"},attrs:{placeholder:"see loading text in Select",loading:""}}),t("br"),t("br"),t("t-cascader",{staticStyle:{width:"400px"},attrs:{options:[]}}),t("br"),t("br"),t("t-cascader",{staticStyle:{width:"400px"},attrs:{options:[],placeholder:"select without data in Cascader"}}),t("br"),t("br"),t("t-tree-select",{staticStyle:{width:"400px"},attrs:{data:[],placeholder:"see empty data in TreeSelect"}}),t("br"),t("br"),t("t-tree-select",{staticStyle:{width:"400px"},attrs:{data:[],loading:"",placeholder:"see loading text in TreeSelect"}}),t("br"),t("br"),t("t-tree-select",{staticStyle:{width:"400px"},attrs:{data:e.treeOptions,filterable:"",placeholder:"tree select",clearable:""},model:{value:e.treeValue,callback:function(r){e.treeValue=r},expression:"treeValue"}}),t("br"),t("br"),t("t-time-picker",{attrs:{placeholder:"select time",format:"hh:mm:ss a",allowInput:""}}),t("br"),t("br"),t("br"),t("t-tag",{attrs:{theme:"primary",closable:""}},[e._v("Feature Tag")]),t("t-tag",{attrs:{theme:"success",closable:""}},[e._v("Feature Tag")]),t("t-tag",{attrs:{theme:"warning",closable:""}},[e._v("Feature Tag")]),t("t-tag",{attrs:{theme:"danger",closable:""}},[e._v("Feature Tag")]),t("br"),t("br"),t("t-tree",{attrs:{data:[]}}),t("br"),t("br"),t("t-tree",{attrs:{data:e.treeData,transition:""}}),t("br"),t("br"),t("br"),t("t-steps",{attrs:{current:2,layout:"vertical"}},[t("t-step-item",{attrs:{title:"First Step",content:"You need to click the blue button"}}),t("t-step-item",{attrs:{title:"Second Step",content:"Fill your base information into the form"}}),t("t-step-item",{attrs:{title:"Error Step",status:"error",content:"Something Wrong! Custom Error Icon!"}}),t("t-step-item",{attrs:{title:"Last Step",content:"You haven't finish this step."}})],1),t("br"),t("br"),t("t-image",{staticStyle:{width:"300px"},attrs:{src:"1.jpg",fit:"scale-down"}})],1)},ne=[];const $={};var re=o(te,ee,ne,!1,ae,"3d6c2024",null,null);function ae(e){for(let n in $)this[n]=$[n]}const oe=function(){return re.exports}(),ie=`<template>
  <t-config-provider :global-config="globalConfig">
    <t-space direction="vertical">
      <p>\u4F7F\u7528<code>t-config-provider</code>\u5305\u88F9\u4E1A\u52A1\u529F\u80FD\u7684\u6700\u5916\u5C42\u7EC4\u4EF6\uFF0C\u70B9\u51FB\u4E0B\u65B9\u56FE\u6807\u67E5\u770B\u793A\u4F8B\u4EE3\u7801</p>
      <p>\u82F1\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import enConfig from 'tdesign-vue/es/locale/en_US';</code></p>
      <p>\u4E2D\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import zhConfig from 'tdesign-vue/es/locale/zh_CN';</code></p>
      <p>\u65E5\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import jpConfig from 'tdesign-vue/es/locale/ja_JP';</code></p>
      <p>\u97E9\u6587\u8BED\u8A00\u5305\u5F15\u5165\u8DEF\u5F84\uFF1A<code>import koConfig from 'tdesign-vue/es/locale/ko_KR';</code></p>
    </t-space>
  </t-config-provider>
</template>

<script>
import merge from 'lodash/merge';
import enConfig from 'tdesign-vue/es/locale/en_US';

export default {
  data() {
    return {
      // \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u5F15\u5165\u82F1\u6587\u8BED\u8A00\u914D\u7F6E\u5305 enConfig
      globalConfig: merge(enConfig, {
        // \u53EF\u4EE5\u5728\u6B64\u5904\u5B9A\u4E49\u66F4\u591A\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF0C\u5177\u4F53\u53EF\u914D\u7F6E\u5185\u5BB9\u53C2\u770B API \u6587\u6863
        calendar: {},
        table: {},
        pagination: {},
      }),
    };
  },
};
<\/script>
`,de=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <t-pagination v-model="current" :total="36" show-jumper :maxPageBtn="5" />
  </t-config-provider>
</template>

<script>
import merge from 'lodash/merge';
import enConfig from 'tdesign-vue/es/locale/en_US';

export default {
  data() {
    return {
      current: 1,
      // \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
      globalConfig: merge(enConfig, {
        pagination: {
          itemsPerPage: '{size} / page',
          jumpTo: 'jump to',
          page: '',
          total: 'Total {total} items',
        },
      }),
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,se=`<template>
  <t-config-provider :globalConfig="globalConfig">
    <t-input type="password" default-value="520 TDesign" />
  </t-config-provider>
</template>

<script>
import { LockOnIcon, LockOffIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      globalConfig: {
        icon: {
          BrowseOffIcon: LockOnIcon,
          BrowseIcon: LockOffIcon,
        },
      },
    };
  },
};
<\/script>
`,le=`<template>
  <t-config-provider :globalConfig="globalConfig" class="tdesign-demo-item__locale-provider-date-picker">
    <t-date-picker mode="date" :firstDayOfWeek="7" />
    <br /><br />
    <t-date-picker mode="date" range />
    <br /><br />
    <t-date-picker mode="month" />
    <br /><br />
    <t-date-picker mode="month" range />
    <br /><br />
    <t-date-picker mode="year" />
    <br /><br />
    <t-date-picker mode="year" range />
    <br /><br />
  </t-config-provider>
</template>

<script>
import merge from 'lodash/merge';
import enConfig from 'tdesign-vue/es/locale/en_US';
// import dayjs from 'dayjs';

// \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
const DATE_PICK_CONFIGS = merge(enConfig, {
  placeholder: {
    date: 'select date',
    month: 'select month',
    year: 'select year',
  },
  weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  rangeSeparator: ' ~ ',
  format: 'DD/MM/YYYY',
  yearAriaLabel: '',
  now: 'Now',
  selectTime: 'Select Time',
  selectDate: 'Select Date',
  // \u6682\u4E0D\u652F\u6301\uFF0C\u8BA8\u8BBA\u786E\u8BA4\u4E2D
  // presets: {
  //   Today: 'Today',
  //   'Last 2 days': [dayjs().subtract(2, 'day'), dayjs()],
  //   'Last 7 days': [dayjs().subtract(7, 'day'), dayjs()],
  //   'Last 14 days': [dayjs().subtract(14, 'day'), dayjs()],
  //   'Last 30 days': [dayjs().subtract(30, 'day'), dayjs()],
  //   'Next 30 Days': [dayjs().subtract(30, 'day'), dayjs()],
  //   'Month to date': [dayjs().subtract(1, 'month'), dayjs()],
  // },
});

export default {
  data() {
    return {
      globalConfig: {
        datePicker: DATE_PICK_CONFIGS,
      },
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-item__locale-provider-date-picker {
  padding: 16px;
}
.tdesign-demo-item__locale-provider-date-picker .t-date-picker {
  width: 400px;
}
</style>
`,ce=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <t-calendar></t-calendar>
  </t-config-provider>
</template>

<script>
import merge from 'lodash/merge';
import enConfig from 'tdesign-vue/es/locale/en_US';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
const GLOBAL_CONFIG = merge(enConfig, {
  calendar: {
    yearSelection: '{year}',
    // 1 \u8868\u793A\u5468\u4E00\uFF1B7 \u8868\u793A\u5468\u65E5
    firstDayOfWeek: 7,
    monthSelection: ({ month }) => MONTHS[month - 1],
    yearRadio: 'Year',
    monthRadio: 'Month',
    hideWeekend: 'Hide Weekend',
    showWeekend: 'Show Weekend',
    today: 'Today',
    thisMonth: 'This Month',
    week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].join(),
    cellMonth: MONTHS.join(),
    fillWithZero: false,
    controllerConfig: {
      year: {
        visible: true,
        selectProps: {
          size: 'small',
        },
      },
      month: {
        visible: true,
        selectProps: {
          size: 'small',
        },
      },
      mode: {
        visible: true,
        radioGroupProps: {
          size: 'small',
        },
      },
      weekend: {
        visible: true,
        showWeekendButtonProps: {
          size: 'small',
        },
        hideWeekendButtonProps: {
          size: 'small',
        },
      },
      current: {
        visible: true,
        currentDayButtonProps: {
          theme: 'warning',
          size: 'small',
        },
        currentMonthButtonProps: {
          theme: 'success',
          size: 'small',
        },
      },
    },
  },
});

export default {
  data() {
    return {
      globalConfig: GLOBAL_CONFIG,
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,_e=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <div style="width: 480px">
      <t-dialog header="Title" body="Would you like to be my friends\uFF1F" mode="normal" theme="default" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="info" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="warning" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="danger" visible />
      <br />
      <t-dialog header="confirm" body="Would you like to be my friends\uFF1F" mode="normal" theme="success" visible />
    </div>
  </t-config-provider>
</template>

<script>
export default {
  data() {
    return {
      globalConfig: {
        dialog: {
          confirm: 'confirm',
          // cancel: 'cancel',
          cancel: {
            theme: 'default',
            variant: 'outline',
            content: 'cancel',
          },
          confirmBtnTheme: {
            default: 'primary',
            info: 'primary',
            warning: 'warning',
            danger: 'danger',
            success: 'success',
          },
        },
      },
    };
  },
};
<\/script>
<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,ve=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <div class="tdesign-demo-item__config-provider-base">
      <t-popconfirm theme="default" content="Do you want to delete">
        <t-button>Default</t-button>
      </t-popconfirm>
      <t-popconfirm theme="warning" content="Do you want to delete">
        <t-button theme="warning">Warning</t-button>
      </t-popconfirm>
      <t-popconfirm theme="danger" content="Do you want to delete">
        <t-button theme="danger">Danger</t-button>
      </t-popconfirm>

      <t-button theme="primary" @click="drawerVisible = true">Open Drawer</t-button>

      <t-drawer
        :visible.sync="drawerVisible"
        header="Drawer"
        :onConfirm="() => (drawerVisible = false)"
        :closeBtn="true"
      >
        <p>This is a controlled drawer</p>
      </t-drawer>
    </div>
  </t-config-provider>
</template>

<script>
export default {
  data() {
    return {
      drawerVisible: false,
      globalConfig: {
        popconfirm: {
          confirmBtnTheme: {
            default: 'primary',
            warning: 'warning',
            danger: 'danger',
          },
          confirm: 'OK',
          cancel: {
            theme: 'default',
            variant: 'outline',
            content: 'Cancel',
          },
        },
        drawer: {
          confirm: 'confirm',
          cancel: 'cancel',
        },
      },
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-item__config-provider-base {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.tdesign-demo-item__config-provider-base .t-button {
  margin-right: 36px;
}
</style>
`,pe=`<template>
  <t-config-provider :globalConfig="globalConfig" style="padding: 16px">
    <!-- \u5168\u5C40\u914D\u7F6E\uFF1A\u7A7A\u6570\u636E\u5448\u73B0\uFF0C\u6F14\u793A -->
    <t-table :data="[]" :columns="columns" bordered rowKey="property"></t-table>
    <br /><br />

    <!-- \u5168\u5C40\u914D\u7F6E\uFF1A\u81EA\u5B9A\u4E49\u5C55\u5F00\u56FE\u6807\u548C\u6392\u5E8F\u56FE\u6807\uFF0C\u6F14\u793A -->
    <t-table :data="data" :columns="columns" :expandedRow="expandedRow" expandOnRowClick rowKey="property"></t-table>
    <br /><br />
  </t-config-provider>
</template>

<script lang="jsx">
import { ChevronRightIcon, CaretDownSmallIcon /** , ChevronDownIcon */ } from 'tdesign-icons-vue';
import merge from 'lodash/merge';
import enConfig from 'tdesign-vue/es/locale/en_US';

const columns = [
  {
    colKey: 'type',
    title: 'Type',
    sorter: true,
  },
  {
    colKey: 'platform',
    title: 'Platform',
    filter: {
      type: 'single',
    },
  },
  {
    colKey: 'property',
    title: 'Property',
    sorter: true,
    filter: {
      type: 'single',
    },
  },
];

const data = [
  { type: 'Array', platform: 'Vue(PC)', property: 'A' },
  { type: 'String', platform: 'React(PC)', property: 'B' },
  { type: 'Object', platform: 'Miniprogram', property: 'C' },
];

export default {
  data() {
    return {
      // \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
      globalConfig: merge(enConfig, {
        table: {
          // \u652F\u6301 String \u548C Function \u4E24\u79CD\u6570\u636E\u7C7B\u578B
          empty: 'Empty Data',
          // empty can also be a function
          // empty: (h) => h && <div class='custom-empty-content'>Empty Data</div>,
          expandIcon: (h) => h && <ChevronRightIcon />,
          sortIcon: (h) => h && <CaretDownSmallIcon size="18px" />,

          // More config
          // filterIcon: () => <span>Filter</span>,
          // filterInputPlaceholder: 'Enter Keyword',
          // loadingMoreText: 'Load More',
          // loadingText: 'Loading',
          // sortAscendingOperationText: 'ascending sort',
          // sortCancelOperationText: 'cancel sort',
          // sortDescendingOperationText: 'descending sort',
          // treeExpandAndFoldIcon: (h, { type }) => type === 'expand' ? <ChevronRightIcon /> : <ChevronDownIcon />,
        },
      }),
      columns,
      data,
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    expandedRow(h) {
      return <div>This is expanded row info</div>;
    },
  },
};
<\/script>
<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}
</style>
`,ge=`<template>
  <t-config-provider :globalConfig="globalConfig" class="tdesign-demo-item--locale-provider-base">
    <t-form :data="formData" :rules="rules">
      <t-form-item label="User Name" name="username">
        <t-input
          v-model="formData.username"
          style="width: 400px"
          placeholder="There is no required mark on the left of this input in Form"
        ></t-input>
      </t-form-item>
      <t-form-item label="Password" name="password" requiredMark>
        <t-input
          v-model="formData.password"
          type="password"
          style="width: 400px"
          placeholder="There is required mark on the left of this input in Form"
        ></t-input>
      </t-form-item>
    </t-form>
    <br /><br />

    <t-transfer :data="transferList" v-model="transferTargetValue" :checked.sync="transferChecked" :search="true" />
    <br /><br />

    <t-select :options="options1" placeholder="see clear icon, it is configurable" clearable style="width: 400px" />
    <br /><br />
    <t-select :options="[]" placeholder="select without data in Select" style="width: 400px" />
    <br /><br />
    <t-select placeholder="see loading text in Select" loading style="width: 400px" />
    <br /><br />

    <!-- \u89C2\u5BDF placeholder -->
    <t-cascader :options="[]" style="width: 400px" />
    <br /><br />
    <!-- \u89C2\u5BDF\u7A7A\u6570\u636E\u6587\u672C\u5448\u73B0 -->
    <t-cascader :options="[]" placeholder="select without data in Cascader" style="width: 400px" />
    <br /><br />
    <!-- \u89C2\u5BDF\u52A0\u8F7D\u6587\u672C -->
    <!-- <t-cascader placeholder="see loading text in Cascader" loading style="width: 400px;" /> -->
    <!-- <br><br> -->

    <t-tree-select :data="[]" placeholder="see empty data in TreeSelect" style="width: 400px" />
    <br /><br />
    <t-tree-select :data="[]" loading placeholder="see loading text in TreeSelect" style="width: 400px" />
    <br /><br />
    <t-tree-select
      v-model="treeValue"
      :data="treeOptions"
      filterable
      placeholder="tree select"
      style="width: 400px"
      clearable
    />
    <br /><br />

    <t-time-picker placeholder="select time" format="hh:mm:ss a" allowInput />
    <br /><br /><br />

    <!-- \u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u793A\u4F8B -->
    <t-tag theme="primary" closable>Feature Tag</t-tag>
    <t-tag theme="success" closable>Feature Tag</t-tag>
    <t-tag theme="warning" closable>Feature Tag</t-tag>
    <t-tag theme="danger" closable>Feature Tag</t-tag>
    <br /><br />

    <!-- \u6570\u7EC4\u4EF6\u7A7A\u6570\u636E -->
    <t-tree :data="[]" />
    <br /><br />
    <!-- \u6570\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u5C42\u7EA7\u56FE\u6807 -->
    <t-tree :data="treeData" transition />
    <br /><br />
    <br />
    <t-steps :current="2" layout="vertical">
      <t-step-item title="First Step" content="You need to click the blue button"></t-step-item>
      <t-step-item title="Second Step" content="Fill your base information into the form"></t-step-item>
      <t-step-item title="Error Step" status="error" content="Something Wrong! Custom Error Icon!"></t-step-item>
      <t-step-item title="Last Step" content="You haven't finish this step."></t-step-item>
    </t-steps>
    <br /><br />

    <t-image src="1.jpg" fit="scale-down" style="width: 300px"></t-image>
  </t-config-provider>
</template>

<script lang="jsx">
import {
  ErrorIcon, ChevronRightIcon, CloseIcon, CloseCircleIcon,
} from 'tdesign-icons-vue';
import merge from 'lodash/merge';
import enConfig from 'tdesign-vue/es/locale/en_US';

const transferList = [];
for (let i = 0; i < 20; i++) {
  transferList.push({
    value: i.toString(),
    label: \`content \${i + 1}\`,
    disabled: i % 4 < 1,
  });
}

const SELECT_OPTIONS = [
  { label: 'Shanghai', value: 'shanghai' },
  { label: 'Beijing', value: 'beijing' },
  { label: 'Shenzhen', value: 'shenzhen' },
];

const TREE_OPTIONS = [
  {
    label: '1',
    value: '1',
    children: [
      { label: '1.1', value: '1.1' },
      { label: '1.2', value: '1.2' },
    ],
  },
  {
    label: '2',
    value: '2',
    children: [
      { label: '2.1', value: '2.1' },
      { label: '2.2', value: '2.2' },
    ],
  },
];

const TREE_DATA = [
  {
    value: '1',
    label: 'Department A',
    children: [
      { label: '1.1 custom fold icon', value: '1.1' },
      { label: '1.2 custom fold icon', value: '1.2' },
    ],
  },
  { value: '2', label: 'Department B', children: [{ label: '2.1' }, { label: '2.2' }] },
];

export default {
  data() {
    return {
      // \u5168\u5C40\u7279\u6027\u914D\u7F6E\uFF0C\u53EF\u4EE5\u5F15\u5165\u82F1\u6587\u9ED8\u8BA4\u914D\u7F6E enConfig\uFF0C\u8FD8\u53EF\u4EE5\u5728\u9ED8\u8BA4\u914D\u7F6E\u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E
      globalConfig: merge(enConfig, {
        image: {
          // \u5168\u5C40\u66FF\u6362\u56FE\u7247\u5730\u5740
          replaceImageSrc(params) {
            console.log(params);
            return 'https://tdesign.gtimg.com/demo/demo-image-1.png';
          },
        },
        form: {
          requiredMark: false,
        },
        transfer: {
          title: '{checked} / {total}',
          empty: 'Empty Data',
          placeholder: 'type keyword to search',
        },
        tree: {
          empty: 'Tree Empty Data',
          folderIcon: (h) => h && <ChevronRightIcon size="18px" />,
        },
        select: {
          empty: 'Empty Data',
          loadingText: 'loading...',
          clearIcon: (h) => h && <CloseIcon />,
        },
        treeSelect: {
          empty: 'Empty Data',
          loadingText: 'loading...',
        },
        timePicker: {
          now: 'Now',
          confirm: 'Confirm',
          anteMeridiem: 'AM',
          postMeridiem: 'PM',
          placeholder: 'select time',
        },
        tag: {
          closeIcon: (h) => h && <CloseCircleIcon />,
        },
        cascader: {
          empty: 'empty data',
          loadingText: 'loading...',
          placeholder: 'select cascader data',
        },
        steps: {
          errorIcon: (h) => h && <ErrorIcon />,
        },
      }),
      transferList,
      transferChecked: [],
      transferTargetValue: [],
      options1: SELECT_OPTIONS.concat(),
      treeValue: '',
      treeOptions: TREE_OPTIONS,
      treeData: TREE_DATA,
      formData: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: '\u6B64\u9879\u5FC5\u586B', type: 'error' }],
      },
    };
  },
};
<\/script>
<style scoped>
.tdesign-demo-item--locale-provider-base {
  margin: 24px -120px 0 0;
}

.tdesign-demo-item--locale-provider-base /deep/ .t-transfer__list {
  width: 280px;
}

.tdesign-demo-item--locale-provider-base >>> .t-tag + .t-tag {
  margin-left: 36px;
}
</style>
`;var me=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("td-doc-content",{ref:"tdDocContent",attrs:{"page-status":"hidden"}},[t("td-doc-header",{ref:"tdDocHeader",attrs:{slot:"doc-header",spline:"explain",platform:"web"},slot:"doc-header"},[t("td-doc-badge",{attrs:{slot:"badge",label:"coverage",message:"0%"},slot:"badge"})],1),t("td-doc-tabs",{ref:"tdDocTabs",attrs:{tab:e.tab}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="demo",expression:"tab === 'demo'"}]},[t("div",{attrs:{name:"DEMO"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u56FD\u9645\u5316\u914D\u7F6E"}},[e._v("\u56FD\u9645\u5316\u914D\u7F6E")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#pagination-\u5206\u9875"}},[e._v("Pagination \u5206\u9875")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#input-\u5BC6\u7801\u6846"}},[e._v("Input \u5BC6\u7801\u6846")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#datepicker-\u65E5\u671F\u9009\u62E9\u5668"}},[e._v("DatePicker \u65E5\u671F\u9009\u62E9\u5668")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#calendar-\u65E5\u5386"}},[e._v("Calendar \u65E5\u5386")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#dialog-\u5BF9\u8BDD\u6846"}},[e._v("Dialog \u5BF9\u8BDD\u6846")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#popconfirm-\u6C14\u6CE1\u5BF9\u8BDD\u6846"}},[e._v("Popconfirm \u6C14\u6CE1\u5BF9\u8BDD\u6846")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#table-\u8868\u683C"}},[e._v("Table \u8868\u683C")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5176\u4ED6\u7EC4\u4EF6"}},[e._v("\u5176\u4ED6\u7EC4\u4EF6")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#\u5168\u5C40\u7EC4\u4EF6\u524D\u7F00"}},[e._v("\u5168\u5C40\u7EC4\u4EF6\u524D\u7F00")])])])]),t("h3",{attrs:{id:"\u56FD\u9645\u5316\u914D\u7F6E"}},[e._v("\u56FD\u9645\u5316\u914D\u7F6E "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u56FD\u9645\u5316\u914D\u7F6E"}})]),t("p",[e._v("TDesign \u652F\u6301\u56FD\u9645\u5316/\u591A\u8BED\u8A00\u914D\u7F6E\uFF0C\u76EE\u524D\u652F\u6301\u7684\u8BED\u8A00\u5305\u62EC:")]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u8BED\u8A00")]),t("th",[e._v("\u5BF9\u5E94\u6587\u4EF6")])])]),t("tbody",[t("tr",[t("td",[e._v("\u7B80\u4F53\u4E2D\u6587")]),t("td",[t("code",[e._v("zh_CN")])])]),t("tr",[t("td",[e._v("\u7E41\u4F53\u4E2D\u6587")]),t("td",[t("code",[e._v("zh_TW")])])]),t("tr",[t("td",[e._v("\u82F1\u8BED")]),t("td",[t("code",[e._v("en_US")])])]),t("tr",[t("td",[e._v("\u97E9\u8BED")]),t("td",[t("code",[e._v("ko_KR")])])]),t("tr",[t("td",[e._v("\u65E5\u8BED")]),t("td",[t("code",[e._v("ja_JP")])])]),t("tr",[t("td",[e._v("\u4FC4\u8BED")]),t("td",[t("code",[e._v("ru_RU")])])]),t("tr",[t("td",[e._v("\u610F\u5927\u5229\u8BED")]),t("td",[t("code",[e._v("it_IT")])])]),t("tr",[t("td",[e._v("\u963F\u62C9\u4F2F\u8BED")]),t("td",[t("code",[e._v("ar_KW")])])])])]),t("p",[e._v("\u5982\u679C\u4F60\u60F3\u8D21\u732E\u66F4\u591A\u8BED\u8A00\u5305\uFF0C\u6B22\u8FCE\u53C2\u8003 "),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-common/blob/develop/js/global-config/locale/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u5982\u4F55\u65B0\u589E\u8BED\u8A00\u5305")]),e._v(" \u53D1\u8D77 PR\u3002")]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--config-provider-global tdesign-demo-item--config-provider"},[t("td-doc-demo",{attrs:{code:e.DemoexampleglobalCode,"demo-name":"global",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"global","component-name":" config-provider",code:e.DemoexampleglobalCode}}),t("Codesandbox",{attrs:{"demo-name":"global","component-name":" config-provider",code:e.DemoexampleglobalCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleglobal")],1)])],1),t("h3",{attrs:{id:"pagination-\u5206\u9875"}},[e._v("Pagination \u5206\u9875 "),t("a",{staticClass:"header-anchor",attrs:{href:"#pagination-\u5206\u9875"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--config-provider-pagination tdesign-demo-item--config-provider"},[t("td-doc-demo",{attrs:{code:e.DemoexamplepaginationCode,"demo-name":"pagination",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"pagination","component-name":" config-provider",code:e.DemoexamplepaginationCode}}),t("Codesandbox",{attrs:{"demo-name":"pagination","component-name":" config-provider",code:e.DemoexamplepaginationCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplepagination")],1)])],1),t("h3",{attrs:{id:"input-\u5BC6\u7801\u6846"}},[e._v("Input \u5BC6\u7801\u6846 "),t("a",{staticClass:"header-anchor",attrs:{href:"#input-\u5BC6\u7801\u6846"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--config-provider-input tdesign-demo-item--config-provider"},[t("td-doc-demo",{attrs:{code:e.DemoexampleinputCode,"demo-name":"input",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"input","component-name":" config-provider",code:e.DemoexampleinputCode}}),t("Codesandbox",{attrs:{"demo-name":"input","component-name":" config-provider",code:e.DemoexampleinputCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleinput")],1)])],1),t("h3",{attrs:{id:"datepicker-\u65E5\u671F\u9009\u62E9\u5668"}},[e._v("DatePicker \u65E5\u671F\u9009\u62E9\u5668 "),t("a",{staticClass:"header-anchor",attrs:{href:"#datepicker-\u65E5\u671F\u9009\u62E9\u5668"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--config-provider-date-picker tdesign-demo-item--config-provider"},[t("td-doc-demo",{attrs:{code:e.DemoexampledatepickerCode,"demo-name":"date-picker",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"date-picker","component-name":" config-provider",code:e.DemoexampledatepickerCode}}),t("Codesandbox",{attrs:{"demo-name":"date-picker","component-name":" config-provider",code:e.DemoexampledatepickerCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampledatepicker")],1)])],1),t("h3",{attrs:{id:"calendar-\u65E5\u5386"}},[e._v("Calendar \u65E5\u5386 "),t("a",{staticClass:"header-anchor",attrs:{href:"#calendar-\u65E5\u5386"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--config-provider-calendar tdesign-demo-item--config-provider"},[t("td-doc-demo",{attrs:{code:e.DemoexamplecalendarCode,"demo-name":"calendar",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"calendar","component-name":" config-provider",code:e.DemoexamplecalendarCode}}),t("Codesandbox",{attrs:{"demo-name":"calendar","component-name":" config-provider",code:e.DemoexamplecalendarCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplecalendar")],1)])],1),t("h3",{attrs:{id:"dialog-\u5BF9\u8BDD\u6846"}},[e._v("Dialog \u5BF9\u8BDD\u6846 "),t("a",{staticClass:"header-anchor",attrs:{href:"#dialog-\u5BF9\u8BDD\u6846"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--config-provider-dialog tdesign-demo-item--config-provider"},[t("td-doc-demo",{attrs:{code:e.DemoexampledialogCode,"demo-name":"dialog",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"dialog","component-name":" config-provider",code:e.DemoexampledialogCode}}),t("Codesandbox",{attrs:{"demo-name":"dialog","component-name":" config-provider",code:e.DemoexampledialogCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampledialog")],1)])],1),t("h3",{attrs:{id:"popconfirm-\u6C14\u6CE1\u5BF9\u8BDD\u6846"}},[e._v("Popconfirm \u6C14\u6CE1\u5BF9\u8BDD\u6846 "),t("a",{staticClass:"header-anchor",attrs:{href:"#popconfirm-\u6C14\u6CE1\u5BF9\u8BDD\u6846"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--config-provider-popconfirm tdesign-demo-item--config-provider"},[t("td-doc-demo",{attrs:{code:e.DemoexamplepopconfirmCode,"demo-name":"popconfirm",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"popconfirm","component-name":" config-provider",code:e.DemoexamplepopconfirmCode}}),t("Codesandbox",{attrs:{"demo-name":"popconfirm","component-name":" config-provider",code:e.DemoexamplepopconfirmCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexamplepopconfirm")],1)])],1),t("h3",{attrs:{id:"table-\u8868\u683C"}},[e._v("Table \u8868\u683C "),t("a",{staticClass:"header-anchor",attrs:{href:"#table-\u8868\u683C"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--config-provider-table tdesign-demo-item--config-provider"},[t("td-doc-demo",{attrs:{code:e.DemoexampletableCode,"demo-name":"table",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"table","component-name":" config-provider",code:e.DemoexampletableCode}}),t("Codesandbox",{attrs:{"demo-name":"table","component-name":" config-provider",code:e.DemoexampletableCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampletable")],1)])],1),t("h3",{attrs:{id:"\u5176\u4ED6\u7EC4\u4EF6"}},[e._v("\u5176\u4ED6\u7EC4\u4EF6 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5176\u4ED6\u7EC4\u4EF6"}})]),t("div",{staticClass:"tdesign-demo-wrapper tdesign-demo-item--config-provider-others tdesign-demo-item--config-provider"},[t("td-doc-demo",{attrs:{code:e.DemoexampleothersCode,"demo-name":"others",language:"markup"}},[t("div",{attrs:{slot:"action"},slot:"action"},[t("Stackblitz",{attrs:{"demo-name":"others","component-name":" config-provider",code:e.DemoexampleothersCode}}),t("Codesandbox",{attrs:{"demo-name":"others","component-name":" config-provider",code:e.DemoexampleothersCode}})],1),t("div",{staticClass:"tdesign-demo-item__body"},[t("Demoexampleothers")],1)])],1),t("h3",{attrs:{id:"\u5168\u5C40\u7EC4\u4EF6\u524D\u7F00"}},[e._v("\u5168\u5C40\u7EC4\u4EF6\u524D\u7F00 "),t("a",{staticClass:"header-anchor",attrs:{href:"#\u5168\u5C40\u7EC4\u4EF6\u524D\u7F00"}})]),t("p",[e._v("TDesign \u7684\u7EC4\u4EF6\u524D\u7F00\u7EDF\u4E00\u4E3A"),t("code",[e._v("t")]),e._v("\uFF0C\u5728\u4E00\u4E9B\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u6709\u9700\u8981\u6539\u53D8\u7EC4\u4EF6\u524D\u7F00\u6765\u6EE1\u8DB3\u4E1A\u52A1\u7684\u4F7F\u7528\u573A\u666F\u3002 \u53EF\u4EE5\u4F7F\u7528"),t("code",[e._v("esm")]),e._v("\u7248\u672C\uFF08\u4FDD\u8BC1\u60A8\u53EF\u4EE5\u4FEE\u6539less vars)\uFF0C\u901A\u8FC7\u5168\u5C40\u914D\u7F6E\u4FEE\u6539"),t("code",[e._v("classPrefix")]),e._v("\uFF0C\u5E76\u914D\u5408 less-loader \u4FEE\u6539"),t("code",[e._v("@prefix")]),e._v("\u8FD9\u4E2A less vars \u6765\u4FDD\u8BC1\u7EC4\u4EF6\u6837\u5F0F\u7684\u6B63\u5E38\u3002")]),t("div",{staticClass:"language-js"},[t("pre",{pre:!0},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" Vue "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vue'")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" TDesign "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'tdesign-vue/esm'")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'tdesign-vue/esm/style/index.js'")]),e._v(`

Vue`),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("TDesign"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("...")]),e._v(`

`),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("config"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("provider "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("globalConfig"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v(`"{ classPrefix: 'any'}"`)]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(`
    `),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("button"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("TDesign to any design"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("button"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("t"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("config"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("provider"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(`
`)])])]),t("div",{staticClass:"language-js"},[t("pre",{pre:!0},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(`
    `),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("loaderOptions")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(`
        `),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("less")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(`
            `),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("lessOptions")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(`
                `),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("modifyVars")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(`
                    `),t("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v("'@prefix'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'any'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// \u8BF7\u6CE8\u610F\u9700\u8981\u4E0EclassPrefix\u4FDD\u6301\u4E00\u81F4")]),e._v(`
                `),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(`
                `),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("javascriptEnabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(`
            `),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(`
        `),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(`
    `),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(`
`),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(`
`)])])])]),t("td-contributors",{attrs:{platform:"web",framework:"vue","component-name":"config-provider"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="api",expression:"tab === 'api'"}],attrs:{name:"API"}},[t("nav",{staticClass:"tdesign-toc_container"},[t("ol",{staticClass:"tdesign-toc_list"},[t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#globalconfigprovider"}},[e._v("GlobalConfigProvider")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#inputconfig"}},[e._v("InputConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#paginationconfig"}},[e._v("PaginationConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#calendarconfig"}},[e._v("CalendarConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#cascaderconfig"}},[e._v("CascaderConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#colorpickerconfig"}},[e._v("ColorPickerConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#transferconfig"}},[e._v("TransferConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#timepickerconfig"}},[e._v("TimePickerConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#datepickerconfig"}},[e._v("DatePickerConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#dialogconfig"}},[e._v("DialogConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#drawerconfig"}},[e._v("DrawerConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#popconfirmconfig"}},[e._v("PopconfirmConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#tableconfig"}},[e._v("TableConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#selectconfig"}},[e._v("SelectConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#treeconfig"}},[e._v("TreeConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#treeselectconfig"}},[e._v("TreeSelectConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#listconfig"}},[e._v("ListConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#uploadconfig"}},[e._v("UploadConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#uploadconfigprogress"}},[e._v("UploadConfigProgress")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#uploadconfigdragger"}},[e._v("UploadConfigDragger")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#uploadconfigfilelist"}},[e._v("UploadConfigFileList")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#formconfig"}},[e._v("FormConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#tagconfig"}},[e._v("TagConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#stepsconfig"}},[e._v("StepsConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#alertconfig"}},[e._v("AlertConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#anchorconfig"}},[e._v("AnchorConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#messageconfig"}},[e._v("MessageConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#imageconfig"}},[e._v("ImageConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#imageviewerconfig"}},[e._v("ImageViewerConfig")])]),t("li",{staticClass:"tdesign-toc_list_item"},[t("a",{staticClass:"tdesign-toc_list_item_a",attrs:{href:"#guideconfig"}},[e._v("GuideConfig")])])])]),t("h3",{attrs:{id:"globalconfigprovider"}},[e._v("GlobalConfigProvider "),t("a",{staticClass:"header-anchor",attrs:{href:"#globalconfigprovider"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("alert")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8B66\u544A\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("AlertConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("anchor")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u951A\u70B9\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("AnchorConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("animation")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u52A8\u753B\u6548\u679C\u63A7\u5236\uFF0C"),t("code",[e._v("ripple")]),e._v(" \u6307\u6CE2\u7EB9\u52A8\u753B\uFF0C "),t("code",[e._v("expand")]),e._v(" \u6307\u5C55\u5F00\u52A8\u753B\uFF0C"),t("code",[e._v("fade")]),e._v(" \u6307\u6E10\u53D8\u52A8\u753B\u3002\u9ED8\u8BA4\u4E3A "),t("code",[e._v("{ include: ['ripple','expand','fade'], exclude: [] }")]),e._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("Partial<Record<'include'|'exclude', Array<AnimationType>>>")]),e._v(" "),t("code",[e._v("type AnimationType = 'ripple' | 'expand' | 'fade'")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/config-provider/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("calendar")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u65E5\u5386\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("CalendarConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("cascader")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u7EA7\u8054\u9009\u62E9\u5668\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("CascaderConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("classPrefix")]),t("td",[e._v("String")]),t("td",[e._v("t")]),t("td",[e._v("CSS \u7C7B\u540D\u524D\u7F00")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("colorPicker")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u989C\u8272\u9009\u62E9\u5668\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ColorPickerConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("datePicker")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u65E5\u671F\u9009\u62E9\u5668\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("DatePickerConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("dialog")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5BF9\u8BDD\u6846\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("DialogConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("drawer")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u62BD\u5C49\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("DrawerConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("form")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8868\u5355\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("FormConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("guide")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5F15\u5BFC\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("GuideConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("icon")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u56FE\u6807\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("IconConfig")]),e._v(" "),t("code",[e._v("type IconConfig = GlobalIconConfig")]),e._v(" "),t("code",[e._v("import { GlobalIconConfig } from '@icon'")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/config-provider/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("image")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u56FE\u7247\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ImageConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("imageViewer")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u56FE\u7247\u9884\u89C8\u5668\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ImageViewerConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("input")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8F93\u5165\u6846\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("InputConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("list")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5217\u8868\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ListConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("message")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u6D88\u606F\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("MessageConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("pagination")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5206\u9875\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("PaginationConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("popconfirm")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u6C14\u6CE1\u786E\u8BA4\u6846\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("PopconfirmConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("select")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u9009\u62E9\u5668\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("SelectConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("steps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u6B65\u9AA4\u6761\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("StepsConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("table")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8868\u683C\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TableConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("tag")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u6807\u7B7E\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TagConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("timePicker")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u65F6\u95F4\u9009\u62E9\u5668\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TimePickerConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("transfer")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u7A7F\u68AD\u6846\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TransferConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("tree")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u6811\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TreeConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("treeSelect")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u6811\u9009\u62E9\u5668\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TreeSelectConfig")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("upload")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u4E0A\u4F20\u7EC4\u4EF6\u5168\u5C40\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("UploadConfig")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"inputconfig"}},[e._v("InputConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#inputconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("autocomplete")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u662F\u5426\u5F00\u542F\u81EA\u52A8\u586B\u5145\u529F\u80FD")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u8BF7\u8F93\u5165\u201D\u5360\u4F4D\u7B26\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"paginationconfig"}},[e._v("PaginationConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#paginationconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("itemsPerPage")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u6BCF\u9875\u6761\u6570\u6587\u672C\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("'{size} \u6761/\u9875'")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("jumpTo")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u9875\u7801\u8DF3\u8F6C\u6587\u672C\uFF0C\u793A\u4F8B\uFF1A'\u8DF3\u81F3'")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("page")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u9875\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("total")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u6570\u636E\u603B\u6761\u6570\u6587\u672C\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("'\u5171 {total} \u9879\u6570\u636E'")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"calendarconfig"}},[e._v("CalendarConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#calendarconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("cellMonth")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u6708\u4EFD\u63CF\u8FF0\u6587\u672C\uFF0C\u793A\u4F8B\uFF1A'\u4E00\u6708,\u4E8C\u6708,\u4E09\u6708,\u56DB\u6708,\u4E94\u6708,\u516D\u6708,\u4E03\u6708,\u516B\u6708,\u4E5D\u6708,\u5341\u6708,\u5341\u4E00\u6708,\u5341\u4E8C\u6708'")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("controllerConfig")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u65E5\u5386\u53F3\u4E0A\u89D2\u63A7\u5236\u5668\u6309\u94AE\u914D\u7F6E\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("CalendarController")]),e._v("\uFF0C"),t("a",{attrs:{href:"./calendar?tab=api"}},[e._v("Calendar API Documents")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/config-provider/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("fillWithZero")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u5F53\u65E5\u671F\u6570\u5B57\u5C0F\u4E8E 10 \u65F6\uFF0C\u662F\u5426\u4F7F\u7528 '0' \u586B\u5145")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("firstDayOfWeek")]),t("td",[e._v("Number")]),t("td",[e._v("1")]),t("td",[e._v("\u7B2C\u4E00\u5929\u4ECE\u661F\u671F\u51E0\u5F00\u59CB\u3002\u53EF\u9009\u9879\uFF1A1/2/3/4/5/6/7")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("hideWeekend")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u9690\u85CF\u5468\u672B\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("monthRadio")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u6A21\u5F0F\u5207\u6362\u65F6\u7684\u201C\u6708\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("monthSelection")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v('\u8BED\u8A00\u914D\u7F6E\uFF0C"\u6708"\u9009\u62E9\u63CF\u8FF0\u6587\u672C\u3002\u793A\u4F8B\uFF1A'),t("code",[e._v("'{month} \u6708'")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("showWeekend")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u663E\u793A\u5468\u672B\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("thisMonth")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u672C\u6708\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("today")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4ECA\u5929\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("week")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u661F\u671F\u63CF\u8FF0\u6587\u672C\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("'\u5468\u4E00,\u5468\u4E8C,\u5468\u4E09,\u5468\u56DB,\u5468\u4E94,\u5468\u516D,\u5468\u65E5'")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("yearRadio")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u6A21\u5F0F\u5207\u6362\u65F6\u7684\u201C\u5E74\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("yearSelection")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u5E74\u201D\u9009\u62E9\u63CF\u8FF0\u6587\u672C\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("'{year} \u5E74'")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"cascaderconfig"}},[e._v("CascaderConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#cascaderconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("empty")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6682\u65E0\u6570\u636E\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("loadingText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u52A0\u8F7D\u4E2D\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u8BF7\u9009\u62E9\u201D\u5360\u4F4D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"colorpickerconfig"}},[e._v("ColorPickerConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#colorpickerconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("clearConfirmText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u786E\u5B9A\u6E05\u7A7A\u6700\u8FD1\u4F7F\u7528\u7684\u989C\u8272\u5417\uFF1F\u201D\u6E05\u7A7A\u989C\u8272\u786E\u8BA4\u6587\u6848")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("recentColorTitle")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6700\u8FD1\u4F7F\u7528\u989C\u8272\u201D \u533A\u57DF\u6807\u9898\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("swatchColorTitle")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v('\u8BED\u8A00\u914D\u7F6E\uFF0C"\u7CFB\u7EDF\u9884\u8BBE\u989C\u8272" \u533A\u57DF\u6807\u9898\u6587\u672C')]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"transferconfig"}},[e._v("TransferConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#transferconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("empty")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6682\u65E0\u6570\u636E\u201D\u7A7A\u6570\u636E\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22\u201D\u5360\u4F4D\u7B26\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("title")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u7A7F\u68AD\u6846\u6807\u9898\u63CF\u8FF0\u6587\u672C\uFF0C\u793A\u4F8B\uFF1A\u201C{checked} / {total} \u9879\u201D")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"timepickerconfig"}},[e._v("TimePickerConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#timepickerconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("anteMeridiem")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0A\u5348\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("confirm")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u786E\u5B9A\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("now")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6B64\u523B\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v('\u8BED\u8A00\u914D\u7F6E\uFF0C"\u8BF7\u9009\u62E9\u65F6\u95F4"\u5360\u4F4D\u7B26\u63CF\u8FF0\u6587\u672C')]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("postMeridiem")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0B\u5348\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"datepickerconfig"}},[e._v("DatePickerConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#datepickerconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("confirm")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u786E\u5B9A\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("dayAriaLabel")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u65E5\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("dayjsLocale")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("dayjs \u8BED\u8A00\u56FD\u9645\u5316\u914D\u7F6E")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("direction")]),t("td",[e._v("String")]),t("td",[e._v("'ltr'")]),t("td",[e._v("\u65E5\u671F\u65B9\u5411\uFF0C'ltr' \u8868\u793A\u4ECE\u5DE6\u5F80\u53F3")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("firstDayOfWeek")]),t("td",[e._v("Number")]),t("td",[e._v("7")]),t("td",[e._v("\u7B2C\u4E00\u5929\u4ECE\u661F\u671F\u51E0\u5F00\u59CB\u3002\u53EF\u9009\u9879\uFF1A1/2/3/4/5/6/7")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("format")]),t("td",[e._v("String")]),t("td",[e._v("'YYYY-MM-DD'")]),t("td",[e._v("\u65E5\u671F\u683C\u5F0F\u5316\u89C4\u5219")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("monthAriaLabel")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6708\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("months")]),t("td",[e._v("Array")]),t("td",[e._v("-")]),t("td",[e._v("\u661F\u671F\u6587\u672C\u63CF\u8FF0\uFF0C\u9ED8\u8BA4\u503C\uFF1A['1 \u6708', '2 \u6708', '3 \u6708', '4 \u6708', '5 \u6708', '6 \u6708', '7 \u6708', '8 \u6708', '9 \u6708', '10 \u6708', '11 \u6708', '12 \u6708']\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string[]")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("nextDecade")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0B\u4E2A\u5341\u5E74\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("nextMonth")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0B\u4E2A\u6708\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("nextYear")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0B\u4E00\u5E74\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("now")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6B64\u523B\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u5360\u4F4D\u7B26\u6587\u672C\u63D0\u793A\uFF0C\u9ED8\u8BA4\u503C\uFF1A"),t("code",[e._v("{ date: '\u8BF7\u9009\u62E9\u65E5\u671F', month: '\u8BF7\u9009\u62E9\u6708\u4EFD', year: '\u8BF7\u9009\u62E9\u5E74\u4EFD' }")]),e._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("{ date?: string; month?: string; year?: string }")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("preDecade")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0A\u4E2A\u5341\u5E74\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("preMonth")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0A\u4E2A\u6708\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("preYear")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0A\u4E00\u5E74\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("presets")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u3010\u6682\u4E0D\u652F\u6301\uFF0C\u8BA8\u8BBA\u786E\u8BA4\u4E2D\u3011\u9884\u8BBE\u5FEB\u6377\u65E5\u671F\u9009\u62E9\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("{ '\u5143\u65E6': '2021-01-01', '\u6628\u5929': dayjs().subtract(1, 'day').format('YYYY-MM-DD'), '\u7279\u5B9A\u65E5\u671F': () => ['2021-02-01'] }")]),e._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ConfigPresetDate")]),e._v(" "),t("code",[e._v("interface ConfigPresetDate { [name: string]: DateConfigValue | (() => DateConfigValue) }")]),e._v(" "),t("code",[e._v("type DateConfigValue = string | Date | Array<DateConfigValue>")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/config-provider/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("quarters")]),t("td",[e._v("Array")]),t("td",[e._v("-")]),t("td",[e._v("\u5B63\u5EA6\u6587\u672C\u63CF\u8FF0\uFF0C\u9ED8\u8BA4\u503C\uFF1A['1 \u5B63\u5EA6', '2 \u5B63\u5EA6', '3 \u5B63\u5EA6', '4 \u5B63\u5EA6']\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string[]")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("rangeSeparator")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C \u81F3 \u201D \u8303\u56F4\u5206\u9694\u7B26\u63CF\u8FF0\u6587\u672C\uFF0C\u793A\u4F8B\uFF1A' ~ '")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("selectDate")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u9009\u62E9\u65E5\u671F\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("selectTime")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u9009\u62E9\u65F6\u95F4\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("weekAbbreviation")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u5468\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("weekdays")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u661F\u671F\u6587\u672C\u63CF\u8FF0\uFF0C\u9ED8\u8BA4\u503C\uFF1A['\u65E5', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D']\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string[]")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("yearAriaLabel")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u5E74\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"dialogconfig"}},[e._v("DialogConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#dialogconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("cancel")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u53D6\u6D88\u6309\u94AE\u98CE\u683C\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | ButtonProps")]),e._v("\uFF0C"),t("a",{attrs:{href:"./button?tab=api"}},[e._v("Button API Documents")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/config-provider/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("closeOnEscKeydown")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u6309\u4E0B ESC \u65F6\u662F\u5426\u89E6\u53D1\u5BF9\u8BDD\u6846\u5173\u95ED\u4E8B\u4EF6")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("closeOnOverlayClick")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u70B9\u51FB\u8499\u5C42\u65F6\u662F\u5426\u89E6\u53D1\u5173\u95ED\u4E8B\u4EF6")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("confirm")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u786E\u8BA4\u6309\u94AE\u98CE\u683C\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("confirmBtnTheme")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u786E\u8BA4\u6309\u94AE\u4E3B\u9898\u8272\uFF0C\u5373 Dialog \u7684 "),t("code",[e._v("theme")]),e._v(" \u548C \u786E\u8BA4\u6309\u94AE\u7684 "),t("code",[e._v("theme")]),e._v(" \u6620\u5C04\u5173\u7CFB\u3002\u793A\u4F8B\uFF1A{ danger: 'danger' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("{ default: string; info: string; warning: string; danger: string; success: string; }")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"drawerconfig"}},[e._v("DrawerConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#drawerconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("cancel")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u53D6\u6D88\u201D\u63CF\u8FF0\u6587\u672C\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("closeOnEscKeydown")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u6309\u4E0B ESC \u65F6\u662F\u5426\u89E6\u53D1\u62BD\u5C49\u5173\u95ED\u4E8B\u4EF6")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("closeOnOverlayClick")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u70B9\u51FB\u8499\u5C42\u65F6\u662F\u5426\u89E6\u53D1\u5173\u95ED\u4E8B\u4EF6")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("confirm")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u786E\u8BA4\u201D\u63CF\u8FF0\u6587\u672C\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("size")]),t("td",[e._v("String")]),t("td",[e._v("'small'")]),t("td",[e._v("\u5C3A\u5BF8\u914D\u7F6E\uFF0C\u914D\u7F6EDrawer\u5C3A\u5BF8")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"popconfirmconfig"}},[e._v("PopconfirmConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#popconfirmconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("cancel")]),t("td",[e._v("String / Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u53D6\u6D88\u201D\u63CF\u8FF0\u6587\u672C\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | ButtonProps")]),e._v("\uFF0C"),t("a",{attrs:{href:"./button?tab=api"}},[e._v("Button API Documents")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/config-provider/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("confirm")]),t("td",[e._v("String / Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u786E\u5B9A\u201D\u63CF\u8FF0\u6587\u672C\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("confirmBtnTheme")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u786E\u8BA4\u6309\u94AE\u4E3B\u9898\u8272\uFF0C\u5373 Popconfirm \u7684 "),t("code",[e._v("theme")]),e._v(" \u548C \u786E\u8BA4\u6309\u94AE\u7684 "),t("code",[e._v("theme")]),e._v(" \u6620\u5C04\u5173\u7CFB\u3002\u793A\u4F8B\uFF1A{ danger: 'danger' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("{ default: string; warning: string; danger: string; }")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"tableconfig"}},[e._v("TableConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#tableconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("cancelText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u53D6\u6D88\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("clearFilterResultButtonText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u8FC7\u6EE4\u529F\u80FD\u4E2D\uFF0C\u201C\u6E05\u7A7A\u7B5B\u9009\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("columnConfigButtonText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u5217\u914D\u7F6E\u529F\u80FD\u4E2D\uFF0C\u201C\u5217\u914D\u7F6E\u201D \u6309\u94AE\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("columnConfigDescriptionText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u8BF7\u9009\u62E9\u9700\u8981\u5728\u8868\u683C\u4E2D\u663E\u793A\u7684\u6570\u636E\u5217\u201D \u63CF\u8FF0\u6587\u672C\uFF0C\u5217\u914D\u7F6E\u529F\u80FD\u4E2D\u5F39\u6846\u9876\u90E8\u63CF\u8FF0")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("columnConfigTitleText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u8868\u683C\u5217\u914D\u7F6E\u201D \u63CF\u8FF0\u6587\u672C\uFF0C\u5217\u914D\u7F6E\u529F\u80FD\u4E2D\u5F39\u6846\u7684\u6807\u9898")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("confirmText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u786E\u8BA4\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("empty")]),t("td",[e._v("String / Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6682\u65E0\u6570\u636E\u201D \u63CF\u8FF0\u6587\u672C\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("string | TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("expandIcon")]),t("td",[e._v("Slot / Function")]),t("td",[e._v("undefined")]),t("td",[e._v("\u5C55\u5F00\u548C\u6536\u8D77\u56FE\u6807\uFF08\u914D\u7F6E\u4F20\u5165\u6536\u8D77\u56FE\u6807\u5373\u53EF\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\u914D\u7F6E\uFF0C\u4F1A\u4F7F\u7528\u7EC4\u4EF6\u5185\u7F6E\u7684\u9ED8\u8BA4\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("filterIcon")]),t("td",[e._v("Slot / Function")]),t("td",[e._v("undefined")]),t("td",[e._v("\u8FC7\u6EE4\u56FE\u6807\uFF0C\u5982\u679C\u6CA1\u6709\u914D\u7F6E\uFF0C\u4F1A\u4F7F\u7528\u7EC4\u4EF6\u5185\u7F6E\u7684\u9ED8\u8BA4\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("hideSortTips")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u9690\u85CF\u6392\u5E8F\u6587\u672C\u63D0\u793A")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("loadingMoreText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("loadingText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6B63\u5728\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("resetText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u91CD\u7F6E\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("searchResultText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u8FC7\u6EE4\u529F\u80FD\u4E2D\uFF0C\u8FC7\u6EE4\u6761\u4EF6\u548C\u7ED3\u679C\u63CF\u8FF0\u6587\u672C\uFF0C\u793A\u4F8B\uFF1A'\u641C\u7D22\u201C{result}\u201D\uFF0C\u627E\u5230 {count} \u6761\u7ED3\u679C'")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("selectAllText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C'\u5168\u9009' \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("sortAscendingOperationText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C'\u70B9\u51FB\u5347\u5E8F' \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("sortCancelOperationText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C'\u70B9\u51FB\u53D6\u6D88\u6392\u5E8F' \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("sortDescendingOperationText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C'\u70B9\u51FB\u964D\u5E8F' \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("sortIcon")]),t("td",[e._v("Slot / Function")]),t("td",[e._v("undefined")]),t("td",[e._v("\u6392\u5E8F\u56FE\u6807\uFF08\u914D\u7F6E\u4F20\u5165\u964D\u5E8F\u56FE\u6807\u5373\u53EF\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\u914D\u7F6E\uFF0C\u4F1A\u4F7F\u7528\u7EC4\u4EF6\u5185\u7F6E\u7684\u9ED8\u8BA4\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("treeExpandAndFoldIcon")]),t("td",[e._v("Function")]),t("td",[e._v("undefined")]),t("td",[e._v("\u6811\u5F62\u7ED3\u6784\uFF0C\u5C55\u5F00\u548C\u6298\u53E0\u56FE\u6807\u3002\u5982\u679C\u6CA1\u6709\u914D\u7F6E\uFF0C\u4F1A\u4F7F\u7528\u7EC4\u4EF6\u5185\u7F6E\u7684\u9ED8\u8BA4\u56FE\u6807\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode<{ type: 'expand' | 'fold' }>")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"selectconfig"}},[e._v("SelectConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#selectconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("clearIcon")]),t("td",[e._v("Function")]),t("td",[e._v("-")]),t("td",[e._v("\u6E05\u9664\u56FE\u6807\uFF0C\u3010\u6CE8\u610F\u3011\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u56FE\u6807\u7EC4\u4EF6\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("empty")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6682\u65E0\u6570\u636E\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("filterable")]),t("td",[e._v("Boolean")]),t("td",[e._v("false")]),t("td",[e._v("\u5168\u5C40\u914D\u7F6E\u662F\u5426\u53EF\u7B5B\u9009")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("loadingText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u52A0\u8F7D\u4E2D\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u8BF7\u9009\u62E9\u201D\u5360\u4F4D\u7B26\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"treeconfig"}},[e._v("TreeConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#treeconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("empty")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6682\u65E0\u6570\u636E\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("folderIcon")]),t("td",[e._v("Function")]),t("td",[e._v("-")]),t("td",[e._v("\u76EE\u5F55\u5C42\u7EA7\u56FE\u6807\uFF0C\u4F20\u5165\u6536\u8D77\u72B6\u6001\u56FE\u6807\u5373\u53EF\u3002\u3010\u6CE8\u610F\u3011\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u56FE\u6807\u7EC4\u4EF6\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"treeselectconfig"}},[e._v("TreeSelectConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#treeselectconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("empty")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6682\u65E0\u6570\u636E\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("loadingText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u52A0\u8F7D\u4E2D\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("placeholder")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u8BF7\u9009\u62E9\u201D\u5360\u4F4D\u7B26\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"listconfig"}},[e._v("ListConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#listconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("loadingMoreText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C'\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A' \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("loadingText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C'\u6B63\u5728\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E' \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"uploadconfig"}},[e._v("UploadConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#uploadconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("cancelUploadText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u53D6\u6D88\u4E0A\u4F20\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("dragger")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u62D6\u62FD\u76F8\u5173\u3002\u793A\u4F8B\uFF1A{ dragDropText: '\u91CA\u653E\u56FE\u6807', draggingText: '\u62D6\u62FD\u5230\u6B64\u533A\u57DF', clickAndDragText: '\u70B9\u51FB\u4E0A\u65B9\u201C\u9009\u62E9\u6587\u4EF6\u201D\u6216\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u533A\u57DF' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("UploadConfigDragger")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("file")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u6587\u4EF6\u4FE1\u606F\u76F8\u5173\u3002\u793A\u4F8B\uFF1A{ fileNameText: '\u6587\u4EF6\u540D', fileSizeText: '\u6587\u4EF6\u5C3A\u5BF8', fileStatusText: '\u72B6\u6001', fileOperationText: '\u64CD\u4F5C', fileOperationDateText: '\u4E0A\u4F20\u65E5\u671F' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("UploadConfigFileList")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("progress")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u4E0A\u4F20\u8FDB\u5EA6\u76F8\u5173\u3002\u793A\u4F8B\uFF1A{ uploadText: '\u4E0A\u4F20\u4E2D', waitingText: '\u5F85\u4E0A\u4F20', 'failText': '\u4E0A\u4F20\u5931\u8D25', successText: '\u4E0A\u4F20\u6210\u529F' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("UploadConfigProgress")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("sizeLimitMessage")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236\u65F6\u63D0\u9192\u6587\u672C\u3002\u793A\u4F8B\uFF1A"),t("code",[e._v("'\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 {sizeLimit}'")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("triggerUploadText")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u4E0A\u4F20\u529F\u80FD\u89E6\u53D1\u6587\u6848\u3002\u793A\u4F8B\uFF1A{ image: '\u70B9\u51FB\u4E0A\u4F20\u56FE\u7247', normal: '\u70B9\u51FB\u4E0A\u4F20', fileInput: '\u9009\u62E9\u6587\u4EF6', reupload: '\u91CD\u65B0\u4E0A\u4F20', delete: '\u5220\u9664', continueUpload?: '\u7EE7\u7EED\u9009\u62E9' }\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("UploadTriggerUploadText")]),e._v(" "),t("code",[e._v("interface UploadTriggerUploadText { image?: string, normal?: string, fileInput?: string, reupload?: string, continueUpload?: string, delete?: string }")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/config-provider/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"uploadconfigprogress"}},[e._v("UploadConfigProgress "),t("a",{staticClass:"header-anchor",attrs:{href:"#uploadconfigprogress"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("failText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0A\u4F20\u5931\u8D25\u201D\u6587\u672C\u63CF\u8FF0")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("successText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0A\u4F20\u6210\u529F\u201D\u6587\u672C\u63CF\u8FF0")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("uploadingText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0A\u4F20\u4E2D\u201D\u6587\u672C\u63CF\u8FF0")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("waitingText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u5F85\u4E0A\u4F20\u201D\u6587\u672C\u63CF\u8FF0")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"uploadconfigdragger"}},[e._v("UploadConfigDragger "),t("a",{staticClass:"header-anchor",attrs:{href:"#uploadconfigdragger"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("clickAndDragText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C \u70B9\u51FB\u4E0A\u65B9\u201C\u9009\u62E9\u6587\u4EF6\u201D\u6216\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u533A\u57DF \u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("dragDropText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u91CA\u653E\u56FE\u6807\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("draggingText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C'\u62D6\u62FD\u5230\u6B64\u533A\u57DF' \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"uploadconfigfilelist"}},[e._v("UploadConfigFileList "),t("a",{staticClass:"header-anchor",attrs:{href:"#uploadconfigfilelist"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("fileNameText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6587\u4EF6\u540D\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("fileOperationDateText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u4E0A\u4F20\u65E5\u671F\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("fileOperationText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u64CD\u4F5C\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("fileSizeText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6587\u4EF6\u5C3A\u5BF8\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("fileStatusText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u72B6\u6001\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"formconfig"}},[e._v("FormConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#formconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("errorMessage")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8868\u5355\u9519\u8BEF\u4FE1\u606F\u914D\u7F6E\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("{ idcard: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8EAB\u4EFD\u8BC1\u53F7\u7801', max: '\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 ${max}' }")]),e._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("FormErrorMessage")]),e._v("\uFF0C"),t("a",{attrs:{href:"./form?tab=api"}},[e._v("Form API Documents")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/config-provider/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("requiredMark")]),t("td",[e._v("Boolean")]),t("td",[e._v("true")]),t("td",[e._v("\u662F\u5426\u663E\u793A\u5FC5\u586B\u7B26\u53F7\uFF08*\uFF09\uFF0C\u9ED8\u8BA4\u663E\u793A")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"tagconfig"}},[e._v("TagConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#tagconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("closeIcon")]),t("td",[e._v("Function")]),t("td",[e._v("-")]),t("td",[e._v("\u5173\u95ED\u56FE\u6807\uFF0C\u3010\u6CE8\u610F\u3011\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u56FE\u6807\u7EC4\u4EF6\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"stepsconfig"}},[e._v("StepsConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#stepsconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("errorIcon")]),t("td",[e._v("Slot / Function")]),t("td",[e._v("-")]),t("td",[e._v("\u9519\u8BEF\u6B65\u9AA4\u56FE\u6807\uFF0C\u3010\u6CE8\u610F\u3011\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u56FE\u6807\u7EC4\u4EF6\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("TNode")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u901A\u7528\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"alertconfig"}},[e._v("AlertConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#alertconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("collapseText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u6536\u8D77\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("expandText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u5C55\u5F00\u66F4\u591A\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"anchorconfig"}},[e._v("AnchorConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#anchorconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("copySuccessText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u94FE\u63A5\u590D\u5236\u6210\u529F\u201D\u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("copyText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u8BED\u8A00\u914D\u7F6E\uFF0C\u201C\u590D\u5236\u94FE\u63A5\u201D \u63CF\u8FF0\u6587\u672C")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"messageconfig"}},[e._v("MessageConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#messageconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[t("code",[e._v("MessageOptions")])]),t("td",[e._v("-")]),t("td",[e._v("-")]),t("td",[e._v("\u7EE7\u627F "),t("code",[e._v("MessageOptions")]),e._v(" \u4E2D\u7684\u5168\u90E8\u5C5E\u6027")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"imageconfig"}},[e._v("ImageConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#imageconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("errorText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u663E\u793A\u7684\u6587\u672C\uFF0C\u4E2D\u6587\u9ED8\u8BA4\u4E3A\u201C\u56FE\u7247\u65E0\u6CD5\u663E\u793A\u201D")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("loadingText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u56FE\u7247\u52A0\u8F7D\u4E2D\u663E\u793A\u7684\u6587\u672C\uFF0C\u4E2D\u6587\u9ED8\u8BA4\u4E3A\u201C\u56FE\u7247\u52A0\u8F7D\u4E2D\u201D")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("replaceImageSrc")]),t("td",[e._v("Function")]),t("td",[e._v("-")]),t("td",[e._v("\u7EDF\u4E00\u66FF\u6362\u56FE\u7247 "),t("code",[e._v("src")]),e._v(" \u5730\u5740\uFF0C\u53C2\u6570\u4E3A\u7EC4\u4EF6\u7684\u5168\u90E8\u5C5E\u6027\uFF0C\u8FD4\u56DE\u503C\u4E3A\u65B0\u7684\u56FE\u7247\u5730\u5740\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("(params: ImageProps) => string")]),e._v("\uFF0C"),t("a",{attrs:{href:"./image?tab=api"}},[e._v("Image API Documents")]),e._v("\u3002"),t("a",{attrs:{href:"https://github.com/Tencent/tdesign-vue/tree/develop/src/config-provider/type.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("\u8BE6\u7EC6\u7C7B\u578B\u5B9A\u4E49")])]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"imageviewerconfig"}},[e._v("ImageViewerConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#imageviewerconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("errorText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u5168\u5C40\u8BED\u8A00\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A \u201C\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF0C\u53EF\u5C1D\u8BD5\u91CD\u65B0\u52A0\u8F7D\u201D")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("mirrorTipText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u5168\u5C40\u8BED\u8A00\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A \u201C\u955C\u50CF\u201D")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("originalSizeTipText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u5168\u5C40\u8BED\u8A00\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A \u201C\u539F\u59CB\u5927\u5C0F\u201D")]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("rotateTipText")]),t("td",[e._v("String")]),t("td",[e._v("-")]),t("td",[e._v("\u5168\u5C40\u8BED\u8A00\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A \u201C\u65CB\u8F6C\u201D")]),t("td",[e._v("N")])])])]),t("h3",{attrs:{id:"guideconfig"}},[e._v("GuideConfig "),t("a",{staticClass:"header-anchor",attrs:{href:"#guideconfig"}})]),t("table",[t("thead",[t("tr",[t("th",[e._v("\u540D\u79F0")]),t("th",[e._v("\u7C7B\u578B")]),t("th",[e._v("\u9ED8\u8BA4\u503C")]),t("th",[e._v("\u8BF4\u660E")]),t("th",[e._v("\u5FC5\u4F20")])])]),t("tbody",[t("tr",[t("td",[e._v("finishButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u6700\u540E\u4E00\u6B65\u4E2D\u7684\u5B8C\u6210\u6309\u94AE\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("{ content: '\u5B8C\u6210', theme: 'primary' }")]),e._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("nextButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u4E0B\u4E00\u6B65\u6309\u94AE\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("{ content: '\u4E0B\u4E00\u6B65', theme: 'primary' }")]),e._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("prevButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u4E0A\u4E00\u6B65\u6309\u94AE\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("{ content: '\u4E0A\u4E00\u6B65', theme: 'default' }")]),e._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")])]),t("td",[e._v("N")])]),t("tr",[t("td",[e._v("skipButtonProps")]),t("td",[e._v("Object")]),t("td",[e._v("-")]),t("td",[e._v("\u8DF3\u8FC7\u6309\u94AE\uFF0C\u793A\u4F8B\uFF1A"),t("code",[e._v("{ content: '\u8DF3\u8FC7', theme: 'default' }")]),e._v("\u3002TS \u7C7B\u578B\uFF1A"),t("code",[e._v("ButtonProps")])]),t("td",[e._v("N")])])])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab==="design",expression:"tab === 'design'"}],attrs:{name:"DESIGN"}},[t("td-doc-empty")],1),t("div",{staticStyle:{"margin-top":"48px"}},[t("td-doc-history",{attrs:{time:"1687143996427"}})],1),t("td-doc-footer",{attrs:{slot:"doc-footer"},slot:"doc-footer"})],1)},fe=[];const ue={components:{Demoexampleglobal:q,Demoexamplepagination:et,Demoexampleinput:ft,Demoexampledatepicker:Tt,Demoexamplecalendar:Pt,Demoexampledialog:zt,Demoexamplepopconfirm:Wt,Demoexampletable:Ht,Demoexampleothers:oe},data(){return{DemoexampleglobalCode:ie,DemoexamplepaginationCode:de,DemoexampleinputCode:se,DemoexampledatepickerCode:le,DemoexamplecalendarCode:ce,DemoexampledialogCode:_e,DemoexamplepopconfirmCode:ve,DemoexampletableCode:pe,DemoexampleothersCode:ge}},computed:{tab:{get(){return this.$route.query.tab||"demo"},set(e){this.$route.query.tab!==e&&this.$router.push({query:{tab:e}})}}},mounted(){const{tdDocContent:e,tdDocHeader:n,tdDocTabs:t}=this.$refs;n&&(n.docInfo={title:"\u5168\u5C40\u7279\u6027\u914D\u7F6E",desc:"\u5168\u5C40\u7279\u6027\u914D\u7F6E\u5305\u542B\u5404\u4E2A\u7EC4\u4EF6\u7684\u6587\u672C\u8BED\u8A00\u914D\u7F6E\u53CA\u5176\u4ED6\u901A\u7528\u914D\u7F6E\uFF0C\u53EF\u4EE5\u51CF\u5C11\u91CD\u590D\u7684\u901A\u7528\u914D\u7F6E\u3002"}),document.title="\u5168\u5C40\u7279\u6027\u914D\u7F6E | TDesign Custom",t&&(t.tabs=[{tab:"demo",name:"\u793A\u4F8B"},{tab:"api",name:"API"}],t.onchange=({detail:r})=>this.tab=r),U.highlightAll(),this.$emit("loaded",()=>{e.pageStatus="show"})}},A={};var he=o(ue,me,fe,!1,be,null,null,null);function be(e){for(let n in A)this[n]=A[n]}const De=function(){return he.exports}();export{De as default};
