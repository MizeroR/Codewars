function likes(names) {
    let msgTwo = " like this"
    let msgOne = " likes this"
    for(let i = 0 ; i < names.length ; i++){
      if (names.length === 0){ return 'no one' + msgOne}
      if (names.length === 1){ return names[i] + msgOne}
      if (names.length === 2){ return names[i] +' and '+  names[i+1] + msgTwo}
      if (names.length === 3){ return names[i] +', '+names[i+1] +' and '+  names[i+1+1] + msgTwo}
      if (names.length >= 4){ return names[i] + ', '+ names[i+1] + ' and ' + (names.length - 2) + ' others' + msgTwo}
    }
    return 'no one' + msgOne
  }