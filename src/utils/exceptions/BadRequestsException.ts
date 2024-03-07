import { ErrorCode, HttpException } from './HttpException'

export class BadRequestsException extends HttpException {
  constructor(message: string, error?: any) {
    super(message, ErrorCode.BAD_REQUEST_ERROR, 400, error)
  }
}
