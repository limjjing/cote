function solution() {
	var arr = [1,2,3,4];

	answer = arr.reduce((a,b) => (a+b));

	console.log(answer);

    return answer;
}

solution();