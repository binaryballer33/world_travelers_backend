import { NextFunction, Request, Response } from 'express'
import { createCartByUserId } from '../../services'

// Create A New Purchase Confirmation Email
const createCartController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cart = await createCartByUserId(req.user!.id)

    res.status(200).json({
      status: res.statusCode,
      message: `Cart Created For User: ${req.user!.firstName} ${req.user!.lastName}`,
      cart,
    })
  } catch (error) {
    next(error)
  }
}

export default createCartController
