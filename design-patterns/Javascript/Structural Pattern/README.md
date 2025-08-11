Structural Patterns – Class/Object Composition Focus

These patterns deal with object composition, helping ensure that if one part changes, the entire structure doesn't break.

| Pattern       | Purpose                                                                 | Example                                                       |
| ------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Adapter**   | Convert one interface into another expected by the client               | UsbA, UsbC, UsbAdapter                                        |
| **Bridge**    | Separate abstraction from implementation so they can vary independently | Tv, Radio, RemoteControl                                      |
| **Composite** | Treat individual objects and compositions uniformly                     | File, Folder, Filesystem                                      |
| **Decorator** | Add responsibilities to objects dynamically                             | Coffee --> cream, sugar, milk                                 |
| **Facade**    | Provide a unified interface to a set of interfaces in a subsystem       | OrderFacade --> Fetch Product, Payment, Invoice, Notification |
| **Flyweight** | Use sharing to support large numbers of similar objects efficiently     | using hashing to store common props, many balls game          |
| **Proxy**     | Provide a placeholder to control access to another object               |                                                               |
