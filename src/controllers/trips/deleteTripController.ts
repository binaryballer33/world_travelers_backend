import { NextFunction, Request, Response } from 'express'
import { deleteTrip, getTripsByUserId } from '../../services'

/*
 * Trip Route For Deleting A Trip
 * input - trip id
 * output - status code, success message, deleted trip data
 */
const deleteTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user) {
      const { id } = req.params

      /* TODO: change this logic to frontend once it's created, do one call after login/register to get all users trips
       * then check if the trip id is in the users trips, that way we don't have to make 2 calls to the database
       */

      // get all trips from the user
      const userTrips = await getTripsByUserId(req.user.id)

      // check if this trip id is one of the trips the user created
      const tripBelongsToUser = userTrips.some((trip) => trip.id === id)

      console.log('req.user', req.user)
      console.log('tripBelongsToUser', tripBelongsToUser)
      console.log('userTrips', userTrips)

      // if the trip belongs to the user update the trip
      if (tripBelongsToUser) {
        const deletedTrip = await deleteTrip(id)

        res.status(200).json({
          status: res.statusCode,
          message: `${deletedTrip.city}, ${deletedTrip.country} Trip Deleted Successfully`,
          deletedTrip,
        })
      } else {
        throw new Error('User Not Authorized To Delete This Trip')
      }
    }
  } catch (error) {
    next(error)
  }
}

export default deleteTripController
