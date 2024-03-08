import HttpException, { ErrorCode } from './HttpException'

class BadRequestsException extends HttpException {
  constructor(message: string, error?: any) {
    super(message, ErrorCode.BAD_REQUEST_ERROR, 400, error)
  }
}

export default BadRequestsException
