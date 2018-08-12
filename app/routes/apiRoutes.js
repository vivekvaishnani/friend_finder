var friends = require("../data/friends");

module.exports = function(app) {
  
    app.post("/api/friends", function(req, res) {
      // console.log("Body "+ req.body);
        friends.push(req.body);  
        res.json(friends);   
      });

    // Api Route for the lin which serves Json File Data
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  };