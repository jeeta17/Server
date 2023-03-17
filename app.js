const express = require('express')

const app = express()

app.listen(5000, () => console.log('connected'))

app.get('/', (req, res) => {
    res.send('<p>Connected to Database<p>')
})