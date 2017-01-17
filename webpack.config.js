var path = require( 'path' ),
	HtmlWebpackPlugin = require( 'html-webpack-plugin' ),
	ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),

	config = {
		entry: './contents/styleguide.js',
		output: {
			path: path.resolve( __dirname, 'dist' ), // eslint-disable-line no-undef
			publicPath: '',
			filename: 'assets/js/bundle.js'
		},
		module: {
			/**
			 * All the webpack loaders.
			 */
			rules: [
				// See loader-utils
				// https://github.com/webpack/loader-utils
				{
					test: /\.(png|jpg|svg)$/,
					loader: 'url-loader?limit=10000&name=assets/img/[name]-[sha512:hash:base64:7].[ext]'
				},
				{
					test: /\.(woff|woff2|eot|ttf)$/,
					loader: 'url-loader?limit=10000&name=assets/fonts/[name].[ext]'
				},
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract( {
						fallbackLoader: 'style-loader',
						publicPath: '../../',
						// Need to run css-loader without autoprefixer
						// https://github.com/postcss/postcss-loader/issues/81#issuecomment-259669276
						loader: 'css-loader?-autoprefixer!postcss-loader'
					} )
				},
				// Need to specify inlineRequires otherwise images are not replaced
				// https://github.com/pcardune/handlebars-loader/issues/37
				{
					test: /\.hbs$/,
					loader: 'handlebars-loader',
					query: {
						inlineRequires: '\/img\/',
						helperDirs: [ __dirname + '/scripts/hbs-helpers' ]  // eslint-disable-line no-undef
					}
				}
			]
		},
		plugins: [
			/**
			 * All the static pages that need to be generated.
			 */
			new HtmlWebpackPlugin( {
				title: 'WikimediaUI Style Guide provided by Wikimedia Foundation design team',
				pageName: 'design-principles',
				template: './contents/design-principles.hbs',
				filename: 'index.html'
			} ),
			new HtmlWebpackPlugin( {
				title: 'WikimediaUI Style Guide - Visual Style',
				pageName: 'visual-style',
				filename: 'visual-style.html',
				template: './contents/visual-style.hbs'
			} ),
			new HtmlWebpackPlugin( {
				title: 'WikimediaUI Style Guide - Components',
				pageName: 'components',
				filename: 'components.html',
				template: './contents/components.hbs'
			} ),
			new HtmlWebpackPlugin( {
				title: 'WikimediaUI Style Guide - Patterns',
				pageName: 'patterns',
				filename: 'patterns.html',
				template: './contents/patterns.hbs'
			} ),
			new HtmlWebpackPlugin( {
				title: 'WikimediaUI Style Guide - Resources',
				pageName: 'resources',
				filename: 'resources.html',
				template: './contents/resources.hbs'
			} ),
			new ExtractTextPlugin( 'assets/css/wmui-style-guide.css' )
		]
	};

module.exports = config;
