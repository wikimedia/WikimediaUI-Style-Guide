/*!
 * Grunt file
 */

module.exports = function ( grunt ) {
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-postcss' );
	grunt.loadNpmTasks( 'grunt-sketch' );
	grunt.loadNpmTasks( 'grunt-stylelint' );
	grunt.loadNpmTasks( 'grunt-svgmin' );

	grunt.initConfig( {
		// Lint – Styles
		stylelint: {
			src: [
				'css/*.dev.css',
				//'css/partials/**',
				'!node_modules/**'
			]
		},

		// Postprocessing Styles
		postcss: {
			options: {
				processors: [
					require( 'postcss-import' )( {
						from: "css/wmui-style-guide.dev.css"
					} ),
					// require( 'postcss-cssnext' )(),
					require( 'postcss-custom-properties' ),
					require( 'autoprefixer' )( {
						browsers: [
							"Android >= 2.3",
							"Chrome >= 10",
							"Edge >= 12",
							"Firefox >= 3.6",
							"IE >= 8",
							"IE_mob 11",
							"iOS >= 5.1",
							"Opera >= 12.5",
							"Safari >= 5.1"
						]
					} )
				]
			},
			dist: {
				files: {
					'css/wmui-style-guide.css': 'css/wmui-style-guide.dev.css'
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: true,
				roundingPrecision: -1
			},
			target: {
				files: {
				  'css/wmui-style-guide.min.css': 'css/wmui-style-guide.css'
				}
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
				src: 'resources/WikimediaUI.sketch',
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
				src: 'resources/WikimediaUI.sketch',
				dest: 'img/components'
			},
			wikimediaui_overview: {
				options: {
					type: 'artboards',
					items: [
						'WikimediaUI Overview'
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
				src: 'resources/WikimediaUI.sketch',
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
				src: 'resources/WikimediaUI-Style-Guide-Imagery.sketch',
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
				src: 'resources/WikimediaUI-Style-Guide-Imagery.sketch',
				dest: 'img/design-principles'
			},
			wikimediaui_style_guide_imagery_visual_style_svg: {
				options: {
					type: 'artboards',
					items: [
						'principles-paper-ink',
						'principles-paper-shadow',
						'principles-content-chrome',
						'principles-color-type',
						'typography-specimen',
						'typography-readability'
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
				src: 'resources/WikimediaUI-Style-Guide-Imagery.sketch',
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
						'typography-readability'
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
				src: 'resources/WikimediaUI-Style-Guide-Imagery.sketch',
				dest: 'img/visual-style'
			}
		},

		// Image Optimization
		svgmin: {
			options: {
				js2svg: {
					pretty: true
				},
				plugins: [{
					cleanupIDs: false
				}, {
					removeDesc: false
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
				}]
			},
			all: {
				files: [{
					expand: true,
					cwd: 'img',
					src: [
						'**/*.svg'
					],
					dest: 'img/',
					ext: '.svg'
				}]
			}
		},

		// Development
		watch: {
			files: [
				'**/*.css',
				'.{stylelintrc}'
			],
			tasks: 'default'
		}
	} );

	grunt.registerTask( 'lint', [ 'stylelint' ] );
	grunt.registerTask( 'imagery', [ 'sketch_export', 'svgmin' ] );
	grunt.registerTask( 'default', [ 'lint', 'postcss', 'cssmin' ] );
};
