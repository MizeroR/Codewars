function accum(s) {
	let result = '';
  for (let i = 0 ; i < s.length ; i++){
    result = result + s[i].toUpperCase()+s[i].toLowerCase().repeat(i);
    if (i < s.length -1){
      result += '-';
    }
  }
  return result;
}