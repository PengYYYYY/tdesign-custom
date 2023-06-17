<template>
  <td-doc-layout>
    <div slot="header">
      <header class="TDesign-header">
        <div class="TDesign-header-inner">
          <div class="TDesign-header-left">
            <img src="../../public/logo.svg" alt="">
            <p class="title">TDesign Custom</p>
          </div>
          <div class="TDesign-header-nav">
            <td-theme-tabs></td-theme-tabs>
          </div>
        </div>
      </header>
    </div>
    <td-doc-aside ref="tdDocAside" title="TDesign Custom">
    </td-doc-aside>
    <router-view :style="contentStyle" @loaded="contentLoaded" />
  </td-doc-layout>
</template>

<script>
import siteConfig from "../../site.config";
import packageJson from "@/package.json";

const currentVersion = packageJson.version.replace(/\./g, "_");
const { docs, enDocs } = JSON.parse(
  JSON.stringify(siteConfig).replace(/component:.+/g, "")
);

const docsMap = {
  zh: docs,
  en: enDocs,
};

const registryUrl = "https://mirrors.tencent.com/npm/tdesign-vue";

export default {
  data() {
    return {
      loaded: false,
      version: currentVersion,
    };
  },

  computed: {
    contentStyle() {
      const { loaded } = this;
      return { visibility: loaded ? "visible" : "hidden" };
    },
    lang() {
      return this.$route?.meta?.lang || "zh";
    },
  },

  mounted() {
    this.$refs.tdDocAside.routerList = docsMap[this.lang];
    this.$refs.tdDocAside.onchange = ({ detail }) => {
      if (this.$route.path === detail) return;
      this.loaded = false;
      this.$router.push(detail);
      window.scrollTo(0, 0);
    };
  },

  methods: {
    contentLoaded(callback) {
      requestAnimationFrame(() => {
        this.loaded = true;
        callback();
      });
    },
  },
};
</script>
<style lang="less">
.TDesign-header {
  height: var(--header-height);
  background-color: var(--bg-color-container);
  color: var(--text-secondary);
  position: relative;
  z-index: 2000;
  box-shadow: var(--header-box-shadow);
}
.TDesign-header-inner {
  padding: 0 24px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: var(--header-inner-max-width);
  margin: auto;
  transition: all 0.25s var(--anim-time-fn-easing);
}
.TDesign-header-left {
  display: flex;
  .title {
    font-family: TencentSansW7;
    font-size: 24px;
    margin-left: 12px;
    font-weight: bold;
    color: var(--text-primary)
  }
}

.TDesign-header-nav {
  display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 8px;
}
</style>