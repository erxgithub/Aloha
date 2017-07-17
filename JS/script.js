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
}
