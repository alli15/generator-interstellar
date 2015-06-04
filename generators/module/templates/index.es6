import {Module} from "interstellar-core";

const mod = new Module('<%= name %>');
export default mod;

mod.controllers = require.context("./controllers", true);
mod.directives = require.context("./directives", true);
mod.templates = require.context("raw!./templates", true);

let addConfig = ConfigProvider => {
  ConfigProvider.addModuleConfig(mod.name, {
    amount: 1000
  });
};
addConfig.$inject = ['interstellar-core.ConfigProvider'];
mod.config(addConfig);

mod.define();
