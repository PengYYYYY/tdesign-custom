import{n as l,V as r,e as g,r as a}from"./index.7bc89517.js";import{C as $}from"./cart.faaa80ce.js";var k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible=!0}}},[e._v("\u57FA\u7840\u786E\u8BA4\u5BF9\u8BDD\u6846")]),n("t-dialog",{attrs:{header:"\u5BF9\u8BDD\u6846\u6807\u9898",body:"\u5BF9\u8BDD\u6846\u5185\u5BB9",visible:e.visible,confirmOnEnter:!0,onConfirm:e.onConfirmAnother,onCancel:e.onCancel,onEscKeydown:e.onKeydownEsc,onCloseBtnClick:e.onClickCloseBtn,onOverlayClick:e.onClickOverlay,onClose:e.close},on:{"update:visible":function(i){e.visible=i},confirm:e.onConfirm}},[n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible1=!0}}},[e._v("\u5F39\u7A97\u4E8C")])],1),n("t-dialog",{attrs:{header:"\u5BF9\u8BDD\u6846\u6807\u9898\u4E8C",body:"\u5BF9\u8BDD\u6846\u5185\u5BB9\u4E8C",visible:e.visible1},on:{"update:visible":function(i){e.visible1=i}}})],1)},B=[];const x={data(){return{visible:!1,visible1:!1}},methods:{onConfirm(e){console.log("@confirm\u4E0EonConfirm\u4EFB\u9009\u4E00\u79CD\u65B9\u5F0F\u5373\u53EF\uFF0C\u5176\u4ED6\u51E0\u4E2A\u4E8B\u4EF6\u7C7B\u4F3C",e),this.visible=!1},onConfirmAnother(e){console.log("\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE",e)},close(e){console.log("\u5173\u95ED\u5F39\u7A97\uFF0C\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u3001\u6309\u4E0BESC\u3001\u70B9\u51FB\u8499\u5C42\u7B49\u89E6\u53D1",e)},onCancel(e){console.log("\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE",e)},onKeydownEsc(e){console.log("\u6309\u4E0B\u4E86ESC",e)},onClickCloseBtn(e){console.log("\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE",e)},onClickOverlay(e){console.log("\u70B9\u51FB\u4E86\u8499\u5C42",e)}}},v={};var E=l(x,k,B,!1,V,null,null,null);function V(e){for(let t in v)this[t]=v[t]}const de=function(){return E.exports}();var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("t-space",{attrs:{"break-line":""}},[n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible1=!0}}},[e._v("\u63D0\u793A\u53CD\u9988")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible2=!0}}},[e._v("\u6210\u529F\u53CD\u9988")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible3=!0}}},[e._v("\u8B66\u793A\u53CD\u9988")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible4=!0}}},[e._v("\u9519\u8BEF\u53CD\u9988")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible5=!0}}},[e._v("\u81EA\u5B9A\u4E49\u56FE\u6807")])],1),n("t-dialog",{attrs:{theme:"info",header:"\u63D0\u793A",body:"\u5BF9\u8BDD\u6846\u5185\u5BB9",visible:e.visible1,onClose:e.close1},on:{"update:visible":function(i){e.visible1=i},confirm:e.onConfirm}}),n("t-dialog",{attrs:{theme:"success",header:"\u6210\u529F",body:"\u5BF9\u8BDD\u6846\u5185\u5BB9",visible:e.visible2,onClose:e.close2},on:{"update:visible":function(i){e.visible2=i},confirm:e.onConfirm}}),n("t-dialog",{attrs:{theme:"warning",header:"\u8B66\u793A",body:"\u5BF9\u8BDD\u6846\u5185\u5BB9",visible:e.visible3,onClose:e.close3,cancelBtn:null},on:{"update:visible":function(i){e.visible3=i},confirm:e.onConfirm}}),n("t-dialog",{attrs:{theme:"danger",header:"\u9519\u8BEF",body:"\u5BF9\u8BDD\u6846\u5185\u5BB9",visible:e.visible4,onClose:e.close4,cancelBtn:null},on:{"update:visible":function(i){e.visible4=i},confirm:e.onConfirm}}),n("t-dialog",{attrs:{body:"\u5BF9\u8BDD\u6846\u5185\u5BB9",closeBtn:!1,visible:e.visible5,onClose:e.close5},on:{"update:visible":function(i){e.visible5=i},confirm:e.onConfirm}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("icon",{attrs:{name:"check-circle-filled",color:"orange"}}),n("span",{staticStyle:{"vertical-align":"middle"}},[e._v("\u5BF9\u8BDD\u6846\u6807\u9898")])],1)])],1)},M=[];const w=r.extend({components:{Icon:g},data(){return{visible1:!1,visible2:!1,visible3:!1,visible4:!1,visible5:!1}},methods:{onConfirm(e){const{e:t}=e;this.sendingRequest(),this.visible1=!1,this.visible2=!1,this.visible3=!1,this.visible4=!1,this.visible5=!1,t.stopPropagation()},sendingRequest(){console.log("sending request")},close1(){this.visible1=!1},close2(){this.visible2=!1},close3(){this.visible3=!1},close4(){this.visible4=!1},close5(){this.visible5=!1}}}),d={};var D=l(w,A,M,!1,I,null,null,null);function I(e){for(let t in d)this[t]=d[t]}const be=function(){return D.exports}();var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("t-button",{on:{click:function(i){e.visible=!0}}},[e._v("\u5F02\u6B65\u52A0\u8F7D\u7C7B\u6309\u94AE")]),n("t-dialog",{attrs:{visible:e.visible,header:"\u4FDD\u5B58",body:"\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u540E",confirmBtn:{content:"\u4FDD\u5B58\u4E2D...",theme:"primary",loading:!0},onConfirm:e.onConfirm,onClose:e.close},on:{"update:visible":function(i){e.visible=i}}})],1)},O=[];const F={data(){return{visible:!1}},methods:{close(){this.visible=!1},onConfirm(){console.log("\u5904\u7406\u4E2D..."),this.visible=!1}}},b={};var R=l(F,S,O,!1,P,null,null,null);function P(e){for(let t in b)this[t]=b[t]}const ue=function(){return R.exports}(),T={data(){return{visible1:!1,visible2:!1,visible3:!1,visible4:!1,bodyVisible1:!1,bodyVisible2:!1,bodyVisible3:!1}},methods:{getConfirmBtn(){const e=this.$createElement;return e("t-button",{attrs:{theme:"primary",disabled:!0}},["\u6211\u77E5\u9053\u4E86"])},confirmBtnRender(e){return e("span",["\u524D\u5F80\u8D2D\u7269\u8F66"])},confirmBtnIconRender(e){return e($)},close1(){this.visible1=!1},close2(){this.visible2=!1},close3(){this.visible3=!1},close4(){this.visible4=!1},onConfirm(){this.visible1=!1,alert("\u8DF3\u8F6C\u652F\u4ED8~")},renderDialog2Body(e){return e("div",["\u8FD9\u91CC\u7684\u5185\u5BB9\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\uFF0C\u6E32\u67D3\u51FD\u6570\u4F18\u5148\u7EA7\u9AD8\u4E8E\u63D2\u69FD"])},bodyClose1(){this.bodyVisible1=!1},bodyClose2(){this.bodyVisible2=!1},bodyClose3(){this.bodyVisible3=!1}}};var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("\u5F39\u7A97\u5185\u5BB9\u81EA\u5B9A\u4E49")]),n("br"),n("div",[n("t-space",{attrs:{"break-line":""}},[n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.bodyVisible1=!0}}},[e._v("\u9690\u85CF\u6807\u9898")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.bodyVisible2=!0}}},[e._v("\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u5185\u5BB9")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.bodyVisible3=!0}}},[e._v("\u63D2\u69FD\u65B9\u5F0F\u5B9A\u4E49\u5185\u5BB9")])],1),n("t-dialog",{attrs:{header:!1,body:"\u8FD9\u662F\u5BF9\u8BDD\u6846\u5185\u5BB9\uFF0C\u5BF9\u8BDD\u6846\u6807\u9898\u5DF2\u88AB\u9690\u85CF",visible:e.bodyVisible1,onClose:e.bodyClose1,onConfirm:e.bodyClose1}}),n("t-dialog",{attrs:{visible:e.bodyVisible2,header:"\u5BF9\u8BDD\u6846\u6807\u9898",body:e.renderDialog2Body,onClose:e.bodyClose2,onConfirm:e.bodyClose2}}),n("t-dialog",{attrs:{header:"\u5BF9\u8BDD\u6846\u6807\u9898",visible:e.bodyVisible3,onClose:e.bodyClose3,onConfirm:e.bodyClose3}},[n("div",{attrs:{slot:"body"},slot:"body"},[n("div",[e._v("\u8FD9\u662F\u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u7684\u5BF9\u8BDD\u6846\u5185\u5BB9")])])])],1),n("br"),n("br"),n("br"),n("p",[e._v("\u64CD\u4F5C\u6309\u94AE\u81EA\u5B9A\u4E49")]),n("br"),n("p",[e._v(" \u5E95\u90E8\u6309\u94AE\u6709\u4E24\u4E2A\u63A7\u5236\u5C5E\u6027\uFF1AconfirmBtn \u548C cancelBtn\u3002\u5C5E\u6027\u7C7B\u578B\u6709\u591A\u79CD\uFF1Astring | ButtonProps | TNode\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 footer \u6765\u81EA\u5B9A\u4E49\u63A7\u5236 ")]),n("br"),n("t-space",{attrs:{"break-line":""}},[n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible1=!0}}},[e._v("\u6309\u94AE\u6587\u5B57")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible2=!0}}},[e._v("\u6309\u94AE\u5C5E\u6027")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible3=!0}}},[e._v("\u6E32\u67D3\u51FD\u6570\u6309\u94AE")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible4=!0}}},[e._v("\u9690\u85CF\u5E95\u90E8")])],1),n("t-dialog",{attrs:{visible:e.visible1,header:"\u63D0\u793A",body:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u76F4\u63A5\u4F20\u5165\u6587\u5B57",confirmBtn:"\u524D\u5F80\u652F\u4ED8",cancelBtn:"\u5173\u95ED",onConfirm:e.onConfirm,onClose:e.close1},on:{"update:visible":function(i){e.visible1=i}}}),n("t-dialog",{attrs:{visible:e.visible2,header:"\u63D0\u793A",body:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u4F20\u5165 ButtonProps",confirmBtn:{content:e.confirmBtnRender,icon:e.confirmBtnIconRender,variant:"base"},cancelBtn:{content:"\u79BB\u5F00",variant:"outline"},onClose:e.close2}}),n("t-dialog",{attrs:{visible:e.visible3,header:"\u5BF9\u8BDD\u6846\u6807\u9898",body:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u4F20\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",confirmBtn:e.getConfirmBtn,cancelBtn:null,onClose:e.close3}}),n("t-dialog",{attrs:{visible:e.visible4,header:"\u5BF9\u8BDD\u6846\u6807\u9898",body:"\u4E0D\u9700\u8981\u5E95\u90E8\u6309\u94AE\u7684\u5185\u5BB9",footer:!1,onClose:e.close4,onConfirm:e.close4}})],1)},K=[];const u={};var N=l(T,q,K,!1,j,null,null,null);function j(e){for(let t in u)this[t]=u[t]}const pe=function(){return N.exports}();var L=function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("t-space",{attrs:{"break-line":""}},[i("t-button",{attrs:{theme:"primary"},on:{click:function(o){t.visibleModal=!0}}},[t._v("\u6A21\u6001\u5BF9\u8BDD\u6846")]),i("t-button",{attrs:{theme:"primary"},on:{click:function(o){t.visibleModelessDrag=!0}}},[t._v("\u975E\u6A21\u6001\u5BF9\u8BDD\u6846")]),i("t-button",{attrs:{theme:"primary"},on:{click:function(o){t.visibleModeless=!0}}},[t._v("\u6A21\u6001\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD")]),i("t-button",{attrs:{theme:"primary"},on:{click:function(o){t.visibleNormal=!0}}},[t._v("\u666E\u901A\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD")])],1),i("t-dialog",{attrs:{header:"\u6A21\u6001\u5BF9\u8BDD\u6846",visible:t.visibleModal,mode:"modal",draggable:"",onConfirm:function(){return e.visibleModal=!1}},on:{"update:visible":function(o){t.visibleModal=o}}},[i("div",{attrs:{slot:"body"},slot:"body"},[i("div",[t._v("\u9ED8\u8BA4\u70B9\u51FB\u8499\u5C42\u6216\u6309ESC\u53EF\u5173\u95ED")]),i("div",[t._v("\u5BF9\u8BDD\u6846\u5185\u5BB9")])])]),i("t-dialog",{attrs:{header:"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846",visible:t.visibleModelessDrag,mode:"modeless",draggable:"",onConfirm:function(){return e.visibleModelessDrag=!1}},on:{"update:visible":function(o){t.visibleModelessDrag=o}}},[i("div",{attrs:{slot:"body"},slot:"body"},[i("div",[t._v("\u5BF9\u8BDD\u6846\u5185\u5BB9")])])]),i("t-dialog",{attrs:{header:"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD",visible:t.visibleModeless,mode:"modeless",onConfirm:function(){return e.visibleModeless=!1}},on:{"update:visible":function(o){t.visibleModeless=o}}},[i("div",{attrs:{slot:"body"},slot:"body"},[i("div",[t._v("\u5BF9\u8BDD\u6846\u5185\u5BB9")])])]),i("t-dialog",{attrs:{header:"\u975E\u6A21\u6001\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD",visible:t.visibleModeless,mode:"modeless",onConfirm:function(){return e.visibleModeless=!1}},on:{"update:visible":function(o){t.visibleModeless=o}}},[i("div",{attrs:{slot:"body"},slot:"body"},[i("div",[t._v("\u5BF9\u8BDD\u6846\u5185\u5BB9")])])]),i("t-dialog",{attrs:{header:"\u666E\u901A\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD",visible:t.visibleNormal,mode:"normal",onConfirm:function(){return e.visibleNormal=!1}},on:{"update:visible":function(o){t.visibleNormal=o}}},[i("div",{attrs:{slot:"body"},slot:"body"},[i("div",[t._v("\u5BF9\u8BDD\u6846\u5185\u5BB9")])])])],1)},U=[];const z={data(){return{visibleModal:!1,visibleModelessDrag:!1,visibleModeless:!1,visibleNormal:!1}},methods:{}},p={};var J=l(z,L,U,!1,G,null,null,null);function G(e){for(let t in p)this[t]=p[t]}const me=function(){return J.exports}();var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("t-space",{attrs:{"break-line":""}},[n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visible=!0}}},[e._v("\u9ED8\u8BA4\u4F4D\u7F6E")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visibleCenter=!0}}},[e._v("\u5782\u76F4\u5C45\u4E2D")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visibleTop=!0}}},[e._v("\u81EA\u5B9A\u4E49top")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(i){e.visibleOverflow=!0}}},[e._v("\u6587\u672C\u6EA2\u51FA")])],1),n("t-dialog",{attrs:{header:"\u5BF9\u8BDD\u6846\u6807\u9898",body:"\u5BF9\u8BDD\u6846\u5185\u5BB9",visible:e.visible,onClose:e.close1,onConfirm:e.close1}}),n("t-dialog",{attrs:{placement:"center",header:"\u5BF9\u8BDD\u6846\u6807\u9898",visible:e.visibleCenter,onConfirm:e.close2,onClose:e.close2}},[n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u5BF9\u8BDD\u6846")])]),n("t-dialog",{attrs:{placement:e.placement,header:"\u5BF9\u8BDD\u6846\u6807\u9898",body:"\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u4F4D\u7F6E\uFF0Ctop: 50px",top:"30%",visible:e.visibleTop,onConfirm:e.close3,onClose:e.close3}}),n("t-dialog",{attrs:{placement:"center",header:"\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846\u6807\u9898",visible:e.visibleOverflow,onConfirm:e.close4,onClose:e.close4}},[n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")]),n("p",[e._v("\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846")])])],1)},Q=[];const W=r.extend({data(){return{visible:!1,visibleCenter:!1,visibleTop:!1,visibleOverflow:!1,placement:"top",top:"50px"}},methods:{close1(){this.visible=!1},close2(){this.visibleCenter=!1},close3(){this.visibleTop=!1},close4(){this.visibleOverflow=!1}}}),m={};var X=l(W,H,Q,!1,Y,null,null,null);function Y(e){for(let t in m)this[t]=m[t]}const fe=function(){return X.exports}();var Z=function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"dialog-attach-wrap"},[i("t-space",{attrs:{"break-line":""}},[i("t-button",{attrs:{theme:"primary"},on:{click:function(o){t.visibleBody=!0}}},[t._v("\u6302\u8F7D\u5728body")]),i("t-button",{attrs:{theme:"primary"},on:{click:function(o){t.visibleIdAttach=!0}}},[t._v("\u6302\u8F7D\u7279\u5B9A\u5143\u7D20")]),i("t-button",{attrs:{theme:"primary"},on:{click:function(o){t.visibleFunctionAttach=!0}}},[t._v("\u6302\u8F7D\u51FD\u6570\u8FD4\u56DE\u8282\u70B9")]),i("t-button",{attrs:{theme:"primary"},on:{click:function(o){t.visibleShowInAttachedElement=!0}}},[t._v("\u5C55\u793A\u5728\u6302\u8F7D\u5143\u7D20\u533A\u57DF")])],1),i("t-dialog",{attrs:{visible:t.visibleBody,attach:"body",header:"\u6302\u8F7D\u5728body",destroyOnClose:"",onConfirm:function(){return e.visibleBody=!1}},on:{"update:visible":function(o){t.visibleBody=o}}},[i("div",{attrs:{slot:"body"},slot:"body"},[i("div",[t._v("\u88AB\u6302\u8F7D\u5230 body \u5143\u7D20\u7684\u5BF9\u8BDD\u6846")])])]),i("t-dialog",{attrs:{visible:t.visibleIdAttach,attach:"#app",header:"\u6302\u8F7D\u5230id\u4E3Aapp\u7684\u5143\u7D20",destroyOnClose:"",onConfirm:function(){return e.visibleIdAttach=!1}},on:{"update:visible":function(o){t.visibleIdAttach=o}}},[i("div",{attrs:{slot:"body"},slot:"body"},[i("div",[t._v("\u901A\u8FC7querySelect\u6307\u5B9A\u5143\u7D20\u6302\u8F7D")]),i("div",[t._v("\u652F\u6301\u539F\u751Fdocument.querySelect\u9009\u62E9\u5143\u7D20")]),i("div",[t._v("querySelect\u83B7\u53D6\u5230\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u6302\u8F7D\u70B9")])])]),i("t-dialog",{attrs:{visible:t.visibleFunctionAttach,attach:t.getAttach,header:"\u51FD\u6570\u8FD4\u56DE\u6302\u8F7D\u8282\u70B9",destroyOnClose:"",onConfirm:function(){return e.visibleFunctionAttach=!1}},on:{"update:visible":function(o){t.visibleFunctionAttach=o}}},[i("div",{attrs:{slot:"body"},slot:"body"},[i("div",[t._v("\u6307\u5B9A\u51FD\u6570\u8FD4\u56DE\u7684\u8282\u70B9\u4E3A\u6302\u8F7D\u70B9")]),i("div",[t._v("\u51FD\u6570\u8FD4\u56DE\u4E3ADOM\u8282\u70B9\u5BF9\u8C61")])])]),i("t-dialog",{attrs:{visible:t.visibleShowInAttachedElement,header:"\u5BF9\u8BDD\u6846\u4EC5\u5C55\u793A\u5728\u6302\u8F7D\u5143\u7D20\u533A\u57DF",showInAttachedElement:!0,placement:"center",onConfirm:function(){return e.visibleShowInAttachedElement=!1}},on:{"update:visible":function(o){t.visibleShowInAttachedElement=o}}},[i("div",{attrs:{slot:"body"},slot:"body"},[i("div",[t._v("\u7236\u5143\u7D20\uFF08\u6302\u8F7D\u5143\u7D20\uFF09\u9700\u8981\u6709\u5B9A\u4F4D\u5C5E\u6027\uFF0C\u5982\uFF1Aposition: relative")]),i("div",[t._v("showInAttachedElement API \u4EC5\u9488\u5BF9\u6A21\u6001\u5BF9\u8BDD\u6846\u6709\u6548")])])])],1)},ee=[];const ne=r.extend({data(){return{visibleBody:!1,visibleIdAttach:!1,visibleFunctionAttach:!1,visibleShowInAttachedElement:!1}},methods:{getAttach(){return this.$root.$el}}}),f={};var te=l(ne,Z,ee,!1,ie,"1a779c83",null,null);function ie(e){for(let t in f)this[t]=f[t]}const he=function(){return te.exports}(),ye=`<template>
  <div>
    <t-button theme="primary" @click="visible = true">\u57FA\u7840\u786E\u8BA4\u5BF9\u8BDD\u6846</t-button>
    <!-- :onClose="onClose" \u548C @close="onClose" \u7B49\u6548 -->
    <!-- :onConfirm="onConfirm" \u548C @confirm="onConfirm" \u7B49\u6548 -->
    <!-- :onCancel="onCancel" \u548C @cancel="onCancel" \u7B49\u6548 -->
    <!-- :onEscKeydown="onEscKeydown" \u548C @escKeydown="onEscKeydown" \u7B49\u6548 -->
    <t-dialog
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible"
      @confirm="onConfirm"
      :confirmOnEnter="true"
      :onConfirm="onConfirmAnother"
      :onCancel="onCancel"
      :onEscKeydown="onKeydownEsc"
      :onCloseBtnClick="onClickCloseBtn"
      :onOverlayClick="onClickOverlay"
      :onClose="close"
    >
      <t-button theme="primary" @click="visible1 = true">\u5F39\u7A97\u4E8C</t-button>
    </t-dialog>
    <t-dialog header="\u5BF9\u8BDD\u6846\u6807\u9898\u4E8C" body="\u5BF9\u8BDD\u6846\u5185\u5BB9\u4E8C" :visible.sync="visible1" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      visible1: false,
    };
  },
  methods: {
    onConfirm(context) {
      console.log('@confirm\u4E0EonConfirm\u4EFB\u9009\u4E00\u79CD\u65B9\u5F0F\u5373\u53EF\uFF0C\u5176\u4ED6\u51E0\u4E2A\u4E8B\u4EF6\u7C7B\u4F3C', context);
      this.visible = false;
    },
    onConfirmAnother(context) {
      console.log('\u70B9\u51FB\u4E86\u786E\u8BA4\u6309\u94AE', context);
    },
    close(context) {
      console.log('\u5173\u95ED\u5F39\u7A97\uFF0C\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u3001\u6309\u4E0BESC\u3001\u70B9\u51FB\u8499\u5C42\u7B49\u89E6\u53D1', context);
    },
    onCancel(context) {
      console.log('\u70B9\u51FB\u4E86\u53D6\u6D88\u6309\u94AE', context);
    },
    onKeydownEsc(context) {
      console.log('\u6309\u4E0B\u4E86ESC', context);
    },
    onClickCloseBtn(context) {
      console.log('\u70B9\u51FB\u4E86\u5173\u95ED\u6309\u94AE', context);
    },
    onClickOverlay(context) {
      console.log('\u70B9\u51FB\u4E86\u8499\u5C42', context);
    },
  },
};
<\/script>
`,_e=`<template>
  <div>
    <t-space break-line>
      <t-button theme="primary" @click="visible1 = true">\u63D0\u793A\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible2 = true">\u6210\u529F\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible3 = true">\u8B66\u793A\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible4 = true">\u9519\u8BEF\u53CD\u9988</t-button>
      <t-button theme="primary" @click="visible5 = true">\u81EA\u5B9A\u4E49\u56FE\u6807</t-button>
    </t-space>
    <t-dialog
      theme="info"
      header="\u63D0\u793A"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible1"
      @confirm="onConfirm"
      :onClose="close1"
    />
    <t-dialog
      theme="success"
      header="\u6210\u529F"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible2"
      @confirm="onConfirm"
      :onClose="close2"
    />
    <t-dialog
      theme="warning"
      header="\u8B66\u793A"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible3"
      @confirm="onConfirm"
      :onClose="close3"
      :cancelBtn="null"
    />
    <t-dialog
      theme="danger"
      header="\u9519\u8BEF"
      body="\u5BF9\u8BDD\u6846\u5185\u5BB9"
      :visible.sync="visible4"
      @confirm="onConfirm"
      :onClose="close4"
      :cancelBtn="null"
    />
    <t-dialog body="\u5BF9\u8BDD\u6846\u5185\u5BB9" :closeBtn="false" :visible.sync="visible5" @confirm="onConfirm" :onClose="close5">
      <div slot="header">
        <icon name="check-circle-filled" color="orange" />
        <span style="vertical-align: middle">\u5BF9\u8BDD\u6846\u6807\u9898</span>
      </div>
    </t-dialog>
  </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'tdesign-icons-vue';

