import { NextFunction, Request, Response } from 'express'
import { updateUser } from '../../services'
import { UserSchema } from '../../models/userModel'
import { returnZodErrorMessage } from '../../utils/helperFunctions'

/*
 * User Route For Updating A User
 * input - request params containing user id and request body containing user infomation
 * output - status code, success message, token, and user data
 */
const updateTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    returnZodErrorMessage(UserSchema, req, res)

    const { id } = req.params
    const updatedUser = await updateUser(id, req.body)

    res.status(200).json({
      status: res.statusCode,
      message: `${updatedUser.firstName}, ${updatedUser.lastName} User Updated Successfully`,
      updatedUser,
    })
  } catch (error) {
    next(error)
  }
}

export default updateTripController
