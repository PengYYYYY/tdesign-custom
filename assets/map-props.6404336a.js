import{V as K,_ as N,M as z}from"./index.7ed388d9.js";/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */var U=["name"];function w(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);d&&(r=r.filter(function(v){return Object.getOwnPropertyDescriptor(c,v).enumerable})),a.push.apply(a,r)}return a}function p(c){for(var d=1;d<arguments.length;d++){var a=arguments[d]!=null?arguments[d]:{};d%2?w(Object(a),!0).forEach(function(r){N(c,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(a,r))})}return c}var V={prop:"value",event:"input"};function M(c){return c.replace(/-([a-z])/gi,function(d,a){return a.toUpperCase()})}function W(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a={},r=d.model;function v(f){var i=f.name,m=z(f,U),g=i.replace(/^[a-z]/,function(P){return P.toUpperCase()}),y="default".concat(g),b="data".concat(g),O=[];return f.event?O=O.concat(f.event):r.prop===i?O=O.concat(r.event):O=O.concat("update:".concat(i)),p({events:O,defaultName:y,dataName:b},m)}return c.forEach(function(f){var i={alias:[]},m;typeof f=="string"?m=p(p({},i),{},{name:f}):m=p(p({},i),f),a[m.name]=v(m)}),a}function q(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};function a(r){var v=r.prototype?r.prototype.constructor.options:r,f=d.model||V,i=W(c,{model:f}),m=p({},v.props),g={},y=[],b={},O=Object.keys(v.props),P=O.map(function(n){return M(n)});Object.keys(i).forEach(function(n){var e=i[n],o=e.events,s=e.alias,u=e.defaultName,h=e.dataName;m[n]=v.props[n],m[u]=v.props[u],s&&s.forEach(function(t){m[t]=m[n]}),y=y.concat(o),g[u]={handler:function(l){u in this.$vnode.componentOptions.propsData&&!(n in this.$vnode.componentOptions.propsData)&&(this.$data[h]=l)},immediate:!0},s.forEach(function(t){g[t]={handler:function(j){t in this.$vnode.componentOptions.propsData&&!(n in this.$vnode.componentOptions.propsData)&&(this.$data[h]=j)},immediate:!0}}),g[n]={handler:function(l){n in this.$vnode.componentOptions.propsData&&(this.$data[h]=l)},immediate:!0}}),v.methods&&Object.keys(v.methods).forEach(function(n){b[n]=function(){if(this.$refs.component){var e;return(e=this.$refs.component)[n].apply(e,arguments)}}});var A=v.name;return K.extend({name:"".concat(A,"-mapprops"),inheritAttrs:!1,model:{prop:f.prop,event:Array.isArray(f.event)?f.event[0]:f.event},data:function(){var e={};return Object.keys(i).forEach(function(o){var s=i[o].dataName;e[s]=void 0}),p({},e)},props:p({},m),computed:{_listeners:function(){var e=this,o={};return Object.keys(this.$listeners).forEach(function(s){y.indexOf(s)===-1&&(o[s]=function(){for(var u=arguments.length,h=new Array(u),t=0;t<u;t++)h[t]=arguments[t];e.$emit.apply(e,[s].concat(h))})}),o}},watch:g,render:function(e){var o=this,s={},u={};Object.keys(i).forEach(function(t){var l=i[t],j=l.dataName,x=l.events;(t in o.$vnode.componentOptions.propsData||typeof o[j]<"u")&&(s[t]=o[j]),u[x[0]]=function(S){for(var D=arguments.length,E=new Array(D>1?D-1:0),$=1;$<D;$++)E[$-1]=arguments[$];return o.updateData.apply(o,[t,S].concat(E))}});var h={};return Object.keys(this.$attrs).forEach(function(t){var l=M(t);P.indexOf(l)===-1&&(h[t]=o.$attrs[t])}),e(v,{props:p(p({},this.$props),s),attrs:p({},h),on:p(p({},this._listeners),u),scopedSlots:p({},this.$scopedSlots),ref:"component"})},methods:p({updateData:function(e,o){for(var s=this,u=arguments.length,h=new Array(u>2?u-2:0),t=2;t<u;t++)h[t-2]=arguments[t];if(i[e].events.forEach(function(l){s.$emit.apply(s,[l,o].concat(h))}),!(e in this.$vnode.componentOptions.propsData))return this[i[e].dataName]=o,!0}},b)})}return a}export{q as m};