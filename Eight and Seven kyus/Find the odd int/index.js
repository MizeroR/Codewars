function findOdd(A) {
    let obj = {}
    let arr = []
    for(let num of A){
      (!obj[num])? obj[num] = 1 : obj[num]++
    }
    let result = Object.keys(obj).filter(key => obj[key] % 2 !== 0)
    return Number(result)
    return 0;
}