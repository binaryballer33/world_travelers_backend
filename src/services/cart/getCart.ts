import prisma from '..'

const getCart = async (userId: string) => {
  return await prisma.cart.findUnique({
    where: {
      userId,
    },
  })
}

export default getCart
