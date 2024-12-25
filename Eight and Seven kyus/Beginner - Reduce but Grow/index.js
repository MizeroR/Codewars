function grow(x){
    let answer = 1;
    for (let i = 0; i< x.length; i++){
      answer *= x[i];
    }
    return answer;
  }