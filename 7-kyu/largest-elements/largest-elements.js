function largest(n, array) {
  if (n<=0) return [];
  return [...array]
    .sort((a,b)=>b-a)
    .slice(0,n)
    .sort((a,b)=>a-b)
}