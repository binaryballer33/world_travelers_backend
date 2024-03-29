import prisma from '..'
import User from '../../models/user/userModel'

// Creates A New User In The Database
const createUser = async (user: User) => {
  // create and return the user
  return await prisma.user.create({
    data: {
      ...user,
      cart: {
        create: {
          total: 0,
        },
      },
    },
    include: {
      trips: true,
      cart: true,
    },
  })
}

export default createUser
