function dataReverse(data) {
    let newData = []
    for (let i = data.length - 1 ; i >= 0 ; i-=8){
      let segment = data.slice(i - 7 ,i + 1)
      console.log(segment)
      newData.push(...segment)
    }
    return newData
  }