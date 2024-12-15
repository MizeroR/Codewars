function sum (numbers) {
    let sum = 0; 
      for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i]; // Add each number to the sum
      }
      return sum; 
  }
console.log(sum([1, 5.2, 4, 0,-1]));