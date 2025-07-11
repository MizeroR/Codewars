 
const rps = (p1, p2) => {
  let message = ''
  if (p1 === 'rock' && p2 === 'scissors'){
    message += 'Player 1 won!'
  }
  p1 = 'rock'
  p2 = 'scissors'
  
  p1 = 'scissors'
  p2 = 'paper'
  
  p1 = 'paper'
  p2 = 'rock'
  
  return message
};