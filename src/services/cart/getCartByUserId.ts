import prisma from '..'

const getCartByUserId = async (userId: string) => {
  return await prisma.cart.findUnique({
    where: {
      userId,
    },
  })
}

export default getCartByUserId
