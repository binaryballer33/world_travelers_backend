import HttpException, { ErrorCode } from './HttpException'

class InternalException extends HttpException {
  constructor(message: string, error: any) {
    super(message, ErrorCode.INTERNAL_ERROR, 500, error)
  }
}

export default InternalException
