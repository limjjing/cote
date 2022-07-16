function solution(num) {
    var answer = '';

	if(num % 2 == 0){
		console.log('even');
	}else{
		console.log('odd');
	}

	console.log(num % 2);

    return answer;
}

solution('22');