export default Vue.extend({
  components: {
    Icon,
  },
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
    };
  },
  methods: {
    onConfirm(context) {
      const { e } = context;
      // todo something else here
      this.sendingRequest();
      this.visible1 = false;
      this.visible2 = false;
      this.visible3 = false;
      this.visible4 = false;
      this.visible5 = false;
      e.stopPropagation();
    },
    sendingRequest() {
      console.log('sending request');
    },

    close1() {
      this.visible1 = false;
    },
    close2() {
      this.visible2 = false;
    },
    close3() {
      this.visible3 = false;
    },
    close4() {
      this.visible4 = false;
    },
    close5() {
      this.visible5 = false;
    },
  },
});
<\/script>
`,Ce=`<template>
  <div>
    <t-button @click="visible = true">\u5F02\u6B65\u52A0\u8F7D\u7C7B\u6309\u94AE</t-button>
    <t-dialog
      :visible.sync="visible"
      header="\u4FDD\u5B58"
      body="\u4FDD\u5B58\u4E2D\uFF0C\u8BF7\u7A0D\u540E"
      :confirmBtn="{
        content: '\u4FDD\u5B58\u4E2D...',
        theme: 'primary',
        loading: true,
      }"
      :onConfirm="onConfirm"
      :onClose="close"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
    onConfirm() {
      console.log('\u5904\u7406\u4E2D...');
      this.visible = false;
    },
  },
};
<\/script>
`,ge=`<template>
  <div>
    <p>\u5F39\u7A97\u5185\u5BB9\u81EA\u5B9A\u4E49</p>
    <br />
    <div>
      <t-space break-line>
        <t-button theme="primary" @click="bodyVisible1 = true">\u9690\u85CF\u6807\u9898</t-button>
        <t-button theme="primary" @click="bodyVisible2 = true">\u6E32\u67D3\u51FD\u6570\u5B9A\u4E49\u5185\u5BB9</t-button>
        <t-button theme="primary" @click="bodyVisible3 = true">\u63D2\u69FD\u65B9\u5F0F\u5B9A\u4E49\u5185\u5BB9</t-button>
      </t-space>
      <!-- :onClose="onClose" \u548C @close="onClose" \u7B49\u6548 -->
      <!-- :onConfirm="onConfirm" \u548C @confirm="onConfirm" \u7B49\u6548 -->
      <t-dialog
        :header="false"
        body="\u8FD9\u662F\u5BF9\u8BDD\u6846\u5185\u5BB9\uFF0C\u5BF9\u8BDD\u6846\u6807\u9898\u5DF2\u88AB\u9690\u85CF"
        :visible="bodyVisible1"
        :onClose="bodyClose1"
        :onConfirm="bodyClose1"
      />

      <t-dialog
        :visible="bodyVisible2"
        header="\u5BF9\u8BDD\u6846\u6807\u9898"
        :body="renderDialog2Body"
        :onClose="bodyClose2"
        :onConfirm="bodyClose2"
      >
        <!-- <div slot="body">\u88AB\u6E32\u67D3\u51FD\u6570\u8986\u76D6\u7684\u63D2\u69FD\u5185\u5BB9</div> -->
      </t-dialog>

      <t-dialog header="\u5BF9\u8BDD\u6846\u6807\u9898" :visible="bodyVisible3" :onClose="bodyClose3" :onConfirm="bodyClose3">
        <div slot="body">
          <div>\u8FD9\u662F\u4F7F\u7528\u63D2\u69FD\u5B9A\u4E49\u7684\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
        </div>
      </t-dialog>
    </div>

    <br /><br /><br />
    <p>\u64CD\u4F5C\u6309\u94AE\u81EA\u5B9A\u4E49</p>
    <br />
    <p>
      \u5E95\u90E8\u6309\u94AE\u6709\u4E24\u4E2A\u63A7\u5236\u5C5E\u6027\uFF1AconfirmBtn \u548C cancelBtn\u3002\u5C5E\u6027\u7C7B\u578B\u6709\u591A\u79CD\uFF1Astring | ButtonProps | TNode\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 footer
      \u6765\u81EA\u5B9A\u4E49\u63A7\u5236
    </p>
    <br />
    <t-space break-line>
      <t-button theme="primary" @click="visible1 = true">\u6309\u94AE\u6587\u5B57</t-button>
      <t-button theme="primary" @click="visible2 = true">\u6309\u94AE\u5C5E\u6027</t-button>
      <t-button theme="primary" @click="visible3 = true">\u6E32\u67D3\u51FD\u6570\u6309\u94AE</t-button>
      <t-button theme="primary" @click="visible4 = true">\u9690\u85CF\u5E95\u90E8</t-button>
    </t-space>
    <t-dialog
      :visible.sync="visible1"
      header="\u63D0\u793A"
      body="\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u76F4\u63A5\u4F20\u5165\u6587\u5B57"
      confirmBtn="\u524D\u5F80\u652F\u4ED8"
      cancelBtn="\u5173\u95ED"
      :onConfirm="onConfirm"
      :onClose="close1"
    />

    <!-- \u900F\u4F20 ButtonProps\uFF0C\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u6837\u5F0F -->
    <t-dialog
      :visible="visible2"
      header="\u63D0\u793A"
      body="\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u4F20\u5165 ButtonProps"
      :confirmBtn="{
        content: confirmBtnRender,
        icon: confirmBtnIconRender,
        variant: 'base',
      }"
      :cancelBtn="{
        content: '\u79BB\u5F00',
        variant: 'outline',
      }"
      :onClose="close2"
    />

    <!-- cancelBtn \u548C confirmBtn \u503C\u4E3A null \u65F6\uFF0C\u9690\u85CF\u6309\u94AE -->
    <!-- confirmBtn \u53EF\u4EE5\u4F5C\u4E3A\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u6309\u94AE -->
    <t-dialog
      :visible="visible3"
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF0C\u4F20\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6"
      :confirmBtn="getConfirmBtn"
      :cancelBtn="null"
      :onClose="close3"
    />

    <t-dialog
      :visible="visible4"
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u4E0D\u9700\u8981\u5E95\u90E8\u6309\u94AE\u7684\u5185\u5BB9"
      :footer="false"
      :onClose="close4"
      :onConfirm="close4"
    />
  </div>
