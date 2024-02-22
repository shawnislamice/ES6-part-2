const products = [
  { id: 1, name: "DCL", price: 1500 },
  { id: 2, name: "HP", price: 15000 },
  { id: 3, name: "Dell", price: 45000 },
  { id: 4, name: "MAC", price: 15000 },
];

const names = products.map((product) => product.name);
// console.log(names);

products.forEach((p) => p.id);

const expensive = products.filter((p) => p.price > 50000);
// console.log(expensive);

const lowest = products.find((p) => p.price < 50000);
console.log(lowest);

const total = products.reduce((p, c) => p + c.price, 0);//C==Current
 
console.log(total);
