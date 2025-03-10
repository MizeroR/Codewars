let duplicateEncode = (word) =>{
    word = word.toLowerCase().split("")
    let obj1 ={}
    for(let item of word){
      obj1[item] ? obj1[item]++ : obj1[item] = 1
      
    }
  let result = ''
  for(let item of word){
    obj1[item] === 1? result+=`(` : result+=`)`
  }
      return result
    
}