function isPrime(number: number) {
	for(let i = 2; i * i <= number; i++) {
		if(number % i === 0) return false;
	}

	// If a number comes till here, it has no factors
	return true;
};

function getLargestPrime(number: number) {
	let largestPrime = 0;
	const primeArr: number[] = [];

	for(let i = 2; i * i <= number; i++) {
		if(number % i !== 0) continue;

		// if number comes here, means it is a factor of NUMBER
		if(!isPrime(i)) continue;

		// if number comes here as well, that means it is a prime factor!
		largestPrime = i;
		number = number / i;
		primeArr.push(largestPrime);
		// Number is basically now the Npseudo
	}

	if(number > largestPrime) {
		largestPrime = number;
		primeArr.push(number);
	}

	return {
		largestPrime,
		primeArr,
	};
};

console.log(getLargestPrime(600851475143));

// That shows us that = is more harmful than !
// Result: { largestPrime: 6857, primeArr: [ 71, 839, 1471, 6857 ] }