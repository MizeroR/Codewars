var capitals = function (word) {
    let cap = []
      for (let char = 0 ; char < word.length ; char++){
      if (word[char] == word[char].toUpperCase() ){
        cap.push(char)
      }
    }
    return cap
  };  