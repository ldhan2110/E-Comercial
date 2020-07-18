// Require modules
const express = require("express");
const hbs = require('express-handlebars');
const app = express();
var port = 3000;

//Set View Engine - using handlebars
app.engine('hbs', hbs({
    extname: 'hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'layout'
}));
app.set('view engine', 'hbs');



//Start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),()=>{
    console.log("Server is listening on port "+ port);
})
