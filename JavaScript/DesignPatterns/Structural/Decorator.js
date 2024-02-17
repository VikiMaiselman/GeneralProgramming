// allows attaching new behaviors to objects by placing these objects inside special wrapper objects
// that contain the behaviors
class Coffee {
  cost() {
    return 5;
  }

  getDescription() {
    return "Coffee";
  }
}

class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  cost() {
    return this.coffee.cost() + 2;
  }

  getDescription() {
    return this.coffee.getDescription() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1;
  }

  getDescription() {
    return this.coffee.getDescription() + ", Sugar";
  }
}

// Usage
let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(coffee.getDescription()); // Output: Coffee, Milk, Sugar
console.log(coffee.cost()); // Output: 8
