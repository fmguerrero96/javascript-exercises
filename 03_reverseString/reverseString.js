const reverseString = function(str) {
    let splitting = str.split('');
  
    let rev = splitting.reverse();
    
    let backToStr = rev.join('');
    
    return backToStr;
};

// Do not edit below this line
module.exports = reverseString;
