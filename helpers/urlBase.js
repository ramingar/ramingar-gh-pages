module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('urlBase', function () {
    return 'dist/';
  });

};