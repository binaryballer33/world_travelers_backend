import express from 'express'
import {
  createTripController,
  deleteTripController,
  getTripsByUserIdController,
  updateTripController,
} from '../../controllers'
import { protectedRoute } from '../../middleware/middleware'

const tripRouter = express.Router()

tripRouter.get('/user/:id', protectedRoute, getTripsByUserIdController)
tripRouter.post('/create/trip', protectedRoute, createTripController)
tripRouter.put('/update/trip/:id', protectedRoute, updateTripController)
tripRouter.delete('/delete/trip/:id', protectedRoute, deleteTripController)

export default tripRouter
