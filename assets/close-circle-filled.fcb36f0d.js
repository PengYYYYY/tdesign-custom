import{u as d,_ as O}from"./use-size-props.363c09d5.js";import{_ as m,I as y}from"./icon.6041ac7f.js";import{V as P}from"./index.4ab857ef.js";var v=["size"];function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),e.push.apply(e,r)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?i(Object(e),!0).forEach(function(r){O(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}var b={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M15 8A7 7 0 101 8a7 7 0 0014 0zM5.67 4.95L8 7.29l2.33-2.34.7.7L8.7 8l2.34 2.35-.71.7L8 8.71l-2.33 2.34-.7-.7L7.3 8 4.96 5.65l.71-.7z",fillOpacity:.9}}]},w=P.extend({name:"CloseCircleFilledIcon",functional:!0,props:{size:{type:String},onClick:{type:Function}},render:function(n,e){var r=e.props,o=e.data,l=r.size,p=m(r,v),s=d(l),c=s.className,f=s.style,u=a(a({},p||{}),{},{id:"close-circle-filled",icon:b,staticClass:c,style:f});return o.props=u,n(y,o)}});export{w as C};
