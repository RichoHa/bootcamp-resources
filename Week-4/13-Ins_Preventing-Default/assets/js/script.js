var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");
//added checkbox
var checkboxElement = document.querySelector('#checky');

//Stop the defauly of click event on the checkbox
//How do I stop the default handling of any event?
//Invoke the preventDefault method on the click event.
checkboxElement.addEventListener('click',functionWhenClickBox);

function functionWhenClickBox(clickEventObject){
  clickEventObject.preventDefault();
}

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
submitEl.addEventListener("click", showResponse);
