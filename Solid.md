# 🧱 **SOLID Principles with Examples**

---

## 1️⃣ **S – Single Responsibility Principle (SRP)**

**Definition:**  
A class should have **only one reason to change** — i.e., it should do **only one thing**.

---

**✅ Example – GOOD Design**

```python
class Invoice:
    def calculate_total(self):
        # logic for calculating total
        pass

class InvoicePrinter:
    def print_invoice(self, invoice):
        # logic for printing invoice
        pass

class InvoiceSaver:
    def save_to_db(self, invoice):
        # logic for saving to database
        pass
```

Here, **Invoice** only calculates totals, **Printer** only prints, **Saver** only saves.

---

**❌ Example – BAD Design**

```python
class Invoice:
    def calculate_total(self):
        pass
    def print_invoice(self):
        pass
    def save_to_db(self):
        pass
```

This violates SRP — changing the printing logic will force you to edit the `Invoice` class (unnecessary coupling).

---

💡 **Memory Tip:**  
Think **S = Single Job** – "One Person = One Job".

---

## 2️⃣ **O – Open/Closed Principle (OCP)**

**Definition:**  
Classes should be **open for extension** but **closed for modification**.  
You should be able to add new functionality **without changing existing code**.

---

**✅ Example – GOOD Design**

```python
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def area(self):
        return self.width * self.height

def total_area(shapes):
    return sum(shape.area() for shape in shapes)
```

If you want to add a new shape, you just create a new class — no need to modify `total_area`.

---

**❌ Example – BAD Design**

```python
def total_area(shapes):
    area = 0
    for shape in shapes:
        if shape['type'] == 'circle':
            area += 3.14 * shape['radius'] ** 2
        elif shape['type'] == 'rectangle':
            area += shape['width'] * shape['height']
    return area
```

Adding a new shape means modifying this function — **not closed to modification**.

---

💡 **Memory Tip:**  
Think **O = Open Door for New, Closed Door for Edit**.

---

## 3️⃣ **L – Liskov Substitution Principle (LSP)**

**Definition:**  
Subtypes must be **substitutable** for their base types **without breaking functionality**.

---

**✅ Example – GOOD Design**

```python
class Bird:
    def fly(self):
        pass

class Sparrow(Bird):
    def fly(self):
        print("Sparrow flying")

def make_bird_fly(bird: Bird):
    bird.fly()

make_bird_fly(Sparrow())  # Works!
```

---

**❌ Example – BAD Design**

```python
class Bird:
    def fly(self):
        pass

class Ostrich(Bird):
    def fly(self):
        raise Exception("Ostrich can't fly")

# Now code using Bird might break if an Ostrich is passed
```

Ostrich violates LSP because it can’t actually fly.  
Instead, Ostrich should **not inherit Bird** (or we should separate `FlyableBird`).

---

💡 **Memory Tip:**  
Think **L = Legit Substitution** – subclasses should act like their parents without surprises.

---

## 4️⃣ **I – Interface Segregation Principle (ISP)**

**Definition:**  
Clients should **not be forced to implement interfaces they don’t use**.  
Better to have **many small interfaces** than one fat one.

---

**✅ Example – GOOD Design**

```python
class Printer:
    def print(self): pass

class Scanner:
    def scan(self): pass

class MultiFunctionPrinter(Printer, Scanner):
    def print(self): pass
    def scan(self): pass
```

---

**❌ Example – BAD Design**

```python
class Machine:
    def print(self): pass
    def scan(self): pass
    def fax(self): pass

class SimplePrinter(Machine):
    def print(self): pass
    def scan(self):
        raise NotImplementedError()  # Printer can't scan
    def fax(self):
        raise NotImplementedError()
```

Here, `SimplePrinter` is forced to implement methods it doesn’t use.

---

💡 **Memory Tip:**  
Think **I = Interface should be small and Interesting** — don’t dump everything in one.

---

## 5️⃣ **D – Dependency Inversion Principle (DIP)**

**Definition:**  
High-level modules should not depend on low-level modules.  
Both should depend on **abstractions** (interfaces).

---

**✅ Example – GOOD Design**

```python
class Database:
    def save(self, data): pass

class MySQLDatabase(Database):
    def save(self, data):
        print("Saving to MySQL")

class InvoiceService:
    def __init__(self, database: Database):
        self.db = database
    def save_invoice(self, invoice):
        self.db.save(invoice)
```

Here, `InvoiceService` depends on the abstraction `Database`, not a specific implementation.

---

**❌ Example – BAD Design**

```python
class InvoiceService:
    def save_invoice(self, invoice):
        mysql = MySQLDatabase()
        mysql.save(invoice)
```

Tightly coupled with MySQL — can’t switch to MongoDB easily.

---

💡 **Memory Tip:**  
Think **D = Depend on abstractions, not details**.

---

# 🎯 **Quick Exam Tips**

- SRP → “One class, one reason to change.”
- OCP → “Add, don’t modify.”
- LSP → “Child should behave like parent.”
- ISP → “Small interfaces, no fat contracts.”
- DIP → “Depend on interface, not implementation.”
