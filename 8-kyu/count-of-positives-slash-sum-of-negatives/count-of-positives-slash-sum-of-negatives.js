function countPositivesSumNegatives(input) {
  if (!input) return []
  let count = 0
  let sum = 0
  for(let i = 0; i<input.length;i++){
    if (input[i] > 0){
      count ++
    }
  }
  for(let i = 0; i<input.length;i++){
    if (input[i] < 0){
      sum += input[i]
    }
  }
  return [count,sum]
}