// Take the remainder of the number divided by sixty. This number is the minutes. Subtract the number of minutes from the original number. Divide the difference by sixty. This number is the number of hours.

var number = process.argv[2]

var timeConvert = function(number){
	var minutes = number%60
	var hours = (number-minutes)/60
	return hours + ":" + minutes
}

console.log(timeConvert(number))