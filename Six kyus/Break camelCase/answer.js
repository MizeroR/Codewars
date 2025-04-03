let solution = (str) =>{
    let answer = ''
    let result = str.split('')
    for(let char of result){
      if(char === char.toUpperCase()){
        char = ' '+char
      } 
      answer += char
    }
    return answer
}