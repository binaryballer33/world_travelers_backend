import { ErrorCode, HttpException } from './HttpException'

export class NotFoundException extends HttpException {
  constructor(message: string, error?: any) {
    super(message, ErrorCode.DATA_NOT_FOUND_ERROR, 404, error)
  }
}
