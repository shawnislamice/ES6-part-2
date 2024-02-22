const products = [
  {
    id: 1,
    name: "iphone",
    price: 1000,
  },
  {
    id: 2,
    name: "samsung",
    price: 2000,
  },
  {
    id: 3,
    name: "iphone2",
    price: 1000,
  },
  {
    id: 4,
    name: "samsung2",
    price: 2000,
  },
];

class Product {
  constructor(name) {
    this.name=name
  }
  country = "Bangladesh";
  speak(talk) {
    console.log(`Talking about ${talk}`);
  }
}

// const lenovo = new Product("Shawon");
// console.log(lenovo);
// lenovo.speak = "How are you dear ";
// console.log(lenovo);


class Teacher{
    constructor(name,subject){
        this.name=name
        this.subject=subject
    }
    lecture(){
        console.log("Sir is teaching math")
    }
}

const teacher=new Teacher("Sahajahan Topon","Physics")
const teacher2=new Teacher("Rashid Sir","English")
console.log(teacher)
console.log(teacher2)