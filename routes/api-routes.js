var db = require("../models");

module.exports = function(app) {

  app.post("/api/postride",
    function(req, res) {

      console.log("Driver Post Data:");
      console.log(req.body);

      db.driver_posts.create({
        id_fb: req.user.id,
        depart_address: req.body.depart_address,
        arrival_address: req.body.arrival_address,
        depart_time: req.body.depart_time,
        return_depart_address: req.body.return_depart_address,
        return_arrival_address: req.body.return_arrival_address,
        return_depart_time: req.body.return_depart_time,
        seats: req.body.seats,
        cost: req.body.cost,
        notes: req.body.notes,
        car: req.body.car
        }).then(function(results) {
        res.json(results);
        // `results` here would be the newly created chirp
        //res.end();
      });

  });


};
