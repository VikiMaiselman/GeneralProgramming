// Creational DP, replaces direct object creation calls with calls to a special factory method

// Define the Vehicle interface
class Vehicle {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `Model: ${this.model}, Year: ${this.year}`;
  }
}

// Define Car class implementing the Vehicle interface
class Car extends Vehicle {
  constructor(model, year) {
    super(model, year);
    this.type = "Car";
  }

  drive() {
    console.log("Driving the car...");
  }
}

// Define Bike class implementing the Vehicle interface
class Bike extends Vehicle {
  constructor(model, year) {
    super(model, year);
    this.type = "Bike";
  }

  ride() {
    console.log("Riding the bike...");
  }
}

// Define the VehicleFactory interface
class VehicleFactory {
  createVehicle(model, year) {} // To be implemented by concrete factories
}

// Define a ConcreteCarFactory implementing the VehicleFactory interface
class CarFactory extends VehicleFactory {
  createVehicle(model, year) {
    return new Car(model, year);
  }
}

// Define a ConcreteBikeFactory implementing the VehicleFactory interface
class BikeFactory extends VehicleFactory {
  createVehicle(model, year) {
    return new Bike(model, year);
  }
}

// Usage
const carFactory = new CarFactory();
const bikeFactory = new BikeFactory();

const car = carFactory.createVehicle("Toyota", 2022);
console.log(car.getInfo()); // Output: Model: Toyota, Year: 2022
car.drive(); // Output: Driving the car...

const bike = bikeFactory.createVehicle("Honda", 2021);
console.log(bike.getInfo()); // Output: Model: Honda, Year: 2021
bike.ride(); // Output: Riding the bike...
