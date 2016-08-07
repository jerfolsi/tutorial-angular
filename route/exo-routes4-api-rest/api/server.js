//-------------------------------------------------------------------
// Initialisation
//-------------------------------------------------------------------

express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();  

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json


//-------------------------------------------------------------------
// ROUTES
//-------------------------------------------------------------------

// middleware to use for all requests
/*
router.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
*/

router.route('/books')
    .post(function(req, res) {
          //....
    })
    .put(function(req, res) {
        //...
    })
    .get(function(req, res) {
        console.log("GET /api/books has been reached");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Content-Type': 'text/plain'});        
        var books = [{id:1,name:"Book 1"}, {id:2,name:"Book 2"}, {id:3,name:"Book 3"}];
        res.end("{\"list\":"+JSON.stringify(books)+"}");
   });

router.route('/books/:book_id')
    // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        console.log("GET /api/book/"+req.params.book_id+" has been reached");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        var user = {};
        switch(parseInt(req.params.book_id))
        {
          case 1:
            book = {id:1,name:"jerome"};
            break;
          case 2:
            book = {id:2,name:"romain"};
            break;
          case 3:
            book = {id:3,name:"julien"};
            break;
          default:
            book = {id:4,name:"****"};
            break;
        }

        console.log(book.id + " - "+book.name);
        res.end(JSON.stringify(book));
  
    });

// register our routes + all of our routes will be prefixed with /api

app.use(function(req, res, next) {
   // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use('/api', router);


//-------------------------------------------------------------------
// Launch the server
//-------------------------------------------------------------------

app.listen(8080);
console.log('Magic happens on port ' + 8080);
