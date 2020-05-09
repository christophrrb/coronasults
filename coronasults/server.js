require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')

const port = process.env.PORT || 3001;

//Frontend location
app.use(express.static(__dirname + "/dist/coronasults"));

//Make Other Requests go to Landing Page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname) + "/dist/coronasults/index.html");
});

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

//const subscribersRouter = require('./routes/subscribers')
//app.use('/subscribers', subscribersRouter)
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)
app.listen(3001, () => console.log('server started'))
