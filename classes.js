'use strict';


function Car(make, model, year, paint) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.paint = paint; //color is a javascript built-in property
}

Car.prototype.carReport = function() {
    return 'The car is a ' + this.paint + ' ' + this.year + ' ' + this.make + ' ' + this.model;
}

console.log('Running classes.js')

let getawayCar = new Car('Nissan', 'Sentra', '2014', 'Silver');
console.log(getawayCar.make);
console.log(getawayCar.paint);
console.log(getawayCar.carReport());



class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    perimeter() {
        return this.sides.reduce((a,b) => a + b, 0);
    }
}