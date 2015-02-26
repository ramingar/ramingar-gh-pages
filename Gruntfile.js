module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
    
    assemble: {
      options: {
        layout: 'main.hbs',
        layoutdir: './views/layouts/',
        partials: './views/partials/**/*.hbs',
        collections: [{
          name: 'posts',
          inflection: 'post',
          sortby: 'posted',
          sortorder: 'desc'
        }],
        helpers: './helpers/**/*.js',
        defaultTitle: 'Rafael Minguet\'s Blog',
//        pathPosts: '/posts/',
        postsLayout: 'blog.hbs'
      },
      skeleton: {
        files: [{
          cwd: './views/',
          dest: './dist/',
          expand: true,
//          src: ['**/*.hbs', '**/*.md', '!**/posts/*.*']
          src: ['**/*.hbs', '**/*.md']
        }]
      },
      
//      blog: {
//        options: {
//          layout: 'blog.hbs',
//          layoutdir: './views/layouts/',
//          partials: './views/partials/**/*.hbs',

//        },
//        files: [{
//          cwd: './views/posts/',
//          dest: './dist/blog/',
//          expand: true,
//          src: ['**/*.hbs', '**/*.md']
//        }]
//      }
    }
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('assemble');

  /* grunt tasks */
  grunt.registerTask('default', ['assemble']);

};