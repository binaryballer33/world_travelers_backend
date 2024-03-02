import express from 'express'
import { userRouter, tripRouter } from './index'

const allRoutesRouter = express.Router()

allRoutesRouter.use('/user', userRouter)
allRoutesRouter.use('/trips', tripRouter)

export default allRoutesRouter
