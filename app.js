var express = require ("express");
var path = require ('path');

//initial app
var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public folder 
app.use(express.static(path.join(__dirname,'public')));

//setup server
var port = 3000;
app.listen(port, function(){
    console.log("Server Running on Port " + port);
});
