const longestConsec = (strarr, k) => {
    const n = strarr.length;

    if (n === 0 || k > n || k <= 0) {
        return "";
    }

    let longest = "";
    
    for (let i = 0; i <= n; i++) {
        const newWord = strarr.slice(i, i + k).join(''); // Concatenate k consecutive strings
        if (newWord.length > longest.length) {
            longest = newWord; // Update longest if newWord is longer
        }
    }

    return longest;
};