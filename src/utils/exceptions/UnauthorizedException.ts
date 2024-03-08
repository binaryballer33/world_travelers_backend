import HttpException, { ErrorCode } from './HttpException'

class UnauthorizedException extends HttpException {
  constructor(message: string, error?: any) {
    super(message, ErrorCode.UNAUTHORIZED_ERROR, 403, error)
  }
}

export default UnauthorizedException
