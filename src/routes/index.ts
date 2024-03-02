import express from 'express'
import userRouter from './userRoute'
import tripRouter from './tripRoute'

const allRoutesRouter = express.Router()

allRoutesRouter.use('/user', userRouter)
allRoutesRouter.use('/trips', tripRouter)

export default allRoutesRouter
