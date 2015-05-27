'use strict';
var yeoman = require('yeoman-generator');
var _      = require("lodash");

module.exports = yeoman.generators.NamedBase.extend({
  initializing: function () {},
  prompting: function () {},

  writing: function() {
    var gitKeeps = [
      "services", 
      "controllers", 
      "directives", 
      "templates", 
      "filters"
    ];

    var self = this;

    _.each(gitKeeps, function(type) {
      self.fs.write(type + "/.gitkeep", '');
    });

    self.fs.copyTpl(
      self.templatePath("**/*"),
      self.destinationPath(),
      { name: self.name }
    );
  },

  install: function () {
    this.installDependencies({
      skipMessage: this.options['skip-install-message'],
      skipInstall: this.options['skip-install']
    });
  }
});
