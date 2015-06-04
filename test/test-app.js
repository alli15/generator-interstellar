'use strict';

var path    = require('path');
var assert  = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os      = require('os');

describe('interstellar:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withArguments('test-app', '--force')
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      "index.html",
      "main.es6",
      "main.scss",
      "README.md",
      "head.es6",
      "controllers/.gitkeep",
      "services/.gitkeep",
      "directives/.gitkeep",
      "templates/.gitkeep",
      "filters/.gitkeep"
    ]);
  });
});
