
$(document).ready(function() {
    //Your jquery goes here
    var player = $("#player");
        var xl = $("#xl");
            var citty = $("#citty");


    $(document).keydown(function(e) {
        $(player).keydown;
        switch (e.which) {
            //move left
            case 37:
                $(player).animate({
                    left: "-=40px"
                }, 'fast');
                break;
                //move up
            case 38:
                $(player).animate({
                    top: "-=40px"
                }, 'fast');
                break;
                //move right
            case 39:
                $(player).animate({
                    left: "+=40px"
                }, 'fast');
                break;
                //move down
            case 40:
                $(player).animate({
                    top: "+=40px"
                }, 'fast');
                break;
        }
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
    }
    $.each($('#citty'), function() {
        if (collision($('#player'), $(this))) {
            var cittyquestion = prompt(
                "I'm tall when I'm young and short when I'm old. What am I?"
            ).toLowerCase();
            if (cittyquestion === "candle") {
                alert("Pass. And don't come back!");
            } else {
                alert(
                    "Nope! Try again, or go away and don't bother me…"
                );
            }
        } else {}
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
    $.each($('#xl'), function() {
            if (collision($('#player'), $(this))) {
                $("#alwaysPizza").show().delay(200).fadeOut();
            }
        })
    }

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
    //below is an if statement - if the variables calculate to the right formula, it will return true or false
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }
$.each($('.otherCar'), function() {
      if (collision($('#myCar'), $(this))) {
                    $("#alwaysPizza").show().delay(200).fadeOut();
                }else{}
            });
    
});