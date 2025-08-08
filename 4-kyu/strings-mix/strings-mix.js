 
function mix(s1, s2) {
  let countLetters = (s) => {
    let counts = {}
    for (let char of s){
      if(char >='a' && char <= 'z'){
        counts[char] = (counts[char] || 0) + 1
      }
    }
    return counts;
  }
  let counts1 = countLetters(s1)
  let counts2 = countLetters(s2)
  console.log(counts1,counts2)
  const letters = new Set([...Object.keys(counts1), ...Object.keys(counts2)]);
  console.log(letters)
  
}
console.log(mix("Are they here", "yes, they are here"))