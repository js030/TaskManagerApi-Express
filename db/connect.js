/** @format */

require('dotenv').config('MONGO_URI')
const mongoose = require('mongoose')

const connectionString = process.env.MONGO_URI

const connectDB = mongoose
	.connect(connectionString)
	.then(() => console.log('connected to mongodb... '))
	.catch((err) => console.log(err))

module.exports = {
	connectDB,
}
