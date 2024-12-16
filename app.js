Conversation opened. 1 unread message.

Skip to content
Using Gmail with screen readers
1 of 702
(no subject)
Inbox

Alireza Noshad <iranexplosm@gmail.com>
10:44 PM (4 minutes ago)
to me

"use strict";

let addFood = [];
class Menu {
  constructor(food, price) {
    (this.food = food), (this.price = price);
  }
  addToMenu() {
    if (typeof this.food === 'string' && !isNaN(this.price)) {
      console.log('Custom Food Added');
      addFood.push({
        name: this.food,
        price: this.price,
      });
    } else {
      console.log('might be WI');
    }
  }
  displayMenu() {
    return addFood;
  }
}


//// Current Foods
// Food1
let food1 = new Menu('lazania',200)
food1.addToMenu()
// Food2
let food2 = new Menu('Pasta', 300)
food2.addToMenu()




// Guideline
console.log('::Guideline::'); 
// Creating Food
console.log("Custom Food==>", '\n' , "let foodx = new Menu('Food Name' , Price)");
// Add Food To Menu
console.log("Add Food To Menu==>", '\n' , "foodx.addToMenu()");
// Display Menu
console.log("Display Menu==>", '\n' ,'new Menu().displayMenu()');




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
    let cost = this.foodAmount * foundUser.price;
    return cost
  }
  factor() {
    let myFactor = "Mr/Ms " + this.fullName + "\n"  + "Food Order: " +this.foodAmount + ' x ' + this.foodName + "\n"+ "Total Cost: " + this.calc()  + "T" + "\n"  + "-Los Pollos Hermanos(Say My Name!..)"
    return myFactor
  }

}

// Samples
let poo = new OrderFood('alireza', 'lazania', 7)
console.log(poo.factor());

let meow4 = new OrderFood('dani', 'Pasta', 10)
// console.log(meow4.factor());
