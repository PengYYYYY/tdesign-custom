import Vue, { VueConstructor, PluginObject } from 'vue';

export function withInstall<T>(comp: T, dep?: PluginObject<any>) {
  const c = comp as any;

  const name = c?.options?.name || c.name;

  c.install = function (Vue: VueConstructor, config?: object) {
    Vue.component(name, comp as any);
  };

  if (dep && Vue && (Vue._installedPlugins || []).indexOf(dep) === -1) {
    Vue.use(dep);
  }

  return comp as T & PluginObject<T>;
}

export default withInstall;
