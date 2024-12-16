"use strict";

let addFood = [];
class Menu {
  constructor(food, price) {
    (this.food = food), (this.price = price);
  }
  displayMenu() {
    let food = ["food:", this.food, "price:", this.price];
    return food;
  }
  addToMenu() {
    addFood.push({
      name: this.food,
      price: this.price,
    });
    return addFood;
  }
}

let food1 = new Menu('lazania',200)
console.log(food1.addToMenu());

let food2 = new Menu('Pasta', 300)
console.log(food2.addToMenu());





let order = []
class OrderFood {
  constructor(fullName, foodName, foodAmount) {
    (this.fullName = fullName),
      (this.foodName = foodName),
      (this.foodAmount = foodAmount);
  }
  addOrder() {
    order.push({
      username: this.fullName,
      foodName: this.foodName,
      foodAmount: this.foodAmount,
    });

    return order;
  }
  calc() {
    // let foundUser = addFood.find(user => user.name === this.foodName);
    let cost = this.foodAmount * addFood.find(user => user.name === this.foodName).price
    return cost
  }
  factor() {
    let myFactor = this.fullName + "\n"  + this.foodAmount + ' x ' + this.foodName + "\n" + this.foodAmount * addFood.find(user => user.name === this.foodName).price + "T"
    return myFactor
  }

}

// Samples
let poo = new OrderFood('alireza', 'lazania', 7)
console.log(poo.factor());

let meow4 = new OrderFood('dani', 'Pasta', 10)
console.log(meow4.factor());