import { NextFunction, Request, Response } from 'express'
import { CartSchema } from '../../models/cart/cartModel'
import { deleteAllCartItemsByCartId } from '../../services'

// Create A New Purchase Confirmation Email
const deleteAllCartItemsByCartIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validatedData = CartSchema.parse(req.body)

    const cartItems = await deleteAllCartItemsByCartId(validatedData.id)

    // delete all cart items by cart id
    res.status(200).json({
      status: res.statusCode,
      message: `All Cart Items Deleted For Cart: ${validatedData.id}`,
      cartItems,
    })
  } catch (error) {
    next(error)
  }
}

export default deleteAllCartItemsByCartIdController
