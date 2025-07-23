function isValidWalk(walk) {
  if(walk.length !== 10) return false
  let n,s,w,e = 0
  for(let i=0; i<walk.length;i++){
    if(walk[i]==='n') n++
  }
  for(let i=0; i<walk.length;i++){
    if(walk[i]==='s') s++
  }
  for(let i=0; i<walk.length;i++){
    if(walk[i]==='w') w++
  }
  for(let i=0; i<walk.length;i++){
    if(walk[i]==='e') e++
  }
  console.log(n,s,w,e)
}