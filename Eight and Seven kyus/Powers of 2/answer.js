function powersOfTwo(n){
    let result =[]
    for (let i =0 ; i<=n; i++){
      let ans = 2**i
      result.push(ans)
    }
    return result
  }