function solution(phone_number) {
    var answer = '';

	// 방법1
	// phone_number = '01073603179';

	// var back = phone_number.substr(-4, 4);

	// var front = phone_number.substring(0, phone_number.length -4);

	// var result = front.replace(/[0-9]/g, '*');
	
	// answer = result + back;

	//방법2

	answer = '*'.repeat(phone_number.length -4) + phone_number.slice(-4);

	console.log(answer);

	// console.log(phone_number.substr(-4));
	// console.log(phone_number.replace(/0|1|2|3|4|5|6|7|8|9/g, '*'));
    return answer;
}

solution('01073603179');