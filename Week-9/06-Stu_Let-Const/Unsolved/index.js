// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  //Declaration + Assignment
  var message = 'How are you?';

  if (name.length > 0) {
    //Declaration + Assignment
    var message = 'Hello ' + name; 
    //var is affected in all of "addGreetingMessage" 
    //this will re-write message value
    //var is not block scoped, use let instead.
    //let message = 'Hello ' + name;

    console.log(message);
  }

  console.log(message);
};

addGreetingMessage('Tammy');

//Expected Behaviour:
//"Hello Tammy"
//"How are you?"

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  const callout = 'Outside of the loop';
  //You can't re-declare a const to anything else.
  var counter = 5;

  while (counter > 0) {
    //Assignment & Declaration
    var callout = 'Inside the loop'; 
    //Re-declaration is not blocked scoped!
    //changed var abocve to let.
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

//Expected Behaviour
//"5 Inside the loop"
//"4 Inside the loop"
//"3 Inside the loop"
//"2 Inside the loop"
//"1 Inside the loop"
//"Outside of the loop"

//Actual Behaviour:
//Syntax Error: Identifier "callout" has already been declared.


// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (var i = 0; i < matrix.length; i++) { 
    //This is a statement
    //As, a expression formalises a value
    //var i = 0 --> Declaring a variable "i" and assigning it a value of 0
    //i< matrix. length guards expression: must be true to execute code in the block {..}
    //i++: assigning a new value (i+1) to i (unary operator: operates on a single value)
    var line = matrix[i];
    //Declaration & Assignment to "line"
    for (var i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
};

var matrix = [
  [1, 2, 3], //0th Position
  [4, 5, 6], //1st Position
  [7, 8, 9], //2nd Position
];

countMatrix(matrix);
//Expected Behaviour
//1
//2
//3
//4
//5
//6
//7
//8
//9

//Actual Behaviour:
//1
//2
//3