$( document ).ready(function() {

//Your jquery goes here
window.onkeydown = function (e) { if (!e) { e = window.event; }

var code = e.keyCode; 
var player = document.getElementById("player");
var top = parseInt (player.style.top, 10); var left = parseInt (player.style.left, 10); 
if ( code == 37 ) {  if ( left > 0 ) { player.style.left = left - 10 + 'px'; } } else if ( code == 38 ) {if ( top > 0 ) { player.style.top = top - 10 + 'px'; } } else if ( code == 39 ) { if ( left+player.width+10 < window.innerWidth ) { player.style.left = left + 10 + 'px'; } } else if ( code == 40 ) { if ( top+player.height+10 < window.innerHeight ) { player.style.top = top + 10 +'px'; } } };
});

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;}
  $.each($('#citty'), function() {
      if (collision($('#player'), $(this))) {
      	        var cittyquestion = prompt("I'm tall when I'm young and short when I'm old. What am I?").toLowerCase();
      	        if (cittyquestion === "candle"){
      	        	alert("Pass. And don't come back!");
      	        	      	        }      
      	        else {
      	        	alert("Nope! Try again, or go away and don't bother me…");
      	        }}
    });
  }, 200);
      });


function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
      window.setInterval(function() {
  }$.each($('#xl'), function() {
      if (collision($('#player'), $(this))) {
      	        $("#alwaysPizza").show().delay(200).fadeOut();      }
    });
  }, 200);
      });

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
      window.setInterval(function() {
  }$.each($('#dlanod'), function() {
      if (collision($('#player'), $(this))) {
      	        $("#alwaysPizza").show().delay(200).fadeOut();      }
    });
  }, 200);
      });

