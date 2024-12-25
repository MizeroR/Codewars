function maskify(cc) {
    if(cc.length <= 4){
      return cc
    }
    let newCc = cc.split('').reverse()
    for(let i = 0 ; i < newCc.length ; i++){
      if(i > 3){
        newCc[i] = '#'
      }
    }
    return newCc.reverse().join('')
  }