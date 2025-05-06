function duplicateCount(text){
    // make the iput text case insensitive
    let newText = text.toLowerCase()
  
    //Creation of an object for counting occurences
    let duplicatesObj = {}
    
    //Looping over the text and incrementing the count
    for (let str of newText){
      duplicatesObj[str]? duplicatesObj[str]++ : duplicatesObj[str]=1
    }
    
    //Extract only values of the object
    let valuesOfObj = Object.values(duplicatesObj)
    
    //Filtering any values which occur more than once
    let count = valuesOfObj.filter((a)=>a>1)
    
    //Returning the array of duplicates lenghth
    return count.length
}