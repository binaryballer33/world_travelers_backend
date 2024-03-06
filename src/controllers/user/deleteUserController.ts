import { NextFunction, Request, Response } from 'express'
import { deleteUser } from '../../services'

/*
 * User Route For Deleting A User
 * input - request params containing user id
 * output - status code, success message, token, and user data
 */
const deleteUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // use the req.user.id that you got from the decoded token to delete the user
    if (req.user && req.user.id) {
      const deletedUser = await deleteUser(req.user.id)

      res.status(200).json({
        status: res.statusCode,
        message: `${deletedUser.firstName}, ${deletedUser.lastName} User Deleted Successfully`,
        deletedUser,
      })
    } else {
      throw new Error('User Not Authorized To Delete This User')
    }
  } catch (error) {
    next(error)
  }
}

export default deleteUserController
