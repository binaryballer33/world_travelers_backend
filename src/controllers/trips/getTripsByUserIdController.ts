import { NextFunction, Request, Response } from 'express'
import { getTripsByUserId } from '../../services'

/*
 * Trip Route For Creating A New Trip
 * input - request body containing trip data
 * output - status code, success message, trip data
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
