import { NextFunction, Request, Response } from 'express'
import { getAllTrips } from '../../services'

/*
 * Trip Route For Creating A New Trip
 * input - request body containing trip data
 * output - status code, success message, trip data
 */
const getAllTripsController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    // get all trips
    const trips = await getAllTrips()

    // return  trip data
    res.status(200).json({
      status: res.statusCode,
      message: `${trips.length} Trips Retrieved Successfully`,
      trips,
    })
  } catch (error) {
    // pass error to error handling middleware
    next(error)
  }
}

export default getAllTripsController
