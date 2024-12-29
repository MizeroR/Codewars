function gimme (triplet) {
    let newTrip = triplet.slice().sort((a,b) => a-b)
    let midValue = newTrip[1]
    return triplet.indexOf(midValue)
  }