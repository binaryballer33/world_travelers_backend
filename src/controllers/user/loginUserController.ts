import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { getUserByEmail } from '../../services'
import { createJwtToken } from '../../utils/helperFunctions'

/*
 * User Route For Login
 * input - request body containing user email and password
 * output - status code, success message, token, and user data
 */
const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body

    // check if email and password were sent
    if (!email || !password) {
      return res.status(400).json({
        status: res.statusCode,
        message: 'Please Enter Both A Email And Password',
      })
    }

    // see if the user exists in the db with the given email, if so return the user and their trips
    const foundUser = await getUserByEmail(email)

    // if user not found send error message
    if (!foundUser) {
      return res.status(400).json({
        message: 'Email Or Password Is Incorrect',
        status: res.statusCode,
      })
    }

    // compare user db password with input password
    const checkPassword = await bcrypt.compare(password, foundUser.password)

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
