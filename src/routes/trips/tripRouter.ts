import express from 'express'
import {
  createTripController,
  deleteTripController,
  getAllTripsController,
  getTripsByUserIdController,
  updateTripController,
} from '../../controllers'

const tripRouter = express.Router()

tripRouter.post('/create/trip', createTripController)
tripRouter.get('/', getAllTripsController)
tripRouter.get('/user/:id', getTripsByUserIdController)
tripRouter.put('/update/trip/:id', updateTripController)
tripRouter.delete('/delete/trip/:id', deleteTripController)

export default tripRouter
