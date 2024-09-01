'use strict';
const numbers = [2, 4, 6, 8, 10];
const squaredNumbers = numbers.map(number => {
  return number * number;
});
squaredNumbers.forEach(num => {
  console.log(num);
});
