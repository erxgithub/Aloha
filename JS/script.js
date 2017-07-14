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

var addToCart = function() {
	cart.addItem();
};
