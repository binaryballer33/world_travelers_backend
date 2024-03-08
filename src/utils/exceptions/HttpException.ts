// message, status code, error codes, error
class HttpException extends Error {
  message: string
  errorCode: ErrorCode
  status: number

  constructor(message: string, errorCode: ErrorCode, statusCode: number, error: any) {
    // create a custom error message
    const errorIssues = error?.issues
    const extendedMessage = errorIssues
      ? ` Field '${errorIssues[0]?.path[0]}' Type ${errorIssues[0]?.expected} ${errorIssues[0]?.message}`
      : ''

    if (error?.issues) {
    }
    super(message)
    this.message = `${message} ${extendedMessage}`
    this.errorCode = errorCode
    this.status = statusCode
  }
}

export default HttpException

export enum ErrorCode {
  ALREADY_EXISTS_ERROR = 'ALREADY_EXISTS_ERROR',
  INVALID_CREDENTIALS_ERROR = 'INVALID_CREDENTIALS_ERROR',
  BAD_REQUEST_ERROR = 'BAD_REQUEST_ERROR',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
  UNAUTHORIZED_ERROR = 'UNAUTHORIZED_ERROR',
  DATA_NOT_FOUND_ERROR = 'DATA_NOT_FOUND_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  PRISMA_ERROR = 'PRISMA_ERROR',
}
