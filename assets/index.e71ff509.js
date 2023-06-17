import{n as s,r as m}from"./index.fb7ca27a.js";import{I as u}from"./index.6e0dc257.js";var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-tree",{attrs:{data:e.items,activable:"",hover:"",transition:""}})],1)],1)},W=[];const H={data(){return{items:[{label:"\u7B2C\u4E00\u6BB5",children:[{label:"\u7B2C\u4E8C\u6BB5"},{label:"\u7B2C\u4E8C\u6BB5"}]},{label:"\u7B2C\u4E00\u6BB5",children:[{label:"\u7B2C\u4E8C\u6BB5"},{label:"\u7B2C\u4E8C\u6BB5"}]},{label:"\u7B2C\u4E00\u6BB5",children:[{label:"\u7B2C\u4E8C\u6BB5"},{label:"\u7B2C\u4E8C\u6BB5"}]},{label:"\u7B2C\u4E00\u6BB5",children:[{label:"\u7B2C\u4E8C\u6BB5"},{label:"\u7B2C\u4E8C\u6BB5"}]}]}}},b={};var J=s(H,R,W,!1,U,null,null,null);function U(e){for(let t in b)this[t]=b[t]}const Bn=function(){return J.exports}();var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-form",[n("t-form-item",{attrs:{label:"\u53EF\u9009"}},[n("t-switch",{model:{value:e.checkable,callback:function(l){e.checkable=l},expression:"checkable"}})],1),n("t-form-item",{attrs:{label:"\u4E25\u683C\u6A21\u5F0F"}},[n("t-switch",{model:{value:e.checkStrictly,callback:function(l){e.checkStrictly=l},expression:"checkStrictly"}})],1),n("t-form-item",{attrs:{label:"\u9009\u4E2D\u503C\u6A21\u5F0F"}},[n("t-radio-group",{attrs:{name:"value-mode",variant:"default-filled"},model:{value:e.valueMode,callback:function(l){e.valueMode=l},expression:"valueMode"}},e._l(e.valueOptions,function(l){return n("t-radio-button",{key:l.value,attrs:{value:l.value}},[e._v(e._s(l.label))])}),1)],1),n("t-form-item",[n("t-button",{attrs:{theme:"primary"},on:{click:e.selectInvert}},[e._v("\u53CD\u9009")])],1)],1),n("t-tree",{ref:"tree",attrs:{data:e.items,hover:"","expand-all":"",checkable:e.checkable,"check-strictly":e.checkStrictly,"value-mode":e.valueMode,value:e.allChecked},on:{change:e.onChange,click:e.onClick}})],1)],1)},G=[];const K={data(){return{valueMode:"onlyLeaf",checkable:!0,checkStrictly:!1,allChecked:[],valueOptions:[{value:"onlyLeaf",label:"onlyLeaf"},{value:"parentFirst",label:"parentFirst"},{value:"all",label:"all"}],items:[{value:"1",label:"1",children:[{value:"1.1",label:"1.1",children:[{value:"1.1.1",label:"1.1.1",children:[{value:"1.1.1.1",label:"1.1.1.1"},{value:"1.1.1.2",label:"1.1.1.2"}]},{value:"1.1.2",label:"1.1.2",children:[{value:"1.1.2.1",label:"1.1.2.1"},{value:"1.1.2.2",label:"1.1.2.2"}]}]},{value:"1.2",label:"1.2",children:[{value:"1.2.1",label:"1.2.1",children:[{value:"1.2.1.1",label:"1.2.1.1"},{value:"1.2.1.2",label:"1.2.1.2"}]},{value:"1.2.2",label:"1.2.2",children:[{value:"1.2.2.1",label:"1.2.2.1"},{value:"1.2.2.2",label:"1.2.2.2"}]}]}]},{value:"2",label:"2",children:[{value:"2.1",label:"2.1"},{value:"2.2",label:"2.2"}]}]}},methods:{onClick(e){console.info("onClick:",e)},onChange(e,t){console.info("onChange:",e,t)},propOnChange(e,t){console.info("propOnChange:",e,t)},selectInvert(){const{tree:e}=this.$refs,t=e.getItems(),n=[];t.forEach(l=>{!l.checked&&!l.indeterminate&&n.push(l.value)}),this.allChecked=n}}},f={};var Q=s(K,q,G,!1,X,null,null,null);function X(e){for(let t in f)this[t]=f[t]}const Rn=function(){return Q.exports}();var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-form",{attrs:{labelWidth:"120"}},[n("t-form-item",{attrs:{label:"\u8282\u70B9\u53EF\u9AD8\u4EAE"}},[n("t-switch",{model:{value:e.activable,callback:function(l){e.activable=l},expression:"activable"}})],1),n("t-form-item",{attrs:{label:"\u8282\u70B9\u53EF\u591A\u9009\u9AD8\u4EAE"}},[n("t-switch",{model:{value:e.activeMultiple,callback:function(l){e.activeMultiple=l},expression:"activeMultiple"}})],1),n("t-form-item",{attrs:{label:"\u6574\u4E2A\u8282\u70B9\u53EF\u70B9\u51FB"}},[n("t-switch",{model:{value:e.expandOnClickNode,callback:function(l){e.expandOnClickNode=l},expression:"expandOnClickNode"}})],1)],1),n("t-tree",{attrs:{data:e.items,"expand-all":"",activable:e.activable,"active-multiple":e.activeMultiple,"expand-on-click-node":e.expandOnClickNode,onActive:e.propOnActive,hover:""},on:{click:e.onClick,active:e.onActive}})],1)],1)},Z=[];const ee={data(){return{activable:!0,activeMultiple:!1,expandOnClickNode:!1,items:[{value:"t1",label:"1",children:[{value:"t1.1",label:"1.1"},{value:"t1.2",label:"1.2"}]},{value:"t2",label:"2",children:[{value:"t2.1",label:"2.1"},{value:"t2.2",label:"2.2"}]}]}},methods:{onClick(e){console.info("onClick",e)},onActive(e,t){console.info("onActive",e,t)},propOnActive(e,t){console.info("propOnActive",e,t)},toggleActivable(){this.activable=!this.activable},toggleActiveMultiple(){this.activeMultiple=!this.activeMultiple},toggleExpandOnClickNode(){this.expandOnClickNode=!this.expandOnClickNode}}},x={};var ne=s(ee,Y,Z,!1,te,null,null,null);function te(e){for(let t in x)this[t]=x[t]}const Wn=function(){return ne.exports}();var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-tree",{attrs:{data:e.items,activable:"",hover:"",transition:"","expand-all":"",draggable:""},on:{"drag-start":e.handleDragStart,"drag-end":e.handleDragEnd,"drag-over":e.handleDragOver,"drag-leave":e.handleDragLeave,drop:e.handleDrop}})],1)],1)},ae=[];const ie={data(){return{items:[{value:"1",label:"1",children:[{value:"1.1",label:"1.1",children:[{value:"1.1.1",label:"1.1.1",children:[{value:"1.1.1.1",label:"1.1.1.1"},{value:"1.1.1.2",label:"1.1.1.2"}]},{value:"1.1.2",label:"1.1.2",children:[{value:"1.1.2.1",label:"1.1.2.1"},{value:"1.1.2.2",label:"1.1.2.2"}]}]}]},{value:"2",label:"2",children:[{value:"2.1",label:"2.1"},{value:"2.2",label:"2.2"}]}]}},methods:{handleDragStart(e){console.log("handleDragStart",e)},handleDragEnd(e){console.log("handleDragEnd",e)},handleDragOver(e){console.log("handleDragOver",e)},handleDragLeave(e){console.log("handleDragLeave",e)},handleDrop(e){console.log("handleDrop",e)}}},g={};var se=s(ie,le,ae,!1,oe,"be8ebdea",null,null);function oe(e){for(let t in g)this[t]=g[t]}const Hn=function(){return se.exports}();var re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u9ED8\u8BA4\u72B6\u6001")]),n("div",{staticClass:"tips"},[n("p",[e._v(" \u8FC7\u6EE4\u52A8\u4F5C\u7531 filter \u5C5E\u6027\u7684\u53D8\u66F4\u89E6\u53D1\uFF0C\u6240\u4EE5\u4E0D\u80FD\u53EA\u4FEE\u6539\u4F20\u9012\u7ED9 filter \u5C5E\u6027\u5185\u90E8\u7684\u6570\u636E\uFF0C\u5E94\u5F53\u5728\u6761\u4EF6\u53D8\u5316\u65F6\u53D8\u66F4 filter \u5C5E\u6027\u3002 ")]),n("p",[e._v("\u6E05\u7A7A\u8FC7\u6EE4\u6761\u4EF6\u65F6\uFF0C\u5E94\u8BBE\u7F6E filter \u5C5E\u6027\u4E3A null\uFF0C\u6765\u89E6\u53D1 tree \u7EC4\u4EF6\u5C55\u793A\u72B6\u6001\u8FD8\u539F\u3002")]),n("p",[e._v("allowFoldNodeOnFilter \u5C5E\u6027\u9ED8\u8BA4\u4E3A false\uFF0C\u6B64\u65F6\u8FC7\u6EE4\u72B6\u6001\u4E0B\u5C55\u5F00\u7684\u8DEF\u5F84\u8282\u70B9\u65E0\u6CD5\u88AB\u6536\u8D77\u3002")])]),n("t-form",{attrs:{labelWidth:"200"}},[n("t-form-item",[n("t-input-adornment",{attrs:{prepend:"filter:"}},[n("t-input",{on:{change:e.demo1Input},model:{value:e.demo1Text,callback:function(l){e.demo1Text=l},expression:"demo1Text"}})],1)],1)],1),n("t-tree",{ref:"tree",attrs:{data:e.items,"expand-on-click-node":"",filter:e.demo1Filter,hover:"",line:""}})],1),n("t-space",{attrs:{size:6,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v('allowFoldNodeOnFilter="true"')]),n("div",{staticClass:"tips"},[n("p",[e._v(" allowFoldNodeOnFilter \u5C5E\u6027\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u8FC7\u6EE4\u72B6\u6001\u4E0B\u5C55\u5F00\u7684\u8282\u70B9\uFF0C\u5141\u8BB8\u70B9\u51FB\u6536\u8D77\uFF0C\u6CE8\u610F\u8FD9\u4F1A\u5F71\u54CD\u5230 tree \u7EC4\u4EF6\u5F53\u524D\u7684\u5C55\u5F00\u72B6\u6001\u6570\u636E\u3002 ")]),n("p",[e._v("\u6BCF\u6B21\u53D8\u66F4\u8FC7\u6EE4\u6761\u4EF6\u65F6\uFF0C\u4F1A\u91CD\u8BBE\u8282\u70B9\u5C55\u5F00\u72B6\u6001\uFF0C\u5C06\u547D\u4E2D\u8282\u70B9\u7684\u8DEF\u5F84\u8282\u70B9\u5C55\u5F00\u3002")]),n("p",[e._v("\u5F53\u6E05\u7A7A\u8FC7\u6EE4\u6761\u4EF6\u65F6\uFF0C\u5C06\u4F1A\u8FD8\u539F\u4E3A\u8BBE\u7F6E\u8FC7\u6EE4\u6761\u4EF6\u4E4B\u524D\u65F6\u7684\u5C55\u5F00\u72B6\u6001\u3002")])]),n("t-form",{attrs:{labelWidth:"200"}},[n("t-form-item",[n("t-input-adornment",{attrs:{prepend:"filter:"}},[n("t-input",{on:{change:e.demo2Input},model:{value:e.demo2Text,callback:function(l){e.demo2Text=l},expression:"demo2Text"}})],1)],1)],1),n("t-tree",{ref:"tree",attrs:{data:e.items,"expand-on-click-node":"",allowFoldNodeOnFilter:"",filter:e.demo2Filter,hover:"",line:""}})],1)],1)},ce=[];const de=[{value:"1",label:"1",children:[{value:"1.1",label:"1.1",children:[{value:"1.1.1",label:"1.1.1",children:[{value:"1.1.1.1",label:"1.1.1.1"},{value:"1.1.1.2",label:"1.1.1.2"}]},{value:"1.1.2",label:"1.1.2",children:[{value:"1.1.2.1",label:"1.1.2.1"},{value:"1.1.2.2",label:"1.1.2.2"}]}]},{value:"1.2",label:"1.2",children:[{value:"1.2.1",label:"1.2.1",children:[{value:"1.2.1.1",label:"1.2.1.1"},{value:"1.2.1.2",label:"1.2.1.2"}]},{value:"1.2.2",label:"1.2.2",children:[{value:"1.2.2.1",label:"1.2.2.1"},{value:"1.2.2.2",label:"1.2.2.2"}]}]}]},{value:"2",label:"2",children:[{value:"2.1",label:"2.1"},{value:"2.2",label:"2.2"}]}],ue={data(){return{demo1Text:"",demo1Filter:null,demo2Text:"",demo2Filter:null,items:de}},methods:{demo1Input(e){console.info("demo1 input:",e),this.demo1Text?this.demo1Filter=t=>t.data.label.indexOf(this.demo1Text)>=0:this.demo1Filter=null},demo2Input(){this.demo2Filter=this.demo2Text?e=>e.data.label.indexOf(this.demo2Text)>=0:null}}},_={};var ve=s(ue,re,ce,!1,me,"b6dd830a",null,null);function me(e){for(let t in _)this[t]=_[t]}const Jn=function(){return ve.exports}();var pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{staticStyle:{width:"100%"},attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u5C5E\u6027\u7ED3\u5408 jsx \u5F62\u5F0F\u4F20\u9012")]),n("t-tree",{attrs:{data:e.items,hover:"","expand-all":"",label:e.getLabel,operations:e.renderOperations}})],1),n("t-space",{staticClass:"tdesign-tree-operations",staticStyle:{width:"100%"},attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("slot \u5F62\u5F0F")]),n("t-form",{attrs:{"label-width":200,"label-align":"left"}},[n("t-form-item",{attrs:{label:"\u63D2\u5165\u8282\u70B9\u4F7F\u7528\u9AD8\u4EAE\u8282\u70B9"}},[n("t-switch",{model:{value:e.useActived,callback:function(l){e.useActived=l},expression:"useActived"}})],1),n("t-form-item",{attrs:{label:"\u5B50\u8282\u70B9\u5C55\u5F00\u89E6\u53D1\u7236\u8282\u70B9\u5C55\u5F00"}},[n("t-switch",{model:{value:e.expandParent,callback:function(l){e.expandParent=l},expression:"expandParent"}})],1),n("t-form-item",[n("t-input-adornment",{attrs:{prepend:"filter:"}},[n("t-input",{on:{change:e.onInputChange},model:{value:e.filterText,callback:function(l){e.filterText=l},expression:"filterText"}})],1)],1)],1),n("t-tree",{ref:"tree",attrs:{data:e.items,hover:"","expand-all":"",activable:"",checkable:"","expand-on-click-node":!1,label:e.getLabel,"expand-parent":e.expandParent,filter:e.filterByText,line:""},on:{expand:e.onExpand,change:e.onChange,active:e.onActive},scopedSlots:e._u([{key:"operations",fn:function(l){var a=l.node;return[n("t-space",{attrs:{size:10}},[n("t-button",{attrs:{size:"small",variant:"base"},on:{click:function(i){return e.append(a)}}},[e._v("\u6DFB\u52A0\u5B50\u8282\u70B9")]),n("t-button",{attrs:{size:"small",variant:"outline"},on:{click:function(i){return e.insertBefore(a)}}},[e._v("\u524D\u63D2\u8282\u70B9")]),n("t-button",{attrs:{size:"small",variant:"outline"},on:{click:function(i){return e.insertAfter(a)}}},[e._v("\u540E\u63D2\u8282\u70B9")]),n("t-button",{attrs:{size:"small",variant:"base",theme:"danger"},on:{click:function(i){return e.remove(a)}}},[e._v("\u5220\u9664")])],1)]}}])})],1),n("t-space",{staticClass:"tdesign-tree-operations",attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u64CD\u4F5C\u6811\u8282\u70B9")]),n("t-space",{attrs:{size:10,breakLine:""}},[n("t-button",{attrs:{theme:"primary"},on:{click:e.getItem}},[e._v("\u83B7\u53D6 value \u4E3A 'node1' \u7684\u5355\u4E2A\u8282\u70B9")]),n("t-button",{attrs:{theme:"primary"},on:{click:e.getAllItems}},[e._v("\u83B7\u53D6\u6240\u6709\u8282\u70B9")]),n("t-button",{attrs:{theme:"primary"},on:{click:e.getActiveChildren}},[e._v("\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9")]),n("t-button",{attrs:{theme:"primary"},on:{click:e.getAllActived}},[e._v("\u83B7\u53D6\u6240\u6709\u9AD8\u4EAE\u8282\u70B9")]),n("t-button",{attrs:{theme:"primary"},on:{click:e.getActiveChecked}},[e._v("\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u4E0B\u7684\u9009\u4E2D\u8282\u70B9")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(l){return e.append()}}},[e._v("\u63D2\u5165\u4E00\u4E2A\u6839\u8282\u70B9")]),n("t-button",{attrs:{theme:"primary"},on:{click:e.getActiveParent}},[e._v("\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u7236\u8282\u70B9")]),n("t-button",{attrs:{theme:"primary"},on:{click:e.getActiveParents}},[e._v("\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u6240\u6709\u7236\u8282\u70B9")]),n("t-button",{attrs:{theme:"primary"},on:{click:e.getActiveIndex}},[e._v("\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u5728\u5B50\u8282\u70B9\u4E2D\u7684\u4F4D\u7F6E")]),n("t-button",{attrs:{theme:"primary"},on:{click:e.setActiveChecked}},[e._v("\u9009\u4E2D\u9AD8\u4EAE\u8282\u70B9")]),n("t-button",{attrs:{theme:"primary"},on:{click:e.setActiveExpanded}},[e._v("\u5C55\u5F00\u9AD8\u4EAE\u8282\u70B9")]),n("t-button",{attrs:{theme:"primary"},on:{click:e.getActivePlainData}},[e._v("\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u4E0E\u5176\u5B50\u8282\u70B9\u7684\u6570\u636E")])],1),n("div",{staticClass:"tips"},[n("p",[e._v("* \u76F8\u5173\u4FE1\u606F\u901A\u8FC7\u63A7\u5236\u53F0\u8F93\u51FA")])])],1)],1)},he=[];const be={data(){return{index:2,activeId:"",activeIds:[],expandIds:[],checkedIds:[],useActived:!1,expandParent:!0,filterText:"",filterByText:null,items:[{value:"node1"},{value:"node2"}]}},computed:{btnSetActivedVariant(){let e="outline";return this.useActived&&(e="base"),e}},methods:{renderOperations(e,t){return`value: ${t.value}`},getLabelContent(e){let n=e.getPath().map(l=>l.getIndex()+1).join(".");return n=`${n} | value: ${e.value}`,n},getLabel(e,t){const n=this.getLabelContent(t),{data:l}=t;return l.label=n,n},setLabel(e){const{tree:t}=this.$refs,n=t.getItem(e),l=this.getLabelContent(n),{data:a}=n;a.label=l},getItem(){const{tree:e}=this.$refs,t=e.getItem("node1");console.info("getItem:",t.label)},getAllItems(){const{tree:e}=this.$refs,t=e.getItems();console.info("getAllItems:",t.map(n=>n.value))},getActiveChildren(){const e=this.getActivedNode();if(!e)return;let t=[];e&&(t=e.getChildren(!0)||[]),console.info("getActiveChildren:",t.map(n=>n.value))},getAllActived(){console.info("getActived value:",this.activeIds.slice(0))},getActiveChecked(){const{tree:e}=this.$refs,t=this.getActivedNode();if(!t)return;const n=e.getItems(t.value);console.info("getChecked:",n.filter(l=>l.checked).map(l=>l.value))},getActivedNode(){const{tree:e}=this.$refs,{activeId:t}=this;return e.getItem(t)},getInsertItem(){let e=null;return this.useActived?e=this.getActivedNode():(this.index+=1,e={value:`t${this.index}`}),e},getPlainData(e){const t=e;if(!t)return null;const n=e.getChildren(!0)||[],l=[t].concat(n),a={},i=l.map(d=>{const c={walkData(){const v={...this.data},h=this.getChildren();return Array.isArray(h)&&(v.children=[],h.forEach(V=>{const B=a[V.value].walkData();v.children.push(B)})),v},...d};return a[d.value]=c,c}),[o]=i;return o.walkData()},append(e){const{tree:t}=this.$refs,n=this.getInsertItem();n&&(e?t.appendTo(e.value,n):t.appendTo("",n),this.setLabel(n.value)),this.useActived&&(this.activeId="")},insertBefore(e){const{tree:t}=this.$refs,n=this.getInsertItem();n&&(t.insertBefore(e.value,n),this.setLabel(n.value))},insertAfter(e){const{tree:t}=this.$refs,n=this.getInsertItem();n&&(t.insertAfter(e.value,n),this.setLabel(n.value))},getActiveParent(){const{tree:e}=this.$refs,t=this.getActivedNode();if(!t)return;const n=e.getParent(t.value);console.info("getParent",n==null?void 0:n.value)},getActiveParents(){const{tree:e}=this.$refs,t=this.getActivedNode();if(!t)return;const n=e.getParents(t.value);console.info("getParents",n.map(l=>l.value))},setActiveChecked(){const{tree:e}=this.$refs,t=this.getActivedNode();!t||e.setItem(t==null?void 0:t.value,{checked:!0})},setActiveExpanded(){const{tree:e}=this.$refs,t=this.getActivedNode();!t||e.setItem(t==null?void 0:t.value,{expanded:!0})},getActiveIndex(){const{tree:e}=this.$refs,t=this.getActivedNode();if(!t)return;const n=e.getIndex(t.value);console.info("getIndex",n)},getActivePlainData(){const e=this.getActivedNode();return e?this.getPlainData(e):void 0},remove(e){const{tree:t}=this.$refs;t.remove(e.value)},toggleExpandParent(){this.expandParent=!this.expandParent},onChange(e,t){console.info("on change:",e,t),this.checkedIds=e},onExpand(e,t){console.info("on expand:",e,t),this.expandIds=e},onActive(e,t){console.info("on active:",e,t),this.activeIds=e,this.activeId=e[0]||""},onInputChange(e){console.info("on input:",e),this.filterByText=t=>{var a;return(((a=t==null?void 0:t.data)==null?void 0:a.label)||"").indexOf(this.filterText)>=0}}}},k={};var fe=s(be,pe,he,!1,xe,null,null,null);function xe(e){for(let t in k)this[t]=k[t]}const Un=function(){return fe.exports}(),ge={components:{Icon:u},data(){return{items:[{label:"1",children:!0},{label:"2",children:!0}]}},methods:{icon(e,t){const n=this.$createElement;let l="file";return t.getChildren()&&(t.expanded?(l="folder-open",t.loading&&(l="loading")):l="folder"),n(u,{attrs:{name:l}})},load(e){return new Promise(n=>{setTimeout(()=>{let l=[];e.level<2&&(l=[{label:`${e.label}.1`,children:e.level<2-1},{label:`${e.label}.2`,children:e.level<2-1}]),n(l)},500)})}}};var _e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u5C5E\u6027\u8BBE\u7F6E jsx \u5F62\u5F0F")]),n("t-tree",{attrs:{data:e.items,hover:"","expand-all":"",load:e.load,icon:e.icon}})],1),n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",[e._v("slot \u5F62\u5F0F")]),n("t-tree",{attrs:{data:e.items,hover:"",lazy:"",load:e.load},scopedSlots:e._u([{key:"icon",fn:function(l){var a=l.node;return[a.getChildren()&&!a.expanded?n("icon",{attrs:{name:"caret-right"}}):a.getChildren()&&a.expanded&&a.loading?n("icon",{attrs:{name:"loading"}}):a.getChildren()&&a.expanded?n("icon",{attrs:{name:"caret-down"}}):n("icon",{attrs:{name:"attach"}})]}}])})],1)],1)},ke=[];const C={};var Ce=s(ge,_e,ke,!1,ye,null,null,null);function ye(e){for(let t in C)this[t]=C[t]}const qn=function(){return Ce.exports}(),$e={data(){return this.$createElement,{empty(e){return e("div",["\u{1F60A} \u7A7A\u6570\u636E\uFF08 empty props \uFF09"])}}}};var Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u9ED8\u8BA4\u4E3A\u7A7A\u72B6\u6001")]),n("t-tree",{attrs:{data:[]}})],1),n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u8BBE\u7F6E empty \u5C5E\u6027\u4E3A\u6307\u5B9A\u5B57\u7B26\u4E32")]),n("t-tree",{attrs:{data:[],empty:"\u{1F60A} \u7A7A\u6570\u636E\uFF08string\uFF09"}}),n("br")],1),n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("jsx \u5F62\u5F0F")]),n("t-tree",{attrs:{data:[],empty:e.empty}})],1),n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("slot \u5F62\u5F0F")]),n("t-tree",{attrs:{data:[]}},[n("div",{attrs:{slot:"empty"},slot:"empty"},[e._v("\u{1F60A} \u7A7A\u6570\u636E\uFF08slot\uFF09")])])],1)],1)},Ie=[];const y={};var we=s($e,Ae,Ie,!1,ze,null,null,null);function ze(e){for(let t in y)this[t]=y[t]}const Gn=function(){return we.exports}();var Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u5C5E\u6027\u8BBE\u7F6E jsx \u5F62\u5F0F")]),n("t-tree",{attrs:{data:e.items,"expand-all":"",label:e.label}})],1),n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",[e._v("slot \u5F62\u5F0F")]),n("t-tree",{attrs:{data:e.items,"expand-all":"",checkable:""},scopedSlots:e._u([{key:"label",fn:function(l){var a=l.node;return[n("font",{attrs:{color:"blue"}},[e._v("label: "+e._s(a.label)+", value: "+e._s(a.value))])]}}])})],1)],1)},De=[];const Ee={data(){return{items:[{label:"1",children:[{label:"1.1"},{label:"1.2"}]},{label:"2",children:[{label:"2.1"},{label:"2.2"}]}],label(e,t){return e("strong",{domProps:{innerHTML:`value: ${t.value}, label: ${t.label}`}})}}}},$={};var Ne=s(Ee,Le,De,!1,Oe,null,null,null);function Oe(e){for(let t in $)this[t]=$[t]}const Kn=function(){return Ne.exports}(),Se={components:{Icon:u},data(){return{showLine:!0,showIcon:!0,items:[{value:"1",label:"1",children:[{value:"1.1",label:"1.1"},{value:"1.2",label:"1.2"}]},{value:"2",label:"2",children:[{value:"2.1",label:"2.1",children:[{value:"2.1.1",label:"2.1.1",children:[{value:"2.1.1.1",label:"2.1.1.1",children:[{value:"2.1.1.1.1",label:"2.1.1.1.1"},{value:"2.1.1.1.2",label:"2.1.1.1.2"}]}]},{value:"2.1.2",label:"2.1.2"}]},{value:"2.2",label:"2.2"}]},{value:"3",label:"3",children:[{value:"3.1",label:"3.1"},{value:"3.2",label:"3.2"}]},{value:"4",label:"4"}]}},methods:{toggleLine(){this.showLine=!this.showLine},toggleIcon(){this.showIcon=!this.showIcon},getLineNodes(e){const t=e.getParents().reverse(),n=[];return t.forEach((l,a)=>{const i={},o=t[a+1];a<t.length-1&&o&&(i.cross=!o.isLast()),n.push(i)}),n},lineClass(e){const t=["custom-line"];return e.isFirst()&&t.push("custom-line-first"),e.isLeaf()&&t.push("custom-line-leaf"),e.isLast()&&t.push("custom-line-last"),t},renderLine(e,t){const n=this.$createElement;if(!this.showLine)return null;const l=[],a=this.getLineNodes(t).map(i=>e("span",{class:{"custom-line-cross":i.cross}}));if(l.push(e("div",{class:"custom-line-box"},a)),t.isLeaf()){const i=n(u,{attrs:{name:"heart-filled"}}),o=e("i",{class:"custom-line-icon"},[i]);l.push(o)}return e("div",{class:this.lineClass(t)},l)}}};var Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-form",{attrs:{"label-align":"left"}},[n("t-form-item",{attrs:{label:"\u663E\u793A\u8FDE\u7EBF"}},[n("t-switch",{model:{value:e.showLine,callback:function(l){e.showLine=l},expression:"showLine"}})],1),n("t-form-item",{attrs:{label:"\u663E\u793A\u56FE\u6807"}},[n("t-switch",{model:{value:e.showIcon,callback:function(l){e.showIcon=l},expression:"showIcon"}})],1)],1)],1),n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u9ED8\u8BA4\u6837\u5F0F")]),n("t-tree",{attrs:{data:e.items,line:e.showLine,icon:e.showIcon,"expand-all":""}})],1),n("t-space",{staticClass:"tdesign-tree-line",attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u4F7F\u7528\u5C5E\u6027\u7ED3\u5408 jsx \u6765\u81EA\u5B9A\u4E49\u5448\u73B0")]),n("t-tree",{attrs:{data:e.items,icon:e.showIcon,"expand-all":"",line:e.renderLine}})],1),n("t-space",{staticClass:"tdesign-tree-line",attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("slot \u5F62\u5F0F")]),n("t-tree",{attrs:{data:e.items,icon:e.showIcon,line:"","expand-all":""},scopedSlots:e._u([{key:"line",fn:function(l){var a=l.node;return[e.showLine?n("div",{class:e.lineClass(a)},[n("div",{staticClass:"custom-line-box"},e._l(e.getLineNodes(a),function(i,o){return n("span",{key:o,class:{"custom-line-cross":i.cross}})}),0),a.isLeaf()?n("i",{staticClass:"custom-line-icon"},[n("icon",{attrs:{name:"heart-filled"}})],1):e._e()]):e._e()]}}])})],1)],1)},Te=[];const A={};var Me=s(Se,Fe,Te,!1,Pe,"66182470",null,null);function Pe(e){for(let t in A)this[t]=A[t]}const Qn=function(){return Me.exports}();var je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-form",{attrs:{"label-align":"left","label-width":80}},[n("t-form-item",{attrs:{label:"\u5207\u6362\u6570\u636E"}},[n("t-switch",{on:{change:e.toggleData}})],1),n("t-form-item",{attrs:{label:"\u5C55\u5F00\u52A8\u753B"}},[n("t-switch",{model:{value:e.transition,callback:function(l){e.transition=l},expression:"transition"}})],1)],1),n("t-tree",{attrs:{data:e.items,"expand-all":"",transition:e.transition}})],1)],1)},Ve=[];const p=[{label:"1",children:[{label:"1.1",children:[{label:"1.1.1"},{label:"1.1.2"}]},{label:"1.2",children:[{label:"1.2.1"},{label:"1.2.2"}]}]},{label:"2",children:[{label:"2.1"},{label:"2.2"}]}],Be=[{label:"1"},{label:"2"},{label:"3",children:[{label:"3.1"},{label:"3.2"}]}],Re={data(){return{transition:!0,items:p}},methods:{toggleData(){this.items=this.items===p?Be:p}}},I={};var We=s(Re,je,Ve,!1,He,null,null,null);function He(e){for(let t in I)this[t]=I[t]}const Xn=function(){return We.exports}();var Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-tree",{attrs:{data:e.items,hover:"","expand-level":1}})],1)],1)},Ue=[];const qe={data(){return{items:[{label:"1",children:[{label:"1.1",children:[{label:"1.1.1"},{label:"1.1.2"}]},{label:"1.2",children:[{label:"1.2.1"},{label:"1.2.2"}]}]},{label:"2",children:[{label:"2.1"},{label:"2.2"}]}]}}},w={};var Ge=s(qe,Je,Ue,!1,Ke,null,null,null);function Ke(e){for(let t in w)this[t]=w[t]}const Yn=function(){return Ge.exports}();var Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-form",{attrs:{"label-align":"left","label-width":120}},[n("t-form-item",{attrs:{label:"\u4E92\u65A5\u5C55\u5F00"}},[n("t-switch",{model:{value:e.mutex,callback:function(l){e.mutex=l},expression:"mutex"}})],1),n("t-form-item",{attrs:{label:"\u6574\u4E2A\u8282\u70B9\u53EF\u70B9\u51FB"}},[n("t-switch",{model:{value:e.expandOnClickNode,callback:function(l){e.expandOnClickNode=l},expression:"expandOnClickNode"}})],1)],1),n("t-tree",{attrs:{data:e.items,hover:"","expand-mutex":e.mutex,"expand-on-click-node":e.expandOnClickNode,onExpand:e.propOnExpand},on:{click:e.onClick,expand:e.onExpand}})],1)],1)},Xe=[];const Ye={data(){return{mutex:!0,expandOnClickNode:!0,items:[{label:"1",children:[{label:"1.1",children:[{label:"1.1.1"},{label:"1.1.2"}]},{label:"1.2",children:[{label:"1.2.1"},{label:"1.2.2"}]}]},{label:"2",children:[{label:"2.1",children:[{label:"2.1.1"},{label:"2.1.2"}]},{label:"2.2",children:[{label:"2.2.1"},{label:"2.2.2"}]}]}]}},methods:{onClick(e){console.info("onClick",e)},onExpand(e,t){console.info("onExpand",e,t)},propOnExpand(e,t){console.info("propOnExpand",e,t)},toggleMutex(){this.mutex=!this.mutex},toggleExpandOnClickNode(){this.expandOnClickNode=!this.expandOnClickNode}}},z={};var Ze=s(Ye,Qe,Xe,!1,en,null,null,null);function en(e){for(let t in z)this[t]=z[t]}const Zn=function(){return Ze.exports}();var nn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u7981\u7528\u6574\u4E2A tree")]),n("t-form",[n("t-form-item",{attrs:{label:"\u662F\u5426\u7981\u7528\u6574\u4E2A tree",labelWidth:"150"}},[n("t-switch",{model:{value:e.disabled,callback:function(l){e.disabled=l},expression:"disabled"}})],1),n("t-form-item",{attrs:{label:"\u662F\u5426\u53EA\u7981\u7528 checkbox",labelWidth:"200"}},[n("t-switch",{model:{value:e.disableCheck,callback:function(l){e.disableCheck=l},expression:"disableCheck"}})],1)],1),n("t-tree",{attrs:{data:e.items,hover:"",checkable:"","expand-all":"",disabled:e.disabled,disableCheck:e.disableCheck}})],1),n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u7981\u7528\u6307\u5B9A\u8282\u70B9")]),n("t-form",[n("t-form-item",{attrs:{label:"\u7981\u7528\u6307\u5B9A\u8282\u70B9 checkbox",labelWidth:"200"}},[n("t-switch",{model:{value:e.disableTarget,callback:function(l){e.disableTarget=l},expression:"disableTarget"}})],1)],1),n("t-tree",{attrs:{data:e.items,hover:"",checkable:"","expand-all":"",disableCheck:e.fnDisableCheck}})],1)],1)},tn=[];const ln={data(){return{disabled:!0,disableCheck:!1,disableTarget:!0,items:[{label:"1",children:[{label:"1.1",children:[{label:"1.1.1"},{label:"1.1.2"}]},{label:"1.2",children:[{label:"1.2.1"},{label:"1.2.2"}]}]},{label:"2",children:[{label:"2.1"},{label:"2.2"}]}]}},methods:{fnDisableCheck(e){return["1.1","1.2","2.1"].indexOf(e.label)>=0?this.disableTarget:!1}}},L={};var an=s(ln,nn,tn,!1,sn,null,null,null);function sn(e){for(let t in L)this[t]=L[t]}const et=function(){return an.exports}();var on=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-form",{attrs:{"label-align":"left","label-width":60}},[n("t-form-item",{attrs:{label:"\u53EF\u9009"}},[n("t-switch",{model:{value:e.checkable,callback:function(l){e.checkable=l},expression:"checkable"}})],1)],1),n("t-tree",{attrs:{data:e.items,hover:"","expand-all":"",checkable:e.checkable,load:e.load,lazy:!1},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}})],1)],1)},rn=[];const cn={data(){return{checkable:!0,value:["1.1.1"],items:[{label:"1",value:"1",children:!0},{label:"2",value:"2",children:!0}]}},methods:{load(e){return new Promise(t=>{setTimeout(()=>{let n=[];e.level<2&&(n=[{label:`${e.label}.1`,value:`${e.value}.1`,children:!0},{label:`${e.label}.2`,value:`${e.value}.2`,children:!0}]),t(n)},1e3)})}}},D={};var dn=s(cn,on,rn,!1,un,null,null,null);function un(e){for(let t in D)this[t]=D[t]}const nt=function(){return dn.exports}();var vn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u6570\u636E\u5EF6\u8FDF\u52A0\u8F7D")]),n("div",{staticClass:"tips"},[n("p",[e._v("\u9ED8\u8BA4\u4E3A\u70B9\u51FB\u52A0\u8F7D\u6570\u636E\u3002")]),n("p",[e._v(" valueMode \u9ED8\u8BA4\u4E3A 'onlyLeaf'\u3002\u9009\u4E2D\u7236\u8282\u70B9\u65F6\uFF0C\u5B50\u8282\u70B9\u7531\u4E8E\u672A\u52A0\u8F7D\uFF0C\u65E0\u6CD5\u66F4\u65B0\u548C\u83B7\u53D6\u9009\u4E2D\u72B6\u6001\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u66F4\u65B0\u7236\u8282\u70B9\u7684\u72B6\u6001\u3002 ")]),n("p",[e._v("\u6240\u4EE5\u4F7F\u7528\u5EF6\u8FDF\u52A0\u8F7D\u65F6\uFF0C\u63A8\u8350 valueMode \u8BBE\u7F6E\u4E3A 'all' \u6216\u8005 'parentFirst'\u3002")])]),n("t-form",{attrs:{labelWidth:"150"}},[n("t-form-item",{attrs:{label:"\u53EF\u9009"}},[n("t-switch",{model:{value:e.checkable,callback:function(l){e.checkable=l},expression:"checkable"}})],1),n("t-form-item",{attrs:{label:"\u4E25\u683C\u6A21\u5F0F"}},[n("t-switch",{model:{value:e.checkStrictly,callback:function(l){e.checkStrictly=l},expression:"checkStrictly"}})],1)],1),n("t-tree",{ref:"tree",attrs:{data:e.items,hover:"","expand-all":"",checkable:e.checkable,checkStrictly:e.checkStrictly,load:e.load,valueMode:"all"},on:{load:e.onLoad}})],1)],1)},mn=[];const pn={data(){return{checkable:!0,checkStrictly:!1,value:["1.1","1.1.1"],items:[{label:"1",value:"1",children:!0},{label:"2",value:"2",children:!0}]}},methods:{onLoad(e){console.log("on load:",e)},load(e){return new Promise(t=>{setTimeout(()=>{let n=[];e.level<2&&(n=[{label:`${e.label}.1`,value:`${e.value}.1`,children:!0},{label:`${e.label}.2`,value:`${e.value}.2`,children:!0}]),t(n)},1e3)})}}},E={};var hn=s(pn,vn,mn,!1,bn,"7988d467",null,null);function bn(e){for(let t in E)this[t]=E[t]}const tt=function(){return hn.exports}();var fn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-form",{attrs:{"label-align":"left","label-width":80}},[n("t-form-item",{scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\u9009\u4E2D\u8282\u70B9")]},proxy:!0}])},[n("t-input-adornment",{attrs:{prepend:"checked:"}},[n("t-input",{attrs:{value:e.allChecked}})],1)],1),n("t-form-item",{scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\u5C55\u5F00\u8282\u70B9")]},proxy:!0}])},[n("t-input-adornment",{attrs:{prepend:"expanded:"}},[n("t-input",{attrs:{value:e.allExpanded}})],1)],1),n("t-form-item",{scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\u9AD8\u4EAE\u8282\u70B9")]},proxy:!0}])},[n("t-input-adornment",{attrs:{prepend:"actived:"}},[n("t-input",{attrs:{value:e.allActived}})],1)],1)],1),n("t-tree",{attrs:{data:e.items,checkable:"",activable:"","expand-on-click-node":!1,"active-multiple":!1,expanded:e.expanded,actived:e.actived,value:e.checked,"value-mode":e.valueMode},on:{expand:e.onExpand,change:e.onChange,active:e.onActive,click:e.onClick}})],1)],1)},xn=[];const gn={data(){return{valueMode:"onlyLeaf",checked:["1.1.1.1","1.1.1.2"],expanded:["1","1.1","1.1.1","2"],actived:["2"],items:[{value:"1",label:"1",children:[{value:"1.1",label:"1.1",children:[{value:"1.1.1",label:"1.1.1",children:[{value:"1.1.1.1",label:"1.1.1.1"},{value:"1.1.1.2",label:"1.1.1.2"}]},{value:"1.1.2",label:"1.1.2",children:[{value:"1.1.2.1",label:"1.1.2.1"},{value:"1.1.2.2",label:"1.1.2.2"}]}]},{value:"1.2",label:"1.2",children:[{value:"1.2.1",label:"1.2.1",children:[{value:"1.2.1.1",label:"1.2.1.1"},{value:"1.2.1.2",label:"1.2.1.2"}]},{value:"1.2.2",label:"1.2.2",children:[{value:"1.2.2.1",label:"1.2.2.1"},{value:"1.2.2.2",label:"1.2.2.2"}]}]}]},{value:"2",label:"2 \u8FD9\u4E2A\u8282\u70B9\u4E0D\u5141\u8BB8\u5C55\u5F00, \u4E0D\u5141\u8BB8\u6FC0\u6D3B",checkable:!1,children:[{value:"2.1",label:"2.1 \u8FD9\u4E2A\u8282\u70B9\u4E0D\u5141\u8BB8\u9009\u4E2D",checkable:!1},{value:"2.2",label:"2.2",checkable:!1}]}]}},computed:{allChecked(){let e=[];return Array.isArray(this.checked)&&(e=this.checked),e.join(", ")},allExpanded(){let e=[];return Array.isArray(this.expanded)&&(e=this.expanded),e.join(", ")},allActived(){let e=[];return Array.isArray(this.actived)&&(e=this.actived),e.join(", ")}},methods:{onClick(e){console.info("onClick:",e)},onChange(e,t){console.info("onChange:",e,t);const n=e.filter(l=>l!=="2.1");console.info("\u8282\u70B9 2.1 \u4E0D\u5141\u8BB8\u9009\u4E2D"),this.checked=n},onExpand(e,t){console.info("onExpand:",e,t);const n=e.filter(l=>l!=="2");console.info("\u8282\u70B9 2 \u4E0D\u5141\u8BB8\u5C55\u5F00"),this.expanded=n},onActive(e,t){console.info("onActive:",e,t);const n=e.filter(l=>l!=="2");console.info("\u8282\u70B9 2 \u4E0D\u5141\u8BB8\u6FC0\u6D3B"),this.actived=n}}},N={};var _n=s(gn,fn,xn,!1,kn,null,null,null);function kn(e){for(let t in N)this[t]=N[t]}const lt=function(){return _n.exports}();var Cn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",attrs:{size:32,direction:"vertical"}},[n("t-space",{attrs:{size:10,direction:"vertical"}},[n("t-form",[n("t-form-item",[n("t-input-adornment",{attrs:{prepend:"checked:"}},[n("t-input",{attrs:{value:e.allChecked},on:{change:e.onAllCheckedInput}})],1)],1),n("t-form-item",[n("t-input-adornment",{attrs:{prepend:"expanded:"}},[n("t-input",{attrs:{value:e.allExpanded},on:{change:e.onAllExpandedInput}})],1)],1),n("t-form-item",[n("t-input-adornment",{attrs:{prepend:"actived:"}},[n("t-input",{attrs:{value:e.allActived},on:{change:e.onAllActivedInput}})],1)],1)],1),n("t-tree",{attrs:{data:e.items,checkable:"",activable:"","expand-on-click-node":!1,"active-multiple":!1,expanded:e.expanded,actived:e.actived,value:e.checked,"value-mode":e.valueMode},on:{"update:expanded":function(l){e.expanded=l},"update:actived":function(l){e.actived=l},"update:value":function(l){e.checked=l}}})],1)],1)},yn=[];const $n={data(){return{valueMode:"onlyLeaf",checked:["1.1.1.1","1.1.1.2"],expanded:["1","1.1","1.1.1","2"],actived:["2"],items:[{value:"1",label:"1",children:[{value:"1.1",label:"1.1",children:[{value:"1.1.1",label:"1.1.1",children:[{value:"1.1.1.1",label:"1.1.1.1"},{value:"1.1.1.2",label:"1.1.1.2"}]},{value:"1.1.2",label:"1.1.2",children:[{value:"1.1.2.1",label:"1.1.2.1"},{value:"1.1.2.2",label:"1.1.2.2"}]}]},{value:"1.2",label:"1.2",children:[{value:"1.2.1",label:"1.2.1",children:[{value:"1.2.1.1",label:"1.2.1.1"},{value:"1.2.1.2",label:"1.2.1.2"}]},{value:"1.2.2",label:"1.2.2",children:[{value:"1.2.2.1",label:"1.2.2.1"},{value:"1.2.2.2",label:"1.2.2.2"}]}]}]},{value:"2",label:"2",checkable:!1,children:[{value:"2.1",label:"2.1",checkable:!1},{value:"2.2",label:"2.2",checkable:!1}]}]}},computed:{allChecked(){let e=[];return Array.isArray(this.checked)&&(e=this.checked),e.map(t=>`{${t}}`).join(", ")},allExpanded(){let e=[];return Array.isArray(this.expanded)&&(e=this.expanded),e.map(t=>`{${t}}`).join(", ")},allActived(){let e=[];return Array.isArray(this.actived)&&(e=this.actived),e.map(t=>`{${t}}`).join(", ")}},methods:{getValueFromString(e){const t=e.split(","),n=[];return t.map(l=>l.trim()).forEach(l=>{const a=/^\{([^{}]+)\}$/.exec(l);a&&a[1]&&n.push(a[1])}),n},onAllCheckedInput(e){console.log("checked input on change",e);const t=this.getValueFromString(e);this.checked=t},onAllExpandedInput(e){console.log("expanded input on change",e);const t=this.getValueFromString(e);this.expanded=t},onAllActivedInput(e){console.log("actived input on change",e);const t=this.getValueFromString(e);this.actived=t}}},O={};var An=s($n,Cn,yn,!1,In,null,null,null);function In(e){for(let t in O)this[t]=O[t]}const at=function(){return An.exports}();var wn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("t-space",{staticClass:"tdesign-tree-demo",staticStyle:{width:"100%"},attrs:{size:32,direction:"vertical"}},[n("t-space",{staticClass:"tdesign-tree-vscroll-lazy",staticStyle:{width:"80%"},attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u865A\u62DF\u6EDA\u52A8 - lazy\u6A21\u5F0F")]),n("t-tree",{ref:"tree",attrs:{data:e.lazyItems,hover:"",activable:"","expand-all":"",height:300,"expand-on-click-node":!1,label:e.label,scroll:{rowHeight:34,bufferSize:10,threshold:10,type:"lazy"}}})],1),n("t-space",{staticStyle:{width:"100%"},attrs:{size:10,direction:"vertical"}},[n("h3",{staticClass:"title"},[e._v("\u865A\u62DF\u6EDA\u52A8 - virtual \u6A21\u5F0F")]),n("t-form",{staticStyle:{"max-width":"500px"},attrs:{labelWidth:"150"}},[n("t-form-item",{attrs:{label:"\u52A8\u753B"}},[n("t-switch",{model:{value:e.transition,callback:function(l){e.transition=l},expression:"transition"}})],1),n("t-form-item",{attrs:{label:"\u663E\u793A\u8FDE\u7EBF"}},[n("t-switch",{model:{value:e.showLine,callback:function(l){e.showLine=l},expression:"showLine"}})],1),n("t-form-item",{attrs:{label:"\u663E\u793A\u56FE\u6807"}},[n("t-switch",{model:{value:e.showIcon,callback:function(l){e.showIcon=l},expression:"showIcon"}})],1),n("t-form-item",{attrs:{label:"\u53EF\u9009"}},[n("t-switch",{model:{value:e.isCheckable,callback:function(l){e.isCheckable=l},expression:"isCheckable"}})],1),n("t-form-item",{attrs:{label:"\u53EF\u64CD\u4F5C"}},[n("t-switch",{model:{value:e.isOperateAble,callback:function(l){e.isOperateAble=l},expression:"isOperateAble"}})],1)],1),n("t-form",{staticStyle:{"max-width":"500px"},attrs:{"label-align":"left","label-width":80}},[n("t-form-item",[n("t-input-adornment",{attrs:{prepend:"\u63D2\u5165\u8282\u70B9\u6570\u91CF:"}},[n("t-input",{model:{value:e.insertCount,callback:function(l){e.insertCount=l},expression:"insertCount"}})],1)],1),n("t-form-item",[n("t-button",{on:{click:function(l){return e.append()}}},[e._v("\u63D2\u5165\u6839\u8282\u70B9")])],1)],1)],1),n("t-tree",{ref:"tree",attrs:{data:e.items,hover:"",activable:"",checkable:e.isCheckable,"expand-all":"",height:300,transition:e.transition,"expand-on-click-node":!1,line:e.showLine,icon:e.showIcon,label:e.label,scroll:{rowHeight:34,bufferSize:10,threshold:10,type:"virtual"}},scopedSlots:e._u([{key:"operations",fn:function(l){var a=l.node;return[e.isOperateAble?n("div",{staticClass:"tdesign-demo-block-row"},[n("t-button",{attrs:{size:"small",variant:"base"},on:{click:function(i){return e.append(a)}}},[e._v("\u6DFB\u52A0\u5B50\u8282\u70B9")]),n("t-button",{attrs:{size:"small",variant:"base",theme:"danger"},on:{click:function(i){return e.remove(a)}}},[e._v("\u5220\u9664")])],1):e._e()]}}])}),n("div",{staticStyle:{height:"100px"}})],1)},zn=[];const S=[5,5,5];function P(){let e=0;function t(){return e+=1,`t${e}`}function n(a,i){const o=S[i];if(o){let r=0;for(r=0;r<o;r+=1){const c={value:t()};a.push(c),S[i+1]&&(c.children=[],n(c.children,i+1))}}}const l=[];return n(l,0),{getValue:t,items:l}}const Ln=P(),F=P(),Dn={data(){return{index:0,transition:!0,insertCount:1,useActived:!1,enableVScroll:!0,lazyVScroll:!1,expandParent:!0,showLine:!0,showIcon:!0,isCheckable:!0,isOperateAble:!0,items:F.items,lazyItems:Ln.items}},methods:{label(e,t){return`${t.value}`},getInsertItem(){return{value:F.getValue()}},append(e){const{tree:t}=this.$refs;if(e)for(let n=0;n<this.insertCount;n+=1){const l=this.getInsertItem();t.appendTo(e.value,l)}else for(let n=0;n<this.insertCount;n+=1){const l=this.getInsertItem();t.appendTo("",l)}},remove(e){e.remove()}}},T={};var En=s(Dn,wn,zn,!1,Nn,null,null,null);function Nn(e){for(let t in T)this[t]=T[t]}const it=function(){return En.exports}(),st=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-tree :data="items" activable hover transition />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '\u7B2C\u4E00\u6BB5',
          children: [
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
          ],
        },
        {
          label: '\u7B2C\u4E00\u6BB5',
          children: [
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
          ],
        },
        {
          label: '\u7B2C\u4E00\u6BB5',
          children: [
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
          ],
        },
        {
          label: '\u7B2C\u4E00\u6BB5',
          children: [
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
            {
              label: '\u7B2C\u4E8C\u6BB5',
            },
          ],
        },
      ],
    };
  },
};
<\/script>
`,ot=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-form>
        <t-form-item label="\u53EF\u9009">
          <t-switch v-model="checkable" />
        </t-form-item>
        <t-form-item label="\u4E25\u683C\u6A21\u5F0F">
          <t-switch v-model="checkStrictly" />
        </t-form-item>
        <t-form-item label="\u9009\u4E2D\u503C\u6A21\u5F0F">
          <t-radio-group name="value-mode" variant="default-filled" v-model="valueMode">
            <t-radio-button v-for="item in valueOptions" :key="item.value" :value="item.value">{{
              item.label
            }}</t-radio-button>
          </t-radio-group>
        </t-form-item>
        <t-form-item>
          <t-button theme="primary" @click="selectInvert">\u53CD\u9009</t-button>
        </t-form-item>
      </t-form>
      <t-tree
        :data="items"
        hover
        expand-all
        :checkable="checkable"
        :check-strictly="checkStrictly"
        :value-mode="valueMode"
        :value="allChecked"
        @change="onChange"
        @click="onClick"
        ref="tree"
      />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      valueMode: 'onlyLeaf',
      checkable: true,
      checkStrictly: false,
      allChecked: [],
      valueOptions: [
        {
          value: 'onlyLeaf',
          label: 'onlyLeaf',
        },
        {
          value: 'parentFirst',
          label: 'parentFirst',
        },
        {
          value: 'all',
          label: 'all',
        },
      ],
      items: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
              children: [
                {
                  value: '1.1.1',
                  label: '1.1.1',
                  children: [
                    {
                      value: '1.1.1.1',
                      label: '1.1.1.1',
                    },
                    {
                      value: '1.1.1.2',
                      label: '1.1.1.2',
                    },
                  ],
                },
                {
                  value: '1.1.2',
                  label: '1.1.2',
                  children: [
                    {
                      value: '1.1.2.1',
                      label: '1.1.2.1',
                    },
                    {
                      value: '1.1.2.2',
                      label: '1.1.2.2',
                    },
                  ],
                },
              ],
            },
            {
              value: '1.2',
              label: '1.2',
              children: [
                {
                  value: '1.2.1',
                  label: '1.2.1',
                  children: [
                    {
                      value: '1.2.1.1',
                      label: '1.2.1.1',
                    },
                    {
                      value: '1.2.1.2',
                      label: '1.2.1.2',
                    },
                  ],
                },
                {
                  value: '1.2.2',
                  label: '1.2.2',
                  children: [
                    {
                      value: '1.2.2.1',
                      label: '1.2.2.1',
                    },
                    {
                      value: '1.2.2.2',
                      label: '1.2.2.2',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          value: '2',
          label: '2',
          children: [
            {
              value: '2.1',
              label: '2.1',
            },
            {
              value: '2.2',
              label: '2.2',
            },
          ],
        },
      ],
    };
  },
  methods: {
    onClick(context) {
      console.info('onClick:', context);
    },
    onChange(checked, context) {
      console.info('onChange:', checked, context);
    },
    propOnChange(checked, context) {
      console.info('propOnChange:', checked, context);
    },
    selectInvert() {
      const { tree } = this.$refs;
      // \u53D6\u5F97\u6240\u6709\u8282\u70B9
      const items = tree.getItems();
      const revertSelection = [];
      items.forEach((item) => {
        if (!item.checked && !item.indeterminate) {
          // checked \u4E3A true, \u4E3A\u76F4\u63A5\u9009\u4E2D\u72B6\u6001
          // indeterminate \u4E3A true, \u4E3A\u534A\u9009\u72B6\u6001
          revertSelection.push(item.value);
        }
      });
      this.allChecked = revertSelection;
    },
  },
};
<\/script>
`,rt=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-form labelWidth="120">
        <t-form-item label="\u8282\u70B9\u53EF\u9AD8\u4EAE">
          <t-switch v-model="activable" />
        </t-form-item>
        <t-form-item label="\u8282\u70B9\u53EF\u591A\u9009\u9AD8\u4EAE">
          <t-switch v-model="activeMultiple" />
        </t-form-item>
        <t-form-item label="\u6574\u4E2A\u8282\u70B9\u53EF\u70B9\u51FB">
          <t-switch v-model="expandOnClickNode" />
        </t-form-item>
      </t-form>
      <t-tree
        :data="items"
        expand-all
        :activable="activable"
        :active-multiple="activeMultiple"
        :expand-on-click-node="expandOnClickNode"
        @click="onClick"
        @active="onActive"
        :onActive="propOnActive"
        hover
      />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      activable: true,
      activeMultiple: false,
      expandOnClickNode: false,
      items: [
        {
          value: 't1',
          label: '1',
          children: [
            {
              value: 't1.1',
              label: '1.1',
            },
            {
              value: 't1.2',
              label: '1.2',
            },
          ],
        },
        {
          value: 't2',
          label: '2',
          children: [
            {
              value: 't2.1',
              label: '2.1',
            },
            {
              value: 't2.2',
              label: '2.2',
            },
          ],
        },
      ],
    };
  },
  methods: {
    onClick(context) {
      console.info('onClick', context);
    },
    onActive(value, context) {
      console.info('onActive', value, context);
    },
    propOnActive(value, context) {
      console.info('propOnActive', value, context);
    },
    toggleActivable() {
      this.activable = !this.activable;
    },
    toggleActiveMultiple() {
      this.activeMultiple = !this.activeMultiple;
    },
    toggleExpandOnClickNode() {
      this.expandOnClickNode = !this.expandOnClickNode;
    },
  },
};
<\/script>
`,ct=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-tree
        :data="items"
        activable
        hover
        transition
        expand-all
        draggable
        @drag-start="handleDragStart"
        @drag-end="handleDragEnd"
        @drag-over="handleDragOver"
        @drag-leave="handleDragLeave"
        @drop="handleDrop"
      />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
              children: [
                {
                  value: '1.1.1',
                  label: '1.1.1',
                  children: [
                    {
                      value: '1.1.1.1',
                      label: '1.1.1.1',
                    },
                    {
                      value: '1.1.1.2',
                      label: '1.1.1.2',
                    },
                  ],
                },
                {
                  value: '1.1.2',
                  label: '1.1.2',
                  children: [
                    {
                      value: '1.1.2.1',
                      label: '1.1.2.1',
                    },
                    {
                      value: '1.1.2.2',
                      label: '1.1.2.2',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          value: '2',
          label: '2',
          children: [
            {
              value: '2.1',
              label: '2.1',
            },
            {
              value: '2.2',
              label: '2.2',
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleDragStart(ctx) {
      console.log('handleDragStart', ctx);
    },
    handleDragEnd(ctx) {
      console.log('handleDragEnd', ctx);
    },
    handleDragOver(ctx) {
      console.log('handleDragOver', ctx);
    },
    handleDragLeave(ctx) {
      console.log('handleDragLeave', ctx);
    },
    handleDrop(ctx) {
      console.log('handleDrop', ctx);
    },
  },
};
<\/script>

<style scoped>
.tdesign-tree-demo .title {
  margin-bottom: 10px;
}
.tdesign-tree-demo .tips {
  margin-bottom: 10px;
}
.tdesign-tree-demo .operations {
  margin-bottom: 10px;
}
.tdesign-tree-demo .t-form__item {
  margin-bottom: 5px;
}
</style>
`,dt=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <h3 class="title">\u9ED8\u8BA4\u72B6\u6001</h3>
      <div class="tips">
        <p>
          \u8FC7\u6EE4\u52A8\u4F5C\u7531 filter \u5C5E\u6027\u7684\u53D8\u66F4\u89E6\u53D1\uFF0C\u6240\u4EE5\u4E0D\u80FD\u53EA\u4FEE\u6539\u4F20\u9012\u7ED9 filter \u5C5E\u6027\u5185\u90E8\u7684\u6570\u636E\uFF0C\u5E94\u5F53\u5728\u6761\u4EF6\u53D8\u5316\u65F6\u53D8\u66F4 filter
          \u5C5E\u6027\u3002
        </p>
        <p>\u6E05\u7A7A\u8FC7\u6EE4\u6761\u4EF6\u65F6\uFF0C\u5E94\u8BBE\u7F6E filter \u5C5E\u6027\u4E3A null\uFF0C\u6765\u89E6\u53D1 tree \u7EC4\u4EF6\u5C55\u793A\u72B6\u6001\u8FD8\u539F\u3002</p>
        <p>allowFoldNodeOnFilter \u5C5E\u6027\u9ED8\u8BA4\u4E3A false\uFF0C\u6B64\u65F6\u8FC7\u6EE4\u72B6\u6001\u4E0B\u5C55\u5F00\u7684\u8DEF\u5F84\u8282\u70B9\u65E0\u6CD5\u88AB\u6536\u8D77\u3002</p>
      </div>
      <t-form labelWidth="200">
        <t-form-item>
          <t-input-adornment prepend="filter:">
            <t-input v-model="demo1Text" @change="demo1Input" />
          </t-input-adornment>
        </t-form-item>
      </t-form>
      <t-tree ref="tree" :data="items" expand-on-click-node :filter="demo1Filter" hover line />
    </t-space>
    <t-space :size="6" direction="vertical">
      <h3 class="title">allowFoldNodeOnFilter="true"</h3>
      <div class="tips">
        <p>
          allowFoldNodeOnFilter \u5C5E\u6027\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u8FC7\u6EE4\u72B6\u6001\u4E0B\u5C55\u5F00\u7684\u8282\u70B9\uFF0C\u5141\u8BB8\u70B9\u51FB\u6536\u8D77\uFF0C\u6CE8\u610F\u8FD9\u4F1A\u5F71\u54CD\u5230 tree
          \u7EC4\u4EF6\u5F53\u524D\u7684\u5C55\u5F00\u72B6\u6001\u6570\u636E\u3002
        </p>
        <p>\u6BCF\u6B21\u53D8\u66F4\u8FC7\u6EE4\u6761\u4EF6\u65F6\uFF0C\u4F1A\u91CD\u8BBE\u8282\u70B9\u5C55\u5F00\u72B6\u6001\uFF0C\u5C06\u547D\u4E2D\u8282\u70B9\u7684\u8DEF\u5F84\u8282\u70B9\u5C55\u5F00\u3002</p>
        <p>\u5F53\u6E05\u7A7A\u8FC7\u6EE4\u6761\u4EF6\u65F6\uFF0C\u5C06\u4F1A\u8FD8\u539F\u4E3A\u8BBE\u7F6E\u8FC7\u6EE4\u6761\u4EF6\u4E4B\u524D\u65F6\u7684\u5C55\u5F00\u72B6\u6001\u3002</p>
      </div>
      <t-form labelWidth="200">
        <t-form-item>
          <t-input-adornment prepend="filter:">
            <t-input v-model="demo2Text" @change="demo2Input" />
          </t-input-adornment>
        </t-form-item>
      </t-form>
      <t-tree ref="tree" :data="items" expand-on-click-node allowFoldNodeOnFilter :filter="demo2Filter" hover line />
    </t-space>
  </t-space>
