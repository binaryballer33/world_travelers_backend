import express from 'express'
import {
  createTripController,
  deleteTripController,
  getTripsByUserIdController,
  updateTripController,
} from '../../controllers'
import { protectedRoute } from '../../middleware'
import { ROUTE } from '../../utils/constants'

const tripRouter = express.Router()

tripRouter.get(ROUTE.GET_TRIP_BY_USER_ID, protectedRoute, getTripsByUserIdController)
tripRouter.post(ROUTE.CREATE_TRIP, protectedRoute, createTripController)
tripRouter.put(ROUTE.UPDATE_TRIP, protectedRoute, updateTripController)
tripRouter.delete(ROUTE.DELETE_TRIP, protectedRoute, deleteTripController)

export default tripRouter
