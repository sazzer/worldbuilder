module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    // Keep the plugins in alphabetical order
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015-node5']
            }, 
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/server',
                    src: ['**/*.js'],
                    dest: 'target/server'
                }]
            }
        },
        clean: ['target'],
        eslint: {
            options: {
                configFile: 'eslintrc'
            }, 
            main: {
                files: [{
                    expand: true,
                    src: ['src/server/**/*.js']
                }]
            }
        },
        jscpd: {
            main: {
                path: 'src/server'
            }
        }
    });

    grunt.registerTask('build', ['eslint:main', 'jscpd:main', 'babel:main']);
};
