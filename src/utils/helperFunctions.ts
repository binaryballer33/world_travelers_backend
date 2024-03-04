import { Request, Response } from 'express'
import { SafeParseReturnType, ZodObject } from 'zod'
import { fromZodError } from 'zod-validation-error'
import { UserWithId } from '../models/userModel'
import jwt from 'jsonwebtoken'

/*
 * takes in a user object and creates a token from that user object
 * once this token is jwt.verified with the secret key it will return the user object
 *
 * @param user - the user object to create a token from
 */
export function createJwtToken(user: UserWithId) {
  const token = jwt.sign(
    {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    process.env.JWT as string
  )
  return token
}

/*
 * check the parse request body to see if it matches the zod schema
 * if it does not match send an error message to the user and to the console
 *
 * @param zodSchema - the zod schema to check the request body against
 *
 * @param req - the request object to check the request body against the zod schema
 *
 * @param res - the response object to send the error message to
 */
export function returnZodErrorMessage(zodSchema: ZodObject<any>, req: Request, res: Response) {
  const parsedRequestBody: SafeParseReturnType<any, any> = zodSchema.safeParse(req.body)

  // send error message to user and to console if invalid data received
  if (!parsedRequestBody.success) {
    console.error(`Invalid Data Received From Frontend: ${fromZodError(parsedRequestBody.error)}`)

    return res.status(400).json({
      status: res.statusCode,
      message: `Invalid Data Received From Frontend: ${fromZodError(parsedRequestBody.error)}`,
    })
  }
}
