function spinWords(string){
  return string.split(" ").map((str) => str.length < 5 ? str : str.split('').reverse().join("")).join(" ")
}