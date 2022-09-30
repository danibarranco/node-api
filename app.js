require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo')
const app = express()

app.use(cors())

// Can get json via request
app.use(express.json())

app.use(express.static('storage'))

const port = process.env.PORT || 3000

/**
 * Routes import
 */

app.use('/api', require('./routes'))

app.listen(port, () => {
  console.log(`all ok on port: ${port}`)
})

dbConnect()
