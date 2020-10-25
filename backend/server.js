const express = require('express')
const app = express()
const port = 5000

app.get('/api/getMessage', (req, res) => {
  res.send('Hello from server')
})

app.listen(port, () => {
  console.log(`I am listening at http://localhost:${port}`)
})