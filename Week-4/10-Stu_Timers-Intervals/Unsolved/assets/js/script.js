//When time elapse.
//I display the remaining number of seconds left.
//if display the message 5 times/5seconds pass, i want to sidplay message.
//after the time, remove the message and stop counting down.

//start a new count down/interval for every one second,
//while the message has remaining words, display the words otherwise,
//clear the lst words and clear the timer.

var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');
//Split: Breakes the string into an array with each word which can be referenced later.
//e.g.console.log(words[3]); = returns into.
//e.g. console.log(char[3]);

function countdown() {
  var timeLeft = 5;

  function runEverySecond(){
    timeLeft = timeLeft-1;
    timerEl.textContent = timeLeft + " seconds reamining";
    if(timeLeft > 0){
      clearInterval(timeInterval);
      timerEl.textContent = "";
      displayMessage();
    }
  }

  timerEl.textContent = "5 seconds reamining";
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(runEverySecond,1000) {
    
  };
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = runEverySecond () {
    // If there are no more words left in the message
    if (wordCount >= arryOfWordsInMessage.Length) {
      mainEl.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);

    } else {
      // Display one word of the message
      mainEl.textContent = arryOfWordsInMessage[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();

//How is displayMessage() utilizing the setInterval() and clearInterval() 
//methods to display the words at an interval of 1000 milliseconds?