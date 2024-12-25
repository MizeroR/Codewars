var number = function(busStops){
    const flatList = busStops.flat()
    let rem = 0
    for(let i = 0 ; i < flatList.length ; i++){
      if (i % 2 === 0){
        rem += flatList[i]
      }else if(i%2===1){
        rem -= flatList[i]
      }
    }
    return rem
  }