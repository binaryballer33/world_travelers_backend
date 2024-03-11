import express from 'express'
import { ROUTE } from '../../utils/constants'
import {
  createCartItemController,
  deleteAllCartItemsByCartIdController as deleteAllCartItemsController,
  deleteCartItemController,
} from '../../controllers'
import { protectedRoute } from '../../middleware'

const cartItemRouter = express.Router()

cartItemRouter.post(ROUTE.CREATE_CART_ITEM, protectedRoute, createCartItemController)
cartItemRouter.delete(ROUTE.DELETE_ALL_CART_ITEMS, protectedRoute, deleteAllCartItemsController)
cartItemRouter.delete(ROUTE.DELETE_CART_ITEM, protectedRoute, deleteCartItemController)

export default cartItemRouter
