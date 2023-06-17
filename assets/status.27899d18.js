import{s as T,t as _,r as k,_ as F,w as I,u as re,q as se,v as ue,x as pe,y as ce,z as ve,P as W,n as b}from"./index.4ab857ef.js";import{S as me}from"./search.98f31a43.js";import{C as de}from"./close-circle-filled.fcb36f0d.js";import{h as j}from"./event.2824024b.js";import{u as H,a as he,b as ge,c as fe,I as _e,P as ye}from"./useVModel.3542d59f.js";import{o as Ce,b as xe}from"./dom.c65227e1.js";import{l as A}from"./log.6d487041.js";import{b as be,r as K}from"./render-tnode.08995136.js";import{w as X}from"./withInstall.40906b81.js";/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var $e={autofocus:Boolean,clearable:Boolean,default:{type:[String,Function]},disabled:Boolean,filter:{type:Function},filterable:{type:Boolean,default:!0},highlightKeyword:{type:Boolean,default:!0},inputProps:{type:Object},options:{type:Array},panelBottomContent:{type:[String,Function]},panelTopContent:{type:[String,Function]},placeholder:{type:String,default:void 0},popupProps:{type:Object},readonly:Boolean,size:{type:String,default:"medium",validator:function(e){return e?["small","medium","large"].includes(e):!0}},status:{type:String,default:"default",validator:function(e){return e?["default","success","warning","error"].includes(e):!0}},textareaProps:{type:Object},tips:{type:[String,Function]},triggerElement:{type:[String,Function]},value:{type:String,default:void 0},defaultValue:{type:String,default:""},onBlur:Function,onChange:Function,onClear:Function,onCompositionend:Function,onCompositionstart:Function,onEnter:Function,onFocus:Function,onSelect:Function};/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var q=T({name:"HighlightOption",props:{content:String,keyword:String},setup:function(e){var n=H(),o=_(function(){var l,c=e.content,m=e.keyword;if(!c)return{list:[]};if(typeof c!="string"||!m)return{list:[c]};var d=new RegExp(m,"i"),p=(l=c.match(d))===null||l===void 0?void 0:l[0];return{list:c.split(p),keyword:p}});return{words:o,classPrefix:n}},render:function(){var e=this,n=arguments[0],o=this.words,l=o.list,c=o.keyword;return n("div",{class:"".concat(this.classPrefix,"-select-option__highlight-item")},[l.map(function(m,d){return d?[n("b",{class:"".concat(e.classPrefix,"-is-highlight"),key:m+c},[c]),m]:m})])}});/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,o)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E(Object(n),!0).forEach(function(o){F(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}var we=T({name:"AutoCompleteOptionList",props:{sizeClassNames:Object,value:String,size:String,options:Array,popupVisible:Boolean,highlightKeyword:Boolean,filterable:Boolean,filter:Function},setup:function(e,n){var o=n.emit,l=k(""),c=H(),m=_(function(){return"".concat(c.value,"-select__list")}),d=_(function(){return["".concat(c.value,"-select-option"),F({},e.sizeClassNames[e.size],e.size)]}),p=_(function(){var f=(e.options||[]).map(function(s){var g={};return typeof s=="string"?g={text:s,label:s}:(s.text&&typeof s.text!="string"&&A.warn("AutoComplete","`text` must be a string."),s.text?g=s:typeof s.label=="string"?g=V(V({},s),{},{text:s.label}):A.warn("AutoComplete","one of `label` and `text` must be a existed string.")),g});if(e.filter)f=f.filter(function(s){return e.filter(e.value,s)});else if(e.filterable){var h=new RegExp(e.value,"i");f=f.filter(function(s){return h.test(s.text)})}return f}),C=function(h){for(var s=h.target;s&&s.tagName!=="LI";)s=s.parentNode;var g=s.getAttribute("title");l.value=g,o("select",g,{e:h})},$=function(h){if(h.code==="ArrowUp"||h.key==="ArrowUp"){var s=p.value.findIndex(function(P){return P.text===l.value}),g=s-1<0?p.value.length-1:s-1;l.value=p.value[g].text}else if(h.code==="ArrowDown"||h.key==="ArrowDown"){var S=p.value.findIndex(function(P){return P.text===l.value}),O=S+1>=p.value.length?0:S+1;l.value=p.value[O].text}else(h.code==="Enter"||h.key==="Enter")&&o("select",l.value,{e:h})},y=function(){Ce(document,"keydown",$)},w=function(){xe(document,"keydown",$)};return I(function(){return e.popupVisible},function(){e.popupVisible?y():w()},{immediate:!0}),I(function(){return e.value},function(){e.value||(l.value="")},{immediate:!0}),re(function(){w()}),{classes:m,classPrefix:c,optionClasses:d,active:l,tOptions:p,addKeyboardListener:y,removeKeyboardListener:w,onOptionClick:C}},render:function(){var e=this,n=arguments[0];return this.tOptions.length?n("ul",{class:this.classes},[this.tOptions.map(function(o){var l=se(e.optionClasses);o.text===e.active&&l.push("".concat(e.classPrefix,"-select-option--hover"));var c=o.label;if(ue(o.label))c=o.label(n);else if(e.$scopedSlots.option){var m,d;c=(m=(d=e.$scopedSlots).option)===null||m===void 0?void 0:m.call(d,{option:o})}var p=c||o.text;return n("li",{key:o.text,class:l,attrs:{title:o.text},on:{click:e.onOptionClick}},[typeof p=="string"&&e.highlightKeyword?n(q,{attrs:{content:p,keyword:e.value}}):p])})]):null}});/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(o){F(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}var Pe=T({name:"TAutoComplete",props:$e,setup:function(e,n){var o=n.emit,l=pe(e),c=l.value,m=he(c,e.defaultValue,e.onChange),d=ce(m,2),p=d[0],C=d[1],$=ge(),y=$.classPrefix,w=$.sizeClassNames,f=fe("input"),h=f.global,s=k(),g=k(),S=function(a,i){var r,x=a.getBoundingClientRect().width||a.offsetWidth||a.clientWidth,ie=i.getBoundingClientRect().width||i.offsetWidth||i.clientWidth;return u({width:x>=ie?"".concat(x,"px"):"auto"},(r=e.popupProps)===null||r===void 0?void 0:r.overlayInnerStyle)},O=_(function(){return["".concat(y.value,"-auto-complete")]}),P=_(function(){var v,a=["".concat(y.value,"-select__dropdown")];return(v=e.popupProps)!==null&&v!==void 0&&v.overlayClassName&&(a=a.concat(e.popupProps.overlayClassName)),a}),U=_(function(){var v,a=["".concat(y.value,"-select__dropdown-inner")];return(v=e.popupProps)!==null&&v!==void 0&&v.overlayInnerClassName&&(a=a.concat(e.popupProps.overlayInnerClassName)),a}),J=function(a,i){C(a,i)},G=_(function(){var v=u({value:p.value,size:e.size},e.inputProps);return v}),Q=function(a,i){var r;s.value=!0,o("focus",u(u({},i),{},{value:a})),(r=e.onFocus)===null||r===void 0||r.call(e,u(u({},i),{},{value:a})),ve(function(){var x;(x=g.value)===null||x===void 0||x.addKeyboardListener()})},Y=function(a,i){var r;o("blur",u(u({},i),{},{value:a})),(r=e.onBlur)===null||r===void 0||r.call(e,u(u({},i),{},{value:a}))},Z=function(a,i){var r;o("compositionend",u(u({},i),{},{value:a})),(r=e.onCompositionend)===null||r===void 0||r.call(e,u(u({},i),{},{value:a}))},ee=function(a,i){var r;o("compositionstart",u(u({},i),{},{value:a})),(r=e.onCompositionstart)===null||r===void 0||r.call(e,u(u({},i),{},{value:a}))},te=function(a,i){var r;o("enter",u(u({},i),{},{value:a})),(r=e.onEnter)===null||r===void 0||r.call(e,u(u({},i),{},{value:a}))},ne=function(a){var i;o("clear",a),(i=e.onClear)===null||i===void 0||i.call(e,a)},oe=_(function(){return{change:J,focus:Q,blur:Y,compositionend:Z,compositionstart:ee,enter:te,clear:ne}}),ae=function(a,i){var r;e.readonly||e.disabled||(s.value=!1,C(a,i),o("select",a,i),(r=e.onSelect)===null||r===void 0||r.call(e,a,i))},le=function(a,i){var r=i.trigger;r!=="trigger-element-click"&&(s.value=a)};return{global:h,classes:O,classPrefix:y,popupClasses:P,popupInnerClasses:U,sizeClassNames:w,innerInputProps:G,inputListeners:oe,tValue:p,popupVisible:s,optionListRef:g,onPopupVisibleChange:le,getOverlayStyle:S,onInnerSelect:ae}},render:function(){var e,n,o=arguments[0],l=be(this,"default","triggerElement")||o(_e,j([{attrs:{placeholder:(e=this.placeholder)!==null&&e!==void 0?e:this.global.placeholder}},{on:this.inputListeners},{attrs:{tips:this.tips,status:this.status,readonly:this.readonly,disabled:this.disabled,autofocus:this.autofocus,clearable:this.clearable}},{props:this.innerInputProps},{scopedSlots:this.$scopedSlots}])),c=o(we,{ref:"optionListRef",attrs:{value:this.tValue,options:this.options,size:this.size,sizeClassNames:this.sizeClassNames,popupVisible:this.popupVisible,highlightKeyword:this.highlightKeyword,filterable:this.filterable,filter:this.filter},on:{select:this.onInnerSelect},scopedSlots:{option:this.$scopedSlots.option}}),m=K(this,"panelTopContent"),d=K(this,"panelBottomContent"),p=m||(n=this.options)!==null&&n!==void 0&&n.length||d?o("div",{class:"".concat(this.classPrefix,"-autocomplete__panel")},[m,c,d]):null,C=u(u({},this.popupProps),{},{overlayInnerStyle:this.getOverlayStyle,overlayInnerClassName:this.popupInnerClasses,overlayClassName:this.popupClasses});return o("div",{class:this.classes},[p&&o(ye,j([{attrs:{visible:this.popupVisible}},{on:{"visible-change":this.onPopupVisibleChange}},{attrs:{trigger:"focus",placement:"bottom-left",hideEmptyPopup:!0,content:p?function(){return p}:null}},{props:C}]),[l]),!p&&l])}});/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */X(Pe,W);var Se=X(q,W),Oe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{staticClass:"t-demo-auto-complete__base",attrs:{direction:"vertical"}},[n("t-auto-complete",{attrs:{options:t.options,highlightKeyword:"",filterable:!1,placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",clearable:""},on:{change:t.onChange},model:{value:t.value,callback:function(o){t.value=o},expression:"value"}}),n("t-auto-complete",{staticClass:"t-demo-autocomplete__search",attrs:{options:t.options,placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22\uFF08\u53F3\u4FA7\u641C\u7D22\u6309\u94AE\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\uFF09",highlightKeyword:"",filterable:""},scopedSlots:t._u([t.value2?{key:"suffix",fn:function(){return[n("close-circle-filled-icon",{staticClass:"t-input__suffix-clear",on:{click:function(o){t.value2=""}}})]},proxy:!0}:null,{key:"suffixIcon",fn:function(){return[n("t-button",{attrs:{shape:"square"}},[n("search-icon")],1)]},proxy:!0}],null,!0),model:{value:t.value2,callback:function(o){t.value2=o},expression:"value2"}})],1)},ke=[];const Te={name:"AutoCompleteBase",components:{SearchIcon:me,CloseCircleFilledIcon:de},data(){return{value:"",value2:"",options:["\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD","\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD","\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD"],timer:null}},methods:{onChange(t){clearTimeout(this.timer),this.timer=setTimeout(()=>{const e="\u641C\u7D22\u8054\u60F3\u8BCD",n=t.replace(`\u7B2C\u4E00\u4E2A${e}`,"").replace(`\u7B2C\u4E8C\u4E2A${e}`,"").replace(`\u7B2C\u4E09\u4E2A${e}`,"");this.options=[`${n}\u7B2C\u4E00\u4E2A${e}`,`${n}\u7B2C\u4E8C\u4E2A${e}`,`${n}\u7B2C\u4E09\u4E2A${e}`],clearTimeout(this.timer)},200)}}},D={};var Fe=b(Te,Oe,ke,!1,Ie,null,null,null);function Ie(t){for(let e in D)this[e]=D[e]}const dt=function(){return Fe.exports}();var je=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",[n("t-auto-complete",{staticStyle:{width:"280px"},attrs:{options:t.options,highlightKeyword:"",filterable:"",placeholder:"\u7EC4\u4EF6\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219\uFF08\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09"},model:{value:t.value1,callback:function(o){t.value1=o},expression:"value1"}}),n("t-auto-complete",{staticStyle:{width:"280px"},attrs:{options:t.options,filter:t.filterWords,highlightKeyword:"",placeholder:"\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219\uFF08\u533A\u5206\u5927\u5C0F\u5199\uFF09"},model:{value:t.value2,callback:function(o){t.value2=o},expression:"value2"}})],1)},Ae=[];const Ke=["\u7B2C\u4E00\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD","\u7B2C\u4E8C\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD","\u7B2C\u4E09\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD"],Ee={name:"AutoCompleteFilter",data(){return{value1:"",value2:"",options:[...Ke],timer:null}},methods:{filterWords(t,e){return new RegExp(t).test(e.text)}}},N={};var Ve=b(Ee,je,Ae,!1,ze,null,null,null);function ze(t){for(let e in N)this[e]=N[e]}const ht=function(){return Ve.exports}(),De=["\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD","\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD","\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD"],Ne={name:"AutoCompleteOption",components:{THighlightOption:Se},data(){return{value1:"",value2:"",options2:[{label:"\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD",description:"\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3",avatar:"https://tdesign.gtimg.com/site/avatar.jpg"},{label:"\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD",description:"\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3",avatar:"https://tdesign.gtimg.com/site/avatar.jpg"},{label:"\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD",description:"\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3",avatar:"https://tdesign.gtimg.com/site/avatar.jpg"}],timer:null}},computed:{options1(){const t=this.$createElement;return De.map(e=>({text:e,label:()=>t("div",{class:"custom-option"},[t("img",{attrs:{src:"https://tdesign.gtimg.com/site/avatar.jpg"}}),t("div",{class:"custom-option__main"},[t("t-highlight-option",{attrs:{content:e,keyword:this.value1}}),t("small",{class:"description"},["\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\uFF0C\u4F7F\u7528 Props \u5C5E\u6027\u6E32\u67D3"])])])}))}}};var Be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{staticClass:"t-demo-autocomplete-option",attrs:{direction:"vertical"}},[n("t-auto-complete",{attrs:{options:t.options1,popupProps:{overlayClassName:"t-demo-autocomplete-option-list"},placeholder:"\u4F7F\u7528\u5C5E\u6027\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u9009\u9879\u5185\u5BB9"},model:{value:t.value1,callback:function(o){t.value1=o},expression:"value1"}}),n("t-auto-complete",{attrs:{options:t.options2,popupProps:{overlayClassName:"t-demo-autocomplete-option-list"},placeholder:"\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u9009\u9879\u5185\u5BB9"},scopedSlots:t._u([{key:"option",fn:function(o){var l=o.option;return[n("div",{staticClass:"custom-option"},[n("img",{attrs:{src:l.avatar}}),n("div",{staticClass:"custom-option__main"},[n("t-highlight-option",{attrs:{content:l.text,keyword:t.value2}}),n("small",{staticClass:"description"},[t._v(t._s(l.description))])],1)])]}}]),model:{value:t.value2,callback:function(o){t.value2=o},expression:"value2"}})],1)},Le=[];const B={};var Re=b(Ne,Be,Le,!1,Me,null,null,null);function Me(t){for(let e in B)this[e]=B[e]}const gt=function(){return Re.exports}();var We=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("t-auto-complete",{attrs:{options:t.options,highlightKeyword:""},on:{change:t.onChange},model:{value:t.value,callback:function(o){t.value=o},expression:"value"}},[n("t-textarea",{attrs:{placeholder:"\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u89E6\u53D1\u5143\u7D20"},model:{value:t.value,callback:function(o){t.value=o},expression:"value"}})],1)],1)},He=[];const Xe={name:"AutoCompleteTriggerElement",data(){return{value:"",options:["First AutoComplete Textarea","Second AutoComplete Textarea","Third AutoComplete Textarea"],timer:null}},methods:{onChange(t){clearTimeout(this.timer),this.timer=setTimeout(()=>{const e="AutoComplete Textarea",n=t.replace(`First ${e}`,"").replace(`Second ${e}`,"").replace(`Third ${e}`,"");this.options=[`${n}First ${e}`,`${n}Second ${e}`,`${n}Third ${e}`],clearTimeout(this.timer)},200)}}},L={};var qe=b(Xe,We,He,!1,Ue,null,null,null);function Ue(t){for(let e in L)this[e]=L[e]}const ft=function(){return qe.exports}();var Je=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{attrs:{direction:"vertical"}},[n("t-auto-complete",{attrs:{size:"small",inputProps:{label:"\u5C0F\u5C3A\u5BF8\uFF1A"},options:["\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD","\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD","\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD"]},model:{value:t.value1,callback:function(o){t.value1=o},expression:"value1"}}),n("t-auto-complete",{attrs:{inputProps:{label:"\u4E2D\u5C3A\u5BF8\uFF1A"},options:["\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD","\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD","\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD"]},model:{value:t.value2,callback:function(o){t.value2=o},expression:"value2"}}),n("t-auto-complete",{attrs:{size:"large",inputProps:{label:"\u5927\u5C3A\u5BF8\uFF1A"},options:["\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD","\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD","\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD"]},model:{value:t.value3,callback:function(o){t.value3=o},expression:"value3"}})],1)},Ge=[];const Qe={name:"AutoCompleteSize",data(){return{value1:"",value2:"",value3:""}}},R={};var Ye=b(Qe,Je,Ge,!1,Ze,null,null,null);function Ze(t){for(let e in R)this[e]=R[e]}const _t=function(){return Ye.exports}();var et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("t-space",{attrs:{direction:"vertical",size:"32px"}},[n("t-auto-complete",{attrs:{options:t.options,disabled:"",tips:"\u8FD9\u662F\u7981\u7528\u72B6\u6001",highlightKeyword:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"},on:{change:t.onChange},model:{value:t.value1,callback:function(o){t.value1=o},expression:"value1"}}),n("t-auto-complete",{attrs:{options:t.options,readonly:"",tips:"\u8FD9\u662F\u53EA\u8BFB\u72B6\u6001",highlightKeyword:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"},on:{change:t.onChange},model:{value:t.value2,callback:function(o){t.value2=o},expression:"value2"}}),n("t-auto-complete",{attrs:{options:t.options,tips:"\u8FD9\u662F\u666E\u901A\u72B6\u6001",highlightKeyword:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"},on:{change:t.onChange},model:{value:t.value3,callback:function(o){t.value3=o},expression:"value3"}}),n("t-auto-complete",{attrs:{options:t.options,tips:"\u8FD9\u662F\u544A\u8B66\u72B6\u6001",status:"warning",highlightKeyword:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"},on:{change:t.onChange},model:{value:t.value4,callback:function(o){t.value4=o},expression:"value4"}}),n("t-auto-complete",{attrs:{options:t.options,tips:"\u8FD9\u662F\u9519\u8BEF\u72B6\u6001",status:"error",highlightKeyword:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"},on:{change:t.onChange},model:{value:t.value5,callback:function(o){t.value5=o},expression:"value5"}}),n("t-auto-complete",{attrs:{options:t.options,tips:"\u8FD9\u662F\u6210\u529F\u72B6\u6001",status:"success",highlightKeyword:"",placeholder:"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"},on:{change:t.onChange},model:{value:t.value6,callback:function(o){t.value6=o},expression:"value6"}})],1)},tt=[];const nt={name:"AutoCompleteStatus",data(){return{value1:"\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD",value2:"\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD",value3:"",value4:"",value5:"",value6:"",options:["\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD","\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD","\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD"],timer:null}},methods:{onChange(t){clearTimeout(this.timer),this.timer=setTimeout(()=>{const e="\u641C\u7D22\u8054\u60F3\u8BCD",n=t.replace(`\u7B2C\u4E00\u4E2A${e}`,"").replace(`\u7B2C\u4E8C\u4E2A${e}`,"").replace(`\u7B2C\u4E09\u4E2A${e}`,"");this.options=[`${n}\u7B2C\u4E00\u4E2A${e}`,`${n}\u7B2C\u4E8C\u4E2A${e}`,`${n}\u7B2C\u4E09\u4E2A${e}`],clearTimeout(this.timer)},200)}}},M={};var ot=b(nt,et,tt,!1,at,null,null,null);function at(t){for(let e in M)this[e]=M[e]}const yt=function(){return ot.exports}(),Ct=`<template>
  <t-space direction="vertical" class="t-demo-auto-complete__base">
    <t-auto-complete
      v-model="value"
      :options="options"
      highlightKeyword
      :filterable="false"
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      clearable
      @change="onChange"
    />

    <!-- \u590D\u6742 UI \u9700\u6C42\uFF0C\u53EF\u53C2\u8003\u5F53\u524D\u793A\u4F8B\u5B8C\u6210 -->
    <t-auto-complete
      v-model="value2"
      :options="options"
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22\uFF08\u53F3\u4FA7\u641C\u7D22\u6309\u94AE\u53EF\u4EE5\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\uFF09"
      highlightKeyword
      filterable
      class="t-demo-autocomplete__search"
    >
      <template v-if="value2" #suffix>
        <close-circle-filled-icon class="t-input__suffix-clear" @click="value2 = ''" />
      </template>
      <template #suffixIcon>
        <t-button shape="square"><search-icon /></t-button>
      </template>
    </t-auto-complete>
  </t-space>
</template>

<script>
import { SearchIcon, CloseCircleFilledIcon } from 'tdesign-icons-vue';

export default {
  name: 'AutoCompleteBase',

  components: {
    SearchIcon,
    CloseCircleFilledIcon,
  },

  data() {
    return {
      value: '',
      value2: '',
      options: ['\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD'],
      timer: null,
    };
  },

  methods: {
    // \u8F93\u5165\u6846\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\u8FDB\u884C\u641C\u7D22\uFF0C200ms \u641C\u7D22\u4E00\u6B21
    onChange(value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const text = '\u641C\u7D22\u8054\u60F3\u8BCD';
        const pureValue = value.replace(\`\u7B2C\u4E00\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E8C\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E09\u4E2A\${text}\`, '');

        this.options = [\`\${pureValue}\u7B2C\u4E00\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E8C\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E09\u4E2A\${text}\`];
        clearTimeout(this.timer);
      }, 200);
    },
  },
};
<\/script>

<style>
.t-demo-autocomplete__search .t-input {
  padding-right: 0;
}
.t-demo-auto-complete__base .t-button svg {
  font-size: 20px;
}
</style>
`,xt=`<template>
  <t-space>
    <!-- \u7EC4\u4EF6\u5185\u7F6E\u7684\u8FC7\u6EE4\u89C4\u5219\uFF1A\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u6587\u672C\u4EFB\u610F\u4F4D\u7F6E\u5339\u914D -->
    <t-auto-complete
      v-model="value1"
      :options="options"
      highlightKeyword
      filterable
      placeholder="\u7EC4\u4EF6\u9ED8\u8BA4\u8FC7\u6EE4\u89C4\u5219\uFF08\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09"
      style="width: 280px"
    />

    <!-- \u5916\u90E8\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219\uFF1A\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u6587\u672C\u5F00\u59CB\u4F4D\u7F6E\u5339\u914D -->
    <t-auto-complete
      v-model="value2"
      :options="options"
      :filter="filterWords"
      highlightKeyword
      placeholder="\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u89C4\u5219\uFF08\u533A\u5206\u5927\u5C0F\u5199\uFF09"
      style="width: 280px"
    />
  </t-space>
</template>

<script>
const LIST = ['\u7B2C\u4E00\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A AutoComplete \u9ED8\u8BA4\u8054\u60F3\u8BCD'];

export default {
  name: 'AutoCompleteFilter',

  data() {
    return {
      value1: '',
      value2: '',
      options: [...LIST],
      timer: null,
    };
  },

  methods: {
    filterWords(keyword, option) {
      const regExp = new RegExp(keyword);
      return regExp.test(option.text);
    },
  },
};
<\/script>
`,bt=`<template>
  <t-space direction="vertical" class="t-demo-autocomplete-option">
    <!-- \u4F7F\u7528 options \u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879 -->
    <t-auto-complete
      v-model="value1"
      :options="options1"
      :popupProps="{ overlayClassName: 't-demo-autocomplete-option-list' }"
      placeholder="\u4F7F\u7528\u5C5E\u6027\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u9009\u9879\u5185\u5BB9"
    />

    <!-- \u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9009\u9879 -->
    <t-auto-complete
      v-model="value2"
      :options="options2"
      :popupProps="{ overlayClassName: 't-demo-autocomplete-option-list' }"
      placeholder="\u4F7F\u7528\u63D2\u69FD\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u9009\u9879\u5185\u5BB9"
    >
      <template #option="{ option }">
        <div class="custom-option">
          <img :src="option.avatar" />
          <div class="custom-option__main">
            <!-- highlightKeyword -->
            <t-highlight-option :content="option.text" :keyword="value2" />
            <small class="description">{{ option.description }}</small>
          </div>
        </div>
      </template>
    </t-auto-complete>
  </t-space>
</template>

<!-- lang="jsx" \u91CD\u8981  -->
<script lang="jsx">
import { HighlightOption } from 'tdesign-vue';

const TEXTS = ['\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD'];

export default {
  name: 'AutoCompleteOption',

  components: {
    THighlightOption: HighlightOption,
  },

  data() {
    return {
      value1: '',
      value2: '',
      options2: [
        {
          label: '\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
          description: '\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3',
          avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        },
        {
          label: '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
          description: '\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3',
          avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        },
        {
          label: '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
          description: '\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\u3002\u4F7F\u7528\u63D2\u69FD\u6E32\u67D3',
          avatar: 'https://tdesign.gtimg.com/site/avatar.jpg',
        },
      ],
      timer: null,
    };
  },

  computed: {
    options1() {
      return TEXTS.map((text) => ({
        text,
        label: () => (
          <div class="custom-option">
            <img src="https://tdesign.gtimg.com/site/avatar.jpg" />
            <div class="custom-option__main">
              <t-highlight-option content={text} keyword={this.value1} />
              <small class="description">\u8FD9\u662F\u5173\u4E8E\u8054\u60F3\u8BCD\u7684\u63CF\u8FF0\uFF0C\u4F7F\u7528 Props \u5C5E\u6027\u6E32\u67D3</small>
            </div>
          </div>
        ),
      }));
    },
  },
};
<\/script>

<style>
.t-demo-autocomplete-option-list .t-select-option {
  height: 50px;
}

.t-demo-autocomplete-option-list .custom-option {
  display: flex;
  align-items: center;
}

.t-demo-autocomplete-option-list .custom-option > img {
  max-height: 40px;
  border-radius: 50%;
}

.t-demo-autocomplete-option-list .custom-option__main {
  margin-left: 8px;
}

.t-demo-autocomplete-option-list .custom-option .description {
  color: var(--td-gray-color-9);
}
</style>
`,$t=`<template>
  <div>
    <!-- \u4E0B\u62C9\u6D6E\u5C42\u9ED8\u8BA4\u89E6\u53D1\u65B9\u5F0F\u4E3A focus\uFF0C\u5982\u679C\u671F\u671B\u66F4\u4E3A\u5176\u4ED6\uFF0C\u53EF\u4EE5\u8BBE\u7F6E :popupProps="{ trigger: 'click' }" -->
    <t-auto-complete v-model="value" :options="options" highlightKeyword @change="onChange">
      <t-textarea v-model="value" placeholder="\u81EA\u5B9A\u4E49\u8054\u60F3\u8BCD\u89E6\u53D1\u5143\u7D20"></t-textarea>
    </t-auto-complete>
  </div>
</template>

<script>
export default {
  name: 'AutoCompleteTriggerElement',

  data() {
    return {
      value: '',
      options: ['First AutoComplete Textarea', 'Second AutoComplete Textarea', 'Third AutoComplete Textarea'],
      timer: null,
    };
  },

  methods: {
    // \u8F93\u5165\u6846\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\u8FDB\u884C\u641C\u7D22\uFF0C200ms \u641C\u7D22\u4E00\u6B21
    onChange(value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const text = 'AutoComplete Textarea';
        const pureValue = value.replace(\`First \${text}\`, '').replace(\`Second \${text}\`, '').replace(\`Third \${text}\`, '');

        this.options = [\`\${pureValue}First \${text}\`, \`\${pureValue}Second \${text}\`, \`\${pureValue}Third \${text}\`];
        clearTimeout(this.timer);
      }, 200);
    },
  },
};
<\/script>
`,wt=`<template>
  <t-space direction="vertical">
    <t-auto-complete
      v-model="value1"
      size="small"
      :inputProps="{ label: '\u5C0F\u5C3A\u5BF8\uFF1A' }"
      :options="['\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD']"
    />

    <t-auto-complete
      v-model="value2"
      :inputProps="{ label: '\u4E2D\u5C3A\u5BF8\uFF1A' }"
      :options="['\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD']"
    />

    <t-auto-complete
      v-model="value3"
      size="large"
      :inputProps="{ label: '\u5927\u5C3A\u5BF8\uFF1A' }"
      :options="['\u7B2C\u4E00\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u8054\u60F3\u8BCD']"
    />
  </t-space>
</template>

<script>
export default {
  name: 'AutoCompleteSize',

  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
    };
  },
};
<\/script>
`,Pt=`<template>
  <t-space direction="vertical" size="32px">
    <t-auto-complete
      v-model="value1"
      :options="options"
      disabled
      tips="\u8FD9\u662F\u7981\u7528\u72B6\u6001"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value2"
      :options="options"
      readonly
      tips="\u8FD9\u662F\u53EA\u8BFB\u72B6\u6001"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value3"
      :options="options"
      tips="\u8FD9\u662F\u666E\u901A\u72B6\u6001"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value4"
      :options="options"
      tips="\u8FD9\u662F\u544A\u8B66\u72B6\u6001"
      status="warning"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value5"
      :options="options"
      tips="\u8FD9\u662F\u9519\u8BEF\u72B6\u6001"
      status="error"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
    <t-auto-complete
      v-model="value6"
      :options="options"
      tips="\u8FD9\u662F\u6210\u529F\u72B6\u6001"
      status="success"
      highlightKeyword
      placeholder="\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22"
      @change="onChange"
    />
  </t-space>
</template>

<script>
export default {
  name: 'AutoCompleteStatus',

  data() {
    return {
      value1: '\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
      value2: '\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      options: ['\u7B2C\u4E00\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E8C\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD', '\u7B2C\u4E09\u4E2A\u9ED8\u8BA4\u8054\u60F3\u8BCD'],
      timer: null,
    };
  },

  methods: {
    // \u8F93\u5165\u6846\u5185\u5BB9\u53D1\u751F\u53D8\u5316\u65F6\u8FDB\u884C\u641C\u7D22\uFF0C200ms \u641C\u7D22\u4E00\u6B21
    onChange(value) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const text = '\u641C\u7D22\u8054\u60F3\u8BCD';
        const pureValue = value.replace(\`\u7B2C\u4E00\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E8C\u4E2A\${text}\`, '').replace(\`\u7B2C\u4E09\u4E2A\${text}\`, '');

        this.options = [\`\${pureValue}\u7B2C\u4E00\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E8C\u4E2A\${text}\`, \`\${pureValue}\u7B2C\u4E09\u4E2A\${text}\`];
        clearTimeout(this.timer);
      }, 200);
    },
  },
};
<\/script>
`;export{dt as D,ht as a,gt as b,ft as c,_t as d,yt as e,Ct as f,xt as g,bt as h,$t as i,wt as j,Pt as k};
