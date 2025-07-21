function noOdds( values ){
  let evens = []
  for(let num of values){
    if (num % 2 === 0) evens.push(num)
  }
  return evens
}