 
function largest(n, array) {
  let answer = []
  array.sort((a,b) => b-a)
  for (let num of array){
    if(answer.length < n){
      answer.push(num).
    }
  }
  return answer.sort((a,b) => a-b)
}