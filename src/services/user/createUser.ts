import prisma from '..'
import User from '../../models/usersModel'

/* Creates A New User In The Database */
export const createUser = async (user: User) => {
  try {
    // try to create a user
    const createdUser = await prisma.user.create({
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
      },
    })

    // return the created user
    return createdUser
  } catch (error) {
    throw error
  }
}
