const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.post('/', (req, res) => {
  const grades = req.body
})

const PORT = process.env.PORT || 3001
app.listen(PORT, console.log(`Server listening on port ${PORT}`))
