import { NextFunction, Request, Response } from 'express'

// Create A New Purchase Confirmation Email
const deleteAllCartItemsByCartIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (error) {
    next(error)
  }
}

export default deleteAllCartItemsByCartIdController