function strCount(str, letter){
    let count = 0
    for(let c of str){
      if (c === letter){
        count++
      } 
    }
    return count
  }