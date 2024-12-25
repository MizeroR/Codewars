function getDivisorsCnt(n) {
    let result = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result += 1; // Count the divisor i
            if (i !== n / i) {
                result += 1; // Count the paired divisor (n / i)
            }
        }
    }
    return result;
}