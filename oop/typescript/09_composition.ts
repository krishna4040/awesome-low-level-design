/* Stronger form of association.
 * The contained object cannot exist independently. It’s created/destroyed with the container.
 * */
class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  private engine: Engine;

  constructor() {
    this.engine = new Engine(); // Composition: owned inside
  }

  start() {
    this.engine.start();
    console.log("Car is ready");
  }
}
