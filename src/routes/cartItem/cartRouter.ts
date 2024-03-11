import express from 'express'
import { ROUTE } from '../../utils/constants'
import {
  createCartItemController,
  deleteAllCartItemsByCartIdController,
  deleteCartItemController,
} from '../../controllers'

const cartItemRouter = express.Router()

cartItemRouter.post(ROUTE.CREATE_CART_ITEM, createCartItemController)
cartItemRouter.delete(ROUTE.DELETE_ALL_CART_ITEMS, deleteAllCartItemsByCartIdController)
cartItemRouter.delete(ROUTE.DELETE_CART_ITEM, deleteCartItemController)

export default cartItemRouter
