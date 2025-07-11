function countPositivesSumNegatives(input) {
  if (input || input.length === 0) return [] // Refactor it to pass this condition If the input is an empty array or is null, return an empty array.
​
​
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