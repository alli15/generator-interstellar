require('../styles/friendbot-widget.scss');

import {Inject} from "interstellar-core";

@Inject("$scope", "interstellar-core.Config", "interstellar-sessions.Sessions", "interstellar-network.Server")
class FriendbotWidgetController {
  constructor($scope, Config, Sessions, Server) {
    if (!Sessions.hasDefault()) {
      console.error('Active session is required by this widget.');
      return;
    }
    this.$scope = $scope;
    this.Config = Config;
    this.Server = Server;
    this.session = Sessions.default;
  }

  friendbot() {
    this.Server.friendbot(this.session.getAddress(), {
        amount: this.Config.get('modules.<%= name %>.amount')
      }).then(() => {
        this.$scope.$apply();
      })
  }
}

module.exports = function(mod) {
  mod.controller("FriendbotWidgetController", FriendbotWidgetController);
};
