const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const userWithUsername = await User.findOne({ where: { username } }).catch(
    (err) => {
      console.log('Error: ', err);
    }
  );

  if (!userWithUsername)
    return res
      .status(400)
      .json({ message: 'Username or password does not match!' });

  if (userWithUsername.password !== password)
    return res
      .status(400)
      .json({ message: 'Username or password does not match!' });

  const jwtToken = jwt.sign(
    {
      id: userWithUsername.id,
      username: userWithUsername.username,
      fname: userWithUsername.f_name,
      lname: userWithUsername.l_name,
    },
    process.env.JWT_SECRET
  );

  res.json({
    message: `Welcome Back! ${userWithUsername.f_name}`,
    token: jwtToken,
  });
});

module.exports = router;
