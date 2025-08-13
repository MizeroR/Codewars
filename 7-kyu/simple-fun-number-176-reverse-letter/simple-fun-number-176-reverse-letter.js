 
function reverseLetter(str) {
  let result = []
  for (let char of str){
    if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) result.push(char)
  }
  return result.join('')
}