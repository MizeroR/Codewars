 
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
  const letters = new Set([...Object.keys(counts1), ...Object.keys(counts2)]);
  console.log(letters)
​
  let result = []
  for(let letter of letters){
    let count1 = counts1[letter] || 0
    let count2 = counts2[letter] || 0
    let maxCount = Math.max(count1,count2)
    if (maxCount<=1) continue 
    let prefix;
    if(count1>count2){
      prefix ='1'
    }
    else if (count1<count2){
      prefix ='2'
    }
    else {
      prefix = '='
    }
    result.push(`${prefix}:${letter.repeat(maxCount)}`);
    console.log(result)
    result.sort((a,b) => {
      if(a.length!==b.length) return b.length - a.length
    })
  }
  
}
console.log(mix("Are they here", "yes, they are here"))