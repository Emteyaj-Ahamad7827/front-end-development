class Vehicle {
    run() {
        console.log("Vehicle is running");
        
    }
}

class Car1 {
    run() {
        console.log("Car is running");
        
    }
}
 class Truck {
    run() {
        console.log("Truck is running");
        
    }
 }


 let v1 = new Vehicle();
 let v2 = new Car1();
 let v3 = new Truck();

// v1.run();

// this is different example of polymorphism

class Animal {
    speak(){
        console.log("Animal speak");
        
    }
}

class Dog extends Animal {
    speak() {
        console.log("dogs barks");
        
    }
}


class Cat extends Animal {
    speak(){
        console.log("Cat meaws");
        
    }
}