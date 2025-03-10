let comp = (array1, array2) => {
    if (!array1 || !array2) return false; // If either array is null or undefined
    if (array1.length !== array2.length) return false; // If lengths are different
    let count1 = {}
    let count2 = {}
    let newArray1 = array1.sort((a,b) => a-b)
    let newArray2 = array2.sort((a,b) => a-b)
    for(let num of newArray1){
      count1[num] ? count1[num]++ : count1[num]=1
    }
    for(let num of newArray2){
      count2[num] ? count2[num]++ : count2[num]=1
    }
    let key1 = Object.keys(count1)
    let key2 = Object.keys(count2)
    
    for(let key of key1){
      let square = key**2
      if (count1[key] !== count2[square]) {
        return false;
      }
    }
    return true
  }
  console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]))