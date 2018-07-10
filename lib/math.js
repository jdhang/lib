var add = function add(a, b) {
  return a + b;
};

var subtract = function subtract(a, b) {
  return a - b;
};

var multiply = function multiply(a, b) {
  return a * b;
};

var divide = function divide(a, b) {
  return a / b;
};

export { add, subtract, multiply, divide };
export default {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};