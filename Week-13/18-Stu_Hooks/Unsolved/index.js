const bcrypt = require('bcrypt');

let password = "password";

password = bcrypt.hash(password, 5, function (err, hash) {
    password = hash;
    console.log(`User.password ${password} is equal to ${hash}`)
})