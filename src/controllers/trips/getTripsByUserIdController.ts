import { NextFunction, Request, Response } from 'express'
import { getTripsByUserId } from '../../services'

/*
 * Trip Route For Gettign Trips By User Id
 * input - user id from request params
 * output - status code, success message, trips data
 */
const getTripsByUserIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const trips = await getTripsByUserId(id)

    res.status(200).json({
      status: res.statusCode,
      message: `${trips.length} Trips fetched successfully`,
      trips,
    })
  } catch (error) {
    next(error)
  }
}

export default getTripsByUserIdController
