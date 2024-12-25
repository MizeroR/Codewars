function getSum(a, b)
{
  let ans = 0
  if(a === b){ return a }
  if((a === b+1) || b === a+1){ return a+b }
  if(a < b){ 
    for(let i = a ; i <= b ; i++) {
      ans += i
    }
  }
  if(a > b){ 
    for(let i = a ; i >= b ; i--) {
      ans += i
    }
  }
  return ans
}