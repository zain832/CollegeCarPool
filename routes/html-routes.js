var passport = require('passport');
var db = require("../models");

module.exports = function(app) {

  // Define routes.
  app.get('/',
    function(req, res) {
      res.render('home1', { user: req.user });
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
      // console.log(req.user.emails[0].value);
      //console.log("this user"+ JSON.stringify(req.user));
      res.render('getride', { user: req.user });
      //res.json(req.user);
    });
};
