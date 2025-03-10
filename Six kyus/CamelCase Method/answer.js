String.prototype.camelCase=function(){
    let combined = this.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join("");
    return combined
  }
  console.log("camel case word".camelCase())