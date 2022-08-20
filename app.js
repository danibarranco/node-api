import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

dotenv.config()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`all ok on port: ${port}`)
})
