function isValidWalk(walk) {
  if(walk.length !== 10) return false
  let n = 0
  let s = 0
  let w = 0
  let e = 0
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
  return n===s && w===e
}