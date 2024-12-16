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

let meow = new Menu('laz',200)
console.log(meow.addToMenu());

let meow2 = new Menu('Pasta', 300)
console.log(meow2.addToMenu());




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
    let cost = this.foodAmount * Menu.apply(this.price);
    return cost
  }
}

let meow3 = new OrderFood('alireza', 'laz', 7)
console.log(meow3.calc());
