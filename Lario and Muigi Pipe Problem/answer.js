function pipeFix(numbers){
    let firstChar = numbers.at(0)
    let lastChar = numbers.at(-1)
    let newArr = []
    for (let i = firstChar ; i <= lastChar ; i++){
      newArr.push(i)
    }
    return newArr
  
  }