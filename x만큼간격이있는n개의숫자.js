function solution(x, n) {
    var answer = [];

	for(var i=1; i < n +1; i++){
		answer.push(x * i);
	}
	console.log(answer);
	
    return answer;
}

solution(2, 5);