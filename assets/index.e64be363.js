import{C as c}from"./chevron-down.5b52dfe8.js";import{n as o,V as C,r}from"./index.ba4b8fbd.js";import{M as x}from"./plugin.a82fe062.js";const k={components:{ChevronDownIcon:c},data(){return{options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2},{content:"\u64CD\u4F5C\u4E09",value:3},{content:this.getContent,value:4}]}},methods:{clickHandler(n){this.$message.success(`\u9009\u4E2D\u3010${n.value}\u3011`)},getContent(){const n=this.$createElement;return n("div",["\u64CD\u4F5C\u56DB"])}}};var y=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tdesign-demo-dropdown"},[e("t-dropdown",{attrs:{options:n.options},on:{click:n.clickHandler}},[e("t-button",{attrs:{variant:"text"}},[e("span",{staticClass:"tdesign-demo-dropdown__text"},[n._v(" \u66F4\u591A "),e("chevron-down-icon",{attrs:{size:"16"}})],1)])],1)],1)},D=[];const i={};var H=o(k,y,D,!1,M,"6ca75e49",null,null);function M(n){for(let t in i)this[t]=i[t]}const Dn=function(){return H.exports}();var j=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("t-dropdown",{attrs:{options:n.options},on:{click:n.clickHandler}},[e("t-button",{attrs:{theme:"default",variant:"outline",shape:"square"}},[e("t-icon",{attrs:{name:"ellipsis",size:"16"}})],1)],1)],1)},I=[];const E={data(){return{options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2},{content:"\u64CD\u4F5C\u4E09",value:3},{content:"\u64CD\u4F5C\u56DB",value:4}]}},methods:{clickHandler(n){this.$message.success(`\u9009\u4E2D\u3010${n.content}\u3011`)}}},u={};var F=o(E,j,I,!1,P,"2ba396a0",null,null);function P(n){for(let t in u)this[t]=u[t]}const Hn=function(){return F.exports}();var S=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("t-dropdown",{attrs:{options:n.options}},[e("t-button",{attrs:{theme:"default",variant:"outline"}},[n._v("\u4E0B\u62C9\u83DC\u5355")])],1)],1)},R=[];const z={data(){return{options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2},{content:"\u64CD\u4F5C\u4E09",value:3,divider:!0},{content:"\u64CD\u4F5C\u56DB",value:4}]}}},d={};var V=o(z,S,R,!1,W,"5d09ff18",null,null);function W(n){for(let t in d)this[t]=d[t]}const Mn=function(){return V.exports}();var A=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tdesign-demo-dropdown"},[e("t-dropdown",{attrs:{options:n.options,maxColumnWidth:120,maxHeight:200},on:{click:n.clickHandler}},[e("t-button",{attrs:{variant:"text"}},[n._v(" \u4E0B\u62C9\u83DC\u5355 "),e("chevron-down-icon",{attrs:{slot:"suffix",size:"16"},slot:"suffix"})],1)],1)],1)},L=[];const q={components:{ChevronDownIcon:c},data(){return{options:[{content:"\u64CD\u4F5C\u4E00",value:1,children:[{content:"\u64CD\u4F5C\u4E5D",value:9}]},{content:"\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C",value:2,children:[{content:"\u64CD\u4F5C\u4E94",value:5},{content:"\u64CD\u4F5C\u516D",value:6}]},{content:"\u64CD\u4F5C\u4E09",value:3,children:[{content:"\u64CD\u4F5C\u5341",value:10}]},{content:"\u64CD\u4F5C\u56DB",value:4,children:[{content:"\u64CD\u4F5C\u5341\u4E00",value:11}]},{content:"\u64CD\u4F5C\u4E94",value:5,children:[{content:"\u64CD\u4F5C\u5341\u4E8C",value:12}]},{content:"\u64CD\u4F5C\u516D",value:6,children:[{content:"\u64CD\u4F5C\u5341\u4E09",value:13}]},{content:"\u64CD\u4F5C\u4E03",value:7},{content:"\u64CD\u4F5C\u516B",value:8},{content:"\u64CD\u4F5C\u5341\u516B",value:18,children:[{content:"\u64CD\u4F5C\u5341\u56DB",value:14},{content:"\u64CD\u4F5C\u5341\u4E94",value:15},{content:"\u64CD\u4F5C\u5341\u516D",value:16,children:[{content:"\u4E09\u7EA7\u64CD\u4F5C\u4E00",value:20},{content:"\u4E09\u7EA7\u64CD\u4F5C\u4E8C",value:21}]},{content:"\u64CD\u4F5C\u5341\u4E03",value:17}]}]}},methods:{clickHandler(n,t){console.log(n),console.log(t)}}},v={};var B=o(q,A,L,!1,U,null,null,null);function U(n){for(let t in v)this[t]=v[t]}const jn=function(){return B.exports}();var J=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tdesign-demo-dropdown"},[e("t-dropdown",{attrs:{options:n.options}},[e("t-button",{attrs:{variant:"text"}},[e("span",{staticClass:"tdesign-demo-dropdown__text"},[n._v(" \u4E0B\u62C9\u83DC\u5355 "),e("chevron-down-icon",{attrs:{slot:"suffix",size:"16"},slot:"suffix"})],1)])],1)],1)},G=[];const K=C.extend({components:{ChevronDownIcon:c},data(){return{options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2},{content:"\u64CD\u4F5C\u4E09",value:3,disabled:!0},{content:"\u64CD\u4F5C\u56DB",value:4,disabled:!0}]}}}),p={};var N=o(K,J,G,!1,O,null,null,null);function O(n){for(let t in p)this[t]=p[t]}const In=function(){return N.exports}();var Q=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("t-dropdown",{attrs:{options:n.options,placement:"top-left",trigger:"click",hideAfterItemClick:!1,minColumnWidth:100}},[e("t-button",{attrs:{variant:"text"}},[n._v("\u4E0B\u62C9\u83DC\u5355")])],1)],1)},T=[];const X={data(){return{options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2,children:[{content:"\u64CD\u4F5C\u4E94",value:5},{content:"\u64CD\u4F5C\u516D",value:6}]},{content:"\u64CD\u4F5C\u4E09",value:3},{content:"\u64CD\u4F5C\u56DB",value:4}]}}},_={};var Y=o(X,Q,T,!1,Z,"128776f2",null,null);function Z(n){for(let t in _)this[t]=_[t]}const En=function(){return Y.exports}();var nn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("t-dropdown",{attrs:{options:n.options,maxHeight:400,minColumnWidth:88}},[e("t-button",{attrs:{variant:"text"}},[n._v("\u4E0B\u62C9\u83DC\u5355")])],1)],1)},tn=[];const en={data(){return{options:Array.from({length:20}).map((t,e)=>({content:`\u64CD\u4F5C${e+1}`,value:e+1}))}}},m={};var on=o(en,nn,tn,!1,an,"569e60cb",null,null);function an(n){for(let t in m)this[t]=m[t]}const Fn=function(){return on.exports}();var ln=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("t-space",{staticClass:"tdesign-demo-dropdown"},[e("t-dropdown",{attrs:{options:n.options},on:{click:n.clickHandler}},[e("t-button",{attrs:{variant:"text"}},[n._v(" \u4E0B\u62C9\u83DC\u5355 ")])],1)],1)},cn=[];const sn=[{content:"\u9009\u9879\u4E00",value:1,children:[{content:"\u9009\u9879\u4E5D",value:9}]},{content:"\u9009\u9879\u4E8C",value:3,children:[{content:"\u9009\u9879\u5341",value:10}]},{content:"\u5371\u9669\u64CD\u4F5C",value:4,theme:"error",children:[{content:"\u5371\u9669\u64CD\u4F5C\u4E00",value:11,theme:"error",children:[{content:"\u5371\u9669\u64CD\u4F5C\u9879",value:13,theme:"error"},{content:"\u64CD\u4F5C\u9879",value:12}]}]}],rn={data(){return{options:sn}},methods:{clickHandler(n){x.success(`\u9009\u4E2D\u3010${n.content}\u3011`)}}},h={};var un=o(rn,ln,cn,!1,dn,null,null,null);function dn(n){for(let t in h)this[t]=h[t]}const Pn=function(){return un.exports}();var vn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("t-space",[e("t-dropdown",{attrs:{options:n.options,"max-column-width":120,direction:"left"},on:{click:n.clickHandler}},[e("t-button",{attrs:{variant:"text"}},[n._v(" \u4E0B\u62C9\u83DC\u5355 ")])],1)],1)},pn=[];const _n=[{content:"\u9009\u9879\u4E00",value:1,children:[{content:"\u9009\u9879\u4E5D",value:9}]},{content:"\u9009\u9879\u4E8C",value:2,children:[{content:"\u9009\u9879\u4E94",value:5},{content:"\u9009\u9879\u516D",value:6,children:[{content:"\u9009\u9879\u4E03",value:7},{content:"\u9009\u9879\u516B",value:8}]}]},{content:"\u9009\u9879\u4E09",value:3,children:[{content:"\u9009\u9879\u5341",value:10}]}],mn={data(){return{options:_n}},methods:{clickHandler(n){x.success(`\u9009\u4E2D\u3010${n.content}\u3011`)}}},f={};var hn=o(mn,vn,pn,!1,fn,null,null,null);function fn(n){for(let t in f)this[t]=f[t]}const Sn=function(){return hn.exports}(),Rn=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler">
      <t-button variant="text">
        <span class="tdesign-demo-dropdown__text">
          \u66F4\u591A
          <chevron-down-icon size="16" />
        </span>
      </t-button>
    </t-dropdown>
  </div>
