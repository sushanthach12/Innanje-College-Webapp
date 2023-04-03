const express = require('express')
require('dotenv').config()

const port = process.env.PORT || 8000

const app = express()

app.use(express.json())

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected and Running at port : ', port);
    }
})