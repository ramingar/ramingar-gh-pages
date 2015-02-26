module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('pathPosts', function () {
    return '/posts/';
  });

};