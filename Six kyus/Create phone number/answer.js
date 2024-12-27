function createPhoneNumber(numbers){
    numbers = numbers.join('')
    let first = numbers.slice(0,3)
    let sec = numbers.slice(3,6)
    let last = numbers.slice(6,10)
    let msg = '('+first+') '+sec+'-'+last
    return msg
  }