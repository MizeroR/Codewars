function solution(str){
    let reversed = ''; // Initialize an empty string to hold the reversed result
      
      // Loop through the string in reverse order
      for (let i = str.length - 1; i >= 0; i--) {
          reversed += str[i]; // Concatenate each character to the result
      }
      
      return reversed; // Return the reversed string
  }