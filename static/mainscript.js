/*		FILE NAME: 	mainscript.js
		WRITTEN BY: Heidi Wang
		DATE: 		August 2011 */


function fadeEffect() {

	var opacity = parseFloat(document.getElementById("main_content").style.opacity);
	
	if ( opacity < 1.0 ) {
		document.getElementById("main_content").style.opacity = opacity + 0.05;
		setTimeout(fadeEffect, 50);
	}
}
