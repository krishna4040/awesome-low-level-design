// ----- Prototype Base -----
class Shape {
  constructor(type, dimensions) {
    this.type = type;
    this.dimensions = dimensions; // Nested object
  }

  cloneShallow() {
    // Shallow copy using Object.assign
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  cloneDeep() {
    // Deep copy using structuredClone (Node 17+/modern browsers)
    return structuredClone(this);
  }
}

// ----- Usage -----
const original = new Shape("Rectangle", { width: 10, height: 20 });

const shallowCopy = original.cloneShallow();
const deepCopy = original.cloneDeep();

// Modify original's nested property
original.dimensions.width = 99;

console.log("Original:", original); // width = 99
console.log("Shallow Copy:", shallowCopy); // width = 99 (affected!)
console.log("Deep Copy:", deepCopy); // width = 10 (unchanged)
