const add = function(a, b) {
  parseInt(a);
  parseInt(b);
  return a + b;
	
};

const subtract = function(a, b) {
  parseInt(a);
  parseInt(b);
  return a - b;
	
};

const sum = function(a) {
  let sum = 0;
  if (a.length) {
    for (let i = 0; i < a.length; i++) {
      sum += a[i];
    }
  }
  return sum;
	
};

const multiply = function(a) {
  let result = 1;
  if (a.length) {
    for (let i = 0; i < a.length; i++) {
      result *= a[i];
    }
  }
  return result;
};

const power = function(a, b) {
  let result = 1;
  if (b) {
    for (let i = 0; i < b; i++) {
      result *= a;
    }
  }
	return result;
};

const factorial = function(a) {
let result = 1;
if (a) {
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
}
	return result;
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
