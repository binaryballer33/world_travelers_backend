import prisma from '..'

/* Finds A User In The Database By Their Email */
const findUserByEmail = async (email: string) => {
  try {
    // find user in user table
    const foundUser = await prisma.user.findFirst({
      where: {
        email,
      },
    })
    // return the user
    return foundUser
  } catch (error) {
    throw error
  }
}

export default findUserByEmail
