/* Class: A blueprint for creating objects with specific properties and methods.
 * Object: An instance of a class.
 * */
class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving`);
  }
}

const myCar = new Car("Toyota"); // Object
myCar.drive(); // Toyota is driving
