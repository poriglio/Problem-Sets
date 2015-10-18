// SECOND GREAT LOW: 
// This function must take a single array of numbers and return both the second lowest and the second greatest numbers, separated by a space. For instance, if the array contains [7,7,12,98,106], the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there are only two numbers! For instance [7,12] should return 12 7. [4,8,12] should return 8 8. [1,2,3,4] should return 2 3. 

// Steps:
// 1. Sort the array so it is organized from lowest to highest.
// 2. Test the second number in the array. If it is the same as the first number, test the third, and so on, until a number is not the same as the first. That number will be the first number returned.
// 3. Test the second to last number in the array. If it is the same as the last number in the array, keep testing until you find one that is not the same. This is the second number to return.
// 4. This should work even in the case of a small array. However, in the case of there being two numbers that are identical in an array of two numbers, just return the two numbers.


findSecondLow = function(array){
	for(var i = 1; i<array.length; i++){
		if(array[0]!==array[i]){
			var secondLow = array[i]
			break
		}
		else if((array[0]===array[i])&&(i===array.length-1)){
			var secondLow = array[i]
		}
	}
	return secondLow
}

findSecondGreat = function(array){
	for(var i = array.length-2; i>=0; i--){
		if(array[array.length-1]!==array[i]){
			var secondGreat = array[i]
			break
		}
		else if((array[array.length-1]===array[i])&&(i===0)){
			var secondGreat = array[i]
		}
	}
	return secondGreat
}

var array = process.argv[2].split(",")

secondGreatLow = function(array){
	array.sort(function(a,b){
		return a-b
	})
	var secondLow = findSecondLow(array)
	var secondGreat = findSecondGreat(array)
	return secondLow + " " + secondGreat
}

console.log(secondGreatLow(array))