import { NextFunction, Request, Response } from 'express'
import { getCartByUserId } from '../../services'

// Create A New Purchase Confirmation Email
const getCartController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cart = await getCartByUserId(req.user!.id)

    res.status(200).json({
      status: res.statusCode,
      message: `Cart Retrieved For User: ${req.user!.firstName} ${req.user!.lastName}`,
      cart,
    })
  } catch (error) {
    next(error)
  }
}

export default getCartController
