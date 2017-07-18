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

var prevMinSlides = 0;
var prevMaxSlides = 0;

$(document).ready(function() {
	var minSlides;
	var maxSlides;

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

	var slider = $('.bxslider').bxSlider({
        minSlides: minSlides,
        maxSlides: maxSlides,
        slideWidth: 390,
		slideMargin: 10
    });

	// adjust number of slides for browser window resize

	$(window).resize(function () {
		var minSlides;
		var maxSlides;

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
		
		if (minSlides != prevMinSlides || maxSlides != prevMaxSlides) {
			slider.reloadSlider({
		        minSlides: minSlides,
	    	    maxSlides: maxSlides,
	        	slideWidth: 390,
				slideMargin: 10
	    	});

	    	prevMinSlides = minSlides;
	    	prevMaxSlides = maxSlides;
		}
	});
});
