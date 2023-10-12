import glob from 'glob';
import sharp from 'sharp';

glob( '{img/{components,design-principles,visual-style},resources}/**/!(WikimediaUI-components_overview).svg', ( er, files ) => {
	files.forEach( ( file ) => {
		sharp( file )
			.png( {
				// Force color indexing.
				quality: 99,
				timeout: 180
			} )
			.toFile( file.replace( '.svg', '.png' ) )
			// eslint-disable-next-line
			.then( ( info ) => {
				console.log( file );
				// console.log( info );
			} )
			.catch( ( err ) => {
				console.log( err );
			} );
	} );
} );
