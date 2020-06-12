const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );
app.use( methodOverride() );

var router = express.Router();

router.get( '/', function( req, res ) {
    res.send("Hola Mundo");
});

app.use(router);

app.listen(port, function() {
    console.log(`listening on http://localhost:${port}`);
});
