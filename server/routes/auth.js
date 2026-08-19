const express = require('express');
const router = express.Router();
const User = require('../models/User');

//The array of three users:
const users = [
  new User('alpa', '2005-09-02', 20, 'alpa@test.com', 'password1', false),
  new User('tyra',   '2006-01-24', 20, 'tyra@test.com',   'password2', false),
  new User('ysa', '2005-12-16', 20, 'ysa@test.com', 'password3', false)
];

router.post('/auth', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var foundUser = users.find(function (u) {
    return u.email === email && u.password === password;
  });

  if (foundUser) {
    //sending everything except the password
    res.json({
      username: foundUser.username,
      birthdate: foundUser.birthdate,
      age: foundUser.age,
      email: foundUser.email,
      valid: true
    });
  } else {
    res.json({ valid: false });
  }
});

module.exports = router;
