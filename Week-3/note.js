//Notes

checkForEquality(1,2);

function checkForEquality(valueOne,valueTwo){
    return valueOne + valueTwo;
}
//Returns "3"

function checkForEquality(valueOne,valueTwo){
    if(valueOne + valueTwo == 3){
        console.log("This adds up to three!");
    } 
}
//Returns "This adds up to three!"

//Introduction to Objects
//Create an Object

//Declaring a variable myObject
var myObject;

//Assign an empty object to myObject
myObject={}; // object literal syntax--> Create a new, empty object.

var babyNames = {
    boysNames: ["tom", "dick", "harry","seven"],
    girlsNames: ["apple","rose","myrtle"],
};

var boysNames = babyNames.boysNames; //object.key ==>return the ["tom", "dick","harry","seven"]
var girlsNames= babyNames.girlsNames; //["apple","rose","myrtle"]

var mystuff = {
    myName: "Ramuuu",
    myAge:"9001",
    myFaves:["holdens","pitchfork","Narra"],
    myOtherStuff:{
        medicareNumber: 99382934984,
        meHouse:"9 Greendoos Rd, Perth",
    }
    meAddingFunction: function addTwoNumber(x,y){
        return x + y;
    }
}

//You can store what ever you want in objects

var mathFunctions = {
    add: function(x,y){return x+y},
    subtract: function(x,y){return x-y}
}

mathsFunctions.add(1,2);
var myAddingFunction = mathsFunctions.add; //return function(x,y){return x+y}
var myAddingFunction = matchFunctions["add"]; //return function(x,y){return x+y}

//Window is an object
//Window has heaps of keys
//Nodejs --> is called Global 
//window.personalbar is an example of Object.Key
//Require an execution

var foo = "foobar";
console.log(foo===window.foo)
//return "true"

window.foo
//return "foobar"

console.log(globalThis === window); // return: true
console.log(this === window); // return: true
console.log(this===globalThis); //return: true


globalThis === window === this // Shows what global it is

//Example of global shit
var totesMyRealDeetz ={
    name: "Robyn",
    age:21,
    greet: function(){
        console.log(`Hello, my name is $(this.name)`);
    }//"this" is bound in the object
}

totesMyRealDeetz.greet()
// Return "Hello, my name is Robyn"

greetMeAncientOne.call(userObject)
//
greetMeAncientOne.apply(userObject)
//

//bind to a different object
showOfMahSkillz.call(userObject.languages)//activiate functions when bind
showOfMahSkillz.apply(userObject.languages)//more than one function
var boundShowOfMahSkillz = showOfMahSkillz.bind(userObject)

//boundShowOfMahSkillz is bound with userObject


//implicit binding --> the function key attached to the Object.apply
