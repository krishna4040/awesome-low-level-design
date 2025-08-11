/* Same method name behaves differently in different classes.
 * Achieved via method overriding in child classes.
 * */
class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  area(): number {
    return this.side ** 2;
  }
}

const shapes: Shape[] = [new Circle(3), new Square(4)];
shapes.forEach((shape) => console.log(shape.area()));

// constructor overriding
class Base {
  constructor() {
    console.log("Base constructor");
  }
}

class Derived extends Base {
  constructor() {
    console.log("Derived pre-super"); // ❌ Error if before `super()`
    super(); // Required
    console.log("Derived post-super");
  }
}

const d = new Derived();

// Output:
// Derived pre-super ❌ Error in TS: super() must be first
// ✅ Correct order:
class FixedDerived extends Base {
  constructor() {
    super();
    console.log("Derived after base");
  }
}
new FixedDerived();
// Output:
// Base constructor
// Derived after base
