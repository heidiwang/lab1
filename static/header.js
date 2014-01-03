/*		FILE NAME: 	header.js
		WRITTEN BY: Heidi Wang
		DATE: 		August 2011 */



function writeNavbar(selected) {
	document.write("<a href='index.html'><h1>Heidi J. Wang<\/h1><\/a>");
	document.write("<div id='main_navi'><p>");
	document.write("<a " + ((selected == "about") ? "id='selected'" : "") + "href='about.html'><h2>about</h2><\/a><p>");
	document.write("<a " + ((selected == "projects") ? "id='selected'" : "") + "href='projects.html'><h2>projects<\/h2><\/a><p>");
	document.write("<a " + ((selected == "contact") ? "id='selected'" : "") + "href='contact.html'><h2>contact<\/h2><\/a><p>");
	document.write("</div>");
}