$( document ).ready(function() {

//Your jquery goes here
window.onkeydown = function (e) { if (!e) { e = window.event; }

var code = e.keyCode; 
var player = document.getElementById("player");
var top = parseInt (player.style.top, 10); var left = parseInt (player.style.left, 10); 
if ( code == 37 ) {  if ( left > 0 ) { player.style.left = left - 10 + 'px'; } } else if ( code == 38 ) {if ( top > 0 ) { player.style.top = top - 10 + 'px'; } } else if ( code == 39 ) { if ( left+player.width+10 < window.innerWidth ) { player.style.left = left + 10 + 'px'; } } else if ( code == 40 ) { if ( top+player.height+10 < window.innerHeight ) { player.style.top = top + 10 +'px'; } } }
});