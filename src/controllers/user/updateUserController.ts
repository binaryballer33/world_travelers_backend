import { NextFunction, Request, Response } from 'express'
import { updateUser } from '../../services'
import { UserSchemaOptional } from '../../models/user/userModel'
import { hashSync } from 'bcrypt'
import { createJwtToken } from '../../utils/helperFunctions'

/*
 * User Route For Updating A User
 * input - request params containing user id and request body containing user infomation
 * output - status code, success message, token, and user data
 */
const updateTripController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // validate user data before creating user and throw error if req.body does not match schema
    const validatedUserData = UserSchemaOptional.parse(req.body)

    // only update the password if it is provided, otherwise leave it as it is
    if (validatedUserData.password) {
      validatedUserData.password = hashSync(validatedUserData.password, 10)
    }

    // use the req.user.id that you got from the decoded token to update the user
    const updatedUser = await updateUser(req.user!.id, validatedUserData)
    const token = createJwtToken(updatedUser) // decoded token values will be different after updating user

    res.status(200).json({
      status: res.statusCode,
      message: `${updatedUser.firstName}, ${updatedUser.lastName} User Updated Successfully`,
      updatedUser: { ...updatedUser, password: '' },
      token,
    })
  } catch (error) {
    next(error)
  }
}

export default updateTripController
