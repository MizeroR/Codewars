function highAndLow(numbers) {
    let newArray = numbers.split(' ').map(Number).sort((a, b) => b - a);
    return newArray.at(0) + ' ' + newArray.at(-1);
  }