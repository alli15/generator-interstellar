'use strict';

var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os      = require('os');

describe('mcs:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withArguments('test-app', '--force')
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      "apps/test-app/index.html",
      "apps/test-app/main.es6",
      "apps/test-app/main.scss",
      "apps/test-app/README.md",
      "apps/test-app/head.es6",
      "apps/test-app/controllers/.gitkeep",
      "apps/test-app/services/.gitkeep",
      "apps/test-app/directives/.gitkeep",
      "apps/test-app/setup-blocks/.gitkeep",
      "apps/test-app/templates/.gitkeep",
      "apps/test-app/filters/.gitkeep",
    ]);
  });
});
