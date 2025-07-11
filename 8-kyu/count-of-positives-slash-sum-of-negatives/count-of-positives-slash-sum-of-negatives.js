function countPositivesSumNegatives(input) {
  let count = 0
  let sum = 0
  for(let i = 0; i<input.length;i++){
    if (input[i] > 0){
      count +=input[i]
    }
  }
  console.log(count)
  return [count,sum]
}