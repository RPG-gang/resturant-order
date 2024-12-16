"use strict";

let addFood = [];
class Menu {
  constructor(food, price) {
    (this.food = food), (this.price = price);
  }
  displayMenu() {
    let fooded = addFood;
    return fooded;
  }
  addToMenu() {
    addFood.push({
      name: this.food,
      price: this.price,
    });
    return addFood;
  }
}

// Current Foods
let food1 = new Menu('lazania',200)
food1.addToMenu()

let food2 = new Menu('Pasta', 300)
food2.addToMenu()

//// Guideline
// Creating Food
console.log("Creating Food==>", '\n' , "let foodx = new Menu('Food Name' , 'Price')"
);



// Menu Display
// console.log(new Menu().displayMenu());







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
    let foundUser = addFood.find(user => user.name === this.foodName);
    let cost = this.foodAmount * foundUser.price
    return cost
  }
  factor() {
    let myFactor = this.fullName + "\n"  + this.foodAmount + ' x ' + this.foodName + "\n"+ "Total Cost" + this.calc()  + "T"
    return myFactor
  }

}

// Samples
let poo = new OrderFood('alireza', 'lazania', 7)
// console.log(poo.factor());

let meow4 = new OrderFood('dani', 'Pasta', 10)
// console.log(meow4.factor());