import { NextFunction, Request, Response } from 'express'
import { deleteTrip } from '../../services'

/*
 * Trip Route For Creating A New Trip
 * input - request body containing trip data
 * output - status code, success message, trip data
 */
const deleteTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const deletedTrip = await deleteTrip(id)

    res.status(200).json({
      status: res.statusCode,
      message: `${deletedTrip.city}, ${deletedTrip.country} Trip deleted successfully`,
      deletedTrip,
    })
  } catch (error) {
    next(error)
  }
}

export default deleteTripController
