import { NextFunction, Request, Response } from 'express'
import { getTripsByUserId, getUserById } from '../../services'

/*
 * User Route For Getting The User Profile
 * input - req.user object
 * output - status code, success message, user trips, and user data
 */
const profileUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user && req.user.id) {
      const user = await getUserById(req.user.id) // get user information from database
      const firstName = user?.firstName
      const lastName = user?.lastName
      const userTrips = await getTripsByUserId(req.user.id) // get user trips from database

      return res.status(200).json({
        status: res.statusCode,
        message: `Retrived Profile For User: ${firstName} ${lastName}`,
        user: { ...user, password: '' }, // don't send real password back
        trips: userTrips,
      })
    }
  } catch (error) {
    // pass error to error handling middleware
    next(error)
  }
}

export default profileUserController
