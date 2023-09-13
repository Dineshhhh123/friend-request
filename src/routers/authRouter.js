const express = require('express');
const router  = express.Router();

const authController = require('../controller/authController');

router.post('/api/users/register',authController.register);
router.post('/api/users/login',authController.login);

module.exports = router;