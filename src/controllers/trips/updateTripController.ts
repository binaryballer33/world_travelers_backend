import { NextFunction, Request, Response } from 'express'
import { updateTrip } from '../../services'
import { TripSchemaNoUserId } from '../../models/tripModel'

/*
 * Trip Route For Updating A Trip
 * input - request params containing trip id and request body containing trip data
 * output - status code, success message, trip data
 */
const updateTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // validate trip data before creating trip and throw error if req.body does not match schema
    const validatedTripData = TripSchemaNoUserId.parse(req.body)

    const { id } = req.params // get the trip id

    const updatedTrip = await updateTrip(id, { ...validatedTripData, userId: req.user!.id })

    res.status(200).json({
      status: res.statusCode,
      message: `${updatedTrip.city}, ${updatedTrip.country} Trip Updated Successfully`,
      updatedTrip,
    })
  } catch (error) {
    next(error) // pass error to error handling middleware
  }
}

export default updateTripController
