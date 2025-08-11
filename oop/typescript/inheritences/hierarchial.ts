class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving");
  }
}

class Bike extends Vehicle {
  ride() {
    console.log("Bike is riding");
  }
}

const car = new Car();
car.start(); // Vehicle started
car.drive(); // Car is driving

const bike = new Bike();
bike.start(); // Vehicle started
bike.ride(); // Bike is riding
