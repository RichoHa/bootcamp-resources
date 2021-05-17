// Dependencies
const express = require('express');

const app = express();
const PORT = 3000;

// Data
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Knight',
    age: 60,
    forcePoints: 1350,
  },
];

//Routes which a client can get...
//http://localhost:3000/GET
//"Welcome to the Star Wars Page!" --- Content type --> "plaint/text" or 
//check documentation in express.
//how to tell if the header content type/MIME type text/plain.
//to check content type of the response..
//package manager which is being used is NPM node package manager -- Express.
//package.json has all the modules which is being used. 
//npm install (don't include express)--> this will include express.
//npm installs other files which it needs to function also..
//To run server --> npm run --> checks Json package scripts requires start"""
//npm run watch
//curl -i -X GET http://localhost:3000/


app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

function getChosenCharacter(characterPath){
  for (const character of characters){
    if(character.routeName === characterPath){
      return character;
    }
  }
}

app.get('/:character', (req, res) => {//having two slashes will mean it will save two sections of the path..
  const chosen = req.params.character;

  //requestParameters (request.params) is an object{}
  //character is property which is created

  // What does this log?


  const chosenCharacter = getChosenCharacter(chosen)
  
  if(typeof chosenCharacter === `object`){
    res.end(chosenCharacter);
  }else{
  res.status(404)
  res.send(`No Character can be found`)
  }
});

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