</template>
<script lang="jsx">
import { ChevronDownIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
        },
        {
          content: this.getContent,
          value: 4,
        },
      ],
    };
  },
  methods: {
    clickHandler(data) {
      this.$message.success(\`\u9009\u4E2D\u3010\${data.value}\u3011\`);
    },
    getContent() {
      return <div>\u64CD\u4F5C\u56DB</div>;
    },
  },
};
<\/script>
<style lang="less" scoped>
.tdesign-demo-dropdown {
  &__text {
    display: inline-flex;
    align-items: center;
    .t-icon {
      margin-left: 8px;
    }
  }
}
</style>
`,zn=`<template>
  <div>
    <t-dropdown :options="options" @click="clickHandler">
      <t-button theme="default" variant="outline" shape="square">
        <t-icon name="ellipsis" size="16" />
      </t-button>
    </t-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
        },
      ],
    };
  },
  methods: {
    clickHandler(data) {
      this.$message.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,Vn=`<template>
  <div>
    <t-dropdown :options="options">
      <t-button theme="default" variant="outline">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
          divider: true,
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
        },
      ],
    };
  },
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,Wn=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler" :maxColumnWidth="120" :maxHeight="200">
      <t-button variant="text">
        \u4E0B\u62C9\u83DC\u5355
        <chevron-down-icon size="16" slot="suffix" />
      </t-button>
    </t-dropdown>
  </div>
