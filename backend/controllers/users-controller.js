const uuid = require('uuid/v4')
const HttpError = require('../models/http-error')
const { validationResult } = require('express-validator')

const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Gordon Brown',
        email: 'test@test.com',
        password: 'SuperGordon'
    }
]

const getUsers = (req, res, next) => {
    res.json({ users: DUMMY_USERS })
}

const signup = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log(errors)
        throw new HttpError('Invalid inputs passed, please check your data', 422)
    }
    const { name, email, password } = req.body

    const hasUser = DUMMY_USERS.find(u => u.email === email)
    if (hasUser) {
        throw new HttpError('Could not register user, email already exists', 422)
    }

    const registeredUser = {
        id: uuid(),
        name,
        email,
        password
    }
    DUMMY_USERS.push(registeredUser)
    res.status(201).json({user: registeredUser})
}

const login = (req, res, next) => {
    const { email, password } = req.body
    const identifiedUSer = DUMMY_USERS.find(u => u.email === email)

    if(!identifiedUSer || identifiedUSer.password !== password) {
        throw new HttpError('Could not identify user, credentials seem to be wrong', 401)
    }

    res.json({message: 'Logged in!'})
}

exports.signup = signup
exports.getUSers = getUsers
exports.login = login

