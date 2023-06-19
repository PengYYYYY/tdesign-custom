import{n as o}from"./index.7ed388d9.js";import{B as a}from"./browse.3e28c175.js";import{I as x}from"./image-error.e068f469.js";import{E as b}from"./ellipsis.2011a175.js";var f=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("div",{staticClass:"tdesign-demo-image-viewer__base"},[i("t-image-viewer",{attrs:{images:[e.img]},scopedSlots:e._u([{key:"trigger",fn:function(t){var s=t.open;return[i("div",{staticClass:"tdesign-demo-image-viewer__ui-image",on:{click:s}},[i("img",{staticClass:"tdesign-demo-image-viewer__ui-image--img",attrs:{alt:"test",src:e.img}}),i("div",{staticClass:"tdesign-demo-image-viewer__ui-image--hover"},[i("span",[i("browse-icon",{attrs:{size:"1.4em"}}),e._v(" \u9884\u89C8")],1)])])]}}]),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1)])},y=[];const $={components:{BrowseIcon:a},data(){return{img:"https://tdesign.gtimg.com/demo/demo-image-1.png",visible:!1}},methods:{onOpen(){this.visible=!0},close(){this.visible=!1}}},m={};var C=o($,f,y,!1,k,"334694a3",null,null);function k(e){for(let n in m)this[n]=m[n]}const ke=function(){return C.exports}(),I="https://tdesign.gtimg.com/demo/demo-image-1.png",z={components:{BrowseIcon:a},data(){return{img:I,visible:!1}}};var E=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"tdesign-demo-image-viewer__base"},[i("t-image-viewer",{attrs:{draggable:"",mode:"modeless",images:[e.img]},scopedSlots:e._u([{key:"trigger",fn:function(t){var s=t.open;return[i("div",{staticClass:"tdesign-demo-image-viewer__ui-image"},[i("img",{staticClass:"tdesign-demo-image-viewer__ui-image--img",attrs:{alt:"test",src:e.img}}),i("div",{staticClass:"tdesign-demo-image-viewer__ui-image--hover",on:{click:s}},[i("span",[i("browse-icon",{attrs:{size:"1.4em"}}),e._v(" \u9884\u89C8")],1)])])]}}]),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1)},j=[];const g={};var B=o(z,E,j,!1,D,"5c58d82a",null,null);function D(e){for(let n in g)this[n]=g[n]}const Ie=function(){return B.exports}(),S={data(){return this.$createElement,{visible:!1,trigger:(e,{open:n})=>e("t-button",{on:{click:n}},["\u9884\u89C8\u5355\u5F20\u56FE\u7247"])}}};var O=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("t-image-viewer",{attrs:{trigger:e.trigger,images:["https://tdesign.gtimg.com/demo/demo-image-1.png"]},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1)},F=[];const d={};var M=o(S,O,F,!1,R,null,null,null);function R(e){for(let n in d)this[n]=d[n]}const ze=function(){return M.exports}();var q=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",e._l(e.images,function(t,s){return i("t-image-viewer",{key:t,attrs:{"default-index":s,images:e.images},scopedSlots:e._u([{key:"trigger",fn:function(r){var w=r.open;return[i("div",{staticClass:"tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base"},[i("img",{staticClass:"tdesign-demo-image-viewer__ui-image--img",attrs:{alt:"test",src:t}}),i("div",{staticClass:"tdesign-demo-image-viewer__ui-image--hover",on:{click:w}},[i("span",[i("browse-icon",{attrs:{size:"1.4em"}}),e._v(" \u9884\u89C8")],1)])])]}}],null,!0)})}),1)},A=[];const G="https://tdesign.gtimg.com/demo/demo-image-3.png",H="https://tdesign.gtimg.com/demo/demo-image-2.png",J="https://tdesign.gtimg.com/demo/demo-image-1.png",K=[J,H,G],L={components:{BrowseIcon:a},data(){return{images:K}}},l={};var N=o(L,q,A,!1,P,"54695892",null,null);function P(e){for(let n in l)this[n]=l[n]}const Ee=function(){return N.exports}();var Q=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"tdesign-demo-image-viewer__base"},[i("t-image-viewer",{attrs:{images:e.images,title:e.title},scopedSlots:e._u([{key:"trigger",fn:function(t){var s=t.open;return[i("div",{staticClass:"tdesign-demo-image-viewer__ui-image"},[i("img",{staticClass:"tdesign-demo-image-viewer__ui-image--img",attrs:{alt:"test",src:e.img1}}),i("div",{staticClass:"tdesign-demo-image-viewer__ui-image--hover",on:{click:s}},[i("span",[i("browse-icon",{attrs:{size:"1.4em"}}),e._v(" \u9884\u89C8")],1)]),i("div",{staticClass:"tdesign-demo-image-viewer__ui-image--footer"},[i("span",{staticClass:"tdesign-demo-image-viewer__ui-image--title"},[e._v(e._s(e.title))])])])]}}]),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1)},T=[];const U="https://tdesign.gtimg.com/demo/demo-image-3.png",V="https://tdesign.gtimg.com/demo/demo-image-2.png",c="https://tdesign.gtimg.com/demo/demo-image-1.png",W={components:{BrowseIcon:a},data(){return{visible:!1,img1:c,images:[c,V,U],title:"\u76F8\u518C\u5C01\u9762\u6807\u9898"}}},p={};var X=o(W,Q,T,!1,Y,"e4212236",null,null);function Y(e){for(let n in p)this[n]=p[n]}const je=function(){return X.exports}(),Z="https://tdesign.gtimg.com/demo/demo-image-1.png",ee=[{mainImage:"https://tdesign.gtimg.com/demo/demo-image-2.png",thumbnail:"https://tdesign.gtimg.com/demo/demo-image-1.png"}],ie={data(){return this.$createElement,{images:ee,trigger:(e,{open:n})=>e("div",{class:"tdesign-demo-image-viewer__ui-image"},[e("img",{attrs:{alt:"test",src:Z},class:"tdesign-demo-image-viewer__ui-image--img"}),e("div",{class:"tdesign-demo-image-viewer__ui-image--hover",on:{click:n}},[e("span",[e(a,{attrs:{size:"1.4em"}})," \u9884\u89C8"])])])}}};var ne=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("div",{staticClass:"tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base"},[i("t-image-viewer",{attrs:{trigger:e.trigger,images:e.images}})],1),i("div",{staticClass:"tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base"},[i("t-image-viewer",{attrs:{images:[e.images[0].mainImage],trigger:e.trigger}})],1)])},te=[];const v={};var se=o(ie,ne,te,!1,oe,null,null,null);function oe(e){for(let n in v)this[n]=v[n]}const Be=function(){return se.exports}();var ae=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"tdesign-demo-image-viewer-wrapper"},e._l(e.images,function(t,s){return i("div",{key:s},[e.isError[s]?i("div",{staticClass:"tdesign-demo-image-viewer__error tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base"},[i("div",{staticClass:"tdesign-demo-image-viewer__error-content"},[i("image-error-icon",{attrs:{name:"image-error",size:"2em"}}),i("div",[e._v("\u56FE\u7247\u65E0\u6CD5\u663E\u793A")])],1)]):i("t-image-viewer",{attrs:{visible:e.visible[s],images:e.images,"default-index":s},on:{close:function(r){return e.onClose(s)}},scopedSlots:e._u([{key:"trigger",fn:function(){return[i("div",{staticClass:"tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base"},[i("img",{staticClass:"tdesign-demo-image-viewer__ui-image--img",attrs:{alt:"test",src:t},on:{error:function(r){return e.onError(s)}}}),i("div",{staticClass:"tdesign-demo-image-viewer__ui-image--hover",on:{click:function(r){return e.onOpen(s)}}},[i("span",[i("browse-icon",{attrs:{size:"1.4em"}}),e._v(" \u9884\u89C8")],1)])])]},proxy:!0}],null,!0)})],1)}),0)},re=[];const me="https://tdesign.gtimg.com/demo/demo-image-1.png",ge=[me,"https://tdesign.gtimg.com/demo/demo-image-error1.png","https://tdesign.gtimg.com/demo/demo-image-error2.png","https://tdesign.gtimg.com/demo/demo-image-error3.png"],de={components:{BrowseIcon:a,ImageErrorIcon:x},data(){return{images:ge,visible:[!1,!1,!1,!1],isError:[!1,!1,!1,!1]}},methods:{onOpen(e){this.visible=this.visible.map((n,i)=>i===e?!0:n)},onClose(e){this.visible=this.visible.map((n,i)=>i===e?!1:n)},onError(e){this.isError[e]=!0,this.isError=this.isError.map((n,i)=>i===e?!0:n)}}},_={};var le=o(de,ae,re,!1,ce,"4416e328",null,null);function ce(e){for(let n in _)this[n]=_[n]}const De=function(){return le.exports}();var pe=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"tdesign-demo-image-viewer__base"},[i("t-image-viewer",{attrs:{title:e.title,images:e.images,index:e.index},on:{"index-change":e.onIndexChange},scopedSlots:e._u([{key:"trigger",fn:function(){return[i("div",{staticClass:"tdesign-demo-image-viewer__ui-image"},[i("img",{staticClass:"tdesign-demo-image-viewer__ui-image--img",attrs:{alt:"test",src:e.img1}}),i("div",{staticClass:"tdesign-demo-image-viewer__ui-image--hover",on:{click:e.onOpen}},[i("span",[i("browse-icon",{attrs:{size:"1.4em"}}),e._v(" \u9884\u89C8 ")],1)]),i("div",{staticClass:"tdesign-demo-image-viewer__ui-image--footer"},[i("span",{staticClass:"tdesign-demo-image-viewer__ui-image--title"},[e._v(e._s(e.title))]),i("span",{staticClass:"tdesign-demo-image-viewer__ui-image--icons"},[i("browse-icon",{on:{click:e.onOpen}}),i("t-popup",{attrs:{trigger:"hover",placement:"right-bottom","overlay-style":{width:"140px",padding:"6px"},"destroy-on-close":"",zIndex:1e3},scopedSlots:e._u([{key:"content",fn:function(){return[i("ul",{staticClass:"tdesign-demo-select__list"},e._l(e.images,function(t,s){return i("li",{key:s,staticClass:"tdesign-demo-selectdesign-demo-option",on:{click:function(r){return e.onOpen(s)}}},[i("span",[e._v("\u56FE\u7247"+e._s(s+1))])])}),0)]},proxy:!0}])},[i("ellipsis-icon",{staticClass:"tdesign-demo-image-viewer__ui-image--ellipsis"})],1)],1)])])]},proxy:!0}]),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1)},ve=[];const _e="https://tdesign.gtimg.com/demo/demo-image-3.png",ue="https://tdesign.gtimg.com/demo/demo-image-2.png",h="https://tdesign.gtimg.com/demo/demo-image-1.png",he=[h,ue,_e],we={components:{BrowseIcon:a,EllipsisIcon:b},data(){return{images:he,index:0,visible:!1,img1:h,title:"\u76F8\u518C\u5C01\u9762\u6807\u9898"}},methods:{onIndexChange(e){this.index=e},onOpen(e){typeof e=="number"&&this.onIndexChange(e),this.visible=!0}}},u={};var xe=o(we,pe,ve,!1,be,"f5ac4430",null,null);function be(e){for(let n in u)this[n]=u[n]}const Se=function(){return xe.exports}(),Oe=`<template>
  <div>
    <div class="tdesign-demo-image-viewer__base">
      <t-image-viewer v-model="visible" :images="[img]">
        <template #trigger="{ open }">
          <div class="tdesign-demo-image-viewer__ui-image" @click="open">
            <img alt="test" :src="img" class="tdesign-demo-image-viewer__ui-image--img" />
            <div class="tdesign-demo-image-viewer__ui-image--hover">
              <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
            </div>
          </div>
        </template>
      </t-image-viewer>
    </div>
  </div>
</template>
<script>
import { BrowseIcon } from 'tdesign-icons-vue';

export default {
  components: {
    BrowseIcon,
  },
  data() {
    return {
      img: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
      visible: false,
    };
  },
  methods: {
    onOpen() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
  },
};
<\/script>
<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 160px;
  height: 160px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,Fe=`<template>
  <div class="tdesign-demo-image-viewer__base">
    <t-image-viewer v-model="visible" draggable mode="modeless" :images="[img]">
      <template #trigger="{ open }">
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" :src="img" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
            <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script lang="jsx">
import { BrowseIcon } from 'tdesign-icons-vue';

const img = 'https://tdesign.gtimg.com/demo/demo-image-1.png';

export default {
  components: {
    BrowseIcon,
  },
  data() {
    return {
      img,
      visible: false,
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 160px;
  height: 160px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,Me=`<template>
  <div>
    <t-image-viewer v-model="visible" :trigger="trigger" :images="['https://tdesign.gtimg.com/demo/demo-image-1.png']">
    </t-image-viewer>
  </div>
</template>

<script lang="jsx">
export default {
  data() {
    return {
      visible: false,
      trigger: (h, { open }) => <t-button onClick={open}>\u9884\u89C8\u5355\u5F20\u56FE\u7247</t-button>,
    };
  },
};
<\/script>
`,Re=`<template>
  <div>
    <t-image-viewer v-for="(img, index) in images" :key="img" :default-index="index" :images="images">
      <template #trigger="{ open }">
        <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
          <img alt="test" :src="img" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
            <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script>
import { BrowseIcon } from 'tdesign-icons-vue';

const img3 = 'https://tdesign.gtimg.com/demo/demo-image-3.png';
const img2 = 'https://tdesign.gtimg.com/demo/demo-image-2.png';
const img1 = 'https://tdesign.gtimg.com/demo/demo-image-1.png';

const images = [img1, img2, img3];
export default {
  components: {
    BrowseIcon,
  },
  data() {
    return {
      images,
    };
  },
};
<\/script>
<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,qe=`<template>
  <div class="tdesign-demo-image-viewer__base">
    <t-image-viewer v-model="visible" :images="images" :title="title">
      <template #trigger="{ open }">
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" :src="img1" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="open">
            <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
          </div>
          <div class="tdesign-demo-image-viewer__ui-image--footer">
            <span class="tdesign-demo-image-viewer__ui-image--title">{{ title }}</span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script>
import { BrowseIcon } from 'tdesign-icons-vue';

const img3 = 'https://tdesign.gtimg.com/demo/demo-image-3.png';
const img2 = 'https://tdesign.gtimg.com/demo/demo-image-2.png';
const img1 = 'https://tdesign.gtimg.com/demo/demo-image-1.png';

export default {
  components: {
    BrowseIcon,
  },
  data() {
    return {
      visible: false,
      img1,
      images: [img1, img2, img3],
      title: '\u76F8\u518C\u5C01\u9762\u6807\u9898',
    };
  },
};
<\/script>

<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 240px;
  height: 240px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 240px;
  height: 240px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,Ae=`<template>
  <div>
    <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
      <t-image-viewer :trigger="trigger" :images="images"> </t-image-viewer>
    </div>
    <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
      <t-image-viewer :images="[images[0].mainImage]" :trigger="trigger"> </t-image-viewer>
    </div>
  </div>
</template>

<script lang="jsx">
import { BrowseIcon } from 'tdesign-icons-vue';

const img = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
const images = [
  {
    mainImage: 'https://tdesign.gtimg.com/demo/demo-image-2.png',
    thumbnail: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
  },
];

export default {
  data() {
    return {
      images,
      trigger: (h, { open }) => (
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" src={img} class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" onClick={open}>
            <span>
              <BrowseIcon size="1.4em" /> \u9884\u89C8
            </span>
          </div>
        </div>
      ),
    };
  },
};
<\/script>

<style>
.tdesign-demo-image-viewer__ui-image {
  width: 160px;
  height: 160px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,Ge=`<template>
  <div class="tdesign-demo-image-viewer-wrapper">
    <div v-for="(image, index) in images" :key="index">
      <div
        v-if="isError[index]"
        class="tdesign-demo-image-viewer__error tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base"
      >
        <div class="tdesign-demo-image-viewer__error-content">
          <image-error-icon name="image-error" size="2em" />
          <div>\u56FE\u7247\u65E0\u6CD5\u663E\u793A</div>
        </div>
      </div>
      <t-image-viewer v-else :visible="visible[index]" :images="images" :default-index="index" @close="onClose(index)">
        <template #trigger>
          <div class="tdesign-demo-image-viewer__ui-image tdesign-demo-image-viewer__base">
            <img alt="test" :src="image" class="tdesign-demo-image-viewer__ui-image--img" @error="onError(index)" />
            <div class="tdesign-demo-image-viewer__ui-image--hover" @click="onOpen(index)">
              <span><browse-icon size="1.4em" /> \u9884\u89C8</span>
            </div>
          </div>
        </template>
      </t-image-viewer>
    </div>
  </div>
</template>

<script>
import { BrowseIcon, ImageErrorIcon } from 'tdesign-icons-vue';

const img = 'https://tdesign.gtimg.com/demo/demo-image-1.png';

const images = [
  img,
  'https://tdesign.gtimg.com/demo/demo-image-error1.png',
  'https://tdesign.gtimg.com/demo/demo-image-error2.png',
  'https://tdesign.gtimg.com/demo/demo-image-error3.png',
];

export default {
  components: {
    BrowseIcon,
    ImageErrorIcon,
  },
  data() {
    return {
      images,
      visible: [false, false, false, false],
      isError: [false, false, false, false],
    };
  },
  methods: {
    onOpen(index) {
      this.visible = this.visible.map((item, i) => {
        if (i === index) return true;
        return item;
      });
    },
    onClose(index) {
      this.visible = this.visible.map((item, i) => {
        if (i === index) return false;
        return item;
      });
    },
    onError(index) {
      this.isError[index] = true;
      this.isError = this.isError.map((item, i) => {
        if (i === index) {
          return true;
        }
        return item;
      });
    },
  },
};
<\/script>

<style scoped>
.tdesign-demo-image-viewer-wrapper {
  display: flex;
}
.tdesign-demo-image-viewer__ui-image {
  width: 100%;
  height: 100%;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__error {
  background-color: var(--td-bg-color-component-disabled);
  border-radius: 4px;
  color: var(--td-text-color-disabled);
  cursor: inherit;
}

.tdesign-demo-image-viewer__error-content {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 14px;
}

.tdesign-demo-image-viewer__base {
  width: 160px;
  height: 160px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`,He=`<template>
  <div class="tdesign-demo-image-viewer__base">
    <t-image-viewer v-model="visible" :title="title" :images="images" :index="index" @index-change="onIndexChange">
      <template #trigger>
        <div class="tdesign-demo-image-viewer__ui-image">
          <img alt="test" :src="img1" class="tdesign-demo-image-viewer__ui-image--img" />
          <div class="tdesign-demo-image-viewer__ui-image--hover" @click="onOpen">
            <span> <browse-icon size="1.4em" /> \u9884\u89C8 </span>
          </div>
          <div class="tdesign-demo-image-viewer__ui-image--footer">
            <span class="tdesign-demo-image-viewer__ui-image--title">{{ title }}</span>
            <span class="tdesign-demo-image-viewer__ui-image--icons">
              <browse-icon @click="onOpen" />
              <t-popup
                trigger="hover"
                placement="right-bottom"
                :overlay-style="{ width: '140px', padding: '6px' }"
                destroy-on-close
                :zIndex="1000"
              >
                <template #content>
                  <ul class="tdesign-demo-select__list">
                    <li
                      v-for="(image, i) in images"
                      :key="i"
                      class="tdesign-demo-selectdesign-demo-option"
                      @click="onOpen(i)"
                    >
                      <span>\u56FE\u7247{{ i + 1 }}</span>
                    </li>
                  </ul>
                </template>
                <ellipsis-icon class="tdesign-demo-image-viewer__ui-image--ellipsis" />
              </t-popup>
            </span>
          </div>
        </div>
      </template>
    </t-image-viewer>
  </div>
</template>

<script>
import { BrowseIcon, EllipsisIcon } from 'tdesign-icons-vue';

const img3 = 'https://tdesign.gtimg.com/demo/demo-image-3.png';
const img2 = 'https://tdesign.gtimg.com/demo/demo-image-2.png';
const img1 = 'https://tdesign.gtimg.com/demo/demo-image-1.png';
const images = [img1, img2, img3];

export default {
  components: {
    BrowseIcon,
    EllipsisIcon,
  },
  data() {
    return {
      images,
      index: 0,
      visible: false,
      img1,
      title: '\u76F8\u518C\u5C01\u9762\u6807\u9898',
    };
  },
  methods: {
    onIndexChange(i) {
      this.index = i;
    },
    onOpen(i) {
      typeof i === 'number' && this.onIndexChange(i);
      this.visible = true;
    },
  },
};
<\/script>

<style scoped>
.tdesign-demo-image-viewer__ui-image {
  width: 240px;
  height: 240px;
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: var(--td-radius-small);
  overflow: hidden;
}

.tdesign-demo-image-viewer__ui-image--hover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--td-text-color-anti);
  line-height: 22px;
  transition: 0.2s;
}

.tdesign-demo-image-viewer__ui-image:hover .tdesign-demo-image-viewer__ui-image--hover {
  opacity: 1;
  cursor: pointer;
}

.tdesign-demo-image-viewer__ui-image--img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  position: absolute;
}

.tdesign-demo-image-viewer__ui-image--footer {
  padding: 0 16px;
  height: 56px;
  width: 100%;
  line-height: 56px;
  font-size: 16px;
  position: absolute;
  bottom: 0;
  color: var(--td-text-color-anti);
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  box-sizing: border-box;
}

.tdesign-demo-image-viewer__ui-image--title {
  flex: 1;
}

.tdesign-demo-popup__reference {
  margin-left: 16px;
}

.tdesign-demo-image-viewer__ui-image--icons .tdesign-demo-icon {
  cursor: pointer;
}

.tdesign-demo-image-viewer__base {
  width: 240px;
  height: 240px;
  margin: 10px;
  border: 4px solid var(--td-bg-color-secondarycontainer);
  border-radius: var(--td-radius-medium);
}
</style>
`;export{ke as D,Ie as a,ze as b,Ee as c,je as d,Be as e,De as f,Se as g,Oe as h,Fe as i,Me as j,Re as k,qe as l,Ae as m,Ge as n,He as o};
