require("file?name=index.html!./index.html");

require('./styles/main.header.scss');
require('./styles/main.footer.scss');

import interstellarCore, {App, Inject, Intent} from "interstellar-core";
import interstellarSessions from "interstellar-sessions";
import interstellarNetwork from "interstellar-network";
import interstellarNetworkWidgets from "interstellar-network-widgets";

let config = require('./config.json');
export const app = new App("<%= name %>", config);

app.use(interstellarCore);
app.use(interstellarSessions);
app.use(interstellarNetwork);
app.use(interstellarNetworkWidgets);

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
registerBroadcastReceivers.$inject = ["$state", "interstellar-core.IntentBroadcast"];
app.run(registerBroadcastReceivers);

app.bootstrap();
