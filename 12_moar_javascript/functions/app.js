var expressGratitude = function(name) {
	console.log("you have saved our lives," + name);
	console.log("we are eternally gratefull");
};

var join = function(firstWord, secondWord) {
	var joinedWord = firstWord + " " + secondWord;

	return joinedWord;
};


//recipe has 3 numbers to do its job...called 1 2 3
//var sumOfThree = function(number1, number2, number3){
//	console.log("")}


// WRITE A FUNCTION THAT ACCEPTS THREE NUMBERS, AND RETURNS THIER SUM

var sumOfThree = function(firstNum, secondNum, thirdNum) {
	var total = firstNum + secondNum + thirdNum;
	return total;
};

var productOfThree = function(firstNum, secondNum, thirdNum){
	var product = firstNum * secondNum * thirdNum;
	return product;
};