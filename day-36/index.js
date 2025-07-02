
// Topics to cover today

// - What is Performance?
// - Why Performance is important?
// - Important Techniques
    // - Debouncing
    // - Throttling
    // - Memoization
// - What is Memory Leak?
    // - Example and Fix
// - Revisting DOM Performances
// - Over Optimization
// - Tasks and Assignments



// - What is Performance? Why Performance is important?

// efficiency
// resource usages
// responsiveness
// scalability

// Debouncing

// limit the rate at which a function is executed
// ensures that a function is only executed/called after a certain delay has passed since the last time it was called.

function debounce(fn, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}


// Throttling

// - It linmits how often a function can be called over time

function throttle(func, interval) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= interval) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}


// Memoization

// caching
// cache the result of an expensive operation and return the cached result when the same input is given in the future.

// input => fn() => output

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("Cache hit:", key);
      return cache[key];
    } else {
      console.log("Cache miss:", key);
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

function slowSquare(n) {
  console.log("Computing square of", n);
  return n * n;
}

const memoizedSquare = memoize(slowSquare);

memoizedSquare(5); // Cache miss
memoizedSquare(5); // Cache hit
memoizedSquare(6); // Cache miss
memoizedSquare(5); // Cache hit


// memory leak

// retains memory that’s no longer needed


// Revisting DOM Performances

//  1. Minimize DOM Access
//  2. Batch DOM Changes Using Fragments
//  3. Avoid Layout Thrashing
//  4. Debounce or Throttle High-Frequency Events
//  5. Use classList Instead of className Overwrites
//  6. Use Virtual DOM (React, Vue) or Diffing Libraries
//  7. Avoid unnecessary loops and iterations

// Over optimizarion


// “Measure first. Optimize later.” – the golden rule.