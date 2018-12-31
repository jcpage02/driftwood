const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
require('dotenv').config()

const app = express()

app.use(express.json())






massive(process.env.CONNECTION_STRING)
.then(connection => {
    app.set('db', connection)
    app.listen(process.env.SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})
.catch(err => console.log(err))

