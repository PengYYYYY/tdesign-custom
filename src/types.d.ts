export * from './index'
export { default } from './index'

declare module "*.png" {
  const value: string;
  export default value;
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

import Vue, { VNode } from 'vue';
import { ComponentRenderProxy } from '@vue/composition-api';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: any // specify the property name to use
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
declare module '@vue/composition-api' {
  interface ComponentInternalInstance { // todo
    [x: string]: any;
  }
}

declare module 'vue' {
  interface VueConstructor {
    _installedPlugins: PluginObject<any>[];
  }
}
