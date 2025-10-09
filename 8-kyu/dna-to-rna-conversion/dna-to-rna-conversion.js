function DNAtoRNA(dna) {
  const rnaArray = [];
​
  for (let i = 0; i < dna.length; i++) {
      const currentBase = dna[i];
      if (currentBase === 'T') {
          rnaArray.push('U');
      } else {
          rnaArray.push(currentBase);
      }
  }
​
  return rnaArray.join('');
​
}