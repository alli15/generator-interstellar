require("file?name=index.html!./index.html");

require("angular");
require("angular-ui-router");

const { App } = require("mcs");

export const app = new App("<%= name %>");
app.use('ui.router');
app.use(require("core").mod.name);

app.templates    = require.context("raw!./templates", true);
app.services     = require.context("./services",      true);
app.controllers  = require.context("./controllers",   true);
app.directives   = require.context("./directives",    true);
app.filters      = require.context("./filters",       true);
app.setupBlocks  = require.context("./setup-blocks",  true);

app.define();

app.bootstrap();