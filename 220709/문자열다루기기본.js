function solution(s) {
    var answer = true;

	if(s.length === 4 || s.length === 6){
		if(isNaN(s) == true){
			answer = false;
		}else {
			answer = true;
		}
	}else {
		answer = false;
	}

	//구글링
	// for(var i=0; i<s.length; i++){
	// 	if(isNaN(Number(s[i]))){
	// 		answer = false;
	// 	}
	// }

	console.log(answer);
    return answer;
}

solution('1e22');