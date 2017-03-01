var db = require("../models");

module.exports = function(app) {

  app.post("/postRide",
    function(req, res) {

      console.log("Driver Post Data:");
      console.log(req.body);

      db.driver_posts.create({
        // id_fb: req.user.id,
        // depart_address: req.body.departAddress,
        id_fb: "test id_fb",
        depart_address: "test depart_address",
      }).then(function(results) {
        res.json(results);
        // `results` here would be the newly created chirp
        //res.end();
      });

  });

};
