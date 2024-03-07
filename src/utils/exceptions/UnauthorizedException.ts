import { ErrorCode, HttpException } from './HttpException'

export class UnauthorizedException extends HttpException {
  constructor(message: string, error?: any) {
    super(message, ErrorCode.UNAUTHORIZED_ERROR, 403, error)
  }
}
