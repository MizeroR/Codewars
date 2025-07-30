function revrot(str, sz) {
    if (sz <= 0 || str === "" || sz > str.length) return "";
    
    const chunks = [];
    for (let i = 0; i < str.length; i += sz) {
        const chunk = str.slice(i, i + sz);
        if (chunk.length === sz) {
            chunks.push(chunk);
        }
    }
    
    const processedChunks = chunks.map(chunk => {
        const sum = chunk.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        if (sum % 2 === 0) {
            return chunk.split('').reverse().join('');
        } else {
            return chunk.slice(1) + chunk[0];
        }
    });
    
    return processedChunks.join('');
}