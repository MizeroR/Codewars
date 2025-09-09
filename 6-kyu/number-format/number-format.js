var numberFormat = (n) => {
    const numStr = Math.abs(n).toString();
    
    const formatted = numStr
        .split('')
        .reverse()
        .map((digit, index) => (index > 0 && index % 3 === 0) ? digit + ',' : digit)
        .reverse()
        .join('');
    
    return n < 0 ? '-' + formatted : formatted;
};
​