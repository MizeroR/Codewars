 
function twoSum(numbers, target) {
  for(let i =0; i<numbers.length;i++){
    console.log(numbers[i])
    for(let j = i+1; j<numbers.length;j++){
      console.log(numbers[j])
      if(numbers[i] + numbers[j] === target){
        return [i,j] 
      }
    }
  }
}