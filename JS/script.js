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

var addToCart = function() {
	cart.addItem();
};

window.onload = function () {
	document.getElementById("button1").onclick = function() {
		addToCart();
	};
	
	document.getElementById("button2").onclick = function() {
		addToCart();
	};
	
	document.getElementById("button3").onclick = function() {
		addToCart();
	};
	
	document.getElementById("button4").onclick = function() {
		addToCart();
	};
	
	document.getElementById("button5").onclick = function() {
		addToCart();
	};
	
	document.getElementById("button6").onclick = function() {
		addToCart();
	};
	
	document.getElementById("button7").onclick = function() {
		addToCart();
	};
	
	document.getElementById("button8").onclick = function() {
		addToCart();
	};
}
