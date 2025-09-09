function solution (roman) {
    if (roman === '') return 0;
    
    // Check for subtractive notation pairs first
    if (roman.startsWith('CM')) return 900 + solution(roman.slice(2));
    if (roman.startsWith('CD')) return 400 + solution(roman.slice(2));
    if (roman.startsWith('XC')) return 90 + solution(roman.slice(2));
    if (roman.startsWith('XL')) return 40 + solution(roman.slice(2));
    if (roman.startsWith('IX')) return 9 + solution (roman.slice(2));
    if (roman.startsWith('IV')) return 4 + solution(roman.slice(2));
    
    // Check for single symbols
    if (roman.startsWith('M')) return 1000 + solution(roman.slice(1));
    if (roman.startsWith('D')) return 500 + solution(roman.slice(1));
    if (roman.startsWith('C')) return 100 + solution(roman.slice(1));
    if (roman.startsWith('L')) return 50 + solution(roman.slice(1));
    if (roman.startsWith('X')) return 10 + solution(roman.slice(1));
    if (roman.startsWith('V')) return 5 + solution(roman.slice(1));
    if (roman.startsWith('I')) return 1 + solution(roman.slice(1));
    
    return 0;
}
​