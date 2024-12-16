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

// let meow = new Menu('laz',200)
// console.log(meow.addToMenu());


// let meow2 = new Menu('Pasta', 300)
// console.log(meow2.addToMenu());
