const fibonacci = function(num) {
    const numbers = [1, 1];
    previous = 1;
    current = 1;
    result = 0;
    count = 0;
    while (count < 30){
        result = previous + current;
        numbers.push(result);
        previous = current;
        current = result;
        count += 1
    }
    if (num < 0){
        return ('OOPS')
    }else if (num === 0){
        return 0
    }else {
        return numbers[num - 1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
