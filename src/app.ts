import morgan from 'morgan'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import allRoutesRouter from './routes/allRoutes'
import { errorHandler } from './middleware'

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

// Add all the routes to the app
app.use('/', allRoutesRouter)

// Error handling middleware, make sure it's the last middleware added
app.use(errorHandler)

export default app
