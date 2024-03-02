import express from 'express'
import { registerUserController } from '../controllers/user/registerUserController'
import { loginUserController } from '../controllers/user/loginUserController'

const userRouter = express.Router()

userRouter.post('/register', registerUserController)
userRouter.post('/login', loginUserController)

export default userRouter
