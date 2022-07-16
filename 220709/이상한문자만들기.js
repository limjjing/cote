function solution(s) {

	// 시도1
	// for(var i=0; i<s.length; i++){
	// 	var Upper = s.charAt(i).toUpperCase();
	// 	var Lower = s.slice(1);
	// 	console.log(Upper + Lower);
	// }


	// var Upper = s.charAt(i).toUpperCase();
	// var Lower = s.slice(1);


	//filter 시도
	// var tttt = s.split('').filter(function(item) {
	// 	return item !== null && item !== undefined && item !== ' ';
	//   }).map(function(x, i){
	// 	if(i % 2 === 0){
	// 		return x.toUpperCase();
	// 	}else {
	// 		return x.toLowerCase();
	// 	}
	// });

	var tttt = s.split('').map(function(x, i){
		if(i % 2 === 0){
			return x.toUpperCase();
		}else {
			return x.toLowerCase();
		}
	});

	
	
	
		
	console.log(tttt.join('').replace(/\s+/g, ' '));
	console.log(tttt.length);
	
    return tttt.join('');
}

solution('try hello  world');