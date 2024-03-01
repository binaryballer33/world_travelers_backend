import prisma from '..'

/* Finds A User In The Database By Their Email */
export const findUserByEmail = async (email: string) => {
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
