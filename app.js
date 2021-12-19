const express = require('express')
import path from 'path'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(new URL('.',import.meta.url).pathname.substring(1),"..\Public\index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})