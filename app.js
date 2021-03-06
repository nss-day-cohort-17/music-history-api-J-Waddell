'use strict'

// <Include the router index file>
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/')
let app = express();

// <Setup your routes middleware>
app.use(routes)

// <catch any undefined routes with a 404 middleware>√√√
app.use(function(req, res, next) {
    let err = new Error ('Not Found')
    err.status = 404
    next(err)
})

// <Handle any errors that occur in the routing with error handlers defined at the bottom of our√√√
// middleware stack>
app.use( (err, req, res, next) => {
    console.log("youz gotta error", err)
    res.status(err.status || 500)
    res.json({
        message: err.message,
        error: err
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`I've been to the port ${port}`)
})

module.exports = app

