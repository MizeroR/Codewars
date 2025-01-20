function order(words) {
    let newWords = words.split(' ');
    
    newWords.sort((a, b) => {
      let numA = a.match(/\d/); // Finds the first digit in word 'a'
      let numB = b.match(/\d/); // Finds the first digit in word 'b'
      
      return numA - numB; // Compare the numbers
    });
    
    return newWords.join(' ');
  }
//   function order(words){
//     var array = words.split(' ');
//     var sortedArray = [];
//     for(i = 0; i <= array.length; i++) {
//       for(j = 0; j < array.length; j++) {
//         if(array[j].indexOf(i) >= 0) {
//           sortedArray.push(array[j]);
//         }
//       }
//     }
//     return sortedArray.join(' ');
//   }