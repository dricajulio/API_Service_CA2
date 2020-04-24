//THIS FILE WAS CREATED TO:
// TO CALL DE DB AND THE APLICATION

const app = require ('./app');
require('./database.js');

app.listen (3000);
//message saying that I'm executing the app on port 3000
console.log('Server on port 3000');