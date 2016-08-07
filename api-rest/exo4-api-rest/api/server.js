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

router.route('/users')
    .post(function(req, res) {
          console.log("post /users");
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.writeHead(200, {'Content-Type': 'text/plain'});

          var user = {};
          user.name = req.body.name;
          console.log("Add new User : "+user.name);

          res.end("received");
    })
    .put(function(req, res) {
          console.log("put /users");
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.writeHead(200, {'Content-Type': 'text/plain'});

          var user = {};
          user.name = req.body.name;
          user.id = req.body.id;
          console.log("update new User : "+user.name + " : "+user.id);
          res.end("received");
    })
    .get(function(req, res) {
        console.log("GET /api/users has been reached");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Content-Type': 'text/plain'});        
        var users = [{id:1,name:"jerome"}, {id:2,name:"romain"}, {id:3,name:"julien"}];
        res.end("{\"list\":"+JSON.stringify(users)+"}");
   });

router.route('/users/:user_id')
    // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
    .get(function(req, res) {
        console.log("GET /api/users/"+req.params.user_id+" has been reached");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        var user = {};
        switch(parseInt(req.params.user_id))
        {
          case 1:
            user = {id:1,name:"jerome"};
            break;
          case 2:
            user = {id:2,name:"romain"};
            break;
          case 3:
            user = {id:3,name:"julien"};
            break;
          default:
            user = {id:4,name:"****"};
            break;
        }

        console.log(user.id + " - "+user.name);
        res.end(JSON.stringify(user));
    });

//-------------------------------------------------------------------
// Launch the server
//-------------------------------------------------------------------

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

app.listen(8080);
console.log('Magic happens on port ' + 8080);
