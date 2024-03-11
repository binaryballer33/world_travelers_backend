import express from 'express'
import { popularTripsController } from '../../controllers'
import { ROUTE } from '../../utils/constants'

const popularTripsRouter = express.Router()

popularTripsRouter.get(ROUTE.POPULAR_TRIPS, popularTripsController)

export default popularTripsRouter
