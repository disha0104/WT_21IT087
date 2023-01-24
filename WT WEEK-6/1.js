//class
class Car {
    //properties
    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }
    //methods
    start() {
    return "The car is started";
    }
    stop() {
    return "The car is stopped";
    }
    }
    //object
    let myCar = new Car("Mobilio", "Maruti", 2015);
    document.getElementById("demo").innerHTML = "My car is " + myCar.make + " " +
    myCar.model + " from " + myCar.year;
    document.getElementById("demo").innerHTML += "<br>" + myCar.start();
    document.getElementById("demo").innerHTML += "<br>" + myCar.stop();