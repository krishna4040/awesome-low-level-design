# Core difference (one-liners)

- **Creational** — problems about **how objects are created** (who/when/how to instantiate).
- **Structural** — problems about **how objects are put together** (how they relate, wrap, or expose simpler APIs).
- **Behavioral** — problems about **how objects interact or behave** (who talks to whom, how algorithms change, notifications, workflows).

# Quick mental shortcut (verbs)

- Creational → _create / configure / choose / construct_
- Structural → _compose / wrap / simplify / share_
- Behavioral → _communicate / decide / notify / change behavior_

# Step-wise thinking process (use this in interviews)

1. **Read the problem, identify the symptom** — is it about _creating_ things, _structuring_ objects, or _coordination/behavior_?
2. **Map symptom → category** using the verb shortcut above.
3. **List 2–3 candidate patterns** from that category (don’t pick one immediately).
4. **Pick one pattern and justify**: explain what it solves, what it avoids (tight coupling, duplication, large memory use, etc.).
5. **Consider composition**: can a structural or behavioral pattern help the chosen creational pattern (or vice-versa)? Explain interactions.
6. **Mention tradeoffs & anti-pattern risk** (overengineering, performance, complexity). Draw a tiny class/sequence sketch if possible.

# Quick signals → pattern hits

- “Only one instance / global access” → **Singleton**.
- “Choose concrete type at runtime” → **Factory Method / Abstract Factory**.
- “Build object with many optional parts” → **Builder**.
- “Many similar objects, save memory” → **Flyweight**.
- “Wrap to add features dynamically” → **Decorator** (structural).
- “Simplify complex subsystem” → **Facade** (structural).
- “Notify many listeners when one changes” → **Observer** (behavioral).
- “Undo/redo or queue operations” → **Command** (behavioral), add **Memento** for state snapshots.
- “Algorithm varies” → **Strategy**.
- “Object behavior changes with state” → **State**.
- “Many-to-many talk — use a central hub” → **Mediator**.

# Two short worked examples (walkthrough style)

1. **Text editor with undo/redo, plugins, multiple file formats**
   - Symptom 1 (undo/redo) → _Behavioral_ → **Command** (encapsulate actions) + **Memento** (snapshot state).
   - Symptom 2 (multiple file types at open time) → _Creational_ → **Factory Method** to pick correct parser/loader.
   - Symptom 3 (plugins want to listen to changes) → _Behavioral_ → **Observer**.
   - Result: combine patterns (Command + Memento for undo; Factory for loaders; Observer for UI/plugin updates).

2. **E-commerce checkout (pay via many gateways; show single checkout API; apply discounts)**
   - Choice of gateway at runtime → **Factory** or **Abstract Factory** (create family of payment-related objects).
   - Expose a simple `checkout()` to the rest of app → **Facade** for the payment/fulfillment subsystem.
   - Different discount algorithms → **Strategy** (swap at runtime).
   - Notifications on order status → **Observer** or message queue (behavioral).

# How to justify your answer in an interview (5 points)

1. **State the symptom** (“This problem is about X — therefore category Y”).
2. **Name the pattern and the core benefit** (“Use Strategy to swap algorithms without changing callers”).
3. **Show a one-line alternative and why you didn’t pick it** (e.g., simple `if/else` works but is not scalable).
4. **Sketch responsibilities** (one sentence per class/interface) or draw a tiny diagram.
5. **Mention tradeoffs** (added indirection, harder debug, memory, thread-safety) and when to avoid it.

# One final practical tip

Patterns are tools, not religion. Always ask (or state) constraints: performance, concurrency, API stability, testability. If the interviewer is silent, mention these as assumptions.

---

Want a printable one-page flowchart that maps “symptoms → category → 2 candidate patterns → pick” so you can run it in your head during interviews? I can make that for you.
