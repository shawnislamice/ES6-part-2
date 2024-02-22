const data = [{ id: 1, name: "Shawon", address: "Adalot Para" }];
console.log(data[0].address);

const data2 = {
  id: 1,
  name: "Shawon",
  address: "Adalot Para",
  data: [
    { id: 1, name: "DCL", price: 65000 },
    { id: 1, name: "DCL", price: 165000 },
  ],
};
console.log(data2.data[1].price);

const user = {
  id: 5001,
  name: "Shawon Islam",
  address: {
    street: {
      first: "54/1 Uttor",
      second: "Adalot Para",
      third: "Adalot Para 3",
    },
  },
  city: "Dhaka",
};
console.log(user.address.street.second);

const user2 = {
  id: 5002,
  name: "Srabon Islam",
  address: {
    city: "Chittagong",
    country: "Bangladesh",
  },
};
console.log(user2.address.street?.second); // Optional Chain
