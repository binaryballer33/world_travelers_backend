import { NextFunction, Request, Response } from 'express'
import { getAllVacationPackages } from '../../services'

/*
 * Vacation Package Route For Getting All The Vacation Packages
 * input - nothing
 * output - status code, success message, and vacation packages
 */
const profileUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const vacationPackages = await getAllVacationPackages() // get vacation packages from database

    return res.status(200).json({
      status: res.statusCode,
      message: `Retrived Vacation Packages`,
      vacationPackages: vacationPackages,
    })
  } catch (error) {
    // pass error to error handling middleware
    next(error)
  }
}

export default profileUserController
