function solution(n) {
	var a1 = String(n);
	var aa = (arg) => Number(arg);
	var narr = Array.from(a1, aa);

	narr.reverse();

	console.log(narr);

    return narr;
}

solution(15932);