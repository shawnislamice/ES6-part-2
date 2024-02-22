const number = [1, 2, 3, 4, 5];
const total = number.reduce((previous, current) => previous + current, 0);
console.log(total);

const sum = number.reduce((c, p) => c + p, 5);
console.log(sum);
const mul = number.reduce((c, p) => c * p, 1);
console.log(mul);
const div = number.reduce((c, p) => c / p, 1);
console.log(div);
const sub = number.reduce((c, p) => c - p, 0);
console.log(sub);
