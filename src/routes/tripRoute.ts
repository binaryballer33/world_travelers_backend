import express from 'express'
import { createTripController } from '../controllers/trips/createTripController'

const tripRouter = express.Router()

tripRouter.post('/create/trip', createTripController)

export default tripRouter
