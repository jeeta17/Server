const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const Main = require('./Main');

const app = express()

const dbURI = 'mongodb+srv://rinku:pass123@cluster0.xzopc0o.mongodb.net/App?retryWrites=true&w=majority';


app.use(cors())

mongoose.connect(dbURI)
    .then(result => {
        app.listen(5000, () => console.log('connected to Ranjeet'))
    }).catch(err => console.log(err))


app.get('/', (req, res) => {

    const main = new Main({
        name: 'ranjeet',
        age: 49,
        time: new Date()
    })

    main.save()
        .then(() => {
            res.send({ 'name': 'sended to ranjeet singh rawat' })
        })
        .catch(err => console.log(err))
})