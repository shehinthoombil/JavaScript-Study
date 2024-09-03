function Vehicle(make, model) {
    this.make = make
    this.model = model
}

Vehicle.prototype.start= function(){
    console.log(`The ${this.make} ${this.model} is started`);   
}
const car = new Vehicle("Honda","City");
const bike = new Vehicle("Honda","CBR");

car.start()
bike.start();