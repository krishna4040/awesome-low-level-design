Creational Patterns – Object Creation Focus

These patterns deal with object creation mechanisms, trying to create objects in a way that is suitable to the situation. They abstract the instantiation process.
| Pattern | Purpose | Example|
| -------------------- | ------------------------------------------------------------------------------------------------- | -|
| **Singleton** | Ensure only one instance of a class exists and provide global access to it |export new Singleton()|
| **Factory Method** | Let subclasses decide which class to instantiate |Pizza, CheesePizza, PeponePizza, PizzaFactory|
| **Abstract Factory** | Factory of Factories, when our application needs to create families of objects, or classes can be categorized|Furtinure --> Modern, Classical, Modern --> chair, sofa, Classical --> chair, sofa|
| **Builder** | Separate the construction of a complex object from its representation |Computer, ComputerBuilder, when there is huge constructor we break it into methods|
| **Prototype** | Create objects by cloning an existing object |deepcopy and shallowcopy|
