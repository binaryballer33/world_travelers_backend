import { NextFunction, Request, Response } from 'express'

/*
 * User Route For Deleting A User
 * input - request params containing user id and request body containing user infomation
 * output - status code, success message, token, and user data
 */
const deleteUserController = async (req: Request, res: Response, next: NextFunction) => {}

export default deleteUserController
