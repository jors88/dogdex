'use strict';
var history = require('connect-history-api-fallback');
var path = require('path');

module.exports = function(app) {
  app.use(history());
};
