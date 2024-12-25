class Car {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(): void {
        this.speed += 20;
    }
}

const car = new Car('Toyota', 100);
car.accelerate();
console.log(car.speed);// After fixing: will print 120
