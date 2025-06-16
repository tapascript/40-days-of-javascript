// Encapsulation

// Definition: Group related properties and methods, and restrict direct access to internal data.
// In Code: Use # for private fields.

class Car {
  #speed = 0;

  accelerate() {
    this.#speed += 10;
  }

  getSpeed() {
    return this.#speed;
  }
}

const car = new Car();
car.accelerate();
console.log(car.getSpeed()); // 10