import prisma from '..'

// Finds A User In The Database By Their Email
const getUserByEmail = async (email: string) => {
  // find user in user table and return the user
  return await prisma.user.findFirst({
    where: {
      email,
    },
    include: {
      trips: true,
      cart: true,
    },
  })
}

export default getUserByEmail
