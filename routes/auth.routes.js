const express = require('express');

const { register, signin, signout, forgotPassword, resetPassword } = require('../controllers/auth.controllers')

const route = express.Router();


route.post('/register', register);

route.post('/signin',signin);

route.get('/signout', signout);

route.post('/forgotPassword', forgotPassword);

route.post('/resetPassword', resetPassword);

module.exports = route;