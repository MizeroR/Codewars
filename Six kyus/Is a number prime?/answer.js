function isPrime(num) {
    if(num<2){return false}
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // Found a divisor, not prime
    }
    return true; // No divisors found, it's prime
  }