import path from 'path'
import express from 'express'

const app = express()

const DIR = new URL('.',import.meta.url).pathname.substring(1)
const PORT = 16000
const BASE = ''



app.get(`${BASE}/`, (req, res) => {
  res.sendFile(path.join(DIR,"/index.html"))
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})