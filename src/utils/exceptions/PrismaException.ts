import { ErrorCode } from './HttpException'
import { Prisma } from '@prisma/client'

class PrismaException extends Error {
  message: string
  errorCode: ErrorCode
  status: number

  constructor(message: string, error: Prisma.PrismaClientKnownRequestError) {
    super(message)
    this.message = `${message} / ${error.meta?.modelName} ${error.meta?.cause}`
    this.errorCode = ErrorCode.DATABASE_ERROR
    this.status = 500
  }
}

export default PrismaException
