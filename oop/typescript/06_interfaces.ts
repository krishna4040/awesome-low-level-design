/* Define a contract for classes without implementation.
 * TS allows multiple interface inheritance.
 * */
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

class Duck implements Flyable, Swimmable {
  fly() {
    console.log("Duck flies");
  }

  swim() {
    console.log("Duck swims");
  }
}
