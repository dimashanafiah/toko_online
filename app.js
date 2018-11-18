var express = require ("express");
var path = require ('path');
var mongoose = require ('mongoose');
var config = require ('./config/database');
//initial app
var app = express();

//connection syntax
mongoose.connect(config.database);
var db = mongoose.connection;
db.on ('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("sudah connect ke mongodb");
});

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public folder 
app.use(express.static(path.join(__dirname,'public')));

//set routes
var pages = require('./routes/pages.js');
var adminPages = require ('./routes/admin_pages.js');

//redirect
app.use ('/', pages);
app.use ('/admin/pages', adminPages);

//setup server
var port = 3000;
app.listen(port, function(){
    console.log("Server Running on Port " + port);
});

