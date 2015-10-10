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

// Considers some different combinations of coins by beginning test at different places in the coins array. Still probably does not give all possible combinations.

possibleCoins = function (number,startindex){
	var coins = ["11","9","7","5","1"]
	var numCoins = 0
	var number = number
	for(var i = startindex; i<coins.length; i++){
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

coinDeterminer = function ( number ) {
	var possibilities = []
	for(var x = 0; x < 5; x++){
		possibilities.push(possibleCoins(number,x))
	}
	return possibilities.sort(function(a,b){
		return a-b
	})[0]
}

