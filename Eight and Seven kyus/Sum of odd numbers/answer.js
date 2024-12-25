function rowSumOddNumbers(n) {
    let firstItem = n*(n-1)+1
    let lastItem = 2*(n-1) + firstItem
    let sum = 0
    for(let i = firstItem ; i <= lastItem ; i+=2){
        sum = sum + i
    }
    return sum
}