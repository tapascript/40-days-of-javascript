# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Debounced Live Character Counter

Build a character counter for a `<textarea>` that updates the live character count only after the user pauses typing for 500ms.

- ✅ Use debounce
- ✅ UI should display: “Characters typed: X”
- ✅ Bonus: Warn if character count exceeds 200

## 2. Throttled Window Resize Logger

Create a page that logs the window dimensions to the console — but only once every 250ms as the user resizes the browser.

- ✅ Use throttle
- ✅ Show current width × height on screen
- ✅ Bonus: Highlight screen size category (Mobile, Tablet, Desktop)

## 3. Memoized Temperature Converter

Write a function to convert Celsius to Fahrenheit and vice versa.
Use memoization to cache previous conversions.

- ✅ Use memoize() wrapper
- ✅ Bonus: Add a counter to show how many times the real function runs

## 4. Debounced API Search Simulation

Simulate a fetch to search GitHub users using a mock API.
Fire the search only when the user pauses typing for 600ms.

- ✅ Use debounce()
- ✅ Simulate delay with setTimeout()
- ✅ Bonus: Show loading spinner during wait

## 5. Cleanup Forgotten Event Listeners

Create a modal popup that registers keyboard events (Esc to close)
Ensure those listeners are properly cleaned up when the modal closes.

- ✅ Prevent memory leaks
- ✅ Bonus: Log to console when cleanup happens

## 6. Profile and Optimize List Rendering

Render a list of 1,000 items with buttons to sort, filter, and shuffle.
Measure and optimize for performance.

- ✅ Use performance.now() or console.time()
- ✅ Use batching or virtual DOM-like diffing
- ✅ Bonus: Only update DOM for changed rows

## 7. Performance Race: Debounce vs Throttle vs Memoization

Build a demo that lets users toggle between debounce, throttle, and memoized search strategies in a large dataset (e.g., products, cities).

✅ Compare:

- Number of function calls
- Time taken
- Smoothness of UI

✅ Display performance metrics live
