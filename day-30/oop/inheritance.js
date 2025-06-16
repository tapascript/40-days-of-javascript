// Inheritance

// Definition: Child classes inherit behavior from a parent class.

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    drive() {
        console.log("Driving on fuel");
    }
}

class ElectricCar extends Car {
    constructor(make, model, batteryLevel) {
        super(make, model);
        this.batteryLevel = batteryLevel;
    }

    charge() {
        console.log("Charging battery...");
    }
}

const tesla = new ElectricCar("Tesla", "Model S", 90);
tesla.drive(); // Inherited from Car
tesla.charge(); // Own method
