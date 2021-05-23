const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: '',
  database: 'ice_creamDB',
});


function functionToCallAfterQueryingTheDataBase(error,results){
  if(error){
    connection.query("Something went wrong: ", error)
  }else{
    console.log("here are your results: ", results)
    connection.end();
  }
}

function functionToCallAfterConnecting(error){
  if(error){
    console.log("Ooopsie...", error.message);
  }else{
    connection.query("select * from products", functionToCallAfterQueryingTheDataBase)
  }
}


// connection.connect((err) => {
//   if (err) throw err;
//   console.log(`connected as id ${connection.threadId}`);
//   connection.end();
// });

connection.connect(functionToCallAfterConnecting);