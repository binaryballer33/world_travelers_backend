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
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  USER_ALREADY_EXISTS = 'USER_ALREADY_EXISTS',
  INCORRECT_PASSWORD = 'INCORRECT_PASSWORD',
  ADDRESS_NOT_FOUND = 'ADDRESS_NOT_FOUND',
  CLIENT_ERROR = 'CLIENT_ERROR',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
  TRIP_NOT_FOUND = 'TRIP_NOT_FOUND',
}
