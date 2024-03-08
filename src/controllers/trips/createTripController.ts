import { NextFunction, Request, Response } from 'express'
import { createTrip } from '../../services'
import { TripSchemaNoUserId } from '../../models/tripModel'

/*
 * Trip Route For Creating A New Trip
 * input - request body containing trip data
 * output - status code, success message, trip data
 */
const createTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // validate trip data before creating trip and throw error if req.body does not match schema
    const validatedTripData = TripSchemaNoUserId.parse(req.body)

    // create the trip
    if (!req.user) throw new Error("Can't Find User Matching This Token")
    const createdTrip = await createTrip({ ...validatedTripData, userId: req.user.id })

    // return trip data
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

export default createTripController
