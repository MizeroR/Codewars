const reverseSeq = n => {
    let newArr = []
    for(let base = 1; base <= n ; base++){
      newArr.push(base)
    }
    return newArr.reverse()
  };