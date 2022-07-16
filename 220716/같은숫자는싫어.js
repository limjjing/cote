function solution(arr){
	arr = [1,1,3,3,0,1,1];
	
	//연속된숫자
	

	// var sum = 0;
    // var container = [];
    
    // for (var i = 0; i < arr.length; i++) {
    //   sum = arr[i];
      
    //   if (arr[i] != arr[i+1]) {
    //     container.push(sum);
    //     sum = 0;
    //   }
    // }

	// console.log(container);
    
    // return container;

	var sum = 0;
	var container = [];

	for(var i=0; i<arr.length; i++){
		sum = arr[i];
		console.log(sum);
		console.log('플', arr[i+1]);

		if(arr[i] !== arr[i+1]){
			container.push(sum);
			// 여기서 0주는 이유?
			sum = 0;
			console.log('이프',sum);
		}
	}

	return container;




	// 중복제거
	// var arrCheckVal = new Array();

	// var chk = true;
	

	// for(var i=0; i < arr.length; i++){
	// 	chk = true;
	// 	for(value in arrCheckVal){
	// 		if(arrCheckVal[value] == arr[i]){
	// 			chk = false;
	// 		}
	// 	}

	// 	if(chk){
	// 		arrCheckVal.push(arr[i]);
	// 	}
	// }

	// console.log(arrCheckVal);

	// return arrCheckVal;

	
	


	//같은값 비교
	// var tmpA;
	// var tmpB;

	// for(var i=0; i < arr.length; i++){
	// 	tmpA = arr[i];
	// 	console.log('아이', tmpA);
	// 	for(var j = i+1; j < arr.length; j++){
	// 		tmpB = arr[j];
	// 		console.log('제이미', tmpB);
	// 		if(tmpA == tmpB){
	// 			arr.splice(i, 1);
	// 			// console.log(arr);
	// 		}
	// 	}
	// }


	//세트컬렉션 객체?
	// const setCollection = new Set(arr);

	// const isDuplicate = setCollection.size < arr.length;

	// console.log(isDuplicate); 

	// console.log(setCollection);

	//세트2
	// const set = new Set(arr);

	// const uniqueArr = [...set];

	// console.log(Array.isArray(uniqueArr));
	// console.log(uniqueArr);
}

solution();