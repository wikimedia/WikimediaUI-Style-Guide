/*
 * Matomo (former Piwik) Embed Tracking Code
 * @see https://matomo.org/blog/2017/04/different-ways-embedding-piwik-tracking-code-faster-website-performance/
 */
( function () {
	/* eslint-disable-next-line no-underscore-dangle, no-use-before-define */
	var _paq = window._paq || [];
	_paq.push( [ 'setDomains', [ '*.design.wikimedia.org.' ] ] );
	_paq.push( [ 'trackPageView' ] );
	_paq.push( [ 'enableLinkTracking' ] );

	function embedTrackingCode() {
		var u = 'https://piwik.wikimedia.org/',
			d = document,
			g = d.createElement( 'script' ),
			s = d.getElementsByTagName( 'script' )[ 0 ];
		_paq.push( [ 'setTrackerUrl', u + 'piwik.php' ] );
		_paq.push( [ 'setSiteId', '16' ] );
		g.defer = true;
		g.async = true;
		g.src = u + 'piwik.js';
		s.parentNode.insertBefore( g, s );
	}

	if ( window.addEventListener ) {
		window.addEventListener( 'load', embedTrackingCode, false );
	} else if ( window.attachEvent ) { /* Support for IE8 */
		window.attachEvent( 'onload', embedTrackingCode );
	} else {
		embedTrackingCode();
	}
}() );
