import { NextFunction, Request, Response } from 'express'
import { deleteTrip } from '../../services'

/*
 * Trip Route For Deleting A Trip
 * input - trip id
 * output - status code, success message, deleted trip data
 */
const deleteTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    const deletedTrip = await deleteTrip(id)

    res.status(200).json({
      status: res.statusCode,
      message: `${deletedTrip.city}, ${deletedTrip.country} Trip Deleted Successfully`,
      deletedTrip,
    })
  } catch (error) {
    next(error)
  }
}

export default deleteTripController
