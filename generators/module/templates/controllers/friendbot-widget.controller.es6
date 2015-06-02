require('../styles/friendbot-widget.scss');

@Inject("$scope", "mcs-core.Config", "mcs-stellard.Sessions", "mcs-stellard.Server")
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
        amount: Config.get('modules.mcs-friendbot.amount')
      }).then(() => {
        this.$scope.$apply();
      })
  }
}

module.exports = function(mod) {
  mod.controller("FriendbotWidgetController", FriendbotWidgetController);
};
