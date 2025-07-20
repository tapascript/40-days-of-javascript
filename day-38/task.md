# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

## 1. Identify Reachable vs Unreachable Objects

Write a small program where:

- You create an object user
- Create a second object profile that references user
- Then set user = null

Is the original user object still reachable? Why or why not?

## 2. Simulate and Break a Cyclic Reference

Observe how cyclic references can cause memory retention.

- Create two objects a and b
- Make them reference each other (a.ref = b and b.ref = a)
- Nullify external references to both

Explain why this may or may not cause a memory leak. Add a.ref = null; b.ref = null; and explain how it helps

## 3. DOM Leak Detection and Fix

Learn how DOM elements and closures can create memory leaks.

- Create a button using JavaScript
- Add an event listener that references a variable outside the listener
- Remove the button from the DOM, but not the event listener

Identify the leak & fix it.
