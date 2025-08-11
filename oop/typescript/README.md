## 1️⃣ **Interface**

### What it is:

- A **contract** specifying the _shape_ of an object (methods, properties) without implementation.
- Cannot hold any implementation or state.

### When to use:

- When you want to define a **pure API** that multiple unrelated classes can implement.
- When you want **multiple inheritance** of type contracts (since TS allows classes to implement multiple interfaces).
- To describe **data shapes** (like DTOs, function signatures).
- When you want to ensure structural typing without code sharing.

### Example:

```ts
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}
```

---

## 2️⃣ **Abstract Class**

### What it is:

- A class that **cannot be instantiated directly**.
- Can contain **both implemented methods and abstract methods** (which subclasses must implement).
- Can hold **state (fields)** and **constructor logic**.

### When to use:

- When you want to provide a **common base implementation** with some shared logic and force subclasses to implement certain methods.
- When you want to **share code + enforce an API**.
- When you want to restrict instantiation (abstract class can’t be `new`-ed).
- When you want to define protected/private members accessible by subclasses.

### Example:

```ts
abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log(`${this.name} moves.`);
  }

  abstract makeSound(): void; // must be implemented by subclass
}

class Dog extends Animal {
  makeSound() {
    console.log("Bark!");
  }
}
```

---

## 3️⃣ **Base Class (Concrete Class)**

### What it is:

- A normal class that **can be instantiated** directly.
- Can be extended by subclasses, but doesn’t force any method implementation.

### When to use:

- When you want a **fully implemented reusable class** that may optionally be extended.
- When you don’t need to enforce a strict API on subclasses.
- When your class represents a concrete concept that makes sense to instantiate on its own.

### Example:

```ts
class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  openTrunk() {
    console.log("Trunk opened");
  }
}
```

---

## **Summary Table**

| Feature                         | Interface                  | Abstract Class                  | Base Class (Concrete)         |
| ------------------------------- | -------------------------- | ------------------------------- | ----------------------------- |
| Can have method implementation? | No                         | Yes                             | Yes                           |
| Can have state/fields?          | No                         | Yes                             | Yes                           |
| Can be instantiated?            | No                         | No                              | Yes                           |
| Supports multiple inheritance?  | Yes (implement multiple)   | No (single inheritance only)    | No (single inheritance only)  |
| Use case                        | Define contracts or shapes | Share common code + enforce API | Reusable class for direct use |

---

## **Decision guide for TypeScript dev**

- Use **interface** when you want **flexible, multiple contracts** or just define the shape without code.
- Use **abstract class** when you want **partial code reuse + forced implementation** + control over access modifiers.
- Use **base (concrete) class** when you want a **ready-to-use class** possibly extended later.

---

## Typical Flow:

**Interface → Abstract Class → Concrete Class → Subclass**

| Step               | Purpose                                                    | Optional?                                                                                                                           |
| ------------------ | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Interface**      | Define a **contract** (API shape) without code.            | Optional, but recommended for flexibility and decoupling. You can skip if you don’t need strict typing or multiple implementations. |
| **Abstract Class** | Provide **partial implementation** + enforce some methods. | Optional. Use only if you have shared code and want to enforce subclass methods.                                                    |
| **Concrete Class** | Fully implemented class, ready to instantiate or extend.   | Required if you want a reusable base implementation; can skip if you use only abstract classes + subclasses.                        |
| **Subclass**       | Specific implementations or overrides.                     | Required if base is abstract or if you want specialization. Optional if concrete class suffices.                                    |

---

## Can you skip components?

- **Skip Interface?**
  Yes, but you lose type safety and flexibility for multiple implementations. For small projects or simple hierarchies, it’s okay.

- **Skip Abstract Class?**
  Yes, if you don’t need shared partial code or enforced methods. You can implement interface directly in concrete classes.

- **Skip Concrete Class?**
  Sometimes yes — you can have abstract class directly subclassed by concrete implementations. Or just have concrete classes implementing interface without a base class.

- **Skip Subclass?**
  Yes, if concrete class fully covers your needs and you don’t want specialization.

---

## Example flows:

### Minimal: Interface → Concrete class

```ts
interface Logger {
  log(msg: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log(msg);
  }
}
```

### With abstract class: Interface → Abstract class → Concrete class

```ts
interface Logger {
  log(msg: string): void;
}

abstract class BaseLogger implements Logger {
  log(msg: string) {
    console.log(`Log: ${msg}`);
  }
  abstract format(msg: string): string;
}

class ConsoleLogger extends BaseLogger {
  format(msg: string) {
    return msg.toUpperCase();
  }
}
```

### Concrete class only

```ts
class Logger {
  log(msg: string) {
    console.log(msg);
  }
}
```

---

## **Rule of thumb:**

Use only what you need — don’t add interfaces or abstract classes just to add layers. But for **larger or evolving projects**, following the full flow gives you flexibility and maintainability.

---

| Term      | Meaning                          | OOP Concept                                       | Example            |
| --------- | -------------------------------- | ------------------------------------------------- | ------------------ |
| **Is-a**  | One class is a type of another   | **Inheritance**                                   | `Dog is-a Animal`  |
| **Has-a** | One class uses another as a part | **Association** (also Aggregation or Composition) | `Car has-a Engine` |

| Term               | Meaning                                      | Direction      | Example Relationship |
| ------------------ | -------------------------------------------- | -------------- | -------------------- |
| **Generalization** | Extract common features to form a base class | Child → Parent | Dog and Cat → Animal |
| **Specialization** | Add specific features in subclasses          | Parent → Child | Animal → Dog or Cat  |
