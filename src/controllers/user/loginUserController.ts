import { NextFunction, Request, Response } from 'express'
import { compareSync } from 'bcrypt'
import { getUserByEmail } from '../../services'
import { createJwtToken } from '../../utils/helperFunctions'
import { UserLoginCredentialsSchema } from '../../models/user/userModel'

/*
 * User Route For Login
 * input - request body containing user email and password
 * output - status code, success message, token, and user data
 */
const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // validate user data before creating user and throw error if req.body does not match schema
    const validatedLoginCredentials = UserLoginCredentialsSchema.parse(req.body)
    const { email, password } = validatedLoginCredentials

    // see if the user exists in the db with the given email, if so return the user and their trips
    const foundUser = await getUserByEmail(email)

    // if user not found send error message
    if (!foundUser) {
      return res.status(400).json({
        message: 'Email Or Password Is Incorrect',
        status: res.statusCode,
      })
    }

    // compare user db password with validated req body password
    const checkPassword = compareSync(password, foundUser.password)

    // if password don't match send error message
    if (!checkPassword) {
      return res.status(400).json({
        message: 'Username Or Password Is Incorrect',
        status: res.statusCode,
      })
    }

    // provide user with token after logging in
    const token = createJwtToken(foundUser)

    // send token and user data, use to store into session storage
    res.status(200).json({
      status: res.statusCode,
      message: `Login Successful For User: ${foundUser.firstName} ${foundUser.lastName}`,
      token,
      user: { ...foundUser, password: '' }, // don't send real password back
    })
  } catch (error) {
    // pass error to error handling middleware
    next(error)
  }
}

export default loginUserController
