function isIsogram(str){
    let ans =''
    ans = str.toLowerCase().split('').sort()
    for(let i = 0 ; i < ans.length ; i++){
      if(ans[i] === ans[i+1]){
        return false
      }
    }
    return true
  }