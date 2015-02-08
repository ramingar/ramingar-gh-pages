module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    
    assemble: {
      options: {
        layout: 'main.hbs',
        layoutdir: './views/layouts/',
        partials: './views/partials/**/*.hbs'
      },
      skeleton: {
        files: [{
          cwd: './views/',
          dest: './dist/',
          expand: true,
          src: ['**/*.hbs']
        }]
      },
      posts: {
        files: [{
          cwd: './views/posts/',
          dest: './dist/posts/',
          expand: true,
          src: ['**/*.md']
        }]
      }
    }
    
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('assemble');

  /* grunt tasks */
  grunt.registerTask('default', ['assemble']);

};