const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}
const numbers = [2, 4, 6, 8, 10];

const squaredNumbers = numbers.map(number => {
  return number * number;
});

squaredNumbers.forEach(num => {
  console.log(num);
});
