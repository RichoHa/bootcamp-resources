var count = 0;

var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function incrementCounter(){
  count= count + 1;
  countEl.textContent= count;
}

function decreamentCounter(){
 //if count larger than zero, you can subtract.
  if(count>0){
    count= count - 1;
    countEl.textContent= count;
  } 
}

// TODO: Add event listener to increment button
incrementE1.onclick= incrementCounter;

// TODO: Add event listener to decrement button 
decrementEl.onclick= decreamentCounter;