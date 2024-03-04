// add the user object to the express request
interface IUSer {
  id: string
  firstName: string
  lastName: string
  email: string
}

declare namespace Express {
  export interface Request {
    user: IUSer | null
  }
}
