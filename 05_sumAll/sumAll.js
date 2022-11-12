const sumAll = function sumAll(a, b){
    let small = Math.min(a,b);
    let max = Math.max(a,b);
    let sum = 0;
    const message = "ERROR"
    
    if ((a<0) || (b<0)){return message};
    if (!Number.isInteger(a) || !Number.isInteger(b)) return message;
    
    while (small <= max){
      sum += small;
      small += 1 
    } return sum
  }


// Do not edit below this line
module.exports = sumAll;
