var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //if (req.session.isLoggedIn)
  // /github
  // if not
  // /login
  res.redirect('/login');
});

router.get('/login', (req, res, next) => {
  res.render('login')
  if(req.body.username=="admin" && req.body.password=="1234")
    console.log("OK")



})
module.exports = router;
