const instructor = [
  { name: "Nodi", age: 28, position: "Senior" },
  { name: "Akil", age: 26, position: "Junior" },
  { name: "Shobuj", age: 30, position: "Senior" },
];

const result = instructor.filter((obj) => {
  if (obj.position !== "Junior") {
    return obj;
  } else {
    return false;
  }
});
console.log(result);
