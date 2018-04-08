<?php
/*
Plugin Name:  Bloko
Plugin URI:   https://github.com/mkaz/bloko
Description:  A simple example block for Gutenberg
Author:       Marcus Kazmierczak
Author URI:   https://mkaz.blog/
*/


/**
 * Enqueue assets for editor portion of Gutenberg.
 */
function mkaz_bloko_editor() {
	wp_enqueue_script(
		'mkaz-bloko',
		plugins_url( 'block.built.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element' )
	);
}
add_action( 'enqueue_block_editor_assets', 'mkaz_bloko_editor' );


/**
 * Enqueue assets for displaying block
 */
function mkaz_bloko_style() {
	wp_enqueue_style(
		'mkaz-bloko',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}
add_action( 'enqueue_block_assets', 'mkaz_bloko_style' );
