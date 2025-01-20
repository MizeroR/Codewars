function towerBuilder(nFloors) {
    let ans =[]
    for(let i = 1; i<=nFloors ;i++){
      ans.push(' '.repeat(nFloors-i) + "*".repeat(2*i-1) + ' '.repeat(nFloors-i))
    }
  return ans
  }