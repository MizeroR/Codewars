function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) return false;
  
    const months = {
      'January': 0, 
      'February': 1,
      'March': 2,
      'April': 3,
      'May': 4,
      'June': 5,
      'July': 6,
      'August': 7,
      'September': 8,
      'October': 9,
      'November': 10,
      'December': 11
    };
  
    //destructuring
    let [currMonth, currDay, currYear] = currentDate.replace(',', '').split(' ');
    let [expMonth, expDay, expYear] = expirationDate.replace(',', '').split(' ');
  
    //date constructor
    let current = new Date(currYear, months[currMonth], Number(currDay));
    let expiration = new Date(expYear, months[expMonth], Number(expDay));
  
    return expiration>=current
  }
  