import{V as _,n as i,r as f}from"./index.4ab857ef.js";import{S as r}from"./search.98f31a43.js";import{U as c}from"./user.05d264a7.js";import{E as p}from"./ellipsis.7486b953.js";import{u as P,_ as j}from"./use-size-props.363c09d5.js";import{_ as D,I as U}from"./icon.6041ac7f.js";import{I as m}from"./index.c25e1a9b.js";var H=["size"];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?b(Object(t),!0).forEach(function(a){j(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var R={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M1.5 4a1 1 0 011-1h11a1 1 0 011 1v8a1 1 0 01-1 1h-11a1 1 0 01-1-1V4zm11.6 0H2.9L8 7.4 13.1 4zm-10.6.93V12h11V4.93L8 8.6 2.5 4.93z",fillOpacity:.9}}]},v=_.extend({name:"MailIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var a=t.props,o=t.data,s=a.size,l=D(a,H),u=P(s),d=u.className,h=u.style,g=x(x({},l||{}),{},{id:"mail",icon:R,staticClass:d,style:h});return o.props=g,n(U,o)}}),F=["size"];function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?y(Object(t),!0).forEach(function(a){j(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var N={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M14 4.5H2v-1h12v1zM14 8.5H2v-1h12v1zM2 12.5h12v-1H2v1z",fillOpacity:.9}}]},B=_.extend({name:"ViewListIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,t){var a=t.props,o=t.data,s=a.size,l=D(a,F),u=P(s),d=u.className,h=u.style,g=k(k({},l||{}),{},{id:"view-list",icon:N,staticClass:d,style:h});return o.props=g,n(U,o)}}),T=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("t-head-menu",{attrs:{theme:"light"},on:{change:e.changeHandler},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{height:"28",src:"https://tdesign.gtimg.com/site/baseLogo-light.png",alt:"logo"}})]},proxy:!0},{key:"operations",fn:function(){return[t("t-button",{attrs:{variant:"text",shape:"square"}},[t("search-icon",{attrs:{slot:"icon",shape:"square"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("mail-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("user-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("ellipsis-icon",{attrs:{slot:"icon"},slot:"icon"})],1)]},proxy:!0}]),model:{value:e.menu1Value,callback:function(a){e.menu1Value=a},expression:"menu1Value"}},[t("t-menu-item",{attrs:{value:"item1"}},[e._v("\u83DC\u53551")]),t("t-menu-item",{attrs:{value:"item2"}},[e._v("\u83DC\u53552")]),t("t-menu-item",{attrs:{value:"item4",disabled:!0}},[e._v("\u7981\u7528\u83DC\u5355")])],1),t("br"),t("t-head-menu",{attrs:{theme:"dark",height:"120px"},scopedSlots:e._u([{key:"operations",fn:function(){return[t("div",{staticClass:"t-demo-menu--dark"},[t("t-button",{attrs:{variant:"text",shape:"square"}},[t("search-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("mail-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("user-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("ellipsis-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1)]},proxy:!0}]),model:{value:e.menu2Value,callback:function(a){e.menu2Value=a},expression:"menu2Value"}},[t("img",{attrs:{slot:"logo",height:"28",src:"https://tdesign.gtimg.com/site/baseLogo-dark.png",alt:"logo"},slot:"logo"}),t("t-menu-item",{attrs:{value:"item1"}},[e._v("\u83DC\u53551")]),t("t-menu-item",{attrs:{value:"item2"}},[e._v("\u83DC\u53552")]),t("t-menu-item",{attrs:{value:"item4",disabled:!0}},[e._v("\u7981\u7528\u83DC\u5355")])],1)],1)},G=[];const K={components:{SearchIcon:r,MailIcon:v,UserIcon:c,EllipsisIcon:p},data(){return{menu1Value:"item2",menu2Value:"item1"}},methods:{changeHandler(e){console.log("change",e)}}},S={};var J=i(K,T,G,!1,W,"88fcaff6",null,null);function W(e){for(let n in S)this[n]=S[n]}const Yt=function(){return J.exports}();var A=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"box"},[t("t-head-menu",{attrs:{defaultValue:"1-1",defaultExpanded:e.expanded},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{height:"28",src:"https://tdesign.gtimg.com/site/baseLogo-light.png",alt:"logo"}})]},proxy:!0},{key:"operations",fn:function(){return[t("t-button",{attrs:{variant:"text",shape:"square"}},[t("search-icon",{attrs:{slot:"icon",shape:"square"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("mail-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("user-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("ellipsis-icon",{attrs:{slot:"icon"},slot:"icon"})],1)]},proxy:!0}])},[t("t-submenu",{attrs:{value:"1"},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",[e._v("\u83DC\u53551")])]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"1-1"}},[e._v("\u5B50\u83DC\u53551-1")]),t("t-menu-item",{attrs:{value:"1-2"}},[e._v("\u5B50\u83DC\u53551-2")]),t("t-menu-item",{attrs:{value:"1-3"}},[e._v("\u5B50\u83DC\u53551-3")])],1),t("t-submenu",{attrs:{value:"2"},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",[e._v("\u83DC\u53552")])]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"2-1"}},[e._v("\u5B50\u83DC\u53552-1")]),t("t-menu-item",{attrs:{value:"2-2"}},[e._v("\u5B50\u83DC\u53552-2")]),t("t-menu-item",{attrs:{value:"2-3"}},[e._v("\u5B50\u83DC\u53552-3")])],1)],1),t("t-head-menu",{staticStyle:{"margin-top":"24px"},attrs:{defaultValue:"1-1",theme:"dark",expanded:e.expanded2},on:{expand:function(a){e.expanded2=a}},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{height:"28",src:"https://tdesign.gtimg.com/site/baseLogo-dark.png",alt:"logo"}})]},proxy:!0},{key:"operations",fn:function(){return[t("div",{staticClass:"t-demo-menu--dark"},[t("t-button",{attrs:{variant:"text",shape:"square"}},[t("search-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("mail-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("user-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("ellipsis-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1)]},proxy:!0}])},[t("t-submenu",{attrs:{value:"1"},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",[e._v("\u83DC\u53551")])]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"1-1"}},[e._v("\u5B50\u83DC\u53551-1")]),t("t-menu-item",{attrs:{value:"1-2"}},[e._v("\u5B50\u83DC\u53551-2")]),t("t-menu-item",{attrs:{value:"1-3"}},[e._v("\u5B50\u83DC\u53551-3")])],1),t("t-submenu",{attrs:{value:"2"},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",[e._v("\u83DC\u53552")])]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"2-1"}},[e._v("\u5B50\u83DC\u53552-1")]),t("t-menu-item",{attrs:{value:"2-2"}},[e._v("\u5B50\u83DC\u53552-2")]),t("t-menu-item",{attrs:{value:"2-3"}},[e._v("\u5B50\u83DC\u53552-3")])],1)],1)],1)},Q=[];const X=_.extend({components:{SearchIcon:r,MailIcon:v,UserIcon:c,EllipsisIcon:p},data(){return{expanded:["1"],expanded2:["1"]}}}),$={};var Y=i(X,A,Q,!1,Z,"fb4d83fc",null,null);function Z(e){for(let n in $)this[n]=$[n]}const Zt=function(){return Y.exports}();var tt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"box"},[t("t-head-menu",{attrs:{defaultValue:"2-1",expandType:"popup"},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{height:"28",src:"https://tdesign.gtimg.com/site/baseLogo-light.png",alt:"logo"}})]},proxy:!0},{key:"operations",fn:function(){return[t("t-button",{attrs:{variant:"text",shape:"square"}},[t("search-icon",{attrs:{slot:"icon",shape:"square"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("mail-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("user-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("ellipsis-icon",{attrs:{slot:"icon"},slot:"icon"})],1)]},proxy:!0}])},[t("t-submenu",{attrs:{value:"1"},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",[e._v("\u83DC\u53551")])]},proxy:!0}])},[t("t-submenu",{attrs:{value:"1-0",title:"\u5B50\u83DC\u53551-1"}},[t("t-menu-item",{attrs:{value:"1-1-1"}},[e._v("\u5B50\u83DC\u53551-1-1")]),t("t-menu-item",{attrs:{value:"1-1-2"}},[e._v("\u5B50\u83DC\u53551-1-2")]),t("t-menu-item",{attrs:{value:"1-1-3"}},[e._v("\u5B50\u83DC\u53551-1-3")])],1),t("t-menu-item",{attrs:{value:"1-2"}},[e._v("\u5B50\u83DC\u53551-2")]),t("t-menu-item",{attrs:{value:"1-3"}},[e._v("\u5B50\u83DC\u53551-3")]),t("t-menu-item",{attrs:{value:"1-4"}},[e._v("\u5B50\u83DC\u53551-4")]),t("t-submenu",{attrs:{value:"1-5",title:"\u5B50\u83DC\u53551-5"}},[t("t-menu-item",{attrs:{value:"1-5-1"}},[e._v("\u5B50\u83DC\u53551-5-1")]),t("t-menu-item",{attrs:{value:"1-5-2"}},[e._v("\u5B50\u83DC\u53551-5-2")]),t("t-menu-item",{attrs:{value:"1-5-3"}},[e._v("\u5B50\u83DC\u53551-5-3")])],1)],1),t("t-submenu",{attrs:{value:"2",title:"\u83DC\u53552"}},[t("t-menu-item",{attrs:{value:"2-1"}},[e._v("\u5B50\u83DC\u53552-1")]),t("t-menu-item",{attrs:{value:"2-2"}},[e._v("\u5B50\u83DC\u53552-2")]),t("t-menu-item",{attrs:{value:"2-3"}},[e._v("\u5B50\u83DC\u53552-3")])],1)],1),t("t-head-menu",{staticStyle:{"margin-top":"24px"},attrs:{defaultValue:"2-1",theme:"dark",expandType:"popup"},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{height:"28",src:"https://tdesign.gtimg.com/site/baseLogo-dark.png",alt:"logo"}})]},proxy:!0},{key:"operations",fn:function(){return[t("div",{staticClass:"t-demo-menu--dark"},[t("t-button",{attrs:{variant:"text",shape:"square"}},[t("search-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("mail-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("user-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("ellipsis-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1)]},proxy:!0}])},[t("t-submenu",{attrs:{value:"1"},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",[e._v("\u83DC\u53551")])]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"1-1"}},[e._v("\u5B50\u83DC\u53551-1")]),t("t-menu-item",{attrs:{value:"1-2"}},[e._v("\u5B50\u83DC\u53551-2")]),t("t-menu-item",{attrs:{value:"1-3"}},[e._v("\u5B50\u83DC\u53551-3")])],1),t("t-submenu",{attrs:{value:"2","popup-props":{overlayClassName:"custom-popup-class"}},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",[e._v("\u83DC\u53552")])]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"2-1"}},[e._v("\u5B50\u83DC\u53552-1")]),t("t-menu-item",{attrs:{value:"2-2"}},[e._v("\u5B50\u83DC\u53552-2")]),t("t-menu-item",{attrs:{value:"2-3"}},[e._v("\u5B50\u83DC\u53552-3")])],1)],1)],1)},et=[];const nt={components:{SearchIcon:r,MailIcon:v,UserIcon:c,EllipsisIcon:p}},q={};var at=i(nt,tt,et,!1,ot,"0b1695b2",null,null);function ot(e){for(let n in q)this[n]=q[n]}const te=function(){return at.exports}();var it=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-head-menu",{attrs:{theme:"dark",defaultValue:"item2"},scopedSlots:e._u([{key:"operations",fn:function(){return[t("div",{staticClass:"t-demo-menu--dark"},[t("t-button",{attrs:{variant:"text",shape:"square"}},[t("search-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("mail-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("user-icon",{attrs:{slot:"icon"},slot:"icon"})],1),t("t-button",{attrs:{variant:"text",shape:"square"}},[t("ellipsis-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1)]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"item1"}},[e._v("\u83DC\u53551")]),t("t-menu-item",{attrs:{value:"item2"}},[e._v("\u83DC\u53552")]),t("t-menu-item",{attrs:{value:"item3"}},[e._v("\u83DC\u53553")]),t("t-menu-item",{attrs:{value:"item4",disabled:!0}},[e._v("\u7981\u7528\u83DC\u5355")])],1)},ut=[];const st={components:{SearchIcon:r,MailIcon:v,UserIcon:c,EllipsisIcon:p}},I={};var lt=i(st,it,ut,!1,mt,"5d6497c5",null,null);function mt(e){for(let n in I)this[n]=I[n]}const ee=function(){return lt.exports}();var rt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"box"},[t("t-menu",{staticStyle:{"margin-right":"40px"},attrs:{theme:"light",defaultValue:"item1",height:"550px"},on:{change:e.changeHandler},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{height:"28",src:"https://tdesign.gtimg.com/site/baseLogo-light.png",alt:"logo"}})]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"item1",href:"/vue",target:"_blank"}},[e._v("\u4EEA\u8868\u76D8")]),t("t-menu-item",{attrs:{value:"item2"}},[e._v("\u8D44\u6E90\u5217\u8868")]),t("t-menu-item",{attrs:{value:"item3"}},[e._v("\u6839\u76EE\u5F55")]),t("t-menu-item",{attrs:{value:"item4",disabled:!0}},[e._v("\u8C03\u5EA6\u5E73\u53F0")]),t("t-menu-item",{attrs:{value:"item5"}},[e._v("\u7CBE\u51C6\u76D1\u63A7")]),t("t-menu-item",{attrs:{value:"item6"}},[e._v("\u6D88\u606F\u533A")]),t("t-menu-item",{attrs:{value:"item7"}},[e._v("\u4E2A\u4EBA\u4E2D\u5FC3")]),t("t-menu-item",{attrs:{value:"item8"}},[e._v("\u89C6\u9891\u533A")]),t("t-menu-item",{attrs:{value:"item9"}},[e._v("\u8D44\u6E90\u7F16\u8F91")])],1),t("t-menu",{staticStyle:{"margin-right":"40px"},attrs:{theme:"light",defaultValue:"dashboard",height:"550px"},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{height:"28",src:"https://tdesign.gtimg.com/site/baseLogo-light.png",alt:"logo"}})]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"dashboard"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"dashboard"}})]},proxy:!0}])},[e._v(" \u4EEA\u8868\u76D8 ")]),t("t-menu-item",{attrs:{value:"resource"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"server"}})]},proxy:!0}])},[e._v(" \u8D44\u6E90\u5217\u8868 ")]),t("t-menu-item",{attrs:{value:"root"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"root-list"}})]},proxy:!0}])},[e._v(" \u6839\u76EE\u5F55 ")]),t("t-menu-item",{attrs:{value:"control-platform"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"control-platform"}})]},proxy:!0}])},[e._v(" \u8C03\u5EA6\u5E73\u53F0 ")]),t("t-menu-item",{attrs:{value:"precise-monitor"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"precise-monitor"}})]},proxy:!0}])},[e._v(" \u7CBE\u51C6\u76D1\u63A7 ")]),t("t-menu-item",{attrs:{value:"mail"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"mail"}})]},proxy:!0}])},[e._v(" \u6D88\u606F\u533A ")]),t("t-menu-item",{attrs:{value:"user-circle"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"user-circle"}})]},proxy:!0}])},[e._v(" \u4E2A\u4EBA\u4E2D\u5FC3 ")]),t("t-menu-item",{attrs:{value:"play-circle"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"play-circle"}})]},proxy:!0}])},[e._v(" \u89C6\u9891\u533A ")]),t("t-menu-item",{attrs:{value:"edit1"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"edit-1"}})]},proxy:!0}])},[e._v(" \u8D44\u6E90\u7F16\u8F91 ")])],1),t("t-menu",{attrs:{theme:"dark",defaultValue:"dashboard",height:"550px"}},[t("img",{attrs:{slot:"logo",height:"28",src:"https://tdesign.gtimg.com/site/baseLogo-dark.png",alt:"logo"},slot:"logo"}),t("t-menu-item",{attrs:{value:"dashboard"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"dashboard"}})]},proxy:!0}])},[e._v(" \u4EEA\u8868\u76D8 ")]),t("t-menu-item",{attrs:{value:"resource"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"server"}})]},proxy:!0}])},[e._v(" \u8D44\u6E90\u5217\u8868 ")]),t("t-menu-item",{attrs:{value:"root"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"root-list"}})]},proxy:!0}])},[e._v(" \u6839\u76EE\u5F55 ")]),t("t-menu-item",{attrs:{value:"control-platform"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"control-platform"}})]},proxy:!0}])},[e._v(" \u8C03\u5EA6\u5E73\u53F0 ")]),t("t-menu-item",{attrs:{value:"precise-monitor"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"precise-monitor"}})]},proxy:!0}])},[e._v(" \u7CBE\u51C6\u76D1\u63A7 ")]),t("t-menu-item",{attrs:{value:"mail"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"mail"}})]},proxy:!0}])},[e._v(" \u6D88\u606F\u533A ")]),t("t-menu-item",{attrs:{value:"user-circle"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"user-circle"}})]},proxy:!0}])},[e._v(" \u4E2A\u4EBA\u4E2D\u5FC3 ")]),t("t-menu-item",{attrs:{value:"play-circle"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"play-circle"}})]},proxy:!0}])},[e._v(" \u89C6\u9891\u533A ")]),t("t-menu-item",{attrs:{value:"edit1"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"edit-1"}})]},proxy:!0}])},[e._v(" \u8D44\u6E90\u7F16\u8F91 ")])],1)],1)},ct=[];const pt={components:{Icon:m},methods:{changeHandler(e){console.log("change",e)}}},C={};var vt=i(pt,rt,ct,!1,dt,null,null,null);function dt(e){for(let n in C)this[n]=C[n]}const ne=function(){return vt.exports}();var ht=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"box"},[t("t-menu",{attrs:{theme:"light",defaultValue:"3-2",expandMutex:"",defaultExpanded:e.expanded,height:"550px",collapsed:e.collapsed},scopedSlots:e._u([{key:"operations",fn:function(){return[t("t-button",{attrs:{variant:"text",shape:"square"}},[t("t-button",{attrs:{variant:"text",shape:"square"},nativeOn:{click:function(a){return e.changeCollapsed.apply(null,arguments)}}},[t("view-list-icon",{attrs:{slot:"icon"},slot:"icon"})],1)],1)]},proxy:!0}])},[t("t-submenu",{attrs:{title:"\u6D88\u606F\u533A",value:"3"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"mail"}})]},proxy:!0}])},[t("t-submenu",{attrs:{title:"\u4E8C\u7EA7\u83DC\u5355",value:"3-1"}},[t("t-menu-item",{attrs:{value:"3-1-1"}},[e._v("\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"3-1-2"}},[e._v("\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"3-1-3"}},[e._v("\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9")])],1),t("t-submenu",{attrs:{title:"\u4E8C\u7EA7\u83DC\u5355",value:"3-5"}},[t("t-menu-item",{attrs:{value:"3-5-1"}},[e._v("\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"3-5-2"}},[e._v("\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"3-5-3"}},[e._v("\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9")])],1),t("t-menu-item",{attrs:{value:"3-2"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"3-3"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"3-4"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")])],1),t("t-menu-item",{attrs:{value:"user-circle"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"user-circle"}})]},proxy:!0}])},[e._v(" \u4E2A\u4EBA\u4E2D\u5FC3 ")]),t("t-submenu",{attrs:{disabled:"",title:"\u89C6\u9891\u533A",value:"4"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"play-circle"}})]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"4-1"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"4-2"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"4-3"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")])],1),t("t-menu-item",{attrs:{value:"edit1"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"edit-1"}})]},proxy:!0}])},[e._v(" \u8D44\u6E90\u7F16\u8F91 ")])],1),t("t-menu",{staticStyle:{"margin-left":"40px"},attrs:{theme:"dark",defaultValue:"2-1",expanded:e.expanded2,height:"550px",collapsed:e.collapsed2},on:{expand:function(a){e.expanded2=a}},scopedSlots:e._u([{key:"operations",fn:function(){return[t("t-button",{staticClass:"t-demo-collapse-btn",attrs:{variant:"text",shape:"square"},nativeOn:{click:function(a){return e.changeCollapsed2.apply(null,arguments)}}},[t("view-list-icon",{attrs:{slot:"icon"},slot:"icon"})],1)]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"item1"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"dashboard"}})]},proxy:!0}])},[e._v(" \u4EEA\u8868\u76D8 ")]),t("t-menu-item",{attrs:{value:"resource"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"server"}})]},proxy:!0}])},[e._v(" \u8D44\u6E90\u5217\u8868 ")]),t("t-menu-item",{attrs:{value:"root"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"root-list"}})]},proxy:!0}])},[e._v(" \u6839\u76EE\u5F55 ")]),t("t-submenu",{attrs:{title:"\u8C03\u5EA6\u5E73\u53F0",value:"2"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"control-platform"}})]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"2-1"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"2-2"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"2-3"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")])],1),t("t-menu-item",{attrs:{value:"precise-monitor"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"precise-monitor"}})]},proxy:!0}])},[e._v(" \u7CBE\u51C6\u76D1\u63A7 ")]),t("t-submenu",{attrs:{disabled:"",title:"\u6D88\u606F\u533A",value:"3"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"mail"}})]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"3-1"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"3-2"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"3-3"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")])],1),t("t-menu-item",{attrs:{value:"user-circle"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"user-circle"}})]},proxy:!0}])},[e._v(" \u4E2A\u4EBA\u4E2D\u5FC3 ")]),t("t-submenu",{attrs:{title:"\u89C6\u9891\u533A",value:"4"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"play-circle"}})]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"4-1"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"4-2"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"4-3"}},[e._v("\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9")])],1),t("t-menu-item",{attrs:{value:"edit1"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"edit-1"}})]},proxy:!0}])},[e._v(" \u8D44\u6E90\u7F16\u8F91 ")])],1)],1)},gt=[];const _t={components:{Icon:m,ViewListIcon:B},data(){return{expanded:["2","3"],expanded2:["2"],disabled:!0,collapsed:!1,collapsed2:!1}},methods:{changeCollapsed(){this.collapsed=!this.collapsed},changeCollapsed2(){this.collapsed2=!this.collapsed2}}},V={};var ft=i(_t,ht,gt,!1,bt,"34005dc1",null,null);function bt(e){for(let n in V)this[n]=V[n]}const ae=function(){return ft.exports}();var xt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-menu",{attrs:{theme:"light",defaultValue:"2-1",expanded:e.expanded,collapsed:e.collapsed,expandMutex:""},on:{expand:e.handleExpand},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{width:e.collapsed?35:136,src:e.iconUrl,alt:"logo"}})]},proxy:!0},{key:"operations",fn:function(){return[t("t-button",{staticClass:"t-demo-collapse-btn",attrs:{variant:"text",shape:"square"},nativeOn:{click:function(a){return e.changeCollapsed.apply(null,arguments)}}},[t("icon",{attrs:{name:"view-list"}})],1)]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"item1"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"dashboard"}})]},proxy:!0}])},[e._v(" \u4EEA\u8868\u76D8 ")]),t("t-submenu",{attrs:{value:"2"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"user-circle"}})]},proxy:!0},{key:"title",fn:function(){return[t("span",[e._v("\u4E2A\u4EBA\u4E2D\u5FC3")])]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"2-1"}},[e._v("\u5B50\u83DC\u5355\u5185\u5BB9\u4E00")]),t("t-menu-item",{attrs:{value:"2-2"}},[e._v("\u5B50\u83DC\u5355\u5185\u5BB9\u4E8C")]),t("t-menu-item",{attrs:{value:"2-3"}},[e._v("\u5B50\u83DC\u5355\u5185\u5BB9\u4E09")])],1),t("t-submenu",{attrs:{value:"3"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"root-list"}})]},proxy:!0},{key:"title",fn:function(){return[t("span",[e._v("\u6839\u76EE\u5F55")])]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"3-1"}},[e._v("\u5B50\u83DC\u5355\u5185\u5BB9\u4E00")]),t("t-menu-item",{attrs:{value:"3-2"}},[e._v("\u5B50\u83DC\u5355\u5185\u5BB9\u4E8C")]),t("t-menu-item",{attrs:{value:"3-3"}},[e._v("\u5B50\u83DC\u5355\u5185\u5BB9\u4E09")])],1),t("t-menu-item",{attrs:{value:"item4",disabled:e.disabled},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"server"}})]},proxy:!0}])},[e._v(" \u8D44\u6E90\u5217\u8868 ")])],1)},yt=[];const kt={components:{Icon:m},data(){return{expanded:["2"],disabled:!0,collapsed:!1,iconUrl:"https://tdesign.gtimg.com/site/baseLogo-light.png"}},methods:{changeCollapsed(){this.collapsed=!this.collapsed,this.iconUrl=this.collapsed?"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png":"https://tdesign.gtimg.com/site/baseLogo-light.png"},handleExpand(e){console.log("receive handleExpand",e)}}},O={};var St=i(kt,xt,yt,!1,$t,null,null,null);function $t(e){for(let n in O)this[n]=O[n]}const oe=function(){return St.exports}();var qt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-menu",{attrs:{theme:"light",defaultValue:"item2",collapsed:e.collapsed,height:"550px"},on:{change:e.changeHandler},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{width:e.collapsed?35:136,src:e.iconUrl,alt:"logo"}})]},proxy:!0},{key:"operations",fn:function(){return[t("t-button",{staticClass:"t-demo-collapse-btn",attrs:{variant:"text",shape:"square"},nativeOn:{click:function(a){return e.changeCollapsed.apply(null,arguments)}}},[t("icon",{attrs:{name:"view-list"}})],1)]},proxy:!0}])},[t("t-menu-group",{attrs:{title:"\u4E3B\u5BFC\u822A"}},[t("t-menu-item",{attrs:{value:"item1"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"app"}})]},proxy:!0}])},[e._v(" \u4EEA\u8868\u76D8 ")])],1),t("t-menu-group",{attrs:{title:"\u7EC4\u4EF6"}},[t("t-submenu",{attrs:{title:"\u5217\u8868\u9879",value:"2-1"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"server"}})]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"2-1-1"}},[e._v("\u57FA\u7840\u5217\u8868\u9879")]),t("t-menu-item",{attrs:{value:"2-1-2"}},[e._v("\u5361\u7247\u5217\u8868\u9879")]),t("t-menu-item",{attrs:{value:"2-1-3"}},[e._v("\u7B5B\u9009\u5217\u8868\u9879")]),t("t-menu-item",{attrs:{value:"2-1-4"}},[e._v("\u6811\u72B6\u7B5B\u9009\u5217\u8868\u9879")])],1),t("t-menu-item",{attrs:{value:"2-2"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"edit-1"}})]},proxy:!0}])},[e._v(" \u8868\u5355\u9879 ")]),t("t-menu-item",{attrs:{value:"2-3"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"root-list"}})]},proxy:!0}])},[e._v(" \u8BE6\u60C5\u9875 ")]),t("t-menu-item",{attrs:{value:"2-4"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"check"}})]},proxy:!0}])},[e._v(" \u7ED3\u679C\u9875 ")])],1),t("t-menu-group",{attrs:{title:"\u66F4\u591A"}},[t("t-menu-item",{attrs:{value:"item3"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"user"}})]},proxy:!0}])},[e._v(" \u4E2A\u4EBA\u9875 ")]),t("t-menu-item",{attrs:{value:"item4"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"login"}})]},proxy:!0}])},[e._v(" \u767B\u5F55\u9875 ")])],1)],1)},It=[];const Ct={components:{Icon:m},data(){return{collapsed:!1,iconUrl:"https://tdesign.gtimg.com/site/baseLogo-light.png"}},methods:{changeHandler(e){console.log("change",e)},changeCollapsed(){this.collapsed=!this.collapsed,this.iconUrl=this.collapsed?"https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png":"https://tdesign.gtimg.com/site/baseLogo-light.png"}}},w={};var Vt=i(Ct,qt,It,!1,Ot,null,null,null);function Ot(e){for(let n in w)this[n]=w[n]}const ie=function(){return Vt.exports}();var wt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-menu",{attrs:{theme:"light",defaultValue:"item2"},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{height:"28",src:"https://tdesign.gtimg.com/site/baseLogo-light.png",alt:"logo"}})]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"item1"}},[e._v("\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"item2"}},[e._v("\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"item3"}},[e._v("\u83DC\u5355\u5185\u5BB9")]),t("t-menu-item",{attrs:{value:"item4",disabled:!0}},[e._v("\u7981\u7528\u83DC\u5355")])],1)},Lt=[];const Et={},L={};var Mt=i(Et,wt,Lt,!1,Pt,null,null,null);function Pt(e){for(let n in L)this[n]=L[n]}const ue=function(){return Mt.exports}();var jt=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("t-menu",{attrs:{theme:"light",defaultValue:"2-1",collapsed:e.collapsed,height:"550px"},scopedSlots:e._u([{key:"logo",fn:function(){return[t("span",[e._v("LOGO")])]},proxy:!0},{key:"operations",fn:function(){return[t("t-button",{staticClass:"t-demo-collapse-btn",attrs:{variant:"text",shape:"square"},nativeOn:{click:function(a){return e.changeCollapsed.apply(null,arguments)}}},[t("icon",{attrs:{slot:"icon",name:e.iconName},slot:"icon"})],1)]},proxy:!0}])},[t("t-menu-item",{attrs:{value:"item1"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"dashboard"}})]},proxy:!0}])},[e._v(" \u4EEA\u8868\u76D8 ")]),t("t-submenu",{attrs:{value:"2"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"mail"}})]},proxy:!0}])},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("\u4FE1\u606F\u533A")]),t("t-menu-item",{attrs:{value:"2-1"}},[e._v("\u83DC\u5355\u5185\u5BB9\u4E00")]),t("t-menu-item",{attrs:{value:"2-2"}},[e._v("\u83DC\u5355\u5185\u5BB9\u4E8C")]),t("t-menu-item",{attrs:{value:"2-3"}},[e._v("\u83DC\u5355\u5185\u5BB9\u4E09")])],1),t("t-menu-item",{attrs:{value:"item3"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"play-circle"}})]},proxy:!0}])},[e._v(" \u89C6\u9891\u533A ")]),t("t-menu-item",{attrs:{value:"item4",disabled:!0},scopedSlots:e._u([{key:"icon",fn:function(){return[t("icon",{attrs:{name:"edit-1"}})]},proxy:!0}])},[e._v(" \u8D44\u6E90\u533A ")])],1)},Dt=[];const Ut={components:{Icon:m},data(){return{collapsed:!0}},computed:{iconName(){return this.collapsed?"chevron-right":"chevron-left"}},methods:{changeCollapsed(){this.collapsed=!this.collapsed}}},E={};var zt=i(Ut,jt,Dt,!1,Ht,null,null,null);function Ht(e){for(let n in E)this[n]=E[n]}const se=function(){return zt.exports}(),le=`<template>
  <div>
    <t-head-menu theme="light" v-model="menu1Value" @change="changeHandler">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="item1">\u83DC\u53551</t-menu-item>
      <t-menu-item value="item2">\u83DC\u53552</t-menu-item>
      <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
      <template #operations>
        <t-button variant="text" shape="square">
          <search-icon slot="icon" shape="square" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </template>
    </t-head-menu>

    <br />

    <t-head-menu theme="dark" v-model="menu2Value" height="120px">
      <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      <t-menu-item value="item1">\u83DC\u53551</t-menu-item>
      <t-menu-item value="item2">\u83DC\u53552</t-menu-item>
      <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
      <template #operations>
        <div class="t-demo-menu--dark">
          <t-button variant="text" shape="square">
            <search-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <mail-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <user-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <ellipsis-icon slot="icon" />
          </t-button>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    SearchIcon,
    MailIcon,
    UserIcon,
    EllipsisIcon,
  },
  data() {
    return {
      menu1Value: 'item2',
      menu2Value: 'item1',
    };
  },
  methods: {
    changeHandler(active) {
      console.log('change', active);
    },
  },
};
<\/script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}
.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,me=`<template>
  <div class="box">
    <t-head-menu defaultValue="1-1" :defaultExpanded="expanded">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-menu-item value="1-1">\u5B50\u83DC\u53551-1</t-menu-item>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>\u83DC\u53552</span>
        </template>
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <t-button variant="text" shape="square">
          <search-icon slot="icon" shape="square" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </template>
    </t-head-menu>
    <t-head-menu
      defaultValue="1-1"
      theme="dark"
      :expanded="expanded2"
      @expand="expanded2 = $event"
      style="margin-top: 24px"
    >
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-menu-item value="1-1">\u5B50\u83DC\u53551-1</t-menu-item>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
      </t-submenu>
      <t-submenu value="2">
        <template #title>
          <span>\u83DC\u53552</span>
        </template>
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <div class="t-demo-menu--dark">
          <t-button variant="text" shape="square">
            <search-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <mail-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <user-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <ellipsis-icon slot="icon" />
          </t-button>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';

export default Vue.extend({
  components: {
    SearchIcon,
    MailIcon,
    UserIcon,
    EllipsisIcon,
  },
  data() {
    return {
      expanded: ['1'],
      expanded2: ['1'],
    };
  },
});
<\/script>
<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,re=`<template>
  <div class="box">
    <t-head-menu defaultValue="2-1" expandType="popup">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-submenu value="1-0" title="\u5B50\u83DC\u53551-1">
          <t-menu-item value="1-1-1">\u5B50\u83DC\u53551-1-1</t-menu-item>
          <t-menu-item value="1-1-2">\u5B50\u83DC\u53551-1-2</t-menu-item>
          <t-menu-item value="1-1-3">\u5B50\u83DC\u53551-1-3</t-menu-item>
        </t-submenu>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
        <t-menu-item value="1-4">\u5B50\u83DC\u53551-4</t-menu-item>
        <t-submenu value="1-5" title="\u5B50\u83DC\u53551-5">
          <t-menu-item value="1-5-1">\u5B50\u83DC\u53551-5-1</t-menu-item>
          <t-menu-item value="1-5-2">\u5B50\u83DC\u53551-5-2</t-menu-item>
          <t-menu-item value="1-5-3">\u5B50\u83DC\u53551-5-3</t-menu-item>
        </t-submenu>
      </t-submenu>
      <t-submenu value="2" title="\u83DC\u53552">
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <t-button variant="text" shape="square">
          <search-icon slot="icon" shape="square" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </template>
    </t-head-menu>

    <t-head-menu defaultValue="2-1" theme="dark" expandType="popup" style="margin-top: 24px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      </template>
      <t-submenu value="1">
        <template #title>
          <span>\u83DC\u53551</span>
        </template>
        <t-menu-item value="1-1">\u5B50\u83DC\u53551-1</t-menu-item>
        <t-menu-item value="1-2">\u5B50\u83DC\u53551-2</t-menu-item>
        <t-menu-item value="1-3">\u5B50\u83DC\u53551-3</t-menu-item>
      </t-submenu>
      <t-submenu
        value="2"
        :popup-props="{
          overlayClassName: 'custom-popup-class',
        }"
      >
        <template #title>
          <span>\u83DC\u53552</span>
        </template>
        <t-menu-item value="2-1">\u5B50\u83DC\u53552-1</t-menu-item>
        <t-menu-item value="2-2">\u5B50\u83DC\u53552-2</t-menu-item>
        <t-menu-item value="2-3">\u5B50\u83DC\u53552-3</t-menu-item>
      </t-submenu>
      <template #operations>
        <div class="t-demo-menu--dark">
          <t-button variant="text" shape="square">
            <search-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <mail-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <user-icon slot="icon" />
          </t-button>
          <t-button variant="text" shape="square">
            <ellipsis-icon slot="icon" />
          </t-button>
        </div>
      </template>
    </t-head-menu>
  </div>
