// -=-=-=-=-
// Problem 1
// -=-=-=-=-

var alphabetSoup = function (string) {
	return string.toLowerCase().split("").sort().join("")
}

// -=-=-=-=-
// PROBLEM 2
// -=-=-=-=-

var isVowel = function(letter){
	vowels = ["a","A","e","E","i","I","o","O","u","U","y","Y"]
	for(var i = 0; i<vowels.length; i++){
		if(letter===vowels[i]){
			return true
		}
		else if((letter!==vowels[i])&&(i===vowels.length-1)){
			return false
		}
	}
}

var vowelCount = function (string) {
	numVowels = 0
	for(var i=0; i<string.length; i++){
		if(isVowel(string.charAt(i))){
			numVowels++
		}
	}
	return numVowels
}

// -=-=-=-=-=-=-
// BONUS PROBLEM
// -=-=-=-=-=-=-

// Partially working, but it does not know when a lower number of coins can be used by skipping a larger coin.


coinDeterminer = function ( number ) {
	var coins = ["11","9","7","5","1"]
	var numCoins = 0
	var number = number
	for(var i = 0; i<coins.length; i++){
		var remainder = number%coins[i]
		if(remainder===0){
			numCoins += number/coins[i]
			break
		}
		else{
			numCoins += (number-remainder)/coins[i]
			number = remainder
		}

	}
	return numCoins
}

