module.exports = function(grunt) {
	require('jit-grunt')(grunt);
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.initConfig({
		less: {
			compiled: {
				options: {
					compress: false
				},
				files: {
					"assets/css/main.css": "assets/less/main.less" // destination file and source file
				}
			},
			minified: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"assets/css/main.min.css": "assets/less/main.less" // destination file and source file
				}
			}
		},
		watch: {
			styles: {
				files: ['less/**/*.less'],
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		}
	});

	// grunt.registerTask('default', ['less', 'watch']);
	grunt.registerTask('default', ['less']);
};
