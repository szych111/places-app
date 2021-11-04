const express = require('express')
const placesRoutes = require('./routes/places-routes')
const usersRoutes = require('./routes/users-routes')
const HttpError = require('./models/http-error')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use('/api/places', placesRoutes)
app.use('/api/users', usersRoutes)

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404)
    throw error
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred'})
})


mongoose
.connect('mongodb+srv://alex:mongobongo!@cluster0.xroax.mongodb.net/places-app?retryWrites=true&w=majority')
.then(() => {
    app.listen(5000)
})
.catch(err => {
    console.log(err)
})

