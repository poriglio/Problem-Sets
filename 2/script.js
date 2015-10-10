// PROBLEM 1

var splitter = function ( string ) {
	return string.split(" ")
}

var firstReverse = function ( string ) {
	return splitter(string).reverse()
}

console.log(firstReverse("Paula loves somebody"))






// PROBLEM 2

// LOWERCASE LETTERS ARE GREATER THAN UPPERCASE LETTERS
// LETTERS LATER IN THE ALPHABET ARE GREATER THAN THOSE EARLIER IN THE ALPHABET


// FUNCTION TO TURN STRING INTO AN ARRAY OF LETTERS
var toArray = function (string) {
	return string.split("")
}

// FUNCTION TO CREATE A NEW ARRAY WITH FLIPPED CASES
var arrayFlip = function (array){
	var newArray = array.map(function(element){
		if(element<"a"){
			return element.toLowerCase()
		}
		else{
			return element.toUpperCase()
		}
	})

	return newArray
}

// FUNTION TO CONCATENATE NEW ARRAY AND RETURN THE NEW STRING
var swapCase = function ( string ) {

		return arrayFlip(toArray(string)).reduce(function(runningTotal,currentValue){
			return runningTotal + currentValue
		},"")
}

alert(swapCase(prompt("Give me a string with letters of varying cases!")))









// PROBLEM 3

// var letterCount = function ( string ) {

// }

// letterCount("Cheddar Lately Disability Cheeseheads")

