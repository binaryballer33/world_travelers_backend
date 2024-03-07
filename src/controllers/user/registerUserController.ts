import { NextFunction, Request, Response } from 'express'
import { hashSync } from 'bcrypt'
import { createUser } from '../../services'
import { UserSchema } from '../../models/userModel'
import { createJwtToken } from '../../utils/helperFunctions'

/*
 * User Route For Registering New Users
 * input - request body containing user data
 * output - status code, success message, token, and user data
 */
const registerUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // validate user data before creating user and throw error if req.body does not match schema
    const validatedUserData = UserSchema.parse(req.body)

    // hash the password before storing it in the db
    const createdUser = await createUser({
      ...validatedUserData,
      password: hashSync(validatedUserData.password, 10),
    })

    // provide user with token so they do not need to log in after registering
    const token = createJwtToken(createdUser)

    // send back token and user data
    res.status(200).json({
      status: res.statusCode,
      message: `Account Registration Successful For User: ${createdUser.firstName} ${createdUser.lastName}`,
      token,
      user: { ...createdUser, password: '' }, // don't send real password back
    })
  } catch (error) {
    // pass error to error handling middleware
    next(error)
  }
}

export default registerUserController
