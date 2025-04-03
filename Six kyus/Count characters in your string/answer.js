let count = (string) => {
    let countChar = {}
    for(let char of string){
      (countChar[char])? countChar[char]++ : countChar[char]=1
    }
    return countChar
    return {};
  }