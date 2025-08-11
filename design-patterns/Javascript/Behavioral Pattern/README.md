Behavioral Patterns – Object Interaction Focus

`CISCO MTV`

These patterns are concerned with communication between objects, what goes on between objects and how they operate together.
| Pattern | Purpose | Example |
| --------------------------- | ------------------------------------------------------------------------------ | -|
| **Strategy** | Define a family of algorithms, encapsulate each, and make them interchangeable |paymentStrategy --> card, cash, upi|
| **Observer** | Notify all dependent objects of a change in state |weatherStation --> mobileUI, webUI|
| **Command** | Encapsulate a request as an object ||
| **State** | Allow an object to change its behavior when its internal state changes |phone --> ringing, silent, vibrate|
| **Chain of Responsibility** | Pass a request along a chain of handlers ||
| **Mediator** | Define an object that encapsulates how a set of objects interact ||
| **Memento** | Capture and restore an object's internal state ||
| **Visitor** | Add new operations to existing object structures without modifying them ||
| **Template Method** | Define the skeleton of an algorithm, deferring steps to subclasses |abstraction + implementation|
| **Iterator** | Provide a way to access elements sequentially without exposing the structure ||
| **Interpreter** | Define a grammar for a language and use it to interpret sentences ||
