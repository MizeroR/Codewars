function arrayDiff(a, b) {
    let comNum = a.filter(value => b.includes(value))
    return a.filter(num => !comNum.includes(num));
   }