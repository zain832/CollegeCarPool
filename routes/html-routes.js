var passport = require('passport');
var db = require("../models");

module.exports = function(app) {

  // Define routes.
  app.get('/',
    function(req, res) {
      res.render('home1', { user: req.user });
    });

    app.get('/getridetest',
      function(req, res) {
        res.render('getride');
      });


  app.get('/login',
    function(req, res){
      res.render('login');
    });

  app.get('/login/facebook',
    passport.authenticate('facebook', { scope: ['email'] }));

  app.get('/login/facebook/return',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      db.User.create({
        id_fb: req.user.id,
        name: req.user.displayName,
        email: req.user.emails[0].value,
        photo: req.user.photos[0].value
      }).then(function() {
        res.redirect('/getride');
      }).catch(function(err) {
        res.json(err);
      });
    });

  app.get('/getride',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res){
      db.driver_posts.findAll({}).then(function(results) {
        // results are available to us inside the .then
        //res.json(results[0]);
        res.render('getride', {user: req.user, driver_posts: results });
      });
      // console.log(req.user.emails[0].value);
      //console.log("this user"+ JSON.stringify(req.user));
      //res.render('getride', { user: req.user, driver_posts: post });
      //res.json(req.user);
    });


    app.get("/getride/api", function(req, res) {
      db.driver_posts.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results[0]);
        //res.render('getride', { driver_posts: results });
      });

    });
};
