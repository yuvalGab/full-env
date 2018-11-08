const express = require('express')

const app = express()
const { PORT = 3002 } = process.env

app.get('/', (req, res) => {
  res.send('server2')
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`)
})