/**
 * SVGO Configuration
 * Compatible to v2.8.0+
 * Recommended options from:
 * https://www.mediawiki.org/wiki/Manual:Coding_conventions/SVG#Exemplified_safe_configuration
 */
module.exports = {
	multipass: true,
	plugins: [
		{
			// Set of built-in plugins enabled by default.
			name: 'preset-default',
			params: {
				overrides: {
					cleanupIDs: false,
					removeDesc: false,
					removeTitle: false,
					removeViewBox: false,
					// If the SVG doesn't start with an XML declaration, then its MIME type will
					// be detected as "text/plain" rather than "image/svg+xml" by libmagic and,
					// consequently, MediaWiki's CSSMin CSS minifier. libmagic's default database
					// currently requires that SVGs contain an XML declaration:
					// https://github.com/threatstack/libmagic/blob/master/magic/Magdir/sgml#L5
					removeXMLProcInst: false,
				},
			},
		},
		'removeRasterImages',
		'sortAttrs',
	],
	// Configure the indent (default 4 spaces) used by `--pretty` here:
	// @see https://github.com/svg/svgo/blob/master/lib/svgo/js2svg.js#L6 for more config options
	//
	// Unfortunately EOL cannot be configured, SVGO uses the platform's EOL marker.
	// On non-unix systems the linebreaks will be normalized to LF (unix) only at git commit,
	// assuming `core.autocrlf` is 'true' (default) or 'input'.
	js2svg: {
		indent: "\t",
		pretty: true,
	}
}
