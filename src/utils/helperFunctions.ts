import { UserWithId } from '../models/userModel'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './secrets'

/*
 * takes in a user object and creates a token from that user object
 * once this token is jwt.verified with the secret key it will return the user object
 *
 * @param user - the user object to create a token from
 */
export function createJwtToken(user: UserWithId) {
  const token = jwt.sign(
    {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: '1d' } // create a token that expires in 1 day
  )
  return token
}
