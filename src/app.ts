import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Create Express Application
const app = express()

// Load Environment Variables
dotenv.config()

// Logging Middleware
app.use(morgan('dev'))

// CORS Middleware
app.use(cors())

// JSON Body & Url Parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

export default app
