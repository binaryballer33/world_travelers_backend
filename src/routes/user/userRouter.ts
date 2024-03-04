import express from 'express'
import {
  registerUserController,
  loginUserController,
  updateUserController,
  deleteUserController,
} from '../../controllers'
import { protectedRoute } from '../../middleware/middleware'

const userRouter = express.Router()

userRouter.post('/register', registerUserController)
userRouter.post('/login', loginUserController)
userRouter.put('/update/user/', protectedRoute, updateUserController)
userRouter.delete('/delete/user/', protectedRoute, deleteUserController)

export default userRouter
