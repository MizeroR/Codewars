let expandedForm = (num) => {
    let newNum = num.toString().split('').reverse();
    let answer = []
    for(let i = 0; i<newNum.length;i++){
      if (newNum[i] === '0') {continue;}
      answer.push(newNum[i]*(10**i))
    }
    answer = answer.reverse().join(' + ')
    return answer
  }