import {Module} from "mcs-core";

const mod = new Module('<%= name %>');
export default mod;

app.controllers = require.context("./controllers", true);
app.directives = require.context("./directives", true);
app.templates = require.context("raw!./templates", true);

let addConfig = ConfigProvider => {
  ConfigProvider.addModuleConfig(mod.name, {
    amount: 1000
  });
};
addConfig.$inject = ['mcs-core.ConfigProvider'];
mod.config(addConfig);

mod.define();
