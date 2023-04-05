const express = require("express");
const router = express.Router();
const puzzle = require("./dataModel");

router.get("/home", (req, res) => {
  puzzle.find({}, (err, data) => {
    if (err) {
      
      console.log(err);
      res.sendStatus(500);
    } else {
      //console.log(data);
      res.send(data);
    }
  });

});

module.exports = router;

/* if we have more routs,we must define them here.
ex: 
apiRouter.get('/about', (req, res) => {
  // handle GET request for all users
});

--------------------------------------------------------------------
Then, we can register these routers with the main Express app like this:

const express = require('express');
const app = express();

// register routers with app
app.use('/api', apiRouter);
app.use('/auth', authRouter);

*/

//   This code defines a route for handling GET requests to '/'.
//   When a GET request is received, the route handler retrieves all documents
//   from the "dataModel" collection using the dataModel.find() method and sends
//   the result back to the client.