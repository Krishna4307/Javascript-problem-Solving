const cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 500, quantity: 2 },
  { name: "Keyboard", price: 1500, quantity: 1 },
  { name: "Monitor", price: 10000, quantity: 2 }
];
function findCartTotal(cart){
    let total=0;
    for(let i=0; i<cart.length; i++){
        total+=cart[i].price*cart[i].quantity
    }
    console.log(total)
}
findCartTotal(cart);