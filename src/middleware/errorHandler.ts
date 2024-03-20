import { Request, Response, NextFunction } from 'express'
import { Prisma } from '@prisma/client'
import { ZodError } from 'zod'
import {
  HttpException,
  InternalException,
  PrismaException,
  ValidationException,
} from '../utils/exceptions'
import JsonSyntaxException from '../utils/exceptions/JsonSyntaxException'

function errorHandler(error: any, _req: Request, res: Response, _next: NextFunction) {
  let exception

  // Handle Common Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      // Unique Constraint Error
      exception = new PrismaException('A Record With This Unique Field Already Exists', error)
    } else if (error.code === 'P2003') {
      // FK Constraint Error
      exception = new PrismaException('FK Constraints, Action Needed Before Req Can Happen', error)
    } else if (error.code === 'P2025') {
      // Record Does Not Exist
      exception = new PrismaException('The Record You Are Trying To Access Does Not Exist', error)
    } else {
      // Other Prisma Errors
      exception = new PrismaException('An Unexpected Error Occurred', error)
    }
  } else if (error instanceof HttpException) {
    // Handle Common Http Errors
    exception = error
  } else if (error instanceof ZodError) {
    exception = new ValidationException('Request Body Validation Error.', error)
  } else if (error instanceof SyntaxError && 'body' in error) {
    exception = new JsonSyntaxException('Malformed JSON In Request Body', error)
  } else {
    // Other Backend / Prisma Errors
    exception = new InternalException('An Unexpected Error Occurred', error)
  }

  // Return The Error To The User
  return res.status(exception.status).json({
    ...exception,
    message: exception.message,
    errorStack: error.stack,
    error: error,
    exception: exception,
  })
}

export default errorHandler
