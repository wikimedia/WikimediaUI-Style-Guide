module.exports = {
	plugins: [
		require( 'postcss-import' )( {
			from: 'css/wmui-style-guide.dev.css'
		} ),
		require( 'postcss-media-variables' )( { /* ...options */ } ),
		require( 'postcss-custom-properties' ),
		require( 'autoprefixer' )( {
			browsers: [
				'Android >= 2.3',
				'Chrome >= 10',
				'Edge >= 12',
				'Firefox >= 3.6',
				'IE >= 8',
				'IE_mob 11',
				'iOS >= 5.1',
				'Opera >= 12.5',
				'Safari >= 5.1'
			]
		} ),
		require( 'postcss-media-variables' )( { /* ...options */ } )
	]
};
