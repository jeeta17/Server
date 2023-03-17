const mongoose = require('mongoose')

const schema = mongoose.Schema;

const appSchema = new schema({
    name: String,
    age: Number,
    time: String
})

const Main = mongoose.model('app', appSchema)

module.exports = Main