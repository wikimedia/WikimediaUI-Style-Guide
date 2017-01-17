module.exports = function ( val, val2, options ) {
	if ( val == val2 ) {  // eslint-disable-line eqeqeq
		return options.fn( this );
	}
};
