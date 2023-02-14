const express = require('express');
const { getUser } = require('../controllers/user.controllers');
const { isAuth } = require('../utils/authendication');

const router = express.Router();

router.get('/user', isAuth, getUser);

module.exports = router;