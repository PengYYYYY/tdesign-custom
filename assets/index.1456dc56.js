import{n as o,r as i}from"./index.7bc89517.js";import{C as $}from"./cloud-upload.5468bdbd.js";var U=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("t-space",{attrs:{direction:"vertical"}},[n("t-space",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.multiple,callback:function(t){e.multiple=t},expression:"multiple"}},[n("t-radio-button",{attrs:{value:!1}},[e._v("\u5355\u6587\u4EF6\u4E0A\u4F20")]),n("t-radio-button",{attrs:{value:!0}},[e._v("\u591A\u6587\u4EF6\u4E0A\u4F20")])],1)],1),n("t-space",[n("t-checkbox",{model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}},[e._v("\u7981\u7528\u72B6\u6001")]),e.multiple?n("t-checkbox",{model:{value:e.uploadInOneRequest,callback:function(t){e.uploadInOneRequest=t},expression:"uploadInOneRequest"}},[e._v("\u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20")]):e._e(),e.multiple?n("t-checkbox",{model:{value:e.isBatchUpload,callback:function(t){e.isBatchUpload=t},expression:"isBatchUpload"}},[e._v("\u6574\u4F53\u66FF\u6362\u4E0A\u4F20")]):e._e(),n("t-checkbox",{model:{value:e.autoUpload,callback:function(t){e.autoUpload=t},expression:"autoUpload"}},[e._v("\u81EA\u52A8\u4E0A\u4F20")]),e.autoUpload?e._e():n("t-button",{staticStyle:{height:"22px"},attrs:{variant:"base",theme:"default"},on:{click:e.uploadFiles}},[e._v(" \u70B9\u51FB\u624B\u52A8\u4E0A\u4F20 ")])],1),n("br"),n("t-space",[n("t-upload",{ref:"uploadRef1",attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",placeholder:e.multiple?"\u6587\u4EF6\u6570\u91CF\u4E0D\u8D85\u8FC7 5 \u4E2A":"\u8981\u6C42\u6587\u4EF6\u5927\u5C0F\u5728 1M \u4EE5\u5185",multiple:e.multiple,"auto-upload":e.autoUpload,"upload-all-files-in-one-request":e.uploadInOneRequest,"is-batch-upload":e.isBatchUpload,"size-limit":{size:1,unit:"MB"},max:5,disabled:e.disabled,"allow-upload-duplicate-file":!0},on:{"select-change":e.handleSelectChange,fail:e.handleFail,success:e.handleSuccess,"one-file-success":e.onOneFileSuccess,validate:e.onValidate},model:{value:e.files1,callback:function(t){e.files1=t},expression:"files1"}}),n("t-upload",{ref:"uploadRef2",style:{marginLeft:"40px"},attrs:{multiple:e.multiple,disabled:e.disabled,"auto-upload":e.autoUpload,"upload-all-files-in-one-request":e.uploadInOneRequest,"is-batch-upload":e.isBatchUpload,"trigger-button-props":{theme:"primary",variant:"base"},placeholder:"\u8FD9\u662F\u4E00\u6BB5\u6CA1\u6709\u6587\u4EF6\u65F6\u7684\u5360\u4F4D\u6587\u672C",action:"//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"},on:{fail:e.handleFail},model:{value:e.files2,callback:function(t){e.files2=t},expression:"files2"}}),n("t-upload",{ref:"uploadRef3",style:{marginLeft:"60px"},attrs:{multiple:e.multiple,disabled:e.disabled,"auto-upload":e.autoUpload,"upload-all-files-in-one-request":e.uploadInOneRequest,"is-batch-upload":e.isBatchUpload,"format-response":e.formatResponse,placeholder:"\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B",action:"//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"},on:{fail:e.handleFail},model:{value:e.files3,callback:function(t){e.files3=t},expression:"files3"}})],1)],1)},F=[];const w={data(){return{files1:[],files2:[{name:"\u8FD9\u662F\u4E00\u4E2A\u9ED8\u8BA4\u6587\u4EF6",status:"success",url:"https://tdesign.gtimg.com/site/source/figma-pc.png",size:1e3}],files3:[],multiple:!1,uploadInOneRequest:!1,autoUpload:!0,isBatchUpload:!1,disabled:!1}},watch:{multiple(e){this.files3=e?[{name:"\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u6210\u529F\u7684\u6587\u4EF6",status:"success",url:"https://tdesign.gtimg.com/site/source/figma-pc.png",size:1e3},{name:"\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u4E2D\u7684\u6587\u4EF6",status:"progress",percent:30,url:"https://tdesign.gtimg.com/site/source/figma-pc.png",size:1e3},{name:"\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6",status:"fail",url:"https://tdesign.gtimg.com/site/source/figma-pc.png",size:1e3},{name:"\u8FD9\u662F\u4E00\u4E2A\u7B49\u5F85\u4E0A\u4F20\u7684\u6587\u4EF6",status:"waiting",url:"https://tdesign.gtimg.com/site/source/figma-pc.png",size:1e3}]:[]}},methods:{handleFail({file:e}){this.$message.error(`\u6587\u4EF6 ${e.name} \u4E0A\u4F20\u5931\u8D25`)},handleSelectChange(e){console.log("onSelectChange",e)},handleSuccess(e){console.log(e),this.$message.success("\u4E0A\u4F20\u6210\u529F")},onOneFileSuccess(e){console.log("onOneFileSuccess",e)},onValidate(e){const{files:a,type:n}=e;console.log("onValidate",e),n==="FILE_OVER_SIZE_LIMIT"?(a.map(t=>t.name).join("\u3001"),this.$message.warning(`${a.map(t=>t.name).join("\u3001")} \u7B49\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236\uFF0C\u5DF2\u81EA\u52A8\u8FC7\u6EE4`,5e3)):n==="FILES_OVER_LENGTH_LIMIT"?this.$message.warning("\u6587\u4EF6\u6570\u91CF\u8D85\u51FA\u9650\u5236\uFF0C\u4EC5\u4E0A\u4F20\u672A\u8D85\u51FA\u6570\u91CF\u7684\u6587\u4EF6"):n==="FILTER_FILE_SAME_NAME"&&this.$message.warning("\u4E0D\u5141\u8BB8\u4E0A\u4F20\u540C\u540D\u6587\u4EF6")},formatResponse(e){return{error:"\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5",url:e.url}},outsideRemove(e){this.files3.splice(e,1)},uploadFiles(){this.$refs.uploadRef1.uploadFiles(),this.$refs.uploadRef2.uploadFiles(),this.$refs.uploadRef3.uploadFiles()},beforeUpload(e){return this.$message.error(`\u6587\u4EF6 ${e.name} \u4E0D\u6EE1\u8DB3\u6761\u4EF6`),!1},beforeAllFilesUpload(){return this.$message.error("\u6587\u4EF6\u4E0D\u6EE1\u8DB3\u6761\u4EF6"),!1}}},d={};var R=o(w,U,F,!1,z,null,null,null);function z(e){for(let a in d)this[a]=d[a]}const $e=function(){return R.exports}();var k=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"tdesign-demo-upload"},[n("div",{staticStyle:{width:"350px"}},[n("t-upload",{attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",tips:e.tips,theme:"file-input",placeholder:"\u672A\u9009\u62E9\u6587\u4EF6"},on:{fail:e.handleFail,success:e.onSuccess},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1)])},y=[];const D={data(){return{files:[],tips:"\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u5728 5M \u4EE5\u5185"}},methods:{handleFail({file:e}){this.$message.error(`\u6587\u4EF6 ${e.name} \u4E0A\u4F20\u5931\u8D25`)},onSuccess(){this.tips=""}}},r={};var M=o(D,k,y,!1,I,null,null,null);function I(e){for(let a in r)this[a]=r[a]}const Ue=function(){return M.exports}();var q=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("t-space",{attrs:{direction:"vertical"}},[n("t-space",[n("t-checkbox",{model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}},[e._v(" \u7981\u7528\u72B6\u6001 ")]),n("t-checkbox",{model:{value:e.uploadAllFilesInOneRequest,callback:function(t){e.uploadAllFilesInOneRequest=t},expression:"uploadAllFilesInOneRequest"}},[e._v(" \u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20 ")]),n("t-checkbox",{model:{value:e.autoUpload,callback:function(t){e.autoUpload=t},expression:"autoUpload"}},[e._v(" \u81EA\u52A8\u4E0A\u4F20 ")]),e.autoUpload?e._e():n("t-button",{staticStyle:{height:"22px"},attrs:{variant:"base",theme:"default",size:"small"},on:{click:e.uploadFiles}},[e._v(" \u70B9\u51FB\u4E0A\u4F20 ")])],1),n("br"),n("t-space",[n("t-upload",{ref:"uploadRef1",attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",disabled:e.disabled,autoUpload:e.autoUpload,theme:"image",tips:"\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u4E0A\u4F20\u6210\u529F\u72B6\u6001\u6F14\u793A\uFF09",accept:"image/*"},on:{fail:e.handleFail},model:{value:e.file1,callback:function(t){e.file1=t},expression:"file1"}}),n("t-upload",{ref:"uploadRef2",attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",disabled:e.disabled,autoUpload:e.autoUpload,theme:"image",tips:"\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u4E0A\u4F20\u5931\u8D25\u72B6\u6001\u6F14\u793A\uFF09",accept:"image/*",formatResponse:e.formatResponse},model:{value:e.fileFail,callback:function(t){e.fileFail=t},expression:"fileFail"}})],1),n("t-upload",{ref:"uploadRef3",attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",disabled:e.disabled,autoUpload:e.autoUpload,theme:"image",tips:"\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u81EA\u5B9A\u4E49\u9884\u89C8\u56FE\u7247\u5730\u5740\uFF09",accept:"image/*",formatResponse:e.formatImgResponse},on:{fail:e.handleFail},model:{value:e.file2,callback:function(t){e.file2=t},expression:"file2"}}),n("t-upload",{ref:"uploadRef4",attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",abridgeName:[6,6],disabled:e.disabled,autoUpload:e.autoUpload,uploadAllFilesInOneRequest:e.uploadAllFilesInOneRequest,theme:"image",tips:"\u5141\u8BB8\u9009\u62E9\u591A\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 3 \u5F20\u56FE\u7247",accept:"image/*",multiple:"",max:3},on:{fail:e.handleFail},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1)},S=[];const O={data(){return{file1:[],file2:[{name:"demo-image-1.png",url:"https://tdesign.gtimg.com/demo/demo-image-1.png"}],files:[],fileFail:[],disabled:!1,uploadAllFilesInOneRequest:!1,autoUpload:!0}},methods:{formatImgResponse(){return{url:"https://tdesign.gtimg.com/site/avatar.jpg"}},formatResponse(){return{error:"\u7F51\u7EDC\u5F02\u5E38\uFF0C\u56FE\u7247\u4E0A\u4F20\u5931\u8D25"}},handleFail({file:e}){this.$message.error(`\u6587\u4EF6 ${e.name} \u4E0A\u4F20\u5931\u8D25`)},uploadFiles(){this.$refs.uploadRef1.uploadFiles(),this.$refs.uploadRef2.uploadFiles(),this.$refs.uploadRef3.uploadFiles(),this.$refs.uploadRef4.uploadFiles()}}},p={};var C=o(O,q,S,!1,B,"3e3f830c",null,null);function B(e){for(let a in p)this[a]=p[a]}const Fe=function(){return C.exports}();var T=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"tdesign-demo-block-column-large"},[n("div",{staticClass:"tdesign-demo-block-column"},[n("div",[e._v("\u662F\u5426\u81EA\u52A8\u4E0A\u4F20\uFF1A"),n("t-switch",{model:{value:e.autoUpload,callback:function(t){e.autoUpload=t},expression:"autoUpload"}})],1),n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.display,callback:function(t){e.display=t},expression:"display"}},[n("t-radio-button",{attrs:{value:"file"}},[e._v("\u6587\u4EF6\u62D6\u62FD\u4E0A\u4F20")]),n("t-radio-button",{attrs:{value:"image"}},[e._v("\u56FE\u7247\u62D6\u62FD\u4E0A\u4F20")])],1)],1)]),n("t-space",[n("t-upload",{attrs:{autoUpload:e.autoUpload,theme:e.display,data:{extra_data:123,file_name:"certificate"},abridgeName:[10,8],draggable:"",action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",formatResponse:e.formatResponse},on:{"cancel-upload":e.onCancelUpload,remove:e.onRemove},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}}),n("t-upload",{attrs:{autoUpload:e.autoUpload,theme:e.display,data:{extra_data:123,file_name:"certificate"},abridgeName:[10,8],formatResponse:e.formatResponse,draggable:"",action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"},on:{dragenter:e.onDragenter,dragleave:e.onDragleave,drop:e.onDrop},model:{value:e.files2,callback:function(t){e.files2=t},expression:"files2"}})],1)],1)},E=[];function A(e=!1){const a=new Date;let n=a.getMonth()+1;n=n<10?`0${n}`:n;const t=`${a.getFullYear()}-${n}-${a.getDate()}`,l=`${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`;return e?[t,l].join(" "):t}const L={data:()=>({autoUpload:!0,display:"file",files:[],files2:[{name:"\u9ED8\u8BA4\u6587\u4EF6",url:"https://tdesign.gtimg.com/site/source/figma-pc.png",status:"success",size:1024,uploadTime:"2022-09-25"}]}),methods:{onCancelUpload(){console.log("cancel upload")},onRemove(){console.log("remove file")},formatResponse(e){return e.uploadTime=A(),e},onDragenter(e){console.log("dragenter",e)},onDragleave(e){console.log("dragleave",e)},onDrop(e){console.log("drop",e)}}},c={};var P=o(L,T,E,!1,j,null,null,null);function j(e){for(let a in c)this[a]=c[a]}const we=function(){return P.exports}();var V=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("t-space",{attrs:{direction:"vertical"}},[n("t-space",[n("t-checkbox",{model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}},[e._v("\u7981\u7528\u72B6\u6001")]),n("t-checkbox",{model:{value:e.autoUpload,callback:function(t){e.autoUpload=t},expression:"autoUpload"}},[e._v("\u81EA\u52A8\u4E0A\u4F20")]),n("t-checkbox",{model:{value:e.allowUploadDuplicateFile,callback:function(t){e.allowUploadDuplicateFile=t},expression:"allowUploadDuplicateFile"}},[e._v(" \u5141\u8BB8\u4E0A\u4F20\u540C\u540D\u6587\u4EF6 ")]),n("t-checkbox",{model:{value:e.isBatchUpload,callback:function(t){e.isBatchUpload=t},expression:"isBatchUpload"}},[e._v(" \u6574\u4F53\u66FF\u6362\u4E0A\u4F20 ")]),n("t-checkbox",{model:{value:e.uploadAllFilesInOneRequest,callback:function(t){e.uploadAllFilesInOneRequest=t},expression:"uploadAllFilesInOneRequest"}},[e._v(" \u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20 ")])],1),n("br"),n("t-upload",{attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",placeholder:"\u652F\u6301\u6279\u91CF\u4E0A\u4F20\u6587\u4EF6\uFF0C\u6587\u4EF6\u683C\u5F0F\u4E0D\u9650\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 10 \u4EFD\u6587\u4EF6",theme:"file-flow",multiple:"",disabled:e.disabled,"auto-upload":e.autoUpload,max:10,"allow-upload-duplicate-file":e.allowUploadDuplicateFile,"is-batch-upload":e.isBatchUpload,"upload-all-files-in-one-request":e.uploadAllFilesInOneRequest},on:{dragenter:e.onDragenter,dragleave:e.onDragleave,drop:e.onDrop},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1)},N=[];const H={name:"TUploadFileFlow",data(){return{max:5,files:[],disabled:!1,autoUpload:!1,allowUploadDuplicateFile:!1,isBatchUpload:!1,uploadAllFilesInOneRequest:!1}},methods:{onDragenter(e){console.log("dragenter",e)},onDragleave(e){console.log("dragleave",e)},onDrop(e){console.log("drop",e)}}},u={};var G=o(H,V,N,!1,Z,null,null,null);function Z(e){for(let a in u)this[a]=u[a]}const Re=function(){return G.exports}();var J=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("t-space",{attrs:{direction:"vertical"}},[n("div",[e._v(" \u662F\u5426\u81EA\u52A8\u4E0A\u4F20\uFF1A "),n("t-switch",{model:{value:e.autoUpload,callback:function(t){e.autoUpload=t},expression:"autoUpload"}})],1),n("br"),n("t-upload",{attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",placeholder:"\u652F\u6301\u6279\u91CF\u4E0A\u4F20\u56FE\u7247\u6587\u4EF6",theme:"image-flow",accept:"image/*",multiple:"","auto-upload":e.autoUpload,max:8},on:{dragenter:e.onDragenter,dragleave:e.onDragleave,drop:e.onDrop},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1)},K=[];const Y={name:"TUploadImageFlow",data(){return{autoUpload:!1,files:[]}},methods:{onDragenter(e){console.log("dragenter",e)},onDragleave(e){console.log("dragleave",e)},onDrop(e){console.log("drop",e)}}},m={};var W=o(Y,J,K,!1,Q,null,null,null);function Q(e){for(let a in m)this[a]=m[a]}const ze=function(){return W.exports}();var X=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"tdesign-demo-block-column-large"},[n("div",[n("t-radio-group",{attrs:{variant:"default-filled"},model:{value:e.uploadMethod,callback:function(t){e.uploadMethod=t},expression:"uploadMethod"}},[n("t-radio-button",{attrs:{value:"requestSuccessMethod"}},[e._v("\u4E0A\u4F20\u6210\u529F\u793A\u4F8B")]),n("t-radio-button",{attrs:{value:"requestFailMethod"}},[e._v("\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B")])],1)],1),n("t-upload",{attrs:{requestMethod:e.requestMethod,tips:"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u65B9\u6CD5\u9700\u8981\u8FD4\u56DE\u6210\u529F\u6216\u5931\u8D25\u4FE1\u606F"},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1)},ee=[];const ne={data(){return{files:[],uploadMethod:"requestSuccessMethod"}},computed:{requestMethod(){return this[this.uploadMethod]}},watch:{uploadMethod(){this.files=[]}},methods:{requestSuccessMethod(e){return console.log(e,e.raw),new Promise(a=>{e.percent=0;const n=setTimeout(()=>{a({status:"success",response:{url:"https://tdesign.gtimg.com/site/avatar.jpg"}}),e.percent=100,clearTimeout(n)},500)})},requestFailMethod(e){return console.log(e),new Promise(a=>{a({status:"fail",error:"\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u7B26\u5408\u89C4\u8303"})})}}},f={};var te=o(ne,X,ee,!1,ae,null,null,null);function ae(e){for(let a in f)this[a]=f[a]}const ke=function(){return te.exports}();var le=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("t-upload",{attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",tips:e.tips,theme:"custom",beforeUpload:e.beforeUpload,multiple:""},on:{fail:e.handleFail,success:function(t){e.tips=""}},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}},[n("t-button",{attrs:{theme:"primary"}},[e._v("\u81EA\u5B9A\u4E49\u4E0A\u4F20")])],1),e.files&&e.files.length?n("div",{staticClass:"list-custom"},[n("ul",e._l(e.files,function(t,l){return n("li",{key:l},[e._v(e._s(t.name))])}),0)]):e._e()],1)},oe=[];const se={data(){return{tips:"\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u5728 5M \u4EE5\u5185",files:[]}},methods:{handleFail({file:e}){this.$message.error(`\u6587\u4EF6 ${e.name} \u4E0A\u4F20\u5931\u8D25`)},beforeUpload(e){return e.size>5*1024*1024?(this.$message.warning("\u4E0A\u4F20\u7684\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E5M"),!1):!0}}},g={};var ie=o(se,le,oe,!1,de,"2dd1cd0c",null,null);function de(e){for(let a in g)this[a]=g[a]}const ye=function(){return ie.exports}();var re=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"tdesign-demo-upload t-upload"},[n("t-button",{attrs:{variant:"outline"},on:{click:e.upload}},[n("cloud-upload-icon",{attrs:{slot:"icon"},slot:"icon"}),e._v("\u70B9\u51FB\u4E0A\u4F20 ")],1),n("br"),n("br"),n("t-upload",{ref:"upload",attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",draggable:"",theme:"custom"},on:{fail:e.handleFail,success:e.handleSuccess,progress:e.onProgress,dragenter:e.onDrop},scopedSlots:e._u([{key:"default",fn:function(t){return[e.files&&e.files.length?n("ul",e._l(e.files,function(l){return n("li",{key:l.name},[e._v(e._s(l.name))])}),0):[t&&t.dragActive?n("p",[e._v("\u91CA\u653E\u9F20\u6807")]):e.progress<1?n("t-button",[e._v("\u81EA\u5B9A\u4E49\u62D6\u62FD\u533A\u57DF")]):e._e()],e.files&&e.files.length?n("t-button",{staticStyle:{"margin-top":"36px"},attrs:{size:"small"}},[e._v("\u66F4\u6362\u6587\u4EF6")]):e._e(),n("br"),n("br")]}}]),model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1)},pe=[];const ce={components:{CloudUploadIcon:$},data(){return{files:[],progress:0}},methods:{onDrop(e){const a=e.e.dataTransfer.items;console.log(a,"file");for(let n=0;n<a.length;n++)console.log(a[n].type,"type")},handleFail({file:e}){this.$message.error(`\u6587\u4EF6 ${e.name} \u4E0A\u4F20\u5931\u8D25`)},handleSuccess({file:e}){this.$message.success(`\u6587\u4EF6 ${e.name} \u4E0A\u4F20\u6210\u529F`)},upload(){this.$refs.upload.triggerUpload()},onProgress(e){console.log(e),this.progress=e}}},v={};var ue=o(ce,re,pe,!1,me,null,null,null);function me(e){for(let a in v)this[a]=v[a]}const De=function(){return ue.exports}(),Me=`<template>
  <!-- :sizeLimit="1024" \u9ED8\u8BA4\u5355\u4F4D\u4E3A\uFF1AKB \u3002\u9519\u8BEF\u63D0\u793A\u4E3A \u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 {sizeLimit} KB-->
  <!-- :sizeLimit="{ size: 2, unit: 'MB' }" -->
  <!-- :sizeLimit="{ size: 2, unit: 'MB', message: '\u56FE\u7247\u592A\u5927' }" -->
  <!-- :sizeLimit="{ size: 2, unit: 'MB', message: '\u56FE\u7247\u592A\u5927\uFF0C\u4E0D\u80FD\u8D85\u8FC7 {sizeLimit} MB' }" -->
  <t-space direction="vertical">
    <t-space>
      <t-radio-group v-model="multiple" variant="default-filled">
        <t-radio-button :value="false">\u5355\u6587\u4EF6\u4E0A\u4F20</t-radio-button>
        <t-radio-button :value="true">\u591A\u6587\u4EF6\u4E0A\u4F20</t-radio-button>
      </t-radio-group>
    </t-space>
    <t-space>
      <t-checkbox v-model="disabled">\u7981\u7528\u72B6\u6001</t-checkbox>
      <t-checkbox v-if="multiple" v-model="uploadInOneRequest">\u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20</t-checkbox>
      <t-checkbox v-if="multiple" v-model="isBatchUpload">\u6574\u4F53\u66FF\u6362\u4E0A\u4F20</t-checkbox>
      <t-checkbox v-model="autoUpload">\u81EA\u52A8\u4E0A\u4F20</t-checkbox>
      <t-button v-if="!autoUpload" variant="base" theme="default" style="height: 22px" @click="uploadFiles">
        \u70B9\u51FB\u624B\u52A8\u4E0A\u4F20
      </t-button>
    </t-space>

    <br />
    <t-space>
      <t-upload
        ref="uploadRef1"
        v-model="files1"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :placeholder="multiple ? '\u6587\u4EF6\u6570\u91CF\u4E0D\u8D85\u8FC7 5 \u4E2A' : '\u8981\u6C42\u6587\u4EF6\u5927\u5C0F\u5728 1M \u4EE5\u5185'"
        :multiple="multiple"
        :auto-upload="autoUpload"
        :upload-all-files-in-one-request="uploadInOneRequest"
        :is-batch-upload="isBatchUpload"
        :size-limit="{ size: 1, unit: 'MB' }"
        :max="5"
        :disabled="disabled"
        :allow-upload-duplicate-file="true"
        @select-change="handleSelectChange"
        @fail="handleFail"
        @success="handleSuccess"
        @one-file-success="onOneFileSuccess"
        @validate="onValidate"
      />

      <t-upload
        ref="uploadRef2"
        v-model="files2"
        :multiple="multiple"
        :disabled="disabled"
        :auto-upload="autoUpload"
        :upload-all-files-in-one-request="uploadInOneRequest"
        :is-batch-upload="isBatchUpload"
        :trigger-button-props="{ theme: 'primary', variant: 'base' }"
        placeholder="\u8FD9\u662F\u4E00\u6BB5\u6CA1\u6709\u6587\u4EF6\u65F6\u7684\u5360\u4F4D\u6587\u672C"
        action="//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :style="{ marginLeft: '40px' }"
        @fail="handleFail"
      />

      <!-- formatResponse \u53EF\u63A7\u5236\u4E0A\u4F20\u6210\u529F\u6216\u8005\u5931\u8D25 -->
      <!-- tips="\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B" \u548C status="error" \u63A7\u5236\u56FA\u5B9A\u6587\u672C\u663E\u793A -->
      <t-upload
        ref="uploadRef3"
        v-model="files3"
        :multiple="multiple"
        :disabled="disabled"
        :auto-upload="autoUpload"
        :upload-all-files-in-one-request="uploadInOneRequest"
        :is-batch-upload="isBatchUpload"
        :format-response="formatResponse"
        placeholder="\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B"
        action="//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :style="{ marginLeft: '60px' }"
        @fail="handleFail"
      >
        <!-- \u81EA\u5B9A\u4E49\u6587\u4EF6\u5217\u8868\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 -->
        <!-- <template #fileListDisplay>
          <div>
            <div
              v-for="(file, index) in files3"
              :key="file.name"
              class="t-upload__single-display-text t-upload__display-text--margin"
            >
              {{file.name}}\uFF08{{file.size}} B\uFF09
              <CloseIcon class="t-upload__icon-delete" @click="() => outsideRemove(index)" />
            </div>
          </div>
        </template> -->
      </t-upload>
    </t-space>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      files1: [],
      files2: [
        {
          name: '\u8FD9\u662F\u4E00\u4E2A\u9ED8\u8BA4\u6587\u4EF6',
          status: 'success',
          url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
          size: 1000,
        },
      ],
      files3: [],
      multiple: false,
      uploadInOneRequest: false,
      autoUpload: true,
      isBatchUpload: false,
      disabled: false,
    };
  },

  watch: {
    multiple(val) {
      this.files3 = val
        ? [
          {
            name: '\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u6210\u529F\u7684\u6587\u4EF6',
            status: 'success',
            url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
            size: 1000,
          },
          {
            name: '\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u4E2D\u7684\u6587\u4EF6',
            status: 'progress',
            percent: 30,
            url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
            size: 1000,
          },
          {
            name: '\u8FD9\u662F\u4E00\u4E2A\u4E0A\u4F20\u5931\u8D25\u7684\u6587\u4EF6',
            status: 'fail',
            url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
            size: 1000,
          },
          {
            name: '\u8FD9\u662F\u4E00\u4E2A\u7B49\u5F85\u4E0A\u4F20\u7684\u6587\u4EF6',
            status: 'waiting',
            url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
            size: 1000,
          },
        ]
        : [];
    },
  },

  methods: {
    handleFail({ file }) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
    },

    handleSelectChange(files) {
      console.log('onSelectChange', files);
    },

    handleSuccess(params) {
      console.log(params);
      this.$message.success('\u4E0A\u4F20\u6210\u529F');
    },

    onOneFileSuccess(params) {
      console.log('onOneFileSuccess', params);
    },

    onValidate(params) {
      const { files, type } = params;
      console.log('onValidate', params);
      if (type === 'FILE_OVER_SIZE_LIMIT') {
        files.map((t) => t.name).join('\u3001');
        this.$message.warning(\`\${files.map((t) => t.name).join('\u3001')} \u7B49\u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236\uFF0C\u5DF2\u81EA\u52A8\u8FC7\u6EE4\`, 5000);
      } else if (type === 'FILES_OVER_LENGTH_LIMIT') {
        this.$message.warning('\u6587\u4EF6\u6570\u91CF\u8D85\u51FA\u9650\u5236\uFF0C\u4EC5\u4E0A\u4F20\u672A\u8D85\u51FA\u6570\u91CF\u7684\u6587\u4EF6');
      } else if (type === 'FILTER_FILE_SAME_NAME') {
        // \u5982\u679C\u5E0C\u671B\u652F\u6301\u4E0A\u4F20\u540C\u540D\u6587\u4EF6\uFF0C\u8BF7\u8BBE\u7F6E allowUploadDuplicateFile={true}
        this.$message.warning('\u4E0D\u5141\u8BB8\u4E0A\u4F20\u540C\u540D\u6587\u4EF6');
      }
    },

    // \u7528\u4E8E\u683C\u5F0F\u5316\u63A5\u53E3\u54CD\u5E94\u503C\uFF0Cerror \u4F1A\u88AB\u7528\u4E8E\u4E0A\u4F20\u5931\u8D25\u7684\u63D0\u793A\u6587\u5B57\uFF1Burl \u8868\u793A\u6587\u4EF6/\u56FE\u7247\u5730\u5740
    // error \u4E3A\u771F\u65F6\uFF0C\u7EC4\u4EF6\u4F1A\u5224\u5B9A\u4E3A\u4E0A\u4F20\u5931\u8D25
    formatResponse(res) {
      return { error: '\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5', url: res.url };
    },

    outsideRemove(index) {
      this.files3.splice(index, 1);
    },

    uploadFiles() {
      this.$refs.uploadRef1.uploadFiles();
      this.$refs.uploadRef2.uploadFiles();
      this.$refs.uploadRef3.uploadFiles();
    },

    /** \u5355\u4E2A\u6587\u4EF6\u6821\u9A8C\u65B9\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 */
    beforeUpload(file) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0D\u6EE1\u8DB3\u6761\u4EF6\`);
      return false;
    },

    /** \u5168\u90E8\u6587\u4EF6\u4E00\u6B21\u6027\u6821\u9A8C\u65B9\u6CD5\uFF0C\u793A\u4F8B\u4EE3\u7801\u6709\u6548\uFF0C\u52FF\u5220 */
    beforeAllFilesUpload() {
      this.$message.error('\u6587\u4EF6\u4E0D\u6EE1\u8DB3\u6761\u4EF6');
      return false;
    },
  },
};
<\/script>
`,Ie=`<template>
  <div class="tdesign-demo-upload">
    <div style="width: 350px">
      <t-upload
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :tips="tips"
        v-model="files"
        @fail="handleFail"
        @success="onSuccess"
        theme="file-input"
        placeholder="\u672A\u9009\u62E9\u6587\u4EF6"
      ></t-upload>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: [],
      tips: '\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u5728 5M \u4EE5\u5185',
    };
  },
  methods: {
    handleFail({ file }) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
    },
    onSuccess() {
      this.tips = '';
    },
  },
};
<\/script>
`,qe=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-checkbox v-model="disabled"> \u7981\u7528\u72B6\u6001 </t-checkbox>
      <t-checkbox v-model="uploadAllFilesInOneRequest"> \u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20 </t-checkbox>
      <t-checkbox v-model="autoUpload"> \u81EA\u52A8\u4E0A\u4F20 </t-checkbox>
      <t-button
        v-if="!autoUpload"
        variant="base"
        theme="default"
        size="small"
        style="height: 22px"
        @click="uploadFiles"
      >
        \u70B9\u51FB\u4E0A\u4F20
      </t-button>
    </t-space>

    <br />

    <t-space>
      <t-upload
        ref="uploadRef1"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model="file1"
        :disabled="disabled"
        :autoUpload="autoUpload"
        @fail="handleFail"
        theme="image"
        tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u4E0A\u4F20\u6210\u529F\u72B6\u6001\u6F14\u793A\uFF09"
        accept="image/*"
      ></t-upload>

      <t-upload
        ref="uploadRef2"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        v-model="fileFail"
        :disabled="disabled"
        :autoUpload="autoUpload"
        theme="image"
        tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u4E0A\u4F20\u5931\u8D25\u72B6\u6001\u6F14\u793A\uFF09"
        accept="image/*"
        :formatResponse="formatResponse"
      ></t-upload>
    </t-space>

    <t-upload
      ref="uploadRef3"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      v-model="file2"
      :disabled="disabled"
      :autoUpload="autoUpload"
      @fail="handleFail"
      theme="image"
      tips="\u8BF7\u9009\u62E9\u5355\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF08\u81EA\u5B9A\u4E49\u9884\u89C8\u56FE\u7247\u5730\u5740\uFF09"
      accept="image/*"
      :formatResponse="formatImgResponse"
    ></t-upload>

    <t-upload
      ref="uploadRef4"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      v-model="files"
      :abridgeName="[6, 6]"
      :disabled="disabled"
      :autoUpload="autoUpload"
      :uploadAllFilesInOneRequest="uploadAllFilesInOneRequest"
      @fail="handleFail"
      theme="image"
      tips="\u5141\u8BB8\u9009\u62E9\u591A\u5F20\u56FE\u7247\u6587\u4EF6\u4E0A\u4F20\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 3 \u5F20\u56FE\u7247"
      accept="image/*"
      multiple
      :max="3"
    ></t-upload>
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      file1: [],
      file2: [{ name: 'demo-image-1.png', url: 'https://tdesign.gtimg.com/demo/demo-image-1.png' }],
      files: [],
      fileFail: [],
      disabled: false,
      uploadAllFilesInOneRequest: false,
      autoUpload: true,
    };
  },
  methods: {
    // formatResponse \u8FD4\u56DE\u540E\u7684 url \u4F18\u5148\u7EA7\u9AD8\u4E8E\u63A5\u53E3\u8FD4\u56DE\u7684 url
    formatImgResponse() {
      return { url: 'https://tdesign.gtimg.com/site/avatar.jpg' };
    },
    // \u4E00\u65E6 formatResponse \u8FD4\u56DE\u503C\u5305\u542B error\uFF0C\u4FBF\u4F1A\u88AB\u7EC4\u4EF6\u5224\u5B9A\u4E3A\u4E0A\u4F20\u5931\u8D25
    formatResponse() {
      return { error: '\u7F51\u7EDC\u5F02\u5E38\uFF0C\u56FE\u7247\u4E0A\u4F20\u5931\u8D25' };
    },
    handleFail({ file }) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
    },

    uploadFiles() {
      this.$refs.uploadRef1.uploadFiles();
      this.$refs.uploadRef2.uploadFiles();
      this.$refs.uploadRef3.uploadFiles();
      this.$refs.uploadRef4.uploadFiles();
    },
  },
};
<\/script>

<style scoped>
.tdesign-demo-upload-item {
  display: inline-block;
  margin-right: 80px;
}
.tdesign-demo-upload-item + .tdesign-demo-upload-item {
  margin-top: 80px;
}
</style>
`,Se=`<template>
  <div class="tdesign-demo-block-column-large">
    <div class="tdesign-demo-block-column">
      <div>\u662F\u5426\u81EA\u52A8\u4E0A\u4F20\uFF1A<t-switch v-model="autoUpload"></t-switch></div>
      <div>
        <t-radio-group variant="default-filled" v-model="display">
          <t-radio-button value="file">\u6587\u4EF6\u62D6\u62FD\u4E0A\u4F20</t-radio-button>
          <t-radio-button value="image">\u56FE\u7247\u62D6\u62FD\u4E0A\u4F20</t-radio-button>
        </t-radio-group>
      </div>
    </div>

    <!-- data \u8868\u793A\u4F20\u9012\u7ED9\u4E0A\u4F20\u63A5\u53E3\u7684\u989D\u5916\u6570\u636E\uFF1B\u5982\u679C\u6709\u66F4\u590D\u6742\u7684\u6570\u636E\u573A\u666F\u4F20\u9012\uFF0C\u8BF7\u4F7F\u7528 format \u65B9\u6CD5 -->
    <!-- abridgeName \u8868\u793A\u7701\u7565\u6587\u4EF6\u540D\u4E2D\u95F4\u6587\u672C\uFF0C\u4FDD\u7559\u4E24\u4FA7\u3002\u5DE6\u4FA7\u4FDD\u7559\u7684\u6587\u672C\u6570\u91CF\uFF0C\u53F3\u4FA7\u4FDD\u7559\u7684\u6587\u672C\u6570\u91CF] -->
    <t-space>
      <t-upload
        v-model="files"
        :autoUpload="autoUpload"
        :theme="display"
        :data="{ extra_data: 123, file_name: 'certificate' }"
        :abridgeName="[10, 8]"
        draggable
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :formatResponse="formatResponse"
        @cancel-upload="onCancelUpload"
        @remove="onRemove"
      />

      <t-upload
        v-model="files2"
        :autoUpload="autoUpload"
        :theme="display"
        :data="{ extra_data: 123, file_name: 'certificate' }"
        :abridgeName="[10, 8]"
        :formatResponse="formatResponse"
        draggable
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        @dragenter="onDragenter"
        @dragleave="onDragleave"
        @drop="onDrop"
      />
    </t-space>
  </div>
