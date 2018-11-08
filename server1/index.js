const express = require('express')
const mongoose = require('mongoose')

const { PORT = 3001 } = process.env

mongoose.connect(`mongodb://db:27017/full_env`)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
  console.log('server1 connected to db!')
})

const app = express()

app.get('/', (req, res) => {
  res.send('server1')
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`)
})
