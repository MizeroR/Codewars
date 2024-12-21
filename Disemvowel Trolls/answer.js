function disemvowel(str) {
    let vowels = /[aeiou]/gi
    return str.replace(vowels, '')
  }