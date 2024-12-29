function alphabetPosition(text) {
    let position = '';
    let aToz = 'abcdefghijklmnopqrstuvwxyz'; 
    text = text.toLowerCase().replace(/[^a-z]/g, '')
    for (let i = 0; i < text.length; i++) {
      position += aToz.indexOf(text[i]) + 1 + ' ';
    }
    return position.trim()
  }