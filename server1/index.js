const express = require('express')

const app = express()
const { PORT = 3001 } = process.env

app.get('/', (req, res) => {
  res.send('server1')
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`)
})