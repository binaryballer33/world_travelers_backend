import { NextFunction, Request, Response } from 'express'
import { deleteCartByUserId } from '../../services'

// Create A New Purchase Confirmation Email
const deleteCartController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cart = await deleteCartByUserId(req.user!.id)

    res.status(200).json({
      status: res.statusCode,
      message: `Cart Deleted For User: ${req.user!.firstName} ${req.user!.lastName}`,
      cart,
    })
  } catch (error) {
    next(error)
  }
}

export default deleteCartController
