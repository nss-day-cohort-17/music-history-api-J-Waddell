'use strict'

const { bookshelf } = require('../db/database')
const Song = require('../models/song')

module.exports.getShows = (req, res, next) => {
    Show.getAll()
    .then( (songs) => {
        res.status(200).json(songs)
    })
    .catch( (error) => {
        next(error)
    })
}

module.exports.getShow = ({params: {id}}, res, next) => {
    Song.getSingleSong(id)
    .then( (song) => {
        res.status(200).json(song)
    })
    .catch( (error) => {
        next(error)
    })
}

// <require a song model>
// < use model methods for getting all songs and one song then send the response back with the data>
// <stretch goal: methods for adding, deleting, editing a song>
