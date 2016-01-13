module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.initConfig({
		uglify:{
			ya1:{
				src:'src/a.js',
				dest:'dest/a.min.js'
			},
			ya2:{
				src:'src/b.js',
				dest:'dest/b.min.js'
			}
		},
		concat:{
			main:{
				src:'src/*.css',
				dest:'dest/all.css'
			}
		},
		cssmin:{
			main:{
				src:'dest/all.css',
				dest:'dest/all.min.css'
			}
		}
	});

	grunt.registerTask('default',['uglify','concat','cssmin']);
};