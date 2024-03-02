import prisma from '..'
import User from '../../models/userModel'

/* Creates A New User In The Database */
const createUser = async (user: User) => {
  try {
    // create and return the user
    const createdUser = await prisma.user.create({ data: user })
    return createdUser
  } catch (error) {
    throw error
  }
}

export default createUser
