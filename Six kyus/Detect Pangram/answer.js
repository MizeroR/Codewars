function isPangram(string){
  let atoZ = 'abcdefghijklmnopqrstuvwyz'
  let newString = string.split(' ').join('').toLowerCase().split('').sort().join('')
  for(let char of atoZ){
    if(!newString.includes(char)){
      return false
    }
  }
  return true
}