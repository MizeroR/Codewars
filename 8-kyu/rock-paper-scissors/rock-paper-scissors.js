 
const rps = (p1, p2) => {
  let message
  if (p1 === 'rock' && p2 === 'scissors'){
    message = 'Player 1 won!'
  } 
  if (p1 === 'scissors' && p2 === 'paper'){
    message = 'Player 1 won!'
  }
  if (p1 === 'paper' && p2 === 'rock'){
    message = 'Player 1 won!'
  }
  if (p1 === 'scissors' && p2 === 'rock'){
    message = 'Player 2 won!'
  }
  if (p1 === 'paper' && p2 === 'scissors'){
    message = 'Player 2 won!'
  }
  if (p1 === 'rock' && p2 === 'paper'){
    message = 'Player 2 won!'
  }
  if (p1 === p2){
    message = 'Draw!'
  }
  return message
};