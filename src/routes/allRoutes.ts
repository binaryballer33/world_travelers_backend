import express from 'express'
import {
  userRouter,
  tripRouter,
  emailRouter,
  popularTripsRouter,
  cartRouter,
  cartItemRouter,
} from './index'
import { ROUTE } from '../utils/constants'

const allRoutesRouter = express.Router()

allRoutesRouter.use(ROUTE.USER, userRouter)
allRoutesRouter.use(ROUTE.TRIPS, tripRouter)
allRoutesRouter.use(ROUTE.CART, cartRouter)
allRoutesRouter.use(ROUTE.CART_ITEM, cartItemRouter)
allRoutesRouter.use(ROUTE.POPULAR, popularTripsRouter)
allRoutesRouter.use(ROUTE.EMAIL, emailRouter)

export default allRoutesRouter