</template>
<script>
import { ChevronDownIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
          children: [
            {
              content: '\u64CD\u4F5C\u4E5D',
              value: 9,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C\u64CD\u4F5C\u4E8C',
          value: 2,
          children: [
            {
              content: '\u64CD\u4F5C\u4E94',
              value: 5,
            },
            {
              content: '\u64CD\u4F5C\u516D',
              value: 6,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
          children: [
            {
              content: '\u64CD\u4F5C\u5341',
              value: 10,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
          children: [
            {
              content: '\u64CD\u4F5C\u5341\u4E00',
              value: 11,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u4E94',
          value: 5,
          children: [
            {
              content: '\u64CD\u4F5C\u5341\u4E8C',
              value: 12,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u516D',
          value: 6,
          children: [
            {
              content: '\u64CD\u4F5C\u5341\u4E09',
              value: 13,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u4E03',
          value: 7,
        },
        {
          content: '\u64CD\u4F5C\u516B',
          value: 8,
        },
        {
          content: '\u64CD\u4F5C\u5341\u516B',
          value: 18,
          children: [
            {
              content: '\u64CD\u4F5C\u5341\u56DB',
              value: 14,
            },
            {
              content: '\u64CD\u4F5C\u5341\u4E94',
              value: 15,
            },
            {
              content: '\u64CD\u4F5C\u5341\u516D',
              value: 16,
              children: [
                {
                  content: '\u4E09\u7EA7\u64CD\u4F5C\u4E00',
                  value: 20,
                },
                {
                  content: '\u4E09\u7EA7\u64CD\u4F5C\u4E8C',
                  value: 21,
                },
              ],
            },
            {
              content: '\u64CD\u4F5C\u5341\u4E03',
              value: 17,
            },
          ],
        },
      ],
    };
  },
  methods: {
    clickHandler(data, context) {
      console.log(data);
      console.log(context);
    },
  },
};
<\/script>
`,An=`<template>
  <div class="tdesign-demo-dropdown">
    <t-dropdown :options="options">
      <t-button variant="text">
        <span class="tdesign-demo-dropdown__text">
          \u4E0B\u62C9\u83DC\u5355
          <chevron-down-icon size="16" slot="suffix" />
        </span>
      </t-button>
    </t-dropdown>
  </div>
</template>
<script>
import Vue from 'vue';
import { ChevronDownIcon } from 'tdesign-icons-vue';

export default Vue.extend({
  components: {
    ChevronDownIcon,
  },
  data() {
    return {
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
        },
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
          disabled: true,
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
          disabled: true,
        },
      ],
    };
  },
});
<\/script>
`,Ln=`<template>
  <div>
    <t-dropdown
      :options="options"
      placement="top-left"
      trigger="click"
      :hideAfterItemClick="false"
      :minColumnWidth="100"
    >
      <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          content: '\u64CD\u4F5C\u4E00',
          value: 1,
        },
        {
          content: '\u64CD\u4F5C\u4E8C',
          value: 2,
          children: [
            {
              content: '\u64CD\u4F5C\u4E94',
              value: 5,
            },
            {
              content: '\u64CD\u4F5C\u516D',
              value: 6,
            },
          ],
        },
        {
          content: '\u64CD\u4F5C\u4E09',
          value: 3,
        },
        {
          content: '\u64CD\u4F5C\u56DB',
          value: 4,
        },
      ],
    };
  },
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,qn=`<template>
  <div>
    <t-dropdown :options="options" :maxHeight="400" :minColumnWidth="88">
      <t-button variant="text">\u4E0B\u62C9\u83DC\u5355</t-button>
    </t-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    const options = Array.from({ length: 20 }).map((v, k) => ({
      content: \`\u64CD\u4F5C\${k + 1}\`,
      value: k + 1,
    }));
    return {
      options,
    };
  },
};
<\/script>
<style scoped>
.t-button {
  margin-right: 20px;
}
</style>
`,Bn=`<template>
  <t-space class="tdesign-demo-dropdown">
    <t-dropdown :options="options" @click="clickHandler">
      <t-button variant="text"> \u4E0B\u62C9\u83DC\u5355 </t-button>
    </t-dropdown>
  </t-space>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

const options = [
  {
    content: '\u9009\u9879\u4E00',
    value: 1,
    children: [
      {
        content: '\u9009\u9879\u4E5D',
        value: 9,
      },
    ],
  },
  {
    content: '\u9009\u9879\u4E8C',
    value: 3,
    children: [
      {
        content: '\u9009\u9879\u5341',
        value: 10,
      },
    ],
  },
  {
    content: '\u5371\u9669\u64CD\u4F5C',
    value: 4,
    theme: 'error',
    children: [
      {
        content: '\u5371\u9669\u64CD\u4F5C\u4E00',
        value: 11,
        theme: 'error',
        children: [
          {
            content: '\u5371\u9669\u64CD\u4F5C\u9879',
            value: 13,
            theme: 'error',
          },
          {
            content: '\u64CD\u4F5C\u9879',
            value: 12,
          },
        ],
      },
    ],
  },
];

export default {
  data() {
    return {
      options,
    };
  },
  methods: {
    clickHandler(data) {
      MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
`,Un=`<template>
  <t-space>
    <t-dropdown :options="options" :max-column-width="120" direction="left" @click="clickHandler">
      <t-button variant="text"> \u4E0B\u62C9\u83DC\u5355 </t-button>
    </t-dropdown>
  </t-space>
</template>
<script>
import { MessagePlugin } from 'tdesign-vue';

const options = [
  {
    content: '\u9009\u9879\u4E00',
    value: 1,
    children: [
      {
        content: '\u9009\u9879\u4E5D',
        value: 9,
      },
    ],
  },
  {
    content: '\u9009\u9879\u4E8C',
    value: 2,
    children: [
      {
        content: '\u9009\u9879\u4E94',
        value: 5,
      },
      {
        content: '\u9009\u9879\u516D',
        value: 6,
        children: [
          {
            content: '\u9009\u9879\u4E03',
            value: 7,
          },
          {
            content: '\u9009\u9879\u516B',
            value: 8,
          },
        ],
      },
    ],
  },
  {
    content: '\u9009\u9879\u4E09',
    value: 3,
    children: [
      {
        content: '\u9009\u9879\u5341',
        value: 10,
      },
    ],
  },
];

export default {
  data() {
    return {
      options,
    };
  },
  methods: {
    clickHandler(data) {
      MessagePlugin.success(\`\u9009\u4E2D\u3010\${data.content}\u3011\`);
    },
  },
};
<\/script>
`,gn=[{name:"direction",type:"enum",defaultValue:"right",options:[{label:"left",value:"left"},{label:"right",value:"right"}]},{name:"disabled",type:"Boolean",defaultValue:!1,options:[]},{name:"hideAfterItemClick",type:"Boolean",defaultValue:!0,options:[]},{name:"placement",type:"enum",defaultValue:"bottom-left",options:[{label:"top",value:"top"},{label:"left",value:"left"},{label:"right",value:"right"},{label:"bottom",value:"bottom"},{label:"top-left",value:"top-left"},{label:"top-right",value:"top-right"},{label:"bottom-left",value:"bottom-left"},{label:"bottom-right",value:"bottom-right"},{label:"left-top",value:"left-top"},{label:"left-bottom",value:"left-bottom"},{label:"right-top",value:"right-top"},{label:"right-bottom",value:"right-bottom"}]},{name:"trigger",type:"enum",defaultValue:"hover",options:[{label:"hover",value:"hover"},{label:"click",value:"click"},{label:"focus",value:"focus"},{label:"context-menu",value:"context-menu"}]}],b={};b.setup=(n,t)=>{const e=r(gn),a=[{label:"dropdown",value:"dropdown"}],l={dropdown:`
        <t-dropdown :options="[{ content: '\u64CD\u4F5C\u4E00', value: 1 }, { content: '\u64CD\u4F5C\u4E8C', value: 2 }]" v-bind="configProps">
          <t-button>\u66F4\u591A...</t-button>
        </t-dropdown>
      `},s=r(`<template>${l[a[0].value].trim()}</template>`);function $(w){s.value=`<template>${l[w].trim()}</template>`}return{configList:e,panelList:a,usageCode:s,onPanelChange:$}};var xn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("base-usage",{attrs:{code:n.usageCode,"config-list":n.configList,"panel-list":n.panelList},on:{PanelChange:n.onPanelChange},scopedSlots:n._u([{key:"dropdown",fn:function(a){var l=a.configProps;return[e("t-dropdown",n._b({attrs:{options:[{content:"\u64CD\u4F5C\u4E00",value:1},{content:"\u64CD\u4F5C\u4E8C",value:2}]}},"t-dropdown",l,!1),[e("t-button",[n._v("\u66F4\u591A...")])],1)]}}])})},bn=[];const g={};var $n=o(b,xn,bn,!1,wn,null,null,null);function wn(n){for(let t in g)this[t]=g[t]}const Jn=function(){return $n.exports}();export{Dn as D,Jn as U,Hn as a,Mn as b,jn as c,In as d,En as e,Fn as f,Pn as g,Sn as h,Rn as i,zn as j,Vn as k,Wn as l,An as m,Ln as n,qn as o,Bn as p,Un as q};
