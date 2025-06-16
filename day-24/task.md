# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay

## 2. Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises

## 3. Use fetch() with async/await to load a local JSON file (data.json) and display its contents in the console

## 4. Use the public API `https://jsonplaceholder.typicode.com/users/1` to fetch and display the user’s name, email, and address on the page

## 5. Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM

## 6. Refactor then/catch to async/await

```js
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## Project Task

Let's Build a “Movie Explorer” App

Build an app that lets users search movies using the OMDB API:
`http://www.omdbapi.com/?apikey=yourkey&s=movieName`

Hints:

- Input box for search term
- Display movie title, poster, and year
- Show “No results found” if search fails
- Use async/await, DOM manipulation, and try/catch
