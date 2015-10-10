// // LETTER CAPITALIZATION

var letters = [ ];

var newString = "";

var spaceLocation = -1; 

var letterCapitalize = function ( oldString ) {
	for ( var x = 0 ; x < oldString.length ; x++ ) {
		if ( oldString[x] === " "){
			spaceLocation = x ;
			newString = newString + " ";
		}
		else if ( x === spaceLocation + 1 ){
			var upper = oldString.substring(x,x+1).toUpperCase();
			newString = newString + upper;
		}
		else {
			newString = newString + oldString[x];
		}
	}
	return newString;
}

console.log(letterCapitalize(prompt("Give me a string with some number of lowercase words and I will capitalize them!")));





// WORD COUNTER

var wordCount = function ( string ) {

	var numberWords = 1;
	var stringLength = string.length;
	for ( var i = 0 ; i < stringLength - 1 ; i++ ) {
		var letter = string.substring(i, i + 1);
		if( letter === " "){
			numberWords+=1;
		};
	};
	return numberWords;
};

console.log(wordCount(prompt("Give me a string and I'll tell you how many words it contains!")));





// PRIME NUMBER FINDER

var primeTime = function (number) {
	for(var counter = 2; counter <= number / 2 ; counter++){
		if(number%counter === 0){
			return false;
		};
	};
};

do{var number = prompt("Give me a whole number greater than one, please!\nI will determine whether it is prime!")}while(isNaN(number)||(number%1!==0)||(number<=1)||(number>Math.pow(2,16)));

if (primeTime(number)===false){
	console.log("That's not a prime number. Sorry.");
}
else{
	console.log("Hey, you've found a prime number!");
};