/* eslint-env node */

/*!
 * Grunt file
 */

module.exports = function ( grunt ) {
	/*
	 * PostCSS processors
	 */
	// Without minifier
	var postCssProcessorsDev = [
			require( 'postcss-import' )( {
				from: 'css/wmui-style-guide.dev.css'
			} ),
			require( 'postcss-custom-properties' )( {
				preserve: false
			} ),
			require( 'autoprefixer' )()
		],
		// With minifier
		postCssProcessorsMin = postCssProcessorsDev.concat( [ require( 'cssnano' )() ] ),
		zopfli = require( 'imagemin-zopfli' );

	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-eslint' );
	grunt.loadNpmTasks( 'grunt-postcss' );
	grunt.loadNpmTasks( 'grunt-replace' );
	grunt.loadNpmTasks( 'grunt-sketch' );
	grunt.loadNpmTasks( 'grunt-stylelint' );
	grunt.loadNpmTasks( 'grunt-svgmin' );

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
					'js/src/fonts-loader.js',
					'js/src/embed-tracking-code.js'
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
			js: {
				expand: true,
				src: 'js/*.concat.js',
				ext: '.min.js',
				extDot: 'first'
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

		// Export resources from Sketch files
		sketch_export: {
			wikimediaui_components_png: {
				options: {
					type: 'slices',
					items: [
						'Primary_Buttons',
						'Quiet_Buttons',
						'Button_Group',
						'Link',
						'Checkbox',
						'Radio_Button',
						'Toggle_Switch',
						'Text_Input',
						'Dropdown'
					],
					groupContentsOnly: true,
					scales: [
						2.0
					],
					formats: [
						'png'
					],
					saveForWeb: true
				},
				src: 'resources/WikimediaUI-components_overview.sketch',
				dest: 'img/components'
			},
			wikimediaui_components_svg: {
				options: {
					type: 'slices',
					items: [
						'Primary_Buttons',
						'Quiet_Buttons',
						'Button_Group',
						'Link',
						'Checkbox',
						'Radio_Button',
						'Toggle_Switch',
						'Text_Input',
						'Dropdown'
					],
					groupContentsOnly: true,
					compact: true,
					scales: [
						1.0
					],
					formats: [
						'svg'
					],
					saveForWeb: true
				},
				src: 'resources/WikimediaUI-components_overview.sketch',
				dest: 'img/components'
			},
			wikimediaui_overview: {
				options: {
					type: 'artboards',
					items: [
						'WikimediaUI-components_overview'
					],
					groupContentsOnly: true,
					compact: true,
					scales: [
						1.0
					],
					formats: [
						'png',
						'svg'
					],
					saveForWeb: true
				},
				src: 'resources/WikimediaUI-components_overview.sketch',
				dest: 'resources'
			},
			wikimediaui_style_guide_imagery_design_principles_svg: {
				options: {
					type: 'artboards',
					items: [
						'content-first',
						'trustworthy-yet-joyful'
					],
					groupContentsOnly: true,
					compact: true,
					scales: [
						1.0
					],
					formats: [
						'svg'
					],
					saveForWeb: true
				},
				src: 'resources/Wikimedia_Design_Style_Guide-imagery.sketch',
				dest: 'img/design-principles'
			},
			wikimediaui_style_guide_imagery_design_principles_png: {
				options: {
					type: 'artboards',
					items: [
						'content-first',
						'trustworthy-yet-joyful'
					],
					groupContentsOnly: true,
					compact: true,
					scales: [
						2.0
					],
					formats: [
						'png'
					],
					saveForWeb: true
				},
				src: 'resources/Wikimedia_Design_Style_Guide-imagery.sketch',
				dest: 'img/design-principles'
			},
			wikimediaui_style_guide_imagery_visual_style_svg: {
				options: {
					type: 'artboards',
					items: [
						'icons-sample',
						'icons-optical-adjustment',
						'illustrations-header',
						'illustrations-article',
						'illustrations-colored-background',
						'illustrations-white-background',
						'illustrations-grey-background'
					],
					groupContentsOnly: true,
					compact: true,
					scales: [
						1.0
					],
					formats: [
						'svg'
					],
					saveForWeb: true
				},
				src: 'resources/Wikimedia_Design_Style_Guide-imagery.sketch',
				dest: 'img/visual-style'
			},
			wikimediaui_style_guide_imagery_visual_style_png: {
				options: {
					type: 'artboards',
					items: [
						'principles-paper-ink',
						'principles-paper-shadow',
						'principles-content-chrome',
						'principles-color-type',
						'typography-specimen',
						'typography-readability',
						'icons-sample',
						'icons-optical-adjustment',
						'illustrations-header',
						'illustrations-article',
						'illustrations-colored-background',
						'illustrations-white-background',
						'illustrations-grey-background'

					],
					groupContentsOnly: true,
					compact: true,
					scales: [
						2.0
					],
					formats: [
						'png'
					],
					saveForWeb: true
				},
				src: 'resources/Wikimedia_Design_Style_Guide-imagery.sketch',
				dest: 'img/visual-style'
			}
		},

		// Image Optimization
		imagemin: {
			distPngs: {
				options: {
					use: [ zopfli() ]
				},
				expand: true,
				src: 'img/**/*.png'
			}
		},

		svgmin: {
			options: {
				js2svg: {
					indent: '\t',
					multipass: true,
					pretty: true
				},
				plugins: [ {
					cleanupIDs: false
				}, {
					removeDesc: true
				}, {
					removeRasterImages: true
				}, {
					removeTitle: false
				}, {
					removeViewBox: false
				}, {
					removeXMLProcInst: false
				}, {
					sortAttrs: true
				} ]
			},
			all: {
				files: [ {
					expand: true,
					cwd: './',
					src: [
						'**/*.svg'
					],
					dest: './',
					ext: '.svg'
				} ]
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
	grunt.registerTask( 'images', [ 'sketch_export', 'svgmin' ] );
	grunt.registerTask( 'default', [ 'concat', 'uglify', 'postcss:dev', 'postcss:min' ] );
};
