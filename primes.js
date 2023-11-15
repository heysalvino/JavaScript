function testIfPrime(n, primelist) {
	var i = 1; 
	var j = primelist[i];
        while (j <= n*n) {
		if (n % j === 0) {
			return false; 
        	}

        	i++;function isPrime(number, primes) {
    const sqrtNumber = Math.sqrt(number);

    for (let i = 0; i < primes.length; i++) {
        if (primes[i] > sqrtNumber) {
            break;
        }
        if (number % primes[i] === 0) {
            return false;
        }
    }

    return true;
}

function findNthPrime(n) {
    if (n <= 0) {
        return undefined;
    }

    const primes = [2];
    let currentNumber = 3;

    while (primes.length < n) {
        if (isPrime(currentNumber, primes)) {
            primes.push(currentNumber);
        }
        currentNumber += 2; // Skip even numbers
    }

    return primes[n - 1];
}

console.log(findNthPrime(10001));

        	j = primelist[i];
	}
	return true;
}


function prime(nthPrime){
	var primelist = [2, 3];
	var next = 5;
	for(var i = 2; i <= nthPrime; i++){
		while (!testIfPrime(next, primelist)){
			next += 2;
		}
		primelist.push(next);
		next += 2;
	}

	return primelist[nthPrime - 1];

}

console.log(prime(10001));
