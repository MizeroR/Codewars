 
const rps = (p1, p2) => {
  if (p1 === p2) return 'Draw!'
  
  const rules = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
  }
 
  return rules[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!'
​
};