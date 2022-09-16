const express = require('express')
const path = require('path')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.json())
app.use(express.static(publicDirectoryPath))

// app.get('', (req, res) => {
//     res.render('index')
// })

module.exports = app
