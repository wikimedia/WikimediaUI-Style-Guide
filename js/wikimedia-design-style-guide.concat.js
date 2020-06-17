/* eslint-disable vars-on-top, one-var */
( function () {

	if ( document.head && 'Promise' in window ) {
		var html = document.documentElement;

		if ( sessionStorage.getItem( 'fontsLoaded' ) ) {
			html.classList.add( 'fonts-loaded' );
		} else {
			var script = document.createElement( 'script' );
			// Use absolute path to address root files and /components/ directory ones.
			script.src = '/style-guide/js/vendor/fontfaceobserver/fontfaceobserver.standalone.js';

			script.onload = function () {
				var serif = new FontFaceObserver( 'Charter' ); /* eslint-disable-line no-undef */

				Promise.all( [ /* eslint-disable-line no-undef */
					serif.load()
				] ).then( function () {
					html.classList.add( 'fonts-loaded' );
					sessionStorage.setItem( 'fontsLoaded', 1 );
				} );
			};
			document.head.appendChild( script );
		}
	}
}() );

//# sourceMappingURL=wikimedia-design-style-guide.concat.js.map.json