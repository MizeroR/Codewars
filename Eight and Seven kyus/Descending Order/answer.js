function descendingOrder(n){
    let modN = n.toString().split('').sort((a,b) => b-a).join('')
    return Number(modN)
    }