// script.js (Eric Gregor)

// shopping cart

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
	// check if jQuery loaded

    if (!window.jQuery) { 
    	console.log("jQuery not loaded");
    }

    // attach 'addItem' function to each 'add to cart' button

	$(".add-button").click(function() {
		cart.addItem();
	});
};

// bxSlider

var sliderSettings = {
	minSlides: 0,
	maxSlides: 0,
    slideWidth: 390,
	slideMargin: 10,
	prevMinSlides: 0,
	prevMaxSlides: 0,

	getSliderWidth: function () {
		var minSlides;
		var maxSlides;

    	// determine min and max number of slides to display based on browser window width

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

		sliderSettings.minSlides = minSlides;
		sliderSettings.maxSlides = maxSlides;
	},

	sliderWidthChange: function () {
		// check for change in number of slides to display

		if (sliderSettings.minSlides != sliderSettings.prevMinSlides || sliderSettings.maxSlides != sliderSettings.prevMaxSlides) {
	    	sliderSettings.prevMinSlides = sliderSettings.minSlides;
	    	sliderSettings.prevMaxSlides = sliderSettings.maxSlides;

	    	return true;
	    }
	    else {
	    	return false;
	    }
	}
};

$(document).ready(function() {
	// initial slider setup for current browser window size

	sliderSettings.getSliderWidth();

	var slider = $('.bxslider').bxSlider({
        minSlides: sliderSettings.minSlides,
        maxSlides: sliderSettings.maxSlides,
        slideWidth: sliderSettings.slideWidth,
		slideMargin: sliderSettings.slideMargin
    });

	$(window).resize(function () {
		// adjust number of slides to display for browser window resize

		sliderSettings.getSliderWidth();
		
		if (sliderSettings.sliderWidthChange()) {
			slider.reloadSlider({
		        minSlides: sliderSettings.minSlides,
	    	    maxSlides: sliderSettings.maxSlides,
        		slideWidth: sliderSettings.slideWidth,
				slideMargin: sliderSettings.slideMargin
	    	});
		}
	});
});
