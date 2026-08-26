# Day 15 - 40 Days of JavaScript - JavaScript Array Master Course

## **🎯 Goal of This Lesson**

## 📚 Course Flow

- ✅ Introduction
- ✅ What is an Array in JavaScript?
- ✅ How to Create an Array in JavaScript?
- ✅ How to Get Elements from an Array in JS?
- ✅ How to Add Elements to an Array in JS?
- ✅ How to Remove Elements from an Array in JS?
- ✅ How to Copy and Clone an Array in JS?
- ✅ How to Determine if a Value is an Array in JS?
- ✅ Array Destructuring in JavaScript
  - ✅ How to Assign a Default Value to a Variable?
  - ✅ How to Skip a Value in an Array?
  - ✅ Nested Array Destructuring in JS
- ✅ How to Use the Rest Parameter in JS?
- ✅ How to Use the Spread Operator in JS?
- ✅ Destructuring Use Cases in JavaScript
  - ✅ How to Swap Values with Destructuring?
  - ✅ How to Merge Arrays?
- ✅ The length property
- ✅ JavaScript Array Methods
  - ✅ How to Create, Remove, Update, and Access Arrays in JavaScript?
    - ✅ The concat() array method
    - ✅ The join() array method
    - ✅ The fill() array method
    - ✅ The includes() array method
    - ✅ The indexOf() array method
    - ✅ The reverse() array method
    - ✅ The sort() array method
    - ✅ The splice() array method
    - ✅ The at() Method
    - ✅ The copyWithin() Method
    - ✅ The flat() Method
    - ✅ Grouping elements in Array
  - ✅ Static Array Methods in JavaScript
    - ✅ The Array-Like
    - ✅ The Array.from() array method
    - ✅ The Array.fromAsync() array method
    - ✅ The Array.of() array method
  - ✅ Array Iterator Methods in JavaScript
    - ✅ The filter() array method
    - ✅ The map() array method
    - ✅ The reduce() array method
    - ✅ The reduceRight() array method
    - ✅ The some() array method
    - ✅ The every() array method
    - ✅ The find() array method
    - ✅ The findIndex() array method
    - ✅ The findLast() array method
    - ✅ The findLastIndex() array method
    - ✅ Array method Chaining
    - ✅ The forEach() array method
    - ✅ The entries() method
    - ✅ The values() method
    - ✅ The flatMap() array method
  - ✅ Immutability
    - ✅ The toReversed() method
    - ✅ The toSorted() method
    - ✅ The toSpliced() method
    - ✅ The with() method
- ✅ Tasks and Quizzes With Interview Questions

## 🫶 Support

Your support means a lot.

- Please SUBSCRIBE to [tapaScript YouTube Channel](https://youtube.com/tapasadhikary) if not done already. A Big Thank You!
- Liked my work? It takes months of hard work to create quality content and present it to you. You can show your support to me with a STAR(⭐) to this repository.

    > Many Thanks to all the `Stargazers` who have supported this project with stars(⭐)

### 🤝 Sponsor My Work

I am an independent educator and open-source enthusiast who creates meaningful projects to teach programming on my YouTube Channel. **You can support my work by [Sponsoring me on GitHub](https://github.com/sponsors/atapas) or [Buy Me a Coffee](https://buymeacoffee.com/tapasadhikary)**.

## Video

Here is the video for you to go through and learn:

[![day-15](./banner.png)](https://youtu.be/t05NguKFKo0 "Video")

## **👩‍💻 🧑‍💻 Assignment Tasks**

Please find the task assignments in the [Task File](./task.md).

## Array Method Mutability and Immutability Table

| Method                     | Mutates Original Array? | Description |
|----------------------------|------------------------|-------------|
| **Mutating Methods**       |                        |             |
| `push()`                   | ✅ Yes                 | Adds elements to the end of an array |
| `pop()`                    | ✅ Yes                 | Removes the last element of an array |
| `shift()`                  | ✅ Yes                 | Removes the first element of an array |
| `unshift()`                | ✅ Yes                 | Adds elements to the beginning of an array |
| `splice()`                 | ✅ Yes                 | Adds/removes elements at a specific index |
| `sort()`                   | ✅ Yes                 | Sorts elements in place (alters order) |
| `reverse()`                | ✅ Yes                 | Reverses the order of elements |
| `fill()`                   | ✅ Yes                 | Modifies all or some elements with a static value |
| `copyWithin()`             | ✅ Yes                 | Copies part of an array within itself |
| **Non-Mutating Methods**   |                        |             |
| `map()`                    | ❌ No                  | Creates a new array by applying a function to each element |
| `filter()`                 | ❌ No                  | Creates a new array with elements that pass a condition |
| `slice()`                  | ❌ No                  | Returns a new array containing a portion of the original array |
| `concat()`                 | ❌ No                  | Merges arrays and returns a new array |
| `flat()`                   | ❌ No                  | Flattens nested arrays into a new array |
| `flatMap()`                | ❌ No                  | Maps and flattens the result into a new array |
| `reduce()`                 | ❌ No                  | Reduces array elements into a single value |
| `reduceRight()`            | ❌ No                  | Like `reduce()`, but iterates from right to left |
| `join()`                   | ❌ No                  | Converts elements into a string |
| `toSorted()` *(ES2023)*    | ❌ No                  | Returns a new sorted array (non-mutating alternative to `sort()`) |
| `toReversed()` *(ES2023)*  | ❌ No                  | Returns a new reversed array (non-mutating alternative to `reverse()`) |
| `toSpliced()` *(ES2023)*   | ❌ No                  | Returns a new array with spliced elements (non-mutating `splice()`) |
| `find()`                   | ❌ No                  | Returns the first matching element (does not modify array) |
| `findIndex()`              | ❌ No                  | Returns index of first matching element (does not modify array) |
| `findLast()` *(ES2023)*    | ❌ No                  | Returns last matching element (does not modify array) |
| `findLastIndex()` *(ES2023)* | ❌ No                  | Returns index of last matching element |
| `every()`                  | ❌ No                  | Checks if all elements meet a condition |
| `some()`                   | ❌ No                  | Checks if at least one element meets a condition |
| `includes()`               | ❌ No                  | Checks if an element exists in the array |
| `indexOf()`                | ❌ No                  | Finds the first index of a given element |
| `lastIndexOf()`            | ❌ No                  | Finds the last index of a given element |
| `at()` *(ES2022)*          | ❌ No                  | Returns the element at a given index (supports negative indexes) |
| `with()` *(ES2023)*        | ❌ No                  | Returns a new array with an element replaced at a specific index |

---
