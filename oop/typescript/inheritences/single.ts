class Animal {
  constructor(public name: string) {}
  move() {
    console.log(`${this.name} moves`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}

const d = new Dog("Bruno");
d.move(); // Bruno moves
d.bark(); // Bruno barks
