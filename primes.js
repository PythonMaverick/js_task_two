function primesN(N) {
    // cache for speeding-up the iterations
    const primesCache = {};
    // local function to check for the prime numbers
    function isPrime(number) {
        if (number < 2) {
            return false;
        }
        // check if the number is already in primesCache object
        if (primesCache[number] !== undefined) {
            return primesCache[number];
        }

        for (let i =2; i < number; i++) {
            if (number % i === 0) {
                // not prime number
                primesCache[number] = false;
                return false;
            }
        }
        // if the number not divisible by any number below it -> it is prime
        primesCache[number] = true;
        return true;
    }
    // logic for storing and calculation of the first N prime numbers
    const primes = [];
    let num = 2;
    while(primes.length < N) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}

console.time("prime's time complexity: ");
console.log(primesN(process.argv[2]));
console.timeEnd("prime's time complexity: ");
