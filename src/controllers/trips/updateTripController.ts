import { NextFunction, Request, Response } from 'express'
import { getTripsByUserId, updateTrip } from '../../services'
import { TripSchema } from '../../models/tripModel'
import { returnZodErrorMessage } from '../../utils/helperFunctions'

/*
 * Trip Route For Updating A Trip
 * input - request params containing trip id and request body containing trip data
 * output - status code, success message, trip data
 */
const updateTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // validate trip data before creating trip and throw error if req.body does not match schema
    returnZodErrorMessage(TripSchema, req, res)

    if (req.user) {
      // checks to see if the authenticated user is the one making the request
      if (req.user.id !== req.body.userId)
        throw new Error('User Not Authorized To Update This Trip')

      const { id } = req.params // get the trip id

      /* TODO: change this logic to frontend once it's created, do one call after login/register to get all users trips
       * then check if the trip id is in the users trips, that way we don't have to make 2 calls to the database
       */

      // get all trips from the user
      const userTrips = await getTripsByUserId(req.user.id)

      // check if this trip id is one of the trips the user created
      const tripBelongsToUser = userTrips.some((trip) => trip.id === id)

      // if the trip belongs to the user update the trip
      if (tripBelongsToUser) {
        const updatedTrip = await updateTrip(id, req.body)

        res.status(200).json({
          status: res.statusCode,
          message: `${updatedTrip.city}, ${updatedTrip.country} Trip Updated Successfully`,
          updatedTrip,
        })
      } else {
        throw new Error('User Not Authorized To Update This Trip')
      }
    }
  } catch (error) {
    next(error)
  }
}

export default updateTripController
