function XO(str) {
    str = str.toLowerCase();
    const xCount = str.split("x").length -1;
    const oCount = str.split("o").length -1;
    return xCount === oCount;
  }