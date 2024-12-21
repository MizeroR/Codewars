function positiveSum(arr) {
    return arr.reduce((sum,a) => sum + (a >= 0 ? a : 0), 0)
  }