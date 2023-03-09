require("dotenv-safe").config()
const express = require("express");
const { PORT } = require("./constants")
const app = express()

app.use(express.json())
app.use('/books', require('./routes/books'))

app.get('/', (req, res, next) => {
    res.end("Get request to index.js")
})

app.post('/', (req, res, next) => {
    res.end("Post request to index.js")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

