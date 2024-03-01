import { Request, Response, NextFunction } from 'express'
import { Prisma } from '@prisma/client'

export const errorHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
  // Handle Prisma errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Unique constraint error
    if (err.code === 'P2002') {
      console.error(err.stack, err.meta)
      return res
        .status(400)
        .json({ status: res.statusCode, message: 'A Record With This Unique Field Already Exists' })
    }
    // Other Prisma errors
    console.error(err.stack, err.meta)
    return res.status(500).json({ status: res.statusCode, message: 'A Database Error Occurred.' })
  }

  // Handle JSON parse errors
  if (err instanceof SyntaxError && 'body' in err) {
    // Handle malformed JSON error
    console.error(err.stack)
    return res
      .status(400)
      .json({ status: res.statusCode, message: 'Malformed JSON In Request Body.' })
  }

  // Handle general errors
  console.error(err.stack)
  return res.status(400).json({ status: res.statusCode, message: 'An Unexpected Error Occurred.' })
}
