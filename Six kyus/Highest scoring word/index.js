function high(x){
  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let xScore = []
    let keys = x.split(" ")
    for(let word of x.split(" ")){
      let wordScore =[]
      for(let char of word.split('')){
        wordScore.push(alphabet.indexOf(char)+1)
      }
      let score = []
      score.push(wordScore)
      for(let sco of score){
        xScore.push(sco.reduce((a,b)=>a+b))
      }
     }
    
    
    let values = xScore
    let obj = {}
    keys.forEach((key,index)=>obj[key]=values[index])
    let maxNumber = Math.max(...values)
    let result = Object.keys(obj).find(key => obj[key] === maxNumber)
    return result
  } 
  