function dirReduc(arr) {
    const opposites = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    };
  let i = 0;
    while (i < arr.length - 1) {
        if (opposites[arr[i]] === arr[i + 1]) {
            arr.splice(i, 2);
            i = 0; 
        } else {
            i++;
        }
    }
    return arr
}
​