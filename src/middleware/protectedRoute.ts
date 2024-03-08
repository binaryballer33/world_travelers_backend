import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../utils/secrets'
import { UnauthorizedException } from '../utils/exceptions'

// Deny access if user is not logged in
function protectedRoute(req: Request, _res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1] // get the token from the headers

  if (!token) throw new UnauthorizedException('Unauthorized, Must Be Logged In')

  // if token is present verify it and create req.user object for every request
  try {
    // return the user information from the token and set it to req.user
    req.user = jwt.verify(token!, JWT_SECRET) as any
  } catch (error) {
    req.user = null // if unable to verify user not logged in

    throw new UnauthorizedException(
      `There Was A Problem With Your Token When Accessing A Protected Route ${error}`
    )
  }
  next() // move to next middleware
}

export default protectedRoute
