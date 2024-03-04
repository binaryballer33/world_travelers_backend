import { Request, Response, NextFunction } from 'express'
import { Prisma } from '@prisma/client'
import jwt from 'jsonwebtoken'

// Deny access if user is not logged in
export function protectedRoute(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1] // get the token from the headers

  if (!token) return res.status(400).json('You Must Be Logged In To Do That.') // don't allow access if no token

  // if token is present verify it and create req.user object for every request
  try {
    // return the user id from the token and add it to the req.user
    req.user = JSON.parse(JSON.stringify(jwt.verify(token, process.env.JWT as string) as string))
  } catch (error) {
    console.error(`There Was A Problem Accessing A Protected Route ${error}`)
    req.user = null // if unable to verify user not logged in
  }
  next() // move to next middleware
}

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  // Handle Common Prisma errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      // Unique constraint error
      console.error(err.stack, err.meta)

      return res.status(400).json({
        status: res.statusCode,
        message: `A Record With This Unique Field Already Exists ${JSON.stringify(err?.meta)}`,
      })
    } else if (err.code === 'P2003') {
      // FK Constraint Error
      console.error(err.stack, err.meta)

      return res.status(400).json({
        status: res.statusCode,
        message: `Request Has A Foreign Key That Doesn't Exist In The Database. ${JSON.stringify(err?.meta)}.`,
      })
    } else if (err.code === 'P2025') {
      // Record Does Not Exist
      console.error(err.stack, err.meta)

      return res.status(400).json({
        status: res.statusCode,
        message: `The Record You Are Trying To Access Does Not Exist. ${JSON.stringify(err?.meta)}.`,
      })
    }

    // Other Prisma Errors
    console.error(err.stack, err.meta)
    return res.status(500).json({
      status: res.statusCode,
      message: `A Database Error Occurred :${JSON.stringify(err?.meta)}`,
    })
  }

  // Handle JSON Parse Errors
  if (err instanceof SyntaxError && 'body' in err) {
    console.error(err.stack)
    return res
      .status(400)
      .json({ status: res.statusCode, message: `Malformed JSON In Request Body. ${err.stack}` })
  }

  // Handle General Errors
  console.error(err.stack)
  return res
    .status(400)
    .json({ status: res.statusCode, message: `An Unexpected Error Occurred ${err.stack}` })
}
