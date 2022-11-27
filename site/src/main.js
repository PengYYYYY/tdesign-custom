/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import TdesignCustom from "tdesign-custom";
import routes from "./routes";
import App from "./App.vue";

import Codesandbox from "./components/codesandbox/index.vue";
import Stackblitz from "./components/stackblitz/index.vue";
import BaseUsage from './components/base-usage.vue';

// import site webcomponents
import "tdesign-site-components";
import "tdesign-site-components/lib/styles/style.css";
import "tdesign-site-components/lib/styles/prism-theme.less";
import "tdesign-site-components/lib/styles/prism-theme-dark.less";

// import web doc style;
import "@common/style/web/docs.less";

// import icons webcomponents
import "tdesign-icons-view";

// tdesign global style
import 'tdesign-site/style/index.js';
// custom rewrite style
import 'tdesign-custom/style/_theme.less'


Vue.use(TdesignCustom);
Vue.use(VueRouter);

Vue.config.ignoredElements = [/^td-/];

Vue.component("Codesandbox", Codesandbox);
Vue.component("Stackblitz", Stackblitz);
Vue.component('BaseUsage', BaseUsage);

const router = new VueRouter({
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
