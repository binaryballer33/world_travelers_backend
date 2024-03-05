import express from 'express'
import {
  registerUserController,
  loginUserController,
  updateUserController,
  deleteUserController,
  profileUserController,
} from '../../controllers'
import { protectedRoute } from '../../middleware'
import { ROUTE } from '../../utils/constants'

const userRouter = express.Router()

userRouter.post(ROUTE.REGISTER, registerUserController)
userRouter.post(ROUTE.LOGIN, loginUserController)
userRouter.get(ROUTE.PROFILE, protectedRoute, profileUserController)
userRouter.put(ROUTE.UPDATE_USER, protectedRoute, updateUserController)
userRouter.delete(ROUTE.DELETE_USER, protectedRoute, deleteUserController)

export default userRouter