</template>

<script>
const exampleItems = [
  {
    value: '1',
    label: '1',
    children: [
      {
        value: '1.1',
        label: '1.1',
        children: [
          {
            value: '1.1.1',
            label: '1.1.1',
            children: [
              {
                value: '1.1.1.1',
                label: '1.1.1.1',
              },
              {
                value: '1.1.1.2',
                label: '1.1.1.2',
              },
            ],
          },
          {
            value: '1.1.2',
            label: '1.1.2',
            children: [
              {
                value: '1.1.2.1',
                label: '1.1.2.1',
              },
              {
                value: '1.1.2.2',
                label: '1.1.2.2',
              },
            ],
          },
        ],
      },
      {
        value: '1.2',
        label: '1.2',
        children: [
          {
            value: '1.2.1',
            label: '1.2.1',
            children: [
              {
                value: '1.2.1.1',
                label: '1.2.1.1',
              },
              {
                value: '1.2.1.2',
                label: '1.2.1.2',
              },
            ],
          },
          {
            value: '1.2.2',
            label: '1.2.2',
            children: [
              {
                value: '1.2.2.1',
                label: '1.2.2.1',
              },
              {
                value: '1.2.2.2',
                label: '1.2.2.2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '2',
    children: [
      {
        value: '2.1',
        label: '2.1',
      },
      {
        value: '2.2',
        label: '2.2',
      },
    ],
  },
];

export default {
  data() {
    return {
      demo1Text: '',
      demo1Filter: null,
      demo2Text: '',
      demo2Filter: null,
      items: exampleItems,
    };
  },
  methods: {
    demo1Input(state) {
      console.info('demo1 input:', state);
      if (this.demo1Text) {
        // \u5B58\u5728\u8FC7\u6EE4\u6587\u6848\uFF0C\u624D\u542F\u7528\u8FC7\u6EE4
        this.demo1Filter = (node) => {
          const rs = node.data.label.indexOf(this.demo1Text) >= 0;
          // \u547D\u4E2D\u7684\u8282\u70B9\u4F1A\u5F3A\u5236\u5C55\u793A
          // \u547D\u4E2D\u8282\u70B9\u7684\u8DEF\u5F84\u8282\u70B9\u4F1A\u9501\u5B9A\u5C55\u793A
          // \u672A\u547D\u4E2D\u7684\u8282\u70B9\u4F1A\u9690\u85CF
          return rs;
        };
      } else {
        // \u8FC7\u6EE4\u6587\u6848\u4E3A\u7A7A\uFF0C\u5219\u8FD8\u539F tree \u4E3A\u65E0\u8FC7\u6EE4\u72B6\u6001
        this.demo1Filter = null;
      }
    },
    demo2Input() {
      this.demo2Filter = this.demo2Text ? (node) => node.data.label.indexOf(this.demo2Text) >= 0 : null;
    },
  },
};
<\/script>

<style scoped>
.tdesign-tree-demo .tips p {
  line-height: 24px;
  text-indent: 1em;
}
</style>
`,ut=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical" style="width: 100%">
      <h3 class="title">\u5C5E\u6027\u7ED3\u5408 jsx \u5F62\u5F0F\u4F20\u9012</h3>
      <t-tree :data="items" hover expand-all :label="getLabel" :operations="renderOperations" />
    </t-space>

    <t-space :size="10" direction="vertical" style="width: 100%" class="tdesign-tree-operations">
      <h3 class="title">slot \u5F62\u5F0F</h3>
      <t-form :label-width="200" label-align="left">
        <t-form-item label="\u63D2\u5165\u8282\u70B9\u4F7F\u7528\u9AD8\u4EAE\u8282\u70B9">
          <t-switch v-model="useActived" />
        </t-form-item>
        <t-form-item label="\u5B50\u8282\u70B9\u5C55\u5F00\u89E6\u53D1\u7236\u8282\u70B9\u5C55\u5F00">
          <t-switch v-model="expandParent" />
        </t-form-item>
        <t-form-item>
          <t-input-adornment prepend="filter:">
            <t-input v-model="filterText" @change="onInputChange" />
          </t-input-adornment>
        </t-form-item>
      </t-form>
      <t-tree
        :data="items"
        hover
        expand-all
        activable
        checkable
        :expand-on-click-node="false"
        :label="getLabel"
        :expand-parent="expandParent"
        :filter="filterByText"
        @expand="onExpand"
        @change="onChange"
        @active="onActive"
        line
        ref="tree"
      >
        <template #operations="{ node }">
          <t-space :size="10">
            <t-button size="small" variant="base" @click="append(node)">\u6DFB\u52A0\u5B50\u8282\u70B9</t-button>
            <t-button size="small" variant="outline" @click="insertBefore(node)">\u524D\u63D2\u8282\u70B9</t-button>
            <t-button size="small" variant="outline" @click="insertAfter(node)">\u540E\u63D2\u8282\u70B9</t-button>
            <t-button size="small" variant="base" theme="danger" @click="remove(node)">\u5220\u9664</t-button>
          </t-space>
        </template>
      </t-tree>
    </t-space>

    <t-space :size="10" direction="vertical" class="tdesign-tree-operations">
      <h3 class="title">\u64CD\u4F5C\u6811\u8282\u70B9</h3>
      <t-space :size="10" breakLine>
        <t-button theme="primary" @click="getItem">\u83B7\u53D6 value \u4E3A 'node1' \u7684\u5355\u4E2A\u8282\u70B9</t-button>
        <t-button theme="primary" @click="getAllItems">\u83B7\u53D6\u6240\u6709\u8282\u70B9</t-button>
        <t-button theme="primary" @click="getActiveChildren">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9</t-button>
        <t-button theme="primary" @click="getAllActived">\u83B7\u53D6\u6240\u6709\u9AD8\u4EAE\u8282\u70B9</t-button>
        <t-button theme="primary" @click="getActiveChecked">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u4E0B\u7684\u9009\u4E2D\u8282\u70B9</t-button>
        <t-button theme="primary" @click="append()">\u63D2\u5165\u4E00\u4E2A\u6839\u8282\u70B9</t-button>
        <t-button theme="primary" @click="getActiveParent">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u7236\u8282\u70B9</t-button>
        <t-button theme="primary" @click="getActiveParents">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u7684\u6240\u6709\u7236\u8282\u70B9</t-button>
        <t-button theme="primary" @click="getActiveIndex">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u5728\u5B50\u8282\u70B9\u4E2D\u7684\u4F4D\u7F6E</t-button>
        <t-button theme="primary" @click="setActiveChecked">\u9009\u4E2D\u9AD8\u4EAE\u8282\u70B9</t-button>
        <t-button theme="primary" @click="setActiveExpanded">\u5C55\u5F00\u9AD8\u4EAE\u8282\u70B9</t-button>
        <t-button theme="primary" @click="getActivePlainData">\u83B7\u53D6\u9AD8\u4EAE\u8282\u70B9\u4E0E\u5176\u5B50\u8282\u70B9\u7684\u6570\u636E</t-button>
      </t-space>
      <div class="tips">
        <p>* \u76F8\u5173\u4FE1\u606F\u901A\u8FC7\u63A7\u5236\u53F0\u8F93\u51FA</p>
      </div>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      index: 2,
      activeId: '',
      activeIds: [],
      expandIds: [],
      checkedIds: [],
      useActived: false,
      expandParent: true,
      filterText: '',
      filterByText: null,
      items: [
        {
          value: 'node1',
        },
        {
          value: 'node2',
        },
      ],
    };
  },
  computed: {
    btnSetActivedVariant() {
      let variant = 'outline';
      if (this.useActived) {
        variant = 'base';
      }
      return variant;
    },
  },
  methods: {
    renderOperations(createElement, node) {
      return \`value: \${node.value}\`;
    },
    getLabelContent(node) {
      const pathNodes = node.getPath();
      let label = pathNodes.map((itemNode) => itemNode.getIndex() + 1).join('.');
      label = \`\${label} | value: \${node.value}\`;
      return label;
    },
    getLabel(createElement, node) {
      const label = this.getLabelContent(node);
      const { data } = node;
      data.label = label;
      return label;
    },
    setLabel(value) {
      const { tree } = this.$refs;
      const node = tree.getItem(value);
      const label = this.getLabelContent(node);
      const { data } = node;
      data.label = label;
    },
    getItem() {
      const { tree } = this.$refs;
      const node = tree.getItem('node1');
      console.info('getItem:', node.label);
    },
    getAllItems() {
      const { tree } = this.$refs;
      const nodes = tree.getItems();
      console.info(
        'getAllItems:',
        nodes.map((node) => node.value),
      );
    },
    getActiveChildren() {
      const node = this.getActivedNode();
      if (!node) return;
      let nodes = [];
      if (node) {
        nodes = node.getChildren(true) || [];
      }
      console.info(
        'getActiveChildren:',
        nodes.map((node) => node.value),
      );
    },
    getAllActived() {
      console.info('getActived value:', this.activeIds.slice(0));
    },
    getActiveChecked() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      const nodes = tree.getItems(node.value);
      console.info(
        'getChecked:',
        nodes.filter((node) => node.checked).map((node) => node.value),
      );
    },
    getActivedNode() {
      const { tree } = this.$refs;
      const { activeId } = this;
      const activeNode = tree.getItem(activeId);
      return activeNode;
    },
    getInsertItem() {
      let item = null;
      if (this.useActived) {
        item = this.getActivedNode();
      } else {
        this.index += 1;
        const value = \`t\${this.index}\`;
        item = {
          value,
        };
      }
      return item;
    },
    getPlainData(item) {
      const root = item;
      if (!root) return null;
      const children = item.getChildren(true) || [];
      const list = [root].concat(children);
      const nodeMap = {};
      const nodeList = list.map((item) => {
        const node = {
          walkData() {
            const data = {
              ...this.data,
            };
            const itemChildren = this.getChildren();
            if (Array.isArray(itemChildren)) {
              data.children = [];
              itemChildren.forEach((childItem) => {
                const childNode = nodeMap[childItem.value];
                const childData = childNode.walkData();
                data.children.push(childData);
              });
            }
            return data;
          },
          ...item,
        };
        nodeMap[item.value] = node;
        return node;
      });
      const [rootNode] = nodeList;
      const data = rootNode.walkData();
      return data;
    },
    append(node) {
      const { tree } = this.$refs;
      const item = this.getInsertItem();
      if (item) {
        if (!node) {
          tree.appendTo('', item);
        } else {
          tree.appendTo(node.value, item);
        }
        this.setLabel(item.value);
      }
      if (this.useActived) {
        this.activeId = '';
      }
    },
    insertBefore(node) {
      const { tree } = this.$refs;
      const item = this.getInsertItem();
      if (item) {
        tree.insertBefore(node.value, item);
        this.setLabel(item.value);
      }
    },
    insertAfter(node) {
      const { tree } = this.$refs;
      const item = this.getInsertItem();
      if (item) {
        tree.insertAfter(node.value, item);
        this.setLabel(item.value);
      }
    },
    getActiveParent() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      const parent = tree.getParent(node.value);
      console.info('getParent', parent?.value);
    },
    getActiveParents() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      const parents = tree.getParents(node.value);
      console.info(
        'getParents',
        parents.map((node) => node.value),
      );
    },
    setActiveChecked() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      tree.setItem(node?.value, {
        checked: true,
      });
    },
    setActiveExpanded() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      tree.setItem(node?.value, {
        expanded: true,
      });
    },
    getActiveIndex() {
      const { tree } = this.$refs;
      const node = this.getActivedNode();
      if (!node) return;
      const index = tree.getIndex(node.value);
      console.info('getIndex', index);
    },
    getActivePlainData() {
      const node = this.getActivedNode();
      if (!node) return;
      const data = this.getPlainData(node);
      return data;
    },
    remove(node) {
      const { tree } = this.$refs;
      tree.remove(node.value);
    },
    toggleExpandParent() {
      this.expandParent = !this.expandParent;
    },
    onChange(vals, state) {
      console.info('on change:', vals, state);
      this.checkedIds = vals;
    },
    onExpand(vals, state) {
      console.info('on expand:', vals, state);
      this.expandIds = vals;
    },
    onActive(vals, state) {
      console.info('on active:', vals, state);
      this.activeIds = vals;
      this.activeId = vals[0] || '';
    },
    onInputChange(state) {
      console.info('on input:', state);
      this.filterByText = (node) => {
        const label = node?.data?.label || '';
        const rs = label.indexOf(this.filterText) >= 0;
        return rs;
      };
    },
  },
};
<\/script>
<style>
.tdesign-tree-operations .t-is-active .t-tree__label,
.tdesign-tree-operations .t-is-active .t-checkbox__label {
  background-color: rgba(255, 0, 0, 0.3);
}
.tdesign-tree-operations .tips p {
  line-height: 24px;
  text-indent: 1em;
}
</style>
`,vt=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <h3 class="title">\u5C5E\u6027\u8BBE\u7F6E jsx \u5F62\u5F0F</h3>
      <t-tree :data="items" hover expand-all :load="load" :icon="icon" />
    </t-space>
    <t-space :size="10" direction="vertical">
      <h3>slot \u5F62\u5F0F</h3>
      <t-tree :data="items" hover lazy :load="load">
        <template #icon="{ node }">
          <icon v-if="node.getChildren() && !node.expanded" name="caret-right" />
          <icon v-else-if="node.getChildren() && node.expanded && node.loading" name="loading" />
          <icon v-else-if="node.getChildren() && node.expanded" name="caret-down" />
          <icon v-else name="attach" />
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          label: '1',
          children: true,
        },
        {
          label: '2',
          children: true,
        },
      ],
    };
  },
  methods: {
    icon(createElement, node) {
      let name = 'file';
      if (node.getChildren()) {
        if (node.expanded) {
          name = 'folder-open';
          if (node.loading) {
            name = 'loading';
          }
        } else {
          name = 'folder';
        }
      }
      return <Icon name={name} />;
    },
    load(node) {
      const maxLevel = 2;
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < maxLevel) {
            nodes = [
              {
                label: \`\${node.label}.1\`,
                children: node.level < maxLevel - 1,
              },
              {
                label: \`\${node.label}.2\`,
                children: node.level < maxLevel - 1,
              },
            ];
          }
          resolve(nodes);
        }, 500);
      });
    },
  },
};
<\/script>
`,mt=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <h3 class="title">\u9ED8\u8BA4\u4E3A\u7A7A\u72B6\u6001</h3>
      <t-tree :data="[]" />
    </t-space>
    <t-space :size="10" direction="vertical">
      <h3 class="title">\u8BBE\u7F6E empty \u5C5E\u6027\u4E3A\u6307\u5B9A\u5B57\u7B26\u4E32</h3>
      <t-tree :data="[]" empty="\u{1F60A} \u7A7A\u6570\u636E\uFF08string\uFF09" /><br />
    </t-space>
    <t-space :size="10" direction="vertical">
      <h3 class="title">jsx \u5F62\u5F0F</h3>
      <t-tree :data="[]" :empty="empty" />
    </t-space>
    <t-space :size="10" direction="vertical">
      <h3 class="title">slot \u5F62\u5F0F</h3>
      <t-tree :data="[]">
        <div slot="empty">\u{1F60A} \u7A7A\u6570\u636E\uFF08slot\uFF09</div>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      empty(h) {
        return <div>\u{1F60A} \u7A7A\u6570\u636E\uFF08 empty props \uFF09</div>;
      },
    };
  },
};
<\/script>
`,pt=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <h3 class="title">\u5C5E\u6027\u8BBE\u7F6E jsx \u5F62\u5F0F</h3>
      <t-tree :data="items" expand-all :label="label"></t-tree>
    </t-space>
    <t-space :size="10" direction="vertical">
      <h3>slot \u5F62\u5F0F</h3>
      <t-tree :data="items" expand-all checkable>
        <template #label="{ node }">
          <font color="blue">label: {{ node.label }}, value: {{ node.value }}</font>
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '1',
          children: [
            {
              label: '1.1',
            },
            {
              label: '1.2',
            },
          ],
        },
        {
          label: '2',
          children: [
            {
              label: '2.1',
            },
            {
              label: '2.2',
            },
          ],
        },
      ],
      label(createElement, node) {
        return createElement('strong', {
          domProps: {
            innerHTML: \`value: \${node.value}, label: \${node.label}\`,
          },
        });
      },
    };
  },
};
<\/script>
`,ht=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-form label-align="left">
        <t-form-item label="\u663E\u793A\u8FDE\u7EBF">
          <t-switch v-model="showLine" />
        </t-form-item>
        <t-form-item label="\u663E\u793A\u56FE\u6807">
          <t-switch v-model="showIcon" />
        </t-form-item>
      </t-form>
    </t-space>
    <t-space :size="10" direction="vertical">
      <h3 class="title">\u9ED8\u8BA4\u6837\u5F0F</h3>
      <t-tree :data="items" :line="showLine" :icon="showIcon" expand-all />
    </t-space>
    <t-space :size="10" direction="vertical" class="tdesign-tree-line">
      <h3 class="title">\u4F7F\u7528\u5C5E\u6027\u7ED3\u5408 jsx \u6765\u81EA\u5B9A\u4E49\u5448\u73B0</h3>
      <t-tree :data="items" :icon="showIcon" expand-all :line="renderLine" />
    </t-space>
    <t-space :size="10" direction="vertical" class="tdesign-tree-line">
      <h3 class="title">slot \u5F62\u5F0F</h3>
      <t-tree :data="items" :icon="showIcon" line expand-all>
        <template #line="{ node }">
          <div v-if="showLine" :class="lineClass(node)">
            <div class="custom-line-box">
              <span
                v-for="(item, index) in getLineNodes(node)"
                :key="index"
                :class="{ 'custom-line-cross': item.cross }"
              ></span>
            </div>
            <i class="custom-line-icon" v-if="node.isLeaf()">
              <icon name="heart-filled" />
            </i>
          </div>
        </template>
      </t-tree>
    </t-space>
  </t-space>
</template>

<script lang="jsx">
import { Icon } from 'tdesign-icons-vue';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      showLine: true,
      showIcon: true,
      items: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
            },
            {
              value: '1.2',
              label: '1.2',
            },
          ],
        },
        {
          value: '2',
          label: '2',
          children: [
            {
              value: '2.1',
              label: '2.1',
              children: [
                {
                  value: '2.1.1',
                  label: '2.1.1',
                  children: [
                    {
                      value: '2.1.1.1',
                      label: '2.1.1.1',
                      children: [
                        {
                          value: '2.1.1.1.1',
                          label: '2.1.1.1.1',
                        },
                        {
                          value: '2.1.1.1.2',
                          label: '2.1.1.1.2',
                        },
                      ],
                    },
                  ],
                },
                {
                  value: '2.1.2',
                  label: '2.1.2',
                },
              ],
            },
            {
              value: '2.2',
              label: '2.2',
            },
          ],
        },
        {
          value: '3',
          label: '3',
          children: [
            {
              value: '3.1',
              label: '3.1',
            },
            {
              value: '3.2',
              label: '3.2',
            },
          ],
        },
        {
          value: '4',
          label: '4',
        },
      ],
    };
  },
  methods: {
    toggleLine() {
      this.showLine = !this.showLine;
    },
    toggleIcon() {
      this.showIcon = !this.showIcon;
    },
    getLineNodes(node) {
      const nodes = node.getParents().reverse();
      const lineNodes = [];
      nodes.forEach((item, index) => {
        const line = {};
        const nextItem = nodes[index + 1];
        if (index < nodes.length - 1 && nextItem) {
          line.cross = !nextItem.isLast();
        }
        lineNodes.push(line);
      });
      return lineNodes;
    },
    lineClass(node) {
      const list = ['custom-line'];
      if (node.isFirst()) {
        list.push('custom-line-first');
      }
      if (node.isLeaf()) {
        list.push('custom-line-leaf');
      }
      if (node.isLast()) {
        list.push('custom-line-last');
      }
      return list;
    },
    renderLine(createElement, node) {
      if (!this.showLine) return null;

      const lineChildren = [];

      const lines = this.getLineNodes(node).map((item) => createElement('span', {
        class: {
          'custom-line-cross': item.cross,
        },
      }));

      lineChildren.push(
        createElement(
          'div',
          {
            class: 'custom-line-box',
          },
          lines,
        ),
      );

      if (node.isLeaf()) {
        const tIcon = <Icon name="heart-filled" />;
        const iconNode = createElement(
          'i',
          {
            class: 'custom-line-icon',
          },
          [tIcon],
        );
        lineChildren.push(iconNode);
      }

      return createElement(
        'div',
        {
          class: this.lineClass(node),
        },
        lineChildren,
      );
    },
  },
};
<\/script>
<style scoped>
.tdesign-tree-line .custom-line {
  display: flex;
  position: absolute;
  top: 2px;
  left: 9px;
}
.tdesign-tree-line .custom-line-box {
  display: flex;
  flex: 0 0 auto;
}
.tdesign-tree-line .custom-line span {
  position: relative;
  flex: 0 0 auto;
  width: 24px;
  height: 40px;
}
.tdesign-tree-line .custom-line span:last-child:before {
  content: '';
  position: absolute;
  display: block;
  bottom: 22px;
  left: 6px;
  width: 12px;
  height: 26px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #0052d9;
}
.tdesign-tree-line .custom-line-leaf span:last-child:before {
  width: 16px;
}
.tdesign-tree-line .custom-line-cross:before {
  content: '';
  display: block;
  position: absolute;
  left: 6px;
  top: -15px;
  height: 44px;
  width: 1px;
  border-left: 1px solid #ddd;
}
.tdesign-tree-line .custom-line-icon {
  position: absolute;
  top: 10px;
  right: -14px;
  display: flex;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border: 1px solid #0052d9;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}
.tdesign-tree-line .custom-line span:last-child:after {
  content: '';
  position: absolute;
  display: block;
  box-sizing: border-box;
  top: 14px;
  left: 3px;
  z-index: 1;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  border: 1px solid #0052d9;
  background-color: #fff;
  transform: rotate(45deg);
  transform-origin: 50% 50%;
}
</style>
`,bt=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-form label-align="left" :label-width="80">
        <t-form-item label="\u5207\u6362\u6570\u636E">
          <t-switch @change="toggleData" />
        </t-form-item>
        <t-form-item label="\u5C55\u5F00\u52A8\u753B">
          <t-switch v-model="transition" />
        </t-form-item>
      </t-form>
      <t-tree :data="items" expand-all :transition="transition" />
    </t-space>
  </t-space>
</template>

<script>
const data1 = [
  {
    label: '1',
    children: [
      {
        label: '1.1',
        children: [
          {
            label: '1.1.1',
          },
          {
            label: '1.1.2',
          },
        ],
      },
      {
        label: '1.2',
        children: [
          {
            label: '1.2.1',
          },
          {
            label: '1.2.2',
          },
        ],
      },
    ],
  },
  {
    label: '2',
    children: [
      {
        label: '2.1',
      },
      {
        label: '2.2',
      },
    ],
  },
];

const data2 = [
  {
    label: '1',
  },
  {
    label: '2',
  },
  {
    label: '3',
    children: [
      {
        label: '3.1',
      },
      {
        label: '3.2',
      },
    ],
  },
];

export default {
  data() {
    return {
      transition: true,
      items: data1,
    };
  },
  methods: {
    toggleData() {
      this.items = this.items === data1 ? data2 : data1;
    },
  },
};
<\/script>
`,ft=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-tree :data="items" hover :expand-level="1" />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: '1',
          children: [
            {
              label: '1.1',
              children: [
                {
                  label: '1.1.1',
                },
                {
                  label: '1.1.2',
                },
              ],
            },
            {
              label: '1.2',
              children: [
                {
                  label: '1.2.1',
                },
                {
                  label: '1.2.2',
                },
              ],
            },
          ],
        },
        {
          label: '2',
          children: [
            {
              label: '2.1',
            },
            {
              label: '2.2',
            },
          ],
        },
      ],
    };
  },
};
<\/script>
`,xt=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-form label-align="left" :label-width="120">
        <t-form-item label="\u4E92\u65A5\u5C55\u5F00">
          <t-switch v-model="mutex" />
        </t-form-item>
        <t-form-item label="\u6574\u4E2A\u8282\u70B9\u53EF\u70B9\u51FB">
          <t-switch v-model="expandOnClickNode" />
        </t-form-item>
      </t-form>
      <t-tree
        :data="items"
        hover
        :expand-mutex="mutex"
        :expand-on-click-node="expandOnClickNode"
        @click="onClick"
        @expand="onExpand"
        :onExpand="propOnExpand"
      />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      mutex: true,
      expandOnClickNode: true,
      items: [
        {
          label: '1',
          children: [
            {
              label: '1.1',
              children: [
                {
                  label: '1.1.1',
                },
                {
                  label: '1.1.2',
                },
              ],
            },
            {
              label: '1.2',
              children: [
                {
                  label: '1.2.1',
                },
                {
                  label: '1.2.2',
                },
              ],
            },
          ],
        },
        {
          label: '2',
          children: [
            {
              label: '2.1',
              children: [
                {
                  label: '2.1.1',
                },
                {
                  label: '2.1.2',
                },
              ],
            },
            {
              label: '2.2',
              children: [
                {
                  label: '2.2.1',
                },
                {
                  label: '2.2.2',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onClick(context) {
      console.info('onClick', context);
    },
    onExpand(value, context) {
      console.info('onExpand', value, context);
    },
    propOnExpand(value, context) {
      console.info('propOnExpand', value, context);
    },
    toggleMutex() {
      this.mutex = !this.mutex;
    },
    toggleExpandOnClickNode() {
      this.expandOnClickNode = !this.expandOnClickNode;
    },
  },
};
<\/script>
`,gt=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <h3 class="title">\u7981\u7528\u6574\u4E2A tree</h3>
      <t-form>
        <t-form-item label="\u662F\u5426\u7981\u7528\u6574\u4E2A tree" labelWidth="150">
          <t-switch v-model="disabled" />
        </t-form-item>
        <t-form-item label="\u662F\u5426\u53EA\u7981\u7528 checkbox" labelWidth="200">
          <t-switch v-model="disableCheck" />
        </t-form-item>
      </t-form>
      <t-tree :data="items" hover checkable expand-all :disabled="disabled" :disableCheck="disableCheck" />
    </t-space>
    <t-space :size="10" direction="vertical">
      <h3 class="title">\u7981\u7528\u6307\u5B9A\u8282\u70B9</h3>
      <t-form>
        <t-form-item label="\u7981\u7528\u6307\u5B9A\u8282\u70B9 checkbox" labelWidth="200">
          <t-switch v-model="disableTarget" />
        </t-form-item>
      </t-form>
      <t-tree :data="items" hover checkable expand-all :disableCheck="fnDisableCheck" />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      disabled: true,
      disableCheck: false,
      disableTarget: true,
      items: [
        {
          label: '1',
          children: [
            {
              label: '1.1',
              children: [
                {
                  label: '1.1.1',
                },
                {
                  label: '1.1.2',
                },
              ],
            },
            {
              label: '1.2',
              children: [
                {
                  label: '1.2.1',
                },
                {
                  label: '1.2.2',
                },
              ],
            },
          ],
        },
        {
          label: '2',
          children: [
            {
              label: '2.1',
            },
            {
              label: '2.2',
            },
          ],
        },
      ],
    };
  },
  methods: {
    fnDisableCheck(node) {
      const list = ['1.1', '1.2', '2.1'];
      if (list.indexOf(node.label) >= 0) {
        return this.disableTarget;
      }
      return false;
    },
  },
};
<\/script>
`,_t=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-form label-align="left" :label-width="60">
        <t-form-item label="\u53EF\u9009">
          <t-switch v-model="checkable" />
        </t-form-item>
      </t-form>
      <t-tree :data="items" hover expand-all :checkable="checkable" v-model="value" :load="load" :lazy="false" />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checkable: true,
      value: ['1.1.1'],
      items: [
        {
          label: '1',
          value: '1',
          children: true,
        },
        {
          label: '2',
          value: '2',
          children: true,
        },
      ],
    };
  },
  methods: {
    load(node) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < 2) {
            nodes = [
              {
                label: \`\${node.label}.1\`,
                value: \`\${node.value}.1\`,
                children: true,
              },
              {
                label: \`\${node.label}.2\`,
                value: \`\${node.value}.2\`,
                children: true,
              },
            ];
          }
          resolve(nodes);
        }, 1000);
      });
    },
  },
};
<\/script>
`,kt=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <h3 class="title">\u6570\u636E\u5EF6\u8FDF\u52A0\u8F7D</h3>
      <div class="tips">
        <p>\u9ED8\u8BA4\u4E3A\u70B9\u51FB\u52A0\u8F7D\u6570\u636E\u3002</p>
        <p>
          valueMode \u9ED8\u8BA4\u4E3A
          'onlyLeaf'\u3002\u9009\u4E2D\u7236\u8282\u70B9\u65F6\uFF0C\u5B50\u8282\u70B9\u7531\u4E8E\u672A\u52A0\u8F7D\uFF0C\u65E0\u6CD5\u66F4\u65B0\u548C\u83B7\u53D6\u9009\u4E2D\u72B6\u6001\uFF0C\u5BFC\u81F4\u65E0\u6CD5\u66F4\u65B0\u7236\u8282\u70B9\u7684\u72B6\u6001\u3002
        </p>
        <p>\u6240\u4EE5\u4F7F\u7528\u5EF6\u8FDF\u52A0\u8F7D\u65F6\uFF0C\u63A8\u8350 valueMode \u8BBE\u7F6E\u4E3A 'all' \u6216\u8005 'parentFirst'\u3002</p>
      </div>
      <t-form labelWidth="150">
        <t-form-item label="\u53EF\u9009">
          <t-switch v-model="checkable" />
        </t-form-item>
        <t-form-item label="\u4E25\u683C\u6A21\u5F0F">
          <t-switch v-model="checkStrictly" />
        </t-form-item>
      </t-form>
      <t-tree
        ref="tree"
        :data="items"
        hover
        expand-all
        :checkable="checkable"
        :checkStrictly="checkStrictly"
        :load="load"
        valueMode="all"
        @load="onLoad"
      />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      checkable: true,
      checkStrictly: false,
      value: ['1.1', '1.1.1'],
      items: [
        {
          label: '1',
          value: '1',
          children: true,
        },
        {
          label: '2',
          value: '2',
          children: true,
        },
      ],
    };
  },
  methods: {
    onLoad(state) {
      console.log('on load:', state);
    },
    load(node) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let nodes = [];
          if (node.level < 2) {
            nodes = [
              {
                label: \`\${node.label}.1\`,
                value: \`\${node.value}.1\`,
                children: true,
              },
              {
                label: \`\${node.label}.2\`,
                value: \`\${node.value}.2\`,
                children: true,
              },
            ];
          }
          resolve(nodes);
        }, 1000);
      });
    },
  },
};
<\/script>

<style scoped>
.tdesign-tree-demo .tips p {
  line-height: 24px;
  text-indent: 1em;
}
</style>
`,Ct=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-form label-align="left" :label-width="80">
        <t-form-item>
          <template #label>\u9009\u4E2D\u8282\u70B9</template>
          <t-input-adornment prepend="checked:">
            <t-input :value="allChecked" />
          </t-input-adornment>
        </t-form-item>
        <t-form-item>
          <template #label>\u5C55\u5F00\u8282\u70B9</template>
          <t-input-adornment prepend="expanded:">
            <t-input :value="allExpanded" />
          </t-input-adornment>
        </t-form-item>
        <t-form-item>
          <template #label>\u9AD8\u4EAE\u8282\u70B9</template>
          <t-input-adornment prepend="actived:">
            <t-input :value="allActived" />
          </t-input-adornment>
        </t-form-item>
      </t-form>
      <t-tree
        :data="items"
        checkable
        activable
        :expand-on-click-node="false"
        :active-multiple="false"
        :expanded="expanded"
        :actived="actived"
        :value="checked"
        :value-mode="valueMode"
        @expand="onExpand"
        @change="onChange"
        @active="onActive"
        @click="onClick"
      />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      valueMode: 'onlyLeaf',
      checked: ['1.1.1.1', '1.1.1.2'],
      expanded: ['1', '1.1', '1.1.1', '2'],
      actived: ['2'],
      items: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
              children: [
                {
                  value: '1.1.1',
                  label: '1.1.1',
                  children: [
                    {
                      value: '1.1.1.1',
                      label: '1.1.1.1',
                    },
                    {
                      value: '1.1.1.2',
                      label: '1.1.1.2',
                    },
                  ],
                },
                {
                  value: '1.1.2',
                  label: '1.1.2',
                  children: [
                    {
                      value: '1.1.2.1',
                      label: '1.1.2.1',
                    },
                    {
                      value: '1.1.2.2',
                      label: '1.1.2.2',
                    },
                  ],
                },
              ],
            },
            {
              value: '1.2',
              label: '1.2',
              children: [
                {
                  value: '1.2.1',
                  label: '1.2.1',
                  children: [
                    {
                      value: '1.2.1.1',
                      label: '1.2.1.1',
                    },
                    {
                      value: '1.2.1.2',
                      label: '1.2.1.2',
                    },
                  ],
                },
                {
                  value: '1.2.2',
                  label: '1.2.2',
                  children: [
                    {
                      value: '1.2.2.1',
                      label: '1.2.2.1',
                    },
                    {
                      value: '1.2.2.2',
                      label: '1.2.2.2',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          value: '2',
          label: '2 \u8FD9\u4E2A\u8282\u70B9\u4E0D\u5141\u8BB8\u5C55\u5F00, \u4E0D\u5141\u8BB8\u6FC0\u6D3B',
          checkable: false,
          children: [
            {
              value: '2.1',
              label: '2.1 \u8FD9\u4E2A\u8282\u70B9\u4E0D\u5141\u8BB8\u9009\u4E2D',
              checkable: false,
            },
            {
              value: '2.2',
              label: '2.2',
              checkable: false,
            },
          ],
        },
      ],
    };
  },
  computed: {
    allChecked() {
      let arr = [];
      if (Array.isArray(this.checked)) {
        arr = this.checked;
      }
      return arr.join(', ');
    },
    allExpanded() {
      let arr = [];
      if (Array.isArray(this.expanded)) {
        arr = this.expanded;
      }
      return arr.join(', ');
    },
    allActived() {
      let arr = [];
      if (Array.isArray(this.actived)) {
        arr = this.actived;
      }
      return arr.join(', ');
    },
  },
  methods: {
    onClick(context) {
      console.info('onClick:', context);
    },
    onChange(vals, context) {
      console.info('onChange:', vals, context);
      const checked = vals.filter((val) => val !== '2.1');
      console.info('\u8282\u70B9 2.1 \u4E0D\u5141\u8BB8\u9009\u4E2D');
      this.checked = checked;
    },
    onExpand(vals, context) {
      console.info('onExpand:', vals, context);
      const expanded = vals.filter((val) => val !== '2');
      console.info('\u8282\u70B9 2 \u4E0D\u5141\u8BB8\u5C55\u5F00');
      this.expanded = expanded;
    },
    onActive(vals, context) {
      console.info('onActive:', vals, context);
      const actived = vals.filter((val) => val !== '2');
      console.info('\u8282\u70B9 2 \u4E0D\u5141\u8BB8\u6FC0\u6D3B');
      this.actived = actived;
    },
  },
};
<\/script>
`,yt=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo">
    <t-space :size="10" direction="vertical">
      <t-form>
        <t-form-item>
          <t-input-adornment prepend="checked:">
            <t-input :value="allChecked" @change="onAllCheckedInput" />
          </t-input-adornment>
        </t-form-item>
        <t-form-item>
          <t-input-adornment prepend="expanded:">
            <t-input :value="allExpanded" @change="onAllExpandedInput" />
          </t-input-adornment>
        </t-form-item>
        <t-form-item>
          <t-input-adornment prepend="actived:">
            <t-input :value="allActived" @change="onAllActivedInput" />
          </t-input-adornment>
        </t-form-item>
      </t-form>
      <t-tree
        :data="items"
        checkable
        activable
        :expand-on-click-node="false"
        :active-multiple="false"
        :expanded.sync="expanded"
        :actived.sync="actived"
        :value.sync="checked"
        :value-mode="valueMode"
      />
    </t-space>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      valueMode: 'onlyLeaf',
      checked: ['1.1.1.1', '1.1.1.2'],
      expanded: ['1', '1.1', '1.1.1', '2'],
      actived: ['2'],
      items: [
        {
          value: '1',
          label: '1',
          children: [
            {
              value: '1.1',
              label: '1.1',
              children: [
                {
                  value: '1.1.1',
                  label: '1.1.1',
                  children: [
                    {
                      value: '1.1.1.1',
                      label: '1.1.1.1',
                    },
                    {
                      value: '1.1.1.2',
                      label: '1.1.1.2',
                    },
                  ],
                },
                {
                  value: '1.1.2',
                  label: '1.1.2',
                  children: [
                    {
                      value: '1.1.2.1',
                      label: '1.1.2.1',
                    },
                    {
                      value: '1.1.2.2',
                      label: '1.1.2.2',
                    },
                  ],
                },
              ],
            },
            {
              value: '1.2',
              label: '1.2',
              children: [
                {
                  value: '1.2.1',
                  label: '1.2.1',
                  children: [
                    {
                      value: '1.2.1.1',
                      label: '1.2.1.1',
                    },
                    {
                      value: '1.2.1.2',
                      label: '1.2.1.2',
                    },
                  ],
                },
                {
                  value: '1.2.2',
                  label: '1.2.2',
                  children: [
                    {
                      value: '1.2.2.1',
                      label: '1.2.2.1',
                    },
                    {
                      value: '1.2.2.2',
                      label: '1.2.2.2',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          value: '2',
          label: '2',
          checkable: false,
          children: [
            {
              value: '2.1',
              label: '2.1',
              checkable: false,
            },
            {
              value: '2.2',
              label: '2.2',
              checkable: false,
            },
          ],
        },
      ],
    };
  },
  computed: {
    allChecked() {
      let arr = [];
      if (Array.isArray(this.checked)) {
        arr = this.checked;
      }
      return arr.map((val) => \`{\${val}}\`).join(', ');
    },
    allExpanded() {
      let arr = [];
      if (Array.isArray(this.expanded)) {
        arr = this.expanded;
      }
      return arr.map((val) => \`{\${val}}\`).join(', ');
    },
    allActived() {
      let arr = [];
      if (Array.isArray(this.actived)) {
        arr = this.actived;
      }
      return arr.map((val) => \`{\${val}}\`).join(', ');
    },
  },
  methods: {
    getValueFromString(val) {
      const arr = val.split(',');
      const vals = [];
      arr
        .map((str) => str.trim())
        .forEach((tag) => {
          const match = /^\\{([^{}]+)\\}$/.exec(tag);
          if (match && match[1]) {
            vals.push(match[1]);
          }
        });
      return vals;
    },
    onAllCheckedInput(val) {
      console.log('checked input on change', val);
      const vals = this.getValueFromString(val);
      this.checked = vals;
    },
    onAllExpandedInput(val) {
      console.log('expanded input on change', val);
      const vals = this.getValueFromString(val);
      this.expanded = vals;
    },
    onAllActivedInput(val) {
      console.log('actived input on change', val);
      const vals = this.getValueFromString(val);
      this.actived = vals;
    },
  },
};
<\/script>
`,$t=`<template>
  <t-space :size="32" direction="vertical" class="tdesign-tree-demo" style="width: 100%">
    <t-space :size="10" direction="vertical" class="tdesign-tree-vscroll-lazy" style="width: 80%">
      <h3 class="title">\u865A\u62DF\u6EDA\u52A8 - lazy\u6A21\u5F0F</h3>
      <t-tree
        :data="lazyItems"
        hover
        activable
        expand-all
        :height="300"
        :expand-on-click-node="false"
        :label="label"
        :scroll="{
          rowHeight: 34,
          bufferSize: 10,
          threshold: 10,
          type: 'lazy',
        }"
        ref="tree"
      ></t-tree>
    </t-space>

    <t-space :size="10" direction="vertical" style="width: 100%">
      <h3 class="title">\u865A\u62DF\u6EDA\u52A8 - virtual \u6A21\u5F0F</h3>
      <t-form labelWidth="150" style="max-width: 500px">
        <t-form-item label="\u52A8\u753B">
          <t-switch v-model="transition" />
        </t-form-item>
        <t-form-item label="\u663E\u793A\u8FDE\u7EBF">
          <t-switch v-model="showLine" />
        </t-form-item>
        <t-form-item label="\u663E\u793A\u56FE\u6807">
          <t-switch v-model="showIcon" />
        </t-form-item>
        <t-form-item label="\u53EF\u9009">
          <t-switch v-model="isCheckable" />
        </t-form-item>
        <t-form-item label="\u53EF\u64CD\u4F5C">
          <t-switch v-model="isOperateAble" />
        </t-form-item>
      </t-form>
      <t-form label-align="left" :label-width="80" style="max-width: 500px">
        <t-form-item>
          <t-input-adornment prepend="\u63D2\u5165\u8282\u70B9\u6570\u91CF:">
            <t-input v-model="insertCount" />
          </t-input-adornment>
        </t-form-item>
        <t-form-item>
          <t-button @click="append()">\u63D2\u5165\u6839\u8282\u70B9</t-button>
        </t-form-item>
      </t-form>
    </t-space>
    <t-tree
      :data="items"
      hover
      activable
      :checkable="isCheckable"
      expand-all
      :height="300"
      :transition="transition"
      :expand-on-click-node="false"
      :line="showLine"
      :icon="showIcon"
      :label="label"
      :scroll="{
        rowHeight: 34,
        bufferSize: 10,
        threshold: 10,
        type: 'virtual',
      }"
      ref="tree"
    >
      <template #operations="{ node }">
        <div class="tdesign-demo-block-row" v-if="isOperateAble">
          <t-button size="small" variant="base" @click="append(node)">\u6DFB\u52A0\u5B50\u8282\u70B9</t-button>
          <t-button size="small" variant="base" theme="danger" @click="remove(node)">\u5220\u9664</t-button>
        </div>
      </template>
    </t-tree>
    <div style="height: 100px"></div>
  </t-space>
</template>

<script>
const allLevels = [5, 5, 5];

function createTreeData() {
  let cacheIndex = 0;

  function getValue() {
    cacheIndex += 1;
    return \`t\${cacheIndex}\`;
  }

  function createNodes(items, level) {
    const count = allLevels[level];
    if (count) {
      let index = 0;
      for (index = 0; index < count; index += 1) {
        const value = getValue();
        const item = { value };
        items.push(item);
        if (allLevels[level + 1]) {
          item.children = [];
          createNodes(item.children, level + 1);
        }
      }
    }
  }

  const items = [];
  createNodes(items, 0);

  return {
    getValue,
    items,
  };
}

const lazyTree = createTreeData();
const virtualTree = createTreeData();

export default {
  data() {
    return {
      index: 0,
      transition: true,
      insertCount: 1,
      useActived: false,
      enableVScroll: true,
      lazyVScroll: false,
      expandParent: true,
      showLine: true,
      showIcon: true,
      isCheckable: true,
      isOperateAble: true,
      items: virtualTree.items,
      lazyItems: lazyTree.items,
    };
  },
  methods: {
    label(createElement, node) {
      return \`\${node.value}\`;
    },
    getInsertItem() {
      const value = virtualTree.getValue();
      return {
        value,
      };
    },
    append(node) {
      const { tree } = this.$refs;
      if (!node) {
        for (let index = 0; index < this.insertCount; index += 1) {
          const item = this.getInsertItem();
          tree.appendTo('', item);
        }
      } else {
        for (let index = 0; index < this.insertCount; index += 1) {
          const item = this.getInsertItem();
          tree.appendTo(node.value, item);
        }
      }
    },
    remove(node) {
      node.remove();
    },
  },
};
<\/script>
`,On=[{name:"activable",type:"Boolean",defaultValue:!1,options:[]},{name:"activeMultiple",type:"Boolean",defaultValue:!1,options:[]},{name:"allowFoldNodeOnFilter",type:"Boolean",defaultValue:!1,options:[]},{name:"checkable",type:"Boolean",defaultValue:!1,options:[]},{name:"checkStrictly",type:"Boolean",defaultValue:!1,options:[]},{name:"disableCheck",type:"Boolean",defaultValue:!1,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"expandAll",type:"Boolean",defaultValue:!1,options:[]},{name:"expandMutex",type:"Boolean",defaultValue:!1,options:[]},{name:"expandOnClickNode",type:"Boolean",defaultValue:!1,options:[]},{name:"expandParent",type:"Boolean",defaultValue:!1,options:[]},{name:"hover",type:"Boolean",defaultValue:!1,options:[]},{name:"icon",type:"Boolean",defaultValue:!0,options:[]},{name:"label",type:"Boolean",defaultValue:!0,options:[]},{name:"lazy",type:"Boolean",defaultValue:!0,options:[]},{name:"line",type:"Boolean",defaultValue:!1,options:[]},{name:"transition",type:"Boolean",defaultValue:!0,options:[]},{name:"valueMode",type:"enum",defaultValue:"onlyLeaf",options:[{label:"onlyLeaf",value:"onlyLeaf"},{label:"parentFirst",value:"parentFirst"},{label:"all",value:"all"}]}],j={};j.setup=(e,t)=>{const n=m([{label:"\u7B2C\u4E00\u6BB5",children:[{label:"\u7B2C\u4E8C\u6BB5"},{label:"\u7B2C\u4E8C\u6BB5"}]},{label:"\u7B2C\u4E00\u6BB5",children:[{label:"\u7B2C\u4E8C\u6BB5"},{label:"\u7B2C\u4E8C\u6BB5"}]},{label:"\u7B2C\u4E00\u6BB5",children:[{label:"\u7B2C\u4E8C\u6BB5"},{label:"\u7B2C\u4E8C\u6BB5"}]}]),l=m(On),a=[{label:"tree",value:"tree"}],i={tree:`
        <t-tree :data="data" v-bind="configProps" />
      `},o=m(`<template>${i[a[0].value].trim()}</template>`);function r(d){o.value=`<template>${i[d].trim()}</template>`}return{data:n,configList:l,panelList:a,usageCode:o,onPanelChange:r}};var Sn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"tree",fn:function(l){var a=l.configProps;return[n("t-tree",e._b({attrs:{data:e.data}},"t-tree",a,!1))]}}])})},Fn=[];const M={};var Tn=s(j,Sn,Fn,!1,Mn,null,null,null);function Mn(e){for(let t in M)this[t]=M[t]}const At=function(){return Tn.exports}();export{pt as A,ht as B,bt as C,Bn as D,ft as E,xt as F,gt as G,_t as H,kt as I,Ct as J,yt as K,$t as L,At as U,Rn as a,Wn as b,Hn as c,Jn as d,Un as e,qn as f,Gn as g,Kn as h,Qn as i,Xn as j,Yn as k,Zn as l,et as m,nt as n,tt as o,lt as p,at as q,it as r,st as s,ot as t,rt as u,ct as v,dt as w,ut as x,vt as y,mt as z};
