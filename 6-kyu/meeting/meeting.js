function meeting(s) {
  s = s.toUpperCase();
  let guests = s.split(';')
  let formattedGuests = []
  
  for(let guest of guests){
    let [firstName, lastName] = guest.split(':')
    formattedGuests.push(`(${lastName}, ${firstName})`);
  }
  formattedGuests.sort()
  return formattedGuests.join('')
}