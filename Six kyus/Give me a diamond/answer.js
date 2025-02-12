function diamond(n){
    if((n%2===0)||(n<1)) return null
    let middleRow = Math.round(n/2)
    let ans =[]
    for(let i = 1; i<=middleRow ; i++){//upper diamond
      ans.push(`${' '.repeat(middleRow-i)}${'*'.repeat(2*i-1)}`)
    }
    for(let i = middleRow-1; i>=1;i--){//lower dimond
      ans.push(`${' '.repeat(middleRow-i)}${'*'.repeat(2*i-1)}`)
    }
    return `${ans.join('\n') }\n`
  
  }