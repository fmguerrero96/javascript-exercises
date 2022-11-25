const add = function(a, b) {
	return (a+b)
};

const subtract = function(a, b) {
	const big = Math.max(a,b);
  const small = Math.min(a,b);
  return (big - small)
};

const sum = function(nums) {
	result = 0
  for (let i = 0; i<nums.length; i++){
    result += nums[i];
  } return result
};

const multiply = function(array) {
  return array.length
  ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;
};

const power = function(a, b) {
	return a**b
};

const factorial = function(num) {
  if (num === 0 || num === 1)
  return 1;
  for (let i = num - 1; i >= 1; i--) {
  num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
