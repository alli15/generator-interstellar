let friendbotWidget = function () {
  return {
    restrict: "E",
    templateUrl: "<%= name %>/friendbot-widget"
  }
};

module.exports = function(mod) {
  mod.directive("friendbot", friendbotWidget);
};
