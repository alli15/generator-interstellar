require("file?name=index.html!./index.html");

require('./styles/main.header.scss');
require('./styles/main.footer.scss');

import mcsCore, {App, Inject, Intent} from "mcs-core";
import mcsStellard from "mcs-stellard";

let config = require('./config.json');
export const app = new App("<%= name %>", config);

app.use(mcsCore.name);
app.use(mcsStellard.name);

app.controllers = require.context("./controllers", true);
app.templates = require.context("raw!./templates", true);

app.routes = ($stateProvider) => {
  $stateProvider.state('index', {
    url: "/",
    templateUrl: "<%= name %>/index"
  });

  $stateProvider.state('balance', {
    url: "/balance",
    templateUrl: "<%= name %>/balance"
  });
};

let registerBroadcastReceivers = ($state, IntentBroadcast) => {
  IntentBroadcast.registerReceiver(Intent.TYPES.SHOW_DASHBOARD, intent => {
    $state.go('balance');
  });
};
registerBroadcastReceivers.$inject = ["$state", "mcs-core.IntentBroadcast"];
app.run(registerBroadcastReceivers);

app.bootstrap();
