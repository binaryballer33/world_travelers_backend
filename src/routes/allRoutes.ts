import express from 'express'
import { userRouter, tripRouter } from './index'
import { ROUTE } from '../utils/constants'

const allRoutesRouter = express.Router()

allRoutesRouter.use(ROUTE.USER, userRouter)
allRoutesRouter.use(ROUTE.TRIPS, tripRouter)

export default allRoutesRouter
