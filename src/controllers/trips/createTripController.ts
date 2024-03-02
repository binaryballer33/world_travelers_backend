import { NextFunction, Request, Response } from 'express'
import { createTrip } from '../../services'
import { TripSchema } from '../../models/tripModel'
import { fromZodError } from 'zod-validation-error'

/*
 * Trip Route For Creating A New Trip
 * input - request body containing trip data
 * output - status code, success message, trip data
 */
export const createTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // validate trip data before creating trip
    const parsedTrip = TripSchema.safeParse(req.body)

    // return error if trip data is invalid
    if (!parsedTrip.success) {
      console.error(`Invalid Trip Data Received From Frontend: ${fromZodError(parsedTrip.error)}`)

      return res.status(400).json({
        status: res.statusCode,
        message: `Invalid Trip Data Received From Frontend: ${fromZodError(parsedTrip.error)}`,
      })
    }

    // create the trip
    const createdTrip = await createTrip(req.body)

    // return  trip data
    res.status(200).json({
      status: res.statusCode,
      message: `Trip To ${createdTrip.city}, ${createdTrip.country} Created Successfully`,
      createdTrip,
    })
  } catch (error) {
    // pass error to error handling middleware
    next(error)
  }
}