</template>

<script>
function getCurrentDate(needTime = false) {
  const d = new Date();
  let month = d.getMonth() + 1;
  month = month < 10 ? \`0\${month}\` : month;
  const date = \`\${d.getFullYear()}-\${month}-\${d.getDate()}\`;
  const time = \`\${d.getHours()}:\${d.getMinutes()}:\${d.getSeconds()}\`;
  if (needTime) return [date, time].join(' ');
  return date;
}

export default {
  data: () => ({
    autoUpload: true,
    display: 'file',
    files: [],
    files2: [
      {
        name: '\u9ED8\u8BA4\u6587\u4EF6',
        url: 'https://tdesign.gtimg.com/site/source/figma-pc.png',
        status: 'success',
        size: 1024,
        // \u4E0A\u4F20\u65E5\u671F\uFF0C\u5982\u679C\u63A5\u53E3\u8FD4\u56DE\u7684\u5B57\u6BB5\u5305\u542B uploadTime\uFF0C\u5219\u4F1A\u4EE5\u63A5\u53E3\u8FD4\u56DE\u7684\u4E3A\u51C6\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u672C\u5730\u7535\u8111\u65F6\u95F4\u3002
        // \u5982\u679C\u5E0C\u671B\u4F7F\u7528\u63A5\u53E3\u8FD4\u56DE\u7684\u4E0A\u4F20\u65E5\u671F\uFF0C\u4F46\u662F\u63A5\u53E3\u5B57\u6BB5\u540D\u4E0D\u662F uploadTime\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u51FD\u6570 formatResponse \u683C\u5F0F\u5316\u63A5\u53E3\u6570\u636E
        uploadTime: '2022-09-25',
      },
    ],
  }),
  methods: {
    onCancelUpload() {
      console.log('cancel upload');
    },
    onRemove() {
      console.log('remove file');
    },
    // res.url \u56FE\u7247\u5730\u5740\uFF1Bres.uploadTime \u6587\u4EF6\u4E0A\u4F20\u65F6\u95F4\uFF1Bres.error \u4E0A\u4F20\u5931\u8D25\u7684\u539F\u56E0
    formatResponse(res) {
      // \u54CD\u5E94\u7ED3\u679C\u6DFB\u52A0\u4E0A\u4F20\u65F6\u95F4\u5B57\u6BB5\uFF0C\u7528\u4E8E UI \u663E\u793A
      res.uploadTime = getCurrentDate();
      return res;
    },
    onDragenter(p) {
      console.log('dragenter', p);
    },
    onDragleave(p) {
      console.log('dragleave', p);
    },
    onDrop(p) {
      console.log('drop', p);
    },
  },
};
<\/script>
`,Oe=`<template>
  <t-space direction="vertical">
    <t-space>
      <t-checkbox v-model="disabled">\u7981\u7528\u72B6\u6001</t-checkbox>
      <t-checkbox v-model="autoUpload">\u81EA\u52A8\u4E0A\u4F20</t-checkbox>
      <t-checkbox v-model="allowUploadDuplicateFile"> \u5141\u8BB8\u4E0A\u4F20\u540C\u540D\u6587\u4EF6 </t-checkbox>
      <t-checkbox v-model="isBatchUpload"> \u6574\u4F53\u66FF\u6362\u4E0A\u4F20 </t-checkbox>
      <t-checkbox v-model="uploadAllFilesInOneRequest"> \u591A\u4E2A\u6587\u4EF6\u4E00\u4E2A\u8BF7\u6C42\u4E0A\u4F20 </t-checkbox>
    </t-space>

    <br />

    <t-upload
      v-model="files"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      placeholder="\u652F\u6301\u6279\u91CF\u4E0A\u4F20\u6587\u4EF6\uFF0C\u6587\u4EF6\u683C\u5F0F\u4E0D\u9650\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F20 10 \u4EFD\u6587\u4EF6"
      theme="file-flow"
      multiple
      :disabled="disabled"
      :auto-upload="autoUpload"
      :max="10"
      :allow-upload-duplicate-file="allowUploadDuplicateFile"
      :is-batch-upload="isBatchUpload"
      :upload-all-files-in-one-request="uploadAllFilesInOneRequest"
      @dragenter="onDragenter"
      @dragleave="onDragleave"
      @drop="onDrop"
    ></t-upload>
  </t-space>
</template>

<script>
export default {
  name: 'TUploadFileFlow',

  data() {
    return {
      max: 5,
      files: [],
      disabled: false,
      autoUpload: false,
      allowUploadDuplicateFile: false,
      isBatchUpload: false,
      uploadAllFilesInOneRequest: false,
    };
  },

  methods: {
    onDragenter(p) {
      console.log('dragenter', p);
    },
    onDragleave(p) {
      console.log('dragleave', p);
    },
    onDrop(p) {
      console.log('drop', p);
    },
  },
};
<\/script>
`,Ce=`<template>
  <t-space direction="vertical">
    <div>
      \u662F\u5426\u81EA\u52A8\u4E0A\u4F20\uFF1A
      <t-switch v-model="autoUpload" />
    </div>
    <br />
    <t-upload
      v-model="files"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      placeholder="\u652F\u6301\u6279\u91CF\u4E0A\u4F20\u56FE\u7247\u6587\u4EF6"
      theme="image-flow"
      accept="image/*"
      multiple
      :auto-upload="autoUpload"
      :max="8"
      @dragenter="onDragenter"
      @dragleave="onDragleave"
      @drop="onDrop"
    ></t-upload>
  </t-space>
</template>

<script>
export default {
  name: 'TUploadImageFlow',

  data() {
    return {
      autoUpload: false,
      files: [
        // {
        //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        //   name: 'loading.svg',
        // },
      ],
    };
  },

  methods: {
    onDragenter(p) {
      console.log('dragenter', p);
    },
    onDragleave(p) {
      console.log('dragleave', p);
    },
    onDrop(p) {
      console.log('drop', p);
    },
  },
};
<\/script>
`,Be=`<template>
  <div class="tdesign-demo-block-column-large">
    <div>
      <t-radio-group variant="default-filled" v-model="uploadMethod">
        <t-radio-button value="requestSuccessMethod">\u4E0A\u4F20\u6210\u529F\u793A\u4F8B</t-radio-button>
        <t-radio-button value="requestFailMethod">\u4E0A\u4F20\u5931\u8D25\u793A\u4F8B</t-radio-button>
      </t-radio-group>
    </div>

    <t-upload v-model="files" :requestMethod="requestMethod" tips="\u81EA\u5B9A\u4E49\u4E0A\u4F20\u65B9\u6CD5\u9700\u8981\u8FD4\u56DE\u6210\u529F\u6216\u5931\u8D25\u4FE1\u606F"></t-upload>
  </div>
</template>
<script>
/* eslint-disable no-param-reassign */
export default {
  data() {
    return {
      files: [],
      uploadMethod: 'requestSuccessMethod',
    };
  },
  computed: {
    requestMethod() {
      return this[this.uploadMethod];
    },
  },
  watch: {
    // \u5207\u6362\u4E0A\u4F20\u793A\u4F8B\u65F6\uFF0C\u91CD\u7F6E files \u6570\u636E
    uploadMethod() {
      this.files = [];
    },
  },
  methods: {
    // file \u4E3A\u7B49\u5F85\u4E0A\u4F20\u7684\u6587\u4EF6\u4FE1\u606F\uFF0C\u7528\u4E8E\u63D0\u4F9B\u7ED9\u4E0A\u4F20\u63A5\u53E3\u3002file.raw \u8868\u793A\u539F\u59CB\u6587\u4EF6
    requestSuccessMethod(file /** UploadFile */) {
      console.log(file, file.raw);
      return new Promise((resolve) => {
        // file.percent \u7528\u4E8E\u63A7\u5236\u4E0A\u4F20\u8FDB\u5EA6\uFF0C\u5982\u679C\u4E0D\u5E0C\u671B\u663E\u793A\u4E0A\u4F20\u8FDB\u5EA6\uFF0C\u5219\u4E0D\u5BF9 file.percent \u8BBE\u7F6E\u503C\u5373\u53EF\u3002
        // \u5982\u679C\u4EE3\u7801\u89C4\u8303\u4E0D\u80FD\u8BBE\u7F6E file.percent\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E this.files
        file.percent = 0;
        const timer = setTimeout(() => {
          // resolve \u53C2\u6570\u4E3A\u5173\u952E\u4EE3\u7801
          resolve({ status: 'success', response: { url: 'https://tdesign.gtimg.com/site/avatar.jpg' } });
          file.percent = 100;
          clearTimeout(timer);
        }, 500);
      });
    },
    requestFailMethod(file /** UploadFile */) {
      console.log(file);
      return new Promise((resolve) => {
        // resolve \u53C2\u6570\u4E3A\u5173\u952E\u4EE3\u7801
        resolve({ status: 'fail', error: '\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u662F\u5426\u7B26\u5408\u89C4\u8303' });
      });
    },
  },
};
<\/script>
`,Te=`<template>
  <div>
    <t-upload
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      :tips="tips"
      v-model="files"
      theme="custom"
      :beforeUpload="beforeUpload"
      multiple
      @fail="handleFail"
      @success="tips = ''"
    >
      <t-button theme="primary">\u81EA\u5B9A\u4E49\u4E0A\u4F20</t-button>
    </t-upload>
    <div v-if="files && files.length" class="list-custom">
      <ul>
        <li v-for="(item, index) in files" :key="index">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tips: '\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u5728 5M \u4EE5\u5185',
      files: [],
    };
  },
  methods: {
    handleFail({ file }) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
    },

    beforeUpload(file) {
      if (file.size > 5 * 1024 * 1024) {
        this.$message.warning('\u4E0A\u4F20\u7684\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E5M');
        return false;
      }
      return true;
    },
  },
};
<\/script>
<style scoped>
.tdesign-demo-upload .list-custom {
  font-size: 13px;
}
.tdesign-demo-upload li {
  margin: 16px 0;
}
</style>
`,Ee=`<template>
  <div class="tdesign-demo-upload t-upload">
    <t-button variant="outline" @click="upload"> <cloud-upload-icon slot="icon" />\u70B9\u51FB\u4E0A\u4F20 </t-button>
    <br /><br />
    <t-upload
      ref="upload"
      v-model="files"
      action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      draggable
      theme="custom"
      @fail="handleFail"
      @success="handleSuccess"
      @progress="onProgress"
      @dragenter="onDrop"
    >
      <template v-slot="params">
        <ul v-if="files && files.length">
          <li v-for="file in files" :key="file.name">{{ file.name }}</li>
        </ul>
        <template v-else>
          <p v-if="params && params.dragActive">\u91CA\u653E\u9F20\u6807</p>
          <t-button v-else-if="progress < 1">\u81EA\u5B9A\u4E49\u62D6\u62FD\u533A\u57DF</t-button>
        </template>
        <t-button v-if="files && files.length" size="small" style="margin-top: 36px">\u66F4\u6362\u6587\u4EF6</t-button>
        <br /><br />
        <!-- <span>\u6570\u636E\u72B6\u6001\uFF1A{{params}}</span> -->
      </template>
    </t-upload>
  </div>
</template>
<script>
import { CloudUploadIcon } from 'tdesign-icons-vue';

export default {
  components: { CloudUploadIcon },
  data() {
    return {
      files: [],
      progress: 0,
    };
  },
  methods: {
    onDrop(e) {
      const file = e.e.dataTransfer.items;
      console.log(file, 'file');
      for (let i = 0; i < file.length; i++) {
        console.log(file[i].type, 'type');
      }
    },
    handleFail({ file }) {
      this.$message.error(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u5931\u8D25\`);
    },
    handleSuccess({ file }) {
      this.$message.success(\`\u6587\u4EF6 \${file.name} \u4E0A\u4F20\u6210\u529F\`);
    },
    upload() {
      this.$refs.upload.triggerUpload();
    },
    onProgress(val) {
      console.log(val);
      this.progress = val;
    },
  },
};
<\/script>
`,fe=[{name:"allowUploadDuplicateFile",type:"Boolean",defaultValue:!1,options:[]},{name:"autoUpload",type:"Boolean",defaultValue:!0,options:[]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"draggable",type:"Boolean",defaultValue:!1,options:[]},{name:"isBatchUpload",type:"Boolean",defaultValue:!1,options:[]},{name:"method",type:"enum",defaultValue:"POST",options:[{label:"POST",value:"POST"},{label:"GET",value:"GET"},{label:"PUT",value:"PUT"},{label:"OPTION",value:"OPTION"},{label:"PATCH",value:"PATCH"},{label:"post",value:"post"},{label:"get",value:"get"},{label:"put",value:"put"},{label:"option",value:"option"},{label:"patch",value:"patch"}]},{name:"multiple",type:"Boolean",defaultValue:!1,options:[]},{name:"showUploadProgress",type:"Boolean",defaultValue:!0,options:[]},{name:"theme",type:"enum",defaultValue:"file",options:[{label:"custom",value:"custom"},{label:"file",value:"file"},{label:"file-input",value:"file-input"},{label:"file-flow",value:"file-flow"},{label:"image",value:"image"},{label:"image-flow",value:"image-flow"}]},{name:"uploadAllFilesInOneRequest",type:"Boolean",defaultValue:!1,options:[]},{name:"useMockProgress",type:"Boolean",defaultValue:!0,options:[]},{name:"withCredentials",type:"Boolean",defaultValue:!1,options:[]}],b={};b.setup=(e,a)=>{const n=i(fe),t=[{label:"upload",value:"upload"}],l={upload:'<t-upload action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" v-bind="configProps" />'},s=i(`<template>${l[t[0].value].trim()}</template>`);function _(x){s.value=`<template>${l[x].trim()}</template>`}return{configList:n,panelList:t,usageCode:s,onPanelChange:_}};var ge=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("base-usage",{attrs:{code:e.usageCode,"config-list":e.configList,"panel-list":e.panelList},on:{PanelChange:e.onPanelChange},scopedSlots:e._u([{key:"upload",fn:function(t){var l=t.configProps;return[n("t-upload",e._b({attrs:{action:"https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"}},"t-upload",l,!1))]}}])})},ve=[];const h={};var he=o(b,ge,ve,!1,be,null,null,null);function be(e){for(let a in h)this[a]=h[a]}const Ae=function(){return he.exports}();export{$e as D,Ae as U,Ue as a,Fe as b,we as c,Re as d,ze as e,ke as f,ye as g,De as h,Me as i,Ie as j,qe as k,Se as l,Oe as m,Ce as n,Be as o,Te as p,Ee as q};
