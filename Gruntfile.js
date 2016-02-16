// This shows a full config file!
module.exports = function (grunt) {
    grunt.initConfig({
    browserSync: {
           
                bsFiles: {
                    src : [
                        'flat/templates/*.html',
                        'flat/static/css/*.css',
                    ]
                },
                options: {
                    proxy: 'localhost:8000',
                   
                        
                }
            
        }
    });

    // load npm tasks
   
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync']);
};