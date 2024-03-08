import { NextFunction, Request, Response } from 'express'
import { getTripsByUserId } from '../../services'

/*
 * Trip Route For Gettign Trips By User Id
 * input - user id from req.user
 * output - status code, success message, trips data
 */
const getTripsByUserIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const trips = await getTripsByUserId(req.user!.id)
    const firstName = req.user!.firstName
    const lastName = req.user!.lastName

    res.status(200).json({
      status: res.statusCode,
      message: `${trips.length} Trips Fetched Successfully For ${firstName} ${lastName}`,
      trips,
    })
  } catch (error) {
    next(error)
  }
}

export default getTripsByUserIdController
