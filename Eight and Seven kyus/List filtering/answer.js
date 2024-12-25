function filter_list(l) {
    let newArray = []
    for(let i = 0 ; i < l.length ; i++){
      if(typeof l[i] === 'number'){
        newArray.push(l[i])
      }
    }
    return newArray
  }