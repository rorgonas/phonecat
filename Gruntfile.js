module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    csslint: {
        // define the files to lint        
        files: ["app/css/app.css"],
        options: {
            csslintrc: '.csslintrc'
        },
        strict: {
            options: {
                "import": 2
            }
        }
    },
    plato: {
      options : {
           jshint : grunt.file.readJSON('.jshintrc')
      },
      files: {
            src: 'app/js/*.js',
            dest: 'report/output'            
      }
    },
    jshint: {
          options: {
              jshintrc: '.jshintrc'
          },
          all: [
              'Gruntfile.js',
              'app/js/{,*/}*.js'
          ]
    }

  });

 
  // Load CSS code quality
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // Load Code Quality analyizer
  grunt.loadNpmTasks('grunt-plato');

  // Load JS Hint
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['strict']);

};