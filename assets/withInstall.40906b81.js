import{p as f,V as o,_ as b}from"./index.4ab857ef.js";/**
 * tdesign v1.4.2
 * (c) 2023 tdesign
 * @license MIT
 */function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),e.push.apply(e,r)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?c(Object(e),!0).forEach(function(r){b(n,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}return n}function j(n,t,e){var r,a=n,s=(a==null||(r=a.options)===null||r===void 0?void 0:r.name)||a.name;return a.install=function(u,O){var p={prefix:"t"},v=l(l({},p),O),m=f(p.prefix),i=s.replace(m,"").replace("-mapprops","");i=f(v.prefix)+i,u.component(i,n)},t&&o&&(o._installedPlugins||[]).indexOf(t)===-1&&o.use(t),e&&o.directive(e.name,e.comp),n}export{j as w};
