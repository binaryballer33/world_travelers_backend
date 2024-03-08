import HttpException, { ErrorCode } from './HttpException'
class NotFoundException extends HttpException {
  constructor(message: string, error?: any) {
    super(message, ErrorCode.DATA_NOT_FOUND_ERROR, 404, error)
  }
}

export default NotFoundException
