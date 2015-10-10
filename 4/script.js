// -=-=-=-=-=
// EXERCISE 1
// -=-=-=-=-=

var makeArray = function(string){
	newArray = []
	for(var x=0;x<string.length;x++){
		newArray.push(string.substring(x,x+1))
	}
	return newArray
}

var calculate = function(array){
	var total=0
	var longNumber = []
	array.forEach(function(element,index,array){
		if(isNaN(element)&&longNumber.length>0){
			total+= Number(longNumber.join(""))
			longNumber = []
		}
		else if(isNaN(element)){
			return false
		}
		else if(!isNaN(element)&&index===array.length-1){
			longNumber.push(element)
			total+= Number(longNumber.join(""))
			longNumber = []
		}
		else{
			longNumber.push(element)
		}
	})
	return total
}

var addNumbers = function(string){
	var newArray = makeArray(string)
	return calculate(newArray)
}

// -=-=-=-=-=
// EXERCISE 2
// -=-=-=-=-=

var singleLetter = function(letter){
	letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	for(var x=0;x<letters.length;x++){
		if(letter===letters[x]){
			return true
		}
		else if((letter!==letters[x])&&(x===letters.length-1)){
			return false
		}
	}
}

var lettersOnlyWord = function(word){
	var word = word.split("")
	word = word.filter(function(element){
		if(singleLetter(element.toLowerCase())){
			return true
		}
	})
	return word.reduce(function(previousValue,currentValue,index,array){
			return previousValue += currentValue
	})
}

var punctuationDestroyer = function(array){
	var newArray = array.map(function(element){
		return lettersOnlyWord(element)
	})
	return newArray
}

var lengthFinder = function(array){
	var lengths = []
	array.forEach(function(element){
		lengths.push(element.length)
	})
	return lengths
}

var highestNumber = function (array){
	array.sort(function(a,b){
		if(a>b){
			return -1
		}
		else if(b>a){
			return 1
		}
		else{
			return 0
		}
	})
	return array[0]
}

var findWord = function(array,length){
	var word = []
	array.forEach(function(element){
		if(element.length === length){
			word.push(element)
		}
	})
	return word[0]
}

var longestWord = function (string){
	var stringList = string.split(" ")
	stringList = punctuationDestroyer(stringList)
	var number = highestNumber(lengthFinder(stringList))
	return findWord(stringList,number)
}

// -=-=-=-=--=-=-
// BONUS EXERCISE
// -=-=-=-=-=-=-=

var bonus = function (string) {
	var total = 0
	var letterCount = 0
	makeArray(string).forEach(function(element){
		if(!isNaN(element)){
			total += Number(element)
		}
		else if(singleLetter(element)){
			letterCount++
		}
	})
	return Math.round(total/letterCount)
}