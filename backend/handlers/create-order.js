'use strict';

const pizzas = require('../data/pizzas.json');
const Order = require('../Models/order');

function createOrder(req){
  var order = new Order(req.pizzaId,req.address);
  if(!order || !order.pizzaId || !order.address)
    throw new Error('The order pizza please provide pizza type and addres where pizza should be delivered');

  return order.toString();
}


module.exports = createOrder;