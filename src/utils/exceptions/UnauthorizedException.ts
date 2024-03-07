import { ErrorCode, HttpException } from './HttpException'

export class UnauthorizedException extends HttpException {
  constructor(message: string, errorCode: ErrorCode, errors?: any) {
    super(message, errorCode, 403, errors)
  }
}
