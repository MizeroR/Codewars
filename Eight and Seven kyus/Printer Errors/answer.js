function printerError(s) {
    let count = 0
    let ans = ''
    let newString = s.split('')
    for(let i = 0; i<newString.length;i++){
      if (newString[i] > 'm' ){
        count++
      }
    }
    ans = count + '/' + s.length
  return ans
}