import prisma from '..'
import User from '../../models/userModel'

/* Creates A New User In The Database */
const updateUser = async (userId: string, user: User) => {
  // create and return the user
  return await prisma.user.update({
    where: { id: userId },
    data: user,
  })
}

export default updateUser
