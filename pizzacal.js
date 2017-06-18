var orderCount = 0;

//Calculates # of pizzas being odered
function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
  orderCount = orderCount + 1;
}

// Calculates # of pizza multiply by 7.5
function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

//Calculates total $$$ of pizza w/ tax (6%)
function getTax() {
  return getSubTotal(orderCount)*0.06;
}

//Totals everything up
function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');

console.log(getSubTotal(orderCount));

console.log(getTotal());
