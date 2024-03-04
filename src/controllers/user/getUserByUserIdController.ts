import { NextFunction, Request, Response } from 'express'

/*
 * User Route For Getting A User By User Id
 * input - request params containing user id and request body containing user infomation
 * output - status code, success message, token, and user data
 */
const getUserByUserIdController = async (req: Request, res: Response, next: NextFunction) => {}

export default getUserByUserIdController
