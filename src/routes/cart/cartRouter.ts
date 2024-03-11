import express from 'express'
import { ROUTE } from '../../utils/constants'
import {
  createCartController,
  getCartController,
  updateCartTotalController,
  deleteCartController,
} from '../../controllers'

const cartRouter = express.Router()

cartRouter.post(ROUTE.CREATE_CART, createCartController)
cartRouter.get(ROUTE.GET_CART, getCartController)
cartRouter.put(ROUTE.UPDATE_CART_TOTAL, updateCartTotalController)
cartRouter.delete(ROUTE.DELETE_CART, deleteCartController)

export default cartRouter
