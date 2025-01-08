function findUniq(arr) {
    arr.sort((a,b) => a-b)
    for(let i = 0;i<arr.length;i++){
      if(arr[0] === arr[1]){
       return arr[arr.length - 1] 
      }
      return arr[0]
    }
  }