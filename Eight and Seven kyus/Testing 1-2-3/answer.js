var number=function(array){
    let newArr = []
    for(let i = 1; i<=array.length;i++){
      newArr.push(`${i}: ${array[i-1]}`)
    }
    return newArr
  }