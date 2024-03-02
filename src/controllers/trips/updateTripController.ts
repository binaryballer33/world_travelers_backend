import { NextFunction, Request, Response } from 'express'
import { updateTrip } from '../../services'
import { TripSchema } from '../../models/tripModel'
import { fromZodError } from 'zod-validation-error'

/*
 * Trip Route For Creating A New Trip
 * input - request body containing trip data
 * output - status code, success message, trip data
 */
const updateTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const parsedTrip = TripSchema.safeParse(req.body)

    if (!parsedTrip.success) {
      console.error(`Invalid Trip Data Received From Frontend: ${fromZodError(parsedTrip.error)}`)

      return res.status(400).json({
        status: res.statusCode,
        message: `Invalid Trip Data Received From Frontend: ${fromZodError(parsedTrip.error)}`,
      })
    }

    const updatedTrip = await updateTrip(id, req.body)

    res.status(200).json({
      status: res.statusCode,
      message: `${updatedTrip.city}, ${updatedTrip.country} Trip Updated Successfully`,
      updatedTrip,
    })
  } catch (error) {
    next(error)
  }
}

export default updateTripController
