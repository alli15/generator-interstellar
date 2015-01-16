'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Mcs:module', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../module'))
      .withArguments('test-name', '--force')
      .withOptions({ 'skip-install': true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      "modules/test-name/index.es6",
      "modules/test-name/README.md",
      "modules/test-name/controllers/.gitkeep",
      "modules/test-name/services/.gitkeep",
      "modules/test-name/directives/.gitkeep",
      "modules/test-name/setup-blocks/.gitkeep",
      "modules/test-name/templates/.gitkeep",
      "modules/test-name/filters/.gitkeep",
    ]);
  });
});
