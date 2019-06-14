'use strict';

class Order {
  constructor(pizzaId, address){
    this.pizzaId = pizzaId;
    this.address = address;
  }

  get pizzaId() {
    return this.pizzaId;
  }

  get address(){
    return this.address;
  }
  set pizzaId(pizzaId){
    return this.pizzaId = pizzaId;
  }
  set address(address){
    return this.address = address;
  }

  toString = () => {
    return "ID: " + this.pizzaId + " " + " Address: " + this.address;
  }
}

module.exports = Order;