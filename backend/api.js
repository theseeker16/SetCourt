'use strict';

const Api = require("claudia-api-builder");
const api = new Api();
const getPizzas = require("./handlers/getpizza");
const createOrder = require('./handlers/create-order');

api.get('/', () => "Welcome to Pizza Api");

api.get('/pizzas', () => {
  return  getPizzas();
});

api.get('/pizzas/{id}', (request) => {
  console.log(request);
  return  getPizzas(request.pathParams.id)
}, {
  error: 404
});


api.post('/order', (request) => {
  return createOrder(request.body);
},{
  success:201,
  error:400
});


module.exports = api;