var greet = function(name) {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
​
  return `Hello ${formattedName}!`;
};