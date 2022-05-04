/** @format */

const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const tasks = require('./routes/tasks')

//middleware

app.use(express.json())

// routes

app.get('/', (req, res) => {
	res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = app.listen(
	port,
	console.log(`server is listening on port ${port}...`)
)
