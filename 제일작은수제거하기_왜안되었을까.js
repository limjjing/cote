function solution(arr) {
	arr = String(arr);
	var mapfn = (arg) => Number(arg);
	var answer = Array.from(arr, mapfn);

	var mma = Math.min.apply(null, answer);
	answer.splice(answer.indexOf(mma), 1);

	if(arr.length === 1){
		answer = [-1];
	}

	console.log(answer);

	return answer;
}

solution(10);