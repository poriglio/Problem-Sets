var code = process.argv[2]

var bracketMatcher = function(code){
	var curly1 = 0
	var curly2 = 0
	var parenth1 = 0
	var parenth2 = 0
	for(var i = 0; i<code.length; i++){
		if(code.charAt(i)==="{"){
			curly1++
		}
		else if(code.charAt(i)==="}"){
			curly2++
		}
		else if(code.charAt(i)==="("){
			parenth1++
		}
		else if(code.charAt(i)===")"){
			parenth2++
		}
	}	
	if((curly1!==curly2)&&(parenth1!==parenth2)){
		return "Neither type of brackets is matched in your code."
	}
	else if(curly1!==curly2){
		return "The curly brackets are not matched in your code."
	}
	else if(parenth1!==parenth2){
		return "The parentheses are not matched in your code."
	}
	else{
		return "The brackets in your code are properly matched."
	}
}

console.log(bracketMatcher(code))