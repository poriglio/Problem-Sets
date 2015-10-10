// -=-=-=-=-=
// PALINDROME
// -=-=-=-=-=

var palindrome = function (word) {

	var original = word.toLowerCase()
	var reverse = original.split("").reverse().join("")
	return "Palindrome: " + (reverse === original)

};

alert(palindrome(prompt("Give me a word. I will tell you whether it is a palindrome!")))

// -=-=-=-=-=-
// DASH INSERT
// -=-=-=-=-=-

var dashInsert = function (number) {
	var newArray = number.split("").map(function(element,index,arr){
		if((index===arr.length-1)||(element%2===0)||(element%2!==0) && (arr[index+1]%2==0)){
			return element
		}
		else{
			return element + "-"
		}
	})
	return newArray.join("")
}

alert(dashInsert(prompt("Give me a string of digits. I will insert hyphens between the adjacent odd digits.")))

// -=-=-=-=-=-=-
// CAESAR CIPHER
// -=-=-=-=-=-=-

var letterCipher = function ( letter, number ) {

	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	
	var capsAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
	
	if(_.indexOf(alphabet, letter)!==-1){
		var newIndex = number + _.indexOf(alphabet,letter)
		if(newIndex>25){
			newIndex%=26
		}
		return alphabet[newIndex]
	}
	else if(_.indexOf(capsAlphabet,letter)!==-1){
		var newIndex = number + _.indexOf(capsAlphabet,letter)
		if(newIndex>25){
			newIndex%=26
		}
		return capsAlphabet[newIndex]
	}
	else{
		return letter
	}
}

var caesarCipher = function (string,number){

	var cipher = string.split("").map(function(element){
		return letterCipher(element,number)
	})

	return cipher.join("")
}

alert("Your ciphered phrase is:\n" + caesarCipher(prompt("Give me a word or sentence to cipher!"),Number(prompt("Give me a number of letters to shift by!"))))