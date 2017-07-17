// script.js (Eric Gregor)

var cart = {
	itemCount: 0,
	addItem: function () {
		var x = document.getElementById("itemCount");

		if (x.style.display != "block") {
			x.style.display = "block";
		}

		cart.itemCount += 1;

		x.textContent = cart.itemCount.toString();
	}
};

window.onload = function () {
    if (window.jQuery) { 
    	console.log("jQuery loaded")
    }
    else {
    	console.log("jQuery not loaded")
    }

	$(".add-button").click(function() {
		cart.addItem();
	});
};

$(document).ready(function() {
	var minSlides, maxSlides;
    var width = $(window).width();

	if (width < 600) {
    	minSlides = 1;
    	maxSlides = 1;
	}
	else if (width < 1240) {
    	minSlides = 2;
    	maxSlides = 2;
	}
	else {
    	minSlides = 4;
    	maxSlides = 4;		
	}

	$('.bxslider').bxSlider({
        minSlides: minSlides,
        maxSlides: maxSlides,
        slideWidth: 390,
		slideMargin: 10
    });

/*	$(window).resize(function () {
		var minSlides, maxSlides;
    	var width = $(window).width();

		if (width < 600) {
	    	minSlides = 1;
	    	maxSlides = 1;
		}
		else if (width < 1240) {
	    	minSlides = 2;
	    	maxSlides = 2;
		}
		else {
	    	minSlides = 4;
	    	maxSlides = 4;		
		}

		var slider = $('.bxslider').bxSlider();

		//$('.bxslider').bxslider.reloadSlider({
		slider.reloadSlider({
	        minSlides: minSlides,
	        maxSlides: maxSlides,
	        slideWidth: 390,
			slideMargin: 10
	    });

	    console.log("resize");
	});
*/
	//var slider = $('.bxslider').bxSlider();
	//var widthMatch = matchMedia("only screen and (min-width: 600px) and (max-width: 1239px))");
    //var widthHandler = function(matchList) {
    //    if (matchList.matches) {
    //        slider.reloadSlider({
    //            minSlides: 1,
    //            maxSlides: 1,
    //            slideWidth: 390,
  	//			slideMargin: 10
    //        })
    //    } else {
    //        slider.reloadSlider({
    //            minSlides: 4,
    //            maxSlides: 4,
    //            slideWidth: 390,
  	//			slideMargin: 10
    //        })
    //    }
    //};
});
