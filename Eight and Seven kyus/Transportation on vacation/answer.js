function rentalCarCost(d) {
    let result = 0
    if(d>=7){
      result = d * 40 - 50
      return result
    }if (d <= 6 && d>= 3){
      result = d * 40 - 20
    }else 
    result = d * 40 
    return result
  }