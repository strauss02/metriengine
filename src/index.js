import express from 'express'
import { config } from 'dotenv'
import { getAcceptanceRates, getRawHtml } from './TAU/fetchingUtils.js'
const app = express()

config()

app.post('/', async (req, res) => {
  const grades = req.body

  const results = await getAcceptanceRates()

  res.send(results)
})

app.get('/api/get_rates/all', async (req, res) => {
  const grades = req.query

  const results = await getAcceptanceRates(110, 800)

  res.send(results)
})

app.post('/raw', async (req, res) => {
  const grades = req.body

  const results = await getRawHtml()

  res.send(results)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, console.log(`Server listening on port ${PORT}`))
