// Polymorphism

// Definition: Methods behave differently based on object type.
// In Code: Override a method in child class.

class Car {
  drive() {
    console.log("Driving on fuel");
  }
}

class ElectricCar extends Car {
  drive() {
    console.log("Driving on electricity");
  }
}

const myCars = [new Car(), new ElectricCar()];
myCars.forEach(car => car.drive());