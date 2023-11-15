function testIfPrime(n, primelist) {
	var i = 1; 
	var j = primelist[i];
        while (j <= n*n) {
		if (n % j === 0) {
			return false; 
        	}

        	i++;
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
