import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../utils/secrets'

// Deny access if user is not logged in
function protectedRoute(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1] // get the token from the headers

  if (!token) return res.status(400).json('You Must Be Logged In To Do That.') // don't allow access if no token

  // if token is present verify it and create req.user object for every request
  try {
    // return the user id from the token and add it to the req.user
    req.user = JSON.parse(JSON.stringify(jwt.verify(token, JWT_SECRET)))
    // TODO: if this breaks its becaues of the line above switch to the line below
    // req.user = JSON.parse(JSON.stringify(jwt.verify(token, process.env.JWT as string) as string))
    // can replace the above line with the line below
    // learned this here: https://www.youtube.com/watch?v=6-mGtUyfGLw
    // req.user = JSON.parse(JSON.stringify(jwt.verify(token, process.env.JWT!)!))
  } catch (error) {
    console.error(`There Was A Problem Accessing A Protected Route ${error}`)
    req.user = null // if unable to verify user not logged in
    throw new Error('There Was A Problem With Your Token When Accessing A Protected Route')
  }
  next() // move to next middleware
}

export default protectedRoute