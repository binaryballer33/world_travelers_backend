import express from 'express'
import { ROUTE } from '../../utils/constants'
import { createCartController, getCartController, deleteCartController } from '../../controllers'
import { protectedRoute } from '../../middleware'

const cartRouter = express.Router()

cartRouter.post(ROUTE.CREATE_CART, protectedRoute, createCartController)
cartRouter.get(ROUTE.GET_CART, protectedRoute, getCartController)
cartRouter.delete(ROUTE.DELETE_CART, protectedRoute, deleteCartController)

export default cartRouter
