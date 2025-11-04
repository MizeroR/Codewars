var maxSequence = function(arr){
  if (arr.length === 0) return 0
  let totalSum = 0
  let sum = 0
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
    if ( sum < 0) { sum = 0 } 
    if (sum > totalSum) { totalSum = sum }
  }
  return totalSum
}