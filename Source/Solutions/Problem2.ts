function getEvenFibonacciSum(upperlimit: number) {
	let a1 = 0;
	let a2 = 1;
	let sum = 0;
	let evenSum = 0;

	while(sum < upperlimit) {
		sum = a1 + a2;
		a1 = a2;
		a2 = sum;

		if(sum % 2 === 0) {
			if(sum > upperlimit) break;
			evenSum += sum;
		}
	}

	return evenSum;
}

console.log(getEvenFibonacciSum(4 * Math.pow(10, 6)));
// console.log(getEvenFibonacciSum(30));