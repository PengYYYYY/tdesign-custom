import{u as O,_ as m}from"./use-size-props.363c09d5.js";import{_ as y,I as d}from"./icon.6041ac7f.js";import{V as P}from"./index.4ab857ef.js";var v=["size"];function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?a(Object(e),!0).forEach(function(r){m(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M8 8.92L11.08 12l.92-.92L8.92 8 12 4.92 11.08 4 8 7.08 4.92 4 4 4.92 7.08 8 4 11.08l.92.92L8 8.92z",fillOpacity:.9}}]},w=P.extend({name:"CloseIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,e){var r=e.props,o=e.data,p=r.size,c=y(r,v),s=O(p),l=s.className,u=s.style,f=i(i({},c||{}),{},{id:"close",icon:b,staticClass:l,style:u});return o.props=f,n(d,o)}});export{w as C};
