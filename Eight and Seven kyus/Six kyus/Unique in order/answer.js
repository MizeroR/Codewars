var uniqueInOrder = function (iterable) {
    let result = [];
    
    // Ensure iterable is an array (handles strings or arrays)
    if (typeof iterable === "string") {
      iterable = iterable.split('');
    }
  
    for (let i = 0; i < iterable.length; i++) {
      // Add the current element to result if it's not the same as the next one
      if (iterable[i] !== iterable[i + 1]) {
        result.push(iterable[i]);
      }
    }
    
    return result;
  };