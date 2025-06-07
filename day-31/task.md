# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a Simple Prototype Chain

- Define a base object animal with a method eat.
- Create another object dog that inherits from animal using Object.create.
- Call eat from dog and explain how the prototype chain resolves it.

## 2. Build a Custom Constructor Function

- Create a constructor function Book(title, author).
- Add a method getDetails() to the prototype of Book.
- Instantiate two books and show they share the method from the prototype.

## 3. Compare Object Creation Patterns

Create three objects using:

- Object literals
- Constructor functions
- Object.create

Add similar methods and compare how inheritance works in each pattern.

## 4. Simulate a Real-World Inheritance Chain

- Simulate a real-life hierarchy: Person → Student → GraduateStudent.
- Each level should add its own methods or properties using prototypes.
- Show how a GraduateStudent can access methods from both Student and Person.

## 5. Object.create vs Class vs Constructor Function

- Implement the same User entity using:
  - Constructor Function
  - ES6 Class
  - Object.create
- Write a summary comparing syntax, readability, and prototype behavior.
