// Composition

// Definition: Use of other classes to build functionality.

class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }

  startCar() {
    this.engine.start();
  }
}

const car = new Car();
car.startCar();