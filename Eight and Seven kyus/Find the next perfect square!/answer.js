function findNextSquare(sq) {
    let num = Math.sqrt(sq)
    if(Number.isInteger(num)){
      return ((num)+1)**2
    }
    return -1;
  }