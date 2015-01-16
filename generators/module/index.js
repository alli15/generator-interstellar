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
      "filters",
      "setup-blocks",
    ];

    var self = this;

    _.each(gitKeeps, function(type) {
      self.fs.copy(
        self.templatePath("gitkeep"),
        self.destinationPath("modules/" + self.name + "/" + type + "/.gitkeep")
      );
    });

    self.fs.copyTpl(
      self.templatePath("index.es6"),
      self.destinationPath("modules/" + self.name + "/index.es6"),
      { name: this.name }
    );

    self.fs.copyTpl(
      self.templatePath("README.md"),
      self.destinationPath("modules/" + self.name + "/README.md"),
      { name: this.name }
    );

  }
});

