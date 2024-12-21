function getMiddle(s) {
    let ans = ''
    let indexOdd = (s.length/2) - 0.5
    let indexOddTwo = s.length/2
    let indexOddOne = s.length/2 - 1
    if(s.length % 2 === 0){
      ans = s[indexOddOne] + s[indexOddTwo]
    }
    else{
      ans = s[indexOdd]
    }
    return ans
  }