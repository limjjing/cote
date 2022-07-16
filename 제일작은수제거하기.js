function solution(arr) {
	arr = [10];

	var mma = Math.min.apply(null, arr);
	arr.splice(arr.indexOf(mma), 1);

	if(arr.length === 0){
		arr = [-1];
	}

	console.log(arr);

	return arr;
}

solution();