/* Hiding complex logic and showing only essential features.
 * Achieved using abstract classes or interfaces.
 * */
abstract class Vehicle {
  abstract start(): void; // Must be implemented by child

  stop() {
    console.log("Vehicle stopped");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike started");
  }
}

const b = new Bike();
b.start();
b.stop();
