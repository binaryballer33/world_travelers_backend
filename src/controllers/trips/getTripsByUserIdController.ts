import { NextFunction, Request, Response } from 'express'
import { getTripsByUserId } from '../../services'

/*
 * Trip Route For Gettign Trips By User Id
 * input - user id from req.user
 * output - status code, success message, trips data
 */
const getTripsByUserIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user && req.user.id) {
      const trips = await getTripsByUserId(req.user.id)
      const firstName = req.user.firstName
      const lastName = req.user.lastName

      res.status(200).json({
        status: res.statusCode,
        message: `${trips.length} Trips Fetched Successfully For ${firstName} ${lastName}`,
        trips,
      })
    } else {
      throw new Error('User Not Found, Unable To Fetch Trips.')
    }
  } catch (error) {
    next(error)
  }
}

export default getTripsByUserIdController
