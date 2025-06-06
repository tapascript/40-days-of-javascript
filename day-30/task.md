# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a Book Class

- Create a Book class with properties: title, author, pages.
- Add a method describe() that logs:
    "Title: [title], Author: [author], Pages: [pages]"
- Create at least two book objects and call the describe() method.

## 2. Use Getters and Setters with a Temperature Class

- Create a Temperature class with a private field _celsius.
- Add a getter to return Fahrenheit value.
- Add a setter to set Celsius temperature.
- Test setting temperature and logging Fahrenheit.

```js
this._celsius * 1.8 + 32;
```

## 3. Build a User Class with Public & Private Fields

- Fields: name, `#password`
- Add a method checkPassword(pw) that checks if it matches #password.
- Show how private fields can’t be accessed directly outside the class.

## 4. Inheritance — Vehicle and Car

- Vehicle class has fields: make, model, and method start()
- Car extends Vehicle, adds fuelType
- Override the start() method in Car to print: "Starting [fuelType] car: [make] [model]"

## 5. Use a Static Method

- Create a class MathUtils with static methods:
    add(a, b), subtract(a, b), randomInt(min, max)
- Call the methods without creating an object.

## 6. Smart Light Bulb Class with Access Control

- Create a SmartLightBulb class:
  - Public method: turnOn(), turnOff()
  - Private method: #connectToWiFi()
  - turnOn() first calls #connectToWiFi() and then logs: "Light is ON"
  - Static method: info() — logs "SmartLightBulb v1.0 supports remote control and scheduling."
- Try accessing the private method directly and observe the error.

## 7. Animal Class and Subclasses

- Base Class: Animal(name, sound)
  - Method: makeSound() logs: "The [name] says [sound]"
- Subclass 1: Dog(name) — inherits from Animal
  - Overrides makeSound() → "The Dog [name] barks!"
- Subclass 2: Cat(name)
  — overrides makeSound() → "The Cat [name] meows!"
- Call super() inside each subclass constructor
- Add a shared method sleep() in Animal and test with both Dog and Cat instances.
