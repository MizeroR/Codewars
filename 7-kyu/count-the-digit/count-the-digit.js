 
function nbDig(n, d) {
  let squares = []
    for (let i = 0; i<=n;i++){
      squares.push(i*i)
    }
  
  let count = 0
  let digit = d.toString()
  for (let num of squares){
    let numString = num.toString()
    for (let digit of numString){
            console.log(digit)
​
      if (digit === digit) count++
    }
  }
  return count
}
console.log(nbDig(10,1))