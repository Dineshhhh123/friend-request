const express = require('express');
const router = express.Router();

const AuthController = require('../controller/authController');
const validator = require('../middlewares/Validation')
const authController = new AuthController();


router.post('/api/users/register', validator.validateSignup, authController.register);
router.post('/api/users/login', validator.validateLogin, authController.login);

module.exports = router;