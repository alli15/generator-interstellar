'use strict';
var yeoman = require('yeoman-generator');
var _      = require("lodash");

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'The module name'
    });
  },

  writing: function () {
    var gitKeeps = [
      "services",
      "controllers",
      "directives",
      "templates",
      "styles",
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

