import prisma from '..'

const createCartByUserId = async (userId: string) => {
  return await prisma.cart.create({
    data: {
      userId,
      total: 0,
    },
  })
}

export default createCartByUserId
