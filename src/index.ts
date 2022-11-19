import { VueConstructor } from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import * as components from './components';
import PKG from '../package.json'

type componentsType = Record<string, any>

function install(Vue: VueConstructor, config?: object) {
  if (Vue._installedPlugins.indexOf(VueCompositionAPI) === -1) {
    Vue.use(VueCompositionAPI);
  }
  Object.keys(components).forEach((key) => {
    if ((components as componentsType)[key]) {
      /plugin/i.test(key) ? Vue.use((components as any)[key]) : Vue.use((components as componentsType)[key], config);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export * from './components';
export default {
  install,
  version: PKG.version
};
