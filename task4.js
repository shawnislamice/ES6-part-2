const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

const result = people.reduce((p, c) => p + c.age, 0);
console.log(result);
