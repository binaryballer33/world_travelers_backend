import express from 'express'
import { registerUserController, loginUserController } from '../../controllers'

const userRouter = express.Router()

userRouter.post('/register', registerUserController)
userRouter.post('/login', loginUserController)

export default userRouter
