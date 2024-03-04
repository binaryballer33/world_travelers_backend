import prisma from '..'

// Deletes A User In The Database
const deleteUser = async (userId: string) => {
  // delete and return the user
  return await prisma.user.delete({ where: { id: userId } })
}

export default deleteUser
