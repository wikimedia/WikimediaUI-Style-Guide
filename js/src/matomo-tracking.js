/*
 * Matomo (former Piwik) Embed Tracking Code
 * @see https://matomo.org/blog/2017/04/different-ways-embedding-piwik-tracking-code-faster-website-performance/
 * @see https://matomo.org/faq/general/faq_20904/
 */
/* eslint-disable-next-line no-underscore-dangle, no-implicit-globals */
var _paq = window._paq || [];
_paq.push( [ 'setDomains', [ '*.design.wikimedia.org.' ] ] );
_paq.push( [ 'trackPageView' ] );
_paq.push( [ 'enableLinkTracking' ] );

/* eslint-disable-next-line no-implicit-globals */
function embedTrackingCode() {
	var u = 'https://piwik.wikimedia.org/',
		d = document,
		g = d.createElement( 'script' ),
		s = d.getElementsByTagName( 'head' )[ 0 ];
	_paq.push( [ 'setTrackerUrl', u + 'piwik.php' ] );
	_paq.push( [ 'setSiteId', '16' ] );
	g.src = u + 'piwik.js';
	g.async = true;
	g.defer = true;
	s.appendChild( g );
}

if ( window.addEventListener ) {
	window.addEventListener( 'load', embedTrackingCode, false );
} else {
	embedTrackingCode();
}
