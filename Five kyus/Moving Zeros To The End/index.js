function moveZeros(arr) {
    let result1 = []
    let result2 = []
    
    for (let num of arr){
      (num === 0 ? result2 : result1).push(num);
    }
    
    return [...result1, ...result2]
  }