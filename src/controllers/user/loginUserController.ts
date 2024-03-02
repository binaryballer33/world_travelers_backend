import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { findUserByEmail } from '../../services'

/*
 * User Route For Login
 * input - request body containing user email and password
 * output - status code, success message, token, and user data
 */
export const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body

    // check if email and password were sent
    if (!email || !password) {
      return res.status(400).json({
        status: res.statusCode,
        message: 'Please Enter Both A Email And Password',
      })
    }

    // see if the user exists in the db with the given email
    const foundUser = await findUserByEmail(email)

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

    // provide user with token so they do not need to log in after registering
    if (!process.env.JWT) throw new Error("JWT Secret Is Not Defined, Can't Issue Token")
    const token = jwt.sign({ id: foundUser.id }, process.env.JWT)

    // send token and user data, use to store into session storage
    // send back token and user data
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
