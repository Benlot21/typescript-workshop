const numbers: number[] = [2, 4, 6, 8, 10];

const squaredNumbers: number[] = numbers.map((number: number) => {
  return number * number;
});

squaredNumbers.forEach((num: number) => {
  console.log(num);
});
