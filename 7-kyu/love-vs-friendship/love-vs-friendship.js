function wordsToMarks(string) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    let position = letters.indexOf(string[i]) + 1;
    sum += position;
  }
  return sum;
}