function dirReduc(arr) {
    const opposites = {
        'NORTH': 'SOUTH',
        'SOUTH': 'NORTH',
        'EAST': 'WEST',
        'WEST': 'EAST'
    };
  let i = 1;
    while (i < arr.length) {
      console.log(opposites[arr[i]])
        if (opposites[arr[i]] === arr[i + 1]) {
            arr.splice(i, 2);
            i = 0; // Reset to start after modification
        } else {
            i++;
        }
    }
    return arr
}
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))