</template>
<script lang="jsx">
import { CartIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      bodyVisible1: false,
      bodyVisible2: false,
      bodyVisible3: false,
    };
  },
  methods: {
    getConfirmBtn() {
      return (
        <t-button theme="primary" disabled>
          \u6211\u77E5\u9053\u4E86
        </t-button>
      );
    },
    // \u4F7F\u7528 button.content \u6E32\u67D3\u51FD\u6570\u8F93\u51FA
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    confirmBtnRender(h) {
      return <span>\u524D\u5F80\u8D2D\u7269\u8F66</span>;
    },
    // \u4F7F\u7528 button.icon \u6E32\u67D3\u51FD\u6570\u8F93\u51FA
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    confirmBtnIconRender(h) {
      return <CartIcon />;
    },
    close1() {
      this.visible1 = false;
    },
    close2() {
      this.visible2 = false;
    },
    close3() {
      this.visible3 = false;
    },
    close4() {
      this.visible4 = false;
    },
    onConfirm() {
      this.visible1 = false;
      alert('\u8DF3\u8F6C\u652F\u4ED8~');
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    renderDialog2Body(h) {
      // return this.$createElement('div', [this.$createElement('h2', '\u53C2\u6570\u4F20\u9012\u4F18\u5148\u4E8E\u63D2\u69FD\u5185\u5BB9'), '\u8FD9\u662F\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\u7ED3\u679C']);
      return <div>\u8FD9\u91CC\u7684\u5185\u5BB9\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u8F93\u51FA\uFF0C\u6E32\u67D3\u51FD\u6570\u4F18\u5148\u7EA7\u9AD8\u4E8E\u63D2\u69FD</div>;
    },

    bodyClose1() {
      this.bodyVisible1 = false;
    },
    bodyClose2() {
      this.bodyVisible2 = false;
    },
    bodyClose3() {
      this.bodyVisible3 = false;
    },
  },
};
<\/script>
`,$e=`<template>
  <div>
    <t-space break-line>
      <t-button theme="primary" @click="visibleModal = true">\u6A21\u6001\u5BF9\u8BDD\u6846</t-button>
      <t-button theme="primary" @click="visibleModelessDrag = true">\u975E\u6A21\u6001\u5BF9\u8BDD\u6846</t-button>
      <t-button theme="primary" @click="visibleModeless = true">\u6A21\u6001\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD</t-button>
      <t-button theme="primary" @click="visibleNormal = true">\u666E\u901A\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD</t-button>
    </t-space>

    <t-dialog
      header="\u6A21\u6001\u5BF9\u8BDD\u6846"
      :visible.sync="visibleModal"
      mode="modal"
      draggable
      :onConfirm="() => (this.visibleModal = false)"
    >
      <div slot="body">
        <div>\u9ED8\u8BA4\u70B9\u51FB\u8499\u5C42\u6216\u6309ESC\u53EF\u5173\u95ED</div>
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>

    <t-dialog
      header="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846"
      :visible.sync="visibleModelessDrag"
      mode="modeless"
      draggable
      :onConfirm="() => (this.visibleModelessDrag = false)"
    >
      <div slot="body">
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>

    <t-dialog
      header="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD"
      :visible.sync="visibleModeless"
      mode="modeless"
      :onConfirm="() => (this.visibleModeless = false)"
    >
      <div slot="body">
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>

    <t-dialog
      header="\u975E\u6A21\u6001\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD"
      :visible.sync="visibleModeless"
      mode="modeless"
      :onConfirm="() => (this.visibleModeless = false)"
    >
      <div slot="body">
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>

    <t-dialog
      header="\u666E\u901A\u5BF9\u8BDD\u6846-\u4E0D\u53EF\u62D6\u62FD"
      :visible.sync="visibleNormal"
      mode="normal"
      :onConfirm="() => (this.visibleNormal = false)"
    >
      <div slot="body">
        <div>\u5BF9\u8BDD\u6846\u5185\u5BB9</div>
      </div>
    </t-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleModal: false,
      visibleModelessDrag: false,
      visibleModeless: false,
      visibleNormal: false,
    };
  },
  methods: {},
};
<\/script>
`,ke=`<template>
  <div>
    <t-space break-line>
      <t-button theme="primary" @click="visible = true">\u9ED8\u8BA4\u4F4D\u7F6E</t-button>
      <t-button theme="primary" @click="visibleCenter = true">\u5782\u76F4\u5C45\u4E2D</t-button>
      <t-button theme="primary" @click="visibleTop = true">\u81EA\u5B9A\u4E49top</t-button>
      <t-button theme="primary" @click="visibleOverflow = true">\u6587\u672C\u6EA2\u51FA</t-button>
    </t-space>
    <t-dialog header="\u5BF9\u8BDD\u6846\u6807\u9898" body="\u5BF9\u8BDD\u6846\u5185\u5BB9" :visible="visible" :onClose="close1" :onConfirm="close1" />

    <t-dialog placement="center" header="\u5BF9\u8BDD\u6846\u6807\u9898" :visible="visibleCenter" :onConfirm="close2" :onClose="close2">
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u5BF9\u8BDD\u6846</p>
    </t-dialog>
    <t-dialog
      :placement="placement"
      header="\u5BF9\u8BDD\u6846\u6807\u9898"
      body="\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u4F4D\u7F6E\uFF0Ctop: 50px"
      :top="'30%'"
      :visible="visibleTop"
      :onConfirm="close3"
      :onClose="close3"
    />
    <t-dialog
      placement="center"
      header="\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846\u6807\u9898"
      :visible="visibleOverflow"
      :onConfirm="close4"
      :onClose="close4"
    >
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
      <p>\u6C34\u5E73\u5C45\u4E2D\u663E\u793A\u7684\u6587\u672C\u6EA2\u51FA\u5BF9\u8BDD\u6846</p>
    </t-dialog>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visible: false,
      visibleCenter: false,
      visibleTop: false,
      visibleOverflow: false,
      placement: 'top',
      top: '50px',
    };
  },
  methods: {
    close1() {
      this.visible = false;
    },
    close2() {
      this.visibleCenter = false;
    },
    close3() {
      this.visibleTop = false;
    },
    close4() {
      this.visibleOverflow = false;
    },
  },
});
<\/script>
`,Be=`<template>
  <div class="dialog-attach-wrap">
    <!-- attach\u6302\u8F7D -->
    <t-space break-line>
      <t-button theme="primary" @click="visibleBody = true">\u6302\u8F7D\u5728body</t-button>
      <t-button theme="primary" @click="visibleIdAttach = true">\u6302\u8F7D\u7279\u5B9A\u5143\u7D20</t-button>
      <t-button theme="primary" @click="visibleFunctionAttach = true">\u6302\u8F7D\u51FD\u6570\u8FD4\u56DE\u8282\u70B9</t-button>
      <t-button theme="primary" @click="visibleShowInAttachedElement = true">\u5C55\u793A\u5728\u6302\u8F7D\u5143\u7D20\u533A\u57DF</t-button>
    </t-space>
    <t-dialog
      :visible.sync="visibleBody"
      attach="body"
      header="\u6302\u8F7D\u5728body"
      destroyOnClose
      :onConfirm="() => (this.visibleBody = false)"
    >
      <div slot="body">
        <div>\u88AB\u6302\u8F7D\u5230 body \u5143\u7D20\u7684\u5BF9\u8BDD\u6846</div>
      </div>
    </t-dialog>

    <t-dialog
      :visible.sync="visibleIdAttach"
      attach="#app"
      header="\u6302\u8F7D\u5230id\u4E3Aapp\u7684\u5143\u7D20"
      destroyOnClose
      :onConfirm="() => (this.visibleIdAttach = false)"
    >
      <div slot="body">
        <div>\u901A\u8FC7querySelect\u6307\u5B9A\u5143\u7D20\u6302\u8F7D</div>
        <div>\u652F\u6301\u539F\u751Fdocument.querySelect\u9009\u62E9\u5143\u7D20</div>
        <div>querySelect\u83B7\u53D6\u5230\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u4E3A\u6302\u8F7D\u70B9</div>
      </div>
    </t-dialog>

    <t-dialog
      :visible.sync="visibleFunctionAttach"
      :attach="getAttach"
      header="\u51FD\u6570\u8FD4\u56DE\u6302\u8F7D\u8282\u70B9"
      destroyOnClose
      :onConfirm="() => (this.visibleFunctionAttach = false)"
    >
      <div slot="body">
        <div>\u6307\u5B9A\u51FD\u6570\u8FD4\u56DE\u7684\u8282\u70B9\u4E3A\u6302\u8F7D\u70B9</div>
        <div>\u51FD\u6570\u8FD4\u56DE\u4E3ADOM\u8282\u70B9\u5BF9\u8C61</div>
      </div>
    </t-dialog>

    <t-dialog
      :visible.sync="visibleShowInAttachedElement"
      header="\u5BF9\u8BDD\u6846\u4EC5\u5C55\u793A\u5728\u6302\u8F7D\u5143\u7D20\u533A\u57DF"
      :showInAttachedElement="true"
      placement="center"
      :onConfirm="() => (this.visibleShowInAttachedElement = false)"
    >
      <div slot="body">
        <div>\u7236\u5143\u7D20\uFF08\u6302\u8F7D\u5143\u7D20\uFF09\u9700\u8981\u6709\u5B9A\u4F4D\u5C5E\u6027\uFF0C\u5982\uFF1Aposition: relative</div>
        <div>showInAttachedElement API \u4EC5\u9488\u5BF9\u6A21\u6001\u5BF9\u8BDD\u6846\u6709\u6548</div>
      </div>
    </t-dialog>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      visibleBody: false,
      visibleIdAttach: false,
      visibleFunctionAttach: false,
      visibleShowInAttachedElement: false,
    };
  },
  methods: {
    getAttach() {
      return this.$root.$el;
    },
  },
});
<\/script>
<style scoped>
.dialog-attach-wrap {
  position: relative;
  height: 300px;
  padding: 20px;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  overflow: hidden;
}
</style>
`,oe=[{name:"closeBtn",type:"Boolean",defaultValue:!0,options:[]},{name:"closeOnEscKeydown",type:"Boolean",defaultValue:!0,options:[]},{name:"closeOnOverlayClick",type:"Boolean",defaultValue:!0,options:[]},{name:"destroyOnClose",type:"Boolean",defaultValue:!1,options:[]},{name:"draggable",type:"Boolean",defaultValue:!1,options:[]},{name:"footer",type:"Boolean",defaultValue:!0,options:[]},{name:"header",type:"Boolean",defaultValue:!0,options:[]},{name:"mode",type:"enum",defaultValue:"modal",options:[{label:"modal",value:"modal"},{label:"modeless",value:"modeless"},{label:"normal",value:"normal"}]},{name:"placement",type:"enum",defaultValue:"top",options:[{label:"top",value:"top"},{label:"center",value:"center"}]},{name:"preventScrollThrough",type:"Boolean",defaultValue:!0,options:[]},{name:"showInAttachedElement",type:"Boolean",defaultValue:!1,options:[]},{name:"showOverlay",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"default",options:[{label:"default",value:"default"},{label:"info",value:"info"},{label:"warning",value:"warning"},{label:"danger",value:"danger"},{label:"success",value:"success"}]},{name:"visible",type:"Boolean",defaultValue:!1,options:[]}],y={};y.setup=(e,t)=>{const n=a(!1),i=a(oe),o=[{label:"dialog",value:"dialog"}],s={dialog:`
        <div>
          <t-button @click="visible = true">Open Modal</t-button>
          <t-dialog v-bind="configProps" :visible.sync="visible">
            <p>This is a dialog</p>
          </t-dialog>
        </div>
      `},c=a(`<template>${s[o[0].value].trim()}</template>`);function _(C){c.value=`<template>${s[C].trim()}</template>`}return{visible:n,configList:i,panelList:o,usageCode:c,onPanelChange:_}};var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"dialog",fn:function(i){var o=i.configProps;return[n("div",[n("t-button",{on:{click:function(s){e.visible=!0}}},[e._v("Open Modal")]),n("t-dialog",e._b({attrs:{visible:e.visible},on:{"update:visible":function(s){e.visible=s}}},"t-dialog",o,!1),[n("p",[e._v("This is a dialog")])])],1)]}}])})},se=[];const h={};var ae=l(y,le,se,!1,re,null,null,null);function re(e){for(let t in h)this[t]=h[t]}const xe=function(){return ae.exports}();export{de as D,xe as U,be as a,ue as b,pe as c,me as d,fe as e,he as f,ye as g,_e as h,Ce as i,ge as j,$e as k,ke as l,Be as m};
