// const path = require('path')
// const meta = require('meta')
// const express = require('express')
import path from 'path'
import express from 'express'
import favicon from 'serve-favicon'

const app = express()

const DIR = new URL('.')
const PORT = 16000
const BASE = '';



app.get(`${BASE}/`, (req, res) => {
  res.sendFile(path.join(DIR,"/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})