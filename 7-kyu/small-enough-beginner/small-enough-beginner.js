function smallEnough(a, limit){
  for(let num of a){
    if(num > limit) return false
    return true
  }
}