# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output and why?

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
```

## 2. What will happen if we try to modify a frozen object?

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
```

## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.

## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

## 7. How do you check if an object has a certain property?

## 8. What will be the output and why?

```js
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);
```

## 9. What’s the best way to deeply copy a nested object? Expalin with examples

## 10. Loop and print values using Object destructuiring

```js
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
```
