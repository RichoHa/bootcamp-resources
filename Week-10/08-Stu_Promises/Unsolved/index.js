// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();//Process is global and only available in node.
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// TODO: Refactor the following to use promises
const practiceCoding = (cb, errCb) => {
  if (studentDistracted) {
    errCb({
      issue: 'Distracted',
      message: 'Coding stopped',
    });
  } else {
    cb('We are coding!');
  }
};

const functionToCallWhenTheFunctionIsResolve = (message) => console.log(message);
const errorCafunctionToCallWhenTheFunctionIsREjectedllback = (message) => console.log(message);

// TODO: Refactor to call 'practiceCoding()' and chain a 'then()' to log "We are coding in promises!" in the console
// TODO: Chain a 'catch()' to log "Promise rejected: " and the error
practiceCoding(callback, errorCallback);


//When a promise is created: const aPromiseObject = new Promise(executorFunction);
//executorfunction is passed two parameters resolve function and a reject function.
//in the executor function

//function executor(resolve,reject)
//If the promise can be fulfilled, then we invoke resolve
//passing the resuolve function the value to resolve with. 
//if the promise cannot be fulfilled, then we invoke the reject function
//passing it the reason for rejection. 

function executor(resolve,reject) {
  if (!studentDistracted) {
    resolve('We are coding in promises');
  } else (
    reject('Student is distracted. Take some more dexies')
  )
}

const promiseToPractiseCoding = new Promise (executor);

promiseToPractiseCoding.then(functionToCallWhenTheFunctionIsResolve, functionToCallWhenTheFunctionIsREjected)