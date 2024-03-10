import prisma from '..'
import User, { UserOptional } from '../../models/user/userModel'

/* Creates A New User In The Database */
const updateUser = async (userId: string, user: User | UserOptional) => {
  // create and return the user
  return await prisma.user.update({
    where: { id: userId },
    data: user,
    include: { trips: true },
  })
}

export default updateUser
