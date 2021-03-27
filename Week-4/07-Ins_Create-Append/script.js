// Stores user response in variable
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

//The Window.confirm() method displays a modal dialog with an optional message and two buttons: OK and Cancel.
var nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
  //The Window.prompt() displays a dialog with an optional message prompting the user to input some text.
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
  //The Window.alert() method displays an alert dialog with the optional specified content and an OK button.
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    //The Node.appendChild() method adds a node to the end of the list of children of a specified parent node. 
    document.body.appendChild(secondTag);
  }
}
