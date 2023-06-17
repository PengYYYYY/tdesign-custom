import Vue from "vue";

import App from "./App.vue";
import TdesignCustom from "tdesign-custom";

Vue.use(TdesignCustom);

new Vue({
  el: "#app",
  render: (h) => h(App),
});