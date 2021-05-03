//Class Activity 13 Notes: 
//const fs = require("./fs");
//Note: LHS: variable declaration of type const
//Note: RHS: function invocation - function is require, and we are passing require a parameter "fs"
//Note: Every file in node can be treated as a module. 
//Note: const has the object within the fs file. 
//Note: Need to identify where teh file is by having "./", in the same directory.

//We're using the commonJS modules --> encourages to read up on.
//Everything gets wrapped in --> function(exports, require, filename, dirname...)
//We have export the item out through the function.
//module.exports = "Variable Name"
 
//Note:Usefull tools: console.log(typeof "Variable Name Here")
//Note: Identify the type of the variable.

//Note:Usefull tools: console.log(JSON.stringify("variable Name Here"));
//Note: Identify what is in the object.

//Note:Usefull tools: console.log(module);
//Note: Identify what is in the module.

//to access a module you'll need to:
//1) const "variableName" = require("./filename.js");
//2) module.children[x].whatYOuWant; --> module attribute
//3) variableName.functionInsidevariableName();

//const variableName = randomArray.join("/n");
//joins all the items in the array with /n (New Line).