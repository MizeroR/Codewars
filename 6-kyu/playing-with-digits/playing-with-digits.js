function digPow(n, p){
  let number = n.toString().split('')
  let sum = 0
  for(let i=0; i < number.length; i++){
    let digit = parseInt(number[i])
    let power = p+i
    sum+=digit**power
  }
  if(sum%n===0) return 'true'
}
​