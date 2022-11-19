/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import CDesignUI from "@tencent/codesign-uikit";
import routes from "./routes";
import App from "./App.vue";

import Codesandbox from "./components/codesandbox/index.vue";
import Stackblitz from "./components/stackblitz/index.vue";

// import site webcomponents
import "tdesign-site-components";
import "tdesign-site-components/lib/styles/style.css";
import "tdesign-site-components/lib/styles/prism-theme.less";
import "tdesign-site-components/lib/styles/prism-theme-dark.less";

// import tdesign style;
import "@common/style/web/docs.less";
import '@tencent/codesign-uikit/style/_theme.less'

// import icons webcomponents
import "tdesign-icons-view";


Vue.use(CDesignUI);
Vue.use(VueRouter);

Vue.config.ignoredElements = [/^td-/];

Vue.component("Codesandbox", Codesandbox);
Vue.component("Stackblitz", Stackblitz);

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== from.name) {
    window.NProgress && window.NProgress.start();
  }
  next();
});

router.afterEach(() => {
  if (typeof NProgress !== "undefined") {
    NProgress.done();
  }
  document.querySelector("td-stats")?.track?.();
});

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
