const repeatString = function(string, num) {
    word = string
    result = ''
    i = 0
    if (num < 0) { result = 'ERROR'};
        while (i < num) {
          result += word;
          i = i + 1;
        } return result;
};

// Do not edit below this line
module.exports = repeatString;
