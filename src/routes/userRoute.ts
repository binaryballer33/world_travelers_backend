import express from 'express'
import { createUserController } from '../controllers/user/createUserController'
import { loginUserController } from '../controllers/user/loginUserController'

const userRouter = express.Router()

userRouter.post('/register', createUserController)
userRouter.post('/login', loginUserController)

export default userRouter
