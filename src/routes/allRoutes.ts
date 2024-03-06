import express from 'express'
import { userRouter, tripRouter, emailRouter, vacationPackageRouter } from './index'
import { ROUTE } from '../utils/constants'

const allRoutesRouter = express.Router()

allRoutesRouter.use(ROUTE.USER, userRouter)
allRoutesRouter.use(ROUTE.TRIPS, tripRouter)
allRoutesRouter.use(ROUTE.EMAIL, emailRouter)
allRoutesRouter.use(ROUTE.VACATION, vacationPackageRouter)

export default allRoutesRouter
