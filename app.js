const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.listen(5000, () => console.log('connected to Ranjeet'))

app.get('/', (req, res) => {
    res.sendFile('./countries.json', {root: __dirname})
})
