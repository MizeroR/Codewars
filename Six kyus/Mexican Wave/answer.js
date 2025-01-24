function wave(str){
    let newStr=[]
    for(let i=0;i<str.length;i++){
      if(str[i]===' ') continue
      newStr.push(str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1))
    }
    return newStr
  }