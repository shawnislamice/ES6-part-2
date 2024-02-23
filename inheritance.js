class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    console.log("Car is moving");
  }
}

class Bus extends Vehicle() {
  //Inherited from vehicle parent. Bus was child
  constructor(name, price, seat, ticketPrice) {
    super(name,price); //Call the parent constructor
    this.seat = seat;
    this.ticketPrice = ticketPrice;
  }

}
class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load = load;
        
    }
}