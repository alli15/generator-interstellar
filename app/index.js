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
      "filters",
      "setup-blocks",
    ];

    var self = this;

    _.each(gitKeeps, function(type) {
      self.fs.copy(
        self.templatePath("gitkeep"),
        self.destinationPath("apps/" + self.name + "/" + type + "/.gitkeep")
      );
    });

    self.fs.copyTpl(
      self.templatePath("main.es6"),
      self.destinationPath("apps/" + self.name + "/main.es6"),
      { name: self.name }
    );

    self.fs.copyTpl(
      self.templatePath("head.es6"),
      self.destinationPath("apps/" + self.name + "/head.es6"),
      { name: self.name }
    );

    self.fs.copyTpl(
      self.templatePath("README.md"),
      self.destinationPath("apps/" + self.name + "/README.md"),
      { name: self.name }
    );

    self.fs.copyTpl(
      self.templatePath("index.html"),
      self.destinationPath("apps/" + self.name + "/index.html"),
      { name: self.name }
    );

    self.fs.copyTpl(
      self.templatePath("main.scss"),
      self.destinationPath("apps/" + self.name + "/main.scss"),
      { name: self.name }
    );
  },

  install: function () {}
});
