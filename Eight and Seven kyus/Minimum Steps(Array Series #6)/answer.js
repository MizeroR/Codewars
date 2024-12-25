function minimumSteps(numbers, value){
    let counter = 0;
    let sortedArray = numbers.sort((a,b) => a-b);
    let sum = sortedArray[0];
    if (value <= sum){
        return 0;
    }
    for (let i =1; i < sortedArray.length; i++){
      sum = sum + sortedArray[i];
      counter++;
      if (sum >= value){
        return counter;
      } 
    }
  }