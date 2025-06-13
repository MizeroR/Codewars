function titleCase(title, minorWords) {
  if (!title) return ''; // Handle empty title

  const minor = minorWords ? minorWords.toLowerCase().split(' ') : [];
  return title
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      // Words that are not in the minor words need to be capitalized at the first index
      if (index === 0 || !minor.includes(word)) {
        return word[0].toUpperCase() + word.slice(1);
        //If they are not in the minor words they should be lowwer cased
      } else {
        return word;
      }
    })
    .join(' ');
}