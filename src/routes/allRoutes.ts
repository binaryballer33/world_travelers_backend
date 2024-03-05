import express from 'express'
import { userRouter, tripRouter, emailRouter } from './index'
import { ROUTE } from '../utils/constants'

const allRoutesRouter = express.Router()

allRoutesRouter.use(ROUTE.USER, userRouter)
allRoutesRouter.use(ROUTE.TRIPS, tripRouter)
allRoutesRouter.use(ROUTE.EMAIL, emailRouter)

export default allRoutesRouter
