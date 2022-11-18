const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema ({
    name: String,
    quantity: Number,
    color: String,
    description: String
})

const Collection = mongoose.model('collection', collectionSchema)

module.exports = Collection