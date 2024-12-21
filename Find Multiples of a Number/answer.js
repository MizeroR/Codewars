function findMultiples(integer, limit) {
    let ans = []
    for(let i = integer ; i <= limit ; i+=integer){
      ans.push(i)
    }
    return ans
  }