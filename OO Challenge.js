class Vehicle {
    constructor(make, model, year) { // constructor used to give multiple properties
        this.make = make; // enter this keyword, and that is the make
        this.model = model; // enter this keyword, and that is the model
        this.year = year; // enter this year, and that is the year
}


honk() { // each vehicle will have the ability to use this function for a honk
    return "Beep.";
}

toString() { // constructor helps us write this string with make, model & year
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

/** Cars are a type of vehicle with 4 wheels. */

class Car extends Vehicle { // car is recognizable as a type of vehicle
  constructor(make, model, year) { // same constructor...
    super(make, model, year); // 'super' is used to call the constructor
    this.numWheels = 4; // amount of wheels on the vehicle
  }
}

/** Cars are a type of vehicle with 2 wheels. */

class Motorcycle extends Vehicle { // motorcycle is recognizable as a type of vehicle
  constructor(make, model, year) { // same constructor...
    super(make, model, year); // 'super' is used to call the constructor
    this.numWheels = 2; // amount of wheels on the vehicle
  }

  revEngine() { // each vehicle will have the ability to use this function for a revEngine
    return "VROOM!!!";
  }
}

class Garage {
  constructor(capacity) { // constuctor made for the capacity of the garage
    this.vehicles = []; // empty array for vehicles
    this.capacity = capacity; // this will be the garage capacity
  }

  add(newVehicle) { // function for adding new vehicle to the garage
    if (!(newVehicle instanceof Vehicle)) { // if the vehicle added DOES NOT match the requirements of the Vehicle constructor...
      return "Only vehicles are allowed in here!"; // ... return this message
    }
    if (this.vehicles.length >= this.capacity) { // if the amount of vehicles is greater than or equal to the capacity of the garage...
      return "Sorry, we're full."; // ... return this message
    }
    this.vehicles.push(newVehicle);  // push this new vehicle to the end of the list...
    return "Vehicle added!"; // .. return this message
  }
}