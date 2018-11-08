const express = require('express')
const mongoose = require('mongoose')

const { PORT = 3002 } = process.env

mongoose.connect(`mongodb://db:27017/full_env`)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
  console.log('server2 connected to db!')
})

const app = express()

app.get('/', (req, res) => {
  res.send('server2')
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`)
})
