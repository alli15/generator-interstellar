
const { Module } = require("mcs");

export const mod = new Module('<%= name %>');

mod.templates    = require.context("raw!./templates", true);
mod.services     = require.context("./services",      true);
mod.controllers  = require.context("./controllers",   true);
mod.directives   = require.context("./directives",    true);
mod.filters      = require.context("./filters",       true);
mod.setupBlocks  = require.context("./setup-blocks",  true);

mod.define();