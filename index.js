'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.hello = hello;
const world = 'world';
function hello(who = world) {
  return `Hello ${who}! `;
}
const numbers = [2, 4, 6, 8, 10];
const squaredNumbers = numbers.map(number => {
  return number * number;
});
squaredNumbers.forEach(num => {
  console.log(num);
});
