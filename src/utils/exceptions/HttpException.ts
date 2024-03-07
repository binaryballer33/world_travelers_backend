// message, status code, error codes, error
export class HttpException extends Error {
  message: string
  errorCode: ErrorCode
  statusCode: number
  errors: ErrorCode

  constructor(message: string, errorCode: ErrorCode, statusCode: number, error: any) {
    super(message)
    this.message = message
    this.errorCode = errorCode
    this.statusCode = statusCode
    this.errors = error
  }
}

export enum ErrorCode {
  ALREADY_EXISTS_ERROR = 'ALREADY_EXISTS_ERROR',
  INVALID_CREDENTIALS_ERROR = 'INVALID_CREDENTIALS_ERROR',
  BAD_REQUEST_ERROR = 'BAD_REQUEST_ERROR',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  UNAUTHORIZED_ERROR = 'UNAUTHORIZED_ERROR',
  DATA_NOT_FOUND_ERROR = 'DATA_NOT_FOUND_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
}
