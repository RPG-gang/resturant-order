class menu {
  constructor(food, price) {
    (this.food = food), (this.price = price);
  }
  displayMenu() {
    let food = ["food:", this.food, "price:", this.price];
    return food;
  }
  addToMenu() {
    let addFood = [{
        name: this.food,
        price: this.price,
    }];
    return addFood
  }
}
