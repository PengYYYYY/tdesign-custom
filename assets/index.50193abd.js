import{j as c,l as d,o as f}from"./index.ba4b8fbd.js";import{L as m,_ as p}from"./plugin.2baf6a7f.js";import{w as h}from"./withInstall.5c5c205e.js";/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var u=Symbol("TdLoading"),s=function(e,a){var n=a.modifiers,o=n.fullscreen,l=n.inheritColor,i={attach:function(){return e},fullscreen:o!=null?o:!1,inheritColor:l!=null?l:!1,loading:a.value};d(a.value)&&f(a.value,function(r,v){i[v]=r}),e[u]={options:i,instance:m(i)}},L={inserted:function(e,a){a.value&&s(e,a)},update:function(e,a){var n=e[u],o=a.value,l=a.oldValue;if(!c(o,l)){var i,r=(i=o==null?void 0:o.loading)!==null&&i!==void 0?i:o;r?s(e,a):n==null||n.instance.hide()}}};/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var E=h(p,null,{name:"loading",comp:L});export{E as L};
