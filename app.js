'use strict'


let addFood = []
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
    })
    return addFood
  }
}