</template>

<script>
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    SearchIcon,
    MailIcon,
    UserIcon,
    EllipsisIcon,
  },
};
<\/script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,ce=`<template>
  <t-head-menu theme="dark" defaultValue="item2">
    <t-menu-item value="item1">\u83DC\u53551</t-menu-item>
    <t-menu-item value="item2">\u83DC\u53552</t-menu-item>
    <t-menu-item value="item3">\u83DC\u53553</t-menu-item>
    <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
    <template #operations>
      <div class="t-demo-menu--dark">
        <t-button variant="text" shape="square">
          <search-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <mail-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <user-icon slot="icon" />
        </t-button>
        <t-button variant="text" shape="square">
          <ellipsis-icon slot="icon" />
        </t-button>
      </div>
    </template>
  </t-head-menu>
</template>

<script>
import {
  SearchIcon, MailIcon, UserIcon, EllipsisIcon,
} from 'tdesign-icons-vue';

export default {
  components: {
    SearchIcon,
    MailIcon,
    UserIcon,
    EllipsisIcon,
  },
};
<\/script>

<style lang="less" scoped>
.t-menu__operations {
  .t-button {
    margin-left: 8px;
  }
}

.t-demo-menu--dark {
  .t-button {
    color: #fff;

    &:hover {
      background-color: #4b4b4b;
      border-color: transparent;
      --ripple-color: #383838;
    }
  }
}
</style>
`,pe=`<template>
  <div class="box">
    <t-menu theme="light" defaultValue="item1" @change="changeHandler" style="margin-right: 40px" height="550px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="item1" href="/vue" target="_blank">\u4EEA\u8868\u76D8</t-menu-item>
      <t-menu-item value="item2">\u8D44\u6E90\u5217\u8868</t-menu-item>
      <t-menu-item value="item3">\u6839\u76EE\u5F55</t-menu-item>
      <t-menu-item value="item4" :disabled="true">\u8C03\u5EA6\u5E73\u53F0</t-menu-item>
      <t-menu-item value="item5">\u7CBE\u51C6\u76D1\u63A7</t-menu-item>
      <t-menu-item value="item6">\u6D88\u606F\u533A</t-menu-item>
      <t-menu-item value="item7">\u4E2A\u4EBA\u4E2D\u5FC3</t-menu-item>
      <t-menu-item value="item8">\u89C6\u9891\u533A</t-menu-item>
      <t-menu-item value="item9">\u8D44\u6E90\u7F16\u8F91</t-menu-item>
    </t-menu>

    <t-menu theme="light" defaultValue="dashboard" style="margin-right: 40px" height="550px">
      <template #logo>
        <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
      </template>
      <t-menu-item value="dashboard">
        <template #icon>
          <icon name="dashboard" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        \u8D44\u6E90\u5217\u8868
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u6839\u76EE\u5F55
      </t-menu-item>
      <t-menu-item value="control-platform">
        <template #icon>
          <icon name="control-platform" />
        </template>
        \u8C03\u5EA6\u5E73\u53F0
      </t-menu-item>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        \u7CBE\u51C6\u76D1\u63A7
      </t-menu-item>
      <t-menu-item value="mail">
        <template #icon>
          <icon name="mail" />
        </template>
        \u6D88\u606F\u533A
      </t-menu-item>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-menu-item value="play-circle">
        <template #icon>
          <icon name="play-circle" />
        </template>
        \u89C6\u9891\u533A
      </t-menu-item>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
    </t-menu>

    <t-menu theme="dark" defaultValue="dashboard" height="550px">
      <img slot="logo" height="28" src="https://tdesign.gtimg.com/site/baseLogo-dark.png" alt="logo" />
      <t-menu-item value="dashboard">
        <template #icon>
          <icon name="dashboard" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        \u8D44\u6E90\u5217\u8868
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u6839\u76EE\u5F55
      </t-menu-item>
      <t-menu-item value="control-platform">
        <template #icon>
          <icon name="control-platform" />
        </template>
        \u8C03\u5EA6\u5E73\u53F0
      </t-menu-item>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        \u7CBE\u51C6\u76D1\u63A7
      </t-menu-item>
      <t-menu-item value="mail">
        <template #icon>
          <icon name="mail" />
        </template>
        \u6D88\u606F\u533A
      </t-menu-item>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-menu-item value="play-circle">
        <template #icon>
          <icon name="play-circle" />
        </template>
        \u89C6\u9891\u533A
      </t-menu-item>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
    </t-menu>
  </div>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  methods: {
    changeHandler(active) {
      console.log('change', active);
    },
  },
};
<\/script>
`,ve=`<template>
  <div class="box">
    <t-menu
      theme="light"
      defaultValue="3-2"
      expandMutex
      :defaultExpanded="expanded"
      height="550px"
      :collapsed="collapsed"
    >
      <t-submenu title="\u6D88\u606F\u533A" value="3">
        <template #icon>
          <icon name="mail" />
        </template>
        <t-submenu title="\u4E8C\u7EA7\u83DC\u5355" value="3-1">
          <t-menu-item value="3-1-1">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-1-2">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-1-3">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        </t-submenu>
        <t-submenu title="\u4E8C\u7EA7\u83DC\u5355" value="3-5">
          <t-menu-item value="3-5-1">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-5-2">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
          <t-menu-item value="3-5-3">\u4E09\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        </t-submenu>
        <t-menu-item value="3-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-4">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-submenu disabled title="\u89C6\u9891\u533A" value="4">
        <template #icon>
          <icon name="play-circle" />
        </template>
        <t-menu-item value="4-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
      <template #operations>
        <t-button variant="text" shape="square">
          <t-button variant="text" shape="square" @click.native="changeCollapsed">
            <view-list-icon slot="icon" />
          </t-button>
        </t-button>
      </template>
    </t-menu>

    <t-menu
      theme="dark"
      defaultValue="2-1"
      style="margin-left: 40px"
      :expanded="expanded2"
      @expand="expanded2 = $event"
      height="550px"
      :collapsed="collapsed2"
    >
      <t-menu-item value="item1">
        <template #icon>
          <icon name="dashboard" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
      <t-menu-item value="resource">
        <template #icon>
          <icon name="server" />
        </template>
        \u8D44\u6E90\u5217\u8868
      </t-menu-item>
      <t-menu-item value="root">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u6839\u76EE\u5F55
      </t-menu-item>
      <t-submenu title="\u8C03\u5EA6\u5E73\u53F0" value="2">
        <template #icon>
          <icon name="control-platform" />
        </template>
        <t-menu-item value="2-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="2-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="2-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="precise-monitor">
        <template #icon>
          <icon name="precise-monitor" />
        </template>
        \u7CBE\u51C6\u76D1\u63A7
      </t-menu-item>
      <t-submenu disabled title="\u6D88\u606F\u533A" value="3">
        <template #icon>
          <icon name="mail" />
        </template>
        <t-menu-item value="3-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="3-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="user-circle">
        <template #icon>
          <icon name="user-circle" />
        </template>
        \u4E2A\u4EBA\u4E2D\u5FC3
      </t-menu-item>
      <t-submenu title="\u89C6\u9891\u533A" value="4">
        <template #icon>
          <icon name="play-circle" />
        </template>
        <t-menu-item value="4-1">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-2">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
        <t-menu-item value="4-3">\u4E8C\u7EA7\u83DC\u5355\u5185\u5BB9</t-menu-item>
      </t-submenu>
      <t-menu-item value="edit1">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8D44\u6E90\u7F16\u8F91
      </t-menu-item>
      <template #operations>
        <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed2">
          <view-list-icon slot="icon" />
        </t-button>
      </template>
    </t-menu>
  </div>
</template>

<script>
import { Icon, ViewListIcon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
    ViewListIcon,
  },
  data() {
    return {
      expanded: ['2', '3'],
      expanded2: ['2'],
      disabled: true,
      collapsed: false,
      collapsed2: false,
    };
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
    },
    changeCollapsed2() {
      this.collapsed2 = !this.collapsed2;
    },
  },
};
<\/script>
<style lang="less" scoped>
.t-demo-collapse-btn {
  color: #fff;

  &:hover {
    background-color: #4b4b4b;
    border-color: transparent;
    --ripple-color: #383838;
  }
}
</style>
`,de=`<template>
  <t-menu
    theme="light"
    defaultValue="2-1"
    :expanded="expanded"
    :collapsed="collapsed"
    expandMutex
    @expand="handleExpand"
  >
    <template #logo>
      <img :width="collapsed ? 35 : 136" :src="iconUrl" alt="logo" />
    </template>
    <t-menu-item value="item1">
      <template #icon>
        <icon name="dashboard" />
      </template>
      \u4EEA\u8868\u76D8
    </t-menu-item>
    <t-submenu value="2">
      <template #icon>
        <icon name="user-circle" />
      </template>
      <template #title>
        <span>\u4E2A\u4EBA\u4E2D\u5FC3</span>
      </template>
      <t-menu-item value="2-1">\u5B50\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
      <t-menu-item value="2-2">\u5B50\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
      <t-menu-item value="2-3">\u5B50\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
    </t-submenu>
    <t-submenu value="3">
      <template #icon>
        <icon name="root-list" />
      </template>
      <template #title>
        <span>\u6839\u76EE\u5F55</span>
      </template>
      <t-menu-item value="3-1">\u5B50\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
      <t-menu-item value="3-2">\u5B50\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
      <t-menu-item value="3-3">\u5B50\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
    </t-submenu>
    <t-menu-item value="item4" :disabled="disabled">
      <template #icon>
        <icon name="server" />
      </template>
      \u8D44\u6E90\u5217\u8868
    </t-menu-item>
    <template #operations>
      <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed">
        <icon name="view-list" />
      </t-button>
    </template>
  </t-menu>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      expanded: ['2'],
      disabled: true,
      collapsed: false,
      iconUrl: 'https://tdesign.gtimg.com/site/baseLogo-light.png',
    };
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
      this.iconUrl = this.collapsed
        ? 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png'
        : 'https://tdesign.gtimg.com/site/baseLogo-light.png';
    },
    handleExpand(names) {
      console.log('receive handleExpand', names);
    },
  },
};
<\/script>
`,he=`<template>
  <t-menu theme="light" defaultValue="item2" :collapsed="collapsed" @change="changeHandler" height="550px">
    <template #logo>
      <img :width="collapsed ? 35 : 136" :src="iconUrl" alt="logo" />
    </template>
    <t-menu-group title="\u4E3B\u5BFC\u822A">
      <t-menu-item value="item1">
        <template #icon>
          <icon name="app" />
        </template>
        \u4EEA\u8868\u76D8
      </t-menu-item>
    </t-menu-group>
    <t-menu-group title="\u7EC4\u4EF6">
      <t-submenu title="\u5217\u8868\u9879" value="2-1">
        <template #icon>
          <icon name="server" />
        </template>
        <t-menu-item value="2-1-1">\u57FA\u7840\u5217\u8868\u9879</t-menu-item>
        <t-menu-item value="2-1-2">\u5361\u7247\u5217\u8868\u9879</t-menu-item>
        <t-menu-item value="2-1-3">\u7B5B\u9009\u5217\u8868\u9879</t-menu-item>
        <t-menu-item value="2-1-4">\u6811\u72B6\u7B5B\u9009\u5217\u8868\u9879</t-menu-item>
      </t-submenu>
      <t-menu-item value="2-2">
        <template #icon>
          <icon name="edit-1" />
        </template>
        \u8868\u5355\u9879
      </t-menu-item>
      <t-menu-item value="2-3">
        <template #icon>
          <icon name="root-list" />
        </template>
        \u8BE6\u60C5\u9875
      </t-menu-item>
      <t-menu-item value="2-4">
        <template #icon>
          <icon name="check" />
        </template>
        \u7ED3\u679C\u9875
      </t-menu-item>
    </t-menu-group>
    <t-menu-group title="\u66F4\u591A">
      <t-menu-item value="item3">
        <template #icon>
          <icon name="user" />
        </template>
        \u4E2A\u4EBA\u9875
      </t-menu-item>
      <t-menu-item value="item4">
        <template #icon>
          <icon name="login" />
        </template>
        \u767B\u5F55\u9875
      </t-menu-item>
    </t-menu-group>
    <template #operations>
      <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed">
        <icon name="view-list" />
      </t-button>
    </template>
  </t-menu>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      collapsed: false,
      iconUrl: 'https://tdesign.gtimg.com/site/baseLogo-light.png',
    };
  },
  methods: {
    changeHandler(active) {
      console.log('change', active);
    },
    changeCollapsed() {
      this.collapsed = !this.collapsed;
      this.iconUrl = this.collapsed
        ? 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png'
        : 'https://tdesign.gtimg.com/site/baseLogo-light.png';
    },
  },
};
<\/script>
`,ge=`<template>
  <t-menu theme="light" defaultValue="item2">
    <template #logo>
      <img height="28" src="https://tdesign.gtimg.com/site/baseLogo-light.png" alt="logo" />
    </template>
    <t-menu-item value="item1">\u83DC\u5355\u5185\u5BB9</t-menu-item>
    <t-menu-item value="item2">\u83DC\u5355\u5185\u5BB9</t-menu-item>
    <t-menu-item value="item3">\u83DC\u5355\u5185\u5BB9</t-menu-item>
    <t-menu-item value="item4" :disabled="true">\u7981\u7528\u83DC\u5355</t-menu-item>
  </t-menu>
</template>
`,_e=`<template>
  <t-menu theme="light" defaultValue="2-1" :collapsed="collapsed" height="550px">
    <template #logo>
      <span>LOGO</span>
    </template>
    <t-menu-item value="item1">
      <template #icon>
        <icon name="dashboard" />
      </template>
      \u4EEA\u8868\u76D8
    </t-menu-item>
    <t-submenu value="2">
      <template #icon>
        <icon name="mail" />
      </template>
      <span slot="title">\u4FE1\u606F\u533A</span>
      <t-menu-item value="2-1">\u83DC\u5355\u5185\u5BB9\u4E00</t-menu-item>
      <t-menu-item value="2-2">\u83DC\u5355\u5185\u5BB9\u4E8C</t-menu-item>
      <t-menu-item value="2-3">\u83DC\u5355\u5185\u5BB9\u4E09</t-menu-item>
    </t-submenu>
    <t-menu-item value="item3">
      <template #icon>
        <icon name="play-circle" />
      </template>
      \u89C6\u9891\u533A
    </t-menu-item>
    <t-menu-item value="item4" :disabled="true">
      <template #icon>
        <icon name="edit-1" />
      </template>
      \u8D44\u6E90\u533A
    </t-menu-item>
    <template #operations>
      <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click.native="changeCollapsed">
        <icon :name="iconName" slot="icon" />
      </t-button>
    </template>
  </t-menu>
</template>

<script>
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      collapsed: true,
    };
  },
  computed: {
    iconName() {
      return this.collapsed ? 'chevron-right' : 'chevron-left';
    },
  },
  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
<\/script>
`,Rt=[{name:"collapsed",type:"Boolean",defaultValue:!1,options:[]},{name:"expandMutex",type:"Boolean",defaultValue:!1,options:[]},{name:"expandType",type:"enum",defaultValue:"normal",options:[{label:"normal",value:"normal"},{label:"popup",value:"popup"}]},{name:"theme",type:"enum",defaultValue:"light",options:[{label:"light",value:"light"},{label:"dark",value:"dark"}]}],z={};z.setup=(e,n)=>{const t=f(Rt),a=[{label:"menu",value:"menu"},{label:"headMenu",value:"headMenu"}],o={menu:`
        <div :style="{ padding: '24px', background: 'var(--bg-color-page)', borderRadius: '3px' }">
          <t-menu v-bind="configProps">
            <t-menu-item value="0">
              <template #icon>
                <t-icon name="app" />
              </template>
              \u4EEA\u8868\u76D8
            </t-menu-item>

            <t-submenu value="1" title="\u8D44\u6E90\u5217\u8868">
              <template #icon>
                <t-icon name="code" />
              </template>
              <t-menu-item value="1-1" disabled>
                <span>\u83DC\u5355\u4E8C</span>
              </t-menu-item>
            </t-submenu>
            <t-submenu value="2" title="\u8C03\u5EA6\u5E73\u53F0">
              <template #icon>
                <t-icon name="file" />
              </template>
              <t-submenu value="2-1" title="\u4E8C\u7EA7\u83DC\u5355-1">
                <t-menu-item value="3-1">\u4E09\u7EA7\u83DC\u5355-1</t-menu-item>
                <t-menu-item value="3-2">\u4E09\u7EA7\u83DC\u5355-2</t-menu-item>
                <t-menu-item value="3-3">\u4E09\u7EA7\u83DC\u5355-3</t-menu-item>
              </t-submenu>
              <t-menu-item value="2-2">
                <span>\u4E8C\u7EA7\u83DC\u5355-2</span>
              </t-menu-item>
            </t-submenu>
          </t-menu>
        </div>
      `,headMenu:`
        <div :style="{ padding: '24px', background: 'var(--bg-color-page)', borderRadius: '3px' }">
          <t-head-menu style="marginBottom: 20px" v-bind="configProps">
            <template #logo>
              <img src="https://www.tencent.com/img/index/menu_logo_hover.png" width="136" />
            </template>
            <t-menu-item value="0">
              <span>\u83DC\u53551</span>
            </t-menu-item>
            <t-menu-item value="1">
              <span>\u83DC\u53552</span>
            </t-menu-item>
          </t-head-menu>
        </div>
      `},s=f(`<template>${o[a[0].value].trim()}</template>`);function l(u){s.value=`<template>${o[u].trim()}</template>`}return{configList:t,panelList:a,usageCode:s,onPanelChange:l}};var Ft=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"menu",fn:function(a){var o=a.configProps;return[t("div",{style:{padding:"24px",background:"var(--bg-color-page)",borderRadius:"3px"}},[t("t-menu",e._b({},"t-menu",o,!1),[t("t-menu-item",{attrs:{value:"0"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("t-icon",{attrs:{name:"app"}})]},proxy:!0}],null,!0)},[e._v(" \u4EEA\u8868\u76D8 ")]),t("t-submenu",{attrs:{value:"1",title:"\u8D44\u6E90\u5217\u8868"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("t-icon",{attrs:{name:"code"}})]},proxy:!0}],null,!0)},[t("t-menu-item",{attrs:{value:"1-1",disabled:""}},[t("span",[e._v("\u83DC\u5355\u4E8C")])])],1),t("t-submenu",{attrs:{value:"2",title:"\u8C03\u5EA6\u5E73\u53F0"},scopedSlots:e._u([{key:"icon",fn:function(){return[t("t-icon",{attrs:{name:"file"}})]},proxy:!0}],null,!0)},[t("t-submenu",{attrs:{value:"2-1",title:"\u4E8C\u7EA7\u83DC\u5355-1"}},[t("t-menu-item",{attrs:{value:"3-1"}},[e._v("\u4E09\u7EA7\u83DC\u5355-1")]),t("t-menu-item",{attrs:{value:"3-2"}},[e._v("\u4E09\u7EA7\u83DC\u5355-2")]),t("t-menu-item",{attrs:{value:"3-3"}},[e._v("\u4E09\u7EA7\u83DC\u5355-3")])],1),t("t-menu-item",{attrs:{value:"2-2"}},[t("span",[e._v("\u4E8C\u7EA7\u83DC\u5355-2")])])],1)],1)],1)]}},{key:"headMenu",fn:function(a){var o=a.configProps;return[t("div",{style:{padding:"24px",background:"var(--bg-color-page)",borderRadius:"3px"}},[t("t-head-menu",e._b({staticStyle:{marginbottom:"20px"},scopedSlots:e._u([{key:"logo",fn:function(){return[t("img",{attrs:{src:"https://www.tencent.com/img/index/menu_logo_hover.png",width:"136"}})]},proxy:!0}],null,!0)},"t-head-menu",o,!1),[t("t-menu-item",{attrs:{value:"0"}},[t("span",[e._v("\u83DC\u53551")])]),t("t-menu-item",{attrs:{value:"1"}},[t("span",[e._v("\u83DC\u53552")])])],1)],1)]}}])})},Nt=[];const M={};var Bt=i(z,Ft,Nt,!1,Tt,null,null,null);function Tt(e){for(let n in M)this[n]=M[n]}const fe=function(){return Bt.exports}();export{Yt as D,fe as U,Zt as a,te as b,ee as c,ne as d,ae as e,oe as f,ie as g,ue as h,se as i,le as j,me as k,re as l,ce as m,pe as n,ve as o,de as p,he as q,ge as r,_e as s};
