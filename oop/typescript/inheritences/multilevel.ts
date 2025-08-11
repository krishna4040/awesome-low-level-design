class LivingBeing {
  constructor() {
    console.log("LivingBeing constructor");
  }
}

class Animal extends LivingBeing {
  constructor() {
    super();
    console.log("Animal constructor");
  }
}

class Dog extends Animal {
  constructor() {
    super();
    console.log("Dog constructor");
  }
}

const dog = new Dog();
// Output:
// LivingBeing constructor
// Animal constructor
// Dog constructor
