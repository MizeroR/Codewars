function doubleChar(str) {
  if(str.length === 0) return ''
  return str.split('').map((char) => char.repeat(2)).join('')
}