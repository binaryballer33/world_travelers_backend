import { NextFunction, Request, Response } from 'express'
import { deleteCartItem } from '../../services'
import { CartItemIdSchema } from '../../models/cartItem/cartItemModel'

// Create A New Purchase Confirmation Email
const deleteCartItemController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = CartItemIdSchema.parse(req.body)

    const cartItem = await deleteCartItem(validatedData.id)

    // delete all cart items by cart id
    res.status(200).json({
      status: res.statusCode,
      message: `Cart Item Deleted By ${req.user!.firstName} ${req.user!.lastName}`,
      cartItem,
    })
  } catch (error) {
    next(error)
  }
}

export default deleteCartItemController
