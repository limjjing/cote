function solution(n) {
    var answer = '';
	var s = '수';
	var b = '박';

	for(var i=0; i<n; i++){
		if(i % 2 === 0){
			answer += s;
		}else {
			answer += b;
		}
		
		console.log(answer);
	}
    return answer;
}


solution(3);