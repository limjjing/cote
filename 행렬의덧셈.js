function solution(arr1, arr2) {
    var answer = [new Array(arr1[0].length).fill(0), new Array(arr2[0].length).fill(0)];
	
	for(var i = 0; i < answer.length; i++){
		answer[0][i] = arr1[0][i] + arr2[0][i]
		answer[1][i] = arr1[1][i] + arr2[1][i]
	}

	console.log(arr1.length);

    return answer;
}

var arr1 = [[1,2],[2,3]];
var arr2 = [[3,4],[5,6]];

solution(arr1, arr2);


// function solution(arr1, arr2) {
//     var answer = [Array(arr1[0].length).fill(0), Array(arr2[0].length).fill(0)];

// 	for(var i=0; i<answer.length; i++){
// 		answer[0][i] = arr1[0][i] + arr2[0][i];
// 		answer[1][i] = arr1[1][i] + arr2[1][i];
// 	}

// 	console.log(answer);
//     return answer;
// }

// var arr1 = [[1,2],[2,3]];
// var arr2 = [[3,4],[5,6]];

// solution(arr1, arr2);