function solution(x) {
    var answer = true;
	x = 12;
	x = String(x);
	var mapfn = (arg) => Number(arg);
	var newArr = Array.from(x, mapfn);

	var plus = newArr.reduce((a, b) => a + b);
	
	if(x % plus == 0){
		answer = true;
	}else {
		answer = false;
	}
	
	console.log(x);
	console.log(plus);
	console.log(answer);

    return answer;
}

solution();