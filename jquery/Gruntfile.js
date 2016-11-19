'use strict';

module.exports = function (grunt) {
  'use strict';
  
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
  var serveStatic = require('serve-static');
  
  grunt.initConfig({
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['app/{,*/}*.js'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      styles: {
        files: ['app/css/{,*/}*.css'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '{,*/}*.html',
          '{,*/}*.css'
        ]
      }
    },
    
    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              require('connect-livereload')(),
              serveStatic('./'),
              connect()
              .use(
                'css',
                serveStatic('./css')
              ),
              connect()
              .use(
                'js',
                serveStatic('./js')
              ),
              serveStatic('app')
            ];
          }
        }
      }
    }
  });
  
  grunt.registerTask('default', [
    'connect:livereload',
    'watch'
  ]);
};
