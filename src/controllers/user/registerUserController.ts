import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createUser } from '../../services'
import { UserSchema } from '../../models/userModel'
import { fromZodError } from 'zod-validation-error'

/*
 * User Route For Registering New Users
 * input - request body containing user data
 * output - status code, success message, token, and user data
 */
const registerUserController = async (req: Request, res: Response, next: NextFunction) => {
  // validate user data before creating user
  const parsedUser = UserSchema.safeParse(req.body)

  if (!parsedUser.success) {
    console.error(`Invalid User Data Received From Frontend: ${fromZodError(parsedUser.error)}`)

    return res.status(400).json({
      status: res.statusCode,
      message: `Invalid User Data Received From Frontend: ${fromZodError(parsedUser.error)}`,
    })
  }

  try {
    // hash the password before storing it in the db
    req.body.password = await bcrypt.hash(req.body.password, 10)

    // add new user into db, req body should contain firstName, lastName, email, and password
    const createdUser = await createUser(req.body)

    // provide user with token so they do not need to log in after registering
    if (!process.env.JWT) throw new Error("JWT Secret Is Not Defined, Can't Issue Token")
    const token = jwt.sign({ id: createdUser.id }, process.env.JWT)

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
