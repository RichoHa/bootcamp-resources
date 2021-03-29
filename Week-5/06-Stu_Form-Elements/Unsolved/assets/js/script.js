var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function addItem(event){
    event.preventDefault();
    var shoppingListItems = $(".form-input").val();
    console.log(shoppingListItems);
    var listItems = $("<li>"+ shoppingListItems+"</li>")
    listItems.appendTo(shoppingListEl);
    $(".form-input").val("");
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit',addItem);