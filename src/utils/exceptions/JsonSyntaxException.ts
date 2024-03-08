import { ErrorCode } from './HttpException'

class JsonSyntaxException extends Error {
  message: string
  errorCode: ErrorCode
  status: number
  error: any

  constructor(message: string, error: any) {
    super(message)
    this.message = message
    this.errorCode = ErrorCode.BAD_REQUEST_ERROR
    this.status = 400
    this.error = error
  }
}

export default JsonSyntaxException
