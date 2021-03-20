//WRITE YOUR CODE BELOW

var customersOrder = {};

customersOrder = {
    drinksName:"Coke",
    Sugar:"10",
    ready: false,
}

console.log(customersOrder.drinksName + customersOrder.Sugar);

if(customersOrder.ready===true){
    console.log("ready for pick up!");
} else {
    console.log("Still in queue :(");
}


