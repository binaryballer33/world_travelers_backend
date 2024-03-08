import prisma from '..'
import User from '../../models/userModel'

// Creates A New User In The Database
const createUser = async (user: User) => {
  // create and return the user
  return await prisma.user.create({ data: user, include: { trips: true } })
}

export default createUser
