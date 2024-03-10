import prisma from '..'

// Finds A User In The Database By Their User Id
const findUserById = async (id: string) => {
  // find user in user table and return the user
  return await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      trips: true,
      cart: true,
    },
  })
}

export default findUserById
