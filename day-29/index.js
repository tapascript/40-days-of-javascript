
// 1. What are Objects?
// 2. What are Classes?
// 3. What are Functions?
// 3. How Can you practically think of Classes and Objects?
// 4. What is OOP?
// 5. Why OOP is Important in programming?
// 6. Real-World Use Cases of OOP
// 7. Five key OOP principles:
    // a. Abstraction
    // b. Encapsulation
    // c. Inheritance
    // d. Polymorphism
    // e. Composition

    /*
city
    -> houses
        -> roof
        -> doors
        -> windows
    -> cars
        -> model
        -> brand
        -> color
        -> wheels
    -> people
    -> hospitals
    -> roads

    */

    // Game Development => Objects like Player, Enemy, Weapon help structure gameplay logic.

    // E-commerce Website => User, Product, Cart, Order objects each have roles.

    // Mobile Apps => Components like Screen, Button, Notification are objects.

    // Banking Software => Customer, Account, Transaction manage real-world banking processes.

    // Vehicle Management System => Vehicles are objects with types (Truck, Bike) that inherit from a base Vehicle

// Abstraction

// Abstraction is the process of hiding the internal complexities of how something works and only exposing what’s necessary for the user to interact with.

// Encapsulation

// Encapsulation is the bundling of data and methods that operate on that data into a single unit, usually a class — and restricting direct access to some of the object’s components.

// Inheritance

// Inheritance allows one class (child) to reuse the properties and methods of another class (parent), reducing duplication and promoting reusability.

// Polymorphism

// Polymorphism means “many forms” — it allows objects of different classes to be treated as if they are of the same type, but behave differently based on their class-specific implementations.

// Composition

// Composition is a design principle where one class contains or is composed of one or more objects of other classes to reuse their functionality, instead of inheriting from them.

// has-a


// Abstraction    ── Hide complexity, expose interface
// Encapsulation  ── Bundle + protect state
// Inheritance    ── Share logic across classes
// Polymorphism   ── Same method, different behaviors
// Composition.   ── Build by combining units


{
    "name": "tom",
    "isCat": () => {
        return true
    }
}