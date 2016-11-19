'use strict';

module.exports = function (grunt) {
  'use strict';
  
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
  grunt.loadNpmTasks('grunt-browserify');
  
  grunt.initConfig({
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist/{,*/}*',
            '!dist/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },
    
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: [{
          "expand": true,
          "cwd": "src/",
          "src": ["**/*.js"],
          "dest": "dist/",
          "ext": ".js"
        }]
      }
    },
    
    browserify: {
      dist: {
        files: [{
          "expand": true,
          "cwd": "dist/",
          "src": ["**/*.js"],
          "dest": "dist/",
          "ext": ".js"
        }]
      }
    }
  });
  
  grunt.registerTask('default', [
    'clean:dist',
    'babel',
    'browserify'
  ]);
};
