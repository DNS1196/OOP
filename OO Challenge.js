class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "BEEEP!"
    }
    toString() {
        return `The vehcle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(newVehicle) {
        if (this.vehicles.length >= this.capacity) {
            return "SORRY WE ARE FULL"
        }
        if (!(newVehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!';
        }
        else {
            this.vehicles.push(newVehicle)
            console.log("Vehicle parked!")
        }

    }
}




const my1vehicle = new Vehicle('Scion', 'FRS', 2016);
let myFirstCar = new Car("Toyota", "Corolla", 2005);
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
let garage = new Garage(2);