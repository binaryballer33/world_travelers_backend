import { NextFunction, Request, Response } from 'express'
import { getAllPopularTrips } from '../../services'

/*
 * Popular Trips Route For Getting All The Popular Trips
 * input - nothing
 * output - status code, success message, and popular trips
 */
const getAllPopularTripsController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const popularTrips = await getAllPopularTrips() // get popular trips from database

    return res.status(200).json({
      status: res.statusCode,
      message: `Retrived Popular Trips`,
      popularTrips: popularTrips,
    })
  } catch (error) {
    // pass error to error handling middleware
    next(error)
  }
}

export default getAllPopularTripsController
