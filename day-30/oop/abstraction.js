// Abstraction

// Definition: Hiding internal details and showing only essential features.
// In Code: Provide public methods like startEngine() while hiding what happens inside.

class Car {
  startEngine() {
    this.#injectFuel();
    this.#ignite();
    console.log("Engine started");
  }

  #injectFuel() {
    console.log("Fuel injected");
  }

  #ignite() {
    console.log("Spark generated");
  }
}

// Only startEngine() is visible to users; internal complexity is abstracted.