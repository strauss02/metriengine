import express from 'express'
import { config } from 'dotenv'
import { getAcceptanceRates, getRawHtml } from './fetchingUtils.js'
const app = express()

config()

app.post('/', async (req, res) => {
  const grades = req.body

  const results = await getAcceptanceRates()

  res.send(results)
})

app.post('/raw', async (req, res) => {
  const grades = req.body

  const results = await getRawHtml()

  res.send(results)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, console.log(`Server listening on port ${PORT}`))
