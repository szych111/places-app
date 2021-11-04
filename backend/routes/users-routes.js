const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const usersController = require('../controllers/users-controller')

router.get('/', usersController.getUSers)

router.post('/signup', [
    check('name').isLength({min: 2}),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6})
], usersController.signup)

router.post('/login', usersController.login)

module.exports = router