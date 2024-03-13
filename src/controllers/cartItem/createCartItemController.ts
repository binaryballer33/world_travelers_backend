import { NextFunction, Request, Response } from 'express'
import { createCartItem } from '../../services'
import { CreateCartItemSchema } from '../../models/cartItem/cartItemModel'

// Create A New Purchase Confirmation Email
const createCartItemController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validatedData = CreateCartItemSchema.parse(req.body)
    const { cart, trip } = validatedData

    const cartItem = await createCartItem(cart, trip as any)

    res.status(200).json({
      status: res.statusCode,
      message: `Cart Item Created For User: ${req.user!.firstName} ${req.user!.lastName}`,
      cartItem,
    })
  } catch (error) {
    console.log(error)

    next(error)
  }
}

export default createCartItemController
