import HttpException, { ErrorCode } from './HttpException'

class ValidationException extends HttpException {
  constructor(message: string, error: any) {
    super(message, ErrorCode.VALIDATION_ERROR, 422, error)
  }
}

export default ValidationException
