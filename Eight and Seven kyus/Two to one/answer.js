function longest(s1, s2) {
    let combined = s1 + s2
    let result = ''
    for(let char of combined){
      if(!result.includes(char)){
        result += char
      }
    }
    return result.split('').sort().join('')
  }