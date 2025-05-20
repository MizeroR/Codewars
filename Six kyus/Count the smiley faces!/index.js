function countSmileys(arr) {
  let count = 0
  let smileySymb = /^[:;][-~]?[)D]$/
  for(let smi of arr){
    if(smileySymb.test(smi)){
      count++
    }
  }
  return count
}