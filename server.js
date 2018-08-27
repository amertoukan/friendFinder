require ('dotenv').config();
var path = require ('path');
var PORT = process.env.PORT || 3000;
var express = require ('express');
var app = express ();
var bodyParser = require ('body-parser');

//--------BODY PARSER ---------
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }));

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

var data = {
    friends: []
};
var clicks = 0;

//ROUTES
//-------
// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
});

