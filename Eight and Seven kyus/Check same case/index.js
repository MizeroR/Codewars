function sameCase(a, b) {
  const isLetter = (ch) => ch.toLowerCase() !== ch.toUpperCase();

  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }

  const isALower = a === a.toLowerCase();
  const isBLower = b === b.toLowerCase();

  return isALower === isBLower ? 1 : 0;
}
