function max(arr){
    let max = arr[0]; // Assume the first element is the largest
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
              max = arr[i]; // Update max if current element is larger
          }
      }
      return max;
  }
  
  function min(arr){
    let min = arr[0]; // Assume the first element is the smallest
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] < min) {
              min = arr[i]; // Update min if current element is smaller
          }
      }
      return min;
  }
  console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
  console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));