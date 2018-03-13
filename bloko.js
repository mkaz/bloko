/**
 * An example Gutenberg block for building Haiku
 * There is a bit of duplicate code, but it is 
 * straight-forward and easier to follow.
 * 
 * A Haiku block may not be the most practical anyways
 * the goal is to show how you might templatize.
 */
const { registerBlockType, Editable, source: { children } } = wp.blocks;

registerBlockType( 'mkaz/bloko', {
	title: 'Bloko',
	icon: 'carrot',
	category: 'common',
	attributes: {
		line1: {
			type: 'array',
			source: children( '.line1' ),
		},
		line2: {
			type: 'array',
			source: children( '.line2' ),
		},
		line3: {
			type: 'array',
			source: children( '.line3' ),
		}
	},

	edit: props => {
		const attr = props.attributes;
		
		const onChangeLine1 = str => {
			props.setAttributes( { line1: str } );
		};

		const onChangeLine2 = str => {
			props.setAttributes( { line2: str } );
		};

		const onChangeLine3 = str => {
			props.setAttributes( { line3: str } );
		};

		return (
			<div>
				<Editable
					placeholder="Line 1: 5 syllables"
					value={ attr.line1 }
					onChange={ onChangeLine1 }
					focus={ attr.focus }
					onFocus={ attr.setFocus }
				/>
				<Editable
					placeholder="Line 2: 7 syllables"
					value={ attr.line2 }
					onChange={ onChangeLine2 }
					focus={ attr.focus }
					onFocus={ attr.setFocus }
				/>
				<Editable
					placeholder="Line 3: 5 syllables"
					value={ attr.line3 }
					onChange={ onChangeLine3 }
					focus={ attr.focus }
					onFocus={ attr.setFocus }
				/>
			</div>
		);
	},

	save: props => {
		const { attributes: { line1, line2, line3 } } = props;
		return (
			<div>
				<div className="line1"> { line1 } </div>
				<div className="line2"> { line2 } </div>
				<div className="line3"> { line3 } </div>
			</div>
		);
	},
} );

