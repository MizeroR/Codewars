String.prototype.toAlternatingCase = function() {
    let result = ''
    for (let char of this){
      char == char.toLowerCase()? result+=char.toUpperCase() : result+=char.toLowerCase()
    }
    return result
  }