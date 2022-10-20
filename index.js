
/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");

//Loads the handlebars module
const { engine } = require('express-handlebars');

const app = express();

/**
 * Handlebars Templating Engine and Views Directory
 */

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

/**
 * Routes Definitions
 */

//Serves static files (we need it to import a css file)
app.use(express.static('public'))

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', {layout : 'index'});
});

/**
 * Server Activation
 */
const port = process.env.PORT || "8000";

app.listen(port);
