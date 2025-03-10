let deleteNth = (arr,n) => {
    let countMap = {}
    let result = []
    
    for(let num of arr){
      (!countMap[num]) ? countMap[num]=1: countMap[num]++
      countMap[num] <= n ? result.push(num):null
    }
    return result
  }