/* eslint-env node */

/*!
 * Grunt file
 */

'use strict';

module.exports = function ( grunt ) {
	/*
	 * PostCSS processors
	 */
	// Without minifier
	const postCssProcessorsDev = [
			require( 'postcss-import' )( {
				from: 'css/wmui-style-guide.dev.css'
			} ),
			require( 'postcss-custom-properties' )( {
				preserve: false
			} ),
			require( 'autoprefixer' )()
		],
		// With minifier
		postCssProcessorsMin = postCssProcessorsDev.concat( [ require( 'cssnano' )() ] );

	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( '@lodder/grunt-postcss' );
	grunt.loadNpmTasks( 'grunt-replace' );
	grunt.loadNpmTasks( 'grunt-stylelint' );

	grunt.initConfig( {
		// Build – JavaScript
		concat: {
			options: {
				sourceMap: true,
				sourceMapName: function ( concatFileName ) {
					return concatFileName + '.map.json';
				}
			},
			files: {
				src: [
					'js/src/fonts-loader.js'
					// 'js/src/matomo-tracking-code.js'
				],
				dest: 'js/wikimedia-design-style-guide.concat.js'
			}
		},

		uglify: {
			options: {
				sourceMap: true,
				sourceMapIncludeSources: true,
				sourceMapName: function ( uglifyFileName ) {
					return uglifyFileName + '.map.json';
				},
				report: 'gzip'
			},
			min: {
				files: {
					'js/wikimedia-design-style-guide.min.js': 'js/wikimedia-design-style-guide.concat.js',
					'js/matomo-tracking.min.js': 'js/src/matomo-tracking.js'
				}
			}
		},

		// Lint – JavaScript
		eslint: {
			options: {
				cache: true
			},
			dev: [
				'Gruntfile.js',
				'js/src/**/*.js'
			]
		},

		// Lint – Stylesheets
		stylelint: {
			src: [
				'css/*.dev.css',
				'!node_modules/**'
			]
		},

		// Postprocessing Stylesheets
		postcss: {
			// Output unminified compiled CSS file into `build` dir
			dev: {
				options: {
					processors: postCssProcessorsDev
				},
				src: 'css/wmui-style-guide.dev.css',
				dest: 'css/build/wmui-style-guide.css'
			},
			// Output minified compiled CSS file + source maps into `build` dir
			min: {
				options: {
					map: {
						inline: false, // Save all source maps as separate files…
						annotation: 'css/build/' // …to the specified directory
					},
					processors: postCssProcessorsMin
				},
				src: 'css/wmui-style-guide.dev.css',
				dest: 'css/build/wmui-style-guide.min.css'
			}
		},

		replace: {
			dist: {
				options: {
					patterns: [
						{
							match: /Helvetica Neue"/g,
							replacement: 'Helvetica Neue, sans-serif"'
						},
						{
							match: /Lato"/g,
							replacement: 'Lato, sans-serif"'
						}
					]
				},
				files: [ {
					expand: true,
					cwd: './',
					src: [
						'img/components/*.svg',
						'resources/WikimediaUI-components_overview.svg'
					],
					dest: './'
				} ]
			}
		},

		// Development
		watch: {
			files: [
				'css/**/*.css',
				'!css/build/**/*.css',
				'.{stylelintrc}'
			],
			tasks: 'default'
		}
	} );

	grunt.registerTask( 'lint', [ 'eslint', 'stylelint' ] );
	grunt.registerTask( 'images-pre-production', [ 'replace' ] );
	grunt.registerTask( 'default', [ 'concat', 'uglify', 'postcss:dev', 'postcss:min' ] );
};
