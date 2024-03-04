import { NextFunction, Request, Response } from 'express'
import { updateUser } from '../../services'
import { UserSchemaOptional } from '../../models/userModel'
import { returnZodErrorMessage } from '../../utils/helperFunctions'
import bcrypt from 'bcrypt'

/*
 * User Route For Updating A User
 * input - request params containing user id and request body containing user infomation
 * output - status code, success message, token, and user data
 */
const updateTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    returnZodErrorMessage(UserSchemaOptional, req, res)

    // use the req.user.id that you got from the decoded token to update the user
    if (req.user && req.user.id) {
      // only update the password if it is provided, otherwise leave it as it is
      if (req.body.password) req.body.password = await bcrypt.hash(req.body.password, 10)
      const updatedUser = await updateUser(req.user.id, req.body)

      res.status(200).json({
        status: res.statusCode,
        message: `${updatedUser.firstName}, ${updatedUser.lastName} User Updated Successfully`,
        updatedUser: { ...updatedUser, password: '' },
      })
    } else {
      throw new Error('User Not Authorized To Update This User')
    }
  } catch (error) {
    next(error)
  }
}

export default updateTripController
