      prefix = '1';
    } else if (count2 > count1) {
      prefix = '2';
    } else {
      prefix = '=';
    }
​
    result.push(`${prefix}:${letter.repeat(maxCount)}`);
  }
​
  result.sort((a, b) => {
    if (b.length !== a.length) {
      return b.length - a.length; 
    } 
    const prefixA = a[0];
    const prefixB = b[0];
    if (prefixA !== prefixB) {
      const prefixOrder = {'1': 1, '2': 2, '=': 3};
      return prefixOrder[prefixA] - prefixOrder[prefixB];
    }
    
    return a.localeCompare(b);
  });
​
  return result.join('/');
}