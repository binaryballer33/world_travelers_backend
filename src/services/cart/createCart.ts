import prisma from '..'

const createCart = async (userId: string) => {
  return await prisma.cart.create({
    data: {
      userId,
      total: 0,
    },
  })
}

export default createCart
