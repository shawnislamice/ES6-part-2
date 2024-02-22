const numbers = [4, 5, 2, 8, 10];

const doubled = [];
for (const number of numbers) {
  const double = number * 2;
  doubled.push(double);
}
console.log(numbers);
console.log(doubled);

function doubleIt(number) {
  console.log("Now", number);
  return number * 2;
}

const result = numbers.map(doubleIt);
// console.log(result)

const double2 = (n) => n * 2;

const output = numbers.map(double2);
// console.log(output)

const output2 = numbers.map((n) => n * 2);
console.log(output2)
