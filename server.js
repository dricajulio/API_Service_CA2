var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
//creating module express
express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose');
require('dotenv').config();

var app = express();
var port = process.env.PORT || 3000;
var userCtrl = require('./user-controller');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./routes'));

//using __dirname to get the absolute path of
//the directory, that contains the xml.file
app.use (express.static(__dirname + '/app'));

//module.exports = app;

app.post('/users', userCtrl.createUser);
app.get('/users', userCtrl.getUsers);
app.get('/users/:id', userCtrl.getUser);
app.delete('/users/:id', userCtrl.deleteUser);
app.put('/users/:id', userCtrl.updateUser);

app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});