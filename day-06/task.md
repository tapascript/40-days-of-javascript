# Tasks
Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
Formula: (Celsius * 9/5) + 32 = Fahrenheit

## 2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

## 3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

## 4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n.
Example 5! = 5 * 4 * 3 * 2 * 1

## 5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

## 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

## 7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.

## 8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.

## 9. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {
    f1();
}
f2();
```

## 10. Create Call Stack Execution Diagram for this flow

```js
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();
```