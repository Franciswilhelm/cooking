var liters = function(gallons) {
	return (gallons * 3.79).toFixed(2);
}

var input = prompt("How many gallons?");
alert("That is equal to " + liters(input) + "liters.");
